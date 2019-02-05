/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// The entrance
window.zcapt = {
  start: function start(para) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
    window.zcapt.onverified = callback; // Nothing to do if no or lack of params

    if (para.id === undefined || para.conn === undefined) {
      return null;
    }

    if (para.id === null || para.conn === null) {
      return null;
    } // Start initialization


    __webpack_require__(/*! ./src/initialize/initialize */ "./src/initialize/initialize.js").init(para.id, para.conn);
  },
  // Model data storage
  data: __webpack_require__(/*! ./src/model/data */ "./src/model/data.js"),
  // API for getting the result of captcha.
  isVerified: function isVerified() {
    if (window.zcapt.data.result !== undefined) {
      return window.zcapt.data.result === 1;
    } else {
      return false;
    }
  }
};

/***/ }),

/***/ "./node_modules/js-base64/base64.js":
/*!******************************************!*\
  !*** ./node_modules/js-base64/base64.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 *  base64.js
 *
 *  Licensed under the BSD 3-Clause License.
 *    http://opensource.org/licenses/BSD-3-Clause
 *
 *  References:
 *    http://en.wikipedia.org/wiki/Base64
 */
;(function (global, factory) {
     true
        ? module.exports = factory(global)
        : undefined
}((
    typeof self !== 'undefined' ? self
        : typeof window !== 'undefined' ? window
        : typeof global !== 'undefined' ? global
: this
), function(global) {
    'use strict';
    // existing version for noConflict()
    var _Base64 = global.Base64;
    var version = "2.4.9";
    // if node.js and NOT React Native, we use Buffer
    var buffer;
    if (typeof module !== 'undefined' && module.exports) {
        try {
            buffer = eval("require('buffer').Buffer");
        } catch (err) {
            buffer = undefined;
        }
    }
    // constants
    var b64chars
        = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var b64tab = function(bin) {
        var t = {};
        for (var i = 0, l = bin.length; i < l; i++) t[bin.charAt(i)] = i;
        return t;
    }(b64chars);
    var fromCharCode = String.fromCharCode;
    // encoder stuff
    var cb_utob = function(c) {
        if (c.length < 2) {
            var cc = c.charCodeAt(0);
            return cc < 0x80 ? c
                : cc < 0x800 ? (fromCharCode(0xc0 | (cc >>> 6))
                                + fromCharCode(0x80 | (cc & 0x3f)))
                : (fromCharCode(0xe0 | ((cc >>> 12) & 0x0f))
                   + fromCharCode(0x80 | ((cc >>>  6) & 0x3f))
                   + fromCharCode(0x80 | ( cc         & 0x3f)));
        } else {
            var cc = 0x10000
                + (c.charCodeAt(0) - 0xD800) * 0x400
                + (c.charCodeAt(1) - 0xDC00);
            return (fromCharCode(0xf0 | ((cc >>> 18) & 0x07))
                    + fromCharCode(0x80 | ((cc >>> 12) & 0x3f))
                    + fromCharCode(0x80 | ((cc >>>  6) & 0x3f))
                    + fromCharCode(0x80 | ( cc         & 0x3f)));
        }
    };
    var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
    var utob = function(u) {
        return u.replace(re_utob, cb_utob);
    };
    var cb_encode = function(ccc) {
        var padlen = [0, 2, 1][ccc.length % 3],
        ord = ccc.charCodeAt(0) << 16
            | ((ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8)
            | ((ccc.length > 2 ? ccc.charCodeAt(2) : 0)),
        chars = [
            b64chars.charAt( ord >>> 18),
            b64chars.charAt((ord >>> 12) & 63),
            padlen >= 2 ? '=' : b64chars.charAt((ord >>> 6) & 63),
            padlen >= 1 ? '=' : b64chars.charAt(ord & 63)
        ];
        return chars.join('');
    };
    var btoa = global.btoa ? function(b) {
        return global.btoa(b);
    } : function(b) {
        return b.replace(/[\s\S]{1,3}/g, cb_encode);
    };
    var _encode = buffer ?
        buffer.from && Uint8Array && buffer.from !== Uint8Array.from
        ? function (u) {
            return (u.constructor === buffer.constructor ? u : buffer.from(u))
                .toString('base64')
        }
        :  function (u) {
            return (u.constructor === buffer.constructor ? u : new  buffer(u))
                .toString('base64')
        }
        : function (u) { return btoa(utob(u)) }
    ;
    var encode = function(u, urisafe) {
        return !urisafe
            ? _encode(String(u))
            : _encode(String(u)).replace(/[+\/]/g, function(m0) {
                return m0 == '+' ? '-' : '_';
            }).replace(/=/g, '');
    };
    var encodeURI = function(u) { return encode(u, true) };
    // decoder stuff
    var re_btou = new RegExp([
        '[\xC0-\xDF][\x80-\xBF]',
        '[\xE0-\xEF][\x80-\xBF]{2}',
        '[\xF0-\xF7][\x80-\xBF]{3}'
    ].join('|'), 'g');
    var cb_btou = function(cccc) {
        switch(cccc.length) {
        case 4:
            var cp = ((0x07 & cccc.charCodeAt(0)) << 18)
                |    ((0x3f & cccc.charCodeAt(1)) << 12)
                |    ((0x3f & cccc.charCodeAt(2)) <<  6)
                |     (0x3f & cccc.charCodeAt(3)),
            offset = cp - 0x10000;
            return (fromCharCode((offset  >>> 10) + 0xD800)
                    + fromCharCode((offset & 0x3FF) + 0xDC00));
        case 3:
            return fromCharCode(
                ((0x0f & cccc.charCodeAt(0)) << 12)
                    | ((0x3f & cccc.charCodeAt(1)) << 6)
                    |  (0x3f & cccc.charCodeAt(2))
            );
        default:
            return  fromCharCode(
                ((0x1f & cccc.charCodeAt(0)) << 6)
                    |  (0x3f & cccc.charCodeAt(1))
            );
        }
    };
    var btou = function(b) {
        return b.replace(re_btou, cb_btou);
    };
    var cb_decode = function(cccc) {
        var len = cccc.length,
        padlen = len % 4,
        n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0)
            | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0)
            | (len > 2 ? b64tab[cccc.charAt(2)] <<  6 : 0)
            | (len > 3 ? b64tab[cccc.charAt(3)]       : 0),
        chars = [
            fromCharCode( n >>> 16),
            fromCharCode((n >>>  8) & 0xff),
            fromCharCode( n         & 0xff)
        ];
        chars.length -= [0, 0, 2, 1][padlen];
        return chars.join('');
    };
    var atob = global.atob ? function(a) {
        return global.atob(a);
    } : function(a){
        return a.replace(/[\s\S]{1,4}/g, cb_decode);
    };
    var _decode = buffer ?
        buffer.from && Uint8Array && buffer.from !== Uint8Array.from
        ? function(a) {
            return (a.constructor === buffer.constructor
                    ? a : buffer.from(a, 'base64')).toString();
        }
        : function(a) {
            return (a.constructor === buffer.constructor
                    ? a : new buffer(a, 'base64')).toString();
        }
        : function(a) { return btou(atob(a)) };
    var decode = function(a){
        return _decode(
            String(a).replace(/[-_]/g, function(m0) { return m0 == '-' ? '+' : '/' })
                .replace(/[^A-Za-z0-9\+\/]/g, '')
        );
    };
    var noConflict = function() {
        var Base64 = global.Base64;
        global.Base64 = _Base64;
        return Base64;
    };
    // export Base64
    global.Base64 = {
        VERSION: version,
        atob: atob,
        btoa: btoa,
        fromBase64: decode,
        toBase64: encode,
        utob: utob,
        encode: encode,
        encodeURI: encodeURI,
        btou: btou,
        decode: decode,
        noConflict: noConflict,
        __buffer__: buffer
    };
    // if ES5 is available, make Base64.extendString() available
    if (typeof Object.defineProperty === 'function') {
        var noEnum = function(v){
            return {value:v,enumerable:false,writable:true,configurable:true};
        };
        global.Base64.extendString = function () {
            Object.defineProperty(
                String.prototype, 'fromBase64', noEnum(function () {
                    return decode(this)
                }));
            Object.defineProperty(
                String.prototype, 'toBase64', noEnum(function (urisafe) {
                    return encode(this, urisafe)
                }));
            Object.defineProperty(
                String.prototype, 'toBase64URI', noEnum(function () {
                    return encode(this, true)
                }));
        };
    }
    //
    // export Base64 to the namespace
    //
    if (global['Meteor']) { // Meteor.js
        Base64 = global.Base64;
    }
    // module.exports and AMD are mutually exclusive.
    // module.exports has precedence.
    if (typeof module !== 'undefined' && module.exports) {
        module.exports.Base64 = global.Base64;
    }
    else if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){ return global.Base64 }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
    // that's it!
    return {Base64: global.Base64}
}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/initialize/buildCaptchaInPage.js":
/*!**********************************************!*\
  !*** ./src/initialize/buildCaptchaInPage.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.building = function () {
  var rebuild = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  /*
  * Method for building the captcha in DOM
  * */
  var smallPictureLink = window.zcapt.data.smallPicture + "?authID=" + window.zcapt.data.authID;
  var largePictureLink = window.zcapt.data.largePicture + "?authID=" + window.zcapt.data.authID;

  if (rebuild) {
    __webpack_require__(/*! ../view/renewImage */ "./src/view/renewImage.js").rebuild(smallPictureLink, largePictureLink, function () {
      // Start mouse tracking
      __webpack_require__(/*! ../movement_tracing/mouseTracing */ "./src/movement_tracing/mouseTracing.js").startMouseMonitor("zcapt-smallPic", "zcapt-largePic");
    });
  } else {
    // Add elements to DOM
    __webpack_require__(/*! ../view/initialize */ "./src/view/initialize.js").buildCaptcha(smallPictureLink, largePictureLink, function () {
      // Start mouse tracking
      __webpack_require__(/*! ../movement_tracing/mouseTracing */ "./src/movement_tracing/mouseTracing.js").startMouseMonitor("zcapt-smallPic", "zcapt-largePic");
    });
  }
};

/***/ }),

/***/ "./src/initialize/initialize.js":
/*!**************************************!*\
  !*** ./src/initialize/initialize.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Base64 = __webpack_require__(/*! js-base64 */ "./node_modules/js-base64/base64.js").Base64;

exports.init = function (id, conn) {
  /**
   * Method for initialize the captcha
   * @para id element's id where the captcha would be made.
   * @para conn connection code from server side.
   * @para size the width of the captcha that would be created.
   * no callback function
   */
  __webpack_require__(/*! ../view/initialize */ "./src/view/initialize.js").buildFrame(id); // Start Loading
  // Parse the links


  try {
    var links = JSON.parse(Base64.decode(conn)); // Assign all the links to model data

    window.zcapt.data.conn = conn;
    window.zcapt.data.initialize = links.init;
    window.zcapt.data.largePicture = links.large;
    window.zcapt.data.smallPicture = links.small;
    window.zcapt.data.verify = links.veri;
    window.zcapt.data.id = id;
    window.zcapt.data.result = 0;
  } catch (e) {
    // If error in "conn" parameter
    console.log("Conn is incorrect");
    return null;
  } // Requesting to server to get authID


  __webpack_require__(/*! ../request/initialize */ "./src/request/initialize.js").init(window.zcapt.data.initialize, function (authID) {
    if (authID === null) {
      console.log("Error when requesting to server");
      return null;
    } else {
      window.zcapt.data.authID = authID; // Start to building the captcha

      __webpack_require__(/*! ./buildCaptchaInPage */ "./src/initialize/buildCaptchaInPage.js").building();
    }
  });
};

/***/ }),

/***/ "./src/initialize/reinitialize.js":
/*!****************************************!*\
  !*** ./src/initialize/reinitialize.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.renewCaptcha = function () {
  // Requesting to server to get a new authID
  __webpack_require__(/*! ../request/initialize */ "./src/request/initialize.js").init(window.zcapt.data.initialize, function (authID) {
    if (authID === null) {
      console.log("Error when requesting to server");
      return null;
    } else {
      window.zcapt.data.authID = authID; // Start to building the captcha

      __webpack_require__(/*! ./buildCaptchaInPage */ "./src/initialize/buildCaptchaInPage.js").building(true);
    }
  });
};

/***/ }),

/***/ "./src/model/data.js":
/*!***************************!*\
  !*** ./src/model/data.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Those are the data that would store in font end
// Initialize Link
exports.initialize = ""; // Link for large picture

exports.largePicture = ""; // Link for small picture

exports.smallPicture = ""; // Link for verification

exports.verify = ""; // Link for element's id that the zcapt would be created

exports.id = ""; // Verification ID

exports.authID = ""; // Small picture initial position in X

exports.smallPictureInitialPositionX = 0; // Small picture initial position in Y

exports.smallPictureInitialPositionY = 0; // verified?

exports.isVerified = false;

/***/ }),

/***/ "./src/movement_tracing/elementDistanceToScreen.js":
/*!*********************************************************!*\
  !*** ./src/movement_tracing/elementDistanceToScreen.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.distance = function (element) {
  /*
  * Get the element's current distance between the border of element to the border of screen.
  * @param picture is the element which you wana to get the distance between the element's border and the screen's border.
  * @return The function would return an object with top, left, right, bottom
  * */
  var pictureTop = element.getBoundingClientRect().top;
  var pictureLeft = element.getBoundingClientRect().left;
  var pictureRight = pictureLeft + element.offsetWidth;
  var pictureBottom = pictureTop + element.offsetHeight;
  return {
    top: pictureTop,
    left: pictureLeft,
    right: pictureRight,
    bottom: pictureBottom
  };
};

/***/ }),

/***/ "./src/movement_tracing/fingerTracing.js":
/*!***********************************************!*\
  !*** ./src/movement_tracing/fingerTracing.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.startFingerMonitor = function (smallPictureID, largePictureID) {
  /*
  * Method for finger touchpoint monitor
  * @param smallPictureID Small picture's element ID
  * @param largePictureID Large picture's element ID
  * */
  var smallPic = document.getElementById(smallPictureID);
  var largePic = document.getElementById(largePictureID); // While the user touch on small picture

  smallPic.ontouchstart = function (ontouchdownEvent) {
    // // While the finger is touching on the screen, preventDefault would disable scrolling.
    ontouchdownEvent.preventDefault(); // Get the initial position of small picture

    window.zcapt.data.smallPictureInitialPositionX = smallPic.offsetLeft;
    window.zcapt.data.smallPictureInitialPositionY = smallPic.offsetTop; // Get the position of finger inside the small picture

    var distanceXFromCentralMouseToSmallPictureBorder = ontouchdownEvent.touches[0].clientX - smallPic.offsetLeft;
    var distanceYFromCentralMouseToSmallPictureBorder = ontouchdownEvent.touches[0].clientY - smallPic.offsetTop; // While the user touch on the small picture and move the mouse

    document.ontouchmove = function (ontouchmove) {
      smallPic.style.top = ontouchmove.touches[0].clientY - distanceYFromCentralMouseToSmallPictureBorder + "px";
      smallPic.style.left = ontouchmove.touches[0].clientX - distanceXFromCentralMouseToSmallPictureBorder + "px";
    }; // While the user release the mouse.


    document.ontouchend = function (onTouchEndEvent) {
      // Stop moving
      document.ontouchmove = null;

      var largePictureDistanceToScreen = __webpack_require__(/*! ./elementDistanceToScreen */ "./src/movement_tracing/elementDistanceToScreen.js").distance(largePic); // Get coordinate of small picture inside of large picture


      var xCoordinate = Math.round((smallPic.offsetLeft - largePic.offsetLeft) * 300 / largePic.offsetWidth);
      var yCoordinate = Math.round((smallPic.offsetTop - largePic.offsetTop) * 200 / largePic.offsetHeight);

      if (onTouchEndEvent.changedTouches[0].clientY > largePictureDistanceToScreen.top && onTouchEndEvent.changedTouches[0].clientY < largePictureDistanceToScreen.bottom && onTouchEndEvent.changedTouches[0].clientX > largePictureDistanceToScreen.left && onTouchEndEvent.changedTouches[0].clientX < largePictureDistanceToScreen.right) {
        __webpack_require__(/*! ../view/loading */ "./src/view/loading.js").loading.start();

        smallPic.ontouchstart = null;

        __webpack_require__(/*! ../request/verify */ "./src/request/verify.js").verify(window.zcapt.data.verify, window.zcapt.data.authID, xCoordinate, yCoordinate, function (verifyResult) {
          if (verifyResult) {
            window.zcapt.data.result = 1;

            __webpack_require__(/*! ../view/verified */ "./src/view/verified.js").verified();
          } else {
            __webpack_require__(/*! ../view/elementMove */ "./src/view/elementMove.js").move(smallPic, window.zcapt.data.smallPictureInitialPositionX, window.zcapt.data.smallPictureInitialPositionY);

            __webpack_require__(/*! ../view/rebuilt */ "./src/view/rebuilt.js").captcha();
          }
        });
      } else {
        __webpack_require__(/*! ../view/elementMove */ "./src/view/elementMove.js").move(smallPic, window.zcapt.data.smallPictureInitialPositionX, window.zcapt.data.smallPictureInitialPositionY);
      }
    };
  };
};

/***/ }),

/***/ "./src/movement_tracing/mouseTracing.js":
/*!**********************************************!*\
  !*** ./src/movement_tracing/mouseTracing.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.startMouseMonitor = function (smallPictureID, largePictureID) {
  /*
  * Method for mouse monitor
  * @param smallPictureID Small picture's element ID
  * @param largePictureID Large picture's element ID
  * */
  // Start Finger touch monitor
  __webpack_require__(/*! ./fingerTracing */ "./src/movement_tracing/fingerTracing.js").startFingerMonitor(smallPictureID, largePictureID);

  var smallPic = document.getElementById(smallPictureID);
  var largePic = document.getElementById(largePictureID); // While the user click on small picture

  smallPic.onmousedown = function (onmouseDownEvent) {
    // Get the initial position of small picture
    window.zcapt.data.smallPictureInitialPositionX = smallPic.offsetLeft;
    window.zcapt.data.smallPictureInitialPositionY = smallPic.offsetTop; // Get the position of mouse inside the small picture

    var distanceXFromCentralMouseToSmallPictureBorder = onmouseDownEvent.clientX - smallPic.offsetLeft;
    var distanceYFromCentralMouseToSmallPictureBorder = onmouseDownEvent.clientY - smallPic.offsetTop; // While the user click on the small picture and move the mouse

    document.onmousemove = function (onmouseMoveEvent) {
      smallPic.style.top = onmouseMoveEvent.clientY - distanceYFromCentralMouseToSmallPictureBorder + "px";
      smallPic.style.left = onmouseMoveEvent.clientX - distanceXFromCentralMouseToSmallPictureBorder + "px";
    }; // While the user release the mouse·


    document.onmouseup = function (onmouseUpEvent) {
      // Stop moving
      document.onmousemove = null;

      var largePictureDistanceToScreen = __webpack_require__(/*! ./elementDistanceToScreen */ "./src/movement_tracing/elementDistanceToScreen.js").distance(largePic); // Get coordinate of small picture inside of large picture


      var xCoordinate = Math.round((smallPic.offsetLeft - largePic.offsetLeft) * 300 / largePic.offsetWidth);
      var yCoordinate = Math.round((smallPic.offsetTop - largePic.offsetTop) * 200 / largePic.offsetHeight);

      if (onmouseUpEvent.clientY > largePictureDistanceToScreen.top && onmouseUpEvent.clientY < largePictureDistanceToScreen.bottom && onmouseUpEvent.clientX > largePictureDistanceToScreen.left && onmouseUpEvent.clientX < largePictureDistanceToScreen.right) {
        __webpack_require__(/*! ../view/loading */ "./src/view/loading.js").loading.start();

        smallPic.onmousedown = null;

        __webpack_require__(/*! ../request/verify */ "./src/request/verify.js").verify(window.zcapt.data.verify, window.zcapt.data.authID, xCoordinate, yCoordinate, function (verifyResult) {
          if (verifyResult) {
            window.zcapt.data.result = 1;

            __webpack_require__(/*! ../view/verified */ "./src/view/verified.js").verified();
          } else {
            __webpack_require__(/*! ../view/elementMove */ "./src/view/elementMove.js").move(smallPic, window.zcapt.data.smallPictureInitialPositionX, window.zcapt.data.smallPictureInitialPositionY);

            __webpack_require__(/*! ../view/rebuilt */ "./src/view/rebuilt.js").captcha();
          }
        });
      } else {
        __webpack_require__(/*! ../view/elementMove */ "./src/view/elementMove.js").move(smallPic, window.zcapt.data.smallPictureInitialPositionX, window.zcapt.data.smallPictureInitialPositionY);
      }
    };
  };
};

/***/ }),

/***/ "./src/request/initialize.js":
/*!***********************************!*\
  !*** ./src/request/initialize.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
* method init
* @usage initialize the captcha by sending Get request to server side.
* @para iniLink server side initialize link
* @First parameter of callback function is the authID. If error, the parameter would be null
* */
exports.init = function (initLink, callback) {
  var req = new XMLHttpRequest();
  req.open("GET", initLink, true);
  req.send();
  req.addEventListener("load", function () {
    if (req.status !== 200) {
      callback(null);
    } else {
      var response = null;

      try {
        response = JSON.parse(req.responseText);
      } catch (e) {
        callback(null);
      }

      if (response.status === undefined) {
        callback(null);
      } else if (response.status != 0) {
        callback(null);
      } else {
        // Normal
        callback(response.authID);
      }
    }
  });
};

/***/ }),

/***/ "./src/request/verify.js":
/*!*******************************!*\
  !*** ./src/request/verify.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.verify = function (url, authID, x, y, callback) {
  /**
   * Function for verify the coordinate
   * @param url requesting URL for verify
   * @param authID the authID of captcha.
   * @param x & y the x and y coordinate of small image in large picture
   * @callback callback function
   * The first parameter in callback function equals true if verified.
   * Equals false if verified failure.
   */
  var request = new XMLHttpRequest();
  var requestURL = url + "?authID=" + authID + "&x=" + x + "&y=" + y;
  request.open("GET", requestURL, true);
  request.send();
  request.addEventListener("load", function () {
    if (request.status !== 200) {
      callback(false);
    } else {
      var result = false;

      try {
        result = JSON.parse(request.responseText).status;
      } catch (e) {
        callback(false);
      }

      if (result != 0) {
        callback(false);
      } else {
        callback(true);
      }
    }
  });
};

/***/ }),

/***/ "./src/view/appearAndDisappear.js":
/*!****************************************!*\
  !*** ./src/view/appearAndDisappear.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.disappear = function (element) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  /**
   * Function to make things disappear gently
   * @param element DOM element which is going to be deleted.
   */
  // Make sure that the element does have appearing animation
  if (element.classList.contains("zcapt-appear")) {
    element.addEventListener("animationend", startDisappear());
  } else {
    startDisappear();
  } // Sub function for disappearing


  function startDisappear() {
    element.classList.add("zcapt-disappear");
    element.addEventListener("animationend", function () {
      element.parentNode.removeChild(element);
      callback();
    });
  }
};

exports.appear = function (element) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  /**
   * Function to make transparent things appear on page gently
   * @param element DOM element which is going to be appeared on page.
   */
  // Make sure that the element does have appearing animation
  if (element.classList.contains("zcapt-disappear")) {
    callback();
  } else {
    element.classList.add("zcapt-appear");
    element.addEventListener("animationend", function () {
      element.classList.remove("zcapt-appear");
      callback();
    });
  }
};

/***/ }),

/***/ "./src/view/elementMove.js":
/*!*********************************!*\
  !*** ./src/view/elementMove.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.move = function (element, moveToX, moveToY) {
  /*
  * Method for moving the element in deceleration mode
  * */
  var startX = element.offsetLeft;
  var startY = element.offsetTop;
  var deltaX = 0;
  var deltaY = 0; // Verify which direction should the element move to.

  if (startX < moveToX) {
    // Move to the right
    deltaX = moveToX - startX;

    var moveElementRight = function moveElementRight() {
      element.style.left = element.offsetLeft + deltaX / 5 + "px";
      deltaX = deltaX - deltaX / 5;

      if (deltaX > 0) {
        window.requestAnimationFrame(moveElementRight);
      }
    };

    window.requestAnimationFrame(moveElementRight);
  } else {
    // Move to the left
    deltaX = startX - moveToX;

    var moveElementLeft = function moveElementLeft() {
      element.style.left = element.offsetLeft - deltaX / 5 + "px";
      deltaX = deltaX - deltaX / 5;

      if (deltaX > 0) {
        window.requestAnimationFrame(moveElementLeft);
      }
    };

    window.requestAnimationFrame(moveElementLeft);
  }

  if (startY < moveToY) {
    // Move down
    deltaY = moveToY - startY;

    var moveElementDown = function moveElementDown() {
      element.style.top = element.offsetTop + deltaY / 5 + "px";
      deltaY = deltaY - deltaY / 5;

      if (deltaY > 0) {
        window.requestAnimationFrame(moveElementDown);
      }
    };

    window.requestAnimationFrame(moveElementDown);
  } else {
    // Move up
    deltaY = startY - moveToY;

    var moveElementUp = function moveElementUp() {
      element.style.top = element.offsetTop - deltaY / 5 + "px";
      deltaY = deltaY - deltaY / 5;

      if (deltaY > 0) {
        window.requestAnimationFrame(moveElementUp);
      }
    };

    window.requestAnimationFrame(moveElementUp);
  }
};

/***/ }),

/***/ "./src/view/initialize.js":
/*!********************************!*\
  !*** ./src/view/initialize.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.buildFrame = function (boxid) {
  // Create frame
  var outer = document.createElement("div");
  outer.classList.add('zcapt-frame');
  outer.id = "zcapt-frame";
  outer.setAttribute("unselectable", "on");

  outer.onselectstart = function () {
    return false;
  };

  document.getElementById(boxid).appendChild(outer); // Create Loading Layer

  __webpack_require__(/*! ./loading */ "./src/view/loading.js").loading.start();
};

exports.buildCaptcha = function (smallPicUrl, largePicUrl) {
  var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

  /*
  * method for building the basic framework of captcha (Create the document)
  * */
  var appearAndDisappear = __webpack_require__(/*! ./appearAndDisappear */ "./src/view/appearAndDisappear.js"); // Number of pictures are loaded


  var numberOfLoaded = 0; // Create small picture

  var smallPicture = new Image();
  smallPicture.classList.add('zcapt-smallPic');
  appearAndDisappear.appear(smallPicture);
  smallPicture.id = "zcapt-smallPic";
  smallPicture.draggable = false;
  smallPicture.src = smallPicUrl;
  smallPicture.setAttribute("unselectable", "on");
  smallPicture.onload = loadedCheck; // Large PIcture

  var largePicture = new Image();
  largePicture.classList.add('zcapt-largePic');
  appearAndDisappear.appear(largePicture);
  largePicture.draggable = false;
  largePicture.id = "zcapt-largePic";
  largePicture.setAttribute("unselectable", "on");
  largePicture.src = largePicUrl;
  largePicture.onload = loadedCheck; // Refrash Tag

  var refreshTag = "<path class=\"zcapt-refresh-fill\" d=\"M427.408,19.697c-7.803-3.23-14.463-1.902-19.986,3.999l-37.116,36.834C349.94,41.305,326.672,26.412,300.5,15.848C274.328,5.285,247.251,0.003,219.271,0.003c-29.692,0-58.052,5.808-85.08,17.417c-27.03,11.61-50.347,27.215-69.951,46.82c-19.605,19.607-35.214,42.921-46.824,69.949C5.807,161.219,0,189.575,0,219.271c0,29.687,5.807,58.05,17.417,85.079c11.613,27.031,27.218,50.347,46.824,69.952c19.604,19.599,42.921,35.207,69.951,46.818c27.028,11.611,55.388,17.419,85.08,17.419c32.736,0,63.865-6.899,93.363-20.7c29.5-13.795,54.625-33.26,75.377-58.386c1.52-1.903,2.234-4.045,2.136-6.424c-0.089-2.378-0.999-4.329-2.711-5.852l-39.108-39.399c-2.101-1.711-4.473-2.566-7.139-2.566c-3.045,0.38-5.232,1.526-6.566,3.429c-13.895,18.086-30.93,32.072-51.107,41.977c-20.173,9.894-41.586,14.839-64.237,14.839c-19.792,0-38.684-3.854-56.671-11.564c-17.989-7.706-33.551-18.127-46.682-31.261c-13.13-13.135-23.551-28.691-31.261-46.682c-7.708-17.987-11.563-36.874-11.563-56.671c0-19.795,3.858-38.691,11.563-56.674c7.707-17.985,18.127-33.547,31.261-46.678c13.135-13.134,28.693-23.555,46.682-31.265c17.983-7.707,36.879-11.563,56.671-11.563c38.259,0,71.475,13.039,99.646,39.116l-39.409,39.394c-5.903,5.711-7.231,12.279-4.001,19.701c3.241,7.614,8.856,11.42,16.854,11.42h127.906c4.949,0,9.23-1.807,12.848-5.424c3.613-3.616,5.42-7.898,5.42-12.847V36.55C438.542,28.558,434.84,22.943,427.408,19.697z\"/>";
  var refreshImg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  refreshImg.id = "zcapt-refresh";
  appearAndDisappear.appear(refreshImg);
  refreshImg.setAttribute("viewBox", "0 0 438.542 438.542");
  refreshImg.setAttribute("xml:space", "preserve");
  refreshImg.innerHTML = refreshTag;

  refreshImg.onclick = function () {
    __webpack_require__(/*! ./rebuilt */ "./src/view/rebuilt.js").everything();
  }; // Append them to fragment


  var fragment = document.createDocumentFragment();
  fragment.appendChild(smallPicture);
  fragment.appendChild(largePicture);
  fragment.appendChild(refreshImg); // Function for loading check.

  function loadedCheck() {
    if (numberOfLoaded === 0) {
      // If non of the picture has already loaded.
      numberOfLoaded++;
    } else {
      // If one of the picture has already loaded,
      // render them
      __webpack_require__(/*! ./loading */ "./src/view/loading.js").loading.end(function () {
        // Stop loading
        document.getElementById("zcapt-frame").appendChild(fragment);
        callback(null);
      });
    }
  }
};

/***/ }),

/***/ "./src/view/loading.js":
/*!*****************************!*\
  !*** ./src/view/loading.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var appearAndDisappear = __webpack_require__(/*! ./appearAndDisappear */ "./src/view/appearAndDisappear.js");

exports.loading = {
  start: function start() {
    var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
    // Create Loading Layer
    var loadingLayer = document.createElement("div");
    loadingLayer.id = "zcapt-loadingLayer";
    loadingLayer.className = "zcapt-loading";
    loadingLayer.innerHTML = "<div></div><div></div>";
    appearAndDisappear.appear(loadingLayer, callback);
    document.getElementById("zcapt-frame").appendChild(loadingLayer);
    setTimeout(function () {
      // Loading Time out
      // Make a large refresh icon
      var refreshIcon = "<path class=\"zcapt-largeRefresh-fill\" d=\"M427.408,19.697c-7.803-3.23-14.463-1.902-19.986,3.999l-37.116,36.834C349.94,41.305,326.672,26.412,300.5,15.848C274.328,5.285,247.251,0.003,219.271,0.003c-29.692,0-58.052,5.808-85.08,17.417c-27.03,11.61-50.347,27.215-69.951,46.82c-19.605,19.607-35.214,42.921-46.824,69.949C5.807,161.219,0,189.575,0,219.271c0,29.687,5.807,58.05,17.417,85.079c11.613,27.031,27.218,50.347,46.824,69.952c19.604,19.599,42.921,35.207,69.951,46.818c27.028,11.611,55.388,17.419,85.08,17.419c32.736,0,63.865-6.899,93.363-20.7c29.5-13.795,54.625-33.26,75.377-58.386c1.52-1.903,2.234-4.045,2.136-6.424c-0.089-2.378-0.999-4.329-2.711-5.852l-39.108-39.399c-2.101-1.711-4.473-2.566-7.139-2.566c-3.045,0.38-5.232,1.526-6.566,3.429c-13.895,18.086-30.93,32.072-51.107,41.977c-20.173,9.894-41.586,14.839-64.237,14.839c-19.792,0-38.684-3.854-56.671-11.564c-17.989-7.706-33.551-18.127-46.682-31.261c-13.13-13.135-23.551-28.691-31.261-46.682c-7.708-17.987-11.563-36.874-11.563-56.671c0-19.795,3.858-38.691,11.563-56.674c7.707-17.985,18.127-33.547,31.261-46.678c13.135-13.134,28.693-23.555,46.682-31.265c17.983-7.707,36.879-11.563,56.671-11.563c38.259,0,71.475,13.039,99.646,39.116l-39.409,39.394c-5.903,5.711-7.231,12.279-4.001,19.701c3.241,7.614,8.856,11.42,16.854,11.42h127.906c4.949,0,9.23-1.807,12.848-5.424c3.613-3.616,5.42-7.898,5.42-12.847V36.55C438.542,28.558,434.84,22.943,427.408,19.697z\"/>";
      var refreshImg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      refreshImg.id = "zcapt-largeRefresh";
      refreshImg.innerHTML = refreshIcon;
      refreshImg.setAttribute("viewBox", "0 0 438.542 438.542");
      refreshImg.setAttribute("xml:space", "preserve");

      refreshImg.onclick = function () {
        __webpack_require__(/*! ./rebuilt */ "./src/view/rebuilt.js").everything();
      }; // Replace the loading animation by a large refresh icon.


      loadingLayer.innerHTML = "";
      loadingLayer.appendChild(refreshImg);
      loadingLayer.classList.remove("zcapt-loading");
      loadingLayer.classList.add("zcapt-largeRefresh");
    }, 20000);
  },
  end: function end() {
    var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
    // Remove Loading Layer
    appearAndDisappear.disappear(document.getElementById("zcapt-loadingLayer"), callback);
  }
};

/***/ }),

/***/ "./src/view/rebuilt.js":
/*!*****************************!*\
  !*** ./src/view/rebuilt.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var animation = __webpack_require__(/*! ./appearAndDisappear */ "./src/view/appearAndDisappear.js");

exports.everything = function () {
  /**
   * Function for remove everythings about zcapt, and recreate it.
   */
  animation.disappear(document.getElementById("zcapt-frame"), function () {
    __webpack_require__(/*! ../initialize/initialize */ "./src/initialize/initialize.js").init(window.zcapt.data.id, window.zcapt.data.conn, window.zcapt.data.size);
  });
};

exports.captcha = function () {
  /**
   * Function for create a new captcha, and put new picture on the clients side.
   */
  __webpack_require__(/*! ../initialize/reinitialize */ "./src/initialize/reinitialize.js").renewCaptcha();
};

/***/ }),

/***/ "./src/view/renewImage.js":
/*!********************************!*\
  !*** ./src/view/renewImage.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.rebuild = function (smallPictureLink, largePictureLink) {
  var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

  /**
   * Rebuilt picture in view. Replace the old pictures by new one.
   */
  var numberOfLoaded = 0; // Create small picture

  var smallPicture = new Image();
  smallPicture.classList.add('zcapt-smallPic');
  smallPicture.id = "zcapt-smallPic";
  smallPicture.draggable = false;
  smallPicture.src = smallPictureLink;
  smallPicture.setAttribute("unselectable", "on");
  smallPicture.onload = loadedCheck; // Large PIcture

  var largePicture = new Image();
  largePicture.classList.add('zcapt-largePic');
  largePicture.draggable = false;
  largePicture.id = "zcapt-largePic";
  largePicture.setAttribute("unselectable", "on");
  largePicture.src = largePictureLink;
  largePicture.onload = loadedCheck;
  var fragment = document.createDocumentFragment();
  fragment.appendChild(smallPicture);
  fragment.appendChild(largePicture); // Function for loading check.

  function loadedCheck() {
    if (numberOfLoaded === 0) {
      // If non of the picture has already loaded.
      numberOfLoaded++;
    } else {
      // If one of the picture has already loaded,
      // render them
      var frame = document.getElementById("zcapt-frame");
      frame.removeChild(document.getElementById("zcapt-largePic"));
      frame.removeChild(document.getElementById("zcapt-smallPic"));
      frame.appendChild(fragment);

      __webpack_require__(/*! ./loading */ "./src/view/loading.js").loading.end(function () {
        callback(null);
      });
    }
  }
};

/***/ }),

/***/ "./src/view/verified.js":
/*!******************************!*\
  !*** ./src/view/verified.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.verified = function () {
  /**
   * For changing the view while captcha is verified.
   * @type {HTMLElement}
   */
  var frame = document.getElementById("zcapt-frame");
  var verifiedLayer = document.createElement("div");
  verifiedLayer.id = "zcapt-verified";
  verifiedLayer.classList.add("zcapt-verified"); // Creating SVG icon.
  // Tick icon

  var verifiedIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  verifiedIcon.innerHTML = "<polygon class=\"zcapt-verified-fill\" points=\"385.621,62.507 146.225,301.901 21.213,176.891 0,198.104 146.225,344.327 406.834,83.72 \"/>";
  verifiedIcon.setAttribute("viewBox", "0 0 406.834 406.834");
  verifiedIcon.id = "zcapt-verified-icon";

  __webpack_require__(/*! ./appearAndDisappear */ "./src/view/appearAndDisappear.js").appear(verifiedLayer, function () {
    window.zcapt.onverified();
  });

  verifiedLayer.appendChild(verifiedIcon);
  frame.appendChild(verifiedLayer);

  __webpack_require__(/*! ./loading */ "./src/view/loading.js").loading.end();
};

/***/ })

/******/ });
//# sourceMappingURL=zcapt.js.map