$(document).ready(function () {
  //abre e fecha menu


  // $('.header-nav ul li a').on('click', function(e) {
  //   e.preventDefault();
  //   var target = $(this).attr("href");
  //   $('html, body').stop().animate({
  //       scrollTop: $(target).offset().top
  //   }, 600, function() {
  //       location.hash = target;
  //   });
  // });

  // variÃ¡veis
  var sections = $(".section"),
    nav = $(".nav, .footer-nav"),
    nav_height = nav.outerHeight();

  $(window).on("scroll", function () {
    var sTop = $(this).scrollTop();

    // marcando menu
    if (sTop == 0) {
      nav.find("a").removeClass("active");
      nav.find('a[href="#one_paralax"]').addClass("active");
    } else {
      sections.each(function () {
        var top = $(this).offset().top - nav_height;
        bottom = top + $(this).outerHeight();
        if (sTop >= top) {
          nav.find("a").removeClass("active");
          nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("active");
        }
        // if (sTop <= bottom) {
        //   nav.find('a').removeClass('active');
        //   nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
        // }
      });
    }
  });

  nav.find("a").on("click", function (e) {
    e.preventDefault();
    $(".nav").removeClass("active");
    $("#nav-toggle").removeClass("active");

    var target = $(this).attr("href");
    if (target == "#one_paralax") {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        700
      );
    } else {
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $(target).offset().top,
          },
          700
        );
    }
  });

  //TOPO
  $(".voltar-topo").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      700
    );
  });
});

function addClass(id, classe) {
  let elemento = document.getElementById(id);
  let classes = elemento.className.split(" ");
  let getIndex = classes.indexOf(classe);

  if (getIndex === -1) {
    classes.push(classe);
    elemento.className = classes.join(" ");
  }
}

function delClass(id, classe) {
  let elemento = document.getElementById(id);
  let classes = elemento.className.split(" ");
  let getIndex = classes.indexOf(classe);

  if (getIndex > -1) {
    classes.splice(getIndex, 1);
  }
  elemento.className = classes.join(" ");
}
