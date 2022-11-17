/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.tsx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, private, scripts, dependencies, devDependencies, browserslist, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"ls-conf-sample-frontend\",\"version\":\"1.4.4\",\"private\":true,\"scripts\":{\"start\":\"cross-env NODE_ENV=development npx webpack-dev-server --config ./webpack.config --open\",\"build\":\"cross-env NODE_ENV=development npx webpack --config ./webpack.config\",\"heroku-postbuild\":\"cd frontend && npm install && npm run build\"},\"dependencies\":{\"@reduxjs/toolkit\":\"^1.7.2\",\"@types/uuid\":\"^8.3.0\",\"date-fns\":\"^2.16.1\",\"react\":\"^17.0.2\",\"react-dom\":\"^17.0.2\",\"react-redux\":\"^7.2.6\",\"react-router-dom\":\"^5.2.0\",\"redux\":\"^4.1.2\",\"redux-thunk\":\"^2.4.1\",\"rmwc\":\"^6.1.4\",\"typescript\":\"3.9.3\",\"uuid\":\"^8.3.2\"},\"devDependencies\":{\"@types/jest\":\"^27.4.0\",\"@types/node\":\"^14.0.13\",\"@types/query-string\":\"^6.3.0\",\"@types/react\":\"17.0.5\",\"@types/react-dom\":\"17.0.4\",\"@types/react-redux\":\"^7.1.22\",\"@types/react-router-dom\":\"^5.1.7\",\"@types/redux\":\"^3.6.0\",\"cross-env\":\"^7.0.3\",\"css-loader\":\"^3.6.0\",\"file-loader\":\"^6.0.0\",\"html-webpack-plugin\":\"^4.3.0\",\"jest\":\"^27.5.1\",\"mini-css-extract-plugin\":\"^0.9.0\",\"source-map\":\"^0.7.3\",\"source-map-loader\":\"^1.0.0\",\"ts-loader\":\"^7.0.5\",\"webpack\":\"^4.43.0\",\"webpack-cli\":\"^3.3.11\",\"webpack-dev-server\":\"^3.11.0\"},\"browserslist\":{\"production\":[\">0.2%\",\"not dead\",\"not op_mini all\"],\"development\":[\"last 1 chrome version\",\"last 1 firefox version\",\"last 1 safari version\"]}}");

/***/ }),

/***/ "./src/api.ts":
/*!********************!*\
  !*** ./src/api.ts ***!
  \********************/
/*! exports provided: fetchAccessToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAccessToken", function() { return fetchAccessToken; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* eslint @typescript-eslint/naming-convention: 0 */

const API_HEADERS = { 'Content-Type': 'application/json; charset=utf-8' };
const validateBitrateReservation = (bitrate) => {
    const param = Number(bitrate);
    if (!isNaN(param) && param >= 1 && param <= 250) {
        return true;
    }
    return false;
};
const validateRoomType = (roomType) => {
    if (roomType === 'sfu' || roomType === 'p2p' || roomType === 'p2p_turn') {
        return true;
    }
    return false;
};
// POST リクエストの共通ラッパー
async function fetchPost(path, body) {
    const response = await fetch(_constants__WEBPACK_IMPORTED_MODULE_0__["API_BASE"] + path, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: API_HEADERS,
    });
    // 異常系の場合 warning をログに出して、エラーを投げて終了する。
    if (!response.ok) {
        const data = await response.json();
        console.warn('API fetch Error, error=>', data);
        const error = new Error(response.statusText);
        throw error;
    }
    return response.json();
}
// Access Token の取得 API
async function fetchAccessToken(roomId, connectionId, bitrateReservation, roomType) {
    if (bitrateReservation && validateBitrateReservation(bitrateReservation) && roomType && validateRoomType(roomType)) {
        return fetchPost('/access_token', { room_id: roomId, connection_id: connectionId, bitrate_reservation_mbps: bitrateReservation, room_type: roomType });
    }
    else if (bitrateReservation && validateBitrateReservation(bitrateReservation)) {
        return fetchPost('/access_token', { room_id: roomId, connection_id: connectionId, bitrate_reservation_mbps: bitrateReservation });
    }
    else if (roomType && validateRoomType(roomType)) {
        return fetchPost('/access_token', { room_id: roomId, connection_id: connectionId, room_type: roomType });
    }
    else {
        return fetchPost('/access_token', { room_id: roomId, connection_id: connectionId });
    }
}


/***/ }),

/***/ "./src/components/ErrorDialog/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/ErrorDialog/index.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_dialog_dist_mdc_dialog_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/dialog/dist/mdc.dialog.css */ "./node_modules/@material/dialog/dist/mdc.dialog.css");
/* harmony import */ var _material_dialog_dist_mdc_dialog_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_dialog_dist_mdc_dialog_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_button_dist_mdc_button_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/button/dist/mdc.button.css */ "./node_modules/@material/button/dist/mdc.button.css");
/* harmony import */ var _material_button_dist_mdc_button_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_button_dist_mdc_button_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ripple_dist_mdc_ripple_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/ripple/dist/mdc.ripple.css */ "./node_modules/@material/ripple/dist/mdc.ripple.css");
/* harmony import */ var _material_ripple_dist_mdc_ripple_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ripple_dist_mdc_ripple_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rmwc_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rmwc/dialog */ "./node_modules/@rmwc/dialog/next/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





const ErrorDialog = (props) => {
    return (react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_rmwc_dialog__WEBPACK_IMPORTED_MODULE_3__["Dialog"], { open: props.open },
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_rmwc_dialog__WEBPACK_IMPORTED_MODULE_3__["DialogContent"], null, props.message),
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_rmwc_dialog__WEBPACK_IMPORTED_MODULE_3__["DialogActions"], null,
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_rmwc_dialog__WEBPACK_IMPORTED_MODULE_3__["DialogButton"], { action: "close", isDefaultAction: true, onClick: props.onClose }, "\u9589\u3058\u308B"))));
};
/* harmony default export */ __webpack_exports__["default"] = (ErrorDialog);


/***/ }),

/***/ "./src/components/LoginEntranceFormFieldGroup/LoginEntranceFormFieldGroup.css":
/*!************************************************************************************!*\
  !*** ./src/components/LoginEntranceFormFieldGroup/LoginEntranceFormFieldGroup.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/LoginEntranceFormFieldGroup/index.tsx":
/*!**************************************************************!*\
  !*** ./src/components/LoginEntranceFormFieldGroup/index.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoginEntranceFormFieldGroup_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoginEntranceFormFieldGroup.css */ "./src/components/LoginEntranceFormFieldGroup/LoginEntranceFormFieldGroup.css");
/* harmony import */ var _LoginEntranceFormFieldGroup_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_LoginEntranceFormFieldGroup_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_theme_dist_mdc_theme_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/theme/dist/mdc.theme.css */ "./node_modules/@material/theme/dist/mdc.theme.css");
/* harmony import */ var _material_theme_dist_mdc_theme_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_theme_dist_mdc_theme_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_typography_dist_mdc_typography_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/typography/dist/mdc.typography.css */ "./node_modules/@material/typography/dist/mdc.typography.css");
/* harmony import */ var _material_typography_dist_mdc_typography_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_typography_dist_mdc_typography_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_card_dist_mdc_card_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/card/dist/mdc.card.css */ "./node_modules/@material/card/dist/mdc.card.css");
/* harmony import */ var _material_card_dist_mdc_card_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_card_dist_mdc_card_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_textfield_dist_mdc_textfield_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/textfield/dist/mdc.textfield.css */ "./node_modules/@material/textfield/dist/mdc.textfield.css");
/* harmony import */ var _material_textfield_dist_mdc_textfield_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_textfield_dist_mdc_textfield_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_notched_outline_dist_mdc_notched_outline_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/notched-outline/dist/mdc.notched-outline.css */ "./node_modules/@material/notched-outline/dist/mdc.notched-outline.css");
/* harmony import */ var _material_notched_outline_dist_mdc_notched_outline_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_notched_outline_dist_mdc_notched_outline_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_line_ripple_dist_mdc_line_ripple_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/line-ripple/dist/mdc.line-ripple.css */ "./node_modules/@material/line-ripple/dist/mdc.line-ripple.css");
/* harmony import */ var _material_line_ripple_dist_mdc_line_ripple_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_line_ripple_dist_mdc_line_ripple_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_floating_label_dist_mdc_floating_label_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material/floating-label/dist/mdc.floating-label.css */ "./node_modules/@material/floating-label/dist/mdc.floating-label.css");
/* harmony import */ var _material_floating_label_dist_mdc_floating_label_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_floating_label_dist_mdc_floating_label_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_button_dist_mdc_button_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material/button/dist/mdc.button.css */ "./node_modules/@material/button/dist/mdc.button.css");
/* harmony import */ var _material_button_dist_mdc_button_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_button_dist_mdc_button_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _rmwc_textfield__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @rmwc/textfield */ "./node_modules/@rmwc/textfield/next/index.js");
/* harmony import */ var _rmwc_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @rmwc/theme */ "./node_modules/@rmwc/theme/next/index.js");
/* harmony import */ var _rmwc_typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @rmwc/typography */ "./node_modules/@rmwc/typography/next/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);













// MWCのバグが、以下2つあるため一時的に指定している
// TextFieldの色はprimary値しか受け付けない / ラベルの色はthemaやclassを使っても、強制的に#6200eeの値になる
// TODO(hkt): RMWC側でバグが対応され次第削除する
const TEXTFIELD_THEME_OPTIONS = {
    primary: '#6200ee',
};
const ROOMID_CHARACTER_LIMIT = {
    upper: 255,
};
const USERNAME_CHARACTER_LIMIT = {
    upper: 10,
};
const validateIDString = (idString) => {
    const pattern = /^[a-zA-Z0-9.%+^_"`{|}~<>\\-]{1,255}$/;
    return idString.match(pattern) !== null;
};
// username / roomId のバリデーション
// TODO(kdxu): ログイン時のエラー仕様が決定したら、それを踏襲してこのロジックを修正する
const validateRoomIdAndUsername = (roomId, username) => {
    const errors = [];
    if (username === '') {
        errors.push({ key: 'username', message: 'ユーザ名を入力してください' });
    }
    if (username.length > USERNAME_CHARACTER_LIMIT.upper) {
        errors.push({ key: 'username', message: `ユーザ名は${USERNAME_CHARACTER_LIMIT.upper}文字以下で入力してください` });
    }
    if (roomId === '') {
        errors.push({ key: 'roomId', message: 'ルーム名を入力してください' });
    }
    if (roomId.length > ROOMID_CHARACTER_LIMIT.upper) {
        errors.push({ key: 'roomId', message: `ルーム名は${ROOMID_CHARACTER_LIMIT.upper}文字以下で入力してください` });
    }
    if (!validateIDString(roomId)) {
        errors.push({ key: 'roomId', message: '英数字と一部記号（.%+^_"`{|}~<>\\-）以外の文字列は使用できません' });
    }
    return errors;
};
const LoginEntranceInputItem = (props) => {
    const error = props.validateErrors.find((v) => v.key === props.name);
    const helpText = error && {
        persistent: true,
        validationMsg: true,
        children: error.message,
    };
    const isInvalid = error !== undefined;
    const title = `${props.label}を入力してください`;
    return (react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_rmwc_typography__WEBPACK_IMPORTED_MODULE_11__["Typography"], { use: "body1", tag: "p", theme: "textSecondaryOnBackground" }, title),
        react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_rmwc_theme__WEBPACK_IMPORTED_MODULE_10__["ThemeProvider"], { options: TEXTFIELD_THEME_OPTIONS },
            react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_rmwc_textfield__WEBPACK_IMPORTED_MODULE_9__["TextField"], { onChange: props.onChange, style: { width: '100%' }, outlined: true, invalid: isInvalid, label: props.label, name: props.name, value: props.value, helpText: helpText }))));
};
const LoginEntranceFormFieldGroup = (props) => {
    const [validateErrors, setValidateResult] = Object(react__WEBPACK_IMPORTED_MODULE_12__["useState"])([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateRoomIdAndUsername(props.roomId, props.username);
        setValidateResult(errors);
        if (errors.length > 0) {
            return;
        }
        // validation エラーが無い場合ログイン処理を行う
        props.onSubmitSuccess();
    };
    const handleChangeRoomId = (e) => {
        e.preventDefault();
        props.onChangeRoomId(e.target.value);
    };
    const handleChangeUsername = (e) => {
        e.preventDefault();
        props.onChangeUsername(e.target.value);
    };
    return (react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", { className: "mdc-card" },
        react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", { className: "join-content" },
            react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_rmwc_typography__WEBPACK_IMPORTED_MODULE_11__["Typography"], { use: "headline6", tag: "h1", theme: "onSurface" }, "RICOH Live Streaming Service"),
            react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("form", null,
                react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", { className: "form-group" },
                    react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(LoginEntranceInputItem, { onChange: handleChangeRoomId, label: "\u30EB\u30FC\u30E0\u540D", name: "roomId", value: props.roomId, validateErrors: validateErrors }),
                    react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(LoginEntranceInputItem, { onChange: handleChangeUsername, label: "\u30E6\u30FC\u30B6\u540D", name: "username", value: props.username, validateErrors: validateErrors })),
                react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("button", { id: "joinButton", onClick: handleSubmit, className: "mdc-button mdc-button--raised mdco-fullwidth" },
                    react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", { className: "mdc-button__ripple" }),
                    react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", { className: "mdc-button__label" }, "\u53C2\u52A0"))))));
};
/* harmony default export */ __webpack_exports__["default"] = (LoginEntranceFormFieldGroup);


/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/*! exports provided: API_BASE, LS_CONF_URL, LS_CLIENT_ID, SIGNALING_URL, THETA_ZOOM_MAX_RANGE, ROOM_CONFIG, TOOLBAR_CONFIG, SUBVIEW_CONFIG, DEFAULT_LAYOUT, POD_COORDINATES, THEME_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_BASE", function() { return API_BASE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LS_CONF_URL", function() { return LS_CONF_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LS_CLIENT_ID", function() { return LS_CLIENT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNALING_URL", function() { return SIGNALING_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THETA_ZOOM_MAX_RANGE", function() { return THETA_ZOOM_MAX_RANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROOM_CONFIG", function() { return ROOM_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOLBAR_CONFIG", function() { return TOOLBAR_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBVIEW_CONFIG", function() { return SUBVIEW_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_LAYOUT", function() { return DEFAULT_LAYOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POD_COORDINATES", function() { return POD_COORDINATES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEME_CONFIG", function() { return THEME_CONFIG; });
const API_BASE = "http://localhost:3000/api";
const LS_CONF_URL = undefined;
const LS_CLIENT_ID = "JqwDrc3-TEgbXiDnrrZnSlGvxpl8HouXs6RvYqauIdY";
const SIGNALING_URL = undefined;
const THETA_ZOOM_MAX_RANGE = Number(8);
const ROOM_CONFIG = {"entranceScreen":"none"};
const TOOLBAR_CONFIG = {"isHidden":false,"isHiddenCameraButton":false,"isHiddenMicButton":false,"isHiddenScreenShareButton":false,"isHiddenDeviceSettingButton":false,"isHiddenExitButton":false,"customItems":[]};
const SUBVIEW_CONFIG = {"enableAutoVideoReceiving":true,"menu":{"isHidden":false,"isHiddenRecordingButton":false,"isHiddenSharePoVButton":true}};
const DEFAULT_LAYOUT = "gallery";
const POD_COORDINATES = undefined;
const THEME_CONFIG = {"primary":"#303030","background":"#f7f7fa","surface":"#fff","onPrimary":"#fff","primaryTextColor":"rgba(0, 0, 0, 0.87)","secondaryTextColor":"rgba(0, 0, 0, 0.54)","components":{"participantsVideoContainer":{"background":"rgba(0, 0, 0, 0.05)","subViewSwitchBackgroundColor":"#fff","subViewSwitchIconColor":"rgba(0, 0, 0, 0.87)"},"toolbar":{"background":"#303030","iconColor":"#fff"},"video":{"background":"#000","textColor":"#fff","textBackgroundColor":"#000","iconColor":"#fff","menuBackgroundColor":"#fff","menuTextColor":"rgba(0, 0, 0, 0.87)","highlightBorderColor":"#661fff","highlightShadowColor":"#661fff"},"dialog":{"inputFocusColor":"#303030"}}};


/***/ }),

/***/ "./src/containers/App/App.css":
/*!************************************!*\
  !*** ./src/containers/App/App.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/containers/App/index.tsx":
/*!**************************************!*\
  !*** ./src/containers/App/index.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.css */ "./src/containers/App/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Entrance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Entrance */ "./src/containers/Entrance/index.tsx");
/* harmony import */ var _IframePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../IframePage */ "./src/containers/IframePage/index.tsx");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Login */ "./src/containers/Login/index.tsx");






const App = () => {
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "mdc-theme--background" },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: "/", exact: true, component: _Login__WEBPACK_IMPORTED_MODULE_5__["default"] }),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: "/login", exact: true, component: _Login__WEBPACK_IMPORTED_MODULE_5__["default"] }),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: "/room/:roomId/entrance", exact: true, component: _Entrance__WEBPACK_IMPORTED_MODULE_3__["default"] }),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: "/room/:roomId", exact: true, component: _IframePage__WEBPACK_IMPORTED_MODULE_4__["default"] })))));
};
/* harmony default export */ __webpack_exports__["default"] = (App);


/***/ }),

/***/ "./src/containers/Entrance/Entrance.css":
/*!**********************************************!*\
  !*** ./src/containers/Entrance/Entrance.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/containers/Entrance/index.tsx":
/*!*******************************************!*\
  !*** ./src/containers/Entrance/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Entrance_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Entrance.css */ "./src/containers/Entrance/Entrance.css");
/* harmony import */ var _Entrance_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Entrance_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_LoginEntranceFormFieldGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/LoginEntranceFormFieldGroup */ "./src/components/LoginEntranceFormFieldGroup/index.tsx");





const Entrance = () => {
    const params = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useParams"])();
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { video_bitrate, share_bitrate, default_layout, enable_video, enable_audio, use_dummy_device, bitrate_reservation_mbps, room_type, video_codec, is_debug } = query_string__WEBPACK_IMPORTED_MODULE_1___default.a.parse(window.location.search);
    const [roomId, setRoomId] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
    const [username, setUsername] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
    const onSubmitSuccess = () => {
        const encodedUsername = encodeURIComponent(username);
        let uriPath = `/room/${roomId}/?username=${encodedUsername}`;
        /* eslint-disable @typescript-eslint/naming-convention */
        if (video_bitrate && !isNaN(Number(video_bitrate))) {
            uriPath += `&video_bitrate=${video_bitrate}`;
        }
        if (share_bitrate && !isNaN(Number(share_bitrate))) {
            uriPath += `&share_bitrate=${share_bitrate}`;
        }
        if (default_layout) {
            uriPath += `&default_layout=${default_layout}`;
        }
        if (enable_video) {
            uriPath += `&enable_video=${enable_video}`;
        }
        if (enable_audio) {
            uriPath += `&enable_audio=${enable_audio}`;
        }
        if (use_dummy_device) {
            uriPath += `&use_dummy_device=${use_dummy_device}`;
        }
        if (bitrate_reservation_mbps && !isNaN(Number(bitrate_reservation_mbps))) {
            uriPath += `&bitrate_reservation_mbps=${bitrate_reservation_mbps}`;
        }
        if (room_type) {
            uriPath += `&room_type=${room_type}`;
        }
        if (video_codec && (video_codec === 'h264' || video_codec === 'vp8' || video_codec === 'vp9' || video_codec === 'h265' || video_codec === 'av1')) {
            uriPath += `&video_codec=${video_codec}`;
        }
        if (is_debug) {
            uriPath += `&is_debug=${is_debug}`;
        }
        /* eslint-enable @typescript-eslint/naming-convention */
        window.open(uriPath);
    };
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
        // URL paramsの`/room/:roomId/entrance` の roomId の部分を読み込んで roomId の初期値とする
        setRoomId(params.roomId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: "start-layout" },
        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_LoginEntranceFormFieldGroup__WEBPACK_IMPORTED_MODULE_4__["default"], { username: username, roomId: roomId, onChangeUsername: setUsername, onChangeRoomId: setRoomId, onSubmitSuccess: onSubmitSuccess })));
};
/* harmony default export */ __webpack_exports__["default"] = (Entrance);


/***/ }),

/***/ "./src/containers/IframePage/IframePage.css":
/*!**************************************************!*\
  !*** ./src/containers/IframePage/IframePage.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/containers/IframePage/index.tsx":
/*!*********************************************!*\
  !*** ./src/containers/IframePage/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IframePage_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IframePage.css */ "./src/containers/IframePage/IframePage.css");
/* harmony import */ var _IframePage_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_IframePage_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/api */ "./src/api.ts");
/* harmony import */ var _components_ErrorDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/ErrorDialog */ "./src/components/ErrorDialog/index.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/constants */ "./src/constants.ts");
/* harmony import */ var _lib_ls_conf_sdk__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/lib/ls-conf-sdk */ "./src/lib/ls-conf-sdk.js");
/* harmony import */ var _lib_ls_conf_sdk__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_lib_ls_conf_sdk__WEBPACK_IMPORTED_MODULE_9__);
// iframe を表示するページ










const CREATE_PARAMETERS = {
    defaultLayout: _constants__WEBPACK_IMPORTED_MODULE_8__["DEFAULT_LAYOUT"] || undefined,
    room: _constants__WEBPACK_IMPORTED_MODULE_8__["ROOM_CONFIG"],
    toolbar: _constants__WEBPACK_IMPORTED_MODULE_8__["TOOLBAR_CONFIG"],
    thetaZoomMaxRange: _constants__WEBPACK_IMPORTED_MODULE_8__["THETA_ZOOM_MAX_RANGE"],
    lsConfURL: _constants__WEBPACK_IMPORTED_MODULE_8__["LS_CONF_URL"] ? _constants__WEBPACK_IMPORTED_MODULE_8__["LS_CONF_URL"] : undefined,
    subView: _constants__WEBPACK_IMPORTED_MODULE_8__["SUBVIEW_CONFIG"],
    theme: _constants__WEBPACK_IMPORTED_MODULE_8__["THEME_CONFIG"],
};
const IframePage = () => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { username, video_bitrate, share_bitrate, default_layout, enable_video, enable_audio, use_dummy_device, bitrate_reservation_mbps, room_type, video_codec, is_debug } = query_string__WEBPACK_IMPORTED_MODULE_2___default.a.parse(window.location.search);
    const { roomId } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useParams"])();
    const iframeContainerRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
    const [lsConfIframe, setLsConfIframe] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null);
    const [errorMessage, setErrorMessage] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null);
    const showErrorDialog = errorMessage !== null;
    const connectionId = Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])();
    const bitrateReservation = bitrate_reservation_mbps && typeof bitrate_reservation_mbps === 'string' ? bitrate_reservation_mbps : undefined;
    const roomType = room_type && typeof room_type === 'string' ? room_type : undefined;
    const videoCodec = video_codec && (video_codec === 'h264' || video_codec === 'vp8' || video_codec === 'vp9' || video_codec === 'h265' || video_codec === 'av1') ? video_codec : undefined;
    const isDebug = Boolean(is_debug && typeof is_debug === 'string' && is_debug.toLowerCase() === 'true');
    const createAndConnectRoom = async () => {
        if (!username || !roomId || typeof username !== 'string') {
            // 現在 ls-conf-sdk への対応と同様にエラーをそのまま errorMessage に入れている
            // TODO(kdxu): ls-conf-sdk のシステムエラーに対するユーザーへのメッセージが仕様として策定され次第、こちらのエラー文言も合わせて修正する
            setErrorMessage('INVALID-PARAMETERS');
            return;
        }
        if (!iframeContainerRef.current) {
            // 現在 ls-conf-sdk への対応と同様にエラーをそのまま errorMessage に入れている
            // TODO(kdxu): ls-conf-sdk のシステムエラーに対するユーザーへのメッセージが仕様として策定され次第、こちらのエラー文言も合わせて修正する
            setErrorMessage('INVALID-IFRAME-CONTAINER');
            return;
        }
        let iframe;
        try {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            if (default_layout && typeof default_layout === 'string' && ['gallery', 'presentation', 'fullscreen'].includes(default_layout.toLowerCase())) {
                // eslint-disable-next-line @typescript-eslint/naming-convention
                CREATE_PARAMETERS.defaultLayout = default_layout.toLowerCase();
            }
            iframe = await _lib_ls_conf_sdk__WEBPACK_IMPORTED_MODULE_9___default.a.create(iframeContainerRef.current, CREATE_PARAMETERS);
        }
        catch (e) {
            setErrorMessage(e.message);
            return;
        }
        iframe.onShareRequested(async () => {
            let screenShareAccessToken;
            const screenShareConnectionId = Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])();
            try {
                screenShareAccessToken = await Object(_api__WEBPACK_IMPORTED_MODULE_6__["fetchAccessToken"])(roomId, screenShareConnectionId, bitrateReservation, roomType);
            }
            catch (e) {
                setErrorMessage(e.message);
                return;
            }
            const screenShareParameters = {
                connectionId: screenShareConnectionId,
                accessToken: screenShareAccessToken,
            };
            return screenShareParameters;
        });
        let accessToken;
        try {
            accessToken = await Object(_api__WEBPACK_IMPORTED_MODULE_6__["fetchAccessToken"])(roomId, connectionId, bitrateReservation, roomType);
        }
        catch (e) {
            setErrorMessage(e.message);
            return;
        }
        const connectOptions = {
            username: username,
            enableVideo: !enable_video ? false : Boolean(typeof enable_video === 'string' && enable_video.toLowerCase() === 'true'),
            enableAudio: !enable_audio ? true : Boolean(typeof enable_audio === 'string' && enable_audio.toLowerCase() === 'true'),
            maxVideoBitrate: Number(video_bitrate),
            maxShareBitrate: Number(share_bitrate),
            // eslint-disable-next-line @typescript-eslint/naming-convention
            useDummyDevice: Boolean(use_dummy_device && typeof use_dummy_device === 'string' && use_dummy_device.toLowerCase() === 'true'),
            signalingURL: _constants__WEBPACK_IMPORTED_MODULE_8__["SIGNALING_URL"],
            videoCodec: videoCodec,
        };
        iframe.addEventListener('error', async (e) => {
            setErrorMessage(e.message);
            let log = 'LSConfSample Log\n\n';
            log += `******************** Error Message ********************\n`;
            log += `${e.message}\n`;
            log += `******************** ApplicationLog *******************\n`;
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            log += `LSConfSample Version: v${__webpack_require__(/*! ../../../../frontend/package.json */ "./package.json").version}\n`;
            log += `LSConfURL: ${_constants__WEBPACK_IMPORTED_MODULE_8__["LS_CONF_URL"] || 'default'}\n`;
            log += `LSClientID: ${_constants__WEBPACK_IMPORTED_MODULE_8__["LS_CLIENT_ID"] || 'unknown'}\n`;
            log += `SignalingURL: ${_constants__WEBPACK_IMPORTED_MODULE_8__["SIGNALING_URL"] || 'default'}\n`;
            log += `UserAgent: ${window.navigator.userAgent}\n`;
            log += `******************** LSConfLog ++++********************\n`;
            try {
                log += await iframe.getLSConfLog();
            }
            catch {
                // ログ取得失敗時は出力ファイルに追記しない
            }
            if (e.error && e.error.toReportString) {
                log += `******************** toReportString *******************\n`;
                log += `${e.error.toReportString}`;
            }
            const fileName = `ls-conf-sample_${Object(date_fns_format__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(), 'yyyyMMdd_HHmmss')}.log`;
            const downLoadLink = document.createElement('a');
            downLoadLink.download = fileName;
            downLoadLink.href = URL.createObjectURL(new Blob([log], { type: 'text.plain' }));
            downLoadLink.dataset.downloadurl = ['text/plain', downLoadLink.download, downLoadLink.href].join(':');
            downLoadLink.click();
        }, { once: false });
        iframe.addEventListener('connected', () => {
            console.log('connected event occurred');
        });
        iframe.addEventListener('disconnected', () => {
            console.log('disconnected event occurred');
        });
        iframe.addEventListener('startRecording', async (e) => {
            const targetSubview = e.detail.subView;
            console.log(`startRecording: subView: ${JSON.stringify(targetSubview)}`);
            try {
                await iframe.addRecordingMember(targetSubview, connectionId);
            }
            catch (e) {
                console.warn(`Failed to addRecordingMember in startRecording event. Detail: ${JSON.stringify(e.detail)}`);
            }
        }, { once: false });
        iframe.addEventListener('stopRecording', async (e) => {
            const targetSubview = e.detail.subView;
            console.log(`stopRecording: subView: ${JSON.stringify(targetSubview)}`);
            try {
                await iframe.removeRecordingMember(targetSubview, connectionId);
            }
            catch (e) {
                console.warn(`Failed to removeRecordingMember in stopRecording event. Detail: ${JSON.stringify(e.detail)}`);
            }
        }, { once: false });
        try {
            await iframe.join(_constants__WEBPACK_IMPORTED_MODULE_8__["LS_CLIENT_ID"], accessToken, connectionId, connectOptions);
        }
        catch (e) {
            if (isDebug) {
                setErrorMessage(e.message);
                return;
            }
            window.close();
            return;
        }
        setLsConfIframe(iframe);
    };
    const onCloseErrorDialog = () => {
        setErrorMessage(null);
    };
    Object(react__WEBPACK_IMPORTED_MODULE_3__["useLayoutEffect"])(() => {
        createAndConnectRoom();
        return () => {
            if (lsConfIframe) {
                lsConfIframe.leave();
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", { ref: iframeContainerRef, className: "iframe-container" }),
        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_ErrorDialog__WEBPACK_IMPORTED_MODULE_7__["default"], { open: showErrorDialog, message: errorMessage, onClose: onCloseErrorDialog })));
};
/* harmony default export */ __webpack_exports__["default"] = (IframePage);


/***/ }),

/***/ "./src/containers/Login/Login.css":
/*!****************************************!*\
  !*** ./src/containers/Login/Login.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/containers/Login/index.tsx":
/*!****************************************!*\
  !*** ./src/containers/Login/index.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.css */ "./src/containers/Login/Login.css");
/* harmony import */ var _Login_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Login_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_LoginEntranceFormFieldGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/LoginEntranceFormFieldGroup */ "./src/components/LoginEntranceFormFieldGroup/index.tsx");



const Login = () => {
    const [roomId, setRoomId] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
    const [username, setUsername] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
    const onSubmitSuccess = () => {
        const encodedUsername = encodeURIComponent(username);
        window.open(`/room/${roomId}/?username=${encodedUsername}`);
    };
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "start-layout" },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_LoginEntranceFormFieldGroup__WEBPACK_IMPORTED_MODULE_2__["default"], { username: username, roomId: roomId, onChangeRoomId: setRoomId, onChangeUsername: setUsername, onSubmitSuccess: onSubmitSuccess })));
};
/* harmony default export */ __webpack_exports__["default"] = (Login);


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_theme_dist_mdc_theme_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/theme/dist/mdc.theme.css */ "./node_modules/@material/theme/dist/mdc.theme.css");
/* harmony import */ var _material_theme_dist_mdc_theme_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_theme_dist_mdc_theme_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _rmwc_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rmwc/theme */ "./node_modules/@rmwc/theme/next/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _containers_App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./containers/App */ "./src/containers/App/index.tsx");
/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./middleware */ "./src/middleware.ts");
/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./slice */ "./src/slice.ts");










const THEME_PROVIDER_OPTIONS = {
    primary: '#303030',
    background: '#f7f7fa',
    surface: '#fff',
    onPrimary: '#fff',
    secondary: '#661fff',
    error: '#b00020',
    onSecondary: 'rgba(255, 255, 255, 1)',
    onSurface: 'rgba(0, 0, 0, 0.87)',
    onError: '#fff',
    textPrimaryOnBackground: 'rgba(0, 0, 0, 0.87)',
    textSecondaryOnBackground: 'rgba(0, 0, 0, 0.54)',
    textHintOnBackground: 'rgba(0, 0, 0, 0.38)',
    textDisabledOnBackground: 'rgba(0, 0, 0, 0.38)',
    textIconOnBackground: 'rgba(0, 0, 0, 0.38)',
    textPrimaryOnLight: 'rgba(0, 0, 0, 0.87)',
    textSecondaryOnLight: 'rgba(0, 0, 0, 0.54)',
    textHintOnLight: 'rgba(0, 0, 0, 0.38)',
    textDisabledOnLight: 'rgba(0, 0, 0, 0.38)',
    textIconOnLight: 'rgba(0, 0, 0, 0.38)',
    textPrimaryOnDark: 'white',
    textSecondaryOnDark: 'rgba(255, 255, 255, 0.7)',
    textHintOnDark: 'rgba(255, 255, 255, 0.5)',
    textDisabledOnDark: 'rgba(255, 255, 255, 0.5)',
    textIconOnDark: 'rgba(255, 255, 255, 0.5)',
};
const rootElement = document.getElementById('root');
// mobile で 100vh だと アドレスバーからはみでてしまうケースに対応
// onload 時に innerHeight から `--vh` を計算
// 参考: https://dev.to/admitkard/mobile-issue-with-100vh-height-100-100vh-3-solutions-3nae
document.body.onload = () => {
    if (rootElement) {
        rootElement.style.setProperty('--vh', window.innerHeight / 100 + 'px');
    }
};
// window.resize 時に `--vh` を再計算
window.addEventListener('resize', () => {
    // window.innerHeight の変更に追従するため、少し遅延させる
    window.setTimeout(() => {
        if (rootElement) {
            rootElement.style.setProperty('--vh', window.innerHeight / 100 + 'px');
        }
    }, 300);
});
const rootReducer = _slice__WEBPACK_IMPORTED_MODULE_9__["default"].reducer;
// https://redux.js.org/redux-toolkit/overview#whats-included
// devTools Extention はデフォルトで ON になっている
const store = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__["configureStore"])({
    reducer: rootReducer,
    middleware: _middleware__WEBPACK_IMPORTED_MODULE_8__["default"],
});
react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.render(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_6__["Provider"], { store: store },
    react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_rmwc_theme__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], { options: THEME_PROVIDER_OPTIONS },
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_containers_App__WEBPACK_IMPORTED_MODULE_7__["default"], null))), rootElement);


/***/ }),

/***/ "./src/lib/lang/en.json":
/*!******************************!*\
  !*** ./src/lib/lang/en.json ***!
  \******************************/
/*! exports provided: deviceSettingsDialog, recordingNotification, recordingSettingsDialog, subView, subViewMenu, presentationLayout, entranceScreen, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"deviceSettingsDialog\":{\"title\":\"Device Settings\",\"camera\":\"Camera\",\"mic\":\"Mic\",\"speaker\":\"Speaker\",\"notUsed\":\"Not used\",\"apply\":\"Apply\",\"cancel\":\"Cancel\"},\"recordingNotification\":{\"recording\":\"Recording: \",\"noName\":\"No Name\"},\"recordingSettingsDialog\":{\"title\":\"Recording Settings\",\"mimeType\":\"MIME Type\",\"audioMixing\":\"Audio Mixing\",\"mixAll\":\"Mix All\",\"targetOnly\":\"Target Only\",\"audioBitrate\":\"Audio Bitrate\",\"videoBitrate\":\"Video Bitrate\",\"start\":\"Start\",\"cancel\":\"Cancel\"},\"subView\":{\"noName\":\"No Name\"},\"subViewMenu\":{\"presentation\":\"Presentation\",\"gallery\":\"Gallery\",\"fullscreen\":\"FullScreen\",\"exitFullscreen\":\"Exit FullScreen\",\"sharePoV\":\"Share PoV\",\"startRecording\":\"Start Recording\",\"stopRecording\":\"Stop Recording\"},\"presentationLayout\":{\"horizontalButtonTips\":\"Switch to Horizontal\",\"verticalButtonTips\":\"Switch to Vertical\"},\"entranceScreen\":{\"click\":\"Click to start\"}}");

/***/ }),

/***/ "./src/lib/lang/ja.json":
/*!******************************!*\
  !*** ./src/lib/lang/ja.json ***!
  \******************************/
/*! exports provided: deviceSettingsDialog, recordingNotification, recordingSettingsDialog, subView, subViewMenu, presentationLayout, entranceScreen, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"deviceSettingsDialog\":{\"title\":\"デバイス設定\",\"camera\":\"カメラ\",\"mic\":\"マイク\",\"speaker\":\"スピーカー\",\"notUsed\":\"使用しない\",\"apply\":\"適用\",\"cancel\":\"キャンセル\"},\"recordingNotification\":{\"recording\":\"録画中: \",\"noName\":\"No Name\"},\"recordingSettingsDialog\":{\"title\":\"録画設定\",\"mimeType\":\"MIME Type\",\"audioMixing\":\"Audio Mixing\",\"mixAll\":\"Mix All\",\"targetOnly\":\"Target Only\",\"audioBitrate\":\"Audio Bitrate\",\"videoBitrate\":\"Video Bitrate\",\"start\":\"開始する\",\"cancel\":\"キャンセル\"},\"subView\":{\"noName\":\"No Name\"},\"subViewMenu\":{\"presentation\":\"拡大表示\",\"gallery\":\"一覧表示\",\"fullscreen\":\"全画面表示\",\"exitFullscreen\":\"全画面解除\",\"sharePoV\":\"視点共有\",\"startRecording\":\"録画開始\",\"stopRecording\":\"録画停止\"},\"presentationLayout\":{\"horizontalButtonTips\":\"横並びに切替\",\"verticalButtonTips\":\"縦並びに切替\"},\"entranceScreen\":{\"click\":\"クリックして開始\"}}");

/***/ }),

/***/ "./src/lib/ls-conf-sdk.js":
/*!********************************!*\
  !*** ./src/lib/ls-conf-sdk.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * ls-conf-sdk
 * ls-conf-sdk
 * @version: 3.0.1
 **/

(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, (function () { 'use strict';

  // LSConfの規定のイベント
  class LSConfEvent {
      constructor(type, eventInit) {
          this.type = type;
          if (type === 'error') {
              this.event = new ErrorEvent(type, eventInit);
          }
          else if (eventInit) {
              this.event = new CustomEvent(type, eventInit);
          }
          else {
              this.event = new Event(type);
          }
      }
  }
  // ls-conf-sdk のバージョン
  const LS_CONF_SDK_VERSION = '3.0.1';
  const DEFAULT_LS_CONF_URL = `https://conf.livestreaming.mw.smart-integration.ricoh.com/${LS_CONF_SDK_VERSION}/index.html`;
  const DEFAULT_SIGNALING_URL = 'wss://signaling.livestreaming.mw.smart-integration.ricoh.com/v1/room';
  const DEFAULT_MAX_BITRATE = 2000;
  const DEFAULT_USE_DUMMY_DEVICE = false;
  const DEFAULT_VIDEO_CODEC = 'h264';
  const DEFAULT_CREATE_TIMEOUT_MSEC = 15000;
  const DEFAULT_JOIN_TIMEOUT_MSEC = 10000;
  const DEFAULT_MODE = 'normal';
  const REQUEST_ERRORS = {
      CreateArgsInvalid: {
          code: 4010,
          type: 'RequestError',
          error: 'CreateArgsInvalid',
      },
      JoinArgsInvalid: {
          code: 4020,
          type: 'RequestError',
          error: 'JoinArgsInvalid',
      },
      SetArgsInvalid: {
          code: 4030,
          type: 'RequestError',
          error: 'SetArgsInvalid',
      },
      CreateFailed: {
          code: 4040,
          type: 'RequestError',
          error: 'CreateFailed',
      },
      CreateTimeout: {
          code: 4041,
          type: 'RequestError',
          error: 'CreateTimeout',
      },
      JoinFailed: {
          code: 4050,
          type: 'RequestError',
          error: 'JoinFailed',
      },
      JoinFailedTimeout: {
          code: 4051,
          type: 'RequestError',
          error: 'JoinFailedTimeout',
      },
      CloseFailed: {
          code: 4060,
          type: 'RequestError',
          error: 'CloseFailed',
      },
      CameraMuteFailed: {
          code: 4070,
          type: 'RequestError',
          error: 'CameraMuteFailed',
      },
      MicMuteFailed: {
          code: 4080,
          type: 'RequestError',
          error: 'MicMuteFailed',
      },
      ShareRequestFailed: {
          code: 4090,
          type: 'RequestError',
          error: 'ShareRequestFailed',
      },
      GetReportFailed: {
          code: 4100,
          type: 'RequestError',
          error: 'GetReportFailed',
      },
      GetReportError: {
          code: 4101,
          type: 'RequestError',
          error: 'GetReportError',
      },
      ChangeLayoutFailed: {
          code: 4110,
          type: 'RequestError',
          error: 'ChangeLayoutFailed',
      },
      GetDeviceFailed: {
          code: 4120,
          type: 'RequestError',
          error: 'GetDeviceFailed',
      },
      GetSubViewsFailed: {
          code: 4130,
          type: 'RequestError',
          error: 'GetSubViewsFailed',
      },
      GetSubViewsError: {
          code: 4131,
          type: 'RequestError',
          error: 'GetSubViewsError',
      },
      GetPoVFailed: {
          code: 4140,
          type: 'RequestError',
          error: 'GetPoVFailed',
      },
      GetPoVError: {
          code: 4141,
          type: 'RequestError',
          error: 'GetPoVError',
      },
      GetPoVArgsInvalid: {
          code: 4150,
          type: 'RequestError',
          error: 'GetPoVArgsInvalid',
      },
      SetPoVFailed: {
          code: 4160,
          type: 'RequestError',
          error: 'SetPoVFailed',
      },
      SetPoVError: {
          code: 4161,
          type: 'RequestError',
          error: 'SetPoVError',
      },
      SetPoVArgsInvalid: {
          code: 4170,
          type: 'RequestError',
          error: 'SetPoVArgsInvalid',
      },
      ShareRequestArgsInvalid: {
          code: 4180,
          type: 'RequestError',
          error: 'ShareRequestArgsInvalid',
      },
      HighlightArgsInvalid: {
          code: 4190,
          type: 'RequestError',
          error: 'HighlightArgsInvalid',
      },
      HighlightFailed: {
          code: 4200,
          type: 'RequestError',
          error: 'HighlightFailed',
      },
      HighlightError: {
          code: 4210,
          type: 'RequestError',
          error: 'HighlightError',
      },
      AddRecordingMemberArgsInvalid: {
          code: 4220,
          type: 'RequestError',
          error: 'AddRecordingMemberArgsInvalid',
      },
      AddRecordingMemberFailed: {
          code: 4230,
          type: 'RequestError',
          error: 'AddRecordingMemberFailed',
      },
      AddRecordingMemberError: {
          code: 4240,
          type: 'RequestError',
          error: 'AddRecordingMemberError',
      },
      RemoveRecordingMemberArgsInvalid: {
          code: 4250,
          type: 'RequestError',
          error: 'RemoveRecordingMemberArgsInvalid',
      },
      RemoveRecordingMemberFailed: {
          code: 4260,
          type: 'RequestError',
          error: 'RemoveRecordingMemberFailed',
      },
      RemoveRecordingMemberError: {
          code: 4270,
          type: 'RequestError',
          error: 'RemoveRecordingMemberError',
      },
      SetCameraDeviceFailed: {
          code: 4280,
          type: 'RequestError',
          error: 'SetCameraDeviceFailed',
      },
      SetMicDeviceFailed: {
          code: 4290,
          type: 'RequestError',
          error: 'SetMicDeviceFailed',
      },
      GetMediaDevicesFailed: {
          code: 4300,
          type: 'RequestError',
          error: 'GetMediaDevicesFailed',
      },
      GetMediaDevicesError: {
          code: 4310,
          type: 'RequestError',
          error: 'GetMediaDevicesError',
      },
      GetCaptureImageFailed: {
          code: 4320,
          type: 'RequestError',
          error: 'GetCaptureImageFailed',
      },
      GetCaptureImageError: {
          code: 4330,
          type: 'RequestError',
          error: 'GetCaptureImageError',
      },
      GetCaptureImageErrorCameraMuted: {
          code: 4331,
          type: 'RequestError',
          error: 'GetCaptureImageErrorCameraMuted',
      },
      GetCaptureImageArgsInvalid: {
          code: 4340,
          type: 'RequestError',
          error: 'GetCaptureImageArgsInvalid',
      },
      StartRecordingFailed: {
          code: 4350,
          type: 'RequestError',
          error: 'StartRecordingFailed',
      },
      StartReceiveVideoFailed: {
          code: 4360,
          type: 'RequestError',
          error: 'StartReceiveVideoFailed',
      },
      StartReceiveVideoError: {
          code: 4370,
          type: 'RequestError',
          error: 'StartReceiveVideoError',
      },
      StartReceiveVideoArgsInvalid: {
          code: 4380,
          type: 'RequestError',
          error: 'StartReceiveVideoArgsInvalid',
      },
      StopReceiveVideoFailed: {
          code: 4390,
          type: 'RequestError',
          error: 'StopReceiveVideoFailed',
      },
      StopReceiveVideoError: {
          code: 4400,
          type: 'RequestError',
          error: 'StopReceiveVideoError',
      },
      StopReceiveVideoArgsInvalid: {
          code: 4410,
          type: 'RequestError',
          error: 'StopReceiveVideoArgsInvalid',
      },
      GetLSConfLogFailed: {
          code: 4420,
          type: 'RequestError',
          error: 'GetLSConfLogFailed',
      },
      GetLSConfLogError: {
          code: 4430,
          type: 'RequestError',
          error: 'GetLSConfLogError',
      },
      EnablePointerFailed: {
          code: 4440,
          type: 'RequestError',
          error: 'EnablePointerFailed',
      },
      UpdatePointerArgsInvalid: {
          code: 4450,
          type: 'RequestError',
          error: 'UpdatePointerArgsInvalid',
      },
      UpdatePointerFailed: {
          code: 4460,
          type: 'RequestError',
          error: 'UpdatePointerFailed',
      },
      UpdatePointerError: {
          code: 4470,
          type: 'RequestError',
          error: 'UpdatePointerError',
      },
      ModeInvalid: {
          code: 4480,
          type: 'RequestError',
          error: 'ModeInvalid',
      },
      ChangeLayoutArgsInvalid: {
          code: 4490,
          type: 'RequestError',
          error: 'ChangeLayoutArgsInvalid',
      },
  };
  const INTERNAL_ERRORS = {
      InternalError5001: {
          code: 5001,
          type: 'InternalError',
          error: 'InternalError5001',
      },
      InternalError5002: {
          code: 5002,
          type: 'InternalError',
          error: 'InternalError5002',
      },
  };
  class LSConferenceIframeError extends Error {
      constructor(errorDetail) {
          super(errorDetail.error);
          this.detail = errorDetail;
      }
  }
  class LSConferenceIframe {
      constructor(parentElement) {
          this.logCallbacks = new Map();
          this.parentElement = parentElement;
          this.iframeElement = document.createElement('iframe');
          this.lsConfURL = DEFAULT_LS_CONF_URL;
          this.iframeElement.src = DEFAULT_LS_CONF_URL;
          this.clientId = null;
          this.connectOptions = null;
          this.state = 'idle';
          this.shareRequestedCallback = () => { };
          this.joinCallback = { success: () => { }, error: () => { }, accepted: () => { } };
          this.getSubViewsCallback = { success: () => { }, error: () => { } };
          this.highlightCallback = { success: () => { }, error: () => { } };
          this.getPoVCallback = { success: () => { }, error: () => { } };
          this.setPoVCallback = { success: () => { }, error: () => { } };
          this.addRecordingMemberCallback = { success: () => { }, error: () => { } };
          this.removeRecordingMemberCallback = { success: () => { }, error: () => { } };
          this.getMediaDevicesCallback = { success: () => { }, error: () => { } };
          this.updatePointerCallback = { success: () => { }, error: () => { } };
          this.getCaptureImageCallback = { success: () => { }, error: () => { } };
          this.getLSConfLogCallback = { success: () => { }, error: () => { } };
          this.startReceiveVideoCallback = { success: () => { }, error: () => { } };
          this.stopReceiveVideoCallback = { success: () => { }, error: () => { } };
          this.eventListeners = new Map();
          this.applicationEventListeners = new Map();
      }
      setWindowMessageCallback() {
          window.addEventListener('message', async (event) => {
              const data = event.data;
              if (!this.iframeElement.contentWindow) {
                  throw new LSConferenceIframeError(INTERNAL_ERRORS['InternalError5001']);
              }
              if (data.type === 'shareRequest' && this.connectOptions) {
                  let shareParams = undefined;
                  try {
                      shareParams = await this.shareRequestedCallback();
                  }
                  catch (e) {
                      console.warn('Exception occurred in onShareRequested.', e);
                  }
                  if (!shareParams || !this.validateScreenShareParameters(shareParams)) {
                      const error = new LSConferenceIframeError(REQUEST_ERRORS['ShareRequestArgsInvalid']);
                      this.dispatchEvent(new LSConfEvent('error', error));
                      throw error;
                  }
                  // screen share の role, mediaType は固定
                  const postMessageParameters = {
                      type: 'connectShare',
                      clientId: this.clientId,
                      accessToken: shareParams.accessToken,
                      connectionId: shareParams.connectionId,
                      role: 'sendonly',
                      mediaType: 'screenshare',
                      connectOptions: this.connectOptions,
                  };
                  if (!this.iframeElement.contentWindow) {
                      throw new LSConferenceIframeError(INTERNAL_ERRORS['InternalError5001']);
                  }
                  try {
                      this.iframeElement.contentWindow.postMessage(postMessageParameters, this.lsConfURL);
                  }
                  catch (e) {
                      const error = new LSConferenceIframeError(REQUEST_ERRORS['ShareRequestFailed']);
                      this.dispatchEvent(new LSConfEvent('error', error));
                      throw error;
                  }
              }
              else if (data.type === 'log') {
                  const callback = this.logCallbacks.get(data.logType);
                  if (callback) {
                      if (data.error) {
                          const error = new LSConferenceIframeError(REQUEST_ERRORS['GetReportError']);
                          callback.error(error);
                      }
                      else {
                          callback.success(data.log);
                      }
                      this.logCallbacks.delete(data.logType);
                  }
              }
              else if (data.type === 'recording') {
                  if (data.error) {
                      throw new LSConferenceIframeError(INTERNAL_ERRORS['InternalError5002']);
                  }
              }
              else if (data.type === 'startRecording') {
                  if (data.error) {
                      const error = new LSConferenceIframeError(REQUEST_ERRORS['StartRecordingFailed']);
                      const eventInitDict = {
                          error: error,
                          message: `code: ${error.detail.code}, type: ${error.detail.type}, error: ${error.detail.error}, description: ${data.error}`,
                      };
                      this.dispatchEvent(new LSConfEvent('error', eventInitDict));
                  }
                  else {
                      this.dispatchEvent(new LSConfEvent('startRecording', { detail: { subView: data.subView } }));
                  }
              }
              else if (data.type === 'stopRecording') {
                  this.dispatchEvent(new LSConfEvent('stopRecording', { detail: { subView: data.subView } }));
              }
              else if (data.type === 'addRecordingMember') {
                  if (data.error) {
                      const error = new LSConferenceIframeError(REQUEST_ERRORS['AddRecordingMemberError']);
                      this.addRecordingMemberCallback.error(error);
                  }
                  else {
                      this.addRecordingMemberCallback.success();
                  }
              }
              else if (data.type === 'removeRecordingMember') {
                  if (data.error) {
                      const error = new LSConferenceIframeError(REQUEST_ERRORS['RemoveRecordingMemberError']);
                      this.removeRecordingMemberCallback.error(error);
                  }
                  else {
                      this.removeRecordingMemberCallback.success();
                  }
              }
              else if (data.type === 'connected') {
                  if (data.error) {
                      this.state = 'created';
                      const error = new LSConferenceIframeError(REQUEST_ERRORS['JoinFailed']);
                      this.joinCallback.error(error);
                  }
                  else {
                      this.state = 'open';
                      this.joinCallback.success();
                  }
                  this.dispatchEvent(new LSConfEvent('connected'));
              }
              else if (data.type === 'connectCanceled') {
                  this.state = 'created';
              }
              else if (data.type === 'connectAccepted') {
                  if (data.error) {
                      this.state = 'created';
                      const error = new LSConferenceIframeError(REQUEST_ERRORS['JoinFailed']);
                      this.joinCallback.error(error);
                  }
                  else {
                      this.joinCallback.accepted();
                  }
              }
              else if (data.type === 'disconnected') {
                  this.state = 'created';
                  this.dispatchEvent(new LSConfEvent('disconnected'));
              }
              else if (data.type === 'screenShareConnected') {
                  this.dispatchEvent(new LSConfEvent('screenShareConnected'));
              }
              else if (data.type === 'screenShareDisconnected') {
                  this.dispatchEvent(new LSConfEvent('screenShareDisconnected'));
              }
              else if (data.type === 'remoteConnectionAdded') {
                  const event = new LSConfEvent('remoteConnectionAdded', {
                      detail: {
                          connectionId: data.connectionId,
                          username: data.username,
                          mediaType: data.mediaType,
                          parentConnectionId: data.parentConnectionId,
                      },
                  });
                  this.dispatchEvent(event);
              }
              else if (data.type === 'remoteConnectionRemoved') {
                  const event = new LSConfEvent('remoteConnectionRemoved', {
                      detail: {
                          connectionId: data.connectionId,
                          username: data.username,
                          mediaType: data.mediaType,
                          parentConnectionId: data.parentConnectionId,
                      },
                  });
                  this.dispatchEvent(event);
              }
              else if (data.type === 'remoteTrackAdded') {
                  const event = new LSConfEvent('remoteTrackAdded', {
                      detail: {
                          subView: data.subView,
                          kind: data.kind,
                      },
                  });
                  this.dispatchEvent(event);
              }
              else if (data.type === 'getDeviceFailed') {
                  const error = new LSConferenceIframeError(REQUEST_ERRORS['GetDeviceFailed']);
                  this.dispatchEvent(new LSConfEvent('error', error));
              }
              else if (data.type === 'getSubViews') {
                  if (data.error) {
                      const error = new LSConferenceIframeError(REQUEST_ERRORS['GetSubViewsError']);
                      this.getSubViewsCallback.error(error);
                  }
                  else {
                      this.getSubViewsCallback.success(data.subViews);
                  }
              }
              else if (data.type === 'highlight') {
                  if (data.error) {
                      const error = new LSConferenceIframeError(REQUEST_ERRORS['HighlightError']);
                      this.highlightCallback.error(error);
                  }
                  else {
                      this.highlightCallback.success();
                  }
              }
              else if (data.type === 'sharePoV') {
                  const { subView, poV } = data;
                  this.dispatchEvent(new LSConfEvent('sharePoV', { detail: { subView, poV } }));
              }
              else if (data.type === 'getPoV') {
                  if (data.error) {
                      const error = new LSConferenceIframeError(REQUEST_ERRORS['GetPoVError']);
                      this.getPoVCallback.error(error);
                  }
                  else {
                      this.getPoVCallback.success(data.poV);
                  }
              }
              else if (data.type === 'setPoV') {
                  if (data.error) {
                      const error = new LSConferenceIframeError(REQUEST_ERRORS['SetPoVError']);
                      this.setPoVCallback.error(error);
                  }
                  else {
                      this.setPoVCallback.success();
                  }
              }
              else if (data.type === 'getMediaDevices') {
                  if (data.error) {
                      const error = new LSConferenceIframeError(REQUEST_ERRORS['GetMediaDevicesError']);
                      this.getMediaDevicesCallback.error(error);
                  }
                  else {
                      this.getMediaDevicesCallback.success(data.devices);
                  }
              }
              else if (data.type === 'updatePointer') {
                  if (data.error) {
                      const error = new LSConferenceIframeError(REQUEST_ERRORS['UpdatePointerError']);
                      this.updatePointerCallback.error(error);
                  }
                  else {
                      this.updatePointerCallback.success();
                  }
              }
              else if (data.type === 'getCaptureImage') {
                  if (data.error) {
                      if (data.errorType === 'GetCaptureImageErrorCameraMuted') {
                          const error = new LSConferenceIframeError(REQUEST_ERRORS['GetCaptureImageErrorCameraMuted']);
                          this.getCaptureImageCallback.error(error);
                      }
                      else {
                          const error = new LSConferenceIframeError(REQUEST_ERRORS['GetCaptureImageError']);
                          this.getCaptureImageCallback.error(error);
                      }
                  }
                  else {
                      this.getCaptureImageCallback.success(data.blob);
                  }
              }
              else if (data.type === 'applicationEvent') {
                  this.dispatchApplicationEvent(new CustomEvent(data.eventId, { detail: data.args }));
              }
              else if (data.type === 'getLSConfLog') {
                  if (data.error) {
                      const error = new LSConferenceIframeError(REQUEST_ERRORS['GetLSConfLogError']);
                      this.getLSConfLogCallback.error(error);
                  }
                  else {
                      this.getLSConfLogCallback.success(data.lsConfLog);
                  }
              }
              else if (data.type === 'startReceiveVideo') {
                  if (data.error) {
                      const error = new LSConferenceIframeError(REQUEST_ERRORS['StartReceiveVideoError']);
                      this.startReceiveVideoCallback.error(error);
                  }
                  else {
                      this.startReceiveVideoCallback.success();
                  }
              }
              else if (data.type === 'stopReceiveVideo') {
                  if (data.error) {
                      const error = new LSConferenceIframeError(REQUEST_ERRORS['StopReceiveVideoError']);
                      this.stopReceiveVideoCallback.error(error);
                  }
                  else {
                      this.stopReceiveVideoCallback.success();
                  }
              }
              else if (data.type === 'error' && data.error) {
                  const eventInitDict = {
                      error: data.error,
                      message: `code: ${data.error.detail.code}, type: ${data.error.detail.type}, error: ${data.error.detail.error}`,
                  };
                  if (this.state === 'connecting') {
                      this.state = 'created';
                      this.joinCallback.error(new LSConferenceIframeError(REQUEST_ERRORS['JoinFailed']));
                  }
                  this.dispatchEvent(new LSConfEvent('error', eventInitDict));
              }
          });
      }
      validateCreateParameters(parameters) {
          if (parameters.thetaZoomMaxRange && typeof parameters.thetaZoomMaxRange !== 'number') {
              return false;
          }
          if (parameters.defaultLayout !== undefined && parameters.defaultLayout !== 'gallery' && parameters.defaultLayout !== 'presentation' && parameters.defaultLayout !== 'fullscreen') {
              return false;
          }
          if (parameters.room !== undefined) {
              if (typeof parameters.room.entranceScreen !== undefined && parameters.room.entranceScreen !== 'none' && parameters.room.entranceScreen !== 'click') {
                  return false;
              }
          }
          if (parameters.toolbar !== undefined) {
              if (typeof parameters.toolbar !== 'object') {
                  return false;
              }
              if (parameters.toolbar.isHidden !== undefined && typeof parameters.toolbar.isHidden !== 'boolean') {
                  return false;
              }
              if (parameters.toolbar.isHiddenCameraButton !== undefined && typeof parameters.toolbar.isHiddenCameraButton !== 'boolean') {
                  return false;
              }
              if (parameters.toolbar.isHiddenMicButton !== undefined && typeof parameters.toolbar.isHiddenMicButton !== 'boolean') {
                  return false;
              }
              if (parameters.toolbar.isHiddenScreenShareButton !== undefined && typeof parameters.toolbar.isHiddenScreenShareButton !== 'boolean') {
                  return false;
              }
              if (parameters.toolbar.isHiddenParticipantsButton !== undefined && typeof parameters.toolbar.isHiddenParticipantsButton !== 'boolean') {
                  return false;
              }
              if (parameters.toolbar.isHiddenDeviceSettingButton !== undefined && typeof parameters.toolbar.isHiddenDeviceSettingButton !== 'boolean') {
                  return false;
              }
              if (parameters.toolbar.isHiddenExitButton !== undefined && typeof parameters.toolbar.isHiddenExitButton !== 'boolean') {
                  return false;
              }
              if (parameters.toolbar.customItems !== undefined) {
                  if (typeof parameters.toolbar.customItems !== 'object') {
                      return false;
                  }
                  let isValid = true;
                  parameters.toolbar.customItems.forEach((item) => {
                      if (item.iconName !== undefined && typeof item.iconName !== 'string') {
                          isValid = false;
                      }
                      if (item.type !== undefined && typeof item.type !== 'string') {
                          isValid = false;
                      }
                  });
                  if (!isValid) {
                      return false;
                  }
              }
          }
          if (parameters.subView !== undefined) {
              if (typeof parameters.subView !== 'object') {
                  return false;
              }
              if (parameters.subView.enableAutoVideoReceiving !== undefined && typeof parameters.subView.enableAutoVideoReceiving !== 'boolean') {
                  return false;
              }
              if (parameters.subView.menu !== undefined) {
                  if (typeof parameters.subView.menu !== 'object') {
                      return false;
                  }
                  if (parameters.subView.menu.isHidden !== undefined && typeof parameters.subView.menu.isHidden !== 'boolean') {
                      return false;
                  }
                  if (parameters.subView.menu.isHiddenRecordingButton !== undefined && typeof parameters.subView.menu.isHiddenRecordingButton !== 'boolean') {
                      return false;
                  }
                  if (parameters.subView.menu.isHiddenSharePoVButton !== undefined && typeof parameters.subView.menu.isHiddenSharePoVButton !== 'boolean') {
                      return false;
                  }
              }
              if (parameters.subView.theta !== undefined) {
                  if (typeof parameters.subView.theta !== 'object') {
                      return false;
                  }
                  if (parameters.subView.theta.isHiddenFramerate !== undefined && typeof parameters.subView.theta.isHiddenFramerate !== 'boolean') {
                      return false;
                  }
              }
          }
          if (parameters.podCoordinates !== undefined) {
              if (typeof parameters.podCoordinates !== 'object') {
                  return false;
              }
              if (parameters.podCoordinates.upperLeft !== undefined && !Array.isArray(parameters.podCoordinates.upperLeft)) {
                  return false;
              }
              if (parameters.podCoordinates.lowerRight !== undefined && !Array.isArray(parameters.podCoordinates.lowerRight)) {
                  return false;
              }
          }
          if (parameters.lsConfURL !== undefined) {
              try {
                  new URL(parameters.lsConfURL);
              }
              catch (e) {
                  return false;
              }
          }
          if (parameters.theme !== undefined) {
              if (typeof parameters.theme !== 'object') {
                  return false;
              }
              if (parameters.theme.primary !== undefined && typeof parameters.theme.primary !== 'string') {
                  return false;
              }
              if (parameters.theme.background !== undefined && typeof parameters.theme.background !== 'string') {
                  return false;
              }
              if (parameters.theme.surface !== undefined && typeof parameters.theme.surface !== 'string') {
                  return false;
              }
              if (parameters.theme.onPrimary !== undefined && typeof parameters.theme.onPrimary !== 'string') {
                  return false;
              }
              if (parameters.theme.primaryTextColor !== undefined && typeof parameters.theme.primaryTextColor !== 'string') {
                  return false;
              }
              if (parameters.theme.secondaryTextColor !== undefined && typeof parameters.theme.secondaryTextColor !== 'string') {
                  return false;
              }
              if (parameters.theme.components !== undefined) {
                  if (typeof parameters.theme.components !== 'object') {
                      return false;
                  }
                  if (parameters.theme.components.participantsVideoContainer !== undefined) {
                      if (typeof parameters.theme.components.participantsVideoContainer !== 'object') {
                          return false;
                      }
                      if (parameters.theme.components.participantsVideoContainer.background !== undefined && typeof parameters.theme.components.participantsVideoContainer.background !== 'string') {
                          return false;
                      }
                      if (parameters.theme.components.participantsVideoContainer.subViewSwitchBackgroundColor !== undefined &&
                          typeof parameters.theme.components.participantsVideoContainer.subViewSwitchBackgroundColor !== 'string') {
                          return false;
                      }
                      if (parameters.theme.components.participantsVideoContainer.subViewSwitchIconColor !== undefined &&
                          typeof parameters.theme.components.participantsVideoContainer.subViewSwitchIconColor !== 'string') {
                          return false;
                      }
                  }
                  if (parameters.theme.components.toolbar !== undefined) {
                      if (typeof parameters.theme.components.toolbar !== 'object') {
                          return false;
                      }
                      if (parameters.theme.components.toolbar.background !== undefined && typeof parameters.theme.components.toolbar.background !== 'string') {
                          return false;
                      }
                      if (parameters.theme.components.toolbar.iconColor !== undefined && typeof parameters.theme.components.toolbar.iconColor !== 'string') {
                          return false;
                      }
                  }
                  if (parameters.theme.components.video !== undefined) {
                      if (typeof parameters.theme.components.video !== 'object') {
                          return false;
                      }
                      if (parameters.theme.components.video.background !== undefined && typeof parameters.theme.components.video.background !== 'string') {
                          return false;
                      }
                      if (parameters.theme.components.video.textColor !== undefined && typeof parameters.theme.components.video.textColor !== 'string') {
                          return false;
                      }
                      if (parameters.theme.components.video.textBackgroundColor !== undefined && typeof parameters.theme.components.video.textBackgroundColor !== 'string') {
                          return false;
                      }
                      if (parameters.theme.components.video.iconColor !== undefined && typeof parameters.theme.components.video.iconColor !== 'string') {
                          return false;
                      }
                      if (parameters.theme.components.video.menuTextColor !== undefined && typeof parameters.theme.components.video.menuTextColor !== 'string') {
                          return false;
                      }
                      if (parameters.theme.components.video.menuBackgroundColor !== undefined && typeof parameters.theme.components.video.menuBackgroundColor !== 'string') {
                          return false;
                      }
                      if (parameters.theme.components.video.highlightBorderColor !== undefined && typeof parameters.theme.components.video.highlightBorderColor !== 'string') {
                          return false;
                      }
                      if (parameters.theme.components.video.highlightShadowColor !== undefined && typeof parameters.theme.components.video.highlightShadowColor !== 'string') {
                          return false;
                      }
                  }
                  if (parameters.theme.components.dialog !== undefined) {
                      if (typeof parameters.theme.components.dialog !== 'object') {
                          return false;
                      }
                      if (parameters.theme.components.dialog.inputFocusColor !== undefined && typeof parameters.theme.components.dialog.inputFocusColor !== 'string') {
                          return false;
                      }
                  }
              }
          }
          return true;
      }
      validateJoinParameters(clientId, accessToken, connectionId, connectOptions) {
          if (typeof clientId !== 'string') {
              return false;
          }
          if (typeof accessToken !== 'string') {
              return false;
          }
          if (typeof connectionId !== 'string') {
              return false;
          }
          if (typeof connectOptions.username !== 'string') {
              return false;
          }
          if (typeof connectOptions.enableAudio !== 'boolean') {
              return false;
          }
          if (typeof connectOptions.enableVideo !== 'boolean') {
              return false;
          }
          if (connectOptions.mode !== undefined) {
              if (typeof connectOptions.mode !== 'string') {
                  return false;
              }
              if (connectOptions.mode !== 'normal' && connectOptions.mode !== 'viewer') {
                  return false;
              }
          }
          if (connectOptions.maxVideoBitrate !== undefined) {
              if (typeof connectOptions.maxVideoBitrate !== 'number') {
                  return false;
              }
              if (connectOptions.maxVideoBitrate < 100 || 20000 < connectOptions.maxVideoBitrate) {
                  return false;
              }
          }
          if (connectOptions.maxShareBitrate !== undefined) {
              if (typeof connectOptions.maxShareBitrate !== 'number') {
                  return false;
              }
              if (connectOptions.maxShareBitrate < 100 || 20000 < connectOptions.maxShareBitrate) {
                  return false;
              }
          }
          if (connectOptions.useDummyDevice !== undefined) {
              if (typeof connectOptions.useDummyDevice !== 'boolean') {
                  return false;
              }
          }
          if (connectOptions.signalingURL !== undefined) {
              try {
                  new URL(connectOptions.signalingURL);
              }
              catch (e) {
                  return false;
              }
          }
          if (connectOptions.videoCodec !== undefined) {
              if (typeof connectOptions.videoCodec !== 'string') {
                  return false;
              }
              if (connectOptions.videoCodec !== 'h264' &&
                  connectOptions.videoCodec !== 'vp8' &&
                  connectOptions.videoCodec !== 'vp9' &&
                  connectOptions.videoCodec !== 'h265' &&
                  connectOptions.videoCodec !== 'av1') {
                  return false;
              }
          }
          if (connectOptions.videoAudioConstraints !== undefined && typeof connectOptions.videoAudioConstraints !== 'object') {
              return false;
          }
          if (connectOptions.screenShareConstraints !== undefined && typeof connectOptions.screenShareConstraints !== 'object') {
              return false;
          }
          return true;
      }
      validateScreenShareParameters(param) {
          if (typeof param.accessToken !== 'string') {
              return false;
          }
          if (typeof param.connectionId !== 'string') {
              return false;
          }
          return true;
      }
      validateSubViewType(subView) {
          if (subView.connectionId !== undefined && typeof subView.connectionId !== 'string') {
              return false;
          }
          if (subView.isTheta !== undefined && typeof subView.isTheta !== 'boolean') {
              return false;
          }
          if (subView.type !== undefined && subView.type !== 'VIDEO_AUDIO' && subView.type !== 'SCREEN_SHARE') {
              return false;
          }
          return true;
      }
      validatePoVType(poV) {
          if (poV.pan !== undefined && typeof poV.pan !== 'number') {
              return false;
          }
          if (poV.tilt !== undefined && typeof poV.tilt !== 'number') {
              return false;
          }
          if (poV.fov !== undefined && typeof poV.fov !== 'number') {
              return false;
          }
          return true;
      }
      validateLayoutType(layout) {
          if (layout !== undefined && (typeof layout !== 'string' || (layout !== 'gallery' && layout !== 'presentation' && layout !== 'fullscreen'))) {
              return false;
          }
          return true;
      }
      validateCaptureImageOptionsType(options) {
          if (options.mimeType !== undefined) {
              if (typeof options.mimeType !== 'string') {
                  return false;
              }
              if (options.mimeType !== 'image/png' && options.mimeType !== 'image/jpeg') {
                  return false;
              }
          }
          if (options.qualityArgument !== undefined && typeof options.qualityArgument !== 'number') {
              return false;
          }
          return true;
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setRequestTimer(reject, error, time) {
          return window.setTimeout(() => {
              // 指定された時間内で処理が完了しない場合は reject する
              if (this.iframeElement.contentWindow) {
                  this.iframeElement.contentWindow.postMessage({
                      type: 'connectCancel',
                  }, this.lsConfURL);
              }
              this.dispatchEvent(new LSConfEvent('error', error));
              reject(error);
          }, time);
      }
      __create(parameters) {
          return new Promise((resolve, reject) => {
              this.state = 'creating';
              if (parameters.lsConfURL) {
                  this.lsConfURL = parameters.lsConfURL;
                  this.iframeElement.src = this.lsConfURL;
              }
              const createTimeoutId = this.setRequestTimer(reject, new LSConferenceIframeError(REQUEST_ERRORS['CreateTimeout']), DEFAULT_CREATE_TIMEOUT_MSEC);
              // allow =  "display-capture" は Chrome だと unknown parameter の warning が出るが
              // MDN の仕様では getDM する場合設定する必要があるので記載している
              // cf: https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture
              this.iframeElement.allow = 'camera *;microphone *;autoplay *;display-capture *; fullscreen *';
              this.parentElement.appendChild(this.iframeElement);
              this.iframeElement.onload = () => {
                  // Safari では onload 時に即時に postMessage することができないため、500 ms 遅延させて postMessage を実行する
                  window.setTimeout(() => {
                      if (!this.iframeElement.contentWindow) {
                          this.state = 'idle';
                          throw new LSConferenceIframeError(INTERNAL_ERRORS['InternalError5001']);
                      }
                      const postMessageParameters = {
                          type: 'create',
                          origin: location.href,
                          parameters: {
                              defaultLayout: parameters.defaultLayout,
                              room: parameters.room,
                              toolbar: parameters.toolbar,
                              podCoordinates: parameters.podCoordinates,
                              thetaZoomMaxRange: parameters.thetaZoomMaxRange,
                              subView: parameters.subView,
                              theme: parameters.theme,
                              locales: parameters.locales,
                          },
                      };
                      try {
                          this.iframeElement.contentWindow.postMessage(postMessageParameters, this.lsConfURL);
                      }
                      catch (e) {
                          this.state = 'idle';
                          const error = new LSConferenceIframeError(REQUEST_ERRORS['CreateFailed']);
                          this.dispatchEvent(new LSConfEvent('error', error));
                          return reject(error);
                      }
                      this.setWindowMessageCallback();
                      clearTimeout(createTimeoutId);
                      this.state = 'created';
                      return resolve();
                  }, 500);
              };
          });
      }
      static create(parentElement, parameters) {
          return new Promise((resolve, reject) => {
              const instance = new this(parentElement);
              const element = parentElement || document.querySelector('body');
              if (!(element instanceof HTMLElement)) {
                  const error = new LSConferenceIframeError(REQUEST_ERRORS['CreateArgsInvalid']);
                  instance.dispatchEvent(new LSConfEvent('error', error));
                  return reject(error);
              }
              if (!instance.validateCreateParameters(parameters)) {
                  const error = new LSConferenceIframeError(REQUEST_ERRORS['CreateArgsInvalid']);
                  instance.dispatchEvent(new LSConfEvent('error', error));
                  return reject(error);
              }
              let extParam = parameters;
              try {
                  // eslint-disable-next-line @typescript-eslint/no-var-requires
                  const enJson = __webpack_require__(/*! ./lang/en.json */ "./src/lib/lang/en.json");
                  // eslint-disable-next-line @typescript-eslint/no-var-requires
                  const jaJson = __webpack_require__(/*! ./lang/ja.json */ "./src/lib/lang/ja.json");
                  extParam = { ...parameters, locales: { ja: jaJson, en: enJson } };
              }
              catch (e) {
                  console.warn(`Language file could not be read : ${e.message}`);
              }
              instance
                  .__create(extParam)
                  .then(() => {
                  resolve(instance);
              })
                  .catch((e) => {
                  //XXX(kdxu): __create 内で dispatch error event を行っているため、この時点では error event を dispatch しない
                  reject(e);
              });
          });
      }
      async join(clientId, accessToken, connectionId, connectOptions) {
          return new Promise((resolve, reject) => {
              this.state = 'connecting';
              const joinTimeoutId = this.setRequestTimer(reject, new LSConferenceIframeError(REQUEST_ERRORS['JoinFailedTimeout']), DEFAULT_JOIN_TIMEOUT_MSEC);
              if (!this.iframeElement.contentWindow) {
                  clearTimeout(joinTimeoutId);
                  this.state = 'created';
                  throw new LSConferenceIframeError(INTERNAL_ERRORS['InternalError5001']);
              }
              if (!this.validateJoinParameters(clientId, accessToken, connectionId, connectOptions)) {
                  this.state = 'created';
                  const error = new LSConferenceIframeError(REQUEST_ERRORS['JoinArgsInvalid']);
                  this.dispatchEvent(new LSConfEvent('error', error));
                  clearTimeout(joinTimeoutId);
                  return reject(error);
              }
              // optionalパラメータのデフォルト値の設定
              connectOptions.signalingURL = connectOptions.signalingURL || DEFAULT_SIGNALING_URL;
              connectOptions.maxVideoBitrate = connectOptions.maxVideoBitrate || DEFAULT_MAX_BITRATE;
              connectOptions.maxShareBitrate = connectOptions.maxShareBitrate || DEFAULT_MAX_BITRATE;
              connectOptions.useDummyDevice = connectOptions.useDummyDevice || DEFAULT_USE_DUMMY_DEVICE;
              connectOptions.videoCodec = connectOptions.videoCodec || DEFAULT_VIDEO_CODEC;
              connectOptions.mode = connectOptions.mode || DEFAULT_MODE;
              // video audio の role, mediaType は固定
              const postMessageParameters = {
                  type: 'connect',
                  clientId: clientId,
                  accessToken: accessToken,
                  connectionId: connectionId,
                  role: 'sendrecv',
                  mediaType: 'videoaudio',
                  connectOptions: connectOptions,
              };
              this.joinCallback = {
                  success: () => {
                      clearTimeout(joinTimeoutId);
                      resolve();
                  },
                  error: (err) => {
                      clearTimeout(joinTimeoutId);
                      reject(err);
                  },
                  accepted: () => {
                      clearTimeout(joinTimeoutId);
                  },
              };
              try {
                  this.iframeElement.contentWindow.postMessage(postMessageParameters, this.lsConfURL);
              }
              catch (e) {
                  this.state = 'created';
                  const error = new LSConferenceIframeError(REQUEST_ERRORS['JoinFailed']);
                  this.dispatchEvent(new LSConfEvent('error', error));
                  clearTimeout(joinTimeoutId);
                  return reject(error);
              }
              this.clientId = clientId;
              this.connectOptions = connectOptions;
          });
      }
      leave() {
          return new Promise((resolve, reject) => {
              this.state = 'closing';
              if (!this.iframeElement.contentWindow) {
                  this.state = 'open';
                  throw new LSConferenceIframeError(INTERNAL_ERRORS['InternalError5001']);
              }
              const postMessageParameters = {
                  type: 'leave',
              };
              try {
                  this.iframeElement.contentWindow.postMessage(postMessageParameters, this.lsConfURL);
              }
              catch (e) {
                  this.state = 'open';
                  const error = new LSConferenceIframeError(REQUEST_ERRORS['CloseFailed']);
                  this.dispatchEvent(new LSConfEvent('error', error));
                  return reject(error);
              }
              return resolve();
          });
      }
      onShareRequested(callback) {
          if (typeof callback !== 'function') {
              throw new TypeError(`Failed to execute 'onShareRequested' on '${this.constructor.name}': The callback provided as parameter 1 is not an object.`);
          }
          this.shareRequestedCallback = callback;
      }
      getSubViews() {
          return new Promise((resolve, reject) => {
              if (!this.iframeElement.contentWindow) {
                  throw new LSConferenceIframeError(INTERNAL_ERRORS['InternalError5001']);
              }
              const postMessageParameters = {
                  type: 'getSubViews',
              };
              this.getSubViewsCallback = { success: (subViews) => resolve(subViews), error: (err) => reject(err) };
              try {
                  this.iframeElement.contentWindow.postMessage(postMessageParameters, this.lsConfURL);
              }
              catch (e) {
                  const error = new LSConferenceIframeError(REQUEST_ERRORS['GetSubViewsFailed']);
                  this.dispatchEvent(new LSConfEvent('error', error));
                  return reject(error);
              }
          });
      }
      highlight(subView) {
          return new Promise((resolve, reject) => {
              if (!this.iframeElement.contentWindow) {
                  return reject(new LSConferenceIframeError(INTERNAL_ERRORS['InternalError5001']));
              }
              if (!this.validateSubViewType(subView)) {
                  return reject(new LSConferenceIframeError(REQUEST_ERRORS['HighlightArgsInvalid']));
              }
              const postMessageParameters = {
                  type: 'highlight',
                  subView: subView,
              };
              this.highlightCallback = { success: () => resolve(), error: (err) => reject(err) };
              try {
                  this.iframeElement.contentWindow.postMessage(postMessageParameters, this.lsConfURL);
              }
              catch (e) {
                  const error = new LSConferenceIframeError(REQUEST_ERRORS['HighlightFailed']);
                  this.dispatchEvent(new LSConfEvent('error', error));
                  return reject(error);
              }
          });
      }
      getPoV(subView) {
          return new Promise((resolve, reject) => {
              if (!this.iframeElement.contentWindow) {
                  return reject(new LSConferenceIframeError(INTERNAL_ERRORS['InternalError5001']));
              }
              if (!this.validateSubViewType(subView)) {
                  return reject(new LSConferenceIframeError(REQUEST_ERRORS['GetPoVArgsInvalid']));
              }
              if (!subView.isTheta) {
                  return reject(new LSConferenceIframeError(REQUEST_ERRORS['GetPoVArgsInvalid']));
              }
              const postMessageParameters = {
                  type: 'getPoV',
                  subView: subView,
              };
              this.getPoVCallback = { success: (poV) => resolve(poV), error: (err) => reject(err) };
              try {
                  this.iframeElement.contentWindow.postMessage(postMessageParameters, this.lsConfURL);
              }
              catch (e) {
                  const error = new LSConferenceIframeError(REQUEST_ERRORS['GetPoVFailed']);
                  this.dispatchEvent(new LSConfEvent('error', error));
                  return reject(error);
              }
          });
      }
      setPoV(subView, poV) {
          return new Promise((resolve, reject) => {
              if (!this.iframeElement.contentWindow) {
                  return reject(new LSConferenceIframeError(INTERNAL_ERRORS['InternalError5001']));
              }
              if (!this.validateSubViewType(subView) || !this.validatePoVType(poV)) {
                  return reject(new LSConferenceIframeError(REQUEST_ERRORS['SetPoVArgsInvalid']));
              }
              if (!subView.isTheta) {
                  return reject(new LSConferenceIframeError(REQUEST_ERRORS['SetPoVArgsInvalid']));
              }
              const postMessageParameters = {
                  type: 'setPoV',
                  subView: subView,
                  poV: poV,
              };
              this.setPoVCallback = { success: () => resolve(), error: (err) => reject(err) };
              try {
                  this.iframeElement.contentWindow.postMessage(postMessageParameters, this.lsConfURL);
              }
              catch (e) {
                  const error = new LSConferenceIframeError(REQUEST_ERRORS['SetPoVFailed']);
                  this.dispatchEvent(new LSConfEvent('error', error));
                  return reject(error);
              }
          });
      }
      getMediaDevices() {
          return new Promise((resolve, reject) => {
              if (!this.iframeElement.contentWindow) {
                  return reject(new LSConferenceIframeError(INTERNAL_ERRORS['InternalError5001']));
              }
              if (this.connectOptions && this.connectOptions.mode === 'viewer' && this.state === 'open') {
                  return reject(new LSConferenceIframeError(REQUEST_ERRORS['ModeInvalid']));
              }
              const postMessageParameters = {
                  type: 'getMediaDevices',
              };
              this.getMediaDevicesCallback = { success: (devices) => resolve(devices), error: (err) => reject(err) };
              try {
                  this.iframeElement.contentWindow.postMessage(postMessageParameters, this.lsConfURL);
              }
              catch (e) {
                  const error = new LSConferenceIframeError(REQUEST_ERRORS['GetMediaDevicesFailed']);
                  this.dispatchEvent(new LSConfEvent('error', error));
                  return reject(error);
              }
          });
      }
      setCameraMute(isEnabled) {
          return new Promise((resolve, reject) => {
              if (!this.iframeElement.contentWindow) {
                  return reject(new LSConferenceIframeError(INTERNAL_ERRORS['InternalError5001']));
              }
              if (this.connectOptions && this.connectOptions.mode === 'viewer' && this.state === 'open') {
                  return reject(new LSConferenceIframeError(REQUEST_ERRORS['ModeInvalid']));
              }
              const postMessageParameters = {
                  type: 'cameraMute',
                  isEnabled: isEnabled,
              };
              try {
                  this.iframeElement.contentWindow.postMessage(postMessageParameters, this.lsConfURL);
              }
              catch (e) {
                  const error = new LSConferenceIframeError(REQUEST_ERRORS['CameraMuteFailed']);
                  this.dispatchEvent(new LSConfEvent('error', error));
                  return reject(error);
              }
              return resolve();
          });
      }
      setCameraDevice(deviceId) {
          return new Promise((resolve, reject) => {
              if (!this.iframeElement.contentWindow) {
                  return reject(new LSConferenceIframeError(INTERNAL_ERRORS['InternalError5001']));
              }
              if (this.connectOptions && this.connectOptions.mode === 'viewer' && this.state === 'open') {
                  return reject(new LSConferenceIframeError(REQUEST_ERRORS['ModeInvalid']));
              }
              const postMessageParameters = {
                  type: 'setCameraDevice',
                  deviceId: deviceId,
              };
              try {
                  this.iframeElement.contentWindow.postMessage(postMessageParameters, this.lsConfURL);
              }
              catch (e) {
                  const error = new LSConferenceIframeError(REQUEST_ERRORS['SetCameraDeviceFailed']);
                  this.dispatchEvent(new LSConfEvent('error', error));
                  return reject(error);
              }
              return resolve();
          });
      }
      setMicMute(isEnabled) {
          return new Promise((resolve, reject) => {
              if (!this.iframeElement.contentWindow) {
                  return reject(new LSConferenceIframeError(INTERNAL_ERRORS['InternalError5001']));
              }
              if (this.connectOptions && this.connectOptions.mode === 'viewer' && this.state === 'open') {
                  return reject(new LSConferenceIframeError(REQUEST_ERRORS['ModeInvalid']));
              }
              const postMessageParameters = {
                  type: 'micMute',
                  isEnabled: isEnabled,
              };
              try {
                  this.iframeElement.contentWindow.postMessage(postMessageParameters, this.lsConfURL);
              }
              catch (e) {
                  const error = new LSConferenceIframeError(REQUEST_ERRORS['MicMuteFailed']);
                  this.dispatchEvent(new LSConfEvent('error', error));
                  return reject(error);
              }
              return resolve();
          });
      }
      setMicDevice(deviceId) {
          return new Promise((resolve, reject) => {
              if (!this.iframeElement.contentWindow) {
                  return reject(new LSConferenceIframeError(INTERNAL_ERRORS['InternalError5001']));
              }
              if (this.connectOptions && this.connectOptions.mode === 'viewer' && this.state === 'open') {
                  return reject(new LSConferenceIframeError(REQUEST_ERRORS['ModeInvalid']));
              }
              const postMessageParameters = {
                  type: 'setMicDevice',
                  deviceId: deviceId,
              };
              try {
                  this.iframeElement.contentWindow.postMessage(postMessageParameters, this.lsConfURL);
              }
              catch (e) {
                  const error = new LSConferenceIframeError(REQUEST_ERRORS['SetMicDeviceFailed']);
                  this.dispatchEvent(new LSConfEvent('error', error));
                  return reject(error);
              }
              return resolve();
          });
      }
      enablePointer(isEnabled) {
          return new Promise((resolve, reject) => {
              if (!this.iframeElement.contentWindow) {
                  return reject(new LSConferenceIframeError(INTERNAL_ERRORS['InternalError5001']));
              }
              const postMessageParameters = {
                  type: 'enablePointer',
                  isEnabled: isEnabled,
              };
              try {
                  this.iframeElement.contentWindow.postMessage(postMessageParameters, this.lsConfURL);
              }
              catch (e) {
                  const error = new LSConferenceIframeError(REQUEST_ERRORS['EnablePointerFailed']);
                  this.dispatchEvent(new LSConfEvent('error', error));
                  return reject(error);
              }
              return resolve();
          });
      }
      updatePointer(subView, connectionId, poV, username, color) {
          return new Promise((resolve, reject) => {
              if (!this.iframeElement.contentWindow) {
                  return reject(new LSConferenceIframeError(INTERNAL_ERRORS['InternalError5001']));
              }
              if (!this.validateSubViewType(subView) || (poV && !this.validatePoVType(poV))) {
                  return reject(new LSConferenceIframeError(REQUEST_ERRORS['UpdatePointerArgsInvalid']));
              }
              if (typeof connectionId !== 'string') {
                  return reject(new LSConferenceIframeError(REQUEST_ERRORS['UpdatePointerArgsInvalid']));
              }
              if (username !== undefined && typeof username !== 'string') {
                  return reject(new LSConferenceIframeError(REQUEST_ERRORS['UpdatePointerArgsInvalid']));
              }
              if (color !== undefined && typeof color !== 'string') {
                  return reject(new LSConferenceIframeError(REQUEST_ERRORS['UpdatePointerArgsInvalid']));
              }
              const postMessageParameters = {
                  type: 'updatePointer',
                  subView: subView,
                  connectionId: connectionId,
                  poV: poV,
                  username: username,
                  color: color,
              };
              this.updatePointerCallback = { success: () => resolve(), error: (err) => reject(err) };
              try {
                  this.iframeElement.contentWindow.postMessage(postMessageParameters, this.lsConfURL);
              }
              catch (e) {
                  const error = new LSConferenceIframeError(REQUEST_ERRORS['UpdatePointerFailed']);
                  this.dispatchEvent(new LSConfEvent('error', error));
                  return reject(error);
              }
          });
      }
      getReport(type, filterOption) {
          return new Promise((resolve, reject) => {
              if (!this.iframeElement.contentWindow) {
                  throw new LSConferenceIframeError(INTERNAL_ERRORS['InternalError5001']);
              }
              const postMessageParameters = {
                  type: type,
                  filterOption: filterOption,
              };
              this.logCallbacks.set(type, { success: (log) => resolve(log), error: (err) => reject(err) });
              try {
                  this.iframeElement.contentWindow.postMessage(postMessageParameters, this.lsConfURL);
              }
              catch (e) {
                  this.logCallbacks.delete(type);
                  const error = new LSConferenceIframeError(REQUEST_ERRORS['GetReportFailed']);
                  this.dispatchEvent(new LSConfEvent('error', error));
                  return reject(error);
              }
          });
      }
      getLSConfLog() {
          return new Promise((resolve, reject) => {
              if (!this.iframeElement.contentWindow) {
                  return reject(new LSConferenceIframeError(INTERNAL_ERRORS['InternalError5001']));
              }
              const postMessageParameters = {
                  type: 'getLSConfLog',
              };
              this.getLSConfLogCallback = {
                  success: async (lsConfLog) => resolve(lsConfLog),
                  error: (err) => reject(err),
              };
              try {
                  this.iframeElement.contentWindow.postMessage(postMessageParameters, this.lsConfURL);
              }
              catch (e) {
                  const error = new LSConferenceIframeError(REQUEST_ERRORS['GetLSConfLogFailed']);
                  this.dispatchEvent(new LSConfEvent('error', error));
                  return reject(error);
              }
          });
      }
      getVideoAudioStats() {
          return this.getReport('VideoAudioStats');
      }
      getScreenShareStats() {
          return this.getReport('ScreenShareStats');
      }
      changeLayout(layout, subViews) {
          return new Promise((resolve, reject) => {
              if (!this.iframeElement.contentWindow) {
                  return reject(new LSConferenceIframeError(INTERNAL_ERRORS['InternalError5001']));
              }
              let isValidSubViews = true;
              if (subViews) {
                  subViews.forEach((subView) => {
                      if (!this.validateSubViewType(subView)) {
                          isValidSubViews = false;
                      }
                  });
              }
              if (!this.validateLayoutType(layout) || !isValidSubViews) {
                  return reject(new LSConferenceIframeError(REQUEST_ERRORS['ChangeLayoutArgsInvalid']));
              }
              const postMessageParameters = {
                  type: 'changeLayout',
                  layout,
                  subViews,
              };
              try {
                  this.iframeElement.contentWindow.postMessage(postMessageParameters, this.lsConfURL);
              }
              catch (e) {
                  const error = new LSConferenceIframeError(REQUEST_ERRORS['ChangeLayoutFailed']);
                  this.dispatchEvent(new LSConfEvent('error', error));
                  return reject(error);
              }
              return resolve();
          });
      }
      addRecordingMember(subView, connectionId) {
          return new Promise((resolve, reject) => {
              if (!this.iframeElement.contentWindow) {
                  return reject(new LSConferenceIframeError(INTERNAL_ERRORS['InternalError5001']));
              }
              if (typeof connectionId !== 'string') {
                  return reject(new LSConferenceIframeError(REQUEST_ERRORS['AddRecordingMemberArgsInvalid']));
              }
              if (!this.validateSubViewType(subView)) {
                  return reject(new LSConferenceIframeError(REQUEST_ERRORS['AddRecordingMemberArgsInvalid']));
              }
              const postMessageParameters = {
                  type: 'addRecordingMember',
                  subView,
                  connectionId,
              };
              this.addRecordingMemberCallback = { success: () => resolve(), error: (err) => reject(err) };
              try {
                  this.iframeElement.contentWindow.postMessage(postMessageParameters, this.lsConfURL);
              }
              catch (e) {
                  const error = new LSConferenceIframeError(REQUEST_ERRORS['AddRecordingMemberFailed']);
                  this.dispatchEvent(new LSConfEvent('error', error));
                  return reject(error);
              }
          });
      }
      removeRecordingMember(subView, connectionId) {
          return new Promise((resolve, reject) => {
              if (!this.iframeElement.contentWindow) {
                  return reject(new LSConferenceIframeError(INTERNAL_ERRORS['InternalError5001']));
              }
              if (typeof connectionId !== 'string') {
                  return reject(new LSConferenceIframeError(REQUEST_ERRORS['RemoveRecordingMemberArgsInvalid']));
              }
              if (!this.validateSubViewType(subView)) {
                  return reject(new LSConferenceIframeError(REQUEST_ERRORS['RemoveRecordingMemberArgsInvalid']));
              }
              const postMessageParameters = {
                  type: 'removeRecordingMember',
                  subView,
                  connectionId,
              };
              this.removeRecordingMemberCallback = { success: () => resolve(), error: (err) => reject(err) };
              try {
                  this.iframeElement.contentWindow.postMessage(postMessageParameters, this.lsConfURL);
              }
              catch (e) {
                  const error = new LSConferenceIframeError(REQUEST_ERRORS['RemoveRecordingMemberFailed']);
                  this.dispatchEvent(new LSConfEvent('error', error));
                  return reject(error);
              }
          });
      }
      getCaptureImage(subView, options) {
          return new Promise((resolve, reject) => {
              if (!this.iframeElement.contentWindow) {
                  return reject(new LSConferenceIframeError(INTERNAL_ERRORS['InternalError5001']));
              }
              if (!this.validateSubViewType(subView)) {
                  return reject(new LSConferenceIframeError(REQUEST_ERRORS['GetCaptureImageArgsInvalid']));
              }
              if (!this.validateCaptureImageOptionsType(options)) {
                  return reject(new LSConferenceIframeError(REQUEST_ERRORS['GetCaptureImageArgsInvalid']));
              }
              const postMessageParameters = {
                  type: 'getCaptureImage',
                  subView,
                  options,
              };
              this.getCaptureImageCallback = { success: (blob) => resolve(blob), error: (err) => reject(err) };
              try {
                  this.iframeElement.contentWindow.postMessage(postMessageParameters, this.lsConfURL);
              }
              catch (e) {
                  const error = new LSConferenceIframeError(REQUEST_ERRORS['GetCaptureImageFailed']);
                  this.dispatchEvent(new LSConfEvent('error', error));
                  return reject(error);
              }
          });
      }
      startReceiveVideo(subView) {
          return new Promise((resolve, reject) => {
              if (!this.iframeElement.contentWindow) {
                  return reject(new LSConferenceIframeError(INTERNAL_ERRORS['InternalError5001']));
              }
              if (!this.validateSubViewType(subView)) {
                  return reject(new LSConferenceIframeError(REQUEST_ERRORS['StartReceiveVideoArgsInvalid']));
              }
              const postMessageParameters = {
                  type: 'startReceiveVideo',
                  subView,
              };
              this.startReceiveVideoCallback = { success: () => resolve(), error: (err) => reject(err) };
              try {
                  this.iframeElement.contentWindow.postMessage(postMessageParameters, this.lsConfURL);
              }
              catch (e) {
                  const error = new LSConferenceIframeError(REQUEST_ERRORS['StartReceiveVideoFailed']);
                  this.dispatchEvent(new LSConfEvent('error', error));
                  return reject(error);
              }
          });
      }
      stopReceiveVideo(subView) {
          return new Promise((resolve, reject) => {
              if (!this.iframeElement.contentWindow) {
                  return reject(new LSConferenceIframeError(INTERNAL_ERRORS['InternalError5001']));
              }
              if (!this.validateSubViewType(subView)) {
                  return reject(new LSConferenceIframeError(REQUEST_ERRORS['StopReceiveVideoArgsInvalid']));
              }
              const postMessageParameters = {
                  type: 'stopReceiveVideo',
                  subView,
              };
              this.stopReceiveVideoCallback = { success: () => resolve(), error: (err) => reject(err) };
              try {
                  this.iframeElement.contentWindow.postMessage(postMessageParameters, this.lsConfURL);
              }
              catch (e) {
                  const error = new LSConferenceIframeError(REQUEST_ERRORS['StopReceiveVideoFailed']);
                  this.dispatchEvent(new LSConfEvent('error', error));
                  return reject(error);
              }
          });
      }
      iframe() {
          return this.iframeElement;
      }
      addEventListener(type, callback, options) {
          if (arguments.length < 2) {
              throw new TypeError(`Failed to execute 'addEventListener' on '${this.constructor.name}': 2 arguments required, but only ${arguments.length} present.`);
          }
          if (typeof callback !== 'function' && typeof callback !== 'object') {
              throw new TypeError(`Failed to execute 'addEventListener' on '${this.constructor.name}': The callback provided as parameter 2 is not an object.`);
          }
          const listeners = this.eventListeners.get(type) || [];
          listeners.push({ listener: callback, options: options });
          this.eventListeners.set(type, listeners);
      }
      removeEventListener(type, callback, _options) {
          // window.removeEventListener の options 相当の実装はしない
          if (arguments.length < 2) {
              throw new TypeError(`Failed to execute 'removeEventListener' on '${this.constructor.name}': 2 arguments required, but only ${arguments.length} present.`);
          }
          if (typeof callback !== 'function' && typeof callback !== 'object') {
              throw new TypeError(`Failed to execute 'removeEventListener' on '${this.constructor.name}': The callback provided as parameter 2 is not an object.`);
          }
          const listeners = this.eventListeners.get(type) || [];
          const removedListeners = listeners.filter(({ listener }) => listener !== callback);
          this.eventListeners.set(type, removedListeners);
      }
      dispatchEvent(event) {
          // eventListeners の options 相当の実装はしない
          if (!(event instanceof LSConfEvent)) {
              throw new TypeError(`Failed to execute 'dispatchEvent' on '${this.constructor.name}': parameter 1 is not of type 'LSConfEvent'.`);
          }
          const type = event.type;
          const listeners = this.eventListeners.get(type);
          if (listeners) {
              listeners.forEach(({ listener, options }) => {
                  listener.call(this, event.event);
                  if (options && !options.once)
                      return;
                  this.removeEventListener(event.type, listener, options);
              });
          }
      }
      addApplicationEventListener(type, callback, options) {
          if (arguments.length < 2) {
              throw new TypeError(`Failed to execute 'addApplicationEventListener' on '${this.constructor.name}': 2 arguments required, but only ${arguments.length} present.`);
          }
          if (typeof callback !== 'function' && typeof callback !== 'object') {
              throw new TypeError(`Failed to execute 'addApplicationEventListener' on '${this.constructor.name}': The callback provided as parameter 2 is not an object.`);
          }
          const listeners = this.applicationEventListeners.get(type) || [];
          listeners.push({ listener: callback, options: options });
          this.applicationEventListeners.set(type, listeners);
      }
      removeApplicationEventListener(type, callback, _options) {
          // window.removeEventListener の options 相当の実装はしない
          if (arguments.length < 2) {
              throw new TypeError(`Failed to execute 'removeApplicationEventListener' on '${this.constructor.name}': 2 arguments required, but only ${arguments.length} present.`);
          }
          if (typeof callback !== 'function' && typeof callback !== 'object') {
              throw new TypeError(`Failed to execute 'removeApplicationEventListener' on '${this.constructor.name}': The callback provided as parameter 2 is not an object.`);
          }
          const listeners = this.applicationEventListeners.get(type) || [];
          const removedListeners = listeners.filter(({ listener }) => listener !== callback);
          this.applicationEventListeners.set(type, removedListeners);
      }
      dispatchApplicationEvent(event) {
          // eventListeners の options 相当の実装はしない
          if (!(event instanceof Event)) {
              throw new TypeError(`Failed to execute 'dispatchApplicationEvent' on '${this.constructor.name}': parameter 1 is not of type 'Event'.`);
          }
          const type = event.type;
          const listeners = this.applicationEventListeners.get(type);
          if (listeners) {
              listeners.forEach(({ listener, options }) => {
                  listener.call(this, event);
                  if (options && !options.once)
                      return;
                  this.removeApplicationEventListener(event.type, listener, options);
              });
          }
      }
  }

  return LSConferenceIframe;

})));


/***/ }),

/***/ "./src/middleware.ts":
/*!***************************!*\
  !*** ./src/middleware.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const middleware = [
    ...Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["getDefaultMiddleware"])({
        serializableCheck: {
            // immutable な state は main.immutable プロパティに押し込めて、serializable check を切る
            ignoredPaths: [],
            // action payload が MediaStream など immutable な場合は個別に action を ignore する
            ignoredActions: [],
        },
        immutableCheck: {
            // immutable な state は main.immutable プロパティに押し込めて、そこだけ immutable check を切る
            ignoredPaths: [],
        },
    }),
];
/* harmony default export */ __webpack_exports__["default"] = (middleware);


/***/ }),

/***/ "./src/slice.ts":
/*!**********************!*\
  !*** ./src/slice.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const initialState = {};
const mainSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
    name: 'main',
    initialState: initialState,
    reducers: {},
});
// const { actions } = mainSlice;
// export const {} = actions;
// default で slice を export
/* harmony default export */ __webpack_exports__["default"] = (mainSlice);


/***/ })

/******/ });
//# sourceMappingURL=main.js.map