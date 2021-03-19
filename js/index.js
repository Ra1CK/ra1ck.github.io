
// Arrancamos el controlador
$.controller.init("#panel_inicio");

/**
 * Código para hacer que se cierre sólo el menú al pulsar sobre él
 */
$('.navbar-nav li a').on('click', function () {
    if (!$(this).hasClass('dropdown-toggle')) {
        $('.navbar-collapse').collapse('hide');
    }
});
