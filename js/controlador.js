// fichero js/controlador.js

/**
 * Biblioteca "casera" para hacer el "binding" de
 * los menús con las diferentes vistas de la APP.
 * Para usarla, basta con poner el mismo id a la entrada 
 * del menú que a su vista asociada, pero cambiando el prefijo, 
 * el el menú debe ser menu_AAA y en la vista panel_AAA.
 */
$.controller = {};
// Propiedades del objeto:
// este atributo contiene el panel activo en cada momento
$.controller.active_panel = "";
// este atributo contiene el panel inicial o página de inicio para
// poder consultarlo en cualquier momento
$.controller.panel_inicial = "";

/**
 * Esta función gestiona qué panel está activo en cada momento (sólo puede
 * haber uno). Cambia de panel.
 * @param {type} panel_name el nombre del panel a activar
 */
$.controller.activate = function (panel_name) {
    // console.log("cambio old::"+$.controller.active_panel+" new::"+panel_name);
    $($.controller.active_panel).hide(1000);
    $(panel_name).show(1000);
    $.controller.active_panel = panel_name;
};


/**
 * Función para crear todos los "onClick" de los menús y
 * asociarlos con cada panel correspondiente.
 * @param {type} panel_inicial - el panel a mostrar al arrancar la APP
 */
$.controller.init = function (panel_inicial) {
    // console.log("Panel inicial="+panel_inicial);
    $('[id^="menu_"]').each(function () {
        var $this = $(this);
        var menu_id = $this.attr('id');
        var panel_id = menu_id.replace('menu_', 'panel_');

        $("#" + menu_id).click(function () {
            $.controller.activate("#" + panel_id);
        });
        // console.log("id_menu::" + menu_id + "  id_panel" + panel_id);
    });
    $("div.panel").hide();
    $(panel_inicial).show();
    $.controller.active_panel = panel_inicial;
    $.controller.panel_inicial = panel_inicial;
}

/**
 * Esta función nos lleva al panel inicial. Oculta el panel activo 
 * en ese momento y muestra sólo el panel inicial que se indicó en
 * $.controller.init()
 */
$.controller.index = function () {
    $.controller.activate($.controller.panel_inicial);
}

