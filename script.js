
/* Función principal para inicializar todos los eventos de la página.*/
function inicializarEventos() {
    // 1. Filtros de agenda
    inicializarFiltros();

    // 2. Modal de expositores
    inicializarModal();

    // 3. Formulario (Mensaje dinámico)
    var formulario = document.querySelector('form');
    if (formulario) {
        formulario.addEventListener('submit', manejarEnvioFormulario);
    }

    //(Navegación activa)
    window.addEventListener('scroll', actualizarNavegacionActiva);
    
    // Llamada inicial para marcar la sección correcta si se recarga a mitad de página
    actualizarNavegacionActiva();
}

/* FILTROS PARA LA AGENDA */
function inicializarFiltros() {
    var botonesFiltro = document.querySelectorAll('.boton-filtro');
    var jornadas = document.querySelectorAll('.jornada');

    botonesFiltro.forEach(function(boton) {
        boton.addEventListener('click', function() {
            // Quitar clase activo de todos los botones
            botonesFiltro.forEach(b => b.classList.remove('activo'));
            // Agregar clase activo al botón clickeado
            this.classList.add('activo');

            var filtro = this.getAttribute('data-filtro');

            // Mostrar/Ocultar jornadas
            jornadas.forEach(function(jornada) {
                if (filtro === 'todos' || jornada.getAttribute('data-dia') === filtro) {
                    jornada.classList.remove('oculto');
                } else {
                    jornada.classList.add('oculto');
                }
            });
        });
    });
}

/* VENTANA PARA EXPOSITORES */
function inicializarModal() {
    var modal = document.getElementById('modal-expositor');
    var btnCerrar = document.getElementById('btn-cerrar-modal');
    var botonesPerfil = document.querySelectorAll('.boton-perfil');

    // Elementos dentro del modal
    var modalFoto = document.getElementById('modal-foto');
    var modalNombre = document.getElementById('modal-nombre');
    var modalBio = document.getElementById('modal-bio');

    if (!modal) return;

    // Abrir modal al hacer clic en ver perfil
    botonesPerfil.forEach(function(boton) {
        boton.addEventListener('click', function() {
            modalFoto.src = this.getAttribute('data-foto');
            modalNombre.textContent = this.getAttribute('data-nombre');
            modalBio.textContent = this.getAttribute('data-bio');
            modal.classList.remove('oculto');
        });
    });

    // Cerrar modal al hacer clic en la X
    btnCerrar.addEventListener('click', function() {
        modal.classList.add('oculto');
    });

    // Cerrar modal al hacer clic fuera del contenido
    window.addEventListener('click', function(evento) {
        if (evento.target === modal) {
            modal.classList.add('oculto');
        }
    });
}

/* Manejo del formulario */
function manejarEnvioFormulario(evento) {
    evento.preventDefault();
    var formulario = evento.target;
    var datosInscripcion = obtenerDatosFormulario();
    
    // Ocultamos el formulario
    formulario.classList.add('oculto');

    // Mostramos el mensaje dinámico
    var contenedorMensaje = document.getElementById('mensaje-exito');
    if (contenedorMensaje) {
        contenedorMensaje.innerHTML = `
            <h3>¡Inscripción Exitosa!</h3>
            <p>Gracias <strong>${datosInscripcion.nombre}</strong> por registrarte como <em>${datosInscripcion.rol}</em>.</p>
            <p>Se ha enviado un correo de confirmación a: <br> <strong>${datosInscripcion.email}</strong></p>
        `;
        contenedorMensaje.classList.remove('oculto');
    }
}

function obtenerDatosFormulario() {
    return {
        nombre: document.getElementById('nombre').value,
        email: document.getElementById('email').value,
        rol: document.getElementById('rol').value
    };
}

/* NAVEGACIÓN ACTIVA (SCROLLSPY) */
function actualizarNavegacionActiva() {
    var secciones = document.querySelectorAll('section');
    var enlacesNav = document.querySelectorAll('.enlace-nav');
    
    var posicionScroll = window.scrollY || document.documentElement.scrollTop;

    secciones.forEach(function(seccion) {
        // Obtenemos la posición de cada sección ajustada con un margen para la activación
        var seccionTop = seccion.offsetTop - 100;
        var seccionHeight = seccion.offsetHeight;
        var seccionId = seccion.getAttribute('id');

        if (posicionScroll >= seccionTop && posicionScroll < seccionTop + seccionHeight) {
            enlacesNav.forEach(function(enlace) {
                enlace.classList.remove('activo');
                if (enlace.getAttribute('href') === '#' + seccionId) {
                    enlace.classList.add('activo');
                }
            });
        }
    });
}

// Ejecutar inicialización
document.addEventListener('DOMContentLoaded', inicializarEventos);