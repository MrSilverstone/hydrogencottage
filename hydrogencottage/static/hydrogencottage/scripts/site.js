var circleCategories = [
  "Une ferme bio",
  "Agrotourisme",
  "Centre équestre",
  "Expérimentation hydrogene",
  "Acceuil des associations"
];

var cicleParagraph = [
  "Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit,<br/>sed do eiusmod tempor incididunt<br>ut labore et dolore magna aliqua.<br>",
  "Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit,<br/>sed do eiusmod tempor incididunt<br>ut labore et dolore magna aliqua.<br>",
  "Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit,<br/>sed do eiusmod tempor incididunt<br>ut labore et dolore magna aliqua.<br>",
  "Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit,<br/>sed do eiusmod tempor incididunt<br>ut labore et dolore magna aliqua.<br>",
  "Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit,<br/>sed do eiusmod tempor incididunt<br>ut labore et dolore magna aliqua.<br>",
  "Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit,<br/>sed do eiusmod tempor incididunt<br>ut labore et dolore magna aliqua.<br>",
]

function closeOtherBubbles(idx) {
  $('.selector ul li').each((i, li) => {
    if (i != idx) {
      const label = $(li).children('label');
      const checkbox = $(li).children('input');

      $(checkbox).attr('checked', false);
      label.text(circleCategories[i]);
    }
  });
}

function openBubble() {

}

function closeBubble() {

}

$(document).ready(function () {
  initOnePage();
  /*
  $("#section-accueil").parallax("50%", 0.1);
  $("#section-mission").parallax("75%", 0.2);
  $("#section-pitch").parallax("50%", 0.2);
  $("#section-experimentation").parallax("50%", 0.2);
  $("#section-village").parallax("50%", 0.1);
  $("#section-partenaires").parallax("50%", 0.1);
  $("#section-contact").parallax("50%", 0.1);

*/
  $('.selector ul li').each((i, li) => {

    const label = $(li).children('label');
    const checkbox = $(li).children('input');

    label.text(circleCategories[i]);
    $(checkbox).change(() => {
      closeOtherBubbles(i);
      console.log("ici!");
      if ($(checkbox).is(':checked')) {
        label.html(cicleParagraph[i]);
      } else {
        label.html(circleCategories[i]);
      }
    });
  });
});

function initOnePage() {
  $('#fullpage').fullpage(
    {
      anchors: ['accueil', 'mission', 'pitch', 'experimentation', 'village', 'partenaires', 'contact'],
      menu: '#menu-right',
      responsiveWidth: 900,
      scrollBar: true,
      fixedElements: '#fixed-header',
      afterLoad: function (anchorLink, index) {
        console.log(index);
        if (index == 5) {
          toggleOptions('.selector');
        }
      },
      onLeave: function (index, nextIndex, direction) {
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

$('.selector button').click(function (e) {
  toggleOptions($(this).parent());
});

