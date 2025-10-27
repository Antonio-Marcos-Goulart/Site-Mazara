$(document).ready(function() {
    // pega o caminho da página atual, ex: "index.html"
    const path = window.location.pathname.split("/").pop();

    // percorre todos os links do menu principal
    $('#nav_list .nav-item a, #mobile_nav_list .nav-item a').each(function() {
        const href = $(this).attr('href');

        // se o href for igual ao path da página atual, adiciona a classe 'active'
        if (href === path) {
            $(this).parent().addClass('active');
        }
    });
});
