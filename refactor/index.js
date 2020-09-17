let effects                  = {},
    currentSlideLoaded       = undefined,
    loadedSlides             = 0,
    secondarySlidesAutoStart = true,
    secondarySlidesInterval,
    secondarySlidesTimeout,
    ifFirst                  = null,
    dots                     = 1;

const path = '/images/slider/';
const images = [
  [
    'slide_7_front.png',
    'slide_7_bg.jpg',
    'slide_7_middle.png',
    'slide_7_middle_2.png',
    'slide_7_2_bg.jpg',
    'slide_7_2_front.png',
    'slide_7_2_bg.jpg',
    'slide_7_2_2_front.png',
    'slide_7_2_bg.jpg',
    'slide_7_2_3_front.png',
  ],
  [
    'slide_6_front.png',
    'slide_6_bg.jpg',
    'slide_6_bg2.png',
    'slide_6_middle1.png',
    'slide_6_middle2.png',
    'slide_6_2_front.png',
    'slide_6_2_bg.jpg',
    'slide_6_2_middle.png',
    'slide_6_2_middle2.png',
    'slide_6_2_middle_dark.png',
    'slide_6_2_middle2_dark.png',
    'slide_6_2_dark_rays.png',
  ],
  ['slide_5_front.png', 'slide_5_bg.jpg', 'slide_5_middle.png', 'slide_5_2_bg.jpg', 'slide_5_2_front.png'],
  [
    'slide_4_front.png',
    'slide_5_bg.jpg',
    'slide_4_middle.png',
    'slide_4_2_front.png',
    'slide_4_2_bg.jpg',
    'slide_4_2_middle.png',
  ],
  [
    'slide_3_front.png',
    'slide_3_bg.jpg',
    'slide_3_middle.png',
    'slide_3_2_1_bg.jpg',
    'slide_3_middle.png',
    'slide_3_2_2_bg.jpg',
    'slide_3_middle.png',
    'slide_3_2_3_bg.jpg',
    'slide_3_middle.png',
  ],
  [
    'slide_2_front.png',
    'slide_2_bg.jpg',
    'slide_2_middle.png',
    'slide_2_middle2.png',
    'slide_2_2_bg.jpg',
    'slide_3_middle.png',
  ],
  [
    'slide_1_front.png',
    'slide_1_bg.jpg',
    'slide_1_1_russia_bg.jpg',
    'slide_1_1_russia_front.png',
    'slide_1_2_sweden_bg.jpg',
    'slide_1_2_sweden_front.png',
    'slide_1_3_italy_bg.jpg',
    'slide_1_3_italy_front.png',
    'slide_1_4_india_bg.jpg',
    'slide_1_4_india_front.png',
  ],
];

function getSize(size) {
  return parseInt(size.substring(0, size.indexOf('px')));
}

/**
 * Изменение мин высоты блока .block_overflow
 */
function changeMinHeight() {
  setTimeout(function () {
    $('.block_overflow').css('height', $(window).innerHeight() - $('header').outerHeight() + 'px');
  }, 10);
}

function SetCookie(cookieName, cookieValue, nDays) {
  const today  = new Date(),
        expire = new Date();

  if (nDays === null || nDays === 0) {
    nDays = 1;
  }

  expire.setTime(today.getTime() + 3600000 * 24 * nDays);
  document.cookie = cookieName + '=' + escape(cookieValue) + ';expires=' + expire.toGMTString() + '; path=/;';
}

$(window).on('load resize', function windowResize() {
  let elPosition = 3;

  if ($(window).innerWidth() < 1200) {
    elPosition = 2;
  }

  $('.block.honors').removeClass('last');
  $('.block.honors:nth-child(' + elPosition + 'n)').addClass('last');

  changeMinHeight();
});

/**
 * Функция срабатывает при движении мыши, принимает event как аргумент
 * @param {MouseEvent} event
 */
function mouseMove(event) {
  if (isLessThanPageY(event)) {
    if (isMoreThanPageX(event)) {
      $('.arrow_slide_left').addClass('visible');
    } else {
      $('.arrow_slide_left').removeClass('visible');
    }

    if (isLessThanPageX(event)) {
      $('.arrow_slide_right').addClass('visible');
    } else {
      $('.arrow_slide_right').removeClass('visible');
    }
  } else {
    $('.arrow_slide_left, .arrow_slide_right').removeClass('visible');
  }

  function isMoreThanPageX(event) {
    return event.pageX < $(window).innerWidth() / 3 - 100;
  }

  function isLessThanPageX(event) {
    return event.pageX > ($(window).innerWidth() * 2) / 3 + 100;
  }

  function isLessThanPageY(event) {
    return event.pageY > $('.middle_padding.main').offset().top + 200;
  }
}

/* Images preloader */
const loadImages = function (slideId) {
  const load_dots = setInterval(function () {
    let txt = '.';

    switch (dots) {
    case 3:
      txt = '...';
      break;
    case 2:
      txt = '..';
      break;
    }

    $('.navigation .text_load .dots').html(txt);

    dots++;

    if (dots > 3) dots = 1;
  }, 500);

  const slideBlockLength = $('.slide_block').length;

  if (slideId === undefined) {
    slideId = currentSlideLoaded;
  }

  currentSlideLoaded = slideId;

  const slideImg = $('#slide_' + slideId + ' .img');

  for (let j = 0; j < slideImg.length; j++) {
    const el = slideImg[j];

    $(el).children('img').attr('src', path + images[slideBlockLength - currentSlideLoaded]); // не уверен, что currentSlideLoaded][j] правильно, поэтому удалил [j], потому что currentSlideLoaded должен быть числом
  }

  const str = $('#slide_' + slideId + ' img');

  const slide = str[str.length - 1];

  $(slide).on('load', function () {
    loadedSlides++;

    $('#navigation_slide .navigation a[rel=slide_' + slideId + ']').removeClass('unready').on('click', function () {
      slBtnClick(this);

      return false;
    });

    $('.block_nav nav a[rel=slide_' + slideId + ']').removeClass('unready').on('click', function blockNavClick(self) {
      self = this; // ???
      const navLink = '.navigation a[rel=' + $(self).attr('rel') + ']';

      $(self).off('click').on('click', false);
      $(navLink).click();

      setTimeout(function () {
        $(self).on('click', blockNavClick);
      }, 500);

      return false;
    });

    /* Show current loaded slide (while another are still loading) */
    if (currentSlideLoaded === slideBlockLength) {
      setTimeout(function () {
        ifFirst = true;

        $('#navigation_slide .navigation a[rel=slide_' + slideId + ']').click();
      }, 500);
    }

    if (loadedSlides === $('.slide_block').length) {
      clearInterval(load_dots);

      $('#navigation_slide .navigation .text_load').fadeOut();

      $('.arrow_slide_left').fadeIn();

      $('#navigation_slide .text_nav a, .block_nav nav a.slide_0').removeClass('unready').on('click', function () {
        $('#navigation_slide .navigation a.link').removeClass('active');
        $('.submenu').hide();
        $('#navigation_slide, .slide_block').fadeOut();
        $('.arrow_slide_left, .arrow_slide_right').fadeOut();
        $('.slide_block_zero').delay(1000).fadeIn();

        return false;
      });

      $('.block_nav nav a.slide_0').on('click', function () {
        $('.block_nav').fadeOut();
      });

      return true;
    }

    currentSlideLoaded--;

    //Запуск функции внутри себя самой?? Зачем?
    loadImages();

    return false;
  });

  return false;
};

function slBtnClick(elem) {
  if ($(elem).hasClass('active') || $('#' + $(elem).attr('rel')).length <= 0) {
    return false;
  }

  const durations = {
    bg: 1300,
    front: 800,
    middle: 1000,
    cars: 4000,
    slide_up_down: 2000,
    sum: function () {
      return this.bg + this.front + this.middle;
    },
    sumCars: function () {
      return this.bg + this.front + this.cars;
    },
  };

  function slideFrom(direction, elem, delayTime, model) {
    const slideNumber = $(elem).attr('rel');
    const slideId = $('#' + slideNumber + ' .' + elem)[0];

    if (direction === undefined) {
      direction = 'left';
    }

    if (elem === undefined) {
      elem = 'middle';
    }

    if (delayTime === undefined) {
      delayTime = durations['bg'] + durations['front'];
    }

    $(slideId).stop(true, true);

    let away        = -2000,
        initialLeft = $(slideId).css('left'),
        initial_top = $(slideId).css('top'),
        css         = {},
        animation   = {};

    if (direction === 'right') {
      away = -away;
    }

    if (initialLeft === 'auto') {
      initialLeft = $(slideId).offset().left + 'px';
    }

    animation.left = initialLeft;
    css.left = away + 'px';

    if (model === 'plane') {
      animation.top = initial_top;
      css.top = getSize(initial_top) + 200 + 'px';
    }

    $(slideId).hide();

    setTimeout(function () {
      $(slideId).css(css).show().animate(animation, durations.cars);
    }, delayTime);
  }

  function slide_loop_with_stop(elem, properties) {
    if (!elem || !properties || typeof properties !== 'object') return false;

    const id = $('.slide_block.active .active')[0].attr('id') + '_' + elem;

    if (!effects[id]) {
      effects[id] = new Object();
      effects[id].slideNumber = slideNumber;
      effects[id].elem = elem;
      effects[id].initLeft = $('#' + effects[id].slideNumber + ' .' + effects[id].elem)
        .eq(0)
        .css('left');
      effects[id].loop = properties.loop || true;
      effects[id].delayTime = properties.delayTime || durations.bg || 0;
      effects[id].duration = properties.duration || durations.cars || 3000;
      effects[id].stopTime = properties.stopTime || 3000;
      effects[id].stopPoint = properties.stopPoint || '0px';
      effects[id].startPoint = properties.startPoint || '-' + effects[id].initLeft || '-2000px';
      effects[id].timeBetween = effects[id].duration * 2 + effects[id].stopTime + effects[id].delayTime || 10000;
    }

    effects[id].func = function () {
      $('#' + effects[id].slideNumber + ' .' + effects[id].elem).eq(0).css({
        left: effects[id].startPoint,
      }).animate(
        {
          left: effects[id].stopPoint,
        },
        {
          duration: effects[id].duration,
          queue: false,
          complete: function () {
            setTimeout(function () {
              $('#' + effects[id].slideNumber + ' .' + effects[id].elem)
                .eq(0)
                .animate(
                  {
                    left: effects[id].initLeft,
                  },
                  {
                    duration: effects[id].duration,
                    complete: function () {
                      $(this).css('left', effects[id].startPoint);
                    },
                  },
                );
            }, effects[id].stopTime);
          },
        },
      );

      if (!effects[id].loop) {
        clearInterval(effects[id].interval);
      } else {
        effects[id].interval = setInterval(effects[id].func, effects[id].timeBetween);
      }
    };

    effects[id].timeout = setTimeout(effects[id].func, effects[id].delayTime);
  }

  function fade_in(elem, delayTime, all) {
    if (elem === undefined) return false;

    const slideNumber = $(elem).attr('rel');

    if (delayTime === undefined || typeof delayTime !== 'number') {
      delayTime = 0;
    }

    const slide = $('#' + slideNumber + ' .' + elem);

    const elemFull = all === 'all' ? slide : slide[0];

    $(elemFull).css('opacity', '0');
    $(elemFull).delay(delayTime).animate({ opacity: 1 }, durations.front);
  }

  function slide_up_down(elem, properties) {
    if (!elem || !properties || typeof properties !== 'object') return false;

    const id = $('.slide_block .active, .slide_block.active')[0].attr('id') + '_' + elem;

    if (!effects[id]) {
      effects[id] = {};
      effects[id].slideNumber = slideNumber;
      effects[id].elem = elem;
      effects[id].height =
        properties['height'] || $('#' + effects[id].slideNumber + ' .' + effects[id].elem).height() || 100;
      effects[id].initHeight = effects[id].height;
      effects[id].left = properties['left'] || effects[id].height || 100;
      effects[id].initLeft = effects[id].left;
      effects[id].loop = properties.loop || false;
      effects[id].delayTime = properties.delayTime || durations.sumCars() || 0;
      (effects[id].timeBetween = properties.timeBetween || 100),
        (effects[id].timeBetween += durations['slide_up_down']);
      effects[id].duration = properties.duration || durations['slide_up_down'] || 200;
      effects[id].start_diretion = properties.start_diretion || 'down';
      effects[id].direction = effects[id].direction || effects[id].start_diretion;
    }

    effects[id].func = function () {
      effects[id].code = effects[id].direction === 'down' ? '+=' : '-=';

      const selector = $('#' + effects[id].slideNumber + ' .' + effects[id].elem)[0];

      $(selector).animate(
        { top: effects[id].code + effects[id].height },
        {
          duration: effects[id].duration,
          complete: function () {
            effects[id].direction = effects[id].direction === 'down' ? 'up' : 'down';
          },
        },
      );

      if (!effects[id].loop) {
        clearInterval(effects[id].interval);
      }
    };

    effects[id].timeout = setTimeout(function () {
      effects[id].interval = setInterval(effects[id].func, effects[id].timeBetween);
    }, effects[id].delayTime);
  }

  function levitation(elem, properties) {
    if (!elem || !properties || typeof properties !== 'object') return false;

    const slideNumber = $(elem).attr('rel');
    const id = $('.slide_block .active').attr('id') + '_' + elem;

    if (!effects[id]) {
      effects[id] = {};
      effects[id].slideNumber = slideNumber;
      effects[id].elem = elem;
      effects[id].height =
        properties['height'] || $('#' + effects[id].slideNumber + ' .' + effects[id].elem).height() || 100;
      effects[id].initHeight = effects[id].height;
      effects[id].max_height = properties['max_height'] || effects[id].height + 200;
      effects[id].plus_height = 0;
      effects[id].left = properties['left'] || effects[id].height || 100;
      effects[id].initLeft = effects[id].left;
      effects[id].max_left = properties['max_left'] || effects[id].left + 200;
      effects[id].plus_left = 0;
      effects[id].loop = properties.loop || false;
      effects[id].delayTime = properties.delayTime || durations.sum() || 0;
      effects[id].duration = properties.duration || 200;
      effects[id].start_diretion = properties.start_diretion || 'down';
      effects[id].direction = effects[id].direction || effects[id].start_diretion;
      effects[id].milti_object = properties.multi_object || false;
    }

    effects[id].func = function levi() {
      let objects;

      if (effects[id].milti_object) {
        objects = $('#' + effects[id].slideNumber + ' .' + effects[id].elem);
      } else {
        objects = $('#' + effects[id].slideNumber + ' .' + effects[id].elem)[0];
      }

      effects[id].code = effects[id].direction === 'down' ? '+=' : '-=';
      effects[id].direction = effects[id].direction === 'down' ? 'up' : 'down';

      objects.animate(
        { top: effects[id].code + effects[id].height, left: effects[id].code + effects[id].left },
        {
          duration: effects[id].duration,
          queue: false,
          easing: 'linear',
          complete: function () {
            effects[id].height = effects[id].initHeight;
            effects[id].left = effects[id].initLeft;
          },
        },
      );
    };

    effects[id].timeout = setTimeout(function () {
      effects[id].interval = setInterval(effects[id].func, effects[id].duration);
    }, effects[id].delayTime);
  }

  // Clear all intervals and close all popups
  for (obj in effects) {
    clearInterval(effects[obj].interval);
  }

  if (secondarySlidesInterval) {
    clearInterval(secondarySlidesInterval);
  }

  if (secondarySlidesTimeout) {
    clearTimeout(secondarySlidesTimeout);
  }

  $('.popup').fadeOut();
  $(elem).off('click');
  $(elem).on('click dblclick', false);

  $('.slide_block .img').each(function () {
    $(this).stop(true, true);
  });

  if ($(elem).hasClass('submenu_link')) {
    $('.submenu .menu_item, a.submenu_link').removeClass('active');
    $(elem).parents('.menu_item').addClass('active');
    $(elem).addClass('active');

    function isParentHasClass() {
      return $(elem).parents('.menu_item').hasClass('jackass');
    }

    if (isParentHasClass()) {
      $('.submenu.slide_3_2 .bg').show();
    } else {
      $('.submenu.slide_3_2 .bg').hide();
    }
  } else {
    $('.slide_block .second, .submenu .menu_item, a.submenu_link').removeClass('active');
  }

  if (!$(elem).hasClass('human') && !$(elem).hasClass('submenu_link')) {
    $('.block_nav a').removeClass('active');
    $('.block_nav a[rel=' + $(elem).attr('rel') + ']').addClass('active');
    $('.navigation_slide .navigation a').removeClass('active');
  }

  const slideNumber = $(elem).attr('rel');

  function hasClass(slideNumber) {
    return $('#' + slideNumber).hasClass('second');
  }

  if (hasClass(slideNumber)) {
    $('.slide_block.active').addClass('hided');
    $('.second.active').removeClass('active');

    if (slideNumber.match(/slide_1/)) {
      $('.submenu.slide_1_2').show();
    }

    if (slideNumber.match(/slide_3/)) {
      $('.submenu.slide_3_2').show();
    }
  } else {
    $('.submenu').hide();
    $('.slide_block .second').hide();
    $('.slide_block.active').removeClass('hided');
    $('.slide_block.active, .slide_block .second.active').removeClass('active').hide();
  }

  if (!ifFirst) {
    $('.number_slide').hide();
  }

  if (!$(elem).hasClass('human') && !$(elem).hasClass('submenu_link')) {
    $(elem).addClass('active');
  }

  const maxSlideNumRegex = new RegExp('slide_' + $('.slide_block').length);

  if ($(elem).attr('rel').match(maxSlideNumRegex) && ifFirst) {
    if ($('.block_nav').is(':visible')) {
      $('.block_nav').fadeOut();
    }

    if ($('.arrow_slide_right').is(':visible')) {
      $('.arrow_slide_right').fadeOut();
    }

    if ($('.arrow_slide_left').is(':hidden')) {
      $('.arrow_slide_left').fadeIn();
    }

    if ($('#navigation_slide').is(':hidden')) {
      $('#navigation_slide').fadeIn();
    }
  } else {
    if ($('.block_nav').is(':hidden')) {
      $('.block_nav').fadeIn();
    }

    if ($('.arrow_slide_right').is(':hidden') && !$(elem).attr('rel').match(maxSlideNumRegex)) {
      $('.arrow_slide_right').fadeIn();
    }

    if ($(elem).attr('rel') === 'slide_' + $('.slide_block').length) {
      $('.arrow_slide_right').fadeOut();
    }

    if ($('#navigation_slide').is(':visible')) {
      $('#navigation_slide').fadeOut();
    }

    if ($(elem).attr('rel').match(/slide_1/)) {
      if ($('.arrow_slide_left').is(':visible')) {
        $('.arrow_slide_left').fadeOut();
      }
    } else {
      if ($('.arrow_slide_left').is(':hidden')) {
        $('.arrow_slide_left').fadeIn();
      }
    }
  }

  $('#navigation_slide').removeClass().addClass('navigation_slide ' + $(elem).attr('rel'));

  $('#' + slideNumber).addClass('active').show();

  // Set an effects to each slide
  switch (slideNumber) {
  case 'slide_1':
    fade_in('front');
    fade_in('bg', durations.front);
    fade_in('middle1', durations.bg - 100);
    fade_in('middle2', durations.bg + 100);
    fade_in('middle3', durations.bg + 300);
    fade_in('middle4', durations.bg + 500);
    fade_in('middle5', durations.bg + 700);
    fade_in('middle6', durations.bg + 900);
    fade_in('middle7', durations.bg + 1100);
    fade_in('middle8', durations.bg + 1300);
    fade_in('small_link', durations.bg, 'all');
    fade_in('small_text_block', durations.sum(), 'all');
    fade_in('small', durations.sum() - 500);
    break;
  case 'slide_1_1_russia':
    fade_in('front');
    fade_in('bg', durations.front);
    fade_in('small', durations.front + durations.bg);
    break;
  case 'slide_1_2_sweden':
    fade_in('front');
    fade_in('bg', durations.front);
    fade_in('small', durations.front + durations.bg);
    break;
  case 'slide_1_3_italy':
    fade_in('front');
    fade_in('bg', durations.front);
    fade_in('small', durations.front + durations.bg);
    break;
  case 'slide_1_4_india':
    fade_in('front');
    fade_in('bg', durations.front);
    fade_in('small', durations.front + durations.bg);
    break;
  case 'slide_2':
    fade_in('front');
    fade_in('bg', durations.front);
    slideFrom('left');
    slideFrom('left', 'middle2', durations.bg + durations.front + 1500, 'plane');
    fade_in('small', durations.front + durations.bg);
    fade_in('small_text_block', durations.front + durations.bg, 'all');
    break;
  case 'slide_2_2':
    fade_in('bg');
    slide_loop_with_stop('middle', { stopTime: 3000, stopPoint: '-675px', delayTime: 0 });
    break;
  case 'slide_3':
    fade_in('front');
    fade_in('bg', durations.front);
    slideFrom('right');
    fade_in('small', durations.front + durations.bg);
    fade_in('small_text_block', durations.front + durations.bg, 'all');
    break;
  case 'slide_3_2_1':
    fade_in('bg');
    slideFrom('left', 'middle', durations.bg);
    break;
  case 'slide_3_2_2':
    fade_in('bg');
    slideFrom('left', 'middle', durations.bg);
    break;
  case 'slide_3_2_3':
    fade_in('bg');
    slideFrom('left', 'middle', durations.bg);
    break;
  case 'slide_4':
    fade_in('front');
    fade_in('bg', durations.front);
    fade_in('middle', durations.sum());
    fade_in('small', durations.bg + durations.front);
    fade_in('small_text_block', durations.sum(), 'all');
    break;
  case 'slide_4_2':
    fade_in('front');
    fade_in('bg', durations.front);
    fade_in('middle', durations.sum());
    fade_in('small', durations.sum());
    fade_in('small_text_block', durations.sum(), 'all');
    break;
  case 'slide_5':
    fade_in('front');
    fade_in('bg', durations.front);
    fade_in('middle', durations.bg + durations.front);
    fade_in('small', durations.bg + durations.front);
    fade_in('small_text_block', durations.sum(), 'all');
    break;
  case 'slide_5_2':
    fade_in('front');
    fade_in('bg', durations.front);
    fade_in('small', durations.bg + durations.front);
    fade_in('small_text_block', durations.front + durations.bg, 'all');
    break;
  case 'slide_6':
    fade_in('front');
    fade_in('bg', durations.front);
    fade_in('bg2', durations.front);
    slideFrom('right', 'middle', durations.bg + durations.front);
    slide_up_down('middle_2', { height: 130, timeBetween: 2000, loop: true });
    fade_in('small_text_block', durations.front + durations.bg, 'all');
    break;
  case 'slide_6_2':
    fade_in('front');
    fade_in('bg', durations.front);
    fade_in('middle', durations.bg + durations.front);
    fade_in('middle1', durations.front, 'all');
    fade_in('middle2', durations.front, 'all');
    fade_in('small_text_block', durations.front + durations.bg, 'all');
    fade_in('small', durations.bg + durations.front);
    levitation('middle1', {
      height: 30,
      delayTime: durations.front,
      duration: 2000,
      loop: true,
      multi_object: true,
    });
    levitation('middle2', {
      height: 20,
      delayTime: durations.front,
      duration: 1700,
      loop: true,
      multi_object: true,
    });
    break;
  case 'slide_7':
    fade_in('front');
    fade_in('bg', durations.front);
    fade_in('middle_2', durations.front);
    slideFrom('left');
    fade_in('small', durations.bg + durations.front);
    break;
  case 'slide_7_2_1':
    fade_in('front');
    fade_in('small', durations.front);
    break;
  case 'slide_7_2_2':
    fade_in('front');
    fade_in('small', durations.front);
    break;
  case 'slide_7_2_3':
    fade_in('front');
    fade_in('small', durations.front);
    break;
  default:
    break;
  }

  changeMinHeight();

  if (ifFirst) {
    ifFirst = false;
  }

  setTimeout(function () {
    $(elem).on('click', function () {
      slBtnClick(elem);
      return false;
    });
  }, 100);

  return false;
}

const sitePopupShow = function (show_popup) {
  const email = $(show_popup).attr('rel');

  $('.dark_bg').show();
  $('#map_contact_form_email_to').attr('value', email);
  $('#contact_form_on_map').show();

  return false;
};

/* Autoplay for secondary slides */
function secondarySlidesAutoplay(parent) {
  if ($(parent).length <= 0) {
    throw new Error('Parent element missed: "' + parent + '"');
  }

  const submenuClass = parent.substring(1) + '_2';
  const el = $('.submenu.' + submenuClass + ' .menu_item.active');
  const delay = 6500;

  function play(element) {
    const nextEl = element.next('.menu_item');

    if (nextEl.length > 0) {
      nextEl.children('.submenu_link').click();
      secondarySlidesInterval = setInterval(secondarySlidesAutoplay, delay, parent);
    }
  }

  if ($('.submenu.' + submenuClass).length <= 0) {
    throw new Error('Submenu element missed: "' + submenuClass + '"');
  }

  if (secondarySlidesInterval) {
    clearInterval(secondarySlidesInterval);
  }

  if (el.prev('.menu_item').length > 0) {
    play(el);
  } else {
    secondarySlidesTimeout = setTimeout(play, delay);
  }
}

$(document).ready(function () {
  /* For all links */
  $('a[href=#]').on('click dblclick', false);

  /* Всплывашка в разделе контакты */
  $('.form_filial .close').click(function () {
    $(this).parent().hide();
    $('.dark_bg').hide();
    return false;
  });

  $('.cont_block .feedback').click(function () {
    $('#' + $(this).attr('rel')).show();
    return false;
  });

  /* Popups toggle*/
  $('.popup_show').on('click', function () {
    if ($(this).attr('rel') === undefined) {
      throw new Error('Error calling popup: attr "rel" = undefined');
    }

    const popup = '.popup.' + $(this).attr('rel');

    // Return if current popup is already opened
    if ($(popup).is(':visible')) {
      if ($(this).attr('rel') === 'site_map') $(popup).hide();
      return false;
    }

    $('.popup').fadeOut(); // Close all popups first,

    if (!$(popup).hasClass('site_map')) {
      const left = ($(window).width() - $(popup).outerWidth()) / 2 + $(window).scrollLeft() + 'px';
      const top = ($(window).height() - $(popup).outerHeight()) / 2 + $(window).scrollTop() + 'px';

      $(popup).css('left', left);
      $(popup).css('top', top);
      $(popup).css('marginLeft', '0px');
    }

    $(popup).fadeIn(); // and open only one of them

    return false;
  });

  /* Cover .popup divs with center div, corners etc */
  $('div.popup:not(.site_map)').each(function () {
    if ($(this).find('.center').length <= 0) {
      const innerHtml = $(this).html(),
            html       =
              '<div class="form_bg"></div><a href="#" class="close"></a><div class="tl"></div><div class="tr"></div><div class="bl"></div><div class="br"></div><div class="t"></div><div class="b"></div><div class="l"></div><div class="r"></div><div class="center"></div>';
      const matches = $(this).attr('class').match(/popup_[0-9]+/);
      let cls;

      $(this).html(html);
      $(this).find('.center').html(innerHtml);

      cls = '' + $(this).parents().eq(0).attr('id') + '_' + matches;

      $(this).parents().eq(0).find('a[rel=' + matches + ']').attr('rel', cls);

      $(this).attr(
        'class',
        $(this).attr('class').replace(/popup_[0-9]+/, cls),
      );

      $('body').append($(this));
    }
  });

  $('.popup .close').on('click', function () {
    $(this).parent().fadeOut();
    return false;
  });

  /* Slide down button click event */
  $('.slide_button').bind('click', function () {
    if ($(this).attr('rel') === undefined) {
      return false;
    }

    function wrapClick() {
      $('.popup').hide();
      $('.slide_up_down').slideUp('slow');
      $('.wrap').unbind('click');
    }

    const slide = '.slide_up_down.' + $(this).attr('rel');

    if ($(slide).is(':hidden')) {
      $(slide).slideDown();

      setTimeout(function () {
        $('.wrap').bind('click', wrapClick);
      }, 50);
    } else {
      $(slide).slideUp();
    }

    return false;
  });

  /* Filials buttons click event */
  $('.filials li a').bind('click', function () {
    const regionId = $(this).prev().attr('rel');
    const regionEl = $('#region_' + regionId);

    $('span.office_location').html($(this).attr('rel'));
    $('.region_phone').html($(this).prev().html());

    SetCookie('region', regionId, 30);

    /* If contact page, changing active region */
    if ($('.region.active').length) {
      $('.region.active').removeClass('active');

      if (regionEl.length) {
        regionEl.addClass('active');
      }
    }

    $('.filials').slideUp();

    document.location.href = '/contacts/';

    return false;
  });

  const selectedRegion = $('#selectedRegion');
  const regionId = selectedRegion.attr('rel');

  $('span.office_location').html(selectedRegion.next().attr('rel'));
  $('.region_phone').html(selectedRegion.html());

  SetCookie('region', regionId, 30);

  $('.slide_up_down').bind('click', function () {
    return false;
  });

  $('.form_filial .block_inp .select').click(function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).next().slideUp(300);
    } else {
      $(this).addClass('active');
      $(this).next().slideDown(300);
    }
    return false;
  });

  $('.form_filial .block_inp .block_ul ul li a').click(function () {
    if ($('.select').hasClass('active')) {
      $('.select').removeClass('active');
    }

    $('.form_filial .block_inp .select .title').html($(this).text());
    $('.form_filial .block_inp .select').next().slideUp(300);

    return false;
  });

  /* Раздел сотрудники */
  $('.wrap_block.sotrudniki .block_employee .block .hand_block a').click(function () {
    if ($(this).hasClass('metal')) {
      $(this).html('Даешь метал<br/>в массы!!').removeClass('metal');
      $('.wrap_block.sotrudniki .block_employee .block .block_img .employee_photo').removeClass('metal');
      $(this).prev().removeClass('metal');
    } else {
      $(this).html('Вернуться<br/>к работе').addClass('metal');
      $('.wrap_block.sotrudniki .block_employee .block .block_img .employee_photo').addClass('metal');
      $(this).prev().addClass('metal');
    }
    return false;
  });

  /* Слайдер на главной */

  /* Slides effects and transitions */
  $('.navigation_slide .navigation a').on('click', function () {
    slBtnClick(this);
    return false;
  });

  const slideBlockLength = $('.slide_block').length;

  /* Initialize image loader */
  loadImages(slideBlockLength);

  $('.slide_block').hide();

  $('#navigation_slide .navigation a, #navigation_slide .text_nav a, .block_nav nav a')
    .off('click')
    .addClass('unready');

  $('.unready').on('click', false);

  /* Zero slide numbers click event */
  $('.slide_block_zero a.number').on('click', function () {
    $('.slide_block_zero').fadeOut();
    const elemRel = $(this).attr('rel');

    setTimeout(function () {
      slBtnClick($('.navigation_slide .navigation a[rel=' + elemRel + ']'));
    }, 800);

    return false;
  });

  /* Human links click event */
  $('.slide_block a.human, #slide_1 a.link').on('click', function () {
    const self = $(this);

    if (self.hasClass('human slide_1')) {
      slBtnClick('a.submenu_link[rel=' + self.attr('rel') + ']');
      secondarySlidesAutoplay('#slide_1');
    } else if (self.hasClass('human slide_3')) {
      slBtnClick('a.submenu_link[rel=' + self.attr('rel') + ']');
      secondarySlidesAutoplay('#slide_3');
    } else {
      slBtnClick('a.human[rel=' + self.attr('rel') + ']');
    }

    return false;
  });

  /* Submenu click event */
  $('.menu_item.active .submenu_link').on('click', false);

  $('.menu_item .submenu_link').on('click', function () {
    if ($(this).parents('.menu_item').hasClass('active') || $(this).hasClass('active')) {
      return false;
    }

    const self = $(this);
    slBtnClick('.menu_item a.submenu_link[rel=' + self.attr('rel') + ']');

    return false;
  });

  $('.change_shape .submenu_link').on('click', function () {
    slBtnClick(this);
  });

  /* Slide arrows click event */
  $('.arrow_slide_left.active, .arrow_slide_right.active').on('click', function arrowLeftClick() {
    const self = this;
    let direction = 'left';

    $(self).off('click').on('click', false);

    if ($(self).hasClass('arrow_slide_right')) {
      direction = 'right';
    }

    const currentActiveSlide = parseInt($('.slide_block.active').attr('id').substring(6));

    if (compareIsDirection()) {
      switch (direction) {
      case 'left':
        $('.navigation a.link[rel=slide_' + (currentActiveSlide - 1) + ']').click();
        break;
      case 'right':
        $('.navigation a.link[rel=slide_' + (currentActiveSlide + 1) + ']').click();
        break;
      default:
        break;
      }
    }

    /**
     * Функция сравнения
     * @returns {boolean}
     */
    function compareIsDirection() {
      const len = $('.slide_block').length;
      return (direction === 'left' && currentActiveSlide > 1 && currentActiveSlide <= len) ||
        (direction === 'right' && currentActiveSlide >= 1 && currentActiveSlide < len);
    }

    setTimeout(function () {
      $(self).on('click', arrowLeftClick);
    }, 500);

    return false;
  });

  /* Arrows hover event */
  if ($('.middle_padding.main').length > 0) {
    $(document).on('mousemove', mouseMove);
  }

  /* Hide arrows on #navigation_slide hover */
  $('#navigation_slide').on('mouseover', function () {
    $('.arrow_slide_left, .arrow_slide_right').removeClass('visible');
    $(document).off('mousemove');
  }).on('mouseleave', function () {
    $(document).on('mousemove', mouseMove);
  });

  $('.slide_block:not([id=slide_' + $('.slide_block').length + '])')
    .children('.number_slide')
    .hide();

  /* Secondary navigation buttons */
  $('.block_nav').on('click dblclick', 'a.active', false).on('click', 'a', function blockNavClick(self) {
    self = this;
    $(self).off('click').on('click', false);
    $('.navigation a[rel=' + $(self).attr('rel') + ']').click();

    setTimeout(function () {
      $(self).on('click', blockNavClick);
    }, 500);
    return false;
  });

  $('.slide_0').mouseenter(function () {
    $('.pointer').show();
    return false;
  }).mouseleave(function () {
    $('.pointer').hide();
    return false;
  });

  $('.popup_contact_block > a').click(function () {
    /**
     * element - this
     * h - height, строка с пикселями (например '20px')
     */
    function animate(element, h) {
      $(element).parent().find('.center').animate(
        {
          height: h,
        },
        300,
      );
    }

    if ($(this).hasClass('hide')) {
      animate(this, '20px');
      $(this).removeClass('hide').addClass('show');
    } else {
      animate(this, '230px');
      $(this).removeClass('show').addClass('hide');
    }
    return false;
  });

  /* Day/night scene on slide 6_2 */
  $('#slide_6_2 a.day_night').on('click', function () {
    if ($(this).hasClass('active')) {
      return false;
    } else {
      $('#slide_6_2 a.day_night').removeClass('active');

      if ($(this).hasClass('night')) {
        $('#slide_6_2 a.day_night.night').addClass('active');

        if ($('#slide_6_2 .dark').css('visibility') === 'hidden') {
          $('#slide_6_2 .dark').css('visibility', 'visible');
        }
      } else {
        $('#slide_6_2 a.day_night.day').addClass('active');

        if ($('#slide_6_2 .dark').css('visibility') === 'visible') {
          $('#slide_6_2 .dark').css('visibility', 'hidden');
        }
      }
    }
  });
});
