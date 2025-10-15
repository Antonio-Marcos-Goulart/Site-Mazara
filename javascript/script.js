$(document).ready(function() { 
    $('#mobile_btn').click(function() {
        $('#mobile_menu_hamburguer').addClass('active');
    });

    $('#mobile_menu_hamburguer .close-btn').click(function() {
        $('#mobile_menu_hamburguer').removeClass('active');
    });
});
