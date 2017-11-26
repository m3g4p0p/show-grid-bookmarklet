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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function () {
  var randomizeColor = function randomizeColor(row) {
    var rnd = function rnd() {
      return Math.random() * 255;
    };
    var backgroundColor = 'rgba(' + rnd() + ', ' + rnd() + ', ' + rnd() + ', .2)';

    Array.from(row.children).forEach(function (col) {
      col.firstElementChild.style.backgroundColor = backgroundColor;
    });
  };

  var toggleRow = function toggleRow() {
    var row = document.querySelector('._debug-row');

    if (row) {
      if (row.style.display) {
        row.style.display = '';
        randomizeColor();
      } else {
        row.style.display = 'none';
      }

      return true;
    }

    return false;
  };

  var createMarker = function createMarker() {
    var marker = document.createElement('div');

    Object.assign(marker.style, {
      height: '1px',
      width: '100%',
      backgroundColor: 'rgba(255, 0, 0, .2)',
      transform: 'scale(1, 10000)'
    });

    return marker;
  };

  var createCol = function createCol() {
    var col = document.createElement('div');
    var marker = createMarker();

    col.classList.add('wb-col-mq1-1');
    col.append(marker);

    return col;
  };

  var bindEvent = function bindEvent() {
    window.addEventListener('keydown', function (_ref) {
      var key = _ref.key;

      if (key === 'Dead') {
        toggleRow();
      }
    });
  };

  var createRow = function createRow() {
    var grid = document.querySelector('.wb-content-grid');
    var row = document.createElement('div');
    var cols = Array.from({ length: 12 }).map(createCol);

    row.classList.add('wb-content-grid__row', '_debug-row');
    row.append.apply(row, _toConsumableArray(cols));
    grid.prepend(row);
    bindEvent();
  };

  toggleRow() || createRow();
})();

/***/ })
/******/ ]);