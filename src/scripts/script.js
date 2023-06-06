//Анимация появления хедер элементов и первой секции
function showNavItems() {
  //Анимация хедера
  $('.body .item-anim').each(function (index) {
    var $item = $(this);
    setTimeout(function () {
      $item.addClass('show');
    }, 250 * index);
  });
  //Анимация первой секции
  $('.body .item-anim-left').each(function (index) {
    var $item = $(this);
    setTimeout(function () {
      $item.addClass('show-left');
    }, 250 * index);
  });
}

$(window).on('load', showNavItems);

//Анимация появления заголовка второй секции
$(document).ready(function () {
  var sectionHeight = 1128;
  var targetPos = sectionHeight / 12;
  var contentTitle = $('.second-section .container .content-title');
  var titleElement = $('.second-section .container .content-title .title-element');
  var subtitle = $('.second-section .container .content-title .subtitle');
  var circle = $('.circle-animate');

  var animationPlayed = false;

  $(window).scroll(function () {
    var scrollPos = $(window).scrollTop();

    if (scrollPos > targetPos && !contentTitle.hasClass('visible') && !animationPlayed) {
      titleElement.css({ opacity: 0, right: '-100%' });
      circle.addClass('circle-scale-animation');

      //Анимация появления заголовка
      $('.second-section .container .title span').each(function (index) {
        var $item = $(this);
        setTimeout(function () {
          $item.addClass('show-left');
        }, 250 * index);
      });

      //Анимация появления полоски с кружком
      titleElement.animate({ opacity: 1, right: '-220px' }, 1600);

      contentTitle.addClass('visible');
      animationPlayed = true;

      //Анимация появления подтекста
      subtitle.css('opacity', 0).delay(500).animate({ opacity: 1 }, 500); // Задержка анимации подзаголовка
    } else if ((scrollPos <= targetPos || animationPlayed) && contentTitle.hasClass('visible')) {
      contentTitle.removeClass('visible').css('opacity', 1);
    }
  });
});

//Анимация появления блоков второй секции
$(window).scroll(function () {
  var sectionTop = $('.second-section').offset().top;
  var sectionHeight = $('.second-section').outerHeight();
  var scrollPosition = $(window).scrollTop();
  var windowHeight = $(window).height();

  var scrollPercentage = (scrollPosition - sectionTop) / (sectionHeight - windowHeight) * 100;

  if (scrollPercentage >= -60 && !$('.block-show').hasClass('show')) {
    var delay = 0;
    $('.block-show').each(function () {
      $(this).css('transition-delay', delay + 's');
      delay += 0.2; // Задержка для каждого блока
    });

    setTimeout(function () {
      $('.block-show').addClass('show');
    }, 200); // Задержка перед добавлением класса show
  }
});

