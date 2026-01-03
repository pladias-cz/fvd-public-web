/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/blueimp-gallery/css/blueimp-gallery.css"
/*!**************************************************************!*\
  !*** ./node_modules/blueimp-gallery/css/blueimp-gallery.css ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./node_modules/blueimp-gallery/js/blueimp-gallery.js"
/*!************************************************************!*\
  !*** ./node_modules/blueimp-gallery/js/blueimp-gallery.js ***!
  \************************************************************/
(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * blueimp Gallery JS
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Swipe implementation based on
 * https://github.com/bradbirdsall/Swipe
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, DocumentTouch */

/* eslint-disable no-param-reassign */

;(function (factory) {
  'use strict'
  if (true) {
    // Register as an anonymous AMD module:
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./blueimp-helper */ "./node_modules/blueimp-gallery/js/blueimp-helper.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else // removed by dead control flow
{}
})(function ($) {
  'use strict'

  /**
   * Gallery constructor
   *
   * @class
   * @param {Array|NodeList} list Gallery content
   * @param {object} [options] Gallery options
   * @returns {object} Gallery object
   */
  function Gallery(list, options) {
    if (document.body.style.maxHeight === undefined) {
      // document.body.style.maxHeight is undefined on IE6 and lower
      return null
    }
    if (!this || this.options !== Gallery.prototype.options) {
      // Called as function instead of as constructor,
      // so we simply return a new instance:
      return new Gallery(list, options)
    }
    if (!list || !list.length) {
      this.console.log(
        'blueimp Gallery: No or empty list provided as first argument.',
        list
      )
      return
    }
    this.list = list
    this.num = list.length
    this.initOptions(options)
    this.initialize()
  }

  $.extend(Gallery.prototype, {
    options: {
      // The Id, element or querySelector of the gallery widget:
      container: '#blueimp-gallery',
      // The tag name, Id, element or querySelector of the slides container:
      slidesContainer: 'div',
      // The tag name, Id, element or querySelector of the title element:
      titleElement: 'h3',
      // The class to add when the gallery is visible:
      displayClass: 'blueimp-gallery-display',
      // The class to add when the gallery controls are visible:
      controlsClass: 'blueimp-gallery-controls',
      // The class to add when the gallery only displays one element:
      singleClass: 'blueimp-gallery-single',
      // The class to add when the left edge has been reached:
      leftEdgeClass: 'blueimp-gallery-left',
      // The class to add when the right edge has been reached:
      rightEdgeClass: 'blueimp-gallery-right',
      // The class to add when the automatic slideshow is active:
      playingClass: 'blueimp-gallery-playing',
      // The class to add when the browser supports SVG as img (or background):
      svgasimgClass: 'blueimp-gallery-svgasimg',
      // The class to add when the browser supports SMIL (animated SVGs):
      smilClass: 'blueimp-gallery-smil',
      // The class for all slides:
      slideClass: 'slide',
      // The slide class for the active (current index) slide:
      slideActiveClass: 'slide-active',
      // The slide class for the previous (before current index) slide:
      slidePrevClass: 'slide-prev',
      // The slide class for the next (after current index) slide:
      slideNextClass: 'slide-next',
      // The slide class for loading elements:
      slideLoadingClass: 'slide-loading',
      // The slide class for elements that failed to load:
      slideErrorClass: 'slide-error',
      // The class for the content element loaded into each slide:
      slideContentClass: 'slide-content',
      // The class for the "toggle" control:
      toggleClass: 'toggle',
      // The class for the "prev" control:
      prevClass: 'prev',
      // The class for the "next" control:
      nextClass: 'next',
      // The class for the "close" control:
      closeClass: 'close',
      // The class for the "play-pause" toggle control:
      playPauseClass: 'play-pause',
      // The list object property (or data attribute) with the object type:
      typeProperty: 'type',
      // The list object property (or data attribute) with the object title:
      titleProperty: 'title',
      // The list object property (or data attribute) with the object alt text:
      altTextProperty: 'alt',
      // The list object property (or data attribute) with the object URL:
      urlProperty: 'href',
      // The list object property (or data attribute) with the object srcset:
      srcsetProperty: 'srcset',
      // The list object property (or data attribute) with the object sizes:
      sizesProperty: 'sizes',
      // The list object property (or data attribute) with the object sources:
      sourcesProperty: 'sources',
      // The gallery listens for transitionend events before triggering the
      // opened and closed events, unless the following option is set to false:
      displayTransition: true,
      // Defines if the gallery slides are cleared from the gallery modal,
      // or reused for the next gallery initialization:
      clearSlides: true,
      // Toggle the controls on pressing the Enter key:
      toggleControlsOnEnter: true,
      // Toggle the controls on slide click:
      toggleControlsOnSlideClick: true,
      // Toggle the automatic slideshow interval on pressing the Space key:
      toggleSlideshowOnSpace: true,
      // Navigate the gallery by pressing the ArrowLeft and ArrowRight keys:
      enableKeyboardNavigation: true,
      // Close the gallery on pressing the Escape key:
      closeOnEscape: true,
      // Close the gallery when clicking on an empty slide area:
      closeOnSlideClick: true,
      // Close the gallery by swiping up or down:
      closeOnSwipeUpOrDown: true,
      // Close the gallery when the URL hash changes:
      closeOnHashChange: true,
      // Emulate touch events on mouse-pointer devices such as desktop browsers:
      emulateTouchEvents: true,
      // Stop touch events from bubbling up to ancestor elements of the Gallery:
      stopTouchEventsPropagation: false,
      // Hide the page scrollbars:
      hidePageScrollbars: true,
      // Stops any touches on the container from scrolling the page:
      disableScroll: true,
      // Carousel mode (shortcut for carousel specific options):
      carousel: false,
      // Allow continuous navigation, moving from last to first
      // and from first to last slide:
      continuous: true,
      // Remove elements outside of the preload range from the DOM:
      unloadElements: true,
      // Start with the automatic slideshow:
      startSlideshow: false,
      // Delay in milliseconds between slides for the automatic slideshow:
      slideshowInterval: 5000,
      // The direction the slides are moving: ltr=LeftToRight or rtl=RightToLeft
      slideshowDirection: 'ltr',
      // The starting index as integer.
      // Can also be an object of the given list,
      // or an equal object with the same url property:
      index: 0,
      // The number of elements to load around the current index:
      preloadRange: 2,
      // The transition duration between slide changes in milliseconds:
      transitionDuration: 300,
      // The transition duration for automatic slide changes, set to an integer
      // greater 0 to override the default transition duration:
      slideshowTransitionDuration: 500,
      // The event object for which the default action will be canceled
      // on Gallery initialization (e.g. the click event to open the Gallery):
      event: undefined,
      // Callback function executed when the Gallery is initialized.
      // Is called with the gallery instance as "this" object:
      onopen: undefined,
      // Callback function executed when the Gallery has been initialized
      // and the initialization transition has been completed.
      // Is called with the gallery instance as "this" object:
      onopened: undefined,
      // Callback function executed on slide change.
      // Is called with the gallery instance as "this" object and the
      // current index and slide as arguments:
      onslide: undefined,
      // Callback function executed after the slide change transition.
      // Is called with the gallery instance as "this" object and the
      // current index and slide as arguments:
      onslideend: undefined,
      // Callback function executed on slide content load.
      // Is called with the gallery instance as "this" object and the
      // slide index and slide element as arguments:
      onslidecomplete: undefined,
      // Callback function executed when the Gallery is about to be closed.
      // Is called with the gallery instance as "this" object:
      onclose: undefined,
      // Callback function executed when the Gallery has been closed
      // and the closing transition has been completed.
      // Is called with the gallery instance as "this" object:
      onclosed: undefined
    },

    carouselOptions: {
      hidePageScrollbars: false,
      toggleControlsOnEnter: false,
      toggleSlideshowOnSpace: false,
      enableKeyboardNavigation: false,
      closeOnEscape: false,
      closeOnSlideClick: false,
      closeOnSwipeUpOrDown: false,
      closeOnHashChange: false,
      disableScroll: false,
      startSlideshow: true
    },

    console:
      window.console && typeof window.console.log === 'function'
        ? window.console
        : { log: function () {} },

    // Detect touch, transition, transform and background-size support:
    support: (function (element) {
      var support = {
        source: !!window.HTMLSourceElement,
        picture: !!window.HTMLPictureElement,
        svgasimg: document.implementation.hasFeature(
          'http://www.w3.org/TR/SVG11/feature#Image',
          '1.1'
        ),
        smil:
          !!document.createElementNS &&
          /SVGAnimate/.test(
            document
              .createElementNS('http://www.w3.org/2000/svg', 'animate')
              .toString()
          ),
        touch:
          window.ontouchstart !== undefined ||
          (window.DocumentTouch && document instanceof DocumentTouch)
      }
      var transitions = {
        webkitTransition: {
          end: 'webkitTransitionEnd',
          prefix: '-webkit-'
        },
        MozTransition: {
          end: 'transitionend',
          prefix: '-moz-'
        },
        OTransition: {
          end: 'otransitionend',
          prefix: '-o-'
        },
        transition: {
          end: 'transitionend',
          prefix: ''
        }
      }
      var prop
      for (prop in transitions) {
        if (
          Object.prototype.hasOwnProperty.call(transitions, prop) &&
          element.style[prop] !== undefined
        ) {
          support.transition = transitions[prop]
          support.transition.name = prop
          break
        }
      }
      /**
       * Tests browser support
       */
      function elementTests() {
        var transition = support.transition
        var prop
        var translateZ
        document.body.appendChild(element)
        if (transition) {
          prop = transition.name.slice(0, -9) + 'ransform'
          if (element.style[prop] !== undefined) {
            element.style[prop] = 'translateZ(0)'
            translateZ = window
              .getComputedStyle(element)
              .getPropertyValue(transition.prefix + 'transform')
            support.transform = {
              prefix: transition.prefix,
              name: prop,
              translate: true,
              translateZ: !!translateZ && translateZ !== 'none'
            }
          }
        }
        document.body.removeChild(element)
      }
      if (document.body) {
        elementTests()
      } else {
        $(document).on('DOMContentLoaded', elementTests)
      }
      return support
      // Test element, has to be standard HTML and must not be hidden
      // for the CSS3 tests using window.getComputedStyle to be applicable:
    })(document.createElement('div')),

    requestAnimationFrame:
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame,

    cancelAnimationFrame:
      window.cancelAnimationFrame ||
      window.webkitCancelRequestAnimationFrame ||
      window.webkitCancelAnimationFrame ||
      window.mozCancelAnimationFrame,

    initialize: function () {
      this.initStartIndex()
      if (this.initWidget() === false) {
        return false
      }
      this.initEventListeners()
      // Load the slide at the given index:
      this.onslide(this.index)
      // Manually trigger the slideend event for the initial slide:
      this.ontransitionend()
      // Start the automatic slideshow if applicable:
      if (this.options.startSlideshow) {
        this.play()
      }
    },

    slide: function (to, duration) {
      window.clearTimeout(this.timeout)
      var index = this.index
      var direction
      var naturalDirection
      var diff
      if (index === to || this.num === 1) {
        return
      }
      if (!duration) {
        duration = this.options.transitionDuration
      }
      if (this.support.transform) {
        if (!this.options.continuous) {
          to = this.circle(to)
        }
        // 1: backward, -1: forward:
        direction = Math.abs(index - to) / (index - to)
        // Get the actual position of the slide:
        if (this.options.continuous) {
          naturalDirection = direction
          direction = -this.positions[this.circle(to)] / this.slideWidth
          // If going forward but to < index, use to = slides.length + to
          // If going backward but to > index, use to = -slides.length + to
          if (direction !== naturalDirection) {
            to = -direction * this.num + to
          }
        }
        diff = Math.abs(index - to) - 1
        // Move all the slides between index and to in the right direction:
        while (diff) {
          diff -= 1
          this.move(
            this.circle((to > index ? to : index) - diff - 1),
            this.slideWidth * direction,
            0
          )
        }
        to = this.circle(to)
        this.move(index, this.slideWidth * direction, duration)
        this.move(to, 0, duration)
        if (this.options.continuous) {
          this.move(
            this.circle(to - direction),
            -(this.slideWidth * direction),
            0
          )
        }
      } else {
        to = this.circle(to)
        this.animate(index * -this.slideWidth, to * -this.slideWidth, duration)
      }
      this.onslide(to)
    },

    getIndex: function () {
      return this.index
    },

    getNumber: function () {
      return this.num
    },

    prev: function () {
      if (this.options.continuous || this.index) {
        this.slide(this.index - 1)
      }
    },

    next: function () {
      if (this.options.continuous || this.index < this.num - 1) {
        this.slide(this.index + 1)
      }
    },

    play: function (time) {
      var that = this
      var nextIndex =
        this.index + (this.options.slideshowDirection === 'rtl' ? -1 : 1)
      window.clearTimeout(this.timeout)
      this.interval = time || this.options.slideshowInterval
      if (this.elements[this.index] > 1) {
        this.timeout = this.setTimeout(
          (!this.requestAnimationFrame && this.slide) ||
            function (to, duration) {
              that.animationFrameId = that.requestAnimationFrame.call(
                window,
                function () {
                  that.slide(to, duration)
                }
              )
            },
          [nextIndex, this.options.slideshowTransitionDuration],
          this.interval
        )
      }
      this.container.addClass(this.options.playingClass)
      this.slidesContainer[0].setAttribute('aria-live', 'off')
      if (this.playPauseElement.length) {
        this.playPauseElement[0].setAttribute('aria-pressed', 'true')
      }
    },

    pause: function () {
      window.clearTimeout(this.timeout)
      this.interval = null
      if (this.cancelAnimationFrame) {
        this.cancelAnimationFrame.call(window, this.animationFrameId)
        this.animationFrameId = null
      }
      this.container.removeClass(this.options.playingClass)
      this.slidesContainer[0].setAttribute('aria-live', 'polite')
      if (this.playPauseElement.length) {
        this.playPauseElement[0].setAttribute('aria-pressed', 'false')
      }
    },

    add: function (list) {
      var i
      if (!list.concat) {
        // Make a real array out of the list to add:
        list = Array.prototype.slice.call(list)
      }
      if (!this.list.concat) {
        // Make a real array out of the Gallery list:
        this.list = Array.prototype.slice.call(this.list)
      }
      this.list = this.list.concat(list)
      this.num = this.list.length
      if (this.num > 2 && this.options.continuous === null) {
        this.options.continuous = true
        this.container.removeClass(this.options.leftEdgeClass)
      }
      this.container
        .removeClass(this.options.rightEdgeClass)
        .removeClass(this.options.singleClass)
      for (i = this.num - list.length; i < this.num; i += 1) {
        this.addSlide(i)
        this.positionSlide(i)
      }
      this.positions.length = this.num
      this.initSlides(true)
    },

    resetSlides: function () {
      this.slidesContainer.empty()
      this.unloadAllSlides()
      this.slides = []
    },

    handleClose: function () {
      var options = this.options
      this.destroyEventListeners()
      // Cancel the slideshow:
      this.pause()
      this.container[0].style.display = 'none'
      this.container
        .removeClass(options.displayClass)
        .removeClass(options.singleClass)
        .removeClass(options.leftEdgeClass)
        .removeClass(options.rightEdgeClass)
      if (options.hidePageScrollbars) {
        document.body.style.overflow = this.bodyOverflowStyle
      }
      if (this.options.clearSlides) {
        this.resetSlides()
      }
      if (this.options.onclosed) {
        this.options.onclosed.call(this)
      }
    },

    close: function () {
      var that = this
      /**
       * Close handler
       *
       * @param {event} event Close event
       */
      function closeHandler(event) {
        if (event.target === that.container[0]) {
          that.container.off(that.support.transition.end, closeHandler)
          that.handleClose()
        }
      }
      if (this.options.onclose) {
        this.options.onclose.call(this)
      }
      if (this.support.transition && this.options.displayTransition) {
        this.container.on(this.support.transition.end, closeHandler)
        this.container.removeClass(this.options.displayClass)
      } else {
        this.handleClose()
      }
    },

    circle: function (index) {
      // Always return a number inside of the slides index range:
      return (this.num + (index % this.num)) % this.num
    },

    move: function (index, dist, duration) {
      this.translateX(index, dist, duration)
      this.positions[index] = dist
    },

    translate: function (index, x, y, duration) {
      if (!this.slides[index]) return
      var style = this.slides[index].style
      var transition = this.support.transition
      var transform = this.support.transform
      style[transition.name + 'Duration'] = duration + 'ms'
      style[transform.name] =
        'translate(' +
        x +
        'px, ' +
        y +
        'px)' +
        (transform.translateZ ? ' translateZ(0)' : '')
    },

    translateX: function (index, x, duration) {
      this.translate(index, x, 0, duration)
    },

    translateY: function (index, y, duration) {
      this.translate(index, 0, y, duration)
    },

    animate: function (from, to, duration) {
      if (!duration) {
        this.slidesContainer[0].style.left = to + 'px'
        return
      }
      var that = this
      var start = new Date().getTime()
      var timer = window.setInterval(function () {
        var timeElap = new Date().getTime() - start
        if (timeElap > duration) {
          that.slidesContainer[0].style.left = to + 'px'
          that.ontransitionend()
          window.clearInterval(timer)
          return
        }
        that.slidesContainer[0].style.left =
          (to - from) * (Math.floor((timeElap / duration) * 100) / 100) +
          from +
          'px'
      }, 4)
    },

    preventDefault: function (event) {
      if (event.preventDefault) {
        event.preventDefault()
      } else {
        event.returnValue = false
      }
    },

    stopPropagation: function (event) {
      if (event.stopPropagation) {
        event.stopPropagation()
      } else {
        event.cancelBubble = true
      }
    },

    onresize: function () {
      this.initSlides(true)
    },

    onhashchange: function () {
      if (this.options.closeOnHashChange) {
        this.close()
      }
    },

    onmousedown: function (event) {
      // Trigger on clicks of the left mouse button only
      // and exclude video & audio elements:
      if (
        event.which &&
        event.which === 1 &&
        event.target.nodeName !== 'VIDEO' &&
        event.target.nodeName !== 'AUDIO'
      ) {
        // Preventing the default mousedown action is required
        // to make touch emulation work with Firefox:
        event.preventDefault()
        ;(event.originalEvent || event).touches = [
          {
            pageX: event.pageX,
            pageY: event.pageY
          }
        ]
        this.ontouchstart(event)
      }
    },

    onmousemove: function (event) {
      if (this.touchStart) {
        ;(event.originalEvent || event).touches = [
          {
            pageX: event.pageX,
            pageY: event.pageY
          }
        ]
        this.ontouchmove(event)
      }
    },

    onmouseup: function (event) {
      if (this.touchStart) {
        this.ontouchend(event)
        delete this.touchStart
      }
    },

    onmouseout: function (event) {
      if (this.touchStart) {
        var target = event.target
        var related = event.relatedTarget
        if (!related || (related !== target && !$.contains(target, related))) {
          this.onmouseup(event)
        }
      }
    },

    ontouchstart: function (event) {
      if (this.options.stopTouchEventsPropagation) {
        this.stopPropagation(event)
      }
      // jQuery doesn't copy touch event properties by default,
      // so we have to access the originalEvent object:
      var touch = (event.originalEvent || event).touches[0]
      this.touchStart = {
        // Remember the initial touch coordinates:
        x: touch.pageX,
        y: touch.pageY,
        // Store the time to determine touch duration:
        time: Date.now()
      }
      // Helper variable to detect scroll movement:
      this.isScrolling = undefined
      // Reset delta values:
      this.touchDelta = {}
    },

    ontouchmove: function (event) {
      if (this.options.stopTouchEventsPropagation) {
        this.stopPropagation(event)
      }
      // jQuery doesn't copy touch event properties by default,
      // so we have to access the originalEvent object:
      var touches = (event.originalEvent || event).touches
      var touch = touches[0]
      var scale = (event.originalEvent || event).scale
      var index = this.index
      var touchDeltaX
      var indices
      // Ensure this is a one touch swipe and not, e.g. a pinch:
      if (touches.length > 1 || (scale && scale !== 1)) {
        return
      }
      if (this.options.disableScroll) {
        event.preventDefault()
      }
      // Measure change in x and y coordinates:
      this.touchDelta = {
        x: touch.pageX - this.touchStart.x,
        y: touch.pageY - this.touchStart.y
      }
      touchDeltaX = this.touchDelta.x
      // Detect if this is a vertical scroll movement (run only once per touch):
      if (this.isScrolling === undefined) {
        this.isScrolling =
          this.isScrolling ||
          Math.abs(touchDeltaX) < Math.abs(this.touchDelta.y)
      }
      if (!this.isScrolling) {
        // Always prevent horizontal scroll:
        event.preventDefault()
        // Stop the slideshow:
        window.clearTimeout(this.timeout)
        if (this.options.continuous) {
          indices = [this.circle(index + 1), index, this.circle(index - 1)]
        } else {
          // Increase resistance if first slide and sliding left
          // or last slide and sliding right:
          this.touchDelta.x = touchDeltaX =
            touchDeltaX /
            ((!index && touchDeltaX > 0) ||
            (index === this.num - 1 && touchDeltaX < 0)
              ? Math.abs(touchDeltaX) / this.slideWidth + 1
              : 1)
          indices = [index]
          if (index) {
            indices.push(index - 1)
          }
          if (index < this.num - 1) {
            indices.unshift(index + 1)
          }
        }
        while (indices.length) {
          index = indices.pop()
          this.translateX(index, touchDeltaX + this.positions[index], 0)
        }
      } else if (!this.options.carousel) {
        this.translateY(index, this.touchDelta.y + this.positions[index], 0)
      }
    },

    ontouchend: function (event) {
      if (this.options.stopTouchEventsPropagation) {
        this.stopPropagation(event)
      }
      var index = this.index
      var absTouchDeltaX = Math.abs(this.touchDelta.x)
      var slideWidth = this.slideWidth
      var duration = Math.ceil(
        (this.options.transitionDuration * (1 - absTouchDeltaX / slideWidth)) /
          2
      )
      // Determine if slide attempt triggers next/prev slide:
      var isValidSlide = absTouchDeltaX > 20
      // Determine if slide attempt is past start or end:
      var isPastBounds =
        (!index && this.touchDelta.x > 0) ||
        (index === this.num - 1 && this.touchDelta.x < 0)
      var isValidClose =
        !isValidSlide &&
        this.options.closeOnSwipeUpOrDown &&
        Math.abs(this.touchDelta.y) > 20
      var direction
      var indexForward
      var indexBackward
      var distanceForward
      var distanceBackward
      if (this.options.continuous) {
        isPastBounds = false
      }
      // Determine direction of swipe (true: right, false: left):
      direction = this.touchDelta.x < 0 ? -1 : 1
      if (!this.isScrolling) {
        if (isValidSlide && !isPastBounds) {
          indexForward = index + direction
          indexBackward = index - direction
          distanceForward = slideWidth * direction
          distanceBackward = -slideWidth * direction
          if (this.options.continuous) {
            this.move(this.circle(indexForward), distanceForward, 0)
            this.move(this.circle(index - 2 * direction), distanceBackward, 0)
          } else if (indexForward >= 0 && indexForward < this.num) {
            this.move(indexForward, distanceForward, 0)
          }
          this.move(index, this.positions[index] + distanceForward, duration)
          this.move(
            this.circle(indexBackward),
            this.positions[this.circle(indexBackward)] + distanceForward,
            duration
          )
          index = this.circle(indexBackward)
          this.onslide(index)
        } else {
          // Move back into position
          if (this.options.continuous) {
            this.move(this.circle(index - 1), -slideWidth, duration)
            this.move(index, 0, duration)
            this.move(this.circle(index + 1), slideWidth, duration)
          } else {
            if (index) {
              this.move(index - 1, -slideWidth, duration)
            }
            this.move(index, 0, duration)
            if (index < this.num - 1) {
              this.move(index + 1, slideWidth, duration)
            }
          }
        }
      } else {
        if (isValidClose) {
          this.close()
        } else {
          // Move back into position
          this.translateY(index, 0, duration)
        }
      }
    },

    ontouchcancel: function (event) {
      if (this.touchStart) {
        this.ontouchend(event)
        delete this.touchStart
      }
    },

    ontransitionend: function (event) {
      var slide = this.slides[this.index]
      if (!event || slide === event.target) {
        if (this.interval) {
          this.play()
        }
        this.setTimeout(this.options.onslideend, [this.index, slide])
      }
    },

    oncomplete: function (event) {
      var target = event.target || event.srcElement
      var parent = target && target.parentNode
      var index
      if (!target || !parent) {
        return
      }
      index = this.getNodeIndex(parent)
      $(parent).removeClass(this.options.slideLoadingClass)
      if (event.type === 'error') {
        $(parent).addClass(this.options.slideErrorClass)
        this.elements[index] = 3 // Fail
      } else {
        this.elements[index] = 2 // Done
      }
      // Fix for IE7's lack of support for percentage max-height:
      if (target.clientHeight > this.container[0].clientHeight) {
        target.style.maxHeight = this.container[0].clientHeight
      }
      if (this.interval && this.slides[this.index] === parent) {
        this.play()
      }
      this.setTimeout(this.options.onslidecomplete, [index, parent])
    },

    onload: function (event) {
      this.oncomplete(event)
    },

    onerror: function (event) {
      this.oncomplete(event)
    },

    onkeydown: function (event) {
      switch (event.which || event.keyCode) {
        case 13: // Enter
          if (this.options.toggleControlsOnEnter) {
            this.preventDefault(event)
            this.toggleControls()
          }
          break
        case 27: // Escape
          if (this.options.closeOnEscape) {
            this.close()
            // prevent Escape from closing other things
            event.stopImmediatePropagation()
          }
          break
        case 32: // Space
          if (this.options.toggleSlideshowOnSpace) {
            this.preventDefault(event)
            this.toggleSlideshow()
          }
          break
        case 37: // ArrowLeft
          if (this.options.enableKeyboardNavigation) {
            this.preventDefault(event)
            this.prev()
          }
          break
        case 39: // ArrowRight
          if (this.options.enableKeyboardNavigation) {
            this.preventDefault(event)
            this.next()
          }
          break
      }
    },

    handleClick: function (event) {
      var options = this.options
      var target = event.target || event.srcElement
      var parent = target.parentNode
      /**
       * Checks if the target from the close has the given class
       *
       * @param {string} className Class name
       * @returns {boolean} Returns true if the target has the class name
       */
      function isTarget(className) {
        return $(target).hasClass(className) || $(parent).hasClass(className)
      }
      if (isTarget(options.toggleClass)) {
        // Click on "toggle" control
        this.preventDefault(event)
        this.toggleControls()
      } else if (isTarget(options.prevClass)) {
        // Click on "prev" control
        this.preventDefault(event)
        this.prev()
      } else if (isTarget(options.nextClass)) {
        // Click on "next" control
        this.preventDefault(event)
        this.next()
      } else if (isTarget(options.closeClass)) {
        // Click on "close" control
        this.preventDefault(event)
        this.close()
      } else if (isTarget(options.playPauseClass)) {
        // Click on "play-pause" control
        this.preventDefault(event)
        this.toggleSlideshow()
      } else if (parent === this.slidesContainer[0]) {
        // Click on slide background
        if (options.closeOnSlideClick) {
          this.preventDefault(event)
          this.close()
        } else if (options.toggleControlsOnSlideClick) {
          this.preventDefault(event)
          this.toggleControls()
        }
      } else if (
        parent.parentNode &&
        parent.parentNode === this.slidesContainer[0]
      ) {
        // Click on displayed element
        if (options.toggleControlsOnSlideClick) {
          this.preventDefault(event)
          this.toggleControls()
        }
      }
    },

    onclick: function (event) {
      if (
        this.options.emulateTouchEvents &&
        this.touchDelta &&
        (Math.abs(this.touchDelta.x) > 20 || Math.abs(this.touchDelta.y) > 20)
      ) {
        delete this.touchDelta
        return
      }
      return this.handleClick(event)
    },

    updateEdgeClasses: function (index) {
      if (!index) {
        this.container.addClass(this.options.leftEdgeClass)
      } else {
        this.container.removeClass(this.options.leftEdgeClass)
      }
      if (index === this.num - 1) {
        this.container.addClass(this.options.rightEdgeClass)
      } else {
        this.container.removeClass(this.options.rightEdgeClass)
      }
    },

    updateActiveSlide: function (oldIndex, newIndex) {
      var slides = this.slides
      var options = this.options
      var list = [
        {
          index: newIndex,
          method: 'addClass',
          hidden: false
        },
        {
          index: oldIndex,
          method: 'removeClass',
          hidden: true
        }
      ]
      var item, index
      while (list.length) {
        item = list.pop()
        $(slides[item.index])[item.method](options.slideActiveClass)
        index = this.circle(item.index - 1)
        if (options.continuous || index < item.index) {
          $(slides[index])[item.method](options.slidePrevClass)
        }
        index = this.circle(item.index + 1)
        if (options.continuous || index > item.index) {
          $(slides[index])[item.method](options.slideNextClass)
        }
      }
      this.slides[oldIndex].setAttribute('aria-hidden', 'true')
      this.slides[newIndex].removeAttribute('aria-hidden')
    },

    handleSlide: function (oldIndex, newIndex) {
      if (!this.options.continuous) {
        this.updateEdgeClasses(newIndex)
      }
      this.updateActiveSlide(oldIndex, newIndex)
      this.loadElements(newIndex)
      if (this.options.unloadElements) {
        this.unloadElements(oldIndex, newIndex)
      }
      this.setTitle(newIndex)
    },

    onslide: function (index) {
      this.handleSlide(this.index, index)
      this.index = index
      this.setTimeout(this.options.onslide, [index, this.slides[index]])
    },

    setTitle: function (index) {
      var firstChild = this.slides[index].firstChild
      var text = firstChild.title || firstChild.alt
      var titleElement = this.titleElement
      if (titleElement.length) {
        this.titleElement.empty()
        if (text) {
          titleElement[0].appendChild(document.createTextNode(text))
        }
      }
    },

    setTimeout: function (func, args, wait) {
      var that = this
      return (
        func &&
        window.setTimeout(function () {
          func.apply(that, args || [])
        }, wait || 0)
      )
    },

    imageFactory: function (obj, callback) {
      var options = this.options
      var that = this
      var url = obj
      var img = this.imagePrototype.cloneNode(false)
      var picture
      var called
      var sources
      var srcset
      var sizes
      var title
      var altText
      var i
      /**
       * Wraps the callback function for the load/error event
       *
       * @param {event} event load/error event
       * @returns {number} timeout ID
       */
      function callbackWrapper(event) {
        if (!called) {
          event = {
            type: event.type,
            target: picture || img
          }
          if (!event.target.parentNode) {
            // Fix for browsers (e.g. IE7) firing the load event for
            // cached images before the element could
            // be added to the DOM:
            return that.setTimeout(callbackWrapper, [event])
          }
          called = true
          $(img).off('load error', callbackWrapper)
          callback(event)
        }
      }
      if (typeof url !== 'string') {
        url = this.getItemProperty(obj, options.urlProperty)
        sources =
          this.support.picture &&
          this.support.source &&
          this.getItemProperty(obj, options.sourcesProperty)
        srcset = this.getItemProperty(obj, options.srcsetProperty)
        sizes = this.getItemProperty(obj, options.sizesProperty)
        title = this.getItemProperty(obj, options.titleProperty)
        altText = this.getItemProperty(obj, options.altTextProperty) || title
      }
      img.draggable = false
      if (title) {
        img.title = title
      }
      if (altText) {
        img.alt = altText
      }
      $(img).on('load error', callbackWrapper)
      if (sources && sources.length) {
        picture = this.picturePrototype.cloneNode(false)
        for (i = 0; i < sources.length; i += 1) {
          picture.appendChild(
            $.extend(this.sourcePrototype.cloneNode(false), sources[i])
          )
        }
        picture.appendChild(img)
        $(picture).addClass(options.toggleClass)
      }
      if (srcset) {
        if (sizes) {
          img.sizes = sizes
        }
        img.srcset = srcset
      }
      img.src = url
      if (picture) return picture
      return img
    },

    createElement: function (obj, callback) {
      var type = obj && this.getItemProperty(obj, this.options.typeProperty)
      var factory =
        (type && this[type.split('/')[0] + 'Factory']) || this.imageFactory
      var element = obj && factory.call(this, obj, callback)
      if (!element) {
        element = this.elementPrototype.cloneNode(false)
        this.setTimeout(callback, [
          {
            type: 'error',
            target: element
          }
        ])
      }
      $(element).addClass(this.options.slideContentClass)
      return element
    },

    iteratePreloadRange: function (index, func) {
      var num = this.num
      var options = this.options
      var limit = Math.min(num, options.preloadRange * 2 + 1)
      var j = index
      var i
      for (i = 0; i < limit; i += 1) {
        // First iterate to the current index (0),
        // then the next one (+1),
        // then the previous one (-1),
        // then the next after next (+2),
        // then the one before the previous one (-2), etc.:
        j += i * (i % 2 === 0 ? -1 : 1)
        if (j < 0 || j >= num) {
          if (!options.continuous) continue
          // Connect the ends of the list to load slide elements for
          // continuous iteration:
          j = this.circle(j)
        }
        func.call(this, j)
      }
    },

    loadElement: function (index) {
      if (!this.elements[index]) {
        if (this.slides[index].firstChild) {
          this.elements[index] = $(this.slides[index]).hasClass(
            this.options.slideErrorClass
          )
            ? 3
            : 2
        } else {
          this.elements[index] = 1 // Loading
          $(this.slides[index]).addClass(this.options.slideLoadingClass)
          this.slides[index].appendChild(
            this.createElement(this.list[index], this.proxyListener)
          )
        }
      }
    },

    loadElements: function (index) {
      this.iteratePreloadRange(index, this.loadElement)
    },

    unloadElements: function (oldIndex, newIndex) {
      var preloadRange = this.options.preloadRange
      this.iteratePreloadRange(oldIndex, function (i) {
        var diff = Math.abs(i - newIndex)
        if (diff > preloadRange && diff + preloadRange < this.num) {
          this.unloadSlide(i)
          delete this.elements[i]
        }
      })
    },

    addSlide: function (index) {
      var slide = this.slidePrototype.cloneNode(false)
      slide.setAttribute('data-index', index)
      slide.setAttribute('aria-hidden', 'true')
      this.slidesContainer[0].appendChild(slide)
      this.slides.push(slide)
    },

    positionSlide: function (index) {
      var slide = this.slides[index]
      slide.style.width = this.slideWidth + 'px'
      if (this.support.transform) {
        slide.style.left = index * -this.slideWidth + 'px'
        this.move(
          index,
          this.index > index
            ? -this.slideWidth
            : this.index < index
            ? this.slideWidth
            : 0,
          0
        )
      }
    },

    initSlides: function (reload) {
      var clearSlides, i
      if (!reload) {
        this.positions = []
        this.positions.length = this.num
        this.elements = {}
        this.picturePrototype =
          this.support.picture && document.createElement('picture')
        this.sourcePrototype =
          this.support.source && document.createElement('source')
        this.imagePrototype = document.createElement('img')
        this.elementPrototype = document.createElement('div')
        this.slidePrototype = this.elementPrototype.cloneNode(false)
        $(this.slidePrototype).addClass(this.options.slideClass)
        this.slides = this.slidesContainer[0].children
        clearSlides =
          this.options.clearSlides || this.slides.length !== this.num
      }
      this.slideWidth = this.container[0].clientWidth
      this.slideHeight = this.container[0].clientHeight
      this.slidesContainer[0].style.width = this.num * this.slideWidth + 'px'
      if (clearSlides) {
        this.resetSlides()
      }
      for (i = 0; i < this.num; i += 1) {
        if (clearSlides) {
          this.addSlide(i)
        }
        this.positionSlide(i)
      }
      // Reposition the slides before and after the given index:
      if (this.options.continuous && this.support.transform) {
        this.move(this.circle(this.index - 1), -this.slideWidth, 0)
        this.move(this.circle(this.index + 1), this.slideWidth, 0)
      }
      if (!this.support.transform) {
        this.slidesContainer[0].style.left =
          this.index * -this.slideWidth + 'px'
      }
    },

    unloadSlide: function (index) {
      var slide, firstChild
      slide = this.slides[index]
      firstChild = slide.firstChild
      if (firstChild !== null) {
        slide.removeChild(firstChild)
      }
    },

    unloadAllSlides: function () {
      var i, len
      for (i = 0, len = this.slides.length; i < len; i++) {
        this.unloadSlide(i)
      }
    },

    toggleControls: function () {
      var controlsClass = this.options.controlsClass
      if (this.container.hasClass(controlsClass)) {
        this.container.removeClass(controlsClass)
      } else {
        this.container.addClass(controlsClass)
      }
    },

    toggleSlideshow: function () {
      if (!this.interval) {
        this.play()
      } else {
        this.pause()
      }
    },

    getNodeIndex: function (element) {
      return parseInt(element.getAttribute('data-index'), 10)
    },

    getNestedProperty: function (obj, property) {
      property.replace(
        // Matches native JavaScript notation in a String,
        // e.g. '["doubleQuoteProp"].dotProp[2]'
        // eslint-disable-next-line no-useless-escape
        /\[(?:'([^']+)'|"([^"]+)"|(\d+))\]|(?:(?:^|\.)([^\.\[]+))/g,
        function (str, singleQuoteProp, doubleQuoteProp, arrayIndex, dotProp) {
          var prop =
            dotProp ||
            singleQuoteProp ||
            doubleQuoteProp ||
            (arrayIndex && parseInt(arrayIndex, 10))
          if (str && obj) {
            obj = obj[prop]
          }
        }
      )
      return obj
    },

    getDataProperty: function (obj, property) {
      var key
      var prop
      if (obj.dataset) {
        key = property.replace(/-([a-z])/g, function (_, b) {
          return b.toUpperCase()
        })
        prop = obj.dataset[key]
      } else if (obj.getAttribute) {
        prop = obj.getAttribute(
          'data-' + property.replace(/([A-Z])/g, '-$1').toLowerCase()
        )
      }
      if (typeof prop === 'string') {
        // eslint-disable-next-line no-useless-escape
        if (
          /^(true|false|null|-?\d+(\.\d+)?|\{[\s\S]*\}|\[[\s\S]*\])$/.test(prop)
        ) {
          try {
            return $.parseJSON(prop)
          } catch (ignore) {
            // ignore JSON parsing errors
          }
        }
        return prop
      }
    },

    getItemProperty: function (obj, property) {
      var prop = this.getDataProperty(obj, property)
      if (prop === undefined) {
        prop = obj[property]
      }
      if (prop === undefined) {
        prop = this.getNestedProperty(obj, property)
      }
      return prop
    },

    initStartIndex: function () {
      var index = this.options.index
      var urlProperty = this.options.urlProperty
      var i
      // Check if the index is given as a list object:
      if (index && typeof index !== 'number') {
        for (i = 0; i < this.num; i += 1) {
          if (
            this.list[i] === index ||
            this.getItemProperty(this.list[i], urlProperty) ===
              this.getItemProperty(index, urlProperty)
          ) {
            index = i
            break
          }
        }
      }
      // Make sure the index is in the list range:
      this.index = this.circle(parseInt(index, 10) || 0)
    },

    initEventListeners: function () {
      var that = this
      var slidesContainer = this.slidesContainer
      /**
       * Proxy listener
       *
       * @param {event} event original event
       */
      function proxyListener(event) {
        var type =
          that.support.transition && that.support.transition.end === event.type
            ? 'transitionend'
            : event.type
        that['on' + type](event)
      }
      $(window).on('resize', proxyListener)
      $(window).on('hashchange', proxyListener)
      $(document.body).on('keydown', proxyListener)
      this.container.on('click', proxyListener)
      if (this.support.touch) {
        slidesContainer.on(
          'touchstart touchmove touchend touchcancel',
          proxyListener
        )
      } else if (this.options.emulateTouchEvents && this.support.transition) {
        slidesContainer.on(
          'mousedown mousemove mouseup mouseout',
          proxyListener
        )
      }
      if (this.support.transition) {
        slidesContainer.on(this.support.transition.end, proxyListener)
      }
      this.proxyListener = proxyListener
    },

    destroyEventListeners: function () {
      var slidesContainer = this.slidesContainer
      var proxyListener = this.proxyListener
      $(window).off('resize', proxyListener)
      $(document.body).off('keydown', proxyListener)
      this.container.off('click', proxyListener)
      if (this.support.touch) {
        slidesContainer.off(
          'touchstart touchmove touchend touchcancel',
          proxyListener
        )
      } else if (this.options.emulateTouchEvents && this.support.transition) {
        slidesContainer.off(
          'mousedown mousemove mouseup mouseout',
          proxyListener
        )
      }
      if (this.support.transition) {
        slidesContainer.off(this.support.transition.end, proxyListener)
      }
    },

    handleOpen: function () {
      if (this.options.onopened) {
        this.options.onopened.call(this)
      }
    },

    initWidget: function () {
      var that = this
      /**
       * Open handler
       *
       * @param {event} event Gallery open event
       */
      function openHandler(event) {
        if (event.target === that.container[0]) {
          that.container.off(that.support.transition.end, openHandler)
          that.handleOpen()
        }
      }
      this.container = $(this.options.container)
      if (!this.container.length) {
        this.console.log(
          'blueimp Gallery: Widget container not found.',
          this.options.container
        )
        return false
      }
      this.slidesContainer = this.container
        .find(this.options.slidesContainer)
        .first()
      if (!this.slidesContainer.length) {
        this.console.log(
          'blueimp Gallery: Slides container not found.',
          this.options.slidesContainer
        )
        return false
      }
      this.titleElement = this.container.find(this.options.titleElement).first()
      this.playPauseElement = this.container
        .find('.' + this.options.playPauseClass)
        .first()
      if (this.num === 1) {
        this.container.addClass(this.options.singleClass)
      }
      if (this.support.svgasimg) {
        this.container.addClass(this.options.svgasimgClass)
      }
      if (this.support.smil) {
        this.container.addClass(this.options.smilClass)
      }
      if (this.options.onopen) {
        this.options.onopen.call(this)
      }
      if (this.support.transition && this.options.displayTransition) {
        this.container.on(this.support.transition.end, openHandler)
      } else {
        this.handleOpen()
      }
      if (this.options.hidePageScrollbars) {
        // Hide the page scrollbars:
        this.bodyOverflowStyle = document.body.style.overflow
        document.body.style.overflow = 'hidden'
      }
      this.container[0].style.display = 'block'
      this.initSlides()
      this.container.addClass(this.options.displayClass)
    },

    initOptions: function (options) {
      // Create a copy of the prototype options:
      this.options = $.extend({}, this.options)
      // Check if carousel mode is enabled:
      if (
        (options && options.carousel) ||
        (this.options.carousel && (!options || options.carousel !== false))
      ) {
        $.extend(this.options, this.carouselOptions)
      }
      // Override any given options:
      $.extend(this.options, options)
      if (this.num < 3) {
        // 1 or 2 slides cannot be displayed continuous,
        // remember the original option by setting to null instead of false:
        this.options.continuous = this.options.continuous ? null : false
      }
      if (!this.support.transition) {
        this.options.emulateTouchEvents = false
      }
      if (this.options.event) {
        this.preventDefault(this.options.event)
      }
    }
  })

  return Gallery
})


/***/ },

/***/ "./node_modules/blueimp-gallery/js/blueimp-helper.js"
/*!***********************************************************!*\
  !*** ./node_modules/blueimp-gallery/js/blueimp-helper.js ***!
  \***********************************************************/
(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 * blueimp helper JS
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define */

/* eslint-disable no-param-reassign */

;(function () {
  'use strict'

  /**
   * Object.assign polyfill
   *
   * @param {object} obj1 First object
   * @param {object} obj2 Second object
   * @returns {object} Merged object
   */
  function extend(obj1, obj2) {
    var prop
    for (prop in obj2) {
      if (Object.prototype.hasOwnProperty.call(obj2, prop)) {
        obj1[prop] = obj2[prop]
      }
    }
    return obj1
  }
  /**
   * Helper constructor
   *
   * @class
   * @param {*} query jQuery type query argument
   */
  function Helper(query) {
    if (!this || this.find !== Helper.prototype.find) {
      // Called as function instead of as constructor,
      // so we simply return a new instance:
      return new Helper(query)
    }
    this.length = 0
    if (query) {
      if (typeof query === 'string') {
        query = this.find(query)
      }
      if (query.nodeType || query === query.window) {
        // Single HTML element
        this.length = 1
        this[0] = query
      } else {
        // HTML element collection
        var i = query.length
        this.length = i
        while (i) {
          i -= 1
          this[i] = query[i]
        }
      }
    }
  }

  Helper.extend = extend

  Helper.contains = function (container, element) {
    do {
      element = element.parentNode
      if (element === container) {
        return true
      }
    } while (element)
    return false
  }

  Helper.parseJSON = function (string) {
    return JSON.parse(string)
  }

  extend(Helper.prototype, {
    find: function (query) {
      var container = this[0] || document
      if (typeof query === 'string') {
        if (container.querySelectorAll) {
          query = container.querySelectorAll(query)
        } else if (query.charAt(0) === '#') {
          query = container.getElementById(query.slice(1))
        } else {
          query = container.getElementsByTagName(query)
        }
      }
      return new Helper(query)
    },

    hasClass: function (className) {
      if (!this[0]) return false
      return new RegExp('(?:^|\\s+)' + className + '(?:\\s+|$)').test(
        this[0].className
      )
    },

    addClass: function (className) {
      var i = this.length
      var classNames
      var element
      var j
      while (i) {
        i -= 1
        element = this[i]
        if (!element.className) {
          element.className = className
          continue
        }
        if (!classNames) classNames = className.split(/\s+/)
        for (j = 0; j < classNames.length; j += 1) {
          if (this.hasClass(classNames[j])) {
            continue
          }
          element.className += ' ' + classNames[j]
        }
      }
      return this
    },

    removeClass: function (className) {
      // Match any of the given class names
      var regexp = new RegExp('^(?:' + className.split(/\s+/).join('|') + ')$')
      // Match any class names and their trailing whitespace
      var matcher = /(\S+)(?:\s+|$)/g
      var replacer = function (match, className) {
        // Replace class names that match the given ones
        return regexp.test(className) ? '' : match
      }
      var trimEnd = /\s+$/
      var i = this.length
      var element
      while (i) {
        i -= 1
        element = this[i]
        element.className = element.className
          .replace(matcher, replacer)
          .replace(trimEnd, '')
      }
      return this
    },

    on: function (eventName, handler) {
      var eventNames = eventName.split(/\s+/)
      var i
      var element
      while (eventNames.length) {
        eventName = eventNames.shift()
        i = this.length
        while (i) {
          i -= 1
          element = this[i]
          if (element.addEventListener) {
            element.addEventListener(eventName, handler, false)
          } else if (element.attachEvent) {
            element.attachEvent('on' + eventName, handler)
          }
        }
      }
      return this
    },

    off: function (eventName, handler) {
      var eventNames = eventName.split(/\s+/)
      var i
      var element
      while (eventNames.length) {
        eventName = eventNames.shift()
        i = this.length
        while (i) {
          i -= 1
          element = this[i]
          if (element.removeEventListener) {
            element.removeEventListener(eventName, handler, false)
          } else if (element.detachEvent) {
            element.detachEvent('on' + eventName, handler)
          }
        }
      }
      return this
    },

    empty: function () {
      var i = this.length
      var element
      while (i) {
        i -= 1
        element = this[i]
        while (element.hasChildNodes()) {
          element.removeChild(element.lastChild)
        }
      }
      return this
    },

    first: function () {
      return new Helper(this[0])
    }
  })

  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return Helper
    }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else // removed by dead control flow
{}
})()


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************************!*\
  !*** ./assets/js/gallery.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ enableGallery)
/* harmony export */ });
/* harmony import */ var blueimp_gallery_js_blueimp_gallery_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blueimp-gallery/js/blueimp-gallery.js */ "./node_modules/blueimp-gallery/js/blueimp-gallery.js");
/* harmony import */ var blueimp_gallery_js_blueimp_gallery_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blueimp_gallery_js_blueimp_gallery_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var blueimp_gallery_css_blueimp_gallery_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! blueimp-gallery/css/blueimp-gallery.css */ "./node_modules/blueimp-gallery/css/blueimp-gallery.css");


function enableGallery() {
  let elements = document.getElementsByClassName("gallery-clickable");
  Array.from(elements).forEach(function (element) {
    element.onclick = function (event) {
      event = event || window.event;
      var target = event.target || event.srcElement;
      var link = target.src ? target.parentNode : target;
      var options = {
        index: link,
        event: event
      };
      var links = this.getElementsByClassName('picture-link');
      new (blueimp_gallery_js_blueimp_gallery_js__WEBPACK_IMPORTED_MODULE_0___default())(links, options);
    };
  });
}
document.addEventListener("DOMContentLoaded", function (event) {
  enableGallery();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLENBQUM7QUFDRDtBQUNBLE1BQU0sSUFBMEM7QUFDaEQ7QUFDQSxJQUFJLGlDQUFPLENBQUMsa0dBQWtCLENBQUMsb0NBQUUsT0FBTztBQUFBO0FBQUE7QUFBQSxrR0FBQztBQUN6QyxJQUFJLEtBQUs7QUFBQSxFQUlOO0FBQ0gsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxnQkFBZ0I7QUFDN0IsYUFBYSxRQUFRO0FBQ3JCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFCQUFxQjs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGNBQWM7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCLG1CQUFtQixTQUFTO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QixtQkFBbUIsUUFBUTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0JBQW9CO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFdBQVc7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsY0FBYztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLDRDQUE0QyxTQUFTO0FBQ3JEO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxTQUFTO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixjQUFjO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7QUM5Z0REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxHQUFHO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVILE1BQU0sSUFBMEM7QUFDaEQsSUFBSSxtQ0FBTztBQUNYO0FBQ0EsS0FBSztBQUFBLGtHQUFDO0FBQ04sSUFBSSxLQUFLO0FBQUEsRUFHTjtBQUNILENBQUM7Ozs7Ozs7VUN4TkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0M1QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05tRTtBQUNsQjtBQUVsQyxTQUFTQyxhQUFhQSxDQUFBLEVBQUc7RUFDcEMsSUFBSUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLHNCQUFzQixDQUFDLG1CQUFtQixDQUFDO0VBRW5FQyxLQUFLLENBQUNDLElBQUksQ0FBQ0osUUFBUSxDQUFDLENBQUNLLE9BQU8sQ0FBQyxVQUFTQyxPQUFPLEVBQUU7SUFDM0NBLE9BQU8sQ0FBQ0MsT0FBTyxHQUFHLFVBQVNDLEtBQUssRUFBRTtNQUM5QkEsS0FBSyxHQUFHQSxLQUFLLElBQUlDLE1BQU0sQ0FBQ0QsS0FBSztNQUM3QixJQUFJRSxNQUFNLEdBQUdGLEtBQUssQ0FBQ0UsTUFBTSxJQUFJRixLQUFLLENBQUNHLFVBQVU7TUFDN0MsSUFBSUMsSUFBSSxHQUFHRixNQUFNLENBQUNHLEdBQUcsR0FBR0gsTUFBTSxDQUFDSSxVQUFVLEdBQUdKLE1BQU07TUFDbEQsSUFBSUssT0FBTyxHQUFHO1FBQUVDLEtBQUssRUFBRUosSUFBSTtRQUFFSixLQUFLLEVBQUVBO01BQU0sQ0FBQztNQUMzQyxJQUFJUyxLQUFLLEdBQUcsSUFBSSxDQUFDZixzQkFBc0IsQ0FBQyxjQUFjLENBQUM7TUFDdkQsSUFBSUosOEVBQWMsQ0FBQ21CLEtBQUssRUFBRUYsT0FBTyxDQUFDO0lBQ3RDLENBQUM7RUFDTCxDQUFDLENBQUM7QUFDTjtBQUVBZCxRQUFRLENBQUNpQixnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxVQUFVVixLQUFLLEVBQUU7RUFDM0RULGFBQWEsQ0FBQyxDQUFDO0FBQ25CLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnZkLy4vbm9kZV9tb2R1bGVzL2JsdWVpbXAtZ2FsbGVyeS9jc3MvYmx1ZWltcC1nYWxsZXJ5LmNzcyIsIndlYnBhY2s6Ly9mdmQvLi9ub2RlX21vZHVsZXMvYmx1ZWltcC1nYWxsZXJ5L2pzL2JsdWVpbXAtZ2FsbGVyeS5qcyIsIndlYnBhY2s6Ly9mdmQvLi9ub2RlX21vZHVsZXMvYmx1ZWltcC1nYWxsZXJ5L2pzL2JsdWVpbXAtaGVscGVyLmpzIiwid2VicGFjazovL2Z2ZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mdmQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZnZkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mdmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mdmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mdmQvLi9hc3NldHMvanMvZ2FsbGVyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvKlxuICogYmx1ZWltcCBHYWxsZXJ5IEpTXG4gKiBodHRwczovL2dpdGh1Yi5jb20vYmx1ZWltcC9HYWxsZXJ5XG4gKlxuICogQ29weXJpZ2h0IDIwMTMsIFNlYmFzdGlhbiBUc2NoYW5cbiAqIGh0dHBzOi8vYmx1ZWltcC5uZXRcbiAqXG4gKiBTd2lwZSBpbXBsZW1lbnRhdGlvbiBiYXNlZCBvblxuICogaHR0cHM6Ly9naXRodWIuY29tL2JyYWRiaXJkc2FsbC9Td2lwZVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyogZ2xvYmFsIGRlZmluZSwgRG9jdW1lbnRUb3VjaCAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuXG47KGZ1bmN0aW9uIChmYWN0b3J5KSB7XG4gICd1c2Ugc3RyaWN0J1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgLy8gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIEFNRCBtb2R1bGU6XG4gICAgZGVmaW5lKFsnLi9ibHVlaW1wLWhlbHBlciddLCBmYWN0b3J5KVxuICB9IGVsc2Uge1xuICAgIC8vIEJyb3dzZXIgZ2xvYmFsczpcbiAgICB3aW5kb3cuYmx1ZWltcCA9IHdpbmRvdy5ibHVlaW1wIHx8IHt9XG4gICAgd2luZG93LmJsdWVpbXAuR2FsbGVyeSA9IGZhY3Rvcnkod2luZG93LmJsdWVpbXAuaGVscGVyIHx8IHdpbmRvdy5qUXVlcnkpXG4gIH1cbn0pKGZ1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0J1xuXG4gIC8qKlxuICAgKiBHYWxsZXJ5IGNvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge0FycmF5fE5vZGVMaXN0fSBsaXN0IEdhbGxlcnkgY29udGVudFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIEdhbGxlcnkgb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7b2JqZWN0fSBHYWxsZXJ5IG9iamVjdFxuICAgKi9cbiAgZnVuY3Rpb24gR2FsbGVyeShsaXN0LCBvcHRpb25zKSB7XG4gICAgaWYgKGRvY3VtZW50LmJvZHkuc3R5bGUubWF4SGVpZ2h0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIGRvY3VtZW50LmJvZHkuc3R5bGUubWF4SGVpZ2h0IGlzIHVuZGVmaW5lZCBvbiBJRTYgYW5kIGxvd2VyXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBpZiAoIXRoaXMgfHwgdGhpcy5vcHRpb25zICE9PSBHYWxsZXJ5LnByb3RvdHlwZS5vcHRpb25zKSB7XG4gICAgICAvLyBDYWxsZWQgYXMgZnVuY3Rpb24gaW5zdGVhZCBvZiBhcyBjb25zdHJ1Y3RvcixcbiAgICAgIC8vIHNvIHdlIHNpbXBseSByZXR1cm4gYSBuZXcgaW5zdGFuY2U6XG4gICAgICByZXR1cm4gbmV3IEdhbGxlcnkobGlzdCwgb3B0aW9ucylcbiAgICB9XG4gICAgaWYgKCFsaXN0IHx8ICFsaXN0Lmxlbmd0aCkge1xuICAgICAgdGhpcy5jb25zb2xlLmxvZyhcbiAgICAgICAgJ2JsdWVpbXAgR2FsbGVyeTogTm8gb3IgZW1wdHkgbGlzdCBwcm92aWRlZCBhcyBmaXJzdCBhcmd1bWVudC4nLFxuICAgICAgICBsaXN0XG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdGhpcy5saXN0ID0gbGlzdFxuICAgIHRoaXMubnVtID0gbGlzdC5sZW5ndGhcbiAgICB0aGlzLmluaXRPcHRpb25zKG9wdGlvbnMpXG4gICAgdGhpcy5pbml0aWFsaXplKClcbiAgfVxuXG4gICQuZXh0ZW5kKEdhbGxlcnkucHJvdG90eXBlLCB7XG4gICAgb3B0aW9uczoge1xuICAgICAgLy8gVGhlIElkLCBlbGVtZW50IG9yIHF1ZXJ5U2VsZWN0b3Igb2YgdGhlIGdhbGxlcnkgd2lkZ2V0OlxuICAgICAgY29udGFpbmVyOiAnI2JsdWVpbXAtZ2FsbGVyeScsXG4gICAgICAvLyBUaGUgdGFnIG5hbWUsIElkLCBlbGVtZW50IG9yIHF1ZXJ5U2VsZWN0b3Igb2YgdGhlIHNsaWRlcyBjb250YWluZXI6XG4gICAgICBzbGlkZXNDb250YWluZXI6ICdkaXYnLFxuICAgICAgLy8gVGhlIHRhZyBuYW1lLCBJZCwgZWxlbWVudCBvciBxdWVyeVNlbGVjdG9yIG9mIHRoZSB0aXRsZSBlbGVtZW50OlxuICAgICAgdGl0bGVFbGVtZW50OiAnaDMnLFxuICAgICAgLy8gVGhlIGNsYXNzIHRvIGFkZCB3aGVuIHRoZSBnYWxsZXJ5IGlzIHZpc2libGU6XG4gICAgICBkaXNwbGF5Q2xhc3M6ICdibHVlaW1wLWdhbGxlcnktZGlzcGxheScsXG4gICAgICAvLyBUaGUgY2xhc3MgdG8gYWRkIHdoZW4gdGhlIGdhbGxlcnkgY29udHJvbHMgYXJlIHZpc2libGU6XG4gICAgICBjb250cm9sc0NsYXNzOiAnYmx1ZWltcC1nYWxsZXJ5LWNvbnRyb2xzJyxcbiAgICAgIC8vIFRoZSBjbGFzcyB0byBhZGQgd2hlbiB0aGUgZ2FsbGVyeSBvbmx5IGRpc3BsYXlzIG9uZSBlbGVtZW50OlxuICAgICAgc2luZ2xlQ2xhc3M6ICdibHVlaW1wLWdhbGxlcnktc2luZ2xlJyxcbiAgICAgIC8vIFRoZSBjbGFzcyB0byBhZGQgd2hlbiB0aGUgbGVmdCBlZGdlIGhhcyBiZWVuIHJlYWNoZWQ6XG4gICAgICBsZWZ0RWRnZUNsYXNzOiAnYmx1ZWltcC1nYWxsZXJ5LWxlZnQnLFxuICAgICAgLy8gVGhlIGNsYXNzIHRvIGFkZCB3aGVuIHRoZSByaWdodCBlZGdlIGhhcyBiZWVuIHJlYWNoZWQ6XG4gICAgICByaWdodEVkZ2VDbGFzczogJ2JsdWVpbXAtZ2FsbGVyeS1yaWdodCcsXG4gICAgICAvLyBUaGUgY2xhc3MgdG8gYWRkIHdoZW4gdGhlIGF1dG9tYXRpYyBzbGlkZXNob3cgaXMgYWN0aXZlOlxuICAgICAgcGxheWluZ0NsYXNzOiAnYmx1ZWltcC1nYWxsZXJ5LXBsYXlpbmcnLFxuICAgICAgLy8gVGhlIGNsYXNzIHRvIGFkZCB3aGVuIHRoZSBicm93c2VyIHN1cHBvcnRzIFNWRyBhcyBpbWcgKG9yIGJhY2tncm91bmQpOlxuICAgICAgc3ZnYXNpbWdDbGFzczogJ2JsdWVpbXAtZ2FsbGVyeS1zdmdhc2ltZycsXG4gICAgICAvLyBUaGUgY2xhc3MgdG8gYWRkIHdoZW4gdGhlIGJyb3dzZXIgc3VwcG9ydHMgU01JTCAoYW5pbWF0ZWQgU1ZHcyk6XG4gICAgICBzbWlsQ2xhc3M6ICdibHVlaW1wLWdhbGxlcnktc21pbCcsXG4gICAgICAvLyBUaGUgY2xhc3MgZm9yIGFsbCBzbGlkZXM6XG4gICAgICBzbGlkZUNsYXNzOiAnc2xpZGUnLFxuICAgICAgLy8gVGhlIHNsaWRlIGNsYXNzIGZvciB0aGUgYWN0aXZlIChjdXJyZW50IGluZGV4KSBzbGlkZTpcbiAgICAgIHNsaWRlQWN0aXZlQ2xhc3M6ICdzbGlkZS1hY3RpdmUnLFxuICAgICAgLy8gVGhlIHNsaWRlIGNsYXNzIGZvciB0aGUgcHJldmlvdXMgKGJlZm9yZSBjdXJyZW50IGluZGV4KSBzbGlkZTpcbiAgICAgIHNsaWRlUHJldkNsYXNzOiAnc2xpZGUtcHJldicsXG4gICAgICAvLyBUaGUgc2xpZGUgY2xhc3MgZm9yIHRoZSBuZXh0IChhZnRlciBjdXJyZW50IGluZGV4KSBzbGlkZTpcbiAgICAgIHNsaWRlTmV4dENsYXNzOiAnc2xpZGUtbmV4dCcsXG4gICAgICAvLyBUaGUgc2xpZGUgY2xhc3MgZm9yIGxvYWRpbmcgZWxlbWVudHM6XG4gICAgICBzbGlkZUxvYWRpbmdDbGFzczogJ3NsaWRlLWxvYWRpbmcnLFxuICAgICAgLy8gVGhlIHNsaWRlIGNsYXNzIGZvciBlbGVtZW50cyB0aGF0IGZhaWxlZCB0byBsb2FkOlxuICAgICAgc2xpZGVFcnJvckNsYXNzOiAnc2xpZGUtZXJyb3InLFxuICAgICAgLy8gVGhlIGNsYXNzIGZvciB0aGUgY29udGVudCBlbGVtZW50IGxvYWRlZCBpbnRvIGVhY2ggc2xpZGU6XG4gICAgICBzbGlkZUNvbnRlbnRDbGFzczogJ3NsaWRlLWNvbnRlbnQnLFxuICAgICAgLy8gVGhlIGNsYXNzIGZvciB0aGUgXCJ0b2dnbGVcIiBjb250cm9sOlxuICAgICAgdG9nZ2xlQ2xhc3M6ICd0b2dnbGUnLFxuICAgICAgLy8gVGhlIGNsYXNzIGZvciB0aGUgXCJwcmV2XCIgY29udHJvbDpcbiAgICAgIHByZXZDbGFzczogJ3ByZXYnLFxuICAgICAgLy8gVGhlIGNsYXNzIGZvciB0aGUgXCJuZXh0XCIgY29udHJvbDpcbiAgICAgIG5leHRDbGFzczogJ25leHQnLFxuICAgICAgLy8gVGhlIGNsYXNzIGZvciB0aGUgXCJjbG9zZVwiIGNvbnRyb2w6XG4gICAgICBjbG9zZUNsYXNzOiAnY2xvc2UnLFxuICAgICAgLy8gVGhlIGNsYXNzIGZvciB0aGUgXCJwbGF5LXBhdXNlXCIgdG9nZ2xlIGNvbnRyb2w6XG4gICAgICBwbGF5UGF1c2VDbGFzczogJ3BsYXktcGF1c2UnLFxuICAgICAgLy8gVGhlIGxpc3Qgb2JqZWN0IHByb3BlcnR5IChvciBkYXRhIGF0dHJpYnV0ZSkgd2l0aCB0aGUgb2JqZWN0IHR5cGU6XG4gICAgICB0eXBlUHJvcGVydHk6ICd0eXBlJyxcbiAgICAgIC8vIFRoZSBsaXN0IG9iamVjdCBwcm9wZXJ0eSAob3IgZGF0YSBhdHRyaWJ1dGUpIHdpdGggdGhlIG9iamVjdCB0aXRsZTpcbiAgICAgIHRpdGxlUHJvcGVydHk6ICd0aXRsZScsXG4gICAgICAvLyBUaGUgbGlzdCBvYmplY3QgcHJvcGVydHkgKG9yIGRhdGEgYXR0cmlidXRlKSB3aXRoIHRoZSBvYmplY3QgYWx0IHRleHQ6XG4gICAgICBhbHRUZXh0UHJvcGVydHk6ICdhbHQnLFxuICAgICAgLy8gVGhlIGxpc3Qgb2JqZWN0IHByb3BlcnR5IChvciBkYXRhIGF0dHJpYnV0ZSkgd2l0aCB0aGUgb2JqZWN0IFVSTDpcbiAgICAgIHVybFByb3BlcnR5OiAnaHJlZicsXG4gICAgICAvLyBUaGUgbGlzdCBvYmplY3QgcHJvcGVydHkgKG9yIGRhdGEgYXR0cmlidXRlKSB3aXRoIHRoZSBvYmplY3Qgc3Jjc2V0OlxuICAgICAgc3Jjc2V0UHJvcGVydHk6ICdzcmNzZXQnLFxuICAgICAgLy8gVGhlIGxpc3Qgb2JqZWN0IHByb3BlcnR5IChvciBkYXRhIGF0dHJpYnV0ZSkgd2l0aCB0aGUgb2JqZWN0IHNpemVzOlxuICAgICAgc2l6ZXNQcm9wZXJ0eTogJ3NpemVzJyxcbiAgICAgIC8vIFRoZSBsaXN0IG9iamVjdCBwcm9wZXJ0eSAob3IgZGF0YSBhdHRyaWJ1dGUpIHdpdGggdGhlIG9iamVjdCBzb3VyY2VzOlxuICAgICAgc291cmNlc1Byb3BlcnR5OiAnc291cmNlcycsXG4gICAgICAvLyBUaGUgZ2FsbGVyeSBsaXN0ZW5zIGZvciB0cmFuc2l0aW9uZW5kIGV2ZW50cyBiZWZvcmUgdHJpZ2dlcmluZyB0aGVcbiAgICAgIC8vIG9wZW5lZCBhbmQgY2xvc2VkIGV2ZW50cywgdW5sZXNzIHRoZSBmb2xsb3dpbmcgb3B0aW9uIGlzIHNldCB0byBmYWxzZTpcbiAgICAgIGRpc3BsYXlUcmFuc2l0aW9uOiB0cnVlLFxuICAgICAgLy8gRGVmaW5lcyBpZiB0aGUgZ2FsbGVyeSBzbGlkZXMgYXJlIGNsZWFyZWQgZnJvbSB0aGUgZ2FsbGVyeSBtb2RhbCxcbiAgICAgIC8vIG9yIHJldXNlZCBmb3IgdGhlIG5leHQgZ2FsbGVyeSBpbml0aWFsaXphdGlvbjpcbiAgICAgIGNsZWFyU2xpZGVzOiB0cnVlLFxuICAgICAgLy8gVG9nZ2xlIHRoZSBjb250cm9scyBvbiBwcmVzc2luZyB0aGUgRW50ZXIga2V5OlxuICAgICAgdG9nZ2xlQ29udHJvbHNPbkVudGVyOiB0cnVlLFxuICAgICAgLy8gVG9nZ2xlIHRoZSBjb250cm9scyBvbiBzbGlkZSBjbGljazpcbiAgICAgIHRvZ2dsZUNvbnRyb2xzT25TbGlkZUNsaWNrOiB0cnVlLFxuICAgICAgLy8gVG9nZ2xlIHRoZSBhdXRvbWF0aWMgc2xpZGVzaG93IGludGVydmFsIG9uIHByZXNzaW5nIHRoZSBTcGFjZSBrZXk6XG4gICAgICB0b2dnbGVTbGlkZXNob3dPblNwYWNlOiB0cnVlLFxuICAgICAgLy8gTmF2aWdhdGUgdGhlIGdhbGxlcnkgYnkgcHJlc3NpbmcgdGhlIEFycm93TGVmdCBhbmQgQXJyb3dSaWdodCBrZXlzOlxuICAgICAgZW5hYmxlS2V5Ym9hcmROYXZpZ2F0aW9uOiB0cnVlLFxuICAgICAgLy8gQ2xvc2UgdGhlIGdhbGxlcnkgb24gcHJlc3NpbmcgdGhlIEVzY2FwZSBrZXk6XG4gICAgICBjbG9zZU9uRXNjYXBlOiB0cnVlLFxuICAgICAgLy8gQ2xvc2UgdGhlIGdhbGxlcnkgd2hlbiBjbGlja2luZyBvbiBhbiBlbXB0eSBzbGlkZSBhcmVhOlxuICAgICAgY2xvc2VPblNsaWRlQ2xpY2s6IHRydWUsXG4gICAgICAvLyBDbG9zZSB0aGUgZ2FsbGVyeSBieSBzd2lwaW5nIHVwIG9yIGRvd246XG4gICAgICBjbG9zZU9uU3dpcGVVcE9yRG93bjogdHJ1ZSxcbiAgICAgIC8vIENsb3NlIHRoZSBnYWxsZXJ5IHdoZW4gdGhlIFVSTCBoYXNoIGNoYW5nZXM6XG4gICAgICBjbG9zZU9uSGFzaENoYW5nZTogdHJ1ZSxcbiAgICAgIC8vIEVtdWxhdGUgdG91Y2ggZXZlbnRzIG9uIG1vdXNlLXBvaW50ZXIgZGV2aWNlcyBzdWNoIGFzIGRlc2t0b3AgYnJvd3NlcnM6XG4gICAgICBlbXVsYXRlVG91Y2hFdmVudHM6IHRydWUsXG4gICAgICAvLyBTdG9wIHRvdWNoIGV2ZW50cyBmcm9tIGJ1YmJsaW5nIHVwIHRvIGFuY2VzdG9yIGVsZW1lbnRzIG9mIHRoZSBHYWxsZXJ5OlxuICAgICAgc3RvcFRvdWNoRXZlbnRzUHJvcGFnYXRpb246IGZhbHNlLFxuICAgICAgLy8gSGlkZSB0aGUgcGFnZSBzY3JvbGxiYXJzOlxuICAgICAgaGlkZVBhZ2VTY3JvbGxiYXJzOiB0cnVlLFxuICAgICAgLy8gU3RvcHMgYW55IHRvdWNoZXMgb24gdGhlIGNvbnRhaW5lciBmcm9tIHNjcm9sbGluZyB0aGUgcGFnZTpcbiAgICAgIGRpc2FibGVTY3JvbGw6IHRydWUsXG4gICAgICAvLyBDYXJvdXNlbCBtb2RlIChzaG9ydGN1dCBmb3IgY2Fyb3VzZWwgc3BlY2lmaWMgb3B0aW9ucyk6XG4gICAgICBjYXJvdXNlbDogZmFsc2UsXG4gICAgICAvLyBBbGxvdyBjb250aW51b3VzIG5hdmlnYXRpb24sIG1vdmluZyBmcm9tIGxhc3QgdG8gZmlyc3RcbiAgICAgIC8vIGFuZCBmcm9tIGZpcnN0IHRvIGxhc3Qgc2xpZGU6XG4gICAgICBjb250aW51b3VzOiB0cnVlLFxuICAgICAgLy8gUmVtb3ZlIGVsZW1lbnRzIG91dHNpZGUgb2YgdGhlIHByZWxvYWQgcmFuZ2UgZnJvbSB0aGUgRE9NOlxuICAgICAgdW5sb2FkRWxlbWVudHM6IHRydWUsXG4gICAgICAvLyBTdGFydCB3aXRoIHRoZSBhdXRvbWF0aWMgc2xpZGVzaG93OlxuICAgICAgc3RhcnRTbGlkZXNob3c6IGZhbHNlLFxuICAgICAgLy8gRGVsYXkgaW4gbWlsbGlzZWNvbmRzIGJldHdlZW4gc2xpZGVzIGZvciB0aGUgYXV0b21hdGljIHNsaWRlc2hvdzpcbiAgICAgIHNsaWRlc2hvd0ludGVydmFsOiA1MDAwLFxuICAgICAgLy8gVGhlIGRpcmVjdGlvbiB0aGUgc2xpZGVzIGFyZSBtb3Zpbmc6IGx0cj1MZWZ0VG9SaWdodCBvciBydGw9UmlnaHRUb0xlZnRcbiAgICAgIHNsaWRlc2hvd0RpcmVjdGlvbjogJ2x0cicsXG4gICAgICAvLyBUaGUgc3RhcnRpbmcgaW5kZXggYXMgaW50ZWdlci5cbiAgICAgIC8vIENhbiBhbHNvIGJlIGFuIG9iamVjdCBvZiB0aGUgZ2l2ZW4gbGlzdCxcbiAgICAgIC8vIG9yIGFuIGVxdWFsIG9iamVjdCB3aXRoIHRoZSBzYW1lIHVybCBwcm9wZXJ0eTpcbiAgICAgIGluZGV4OiAwLFxuICAgICAgLy8gVGhlIG51bWJlciBvZiBlbGVtZW50cyB0byBsb2FkIGFyb3VuZCB0aGUgY3VycmVudCBpbmRleDpcbiAgICAgIHByZWxvYWRSYW5nZTogMixcbiAgICAgIC8vIFRoZSB0cmFuc2l0aW9uIGR1cmF0aW9uIGJldHdlZW4gc2xpZGUgY2hhbmdlcyBpbiBtaWxsaXNlY29uZHM6XG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb246IDMwMCxcbiAgICAgIC8vIFRoZSB0cmFuc2l0aW9uIGR1cmF0aW9uIGZvciBhdXRvbWF0aWMgc2xpZGUgY2hhbmdlcywgc2V0IHRvIGFuIGludGVnZXJcbiAgICAgIC8vIGdyZWF0ZXIgMCB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCB0cmFuc2l0aW9uIGR1cmF0aW9uOlxuICAgICAgc2xpZGVzaG93VHJhbnNpdGlvbkR1cmF0aW9uOiA1MDAsXG4gICAgICAvLyBUaGUgZXZlbnQgb2JqZWN0IGZvciB3aGljaCB0aGUgZGVmYXVsdCBhY3Rpb24gd2lsbCBiZSBjYW5jZWxlZFxuICAgICAgLy8gb24gR2FsbGVyeSBpbml0aWFsaXphdGlvbiAoZS5nLiB0aGUgY2xpY2sgZXZlbnQgdG8gb3BlbiB0aGUgR2FsbGVyeSk6XG4gICAgICBldmVudDogdW5kZWZpbmVkLFxuICAgICAgLy8gQ2FsbGJhY2sgZnVuY3Rpb24gZXhlY3V0ZWQgd2hlbiB0aGUgR2FsbGVyeSBpcyBpbml0aWFsaXplZC5cbiAgICAgIC8vIElzIGNhbGxlZCB3aXRoIHRoZSBnYWxsZXJ5IGluc3RhbmNlIGFzIFwidGhpc1wiIG9iamVjdDpcbiAgICAgIG9ub3BlbjogdW5kZWZpbmVkLFxuICAgICAgLy8gQ2FsbGJhY2sgZnVuY3Rpb24gZXhlY3V0ZWQgd2hlbiB0aGUgR2FsbGVyeSBoYXMgYmVlbiBpbml0aWFsaXplZFxuICAgICAgLy8gYW5kIHRoZSBpbml0aWFsaXphdGlvbiB0cmFuc2l0aW9uIGhhcyBiZWVuIGNvbXBsZXRlZC5cbiAgICAgIC8vIElzIGNhbGxlZCB3aXRoIHRoZSBnYWxsZXJ5IGluc3RhbmNlIGFzIFwidGhpc1wiIG9iamVjdDpcbiAgICAgIG9ub3BlbmVkOiB1bmRlZmluZWQsXG4gICAgICAvLyBDYWxsYmFjayBmdW5jdGlvbiBleGVjdXRlZCBvbiBzbGlkZSBjaGFuZ2UuXG4gICAgICAvLyBJcyBjYWxsZWQgd2l0aCB0aGUgZ2FsbGVyeSBpbnN0YW5jZSBhcyBcInRoaXNcIiBvYmplY3QgYW5kIHRoZVxuICAgICAgLy8gY3VycmVudCBpbmRleCBhbmQgc2xpZGUgYXMgYXJndW1lbnRzOlxuICAgICAgb25zbGlkZTogdW5kZWZpbmVkLFxuICAgICAgLy8gQ2FsbGJhY2sgZnVuY3Rpb24gZXhlY3V0ZWQgYWZ0ZXIgdGhlIHNsaWRlIGNoYW5nZSB0cmFuc2l0aW9uLlxuICAgICAgLy8gSXMgY2FsbGVkIHdpdGggdGhlIGdhbGxlcnkgaW5zdGFuY2UgYXMgXCJ0aGlzXCIgb2JqZWN0IGFuZCB0aGVcbiAgICAgIC8vIGN1cnJlbnQgaW5kZXggYW5kIHNsaWRlIGFzIGFyZ3VtZW50czpcbiAgICAgIG9uc2xpZGVlbmQ6IHVuZGVmaW5lZCxcbiAgICAgIC8vIENhbGxiYWNrIGZ1bmN0aW9uIGV4ZWN1dGVkIG9uIHNsaWRlIGNvbnRlbnQgbG9hZC5cbiAgICAgIC8vIElzIGNhbGxlZCB3aXRoIHRoZSBnYWxsZXJ5IGluc3RhbmNlIGFzIFwidGhpc1wiIG9iamVjdCBhbmQgdGhlXG4gICAgICAvLyBzbGlkZSBpbmRleCBhbmQgc2xpZGUgZWxlbWVudCBhcyBhcmd1bWVudHM6XG4gICAgICBvbnNsaWRlY29tcGxldGU6IHVuZGVmaW5lZCxcbiAgICAgIC8vIENhbGxiYWNrIGZ1bmN0aW9uIGV4ZWN1dGVkIHdoZW4gdGhlIEdhbGxlcnkgaXMgYWJvdXQgdG8gYmUgY2xvc2VkLlxuICAgICAgLy8gSXMgY2FsbGVkIHdpdGggdGhlIGdhbGxlcnkgaW5zdGFuY2UgYXMgXCJ0aGlzXCIgb2JqZWN0OlxuICAgICAgb25jbG9zZTogdW5kZWZpbmVkLFxuICAgICAgLy8gQ2FsbGJhY2sgZnVuY3Rpb24gZXhlY3V0ZWQgd2hlbiB0aGUgR2FsbGVyeSBoYXMgYmVlbiBjbG9zZWRcbiAgICAgIC8vIGFuZCB0aGUgY2xvc2luZyB0cmFuc2l0aW9uIGhhcyBiZWVuIGNvbXBsZXRlZC5cbiAgICAgIC8vIElzIGNhbGxlZCB3aXRoIHRoZSBnYWxsZXJ5IGluc3RhbmNlIGFzIFwidGhpc1wiIG9iamVjdDpcbiAgICAgIG9uY2xvc2VkOiB1bmRlZmluZWRcbiAgICB9LFxuXG4gICAgY2Fyb3VzZWxPcHRpb25zOiB7XG4gICAgICBoaWRlUGFnZVNjcm9sbGJhcnM6IGZhbHNlLFxuICAgICAgdG9nZ2xlQ29udHJvbHNPbkVudGVyOiBmYWxzZSxcbiAgICAgIHRvZ2dsZVNsaWRlc2hvd09uU3BhY2U6IGZhbHNlLFxuICAgICAgZW5hYmxlS2V5Ym9hcmROYXZpZ2F0aW9uOiBmYWxzZSxcbiAgICAgIGNsb3NlT25Fc2NhcGU6IGZhbHNlLFxuICAgICAgY2xvc2VPblNsaWRlQ2xpY2s6IGZhbHNlLFxuICAgICAgY2xvc2VPblN3aXBlVXBPckRvd246IGZhbHNlLFxuICAgICAgY2xvc2VPbkhhc2hDaGFuZ2U6IGZhbHNlLFxuICAgICAgZGlzYWJsZVNjcm9sbDogZmFsc2UsXG4gICAgICBzdGFydFNsaWRlc2hvdzogdHJ1ZVxuICAgIH0sXG5cbiAgICBjb25zb2xlOlxuICAgICAgd2luZG93LmNvbnNvbGUgJiYgdHlwZW9mIHdpbmRvdy5jb25zb2xlLmxvZyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHdpbmRvdy5jb25zb2xlXG4gICAgICAgIDogeyBsb2c6IGZ1bmN0aW9uICgpIHt9IH0sXG5cbiAgICAvLyBEZXRlY3QgdG91Y2gsIHRyYW5zaXRpb24sIHRyYW5zZm9ybSBhbmQgYmFja2dyb3VuZC1zaXplIHN1cHBvcnQ6XG4gICAgc3VwcG9ydDogKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICB2YXIgc3VwcG9ydCA9IHtcbiAgICAgICAgc291cmNlOiAhIXdpbmRvdy5IVE1MU291cmNlRWxlbWVudCxcbiAgICAgICAgcGljdHVyZTogISF3aW5kb3cuSFRNTFBpY3R1cmVFbGVtZW50LFxuICAgICAgICBzdmdhc2ltZzogZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uaGFzRmVhdHVyZShcbiAgICAgICAgICAnaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNJbWFnZScsXG4gICAgICAgICAgJzEuMSdcbiAgICAgICAgKSxcbiAgICAgICAgc21pbDpcbiAgICAgICAgICAhIWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyAmJlxuICAgICAgICAgIC9TVkdBbmltYXRlLy50ZXN0KFxuICAgICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgICAgLmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnYW5pbWF0ZScpXG4gICAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgKSxcbiAgICAgICAgdG91Y2g6XG4gICAgICAgICAgd2luZG93Lm9udG91Y2hzdGFydCAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgKHdpbmRvdy5Eb2N1bWVudFRvdWNoICYmIGRvY3VtZW50IGluc3RhbmNlb2YgRG9jdW1lbnRUb3VjaClcbiAgICAgIH1cbiAgICAgIHZhciB0cmFuc2l0aW9ucyA9IHtcbiAgICAgICAgd2Via2l0VHJhbnNpdGlvbjoge1xuICAgICAgICAgIGVuZDogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuICAgICAgICAgIHByZWZpeDogJy13ZWJraXQtJ1xuICAgICAgICB9LFxuICAgICAgICBNb3pUcmFuc2l0aW9uOiB7XG4gICAgICAgICAgZW5kOiAndHJhbnNpdGlvbmVuZCcsXG4gICAgICAgICAgcHJlZml4OiAnLW1vei0nXG4gICAgICAgIH0sXG4gICAgICAgIE9UcmFuc2l0aW9uOiB7XG4gICAgICAgICAgZW5kOiAnb3RyYW5zaXRpb25lbmQnLFxuICAgICAgICAgIHByZWZpeDogJy1vLSdcbiAgICAgICAgfSxcbiAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgIGVuZDogJ3RyYW5zaXRpb25lbmQnLFxuICAgICAgICAgIHByZWZpeDogJydcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIHByb3BcbiAgICAgIGZvciAocHJvcCBpbiB0cmFuc2l0aW9ucykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRyYW5zaXRpb25zLCBwcm9wKSAmJlxuICAgICAgICAgIGVsZW1lbnQuc3R5bGVbcHJvcF0gIT09IHVuZGVmaW5lZFxuICAgICAgICApIHtcbiAgICAgICAgICBzdXBwb3J0LnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uc1twcm9wXVxuICAgICAgICAgIHN1cHBvcnQudHJhbnNpdGlvbi5uYW1lID0gcHJvcFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogVGVzdHMgYnJvd3NlciBzdXBwb3J0XG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIGVsZW1lbnRUZXN0cygpIHtcbiAgICAgICAgdmFyIHRyYW5zaXRpb24gPSBzdXBwb3J0LnRyYW5zaXRpb25cbiAgICAgICAgdmFyIHByb3BcbiAgICAgICAgdmFyIHRyYW5zbGF0ZVpcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KVxuICAgICAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgICAgIHByb3AgPSB0cmFuc2l0aW9uLm5hbWUuc2xpY2UoMCwgLTkpICsgJ3JhbnNmb3JtJ1xuICAgICAgICAgIGlmIChlbGVtZW50LnN0eWxlW3Byb3BdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGVbcHJvcF0gPSAndHJhbnNsYXRlWigwKSdcbiAgICAgICAgICAgIHRyYW5zbGF0ZVogPSB3aW5kb3dcbiAgICAgICAgICAgICAgLmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClcbiAgICAgICAgICAgICAgLmdldFByb3BlcnR5VmFsdWUodHJhbnNpdGlvbi5wcmVmaXggKyAndHJhbnNmb3JtJylcbiAgICAgICAgICAgIHN1cHBvcnQudHJhbnNmb3JtID0ge1xuICAgICAgICAgICAgICBwcmVmaXg6IHRyYW5zaXRpb24ucHJlZml4LFxuICAgICAgICAgICAgICBuYW1lOiBwcm9wLFxuICAgICAgICAgICAgICB0cmFuc2xhdGU6IHRydWUsXG4gICAgICAgICAgICAgIHRyYW5zbGF0ZVo6ICEhdHJhbnNsYXRlWiAmJiB0cmFuc2xhdGVaICE9PSAnbm9uZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbGVtZW50KVxuICAgICAgfVxuICAgICAgaWYgKGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgZWxlbWVudFRlc3RzKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdET01Db250ZW50TG9hZGVkJywgZWxlbWVudFRlc3RzKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHN1cHBvcnRcbiAgICAgIC8vIFRlc3QgZWxlbWVudCwgaGFzIHRvIGJlIHN0YW5kYXJkIEhUTUwgYW5kIG11c3Qgbm90IGJlIGhpZGRlblxuICAgICAgLy8gZm9yIHRoZSBDU1MzIHRlc3RzIHVzaW5nIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlIHRvIGJlIGFwcGxpY2FibGU6XG4gICAgfSkoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpLFxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lOlxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSxcblxuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lOlxuICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICB3aW5kb3cud2Via2l0Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICB3aW5kb3cud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgIHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZSxcblxuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuaW5pdFN0YXJ0SW5kZXgoKVxuICAgICAgaWYgKHRoaXMuaW5pdFdpZGdldCgpID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRoaXMuaW5pdEV2ZW50TGlzdGVuZXJzKClcbiAgICAgIC8vIExvYWQgdGhlIHNsaWRlIGF0IHRoZSBnaXZlbiBpbmRleDpcbiAgICAgIHRoaXMub25zbGlkZSh0aGlzLmluZGV4KVxuICAgICAgLy8gTWFudWFsbHkgdHJpZ2dlciB0aGUgc2xpZGVlbmQgZXZlbnQgZm9yIHRoZSBpbml0aWFsIHNsaWRlOlxuICAgICAgdGhpcy5vbnRyYW5zaXRpb25lbmQoKVxuICAgICAgLy8gU3RhcnQgdGhlIGF1dG9tYXRpYyBzbGlkZXNob3cgaWYgYXBwbGljYWJsZTpcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3RhcnRTbGlkZXNob3cpIHtcbiAgICAgICAgdGhpcy5wbGF5KClcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc2xpZGU6IGZ1bmN0aW9uICh0bywgZHVyYXRpb24pIHtcbiAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KVxuICAgICAgdmFyIGluZGV4ID0gdGhpcy5pbmRleFxuICAgICAgdmFyIGRpcmVjdGlvblxuICAgICAgdmFyIG5hdHVyYWxEaXJlY3Rpb25cbiAgICAgIHZhciBkaWZmXG4gICAgICBpZiAoaW5kZXggPT09IHRvIHx8IHRoaXMubnVtID09PSAxKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKCFkdXJhdGlvbikge1xuICAgICAgICBkdXJhdGlvbiA9IHRoaXMub3B0aW9ucy50cmFuc2l0aW9uRHVyYXRpb25cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnN1cHBvcnQudHJhbnNmb3JtKSB7XG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLmNvbnRpbnVvdXMpIHtcbiAgICAgICAgICB0byA9IHRoaXMuY2lyY2xlKHRvKVxuICAgICAgICB9XG4gICAgICAgIC8vIDE6IGJhY2t3YXJkLCAtMTogZm9yd2FyZDpcbiAgICAgICAgZGlyZWN0aW9uID0gTWF0aC5hYnMoaW5kZXggLSB0bykgLyAoaW5kZXggLSB0bylcbiAgICAgICAgLy8gR2V0IHRoZSBhY3R1YWwgcG9zaXRpb24gb2YgdGhlIHNsaWRlOlxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmNvbnRpbnVvdXMpIHtcbiAgICAgICAgICBuYXR1cmFsRGlyZWN0aW9uID0gZGlyZWN0aW9uXG4gICAgICAgICAgZGlyZWN0aW9uID0gLXRoaXMucG9zaXRpb25zW3RoaXMuY2lyY2xlKHRvKV0gLyB0aGlzLnNsaWRlV2lkdGhcbiAgICAgICAgICAvLyBJZiBnb2luZyBmb3J3YXJkIGJ1dCB0byA8IGluZGV4LCB1c2UgdG8gPSBzbGlkZXMubGVuZ3RoICsgdG9cbiAgICAgICAgICAvLyBJZiBnb2luZyBiYWNrd2FyZCBidXQgdG8gPiBpbmRleCwgdXNlIHRvID0gLXNsaWRlcy5sZW5ndGggKyB0b1xuICAgICAgICAgIGlmIChkaXJlY3Rpb24gIT09IG5hdHVyYWxEaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIHRvID0gLWRpcmVjdGlvbiAqIHRoaXMubnVtICsgdG9cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGlmZiA9IE1hdGguYWJzKGluZGV4IC0gdG8pIC0gMVxuICAgICAgICAvLyBNb3ZlIGFsbCB0aGUgc2xpZGVzIGJldHdlZW4gaW5kZXggYW5kIHRvIGluIHRoZSByaWdodCBkaXJlY3Rpb246XG4gICAgICAgIHdoaWxlIChkaWZmKSB7XG4gICAgICAgICAgZGlmZiAtPSAxXG4gICAgICAgICAgdGhpcy5tb3ZlKFxuICAgICAgICAgICAgdGhpcy5jaXJjbGUoKHRvID4gaW5kZXggPyB0byA6IGluZGV4KSAtIGRpZmYgLSAxKSxcbiAgICAgICAgICAgIHRoaXMuc2xpZGVXaWR0aCAqIGRpcmVjdGlvbixcbiAgICAgICAgICAgIDBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgdG8gPSB0aGlzLmNpcmNsZSh0bylcbiAgICAgICAgdGhpcy5tb3ZlKGluZGV4LCB0aGlzLnNsaWRlV2lkdGggKiBkaXJlY3Rpb24sIGR1cmF0aW9uKVxuICAgICAgICB0aGlzLm1vdmUodG8sIDAsIGR1cmF0aW9uKVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmNvbnRpbnVvdXMpIHtcbiAgICAgICAgICB0aGlzLm1vdmUoXG4gICAgICAgICAgICB0aGlzLmNpcmNsZSh0byAtIGRpcmVjdGlvbiksXG4gICAgICAgICAgICAtKHRoaXMuc2xpZGVXaWR0aCAqIGRpcmVjdGlvbiksXG4gICAgICAgICAgICAwXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0byA9IHRoaXMuY2lyY2xlKHRvKVxuICAgICAgICB0aGlzLmFuaW1hdGUoaW5kZXggKiAtdGhpcy5zbGlkZVdpZHRoLCB0byAqIC10aGlzLnNsaWRlV2lkdGgsIGR1cmF0aW9uKVxuICAgICAgfVxuICAgICAgdGhpcy5vbnNsaWRlKHRvKVxuICAgIH0sXG5cbiAgICBnZXRJbmRleDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5kZXhcbiAgICB9LFxuXG4gICAgZ2V0TnVtYmVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5udW1cbiAgICB9LFxuXG4gICAgcHJldjogZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5jb250aW51b3VzIHx8IHRoaXMuaW5kZXgpIHtcbiAgICAgICAgdGhpcy5zbGlkZSh0aGlzLmluZGV4IC0gMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5jb250aW51b3VzIHx8IHRoaXMuaW5kZXggPCB0aGlzLm51bSAtIDEpIHtcbiAgICAgICAgdGhpcy5zbGlkZSh0aGlzLmluZGV4ICsgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcGxheTogZnVuY3Rpb24gKHRpbWUpIHtcbiAgICAgIHZhciB0aGF0ID0gdGhpc1xuICAgICAgdmFyIG5leHRJbmRleCA9XG4gICAgICAgIHRoaXMuaW5kZXggKyAodGhpcy5vcHRpb25zLnNsaWRlc2hvd0RpcmVjdGlvbiA9PT0gJ3J0bCcgPyAtMSA6IDEpXG4gICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dClcbiAgICAgIHRoaXMuaW50ZXJ2YWwgPSB0aW1lIHx8IHRoaXMub3B0aW9ucy5zbGlkZXNob3dJbnRlcnZhbFxuICAgICAgaWYgKHRoaXMuZWxlbWVudHNbdGhpcy5pbmRleF0gPiAxKSB7XG4gICAgICAgIHRoaXMudGltZW91dCA9IHRoaXMuc2V0VGltZW91dChcbiAgICAgICAgICAoIXRoaXMucmVxdWVzdEFuaW1hdGlvbkZyYW1lICYmIHRoaXMuc2xpZGUpIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAodG8sIGR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgIHRoYXQuYW5pbWF0aW9uRnJhbWVJZCA9IHRoYXQucmVxdWVzdEFuaW1hdGlvbkZyYW1lLmNhbGwoXG4gICAgICAgICAgICAgICAgd2luZG93LFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHRoYXQuc2xpZGUodG8sIGR1cmF0aW9uKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBbbmV4dEluZGV4LCB0aGlzLm9wdGlvbnMuc2xpZGVzaG93VHJhbnNpdGlvbkR1cmF0aW9uXSxcbiAgICAgICAgICB0aGlzLmludGVydmFsXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHRoaXMuY29udGFpbmVyLmFkZENsYXNzKHRoaXMub3B0aW9ucy5wbGF5aW5nQ2xhc3MpXG4gICAgICB0aGlzLnNsaWRlc0NvbnRhaW5lclswXS5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGl2ZScsICdvZmYnKVxuICAgICAgaWYgKHRoaXMucGxheVBhdXNlRWxlbWVudC5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5wbGF5UGF1c2VFbGVtZW50WzBdLnNldEF0dHJpYnV0ZSgnYXJpYS1wcmVzc2VkJywgJ3RydWUnKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBwYXVzZTogZnVuY3Rpb24gKCkge1xuICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpXG4gICAgICB0aGlzLmludGVydmFsID0gbnVsbFxuICAgICAgaWYgKHRoaXMuY2FuY2VsQW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgICAgdGhpcy5jYW5jZWxBbmltYXRpb25GcmFtZS5jYWxsKHdpbmRvdywgdGhpcy5hbmltYXRpb25GcmFtZUlkKVxuICAgICAgICB0aGlzLmFuaW1hdGlvbkZyYW1lSWQgPSBudWxsXG4gICAgICB9XG4gICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMucGxheWluZ0NsYXNzKVxuICAgICAgdGhpcy5zbGlkZXNDb250YWluZXJbMF0uc2V0QXR0cmlidXRlKCdhcmlhLWxpdmUnLCAncG9saXRlJylcbiAgICAgIGlmICh0aGlzLnBsYXlQYXVzZUVsZW1lbnQubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMucGxheVBhdXNlRWxlbWVudFswXS5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsICdmYWxzZScpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGFkZDogZnVuY3Rpb24gKGxpc3QpIHtcbiAgICAgIHZhciBpXG4gICAgICBpZiAoIWxpc3QuY29uY2F0KSB7XG4gICAgICAgIC8vIE1ha2UgYSByZWFsIGFycmF5IG91dCBvZiB0aGUgbGlzdCB0byBhZGQ6XG4gICAgICAgIGxpc3QgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChsaXN0KVxuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmxpc3QuY29uY2F0KSB7XG4gICAgICAgIC8vIE1ha2UgYSByZWFsIGFycmF5IG91dCBvZiB0aGUgR2FsbGVyeSBsaXN0OlxuICAgICAgICB0aGlzLmxpc3QgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLmxpc3QpXG4gICAgICB9XG4gICAgICB0aGlzLmxpc3QgPSB0aGlzLmxpc3QuY29uY2F0KGxpc3QpXG4gICAgICB0aGlzLm51bSA9IHRoaXMubGlzdC5sZW5ndGhcbiAgICAgIGlmICh0aGlzLm51bSA+IDIgJiYgdGhpcy5vcHRpb25zLmNvbnRpbnVvdXMgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmNvbnRpbnVvdXMgPSB0cnVlXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5sZWZ0RWRnZUNsYXNzKVxuICAgICAgfVxuICAgICAgdGhpcy5jb250YWluZXJcbiAgICAgICAgLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5yaWdodEVkZ2VDbGFzcylcbiAgICAgICAgLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5zaW5nbGVDbGFzcylcbiAgICAgIGZvciAoaSA9IHRoaXMubnVtIC0gbGlzdC5sZW5ndGg7IGkgPCB0aGlzLm51bTsgaSArPSAxKSB7XG4gICAgICAgIHRoaXMuYWRkU2xpZGUoaSlcbiAgICAgICAgdGhpcy5wb3NpdGlvblNsaWRlKGkpXG4gICAgICB9XG4gICAgICB0aGlzLnBvc2l0aW9ucy5sZW5ndGggPSB0aGlzLm51bVxuICAgICAgdGhpcy5pbml0U2xpZGVzKHRydWUpXG4gICAgfSxcblxuICAgIHJlc2V0U2xpZGVzOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnNsaWRlc0NvbnRhaW5lci5lbXB0eSgpXG4gICAgICB0aGlzLnVubG9hZEFsbFNsaWRlcygpXG4gICAgICB0aGlzLnNsaWRlcyA9IFtdXG4gICAgfSxcblxuICAgIGhhbmRsZUNsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9uc1xuICAgICAgdGhpcy5kZXN0cm95RXZlbnRMaXN0ZW5lcnMoKVxuICAgICAgLy8gQ2FuY2VsIHRoZSBzbGlkZXNob3c6XG4gICAgICB0aGlzLnBhdXNlKClcbiAgICAgIHRoaXMuY29udGFpbmVyWzBdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgIHRoaXMuY29udGFpbmVyXG4gICAgICAgIC5yZW1vdmVDbGFzcyhvcHRpb25zLmRpc3BsYXlDbGFzcylcbiAgICAgICAgLnJlbW92ZUNsYXNzKG9wdGlvbnMuc2luZ2xlQ2xhc3MpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhvcHRpb25zLmxlZnRFZGdlQ2xhc3MpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhvcHRpb25zLnJpZ2h0RWRnZUNsYXNzKVxuICAgICAgaWYgKG9wdGlvbnMuaGlkZVBhZ2VTY3JvbGxiYXJzKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSB0aGlzLmJvZHlPdmVyZmxvd1N0eWxlXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmNsZWFyU2xpZGVzKSB7XG4gICAgICAgIHRoaXMucmVzZXRTbGlkZXMoKVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5vbmNsb3NlZCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMub25jbG9zZWQuY2FsbCh0aGlzKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBjbG9zZTogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzXG4gICAgICAvKipcbiAgICAgICAqIENsb3NlIGhhbmRsZXJcbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge2V2ZW50fSBldmVudCBDbG9zZSBldmVudFxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBjbG9zZUhhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGhhdC5jb250YWluZXJbMF0pIHtcbiAgICAgICAgICB0aGF0LmNvbnRhaW5lci5vZmYodGhhdC5zdXBwb3J0LnRyYW5zaXRpb24uZW5kLCBjbG9zZUhhbmRsZXIpXG4gICAgICAgICAgdGhhdC5oYW5kbGVDbG9zZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMub25jbG9zZSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMub25jbG9zZS5jYWxsKHRoaXMpXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zdXBwb3J0LnRyYW5zaXRpb24gJiYgdGhpcy5vcHRpb25zLmRpc3BsYXlUcmFuc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLm9uKHRoaXMuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCwgY2xvc2VIYW5kbGVyKVxuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuZGlzcGxheUNsYXNzKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5oYW5kbGVDbG9zZSgpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGNpcmNsZTogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAvLyBBbHdheXMgcmV0dXJuIGEgbnVtYmVyIGluc2lkZSBvZiB0aGUgc2xpZGVzIGluZGV4IHJhbmdlOlxuICAgICAgcmV0dXJuICh0aGlzLm51bSArIChpbmRleCAlIHRoaXMubnVtKSkgJSB0aGlzLm51bVxuICAgIH0sXG5cbiAgICBtb3ZlOiBmdW5jdGlvbiAoaW5kZXgsIGRpc3QsIGR1cmF0aW9uKSB7XG4gICAgICB0aGlzLnRyYW5zbGF0ZVgoaW5kZXgsIGRpc3QsIGR1cmF0aW9uKVxuICAgICAgdGhpcy5wb3NpdGlvbnNbaW5kZXhdID0gZGlzdFxuICAgIH0sXG5cbiAgICB0cmFuc2xhdGU6IGZ1bmN0aW9uIChpbmRleCwgeCwgeSwgZHVyYXRpb24pIHtcbiAgICAgIGlmICghdGhpcy5zbGlkZXNbaW5kZXhdKSByZXR1cm5cbiAgICAgIHZhciBzdHlsZSA9IHRoaXMuc2xpZGVzW2luZGV4XS5zdHlsZVxuICAgICAgdmFyIHRyYW5zaXRpb24gPSB0aGlzLnN1cHBvcnQudHJhbnNpdGlvblxuICAgICAgdmFyIHRyYW5zZm9ybSA9IHRoaXMuc3VwcG9ydC50cmFuc2Zvcm1cbiAgICAgIHN0eWxlW3RyYW5zaXRpb24ubmFtZSArICdEdXJhdGlvbiddID0gZHVyYXRpb24gKyAnbXMnXG4gICAgICBzdHlsZVt0cmFuc2Zvcm0ubmFtZV0gPVxuICAgICAgICAndHJhbnNsYXRlKCcgK1xuICAgICAgICB4ICtcbiAgICAgICAgJ3B4LCAnICtcbiAgICAgICAgeSArXG4gICAgICAgICdweCknICtcbiAgICAgICAgKHRyYW5zZm9ybS50cmFuc2xhdGVaID8gJyB0cmFuc2xhdGVaKDApJyA6ICcnKVxuICAgIH0sXG5cbiAgICB0cmFuc2xhdGVYOiBmdW5jdGlvbiAoaW5kZXgsIHgsIGR1cmF0aW9uKSB7XG4gICAgICB0aGlzLnRyYW5zbGF0ZShpbmRleCwgeCwgMCwgZHVyYXRpb24pXG4gICAgfSxcblxuICAgIHRyYW5zbGF0ZVk6IGZ1bmN0aW9uIChpbmRleCwgeSwgZHVyYXRpb24pIHtcbiAgICAgIHRoaXMudHJhbnNsYXRlKGluZGV4LCAwLCB5LCBkdXJhdGlvbilcbiAgICB9LFxuXG4gICAgYW5pbWF0ZTogZnVuY3Rpb24gKGZyb20sIHRvLCBkdXJhdGlvbikge1xuICAgICAgaWYgKCFkdXJhdGlvbikge1xuICAgICAgICB0aGlzLnNsaWRlc0NvbnRhaW5lclswXS5zdHlsZS5sZWZ0ID0gdG8gKyAncHgnXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdmFyIHRoYXQgPSB0aGlzXG4gICAgICB2YXIgc3RhcnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgICAgdmFyIHRpbWVyID0gd2luZG93LnNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRpbWVFbGFwID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydFxuICAgICAgICBpZiAodGltZUVsYXAgPiBkdXJhdGlvbikge1xuICAgICAgICAgIHRoYXQuc2xpZGVzQ29udGFpbmVyWzBdLnN0eWxlLmxlZnQgPSB0byArICdweCdcbiAgICAgICAgICB0aGF0Lm9udHJhbnNpdGlvbmVuZCgpXG4gICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGltZXIpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdGhhdC5zbGlkZXNDb250YWluZXJbMF0uc3R5bGUubGVmdCA9XG4gICAgICAgICAgKHRvIC0gZnJvbSkgKiAoTWF0aC5mbG9vcigodGltZUVsYXAgLyBkdXJhdGlvbikgKiAxMDApIC8gMTAwKSArXG4gICAgICAgICAgZnJvbSArXG4gICAgICAgICAgJ3B4J1xuICAgICAgfSwgNClcbiAgICB9LFxuXG4gICAgcHJldmVudERlZmF1bHQ6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50LnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcFByb3BhZ2F0aW9uOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGV2ZW50LmNhbmNlbEJ1YmJsZSA9IHRydWVcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgb25yZXNpemU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuaW5pdFNsaWRlcyh0cnVlKVxuICAgIH0sXG5cbiAgICBvbmhhc2hjaGFuZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuY2xvc2VPbkhhc2hDaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpXG4gICAgICB9XG4gICAgfSxcblxuICAgIG9ubW91c2Vkb3duOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIC8vIFRyaWdnZXIgb24gY2xpY2tzIG9mIHRoZSBsZWZ0IG1vdXNlIGJ1dHRvbiBvbmx5XG4gICAgICAvLyBhbmQgZXhjbHVkZSB2aWRlbyAmIGF1ZGlvIGVsZW1lbnRzOlxuICAgICAgaWYgKFxuICAgICAgICBldmVudC53aGljaCAmJlxuICAgICAgICBldmVudC53aGljaCA9PT0gMSAmJlxuICAgICAgICBldmVudC50YXJnZXQubm9kZU5hbWUgIT09ICdWSURFTycgJiZcbiAgICAgICAgZXZlbnQudGFyZ2V0Lm5vZGVOYW1lICE9PSAnQVVESU8nXG4gICAgICApIHtcbiAgICAgICAgLy8gUHJldmVudGluZyB0aGUgZGVmYXVsdCBtb3VzZWRvd24gYWN0aW9uIGlzIHJlcXVpcmVkXG4gICAgICAgIC8vIHRvIG1ha2UgdG91Y2ggZW11bGF0aW9uIHdvcmsgd2l0aCBGaXJlZm94OlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIDsoZXZlbnQub3JpZ2luYWxFdmVudCB8fCBldmVudCkudG91Y2hlcyA9IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYWdlWDogZXZlbnQucGFnZVgsXG4gICAgICAgICAgICBwYWdlWTogZXZlbnQucGFnZVlcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgICAgdGhpcy5vbnRvdWNoc3RhcnQoZXZlbnQpXG4gICAgICB9XG4gICAgfSxcblxuICAgIG9ubW91c2Vtb3ZlOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLnRvdWNoU3RhcnQpIHtcbiAgICAgICAgOyhldmVudC5vcmlnaW5hbEV2ZW50IHx8IGV2ZW50KS50b3VjaGVzID0gW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhZ2VYOiBldmVudC5wYWdlWCxcbiAgICAgICAgICAgIHBhZ2VZOiBldmVudC5wYWdlWVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgICB0aGlzLm9udG91Y2htb3ZlKGV2ZW50KVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBvbm1vdXNldXA6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKHRoaXMudG91Y2hTdGFydCkge1xuICAgICAgICB0aGlzLm9udG91Y2hlbmQoZXZlbnQpXG4gICAgICAgIGRlbGV0ZSB0aGlzLnRvdWNoU3RhcnRcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgb25tb3VzZW91dDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAodGhpcy50b3VjaFN0YXJ0KSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXRcbiAgICAgICAgdmFyIHJlbGF0ZWQgPSBldmVudC5yZWxhdGVkVGFyZ2V0XG4gICAgICAgIGlmICghcmVsYXRlZCB8fCAocmVsYXRlZCAhPT0gdGFyZ2V0ICYmICEkLmNvbnRhaW5zKHRhcmdldCwgcmVsYXRlZCkpKSB7XG4gICAgICAgICAgdGhpcy5vbm1vdXNldXAoZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgb250b3VjaHN0YXJ0OiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3RvcFRvdWNoRXZlbnRzUHJvcGFnYXRpb24pIHtcbiAgICAgICAgdGhpcy5zdG9wUHJvcGFnYXRpb24oZXZlbnQpXG4gICAgICB9XG4gICAgICAvLyBqUXVlcnkgZG9lc24ndCBjb3B5IHRvdWNoIGV2ZW50IHByb3BlcnRpZXMgYnkgZGVmYXVsdCxcbiAgICAgIC8vIHNvIHdlIGhhdmUgdG8gYWNjZXNzIHRoZSBvcmlnaW5hbEV2ZW50IG9iamVjdDpcbiAgICAgIHZhciB0b3VjaCA9IChldmVudC5vcmlnaW5hbEV2ZW50IHx8IGV2ZW50KS50b3VjaGVzWzBdXG4gICAgICB0aGlzLnRvdWNoU3RhcnQgPSB7XG4gICAgICAgIC8vIFJlbWVtYmVyIHRoZSBpbml0aWFsIHRvdWNoIGNvb3JkaW5hdGVzOlxuICAgICAgICB4OiB0b3VjaC5wYWdlWCxcbiAgICAgICAgeTogdG91Y2gucGFnZVksXG4gICAgICAgIC8vIFN0b3JlIHRoZSB0aW1lIHRvIGRldGVybWluZSB0b3VjaCBkdXJhdGlvbjpcbiAgICAgICAgdGltZTogRGF0ZS5ub3coKVxuICAgICAgfVxuICAgICAgLy8gSGVscGVyIHZhcmlhYmxlIHRvIGRldGVjdCBzY3JvbGwgbW92ZW1lbnQ6XG4gICAgICB0aGlzLmlzU2Nyb2xsaW5nID0gdW5kZWZpbmVkXG4gICAgICAvLyBSZXNldCBkZWx0YSB2YWx1ZXM6XG4gICAgICB0aGlzLnRvdWNoRGVsdGEgPSB7fVxuICAgIH0sXG5cbiAgICBvbnRvdWNobW92ZTogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnN0b3BUb3VjaEV2ZW50c1Byb3BhZ2F0aW9uKSB7XG4gICAgICAgIHRoaXMuc3RvcFByb3BhZ2F0aW9uKGV2ZW50KVxuICAgICAgfVxuICAgICAgLy8galF1ZXJ5IGRvZXNuJ3QgY29weSB0b3VjaCBldmVudCBwcm9wZXJ0aWVzIGJ5IGRlZmF1bHQsXG4gICAgICAvLyBzbyB3ZSBoYXZlIHRvIGFjY2VzcyB0aGUgb3JpZ2luYWxFdmVudCBvYmplY3Q6XG4gICAgICB2YXIgdG91Y2hlcyA9IChldmVudC5vcmlnaW5hbEV2ZW50IHx8IGV2ZW50KS50b3VjaGVzXG4gICAgICB2YXIgdG91Y2ggPSB0b3VjaGVzWzBdXG4gICAgICB2YXIgc2NhbGUgPSAoZXZlbnQub3JpZ2luYWxFdmVudCB8fCBldmVudCkuc2NhbGVcbiAgICAgIHZhciBpbmRleCA9IHRoaXMuaW5kZXhcbiAgICAgIHZhciB0b3VjaERlbHRhWFxuICAgICAgdmFyIGluZGljZXNcbiAgICAgIC8vIEVuc3VyZSB0aGlzIGlzIGEgb25lIHRvdWNoIHN3aXBlIGFuZCBub3QsIGUuZy4gYSBwaW5jaDpcbiAgICAgIGlmICh0b3VjaGVzLmxlbmd0aCA+IDEgfHwgKHNjYWxlICYmIHNjYWxlICE9PSAxKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZGlzYWJsZVNjcm9sbCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9XG4gICAgICAvLyBNZWFzdXJlIGNoYW5nZSBpbiB4IGFuZCB5IGNvb3JkaW5hdGVzOlxuICAgICAgdGhpcy50b3VjaERlbHRhID0ge1xuICAgICAgICB4OiB0b3VjaC5wYWdlWCAtIHRoaXMudG91Y2hTdGFydC54LFxuICAgICAgICB5OiB0b3VjaC5wYWdlWSAtIHRoaXMudG91Y2hTdGFydC55XG4gICAgICB9XG4gICAgICB0b3VjaERlbHRhWCA9IHRoaXMudG91Y2hEZWx0YS54XG4gICAgICAvLyBEZXRlY3QgaWYgdGhpcyBpcyBhIHZlcnRpY2FsIHNjcm9sbCBtb3ZlbWVudCAocnVuIG9ubHkgb25jZSBwZXIgdG91Y2gpOlxuICAgICAgaWYgKHRoaXMuaXNTY3JvbGxpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmlzU2Nyb2xsaW5nID1cbiAgICAgICAgICB0aGlzLmlzU2Nyb2xsaW5nIHx8XG4gICAgICAgICAgTWF0aC5hYnModG91Y2hEZWx0YVgpIDwgTWF0aC5hYnModGhpcy50b3VjaERlbHRhLnkpXG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuaXNTY3JvbGxpbmcpIHtcbiAgICAgICAgLy8gQWx3YXlzIHByZXZlbnQgaG9yaXpvbnRhbCBzY3JvbGw6XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgLy8gU3RvcCB0aGUgc2xpZGVzaG93OlxuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dClcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jb250aW51b3VzKSB7XG4gICAgICAgICAgaW5kaWNlcyA9IFt0aGlzLmNpcmNsZShpbmRleCArIDEpLCBpbmRleCwgdGhpcy5jaXJjbGUoaW5kZXggLSAxKV1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBJbmNyZWFzZSByZXNpc3RhbmNlIGlmIGZpcnN0IHNsaWRlIGFuZCBzbGlkaW5nIGxlZnRcbiAgICAgICAgICAvLyBvciBsYXN0IHNsaWRlIGFuZCBzbGlkaW5nIHJpZ2h0OlxuICAgICAgICAgIHRoaXMudG91Y2hEZWx0YS54ID0gdG91Y2hEZWx0YVggPVxuICAgICAgICAgICAgdG91Y2hEZWx0YVggL1xuICAgICAgICAgICAgKCghaW5kZXggJiYgdG91Y2hEZWx0YVggPiAwKSB8fFxuICAgICAgICAgICAgKGluZGV4ID09PSB0aGlzLm51bSAtIDEgJiYgdG91Y2hEZWx0YVggPCAwKVxuICAgICAgICAgICAgICA/IE1hdGguYWJzKHRvdWNoRGVsdGFYKSAvIHRoaXMuc2xpZGVXaWR0aCArIDFcbiAgICAgICAgICAgICAgOiAxKVxuICAgICAgICAgIGluZGljZXMgPSBbaW5kZXhdXG4gICAgICAgICAgaWYgKGluZGV4KSB7XG4gICAgICAgICAgICBpbmRpY2VzLnB1c2goaW5kZXggLSAxKVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaW5kZXggPCB0aGlzLm51bSAtIDEpIHtcbiAgICAgICAgICAgIGluZGljZXMudW5zaGlmdChpbmRleCArIDEpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChpbmRpY2VzLmxlbmd0aCkge1xuICAgICAgICAgIGluZGV4ID0gaW5kaWNlcy5wb3AoKVxuICAgICAgICAgIHRoaXMudHJhbnNsYXRlWChpbmRleCwgdG91Y2hEZWx0YVggKyB0aGlzLnBvc2l0aW9uc1tpbmRleF0sIDApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMub3B0aW9ucy5jYXJvdXNlbCkge1xuICAgICAgICB0aGlzLnRyYW5zbGF0ZVkoaW5kZXgsIHRoaXMudG91Y2hEZWx0YS55ICsgdGhpcy5wb3NpdGlvbnNbaW5kZXhdLCAwKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBvbnRvdWNoZW5kOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3RvcFRvdWNoRXZlbnRzUHJvcGFnYXRpb24pIHtcbiAgICAgICAgdGhpcy5zdG9wUHJvcGFnYXRpb24oZXZlbnQpXG4gICAgICB9XG4gICAgICB2YXIgaW5kZXggPSB0aGlzLmluZGV4XG4gICAgICB2YXIgYWJzVG91Y2hEZWx0YVggPSBNYXRoLmFicyh0aGlzLnRvdWNoRGVsdGEueClcbiAgICAgIHZhciBzbGlkZVdpZHRoID0gdGhpcy5zbGlkZVdpZHRoXG4gICAgICB2YXIgZHVyYXRpb24gPSBNYXRoLmNlaWwoXG4gICAgICAgICh0aGlzLm9wdGlvbnMudHJhbnNpdGlvbkR1cmF0aW9uICogKDEgLSBhYnNUb3VjaERlbHRhWCAvIHNsaWRlV2lkdGgpKSAvXG4gICAgICAgICAgMlxuICAgICAgKVxuICAgICAgLy8gRGV0ZXJtaW5lIGlmIHNsaWRlIGF0dGVtcHQgdHJpZ2dlcnMgbmV4dC9wcmV2IHNsaWRlOlxuICAgICAgdmFyIGlzVmFsaWRTbGlkZSA9IGFic1RvdWNoRGVsdGFYID4gMjBcbiAgICAgIC8vIERldGVybWluZSBpZiBzbGlkZSBhdHRlbXB0IGlzIHBhc3Qgc3RhcnQgb3IgZW5kOlxuICAgICAgdmFyIGlzUGFzdEJvdW5kcyA9XG4gICAgICAgICghaW5kZXggJiYgdGhpcy50b3VjaERlbHRhLnggPiAwKSB8fFxuICAgICAgICAoaW5kZXggPT09IHRoaXMubnVtIC0gMSAmJiB0aGlzLnRvdWNoRGVsdGEueCA8IDApXG4gICAgICB2YXIgaXNWYWxpZENsb3NlID1cbiAgICAgICAgIWlzVmFsaWRTbGlkZSAmJlxuICAgICAgICB0aGlzLm9wdGlvbnMuY2xvc2VPblN3aXBlVXBPckRvd24gJiZcbiAgICAgICAgTWF0aC5hYnModGhpcy50b3VjaERlbHRhLnkpID4gMjBcbiAgICAgIHZhciBkaXJlY3Rpb25cbiAgICAgIHZhciBpbmRleEZvcndhcmRcbiAgICAgIHZhciBpbmRleEJhY2t3YXJkXG4gICAgICB2YXIgZGlzdGFuY2VGb3J3YXJkXG4gICAgICB2YXIgZGlzdGFuY2VCYWNrd2FyZFxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5jb250aW51b3VzKSB7XG4gICAgICAgIGlzUGFzdEJvdW5kcyA9IGZhbHNlXG4gICAgICB9XG4gICAgICAvLyBEZXRlcm1pbmUgZGlyZWN0aW9uIG9mIHN3aXBlICh0cnVlOiByaWdodCwgZmFsc2U6IGxlZnQpOlxuICAgICAgZGlyZWN0aW9uID0gdGhpcy50b3VjaERlbHRhLnggPCAwID8gLTEgOiAxXG4gICAgICBpZiAoIXRoaXMuaXNTY3JvbGxpbmcpIHtcbiAgICAgICAgaWYgKGlzVmFsaWRTbGlkZSAmJiAhaXNQYXN0Qm91bmRzKSB7XG4gICAgICAgICAgaW5kZXhGb3J3YXJkID0gaW5kZXggKyBkaXJlY3Rpb25cbiAgICAgICAgICBpbmRleEJhY2t3YXJkID0gaW5kZXggLSBkaXJlY3Rpb25cbiAgICAgICAgICBkaXN0YW5jZUZvcndhcmQgPSBzbGlkZVdpZHRoICogZGlyZWN0aW9uXG4gICAgICAgICAgZGlzdGFuY2VCYWNrd2FyZCA9IC1zbGlkZVdpZHRoICogZGlyZWN0aW9uXG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jb250aW51b3VzKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmUodGhpcy5jaXJjbGUoaW5kZXhGb3J3YXJkKSwgZGlzdGFuY2VGb3J3YXJkLCAwKVxuICAgICAgICAgICAgdGhpcy5tb3ZlKHRoaXMuY2lyY2xlKGluZGV4IC0gMiAqIGRpcmVjdGlvbiksIGRpc3RhbmNlQmFja3dhcmQsIDApXG4gICAgICAgICAgfSBlbHNlIGlmIChpbmRleEZvcndhcmQgPj0gMCAmJiBpbmRleEZvcndhcmQgPCB0aGlzLm51bSkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlKGluZGV4Rm9yd2FyZCwgZGlzdGFuY2VGb3J3YXJkLCAwKVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLm1vdmUoaW5kZXgsIHRoaXMucG9zaXRpb25zW2luZGV4XSArIGRpc3RhbmNlRm9yd2FyZCwgZHVyYXRpb24pXG4gICAgICAgICAgdGhpcy5tb3ZlKFxuICAgICAgICAgICAgdGhpcy5jaXJjbGUoaW5kZXhCYWNrd2FyZCksXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uc1t0aGlzLmNpcmNsZShpbmRleEJhY2t3YXJkKV0gKyBkaXN0YW5jZUZvcndhcmQsXG4gICAgICAgICAgICBkdXJhdGlvblxuICAgICAgICAgIClcbiAgICAgICAgICBpbmRleCA9IHRoaXMuY2lyY2xlKGluZGV4QmFja3dhcmQpXG4gICAgICAgICAgdGhpcy5vbnNsaWRlKGluZGV4KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE1vdmUgYmFjayBpbnRvIHBvc2l0aW9uXG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jb250aW51b3VzKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmUodGhpcy5jaXJjbGUoaW5kZXggLSAxKSwgLXNsaWRlV2lkdGgsIGR1cmF0aW9uKVxuICAgICAgICAgICAgdGhpcy5tb3ZlKGluZGV4LCAwLCBkdXJhdGlvbilcbiAgICAgICAgICAgIHRoaXMubW92ZSh0aGlzLmNpcmNsZShpbmRleCArIDEpLCBzbGlkZVdpZHRoLCBkdXJhdGlvbilcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGluZGV4KSB7XG4gICAgICAgICAgICAgIHRoaXMubW92ZShpbmRleCAtIDEsIC1zbGlkZVdpZHRoLCBkdXJhdGlvbilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubW92ZShpbmRleCwgMCwgZHVyYXRpb24pXG4gICAgICAgICAgICBpZiAoaW5kZXggPCB0aGlzLm51bSAtIDEpIHtcbiAgICAgICAgICAgICAgdGhpcy5tb3ZlKGluZGV4ICsgMSwgc2xpZGVXaWR0aCwgZHVyYXRpb24pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaXNWYWxpZENsb3NlKSB7XG4gICAgICAgICAgdGhpcy5jbG9zZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTW92ZSBiYWNrIGludG8gcG9zaXRpb25cbiAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVkoaW5kZXgsIDAsIGR1cmF0aW9uKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIG9udG91Y2hjYW5jZWw6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKHRoaXMudG91Y2hTdGFydCkge1xuICAgICAgICB0aGlzLm9udG91Y2hlbmQoZXZlbnQpXG4gICAgICAgIGRlbGV0ZSB0aGlzLnRvdWNoU3RhcnRcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgb250cmFuc2l0aW9uZW5kOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBzbGlkZSA9IHRoaXMuc2xpZGVzW3RoaXMuaW5kZXhdXG4gICAgICBpZiAoIWV2ZW50IHx8IHNsaWRlID09PSBldmVudC50YXJnZXQpIHtcbiAgICAgICAgaWYgKHRoaXMuaW50ZXJ2YWwpIHtcbiAgICAgICAgICB0aGlzLnBsYXkoKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0VGltZW91dCh0aGlzLm9wdGlvbnMub25zbGlkZWVuZCwgW3RoaXMuaW5kZXgsIHNsaWRlXSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgb25jb21wbGV0ZTogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnRcbiAgICAgIHZhciBwYXJlbnQgPSB0YXJnZXQgJiYgdGFyZ2V0LnBhcmVudE5vZGVcbiAgICAgIHZhciBpbmRleFxuICAgICAgaWYgKCF0YXJnZXQgfHwgIXBhcmVudCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGluZGV4ID0gdGhpcy5nZXROb2RlSW5kZXgocGFyZW50KVxuICAgICAgJChwYXJlbnQpLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5zbGlkZUxvYWRpbmdDbGFzcylcbiAgICAgIGlmIChldmVudC50eXBlID09PSAnZXJyb3InKSB7XG4gICAgICAgICQocGFyZW50KS5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuc2xpZGVFcnJvckNsYXNzKVxuICAgICAgICB0aGlzLmVsZW1lbnRzW2luZGV4XSA9IDMgLy8gRmFpbFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1tpbmRleF0gPSAyIC8vIERvbmVcbiAgICAgIH1cbiAgICAgIC8vIEZpeCBmb3IgSUU3J3MgbGFjayBvZiBzdXBwb3J0IGZvciBwZXJjZW50YWdlIG1heC1oZWlnaHQ6XG4gICAgICBpZiAodGFyZ2V0LmNsaWVudEhlaWdodCA+IHRoaXMuY29udGFpbmVyWzBdLmNsaWVudEhlaWdodCkge1xuICAgICAgICB0YXJnZXQuc3R5bGUubWF4SGVpZ2h0ID0gdGhpcy5jb250YWluZXJbMF0uY2xpZW50SGVpZ2h0XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5pbnRlcnZhbCAmJiB0aGlzLnNsaWRlc1t0aGlzLmluZGV4XSA9PT0gcGFyZW50KSB7XG4gICAgICAgIHRoaXMucGxheSgpXG4gICAgICB9XG4gICAgICB0aGlzLnNldFRpbWVvdXQodGhpcy5vcHRpb25zLm9uc2xpZGVjb21wbGV0ZSwgW2luZGV4LCBwYXJlbnRdKVxuICAgIH0sXG5cbiAgICBvbmxvYWQ6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdGhpcy5vbmNvbXBsZXRlKGV2ZW50KVxuICAgIH0sXG5cbiAgICBvbmVycm9yOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHRoaXMub25jb21wbGV0ZShldmVudClcbiAgICB9LFxuXG4gICAgb25rZXlkb3duOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHN3aXRjaCAoZXZlbnQud2hpY2ggfHwgZXZlbnQua2V5Q29kZSkge1xuICAgICAgICBjYXNlIDEzOiAvLyBFbnRlclxuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMudG9nZ2xlQ29udHJvbHNPbkVudGVyKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZlbnREZWZhdWx0KGV2ZW50KVxuICAgICAgICAgICAgdGhpcy50b2dnbGVDb250cm9scygpXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMjc6IC8vIEVzY2FwZVxuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuY2xvc2VPbkVzY2FwZSkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpXG4gICAgICAgICAgICAvLyBwcmV2ZW50IEVzY2FwZSBmcm9tIGNsb3Npbmcgb3RoZXIgdGhpbmdzXG4gICAgICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDMyOiAvLyBTcGFjZVxuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMudG9nZ2xlU2xpZGVzaG93T25TcGFjZSkge1xuICAgICAgICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdChldmVudClcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlU2xpZGVzaG93KClcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAzNzogLy8gQXJyb3dMZWZ0XG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5lbmFibGVLZXlib2FyZE5hdmlnYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMucHJldmVudERlZmF1bHQoZXZlbnQpXG4gICAgICAgICAgICB0aGlzLnByZXYoKVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDM5OiAvLyBBcnJvd1JpZ2h0XG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5lbmFibGVLZXlib2FyZE5hdmlnYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMucHJldmVudERlZmF1bHQoZXZlbnQpXG4gICAgICAgICAgICB0aGlzLm5leHQoKVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBoYW5kbGVDbGljazogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9uc1xuICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldCB8fCBldmVudC5zcmNFbGVtZW50XG4gICAgICB2YXIgcGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGVcbiAgICAgIC8qKlxuICAgICAgICogQ2hlY2tzIGlmIHRoZSB0YXJnZXQgZnJvbSB0aGUgY2xvc2UgaGFzIHRoZSBnaXZlbiBjbGFzc1xuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgQ2xhc3MgbmFtZVxuICAgICAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiB0aGUgdGFyZ2V0IGhhcyB0aGUgY2xhc3MgbmFtZVxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBpc1RhcmdldChjbGFzc05hbWUpIHtcbiAgICAgICAgcmV0dXJuICQodGFyZ2V0KS5oYXNDbGFzcyhjbGFzc05hbWUpIHx8ICQocGFyZW50KS5oYXNDbGFzcyhjbGFzc05hbWUpXG4gICAgICB9XG4gICAgICBpZiAoaXNUYXJnZXQob3B0aW9ucy50b2dnbGVDbGFzcykpIHtcbiAgICAgICAgLy8gQ2xpY2sgb24gXCJ0b2dnbGVcIiBjb250cm9sXG4gICAgICAgIHRoaXMucHJldmVudERlZmF1bHQoZXZlbnQpXG4gICAgICAgIHRoaXMudG9nZ2xlQ29udHJvbHMoKVxuICAgICAgfSBlbHNlIGlmIChpc1RhcmdldChvcHRpb25zLnByZXZDbGFzcykpIHtcbiAgICAgICAgLy8gQ2xpY2sgb24gXCJwcmV2XCIgY29udHJvbFxuICAgICAgICB0aGlzLnByZXZlbnREZWZhdWx0KGV2ZW50KVxuICAgICAgICB0aGlzLnByZXYoKVxuICAgICAgfSBlbHNlIGlmIChpc1RhcmdldChvcHRpb25zLm5leHRDbGFzcykpIHtcbiAgICAgICAgLy8gQ2xpY2sgb24gXCJuZXh0XCIgY29udHJvbFxuICAgICAgICB0aGlzLnByZXZlbnREZWZhdWx0KGV2ZW50KVxuICAgICAgICB0aGlzLm5leHQoKVxuICAgICAgfSBlbHNlIGlmIChpc1RhcmdldChvcHRpb25zLmNsb3NlQ2xhc3MpKSB7XG4gICAgICAgIC8vIENsaWNrIG9uIFwiY2xvc2VcIiBjb250cm9sXG4gICAgICAgIHRoaXMucHJldmVudERlZmF1bHQoZXZlbnQpXG4gICAgICAgIHRoaXMuY2xvc2UoKVxuICAgICAgfSBlbHNlIGlmIChpc1RhcmdldChvcHRpb25zLnBsYXlQYXVzZUNsYXNzKSkge1xuICAgICAgICAvLyBDbGljayBvbiBcInBsYXktcGF1c2VcIiBjb250cm9sXG4gICAgICAgIHRoaXMucHJldmVudERlZmF1bHQoZXZlbnQpXG4gICAgICAgIHRoaXMudG9nZ2xlU2xpZGVzaG93KClcbiAgICAgIH0gZWxzZSBpZiAocGFyZW50ID09PSB0aGlzLnNsaWRlc0NvbnRhaW5lclswXSkge1xuICAgICAgICAvLyBDbGljayBvbiBzbGlkZSBiYWNrZ3JvdW5kXG4gICAgICAgIGlmIChvcHRpb25zLmNsb3NlT25TbGlkZUNsaWNrKSB7XG4gICAgICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdChldmVudClcbiAgICAgICAgICB0aGlzLmNsb3NlKClcbiAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLnRvZ2dsZUNvbnRyb2xzT25TbGlkZUNsaWNrKSB7XG4gICAgICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdChldmVudClcbiAgICAgICAgICB0aGlzLnRvZ2dsZUNvbnRyb2xzKClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgcGFyZW50LnBhcmVudE5vZGUgJiZcbiAgICAgICAgcGFyZW50LnBhcmVudE5vZGUgPT09IHRoaXMuc2xpZGVzQ29udGFpbmVyWzBdXG4gICAgICApIHtcbiAgICAgICAgLy8gQ2xpY2sgb24gZGlzcGxheWVkIGVsZW1lbnRcbiAgICAgICAgaWYgKG9wdGlvbnMudG9nZ2xlQ29udHJvbHNPblNsaWRlQ2xpY2spIHtcbiAgICAgICAgICB0aGlzLnByZXZlbnREZWZhdWx0KGV2ZW50KVxuICAgICAgICAgIHRoaXMudG9nZ2xlQ29udHJvbHMoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIG9uY2xpY2s6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLm9wdGlvbnMuZW11bGF0ZVRvdWNoRXZlbnRzICYmXG4gICAgICAgIHRoaXMudG91Y2hEZWx0YSAmJlxuICAgICAgICAoTWF0aC5hYnModGhpcy50b3VjaERlbHRhLngpID4gMjAgfHwgTWF0aC5hYnModGhpcy50b3VjaERlbHRhLnkpID4gMjApXG4gICAgICApIHtcbiAgICAgICAgZGVsZXRlIHRoaXMudG91Y2hEZWx0YVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZUNsaWNrKGV2ZW50KVxuICAgIH0sXG5cbiAgICB1cGRhdGVFZGdlQ2xhc3NlczogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICBpZiAoIWluZGV4KSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZENsYXNzKHRoaXMub3B0aW9ucy5sZWZ0RWRnZUNsYXNzKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmxlZnRFZGdlQ2xhc3MpXG4gICAgICB9XG4gICAgICBpZiAoaW5kZXggPT09IHRoaXMubnVtIC0gMSkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRDbGFzcyh0aGlzLm9wdGlvbnMucmlnaHRFZGdlQ2xhc3MpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMucmlnaHRFZGdlQ2xhc3MpXG4gICAgICB9XG4gICAgfSxcblxuICAgIHVwZGF0ZUFjdGl2ZVNsaWRlOiBmdW5jdGlvbiAob2xkSW5kZXgsIG5ld0luZGV4KSB7XG4gICAgICB2YXIgc2xpZGVzID0gdGhpcy5zbGlkZXNcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zXG4gICAgICB2YXIgbGlzdCA9IFtcbiAgICAgICAge1xuICAgICAgICAgIGluZGV4OiBuZXdJbmRleCxcbiAgICAgICAgICBtZXRob2Q6ICdhZGRDbGFzcycsXG4gICAgICAgICAgaGlkZGVuOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaW5kZXg6IG9sZEluZGV4LFxuICAgICAgICAgIG1ldGhvZDogJ3JlbW92ZUNsYXNzJyxcbiAgICAgICAgICBoaWRkZW46IHRydWVcbiAgICAgICAgfVxuICAgICAgXVxuICAgICAgdmFyIGl0ZW0sIGluZGV4XG4gICAgICB3aGlsZSAobGlzdC5sZW5ndGgpIHtcbiAgICAgICAgaXRlbSA9IGxpc3QucG9wKClcbiAgICAgICAgJChzbGlkZXNbaXRlbS5pbmRleF0pW2l0ZW0ubWV0aG9kXShvcHRpb25zLnNsaWRlQWN0aXZlQ2xhc3MpXG4gICAgICAgIGluZGV4ID0gdGhpcy5jaXJjbGUoaXRlbS5pbmRleCAtIDEpXG4gICAgICAgIGlmIChvcHRpb25zLmNvbnRpbnVvdXMgfHwgaW5kZXggPCBpdGVtLmluZGV4KSB7XG4gICAgICAgICAgJChzbGlkZXNbaW5kZXhdKVtpdGVtLm1ldGhvZF0ob3B0aW9ucy5zbGlkZVByZXZDbGFzcylcbiAgICAgICAgfVxuICAgICAgICBpbmRleCA9IHRoaXMuY2lyY2xlKGl0ZW0uaW5kZXggKyAxKVxuICAgICAgICBpZiAob3B0aW9ucy5jb250aW51b3VzIHx8IGluZGV4ID4gaXRlbS5pbmRleCkge1xuICAgICAgICAgICQoc2xpZGVzW2luZGV4XSlbaXRlbS5tZXRob2RdKG9wdGlvbnMuc2xpZGVOZXh0Q2xhc3MpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuc2xpZGVzW29sZEluZGV4XS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKVxuICAgICAgdGhpcy5zbGlkZXNbbmV3SW5kZXhdLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKVxuICAgIH0sXG5cbiAgICBoYW5kbGVTbGlkZTogZnVuY3Rpb24gKG9sZEluZGV4LCBuZXdJbmRleCkge1xuICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuY29udGludW91cykge1xuICAgICAgICB0aGlzLnVwZGF0ZUVkZ2VDbGFzc2VzKG5ld0luZGV4KVxuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGVBY3RpdmVTbGlkZShvbGRJbmRleCwgbmV3SW5kZXgpXG4gICAgICB0aGlzLmxvYWRFbGVtZW50cyhuZXdJbmRleClcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudW5sb2FkRWxlbWVudHMpIHtcbiAgICAgICAgdGhpcy51bmxvYWRFbGVtZW50cyhvbGRJbmRleCwgbmV3SW5kZXgpXG4gICAgICB9XG4gICAgICB0aGlzLnNldFRpdGxlKG5ld0luZGV4KVxuICAgIH0sXG5cbiAgICBvbnNsaWRlOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgIHRoaXMuaGFuZGxlU2xpZGUodGhpcy5pbmRleCwgaW5kZXgpXG4gICAgICB0aGlzLmluZGV4ID0gaW5kZXhcbiAgICAgIHRoaXMuc2V0VGltZW91dCh0aGlzLm9wdGlvbnMub25zbGlkZSwgW2luZGV4LCB0aGlzLnNsaWRlc1tpbmRleF1dKVxuICAgIH0sXG5cbiAgICBzZXRUaXRsZTogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICB2YXIgZmlyc3RDaGlsZCA9IHRoaXMuc2xpZGVzW2luZGV4XS5maXJzdENoaWxkXG4gICAgICB2YXIgdGV4dCA9IGZpcnN0Q2hpbGQudGl0bGUgfHwgZmlyc3RDaGlsZC5hbHRcbiAgICAgIHZhciB0aXRsZUVsZW1lbnQgPSB0aGlzLnRpdGxlRWxlbWVudFxuICAgICAgaWYgKHRpdGxlRWxlbWVudC5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy50aXRsZUVsZW1lbnQuZW1wdHkoKVxuICAgICAgICBpZiAodGV4dCkge1xuICAgICAgICAgIHRpdGxlRWxlbWVudFswXS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzZXRUaW1lb3V0OiBmdW5jdGlvbiAoZnVuYywgYXJncywgd2FpdCkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzXG4gICAgICByZXR1cm4gKFxuICAgICAgICBmdW5jICYmXG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBmdW5jLmFwcGx5KHRoYXQsIGFyZ3MgfHwgW10pXG4gICAgICAgIH0sIHdhaXQgfHwgMClcbiAgICAgIClcbiAgICB9LFxuXG4gICAgaW1hZ2VGYWN0b3J5OiBmdW5jdGlvbiAob2JqLCBjYWxsYmFjaykge1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnNcbiAgICAgIHZhciB0aGF0ID0gdGhpc1xuICAgICAgdmFyIHVybCA9IG9ialxuICAgICAgdmFyIGltZyA9IHRoaXMuaW1hZ2VQcm90b3R5cGUuY2xvbmVOb2RlKGZhbHNlKVxuICAgICAgdmFyIHBpY3R1cmVcbiAgICAgIHZhciBjYWxsZWRcbiAgICAgIHZhciBzb3VyY2VzXG4gICAgICB2YXIgc3Jjc2V0XG4gICAgICB2YXIgc2l6ZXNcbiAgICAgIHZhciB0aXRsZVxuICAgICAgdmFyIGFsdFRleHRcbiAgICAgIHZhciBpXG4gICAgICAvKipcbiAgICAgICAqIFdyYXBzIHRoZSBjYWxsYmFjayBmdW5jdGlvbiBmb3IgdGhlIGxvYWQvZXJyb3IgZXZlbnRcbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge2V2ZW50fSBldmVudCBsb2FkL2Vycm9yIGV2ZW50XG4gICAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSB0aW1lb3V0IElEXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIGNhbGxiYWNrV3JhcHBlcihldmVudCkge1xuICAgICAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgICAgIGV2ZW50ID0ge1xuICAgICAgICAgICAgdHlwZTogZXZlbnQudHlwZSxcbiAgICAgICAgICAgIHRhcmdldDogcGljdHVyZSB8fCBpbWdcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFldmVudC50YXJnZXQucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgLy8gRml4IGZvciBicm93c2VycyAoZS5nLiBJRTcpIGZpcmluZyB0aGUgbG9hZCBldmVudCBmb3JcbiAgICAgICAgICAgIC8vIGNhY2hlZCBpbWFnZXMgYmVmb3JlIHRoZSBlbGVtZW50IGNvdWxkXG4gICAgICAgICAgICAvLyBiZSBhZGRlZCB0byB0aGUgRE9NOlxuICAgICAgICAgICAgcmV0dXJuIHRoYXQuc2V0VGltZW91dChjYWxsYmFja1dyYXBwZXIsIFtldmVudF0pXG4gICAgICAgICAgfVxuICAgICAgICAgIGNhbGxlZCA9IHRydWVcbiAgICAgICAgICAkKGltZykub2ZmKCdsb2FkIGVycm9yJywgY2FsbGJhY2tXcmFwcGVyKVxuICAgICAgICAgIGNhbGxiYWNrKGV2ZW50KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdXJsID0gdGhpcy5nZXRJdGVtUHJvcGVydHkob2JqLCBvcHRpb25zLnVybFByb3BlcnR5KVxuICAgICAgICBzb3VyY2VzID1cbiAgICAgICAgICB0aGlzLnN1cHBvcnQucGljdHVyZSAmJlxuICAgICAgICAgIHRoaXMuc3VwcG9ydC5zb3VyY2UgJiZcbiAgICAgICAgICB0aGlzLmdldEl0ZW1Qcm9wZXJ0eShvYmosIG9wdGlvbnMuc291cmNlc1Byb3BlcnR5KVxuICAgICAgICBzcmNzZXQgPSB0aGlzLmdldEl0ZW1Qcm9wZXJ0eShvYmosIG9wdGlvbnMuc3Jjc2V0UHJvcGVydHkpXG4gICAgICAgIHNpemVzID0gdGhpcy5nZXRJdGVtUHJvcGVydHkob2JqLCBvcHRpb25zLnNpemVzUHJvcGVydHkpXG4gICAgICAgIHRpdGxlID0gdGhpcy5nZXRJdGVtUHJvcGVydHkob2JqLCBvcHRpb25zLnRpdGxlUHJvcGVydHkpXG4gICAgICAgIGFsdFRleHQgPSB0aGlzLmdldEl0ZW1Qcm9wZXJ0eShvYmosIG9wdGlvbnMuYWx0VGV4dFByb3BlcnR5KSB8fCB0aXRsZVxuICAgICAgfVxuICAgICAgaW1nLmRyYWdnYWJsZSA9IGZhbHNlXG4gICAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgaW1nLnRpdGxlID0gdGl0bGVcbiAgICAgIH1cbiAgICAgIGlmIChhbHRUZXh0KSB7XG4gICAgICAgIGltZy5hbHQgPSBhbHRUZXh0XG4gICAgICB9XG4gICAgICAkKGltZykub24oJ2xvYWQgZXJyb3InLCBjYWxsYmFja1dyYXBwZXIpXG4gICAgICBpZiAoc291cmNlcyAmJiBzb3VyY2VzLmxlbmd0aCkge1xuICAgICAgICBwaWN0dXJlID0gdGhpcy5waWN0dXJlUHJvdG90eXBlLmNsb25lTm9kZShmYWxzZSlcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBwaWN0dXJlLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgJC5leHRlbmQodGhpcy5zb3VyY2VQcm90b3R5cGUuY2xvbmVOb2RlKGZhbHNlKSwgc291cmNlc1tpXSlcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcGljdHVyZS5hcHBlbmRDaGlsZChpbWcpXG4gICAgICAgICQocGljdHVyZSkuYWRkQ2xhc3Mob3B0aW9ucy50b2dnbGVDbGFzcylcbiAgICAgIH1cbiAgICAgIGlmIChzcmNzZXQpIHtcbiAgICAgICAgaWYgKHNpemVzKSB7XG4gICAgICAgICAgaW1nLnNpemVzID0gc2l6ZXNcbiAgICAgICAgfVxuICAgICAgICBpbWcuc3Jjc2V0ID0gc3Jjc2V0XG4gICAgICB9XG4gICAgICBpbWcuc3JjID0gdXJsXG4gICAgICBpZiAocGljdHVyZSkgcmV0dXJuIHBpY3R1cmVcbiAgICAgIHJldHVybiBpbWdcbiAgICB9LFxuXG4gICAgY3JlYXRlRWxlbWVudDogZnVuY3Rpb24gKG9iaiwgY2FsbGJhY2spIHtcbiAgICAgIHZhciB0eXBlID0gb2JqICYmIHRoaXMuZ2V0SXRlbVByb3BlcnR5KG9iaiwgdGhpcy5vcHRpb25zLnR5cGVQcm9wZXJ0eSlcbiAgICAgIHZhciBmYWN0b3J5ID1cbiAgICAgICAgKHR5cGUgJiYgdGhpc1t0eXBlLnNwbGl0KCcvJylbMF0gKyAnRmFjdG9yeSddKSB8fCB0aGlzLmltYWdlRmFjdG9yeVxuICAgICAgdmFyIGVsZW1lbnQgPSBvYmogJiYgZmFjdG9yeS5jYWxsKHRoaXMsIG9iaiwgY2FsbGJhY2spXG4gICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudCA9IHRoaXMuZWxlbWVudFByb3RvdHlwZS5jbG9uZU5vZGUoZmFsc2UpXG4gICAgICAgIHRoaXMuc2V0VGltZW91dChjYWxsYmFjaywgW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICB0YXJnZXQ6IGVsZW1lbnRcbiAgICAgICAgICB9XG4gICAgICAgIF0pXG4gICAgICB9XG4gICAgICAkKGVsZW1lbnQpLmFkZENsYXNzKHRoaXMub3B0aW9ucy5zbGlkZUNvbnRlbnRDbGFzcylcbiAgICAgIHJldHVybiBlbGVtZW50XG4gICAgfSxcblxuICAgIGl0ZXJhdGVQcmVsb2FkUmFuZ2U6IGZ1bmN0aW9uIChpbmRleCwgZnVuYykge1xuICAgICAgdmFyIG51bSA9IHRoaXMubnVtXG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9uc1xuICAgICAgdmFyIGxpbWl0ID0gTWF0aC5taW4obnVtLCBvcHRpb25zLnByZWxvYWRSYW5nZSAqIDIgKyAxKVxuICAgICAgdmFyIGogPSBpbmRleFxuICAgICAgdmFyIGlcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsaW1pdDsgaSArPSAxKSB7XG4gICAgICAgIC8vIEZpcnN0IGl0ZXJhdGUgdG8gdGhlIGN1cnJlbnQgaW5kZXggKDApLFxuICAgICAgICAvLyB0aGVuIHRoZSBuZXh0IG9uZSAoKzEpLFxuICAgICAgICAvLyB0aGVuIHRoZSBwcmV2aW91cyBvbmUgKC0xKSxcbiAgICAgICAgLy8gdGhlbiB0aGUgbmV4dCBhZnRlciBuZXh0ICgrMiksXG4gICAgICAgIC8vIHRoZW4gdGhlIG9uZSBiZWZvcmUgdGhlIHByZXZpb3VzIG9uZSAoLTIpLCBldGMuOlxuICAgICAgICBqICs9IGkgKiAoaSAlIDIgPT09IDAgPyAtMSA6IDEpXG4gICAgICAgIGlmIChqIDwgMCB8fCBqID49IG51bSkge1xuICAgICAgICAgIGlmICghb3B0aW9ucy5jb250aW51b3VzKSBjb250aW51ZVxuICAgICAgICAgIC8vIENvbm5lY3QgdGhlIGVuZHMgb2YgdGhlIGxpc3QgdG8gbG9hZCBzbGlkZSBlbGVtZW50cyBmb3JcbiAgICAgICAgICAvLyBjb250aW51b3VzIGl0ZXJhdGlvbjpcbiAgICAgICAgICBqID0gdGhpcy5jaXJjbGUoailcbiAgICAgICAgfVxuICAgICAgICBmdW5jLmNhbGwodGhpcywgailcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbG9hZEVsZW1lbnQ6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgaWYgKCF0aGlzLmVsZW1lbnRzW2luZGV4XSkge1xuICAgICAgICBpZiAodGhpcy5zbGlkZXNbaW5kZXhdLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2luZGV4XSA9ICQodGhpcy5zbGlkZXNbaW5kZXhdKS5oYXNDbGFzcyhcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5zbGlkZUVycm9yQ2xhc3NcbiAgICAgICAgICApXG4gICAgICAgICAgICA/IDNcbiAgICAgICAgICAgIDogMlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNbaW5kZXhdID0gMSAvLyBMb2FkaW5nXG4gICAgICAgICAgJCh0aGlzLnNsaWRlc1tpbmRleF0pLmFkZENsYXNzKHRoaXMub3B0aW9ucy5zbGlkZUxvYWRpbmdDbGFzcylcbiAgICAgICAgICB0aGlzLnNsaWRlc1tpbmRleF0uYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQodGhpcy5saXN0W2luZGV4XSwgdGhpcy5wcm94eUxpc3RlbmVyKVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBsb2FkRWxlbWVudHM6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgdGhpcy5pdGVyYXRlUHJlbG9hZFJhbmdlKGluZGV4LCB0aGlzLmxvYWRFbGVtZW50KVxuICAgIH0sXG5cbiAgICB1bmxvYWRFbGVtZW50czogZnVuY3Rpb24gKG9sZEluZGV4LCBuZXdJbmRleCkge1xuICAgICAgdmFyIHByZWxvYWRSYW5nZSA9IHRoaXMub3B0aW9ucy5wcmVsb2FkUmFuZ2VcbiAgICAgIHRoaXMuaXRlcmF0ZVByZWxvYWRSYW5nZShvbGRJbmRleCwgZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgdmFyIGRpZmYgPSBNYXRoLmFicyhpIC0gbmV3SW5kZXgpXG4gICAgICAgIGlmIChkaWZmID4gcHJlbG9hZFJhbmdlICYmIGRpZmYgKyBwcmVsb2FkUmFuZ2UgPCB0aGlzLm51bSkge1xuICAgICAgICAgIHRoaXMudW5sb2FkU2xpZGUoaSlcbiAgICAgICAgICBkZWxldGUgdGhpcy5lbGVtZW50c1tpXVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG5cbiAgICBhZGRTbGlkZTogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICB2YXIgc2xpZGUgPSB0aGlzLnNsaWRlUHJvdG90eXBlLmNsb25lTm9kZShmYWxzZSlcbiAgICAgIHNsaWRlLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGluZGV4KVxuICAgICAgc2xpZGUuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJylcbiAgICAgIHRoaXMuc2xpZGVzQ29udGFpbmVyWzBdLmFwcGVuZENoaWxkKHNsaWRlKVxuICAgICAgdGhpcy5zbGlkZXMucHVzaChzbGlkZSlcbiAgICB9LFxuXG4gICAgcG9zaXRpb25TbGlkZTogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICB2YXIgc2xpZGUgPSB0aGlzLnNsaWRlc1tpbmRleF1cbiAgICAgIHNsaWRlLnN0eWxlLndpZHRoID0gdGhpcy5zbGlkZVdpZHRoICsgJ3B4J1xuICAgICAgaWYgKHRoaXMuc3VwcG9ydC50cmFuc2Zvcm0pIHtcbiAgICAgICAgc2xpZGUuc3R5bGUubGVmdCA9IGluZGV4ICogLXRoaXMuc2xpZGVXaWR0aCArICdweCdcbiAgICAgICAgdGhpcy5tb3ZlKFxuICAgICAgICAgIGluZGV4LFxuICAgICAgICAgIHRoaXMuaW5kZXggPiBpbmRleFxuICAgICAgICAgICAgPyAtdGhpcy5zbGlkZVdpZHRoXG4gICAgICAgICAgICA6IHRoaXMuaW5kZXggPCBpbmRleFxuICAgICAgICAgICAgPyB0aGlzLnNsaWRlV2lkdGhcbiAgICAgICAgICAgIDogMCxcbiAgICAgICAgICAwXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgaW5pdFNsaWRlczogZnVuY3Rpb24gKHJlbG9hZCkge1xuICAgICAgdmFyIGNsZWFyU2xpZGVzLCBpXG4gICAgICBpZiAoIXJlbG9hZCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9ucyA9IFtdXG4gICAgICAgIHRoaXMucG9zaXRpb25zLmxlbmd0aCA9IHRoaXMubnVtXG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSB7fVxuICAgICAgICB0aGlzLnBpY3R1cmVQcm90b3R5cGUgPVxuICAgICAgICAgIHRoaXMuc3VwcG9ydC5waWN0dXJlICYmIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BpY3R1cmUnKVxuICAgICAgICB0aGlzLnNvdXJjZVByb3RvdHlwZSA9XG4gICAgICAgICAgdGhpcy5zdXBwb3J0LnNvdXJjZSAmJiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzb3VyY2UnKVxuICAgICAgICB0aGlzLmltYWdlUHJvdG90eXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgICAgdGhpcy5lbGVtZW50UHJvdG90eXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdGhpcy5zbGlkZVByb3RvdHlwZSA9IHRoaXMuZWxlbWVudFByb3RvdHlwZS5jbG9uZU5vZGUoZmFsc2UpXG4gICAgICAgICQodGhpcy5zbGlkZVByb3RvdHlwZSkuYWRkQ2xhc3ModGhpcy5vcHRpb25zLnNsaWRlQ2xhc3MpXG4gICAgICAgIHRoaXMuc2xpZGVzID0gdGhpcy5zbGlkZXNDb250YWluZXJbMF0uY2hpbGRyZW5cbiAgICAgICAgY2xlYXJTbGlkZXMgPVxuICAgICAgICAgIHRoaXMub3B0aW9ucy5jbGVhclNsaWRlcyB8fCB0aGlzLnNsaWRlcy5sZW5ndGggIT09IHRoaXMubnVtXG4gICAgICB9XG4gICAgICB0aGlzLnNsaWRlV2lkdGggPSB0aGlzLmNvbnRhaW5lclswXS5jbGllbnRXaWR0aFxuICAgICAgdGhpcy5zbGlkZUhlaWdodCA9IHRoaXMuY29udGFpbmVyWzBdLmNsaWVudEhlaWdodFxuICAgICAgdGhpcy5zbGlkZXNDb250YWluZXJbMF0uc3R5bGUud2lkdGggPSB0aGlzLm51bSAqIHRoaXMuc2xpZGVXaWR0aCArICdweCdcbiAgICAgIGlmIChjbGVhclNsaWRlcykge1xuICAgICAgICB0aGlzLnJlc2V0U2xpZGVzKClcbiAgICAgIH1cbiAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLm51bTsgaSArPSAxKSB7XG4gICAgICAgIGlmIChjbGVhclNsaWRlcykge1xuICAgICAgICAgIHRoaXMuYWRkU2xpZGUoaSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBvc2l0aW9uU2xpZGUoaSlcbiAgICAgIH1cbiAgICAgIC8vIFJlcG9zaXRpb24gdGhlIHNsaWRlcyBiZWZvcmUgYW5kIGFmdGVyIHRoZSBnaXZlbiBpbmRleDpcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuY29udGludW91cyAmJiB0aGlzLnN1cHBvcnQudHJhbnNmb3JtKSB7XG4gICAgICAgIHRoaXMubW92ZSh0aGlzLmNpcmNsZSh0aGlzLmluZGV4IC0gMSksIC10aGlzLnNsaWRlV2lkdGgsIDApXG4gICAgICAgIHRoaXMubW92ZSh0aGlzLmNpcmNsZSh0aGlzLmluZGV4ICsgMSksIHRoaXMuc2xpZGVXaWR0aCwgMClcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5zdXBwb3J0LnRyYW5zZm9ybSkge1xuICAgICAgICB0aGlzLnNsaWRlc0NvbnRhaW5lclswXS5zdHlsZS5sZWZ0ID1cbiAgICAgICAgICB0aGlzLmluZGV4ICogLXRoaXMuc2xpZGVXaWR0aCArICdweCdcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgdW5sb2FkU2xpZGU6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgdmFyIHNsaWRlLCBmaXJzdENoaWxkXG4gICAgICBzbGlkZSA9IHRoaXMuc2xpZGVzW2luZGV4XVxuICAgICAgZmlyc3RDaGlsZCA9IHNsaWRlLmZpcnN0Q2hpbGRcbiAgICAgIGlmIChmaXJzdENoaWxkICE9PSBudWxsKSB7XG4gICAgICAgIHNsaWRlLnJlbW92ZUNoaWxkKGZpcnN0Q2hpbGQpXG4gICAgICB9XG4gICAgfSxcblxuICAgIHVubG9hZEFsbFNsaWRlczogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGksIGxlblxuICAgICAgZm9yIChpID0gMCwgbGVuID0gdGhpcy5zbGlkZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdGhpcy51bmxvYWRTbGlkZShpKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICB0b2dnbGVDb250cm9sczogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGNvbnRyb2xzQ2xhc3MgPSB0aGlzLm9wdGlvbnMuY29udHJvbHNDbGFzc1xuICAgICAgaWYgKHRoaXMuY29udGFpbmVyLmhhc0NsYXNzKGNvbnRyb2xzQ2xhc3MpKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNsYXNzKGNvbnRyb2xzQ2xhc3MpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRDbGFzcyhjb250cm9sc0NsYXNzKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICB0b2dnbGVTbGlkZXNob3c6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghdGhpcy5pbnRlcnZhbCkge1xuICAgICAgICB0aGlzLnBsYXkoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wYXVzZSgpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGdldE5vZGVJbmRleDogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBwYXJzZUludChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpLCAxMClcbiAgICB9LFxuXG4gICAgZ2V0TmVzdGVkUHJvcGVydHk6IGZ1bmN0aW9uIChvYmosIHByb3BlcnR5KSB7XG4gICAgICBwcm9wZXJ0eS5yZXBsYWNlKFxuICAgICAgICAvLyBNYXRjaGVzIG5hdGl2ZSBKYXZhU2NyaXB0IG5vdGF0aW9uIGluIGEgU3RyaW5nLFxuICAgICAgICAvLyBlLmcuICdbXCJkb3VibGVRdW90ZVByb3BcIl0uZG90UHJvcFsyXSdcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG4gICAgICAgIC9cXFsoPzonKFteJ10rKSd8XCIoW15cIl0rKVwifChcXGQrKSlcXF18KD86KD86XnxcXC4pKFteXFwuXFxbXSspKS9nLFxuICAgICAgICBmdW5jdGlvbiAoc3RyLCBzaW5nbGVRdW90ZVByb3AsIGRvdWJsZVF1b3RlUHJvcCwgYXJyYXlJbmRleCwgZG90UHJvcCkge1xuICAgICAgICAgIHZhciBwcm9wID1cbiAgICAgICAgICAgIGRvdFByb3AgfHxcbiAgICAgICAgICAgIHNpbmdsZVF1b3RlUHJvcCB8fFxuICAgICAgICAgICAgZG91YmxlUXVvdGVQcm9wIHx8XG4gICAgICAgICAgICAoYXJyYXlJbmRleCAmJiBwYXJzZUludChhcnJheUluZGV4LCAxMCkpXG4gICAgICAgICAgaWYgKHN0ciAmJiBvYmopIHtcbiAgICAgICAgICAgIG9iaiA9IG9ialtwcm9wXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgcmV0dXJuIG9ialxuICAgIH0sXG5cbiAgICBnZXREYXRhUHJvcGVydHk6IGZ1bmN0aW9uIChvYmosIHByb3BlcnR5KSB7XG4gICAgICB2YXIga2V5XG4gICAgICB2YXIgcHJvcFxuICAgICAgaWYgKG9iai5kYXRhc2V0KSB7XG4gICAgICAgIGtleSA9IHByb3BlcnR5LnJlcGxhY2UoLy0oW2Etel0pL2csIGZ1bmN0aW9uIChfLCBiKSB7XG4gICAgICAgICAgcmV0dXJuIGIudG9VcHBlckNhc2UoKVxuICAgICAgICB9KVxuICAgICAgICBwcm9wID0gb2JqLmRhdGFzZXRba2V5XVxuICAgICAgfSBlbHNlIGlmIChvYmouZ2V0QXR0cmlidXRlKSB7XG4gICAgICAgIHByb3AgPSBvYmouZ2V0QXR0cmlidXRlKFxuICAgICAgICAgICdkYXRhLScgKyBwcm9wZXJ0eS5yZXBsYWNlKC8oW0EtWl0pL2csICctJDEnKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgcHJvcCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG4gICAgICAgIGlmIChcbiAgICAgICAgICAvXih0cnVlfGZhbHNlfG51bGx8LT9cXGQrKFxcLlxcZCspP3xcXHtbXFxzXFxTXSpcXH18XFxbW1xcc1xcU10qXFxdKSQvLnRlc3QocHJvcClcbiAgICAgICAgKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiAkLnBhcnNlSlNPTihwcm9wKVxuICAgICAgICAgIH0gY2F0Y2ggKGlnbm9yZSkge1xuICAgICAgICAgICAgLy8gaWdub3JlIEpTT04gcGFyc2luZyBlcnJvcnNcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb3BcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZ2V0SXRlbVByb3BlcnR5OiBmdW5jdGlvbiAob2JqLCBwcm9wZXJ0eSkge1xuICAgICAgdmFyIHByb3AgPSB0aGlzLmdldERhdGFQcm9wZXJ0eShvYmosIHByb3BlcnR5KVxuICAgICAgaWYgKHByb3AgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9wID0gb2JqW3Byb3BlcnR5XVxuICAgICAgfVxuICAgICAgaWYgKHByb3AgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9wID0gdGhpcy5nZXROZXN0ZWRQcm9wZXJ0eShvYmosIHByb3BlcnR5KVxuICAgICAgfVxuICAgICAgcmV0dXJuIHByb3BcbiAgICB9LFxuXG4gICAgaW5pdFN0YXJ0SW5kZXg6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpbmRleCA9IHRoaXMub3B0aW9ucy5pbmRleFxuICAgICAgdmFyIHVybFByb3BlcnR5ID0gdGhpcy5vcHRpb25zLnVybFByb3BlcnR5XG4gICAgICB2YXIgaVxuICAgICAgLy8gQ2hlY2sgaWYgdGhlIGluZGV4IGlzIGdpdmVuIGFzIGEgbGlzdCBvYmplY3Q6XG4gICAgICBpZiAoaW5kZXggJiYgdHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJykge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5udW07IGkgKz0gMSkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMubGlzdFtpXSA9PT0gaW5kZXggfHxcbiAgICAgICAgICAgIHRoaXMuZ2V0SXRlbVByb3BlcnR5KHRoaXMubGlzdFtpXSwgdXJsUHJvcGVydHkpID09PVxuICAgICAgICAgICAgICB0aGlzLmdldEl0ZW1Qcm9wZXJ0eShpbmRleCwgdXJsUHJvcGVydHkpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBpbmRleCA9IGlcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBNYWtlIHN1cmUgdGhlIGluZGV4IGlzIGluIHRoZSBsaXN0IHJhbmdlOlxuICAgICAgdGhpcy5pbmRleCA9IHRoaXMuY2lyY2xlKHBhcnNlSW50KGluZGV4LCAxMCkgfHwgMClcbiAgICB9LFxuXG4gICAgaW5pdEV2ZW50TGlzdGVuZXJzOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdGhhdCA9IHRoaXNcbiAgICAgIHZhciBzbGlkZXNDb250YWluZXIgPSB0aGlzLnNsaWRlc0NvbnRhaW5lclxuICAgICAgLyoqXG4gICAgICAgKiBQcm94eSBsaXN0ZW5lclxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7ZXZlbnR9IGV2ZW50IG9yaWdpbmFsIGV2ZW50XG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIHByb3h5TGlzdGVuZXIoZXZlbnQpIHtcbiAgICAgICAgdmFyIHR5cGUgPVxuICAgICAgICAgIHRoYXQuc3VwcG9ydC50cmFuc2l0aW9uICYmIHRoYXQuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCA9PT0gZXZlbnQudHlwZVxuICAgICAgICAgICAgPyAndHJhbnNpdGlvbmVuZCdcbiAgICAgICAgICAgIDogZXZlbnQudHlwZVxuICAgICAgICB0aGF0WydvbicgKyB0eXBlXShldmVudClcbiAgICAgIH1cbiAgICAgICQod2luZG93KS5vbigncmVzaXplJywgcHJveHlMaXN0ZW5lcilcbiAgICAgICQod2luZG93KS5vbignaGFzaGNoYW5nZScsIHByb3h5TGlzdGVuZXIpXG4gICAgICAkKGRvY3VtZW50LmJvZHkpLm9uKCdrZXlkb3duJywgcHJveHlMaXN0ZW5lcilcbiAgICAgIHRoaXMuY29udGFpbmVyLm9uKCdjbGljaycsIHByb3h5TGlzdGVuZXIpXG4gICAgICBpZiAodGhpcy5zdXBwb3J0LnRvdWNoKSB7XG4gICAgICAgIHNsaWRlc0NvbnRhaW5lci5vbihcbiAgICAgICAgICAndG91Y2hzdGFydCB0b3VjaG1vdmUgdG91Y2hlbmQgdG91Y2hjYW5jZWwnLFxuICAgICAgICAgIHByb3h5TGlzdGVuZXJcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuZW11bGF0ZVRvdWNoRXZlbnRzICYmIHRoaXMuc3VwcG9ydC50cmFuc2l0aW9uKSB7XG4gICAgICAgIHNsaWRlc0NvbnRhaW5lci5vbihcbiAgICAgICAgICAnbW91c2Vkb3duIG1vdXNlbW92ZSBtb3VzZXVwIG1vdXNlb3V0JyxcbiAgICAgICAgICBwcm94eUxpc3RlbmVyXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnN1cHBvcnQudHJhbnNpdGlvbikge1xuICAgICAgICBzbGlkZXNDb250YWluZXIub24odGhpcy5zdXBwb3J0LnRyYW5zaXRpb24uZW5kLCBwcm94eUxpc3RlbmVyKVxuICAgICAgfVxuICAgICAgdGhpcy5wcm94eUxpc3RlbmVyID0gcHJveHlMaXN0ZW5lclxuICAgIH0sXG5cbiAgICBkZXN0cm95RXZlbnRMaXN0ZW5lcnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzbGlkZXNDb250YWluZXIgPSB0aGlzLnNsaWRlc0NvbnRhaW5lclxuICAgICAgdmFyIHByb3h5TGlzdGVuZXIgPSB0aGlzLnByb3h5TGlzdGVuZXJcbiAgICAgICQod2luZG93KS5vZmYoJ3Jlc2l6ZScsIHByb3h5TGlzdGVuZXIpXG4gICAgICAkKGRvY3VtZW50LmJvZHkpLm9mZigna2V5ZG93bicsIHByb3h5TGlzdGVuZXIpXG4gICAgICB0aGlzLmNvbnRhaW5lci5vZmYoJ2NsaWNrJywgcHJveHlMaXN0ZW5lcilcbiAgICAgIGlmICh0aGlzLnN1cHBvcnQudG91Y2gpIHtcbiAgICAgICAgc2xpZGVzQ29udGFpbmVyLm9mZihcbiAgICAgICAgICAndG91Y2hzdGFydCB0b3VjaG1vdmUgdG91Y2hlbmQgdG91Y2hjYW5jZWwnLFxuICAgICAgICAgIHByb3h5TGlzdGVuZXJcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuZW11bGF0ZVRvdWNoRXZlbnRzICYmIHRoaXMuc3VwcG9ydC50cmFuc2l0aW9uKSB7XG4gICAgICAgIHNsaWRlc0NvbnRhaW5lci5vZmYoXG4gICAgICAgICAgJ21vdXNlZG93biBtb3VzZW1vdmUgbW91c2V1cCBtb3VzZW91dCcsXG4gICAgICAgICAgcHJveHlMaXN0ZW5lclxuICAgICAgICApXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zdXBwb3J0LnRyYW5zaXRpb24pIHtcbiAgICAgICAgc2xpZGVzQ29udGFpbmVyLm9mZih0aGlzLnN1cHBvcnQudHJhbnNpdGlvbi5lbmQsIHByb3h5TGlzdGVuZXIpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGhhbmRsZU9wZW46IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMub25vcGVuZWQpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLm9ub3BlbmVkLmNhbGwodGhpcylcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgaW5pdFdpZGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzXG4gICAgICAvKipcbiAgICAgICAqIE9wZW4gaGFuZGxlclxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7ZXZlbnR9IGV2ZW50IEdhbGxlcnkgb3BlbiBldmVudFxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBvcGVuSGFuZGxlcihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSB0aGF0LmNvbnRhaW5lclswXSkge1xuICAgICAgICAgIHRoYXQuY29udGFpbmVyLm9mZih0aGF0LnN1cHBvcnQudHJhbnNpdGlvbi5lbmQsIG9wZW5IYW5kbGVyKVxuICAgICAgICAgIHRoYXQuaGFuZGxlT3BlbigpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuY29udGFpbmVyID0gJCh0aGlzLm9wdGlvbnMuY29udGFpbmVyKVxuICAgICAgaWYgKCF0aGlzLmNvbnRhaW5lci5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhcbiAgICAgICAgICAnYmx1ZWltcCBHYWxsZXJ5OiBXaWRnZXQgY29udGFpbmVyIG5vdCBmb3VuZC4nLFxuICAgICAgICAgIHRoaXMub3B0aW9ucy5jb250YWluZXJcbiAgICAgICAgKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRoaXMuc2xpZGVzQ29udGFpbmVyID0gdGhpcy5jb250YWluZXJcbiAgICAgICAgLmZpbmQodGhpcy5vcHRpb25zLnNsaWRlc0NvbnRhaW5lcilcbiAgICAgICAgLmZpcnN0KClcbiAgICAgIGlmICghdGhpcy5zbGlkZXNDb250YWluZXIubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coXG4gICAgICAgICAgJ2JsdWVpbXAgR2FsbGVyeTogU2xpZGVzIGNvbnRhaW5lciBub3QgZm91bmQuJyxcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc2xpZGVzQ29udGFpbmVyXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aGlzLnRpdGxlRWxlbWVudCA9IHRoaXMuY29udGFpbmVyLmZpbmQodGhpcy5vcHRpb25zLnRpdGxlRWxlbWVudCkuZmlyc3QoKVxuICAgICAgdGhpcy5wbGF5UGF1c2VFbGVtZW50ID0gdGhpcy5jb250YWluZXJcbiAgICAgICAgLmZpbmQoJy4nICsgdGhpcy5vcHRpb25zLnBsYXlQYXVzZUNsYXNzKVxuICAgICAgICAuZmlyc3QoKVxuICAgICAgaWYgKHRoaXMubnVtID09PSAxKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZENsYXNzKHRoaXMub3B0aW9ucy5zaW5nbGVDbGFzcylcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnN1cHBvcnQuc3ZnYXNpbWcpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2xhc3ModGhpcy5vcHRpb25zLnN2Z2FzaW1nQ2xhc3MpXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zdXBwb3J0LnNtaWwpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2xhc3ModGhpcy5vcHRpb25zLnNtaWxDbGFzcylcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMub25vcGVuKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5vbm9wZW4uY2FsbCh0aGlzKVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc3VwcG9ydC50cmFuc2l0aW9uICYmIHRoaXMub3B0aW9ucy5kaXNwbGF5VHJhbnNpdGlvbikge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5vbih0aGlzLnN1cHBvcnQudHJhbnNpdGlvbi5lbmQsIG9wZW5IYW5kbGVyKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5oYW5kbGVPcGVuKClcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuaGlkZVBhZ2VTY3JvbGxiYXJzKSB7XG4gICAgICAgIC8vIEhpZGUgdGhlIHBhZ2Ugc2Nyb2xsYmFyczpcbiAgICAgICAgdGhpcy5ib2R5T3ZlcmZsb3dTdHlsZSA9IGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXG4gICAgICB9XG4gICAgICB0aGlzLmNvbnRhaW5lclswXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgdGhpcy5pbml0U2xpZGVzKClcbiAgICAgIHRoaXMuY29udGFpbmVyLmFkZENsYXNzKHRoaXMub3B0aW9ucy5kaXNwbGF5Q2xhc3MpXG4gICAgfSxcblxuICAgIGluaXRPcHRpb25zOiBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgLy8gQ3JlYXRlIGEgY29weSBvZiB0aGUgcHJvdG90eXBlIG9wdGlvbnM6XG4gICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgdGhpcy5vcHRpb25zKVxuICAgICAgLy8gQ2hlY2sgaWYgY2Fyb3VzZWwgbW9kZSBpcyBlbmFibGVkOlxuICAgICAgaWYgKFxuICAgICAgICAob3B0aW9ucyAmJiBvcHRpb25zLmNhcm91c2VsKSB8fFxuICAgICAgICAodGhpcy5vcHRpb25zLmNhcm91c2VsICYmICghb3B0aW9ucyB8fCBvcHRpb25zLmNhcm91c2VsICE9PSBmYWxzZSkpXG4gICAgICApIHtcbiAgICAgICAgJC5leHRlbmQodGhpcy5vcHRpb25zLCB0aGlzLmNhcm91c2VsT3B0aW9ucylcbiAgICAgIH1cbiAgICAgIC8vIE92ZXJyaWRlIGFueSBnaXZlbiBvcHRpb25zOlxuICAgICAgJC5leHRlbmQodGhpcy5vcHRpb25zLCBvcHRpb25zKVxuICAgICAgaWYgKHRoaXMubnVtIDwgMykge1xuICAgICAgICAvLyAxIG9yIDIgc2xpZGVzIGNhbm5vdCBiZSBkaXNwbGF5ZWQgY29udGludW91cyxcbiAgICAgICAgLy8gcmVtZW1iZXIgdGhlIG9yaWdpbmFsIG9wdGlvbiBieSBzZXR0aW5nIHRvIG51bGwgaW5zdGVhZCBvZiBmYWxzZTpcbiAgICAgICAgdGhpcy5vcHRpb25zLmNvbnRpbnVvdXMgPSB0aGlzLm9wdGlvbnMuY29udGludW91cyA/IG51bGwgOiBmYWxzZVxuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLnN1cHBvcnQudHJhbnNpdGlvbikge1xuICAgICAgICB0aGlzLm9wdGlvbnMuZW11bGF0ZVRvdWNoRXZlbnRzID0gZmFsc2VcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZXZlbnQpIHtcbiAgICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdCh0aGlzLm9wdGlvbnMuZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBHYWxsZXJ5XG59KVxuIiwiLypcbiAqIGJsdWVpbXAgaGVscGVyIEpTXG4gKiBodHRwczovL2dpdGh1Yi5jb20vYmx1ZWltcC9HYWxsZXJ5XG4gKlxuICogQ29weXJpZ2h0IDIwMTMsIFNlYmFzdGlhbiBUc2NoYW5cbiAqIGh0dHBzOi8vYmx1ZWltcC5uZXRcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2U6XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cblxuOyhmdW5jdGlvbiAoKSB7XG4gICd1c2Ugc3RyaWN0J1xuXG4gIC8qKlxuICAgKiBPYmplY3QuYXNzaWduIHBvbHlmaWxsXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmoxIEZpcnN0IG9iamVjdFxuICAgKiBAcGFyYW0ge29iamVjdH0gb2JqMiBTZWNvbmQgb2JqZWN0XG4gICAqIEByZXR1cm5zIHtvYmplY3R9IE1lcmdlZCBvYmplY3RcbiAgICovXG4gIGZ1bmN0aW9uIGV4dGVuZChvYmoxLCBvYmoyKSB7XG4gICAgdmFyIHByb3BcbiAgICBmb3IgKHByb3AgaW4gb2JqMikge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmoyLCBwcm9wKSkge1xuICAgICAgICBvYmoxW3Byb3BdID0gb2JqMltwcm9wXVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqMVxuICB9XG4gIC8qKlxuICAgKiBIZWxwZXIgY29uc3RydWN0b3JcbiAgICpcbiAgICogQGNsYXNzXG4gICAqIEBwYXJhbSB7Kn0gcXVlcnkgalF1ZXJ5IHR5cGUgcXVlcnkgYXJndW1lbnRcbiAgICovXG4gIGZ1bmN0aW9uIEhlbHBlcihxdWVyeSkge1xuICAgIGlmICghdGhpcyB8fCB0aGlzLmZpbmQgIT09IEhlbHBlci5wcm90b3R5cGUuZmluZCkge1xuICAgICAgLy8gQ2FsbGVkIGFzIGZ1bmN0aW9uIGluc3RlYWQgb2YgYXMgY29uc3RydWN0b3IsXG4gICAgICAvLyBzbyB3ZSBzaW1wbHkgcmV0dXJuIGEgbmV3IGluc3RhbmNlOlxuICAgICAgcmV0dXJuIG5ldyBIZWxwZXIocXVlcnkpXG4gICAgfVxuICAgIHRoaXMubGVuZ3RoID0gMFxuICAgIGlmIChxdWVyeSkge1xuICAgICAgaWYgKHR5cGVvZiBxdWVyeSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcXVlcnkgPSB0aGlzLmZpbmQocXVlcnkpXG4gICAgICB9XG4gICAgICBpZiAocXVlcnkubm9kZVR5cGUgfHwgcXVlcnkgPT09IHF1ZXJ5LndpbmRvdykge1xuICAgICAgICAvLyBTaW5nbGUgSFRNTCBlbGVtZW50XG4gICAgICAgIHRoaXMubGVuZ3RoID0gMVxuICAgICAgICB0aGlzWzBdID0gcXVlcnlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEhUTUwgZWxlbWVudCBjb2xsZWN0aW9uXG4gICAgICAgIHZhciBpID0gcXVlcnkubGVuZ3RoXG4gICAgICAgIHRoaXMubGVuZ3RoID0gaVxuICAgICAgICB3aGlsZSAoaSkge1xuICAgICAgICAgIGkgLT0gMVxuICAgICAgICAgIHRoaXNbaV0gPSBxdWVyeVtpXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgSGVscGVyLmV4dGVuZCA9IGV4dGVuZFxuXG4gIEhlbHBlci5jb250YWlucyA9IGZ1bmN0aW9uIChjb250YWluZXIsIGVsZW1lbnQpIHtcbiAgICBkbyB7XG4gICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICBpZiAoZWxlbWVudCA9PT0gY29udGFpbmVyKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSB3aGlsZSAoZWxlbWVudClcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIEhlbHBlci5wYXJzZUpTT04gPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2Uoc3RyaW5nKVxuICB9XG5cbiAgZXh0ZW5kKEhlbHBlci5wcm90b3R5cGUsIHtcbiAgICBmaW5kOiBmdW5jdGlvbiAocXVlcnkpIHtcbiAgICAgIHZhciBjb250YWluZXIgPSB0aGlzWzBdIHx8IGRvY3VtZW50XG4gICAgICBpZiAodHlwZW9mIHF1ZXJ5ID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAoY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwpIHtcbiAgICAgICAgICBxdWVyeSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KVxuICAgICAgICB9IGVsc2UgaWYgKHF1ZXJ5LmNoYXJBdCgwKSA9PT0gJyMnKSB7XG4gICAgICAgICAgcXVlcnkgPSBjb250YWluZXIuZ2V0RWxlbWVudEJ5SWQocXVlcnkuc2xpY2UoMSkpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcXVlcnkgPSBjb250YWluZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUocXVlcnkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgSGVscGVyKHF1ZXJ5KVxuICAgIH0sXG5cbiAgICBoYXNDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgICAgaWYgKCF0aGlzWzBdKSByZXR1cm4gZmFsc2VcbiAgICAgIHJldHVybiBuZXcgUmVnRXhwKCcoPzpefFxcXFxzKyknICsgY2xhc3NOYW1lICsgJyg/OlxcXFxzK3wkKScpLnRlc3QoXG4gICAgICAgIHRoaXNbMF0uY2xhc3NOYW1lXG4gICAgICApXG4gICAgfSxcblxuICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICB2YXIgaSA9IHRoaXMubGVuZ3RoXG4gICAgICB2YXIgY2xhc3NOYW1lc1xuICAgICAgdmFyIGVsZW1lbnRcbiAgICAgIHZhciBqXG4gICAgICB3aGlsZSAoaSkge1xuICAgICAgICBpIC09IDFcbiAgICAgICAgZWxlbWVudCA9IHRoaXNbaV1cbiAgICAgICAgaWYgKCFlbGVtZW50LmNsYXNzTmFtZSkge1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNsYXNzTmFtZXMpIGNsYXNzTmFtZXMgPSBjbGFzc05hbWUuc3BsaXQoL1xccysvKVxuICAgICAgICBmb3IgKGogPSAwOyBqIDwgY2xhc3NOYW1lcy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgIGlmICh0aGlzLmhhc0NsYXNzKGNsYXNzTmFtZXNbal0pKSB7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSAnICcgKyBjbGFzc05hbWVzW2pdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcblxuICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICAvLyBNYXRjaCBhbnkgb2YgdGhlIGdpdmVuIGNsYXNzIG5hbWVzXG4gICAgICB2YXIgcmVnZXhwID0gbmV3IFJlZ0V4cCgnXig/OicgKyBjbGFzc05hbWUuc3BsaXQoL1xccysvKS5qb2luKCd8JykgKyAnKSQnKVxuICAgICAgLy8gTWF0Y2ggYW55IGNsYXNzIG5hbWVzIGFuZCB0aGVpciB0cmFpbGluZyB3aGl0ZXNwYWNlXG4gICAgICB2YXIgbWF0Y2hlciA9IC8oXFxTKykoPzpcXHMrfCQpL2dcbiAgICAgIHZhciByZXBsYWNlciA9IGZ1bmN0aW9uIChtYXRjaCwgY2xhc3NOYW1lKSB7XG4gICAgICAgIC8vIFJlcGxhY2UgY2xhc3MgbmFtZXMgdGhhdCBtYXRjaCB0aGUgZ2l2ZW4gb25lc1xuICAgICAgICByZXR1cm4gcmVnZXhwLnRlc3QoY2xhc3NOYW1lKSA/ICcnIDogbWF0Y2hcbiAgICAgIH1cbiAgICAgIHZhciB0cmltRW5kID0gL1xccyskL1xuICAgICAgdmFyIGkgPSB0aGlzLmxlbmd0aFxuICAgICAgdmFyIGVsZW1lbnRcbiAgICAgIHdoaWxlIChpKSB7XG4gICAgICAgIGkgLT0gMVxuICAgICAgICBlbGVtZW50ID0gdGhpc1tpXVxuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lXG4gICAgICAgICAgLnJlcGxhY2UobWF0Y2hlciwgcmVwbGFjZXIpXG4gICAgICAgICAgLnJlcGxhY2UodHJpbUVuZCwgJycpXG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG5cbiAgICBvbjogZnVuY3Rpb24gKGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICAgICAgdmFyIGV2ZW50TmFtZXMgPSBldmVudE5hbWUuc3BsaXQoL1xccysvKVxuICAgICAgdmFyIGlcbiAgICAgIHZhciBlbGVtZW50XG4gICAgICB3aGlsZSAoZXZlbnROYW1lcy5sZW5ndGgpIHtcbiAgICAgICAgZXZlbnROYW1lID0gZXZlbnROYW1lcy5zaGlmdCgpXG4gICAgICAgIGkgPSB0aGlzLmxlbmd0aFxuICAgICAgICB3aGlsZSAoaSkge1xuICAgICAgICAgIGkgLT0gMVxuICAgICAgICAgIGVsZW1lbnQgPSB0aGlzW2ldXG4gICAgICAgICAgaWYgKGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlciwgZmFsc2UpXG4gICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50LmF0dGFjaEV2ZW50KSB7XG4gICAgICAgICAgICBlbGVtZW50LmF0dGFjaEV2ZW50KCdvbicgKyBldmVudE5hbWUsIGhhbmRsZXIpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG5cbiAgICBvZmY6IGZ1bmN0aW9uIChldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgICAgIHZhciBldmVudE5hbWVzID0gZXZlbnROYW1lLnNwbGl0KC9cXHMrLylcbiAgICAgIHZhciBpXG4gICAgICB2YXIgZWxlbWVudFxuICAgICAgd2hpbGUgKGV2ZW50TmFtZXMubGVuZ3RoKSB7XG4gICAgICAgIGV2ZW50TmFtZSA9IGV2ZW50TmFtZXMuc2hpZnQoKVxuICAgICAgICBpID0gdGhpcy5sZW5ndGhcbiAgICAgICAgd2hpbGUgKGkpIHtcbiAgICAgICAgICBpIC09IDFcbiAgICAgICAgICBlbGVtZW50ID0gdGhpc1tpXVxuICAgICAgICAgIGlmIChlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIsIGZhbHNlKVxuICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5kZXRhY2hFdmVudCkge1xuICAgICAgICAgICAgZWxlbWVudC5kZXRhY2hFdmVudCgnb24nICsgZXZlbnROYW1lLCBoYW5kbGVyKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuXG4gICAgZW1wdHk6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpID0gdGhpcy5sZW5ndGhcbiAgICAgIHZhciBlbGVtZW50XG4gICAgICB3aGlsZSAoaSkge1xuICAgICAgICBpIC09IDFcbiAgICAgICAgZWxlbWVudCA9IHRoaXNbaV1cbiAgICAgICAgd2hpbGUgKGVsZW1lbnQuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50Lmxhc3RDaGlsZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuXG4gICAgZmlyc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBuZXcgSGVscGVyKHRoaXNbMF0pXG4gICAgfVxuICB9KVxuXG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIEhlbHBlclxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgd2luZG93LmJsdWVpbXAgPSB3aW5kb3cuYmx1ZWltcCB8fCB7fVxuICAgIHdpbmRvdy5ibHVlaW1wLmhlbHBlciA9IEhlbHBlclxuICB9XG59KSgpXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBleGlzdHMgKGRldmVsb3BtZW50IG9ubHkpXG5cdGlmIChfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQmx1ZWltcEdhbGxlcnkgZnJvbSBcImJsdWVpbXAtZ2FsbGVyeS9qcy9ibHVlaW1wLWdhbGxlcnkuanNcIjtcbmltcG9ydCBcImJsdWVpbXAtZ2FsbGVyeS9jc3MvYmx1ZWltcC1nYWxsZXJ5LmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbmFibGVHYWxsZXJ5KCkge1xuICAgIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJnYWxsZXJ5LWNsaWNrYWJsZVwiKTtcblxuICAgIEFycmF5LmZyb20oZWxlbWVudHMpLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgZXZlbnQgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnQ7XG4gICAgICAgICAgICB2YXIgbGluayA9IHRhcmdldC5zcmMgPyB0YXJnZXQucGFyZW50Tm9kZSA6IHRhcmdldDtcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0geyBpbmRleDogbGluaywgZXZlbnQ6IGV2ZW50IH07XG4gICAgICAgICAgICB2YXIgbGlua3MgPSB0aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BpY3R1cmUtbGluaycpO1xuICAgICAgICAgICAgbmV3IEJsdWVpbXBHYWxsZXJ5KGxpbmtzLCBvcHRpb25zKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZW5hYmxlR2FsbGVyeSgpO1xufSk7XG4iXSwibmFtZXMiOlsiQmx1ZWltcEdhbGxlcnkiLCJlbmFibGVHYWxsZXJ5IiwiZWxlbWVudHMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJBcnJheSIsImZyb20iLCJmb3JFYWNoIiwiZWxlbWVudCIsIm9uY2xpY2siLCJldmVudCIsIndpbmRvdyIsInRhcmdldCIsInNyY0VsZW1lbnQiLCJsaW5rIiwic3JjIiwicGFyZW50Tm9kZSIsIm9wdGlvbnMiLCJpbmRleCIsImxpbmtzIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9