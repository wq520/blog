"use strict";

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}
$(function () {
        var e = window.location.protocol + "//" + window.location.host;
        1200 <= $(document).width() ? ($(".mod-index__feature .img_list_6pic a").removeClass("word_display"), window.ActiveXObject || "ActiveXObject" in window ? console.log("当前浏览器IE内核，部分效果不可展现！") : ($("body").on("mouseenter", ".mod-index__feature .img_list_6pic a", function () {
            $(this).addClass("word_display")
        }), $("body").on("mouseleave", ".mod-index__feature .img_list_6pic a", function () {
            $(this).removeClass("word_display")
        })), "-1" != e.indexOf("weipxiu.com") && setTimeout(function () {
            ! function () {
                if (window.Notification) {
                    var a = function () {
                        if ("granted" == Notification.permission) {
                            var e = new Notification("官方提示：", {
                                body: '欢迎点击加入"Vue.js3.0技术栈"互相学习、交流！',
                                icon: "/wp-content/themes/Art_Blog/images/tishi.png"
                            });
                            e.onclick = function () {
                                window.open("https://jq.qq.com/?_wv=1027&k=4BemYKg"), e.close()
                            }, layer.ready(function () {
                                1 == localStorage.getItem("off_y") && new Audio("https://tts.baidu.com/text2audio?cuid=baiduid&lan=zh&ctp=1&pdt=311&tex=您有一条新的消息，请注意查收！").play()
                            })
                        }
                    };
                    "granted" == Notification.permission ? a() : "denied" != Notification.permission && Notification.requestPermission(function (e) {
                        a()
                    })
                }
            }()
        }, 3e3), window.console && window.console.log && setTimeout(function () {

        }, 1500), $("#hide").show(), $("html,body").css({
            "overflow-y": "visible"
        }), $(".buffer").fadeOut(), $(".buffer .bar").hide(), $(".header.Top").css("WebkitAnimation-duration", ".7s"), $(".header.Top").css("MsAnimation-duration", ".7s"), $(".header.Top").css("animation -duration", ".7s"), setTimeout(function () {
            $("#vedio").animate({
                bottom: "0"
            }, 1e3), $(".hide").animate({
                bottom: "193px"
            }, 1e3)
        }, 3500)) : ($(".continar-right").show(), new Swiper(".swiper-container1", {
            pagination: ".swiper-pagination",
            slidesPerView: 1,
            effect: "slide",
            paginationClickable: !0,
            spaceBetween: 0,
            autoplay: 4500,
            speed: 500,
            autoplayDisableOnInteraction: !1,
            loop: !0
        })), $(".wpm_form .wpm_email input").attr("type", "email"), $(window).resize(function () {
            1200 <= $(document).width() && (window.location.href != e && window.location.href != e + "/" || ($("#js_banner").show(), $("body > .continar").css("margin-top", "10px")))
        })
    }),
    function () {
        function X(e, l) {
            function g(e) {
                return Math.floor(e)
            }

            function a() {
                var e = x.params.autoplay,
                    a = x.slides.eq(x.activeIndex);
                a.attr("data-swiper-autoplay") && (e = a.attr("data-swiper-autoplay") || x.params.autoplay), x.autoplayTimeoutId = setTimeout(function () {
                    x.params.loop ? (x.fixLoop(), x._slideNext(), x.emit("onAutoplay", x)) : x.isEnd ? l.autoplayStopOnLast ? x.stopAutoplay() : (x._slideTo(0), x.emit("onAutoplay", x)) : (x._slideNext(), x.emit("onAutoplay", x))
                }, e)
            }

            function o(e, t) {
                var a = G(e.target);
                if (!a.is(t))
                    if ("string" == typeof t) a = a.parents(t);
                    else if (t.nodeType) {
                    var i;
                    return a.parents().each(function (e, a) {
                        a === t && (i = t)
                    }), i ? t : void 0
                }
                if (0 !== a.length) return a[0]
            }

            function t(e, a) {
                a = a || {};
                var t = new(window.MutationObserver || window.WebkitMutationObserver)(function (e) {
                    e.forEach(function (e) {
                        x.onResize(!0), x.emit("onObserverUpdate", x, e)
                    })
                });
                t.observe(e, {
                    attributes: void 0 === a.attributes || a.attributes,
                    childList: void 0 === a.childList || a.childList,
                    characterData: void 0 === a.characterData || a.characterData
                }), x.observers.push(t)
            }

            function i(e) {
                e.originalEvent && (e = e.originalEvent);
                var a = e.keyCode || e.charCode;
                if (!x.params.allowSwipeToNext && (x.isHorizontal() && 39 === a || !x.isHorizontal() && 40 === a)) return !1;
                if (!x.params.allowSwipeToPrev && (x.isHorizontal() && 37 === a || !x.isHorizontal() && 38 === a)) return !1;
                if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                    if (37 === a || 39 === a || 38 === a || 40 === a) {
                        var t = !1;
                        if (0 < x.container.parents("." + x.params.slideClass).length && 0 === x.container.parents("." + x.params.slideActiveClass).length) return;
                        var i = window.pageXOffset,
                            s = window.pageYOffset,
                            r = window.innerWidth,
                            n = window.innerHeight,
                            o = x.container.offset();
                        x.rtl && (o.left = o.left - x.container[0].scrollLeft);
                        for (var l = [
                                [o.left, o.top],
                                [o.left + x.width, o.top],
                                [o.left, o.top + x.height],
                                [o.left + x.width, o.top + x.height]
                            ], p = 0; p < l.length; p++) {
                            var d = l[p];
                            d[0] >= i && d[0] <= i + r && d[1] >= s && d[1] <= s + n && (t = !0)
                        }
                        if (!t) return
                    }
                    x.isHorizontal() ? (37 !== a && 39 !== a || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (39 === a && !x.rtl || 37 === a && x.rtl) && x.slideNext(), (37 === a && !x.rtl || 39 === a && x.rtl) && x.slidePrev()) : (38 !== a && 40 !== a || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === a && x.slideNext(), 38 === a && x.slidePrev()), x.emit("onKeyPress", x, a)
                }
            }

            function s(e) {
                e.originalEvent && (e = e.originalEvent);
                var a, t, i, s, r, n = 0,
                    o = x.rtl ? -1 : 1,
                    l = (r = s = i = t = 0, "detail" in (a = e) && (i = a.detail), "wheelDelta" in a && (i = -a.wheelDelta / 120), "wheelDeltaY" in a && (i = -a.wheelDeltaY / 120), "wheelDeltaX" in a && (t = -a.wheelDeltaX / 120), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, r = 10 * i, "deltaY" in a && (r = a.deltaY), "deltaX" in a && (s = a.deltaX), (s || r) && a.deltaMode && (1 === a.deltaMode ? (s *= 40, r *= 40) : (s *= 800, r *= 800)), s && !t && (t = s < 1 ? -1 : 1), r && !i && (i = r < 1 ? -1 : 1), {
                        spinX: t,
                        spinY: i,
                        pixelX: s,
                        pixelY: r
                    });
                if (x.params.mousewheelForceToAxis)
                    if (x.isHorizontal()) {
                        if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return;
                        n = l.pixelX * o
                    } else {
                        if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return;
                        n = l.pixelY
                    }
                else n = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * o : -l.pixelY;
                if (0 !== n) {
                    if (x.params.mousewheelInvert && (n = -n), x.params.freeMode) {
                        var p = x.getWrapperTranslate() + n * x.params.mousewheelSensitivity,
                            d = x.isBeginning,
                            u = x.isEnd;
                        if (p >= x.minTranslate() && (p = x.minTranslate()), p <= x.maxTranslate() && (p = x.maxTranslate()), x.setWrapperTransition(0), x.setWrapperTranslate(p), x.updateProgress(), x.updateActiveIndex(), (!d && x.isBeginning || !u && x.isEnd) && x.updateClasses(), x.params.freeModeSticky ? (clearTimeout(x.mousewheel.timeout), x.mousewheel.timeout = setTimeout(function () {
                                x.slideReset()
                            }, 300)) : x.params.lazyLoading && x.lazy && x.lazy.load(), x.emit("onScroll", x, e), x.params.autoplay && x.params.autoplayDisableOnInteraction && x.stopAutoplay(), 0 === p || p === x.maxTranslate()) return
                    } else {
                        if (60 < (new window.Date).getTime() - x.mousewheel.lastScrollTime)
                            if (n < 0)
                                if (x.isEnd && !x.params.loop || x.animating) {
                                    if (x.params.mousewheelReleaseOnEdges) return !0
                                } else x.slideNext(), x.emit("onScroll", x, e);
                        else if (x.isBeginning && !x.params.loop || x.animating) {
                            if (x.params.mousewheelReleaseOnEdges) return !0
                        } else x.slidePrev(), x.emit("onScroll", x, e);
                        x.mousewheel.lastScrollTime = (new window.Date).getTime()
                    }
                    return e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
                }
            }

            function r(e, a) {
                e = G(e);
                var t, i, s, r = x.rtl ? -1 : 1;
                t = e.attr("data-swiper-parallax") || "0", i = e.attr("data-swiper-parallax-x"), s = e.attr("data-swiper-parallax-y"), i || s ? (i = i || "0", s = s || "0") : x.isHorizontal() ? (i = t, s = "0") : (s = t, i = "0"), i = 0 <= i.indexOf("%") ? parseInt(i, 10) * a * r + "%" : i * a * r + "px", s = 0 <= s.indexOf("%") ? parseInt(s, 10) * a + "%" : s * a + "px", e.transform("translate3d(" + i + ", " + s + ",0px)")
            }

            function n(e) {
                return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), e
            }
            if (!(this instanceof X)) return new X(e, l);
            var p = {
                    direction: "horizontal",
                    touchEventsTarget: "container",
                    initialSlide: 0,
                    speed: 300,
                    autoplay: !1,
                    autoplayDisableOnInteraction: !0,
                    autoplayStopOnLast: !1,
                    iOSEdgeSwipeDetection: !1,
                    iOSEdgeSwipeThreshold: 20,
                    freeMode: !1,
                    freeModeMomentum: !0,
                    freeModeMomentumRatio: 1,
                    freeModeMomentumBounce: !0,
                    freeModeMomentumBounceRatio: 1,
                    freeModeMomentumVelocityRatio: 1,
                    freeModeSticky: !1,
                    freeModeMinimumVelocity: .02,
                    autoHeight: !1,
                    setWrapperSize: !1,
                    virtualTranslate: !1,
                    effect: "slide",
                    coverflow: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: !0
                    },
                    flip: {
                        slideShadows: !0,
                        limitRotation: !0
                    },
                    cube: {
                        slideShadows: !0,
                        shadow: !0,
                        shadowOffset: 20,
                        shadowScale: .94
                    },
                    fade: {
                        crossFade: !1
                    },
                    parallax: !1,
                    zoom: !1,
                    zoomMax: 3,
                    zoomMin: 1,
                    zoomToggle: !0,
                    scrollbar: null,
                    scrollbarHide: !0,
                    scrollbarDraggable: !1,
                    scrollbarSnapOnRelease: !1,
                    keyboardControl: !1,
                    mousewheelControl: !1,
                    mousewheelReleaseOnEdges: !1,
                    mousewheelInvert: !1,
                    mousewheelForceToAxis: !1,
                    mousewheelSensitivity: 1,
                    mousewheelEventsTarged: "container",
                    hashnav: !1,
                    hashnavWatchState: !1,
                    history: !1,
                    replaceState: !1,
                    breakpoints: void 0,
                    spaceBetween: 0,
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerColumnFill: "column",
                    slidesPerGroup: 1,
                    centeredSlides: !1,
                    slidesOffsetBefore: 0,
                    slidesOffsetAfter: 0,
                    roundLengths: !1,
                    touchRatio: 1,
                    touchAngle: 45,
                    simulateTouch: !0,
                    shortSwipes: !0,
                    longSwipes: !0,
                    longSwipesRatio: .5,
                    longSwipesMs: 300,
                    followFinger: !0,
                    onlyExternal: !1,
                    threshold: 0,
                    touchMoveStopPropagation: !0,
                    touchReleaseOnEdges: !1,
                    uniqueNavElements: !0,
                    pagination: null,
                    paginationElement: "span",
                    paginationClickable: !1,
                    paginationHide: !1,
                    paginationBulletRender: null,
                    paginationProgressRender: null,
                    paginationFractionRender: null,
                    paginationCustomRender: null,
                    paginationType: "bullets",
                    resistance: !0,
                    resistanceRatio: .85,
                    nextButton: null,
                    prevButton: null,
                    watchSlidesProgress: !1,
                    watchSlidesVisibility: !1,
                    grabCursor: !1,
                    preventClicks: !0,
                    preventClicksPropagation: !0,
                    slideToClickedSlide: !1,
                    lazyLoading: !1,
                    lazyLoadingInPrevNext: !1,
                    lazyLoadingInPrevNextAmount: 1,
                    lazyLoadingOnTransitionStart: !1,
                    preloadImages: !0,
                    updateOnImagesReady: !0,
                    loop: !1,
                    loopAdditionalSlides: 0,
                    loopedSlides: null,
                    control: void 0,
                    controlInverse: !1,
                    controlBy: "slide",
                    normalizeSlideIndex: !0,
                    allowSwipeToPrev: !0,
                    allowSwipeToNext: !0,
                    swipeHandler: null,
                    noSwiping: !0,
                    noSwipingClass: "swiper-no-swiping",
                    passiveListeners: !0,
                    containerModifierClass: "swiper-container-",
                    slideClass: "swiper-slide",
                    slideActiveClass: "swiper-slide-active",
                    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                    slideVisibleClass: "swiper-slide-visible",
                    slideDuplicateClass: "swiper-slide-duplicate",
                    slideNextClass: "swiper-slide-next",
                    slideDuplicateNextClass: "swiper-slide-duplicate-next",
                    slidePrevClass: "swiper-slide-prev",
                    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                    wrapperClass: "swiper-wrapper",
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    buttonDisabledClass: "swiper-button-disabled",
                    paginationCurrentClass: "swiper-pagination-current",
                    paginationTotalClass: "swiper-pagination-total",
                    paginationHiddenClass: "swiper-pagination-hidden",
                    paginationProgressbarClass: "swiper-pagination-progressbar",
                    paginationClickableClass: "swiper-pagination-clickable",
                    paginationModifierClass: "swiper-pagination-",
                    lazyLoadingClass: "swiper-lazy",
                    lazyStatusLoadingClass: "swiper-lazy-loading",
                    lazyStatusLoadedClass: "swiper-lazy-loaded",
                    lazyPreloaderClass: "swiper-lazy-preloader",
                    notificationClass: "swiper-notification",
                    preloaderClass: "preloader",
                    zoomContainerClass: "swiper-zoom-container",
                    observer: !1,
                    observeParents: !1,
                    a11y: !1,
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}",
                    runCallbacksOnInit: !0
                },
                d = l && l.virtualTranslate;
            l = l || {};
            var u = {};
            for (var c in l)
                if ("object" != _typeof(l[c]) || null === l[c] || l[c].nodeType || l[c] === window || l[c] === document || void 0 !== Y && l[c] instanceof Y || "undefined" != typeof jQuery && l[c] instanceof jQuery) u[c] = l[c];
                else
                    for (var m in u[c] = {}, l[c]) u[c][m] = l[c][m];
            for (var h in p)
                if (void 0 === l[h]) l[h] = p[h];
                else if ("object" == _typeof(l[h]))
                for (var f in p[h]) void 0 === l[h][f] && (l[h][f] = p[h][f]);
            var x = this;
            if (x.params = l, x.originalParams = u, x.classNames = [], void 0 !== G && void 0 !== Y && (G = Y), (void 0 !== G || (G = void 0 === Y ? window.Dom7 || window.Zepto || window.jQuery : Y)) && (x.$ = G, x.currentBreakpoint = void 0, x.getActiveBreakpoint = function () {
                    if (!x.params.breakpoints) return !1;
                    var e, a = !1,
                        t = [];
                    for (e in x.params.breakpoints) x.params.breakpoints.hasOwnProperty(e) && t.push(e);
                    t.sort(function (e, a) {
                        return parseInt(e, 10) > parseInt(a, 10)
                    });
                    for (var i = 0; i < t.length; i++)(e = t[i]) >= window.innerWidth && !a && (a = e);
                    return a || "max"
                }, x.setBreakpoint = function () {
                    var e = x.getActiveBreakpoint();
                    if (e && x.currentBreakpoint !== e) {
                        var a = e in x.params.breakpoints ? x.params.breakpoints[e] : x.originalParams,
                            t = x.params.loop && a.slidesPerView !== x.params.slidesPerView;
                        for (var i in a) x.params[i] = a[i];
                        x.currentBreakpoint = e, t && x.destroyLoop && x.reLoop(!0)
                    }
                }, x.params.breakpoints && x.setBreakpoint(), x.container = G(e), 0 !== x.container.length)) {
                if (1 < x.container.length) {
                    var v = [];
                    return x.container.each(function () {
                        v.push(new X(this, l))
                    }), v
                }(x.container[0].swiper = x).container.data("swiper", x), x.classNames.push(x.params.containerModifierClass + x.params.direction), x.params.freeMode && x.classNames.push(x.params.containerModifierClass + "free-mode"), x.support.flexbox || (x.classNames.push(x.params.containerModifierClass + "no-flexbox"), x.params.slidesPerColumn = 1), x.params.autoHeight && x.classNames.push(x.params.containerModifierClass + "autoheight"), (x.params.parallax || x.params.watchSlidesVisibility) && (x.params.watchSlidesProgress = !0), x.params.touchReleaseOnEdges && (x.params.resistanceRatio = 0), 0 <= ["cube", "coverflow", "flip"].indexOf(x.params.effect) && (x.support.transforms3d ? (x.params.watchSlidesProgress = !0, x.classNames.push(x.params.containerModifierClass + "3d")) : x.params.effect = "slide"), "slide" !== x.params.effect && x.classNames.push(x.params.containerModifierClass + x.params.effect), "cube" === x.params.effect && (x.params.resistanceRatio = 0, x.params.slidesPerView = 1, x.params.slidesPerColumn = 1, x.params.slidesPerGroup = 1, x.params.centeredSlides = !1, x.params.spaceBetween = 0, x.params.virtualTranslate = !0), "fade" !== x.params.effect && "flip" !== x.params.effect || (x.params.slidesPerView = 1, x.params.slidesPerColumn = 1, x.params.slidesPerGroup = 1, x.params.watchSlidesProgress = !0, void(x.params.spaceBetween = 0) === d && (x.params.virtualTranslate = !0)), x.params.grabCursor && x.support.touch && (x.params.grabCursor = !1), x.wrapper = x.container.children("." + x.params.wrapperClass), x.params.pagination && (x.paginationContainer = G(x.params.pagination), x.params.uniqueNavElements && "string" == typeof x.params.pagination && 1 < x.paginationContainer.length && 1 === x.container.find(x.params.pagination).length && (x.paginationContainer = x.container.find(x.params.pagination)), "bullets" === x.params.paginationType && x.params.paginationClickable ? x.paginationContainer.addClass(x.params.paginationModifierClass + "clickable") : x.params.paginationClickable = !1, x.paginationContainer.addClass(x.params.paginationModifierClass + x.params.paginationType)), (x.params.nextButton || x.params.prevButton) && (x.params.nextButton && (x.nextButton = G(x.params.nextButton), x.params.uniqueNavElements && "string" == typeof x.params.nextButton && 1 < x.nextButton.length && 1 === x.container.find(x.params.nextButton).length && (x.nextButton = x.container.find(x.params.nextButton))), x.params.prevButton && (x.prevButton = G(x.params.prevButton), x.params.uniqueNavElements && "string" == typeof x.params.prevButton && 1 < x.prevButton.length && 1 === x.container.find(x.params.prevButton).length && (x.prevButton = x.container.find(x.params.prevButton)))), x.isHorizontal = function () {
                    return "horizontal" === x.params.direction
                }, x.rtl = x.isHorizontal() && ("rtl" === x.container[0].dir.toLowerCase() || "rtl" === x.container.css("direction")), x.rtl && x.classNames.push(x.params.containerModifierClass + "rtl"), x.rtl && (x.wrongRTL = "-webkit-box" === x.wrapper.css("display")), 1 < x.params.slidesPerColumn && x.classNames.push(x.params.containerModifierClass + "multirow"), x.device.android && x.classNames.push(x.params.containerModifierClass + "android"), x.container.addClass(x.classNames.join(" ")), x.translate = 0, x.progress = 0, x.velocity = 0, x.lockSwipeToNext = function () {
                    (x.params.allowSwipeToNext = !1) === x.params.allowSwipeToPrev && x.params.grabCursor && x.unsetGrabCursor()
                }, x.lockSwipeToPrev = function () {
                    (x.params.allowSwipeToPrev = !1) === x.params.allowSwipeToNext && x.params.grabCursor && x.unsetGrabCursor()
                }, x.lockSwipes = function () {
                    x.params.allowSwipeToNext = x.params.allowSwipeToPrev = !1, x.params.grabCursor && x.unsetGrabCursor()
                }, x.unlockSwipeToNext = function () {
                    (x.params.allowSwipeToNext = !0) === x.params.allowSwipeToPrev && x.params.grabCursor && x.setGrabCursor()
                }, x.unlockSwipeToPrev = function () {
                    (x.params.allowSwipeToPrev = !0) === x.params.allowSwipeToNext && x.params.grabCursor && x.setGrabCursor()
                }, x.unlockSwipes = function () {
                    x.params.allowSwipeToNext = x.params.allowSwipeToPrev = !0, x.params.grabCursor && x.setGrabCursor()
                }, x.setGrabCursor = function (e) {
                    x.container[0].style.cursor = "move", x.container[0].style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", x.container[0].style.cursor = e ? "-moz-grabbin" : "-moz-grab", x.container[0].style.cursor = e ? "grabbing" : "grab"
                }, x.unsetGrabCursor = function () {
                    x.container[0].style.cursor = ""
                }, x.params.grabCursor && x.setGrabCursor(), x.imagesToLoad = [], x.imagesLoaded = 0, x.loadImage = function (e, a, t, i, s, r) {
                    function n() {
                        r && r()
                    }
                    var o;
                    e.complete && s ? n() : a ? ((o = new window.Image).onload = n, o.onerror = n, i && (o.sizes = i), t && (o.srcset = t), a && (o.src = a)) : n()
                }, x.preloadImages = function () {
                    function e() {
                        null != x && x && (void 0 !== x.imagesLoaded && x.imagesLoaded++, x.imagesLoaded === x.imagesToLoad.length && (x.params.updateOnImagesReady && x.update(), x.emit("onImagesReady", x)))
                    }
                    x.imagesToLoad = x.container.find("img");
                    for (var a = 0; a < x.imagesToLoad.length; a++) x.loadImage(x.imagesToLoad[a], x.imagesToLoad[a].currentSrc || x.imagesToLoad[a].getAttribute("src"), x.imagesToLoad[a].srcset || x.imagesToLoad[a].getAttribute("srcset"), x.imagesToLoad[a].sizes || x.imagesToLoad[a].getAttribute("sizes"), !0, e)
                }, x.autoplayTimeoutId = void 0, x.autoplaying = !1, x.autoplayPaused = !1, x.startAutoplay = function () {
                    return void 0 === x.autoplayTimeoutId && !!x.params.autoplay && !x.autoplaying && (x.autoplaying = !0, x.emit("onAutoplayStart", x), void a())
                }, x.stopAutoplay = function (e) {
                    x.autoplayTimeoutId && (x.autoplayTimeoutId && clearTimeout(x.autoplayTimeoutId), x.autoplaying = !1, x.autoplayTimeoutId = void 0, x.emit("onAutoplayStop", x))
                }, x.pauseAutoplay = function (e) {
                    x.autoplayPaused || (x.autoplayTimeoutId && clearTimeout(x.autoplayTimeoutId), x.autoplayPaused = !0, 0 === e ? (x.autoplayPaused = !1, a()) : x.wrapper.transitionEnd(function () {
                        x && (x.autoplayPaused = !1, x.autoplaying ? a() : x.stopAutoplay())
                    }))
                }, x.minTranslate = function () {
                    return -x.snapGrid[0]
                }, x.maxTranslate = function () {
                    return -x.snapGrid[x.snapGrid.length - 1]
                }, x.updateAutoHeight = function () {
                    var e, a = [],
                        t = 0;
                    if ("auto" !== x.params.slidesPerView && 1 < x.params.slidesPerView)
                        for (e = 0; e < Math.ceil(x.params.slidesPerView); e++) {
                            var i = x.activeIndex + e;
                            if (i > x.slides.length) break;
                            a.push(x.slides.eq(i)[0])
                        } else a.push(x.slides.eq(x.activeIndex)[0]);
                    for (e = 0; e < a.length; e++)
                        if (void 0 !== a[e]) {
                            var s = a[e].offsetHeight;
                            t = t < s ? s : t
                        } t && x.wrapper.css("height", t + "px")
                }, x.updateContainerSize = function () {
                    var e, a;
                    e = void 0 !== x.params.width ? x.params.width : x.container[0].clientWidth, a = void 0 !== x.params.height ? x.params.height : x.container[0].clientHeight, 0 === e && x.isHorizontal() || 0 === a && !x.isHorizontal() || (e = e - parseInt(x.container.css("padding-left"), 10) - parseInt(x.container.css("padding-right"), 10), a = a - parseInt(x.container.css("padding-top"), 10) - parseInt(x.container.css("padding-bottom"), 10), x.width = e, x.height = a, x.size = x.isHorizontal() ? x.width : x.height)
                }, x.updateSlidesSize = function () {
                    x.slides = x.wrapper.children("." + x.params.slideClass), x.snapGrid = [], x.slidesGrid = [], x.slidesSizesGrid = [];
                    var e, a = x.params.spaceBetween,
                        t = -x.params.slidesOffsetBefore,
                        i = 0,
                        s = 0;
                    if (void 0 !== x.size) {
                        var r;
                        "string" == typeof a && 0 <= a.indexOf("%") && (a = parseFloat(a.replace("%", "")) / 100 * x.size), x.virtualSize = -a, x.rtl ? x.slides.css({
                            marginLeft: "",
                            marginTop: ""
                        }) : x.slides.css({
                            marginRight: "",
                            marginBottom: ""
                        }), 1 < x.params.slidesPerColumn && (r = Math.floor(x.slides.length / x.params.slidesPerColumn) === x.slides.length / x.params.slidesPerColumn ? x.slides.length : Math.ceil(x.slides.length / x.params.slidesPerColumn) * x.params.slidesPerColumn, "auto" !== x.params.slidesPerView && "row" === x.params.slidesPerColumnFill && (r = Math.max(r, x.params.slidesPerView * x.params.slidesPerColumn)));
                        var n, o, l = x.params.slidesPerColumn,
                            p = r / l,
                            d = p - (x.params.slidesPerColumn * p - x.slides.length);
                        for (e = 0; e < x.slides.length; e++) {
                            n = 0;
                            var u, c, m, h = x.slides.eq(e);
                            1 < x.params.slidesPerColumn && ("column" === x.params.slidesPerColumnFill ? (m = e - (c = Math.floor(e / l)) * l, (d < c || c === d && m === l - 1) && ++m >= l && (m = 0, c++), u = c + m * r / l, h.css({
                                "-webkit-box-ordinal-group": u,
                                "-moz-box-ordinal-group": u,
                                "-ms-flex-order": u,
                                "-webkit-order": u,
                                order: u
                            })) : c = e - (m = Math.floor(e / p)) * p, h.css("margin-" + (x.isHorizontal() ? "top" : "left"), 0 !== m && x.params.spaceBetween && x.params.spaceBetween + "px").attr("data-swiper-column", c).attr("data-swiper-row", m)), "none" !== h.css("display") && ("auto" === x.params.slidesPerView ? (n = x.isHorizontal() ? h.outerWidth(!0) : h.outerHeight(!0), x.params.roundLengths && (n = g(n))) : (n = (x.size - (x.params.slidesPerView - 1) * a) / x.params.slidesPerView, x.params.roundLengths && (n = g(n)), x.isHorizontal() ? x.slides[e].style.width = n + "px" : x.slides[e].style.height = n + "px"), x.slides[e].swiperSlideSize = n, x.slidesSizesGrid.push(n), x.params.centeredSlides ? (t = t + n / 2 + i / 2 + a, 0 === i && 0 !== e && (t = t - x.size / 2 - a), 0 === e && (t = t - x.size / 2 - a), Math.abs(t) < .001 && (t = 0), s % x.params.slidesPerGroup == 0 && x.snapGrid.push(t), x.slidesGrid.push(t)) : (s % x.params.slidesPerGroup == 0 && x.snapGrid.push(t), x.slidesGrid.push(t), t = t + n + a), x.virtualSize += n + a, i = n, s++)
                        }
                        if (x.virtualSize = Math.max(x.virtualSize, x.size) + x.params.slidesOffsetAfter, x.rtl && x.wrongRTL && ("slide" === x.params.effect || "coverflow" === x.params.effect) && x.wrapper.css({
                                width: x.virtualSize + x.params.spaceBetween + "px"
                            }), x.support.flexbox && !x.params.setWrapperSize || (x.isHorizontal() ? x.wrapper.css({
                                width: x.virtualSize + x.params.spaceBetween + "px"
                            }) : x.wrapper.css({
                                height: x.virtualSize + x.params.spaceBetween + "px"
                            })), 1 < x.params.slidesPerColumn && (x.virtualSize = (n + x.params.spaceBetween) * r, x.virtualSize = Math.ceil(x.virtualSize / x.params.slidesPerColumn) - x.params.spaceBetween, x.isHorizontal() ? x.wrapper.css({
                                width: x.virtualSize + x.params.spaceBetween + "px"
                            }) : x.wrapper.css({
                                height: x.virtualSize + x.params.spaceBetween + "px"
                            }), x.params.centeredSlides)) {
                            for (o = [], e = 0; e < x.snapGrid.length; e++) x.snapGrid[e] < x.virtualSize + x.snapGrid[0] && o.push(x.snapGrid[e]);
                            x.snapGrid = o
                        }
                        if (!x.params.centeredSlides) {
                            for (o = [], e = 0; e < x.snapGrid.length; e++) x.snapGrid[e] <= x.virtualSize - x.size && o.push(x.snapGrid[e]);
                            x.snapGrid = o, 1 < Math.floor(x.virtualSize - x.size) - Math.floor(x.snapGrid[x.snapGrid.length - 1]) && x.snapGrid.push(x.virtualSize - x.size)
                        }
                        0 === x.snapGrid.length && (x.snapGrid = [0]), 0 !== x.params.spaceBetween && (x.isHorizontal() ? x.rtl ? x.slides.css({
                            marginLeft: a + "px"
                        }) : x.slides.css({
                            marginRight: a + "px"
                        }) : x.slides.css({
                            marginBottom: a + "px"
                        })), x.params.watchSlidesProgress && x.updateSlidesOffset()
                    }
                }, x.updateSlidesOffset = function () {
                    for (var e = 0; e < x.slides.length; e++) x.slides[e].swiperSlideOffset = x.isHorizontal() ? x.slides[e].offsetLeft : x.slides[e].offsetTop
                }, x.currentSlidesPerView = function () {
                    var e, a, t = 1;
                    if (x.params.centeredSlides) {
                        var i, s = x.slides[x.activeIndex].swiperSlideSize;
                        for (e = x.activeIndex + 1; e < x.slides.length; e++) x.slides[e] && !i && (t++, (s += x.slides[e].swiperSlideSize) > x.size && (i = !0));
                        for (a = x.activeIndex - 1; 0 <= a; a--) x.slides[a] && !i && (t++, (s += x.slides[a].swiperSlideSize) > x.size && (i = !0))
                    } else
                        for (e = x.activeIndex + 1; e < x.slides.length; e++) x.slidesGrid[e] - x.slidesGrid[x.activeIndex] < x.size && t++;
                    return t
                }, x.updateSlidesProgress = function (e) {
                    if (void 0 === e && (e = x.translate || 0), 0 !== x.slides.length) {
                        void 0 === x.slides[0].swiperSlideOffset && x.updateSlidesOffset();
                        var a = -e;
                        x.rtl && (a = e), x.slides.removeClass(x.params.slideVisibleClass);
                        for (var t = 0; t < x.slides.length; t++) {
                            var i = x.slides[t],
                                s = (a + (x.params.centeredSlides ? x.minTranslate() : 0) - i.swiperSlideOffset) / (i.swiperSlideSize + x.params.spaceBetween);
                            if (x.params.watchSlidesVisibility) {
                                var r = -(a - i.swiperSlideOffset),
                                    n = r + x.slidesSizesGrid[t];
                                (0 <= r && r < x.size || 0 < n && n <= x.size || r <= 0 && n >= x.size) && x.slides.eq(t).addClass(x.params.slideVisibleClass)
                            }
                            i.progress = x.rtl ? -s : s
                        }
                    }
                }, x.updateProgress = function (e) {
                    void 0 === e && (e = x.translate || 0);
                    var a = x.maxTranslate() - x.minTranslate(),
                        t = x.isBeginning,
                        i = x.isEnd;
                    0 == a ? (x.progress = 0, x.isBeginning = x.isEnd = !0) : (x.progress = (e - x.minTranslate()) / a, x.isBeginning = x.progress <= 0, x.isEnd = 1 <= x.progress), x.isBeginning && !t && x.emit("onReachBeginning", x), x.isEnd && !i && x.emit("onReachEnd", x), x.params.watchSlidesProgress && x.updateSlidesProgress(e), x.emit("onProgress", x, x.progress)
                }, x.updateActiveIndex = function () {
                    var e, a, t, i = x.rtl ? x.translate : -x.translate;
                    for (a = 0; a < x.slidesGrid.length; a++) void 0 !== x.slidesGrid[a + 1] ? i >= x.slidesGrid[a] && i < x.slidesGrid[a + 1] - (x.slidesGrid[a + 1] - x.slidesGrid[a]) / 2 ? e = a : i >= x.slidesGrid[a] && i < x.slidesGrid[a + 1] && (e = a + 1) : i >= x.slidesGrid[a] && (e = a);
                    x.params.normalizeSlideIndex && (e < 0 || void 0 === e) && (e = 0), (t = Math.floor(e / x.params.slidesPerGroup)) >= x.snapGrid.length && (t = x.snapGrid.length - 1), e !== x.activeIndex && (x.snapIndex = t, x.previousIndex = x.activeIndex, x.activeIndex = e, x.updateClasses(), x.updateRealIndex())
                }, x.updateRealIndex = function () {
                    x.realIndex = parseInt(x.slides.eq(x.activeIndex).attr("data-swiper-slide-index") || x.activeIndex, 10)
                }, x.updateClasses = function () {
                    x.slides.removeClass(x.params.slideActiveClass + " " + x.params.slideNextClass + " " + x.params.slidePrevClass + " " + x.params.slideDuplicateActiveClass + " " + x.params.slideDuplicateNextClass + " " + x.params.slideDuplicatePrevClass);
                    var e = x.slides.eq(x.activeIndex);
                    e.addClass(x.params.slideActiveClass), l.loop && (e.hasClass(x.params.slideDuplicateClass) ? x.wrapper.children("." + x.params.slideClass + ":not(." + x.params.slideDuplicateClass + ')[data-swiper-slide-index="' + x.realIndex + '"]').addClass(x.params.slideDuplicateActiveClass) : x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + x.realIndex + '"]').addClass(x.params.slideDuplicateActiveClass));
                    var a = e.next("." + x.params.slideClass).addClass(x.params.slideNextClass);
                    x.params.loop && 0 === a.length && (a = x.slides.eq(0)).addClass(x.params.slideNextClass);
                    var t = e.prev("." + x.params.slideClass).addClass(x.params.slidePrevClass);
                    if (x.params.loop && 0 === t.length && (t = x.slides.eq(-1)).addClass(x.params.slidePrevClass), l.loop && (a.hasClass(x.params.slideDuplicateClass) ? x.wrapper.children("." + x.params.slideClass + ":not(." + x.params.slideDuplicateClass + ')[data-swiper-slide-index="' + a.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicateNextClass) : x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + a.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicateNextClass), t.hasClass(x.params.slideDuplicateClass) ? x.wrapper.children("." + x.params.slideClass + ":not(." + x.params.slideDuplicateClass + ')[data-swiper-slide-index="' + t.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicatePrevClass) : x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + t.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicatePrevClass)), x.paginationContainer && 0 < x.paginationContainer.length) {
                        var i, s = x.params.loop ? Math.ceil((x.slides.length - 2 * x.loopedSlides) / x.params.slidesPerGroup) : x.snapGrid.length;
                        if (x.params.loop ? ((i = Math.ceil((x.activeIndex - x.loopedSlides) / x.params.slidesPerGroup)) > x.slides.length - 1 - 2 * x.loopedSlides && (i -= x.slides.length - 2 * x.loopedSlides), s - 1 < i && (i -= s), i < 0 && "bullets" !== x.params.paginationType && (i = s + i)) : i = void 0 !== x.snapIndex ? x.snapIndex : x.activeIndex || 0, "bullets" === x.params.paginationType && x.bullets && 0 < x.bullets.length && (x.bullets.removeClass(x.params.bulletActiveClass), 1 < x.paginationContainer.length ? x.bullets.each(function () {
                                G(this).index() === i && G(this).addClass(x.params.bulletActiveClass)
                            }) : x.bullets.eq(i).addClass(x.params.bulletActiveClass)), "fraction" === x.params.paginationType && (x.paginationContainer.find("." + x.params.paginationCurrentClass).text(i + 1), x.paginationContainer.find("." + x.params.paginationTotalClass).text(s)), "progress" === x.params.paginationType) {
                            var r = (i + 1) / s,
                                n = r,
                                o = 1;
                            x.isHorizontal() || (o = r, n = 1), x.paginationContainer.find("." + x.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + n + ") scaleY(" + o + ")").transition(x.params.speed)
                        }
                        "custom" === x.params.paginationType && x.params.paginationCustomRender && (x.paginationContainer.html(x.params.paginationCustomRender(x, i + 1, s)), x.emit("onPaginationRendered", x, x.paginationContainer[0]))
                    }
                    x.params.loop || (x.params.prevButton && x.prevButton && 0 < x.prevButton.length && (x.isBeginning ? (x.prevButton.addClass(x.params.buttonDisabledClass), x.params.a11y && x.a11y && x.a11y.disable(x.prevButton)) : (x.prevButton.removeClass(x.params.buttonDisabledClass), x.params.a11y && x.a11y && x.a11y.enable(x.prevButton))), x.params.nextButton && x.nextButton && 0 < x.nextButton.length && (x.isEnd ? (x.nextButton.addClass(x.params.buttonDisabledClass), x.params.a11y && x.a11y && x.a11y.disable(x.nextButton)) : (x.nextButton.removeClass(x.params.buttonDisabledClass), x.params.a11y && x.a11y && x.a11y.enable(x.nextButton))))
                }, x.updatePagination = function () {
                    if (x.params.pagination && x.paginationContainer && 0 < x.paginationContainer.length) {
                        var e = "";
                        if ("bullets" === x.params.paginationType) {
                            for (var a = x.params.loop ? Math.ceil((x.slides.length - 2 * x.loopedSlides) / x.params.slidesPerGroup) : x.snapGrid.length, t = 0; t < a; t++) e += x.params.paginationBulletRender ? x.params.paginationBulletRender(x, t, x.params.bulletClass) : "<" + x.params.paginationElement + ' class="' + x.params.bulletClass + '"></' + x.params.paginationElement + ">";
                            x.paginationContainer.html(e), x.bullets = x.paginationContainer.find("." + x.params.bulletClass), x.params.paginationClickable && x.params.a11y && x.a11y && x.a11y.initPagination()
                        }
                        "fraction" === x.params.paginationType && (e = x.params.paginationFractionRender ? x.params.paginationFractionRender(x, x.params.paginationCurrentClass, x.params.paginationTotalClass) : '<span class="' + x.params.paginationCurrentClass + '"></span> / <span class="' + x.params.paginationTotalClass + '"></span>', x.paginationContainer.html(e)), "progress" === x.params.paginationType && (e = x.params.paginationProgressRender ? x.params.paginationProgressRender(x, x.params.paginationProgressbarClass) : '<span class="' + x.params.paginationProgressbarClass + '"></span>', x.paginationContainer.html(e)), "custom" !== x.params.paginationType && x.emit("onPaginationRendered", x, x.paginationContainer[0])
                    }
                }, x.update = function (e) {
                    function a() {
                        x.rtl, x.translate, t = Math.min(Math.max(x.translate, x.maxTranslate()), x.minTranslate()), x.setWrapperTranslate(t), x.updateActiveIndex(), x.updateClasses()
                    }
                    var t;
                    x && (x.updateContainerSize(), x.updateSlidesSize(), x.updateProgress(), x.updatePagination(), x.updateClasses(), x.params.scrollbar && x.scrollbar && x.scrollbar.set(), e ? (x.controller && x.controller.spline && (x.controller.spline = void 0), x.params.freeMode ? (a(), x.params.autoHeight && x.updateAutoHeight()) : (("auto" === x.params.slidesPerView || 1 < x.params.slidesPerView) && x.isEnd && !x.params.centeredSlides ? x.slideTo(x.slides.length - 1, 0, !1, !0) : x.slideTo(x.activeIndex, 0, !1, !0)) || a()) : x.params.autoHeight && x.updateAutoHeight())
                }, x.onResize = function (e) {
                    x.params.onBeforeResize && x.params.onBeforeResize(x), x.params.breakpoints && x.setBreakpoint();
                    var a = x.params.allowSwipeToPrev,
                        t = x.params.allowSwipeToNext;
                    x.params.allowSwipeToPrev = x.params.allowSwipeToNext = !0, x.updateContainerSize(), x.updateSlidesSize(), ("auto" === x.params.slidesPerView || x.params.freeMode || e) && x.updatePagination(), x.params.scrollbar && x.scrollbar && x.scrollbar.set(), x.controller && x.controller.spline && (x.controller.spline = void 0);
                    var i = !1;
                    if (x.params.freeMode) {
                        var s = Math.min(Math.max(x.translate, x.maxTranslate()), x.minTranslate());
                        x.setWrapperTranslate(s), x.updateActiveIndex(), x.updateClasses(), x.params.autoHeight && x.updateAutoHeight()
                    } else x.updateClasses(), i = ("auto" === x.params.slidesPerView || 1 < x.params.slidesPerView) && x.isEnd && !x.params.centeredSlides ? x.slideTo(x.slides.length - 1, 0, !1, !0) : x.slideTo(x.activeIndex, 0, !1, !0);
                    x.params.lazyLoading && !i && x.lazy && x.lazy.load(), x.params.allowSwipeToPrev = a, x.params.allowSwipeToNext = t, x.params.onAfterResize && x.params.onAfterResize(x)
                }, x.touchEventsDesktop = {
                    start: "mousedown",
                    move: "mousemove",
                    end: "mouseup"
                }, window.navigator.pointerEnabled ? x.touchEventsDesktop = {
                    start: "pointerdown",
                    move: "pointermove",
                    end: "pointerup"
                } : window.navigator.msPointerEnabled && (x.touchEventsDesktop = {
                    start: "MSPointerDown",
                    move: "MSPointerMove",
                    end: "MSPointerUp"
                }), x.touchEvents = {
                    start: x.support.touch || !x.params.simulateTouch ? "touchstart" : x.touchEventsDesktop.start,
                    move: x.support.touch || !x.params.simulateTouch ? "touchmove" : x.touchEventsDesktop.move,
                    end: x.support.touch || !x.params.simulateTouch ? "touchend" : x.touchEventsDesktop.end
                }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === x.params.touchEventsTarget ? x.container : x.wrapper).addClass("swiper-wp8-" + x.params.direction), x.initEvents = function (e) {
                    var a = e ? "off" : "on",
                        t = e ? "removeEventListener" : "addEventListener",
                        i = "container" === x.params.touchEventsTarget ? x.container[0] : x.wrapper[0],
                        s = x.support.touch ? i : document,
                        r = !!x.params.nested;
                    if (x.browser.ie) i[t](x.touchEvents.start, x.onTouchStart, !1), s[t](x.touchEvents.move, x.onTouchMove, r), s[t](x.touchEvents.end, x.onTouchEnd, !1);
                    else {
                        if (x.support.touch) {
                            var n = !("touchstart" !== x.touchEvents.start || !x.support.passiveListener || !x.params.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            i[t](x.touchEvents.start, x.onTouchStart, n), i[t](x.touchEvents.move, x.onTouchMove, r), i[t](x.touchEvents.end, x.onTouchEnd, n)
                        }(l.simulateTouch && !x.device.ios && !x.device.android || l.simulateTouch && !x.support.touch && x.device.ios) && (i[t]("mousedown", x.onTouchStart, !1), document[t]("mousemove", x.onTouchMove, r), document[t]("mouseup", x.onTouchEnd, !1))
                    }
                    window[t]("resize", x.onResize), x.params.nextButton && x.nextButton && 0 < x.nextButton.length && (x.nextButton[a]("click", x.onClickNext), x.params.a11y && x.a11y && x.nextButton[a]("keydown", x.a11y.onEnterKey)), x.params.prevButton && x.prevButton && 0 < x.prevButton.length && (x.prevButton[a]("click", x.onClickPrev), x.params.a11y && x.a11y && x.prevButton[a]("keydown", x.a11y.onEnterKey)), x.params.pagination && x.params.paginationClickable && (x.paginationContainer[a]("click", "." + x.params.bulletClass, x.onClickIndex), x.params.a11y && x.a11y && x.paginationContainer[a]("keydown", "." + x.params.bulletClass, x.a11y.onEnterKey)), (x.params.preventClicks || x.params.preventClicksPropagation) && i[t]("click", x.preventClicks, !0)
                }, x.attachEvents = function () {
                    x.initEvents()
                }, x.detachEvents = function () {
                    x.initEvents(!0)
                }, x.allowClick = !0, x.preventClicks = function (e) {
                    x.allowClick || (x.params.preventClicks && e.preventDefault(), x.params.preventClicksPropagation && x.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
                }, x.onClickNext = function (e) {
                    e.preventDefault(), x.isEnd && !x.params.loop || x.slideNext()
                }, x.onClickPrev = function (e) {
                    e.preventDefault(), x.isBeginning && !x.params.loop || x.slidePrev()
                }, x.onClickIndex = function (e) {
                    e.preventDefault();
                    var a = G(this).index() * x.params.slidesPerGroup;
                    x.params.loop && (a += x.loopedSlides), x.slideTo(a)
                }, x.updateClickedSlide = function (e) {
                    var a = o(e, "." + x.params.slideClass),
                        t = !1;
                    if (a)
                        for (var i = 0; i < x.slides.length; i++) x.slides[i] === a && (t = !0);
                    if (!a || !t) return x.clickedSlide = void 0, void(x.clickedIndex = void 0);
                    if (x.clickedSlide = a, x.clickedIndex = G(a).index(), x.params.slideToClickedSlide && void 0 !== x.clickedIndex && x.clickedIndex !== x.activeIndex) {
                        var s, r = x.clickedIndex,
                            n = "auto" === x.params.slidesPerView ? x.currentSlidesPerView() : x.params.slidesPerView;
                        if (x.params.loop) {
                            if (x.animating) return;
                            s = parseInt(G(x.clickedSlide).attr("data-swiper-slide-index"), 10), x.params.centeredSlides ? r < x.loopedSlides - n / 2 || r > x.slides.length - x.loopedSlides + n / 2 ? (x.fixLoop(), r = x.wrapper.children("." + x.params.slideClass + '[data-swiper-slide-index="' + s + '"]:not(.' + x.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function () {
                                x.slideTo(r)
                            }, 0)) : x.slideTo(r) : r > x.slides.length - n ? (x.fixLoop(), r = x.wrapper.children("." + x.params.slideClass + '[data-swiper-slide-index="' + s + '"]:not(.' + x.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function () {
                                x.slideTo(r)
                            }, 0)) : x.slideTo(r)
                        } else x.slideTo(r)
                    }
                };
                var b, T, S, C, w, z, M, y, E, P, I, k, L = "input, select, textarea, button, video",
                    D = Date.now(),
                    B = [];
                for (var H in x.animating = !1, x.touches = {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    }, x.onTouchStart = function (e) {
                        if (e.originalEvent && (e = e.originalEvent), (I = "touchstart" === e.type) || !("which" in e) || 3 !== e.which) {
                            if (x.params.noSwiping && o(e, "." + x.params.noSwipingClass)) return void(x.allowClick = !0);
                            if (!x.params.swipeHandler || o(e, x.params.swipeHandler)) {
                                var a = x.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
                                    t = x.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;
                                if (!(x.device.ios && x.params.iOSEdgeSwipeDetection && a <= x.params.iOSEdgeSwipeThreshold)) {
                                    if (S = !(T = !(b = !0)), k = w = void 0, x.touches.startX = a, x.touches.startY = t, C = Date.now(), x.allowClick = !0, x.updateContainerSize(), x.swipeDirection = void 0, 0 < x.params.threshold && (y = !1), "touchstart" !== e.type) {
                                        var i = !0;
                                        G(e.target).is(L) && (i = !1), document.activeElement && G(document.activeElement).is(L) && document.activeElement.blur(), i && e.preventDefault()
                                    }
                                    x.emit("onTouchStart", x, e)
                                }
                            }
                        }
                    }, x.onTouchMove = function (e) {
                        if (e.originalEvent && (e = e.originalEvent), !I || "mousemove" !== e.type) {
                            if (e.preventedByNestedSwiper) return x.touches.startX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, void(x.touches.startY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY);
                            if (x.params.onlyExternal) return x.allowClick = !1, void(b && (x.touches.startX = x.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, x.touches.startY = x.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, C = Date.now()));
                            if (I && x.params.touchReleaseOnEdges && !x.params.loop)
                                if (x.isHorizontal()) {
                                    if (x.touches.currentX < x.touches.startX && x.translate <= x.maxTranslate() || x.touches.currentX > x.touches.startX && x.translate >= x.minTranslate()) return
                                } else if (x.touches.currentY < x.touches.startY && x.translate <= x.maxTranslate() || x.touches.currentY > x.touches.startY && x.translate >= x.minTranslate()) return;
                            if (I && document.activeElement && e.target === document.activeElement && G(e.target).is(L)) return T = !0, void(x.allowClick = !1);
                            var a;
                            if (S && x.emit("onTouchMove", x, e), !(e.targetTouches && 1 < e.targetTouches.length))
                                if (x.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, x.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, void 0 === w && (w = !(x.isHorizontal() && x.touches.currentY === x.touches.startY || !x.isHorizontal() && x.touches.currentX === x.touches.startX) && (a = 180 * Math.atan2(Math.abs(x.touches.currentY - x.touches.startY), Math.abs(x.touches.currentX - x.touches.startX)) / Math.PI, x.isHorizontal() ? a > x.params.touchAngle : 90 - a > x.params.touchAngle)), w && x.emit("onTouchMoveOpposite", x, e), void 0 === k && (x.touches.currentX === x.touches.startX && x.touches.currentY === x.touches.startY || (k = !0)), b) {
                                    if (w) return void(b = !1);
                                    if (k) {
                                        x.allowClick = !1, x.emit("onSliderMove", x, e), e.preventDefault(), x.params.touchMoveStopPropagation && !x.params.nested && e.stopPropagation(), T || (l.loop && x.fixLoop(), M = x.getWrapperTranslate(), x.setWrapperTransition(0), x.animating && x.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), x.params.autoplay && x.autoplaying && (x.params.autoplayDisableOnInteraction ? x.stopAutoplay() : x.pauseAutoplay()), P = !1, !x.params.grabCursor || !0 !== x.params.allowSwipeToNext && !0 !== x.params.allowSwipeToPrev || x.setGrabCursor(!0)), T = !0;
                                        var t = x.touches.diff = x.isHorizontal() ? x.touches.currentX - x.touches.startX : x.touches.currentY - x.touches.startY;
                                        t *= x.params.touchRatio, x.rtl && (t = -t), x.swipeDirection = 0 < t ? "prev" : "next", z = t + M;
                                        var i = !0;
                                        if (0 < t && z > x.minTranslate() ? (i = !1, x.params.resistance && (z = x.minTranslate() - 1 + Math.pow(-x.minTranslate() + M + t, x.params.resistanceRatio))) : t < 0 && z < x.maxTranslate() && (i = !1, x.params.resistance && (z = x.maxTranslate() + 1 - Math.pow(x.maxTranslate() - M - t, x.params.resistanceRatio))), i && (e.preventedByNestedSwiper = !0), !x.params.allowSwipeToNext && "next" === x.swipeDirection && z < M && (z = M), !x.params.allowSwipeToPrev && "prev" === x.swipeDirection && M < z && (z = M), 0 < x.params.threshold) {
                                            if (!(Math.abs(t) > x.params.threshold || y)) return void(z = M);
                                            if (!y) return y = !0, x.touches.startX = x.touches.currentX, x.touches.startY = x.touches.currentY, z = M, void(x.touches.diff = x.isHorizontal() ? x.touches.currentX - x.touches.startX : x.touches.currentY - x.touches.startY)
                                        }
                                        x.params.followFinger && ((x.params.freeMode || x.params.watchSlidesProgress) && x.updateActiveIndex(), x.params.freeMode && (0 === B.length && B.push({
                                            position: x.touches[x.isHorizontal() ? "startX" : "startY"],
                                            time: C
                                        }), B.push({
                                            position: x.touches[x.isHorizontal() ? "currentX" : "currentY"],
                                            time: (new window.Date).getTime()
                                        })), x.updateProgress(z), x.setWrapperTranslate(z))
                                    }
                                }
                        }
                    }, x.onTouchEnd = function (e) {
                        if (e.originalEvent && (e = e.originalEvent), S && x.emit("onTouchEnd", x, e), S = !1, b) {
                            x.params.grabCursor && T && b && (!0 === x.params.allowSwipeToNext || !0 === x.params.allowSwipeToPrev) && x.setGrabCursor(!1);
                            var a, t = Date.now(),
                                i = t - C;
                            if (x.allowClick && (x.updateClickedSlide(e), x.emit("onTap", x, e), i < 300 && 300 < t - D && (E && clearTimeout(E), E = setTimeout(function () {
                                    x && (x.params.paginationHide && 0 < x.paginationContainer.length && !G(e.target).hasClass(x.params.bulletClass) && x.paginationContainer.toggleClass(x.params.paginationHiddenClass), x.emit("onClick", x, e))
                                }, 300)), i < 300 && t - D < 300 && (E && clearTimeout(E), x.emit("onDoubleTap", x, e))), D = Date.now(), setTimeout(function () {
                                    x && (x.allowClick = !0)
                                }, 0), !b || !T || !x.swipeDirection || 0 === x.touches.diff || z === M) return void(b = T = !1);
                            if (b = T = !1, a = x.params.followFinger ? x.rtl ? x.translate : -x.translate : -z, x.params.freeMode) {
                                if (a < -x.minTranslate()) return void x.slideTo(x.activeIndex);
                                if (a > -x.maxTranslate()) return void(x.slides.length < x.snapGrid.length ? x.slideTo(x.snapGrid.length - 1) : x.slideTo(x.slides.length - 1));
                                if (x.params.freeModeMomentum) {
                                    if (1 < B.length) {
                                        var s = B.pop(),
                                            r = B.pop(),
                                            n = s.position - r.position,
                                            o = s.time - r.time;
                                        x.velocity = n / o, x.velocity = x.velocity / 2, Math.abs(x.velocity) < x.params.freeModeMinimumVelocity && (x.velocity = 0), (150 < o || 300 < (new window.Date).getTime() - s.time) && (x.velocity = 0)
                                    } else x.velocity = 0;
                                    x.velocity = x.velocity * x.params.freeModeMomentumVelocityRatio, B.length = 0;
                                    var l = 1e3 * x.params.freeModeMomentumRatio,
                                        p = x.velocity * l,
                                        d = x.translate + p;
                                    x.rtl && (d = -d);
                                    var u, c = !1,
                                        m = 20 * Math.abs(x.velocity) * x.params.freeModeMomentumBounceRatio;
                                    if (d < x.maxTranslate()) x.params.freeModeMomentumBounce ? (d + x.maxTranslate() < -m && (d = x.maxTranslate() - m), u = x.maxTranslate(), P = c = !0) : d = x.maxTranslate();
                                    else if (d > x.minTranslate()) x.params.freeModeMomentumBounce ? (d - x.minTranslate() > m && (d = x.minTranslate() + m), u = x.minTranslate(), P = c = !0) : d = x.minTranslate();
                                    else if (x.params.freeModeSticky) {
                                        var h, g = 0;
                                        for (g = 0; g < x.snapGrid.length; g += 1)
                                            if (x.snapGrid[g] > -d) {
                                                h = g;
                                                break
                                            } d = Math.abs(x.snapGrid[h] - d) < Math.abs(x.snapGrid[h - 1] - d) || "next" === x.swipeDirection ? x.snapGrid[h] : x.snapGrid[h - 1], x.rtl || (d = -d)
                                    }
                                    if (0 !== x.velocity) l = x.rtl ? Math.abs((-d - x.translate) / x.velocity) : Math.abs((d - x.translate) / x.velocity);
                                    else if (x.params.freeModeSticky) return void x.slideReset();
                                    x.params.freeModeMomentumBounce && c ? (x.updateProgress(u), x.setWrapperTransition(l), x.setWrapperTranslate(d), x.onTransitionStart(), x.animating = !0, x.wrapper.transitionEnd(function () {
                                        x && P && (x.emit("onMomentumBounce", x), x.setWrapperTransition(x.params.speed), x.setWrapperTranslate(u), x.wrapper.transitionEnd(function () {
                                            x && x.onTransitionEnd()
                                        }))
                                    })) : x.velocity ? (x.updateProgress(d), x.setWrapperTransition(l), x.setWrapperTranslate(d), x.onTransitionStart(), x.animating || (x.animating = !0, x.wrapper.transitionEnd(function () {
                                        x && x.onTransitionEnd()
                                    }))) : x.updateProgress(d), x.updateActiveIndex()
                                }
                                return void((!x.params.freeModeMomentum || i >= x.params.longSwipesMs) && (x.updateProgress(), x.updateActiveIndex()))
                            }
                            var f, v = 0,
                                w = x.slidesSizesGrid[0];
                            for (f = 0; f < x.slidesGrid.length; f += x.params.slidesPerGroup) void 0 !== x.slidesGrid[f + x.params.slidesPerGroup] ? a >= x.slidesGrid[f] && a < x.slidesGrid[f + x.params.slidesPerGroup] && (v = f, w = x.slidesGrid[f + x.params.slidesPerGroup] - x.slidesGrid[f]) : a >= x.slidesGrid[f] && (v = f, w = x.slidesGrid[x.slidesGrid.length - 1] - x.slidesGrid[x.slidesGrid.length - 2]);
                            var y = (a - x.slidesGrid[v]) / w;
                            if (i > x.params.longSwipesMs) {
                                if (!x.params.longSwipes) return void x.slideTo(x.activeIndex);
                                "next" === x.swipeDirection && (y >= x.params.longSwipesRatio ? x.slideTo(v + x.params.slidesPerGroup) : x.slideTo(v)), "prev" === x.swipeDirection && (y > 1 - x.params.longSwipesRatio ? x.slideTo(v + x.params.slidesPerGroup) : x.slideTo(v))
                            } else {
                                if (!x.params.shortSwipes) return void x.slideTo(x.activeIndex);
                                "next" === x.swipeDirection && x.slideTo(v + x.params.slidesPerGroup), "prev" === x.swipeDirection && x.slideTo(v)
                            }
                        }
                    }, x._slideTo = function (e, a) {
                        return x.slideTo(e, a, !0, !0)
                    }, x.slideTo = function (e, a, t, i) {
                        void 0 === t && (t = !0), void 0 === e && (e = 0), e < 0 && (e = 0), x.snapIndex = Math.floor(e / x.params.slidesPerGroup), x.snapIndex >= x.snapGrid.length && (x.snapIndex = x.snapGrid.length - 1);
                        var s = -x.snapGrid[x.snapIndex];
                        if (x.params.autoplay && x.autoplaying && (i || !x.params.autoplayDisableOnInteraction ? x.pauseAutoplay(a) : x.stopAutoplay()), x.updateProgress(s), x.params.normalizeSlideIndex)
                            for (var r = 0; r < x.slidesGrid.length; r++) - Math.floor(100 * s) >= Math.floor(100 * x.slidesGrid[r]) && (e = r);
                        return !(!x.params.allowSwipeToNext && s < x.translate && s < x.minTranslate() || !x.params.allowSwipeToPrev && s > x.translate && s > x.maxTranslate() && (x.activeIndex || 0) !== e || (void 0 === a && (a = x.params.speed), x.previousIndex = x.activeIndex || 0, x.activeIndex = e, x.updateRealIndex(), x.rtl && -s === x.translate || !x.rtl && s === x.translate ? (x.params.autoHeight && x.updateAutoHeight(), x.updateClasses(), "slide" !== x.params.effect && x.setWrapperTranslate(s), 1) : (x.updateClasses(), x.onTransitionStart(t), 0 === a || x.browser.lteIE9 ? (x.setWrapperTranslate(s), x.setWrapperTransition(0), x.onTransitionEnd(t)) : (x.setWrapperTranslate(s), x.setWrapperTransition(a), x.animating || (x.animating = !0, x.wrapper.transitionEnd(function () {
                            x && x.onTransitionEnd(t)
                        }))), 0)))
                    }, x.onTransitionStart = function (e) {
                        void 0 === e && (e = !0), x.params.autoHeight && x.updateAutoHeight(), x.lazy && x.lazy.onTransitionStart(), e && (x.emit("onTransitionStart", x), x.activeIndex !== x.previousIndex && (x.emit("onSlideChangeStart", x), x.activeIndex > x.previousIndex ? x.emit("onSlideNextStart", x) : x.emit("onSlidePrevStart", x)))
                    }, x.onTransitionEnd = function (e) {
                        x.animating = !1, x.setWrapperTransition(0), void 0 === e && (e = !0), x.lazy && x.lazy.onTransitionEnd(), e && (x.emit("onTransitionEnd", x), x.activeIndex !== x.previousIndex && (x.emit("onSlideChangeEnd", x), x.activeIndex > x.previousIndex ? x.emit("onSlideNextEnd", x) : x.emit("onSlidePrevEnd", x))), x.params.history && x.history && x.history.setHistory(x.params.history, x.activeIndex), x.params.hashnav && x.hashnav && x.hashnav.setHash()
                    }, x.slideNext = function (e, a, t) {
                        return x.params.loop ? !x.animating && (x.fixLoop(), x.container[0].clientLeft, x.slideTo(x.activeIndex + x.params.slidesPerGroup, a, e, t)) : x.slideTo(x.activeIndex + x.params.slidesPerGroup, a, e, t)
                    }, x._slideNext = function (e) {
                        return x.slideNext(!0, e, !0)
                    }, x.slidePrev = function (e, a, t) {
                        return x.params.loop ? !x.animating && (x.fixLoop(), x.container[0].clientLeft, x.slideTo(x.activeIndex - 1, a, e, t)) : x.slideTo(x.activeIndex - 1, a, e, t)
                    }, x._slidePrev = function (e) {
                        return x.slidePrev(!0, e, !0)
                    }, x.slideReset = function (e, a, t) {
                        return x.slideTo(x.activeIndex, a, e)
                    }, x.disableTouchControl = function () {
                        return x.params.onlyExternal = !0
                    }, x.enableTouchControl = function () {
                        return !(x.params.onlyExternal = !1)
                    }, x.setWrapperTransition = function (e, a) {
                        x.wrapper.transition(e), "slide" !== x.params.effect && x.effects[x.params.effect] && x.effects[x.params.effect].setTransition(e), x.params.parallax && x.parallax && x.parallax.setTransition(e), x.params.scrollbar && x.scrollbar && x.scrollbar.setTransition(e), x.params.control && x.controller && x.controller.setTransition(e, a), x.emit("onSetTransition", x, e)
                    }, x.setWrapperTranslate = function (e, a, t) {
                        var i = 0,
                            s = 0;
                        x.isHorizontal() ? i = x.rtl ? -e : e : s = e, x.params.roundLengths && (i = g(i), s = g(s)), x.params.virtualTranslate || (x.support.transforms3d ? x.wrapper.transform("translate3d(" + i + "px, " + s + "px, 0px)") : x.wrapper.transform("translate(" + i + "px, " + s + "px)")), x.translate = x.isHorizontal() ? i : s;
                        var r = x.maxTranslate() - x.minTranslate();
                        (0 == r ? 0 : (e - x.minTranslate()) / r) !== x.progress && x.updateProgress(e), a && x.updateActiveIndex(), "slide" !== x.params.effect && x.effects[x.params.effect] && x.effects[x.params.effect].setTranslate(x.translate), x.params.parallax && x.parallax && x.parallax.setTranslate(x.translate), x.params.scrollbar && x.scrollbar && x.scrollbar.setTranslate(x.translate), x.params.control && x.controller && x.controller.setTranslate(x.translate, t), x.emit("onSetTranslate", x, x.translate)
                    }, x.getTranslate = function (e, a) {
                        var t, i, s, r;
                        return void 0 === a && (a = "x"), x.params.virtualTranslate ? x.rtl ? -x.translate : x.translate : (s = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? (6 < (i = s.transform || s.webkitTransform).split(",").length && (i = i.split(", ").map(function (e) {
                            return e.replace(",", ".")
                        }).join(", ")), r = new window.WebKitCSSMatrix("none" === i ? "" : i)) : t = (r = s.MozTransform || s.OTransform || s.MsTransform || s.msTransform || s.transform || s.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === a && (i = window.WebKitCSSMatrix ? r.m41 : 16 === t.length ? parseFloat(t[12]) : parseFloat(t[4])), "y" === a && (i = window.WebKitCSSMatrix ? r.m42 : 16 === t.length ? parseFloat(t[13]) : parseFloat(t[5])), x.rtl && i && (i = -i), i || 0)
                    }, x.getWrapperTranslate = function (e) {
                        return void 0 === e && (e = x.isHorizontal() ? "x" : "y"), x.getTranslate(x.wrapper[0], e)
                    }, x.observers = [], x.initObservers = function () {
                        if (x.params.observeParents)
                            for (var e = x.container.parents(), a = 0; a < e.length; a++) t(e[a]);
                        t(x.container[0], {
                            childList: !1
                        }), t(x.wrapper[0], {
                            attributes: !1
                        })
                    }, x.disconnectObservers = function () {
                        for (var e = 0; e < x.observers.length; e++) x.observers[e].disconnect();
                        x.observers = []
                    }, x.createLoop = function () {
                        x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass).remove();
                        var i = x.wrapper.children("." + x.params.slideClass);
                        "auto" !== x.params.slidesPerView || x.params.loopedSlides || (x.params.loopedSlides = i.length), x.loopedSlides = parseInt(x.params.loopedSlides || x.params.slidesPerView, 10), x.loopedSlides = x.loopedSlides + x.params.loopAdditionalSlides, x.loopedSlides > i.length && (x.loopedSlides = i.length);
                        var e, s = [],
                            r = [];
                        for (i.each(function (e, a) {
                                var t = G(this);
                                e < x.loopedSlides && r.push(a), e < i.length && e >= i.length - x.loopedSlides && s.push(a), t.attr("data-swiper-slide-index", e)
                            }), e = 0; e < r.length; e++) x.wrapper.append(G(r[e].cloneNode(!0)).addClass(x.params.slideDuplicateClass));
                        for (e = s.length - 1; 0 <= e; e--) x.wrapper.prepend(G(s[e].cloneNode(!0)).addClass(x.params.slideDuplicateClass))
                    }, x.destroyLoop = function () {
                        x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass).remove(), x.slides.removeAttr("data-swiper-slide-index")
                    }, x.reLoop = function (e) {
                        var a = x.activeIndex - x.loopedSlides;
                        x.destroyLoop(), x.createLoop(), x.updateSlidesSize(), e && x.slideTo(a + x.loopedSlides, 0, !1)
                    }, x.fixLoop = function () {
                        var e;
                        x.activeIndex < x.loopedSlides ? (e = x.slides.length - 3 * x.loopedSlides + x.activeIndex, e += x.loopedSlides, x.slideTo(e, 0, !1, !0)) : ("auto" === x.params.slidesPerView && x.activeIndex >= 2 * x.loopedSlides || x.activeIndex > x.slides.length - 2 * x.params.slidesPerView) && (e = -x.slides.length + x.activeIndex + x.loopedSlides, e += x.loopedSlides, x.slideTo(e, 0, !1, !0))
                    }, x.appendSlide = function (e) {
                        if (x.params.loop && x.destroyLoop(), "object" == _typeof(e) && e.length)
                            for (var a = 0; a < e.length; a++) e[a] && x.wrapper.append(e[a]);
                        else x.wrapper.append(e);
                        x.params.loop && x.createLoop(), x.params.observer && x.support.observer || x.update(!0)
                    }, x.prependSlide = function (e) {
                        x.params.loop && x.destroyLoop();
                        var a = x.activeIndex + 1;
                        if ("object" == _typeof(e) && e.length) {
                            for (var t = 0; t < e.length; t++) e[t] && x.wrapper.prepend(e[t]);
                            a = x.activeIndex + e.length
                        } else x.wrapper.prepend(e);
                        x.params.loop && x.createLoop(), x.params.observer && x.support.observer || x.update(!0), x.slideTo(a, 0, !1)
                    }, x.removeSlide = function (e) {
                        x.params.loop && (x.destroyLoop(), x.slides = x.wrapper.children("." + x.params.slideClass));
                        var a, t = x.activeIndex;
                        if ("object" == _typeof(e) && e.length) {
                            for (var i = 0; i < e.length; i++) a = e[i], x.slides[a] && x.slides.eq(a).remove(), a < t && t--;
                            t = Math.max(t, 0)
                        } else a = e, x.slides[a] && x.slides.eq(a).remove(), a < t && t--, t = Math.max(t, 0);
                        x.params.loop && x.createLoop(), x.params.observer && x.support.observer || x.update(!0), x.params.loop ? x.slideTo(t + x.loopedSlides, 0, !1) : x.slideTo(t, 0, !1)
                    }, x.removeAllSlides = function () {
                        for (var e = [], a = 0; a < x.slides.length; a++) e.push(a);
                        x.removeSlide(e)
                    }, x.effects = {
                        fade: {
                            setTranslate: function () {
                                for (var e = 0; e < x.slides.length; e++) {
                                    var a = x.slides.eq(e),
                                        t = -a[0].swiperSlideOffset;
                                    x.params.virtualTranslate || (t -= x.translate);
                                    var i = 0;
                                    x.isHorizontal() || (i = t, t = 0);
                                    var s = x.params.fade.crossFade ? Math.max(1 - Math.abs(a[0].progress), 0) : 1 + Math.min(Math.max(a[0].progress, -1), 0);
                                    a.css({
                                        opacity: s
                                    }).transform("translate3d(" + t + "px, " + i + "px, 0px)")
                                }
                            },
                            setTransition: function (e) {
                                if (x.slides.transition(e), x.params.virtualTranslate && 0 !== e) {
                                    var t = !1;
                                    x.slides.transitionEnd(function () {
                                        if (!t && x) {
                                            t = !0, x.animating = !1;
                                            for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], a = 0; a < e.length; a++) x.wrapper.trigger(e[a])
                                        }
                                    })
                                }
                            }
                        },
                        flip: {
                            setTranslate: function () {
                                for (var e = 0; e < x.slides.length; e++) {
                                    var a = x.slides.eq(e),
                                        t = a[0].progress;
                                    x.params.flip.limitRotation && (t = Math.max(Math.min(a[0].progress, 1), -1));
                                    var i = -180 * t,
                                        s = 0,
                                        r = -a[0].swiperSlideOffset,
                                        n = 0;
                                    if (x.isHorizontal() ? x.rtl && (i = -i) : (n = r, s = -i, i = r = 0), a[0].style.zIndex = -Math.abs(Math.round(t)) + x.slides.length, x.params.flip.slideShadows) {
                                        var o = x.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"),
                                            l = x.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                                        0 === o.length && (o = G('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left" : "top") + '"></div>'), a.append(o)), 0 === l.length && (l = G('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right" : "bottom") + '"></div>'), a.append(l)), o.length && (o[0].style.opacity = Math.max(-t, 0)), l.length && (l[0].style.opacity = Math.max(t, 0))
                                    }
                                    a.transform("translate3d(" + r + "px, " + n + "px, 0px) rotateX(" + s + "deg) rotateY(" + i + "deg)")
                                }
                            },
                            setTransition: function (e) {
                                if (x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), x.params.virtualTranslate && 0 !== e) {
                                    var t = !1;
                                    x.slides.eq(x.activeIndex).transitionEnd(function () {
                                        if (!t && x && G(this).hasClass(x.params.slideActiveClass)) {
                                            t = !0, x.animating = !1;
                                            for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], a = 0; a < e.length; a++) x.wrapper.trigger(e[a])
                                        }
                                    })
                                }
                            }
                        },
                        cube: {
                            setTranslate: function () {
                                var e, a = 0;
                                x.params.cube.shadow && (x.isHorizontal() ? (0 === (e = x.wrapper.find(".swiper-cube-shadow")).length && (e = G('<div class="swiper-cube-shadow"></div>'), x.wrapper.append(e)), e.css({
                                    height: x.width + "px"
                                })) : 0 === (e = x.container.find(".swiper-cube-shadow")).length && (e = G('<div class="swiper-cube-shadow"></div>'), x.container.append(e)));
                                for (var t = 0; t < x.slides.length; t++) {
                                    var i = x.slides.eq(t),
                                        s = 90 * t,
                                        r = Math.floor(s / 360);
                                    x.rtl && (s = -s, r = Math.floor(-s / 360));
                                    var n = Math.max(Math.min(i[0].progress, 1), -1),
                                        o = 0,
                                        l = 0,
                                        p = 0;
                                    t % 4 == 0 ? (o = 4 * -r * x.size, p = 0) : (t - 1) % 4 == 0 ? (o = 0, p = 4 * -r * x.size) : (t - 2) % 4 == 0 ? (o = x.size + 4 * r * x.size, p = x.size) : (t - 3) % 4 == 0 && (o = -x.size, p = 3 * x.size + 4 * x.size * r), x.rtl && (o = -o), x.isHorizontal() || (l = o, o = 0);
                                    var d = "rotateX(" + (x.isHorizontal() ? 0 : -s) + "deg) rotateY(" + (x.isHorizontal() ? s : 0) + "deg) translate3d(" + o + "px, " + l + "px, " + p + "px)";
                                    if (n <= 1 && -1 < n && (a = 90 * t + 90 * n, x.rtl && (a = 90 * -t - 90 * n)), i.transform(d), x.params.cube.slideShadows) {
                                        var u = x.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"),
                                            c = x.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");
                                        0 === u.length && (u = G('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left" : "top") + '"></div>'), i.append(u)), 0 === c.length && (c = G('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right" : "bottom") + '"></div>'), i.append(c)), u.length && (u[0].style.opacity = Math.max(-n, 0)), c.length && (c[0].style.opacity = Math.max(n, 0))
                                    }
                                }
                                if (x.wrapper.css({
                                        "-webkit-transform-origin": "50% 50% -" + x.size / 2 + "px",
                                        "-moz-transform-origin": "50% 50% -" + x.size / 2 + "px",
                                        "-ms-transform-origin": "50% 50% -" + x.size / 2 + "px",
                                        "transform-origin": "50% 50% -" + x.size / 2 + "px"
                                    }), x.params.cube.shadow)
                                    if (x.isHorizontal()) e.transform("translate3d(0px, " + (x.width / 2 + x.params.cube.shadowOffset) + "px, " + -x.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + x.params.cube.shadowScale + ")");
                                    else {
                                        var m = Math.abs(a) - 90 * Math.floor(Math.abs(a) / 90),
                                            h = 1.5 - (Math.sin(2 * m * Math.PI / 360) / 2 + Math.cos(2 * m * Math.PI / 360) / 2),
                                            g = x.params.cube.shadowScale,
                                            f = x.params.cube.shadowScale / h,
                                            v = x.params.cube.shadowOffset;
                                        e.transform("scale3d(" + g + ", 1, " + f + ") translate3d(0px, " + (x.height / 2 + v) + "px, " + -x.height / 2 / f + "px) rotateX(-90deg)")
                                    } var w = x.isSafari || x.isUiWebView ? -x.size / 2 : 0;
                                x.wrapper.transform("translate3d(0px,0," + w + "px) rotateX(" + (x.isHorizontal() ? 0 : a) + "deg) rotateY(" + (x.isHorizontal() ? -a : 0) + "deg)")
                            },
                            setTransition: function (e) {
                                x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), x.params.cube.shadow && !x.isHorizontal() && x.container.find(".swiper-cube-shadow").transition(e)
                            }
                        },
                        coverflow: {
                            setTranslate: function () {
                                for (var e = x.translate, a = x.isHorizontal() ? -e + x.width / 2 : -e + x.height / 2, t = x.isHorizontal() ? x.params.coverflow.rotate : -x.params.coverflow.rotate, i = x.params.coverflow.depth, s = 0, r = x.slides.length; s < r; s++) {
                                    var n = x.slides.eq(s),
                                        o = x.slidesSizesGrid[s],
                                        l = (a - n[0].swiperSlideOffset - o / 2) / o * x.params.coverflow.modifier,
                                        p = x.isHorizontal() ? t * l : 0,
                                        d = x.isHorizontal() ? 0 : t * l,
                                        u = -i * Math.abs(l),
                                        c = x.isHorizontal() ? 0 : x.params.coverflow.stretch * l,
                                        m = x.isHorizontal() ? x.params.coverflow.stretch * l : 0;
                                    Math.abs(m) < .001 && (m = 0), Math.abs(c) < .001 && (c = 0), Math.abs(u) < .001 && (u = 0), Math.abs(p) < .001 && (p = 0), Math.abs(d) < .001 && (d = 0);
                                    var h = "translate3d(" + m + "px," + c + "px," + u + "px)  rotateX(" + d + "deg) rotateY(" + p + "deg)";
                                    if (n.transform(h), n[0].style.zIndex = 1 - Math.abs(Math.round(l)), x.params.coverflow.slideShadows) {
                                        var g = x.isHorizontal() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top"),
                                            f = x.isHorizontal() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom");
                                        0 === g.length && (g = G('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left" : "top") + '"></div>'), n.append(g)), 0 === f.length && (f = G('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right" : "bottom") + '"></div>'), n.append(f)), g.length && (g[0].style.opacity = 0 < l ? l : 0), f.length && (f[0].style.opacity = 0 < -l ? -l : 0)
                                    }
                                }
                                x.browser.ie && (x.wrapper[0].style.perspectiveOrigin = a + "px 50%")
                            },
                            setTransition: function (e) {
                                x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                            }
                        }
                    }, x.lazy = {
                        initialImageLoaded: !1,
                        loadImageInSlide: function (e, l) {
                            if (void 0 !== e && (void 0 === l && (l = !0), 0 !== x.slides.length)) {
                                var p = x.slides.eq(e),
                                    a = p.find("." + x.params.lazyLoadingClass + ":not(." + x.params.lazyStatusLoadedClass + "):not(." + x.params.lazyStatusLoadingClass + ")");
                                !p.hasClass(x.params.lazyLoadingClass) || p.hasClass(x.params.lazyStatusLoadedClass) || p.hasClass(x.params.lazyStatusLoadingClass) || (a = a.add(p[0])), 0 !== a.length && a.each(function () {
                                    var i = G(this);
                                    i.addClass(x.params.lazyStatusLoadingClass);
                                    var s = i.attr("data-background"),
                                        r = i.attr("data-src"),
                                        n = i.attr("data-srcset"),
                                        o = i.attr("data-sizes");
                                    x.loadImage(i[0], r || s, n, o, !1, function () {
                                        if (null != x && x) {
                                            if (s ? (i.css("background-image", 'url("' + s + '")'), i.removeAttr("data-background")) : (n && (i.attr("srcset", n), i.removeAttr("data-srcset")), o && (i.attr("sizes", o), i.removeAttr("data-sizes")), r && (i.attr("src", r), i.removeAttr("data-src"))), i.addClass(x.params.lazyStatusLoadedClass).removeClass(x.params.lazyStatusLoadingClass), p.find("." + x.params.lazyPreloaderClass + ", ." + x.params.preloaderClass).remove(), x.params.loop && l) {
                                                var e = p.attr("data-swiper-slide-index");
                                                if (p.hasClass(x.params.slideDuplicateClass)) {
                                                    var a = x.wrapper.children('[data-swiper-slide-index="' + e + '"]:not(.' + x.params.slideDuplicateClass + ")");
                                                    x.lazy.loadImageInSlide(a.index(), !1)
                                                } else {
                                                    var t = x.wrapper.children("." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                                    x.lazy.loadImageInSlide(t.index(), !1)
                                                }
                                            }
                                            x.emit("onLazyImageReady", x, p[0], i[0])
                                        }
                                    }), x.emit("onLazyImageLoad", x, p[0], i[0])
                                })
                            }
                        },
                        load: function () {
                            var e, a = x.params.slidesPerView;
                            if ("auto" === a && (a = 0), x.lazy.initialImageLoaded || (x.lazy.initialImageLoaded = !0), x.params.watchSlidesVisibility) x.wrapper.children("." + x.params.slideVisibleClass).each(function () {
                                x.lazy.loadImageInSlide(G(this).index())
                            });
                            else if (1 < a)
                                for (e = x.activeIndex; e < x.activeIndex + a; e++) x.slides[e] && x.lazy.loadImageInSlide(e);
                            else x.lazy.loadImageInSlide(x.activeIndex);
                            if (x.params.lazyLoadingInPrevNext)
                                if (1 < a || x.params.lazyLoadingInPrevNextAmount && 1 < x.params.lazyLoadingInPrevNextAmount) {
                                    var t = x.params.lazyLoadingInPrevNextAmount,
                                        i = a,
                                        s = Math.min(x.activeIndex + i + Math.max(t, i), x.slides.length),
                                        r = Math.max(x.activeIndex - Math.max(i, t), 0);
                                    for (e = x.activeIndex + a; e < s; e++) x.slides[e] && x.lazy.loadImageInSlide(e);
                                    for (e = r; e < x.activeIndex; e++) x.slides[e] && x.lazy.loadImageInSlide(e)
                                } else {
                                    var n = x.wrapper.children("." + x.params.slideNextClass);
                                    0 < n.length && x.lazy.loadImageInSlide(n.index());
                                    var o = x.wrapper.children("." + x.params.slidePrevClass);
                                    0 < o.length && x.lazy.loadImageInSlide(o.index())
                                }
                        },
                        onTransitionStart: function () {
                            x.params.lazyLoading && (x.params.lazyLoadingOnTransitionStart || !x.params.lazyLoadingOnTransitionStart && !x.lazy.initialImageLoaded) && x.lazy.load()
                        },
                        onTransitionEnd: function () {
                            x.params.lazyLoading && !x.params.lazyLoadingOnTransitionStart && x.lazy.load()
                        }
                    }, x.scrollbar = {
                        isTouched: !1,
                        setDragPosition: function (e) {
                            var a = x.scrollbar,
                                t = (x.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - a.track.offset()[x.isHorizontal() ? "left" : "top"] - a.dragSize / 2,
                                i = -x.minTranslate() * a.moveDivider,
                                s = -x.maxTranslate() * a.moveDivider;
                            t < i ? t = i : s < t && (t = s), t = -t / a.moveDivider, x.updateProgress(t), x.setWrapperTranslate(t, !0)
                        },
                        dragStart: function (e) {
                            var a = x.scrollbar;
                            a.isTouched = !0, e.preventDefault(), e.stopPropagation(), a.setDragPosition(e), clearTimeout(a.dragTimeout), a.track.transition(0), x.params.scrollbarHide && a.track.css("opacity", 1), x.wrapper.transition(100), a.drag.transition(100), x.emit("onScrollbarDragStart", x)
                        },
                        dragMove: function (e) {
                            var a = x.scrollbar;
                            a.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, a.setDragPosition(e), x.wrapper.transition(0), a.track.transition(0), a.drag.transition(0), x.emit("onScrollbarDragMove", x))
                        },
                        dragEnd: function (e) {
                            var a = x.scrollbar;
                            a.isTouched && (a.isTouched = !1, x.params.scrollbarHide && (clearTimeout(a.dragTimeout), a.dragTimeout = setTimeout(function () {
                                a.track.css("opacity", 0), a.track.transition(400)
                            }, 1e3)), x.emit("onScrollbarDragEnd", x), x.params.scrollbarSnapOnRelease && x.slideReset())
                        },
                        draggableEvents: !1 !== x.params.simulateTouch || x.support.touch ? x.touchEvents : x.touchEventsDesktop,
                        enableDraggable: function () {
                            var e = x.scrollbar,
                                a = x.support.touch ? e.track : document;
                            G(e.track).on(e.draggableEvents.start, e.dragStart), G(a).on(e.draggableEvents.move, e.dragMove), G(a).on(e.draggableEvents.end, e.dragEnd)
                        },
                        disableDraggable: function () {
                            var e = x.scrollbar,
                                a = x.support.touch ? e.track : document;
                            G(e.track).off(e.draggableEvents.start, e.dragStart), G(a).off(e.draggableEvents.move, e.dragMove), G(a).off(e.draggableEvents.end, e.dragEnd)
                        },
                        set: function () {
                            if (x.params.scrollbar) {
                                var e = x.scrollbar;
                                e.track = G(x.params.scrollbar), x.params.uniqueNavElements && "string" == typeof x.params.scrollbar && 1 < e.track.length && 1 === x.container.find(x.params.scrollbar).length && (e.track = x.container.find(x.params.scrollbar)), e.drag = e.track.find(".swiper-scrollbar-drag"), 0 === e.drag.length && (e.drag = G('<div class="swiper-scrollbar-drag"></div>'), e.track.append(e.drag)), e.drag[0].style.width = "", e.drag[0].style.height = "", e.trackSize = x.isHorizontal() ? e.track[0].offsetWidth : e.track[0].offsetHeight, e.divider = x.size / x.virtualSize, e.moveDivider = e.divider * (e.trackSize / x.size), e.dragSize = e.trackSize * e.divider, x.isHorizontal() ? e.drag[0].style.width = e.dragSize + "px" : e.drag[0].style.height = e.dragSize + "px", 1 <= e.divider ? e.track[0].style.display = "none" : e.track[0].style.display = "", x.params.scrollbarHide && (e.track[0].style.opacity = 0)
                            }
                        },
                        setTranslate: function () {
                            if (x.params.scrollbar) {
                                var e, a = x.scrollbar,
                                    t = (x.translate, a.dragSize);
                                e = (a.trackSize - a.dragSize) * x.progress, x.rtl && x.isHorizontal() ? 0 < (e = -e) ? (t = a.dragSize - e, e = 0) : -e + a.dragSize > a.trackSize && (t = a.trackSize + e) : e < 0 ? (t = a.dragSize + e, e = 0) : e + a.dragSize > a.trackSize && (t = a.trackSize - e), x.isHorizontal() ? (x.support.transforms3d ? a.drag.transform("translate3d(" + e + "px, 0, 0)") : a.drag.transform("translateX(" + e + "px)"), a.drag[0].style.width = t + "px") : (x.support.transforms3d ? a.drag.transform("translate3d(0px, " + e + "px, 0)") : a.drag.transform("translateY(" + e + "px)"), a.drag[0].style.height = t + "px"), x.params.scrollbarHide && (clearTimeout(a.timeout), a.track[0].style.opacity = 1, a.timeout = setTimeout(function () {
                                    a.track[0].style.opacity = 0, a.track.transition(400)
                                }, 1e3))
                            }
                        },
                        setTransition: function (e) {
                            x.params.scrollbar && x.scrollbar.drag.transition(e)
                        }
                    }, x.controller = {
                        LinearSpline: function (e, a) {
                            var t, i, s, r, n;
                            this.x = e, this.y = a, this.lastIndex = e.length - 1, this.x.length, this.interpolate = function (e) {
                                return e ? (n = function (e, a) {
                                    for (i = -1, t = e.length; 1 < t - i;) e[s = t + i >> 1] <= a ? i = s : t = s;
                                    return t
                                }(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
                            }
                        },
                        getInterpolateFunction: function (e) {
                            x.controller.spline || (x.controller.spline = x.params.loop ? new x.controller.LinearSpline(x.slidesGrid, e.slidesGrid) : new x.controller.LinearSpline(x.snapGrid, e.snapGrid))
                        },
                        setTranslate: function (a, e) {
                            function t(e) {
                                a = e.rtl && "horizontal" === e.params.direction ? -x.translate : x.translate, "slide" === x.params.controlBy && (x.controller.getInterpolateFunction(e), s = -x.controller.spline.interpolate(-a)), s && "container" !== x.params.controlBy || (i = (e.maxTranslate() - e.minTranslate()) / (x.maxTranslate() - x.minTranslate()), s = (a - x.minTranslate()) * i + e.minTranslate()), x.params.controlInverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setWrapperTranslate(s, !1, x), e.updateActiveIndex()
                            }
                            var i, s, r = x.params.control;
                            if (Array.isArray(r))
                                for (var n = 0; n < r.length; n++) r[n] !== e && r[n] instanceof X && t(r[n]);
                            else r instanceof X && e !== r && t(r)
                        },
                        setTransition: function (a, e) {
                            function t(e) {
                                e.setWrapperTransition(a, x), 0 !== a && (e.onTransitionStart(), e.wrapper.transitionEnd(function () {
                                    s && (e.params.loop && "slide" === x.params.controlBy && e.fixLoop(), e.onTransitionEnd())
                                }))
                            }
                            var i, s = x.params.control;
                            if (Array.isArray(s))
                                for (i = 0; i < s.length; i++) s[i] !== e && s[i] instanceof X && t(s[i]);
                            else s instanceof X && e !== s && t(s)
                        }
                    }, x.hashnav = {
                        onHashCange: function (e, a) {
                            var t = document.location.hash.replace("#", "");
                            t !== x.slides.eq(x.activeIndex).attr("data-hash") && x.slideTo(x.wrapper.children("." + x.params.slideClass + '[data-hash="' + t + '"]').index())
                        },
                        attachEvents: function (e) {
                            var a = e ? "off" : "on";
                            G(window)[a]("hashchange", x.hashnav.onHashCange)
                        },
                        setHash: function () {
                            if (x.hashnav.initialized && x.params.hashnav)
                                if (x.params.replaceState && window.history && window.history.replaceState) window.history.replaceState(null, null, "#" + x.slides.eq(x.activeIndex).attr("data-hash") || "");
                                else {
                                    var e = x.slides.eq(x.activeIndex),
                                        a = e.attr("data-hash") || e.attr("data-history");
                                    document.location.hash = a || ""
                                }
                        },
                        init: function () {
                            if (x.params.hashnav && !x.params.history) {
                                x.hashnav.initialized = !0;
                                var e = document.location.hash.replace("#", "");
                                if (e)
                                    for (var a = 0, t = x.slides.length; a < t; a++) {
                                        var i = x.slides.eq(a);
                                        if ((i.attr("data-hash") || i.attr("data-history")) === e && !i.hasClass(x.params.slideDuplicateClass)) {
                                            var s = i.index();
                                            x.slideTo(s, 0, x.params.runCallbacksOnInit, !0)
                                        }
                                    }
                                x.params.hashnavWatchState && x.hashnav.attachEvents()
                            }
                        },
                        destroy: function () {
                            x.params.hashnavWatchState && x.hashnav.attachEvents(!0)
                        }
                    }, x.history = {
                        init: function () {
                            if (x.params.history) {
                                if (!window.history || !window.history.pushState) return x.params.history = !1, void(x.params.hashnav = !0);
                                x.history.initialized = !0, this.paths = this.getPathValues(), (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, x.params.runCallbacksOnInit), x.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState))
                            }
                        },
                        setHistoryPopState: function () {
                            x.history.paths = x.history.getPathValues(), x.history.scrollToSlide(x.params.speed, x.history.paths.value, !1)
                        },
                        getPathValues: function () {
                            var e = window.location.pathname.slice(1).split("/"),
                                a = e.length;
                            return {
                                key: e[a - 2],
                                value: e[a - 1]
                            }
                        },
                        setHistory: function (e, a) {
                            if (x.history.initialized && x.params.history) {
                                var t = x.slides.eq(a),
                                    i = this.slugify(t.attr("data-history"));
                                window.location.pathname.includes(e) || (i = e + "/" + i), x.params.replaceState ? window.history.replaceState(null, null, i) : window.history.pushState(null, null, i)
                            }
                        },
                        slugify: function (e) {
                            return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                        },
                        scrollToSlide: function (e, a, t) {
                            if (a)
                                for (var i = 0, s = x.slides.length; i < s; i++) {
                                    var r = x.slides.eq(i);
                                    if (this.slugify(r.attr("data-history")) === a && !r.hasClass(x.params.slideDuplicateClass)) {
                                        var n = r.index();
                                        x.slideTo(n, e, t)
                                    }
                                } else x.slideTo(0, e, t)
                        }
                    }, x.disableKeyboardControl = function () {
                        x.params.keyboardControl = !1, G(document).off("keydown", i)
                    }, x.enableKeyboardControl = function () {
                        x.params.keyboardControl = !0, G(document).on("keydown", i)
                    }, x.mousewheel = {
                        event: !1,
                        lastScrollTime: (new window.Date).getTime()
                    }, x.params.mousewheelControl && (x.mousewheel.event = -1 < navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function () {
                        var e = "onwheel" in document;
                        if (!e) {
                            var a = document.createElement("div");
                            a.setAttribute("onwheel", "return;"), e = "function" == typeof a.onwheel
                        }
                        return !e && document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", "") && (e = document.implementation.hasFeature("Events.wheel", "3.0")), e
                    }() ? "wheel" : "mousewheel"), x.disableMousewheelControl = function () {
                        if (!x.mousewheel.event) return !1;
                        var e = x.container;
                        return "container" !== x.params.mousewheelEventsTarged && (e = G(x.params.mousewheelEventsTarged)), e.off(x.mousewheel.event, s), !(x.params.mousewheelControl = !1)
                    }, x.enableMousewheelControl = function () {
                        if (!x.mousewheel.event) return !1;
                        var e = x.container;
                        return "container" !== x.params.mousewheelEventsTarged && (e = G(x.params.mousewheelEventsTarged)), e.on(x.mousewheel.event, s), x.params.mousewheelControl = !0
                    }, x.parallax = {
                        setTranslate: function () {
                            x.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                                r(this, x.progress)
                            }), x.slides.each(function () {
                                var e = G(this);
                                e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                                    r(this, Math.min(Math.max(e[0].progress, -1), 1))
                                })
                            })
                        },
                        setTransition: function (t) {
                            void 0 === t && (t = x.params.speed), x.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                                var e = G(this),
                                    a = parseInt(e.attr("data-swiper-parallax-duration"), 10) || t;
                                0 === t && (a = 0), e.transition(a)
                            })
                        }
                    }, x.zoom = {
                        scale: 1,
                        currentScale: 1,
                        isScaling: !1,
                        gesture: {
                            slide: void 0,
                            slideWidth: void 0,
                            slideHeight: void 0,
                            image: void 0,
                            imageWrap: void 0,
                            zoomMax: x.params.zoomMax
                        },
                        image: {
                            isTouched: void 0,
                            isMoved: void 0,
                            currentX: void 0,
                            currentY: void 0,
                            minX: void 0,
                            minY: void 0,
                            maxX: void 0,
                            maxY: void 0,
                            width: void 0,
                            height: void 0,
                            startX: void 0,
                            startY: void 0,
                            touchesStart: {},
                            touchesCurrent: {}
                        },
                        velocity: {
                            x: void 0,
                            y: void 0,
                            prevPositionX: void 0,
                            prevPositionY: void 0,
                            prevTime: void 0
                        },
                        getDistanceBetweenTouches: function (e) {
                            if (e.targetTouches.length < 2) return 1;
                            var a = e.targetTouches[0].pageX,
                                t = e.targetTouches[0].pageY,
                                i = e.targetTouches[1].pageX,
                                s = e.targetTouches[1].pageY;
                            return Math.sqrt(Math.pow(i - a, 2) + Math.pow(s - t, 2))
                        },
                        onGestureStart: function (e) {
                            var a = x.zoom;
                            if (!x.support.gestures) {
                                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                                a.gesture.scaleStart = a.getDistanceBetweenTouches(e)
                            }
                            a.gesture.slide && a.gesture.slide.length || (a.gesture.slide = G(this), 0 === a.gesture.slide.length && (a.gesture.slide = x.slides.eq(x.activeIndex)), a.gesture.image = a.gesture.slide.find("img, svg, canvas"), a.gesture.imageWrap = a.gesture.image.parent("." + x.params.zoomContainerClass), a.gesture.zoomMax = a.gesture.imageWrap.attr("data-swiper-zoom") || x.params.zoomMax, 0 !== a.gesture.imageWrap.length) ? (a.gesture.image.transition(0), a.isScaling = !0) : a.gesture.image = void 0
                        },
                        onGestureChange: function (e) {
                            var a = x.zoom;
                            if (!x.support.gestures) {
                                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                                a.gesture.scaleMove = a.getDistanceBetweenTouches(e)
                            }
                            a.gesture.image && 0 !== a.gesture.image.length && (x.support.gestures ? a.scale = e.scale * a.currentScale : a.scale = a.gesture.scaleMove / a.gesture.scaleStart * a.currentScale, a.scale > a.gesture.zoomMax && (a.scale = a.gesture.zoomMax - 1 + Math.pow(a.scale - a.gesture.zoomMax + 1, .5)), a.scale < x.params.zoomMin && (a.scale = x.params.zoomMin + 1 - Math.pow(x.params.zoomMin - a.scale + 1, .5)), a.gesture.image.transform("translate3d(0,0,0) scale(" + a.scale + ")"))
                        },
                        onGestureEnd: function (e) {
                            var a = x.zoom;
                            !x.support.gestures && ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2) || a.gesture.image && 0 !== a.gesture.image.length && (a.scale = Math.max(Math.min(a.scale, a.gesture.zoomMax), x.params.zoomMin), a.gesture.image.transition(x.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"), a.currentScale = a.scale, a.isScaling = !1, 1 === a.scale && (a.gesture.slide = void 0))
                        },
                        onTouchStart: function (e, a) {
                            var t = e.zoom;
                            t.gesture.image && 0 !== t.gesture.image.length && (t.image.isTouched || ("android" === e.device.os && a.preventDefault(), t.image.isTouched = !0, t.image.touchesStart.x = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX, t.image.touchesStart.y = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY))
                        },
                        onTouchMove: function (e) {
                            var a = x.zoom;
                            if (a.gesture.image && 0 !== a.gesture.image.length && (x.allowClick = !1, a.image.isTouched && a.gesture.slide)) {
                                a.image.isMoved || (a.image.width = a.gesture.image[0].offsetWidth, a.image.height = a.gesture.image[0].offsetHeight, a.image.startX = x.getTranslate(a.gesture.imageWrap[0], "x") || 0, a.image.startY = x.getTranslate(a.gesture.imageWrap[0], "y") || 0, a.gesture.slideWidth = a.gesture.slide[0].offsetWidth, a.gesture.slideHeight = a.gesture.slide[0].offsetHeight, a.gesture.imageWrap.transition(0), x.rtl && (a.image.startX = -a.image.startX), x.rtl && (a.image.startY = -a.image.startY));
                                var t = a.image.width * a.scale,
                                    i = a.image.height * a.scale;
                                if (!(t < a.gesture.slideWidth && i < a.gesture.slideHeight)) {
                                    if (a.image.minX = Math.min(a.gesture.slideWidth / 2 - t / 2, 0), a.image.maxX = -a.image.minX, a.image.minY = Math.min(a.gesture.slideHeight / 2 - i / 2, 0), a.image.maxY = -a.image.minY, a.image.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, a.image.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !a.image.isMoved && !a.isScaling) {
                                        if (x.isHorizontal() && Math.floor(a.image.minX) === Math.floor(a.image.startX) && a.image.touchesCurrent.x < a.image.touchesStart.x || Math.floor(a.image.maxX) === Math.floor(a.image.startX) && a.image.touchesCurrent.x > a.image.touchesStart.x) return void(a.image.isTouched = !1);
                                        if (!x.isHorizontal() && Math.floor(a.image.minY) === Math.floor(a.image.startY) && a.image.touchesCurrent.y < a.image.touchesStart.y || Math.floor(a.image.maxY) === Math.floor(a.image.startY) && a.image.touchesCurrent.y > a.image.touchesStart.y) return void(a.image.isTouched = !1)
                                    }
                                    e.preventDefault(), e.stopPropagation(), a.image.isMoved = !0, a.image.currentX = a.image.touchesCurrent.x - a.image.touchesStart.x + a.image.startX, a.image.currentY = a.image.touchesCurrent.y - a.image.touchesStart.y + a.image.startY, a.image.currentX < a.image.minX && (a.image.currentX = a.image.minX + 1 - Math.pow(a.image.minX - a.image.currentX + 1, .8)), a.image.currentX > a.image.maxX && (a.image.currentX = a.image.maxX - 1 + Math.pow(a.image.currentX - a.image.maxX + 1, .8)), a.image.currentY < a.image.minY && (a.image.currentY = a.image.minY + 1 - Math.pow(a.image.minY - a.image.currentY + 1, .8)), a.image.currentY > a.image.maxY && (a.image.currentY = a.image.maxY - 1 + Math.pow(a.image.currentY - a.image.maxY + 1, .8)), a.velocity.prevPositionX || (a.velocity.prevPositionX = a.image.touchesCurrent.x), a.velocity.prevPositionY || (a.velocity.prevPositionY = a.image.touchesCurrent.y), a.velocity.prevTime || (a.velocity.prevTime = Date.now()), a.velocity.x = (a.image.touchesCurrent.x - a.velocity.prevPositionX) / (Date.now() - a.velocity.prevTime) / 2, a.velocity.y = (a.image.touchesCurrent.y - a.velocity.prevPositionY) / (Date.now() - a.velocity.prevTime) / 2, Math.abs(a.image.touchesCurrent.x - a.velocity.prevPositionX) < 2 && (a.velocity.x = 0), Math.abs(a.image.touchesCurrent.y - a.velocity.prevPositionY) < 2 && (a.velocity.y = 0), a.velocity.prevPositionX = a.image.touchesCurrent.x, a.velocity.prevPositionY = a.image.touchesCurrent.y, a.velocity.prevTime = Date.now(), a.gesture.imageWrap.transform("translate3d(" + a.image.currentX + "px, " + a.image.currentY + "px,0)")
                                }
                            }
                        },
                        onTouchEnd: function (e, a) {
                            var t = e.zoom;
                            if (t.gesture.image && 0 !== t.gesture.image.length) {
                                if (!t.image.isTouched || !t.image.isMoved) return t.image.isTouched = !1, void(t.image.isMoved = !1);
                                t.image.isTouched = !1, t.image.isMoved = !1;
                                var i = 300,
                                    s = 300,
                                    r = t.velocity.x * i,
                                    n = t.image.currentX + r,
                                    o = t.velocity.y * s,
                                    l = t.image.currentY + o;
                                0 !== t.velocity.x && (i = Math.abs((n - t.image.currentX) / t.velocity.x)), 0 !== t.velocity.y && (s = Math.abs((l - t.image.currentY) / t.velocity.y));
                                var p = Math.max(i, s);
                                t.image.currentX = n, t.image.currentY = l;
                                var d = t.image.width * t.scale,
                                    u = t.image.height * t.scale;
                                t.image.minX = Math.min(t.gesture.slideWidth / 2 - d / 2, 0), t.image.maxX = -t.image.minX, t.image.minY = Math.min(t.gesture.slideHeight / 2 - u / 2, 0), t.image.maxY = -t.image.minY, t.image.currentX = Math.max(Math.min(t.image.currentX, t.image.maxX), t.image.minX), t.image.currentY = Math.max(Math.min(t.image.currentY, t.image.maxY), t.image.minY), t.gesture.imageWrap.transition(p).transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)")
                            }
                        },
                        onTransitionEnd: function (e) {
                            var a = e.zoom;
                            a.gesture.slide && e.previousIndex !== e.activeIndex && (a.gesture.image.transform("translate3d(0,0,0) scale(1)"), a.gesture.imageWrap.transform("translate3d(0,0,0)"), a.gesture.slide = a.gesture.image = a.gesture.imageWrap = void 0, a.scale = a.currentScale = 1)
                        },
                        toggleZoom: function (e, a) {
                            var t, i, s, r, n, o, l, p, d, u, c, m, h, g, f, v, w = e.zoom;
                            w.gesture.slide || (w.gesture.slide = e.clickedSlide ? G(e.clickedSlide) : e.slides.eq(e.activeIndex), w.gesture.image = w.gesture.slide.find("img, svg, canvas"), w.gesture.imageWrap = w.gesture.image.parent("." + e.params.zoomContainerClass)), w.gesture.image && 0 !== w.gesture.image.length && (i = void 0 === w.image.touchesStart.x && a ? (t = "touchend" === a.type ? a.changedTouches[0].pageX : a.pageX, "touchend" === a.type ? a.changedTouches[0].pageY : a.pageY) : (t = w.image.touchesStart.x, w.image.touchesStart.y), w.scale && 1 !== w.scale ? (w.scale = w.currentScale = 1, w.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"), w.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"), w.gesture.slide = void 0) : (w.scale = w.currentScale = w.gesture.imageWrap.attr("data-swiper-zoom") || e.params.zoomMax, a ? (f = w.gesture.slide[0].offsetWidth, v = w.gesture.slide[0].offsetHeight, s = w.gesture.slide.offset().left + f / 2 - t, r = w.gesture.slide.offset().top + v / 2 - i, l = w.gesture.image[0].offsetWidth, p = w.gesture.image[0].offsetHeight, d = l * w.scale, u = p * w.scale, h = -(c = Math.min(f / 2 - d / 2, 0)), g = -(m = Math.min(v / 2 - u / 2, 0)), (n = s * w.scale) < c && (n = c), h < n && (n = h), (o = r * w.scale) < m && (o = m), g < o && (o = g)) : o = n = 0, w.gesture.imageWrap.transition(300).transform("translate3d(" + n + "px, " + o + "px,0)"), w.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + w.scale + ")")))
                        },
                        attachEvents: function (e) {
                            var t = e ? "off" : "on";
                            if (x.params.zoom) {
                                var a = (x.slides, !("touchstart" !== x.touchEvents.start || !x.support.passiveListener || !x.params.passiveListeners) && {
                                    passive: !0,
                                    capture: !1
                                });
                                x.support.gestures ? (x.slides[t]("gesturestart", x.zoom.onGestureStart, a), x.slides[t]("gesturechange", x.zoom.onGestureChange, a), x.slides[t]("gestureend", x.zoom.onGestureEnd, a)) : "touchstart" === x.touchEvents.start && (x.slides[t](x.touchEvents.start, x.zoom.onGestureStart, a), x.slides[t](x.touchEvents.move, x.zoom.onGestureChange, a), x.slides[t](x.touchEvents.end, x.zoom.onGestureEnd, a)), x[t]("touchStart", x.zoom.onTouchStart), x.slides.each(function (e, a) {
                                    0 < G(a).find("." + x.params.zoomContainerClass).length && G(a)[t](x.touchEvents.move, x.zoom.onTouchMove)
                                }), x[t]("touchEnd", x.zoom.onTouchEnd), x[t]("transitionEnd", x.zoom.onTransitionEnd), x.params.zoomToggle && x.on("doubleTap", x.zoom.toggleZoom)
                            }
                        },
                        init: function () {
                            x.zoom.attachEvents()
                        },
                        destroy: function () {
                            x.zoom.attachEvents(!0)
                        }
                    }, x._plugins = [], x.plugins) {
                    var A = x.plugins[H](x, x.params[H]);
                    A && x._plugins.push(A)
                }
                return x.callPlugins = function (e) {
                    for (var a = 0; a < x._plugins.length; a++) e in x._plugins[a] && x._plugins[a][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                }, x.emitterEventListeners = {}, x.emit = function (e) {
                    var a;
                    if (x.params[e] && x.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]), x.emitterEventListeners[e])
                        for (a = 0; a < x.emitterEventListeners[e].length; a++) x.emitterEventListeners[e][a](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                    x.callPlugins && x.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                }, x.on = function (e, a) {
                    return e = n(e), x.emitterEventListeners[e] || (x.emitterEventListeners[e] = []), x.emitterEventListeners[e].push(a), x
                }, x.off = function (e, a) {
                    var t;
                    if (e = n(e), void 0 === a) return x.emitterEventListeners[e] = [], x;
                    if (x.emitterEventListeners[e] && 0 !== x.emitterEventListeners[e].length) {
                        for (t = 0; t < x.emitterEventListeners[e].length; t++) x.emitterEventListeners[e][t] === a && x.emitterEventListeners[e].splice(t, 1);
                        return x
                    }
                }, x.once = function (a, t) {
                    return a = n(a), x.on(a, function e() {
                        t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), x.off(a, e)
                    }), x
                }, x.a11y = {
                    makeFocusable: function (e) {
                        return e.attr("tabIndex", "0"), e
                    },
                    addRole: function (e, a) {
                        return e.attr("role", a), e
                    },
                    addLabel: function (e, a) {
                        return e.attr("aria-label", a), e
                    },
                    disable: function (e) {
                        return e.attr("aria-disabled", !0), e
                    },
                    enable: function (e) {
                        return e.attr("aria-disabled", !1), e
                    },
                    onEnterKey: function (e) {
                        13 === e.keyCode && (G(e.target).is(x.params.nextButton) ? (x.onClickNext(e), x.isEnd ? x.a11y.notify(x.params.lastSlideMessage) : x.a11y.notify(x.params.nextSlideMessage)) : G(e.target).is(x.params.prevButton) && (x.onClickPrev(e), x.isBeginning ? x.a11y.notify(x.params.firstSlideMessage) : x.a11y.notify(x.params.prevSlideMessage)), G(e.target).is("." + x.params.bulletClass) && G(e.target)[0].click())
                    },
                    liveRegion: G('<span class="' + x.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
                    notify: function (e) {
                        var a = x.a11y.liveRegion;
                        0 !== a.length && (a.html(""), a.html(e))
                    },
                    init: function () {
                        x.params.nextButton && x.nextButton && 0 < x.nextButton.length && (x.a11y.makeFocusable(x.nextButton), x.a11y.addRole(x.nextButton, "button"), x.a11y.addLabel(x.nextButton, x.params.nextSlideMessage)), x.params.prevButton && x.prevButton && 0 < x.prevButton.length && (x.a11y.makeFocusable(x.prevButton), x.a11y.addRole(x.prevButton, "button"), x.a11y.addLabel(x.prevButton, x.params.prevSlideMessage)), G(x.container).append(x.a11y.liveRegion)
                    },
                    initPagination: function () {
                        x.params.pagination && x.params.paginationClickable && x.bullets && x.bullets.length && x.bullets.each(function () {
                            var e = G(this);
                            x.a11y.makeFocusable(e), x.a11y.addRole(e, "button"), x.a11y.addLabel(e, x.params.paginationBulletMessage.replace(/{{index}}/, e.index() + 1))
                        })
                    },
                    destroy: function () {
                        x.a11y.liveRegion && 0 < x.a11y.liveRegion.length && x.a11y.liveRegion.remove()
                    }
                }, x.init = function () {
                    x.params.loop && x.createLoop(), x.updateContainerSize(), x.updateSlidesSize(), x.updatePagination(), x.params.scrollbar && x.scrollbar && (x.scrollbar.set(), x.params.scrollbarDraggable && x.scrollbar.enableDraggable()), "slide" !== x.params.effect && x.effects[x.params.effect] && (x.params.loop || x.updateProgress(), x.effects[x.params.effect].setTranslate()), x.params.loop ? x.slideTo(x.params.initialSlide + x.loopedSlides, 0, x.params.runCallbacksOnInit) : (x.slideTo(x.params.initialSlide, 0, x.params.runCallbacksOnInit), 0 === x.params.initialSlide && (x.parallax && x.params.parallax && x.parallax.setTranslate(), x.lazy && x.params.lazyLoading && (x.lazy.load(), x.lazy.initialImageLoaded = !0))), x.attachEvents(), x.params.observer && x.support.observer && x.initObservers(), x.params.preloadImages && !x.params.lazyLoading && x.preloadImages(), x.params.zoom && x.zoom && x.zoom.init(), x.params.autoplay && x.startAutoplay(), x.params.keyboardControl && x.enableKeyboardControl && x.enableKeyboardControl(), x.params.mousewheelControl && x.enableMousewheelControl && x.enableMousewheelControl(), x.params.hashnavReplaceState && (x.params.replaceState = x.params.hashnavReplaceState), x.params.history && x.history && x.history.init(), x.params.hashnav && x.hashnav && x.hashnav.init(), x.params.a11y && x.a11y && x.a11y.init(), x.emit("onInit", x)
                }, x.cleanupStyles = function () {
                    x.container.removeClass(x.classNames.join(" ")).removeAttr("style"), x.wrapper.removeAttr("style"), x.slides && x.slides.length && x.slides.removeClass([x.params.slideVisibleClass, x.params.slideActiveClass, x.params.slideNextClass, x.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), x.paginationContainer && x.paginationContainer.length && x.paginationContainer.removeClass(x.params.paginationHiddenClass), x.bullets && x.bullets.length && x.bullets.removeClass(x.params.bulletActiveClass), x.params.prevButton && G(x.params.prevButton).removeClass(x.params.buttonDisabledClass), x.params.nextButton && G(x.params.nextButton).removeClass(x.params.buttonDisabledClass), x.params.scrollbar && x.scrollbar && (x.scrollbar.track && x.scrollbar.track.length && x.scrollbar.track.removeAttr("style"), x.scrollbar.drag && x.scrollbar.drag.length && x.scrollbar.drag.removeAttr("style"))
                }, x.destroy = function (e, a) {
                    x.detachEvents(), x.stopAutoplay(), x.params.scrollbar && x.scrollbar && x.params.scrollbarDraggable && x.scrollbar.disableDraggable(), x.params.loop && x.destroyLoop(), a && x.cleanupStyles(), x.disconnectObservers(), x.params.zoom && x.zoom && x.zoom.destroy(), x.params.keyboardControl && x.disableKeyboardControl && x.disableKeyboardControl(), x.params.mousewheelControl && x.disableMousewheelControl && x.disableMousewheelControl(), x.params.a11y && x.a11y && x.a11y.destroy(), x.params.history && !x.params.replaceState && window.removeEventListener("popstate", x.history.setHistoryPopState), x.params.hashnav && x.hashnav && x.hashnav.destroy(), x.emit("onDestroy"), !1 !== e && (x = null)
                }, x.init(), x
            }
        }
        var G, e, a, t, i, s, r, n, o, l;
        X.prototype = {
            isSafari: (o = window.navigator.userAgent.toLowerCase(), 0 <= o.indexOf("safari") && o.indexOf("chrome") < 0 && o.indexOf("android") < 0),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
            isArray: function (e) {
                return "[object Array]" === Object.prototype.toString.apply(e)
            },
            browser: {
                ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
                ieTouch: window.navigator.msPointerEnabled && 1 < window.navigator.msMaxTouchPoints || window.navigator.pointerEnabled && 1 < window.navigator.maxTouchPoints,
                lteIE9: (n = document.createElement("div"), n.innerHTML = "\x3c!--[if lte IE 9]><i></i><![endif]--\x3e", 1 === n.getElementsByTagName("i").length)
            },
            device: (a = window.navigator.userAgent, t = a.match(/(Android);?[\s\/]+([\d.]+)?/), i = a.match(/(iPad).*OS\s([\d_]+)/), s = a.match(/(iPod)(.*OS\s([\d_]+))?/), r = !i && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/), {
                ios: i || r || s,
                android: t
            }),
            support: {
                touch: window.Modernizr && !0 === Modernizr.touch || !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch),
                transforms3d: window.Modernizr && !0 === Modernizr.csstransforms3d || (e = document.createElement("div").style, "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e),
                flexbox: function () {
                    for (var e = document.createElement("div").style, a = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), t = 0; t < a.length; t++)
                        if (a[t] in e) return !0
                }(),
                observer: "MutationObserver" in window || "WebkitMutationObserver" in window,
                passiveListener: function () {
                    var e = !1;
                    try {
                        var a = Object.defineProperty({}, "passive", {
                            get: function () {
                                e = !0
                            }
                        });
                        window.addEventListener("testPassiveListener", null, a)
                    } catch (e) {}
                    return e
                }(),
                gestures: "ongesturestart" in window
            },
            plugins: {}
        };
        for (var Y = (u.prototype = {
                addClass: function (e) {
                    if (void 0 === e) return this;
                    for (var a = e.split(" "), t = 0; t < a.length; t++)
                        for (var i = 0; i < this.length; i++) this[i].classList.add(a[t]);
                    return this
                },
                removeClass: function (e) {
                    for (var a = e.split(" "), t = 0; t < a.length; t++)
                        for (var i = 0; i < this.length; i++) this[i].classList.remove(a[t]);
                    return this
                },
                hasClass: function (e) {
                    return !!this[0] && this[0].classList.contains(e)
                },
                toggleClass: function (e) {
                    for (var a = e.split(" "), t = 0; t < a.length; t++)
                        for (var i = 0; i < this.length; i++) this[i].classList.toggle(a[t]);
                    return this
                },
                attr: function (e, a) {
                    if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                    for (var t = 0; t < this.length; t++)
                        if (2 === arguments.length) this[t].setAttribute(e, a);
                        else
                            for (var i in e) this[t][i] = e[i], this[t].setAttribute(i, e[i]);
                    return this
                },
                removeAttr: function (e) {
                    for (var a = 0; a < this.length; a++) this[a].removeAttribute(e);
                    return this
                },
                data: function (e, a) {
                    if (void 0 !== a) {
                        for (var t = 0; t < this.length; t++) {
                            var i = this[t];
                            i.dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = a
                        }
                        return this
                    }
                    if (this[0]) return this[0].getAttribute("data-" + e) || (this[0].dom7ElementDataStorage && e in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[e] : void 0)
                },
                transform: function (e) {
                    for (var a = 0; a < this.length; a++) {
                        var t = this[a].style;
                        t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e
                    }
                    return this
                },
                transition: function (e) {
                    "string" != typeof e && (e += "ms");
                    for (var a = 0; a < this.length; a++) {
                        var t = this[a].style;
                        t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e
                    }
                    return this
                },
                on: function (e, s, r, a) {
                    function t(e) {
                        var a = e.target;
                        if (c(a).is(s)) r.call(a, e);
                        else
                            for (var t = c(a).parents(), i = 0; i < t.length; i++) c(t[i]).is(s) && r.call(t[i], e)
                    }
                    var i, n, o = e.split(" ");
                    for (i = 0; i < this.length; i++)
                        if ("function" == typeof s || !1 === s)
                            for ("function" == typeof s && (r = s, a = arguments[2] || !1), n = 0; n < o.length; n++) this[i].addEventListener(o[n], r, a);
                        else
                            for (n = 0; n < o.length; n++) this[i].dom7LiveListeners || (this[i].dom7LiveListeners = []), this[i].dom7LiveListeners.push({
                                listener: r,
                                liveListener: t
                            }), this[i].addEventListener(o[n], t, a);
                    return this
                },
                off: function (e, a, t, i) {
                    for (var s = e.split(" "), r = 0; r < s.length; r++)
                        for (var n = 0; n < this.length; n++)
                            if ("function" == typeof a || !1 === a) "function" == typeof a && (t = a, i = arguments[2] || !1), this[n].removeEventListener(s[r], t, i);
                            else if (this[n].dom7LiveListeners)
                        for (var o = 0; o < this[n].dom7LiveListeners.length; o++) this[n].dom7LiveListeners[o].listener === t && this[n].removeEventListener(s[r], this[n].dom7LiveListeners[o].liveListener, i);
                    return this
                },
                once: function (t, i, s, r) {
                    var n = this;
                    "function" == typeof i && (i = !1, s = arguments[1], r = arguments[2]), n.on(t, i, function e(a) {
                        s(a), n.off(t, i, e, r)
                    }, r)
                },
                trigger: function (e, a) {
                    for (var t = 0; t < this.length; t++) {
                        var i;
                        try {
                            i = new window.CustomEvent(e, {
                                detail: a,
                                bubbles: !0,
                                cancelable: !0
                            })
                        } catch (t) {
                            (i = document.createEvent("Event")).initEvent(e, !0, !0), i.detail = a
                        }
                        this[t].dispatchEvent(i)
                    }
                    return this
                },
                transitionEnd: function (a) {
                    function t(e) {
                        if (e.target === this)
                            for (a.call(this, e), i = 0; i < s.length; i++) r.off(s[i], t)
                    }
                    var i, s = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                        r = this;
                    if (a)
                        for (i = 0; i < s.length; i++) r.on(s[i], t);
                    return this
                },
                width: function () {
                    return this[0] === window ? window.innerWidth : 0 < this.length ? parseFloat(this.css("width")) : null
                },
                outerWidth: function (e) {
                    return 0 < this.length ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
                },
                height: function () {
                    return this[0] === window ? window.innerHeight : 0 < this.length ? parseFloat(this.css("height")) : null
                },
                outerHeight: function (e) {
                    return 0 < this.length ? e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null
                },
                offset: function () {
                    if (0 < this.length) {
                        var e = this[0],
                            a = e.getBoundingClientRect(),
                            t = document.body,
                            i = e.clientTop || t.clientTop || 0,
                            s = e.clientLeft || t.clientLeft || 0,
                            r = window.pageYOffset || e.scrollTop,
                            n = window.pageXOffset || e.scrollLeft;
                        return {
                            top: a.top + r - i,
                            left: a.left + n - s
                        }
                    }
                    return null
                },
                css: function (e, a) {
                    var t;
                    if (1 === arguments.length) {
                        if ("string" != typeof e) {
                            for (t = 0; t < this.length; t++)
                                for (var i in e) this[t].style[i] = e[i];
                            return this
                        }
                        if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e)
                    }
                    if (2 !== arguments.length || "string" != typeof e) return this;
                    for (t = 0; t < this.length; t++) this[t].style[e] = a;
                    return this
                },
                each: function (e) {
                    for (var a = 0; a < this.length; a++) e.call(this[a], a, this[a]);
                    return this
                },
                html: function (e) {
                    if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
                    for (var a = 0; a < this.length; a++) this[a].innerHTML = e;
                    return this
                },
                text: function (e) {
                    if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                    for (var a = 0; a < this.length; a++) this[a].textContent = e;
                    return this
                },
                is: function (e) {
                    if (!this[0]) return !1;
                    var a, t;
                    if ("string" == typeof e) {
                        var i = this[0];
                        if (i === document) return e === document;
                        if (i === window) return e === window;
                        if (i.matches) return i.matches(e);
                        if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
                        if (i.mozMatchesSelector) return i.mozMatchesSelector(e);
                        if (i.msMatchesSelector) return i.msMatchesSelector(e);
                        for (a = c(e), t = 0; t < a.length; t++)
                            if (a[t] === this[0]) return !0;
                        return !1
                    }
                    if (e === document) return this[0] === document;
                    if (e === window) return this[0] === window;
                    if (e.nodeType || e instanceof u) {
                        for (a = e.nodeType ? [e] : e, t = 0; t < a.length; t++)
                            if (a[t] === this[0]) return !0;
                        return !1
                    }
                    return !1
                },
                index: function () {
                    if (this[0]) {
                        for (var e = this[0], a = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && a++;
                        return a
                    }
                },
                eq: function (e) {
                    if (void 0 === e) return this;
                    var a, t = this.length;
                    return new u(t - 1 < e ? [] : e < 0 ? (a = t + e) < 0 ? [] : [this[a]] : [this[e]])
                },
                append: function (e) {
                    var a, t;
                    for (a = 0; a < this.length; a++)
                        if ("string" == typeof e) {
                            var i = document.createElement("div");
                            for (i.innerHTML = e; i.firstChild;) this[a].appendChild(i.firstChild)
                        } else if (e instanceof u)
                        for (t = 0; t < e.length; t++) this[a].appendChild(e[t]);
                    else this[a].appendChild(e);
                    return this
                },
                prepend: function (e) {
                    var a, t;
                    for (a = 0; a < this.length; a++)
                        if ("string" == typeof e) {
                            var i = document.createElement("div");
                            for (i.innerHTML = e, t = i.childNodes.length - 1; 0 <= t; t--) this[a].insertBefore(i.childNodes[t], this[a].childNodes[0])
                        } else if (e instanceof u)
                        for (t = 0; t < e.length; t++) this[a].insertBefore(e[t], this[a].childNodes[0]);
                    else this[a].insertBefore(e, this[a].childNodes[0]);
                    return this
                },
                insertBefore: function (e) {
                    for (var a = c(e), t = 0; t < this.length; t++)
                        if (1 === a.length) a[0].parentNode.insertBefore(this[t], a[0]);
                        else if (1 < a.length)
                        for (var i = 0; i < a.length; i++) a[i].parentNode.insertBefore(this[t].cloneNode(!0), a[i])
                },
                insertAfter: function (e) {
                    for (var a = c(e), t = 0; t < this.length; t++)
                        if (1 === a.length) a[0].parentNode.insertBefore(this[t], a[0].nextSibling);
                        else if (1 < a.length)
                        for (var i = 0; i < a.length; i++) a[i].parentNode.insertBefore(this[t].cloneNode(!0), a[i].nextSibling)
                },
                next: function (e) {
                    return new u(0 < this.length ? e ? this[0].nextElementSibling && c(this[0].nextElementSibling).is(e) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
                },
                nextAll: function (e) {
                    var a = [],
                        t = this[0];
                    if (!t) return new u([]);
                    for (; t.nextElementSibling;) {
                        var i = t.nextElementSibling;
                        e ? c(i).is(e) && a.push(i) : a.push(i), t = i
                    }
                    return new u(a)
                },
                prev: function (e) {
                    return new u(0 < this.length ? e ? this[0].previousElementSibling && c(this[0].previousElementSibling).is(e) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : [])
                },
                prevAll: function (e) {
                    var a = [],
                        t = this[0];
                    if (!t) return new u([]);
                    for (; t.previousElementSibling;) {
                        var i = t.previousElementSibling;
                        e ? c(i).is(e) && a.push(i) : a.push(i), t = i
                    }
                    return new u(a)
                },
                parent: function (e) {
                    for (var a = [], t = 0; t < this.length; t++) e ? c(this[t].parentNode).is(e) && a.push(this[t].parentNode) : a.push(this[t].parentNode);
                    return c(c.unique(a))
                },
                parents: function (e) {
                    for (var a = [], t = 0; t < this.length; t++)
                        for (var i = this[t].parentNode; i;) e ? c(i).is(e) && a.push(i) : a.push(i), i = i.parentNode;
                    return c(c.unique(a))
                },
                find: function (e) {
                    for (var a = [], t = 0; t < this.length; t++)
                        for (var i = this[t].querySelectorAll(e), s = 0; s < i.length; s++) a.push(i[s]);
                    return new u(a)
                },
                children: function (e) {
                    for (var a = [], t = 0; t < this.length; t++)
                        for (var i = this[t].childNodes, s = 0; s < i.length; s++) e ? 1 === i[s].nodeType && c(i[s]).is(e) && a.push(i[s]) : 1 === i[s].nodeType && a.push(i[s]);
                    return new u(c.unique(a))
                },
                remove: function () {
                    for (var e = 0; e < this.length; e++) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                    return this
                },
                add: function () {
                    var e, a;
                    for (e = 0; e < arguments.length; e++) {
                        var t = c(arguments[e]);
                        for (a = 0; a < t.length; a++) this[this.length] = t[a], this.length++
                    }
                    return this
                }
            }, c.fn = u.prototype, c.unique = function (e) {
                for (var a = [], t = 0; t < e.length; t++) - 1 === a.indexOf(e[t]) && a.push(e[t]);
                return a
            }, c), p = ["jQuery", "Zepto", "Dom7"], d = 0; d < p.length; d++) window[p[d]] && function (e) {
            e.fn.swiper = function (a) {
                var t;
                return e(this).each(function () {
                    var e = new X(this, a);
                    t = t || e
                }), t
            }
        }(window[p[d]]);

        function u(e) {
            var a = 0;
            for (a = 0; a < e.length; a++) this[a] = e[a];
            return this.length = e.length, this
        }

        function c(e, a) {
            var t = [],
                i = 0;
            if (e && !a && e instanceof u) return e;
            if (e)
                if ("string" == typeof e) {
                    var s, r, n = e.trim();
                    if (0 <= n.indexOf("<") && 0 <= n.indexOf(">")) {
                        var o = "div";
                        for (0 === n.indexOf("<li") && (o = "ul"), 0 === n.indexOf("<tr") && (o = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (o = "tr"), 0 === n.indexOf("<tbody") && (o = "table"), 0 === n.indexOf("<option") && (o = "select"), (r = document.createElement(o)).innerHTML = e, i = 0; i < r.childNodes.length; i++) t.push(r.childNodes[i])
                    } else
                        for (s = a || "#" !== e[0] || e.match(/[ .<>:~]/) ? (a || document).querySelectorAll(e) : [document.getElementById(e.split("#")[1])], i = 0; i < s.length; i++) s[i] && t.push(s[i])
                } else if (e.nodeType || e === window || e === document) t.push(e);
            else if (0 < e.length && e[0].nodeType)
                for (i = 0; i < e.length; i++) t.push(e[i]);
            return new u(t)
        }(l = void 0 === Y ? window.Dom7 || window.Zepto || window.jQuery : Y) && ("transitionEnd" in l.fn || (l.fn.transitionEnd = function (a) {
            function t(e) {
                if (e.target === this)
                    for (a.call(this, e), i = 0; i < s.length; i++) r.off(s[i], t)
            }
            var i, s = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                r = this;
            if (a)
                for (i = 0; i < s.length; i++) r.on(s[i], t);
            return this
        }), "transform" in l.fn || (l.fn.transform = function (e) {
            for (var a = 0; a < this.length; a++) {
                var t = this[a].style;
                t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e
            }
            return this
        }), "transition" in l.fn || (l.fn.transition = function (e) {
            "string" != typeof e && (e += "ms");
            for (var a = 0; a < this.length; a++) {
                var t = this[a].style;
                t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e
            }
            return this
        }), "outerWidth" in l.fn || (l.fn.outerWidth = function (e) {
            return 0 < this.length ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
        })), window.Swiper = X
    }(), "undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function () {
        return window.Swiper
    });