(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"], {
  /***/
  "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/fonts/myFonts.scss":
  /*!**************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/dist/cjs.js??ref--13-3!./src/assets/fonts/myFonts.scss ***!
    \**************************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderDistCjsJsNode_modulesPostcssLoaderSrcIndexJsNode_modulesSassLoaderDistCjsJsSrcAssetsFontsMyFontsScss(module, exports, __webpack_require__) {
    // Imports
    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(
    /*! ../../../node_modules/css-loader/dist/runtime/api.js */
    "./node_modules/css-loader/dist/runtime/api.js");

    exports = ___CSS_LOADER_API_IMPORT___(true); // Module

    exports.push([module.i, "@font-face {\n  font-family: Inconsolata;\n  src: url('/etc.clientlibs/angularapp/clientlibs/clientlib-angular/resources/Inconsolata.otf') format(\"opentype\");\n}\n@font-face {\n  font-family: Montserrat;\n  src: url('/etc.clientlibs/angularapp/clientlibs/clientlib-angular/resources/Montserrat-Regular.ttf') format(\"opentype\");\n}\n@font-face {\n  font-family: Space Mono;\n  src: url('/etc.clientlibs/angularapp/clientlibs/clientlib-angular/resources/SpaceMono-Regular.ttf') format(\"opentype\");\n}", "", {
      "version": 3,
      "sources": ["C:\\Users\\moises.palacio\\Documents\\AEM\\Projectos\\aem-404\\ui.frontend/src\\assets\\fonts\\myFonts.scss", "myFonts.scss"],
      "names": [],
      "mappings": "AAAA;EACE,wBAAA;EACA,gHAAA;ACCF;ADCA;EACE,uBAAA;EACA,uHAAA;ACCF;ADCA;EACE,uBAAA;EACA,sHAAA;ACCF",
      "file": "myFonts.scss",
      "sourcesContent": ["@font-face {\r\n  font-family: Inconsolata;\r\n  src: url(Inconsolata.otf) format(\"opentype\");\r\n}\r\n@font-face {\r\n  font-family: Montserrat;\r\n  src: url(montserrat/Montserrat-Regular.ttf) format(\"opentype\");\r\n}\r\n@font-face {\r\n  font-family: Space Mono;\r\n  src: url(spacemono/spacemono/SpaceMono-Regular.ttf) format(\"opentype\");\r\n}\r\n\r\n", "@font-face {\n  font-family: Inconsolata;\n  src: url(Inconsolata.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: Montserrat;\n  src: url(montserrat/Montserrat-Regular.ttf) format(\"opentype\");\n}\n@font-face {\n  font-family: Space Mono;\n  src: url(spacemono/spacemono/SpaceMono-Regular.ttf) format(\"opentype\");\n}"]
    }]); // Exports

    module.exports = exports;
    /***/
  },

  /***/
  "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss":
  /*!************************************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/dist/cjs.js??ref--13-3!./src/styles.scss ***!
    \************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderDistCjsJsNode_modulesPostcssLoaderSrcIndexJsNode_modulesSassLoaderDistCjsJsSrcStylesScss(module, exports, __webpack_require__) {
    // Imports
    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(
    /*! ../node_modules/css-loader/dist/runtime/api.js */
    "./node_modules/css-loader/dist/runtime/api.js");

    exports = ___CSS_LOADER_API_IMPORT___(true); // Module

    exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  margin: 0;\n  padding: 0;\n  vertical-align: baseline;\n}\nbody {\n  background-color: #ffffff;\n}\n/*  Containers */\n/* main */\n.main-container {\n  display: block;\n}\n/* other container */\n.container {\n  display: flex;\n  max-width: 100%;\n}\n/* second container */\n.secondary-container {\n  margin-top: 110px;\n}\n/* Text, button container */\n.content-container {\n  flex: 1;\n}\n/* container for the scarecrow image */\n.scarecrow__container {\n  text-align: center;\n  margin-top: 50px;\n}\n/* generic margin */\n.margin-top-40 {\n  margin-top: 40px;\n}\n/*  /Rows */\n/* 404 text */\n.text__not-fount {\n  position: relative;\n  left: 36px;\n  width: 300px;\n  height: 25px;\n  font-family: \"Inconsolata\", \"Helvetica\", \"Arial\", \"sans-serif\";\n  font-style: normal;\n  font-weight: 700, bold;\n  font-size: 24px;\n  line-height: 25px;\n  letter-spacing: -0.08em;\n  text-transform: uppercase;\n  color: #333333;\n}\n/* scarecrow image */\n.scarecrow__img {\n  width: 80%;\n}\n/* bigger title */\n.title__message-text {\n  font-family: \"Space Mono\", \"Helvetica\", \"Arial\", \"sans-serif\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 64px;\n  line-height: 95px;\n  letter-spacing: -0.035em;\n  color: #333333;\n}\n/* detail message */\n.text__message {\n  font-family: \"Space Mono\", \"Helvetica\", \"Arial\", \"sans-serif\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 36px;\n  letter-spacing: -0.035em;\n  color: #4F4F4F;\n}\n/* black button */\n.button__black button {\n  margin-top: 30px;\n  color: #ffffff;\n  width: 216px;\n  height: 68px;\n  background: #333333 !important;\n}\n/* Mobile styles */\n@media (max-width: 800px) {\n  .container {\n    display: block;\n  }\n\n  .secondary-container {\n    margin-top: 10px;\n  }\n\n  .scarecrow__container {\n    margin-top: 10px;\n  }\n\n  .text__not-fount {\n    position: relative;\n    left: 36px;\n    top: 0;\n  }\n\n  .title__message-text {\n    font-size: 48px;\n  }\n}\n.footer {\n  font-family: \"Montserrat\", \"Helvetica\", \"Arial\", \"sans-serif\";\n  font-style: normal;\n  font-weight: 500 !important;\n  font-size: 14px !important;\n  line-height: 17px;\n  text-align: center;\n  color: #BDBDBD;\n}", "", {
      "version": 3,
      "sources": ["C:\\Users\\moises.palacio\\Documents\\AEM\\Projectos\\aem-404\\ui.frontend/src\\styles.scss", "styles.scss"],
      "names": [],
      "mappings": "AAAA,8EAAA;AACA;;EAEE,SAAA;EACA,aAAA;EACA,eAAA;EACA,SAAA;EACA,UAAA;EACA,wBAAA;ACCF;ADEA;EACE,yBAAA;ACCF;ADEA,gBAAA;AACA,SAAA;AACA;EACE,cAAA;ACCF;ADCA,oBAAA;AACA;EACC,aAAA;EACA,eAAA;ACED;ADAA,qBAAA;AACA;EACE,iBAAA;ACGF;ADDA,2BAAA;AACA;EACC,OAAA;ACID;ADFA,sCAAA;AACA;EACE,kBAAA;EACA,gBAAA;ACKF;ADHA,mBAAA;AACA;EACE,gBAAA;ACMF;ADJA,WAAA;AAEA,aAAA;AACA;EACE,kBAAA;EACA,UAAA;EACA,YAAA;EACA,YAAA;EACA,8DAAA;EACA,kBAAA;EACA,sBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,yBAAA;EACA,cAAA;ACMF;ADJA,oBAAA;AACA;EACE,UAAA;ACOF;ADLA,iBAAA;AACA;EACE,6DAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,wBAAA;EACA,cAAA;ACQF;ADNA,mBAAA;AACA;EACE,6DAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,wBAAA;EACA,cAAA;ACSF;ADPA,iBAAA;AAEE;EACE,gBAAA;EACA,cAAA;EACA,YAAA;EACA,YAAA;EACA,8BAAA;ACSJ;ADLA,kBAAA;AACA;EACE;IACE,cAAA;ECQF;;EDNA;IACE,gBAAA;ECSF;;EDPA;IACE,gBAAA;ECUF;;EDRA;IACE,kBAAA;IACA,UAAA;IACA,MAAA;ECWF;;EDTA;IACE,eAAA;ECYF;AACF;ADTA;EACE,6DAAA;EACA,kBAAA;EACA,2BAAA;EACA,0BAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;ACWF",
      "file": "styles.scss",
      "sourcesContent": ["/* You can add global styles to this file, and also import other style files */\r\nhtml,\r\nbody {\r\n  border: 0;\r\n  font: inherit;\r\n  font-size: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n  vertical-align: baseline;\r\n}\r\n\r\nbody {\r\n  background-color: #ffffff;\r\n}\r\n\r\n/*  Containers */\r\n/* main */\r\n.main-container {\r\n  display: block;\r\n}\r\n/* other container */\r\n.container {\r\n\tdisplay: flex;\r\n\tmax-width: 100%;\r\n} \r\n/* second container */\r\n.secondary-container {\r\n  margin-top: 110px;\r\n}\r\n/* Text, button container */\r\n.content-container {\r\n\tflex: 1;\r\n}\r\n/* container for the scarecrow image */\r\n.scarecrow__container {\r\n  text-align: center;\r\n  margin-top: 50px;\r\n}\r\n/* generic margin */\r\n.margin-top-40 {\r\n  margin-top: 40px;\r\n}\r\n/*  /Rows */\r\n\r\n/* 404 text */\r\n.text__not-fount {\r\n  position: relative;\r\n  left: 36px;\r\n  width: 300px;\r\n  height: 25px;\r\n  font-family: 'Inconsolata', 'Helvetica', 'Arial', 'sans-serif';\r\n  font-style: normal;\r\n  font-weight: 700, bold;\r\n  font-size: 24px;\r\n  line-height: 25px;\r\n  letter-spacing: -0.08em;\r\n  text-transform: uppercase;\r\n  color: #333333;\r\n}\r\n/* scarecrow image */\r\n.scarecrow__img {\r\n  width: 80%;\r\n}\r\n/* bigger title */\r\n.title__message-text {\r\n  font-family: 'Space Mono', 'Helvetica', 'Arial', 'sans-serif';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  font-size: 64px;\r\n  line-height: 95px;\r\n  letter-spacing: -0.035em;\r\n  color: #333333;\r\n}\r\n/* detail message */\r\n.text__message {\r\n  font-family: 'Space Mono', 'Helvetica', 'Arial', 'sans-serif';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 24px;\r\n  line-height: 36px;\r\n  letter-spacing: -0.035em;\r\n  color: #4F4F4F;\r\n}\r\n/* black button */\r\n.button__black { \r\n  button {\r\n    margin-top: 30px;\r\n    color: #ffffff;\r\n    width: 216px;\r\n    height: 68px;\r\n    background: #333333 !important;\r\n  }\r\n}\r\n\r\n/* Mobile styles */\r\n@media (max-width: 800px) {\r\n  .container {\r\n    display: block;\r\n  }\r\n  .secondary-container {\r\n    margin-top: 10px;\r\n  }\r\n  .scarecrow__container {\r\n    margin-top: 10px;\r\n  } \r\n  .text__not-fount {\r\n    position: relative;\r\n    left: 36px;\r\n    top: 0;\r\n  }\r\n  .title__message-text {\r\n    font-size: 48px;\r\n  }\r\n}\r\n\r\n.footer {\r\n  font-family: 'Montserrat', 'Helvetica', 'Arial', 'sans-serif';\r\n  font-style: normal;\r\n  font-weight: 500 !important;\r\n  font-size: 14px !important;\r\n  line-height: 17px;\r\n  text-align: center;\r\n  color: #BDBDBD;\r\n}", "/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  margin: 0;\n  padding: 0;\n  vertical-align: baseline;\n}\n\nbody {\n  background-color: #ffffff;\n}\n\n/*  Containers */\n/* main */\n.main-container {\n  display: block;\n}\n\n/* other container */\n.container {\n  display: flex;\n  max-width: 100%;\n}\n\n/* second container */\n.secondary-container {\n  margin-top: 110px;\n}\n\n/* Text, button container */\n.content-container {\n  flex: 1;\n}\n\n/* container for the scarecrow image */\n.scarecrow__container {\n  text-align: center;\n  margin-top: 50px;\n}\n\n/* generic margin */\n.margin-top-40 {\n  margin-top: 40px;\n}\n\n/*  /Rows */\n/* 404 text */\n.text__not-fount {\n  position: relative;\n  left: 36px;\n  width: 300px;\n  height: 25px;\n  font-family: \"Inconsolata\", \"Helvetica\", \"Arial\", \"sans-serif\";\n  font-style: normal;\n  font-weight: 700, bold;\n  font-size: 24px;\n  line-height: 25px;\n  letter-spacing: -0.08em;\n  text-transform: uppercase;\n  color: #333333;\n}\n\n/* scarecrow image */\n.scarecrow__img {\n  width: 80%;\n}\n\n/* bigger title */\n.title__message-text {\n  font-family: \"Space Mono\", \"Helvetica\", \"Arial\", \"sans-serif\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 64px;\n  line-height: 95px;\n  letter-spacing: -0.035em;\n  color: #333333;\n}\n\n/* detail message */\n.text__message {\n  font-family: \"Space Mono\", \"Helvetica\", \"Arial\", \"sans-serif\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 36px;\n  letter-spacing: -0.035em;\n  color: #4F4F4F;\n}\n\n/* black button */\n.button__black button {\n  margin-top: 30px;\n  color: #ffffff;\n  width: 216px;\n  height: 68px;\n  background: #333333 !important;\n}\n\n/* Mobile styles */\n@media (max-width: 800px) {\n  .container {\n    display: block;\n  }\n\n  .secondary-container {\n    margin-top: 10px;\n  }\n\n  .scarecrow__container {\n    margin-top: 10px;\n  }\n\n  .text__not-fount {\n    position: relative;\n    left: 36px;\n    top: 0;\n  }\n\n  .title__message-text {\n    font-size: 48px;\n  }\n}\n.footer {\n  font-family: \"Montserrat\", \"Helvetica\", \"Arial\", \"sans-serif\";\n  font-style: normal;\n  font-weight: 500 !important;\n  font-size: 14px !important;\n  line-height: 17px;\n  text-align: center;\n  color: #BDBDBD;\n}"]
    }]); // Exports

    module.exports = exports;
    /***/
  },

  /***/
  "./node_modules/css-loader/dist/runtime/api.js":
  /*!*****************************************************!*\
    !*** ./node_modules/css-loader/dist/runtime/api.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderDistRuntimeApiJs(module, exports, __webpack_require__) {
    "use strict";
    /*
      MIT License http://www.opensource.org/licenses/mit-license.php
      Author Tobias Koppers @sokra
    */
    // css base code, injected by the css-loader
    // eslint-disable-next-line func-names

    module.exports = function (useSourceMap) {
      var list = []; // return the list of modules as css string

      list.toString = function toString() {
        return this.map(function (item) {
          var content = cssWithMappingToString(item, useSourceMap);

          if (item[2]) {
            return "@media ".concat(item[2], " {").concat(content, "}");
          }

          return content;
        }).join('');
      }; // import a list of modules into the list
      // eslint-disable-next-line func-names


      list.i = function (modules, mediaQuery, dedupe) {
        if (typeof modules === 'string') {
          // eslint-disable-next-line no-param-reassign
          modules = [[null, modules, '']];
        }

        var alreadyImportedModules = {};

        if (dedupe) {
          for (var i = 0; i < this.length; i++) {
            // eslint-disable-next-line prefer-destructuring
            var id = this[i][0];

            if (id != null) {
              alreadyImportedModules[id] = true;
            }
          }
        }

        for (var _i = 0; _i < modules.length; _i++) {
          var item = [].concat(modules[_i]);

          if (dedupe && alreadyImportedModules[item[0]]) {
            // eslint-disable-next-line no-continue
            continue;
          }

          if (mediaQuery) {
            if (!item[2]) {
              item[2] = mediaQuery;
            } else {
              item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
            }
          }

          list.push(item);
        }
      };

      return list;
    };

    function cssWithMappingToString(item, useSourceMap) {
      var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

      var cssMapping = item[3];

      if (!cssMapping) {
        return content;
      }

      if (useSourceMap && typeof btoa === 'function') {
        var sourceMapping = toComment(cssMapping);
        var sourceURLs = cssMapping.sources.map(function (source) {
          return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
        });
        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
      }

      return [content].join('\n');
    } // Adapted from convert-source-map (MIT)


    function toComment(sourceMap) {
      // eslint-disable-next-line no-undef
      var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
      var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
      return "/*# ".concat(data, " */");
    }
    /***/

  },

  /***/
  "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderDistRuntimeInjectStylesIntoStyleTagJs(module, exports, __webpack_require__) {
    "use strict";

    var isOldIE = function isOldIE() {
      var memo;
      return function memorize() {
        if (typeof memo === 'undefined') {
          // Test for IE <= 9 as proposed by Browserhacks
          // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
          // Tests for existence of standard globals is to allow style-loader
          // to operate correctly into non-standard environments
          // @see https://github.com/webpack-contrib/style-loader/issues/177
          memo = Boolean(window && document && document.all && !window.atob);
        }

        return memo;
      };
    }();

    var getTarget = function getTarget() {
      var memo = {};
      return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
          var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

          if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
            try {
              // This will throw an exception if access to iframe is blocked
              // due to cross-origin restrictions
              styleTarget = styleTarget.contentDocument.head;
            } catch (e) {
              // istanbul ignore next
              styleTarget = null;
            }
          }

          memo[target] = styleTarget;
        }

        return memo[target];
      };
    }();

    var stylesInDom = [];

    function getIndexByIdentifier(identifier) {
      var result = -1;

      for (var i = 0; i < stylesInDom.length; i++) {
        if (stylesInDom[i].identifier === identifier) {
          result = i;
          break;
        }
      }

      return result;
    }

    function modulesToDom(list, options) {
      var idCountMap = {};
      var identifiers = [];

      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var id = options.base ? item[0] + options.base : item[0];
        var count = idCountMap[id] || 0;
        var identifier = "".concat(id, " ").concat(count);
        idCountMap[id] = count + 1;
        var index = getIndexByIdentifier(identifier);
        var obj = {
          css: item[1],
          media: item[2],
          sourceMap: item[3]
        };

        if (index !== -1) {
          stylesInDom[index].references++;
          stylesInDom[index].updater(obj);
        } else {
          stylesInDom.push({
            identifier: identifier,
            updater: addStyle(obj, options),
            references: 1
          });
        }

        identifiers.push(identifier);
      }

      return identifiers;
    }

    function insertStyleElement(options) {
      var style = document.createElement('style');
      var attributes = options.attributes || {};

      if (typeof attributes.nonce === 'undefined') {
        var nonce = true ? __webpack_require__.nc : undefined;

        if (nonce) {
          attributes.nonce = nonce;
        }
      }

      Object.keys(attributes).forEach(function (key) {
        style.setAttribute(key, attributes[key]);
      });

      if (typeof options.insert === 'function') {
        options.insert(style);
      } else {
        var target = getTarget(options.insert || 'head');

        if (!target) {
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }

        target.appendChild(style);
      }

      return style;
    }

    function removeStyleElement(style) {
      // istanbul ignore if
      if (style.parentNode === null) {
        return false;
      }

      style.parentNode.removeChild(style);
    }
    /* istanbul ignore next  */


    var replaceText = function replaceText() {
      var textStore = [];
      return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
      };
    }();

    function applyToSingletonTag(style, index, remove, obj) {
      var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

      /* istanbul ignore if  */

      if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
      } else {
        var cssNode = document.createTextNode(css);
        var childNodes = style.childNodes;

        if (childNodes[index]) {
          style.removeChild(childNodes[index]);
        }

        if (childNodes.length) {
          style.insertBefore(cssNode, childNodes[index]);
        } else {
          style.appendChild(cssNode);
        }
      }
    }

    function applyToTag(style, options, obj) {
      var css = obj.css;
      var media = obj.media;
      var sourceMap = obj.sourceMap;

      if (media) {
        style.setAttribute('media', media);
      } else {
        style.removeAttribute('media');
      }

      if (sourceMap && btoa) {
        css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
      } // For old IE

      /* istanbul ignore if  */


      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        while (style.firstChild) {
          style.removeChild(style.firstChild);
        }

        style.appendChild(document.createTextNode(css));
      }
    }

    var singleton = null;
    var singletonCounter = 0;

    function addStyle(obj, options) {
      var style;
      var update;
      var remove;

      if (options.singleton) {
        var styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
      } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);

        remove = function remove() {
          removeStyleElement(style);
        };
      }

      update(obj);
      return function updateStyle(newObj) {
        if (newObj) {
          if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
            return;
          }

          update(obj = newObj);
        } else {
          remove();
        }
      };
    }

    module.exports = function (list, options) {
      options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
      // tags it will allow on a page

      if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
      }

      list = list || [];
      var lastIdentifiers = modulesToDom(list, options);
      return function update(newList) {
        newList = newList || [];

        if (Object.prototype.toString.call(newList) !== '[object Array]') {
          return;
        }

        for (var i = 0; i < lastIdentifiers.length; i++) {
          var identifier = lastIdentifiers[i];
          var index = getIndexByIdentifier(identifier);
          stylesInDom[index].references--;
        }

        var newLastIdentifiers = modulesToDom(newList, options);

        for (var _i = 0; _i < lastIdentifiers.length; _i++) {
          var _identifier = lastIdentifiers[_i];

          var _index = getIndexByIdentifier(_identifier);

          if (stylesInDom[_index].references === 0) {
            stylesInDom[_index].updater();

            stylesInDom.splice(_index, 1);
          }
        }

        lastIdentifiers = newLastIdentifiers;
      };
    };
    /***/

  },

  /***/
  "./src/assets/fonts/myFonts.scss":
  /*!***************************************!*\
    !*** ./src/assets/fonts/myFonts.scss ***!
    \***************************************/

  /*! no static exports found */

  /***/
  function srcAssetsFontsMyFontsScss(module, exports, __webpack_require__) {
    var api = __webpack_require__(
    /*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");

    var content = __webpack_require__(
    /*! !../../../node_modules/css-loader/dist/cjs.js??ref--13-1!../../../node_modules/postcss-loader/src??embedded!../../../node_modules/sass-loader/dist/cjs.js??ref--13-3!./myFonts.scss */
    "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/fonts/myFonts.scss");

    content = content.__esModule ? content["default"] : content;

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    var options = {};
    options.insert = "head";
    options.singleton = false;
    var update = api(content, options);
    var exported = content.locals ? content.locals : {};
    module.exports = exported;
    /***/
  },

  /***/
  "./src/styles.scss":
  /*!*************************!*\
    !*** ./src/styles.scss ***!
    \*************************/

  /*! no static exports found */

  /***/
  function srcStylesScss(module, exports, __webpack_require__) {
    var api = __webpack_require__(
    /*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");

    var content = __webpack_require__(
    /*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/dist/cjs.js??ref--13-3!./styles.scss */
    "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss");

    content = content.__esModule ? content["default"] : content;

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    var options = {};
    options.insert = "head";
    options.singleton = false;
    var update = api(content, options);
    var exported = content.locals ? content.locals : {};
    module.exports = exported;
    /***/
  },

  /***/
  3:
  /*!***************************************************************!*\
    !*** multi ./src/styles.scss ./src/assets/fonts/myFonts.scss ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    __webpack_require__(
    /*! C:\Users\moises.palacio\Documents\AEM\Projectos\aem-404\ui.frontend\src\styles.scss */
    "./src/styles.scss");

    module.exports = __webpack_require__(
    /*! C:\Users\moises.palacio\Documents\AEM\Projectos\aem-404\ui.frontend\src\assets\fonts\myFonts.scss */
    "./src/assets/fonts/myFonts.scss");
    /***/
  }
}, [[3, "runtime"]]]);
//# sourceMappingURL=styles-es5.js.map