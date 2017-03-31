$(document).ready(function () {
    initOnePage();
    $("#section-accueil").parallax("50%", 0.1);
    $("#section-mission").parallax("75%", 0.2);
    $("#section-pitch").parallax("50%", 0.2);
    $("#section-experimentation").parallax("50%", 0.2);
    $("#section-village").parallax("50%", 0.1);
    $("#section-partenaires").parallax("50%", 0.1);
    $("#section-contact").parallax("50%", 0.1);
});

function initOnePage() {
    $('#fullpage').fullpage(
        {
            sectionsColor: ['#4db7f9', '#a822c1', '#21a6b3', '#9c3e50', '€4ef5d1', '#ff2266', '#a2c130'],
            anchors: ['accueil', 'mission', 'pitch', 'experimentation', 'village', 'partenaires', 'contact'],
            menu: '#menu-right',
            navigation: true,
            navigationPosition: 'right',
            navigationTooltips: ['Accueil', 'Mission', 'Le pitch', "L'expérimentation", 'Le village', 'Les partenaires', 'Contact'],
            responsiveWidth: 900,
            scrollBar: true,
            fixedElements: '#fixed-header',
        }
    );
}