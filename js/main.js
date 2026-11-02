/* ==========================================================================
   main.js  ·  Lógica de la página
   --------------------------------------------------------------------------
   Lee los datos de data.js y arma la página. Normalmente NO necesitas editar
   este archivo; para cambiar contenido usa data.js.

   Organización:
   1. Utilidades pequeñas para crear elementos
   2. Render de cada sección (una función por sección)
   3. Curvas de nivel del hero (el único movimiento decorativo)
   4. Botón de copiar correo
   5. Arranque
   ========================================================================== */

(function () {
  "use strict";

  /* ---------- 1. Utilidades ---------- */

  // Crea un elemento: el("p", "clase", "texto")
  // Usa textContent (no innerHTML) para que ningún texto pueda inyectar código.
  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function byId(id) {
    return document.getElementById(id);
  }

  /* ---------- 2. Secciones ---------- */

  function renderHero() {
    byId("hero-place").textContent = SITE.location + ", a " + SITE.altitude;
    byId("hero-name").textContent = SITE.name;
    byId("hero-role").textContent = SITE.role;
    byId("hero-lead").textContent = SITE.heroLead;
    byId("cv-link").setAttribute("href", SITE.cvFile);
  }

  function renderAbout() {
    const box = byId("about-text");
    ABOUT.forEach(function (p) { box.appendChild(el("p", "", p)); });
  }

  // Filas desplegables para proyectos (research y freelance usan la misma función).
  // <details> es nativo del navegador: funciona con teclado y lector de pantalla.
  function renderRows(containerId, items) {
    const box = byId(containerId);
    items.forEach(function (item) {
      const details = el("details", "row");
      if (item.open) details.open = true;

      const summary = el("summary", "row__summary");
      const titles = el("span", "row__titles");
      titles.appendChild(el("h3", "row__title", item.title));
      titles.appendChild(el("span", "row__context", item.context));
      summary.appendChild(titles);
      summary.appendChild(el("span", "row__toggle"));
      details.appendChild(summary);

      const list = el("ul", "row__points");
      item.points.forEach(function (pt) { list.appendChild(el("li", "", pt)); });
      details.appendChild(list);

      box.appendChild(details);
    });
  }

  function renderSkills() {
    const dl = byId("skills-list");
    SKILLS.forEach(function (g) {
      const wrap = el("div", "skills__row");
      wrap.appendChild(el("dt", "", g.group));
      wrap.appendChild(el("dd", "", g.items.join(", ")));
      dl.appendChild(wrap);
    });
  }

  function renderEducation() {
    const ul = byId("education-list");
    EDUCATION.forEach(function (e) {
      const li = el("li");
      li.appendChild(el("strong", "", e.title));
      li.appendChild(el("span", "", e.detail));
      ul.appendChild(li);
    });
  }

  function renderContact() {
    byId("contact-title").textContent = CONTACT.title;
    byId("contact-text").textContent = CONTACT.text;
    byId("mail-link").setAttribute(
      "href",
      "mailto:" + SITE.email + "?subject=" + encodeURIComponent("Proyecto: consulta desde tu portafolio")
    );

    const ul = byId("contact-links");
    const links = [{ label: "GitHub", url: SITE.github }].concat(SITE.links || []);
    links.forEach(function (l) {
      const li = el("li");
      const a = el("a", "", l.label);
      a.href = l.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      li.appendChild(a);
      ul.appendChild(li);
    });

    byId("legal").textContent =
      "© " + new Date().getFullYear() + " " + SITE.fullName + ". " + SITE.location + ".";
  }

  /* ---------- 3. Curvas de nivel ----------
     Dibuja líneas de altitud como en un mapa topográfico: un guiño al
     Altiplano. Son óvalos deformados con senos; cambia los números de CENTROS
     para mover o agregar "cerros". Las líneas se "dibujan" una vez al cargar
     (y no se animan si el usuario pidió menos movimiento). */

  var CENTROS = [
    { x: 930, y: 300, r0: 40,  paso: 34, n: 16, fase: 0.4 },
    { x: 1120, y: 620, r0: 30, paso: 30, n: 11, fase: 2.1 },
    { x: 560, y: 760, r0: 30,  paso: 36, n: 8,  fase: 4.0 },
  ];

  function curva(c, i) {
    var pts = [];
    var radio = c.r0 + i * c.paso;
    var pasos = 120;
    for (var k = 0; k <= pasos; k++) {
      var t = (k / pasos) * Math.PI * 2;
      // La deformación crece con el radio, así las curvas exteriores serpentean más.
      var d = 1 + 0.13 * Math.sin(3 * t + c.fase + i * 0.18)
                + 0.07 * Math.sin(5 * t + c.fase * 2 - i * 0.12)
                + 0.04 * Math.sin(8 * t + i * 0.3);
      var x = c.x + Math.cos(t) * radio * 1.35 * d;
      var y = c.y + Math.sin(t) * radio * 0.95 * d;
      pts.push((k === 0 ? "M" : "L") + x.toFixed(1) + " " + y.toFixed(1));
    }
    return pts.join(" ") + " Z";
  }

  function renderContours() {
    var svg = byId("contours");
    var ns = "http://www.w3.org/2000/svg";
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var indice = 0;

    CENTROS.forEach(function (c) {
      for (var i = 0; i < c.n; i++) {
        var p = document.createElementNS(ns, "path");
        p.setAttribute("d", curva(c, i));
        p.setAttribute("pathLength", "1");
        // Cada quinta línea es "maestra" (más marcada), como en los mapas reales.
        p.setAttribute("class", "contour" + (i % 5 === 4 ? " contour--major" : ""));
        if (!reduce) p.style.animationDelay = (indice * 45) + "ms";
        svg.appendChild(p);
        indice++;
      }
    });
    if (reduce) svg.classList.add("is-static");
  }

  /* ---------- 4. Copiar correo ---------- */

  function setupCopy() {
    var btn = byId("copy-mail");
    var status = byId("copy-status");
    btn.addEventListener("click", function () {
      function ok() { status.textContent = "Correo copiado"; }
      function fail() { status.textContent = "No se pudo copiar: " + SITE.email; }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(SITE.email).then(ok, fail);
      } else {
        fail();
      }
      setTimeout(function () { status.textContent = ""; }, 3500);
    });
  }

  /* ---------- 5. Arranque ---------- */

  renderHero();
  renderAbout();
  renderRows("research-list", RESEARCH);
  renderRows("freelance-list", FREELANCE);
  renderSkills();
  renderEducation();
  renderContact();
  renderContours();
  setupCopy();
})();
