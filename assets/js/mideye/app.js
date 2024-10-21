/*
 * App
 */

function App() {

    var self = this,
        doc = $(document),
        win = $(window),

        windowHeight,
        windowWidth,
        currentScroll,

        headerHeight,

        $html = $('html'),
        $body = $('body'),

        $header = $('#header'),
        $contentWrapper = $('#content-wrapper'),
        $content = $('#content'),
        $footer = $('#footer'),

        isHome = $body.hasClass('home'),
        isExplorer = $html.hasClass('lt-ie9'),
        isMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent));

    /*
     * Init
     */

    self.init = function () {

        win.bind('scroll', self.windowScroll);
        win.resize(self.windowResize);

        self.windowResize();

        self.load();

    }

    /*
     * Load
     */

    self.load = function () {

        self.reveal();

        FastClick.attach(document.body);

    }

    self.fadeInLists = function () {

        var elem = Reveal.getCurrentSlide();

        $('.fadeIn').removeClass('fadeIn');
        $(elem).find('li').addClass('fadeIn');

    }


    self.bulletPoints = function () {

        var noBulletGroup = [1, 6, 7, 10, 15, 22, 23];
        var groupOne = [2, 3, 4, 5];
        var groupTwo = [8, 9];
        var groupThree = [11, 12, 13, 14];
        var groupFour = [16, 17, 18, 19, 20, 21];
        var groupFive = [24, 25, 26, 27, 28];

        var current = Reveal.getIndices().h;

        checkGroupBullets(groupOne, current);
        checkGroupBullets(groupTwo, current);
        checkGroupBullets(groupThree, current);
        checkGroupBullets(groupFour, current);
        checkGroupBullets(groupFive, current);

        if (noBulletGroup.indexOf(current) > -1) {
            $('#bulletPoints').html('');
        }

        function checkGroupBullets(group, current) {
            var dots;
            if (group.indexOf(current) > -1) {
                dots = [];
                for (var i = 0; i < group.length; i++) {
                    if (group[i] == current) {
                        dots[i] = 'selected';
                    } else {
                        dots[i] = 'blank';
                    }
                }

                insertBulletPoints(dots);
            }
        }

        function insertBulletPoints(dots) {
            var targetDiv = $('#bulletPoints');
            targetDiv.html('');

            for (var i = 0; i < dots.length; i++) {
                targetDiv.append('<li class="' + dots[i] + '"></li>');
            }
        }


    }

    self.showHideButtons = function () {

        var start_visible = [1, 7, 23];
        var prevnext_visible = [2, 3, 4, 5, 6, 8, 9, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 24, 25, 26, 27, 28];

        // get current slide id??
        var currentId = Reveal.getIndices().h;

        if (start_visible.indexOf(currentId) > -1) {
            $('#start-btn').show();
            $('#back-btn, #next-btn').hide();
            return;
        }

        if (prevnext_visible.indexOf(currentId) > -1) {
            $('#start-btn').hide();
            $('#back-btn, #next-btn').show();
        }

    }

    self.reveal = function () {

        if (!$('.reveal').length > 0)
            return;

        if ($body.hasClass('page-template-template-tour-php')) {
            $html.addClass('mideye-tech-tour');
        }

        Reveal.initialize({
            minScale: 0.6,
            center: false,
            controls: false,
            autoSlide: 0,
            history: true,
            progress: false,
            transition: 'fade',
            backgroundTransition: 'none',
            slideNumber: false,
            overview: false,
            keyboard: false,
            hideAddressBar: true,

            // Optional libraries used to extend on reveal.js
            dependencies: [
                {
                    src: vektor.themepath + '/js/classList.js', condition: function () {
                    return !document.body.classList;
                }
                }
            ]
        });

        $('.slide-to').on('click', function (e) {
            e.preventDefault();
            var target = parseInt($(this).attr('data-reveal-slide-to'));
            if (!target && target != 0)
                return;
            Reveal.slide(target);

            self.fadeInLists();
            self.showHideButtons();
            self.bulletPoints();
        });

        $('.prev-fragment').on('click', function (e) {
            e.preventDefault();

            Reveal.prev();

            self.fadeInLists();
            self.showHideButtons();
            self.bulletPoints();
        });

        $('.next-fragment').on('click', function (e) {
            e.preventDefault();

            Reveal.next();

            self.fadeInLists();
            self.showHideButtons();
            self.bulletPoints();
        });

        Reveal.addEventListener('state--change-user-example', function () {
            Reveal.slide(0);
        }, false);

        Reveal.addEventListener('state--change-user-example-smartphone', function () {
            Reveal.slide(7);
        }, false);

        if (windowWidth < 768) {

            Reveal.configure({
                history: false,
                transition: 'linear',
                backgroundTransition: 'slide',
                keyboard: true
            });

            /*
             $(window).bind("resize", function(){
             screenOrientation = ($(window).width() > $(window).height())? 90 : 0;

             if(screenOrientation == 90 || screenOrientation == -90){

             }

             });
             */

        }

    }


    /*
     * Window scroll
     */

    self.windowScroll = function () {
        currentScroll = win.scrollTop();

        if (windowWidth > 767) {
            if (currentScroll > headerHeight + headerHeight) {
                $body.addClass('minified');
                $header.css('top', 0);

            } else if (currentScroll > headerHeight) {
                $body.addClass('sticky');
                $body.removeClass('minified');
                $contentWrapper.css('padding-top', headerHeight);
                $header.css('top', -headerHeight);

            } else {
                $body.removeClass('sticky minified');
                $contentWrapper.css('padding-top', 'inherit');
                $header.css('top', 'inherit');
            }
        }
    }

    /*
     * Window resize
     */

    self.windowResize = function () {
        windowHeight = win.height();
        windowWidth = win.width();

        headerHeight = 119;
        footerHeight = $footer.outerHeight();
    }

}

/*
 * Document ready
 */

$(document).ready(function () {
    var app = new App();
    app.init();
});

$(document).on('click', function (e) {

    var $element = $(e.target);

    if ($element.parents('.present').length) {

        $('.present li.animated').removeClass (function (index, css) {
            return (css.match (/(^|\s)obj\S+/g) || []).join(' ');
        });

    }

});