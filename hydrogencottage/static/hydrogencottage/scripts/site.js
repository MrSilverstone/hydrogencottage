/*
** @Todo: fadein title
** Center bubbles
*/


var circleCategories = [
  "Une ferme bio",
  "Agrotourisme",
  "Centre équestre",
  "Expérimentation hydrogene",
  "Accueil des associations"
];

var cicleParagraph = [
  { color: "#21468C", text: "Production maraichère<br/>Production de plantes médicinales<br/>Transformation et vente<br/>Apiculture<br/>Alimentation du restaurant" },
  { color: "#8BDB00", text: "Hébergements des stagiaires<br/>Restauration<br/>Sentiers pédestres<br/>Promenades  équestre<br/>Promenades vélo Hydrogène<br/>Activités sportives<br/>Découverte de la  Guadeloupe" },
  { color: "#D66060", text: "Poney club<br/>Pension<br/>Ferme d'élevage de shetland<br/>Activités équestres" },
  { color: "#1B4353", text: "Projet PITHA<br/>Production PV & Eolien  Stockage batteries<br/>Electrolyse H2<br/>Stockage H2<br/>Distribution  H2<br/>R&D (CEA/UA/EMN)" },
  { color: "#1D70A2", text: "Jardins populaires<br/>AJAD<br/>APIGUA<br/>ARMETIS<br/>Association locales lois 1901" },
]

var defaultText = { color: "#ffffff", text: "Autoconsommation alimentaire<br/>Autoconsommation énergétique<br/>Récupération d’eau<br/>Efficacité énergétique<br/>Gestion et recyclage des déchets<br/>Mobilité verte<br/>Pédagogie Formation<br/>Communication" };

var bI = 0;

function animateBubble(s) {

  /*
 setInterval(function () {
    s.fadeIn("slow", () => {

    });
*/

      s.html(arrayTest[bI]);
      s.fadeOut("slow");

    bI++;
    if (bI == 4)
      bI = 0;
    //animateBubble(s);
  //}, 2000);
}

$(document).ready(function () {
  initOnePage();

  $('#accueil-title').fadeIn(4000);

  $('.selector ul li').each((i, li) => {

    const label = $(li).children('label');
    const span = $(li).find('span');
    const checkbox = $(li).children('input');

    span.text(circleCategories[i]);
  });
});

function initBubble() {
  $('.selector ul li').each((i, li) => {
    const label = $(li).children('label');
    label.css("background", cicleParagraph[i].color);
    label.mouseover(() => {


      $("#main-circle").fadeIn("slow", () => {
        $("#main-circle").html(cicleParagraph[i].text);
        $("#main-circle").css("background", cicleParagraph[i].color);
      });

    });

    label.mouseout(() => {
  //    $("#main-circle").html(defaultText.text);
  //    $("#main-circle").css("background", "#428bca");
    });

    $("#main-circle").html(defaultText.text);
  });
}

function initOnePage() {
  $('#fullpage').fullpage(
    {
      anchors: ['accueil', 'mission', 'pitch', 'experimentation', 'village', 'partenaires', 'contact'],
      menu: '#menu-right',
      responsiveWidth: 900,
      scrollBar: true,
      fixedElements: '#fixed-header',
      afterLoad: function (anchorLink, index) {

        if (index == 3) {
          var myPlayer = videojs("my-video");
          myPlayer.play();
        }

        if (index == 4) {
          var myPlayer = videojs("my-video2");
          myPlayer.play();
        }

        if (index == 5) {
          toggleOptions('.selector');
        }
      },
      onLeave: function (index, nextIndex, direction) {
        if (index == 3) {
          var myPlayer = videojs("my-video");
          myPlayer.pause();
          myPlayer.currentTime(0);
        }

        if (index == 4) {
          var myPlayer = videojs("my-video2");
          myPlayer.pause();
          myPlayer.currentTime(0);
        }

        if (index == 5) {
          toggleOptions('.selector');
        }
      },
    }
  );
}

$(function () {
  menu = $('nav ul');

  $('#openup').on('click', function (e) {
    e.preventDefault(); menu.slideToggle();
  });

  $(window).resize(function () {
    var w = $(this).width(); if (w > 1280 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });

  $('nav li').on('click', function (e) {
    var w = $(window).width(); if (w < 1280) {
      menu.slideToggle();
    }
  });
  $('.open-menu').height($(window).height());

  initBubble();
});


var angleStart = -360;

// jquery rotate animation
function rotate(li, d) {
  $({ d: angleStart }).animate({ d: d }, {
    step: function (now) {
      $(li)
        .css({ transform: 'rotate(' + now + 'deg)' })
        .find('label')
        .css({ transform: 'rotate(' + (-now) + 'deg)' });
    }, duration: 0
  });
}

// show / hide the options
function toggleOptions(s) {
  $(s).toggleClass('open');
  var li = $(s).find('li');
  var deg = $(s).hasClass('half') ? 180 / (li.length - 1) : 360 / li.length;

  for (var i = 0; i < li.length; i++) {
    var d = $(s).hasClass('half') ? (i * deg) - 90 : (i * deg) - 36;
    $(s).hasClass('open') ? rotate(li[i], d) : rotate(li[i], angleStart);
  }

}
