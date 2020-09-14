let effects = {},
    current_slide_loaded = undefined,
    loaded_slides = 0,
    secondary_slides_auto_start = true,
    secondary_slides_interval,
    secondary_slides_timeout,
    if_first = null,
    dots = 1;

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

function get_size(size) {
    return parseInt(size.substring(0, size.indexOf('px')));
}

/**
 * Изменение мин высоты блока .block_overflow
 */
function change_min_height() {
    setTimeout(function () {
        $('.block_overflow').css('height', $(window).innerHeight() - $('header').outerHeight() + 'px');
    }, 10);
}

function SetCookie(cookieName, cookieValue, nDays) {
    const today = new Date(),
        expire = new Date();

    if (nDays === null || nDays === 0) {
        nDays = 1;
    }

    expire.setTime(today.getTime() + 3600000 * 24 * nDays);
    document.cookie = cookieName + '=' + escape(cookieValue) + ';expires=' + expire.toGMTString() + '; path=/;';
}

$(window).on('load resize', function window_resize() {
    let elPosition = 3;

    if ($(window).innerWidth() < 1200) {
        elPosition = 2;
    }

    $('.block.honors').removeClass('last');
    $('.block.honors:nth-child(' + elPosition + 'n)').addClass('last');

    change_min_height();
});

/**
 * Функция срабатывает при движении мыши, принимает event как аргумент
 * @param {MouseEvent} event
 */
function mouse_move(event) {
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
const load_images = function (slide_id) {
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

    const slide_block_length = $('.slide_block').length;

    if (slide_id === undefined) {
        slide_id = current_slide_loaded;
    }

    current_slide_loaded = slide_id;

    const appleSauce = $('#slide_' + slide_id + ' .img');

    for (j = 0; j < appleSauce.length; j++) {
        const el = appleSauce[j];

        $(el).children('img').attr('src', path + images[slide_block_length - current_slide_loaded]); // не уверен, что current_slide_loaded][j] правильно, поэтому удалил [j], потому что current_slide_loaded должен быть числом
    }

    const str = $('#slide_' + slide_id + ' img');

    const slide = str[str.length - 1];

    $(slide).on('load', function () {
        loaded_slides++;

        $('#navigation_slide .navigation a[rel=slide_' + slide_id + ']').removeClass('unready').on('click', function () {
            sl_btn_click(this);

            return false;
        });

        $('.block_nav nav a[rel=slide_' + slide_id + ']').removeClass('unready').on('click', function block_nav_click(self) {
            self = this; // ???
            const navLink = '.navigation a[rel=' + $(self).attr('rel') + ']';

            $(self).off('click').on('click', false);
            $(navLink).click();

            setTimeout(function () {
                $(self).on('click', block_nav_click);
            }, 500);

            return false;
        });

        /* Show current loaded slide (while another are still loading) */
        if (current_slide_loaded === slide_block_length) {
            setTimeout(function () {
                if_first = true;

                $('#navigation_slide .navigation a[rel=slide_' + slide_id + ']').click();
            }, 500);
        }

        if (loaded_slides === $('.slide_block').length) {
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

        current_slide_loaded--;

        //Запуск функции внутри себя самой?? Зачем?
        load_images();

        return false;
    });

    return false;
};

function sl_btn_click(elem) {
    if ($(elem).hasClass('active') || $('#' + $(elem).attr('rel')).length <= 0) {
        return false;
    }

    const durations = {
        bg: 1300,
        front: 800,
        middle: 1000,
        cars: 4000,
        slide_up_down: 2000,
        summ: function () {
            return this.bg + this.front + this.middle;
        },
        summ_cars: function () {
            return this.bg + this.front + this.cars;
        },
    };

    function slide_from(direction, elem, delay_time, model) {
        const slideId = $('#' + slide_number + ' .' + elem)[0];

        if (direction === undefined) {
            direction = 'left';
        }

        if (elem === undefined) {
            elem = 'middle';
        }

        if (delay_time === undefined) {
            delay_time = durations['bg'] + durations['front'];
        }

        $(slideId).stop(true, true);

        let away = -2000,
            initial_left = $(slideId).css('left'),
            initial_top = $(slideId).css('top'),
            css = {},
            animation = {};

        if (direction === 'right') {
            away = -away;
        }

        if (initial_left === 'auto') {
            initial_left = $(slideId).offset().left + 'px';
        }

        animation.left = initial_left;
        css.left = away + 'px';

        if (model === 'plane') {
            animation.top = initial_top;
            css.top = get_size(initial_top) + 200 + 'px';
        }

        $(slideId).hide();

        setTimeout(function () {
            $(slideId).css(css).show().animate(animation, durations.cars);
        }, delay_time);
    }

    function slide_loop_with_stop(elem, properties) {
        if (!elem || !properties || typeof properties !== 'object') return false;

        const id = $($('.slide_block.active .active')[0]).attr('id') + '_' + elem;

        if (!effects[id]) {
            effects[id] = new Object();
            effects[id].slide_number = slide_number;
            effects[id].elem = elem;
            effects[id].init_left = $('#' + effects[id].slide_number + ' .' + effects[id].elem)
                .eq(0)
                .css('left');
            effects[id].loop = properties.loop || true;
            effects[id].delay_time = properties.delay_time || durations.bg || 0;
            effects[id].duration = properties.duration || durations.cars || 3000;
            effects[id].stop_time = properties.stop_time || 3000;
            effects[id].stop_point = properties.stop_point || '0px';
            effects[id].start_point = properties.start_point || '-' + effects[id].init_left || '-2000px';
            effects[id].time_between = effects[id].duration * 2 + effects[id].stop_time + effects[id].delay_time || 10000;
        }

        effects[id].func = function () {
            $('#' + effects[id].slide_number + ' .' + effects[id].elem).eq(0).css({
                left: effects[id].start_point,
            }).animate(
                {
                    left: effects[id].stop_point,
                },
                {
                    duration: effects[id].duration,
                    queue: false,
                    complete: function () {
                        setTimeout(function () {
                            $('#' + effects[id].slide_number + ' .' + effects[id].elem)
                                .eq(0)
                                .animate(
                                    {
                                        left: effects[id].init_left,
                                    },
                                    {
                                        duration: effects[id].duration,
                                        complete: function () {
                                            $(this).css('left', effects[id].start_point);
                                        },
                                    }
                                );
                        }, effects[id].stop_time);
                    },
                }
            );

            if (!effects[id].loop) {
                clearInterval(effects[id].interval);
            } else {
                effects[id].interval = setInterval(effects[id].func, effects[id].time_between);
            }
        };

        effects[id].timeout = setTimeout(effects[id].func, effects[id].delay_time);
    }

    function fade_in(elem, delay_time, all) {
        if (elem === undefined) return false;

        if (delay_time === undefined || typeof delay_time !== 'number') {
            delay_time = 0;
        }

        const slide = $('#' + slide_number + ' .' + elem);

        const elem_full = all === 'all' ? slide : slide[0];

        $(elem_full).css('opacity', '0');
        $(elem_full).delay(delay_time).animate({opacity: 1}, durations.front);
    }

    function slide_up_down(elem, properties) {
        if (!elem || !properties || typeof properties !== 'object') return false;

        const id = $($('.slide_block .active, .slide_block.active')[0]).attr('id') + '_' + elem;

        if (!effects[id]) {
            effects[id] = {};
            effects[id].slide_number = slide_number;
            effects[id].elem = elem;
            effects[id].height =
                properties['height'] || $('#' + effects[id].slide_number + ' .' + effects[id].elem).height() || 100;
            effects[id].init_height = effects[id].height;
            effects[id].left = properties['left'] || effects[id].height || 100;
            effects[id].init_left = effects[id].left;
            effects[id].loop = properties.loop || false;
            effects[id].delay_time = properties.delay_time || durations.summ_cars() || 0;
            (effects[id].time_between = properties.time_between || 100),
                (effects[id].time_between += durations['slide_up_down']);
            effects[id].duration = properties.duration || durations['slide_up_down'] || 200;
            effects[id].start_diretion = properties.start_diretion || 'down';
            effects[id].direction = effects[id].direction || effects[id].start_diretion;
        }

        effects[id].func = function () {
            effects[id].code = effects[id].direction === 'down' ? '+=' : '-=';

            const selector = $('#' + effects[id].slide_number + ' .' + effects[id].elem)[0];

            $(selector).animate(
                {top: effects[id].code + effects[id].height},
                {
                    duration: effects[id].duration,
                    complete: function () {
                        effects[id].direction = effects[id].direction === 'down' ? 'up' : 'down';
                    },
                }
            );

            if (!effects[id].loop) {
                clearInterval(effects[id].interval);
            }
        };

        effects[id].timeout = setTimeout(function () {
            effects[id].interval = setInterval(effects[id].func, effects[id].time_between);
        }, effects[id].delay_time);
    }

    function levitation(elem, properties) {
        if (!elem || !properties || typeof properties !== 'object') return false;

        const id = $('.slide_block .active').attr('id') + '_' + elem;

        if (!effects[id]) {
            effects[id] = {};
            effects[id].slide_number = slide_number;
            effects[id].elem = elem;
            effects[id].height =
                properties['height'] || $('#' + effects[id].slide_number + ' .' + effects[id].elem).height() || 100;
            effects[id].init_height = effects[id].height;
            effects[id].max_height = properties['max_height'] || effects[id].height + 200;
            effects[id].plus_height = 0;
            effects[id].left = properties['left'] || effects[id].height || 100;
            effects[id].init_left = effects[id].left;
            effects[id].max_left = properties['max_left'] || effects[id].left + 200;
            effects[id].plus_left = 0;
            effects[id].loop = properties.loop || false;
            effects[id].delay_time = properties.delay_time || durations.summ() || 0;
            effects[id].duration = properties.duration || 200;
            effects[id].start_diretion = properties.start_diretion || 'down';
            effects[id].direction = effects[id].direction || effects[id].start_diretion;
            effects[id].milti_object = properties.multi_object || false;
        }

        effects[id].func = function levi() {
            let objects;

            if (effects[id].milti_object) {
                objects = $('#' + effects[id].slide_number + ' .' + effects[id].elem);
            } else {
                objects = $($('#' + effects[id].slide_number + ' .' + effects[id].elem)[0]);
            }

            effects[id].code = effects[id].direction === 'down' ? '+=' : '-=';
            effects[id].direction = effects[id].direction === 'down' ? 'up' : 'down';

            objects.animate(
                {top: effects[id].code + effects[id].height, left: effects[id].code + effects[id].left},
                {
                    duration: effects[id].duration,
                    queue: false,
                    easing: 'linear',
                    complete: function () {
                        effects[id].height = effects[id].init_height;
                        effects[id].left = effects[id].init_left;
                    },
                }
            );
        };

        effects[id].timeout = setTimeout(function () {
            effects[id].interval = setInterval(effects[id].func, effects[id].duration);
        }, effects[id].delay_time);
    }

    // Clear all intervals and close all popups
    for (obj in effects) {
        clearInterval(effects[obj].interval);
    }

    if (secondary_slides_interval) {
        clearInterval(secondary_slides_interval);
    }

    if (secondary_slides_timeout) {
        clearTimeout(secondary_slides_timeout);
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

    const slide_number = $(elem).attr('rel');

    function hasClass(slide_number) {
        return $('#' + slide_number).hasClass('second');
    }

    if (hasClass(slide_number)) {
        $('.slide_block.active').addClass('hided');
        $('.second.active').removeClass('active');

        if (slide_number.match(/slide_1/)) {
            $('.submenu.slide_1_2').show();
        }

        if (slide_number.match(/slide_3/)) {
            $('.submenu.slide_3_2').show();
        }
    } else {
        $('.submenu').hide();
        $('.slide_block .second').hide();
        $('.slide_block.active').removeClass('hided');
        $('.slide_block.active, .slide_block .second.active').removeClass('active').hide();
    }

    if (!if_first) {
        $('.number_slide').hide();
    }

    if (!$(elem).hasClass('human') && !$(elem).hasClass('submenu_link')) {
        $(elem).addClass('active');
    }

    const max_slide_num_regex = new RegExp('slide_' + $('.slide_block').length);

    if ($(elem).attr('rel').match(max_slide_num_regex) && if_first) {
        if ($('.block_nav').is(':visible')) $('.block_nav').fadeOut();

        if ($('.arrow_slide_right').is(':visible')) $('.arrow_slide_right').fadeOut();

        if ($('.arrow_slide_left').is(':hidden')) $('.arrow_slide_left').fadeIn();

        if ($('#navigation_slide').is(':hidden')) $('#navigation_slide').fadeIn();
    } else {
        if ($('.block_nav').is(':hidden')) $('.block_nav').fadeIn();

        if ($('.arrow_slide_right').is(':hidden') && !$(elem).attr('rel').match(max_slide_num_regex))
            $('.arrow_slide_right').fadeIn();

        if ($(elem).attr('rel') === 'slide_' + $('.slide_block').length) $('.arrow_slide_right').fadeOut();

        if ($('#navigation_slide').is(':visible')) $('#navigation_slide').fadeOut();

        if (
            $(elem)
                .attr('rel')
                .match(/slide_1/) /*=== 'slide_1'*/
        ) {
            if ($('.arrow_slide_left').is(':visible')) $('.arrow_slide_left').fadeOut();
        } else {
            if ($('.arrow_slide_left').is(':hidden')) $('.arrow_slide_left').fadeIn();
        }
    }

    $('#navigation_slide').removeClass();
    $('#navigation_slide').addClass('navigation_slide ' + $(elem).attr('rel'));

    $('#' + slide_number).addClass('active').show();

    // Set an effects to each slide
    switch (slide_number) {
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
            fade_in('small_text_block', durations.summ(), 'all');
            fade_in('small', durations.summ() - 500);
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
            slide_from('left');
            slide_from('left', 'middle2', durations.bg + durations.front + 1500, 'plane');
            fade_in('small', durations.front + durations.bg);
            fade_in('small_text_block', durations.front + durations.bg, 'all');
            break;
        case 'slide_2_2':
            fade_in('bg');
            slide_loop_with_stop('middle', {stop_time: 3000, stop_point: '-675px', delay_time: 0});
            break;
        case 'slide_3':
            fade_in('front');
            fade_in('bg', durations.front);
            slide_from('right');
            fade_in('small', durations.front + durations.bg);
            fade_in('small_text_block', durations.front + durations.bg, 'all');
            break;
        case 'slide_3_2_1':
            fade_in('bg');
            slide_from('left', 'middle', durations.bg);
            break;
        case 'slide_3_2_2':
            fade_in('bg');
            slide_from('left', 'middle', durations.bg);
            break;
        case 'slide_3_2_3':
            fade_in('bg');
            slide_from('left', 'middle', durations.bg);
            break;
        case 'slide_4':
            fade_in('front');
            fade_in('bg', durations.front);
            fade_in('middle', durations.summ());
            fade_in('small', durations.bg + durations.front);
            fade_in('small_text_block', durations.summ(), 'all');
            break;
        case 'slide_4_2':
            fade_in('front');
            fade_in('bg', durations.front);
            fade_in('middle', durations.summ());
            fade_in('small', durations.summ());
            fade_in('small_text_block', durations.summ(), 'all');
            break;
        case 'slide_5':
            fade_in('front');
            fade_in('bg', durations.front);
            fade_in('middle', durations.bg + durations.front);
            fade_in('small', durations.bg + durations.front);
            fade_in('small_text_block', durations.summ(), 'all');
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
            slide_from('right', 'middle', durations.bg + durations.front);
            slide_up_down('middle_2', {height: 130, time_between: 2000, loop: true});
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
                delay_time: durations.front,
                duration: 2000,
                loop: true,
                multi_object: true,
            });
            levitation('middle2', {
                height: 20,
                delay_time: durations.front,
                duration: 1700,
                loop: true,
                multi_object: true,
            });
            break;
        case 'slide_7':
            fade_in('front');
            fade_in('bg', durations.front);
            fade_in('middle_2', durations.front);
            slide_from('left');
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

    change_min_height();

    if (if_first) {
        if_first = false;
    }

    setTimeout(function () {
        $(elem).on('click', function () {
            sl_btn_click(elem);
            return false;
        });
    }, 100);

    return false;
}

const site_popup_show = function (show_popup) {
    const email = $(show_popup).attr('rel');

    $('.dark_bg').show();
    $('#map_contact_form_email_to').attr('value', email);
    $('#contact_form_on_map').show();

    return false;
};

/* Autoplay for secondary slides */
function secondary_slides_autoplay(parent) {
    if ($(parent).length <= 0) {
        throw new Error('Parent element missed: "' + parent + '"');
    }

    const submenu_class = parent.substring(1) + '_2';
    const el = $('.submenu.' + submenu_class + ' .menu_item.active');
    const delay = 6500;

    function play(element) {
        const nextEl = element.next('.menu_item');

        if (nextEl.length > 0) {
            nextEl.children('.submenu_link').click();
            secondary_slides_interval = setInterval(secondary_slides_autoplay, delay, parent);
        }
    }

    if ($('.submenu.' + submenu_class).length <= 0) {
        throw new Error('Submenu element missed: "' + submenu_class + '"');
    }

    if (secondary_slides_interval) {
        clearInterval(secondary_slides_interval);
    }

    if (el.prev('.menu_item').length > 0) {
        play(el);
    } else {
        secondary_slides_timeout = setTimeout(play, delay);
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
            const inner_html = $(this).html(),
                html =
                    '<div class="form_bg"></div><a href="#" class="close"></a><div class="tl"></div><div class="tr"></div><div class="bl"></div><div class="br"></div><div class="t"></div><div class="b"></div><div class="l"></div><div class="r"></div><div class="center"></div>';
            let cls;

            $(this).html(html);
            $(this).find('.center').html(inner_html);

            cls =
                '' +
                $(this).parents().eq(0).attr('id') +
                '_' +
                $(this)
                    .attr('class')
                    .match(/popup_[0-9]+/);

            $(this)
                .parents()
                .eq(0)
                .find(
                    'a[rel=' +
                    $(this)
                        .attr('class')
                        .match(/popup_[0-9]+/) +
                    ']'
                )
                .attr('rel', cls);

            $(this).attr(
                'class',
                $(this)
                    .attr('class')
                    .replace(/popup_[0-9]+/, cls)
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

        function wrap_click() {
            $('.popup').hide();
            $('.slide_up_down').slideUp('slow');
            $('.wrap').unbind('click');
        }

        const slide = '.slide_up_down.' + $(this).attr('rel');

        if ($(slide).is(':hidden')) {
            $(slide).slideDown();

            setTimeout(function () {
                $('.wrap').bind('click', wrap_click);
            }, 50);
        } else {
            $(slide).slideUp();
        }

        return false;
    });

    /* Filials buttons click event */
    $('.filials li a').bind('click', function () {
        const region_id = $(this).prev().attr('rel');

        $('span.office_location').html($(this).attr('rel'));
        $('.region_phone').html($(this).prev().html());
        SetCookie('region', region_id, 30);

        /* If contact page, changing active region */
        if ($('.region.active').length) {
            $('.region.active').removeClass('active');

            if ($('#region_' + region_id).length) {
                $('#region_' + region_id).addClass('active');
            }
        }

        $('.filials').slideUp();

        document.location.href = '/contacts/';

        return false;
    });

    $('span.office_location').html($('#selectedRegion').next().attr('rel'));

    $('.region_phone').html($('#selectedRegion').html());

    const region_id = $('#selectedRegion').attr('rel');

    SetCookie('region', region_id, 30);

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
        sl_btn_click(this);
        return false;
    });

    const slide_block_length = $('.slide_block').length;

    /* Initialize image loader */
    load_images(slide_block_length);

    $('.slide_block').hide();

    $('#navigation_slide .navigation a, #navigation_slide .text_nav a, .block_nav nav a')
        .off('click')
        .addClass('unready');

    $('.unready').on('click', false);

    /* Zero slide numbers click event */
    $('.slide_block_zero a.number').on('click', function () {
        $('.slide_block_zero').fadeOut();
        const elem_rel = $(this).attr('rel');

        setTimeout(function () {
            sl_btn_click($('.navigation_slide .navigation a[rel=' + elem_rel + ']'));
        }, 800);

        return false;
    });

    /* Human links click event */
    $('.slide_block a.human, #slide_1 a.link').on('click', function () {
        const self = $(this);

        if (self.hasClass('human slide_1')) {
            sl_btn_click('a.submenu_link[rel=' + self.attr('rel') + ']');
            secondary_slides_autoplay('#slide_1');
        } else if (self.hasClass('human slide_3')) {
            sl_btn_click('a.submenu_link[rel=' + self.attr('rel') + ']');
            secondary_slides_autoplay('#slide_3');
        } else {
            sl_btn_click('a.human[rel=' + self.attr('rel') + ']');
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
        sl_btn_click('.menu_item a.submenu_link[rel=' + self.attr('rel') + ']');

        return false;
    });

    $('.change_shape .submenu_link').on('click', function () {
        sl_btn_click(this);
    });

    /* Slide arrows click event */
    $('.arrow_slide_left.active, .arrow_slide_right.active').on('click', function arrow_left_click() {
        const self = this;
        let direction = 'left';

        $(self).off('click').on('click', false);

        if ($(self).hasClass('arrow_slide_right')) {
            direction = 'right';
        }

        const current_active_slide = parseInt($('.slide_block.active').attr('id').substring(6));

        if (
            (direction === 'left' && current_active_slide > 1 && current_active_slide <= $('.slide_block').length) ||
            (direction === 'right' && current_active_slide >= 1 && current_active_slide < $('.slide_block').length)
        ) {
            switch (direction) {
                case 'left':
                    $('.navigation a.link[rel=slide_' + (current_active_slide - 1) + ']').click();
                    break;
                case 'right':
                    $('.navigation a.link[rel=slide_' + (current_active_slide + 1) + ']').click();
                    break;
                default:
                    break;
            }
        }

        setTimeout(function () {
            $(self).on('click', arrow_left_click);
        }, 500);

        return false;
    });

    /* Arrows hover event */
    if ($('.middle_padding.main').length > 0) {
        $(document).on('mousemove', mouse_move);
    }

    /* Hide arrows on #navigation_slide hover */
    $('#navigation_slide').on('mouseover', function () {
        $('.arrow_slide_left, .arrow_slide_right').removeClass('visible');
        $(document).off('mousemove');
    }).on('mouseleave', function () {
        $(document).on('mousemove', mouse_move);
    });

    $('.slide_block:not([id=slide_' + $('.slide_block').length + '])')
        .children('.number_slide')
        .hide();

    /* Secondary navigation buttons */
    $('.block_nav').on('click dblclick', 'a.active', false);

    $('.block_nav').on('click', 'a', function block_nav_click(self) {
        self = this;
        $(self).off('click').on('click', false);
        $('.navigation a[rel=' + $(self).attr('rel') + ']').click();

        setTimeout(function () {
            $(self).on('click', block_nav_click);
        }, 500);
        return false;
    });

    $('.slide_0').mouseenter(function () {
        $('.pointer').show();
        return false;
    });

    $('.slide_0').mouseleave(function () {
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
                300
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
