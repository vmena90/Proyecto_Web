# Congreso Anual de Innovación 2026

Sitio web desarrollado para el Congreso Anual de Innovación Tecnológica 2026 de la Universidad de Talca. Este proyecto integra HTML5 semántico, estilos avanzados con CSS3 y manipulación del DOM mediante JavaScript, cumpliendo con los requerimientos de la Evaluación Nº 4.

## Características Principales
* **Estructura Semántica**: Uso correcto de etiquetas HTML5 (`<header>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`).
* **Diseño y Estilos (CSS)**: 
  * Aplicación del modelo de caja (box-model) y flexbox.
  * Posicionamiento CSS y pseudoelementos (ej: líneas decorativas).
  * Diseño responsivo mediante el uso de Media Queries (sin frameworks visuales).
  * Selectores avanzados, pseudoclases (`:hover`, `:focus`) y combinadores.
* **Interactividad (JavaScript)**: 
  * Captura y validación del formulario de inscripción.
  * Manejo de eventos (`addEventListener` y `preventDefault`).
  * Código modularizado en funciones separadas y bien documentadas.

## Instrucciones de Ejecución
Para visualizar e interactuar con el proyecto en un entorno local, siga estos sencillos pasos:

1. **Clonar el repositorio** (o descargar los archivos `.zip`):
   ```bash
   git clone <url-del-repositorio>
   ```

2. **Abrir el proyecto**:
   Navegue hasta la carpeta del proyecto en su computadora (`Proyecto_Web`). Abra el archivo principal `index.html` en cualquier navegador web moderno (Google Chrome, Mozilla Firefox, Safari, Microsoft Edge). 
   *Nota: Puede hacer doble clic directamente sobre el archivo `index.html` o arrastrarlo hacia una ventana en blanco de su navegador.*

3. **Interacción**:
   * Utilice la barra de navegación superior para desplazarse a las distintas secciones.
   * Diríjase a la sección "Inscripción al Evento". Complete el formulario con datos válidos y presione "Enviar Inscripción". 
   * Verá un mensaje interactivo (Alerta) generado por JavaScript confirmando la recepción de sus datos, demostrando la integración correcta del DOM y los eventos.

## Estructura de Archivos
* `index.html`: Contiene la maquetación semántica del sitio.
* `styles.css`: Hoja de estilos externa con toda la presentación visual y responsiva.
* `script.js`: Archivo externo con la lógica de interactividad y manejo de eventos.
