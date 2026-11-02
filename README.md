# Portafolio de Yefferson Miranda

Página estática (HTML + CSS + JavaScript, sin instalar nada).

## Estructura
```
index.html        Estructura y SEO de la página
css/styles.css    Todo el diseño (colores y tipografía en la sección 1)
js/data.js        TODO EL CONTENIDO: textos, proyectos, habilidades, contacto
js/main.js        Arma la página con los datos (normalmente no se toca)
assets/           CV en PDF e imágenes
```

## Cómo editar
- Cambiar textos, agregar un proyecto o una habilidad: edita solo `js/data.js`.
- Cambiar colores o tipografías: `css/styles.css`, sección "1. Variables".
- Actualizar el CV: reemplaza `assets/CV_Yefferson_Miranda_Josec.pdf`.
- Agregar LinkedIn, Workana o Fiverr: descomenta `links` en `js/data.js`.

## Ver en tu computadora
Abre `index.html` con doble clic. (Las fuentes de Google necesitan internet.)

## Publicar gratis
- **GitHub Pages:** sube la carpeta a un repositorio, Settings > Pages > rama main.
- **Netlify** o **Vercel:** arrastra la carpeta y obtienes un enlace.
Después de publicar, cambia en `index.html` el título y la descripción si quieres,
y agrega la URL final en los metadatos (og:url).

## Ideas para seguir mejorando
- Capturas o demos de cada proyecto (carpeta `assets/`).
- Resultados con números reales en cada proyecto.
- Versión en inglés.
- Foto tuya en "Sobre mí".
