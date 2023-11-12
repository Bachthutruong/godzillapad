import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { Buffer } from 'buffer';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _styled, { css, keyframes, useTheme, ThemeProvider } from 'styled-components';
import _taggedTemplateLiteral from '@babel/runtime/helpers/taggedTemplateLiteral';
import 'wicg-inert';
import React, { createContext, useContext, useMemo, useRef, useEffect, useState, useCallback, Children, forwardRef, Component, StrictMode } from 'react';
import { AlertTriangle as AlertTriangle$1, ArrowDown, ArrowRight, ArrowLeft, ArrowUp, BarChart2, ChevronDown, ChevronUp, Clock, HelpCircle, Info as Info$1, ArrowUpRight, Settings, Slash, Trash2, X as X$1, XOctagon, Search } from 'react-feather';
import { transparentize, rgba, mix } from 'polished';
import 'wcag-contrast';
import { jsxDEV, Fragment } from 'react/jsx-dev-runtime';
import { Text } from 'rebass';
import { useWeb3React, Web3ReactProvider, initializeConnector } from '@web3-react/core';
import { createPortal } from 'react-dom';
import maxSize from 'popper-max-size-modifier';
import { usePopper } from 'react-popper';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _inherits from '@babel/runtime/helpers/inherits';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _get from '@babel/runtime/helpers/get';
import _assertThisInitialized from '@babel/runtime/helpers/assertThisInitialized';
import _wrapNativeSuper from '@babel/runtime/helpers/wrapNativeSuper';
import { useUpdateAtom, useAtomValue, atomWithReset } from 'jotai/utils';
import { atomWithImmer, withImmer } from 'jotai/immer';
import invariant from 'tiny-invariant';
import _asyncToGenerator from '@babel/runtime/helpers/asyncToGenerator';
import _regeneratorRuntime from '@babel/runtime/regenerator';
import '@uniswap/universal-router-sdk';
import { atom, Provider as Provider$9 } from 'jotai';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import { JsonRpcProvider, StaticJsonRpcProvider } from '@ethersproject/providers';
import { Contract } from '@ethersproject/contracts';
import { namehash } from '@ethersproject/hash';
import { getAddress } from '@ethersproject/address';
import { AddressZero } from '@ethersproject/constants';
import CID from 'cids';
import { getNameFromData, rmPrefix } from 'multicodec';
import { decode, toB58String } from 'multihashes';
import { Token, WETH9, Ether, NativeCurrency, TradeType, CurrencyAmount, Percent } from '@uniswap/sdk-core';
import { Interface } from '@ethersproject/abi';
import { createMulticall } from '@uniswap/redux-multicall';
import JSBI from 'jsbi';
import _typeof from '@babel/runtime/helpers/typeof';
import { EIP1193 } from '@web3-react/eip1193';
import { MetaMask } from '@web3-react/metamask';
import { Network } from '@web3-react/network';
import { URI_AVAILABLE, WalletConnect } from '@web3-react/walletconnect-v2';
import { Connector } from '@web3-react/types';
import 'setimmediate';
import QRCode from 'qrcode';
import { af, ar, ca, cs, da, de, el, en, es, fi, fr, he, hu, id, it, ja, ko, nl, no, pl, pt, ro, ru, sr, sv, sw, tr, uk, vi, zh } from 'make-plural/plurals';
import { Provider as Provider$8 } from 'react-redux';
import { isPlainObject, configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { createApi, skipToken } from '@reduxjs/toolkit/query/react';
import { Trade, MixedRouteSDK, Protocol } from '@uniswap/router-sdk';
import qs from 'qs';
import { Route as Route$1, Pair } from '@uniswap/v2-sdk';
import { Route, Pool } from '@uniswap/v3-sdk';
import ResizeObserver from 'resize-observer-polyfill';
import '@ethersproject/units';
import '@uniswap/permit2-sdk';
import '@uniswap/conedison/provider/signing';
import '@uniswap/conedison/format';
import 'ethers/lib/utils';
import '@ethersproject/bytes';
import '@ethersproject/bignumber';

if (typeof window !== 'undefined') {
  // WalletConnect relies on Buffer, so it must be polyfilled.
  if (!('Buffer' in window)) {
    window.Buffer = Buffer;
  }
}

var globalFontStyles = /*#__PURE__*/css(["-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:", ";font-size:16px;font-smooth:always;font-variant:none;*{font-family:", ";@supports (font-variation-settings:normal){font-family:", ";}}"], function (_ref) {
  var theme = _ref.theme;
  return theme.primary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return typeof theme.fontFamily === 'string' ? theme.fontFamily : theme.fontFamily.font;
}, function (_ref3) {
  var theme = _ref3.theme;
  return typeof theme.fontFamily === 'string' ? undefined : theme.fontFamily.variable;
});

var _polyline, _polyline2;
function _extends$3() { _extends$3 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }
var SvgExpando = function SvgExpando(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$3({
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: 2,
    strokeLinecap: "round",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _polyline || (_polyline = /*#__PURE__*/React.createElement("polyline", {
    className: "left",
    points: "18 15 12 9"
  })), _polyline2 || (_polyline2 = /*#__PURE__*/React.createElement("polyline", {
    className: "right",
    points: "12 9 6 15"
  })));
};

var _path$1;
function _extends$2() { _extends$2 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }
var SvgReverse = function SvgReverse(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2({
    width: 14,
    height: 20,
    viewBox: "0 0 14 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1 || (_path$1 = /*#__PURE__*/React.createElement("path", {
    d: "M5.33317 5.41663L9.08317 1.66663M9.08317 1.66663L12.8332 5.41663M9.08317 1.66663V9.99996M8.6665 14.5833L4.9165 18.3333M4.9165 18.3333L1.1665 14.5833M4.9165 18.3333L4.9165 10.8333",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _mask, _circle, _circle2;
function _extends$1() { _extends$1 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }
var SvgSpinner = function SvgSpinner(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1({
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _mask || (_mask = /*#__PURE__*/React.createElement("mask", {
    id: "mask"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 9,
    fill: "black",
    stroke: "black",
    strokeWidth: 2
  }), /*#__PURE__*/React.createElement("rect", {
    width: 12,
    height: 12,
    fill: "white",
    strokeWidth: 0
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 3,
    cy: 12,
    r: 1,
    fill: "white",
    strokeWidth: 0
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 3,
    r: 1,
    fill: "white",
    strokeWidth: 0
  }))), _circle || (_circle = /*#__PURE__*/React.createElement("circle", {
    id: "dot",
    cx: 12,
    cy: 12,
    r: 6,
    fill: "#293249",
    stroke: "none"
  })), _circle2 || (_circle2 = /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 9,
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    mask: "url(#mask)"
  })));
};

var _path, _path2, _path3;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgWallet = function SvgWallet(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
    d: "M2 7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V7Z",
    stroke: "currentColor",
    strokeWidth: 2
  })), _path2 || (_path2 = /*#__PURE__*/React.createElement("path", {
    d: "M4 19H20C21.1046 19 22 18.1046 22 17V14C22 12.8954 21.1046 12 20 12H16C15.4477 12 14.9935 12.4624 14.7645 12.965C14.4438 13.6688 13.789 14.5 12 14.5C10.29 14.5 9.48213 13.7406 9.1936 13.0589C8.96576 12.5206 8.49905 12 7.91447 12H4C2.89543 12 2 12.8954 2 14V17C2 18.1046 2.89543 19 4 19Z",
    fill: "currentColor"
  })), _path3 || (_path3 = /*#__PURE__*/React.createElement("path", {
    d: "M22 13V11C22 9.89543 21.1034 9 19.9989 9C14.0294 9 9.97062 9 4.00115 9C2.89658 9 2 9.89543 2 11V13",
    stroke: "currentColor",
    strokeWidth: 2
  })));
};

var iconHoverCss = /*#__PURE__*/css([":hover{cursor:pointer;opacity:0.6;}"]);

var Layer;
(function (Layer) {
  Layer[Layer["UNDERLAYER"] = -1] = "UNDERLAYER";
  Layer[Layer["OVERLAY"] = 100] = "OVERLAY";
  Layer[Layer["DIALOG"] = 1000] = "DIALOG";
  Layer[Layer["TOOLTIP"] = 2000] = "TOOLTIP";
})(Layer || (Layer = {}));

var TransitionDuration;
(function (TransitionDuration) {
  TransitionDuration[TransitionDuration["Fast"] = 125] = "Fast";
  TransitionDuration[TransitionDuration["Medium"] = 200] = "Medium";
  TransitionDuration[TransitionDuration["Slow"] = 250] = "Slow";
})(TransitionDuration || (TransitionDuration = {}));
var AnimationSpeed = {
  Fast: "".concat(TransitionDuration.Fast, "ms"),
  Medium: "".concat(TransitionDuration.Medium, "ms"),
  Slow: "".concat(TransitionDuration.Slow, "ms")
};
var SlideAnimationType;
(function (SlideAnimationType) {
  SlideAnimationType["CLOSING"] = "closing";
  SlideAnimationType["PAGING"] = "paging";
})(SlideAnimationType || (SlideAnimationType = {}));
var fadeIn = /*#__PURE__*/keyframes(["from{opacity:0;}to{opacity:1;}"]);
var fadeOut = /*#__PURE__*/keyframes(["to{opacity:0;}from{opacity:1;}"]);
/*#__PURE__*/css(["animation:", " ", " ease-in-out;&.", "{animation:", " ", " ease-in-out;}"], fadeIn, AnimationSpeed.Medium, SlideAnimationType.CLOSING, fadeOut, AnimationSpeed.Medium);

var black$1 = 'hsl(0, 0%, 0%)';
var white$1 = 'hsl(0, 0%, 100%)';
({
  // surface
  interactive: transparentize(1 - 0.54, black$1),
  outline: transparentize(1 - 0.24, black$1),
  // text
  primary: black$1,
  secondary: transparentize(1 - 0.64, black$1),
  onInteractive: white$1
});
({
  // surface
  interactive: transparentize(1 - 0.48, white$1),
  outline: transparentize(1 - 0.12, white$1),
  // text
  primary: white$1,
  secondary: transparentize(1 - 0.6, white$1),
  onInteractive: black$1
});

var _jsxFileName$r = "D:\\Gozillapad\\widgets\\src\\theme\\type.tsx";
function ownKeys$i(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$i(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$i(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$i(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TextWrapper = /*#__PURE__*/_styled(Text).withConfig({
  displayName: "type__TextWrapper",
  componentId: "sc-16386l-0"
})(["color:", ";min-height:", ";user-select:", ";white-space:", ";display:", ";"], function (_ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    theme = _ref.theme;
  return theme[color];
}, function (_ref2) {
  var lineHeight = _ref2.lineHeight;
  return lineHeight;
}, function (_ref3) {
  var userSelect = _ref3.userSelect;
  return userSelect === true ? 'text' : userSelect === false ? 'none' : undefined;
}, function (_ref4) {
  var noWrap = _ref4.noWrap;
  return noWrap && 'nowrap';
}, function (_ref5) {
  var $inline = _ref5.$inline;
  return $inline && 'inline';
});
var TransitionTextWrapper = /*#__PURE__*/_styled(TextWrapper).withConfig({
  displayName: "type__TransitionTextWrapper",
  componentId: "sc-16386l-1"
})(["transition:font-size ", " ease-out,line-height ", " ease-out;"], AnimationSpeed.Medium, AnimationSpeed.Medium);
function H4(props) {
  return /*#__PURE__*/jsxDEV(TextWrapper, _objectSpread$i({
    className: "headline headline-4",
    fontSize: 20,
    fontWeight: 500,
    lineHeight: "28px",
    noWrap: true
  }, props), void 0, false, {
    fileName: _jsxFileName$r,
    lineNumber: 54,
    columnNumber: 5
  }, this);
}
function Subhead2(props) {
  return /*#__PURE__*/jsxDEV(TextWrapper, _objectSpread$i({
    className: "subhead subhead-2",
    fontSize: 14,
    fontWeight: 500,
    lineHeight: "20px",
    noWrap: true
  }, props), void 0, false, {
    fileName: _jsxFileName$r,
    lineNumber: 66,
    columnNumber: 5
  }, this);
}
function Body1(props) {
  return /*#__PURE__*/jsxDEV(TextWrapper, _objectSpread$i({
    className: "body body-1",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "24px"
  }, props), void 0, false, {
    fileName: _jsxFileName$r,
    lineNumber: 71,
    columnNumber: 10
  }, this);
}
function ButtonSmall(props) {
  return /*#__PURE__*/jsxDEV(TextWrapper, _objectSpread$i({
    className: "button button-small",
    fontSize: 14,
    fontWeight: 600,
    lineHeight: "14px",
    noWrap: true
  }, props), void 0, false, {
    fileName: _jsxFileName$r,
    lineNumber: 110,
    columnNumber: 5
  }, this);
}
function TransitionButton(props) {
  var className = "button button-".concat(props.buttonSize);
  var fontSize = {
    small: 14,
    medium: 16,
    large: 20
  }[props.buttonSize];
  var lineHeight = "".concat(fontSize, "px");
  return /*#__PURE__*/jsxDEV(TransitionTextWrapper, _objectSpread$i({
    className: className,
    fontSize: fontSize,
    fontWeight: 600,
    lineHeight: lineHeight,
    noWrap: true
  }, props), void 0, false, {
    fileName: _jsxFileName$r,
    lineNumber: 119,
    columnNumber: 5
  }, this);
}
function Code(props) {
  var _useTheme2 = useTheme(),
    fontFamilyCode = _useTheme2.fontFamilyCode;
  return /*#__PURE__*/jsxDEV(TextWrapper, _objectSpread$i({
    className: "code",
    fontSize: 12,
    fontWeight: 400,
    lineHeight: "16px",
    fontFamily: fontFamilyCode
  }, props), void 0, false, {
    fileName: _jsxFileName$r,
    lineNumber: 133,
    columnNumber: 5
  }, this);
}

var _jsxFileName$q = "D:\\Gozillapad\\widgets\\src\\theme\\index.tsx";
function ownKeys$h(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$h(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$h(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$h(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var white = 'hsl(0, 0%, 100%)';
var black = 'hsl(0, 0%, 0%)';
var brandLight = 'hsl(328, 97%, 53%)';
var brandDark = 'hsl(221, 96%, 64%)';
var stateColors = {
  active: 'hsl(221, 96%, 64%)',
  activeSoft: 'hsla(221, 96%, 64%, 0.24)',
  success: 'hsl(145, 63.4%, 41.8%)',
  warningSoft: 'hsla(44, 86%, 51%, 0.24)',
  critical: '#FA2B39',
  criticalSoft: 'rgba(250, 43, 57, 0.12);'
};
var lightTheme = _objectSpread$h(_objectSpread$h({
  // surface
  accent: brandLight,
  accentSoft: rgba(brandLight, 0.24),
  container: 'hsl(0, 0%, 100%)',
  module: 'hsl(231, 54%, 97%)',
  interactive: 'hsl(227, 70%, 95%)',
  outline: 'hsla(225, 18%, 44%, 0.24)',
  dialog: white,
  scrim: 'hsla(224, 37%, 8%, 0.6)',
  // text
  onAccent: white,
  primary: 'hsl(224, 37%, 8%)',
  secondary: 'hsl(227, 18%, 55%)',
  hint: 'hsl(226, 24%, 67%)',
  onInteractive: black,
  deepShadow: 'hsla(234, 17%, 24%, 0.04), hsla(234, 17%, 24%, 0.02), hsla(234, 17%, 24%, 0.04)',
  networkDefaultShadow: 'hsla(328, 97%, 53%, 0.12)'
}, stateColors), {}, {
  warning: 'hsla(41, 100%, 35%, 1)',
  error: 'hsla(356, 95%, 57%, 1)',
  currentColor: 'currentColor'
});
var darkTheme = _objectSpread$h(_objectSpread$h({
  // surface
  accent: brandDark,
  accentSoft: rgba(brandDark, 0.24),
  container: 'hsla(224, 37%, 8%, 1)',
  module: 'hsl(222, 37%, 12%)',
  interactive: 'hsla(223, 28%, 22%, 1)',
  outline: 'hsl(224, 33%, 16%)',
  dialog: black,
  scrim: 'hsla(224, 33%, 16%, 0.5)',
  // text
  onAccent: white,
  primary: white,
  secondary: 'hsl(227, 21%, 67%)',
  hint: 'hsla(225, 18%, 44%)',
  onInteractive: white,
  deepShadow: 'hsla(0, 0%, 0%, 0.32), hsla(0, 0%, 0%, 0.24), hsla(0, 0%, 0%, 0.24)',
  networkDefaultShadow: 'hsla(221, 96%, 64%, 0.16)'
}, stateColors), {}, {
  warning: 'hsl(44, 86%, 51%)',
  error: 'hsla(5, 97%, 71%, 1)',
  currentColor: 'currentColor'
});

/**
 * Common border radius values in em
 */
var defaultBorderRadius = {
  large: 1.5,
  medium: 1,
  small: 0.75,
  xsmall: 0.5
};
var defaultTheme = _objectSpread$h({
  borderRadius: defaultBorderRadius,
  zIndex: {
    modal: Layer.DIALOG
  },
  fontFamily: {
    font: '"Inter", sans-serif',
    variable: '"InterVariable", sans-serif'
  },
  fontFamilyCode: 'IBM Plex Mono',
  tokenColorExtraction: false
}, lightTheme);
var ThemeContext = /*#__PURE__*/createContext(toDefaultTheme(defaultTheme));
function Provider$7(_ref) {
  var theme = _ref.theme,
    children = _ref.children;
  var contextTheme = useContext(ThemeContext);
  var value = useMemo(function () {
    return toDefaultTheme(_objectSpread$h(_objectSpread$h({}, contextTheme), theme));
  }, [contextTheme, theme]);
  return /*#__PURE__*/jsxDEV(ThemeContext.Provider, {
    value: value,
    children: /*#__PURE__*/jsxDEV(ThemeProvider, {
      theme: value,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName$q,
      lineNumber: 140,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName$q,
    lineNumber: 139,
    columnNumber: 5
  }, this);
}
function toDefaultTheme(theme) {
  return _objectSpread$h(_objectSpread$h({}, theme), {}, {
    borderRadius: clamp(theme.borderRadius ? theme.borderRadius : defaultBorderRadius),
    onHover: function onHover(color) {
      return color === theme.primary ? transparentize(0.4, theme.primary) : mix(0.06, theme.primary, color);
    }
  });
  function clamp(value) {
    var clampNum = function clampNum(num) {
      return Math.min(Math.max(num, 0), 1);
    };
    return {
      large: clampNum(value.large),
      medium: clampNum(value.medium),
      small: clampNum(value.small),
      xsmall: clampNum(value.xsmall)
    };
  }
}

var _jsxFileName$p = "D:\\Gozillapad\\widgets\\src\\icons\\AutoRouterIcon.tsx";
var uniqueId = 0;
var getUniqueId = function getUniqueId() {
  return uniqueId++;
};
function AutoRouterIcon(_ref) {
  var className = _ref.className,
    id = _ref.id;
  var componentIdRef = useRef(id !== null && id !== void 0 ? id : getUniqueId());
  var componentId = "AutoRouterIconGradient".concat(componentIdRef.current);
  return /*#__PURE__*/jsxDEV("svg", {
    width: "23",
    height: "20",
    viewBox: "0 0 23 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: className,
    children: [/*#__PURE__*/jsxDEV("defs", {
      children: /*#__PURE__*/jsxDEV("linearGradient", {
        id: componentId,
        x1: "0",
        y1: "0",
        x2: "1",
        y2: "0",
        gradientTransform: "rotate(95)",
        children: [/*#__PURE__*/jsxDEV("stop", {
          id: "stop1",
          offset: "0",
          stopColor: "#2274E2"
        }, void 0, false, {
          fileName: _jsxFileName$p,
          lineNumber: 21,
          columnNumber: 11
        }, this), /*#__PURE__*/jsxDEV("stop", {
          id: "stop1",
          offset: "0.5",
          stopColor: "#2274E2"
        }, void 0, false, {
          fileName: _jsxFileName$p,
          lineNumber: 22,
          columnNumber: 11
        }, this), /*#__PURE__*/jsxDEV("stop", {
          id: "stop2",
          offset: "1",
          stopColor: "#3FB672"
        }, void 0, false, {
          fileName: _jsxFileName$p,
          lineNumber: 23,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$p,
        lineNumber: 20,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$p,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/jsxDEV("path", {
      d: "M16 16C10 16 9 10 5 10M16 16C16 17.6569 17.3431 19 19 19C20.6569 19 22 17.6569 22 16C22 14.3431 20.6569 13 19 13C17.3431 13 16 14.3431 16 16ZM5 10C9 10 10 4 16 4M5 10H1.5M16 4C16 5.65685 17.3431 7 19 7C20.6569 7 22 5.65685 22 4C22 2.34315 20.6569 1 19 1C17.3431 1 16 2.34315 16 4Z",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      stroke: "url(#".concat(componentId, ")")
    }, void 0, false, {
      fileName: _jsxFileName$p,
      lineNumber: 26,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName$p,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

var IdenticonGradient0 = "data:image/png;base64,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";

var IdenticonGradient1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAB1sSURBVHgBzV1Nj17ZUX7qvK9NIiRoC7JDTPsXxP4F8SwQYpWJWEAUkrEXkQIimnEkCBAxtoUQyiozEhKRkDI9igARIjJhEwkJ2bPKcvofzJsoEksaCTCxu2/l3ntOVT117u12+3vOTPu999zz+VTVU3XOPW+34GOa9N3be8fAFcX2SoHuq+CVMXtfgD1A9hS6Z2VFBKp6ND47UmA3Zh2J4icDZCc4PtwCh3Lj9hE+hknwMUkT4A9RXisinxnvro1D29f2zAapK/Wky5+EMUrDyzfhTLeH45PDQfWDCxjujQLZ4WOQXqoAZtA35bqofhYo1ybEekAtzQMNMGted//IJHwp9yDDe5uTlyuMlyKAh+/evoYit0YQrs1aigb6LIA6pJTfEltCf23aztoPy5vuVb1SLS/Rhsj7Mgpj+8W/fB8vOL0wAZi2j3z+xkQvU9emvQZcFYKcagVzWTyaitbKzF2k8pKEpFUkuwEndy5+6a0DvKD0QgTw4Lt/9YbocLs60Kx9hkITRbWCUOT2sGaeVzBuEej9A1wSiq4fiULj5W5QjIL4xgGec3quAnj43dvXROXdUan3DQnjbddA7QdjlIHFQNec8ln00zW8qF01vyva8qQ2vEPBne0Xnp8gnosA7r97e//CRXxrxOO1OsOm2eg1M3iBHSoLZ80PnOYD+jK1XStHNdul0RILURHWNtPkLCgcbB48vPM8nPUzF8DxP955XQd9G41u5mRCmP7Vjiq0AsL59VnTxERROJOGvJeOWhZWJ1mAc5aBT55aXADzzUhLeufiM7aGZyaAeeH0S7g1zvTNeeBrPGB52uVTXrIOUFQ0NahEG80vrLQU/J6eGbBZhKz5mZIkinNbRd7e3v/5nWe1sHsmArj/TyPlqN7VeaVqVCKuvdyVniIEQeZ9twAAjwr1kx8gPV4IQDqN99C09d+jMVER+QS3j9EaNopX5fN/vsNTpoKnTA/+4faVrQ4fjoPatwjegABpj/bq71EH5UpW6gDW2kVWGSFgBGlRZmBJ+0+ZYFacsgo9a9FSWAQJtfa3PxS5++B7f30FT5meSgDH//zW62UzfChl3psZB6cBtjDolnSBcJtrStLqqk+/ZrqWi0U9LCAs7FnpZxaFBNBGOSxUJenEmDR4SILGpsiuYPuhfv+br+Mp0hML4OR7b70xTuJAWTvnwdmHhBASj05ls6aydcz3ob6hkF5BHUBzlNaOffpQXFjwmN+pTWRpTYjwaB4Ha0dTLhOa9XeiOHjwL998E0+YBE+QTr7/1hvDMLydSNMRSGh3z7vyKmeWMf7nVetaCqoKXjfaqc8p+jHLCWX2UpCuLYCio05ovDAcLwbBzYu/+/W38ZjpsQVw/K/feF1PcGDsCu0dazNh7Z2ouFsA2LGyE0ArU1XWQ0f7FOR4FAEYkgNvVCMS1uR1SMBJT2TW8uAkokshgVjFZD31frPR6/LZr7+Hx0iPJYAH3/uLK7KRD+FRjgS4gAtkSqo2hwhJJTxyStqQlZER8xYEVocr3WNZKSrkWFLk0yq4kMB7QnUUvcCEdES6yAjU5mwJqlcvfu5PD3HOdG4fcP8Hf7ZftvqDFN1MGjO1IOx0m/O0ZwBNQL0eGcVcNihDQyuSA2hCknU2y+U78FmDBeGMWSBznvhcTIBCY3AK8vl3Yxyfbzabu/qjv9nHOdO5LEB/cHvvBD//cAq/TPPNCswCzBoqTOrxWrUA0lxdWaQlaXhJehZanjQWwc9pUtL5jE7TaxmE9nK3Iqkd5vz0WSRTXXvWBLYrD8tV+dzNRy7WzmUBw+b+rVFr9+sAq3arhEYDZg01FDWNGsNT13CPdURdC53H28D9h5mZyopEW6C2ojAcVDMapg9ItoDoW5oli99PY3eup8HN+UXanNFZgEdO+8O0K3CO9EgLePBvf3J95OZ3XUNV3DHaLNzhsnYzMXJcSV7Rtix49QxFdqwi7g/ZcQt149YhsvALvg9UhJ54V/WyiFsXOoGydsOpSaI+WUjQWM3cTG/7fvuN93BGOlMA+qM3909OLt4dx78fNDN1W+rmWQMP2m0tq5tFBSITfnsGv3fATTBKdJPCmBi2C0Adj9SGl2QnSXlMP+FXiPcR8b6I+JrAnrn2U7kkpFrnaDPoVfmdmzucks6koIcnm9uYqUedepwGGsXMuJbmPCVoolIQG0KrXyw8ivoBjlZWZ2X1SYEy3cXMfURZeLuJ5rpnTJ82BqZANEqatbkE2BIk0Ppo8/c6BryvIfZ0u/0WzkinWsCDH33t+kw9pKnuWF3rmZbQHCxTSQ5B3WIQYWrMIAakiYoEvZ/l1Wz/Ut7fAVtbvGCqBVK4uUY7dZFFWi5JAxDONhQoWVCpWmFbG2Nfr174ra/ew0ra4pQ0CvOWTSOmaPea4RBtAhmQKQV1ktpFG4rsHBF79ZXKuEBcW7vB+9qpUE83Qh9MFZ4VjTbqiFA5hJnYk7he/JkElxBd2X0ReXe8uow1nNcyH/z7165PUY9tsDX1boOkKIcjIitndFVOixLapp0grSHg5o/QLNiEJcXuHsX4OGTRjwNR4OMKnpbox1Dw8hLU6j9Sqc4ok6IgoynjffTRU+1//+Tu3755bgGUorekgSPO3RVwB9VDTvYNaMAH30snnACZgG99qQtBW18m4BA6L+LEhRpCc6ZI1/VmnoMJhP2PAWxWwEIqIItAKEbJfZpf8LzS+rMCBbf07rf2HimA4/9487rWo4ChxSW0lsFCAmtIAgsN0lZnILDoB6FpgCZTBwnEnB9bWS+IxU/TWgOH3Y47mRLaKgvg85rA22mCciGQ8zXwXbPcGsreUC5cf6QAJkmhaTva4spAmK45IgqgNWtxsh7iaqMc0qqgiHw9t9kmKZ3ATFNNa9OWt2siKMxsrxyLJEtdUmOnIAURMbnGN7CLabmEIBOVgfJbue3mjTMFcHz3j18bHem+mX2AGjSjRB1VyJFfTTyDwYICUYlbT+FPgKlJWfMLAUcCZMCD65WwUheY1XeqYPB6iiInCg45vYy1gXiOWEnDLKf1N9cT2X/447+7dqoAtMh1IfPUDji3gpItgK3EaYd9Q+k1Tl2zq2a2PLoWsuKlk86crEkhJAtkvtbOulhoQv1IftbaMtqBr3uEFIA29AoJpEQ05J9lWh1vbjHmYhf3735lf1u2H8Uo6+O05692z/F9ia1nCJXDvAmX4n8PR8frweq39hFlqzZIDNHCxFZuOXzpsiJENMkJWjNFwFvO/VaDlXWqsTIuZK9YeynRRwg0ysypCHhFXi5cvCRXb8wbdW4B477FtQgLSaNHpJT8gTIlzSvdIa7JUtQ/Na+Y2beU4F62KNck12KEJXUUmKjMIhm/DpoJByqJZjT1Fxru/qBwyCsOsDSNXnPabD3oHPh0PRwfXzfcXQCyldcTMCVvOwQNtO2EwvSR+V4WznYg8EHUQRRFbRiHZ0ffjDLxtPkdCSXsqcXGTWWU80oAaW0JAyi8Myq5rVJcyPO1tWXtsnBN+JsyYf1Zx3365/6PR/pR+ahSAFEBx35mP0QvlXZKNVOlnc2hlq3lSM6p7WaeRk89RRGl2SrZyptpS09BZvLIZfQsuuG89jmPW/jNl/h9VVvqz4V9Sh7ft7qzo/6Vckku3ziakbkAXKtzpoVP03J3uB6FsEOu2i2NXoxSZFPLzZ5/I8ir42jXoo5YcWanr1THo6tWJzl3twqjMGBJX7zSRRe7CxJdkRMNGkGn/eIRjm/+cchZ2ALbxcb6BE7+b3jNVXMoowBKACcEsq/oTCgEjIGgktcKvEJWqhdRjAa3uomOeZsAsfcBKsj0sxYdeVtwOlGJqCVFKdRGDyY4TPX2glZCESJPCXyldub8jYSPMIGhfGbCft6M25Th0wOZv3HwRCWTkxUjTm35DV8LLTxv6kCtTveCfRLG1GBDq5ajla/WxiaLWUZCCDprfbYCdbyWJ3QPBb/XTaznlNA0XrruXLAto6OS2l6fF1SHQrRWbAySqGr8uFZh+fD63vHJxf9C4l0hzrdPiU/iZ/Q+w/k82qpdFg83PcRVSfdex5+B8pA4P/kFQ00YvZyXXsKILJ5Vq5VUNvwBkh+IaRYwv3uIW6ydEDa/SfN+P6GXtsfH2yuz+ZNOhdq0E8N22KlpmQ6S5u3qY4g1R8ka274CBDMZ0bZtoaGxoYoaViG5GxOUn9aUEJCr+gr4SsoczcQzsTc7En1WCs0g+7XQoNpaQAuXsaitrRekA3/6/H9c2Y6O8soUQaVXfxOna4XMoxJbHU+jnXheQ0gss4hkGgU0oA3fahVanZ8DGX0YkPYaILGN3c3tlGykCJk5Xzl4WUjJUJt2B/id9fi1JPBzRCVYRDxiwNf7eDto1jthsLmyHbee9938Zox1BlkdUKPnANbNi7V2UPgK04+shCbPO6YqyIfHJUDW4GzDTofkYEhM3I6B34WY9GwBOMwiWkQEo48sdN9OMMEibytkoOsPt6+tjRhDlJkHM2I/WcB+nF5jK4DnmcTENEg1XrRLs55Nq9BmMTtZ6ekojho2/ok1BBuTtckmbWCmL+zFeM1HKFWhITbwxcvkMz/B1ewjtFELb0XkM0BCDj3agLffOujWDe7TBPvbUQN+tap5OCGQllbhDI0jFWd9eS5mZKtZ8WOHsxXYkUZU4VRjISAGeGtOC1qPLLoAxNonR2xFY9QIx9dZAAGxoJcOWAM7rg3w4g5WyCqsKXbyvZDcAqp5vLKdzKCdNGmABOsnRzo9m1/5hvOb+d0GzRrfZpooyxtVj2zmLI37eTGX1b1pJVkWaXxPQ9WiTBvVJ2wCdYpJgGCh2eY8g6IEvIHn6xLwQi6E5Ho8jaNkIbHSjLS8tx0B3zN0+Bi2GjAFjbuH8OhaBZVOJVS1dpPIPqIBqPyQ69llYXOCh7d0bVrnjiIK58QAG3gkhEWZEiGn5blD5/KdsPIzcQuobQlRnTS91JlNmgLtTRS0F6YLALw4AlmA200tYeBXpFsKUP08qIDKEQUpVTEcVMnjEHCqacLmH0h2DgL7bKYno4fF6WfpY3uAHSsv2qr1lBivRMNBVW3+VF/YCp1V5oKjBbjSkgecwZAc0jWN06SiZmctl9cCSbOz5juYDr4iG4u4dCSpIFmejVlY0L3Wij+3OQdHx6dvVdtoJXyN8z0AOz3Nxw9DGEIWIUkBQnlaYVKebd0iCECkdVxhKoGjGCCI1a0GD9t8I3Qk3FzblYQ2c6BHU83HJ2aykbiPaIP3MhKr4foMXtmtOmPdCSeAMWEadVilZEmdNSA5W6QIrKchPy2HCFGBthfkk28TDq0jfXc1QNAASd99gYWjLhGyrGQImiMgZMqIWtJFXibEJnoSgo8TgrwPJAQ4SEvDAtxBSlDLPN0iDiggqw7cJCDUVlhTtKlga6g3kw84Gi/2PGpwBrbwz1atZvo8XTPv0HoBaZ/F8kZLJrxAxsszb4uG6JVoBKFDMHXP4NunIkJRkrFrrMS8escKIUccVhLKUWmoDwDU5dD2lZrAba4uOGXB4Wi0AD0aH+wFPVQinVdwGvYAIC2C3AkjnKZQno0TxPMe29fG3CG5RRgA2iIFNT3M0IfgkdpUAsTxBgsmcUTKr1vqJZSjfbolQZJAfGLC1mUrYW4n6Moo1GqPeUejE9YjBGa+YmUtdX5snJ20rkLLkMAoKkKwUP16ZfG6orcIoxiPtBCohiEpgRRURhMDUhmH0NuMlSptDRhVUPnkA6xt5nfkCGp5HN4sLapbkDHW3U0W8JPx6grpMSSB64RSna/AoSaJOaRuLabd4TRiXwXS422GR417SasO3isCC0hCqX2S7F+6zwA1C8lJ2IWDbBGpbstr/jOsg9poOAAR6vJ4RyX97+34YEfz9YGIzdTnQaFfjKwNSMPsnCQaB6XFl4FD7TA4GoM3GoqZh4+q/4d19OCDKDo0UknwQRlRyaii5PEIaS3RTbLC/qULkISWNNP9wGR5w247iO5iByH4ySmk1Vb3jmSqU7kBMaB54iVv7BGwRk1uqto9bprrjqsJ1G1S4BGRtrEkv2LyKdlnSAIOSejJLYmke6MbJQvTJt1KQex3JKzACNmuvfs2HgtMBuy2MuihOQY04L3BBkCWHOV6lNMiJNdcIQGG1gO5fspHT2uBqLrgBWGRiMUSCYgtmJf9p9ER790I8jOmG+ftwlRCe1ydcIOmbCRWLMZaNnK4HdPhcT1HElsGjgOB2KIW96Q0QmeKTKnNYsjkQZNsOFtdZR7stDoWLzGNeQKmaRAejrWypAqgc5Ic40fTbvXTZWHBUIjqxShQcI2PNcWagrj2be4fFrl8MP3G2V0MKphcfNJKCxQgztJXkL1Gd5zEy/qREXveyjTAKkjA8hAYUntxjKX1mE7VhYWc+uMnKhpIlLf4rlgJgH3MTKupL1mM27bbo01Bsj7RQ7nUzgUNGD5w50kS1sVngObCMSEQYKwhvqgz0zTAgHx+p4EgPfBpUgSWndWhk3HKR1r8uVDb4nE4qL0QEIE93W/svmuLAHcfQ3TkeAnh59IwkMv86wxKQ/2eTxJIk06xvEtQWZL0SWAXfkaTtQG3PXWhY4F2jqgHRla0zPObYgidu+FxSbI0Vpo8rrz67YEmamZFMCfdSNC+N2bjtf+S5sMH/YEL4AI27wtJStLATVulA1+zUICsPd1EmQL4IFcFr356hOCHbZegx4/6lyTi1JtZgRA4WWPRhO/W07WbXj0moWThsKa7b5AqBPU1AJZvzQyXzck9F8DkB8YC9wJL5de7IYjFQMWBZynLGmDIQnHXZBMxUJrTNKpa8yH19LZNkvJ5/IZVOlZoQm/3Bm4hYFuWcvQnMa+lE7ZislB0WdRxX3VPLn1+5wKYH+nwQ4sneIBd9JiviXK4I+VCDipRlQFPAjLHZ7RkZmzOLzSMhQBIp5UBaC5vbYcgEBqJUBr+YkXNV59GtmwKX5sSKSuXULgazRku7xmELoALuHCQFhYgYGiQwtrbMp0+CBgGnwfKFCLOtWzODXB23m0MkrRAkl/x8ZJjVyqXXjWCxyIwKmQ+Xy0LLBzwPMOVcaRdYzcJy6j0MyUXwERD48e9WPKrHz8x6TLQeVu6lUf3Ul1ogOisSdp7Zs/XVeFrA15Js4Lrg4J8PcFtlDyOOMUMgIRvbXLQka0wrExpvlgBPiw6BCU8O9UfGv3wEO3hnWhIvCMx04M1VjuQ5JwMbNOmEHyt6OcVmmNSsFXYtx55jcGCk76s0DaEOdsurDWaYD/m2wMmdlcmccvziEmQIi1O/RYIW32WibRx+OAPUj106WT3pY9Gvdz3fQuY5Fn8nWrBdvvED9yKj0awDLjh5XkBUfss1GaBfWHEyth5IN9imNtLK8PWjql6RaduFropQEJVkbWlgPfAZuF2PBQRkpllSegL1bOzUc2adrL3e5cZ72wBkwBU33HzQvbg3RtYmNM27arXcYIuzavTTKejwCgiH9NYqhMhsnh/PufAhupJyjdlEt7tDAOCKRF7IO+H1DT5K8T516T6Tlni1luLD3fQpYUAxjXBwdjokbbz5sKWR7xm9xyWudfv8hoe1E4UiYlSHQPQngnXV/TKq6t8rCm/Crj5KZHO6fOnVVCatmk+OsHFWy47sObRDx9wqxe7kfsP0KWFACZnPAzNFzBSCDBzy3NvlZPdncakjfO1gSK8gOs0y51ge7Dk3W5IYitPSeOqDjR3oGw9bmWynItPuyBesNNWCsWVWdkEa6EJYXRnLVtOK3+8++JHY7f7wbXGZ1aN3m3S94Uk8TB1YTxM9UNjJOXFhn6htsIXiHM+2gEwAXvg1KaNx/yJUFthGvCj7KmNJgiEQMMv8vxsjvX1mLSxxObyxP2/fxkrqeCUpLq5MX8GsWDtLxbNndHiKPZGeXji9aXDOl7eWF4VK/9eh84HtmiG3lsniiAt7MPHlbasXxFNA7PR8+IqQnAsNZ18QQ3flcG8g1PSqQK4cPng3ljzfRrhogwRDjqCslpwjuYMGjMaXXjcjTj+0oefpNDwjS5oJyh2vgGVdFQ6t87Hz31kFELPtymmc3/bT9SoMOFVx3Gwxv2WThXAlLa6uTm2c2TAeGTDGuxDkzQggJ0yTcD4HyEyTWUtorIn6By9UB8a5SX3i9avgPoS3j6wdtT9A/9yqrQph9yuG6orQygjj0Omv+o34A7OSGcKYHTIu+FEbtbGOptNn6Q9lCGyks/PkUO6/rnzrBmQtWmRhhioS5BiiJI0WpedLO7zqTonn5YnREey6JPbP1Hc4VXvWjpTAFO6ePngYGz1HSX5M7/zQF3D6ICnEgXEK7q1lIXJ8UQ/UQdlofFY8Lvv1be7fgXrbSSrVqebWHVHJOTrBc3t8czGzc13tmdQj6VHCmBKmwG3y/yHMdskfGorzjmtDWK7wnVIxK2Jo6veFihOScIIgVp0RIIC62o0FoLL5dPDpQ01v9ptTyAo0g4fcGry2BU8uI1zpHMJYFoblBN9VadjjOh1OGu7ajrM2IFHV6ylmrWdnbD5BXO8ofVkBZ0lhGBBzxX+KlSEPntSqhV480/6wAFGjUp5MKvZjdsxr07ve3GOdC4BzI2P/kBP8CoPtXZekhmy9i20o+YmF2KRUISLHv8Q8EjU4P+k8BPLEBdLwdYRhPOu/ZrdkNjzx6oPcYErwsoVn3sU73M6twCmNPqDQz3RG5zn35hM3i+8JmuPaVQ/CVnrTDrLUSw5uFGBrvv4dKFtrOh8wIoRRL6kEXSjxkLxBh1uyKUvnPtvB0zpsQQwpckpj/O4uXiQODmDzmkNrHDv1lSwf4tLcluNl3ofYG0kX6BEOdQmmQk4TLa59K0qloLjL7cPIybbS186wGOmxxbAlC6+8p23x84XQshvgXiadE3z8GdVPZOPqGXpPGri+eZOacOr8S/CGOmIo1oramfFkKMjbjvgDiNoO8HO9Ylop/ubm0t/8Nh/P2ZKTySAKc1CaHTU3FbSNlb1BG2iK4DpKpXBurW0wqy40Yqs0Vm2L75b0p84pbFD930tJV/QOhzfnYy082TgT+mJBTCli5e/c6BFro6t7DT82GpKnCxRdEE/aOYN1kBQwMO0Izmu1yWoiwVkJ6HkaXQ9alMiIPpq1pHg5OqT0A6npxLAlC7+xt8fPny4eXXcPNtN96ctkjya0Jw/JenKzaeeYaQRhZyOgAhVNZeJttq/ytsasQ+aQtXuQDKHlXaVxqG6G3X/6hhqPpbDXUtPLYApffLyt3ebhw+ujsN8Z7rPRkChICKiSanzC7yeECxpJcXl5F/6dnlNwbXYSiIyWqHAbg7NMt8ZW5zA3+EZJMEzTg9++pXro1RvoZT93A3t68vyHQDv06sfWZtSvBNYBPoe5hZvL7cT746Fylg9y4vQ2L4TnMc7z2B8S3gy7ottf/3GAZ5heiYWwOnib3774OG0YBv0PZ+GhNn3zi+0MhFHQBCxqfdhERL7EfYd0Q6w7mqz/4lYCgtubO2O2/Jy9VmDT70+n3T8sz+6PmrgrXFS+zbJWatsZ07oHv1PnE5YOwnhrwyprGpvJaWBWLLFkeXMLQg/B2hpvZNjvSGf+vI9PKf0XAVg6fhnXx0FgVsjt+5jjYKkN3nLa8dH4tdNNfDaKz9U8NDVMxqLfgB0v2aRBQDrIwRwNArzzubXvvzE4eV50wsRgKUqCLk1vWteaPw8En6v2wELgaz4ALcGZO2PLw2GMONbI+HepfmbtmjbTdvIpXzy4LybaU+bXqgALB3/9M3XsMHr4/Rf06S1TB05T5JQeto4xZHPM2SLse3xsCipp3bvYXp58qk/vIcXnF6KACzpf05/p6xcQ5FJGNdgPJ4oIUdA8ftIWeNLCGtFcJClDygo94YBPyz/+8sH068QxktKL1UAnGZh4MI1DHKtiHx6ELnCzlOw9B3hlJsAhKhKm9Y3JzzTC+TeGG19sNngfbl086WBzuljI4A+6Ue3944/cXxlfFF+ZTPIvmzklRHUvXHI+yOoeyOyexElzdHOuDVQjkZtH4EdwT4ZfjK+y9sNGxxu/2d7KJc/HoD36RcOZ/Xx0095BQAAAABJRU5ErkJggg==";

var IdenticonGradient2 = "data:image/png;base64,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";

var IdenticonGradient3 = "data:image/png;base64,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";

var IdenticonGradient4 = "data:image/png;base64,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";

var IdenticonGradient5 = "data:image/png;base64,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";

var IdenticonGradient6 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAB2ZSURBVHgBzV1dj17XVV5rv2M3qAGGX9DJD0C1BReoCDq+44o4QpVoi5oxqDfcJJEQFS3F47Y0tEiNo0qAKlAmF1CgKkl+gR0J6BdS5gYqIaRMr7isK1qpjT1nsc/e6+NZ+5zXHseOky29856zv/ez1nrW2vuc12Z6j6YbrxzuEr3/wkTlApPsMdMHhKh+c82nXRHZtbo1j0ToFhPdEpKT9i30AyE+KTQdE/3k+NJTh7foPZiY3iOpA/7zl2kjH5aJ95llr4LYEusfu8fEQ/4sjJrTruf8Lpx2f8zExySnrxOd3rz01J+c0HsgvasCUC0/qJdP1pnst8yuzYvEKgWBQgD3nmlcKJdyU07lZaK33lVhvCsCuPGN5/dpp1ytCO43ZW1qDDNSIYQua5HOtmt2vjZtt4ZuPViRYAyhWL3Qq/Xz8qWn/uhVesTpkQngxktV23/h5w4qHs9UVPbmPMfctJ7z1NZ0m7dRUepvifdSmnFvllT/ntTva5ee+uMjekTpkQjg9de+/Ew198O6zl0ZVFqc4ClmoxYx4rwNfCuzNq7gC/8wl82CHSrSCMSjE8Q7KoAb3/j8fik7L6HGM3K80oPYNFwApGDG9BBMdMqJfsD5EuUu1xIwVsoL/pOTqdC1S7/9zgniHRHAja8/v7dzXl6oy7gsOExbnYFOQeR6LegHyJSUF35g6QNG5zz6gBVzorCaLkzxe4Y59Hs+OpXb194JZ/3QBfCv//LFp6dJrtfLXUrczqDxw/BGRQL5o1rKOq2MKQnG81RAife1UPTPGh2ZQPqgJ/Vz7TcfMi09NAHMTvbc4+WqcHmWjGcBdHeqrsIF8A7BBFjARyv8np1G6iYsZHS6ixa500UbWuYVpuu3p59ce1gbu4cigBtfP9w7f67cEOG9ps2aL/egnmQJQEcLerI6WI65a153AA41flaOskJbgyFoRIwm16VVVefkLTm99DAoqdADphv/fHjh3IbfoIn2+uoU9nkxfi15EXYvtkjaziveDMXa+83gU+Ydy9OP2Jgsmd2sHzAob8a0AF+z9t7HOzf+7ZU/v0APmB5IAN/5p2tPv0/ojTLz/QxKm6wJASdOkJ8jm1zFXHbnfMprbxe+sRrb0sq99D4ZVTo53YHCxuhJ21sfTKFI0s6nzr3xrde+9DQ9QHrbAvj2P/7ZM5NMR+wTVPBA21k51i2h3U8hHK8LKxdpFGFaHipqxdCWZClEEvTt2gdEOOrQ3TIXQ4TVJkvr3bR+il639hMd/fs3v/Qsvc3E9DbSdxv4ch053nhbEr/r9KEc6ycycN+R0RNwkqvTBR7CcDRdUxom+4aYrE5PkkOOXbIuRaMmthsV5jTRcx/6nU9dp/tM9y2A//iHzzx9SnTkwAJwycFi9KNOODAEsAeB2c6YeUlitifgLSvIbJTpjsZ2RkFiLTmsbtEPQV102JL63hQ6+NUnP/Uy3Ue6LwF89+8/PZ/NvyEaGoqHkuyRDlqA6MTFynVf4McPLozBkgisg7dMlcE8krPk5ZdGPhbRLDZc0JQlj8ZmDkhXi/YhuNt0evHXn/rMMZ0xndkHvPHSs3tlOn3FOJyV24tqQjjgyX1CIQpNaXw5DXUp+Q8a/Ye31wvgfB6cOzlgA3jgK1jBtzpIR5zohRI3oS9wv5ZJ1j9zdPStehJAZ0xnsoAK/q5szr1RtXvPtVw1fmq9dDlOiXaUBIDvmSPfV01xj5bS71emOaImtL6qQZMJtFaIwkFnJ5MAcSFN4kcarI6JffxsWV2Z6pO4H/304sUr996snckCyqae3c9hl2mTabFbw9Tyy3xv0YNo5yKgORLlRBE5JQ2jCP2IQDRoJeTWg5rqSbIltDEkW4ZHb7wcnxWYdj2B9QghYcJaF+vZo933XaUzpHtaQNX+gyrhl+zowLTftFUInCw6ZOf5FY7X+uTW0C2Jh2hJnN+jLTuEcIdq7ckcaw9dS4pXTZsBBD2/8B5Us8NKbGXsChUzyMKzGfKGDj745Kdfprukuwrg+5X3b7PcqF3tBcAK6nBNBKGo6a07XgCb43rhwLW9teUmGFgm89ZlAOtYr+lmscnqkkl1F/ST8mVL/rIe0Mqt6WdvXbz40cMT2pLuSkG3T+8cVrPaY6MO/0zt45RTnStNp7l87rw5XjDT5pg1rzlwSXQQDhm+aTR1oAukN6PGGYBQ46CPVBYU51TjH9G8kQIp2qZ2WTAeePQgZHfn/PkX7obxVgv4z7/7w4Na/JKMdINav5IXFMSxDND6oCUKi+Gcv9iUGRUREovWw43XyoKW90hkvUdeqc9Eq/mu4bOFogXJSEOxo65zvPTLH/nsTVpJO7QlVS2+Ostz7qTTQGk4TjoYaeezb+hBgAb4jLwdlwSxdoZAgJaxxJ4R9JV1imZ3nA3KZmlBPoxsBf1z+o7JrFIOCHRBQRbxEA0BBPvBXSdO6L/+KaW8VK+eoJW0SkHf/9onDyqtVOo5bZFOEYvvp0YhMzMHrUz6MZqY1Iwlmb5/ZEsdoBOnFIiEDJx4y2HyyGZBUxqx+CGaIM1RynMqTHsQypQoEdXZ/ibaQV8+f4I1t/H2/uubX3j2zAKom6urBcAyIQTgGnLSwM0moAmENdebJggtdVFT8LCHdxJmyy50UbCt7qThL60IbqQA/TAthcuZMuzeuL0kEKHdFpAJ+6IedaFibIiuvjm/GXIvAfz3X//+QZHTvdBsANKBmPI9CAa1ihwscadNaC2k4NIEgE9p0YWzgAk1OllW1mrUVBoEa8oV/C+EMX7SXqalUx6CgWLWjAIxK48gYPdnj5eDewpgQ9NVBLdIgFcsf5IMPE0poilkUZK2nyYaI5mSwCLQcBoApEwtAJoBQ6MwCPlcvE4BTY+5TEuLQUEIar5qtwJXAEAmyVYz0NJctlP4mRFv9EP0P1/9vcvVYbwiGNun6wLxvx7EWR6T6gJHxMNhvF6vVSthuCnKgr0CMZyoGnIcPrvV15gIfKtFSVo1LTJ9c0QvBI4bd8ydqjTasQBAx05Up8Uk0Lf5K2jTlj6dXnriI4c3bYQUBW1EDhoNNAQ7yDaxPs8JdKRHQKSRSM+bdKKACJe4NgBqm8mEKN1M1T/Gs1qLKjwkJY+SGLvzM/k+p0IRWRXfIq8IQOCFF21v9xE1KYXp2N7erQLr4XXUy21mkDdX69+b45zozRd+d483/GaPywtoZokDNIv1uSw0VXB3DNo/t+8Hdpy0fer6oLJWIc2W0aJZ64PcovC03iwAk5Apac83qjHzcO7GewXRHk+6Jq/Uj6MJcU3HupzqYP99cnGYV//+n/zSE3pQ5z6geun9QuZIT9VZznx/mp3bNCmnh1OlhTPWjzlfksFRq38wnwHRU+JSdJhbnKt97ODPHGKR0ODExx4ghO8prq1D6EmDP1IAizpXWnP6lH2VCZXdYmp6nA4Md6egwqdPd/aZK5a2yRHgXdPA/oguqKiQHtLNOi29nJRSjLLI283XneJY24ThGxnPtHYaD3IId3RCSO6c/nRAjZJwp2rN0WYKDZSUyvNmirF/A3JWGrMaCh/gm7FUV5IF1Osn69d1H/N/n7+8Nz22eTMdLyR6AcqB++RQWeMJoJk4QVWqIaO2DoE/PeOgNxr66A48w5EP5Tgj67wc+Q6wOkXoifJ7PyHPJR1R2jtgfabtwtxWdvvH1GioW8B52u8xdoA8O5V+IjkTUzhaEnaRNy2daWMWwmRHvgq8SEQrajHMU7OC3pf26RoNFkB6L3bMQRH1cKcFd4EcSm/t8H1Q18x5vpMsrUEPC+MoWtShUqc0yO8Wfm9wieJZCIFPYJjjuffz5Xpx1AUg0z5b/DCbSwm2mymjOIPZM+DJwWoAzX6C1YECFBrW9LrzokpxoFmto4HHooJRKiMT0qmP0Q61gH5SiEicjALPhLw+OlqCugMwnL4pRzLogLUx23gEFiO03gaEV5f1YRfARqYPdvC4A9aeAs2Anjb6MIH08LBQikhm4Ar7wZgocB3gSXlfAbfDMw6fEWC7omq0qb4I6rkP0FbhH8wEOC9aqQvDxfSgBYRg3B30JYQjIQm2PNniI3Rcrw/URUBr9Wa/lf/whcu7d27f/uHqsbNqb9qMAed3X1GcvyNULc7dBP5jHMM2Z6Y+o+/xZXud4nVd/bSOvzaCvA03ARSWWxc8CCYLiSEOCIEtNT75DMpWYE/SsJ9zPy6/tHPnp3cucAH+1++2oCmA4MrHMmNdOX8yANJQSllNSwWiGAKLUW13qxn1i1CvGzXZa4p4NI3H1t26OPLE5ZLA6jgHjydBCNAZG6CDY5a80jkVCaNkWhFMyoM9gZbeeezOhZ1Sbl8I21fwRaNxjgaNVqbSwC8g02515rSJLGLpb5N12kGn7tovQFEMwqEQbr8Xb69PI1yNxBdjYIWPsUV3AWmx0ACCCabTbuEMtK28zQZ5XsiFXtAysH/mJJDRKuYwdmK5sEPzub8P1IUgDBt7j987AEuHfKrXc8lpF5zuB3qkUxxE5/K2YFJLKyGspn3qbKn4DtWiJHElUU0mUBydCzGsRedsUc1IAYliKKgmhCBJ4x1kp6zcV6aosHlB/wL9bwrv7ZRZAKWDbH7M9zKqodyOE1pIo91IhIYWijJSR+m00cAUFxaD1noYCuc9vtlr85/I38vUcWxzkyGBPATPqQqAWZSv09VCQAS+QU3P6s6pgNCjXgixwMTSywH1eftOPYL4RbFzdh5PvrvTm8tLOzHTnW3TQg1FJ9VoseEm1XnT7g42abvwDaofFo42YZMKS3nd5gJUk3fH7NzvlwquhadkgmDcnRqsJj/IM2GgppvAulYRnkP1Xe+UBDQKdfQnEcHRB2oYOj980aJhR+jAqZlH98jXFplM6jsgL8X0JfG2/SbMx7APG2XAeECDDPi3p2qQYSCauTXHp5bt4FsYK+H2O5V0ukJqiz2AgOZK3kswomI9SvIleABo/enIuzt1d7gbLY1yNFIR09CZcoprhwCQk1JFDynD8aIGd7+gzlgtIHbasMPWHXU/FTXqUupzStF+3T9A2OFIw71SABuCSDF9Fwm2IGABAqCxG5MDbBCCVfU1T6Dl0ZdbhTnouf9CVQD1URkl5yPkRwA4EE/gjEPLC1uzyakp0cy8cbODPckOnI2qTMvNGCYCJ85tQ2h7iqAcBJmAZqKdzZ1YwBGHwBicY4p2eABQNRpsLAuLTLBgYYQC7CMUCUrsbaQKwONn0dFbsA9NO7BmGTQYm3E7ajcJxPvzMYP6li4MWTpcWwDb6enkVtIP+wxko8Tu4P301U9Jwx8kZ+unvGzySECaQHH3KiRZ+wX6oNze6hTFMWoE/fijS9jDzH93OiAR7s0gzAvr9CqUnoqhB2fJfG7lwAAM1mERT+8P9gZuAUV1QPwQcF6w+JvJuPdQztUQ1gYKM3dbByrRPPDN5CXqXLUOO+BaNhHgE5qNwUESIIXW++bORzOhdbx2IrYPTSRmj2SaJLBX7TQeSSIoegwBXE3qR4jMd/S9QT9cwwAtTkdZhSZk0U2Esl0b3QtT2gW3zooDgtTKlDWvK0gIpQvU1gdUocG+8z5S0SgMDpESwR7Cd9+oDGoB9enQ/K9M7bofZ1s8+cMWB2GhcRPZq6gucXgII6pNAs+ZWR8Aiz1PtlDV2E+C1pEeyPYFk9FdtkijieB/o1bUXuiWAFQVdGzEgmoSZZgmpw0iCo7UamLH7ho/CrXLpT4PqAJo/wyY80dROVikEWsUjBh8jZM716Jg9io9nGzi0I0Z+FAAVOZX93q0ZOAa98O/XyAeHOgcUas9XtfjEMpcTWDEHbAQTgdf0i44a3DMwQAO4bFrv4ejcT4yzAN359rfVAVQO7rV1uagR+wfcb3SiIivh8kcVQnDUY3ufCYNxO6Yps7xE4GvVCfaQs+pCWHyiZQQkL9twGEe2lGfTZ8XlwyMgUKU4iEXCIfDACsR13JJPsU4nkJoBqotyBWPkwU52N5/WE6tclItgH5Qcy64pD28E2zviw6wjZIminOb7mBtd0vwlM2pwXwCm5xUaNPkP6LIO2fbnUs3bQPejigk/IDvKZLG6VpD8cBvxHrHd3vy2xBEKcIiyZGUUY8LHRRBK4VihDLVyx9VC5hOKOSZdogCy0HSDQswjZ9AGHrMbBsEWJTowuZHnPMRhmsbTar1OlmTvU5cZKAUmE4Ch3CcmCibZSngjBaQgA0kEr+nV11gd8SRnwQuK6BzScg1Y5bpZGcSOYnX62JlRknOwU4JWC+EYOWsU/SQE4XAvZ+iZiSgRa196Vpvh3l9Obax0zRR8kvIJMmIBYXACQwXsjbuQjbNd8lngVBoe/7pEoFwYB4UfYcwQlC6GzrZ2QgdIzkKHlxxr25m2GhdFRu1NY4eDDAFnjo9pZSogDxkZXDgbId++IBezxQdDkFwkHZKsoA8RkwhOuoZ8ZNabahAm/WhpflmS7V6dLRumVbmE7YZ9/YbLsc7Ozt3jk9P9dm8AD8mwCOvjQvaJgwHC64RUyyTzQ8UbxsHcfoqog4OslGtmdwiGJ4vdwsqMZHsMRe7TXTgASrl9ahGMJqSSIvs0ppRauAfnBXIt5aEgQAM59ebnz523PJOP/srb9ZmeyYz0p1nqAzs8bh/Fj9BUlqxVxmtjOHXle5QW7nWG15LbG9OwPgCY/Z8eC4M84v7PHce1mHHBt0iGOBgX0Jqj3y3uOeVe+uPgCqZ0lWn8uNzH/vyxab69eb1qrV7xJy1MDlRbqedlm/3JmkMY2ORROS+oVNV+AXbEWtkI8M/omSvqqDlUG/nnTu/K80IYClenCwbnTOh4QSE5OZpdbASbKT8HnnZnti126Amm6elutb2zxnoT9zlJsM8XI849rRqGzrpHhL6DyXwm/Sjeem6fSZ/LTDep+zvW5KW57b5twX4OwQrH3/UYT/2sPf3/AcmNoaOHYdv0I6EGDEwfyAhsBEnO64BTohrM87UZvYC0+sugM356dXQgAC9D6qdK/rpTATKAgBybUBQYuGUBEWDEPuLsvoz1wRCru8CAWGiYPD00dck+EsWovT2g8gquCEoXJ+F5yAwFV5gmPslFYbV2dDmpguAD49v1Q5uspmxaDRkEhwmmDXFFo1aIsk6aASJskWgxqOGmhZnradlfS+npMlltEBWhfJ5TFlxaKVfZtDm2GssBKb+JVtP1CWXT6tzkz/6FycuAB36td4RaNucphGUMFsCwGxn6T85sl4BMNcYCUpYNVuSbIEDhSUhLq6zEJw2mFwIi7kRCtDqhQYnLZeRjimt3/0HIePDDprapv9lK3EBlHPT0VxBxJv4xGMiZrI4AdEd8GBqiWttcNQwGsw4g0lOJdn8eayLlpGuVyyOwHrNaVJQETOuTdJak9CIYe6BSawp1kWpXb/elE4/SQCNhmbTIAPVPjRouQUHyHkEoIVvINfgaamxc+Aw6W99rY6+nUGgje20FIQd4JJbmwlodLChnaAABL96TEoA2qwgE4xFlK0eBeX1mBLgMS4hDb1m9JMEoA2vuUC8h96BIPWo87O3wkJTuiWI0RBaoeSJoAMlohQN9cWE1kZEA+BTmD4PSsKwBu/LxqagV9T0AuVBlSAg9QeISbJ2piSMoCcAYZ4PlyOilDWI4LMX36z97KVNDelKrLpvxPpUGDdE+CMM3Cx5P6ybMtBRfcHXx/DYraR+OP0TaeOGjJf17N7nP/QPOt9f/iLfLAZvc4aqFZUBQgaIxvoogHJSPvaXT0Dj0QLa4/AXe3N2CnOHjEk1eflTHyEaeZ8A25EurA1qlWn0wOepjfodAkpDxz22G6OWBJ9GN/ZQndJ6JVVmqyOS/BgDLmkcifaTnF4bhl8KoGzoiNt/gpPNlWgwAqLkoMECs0Bw/k5jAE5yvOOCBEJOomW0Qx76LoIEj56IcH/ibzugk3WfhfObnI1GkBnWL4TKaqfBfRxMPD98+fhXjuheApidcT2ivoZcaigKYfQw8CWFdotehxPOvBqLFRqjmJQGbUTtZfAVsy/Ct5TxF/HeXmi5pxGK9SB/U24rg4Z7DRktShbAk2MhC+3H8RZJ/vTim7V4L3Ea8H7n2kEvRj5u2XjPoTHuR8Z29rRMfYsd/qV7e89Il8fmh/C6eDnx2nxs+cs5+5t+fdQ+Y47tGg842PrdIkzSahV1Kif8sa88sYZzoa1JrvQv1WTKvNelOjynkkHrRXLoZtECD6a/wrmrEZQVQ/+uAhiJyNDnaLAOLCl0BBFTNIJ9r9uCHe7JMF9ie3IH8/Mq0zXakrYKgL9wfLN+vToapQ0q4yKJgIZisoTVmIKz273rV4AgA03Q8rv3DbYHCy/DcYHTnM9PlVPPm7IfG+lOYh0SfoRpxR9QWAb2UL+O+OPXj2hLuosF1LQzPVc7uOUjL7qXBFQUqjOS3Cq982OajKopSsqu8VOez8DTvc/kKVN/4QdoqENhAR45cDIcAaeamwpgCwuy9TChzp5Q2a79c7qrAKpDPqHT0+ecy3wk/MaUy5jWXgkZtGw1THS2Tff4cSphfFwIpp+EZVZgdUacIBDgbPPuVEP9Y43h1bUO04DVNf7o9RO6S7q7BcxdffH4qH69iJpyl9r9azKt1FNViGYSiIt7EwT7wu2ZLFqT09+AueNjIJhRERPiiMqwMG73EeBfhj6J0kRWUhv0xbtRj6V7CqClndPDZk7bBh3zuur0S9dQouVKtws1jnY5WYeAE+2CCUFY+UKoOOS2ORMoitAqpS36MY2XoUAqVm/JIZ0hnUkA896ANucu0fwW3drk0duKmiYFtfQ6UN9pAu5HhyFD+8GCCDR0tKhGHAMFEbQZvDHlgSkp0GoCx53u+8UJ3aFLfOX6mf6Tn7NZwNz14bdP6jnqpX6D3myFkmRh01lLFo6BBiFOy/btcqLYyVk7oRxaQXcjuDw43m0UIouLPtm1+qNi3aGnKvgndMZ0ZgG0sQ6/Vx8k85WUudUaVmYoVr4iNKzvmyYi4C+CvX8GN01Blv0lB825WlImWrZdm6tAcbJcvlLBP/P/HTCn+xJAG+Lz3zuiUp5LE/HCe9juvUx7TLjtx/FQkLI2yHDJOa4ZqznQMnaxQk/YxubR6vNz/Il7O90x3bcA2lCH37nehJAmSlkbeI1nKIdtWG/NkbtA10BDPsdwcMUyXPORztRXDT5mZRLLuS6Moszg3/f/H9Na0ttMTQhcrugdFIwmPixsVKoU3iJVWL2BwtauSYb7bUBRnqfAuAJtVyltMXET+pW3C/6c3rYA5lQd8xHxdLFO4mRZOmghGgTnKtAjuQ+Qlf7cKmils7MkXvaZzmyIlgHEFksmvlU3qRf5E189ogdIDySANo3umC8R6T4BHWb7psi+G6VapRTaDVFIyxosZnHekbtb1E3+hJdOmFfmNF7Ocf60uchX/uq+HO5aemABzKmFqPRYtQR+cVGIGmWgbvVrHLzs+wlveCaaXpThHNYiHhMK360DmJ/UNcrOxfsJNe+W7sd+z5Tk8NcO6kSvVv+w10cwhDC8hOe5lm8fq1sAfLaz/QJ1Kbf16xJjjP0TLcfDiMrGWXtmMFMO0XNV64/oIaaHYgGYml8QuVQ3TS9HJlHeLQoteD6dGYHjcOe84GBoO/Rzt/xEiULDg4ehnU+8Hsufv/iwwbcR3rEkn/vQAdGmWgPtBZiDZvGgof6064z5llfgdz5clpbRisY8zF+1ypN6UzdXf3OT3qH0jgrAknzuNw4aLRHvZVBHitD8MtDISGNjH4zgbxMAD/QyCCD3Pf9y9Br/wdfednh51vRIBGBJPrd/QBuqglCLoBUwk0YPmotWgPXLCHQZQEeB0lAXBVFOKi29SDuPH531MO1B0yMVgCX5/P7l6n2ergu+TGtOmLcIZ6ShhVbfwwEnQVLUJb5ZP9f4k397kx5xelcEYEme39+jqexXba/C4P1BGynx/6jtLZ9X8vlsFFQq6BO9RufrM9srR49E29fSuyoATPL8b+0Rne7XKe3TZvPBmnMhC+EeFuDCK7TFgZ/U4ps0/xzrsc2r7ybomN4zAhiTHO7v0vsfv9AFwXv184EK5Pyf4MzXu+2TtboCWm5Vzb7VuJymH5DMnL45psd/fMxXXn1PAD6m/we4Eb2a5NwNZQAAAABJRU5ErkJggg==";

var IdenticonGradient7 = "data:image/png;base64,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";

var IdenticonGradient8 = "data:image/png;base64,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";

var IdenticonGradient9 = "data:image/png;base64,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";

var _jsxFileName$o = "D:\\Gozillapad\\widgets\\src\\icons\\identicon.tsx";
var gradients = [IdenticonGradient0, IdenticonGradient1, IdenticonGradient2, IdenticonGradient3, IdenticonGradient4, IdenticonGradient5, IdenticonGradient6, IdenticonGradient7, IdenticonGradient8, IdenticonGradient9];
function getGradientIconSrc(account) {
  var num = parseInt(account.slice(2, 10), 16);
  var i = num % 10;
  return gradients[i];
}
function IdenticonIcon() {
  var _useWeb3React = useWeb3React(),
    account = _useWeb3React.account;
  var iconSrc = useMemo(function () {
    return account && getGradientIconSrc(account);
  }, [account]);
  return /*#__PURE__*/jsxDEV("img", {
    src: iconSrc,
    alt: "account icon",
    width: "16px",
    height: "16px"
  }, void 0, false, {
    fileName: _jsxFileName$o,
    lineNumber: 37,
    columnNumber: 10
  }, this);
}

var _jsxFileName$n = "D:\\Gozillapad\\widgets\\src\\icons\\index.tsx",
  _templateObject$2,
  _templateObject2$2;
// Intentionally uses `em` in order to scale with font size.
function icon(Icon) {
  return _styled(Icon).withConfig({
    displayName: "icons",
    componentId: "sc-lekdau-0"
  })(["clip-path:stroke-box;height:1em;stroke:", ";width:1em;"], function (_ref) {
    var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      theme = _ref.theme;
    return theme[color];
  });
}
var largeIconCss = css(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["\n  display: flex;\n\n  svg {\n    align-self: center;\n    height: ", "em;\n    width: ", "em;\n  }\n"])), function (_ref2) {
  var iconSize = _ref2.iconSize;
  return iconSize;
}, function (_ref3) {
  var iconSize = _ref3.iconSize;
  return iconSize;
});
var LargeWrapper = /*#__PURE__*/_styled.div.withConfig({
  displayName: "icons__LargeWrapper",
  componentId: "sc-lekdau-1"
})(["height:", "em;width:", "em;", ""], function (_ref4) {
  var iconSize = _ref4.iconSize;
  return iconSize;
}, function (_ref5) {
  var iconSize = _ref5.iconSize;
  return iconSize;
}, largeIconCss);
function LargeIcon(_ref6) {
  var Icon = _ref6.icon,
    color = _ref6.color,
    _ref6$size = _ref6.size,
    size = _ref6$size === void 0 ? 1.2 : _ref6$size,
    _ref6$strokeWidth = _ref6.strokeWidth,
    strokeWidth = _ref6$strokeWidth === void 0 ? 1.5 : _ref6$strokeWidth,
    onClick = _ref6.onClick,
    className = _ref6.className;
  return /*#__PURE__*/jsxDEV(LargeWrapper, {
    color: color,
    iconSize: size,
    className: className,
    children: Icon && /*#__PURE__*/jsxDEV(Icon, {
      color: color,
      strokeWidth: strokeWidth,
      onClick: onClick
    }, void 0, false, {
      fileName: _jsxFileName$n,
      lineNumber: 86,
      columnNumber: 16
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName$n,
    lineNumber: 85,
    columnNumber: 5
  }, this);
}
var AlertTriangle = icon(AlertTriangle$1);
icon(ArrowDown);
icon(ArrowRight);
icon(ArrowLeft);
icon(ArrowUp);
icon(BarChart2);
icon(ChevronDown);
icon(ChevronUp);
icon(Clock);
icon(HelpCircle);
icon(IdenticonIcon);
var Info = icon(Info$1);
icon(ArrowUpRight);
icon(AutoRouterIcon);
icon(Settings);
icon(Slash);
icon(Trash2);
icon(SvgWallet);
var X = icon(X$1);
icon(XOctagon);
var Reverse = icon(SvgReverse);
icon(Search);
var Expando$1 = /*#__PURE__*/_styled(icon(SvgExpando)).withConfig({
  displayName: "icons__Expando",
  componentId: "sc-lekdau-3"
})(["transform:", ";transition:transform ", ";"], function (_ref8) {
  var open = _ref8.open;
  return open ? 'rotate(0deg)' : 'rotate(-180deg)';
}, AnimationSpeed.Medium);
var rotate = keyframes(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral(["\n  from {\n    transform: rotate(-45deg);\n  }\n  to {\n    transform: rotate(315deg);\n  }\n"])));
/*#__PURE__*/_styled(icon(SvgSpinner)).withConfig({
  displayName: "icons__Spinner",
  componentId: "sc-lekdau-6"
})(["animation:", " 1s cubic-bezier(0.83,0,0.17,1) infinite;color:", ";fill:", ";transition:color ", "ms ease,fill ", "ms ease;#dot{fill:", ";}"], rotate, function (_ref10) {
  var _ref10$color = _ref10.color,
    color = _ref10$color === void 0 ? 'active' : _ref10$color,
    theme = _ref10.theme;
  return theme[color];
}, function (_ref11) {
  var _ref11$color = _ref11.color,
    color = _ref11$color === void 0 ? 'active' : _ref11$color,
    theme = _ref11.theme;
  return theme[color];
}, TransitionDuration.Medium, TransitionDuration.Medium, function (_ref12) {
  var theme = _ref12.theme;
  return theme.interactive;
});
var StyledXButton = /*#__PURE__*/_styled(X).withConfig({
  displayName: "icons__StyledXButton",
  componentId: "sc-lekdau-12"
})(["", " stroke-width:2.5px;"], iconHoverCss);

/**
 * Invokes callback repeatedly over an interval defined by the delay
 * @param callback
 * @param delay if null, the callback will not be invoked
 * @param leading if true, the callback will be invoked immediately (on the leading edge); otherwise, it will be invoked after delay
 */
function useInterval(callback, delay) {
  var leading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var savedCallback = useRef();

  // Remember the latest callback.
  useEffect(function () {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(function () {
    function tick() {
      var current = savedCallback.current;
      current && current();
    }
    if (delay !== null) {
      if (leading) tick();
      var id = setInterval(tick, delay);
      return function () {
        return clearInterval(id);
      };
    }
    return;
  }, [delay, leading]);
}

var _jsxFileName$m = "D:\\Gozillapad\\widgets\\src\\components\\Popover.tsx";
function ownKeys$g(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$g(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$g(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$g(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var BoundaryContext = /*#__PURE__*/createContext(null);
var PopoverContainer = /*#__PURE__*/_styled.div.withConfig({
  displayName: "Popover__PopoverContainer",
  componentId: "sc-1liex6z-0"
})(["", " background-color:", ";border:1px solid ", ";border-radius:0.5rem;opacity:", ";padding:0.75rem;transition:visibility ", " linear,opacity ", " linear;visibility:", ";z-index:", ";"], globalFontStyles, function (_ref2) {
  var theme = _ref2.theme;
  return theme.dialog;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.outline;
}, function (props) {
  return props.show ? 1 : 0;
}, AnimationSpeed.Medium, AnimationSpeed.Medium, function (props) {
  return props.show ? 'visible' : 'hidden';
}, Layer.TOOLTIP);
var Reference = /*#__PURE__*/_styled.div.withConfig({
  displayName: "Popover__Reference",
  componentId: "sc-1liex6z-1"
})(["align-items:center;display:flex;justify-content:center;min-height:1rem;"]);
var Arrow = /*#__PURE__*/_styled.div.withConfig({
  displayName: "Popover__Arrow",
  componentId: "sc-1liex6z-2"
})(["height:8px;width:8px;z-index:", ";::before{background:", ";border:1px solid ", ";content:'';height:8px;position:absolute;transform:rotate(45deg);width:8px;}&.arrow-top{bottom:-4px;::before{border-radius:1px;border-left:none;border-top:none;}}&.arrow-bottom{top:-5px;::before{border-bottom:none;border-right:none;border-radius:1px;}}&.arrow-left{right:-4px;::before{border-bottom:none;border-left:none;border-radius:1px;}}&.arrow-right{left:-5px;::before{border-radius:1px;border-right:none;border-top:none;}}"], Layer.TOOLTIP, function (_ref4) {
  var theme = _ref4.theme;
  return theme.dialog;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.outline;
});
function Popover(_ref6) {
  var _attributes$popper$da, _attributes$popper;
  var content = _ref6.content,
    show = _ref6.show,
    children = _ref6.children,
    placement = _ref6.placement,
    _ref6$offset = _ref6.offset,
    offset = _ref6$offset === void 0 ? 8 : _ref6$offset,
    contained = _ref6.contained,
    _ref6$showArrow = _ref6.showArrow,
    showArrow = _ref6$showArrow === void 0 ? true : _ref6$showArrow;
  var boundary = useContext(BoundaryContext);
  var reference = useRef(null);

  // Use callback refs to be notified when instantiated
  var popover = useRef(null);
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    arrow = _useState2[0],
    setArrow = _useState2[1];
  var options = useMemo(function () {
    var modifiers = [{
      name: 'offset',
      options: {
        offset: [0, offset || 4]
      }
    }, {
      name: 'arrow',
      options: {
        element: arrow,
        padding: 4
      }
    }];
    if (contained) {
      modifiers.push({
        name: 'preventOverflow',
        options: {
          boundary: boundary,
          padding: 8
        }
      }, {
        name: 'flip',
        options: {
          boundary: boundary,
          padding: 8
        }
      }, _objectSpread$g(_objectSpread$g({}, maxSize), {}, {
        options: {
          boundary: boundary,
          padding: 8
        }
      }), {
        name: 'applyMaxSize',
        enabled: true,
        phase: 'beforeWrite',
        requires: ['maxSize'],
        fn: function fn(_ref7) {
          var _boundary$clientWidth;
          var state = _ref7.state;
          var width = state.modifiersData.maxSize.width;
          // width is sometimes too small, so expand it to the clientWidth:
          var maxWidth = Math.max(width, ((_boundary$clientWidth = boundary === null || boundary === void 0 ? void 0 : boundary.clientWidth) !== null && _boundary$clientWidth !== void 0 ? _boundary$clientWidth : 16) - 16);
          state.styles.popper = _objectSpread$g(_objectSpread$g({}, state.styles.popper), {}, {
            maxWidth: "".concat(maxWidth, "px")
          });
        }
      });
    }
    return {
      placement: placement,
      strategy: 'absolute',
      modifiers: modifiers
    };
  }, [offset, arrow, contained, placement, boundary]);
  var _usePopper = usePopper(reference.current, popover === null || popover === void 0 ? void 0 : popover.current, options),
    styles = _usePopper.styles,
    attributes = _usePopper.attributes,
    update = _usePopper.update;
  var updateCallback = useCallback(function () {
    update && update();
  }, [update]);
  useInterval(updateCallback, show ? 100 : null);
  var containerOnClick = useCallback(function (e) {
    e.stopPropagation();
  }, []);
  return /*#__PURE__*/jsxDEV(Fragment, {
    children: [/*#__PURE__*/jsxDEV(Reference, {
      ref: reference,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName$m,
      lineNumber: 167,
      columnNumber: 7
    }, this), boundary && /*#__PURE__*/createPortal( /*#__PURE__*/jsxDEV(PopoverContainer, _objectSpread$g(_objectSpread$g({
      show: show,
      ref: popover,
      style: styles.popper
    }, attributes.popper), {}, {
      onClick: containerOnClick,
      "data-testid": "popover-container",
      children: [content, showArrow && /*#__PURE__*/jsxDEV(Arrow, _objectSpread$g({
        className: "arrow-".concat((_attributes$popper$da = (_attributes$popper = attributes.popper) === null || _attributes$popper === void 0 ? void 0 : _attributes$popper['data-popper-placement']) !== null && _attributes$popper$da !== void 0 ? _attributes$popper$da : ''),
        ref: setArrow,
        style: styles.arrow
      }, attributes.arrow), void 0, false, {
        fileName: _jsxFileName$m,
        lineNumber: 180,
        columnNumber: 15
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName$m,
      lineNumber: 170,
      columnNumber: 11
    }, this), boundary)]
  }, void 0, true);
}

var Row = /*#__PURE__*/_styled.div.withConfig({
  displayName: "Row",
  componentId: "sc-1nzvhrh-0"
})(["align-items:", ";color:", ";display:", ";flex-flow:", ";flex-grow:", ";gap:", ";grid-auto-flow:column;grid-template-columns:", ";justify-content:", ";padding:", ";"], function (_ref) {
  var align = _ref.align;
  return align !== null && align !== void 0 ? align : 'center';
}, function (_ref2) {
  var color = _ref2.color,
    theme = _ref2.theme;
  return color && theme[color];
}, function (_ref3) {
  var flex = _ref3.flex;
  return flex ? 'flex' : 'grid';
}, function (_ref4) {
  var flow = _ref4.flow;
  return flow !== null && flow !== void 0 ? flow : 'wrap';
}, function (_ref5) {
  var grow = _ref5.grow;
  return grow && 1;
}, function (_ref6) {
  var gap = _ref6.gap;
  return gap && "".concat(gap, "rem");
}, function (_ref7) {
  var grow = _ref7.grow,
    children = _ref7.children;
  if (grow === 'first') return '1fr';
  if (grow === 'last') return "repeat(".concat(Children.count(children) - 1, ", auto) 1fr");
  if (grow) return "repeat(".concat(Children.count(children), ", 1fr)");
  return undefined;
}, function (_ref8) {
  var justify = _ref8.justify;
  return justify !== null && justify !== void 0 ? justify : 'space-between';
}, function (_ref9) {
  var pad = _ref9.pad;
  return pad && "0 ".concat(pad, "rem");
});

var _jsxFileName$l = "D:\\Gozillapad\\widgets\\src\\components\\Dialog.tsx",
  _templateObject$1,
  _templateObject2$1,
  _templateObject3$1,
  _templateObject4$1,
  _templateObject5;
var DialogAnimationType;
(function (DialogAnimationType) {
  DialogAnimationType["SLIDE"] = "slide";
  DialogAnimationType["FADE"] = "fade";
  DialogAnimationType["NONE"] = "none";
})(DialogAnimationType || (DialogAnimationType = {}));
var Context = /*#__PURE__*/createContext({
  element: null,
  options: {},
  active: false,
  setActive: function setActive(active) {
    return undefined;
  }
});
function Provider$6(_ref) {
  var value = _ref.value,
    children = _ref.children,
    options = _ref.options;
  // If a Dialog is active, mark the main content inert
  var ref = useRef(null);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    active = _useState2[0],
    setActive = _useState2[1];
  var context = {
    element: value,
    active: active,
    setActive: setActive,
    options: options
  };
  useEffect(function () {
    if (ref.current) {
      ref.current.inert = active;
    }
  }, [active]);
  return /*#__PURE__*/jsxDEV("div", {
    ref: ref,
    style: {
      isolation: 'isolate'
    } // creates a new stacking context, preventing the dialog from intercepting non-dialog clicks
    ,
    children: /*#__PURE__*/jsxDEV(Context.Provider, {
      value: context,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName$l,
      lineNumber: 79,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName$l,
    lineNumber: 75,
    columnNumber: 5
  }, this);
}
/*#__PURE__*/_styled.div.withConfig({
  displayName: "Dialog__Modal",
  componentId: "sc-c8nkza-3"
})(["", ";background-color:", ";border-radius:", "rem;display:flex;flex-direction:column;height:", ";left:0;outline:", ";padding:", ";position:", ";right:0;top:0;z-index:", ";"], globalFontStyles, function (_ref3) {
  var color = _ref3.color,
    theme = _ref3.theme;
  return theme[color];
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.borderRadius.large;
}, function (_ref5) {
  var constrain = _ref5.constrain;
  return constrain ? 'fit-content' : '100%';
}, function (_ref6) {
  var theme = _ref6.theme,
    constrain = _ref6.constrain;
  return constrain ? "1px solid ".concat(theme.outline) : 'transparent';
}, function (_ref7) {
  var padded = _ref7.padded;
  return padded ? '0.5rem' : '0';
}, function (_ref8) {
  var constrain = _ref8.constrain;
  return constrain ? 'relative' : 'absolute';
}, Layer.DIALOG);
var slideInLeft = keyframes(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n  from {\n    transform: translateX(calc(100% - 0.25rem));\n  }\n"])));
var slideOutLeft = keyframes(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["\n  to {\n    transform: translateX(calc(0.25rem - 100%));\n  }\n"])));
var slideOutRight = keyframes(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteral(["\n  to {\n    transform: translateX(calc(100% - 0.25rem));\n  }\n"])));
css(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteral(["\n  animation: ", " ", " ease-in;\n\n  &.", " {\n    animation: ", " ", " ease-in;\n  }\n  &.", " {\n    animation: ", " ", " ease-out;\n  }\n"])), slideInLeft, AnimationSpeed.Medium, SlideAnimationType.PAGING, slideOutLeft, AnimationSpeed.Medium, SlideAnimationType.CLOSING, slideOutRight, AnimationSpeed.Medium);
css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([""])));

var i$1 = function i(e) {
    return "string" == typeof e;
  },
  s$1 = function s(e) {
    return "function" == typeof e;
  },
  u$1 = new Map(),
  c$1 = new Map();
function f$1(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
  return function (r) {
    if (i$1(r) && (r = new Date(r)), n) {
      var a = v$1(e, t),
        o = c$1.get(a);
      if (o) return o.format(r);
      var l = new Intl.DateTimeFormat(e, t);
      return c$1.set(a, l), l.format(r);
    }
    var s = new Intl.DateTimeFormat(e, t);
    return s.format(r);
  };
}
function h(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
  return function (r) {
    if (n) {
      var a = v$1(e, t),
        o = u$1.get(a);
      if (o) return o.format(r);
      var l = new Intl.NumberFormat(e, t);
      return u$1.set(a, l), l.format(r);
    }
    var i = new Intl.NumberFormat(e, t);
    return i.format(r);
  };
}
function v$1(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    n = Array.isArray(e) ? e.sort().join("-") : e;
  return "".concat(n, "-").concat(JSON.stringify(t));
}
var m$1 = Object.freeze({
    __proto__: null,
    date: f$1,
    number: h
  }),
  g = /\\u[a-fA-F0-9]{4}|\\x[a-fA-F0-9]{2}/g;
function _(e) {
  var t = e.locale,
    n = e.locales,
    r = e.values,
    a = e.formats,
    o = e.localeData,
    u = function (e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          plurals: void 0
        },
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      t = t || e;
      var a = n.plurals,
        o = function o(e) {
          return i$1(e) ? r[e] || {
            style: e
          } : e;
        },
        u = function u(e, n) {
          return function (a) {
            var l = s$1(n) ? n(a) : n,
              u = Array.isArray(l) ? l : [l],
              c = Object.keys(r).length ? o("number") : {},
              f = h(t, c)(e);
            return u.map(function (e) {
              return i$1(e) ? e.replace("#", f) : e;
            });
          };
        };
      return a || console.error("Plurals for locale ".concat(e, " aren't loaded. Use i18n.loadLocaleData method to load plurals for specific locale. Using other plural rule as a fallback.")), {
        plural: function plural(e, t) {
          var n = t.offset,
            r = void 0 === n ? 0 : n,
            o = _objectWithoutProperties(t, ["offset"]),
            i = o[e] || o[null == a ? void 0 : a(e - r)] || o.other;
          return u(e - r, i);
        },
        selectordinal: function selectordinal(e, t) {
          var n = t.offset,
            r = void 0 === n ? 0 : n,
            o = _objectWithoutProperties(t, ["offset"]),
            i = o[e] || o[null == a ? void 0 : a(e - r, !0)] || o.other;
          return u(e - r, i);
        },
        select: function select(e, t) {
          return t[e] || t.other;
        },
        number: function number(e, n) {
          return h(t, o(n))(e);
        },
        date: function date(e, n) {
          return f$1(t, o(n))(e);
        },
        undefined: function undefined$1(e) {
          return e;
        }
      };
    }(t, n, o, a);
  return function e(t, n, a) {
    var o = r[t],
      l = u[n](o, a),
      i = s$1(l) ? l(e) : l;
    return Array.isArray(i) ? i.join("") : i;
  };
}
function d$1(e, t, n, r) {
  return function (a) {
    var l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      s = _({
        locale: t,
        locales: n,
        localeData: r,
        formats: l,
        values: a
      }),
      u = function e(t) {
        return Array.isArray(t) ? t.reduce(function (t, n) {
          if (i$1(n)) return t + n;
          var r = _slicedToArray(n, 3),
            a = r[0],
            l = r[1],
            u = r[2],
            c = {};
          null == u || i$1(u) ? c = u : Object.keys(u).forEach(function (t) {
            c[t] = e(u[t]);
          });
          var f = s(a, l, c);
          return null == f ? t : t + f;
        }, "") : t;
      },
      c = u(e);
    return i$1(c) && g.test(c) ? JSON.parse('"'.concat(c.trim(), '"')) : i$1(c) ? c.trim() : c;
  };
}
var p$1 = function () {
  function n() {
    _classCallCheck(this, n), this._events = {};
  }
  return _createClass(n, [{
    key: "on",
    value: function value(e, t) {
      var n = this;
      return this._hasEvent(e) || (this._events[e] = []), this._events[e].push(t), function () {
        return n.removeListener(e, t);
      };
    }
  }, {
    key: "removeListener",
    value: function value(e, t) {
      if (this._hasEvent(e)) {
        var n = this._events[e].indexOf(t);
        ~n && this._events[e].splice(n, 1);
      }
    }
  }, {
    key: "emit",
    value: function value(e) {
      for (var t = this, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) {
        r[a - 1] = arguments[a];
      }
      this._hasEvent(e) && this._events[e].map(function (e) {
        return e.apply(t, r);
      });
    }
  }, {
    key: "_hasEvent",
    value: function value(e) {
      return Array.isArray(this._events[e]);
    }
  }]), n;
}();
function y$1(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();
  return function () {
    var n,
      o = _getPrototypeOf(e);
    if (t) {
      var l = _getPrototypeOf(this).constructor;
      n = Reflect.construct(o, arguments, l);
    } else n = o.apply(this, arguments);
    return _possibleConstructorReturn(this, n);
  };
}
var b = function (r) {
  _inherits(o, r);
  var a = y$1(o);
  function o(t) {
    var n;
    return _classCallCheck(this, o), n = a.call(this), n._messages = {}, n._localeData = {}, null != t.missing && (n._missing = t.missing), null != t.messages && n.load(t.messages), null != t.localeData && n.loadLocaleData(t.localeData), null == t.locale && null == t.locales || n.activate(t.locale, t.locales), n;
  }
  return _createClass(o, [{
    key: "_loadLocaleData",
    value: function value(e, t) {
      null == this._localeData[e] ? this._localeData[e] = t : Object.assign(this._localeData[e], t);
    }
  }, {
    key: "loadLocaleData",
    value: function value(e, t) {
      var n = this;
      null != t ? this._loadLocaleData(e, t) : Object.keys(e).forEach(function (t) {
        return n._loadLocaleData(t, e[t]);
      }), this.emit("change");
    }
  }, {
    key: "_load",
    value: function value(e, t) {
      null == this._messages[e] ? this._messages[e] = t : Object.assign(this._messages[e], t);
    }
  }, {
    key: "load",
    value: function value(e, t) {
      var n = this;
      null != t ? this._load(e, t) : Object.keys(e).forEach(function (t) {
        return n._load(t, e[t]);
      }), this.emit("change");
    }
  }, {
    key: "activate",
    value: function value(e, t) {
      this._locale = e, this._locales = t, this.emit("change");
    }
  }, {
    key: "_",
    value: function value(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = n.message,
        a = n.formats,
        o = n.context;
      i$1(e) || (t = e.values || t, r = e.message, o = e.context, e = e.id);
      var l,
        u = !o && !this.messages[e],
        c = o && !this.messages[o][e],
        f = c || u,
        h = this._missing;
      return h && f ? s$1(h) ? h(this._locale, e, o) : h : (f && this.emit("missing", {
        id: e,
        context: o,
        locale: this._locale
      }), l = o && !c ? this.messages[o][e] || r || e : this.messages[e] || r || e, i$1(l) && g.test(l) ? JSON.parse('"'.concat(l, '"')) : i$1(l) ? l : d$1(l, this._locale, this._locales, this.localeData)(t, a));
    }
  }, {
    key: "date",
    value: function value(e, t) {
      return f$1(this._locales || this._locale, t)(e);
    }
  }, {
    key: "number",
    value: function value(e, t) {
      return h(this._locales || this._locale, t)(e);
    }
  }, {
    key: "locale",
    get: function get() {
      return this._locale;
    }
  }, {
    key: "locales",
    get: function get() {
      return this._locales;
    }
  }, {
    key: "messages",
    get: function get() {
      var e;
      return null !== (e = this._messages[this._locale]) && void 0 !== e ? e : {};
    }
  }, {
    key: "localeData",
    get: function get() {
      var e;
      return null !== (e = this._localeData[this._locale]) && void 0 !== e ? e : {};
    }
  }]), o;
}(p$1);
function k() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return new b(e);
}
var D = k();

/*
 * Generated by PEG.js 0.10.0.
 *
 * http://pegjs.org/
 */
function peg$subclass(child, parent) {
  function ctor() {
    this.constructor = child;
  }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
}
function peg$SyntaxError(message, expected, found, location) {
  this.message = message;
  this.expected = expected;
  this.found = found;
  this.location = location;
  this.name = "SyntaxError";
  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError);
  }
}
peg$subclass(peg$SyntaxError, Error);
peg$SyntaxError.buildMessage = function (expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
    literal: function literal(expectation) {
      return "\"" + literalEscape(expectation.text) + "\"";
    },
    "class": function _class(expectation) {
      var escapedParts = "",
        i;
      for (i = 0; i < expectation.parts.length; i++) {
        escapedParts += expectation.parts[i] instanceof Array ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1]) : classEscape(expectation.parts[i]);
      }
      return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
    },
    any: function any(expectation) {
      return "any character";
    },
    end: function end(expectation) {
      return "end of input";
    },
    other: function other(expectation) {
      return expectation.description;
    }
  };
  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }
  function literalEscape(s) {
    return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\0/g, '\\0').replace(/\t/g, '\\t').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/[\x00-\x0F]/g, function (ch) {
      return '\\x0' + hex(ch);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
      return '\\x' + hex(ch);
    });
  }
  function classEscape(s) {
    return s.replace(/\\/g, '\\\\').replace(/\]/g, '\\]').replace(/\^/g, '\\^').replace(/-/g, '\\-').replace(/\0/g, '\\0').replace(/\t/g, '\\t').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/[\x00-\x0F]/g, function (ch) {
      return '\\x0' + hex(ch);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
      return '\\x' + hex(ch);
    });
  }
  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }
  function describeExpected(expected) {
    var descriptions = new Array(expected.length),
      i,
      j;
    for (i = 0; i < expected.length; i++) {
      descriptions[i] = describeExpectation(expected[i]);
    }
    descriptions.sort();
    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }
    switch (descriptions.length) {
      case 1:
        return descriptions[0];
      case 2:
        return descriptions[0] + " or " + descriptions[1];
      default:
        return descriptions.slice(0, -1).join(", ") + ", or " + descriptions[descriptions.length - 1];
    }
  }
  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }
  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};
function peg$parse(input, options) {
  options = options !== void 0 ? options : {};
  var peg$FAILED = {},
    peg$startRuleFunctions = {
      start: peg$parsestart
    },
    peg$startRuleFunction = peg$parsestart,
    peg$c0 = "#",
    peg$c1 = peg$literalExpectation("#", false),
    peg$c2 = function peg$c2() {
      return inPlural[0];
    },
    peg$c3 = function peg$c3() {
      return {
        type: 'octothorpe'
      };
    },
    peg$c4 = function peg$c4(str) {
      return str.join('');
    },
    peg$c5 = "{",
    peg$c6 = peg$literalExpectation("{", false),
    peg$c7 = "}",
    peg$c8 = peg$literalExpectation("}", false),
    peg$c9 = function peg$c9(arg) {
      return {
        type: 'argument',
        arg: arg
      };
    },
    peg$c10 = ",",
    peg$c11 = peg$literalExpectation(",", false),
    peg$c12 = "select",
    peg$c13 = peg$literalExpectation("select", false),
    peg$c14 = function peg$c14(arg, m) {
      if (options.strict) {
        inPlural.unshift(false);
      }
      return m;
    },
    peg$c15 = function peg$c15(arg, cases) {
      if (options.strict) inPlural.shift();
      return {
        type: 'select',
        arg: arg,
        cases: cases
      };
    },
    peg$c16 = "plural",
    peg$c17 = peg$literalExpectation("plural", false),
    peg$c18 = "selectordinal",
    peg$c19 = peg$literalExpectation("selectordinal", false),
    peg$c20 = function peg$c20(arg, m) {
      inPlural.unshift(true);
      return m;
    },
    peg$c21 = function peg$c21(arg, type, offset, cases) {
      var ls = (type === 'selectordinal' ? options.ordinal : options.cardinal) || ['zero', 'one', 'two', 'few', 'many', 'other'];
      if (ls && ls.length) cases.forEach(function (c) {
        if (isNaN(c.key) && ls.indexOf(c.key) < 0) throw new Error('Invalid key `' + c.key + '` for argument `' + arg + '`.' + ' Valid ' + type + ' keys for this locale are `' + ls.join('`, `') + '`, and explicit keys like `=0`.');
      });
      inPlural.shift();
      return {
        type: type,
        arg: arg,
        offset: offset || 0,
        cases: cases
      };
    },
    peg$c22 = function peg$c22(arg, key, param) {
      return {
        type: 'function',
        arg: arg,
        key: key,
        param: param
      };
    },
    peg$c23 = peg$otherExpectation("identifier"),
    peg$c24 = /^[^\t-\r \x85\u200E\u200F\u2028\u2029!-\/:-@[-\^`{-~\xA1-\xA7\xA9\xAB\xAC\xAE\xB0\xB1\xB6\xBB\xBF\xD7\xF7\u2010-\u2027\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u245F\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3020\u3030\uFD3E\uFD3F\uFE45\uFE46]/,
    peg$c25 = peg$classExpectation([["\t", "\r"], " ", "\x85", "\u200E", "\u200F", "\u2028", "\u2029", ["!", "/"], [":", "@"], ["[", "^"], "`", ["{", "~"], ["\xA1", "\xA7"], "\xA9", "\xAB", "\xAC", "\xAE", "\xB0", "\xB1", "\xB6", "\xBB", "\xBF", "\xD7", "\xF7", ["\u2010", "\u2027"], ["\u2030", "\u203E"], ["\u2041", "\u2053"], ["\u2055", "\u205E"], ["\u2190", "\u245F"], ["\u2500", "\u2775"], ["\u2794", "\u2BFF"], ["\u2E00", "\u2E7F"], ["\u3001", "\u3003"], ["\u3008", "\u3020"], "\u3030", "\uFD3E", "\uFD3F", "\uFE45", "\uFE46"], true, false),
    peg$c26 = function peg$c26(key, tokens) {
      return {
        key: key,
        tokens: tokens
      };
    },
    peg$c27 = function peg$c27(tokens) {
      return tokens;
    },
    peg$c28 = peg$otherExpectation("plural offset"),
    peg$c29 = "offset",
    peg$c30 = peg$literalExpectation("offset", false),
    peg$c31 = ":",
    peg$c32 = peg$literalExpectation(":", false),
    peg$c33 = function peg$c33(d) {
      return d;
    },
    peg$c34 = "=",
    peg$c35 = peg$literalExpectation("=", false),
    peg$c36 = "number",
    peg$c37 = peg$literalExpectation("number", false),
    peg$c38 = "date",
    peg$c39 = peg$literalExpectation("date", false),
    peg$c40 = "time",
    peg$c41 = peg$literalExpectation("time", false),
    peg$c42 = "spellout",
    peg$c43 = peg$literalExpectation("spellout", false),
    peg$c44 = "ordinal",
    peg$c45 = peg$literalExpectation("ordinal", false),
    peg$c46 = "duration",
    peg$c47 = peg$literalExpectation("duration", false),
    peg$c48 = function peg$c48(key) {
      if (options.strict || /^\d/.test(key)) return false;
      switch (key.toLowerCase()) {
        case 'select':
        case 'plural':
        case 'selectordinal':
          return false;
        default:
          return true;
      }
    },
    peg$c49 = function peg$c49(key) {
      return key;
    },
    peg$c50 = function peg$c50(tokens) {
      return !options.strict;
    },
    peg$c51 = function peg$c51(tokens) {
      return {
        tokens: tokens
      };
    },
    peg$c52 = function peg$c52(parts) {
      return {
        tokens: [parts.join('')]
      };
    },
    peg$c53 = peg$otherExpectation("a valid (strict) function parameter"),
    peg$c54 = /^[^'{}]/,
    peg$c55 = peg$classExpectation(["'", "{", "}"], true, false),
    peg$c56 = function peg$c56(p) {
      return p.join('');
    },
    peg$c57 = "'",
    peg$c58 = peg$literalExpectation("'", false),
    peg$c59 = function peg$c59(quoted) {
      return quoted;
    },
    peg$c60 = function peg$c60(p) {
      return '{' + p.join('') + '}';
    },
    peg$c61 = peg$otherExpectation("doubled apostrophe"),
    peg$c62 = "''",
    peg$c63 = peg$literalExpectation("''", false),
    peg$c64 = function peg$c64() {
      return "'";
    },
    peg$c65 = /^[^']/,
    peg$c66 = peg$classExpectation(["'"], true, false),
    peg$c67 = "'{",
    peg$c68 = peg$literalExpectation("'{", false),
    peg$c69 = function peg$c69(str) {
      return "{" + str.join('');
    },
    peg$c70 = "'}",
    peg$c71 = peg$literalExpectation("'}", false),
    peg$c72 = function peg$c72(str) {
      return "}" + str.join('');
    },
    peg$c73 = peg$otherExpectation("escaped string"),
    peg$c74 = "'#",
    peg$c75 = peg$literalExpectation("'#", false),
    peg$c76 = function peg$c76(str) {
      return "#" + str.join('');
    },
    peg$c77 = function peg$c77(quotedOcto) {
      return quotedOcto[0];
    },
    peg$c78 = peg$otherExpectation("plain char"),
    peg$c79 = /^[^{}#\0-\x08\x0E-\x1F\x7F]/,
    peg$c80 = peg$classExpectation(["{", "}", "#", ["\0", "\b"], ["\x0E", "\x1F"], "\x7F"], true, false),
    peg$c81 = function peg$c81(octo) {
      return !inPlural[0];
    },
    peg$c82 = function peg$c82(octo) {
      return octo;
    },
    peg$c83 = peg$otherExpectation("integer"),
    peg$c84 = /^[0-9]/,
    peg$c85 = peg$classExpectation([["0", "9"]], false, false),
    peg$c86 = peg$otherExpectation("white space"),
    peg$c87 = /^[\t-\r \x85\u200E\u200F\u2028\u2029]/,
    peg$c88 = peg$classExpectation([["\t", "\r"], " ", "\x85", "\u200E", "\u200F", "\u2028", "\u2029"], false, false),
    peg$currPos = 0,
    peg$posDetailsCache = [{
      line: 1,
      column: 1
    }],
    peg$maxFailPos = 0,
    peg$maxFailExpected = [],
    peg$silentFails = 0,
    peg$result;
  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }
    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }
  function peg$literalExpectation(text, ignoreCase) {
    return {
      type: "literal",
      text: text,
      ignoreCase: ignoreCase
    };
  }
  function peg$classExpectation(parts, inverted, ignoreCase) {
    return {
      type: "class",
      parts: parts,
      inverted: inverted,
      ignoreCase: ignoreCase
    };
  }
  function peg$endExpectation() {
    return {
      type: "end"
    };
  }
  function peg$otherExpectation(description) {
    return {
      type: "other",
      description: description
    };
  }
  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos],
      p;
    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }
      details = peg$posDetailsCache[p];
      details = {
        line: details.line,
        column: details.column
      };
      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }
        p++;
      }
      peg$posDetailsCache[pos] = details;
      return details;
    }
  }
  function peg$computeLocation(startPos, endPos) {
    var startPosDetails = peg$computePosDetails(startPos),
      endPosDetails = peg$computePosDetails(endPos);
    return {
      start: {
        offset: startPos,
        line: startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line: endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }
  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) {
      return;
    }
    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }
    peg$maxFailExpected.push(expected);
  }
  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(peg$SyntaxError.buildMessage(expected, found), expected, found, location);
  }
  function peg$parsestart() {
    var s0, s1;
    s0 = [];
    s1 = peg$parsetoken();
    while (s1 !== peg$FAILED) {
      s0.push(s1);
      s1 = peg$parsetoken();
    }
    return s0;
  }
  function peg$parsetoken() {
    var s0, s1, s2;
    s0 = peg$parseargument();
    if (s0 === peg$FAILED) {
      s0 = peg$parseselect();
      if (s0 === peg$FAILED) {
        s0 = peg$parseplural();
        if (s0 === peg$FAILED) {
          s0 = peg$parsefunction();
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 35) {
              s1 = peg$c0;
              peg$currPos++;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c1);
              }
            }
            if (s1 !== peg$FAILED) {
              s2 = peg$c2();
              if (s2) {
                s2 = void 0;
              } else {
                s2 = peg$FAILED;
              }
              if (s2 !== peg$FAILED) {
                s1 = peg$c3();
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              s1 = [];
              s2 = peg$parsechar();
              if (s2 !== peg$FAILED) {
                while (s2 !== peg$FAILED) {
                  s1.push(s2);
                  s2 = peg$parsechar();
                }
              } else {
                s1 = peg$FAILED;
              }
              if (s1 !== peg$FAILED) {
                s1 = peg$c4(s1);
              }
              s0 = s1;
            }
          }
        }
      }
    }
    return s0;
  }
  function peg$parseargument() {
    var s0, s1, s2, s3, s4, s5;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 123) {
      s1 = peg$c5;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c6);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parse_();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseid();
        if (s3 !== peg$FAILED) {
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 125) {
              s5 = peg$c7;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c8);
              }
            }
            if (s5 !== peg$FAILED) {
              s1 = peg$c9(s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseselect() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 123) {
      s1 = peg$c5;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c6);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parse_();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseid();
        if (s3 !== peg$FAILED) {
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 44) {
              s5 = peg$c10;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c11);
              }
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parse_();
              if (s6 !== peg$FAILED) {
                s7 = peg$currPos;
                if (input.substr(peg$currPos, 6) === peg$c12) {
                  s8 = peg$c12;
                  peg$currPos += 6;
                } else {
                  s8 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c13);
                  }
                }
                if (s8 !== peg$FAILED) {
                  s8 = peg$c14(s3, s8);
                }
                s7 = s8;
                if (s7 !== peg$FAILED) {
                  s8 = peg$parse_();
                  if (s8 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 44) {
                      s9 = peg$c10;
                      peg$currPos++;
                    } else {
                      s9 = peg$FAILED;
                      if (peg$silentFails === 0) {
                        peg$fail(peg$c11);
                      }
                    }
                    if (s9 !== peg$FAILED) {
                      s10 = peg$parse_();
                      if (s10 !== peg$FAILED) {
                        s11 = [];
                        s12 = peg$parseselectCase();
                        if (s12 !== peg$FAILED) {
                          while (s12 !== peg$FAILED) {
                            s11.push(s12);
                            s12 = peg$parseselectCase();
                          }
                        } else {
                          s11 = peg$FAILED;
                        }
                        if (s11 !== peg$FAILED) {
                          s12 = peg$parse_();
                          if (s12 !== peg$FAILED) {
                            if (input.charCodeAt(peg$currPos) === 125) {
                              s13 = peg$c7;
                              peg$currPos++;
                            } else {
                              s13 = peg$FAILED;
                              if (peg$silentFails === 0) {
                                peg$fail(peg$c8);
                              }
                            }
                            if (s13 !== peg$FAILED) {
                              s1 = peg$c15(s3, s11);
                              s0 = s1;
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseplural() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 123) {
      s1 = peg$c5;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c6);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parse_();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseid();
        if (s3 !== peg$FAILED) {
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 44) {
              s5 = peg$c10;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c11);
              }
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parse_();
              if (s6 !== peg$FAILED) {
                s7 = peg$currPos;
                if (input.substr(peg$currPos, 6) === peg$c16) {
                  s8 = peg$c16;
                  peg$currPos += 6;
                } else {
                  s8 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c17);
                  }
                }
                if (s8 === peg$FAILED) {
                  if (input.substr(peg$currPos, 13) === peg$c18) {
                    s8 = peg$c18;
                    peg$currPos += 13;
                  } else {
                    s8 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$c19);
                    }
                  }
                }
                if (s8 !== peg$FAILED) {
                  s8 = peg$c20(s3, s8);
                }
                s7 = s8;
                if (s7 !== peg$FAILED) {
                  s8 = peg$parse_();
                  if (s8 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 44) {
                      s9 = peg$c10;
                      peg$currPos++;
                    } else {
                      s9 = peg$FAILED;
                      if (peg$silentFails === 0) {
                        peg$fail(peg$c11);
                      }
                    }
                    if (s9 !== peg$FAILED) {
                      s10 = peg$parse_();
                      if (s10 !== peg$FAILED) {
                        s11 = peg$parseoffset();
                        if (s11 === peg$FAILED) {
                          s11 = null;
                        }
                        if (s11 !== peg$FAILED) {
                          s12 = [];
                          s13 = peg$parsepluralCase();
                          if (s13 !== peg$FAILED) {
                            while (s13 !== peg$FAILED) {
                              s12.push(s13);
                              s13 = peg$parsepluralCase();
                            }
                          } else {
                            s12 = peg$FAILED;
                          }
                          if (s12 !== peg$FAILED) {
                            s13 = peg$parse_();
                            if (s13 !== peg$FAILED) {
                              if (input.charCodeAt(peg$currPos) === 125) {
                                s14 = peg$c7;
                                peg$currPos++;
                              } else {
                                s14 = peg$FAILED;
                                if (peg$silentFails === 0) {
                                  peg$fail(peg$c8);
                                }
                              }
                              if (s14 !== peg$FAILED) {
                                s1 = peg$c21(s3, s7, s11, s12);
                                s0 = s1;
                              } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parsefunction() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 123) {
      s1 = peg$c5;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c6);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parse_();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseid();
        if (s3 !== peg$FAILED) {
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 44) {
              s5 = peg$c10;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c11);
              }
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parse_();
              if (s6 !== peg$FAILED) {
                s7 = peg$parsefunctionKey();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parse_();
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parsefunctionParam();
                    if (s9 === peg$FAILED) {
                      s9 = null;
                    }
                    if (s9 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 125) {
                        s10 = peg$c7;
                        peg$currPos++;
                      } else {
                        s10 = peg$FAILED;
                        if (peg$silentFails === 0) {
                          peg$fail(peg$c8);
                        }
                      }
                      if (s10 !== peg$FAILED) {
                        s1 = peg$c22(s3, s7, s9);
                        s0 = s1;
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseid() {
    var s0, s1, s2;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];
    if (peg$c24.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c25);
      }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$c24.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c25);
          }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s0 = input.substring(s0, peg$currPos);
    } else {
      s0 = s1;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c23);
      }
    }
    return s0;
  }
  function peg$parseselectCase() {
    var s0, s1, s2, s3, s4;
    s0 = peg$currPos;
    s1 = peg$parse_();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseid();
      if (s2 !== peg$FAILED) {
        s3 = peg$parse_();
        if (s3 !== peg$FAILED) {
          s4 = peg$parsecaseTokens();
          if (s4 !== peg$FAILED) {
            s1 = peg$c26(s2, s4);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parsepluralCase() {
    var s0, s1, s2, s3, s4;
    s0 = peg$currPos;
    s1 = peg$parse_();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsepluralKey();
      if (s2 !== peg$FAILED) {
        s3 = peg$parse_();
        if (s3 !== peg$FAILED) {
          s4 = peg$parsecaseTokens();
          if (s4 !== peg$FAILED) {
            s1 = peg$c26(s2, s4);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parsecaseTokens() {
    var s0, s1, s2, s3, s4, s5;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 123) {
      s1 = peg$c5;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c6);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      s3 = peg$parse_();
      if (s3 !== peg$FAILED) {
        s4 = peg$currPos;
        peg$silentFails++;
        if (input.charCodeAt(peg$currPos) === 123) {
          s5 = peg$c5;
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c6);
          }
        }
        peg$silentFails--;
        if (s5 !== peg$FAILED) {
          peg$currPos = s4;
          s4 = void 0;
        } else {
          s4 = peg$FAILED;
        }
        if (s4 !== peg$FAILED) {
          s3 = [s3, s4];
          s2 = s3;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parsetoken();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parsetoken();
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 125) {
              s5 = peg$c7;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c8);
              }
            }
            if (s5 !== peg$FAILED) {
              s1 = peg$c27(s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseoffset() {
    var s0, s1, s2, s3, s4, s5, s6, s7;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parse_();
    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 6) === peg$c29) {
        s2 = peg$c29;
        peg$currPos += 6;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c30);
        }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parse_();
        if (s3 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 58) {
            s4 = peg$c31;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c32);
            }
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parse_();
            if (s5 !== peg$FAILED) {
              s6 = peg$parsedigits();
              if (s6 !== peg$FAILED) {
                s7 = peg$parse_();
                if (s7 !== peg$FAILED) {
                  s1 = peg$c33(s6);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c28);
      }
    }
    return s0;
  }
  function peg$parsepluralKey() {
    var s0, s1, s2;
    s0 = peg$parseid();
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 61) {
        s1 = peg$c34;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c35);
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsedigits();
        if (s2 !== peg$FAILED) {
          s1 = peg$c33(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }
    return s0;
  }
  function peg$parsefunctionKey() {
    var s0, s1, s2, s3, s4, s5;
    if (input.substr(peg$currPos, 6) === peg$c36) {
      s0 = peg$c36;
      peg$currPos += 6;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c37);
      }
    }
    if (s0 === peg$FAILED) {
      if (input.substr(peg$currPos, 4) === peg$c38) {
        s0 = peg$c38;
        peg$currPos += 4;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c39);
        }
      }
      if (s0 === peg$FAILED) {
        if (input.substr(peg$currPos, 4) === peg$c40) {
          s0 = peg$c40;
          peg$currPos += 4;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c41);
          }
        }
        if (s0 === peg$FAILED) {
          if (input.substr(peg$currPos, 8) === peg$c42) {
            s0 = peg$c42;
            peg$currPos += 8;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c43);
            }
          }
          if (s0 === peg$FAILED) {
            if (input.substr(peg$currPos, 7) === peg$c44) {
              s0 = peg$c44;
              peg$currPos += 7;
            } else {
              s0 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c45);
              }
            }
            if (s0 === peg$FAILED) {
              if (input.substr(peg$currPos, 8) === peg$c46) {
                s0 = peg$c46;
                peg$currPos += 8;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c47);
                }
              }
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                s1 = peg$currPos;
                peg$silentFails++;
                if (input.substr(peg$currPos, 6) === peg$c12) {
                  s2 = peg$c12;
                  peg$currPos += 6;
                } else {
                  s2 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c13);
                  }
                }
                peg$silentFails--;
                if (s2 === peg$FAILED) {
                  s1 = void 0;
                } else {
                  peg$currPos = s1;
                  s1 = peg$FAILED;
                }
                if (s1 !== peg$FAILED) {
                  s2 = peg$currPos;
                  peg$silentFails++;
                  if (input.substr(peg$currPos, 6) === peg$c16) {
                    s3 = peg$c16;
                    peg$currPos += 6;
                  } else {
                    s3 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$c17);
                    }
                  }
                  peg$silentFails--;
                  if (s3 === peg$FAILED) {
                    s2 = void 0;
                  } else {
                    peg$currPos = s2;
                    s2 = peg$FAILED;
                  }
                  if (s2 !== peg$FAILED) {
                    s3 = peg$currPos;
                    peg$silentFails++;
                    if (input.substr(peg$currPos, 13) === peg$c18) {
                      s4 = peg$c18;
                      peg$currPos += 13;
                    } else {
                      s4 = peg$FAILED;
                      if (peg$silentFails === 0) {
                        peg$fail(peg$c19);
                      }
                    }
                    peg$silentFails--;
                    if (s4 === peg$FAILED) {
                      s3 = void 0;
                    } else {
                      peg$currPos = s3;
                      s3 = peg$FAILED;
                    }
                    if (s3 !== peg$FAILED) {
                      s4 = peg$parseid();
                      if (s4 !== peg$FAILED) {
                        s5 = peg$c48(s4);
                        if (s5) {
                          s5 = void 0;
                        } else {
                          s5 = peg$FAILED;
                        }
                        if (s5 !== peg$FAILED) {
                          s1 = peg$c49(s4);
                          s0 = s1;
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              }
            }
          }
        }
      }
    }
    return s0;
  }
  function peg$parsefunctionParam() {
    var s0, s1, s2, s3, s4;
    s0 = peg$currPos;
    s1 = peg$parse_();
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 44) {
        s2 = peg$c10;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c11);
        }
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parsetoken();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parsetoken();
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$c50();
          if (s4) {
            s4 = void 0;
          } else {
            s4 = peg$FAILED;
          }
          if (s4 !== peg$FAILED) {
            s1 = peg$c51(s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 44) {
          s2 = peg$c10;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c11);
          }
        }
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parsestrictFunctionParamPart();
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parsestrictFunctionParamPart();
          }
          if (s3 !== peg$FAILED) {
            s1 = peg$c52(s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }
    return s0;
  }
  function peg$parsestrictFunctionParamPart() {
    var s0, s1, s2, s3;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];
    if (peg$c54.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c55);
      }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$c54.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c55);
          }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s1 = peg$c56(s1);
    }
    s0 = s1;
    if (s0 === peg$FAILED) {
      s0 = peg$parsedoubleapos();
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 39) {
          s1 = peg$c57;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c58);
          }
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parseinapos();
          if (s2 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 39) {
              s3 = peg$c57;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c58);
              }
            }
            if (s3 !== peg$FAILED) {
              s1 = peg$c59(s2);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 123) {
            s1 = peg$c5;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c6);
            }
          }
          if (s1 !== peg$FAILED) {
            s2 = [];
            s3 = peg$parsestrictFunctionParamPart();
            while (s3 !== peg$FAILED) {
              s2.push(s3);
              s3 = peg$parsestrictFunctionParamPart();
            }
            if (s2 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 125) {
                s3 = peg$c7;
                peg$currPos++;
              } else {
                s3 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c8);
                }
              }
              if (s3 !== peg$FAILED) {
                s1 = peg$c60(s2);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        }
      }
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c53);
      }
    }
    return s0;
  }
  function peg$parsedoubleapos() {
    var s0, s1;
    peg$silentFails++;
    s0 = peg$currPos;
    if (input.substr(peg$currPos, 2) === peg$c62) {
      s1 = peg$c62;
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c63);
      }
    }
    if (s1 !== peg$FAILED) {
      s1 = peg$c64();
    }
    s0 = s1;
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c61);
      }
    }
    return s0;
  }
  function peg$parseinapos() {
    var s0, s1, s2;
    s0 = peg$parsedoubleapos();
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = [];
      if (peg$c65.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c66);
        }
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          if (peg$c65.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c66);
            }
          }
        }
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s1 = peg$c4(s1);
      }
      s0 = s1;
    }
    return s0;
  }
  function peg$parsequotedCurly() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;
    if (input.substr(peg$currPos, 2) === peg$c67) {
      s1 = peg$c67;
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c68);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parseinapos();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parseinapos();
      }
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 39) {
          s3 = peg$c57;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c58);
          }
        }
        if (s3 !== peg$FAILED) {
          s1 = peg$c69(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c70) {
        s1 = peg$c70;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c71);
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parseinapos();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parseinapos();
        }
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 39) {
            s3 = peg$c57;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c58);
            }
          }
          if (s3 !== peg$FAILED) {
            s1 = peg$c72(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }
    return s0;
  }
  function peg$parsequoted() {
    var s0, s1, s2, s3, s4, s5;
    peg$silentFails++;
    s0 = peg$parsequotedCurly();
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$currPos;
      s2 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c74) {
        s3 = peg$c74;
        peg$currPos += 2;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c75);
        }
      }
      if (s3 !== peg$FAILED) {
        s4 = [];
        s5 = peg$parseinapos();
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parseinapos();
        }
        if (s4 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 39) {
            s5 = peg$c57;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c58);
            }
          }
          if (s5 !== peg$FAILED) {
            s3 = peg$c76(s4);
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$c2();
        if (s3) {
          s3 = void 0;
        } else {
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s1 = peg$c77(s1);
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 39) {
          s0 = peg$c57;
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c58);
          }
        }
      }
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c73);
      }
    }
    return s0;
  }
  function peg$parseplainChar() {
    var s0;
    peg$silentFails++;
    if (peg$c79.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c80);
      }
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      if (peg$silentFails === 0) {
        peg$fail(peg$c78);
      }
    }
    return s0;
  }
  function peg$parsechar() {
    var s0, s1, s2;
    s0 = peg$parsedoubleapos();
    if (s0 === peg$FAILED) {
      s0 = peg$parsequoted();
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 35) {
          s1 = peg$c0;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c1);
          }
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$c81();
          if (s2) {
            s2 = void 0;
          } else {
            s2 = peg$FAILED;
          }
          if (s2 !== peg$FAILED) {
            s1 = peg$c82(s1);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$parseplainChar();
        }
      }
    }
    return s0;
  }
  function peg$parsedigits() {
    var s0, s1, s2;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];
    if (peg$c84.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c85);
      }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$c84.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c85);
          }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s0 = input.substring(s0, peg$currPos);
    } else {
      s0 = s1;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c83);
      }
    }
    return s0;
  }
  function peg$parse_() {
    var s0, s1, s2;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];
    if (peg$c87.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c88);
      }
    }
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      if (peg$c87.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c88);
        }
      }
    }
    if (s1 !== peg$FAILED) {
      s0 = input.substring(s0, peg$currPos);
    } else {
      s0 = s1;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c86);
      }
    }
    return s0;
  }
  var inPlural = [false];
  peg$result = peg$startRuleFunction();
  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }
    throw peg$buildStructuredError(peg$maxFailExpected, peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null, peg$maxFailPos < input.length ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1) : peg$computeLocation(peg$maxFailPos, peg$maxFailPos));
  }
}
var parser = {
  SyntaxError: peg$SyntaxError,
  parse: peg$parse
};

var isString = function isString(s) {
  return typeof s === "string";
};
var isFunction = function isFunction(f) {
  return typeof f === "function";
};

/** Memoized cache */

var numberFormats = new Map();
var dateFormats = new Map();
function date(locales) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var memoize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return function (value) {
    if (isString(value)) value = new Date(value);
    if (memoize) {
      var key = cacheKey(locales, format);
      var cachedFormatter = dateFormats.get(key);
      if (cachedFormatter) {
        return cachedFormatter.format(value);
      }
      var _formatter = new Intl.DateTimeFormat(locales, format);
      dateFormats.set(key, _formatter);
      return _formatter.format(value);
    }
    var formatter = new Intl.DateTimeFormat(locales, format);
    return formatter.format(value);
  };
}
function number(locales) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var memoize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return function (value) {
    if (memoize) {
      var key = cacheKey(locales, format);
      var cachedFormatter = numberFormats.get(key);
      if (cachedFormatter) {
        return cachedFormatter.format(value);
      }
      var _formatter2 = new Intl.NumberFormat(locales, format);
      numberFormats.set(key, _formatter2);
      return _formatter2.format(value);
    }
    var formatter = new Intl.NumberFormat(locales, format);
    return formatter.format(value);
  };
}
/** Memoize helpers */

function cacheKey(locales) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var localeKey = Array.isArray(locales) ? locales.sort().join('-') : locales;
  return "".concat(localeKey, "-").concat(JSON.stringify(options));
}
var formats = /*#__PURE__*/Object.freeze({
  __proto__: null,
  date: date,
  number: number
});
var UNICODE_REGEX = /\\u[a-fA-F0-9]{4}|\\x[a-fA-F0-9]{2}/g;
var defaultFormats = function defaultFormats(locale, locales) {
  var localeData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    plurals: undefined
  };
  var formats = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  locales = locales || locale;
  var plurals = localeData.plurals;
  var style = function style(format) {
    return isString(format) ? formats[format] || {
      style: format
    } : format;
  };
  var replaceOctothorpe = function replaceOctothorpe(value, message) {
    return function (ctx) {
      var msg = isFunction(message) ? message(ctx) : message;
      var norm = Array.isArray(msg) ? msg : [msg];
      var numberFormat = Object.keys(formats).length ? style('number') : {};
      var valueStr = number(locales, numberFormat)(value);
      return norm.map(function (m) {
        return isString(m) ? m.replace("#", valueStr) : m;
      });
    };
  };
  if (!plurals) {
    console.error("Plurals for locale ".concat(locale, " aren't loaded. Use i18n.loadLocaleData method to load plurals for specific locale. Using other plural rule as a fallback."));
  }
  return {
    plural: function plural(value, _ref) {
      var _ref$offset = _ref.offset,
        offset = _ref$offset === void 0 ? 0 : _ref$offset,
        rules = _objectWithoutProperties(_ref, ["offset"]);
      var message = rules[value] || rules[plurals === null || plurals === void 0 ? void 0 : plurals(value - offset)] || rules.other;
      return replaceOctothorpe(value - offset, message);
    },
    selectordinal: function selectordinal(value, _ref2) {
      var _ref2$offset = _ref2.offset,
        offset = _ref2$offset === void 0 ? 0 : _ref2$offset,
        rules = _objectWithoutProperties(_ref2, ["offset"]);
      var message = rules[value] || rules[plurals === null || plurals === void 0 ? void 0 : plurals(value - offset, true)] || rules.other;
      return replaceOctothorpe(value - offset, message);
    },
    select: function select(value, rules) {
      return rules[value] || rules.other;
    },
    number: function number$1(value, format) {
      return number(locales, style(format))(value);
    },
    date: function date$1(value, format) {
      return date(locales, style(format))(value);
    },
    undefined: function undefined$1(value) {
      return value;
    }
  };
}; // Params -> CTX

/**
 * Creates a context object, which formats ICU MessageFormat arguments based on
 * argument type.
 *
 * @param locale     - Locale of message
 * @param locales      - Locales to be used when formatting the numbers or dates
 * @param values       - Parameters for variable interpolation
 * @param localeData - Locale data (e.g: plurals)
 * @param formats - Custom format styles
 * @returns {function(string, string, any)}
 */

function context(_ref3) {
  var locale = _ref3.locale,
    locales = _ref3.locales,
    values = _ref3.values,
    formats = _ref3.formats,
    localeData = _ref3.localeData;
  var formatters = defaultFormats(locale, locales, localeData, formats);
  var ctx = function ctx(name, type, format) {
    var value = values[name];
    var formatted = formatters[type](value, format);
    var message = isFunction(formatted) ? formatted(ctx) : formatted;
    return Array.isArray(message) ? message.join("") : message;
  };
  return ctx;
}
function interpolate(translation, locale, locales, localeData) {
  return function (values) {
    var formats = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var ctx = context({
      locale: locale,
      locales: locales,
      localeData: localeData,
      formats: formats,
      values: values
    });
    var formatMessage = function formatMessage(message) {
      if (!Array.isArray(message)) return message;
      return message.reduce(function (message, token) {
        if (isString(token)) return message + token;
        var _token = _slicedToArray(token, 3),
          name = _token[0],
          type = _token[1],
          format = _token[2];
        var interpolatedFormat = {};
        if (format != null && !isString(format)) {
          Object.keys(format).forEach(function (key) {
            interpolatedFormat[key] = formatMessage(format[key]);
          });
        } else {
          interpolatedFormat = format;
        }
        var value = ctx(name, type, interpolatedFormat);
        if (value == null) return message;
        return message + value;
      }, "");
    };
    var result = formatMessage(translation);
    if (isString(result) && UNICODE_REGEX.test(result)) return JSON.parse("\"".concat(result.trim(), "\""));
    if (isString(result)) return result.trim();
    return result;
  };
}
function ownKeys$f(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$f(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$f(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$f(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function processTokens(tokens) {
  if (!tokens.filter(function (token) {
    return !isString(token);
  }).length) {
    return tokens.join("");
  }
  return tokens.map(function (token) {
    if (isString(token)) {
      return token; // # in plural case
    } else if (token.type === "octothorpe") {
      return "#"; // simple argument
    } else if (token.type === "argument") {
      return [token.arg]; // argument with custom format (date, number)
    } else if (token.type === "function") {
      var _param = token.param && token.param.tokens[0];
      var param = typeof _param === "string" ? _param.trim() : _param;
      return [token.arg, token.key, param].filter(Boolean);
    }
    var offset = token.offset ? parseInt(token.offset) : undefined; // complex argument with cases

    var formatProps = {};
    token.cases.forEach(function (item) {
      formatProps[item.key] = processTokens(item.tokens);
    });
    return [token.arg, token.type, _objectSpread$f({
      offset: offset
    }, formatProps)];
  });
} // Message -> (Params -> String)

function compile(message) {
  try {
    return processTokens(parser.parse(message));
  } catch (e) {
    console.error("Message cannot be parsed due to syntax errors: ".concat(message));
    return message;
  }
}
var EventEmitter = /*#__PURE__*/function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);
    this._events = {};
  }
  _createClass(EventEmitter, [{
    key: "on",
    value: function on(event, listener) {
      var _this = this;
      if (!this._hasEvent(event)) this._events[event] = [];
      this._events[event].push(listener);
      return function () {
        return _this.removeListener(event, listener);
      };
    }
  }, {
    key: "removeListener",
    value: function removeListener(event, listener) {
      if (!this._hasEvent(event)) return;
      var index = this._events[event].indexOf(listener);
      if (~index) this._events[event].splice(index, 1);
    }
  }, {
    key: "emit",
    value: function emit(event) {
      var _this2 = this;
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      if (!this._hasEvent(event)) return;
      this._events[event].map(function (listener) {
        return listener.apply(_this2, args);
      });
    }
  }, {
    key: "_hasEvent",
    value: function _hasEvent(event) {
      return Array.isArray(this._events[event]);
    }
  }]);
  return EventEmitter;
}();
function _createSuper$8(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$8();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$8() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
var I18n = /*#__PURE__*/function (_EventEmitter) {
  _inherits(I18n, _EventEmitter);
  var _super = _createSuper$8(I18n);
  function I18n(params) {
    var _this;
    _classCallCheck(this, I18n);
    _this = _super.call(this);
    _this._messages = {};
    _this._localeData = {};
    if (params.missing != null) _this._missing = params.missing;
    if (params.messages != null) _this.load(params.messages);
    if (params.localeData != null) _this.loadLocaleData(params.localeData);
    if (params.locale != null || params.locales != null) {
      _this.activate(params.locale, params.locales);
    }
    return _this;
  }
  _createClass(I18n, [{
    key: "_loadLocaleData",
    value: function _loadLocaleData(locale, localeData) {
      if (this._localeData[locale] == null) {
        this._localeData[locale] = localeData;
      } else {
        Object.assign(this._localeData[locale], localeData);
      }
    }
  }, {
    key: "loadLocaleData",
    value: function loadLocaleData(localeOrAllData, localeData) {
      var _this2 = this;
      if (localeData != null) {
        // loadLocaleData('en', enLocaleData)
        // Loading locale data for a single locale.
        this._loadLocaleData(localeOrAllData, localeData);
      } else {
        // loadLocaleData(allLocaleData)
        // Loading all locale data at once.
        Object.keys(localeOrAllData).forEach(function (locale) {
          return _this2._loadLocaleData(locale, localeOrAllData[locale]);
        });
      }
      this.emit("change");
    }
  }, {
    key: "_load",
    value: function _load(locale, messages) {
      if (this._messages[locale] == null) {
        this._messages[locale] = messages;
      } else {
        Object.assign(this._messages[locale], messages);
      }
    }
  }, {
    key: "load",
    value: function load(localeOrMessages, messages) {
      var _this3 = this;
      if (messages != null) {
        // load('en', catalog)
        // Loading a catalog for a single locale.
        this._load(localeOrMessages, messages);
      } else {
        // load(catalogs)
        // Loading several locales at once.
        Object.keys(localeOrMessages).forEach(function (locale) {
          return _this3._load(locale, localeOrMessages[locale]);
        });
      }
      this.emit("change");
    }
  }, {
    key: "activate",
    value: function activate(locale, locales) {
      {
        if (!this._messages[locale]) {
          console.warn("Messages for locale \"".concat(locale, "\" not loaded."));
        }
        if (!this._localeData[locale]) {
          console.warn("Locale data for locale \"".concat(locale, "\" not loaded. Plurals won't work correctly."));
        }
      }
      this._locale = locale;
      this._locales = locales;
      this.emit("change");
    } // method for translation and formatting
  }, {
    key: "_",
    value: function _(id) {
      var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        message = _ref.message,
        formats = _ref.formats,
        context = _ref.context;
      if (!isString(id)) {
        values = id.values || values;
        message = id.message;
        context = id.context;
        id = id.id;
      }
      var messageMissing = !context && !this.messages[id];
      var contextualMessageMissing = context && !this.messages[context][id];
      var messageUnreachable = contextualMessageMissing || messageMissing; // replace missing messages with custom message for debugging

      var missing = this._missing;
      if (missing && messageUnreachable) {
        return isFunction(missing) ? missing(this._locale, id, context) : missing;
      }
      if (messageUnreachable) {
        this.emit("missing", {
          id: id,
          context: context,
          locale: this._locale
        });
      }
      var translation;
      if (context && !contextualMessageMissing) {
        // context is like a subdirectory of other keys
        translation = this.messages[context][id] || message || id;
      } else {
        translation = this.messages[id] || message || id;
      }
      {
        translation = isString(translation) ? compile(translation) : translation;
      } // hack for parsing unicode values inside a string to get parsed in react native environments

      if (isString(translation) && UNICODE_REGEX.test(translation)) return JSON.parse("\"".concat(translation, "\""));
      if (isString(translation)) return translation;
      return interpolate(translation, this._locale, this._locales, this.localeData)(values, formats);
    }
  }, {
    key: "date",
    value: function date$1(value, format) {
      return date(this._locales || this._locale, format)(value);
    }
  }, {
    key: "number",
    value: function number$1(value, format) {
      return number(this._locales || this._locale, format)(value);
    }
  }, {
    key: "locale",
    get: function get() {
      return this._locale;
    }
  }, {
    key: "locales",
    get: function get() {
      return this._locales;
    }
  }, {
    key: "messages",
    get: function get() {
      var _this$_messages$this$;
      return (_this$_messages$this$ = this._messages[this._locale]) !== null && _this$_messages$this$ !== void 0 ? _this$_messages$this$ : {};
    }
  }, {
    key: "localeData",
    get: function get() {
      var _this$_localeData$thi;
      return (_this$_localeData$thi = this._localeData[this._locale]) !== null && _this$_localeData$thi !== void 0 ? _this$_localeData$thi : {};
    }
  }]);
  return I18n;
}(EventEmitter);
function setupI18n() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new I18n(params);
}
var i18n$1 = setupI18n();

var i18n = process.env.NODE_ENV === 'production' ? D : i18n$1;
process.env.NODE_ENV === 'production' ? k : setupI18n;
process.env.NODE_ENV === 'production' ? m$1 : formats;
process.env.NODE_ENV === 'production' ? b : I18n;

function ownKeys$e(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$e(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$e(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$e(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _createSuper$7(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$7(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$7() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var DEFAULT_ERROR_HEADER = /*i18n*/i18n._("Sorry, an error occured while processing your request. Please try again or contact support.");
var DEFAULT_ERROR_ACTION = /*i18n*/i18n._("Reload the page");
var DEFAULT_DISMISSABLE_ERROR_ACTION = /*i18n*/i18n._("Dismiss");
var WidgetError = /*#__PURE__*/function (_Error) {
  _inherits(WidgetError, _Error);
  var _super = _createSuper$7(WidgetError);
  /** The original error, if this is a wrapped error. */

  function WidgetError(config) {
    var _config$header, _config$action;
    var _this;
    _classCallCheck(this, WidgetError);
    _this = _super.call(this, config.message);
    _defineProperty(_assertThisInitialized(_this), "dismissable", false);
    _this.header = (_config$header = config.header) !== null && _config$header !== void 0 ? _config$header : DEFAULT_ERROR_HEADER;
    _this.action = (_config$action = config.action) !== null && _config$action !== void 0 ? _config$action : DEFAULT_ERROR_ACTION;
    _this.error = config.error;
    _this.name = 'WidgetError';
    return _this;
  }
  return _createClass(WidgetError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
var UnknownError = /*#__PURE__*/function (_WidgetError) {
  _inherits(UnknownError, _WidgetError);
  var _super2 = _createSuper$7(UnknownError);
  function UnknownError(config) {
    var _this2;
    _classCallCheck(this, UnknownError);
    _this2 = _super2.call(this, config);
    _this2.name = 'UnknownError';
    return _this2;
  }
  return _createClass(UnknownError);
}(WidgetError);

/**
 * A Promise which rejects with a known WidgetError.
 * Although it is well-typed, this typing only works when using the Promise as a Thennable, not through async/await.
 * @example widgetPromise.catch((reason: WidgetError) => console.error(reason.error))
 */
var WidgetPromise = /*#__PURE__*/function (_Promise) {
  _inherits(WidgetPromise, _Promise);
  var _super3 = _createSuper$7(WidgetPromise);
  function WidgetPromise() {
    _classCallCheck(this, WidgetPromise);
    return _super3.apply(this, arguments);
  }
  _createClass(WidgetPromise, [{
    key: "catch",
    value: function _catch(onrejected) {
      return _get(_getPrototypeOf(WidgetPromise.prototype), "catch", this).call(this, onrejected);
    }
  }], [{
    key: "from",
    value: function from(value, /** Synchronously maps the value to the WidgetPromise value. Any thrown reason must be mappable by onrejected. */
    onfulfilled,
    /**
     * Synchronously maps the reason to the WidgetPromise reason. Must throw the mapped reason.
     * @throws {@link WidgetReason}
     */
    onrejected) {
      return ('then' in value ? value : value()).then(onfulfilled !== null && onfulfilled !== void 0 ? onfulfilled : function (v) {
        return v;
      })["catch"](function (reason) {
        try {
          onrejected(reason);
        } catch (error) {
          // > Must throw the mapped reason.
          // This cannot actually be enforced in TypeScript, so this bit is unsafe:
          // the best we can do is check that it's a WidgetError at runtime and wrap it if it's not.
          if (error instanceof WidgetError) throw error;
          throw new UnknownError({
            message: "Unknown error: ".concat(error.toString()),
            error: error
          });
        }
      });
    }
  }]);
  return WidgetPromise;
}( /*#__PURE__*/_wrapNativeSuper(Promise));

/** Dismissable errors are not be considered fatal by the ErrorBoundary. */
var DismissableError = /*#__PURE__*/function (_WidgetError3) {
  _inherits(DismissableError, _WidgetError3);
  var _super5 = _createSuper$7(DismissableError);
  function DismissableError(config) {
    var _config$action2, _config$header2;
    var _this4;
    _classCallCheck(this, DismissableError);
    _this4 = _super5.call(this, _objectSpread$e(_objectSpread$e({}, config), {}, {
      action: (_config$action2 = config.action) !== null && _config$action2 !== void 0 ? _config$action2 : DEFAULT_DISMISSABLE_ERROR_ACTION,
      header: (_config$header2 = config.header) !== null && _config$header2 !== void 0 ? _config$header2 : DEFAULT_ERROR_HEADER
    }));
    _this4.name = 'DismissableError';
    _this4.dismissable = true;
    return _this4;
  }
  return _createClass(DismissableError);
}(WidgetError);
var UserRejectedRequestError = /*#__PURE__*/function (_DismissableError) {
  _inherits(UserRejectedRequestError, _DismissableError);
  var _super6 = _createSuper$7(UserRejectedRequestError);
  function UserRejectedRequestError() {
    var _this5;
    _classCallCheck(this, UserRejectedRequestError);
    _this5 = _super6.call(this, {
      header: /*i18n*/i18n._("Request rejected"),
      message: /*i18n*/i18n._("This error was prompted by denying a request in your wallet.")
    });
    _this5.name = 'UserRejectedRequestError';
    return _this5;
  }
  return _createClass(UserRejectedRequestError);
}(DismissableError);

/** Connection errors are considered fatal. They are caused by wallet integrations. */
var ConnectionError = /*#__PURE__*/function (_WidgetError4) {
  _inherits(ConnectionError, _WidgetError4);
  var _super7 = _createSuper$7(ConnectionError);
  function ConnectionError(config) {
    var _this6;
    _classCallCheck(this, ConnectionError);
    _this6 = _super7.call(this, config);
    _this6.name = 'ConnectionError';
    return _this6;
  }
  return _createClass(ConnectionError);
}(WidgetError);
var MetaMaskConnectionError = /*#__PURE__*/function (_ConnectionError) {
  _inherits(MetaMaskConnectionError, _ConnectionError);
  var _super8 = _createSuper$7(MetaMaskConnectionError);
  function MetaMaskConnectionError() {
    _classCallCheck(this, MetaMaskConnectionError);
    return _super8.call(this, {
      header: /*i18n*/i18n._("Wallet disconnected"),
      action: /*i18n*/i18n._("Reload"),
      message: /*i18n*/i18n._("'A Metamask error caused your wallet to disconnect. Reload the page to reconnect.'")
    });
  }
  return _createClass(MetaMaskConnectionError);
}(ConnectionError);

var LinguiContext = /*#__PURE__*/React.createContext(null);
function useLingui() {
  var context = React.useContext(LinguiContext);
  {
    if (context == null) {
      throw new Error("useLingui hook was used without I18nProvider.");
    }
  }
  return context;
}
function withI18n(o) {
  return function (WrappedComponent) {
    return function (props) {
      {
        if (typeof o === "function" || /*#__PURE__*/React.isValidElement(o)) {
          throw new Error("withI18n([options]) takes options as a first argument, " + "but received React component itself. Without options, the Component " + "should be wrapped as withI18n()(Component), not withI18n(Component).");
        }
      }
      var _useLingui = useLingui(),
        i18n = _useLingui.i18n;
      return /*#__PURE__*/React.createElement(WrappedComponent, Object.assign({}, props, {
        i18n: i18n
      }));
    };
  };
}
var I18nProvider$1 = function I18nProvider(_ref) {
  var i18n = _ref.i18n,
    defaultComponent = _ref.defaultComponent,
    _ref$forceRenderOnLoc = _ref.forceRenderOnLocaleChange,
    forceRenderOnLocaleChange = _ref$forceRenderOnLoc === void 0 ? true : _ref$forceRenderOnLoc,
    children = _ref.children;

  /**
   * We can't pass `i18n` object directly through context, because even when locale
   * or messages are changed, i18n object is still the same. Context provider compares
   * reference identity and suggested workaround is create a wrapper object every time
   * we need to trigger re-render. See https://reactjs.org/docs/context.html#caveats.
   *
   * Due to this effect we also pass `defaultComponent` in the same context, instead
   * of creating a separate Provider/Consumer pair.
   *
   * We can't use useMemo hook either, because we want to recalculate value manually.
   */
  var makeContext = function makeContext() {
    return {
      i18n: i18n,
      defaultComponent: defaultComponent
    };
  };
  var getRenderKey = function getRenderKey() {
    return forceRenderOnLocaleChange ? i18n.locale || 'default' : 'default';
  };
  var _React$useState = React.useState(makeContext()),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    context = _React$useState2[0],
    setContext = _React$useState2[1],
    _React$useState3 = React.useState(getRenderKey()),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    renderKey = _React$useState4[0],
    setRenderKey = _React$useState4[1];
  /**
   * Subscribe for locale/message changes
   *
   * I18n object from `@lingui/core` is the single source of truth for all i18n related
   * data (active locale, catalogs). When new messages are loaded or locale is changed
   * we need to trigger re-rendering of LinguiContext.Consumers.
   *
   * We call `setContext(makeContext())` after adding the observer in case the `change`
   * event would already have fired between the inital renderKey calculation and the
   * `useEffect` hook being called. This can happen if locales are loaded/activated
   * async.
   */

  React.useEffect(function () {
    var unsubscribe = i18n.on("change", function () {
      setContext(makeContext());
      setRenderKey(getRenderKey());
    });
    if (renderKey === 'default') {
      setRenderKey(getRenderKey());
    }
    if (forceRenderOnLocaleChange && renderKey === 'default') {
      console.log("I18nProvider did not render. A call to i18n.activate still needs to happen or forceRenderOnLocaleChange must be set to false.");
    }
    return function () {
      return unsubscribe();
    };
  }, []);
  if (forceRenderOnLocaleChange && renderKey === 'default') return null;
  return /*#__PURE__*/React.createElement(LinguiContext.Provider, {
    value: context,
    key: renderKey
  }, children);
};
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;
  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function F() {};
      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function s() {
      it = o[Symbol.iterator]();
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
var tagRe = /<(\d+)>(.*?)<\/\1>|<(\d+)\/>/;
var nlRe = /(?:\r\n|\r|\n)/g; // For HTML, certain tags should omit their close tag. We keep a whitelist for
// those special-case tags.

var voidElementTags = {
  area: true,
  base: true,
  br: true,
  col: true,
  embed: true,
  hr: true,
  img: true,
  input: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true,
  menuitem: true
};
/**
 * `formatElements` - parse string and return tree of react elements
 *
 * `value` is string to be formatted with <0>Paired<0/> or <0/> (unpaired)
 * placeholders. `elements` is a array of react elements which indexes
 * correspond to element indexes in formatted string
 */

function formatElements(value) {
  var elements = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var uniqueId = makeCounter(0, '$lingui$');
  var parts = value.replace(nlRe, "").split(tagRe); // no inline elements, return

  if (parts.length === 1) return value;
  var tree = [];
  var before = parts.shift();
  if (before) tree.push(before);
  var _iterator = _createForOfIteratorHelper(getElements(parts)),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 3),
        index = _step$value[0],
        children = _step$value[1],
        after = _step$value[2];
      var element = elements[index];
      if (!element || voidElementTags[element.type] && children) {
        if (!element) {
          console.error("Can use element at index '".concat(index, "' as it is not declared in the original translation"));
        } else {
          console.error("".concat(element.type, " is a void element tag therefore it must have no children"));
        } // ignore problematic element but push its children and elements after it

        element = /*#__PURE__*/React.createElement(React.Fragment);
      }
      tree.push( /*#__PURE__*/React.cloneElement(element, {
        key: uniqueId()
      },
      // format children for pair tags
      // unpaired tags might have children if it's a component passed as a variable
      children ? formatElements(children, elements) : element.props.children));
      if (after) tree.push(after);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return tree;
}
/*
 * `getElements` - return array of element indexes and element childrens
 *
 * `parts` is array of [pairedIndex, children, unpairedIndex, textAfter, ...]
 * where:
 * - `pairedIndex` is index of paired element (undef for unpaired)
 * - `children` are children of paired element (undef for unpaired)
 * - `unpairedIndex` is index of unpaired element (undef for paired)
 * - `textAfter` is string after all elements (empty string, if there's nothing)
 *
 * `parts` length is always multiply of 4
 *
 * Returns: Array<[elementIndex, children, after]>
 */

function getElements(parts) {
  if (!parts.length) return [];
  var _parts$slice = parts.slice(0, 4),
    _parts$slice2 = _slicedToArray(_parts$slice, 4),
    paired = _parts$slice2[0],
    children = _parts$slice2[1],
    unpaired = _parts$slice2[2],
    after = _parts$slice2[3];
  return [[parseInt(paired || unpaired), children || "", after]].concat(getElements(parts.slice(4, parts.length)));
}
var makeCounter = function makeCounter() {
  var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  return function () {
    return "".concat(prefix, "_").concat(count++);
  };
};
function ownKeys$d(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$d(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$d(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$d(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function Trans$1(props) {
  var _useLingui = useLingui(),
    i18n = _useLingui.i18n,
    defaultComponent = _useLingui.defaultComponent;
  var render = props.render,
    component = props.component,
    id = props.id,
    message = props.message,
    formats = props.formats;
  var values = _objectSpread$d({}, props.values);
  var components = _objectSpread$d({}, props.components);
  if (values) {
    /*
      Related discussion: https://github.com/lingui/js-lingui/issues/183
           Values *might* contain React elements with static content.
      They're replaced with <INDEX /> placeholders and added to `components`.
           Example:
      Translation: Hello {name}
      Values: { name: <strong>Jane</strong> }
           It'll become "Hello <0 />" with components=[<strong>Jane</strong>]
      */
    Object.keys(values).forEach(function (key) {
      var value = values[key];
      if (! /*#__PURE__*/React.isValidElement(value)) return;
      var index = Object.keys(components).length;
      components[index] = value;
      values[key] = "<".concat(index, "/>");
    });
  }
  var _translation = i18n && typeof i18n._ === "function" ? i18n._(id, values, {
    message: message,
    formats: formats
  }) : id; // i18n provider isn't loaded at all

  var translation = _translation ? formatElements(_translation, components) : null;
  if (render === null || component === null) {
    // Although `string` is a valid react element, types only allow `Element`
    // Upstream issue: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20544
    return translation;
  }
  var FallbackComponent = defaultComponent || React.Fragment;
  var i18nProps = {
    id: id,
    message: message,
    translation: translation,
    isTranslated: id !== translation && message !== translation
  }; // Validation of `render` and `component` props

  if (render && component) {
    console.error("You can't use both `component` and `render` prop at the same time. `component` is ignored.");
  } else if (render && typeof render !== "function") {
    console.error("Invalid value supplied to prop `render`. It must be a function, provided ".concat(render));
  } else if (component && typeof component !== "function") {
    // Apparently, both function components and class components are functions
    // See https://stackoverflow.com/a/41658173/1535540
    console.error("Invalid value supplied to prop `component`. It must be a React component, provided ".concat(component));
    return /*#__PURE__*/React.createElement(FallbackComponent, Object.assign({}, i18nProps), translation);
  } // Rendering using a render prop

  if (typeof render === "function") {
    // Component: render={(props) => <a title={props.translation}>x</a>}
    return render(i18nProps);
  } // `component` prop has a higher precedence over `defaultComponent`

  var Component = component || FallbackComponent;
  var DefaultComponent = defaultComponent;
  return DefaultComponent && !component ? /*#__PURE__*/React.createElement(DefaultComponent, Object.assign({}, i18nProps), translation) : /*#__PURE__*/React.createElement(Component, null, translation);
}
Trans$1.defaultProps = {
  values: {},
  components: {}
};

var r = /*#__PURE__*/React.createContext(null);
function o() {
  var e = React.useContext(r);
  return e;
}
function a(e) {
  return function (e) {
    return function (n) {
      var r = o(),
        a = r.i18n;
      return /*#__PURE__*/React.createElement(e, Object.assign({}, n, {
        i18n: a
      }));
    };
  };
}
var i = function i(n) {
  var o = n.i18n,
    a = n.defaultComponent,
    i = n.forceRenderOnLocaleChange,
    c = void 0 === i || i,
    u = n.children,
    l = function l() {
      return {
        i18n: o,
        defaultComponent: a
      };
    },
    f = function f() {
      return c && o.locale || "default";
    },
    s = React.useState(l()),
    p = _slicedToArray(s, 2),
    m = p[0],
    d = p[1],
    v = React.useState(f()),
    y = _slicedToArray(v, 2),
    b = y[0],
    h = y[1];
  return React.useEffect(function () {
    var e = o.on("change", function () {
      d(l()), h(f());
    });
    return "default" === b && h(f()), c && "default" === b && console.log("I18nProvider did not render. A call to i18n.activate still needs to happen or forceRenderOnLocaleChange must be set to false."), function () {
      return e();
    };
  }, []), c && "default" === b ? null : /*#__PURE__*/React.createElement(r.Provider, {
    value: m,
    key: b
  }, u);
};
function c(e, t) {
  var _n;
  if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
    if (Array.isArray(e) || (_n = function (e, t) {
      if (!e) return;
      if ("string" == typeof e) return u(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === n && e.constructor && (n = e.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(e);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t);
    }(e)) || t && e && "number" == typeof e.length) {
      _n && (e = _n);
      var r = 0,
        o = function o() {};
      return {
        s: o,
        n: function n() {
          return r >= e.length ? {
            done: !0
          } : {
            done: !1,
            value: e[r++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: o
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var a,
    i = !0,
    c = !1;
  return {
    s: function s() {
      _n = e[Symbol.iterator]();
    },
    n: function n() {
      var e = _n.next();
      return i = e.done, e;
    },
    e: function e(_e2) {
      c = !0, a = _e2;
    },
    f: function f() {
      try {
        i || null == _n["return"] || _n["return"]();
      } finally {
        if (c) throw a;
      }
    }
  };
}
function u(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) {
    r[n] = e[n];
  }
  return r;
}
var l = /<(\d+)>(.*?)<\/\1>|<(\d+)\/>/,
  f = /(?:\r\n|\r|\n)/g,
  s = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
    menuitem: !0
  };
function p(t) {
  if (!t.length) return [];
  var n = t.slice(0, 4),
    r = _slicedToArray(n, 4),
    o = r[0],
    a = r[1],
    i = r[2],
    c = r[3];
  return [[parseInt(o || i), a || "", c]].concat(p(t.slice(4, t.length)));
}
var m = function m() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
  return function () {
    return "".concat(t, "_").concat(e++);
  };
};
function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {};
    t % 2 ? d(Object(r), !0).forEach(function (t) {
      _defineProperty(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function y(n) {
  var r = o(),
    a = r.i18n,
    i = r.defaultComponent,
    u = n.render,
    d = n.component,
    y = n.id,
    b = n.message,
    h = n.formats,
    g = v({}, n.values),
    O = v({}, n.components);
  g && Object.keys(g).forEach(function (e) {
    var n = g[e];
    if ( /*#__PURE__*/React.isValidElement(n)) {
      var r = Object.keys(O).length;
      O[r] = n, g[e] = "<".concat(r, "/>");
    }
  });
  var j = a && "function" == typeof a._ ? a._(y, g, {
      message: b,
      formats: h
    }) : y,
    E = j ? function n(r) {
      var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = m(0, "$lingui$"),
        i = r.replace(f, "").split(l);
      if (1 === i.length) return r;
      var u = [],
        d = i.shift();
      d && u.push(d);
      var v,
        y = c(p(i));
      try {
        for (y.s(); !(v = y.n()).done;) {
          var b = _slicedToArray(v.value, 3),
            h = b[0],
            g = b[1],
            O = b[2],
            j = o[h];
          (!j || s[j.type] && g) && (j ? console.error("".concat(j.type, " is a void element tag therefore it must have no children")) : console.error("Can use element at index '".concat(h, "' as it is not declared in the original translation")), j = /*#__PURE__*/React.createElement(React.Fragment)), u.push( /*#__PURE__*/React.cloneElement(j, {
            key: a()
          }, g ? n(g, o) : j.props.children)), O && u.push(O);
        }
      } catch (e) {
        y.e(e);
      } finally {
        y.f();
      }
      return u;
    }(j, O) : null;
  if (null === u || null === d) return E;
  var w = i || React.Fragment,
    P = {
      id: y,
      message: b,
      translation: E,
      isTranslated: y !== E && b !== E
    };
  if (u && d) console.error("You can't use both `component` and `render` prop at the same time. `component` is ignored.");else if (u && "function" != typeof u) console.error("Invalid value supplied to prop `render`. It must be a function, provided ".concat(u));else if (d && "function" != typeof d) return console.error("Invalid value supplied to prop `component`. It must be a React component, provided ".concat(d)), /*#__PURE__*/React.createElement(w, Object.assign({}, P), E);
  if ("function" == typeof u) return u(P);
  var S = d || w,
    C = i;
  return C && !d ? /*#__PURE__*/React.createElement(C, Object.assign({}, P), E) : /*#__PURE__*/React.createElement(S, null, E);
}
y.defaultProps = {
  values: {},
  components: {}
};

var I18nProvider = process.env.NODE_ENV === "production" ? i : I18nProvider$1;
var Trans = process.env.NODE_ENV === "production" ? y : Trans$1;
process.env.NODE_ENV === "production" ? o : useLingui;
process.env.NODE_ENV === "production" ? a : withI18n;

var _excluded$3 = ["icon", "iconProps"];
var _jsxFileName$k = "D:\\Gozillapad\\widgets\\src\\components\\Button.tsx";
function ownKeys$c(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$c(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$c(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$c(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var BaseButton = /*#__PURE__*/_styled.button.withConfig({
  displayName: "Button__BaseButton",
  componentId: "sc-1soikk5-0"
})(["background-color:transparent;border:none;border-radius:0.5rem;color:currentColor;cursor:pointer;font-size:inherit;font-weight:inherit;height:inherit;line-height:inherit;margin:0;padding:0;:enabled{transition:filter ", " linear;}:disabled{cursor:initial;filter:opacity(0.6);}"], AnimationSpeed.Fast);
var Button = _styled(BaseButton).withConfig({
  displayName: "Button",
  componentId: "sc-1soikk5-1"
})(["background-color:", ";border:1px solid transparent;color:", ";:enabled:hover{background-color:", ";}"], function (_ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'interactive' : _ref$color,
    theme = _ref.theme;
  return theme[color];
}, function (_ref2) {
  var _ref2$color = _ref2.color,
    color = _ref2$color === void 0 ? 'interactive' : _ref2$color,
    theme = _ref2.theme;
  return color === 'interactive' && theme.onInteractive;
}, function (_ref3) {
  var _ref3$color = _ref3.color,
    color = _ref3$color === void 0 ? 'interactive' : _ref3$color,
    theme = _ref3.theme;
  return theme.onHover(theme[color]);
});
var transparentButton = function transparentButton(defaultColor) {
  return _styled(BaseButton).withConfig({
    displayName: "Button__transparentButton",
    componentId: "sc-1soikk5-2"
  })(["color:", ";:enabled:hover{color:", ";*{color:", ";}}"], function (_ref4) {
    var _ref4$color = _ref4.color,
      color = _ref4$color === void 0 ? defaultColor : _ref4$color,
      theme = _ref4.theme;
    return theme[color];
  }, function (_ref5) {
    var _ref5$color = _ref5.color,
      color = _ref5$color === void 0 ? defaultColor : _ref5$color,
      theme = _ref5.theme;
    return theme.onHover(theme[color]);
  }, function (_ref6) {
    var _ref6$color = _ref6.color,
      color = _ref6$color === void 0 ? defaultColor : _ref6$color,
      theme = _ref6.theme;
    return theme.onHover(theme[color]);
  });
};
transparentButton('accent');
var SecondaryButton = transparentButton('secondary');
var StyledIconButton = /*#__PURE__*/_styled(SecondaryButton).withConfig({
  displayName: "Button__StyledIconButton",
  componentId: "sc-1soikk5-3"
})(["height:1rem;"]);
var IconButton = /*#__PURE__*/forwardRef(function IconButton(_ref7, ref) {
  var Icon = _ref7.icon,
    iconProps = _ref7.iconProps,
    props = _objectWithoutProperties(_ref7, _excluded$3);
  return /*#__PURE__*/jsxDEV(StyledIconButton, _objectSpread$c(_objectSpread$c({}, props), {}, {
    ref: ref,
    children: /*#__PURE__*/jsxDEV(Icon, _objectSpread$c({}, iconProps), void 0, false, {
      fileName: _jsxFileName$k,
      lineNumber: 67,
      columnNumber: 9
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName$k,
    lineNumber: 66,
    columnNumber: 7
  }, this);
});

function useHasFocus(node) {
  var _node$contains, _document;
  useEffect(function () {
    if (node instanceof HTMLElement) {
      // tabIndex is required to receive blur events from non-button elements.
      node.tabIndex = node.tabIndex || -1;
      // Without explicitly omitting outline, Safari will now outline this node when focused.
      node.style.outline = node.style.outline || 'none';
    }
  }, [node]);
  var _useState = useState((_node$contains = node === null || node === void 0 ? void 0 : node.contains((_document = document) === null || _document === void 0 ? void 0 : _document.activeElement)) !== null && _node$contains !== void 0 ? _node$contains : false),
    _useState2 = _slicedToArray(_useState, 2),
    hasFocus = _useState2[0],
    setHasFocus = _useState2[1];
  var onFocus = useCallback(function () {
    return setHasFocus(true);
  }, []);
  var onBlur = useCallback(function (e) {
    var _node$contains2;
    var target = e.relatedTarget;
    setHasFocus((_node$contains2 = node === null || node === void 0 ? void 0 : node.contains(target)) !== null && _node$contains2 !== void 0 ? _node$contains2 : false);
  }, [node]);
  useEffect(function () {
    node === null || node === void 0 ? void 0 : node.addEventListener('focusin', onFocus);
    node === null || node === void 0 ? void 0 : node.addEventListener('focusout', onBlur);
    return function () {
      node === null || node === void 0 ? void 0 : node.removeEventListener('focusin', onFocus);
      node === null || node === void 0 ? void 0 : node.removeEventListener('focusout', onBlur);
    };
  }, [node, onFocus, onBlur]);
  return hasFocus;
}

function useHasHover(node) {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    hasHover = _useState2[0],
    setHasHover = _useState2[1];
  var onMouseEnter = useCallback(function () {
    return setHasHover(true);
  }, []);
  var onMouseLeave = useCallback(function () {
    return setHasHover(false);
  }, []);
  useEffect(function () {
    node === null || node === void 0 ? void 0 : node.addEventListener('mouseenter', onMouseEnter);
    node === null || node === void 0 ? void 0 : node.addEventListener('mouseleave', onMouseLeave);
    return function () {
      node === null || node === void 0 ? void 0 : node.removeEventListener('mouseenter', onMouseEnter);
      node === null || node === void 0 ? void 0 : node.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [node, onMouseEnter, onMouseLeave]);
  return hasHover;
}

var _jsxFileName$j = "D:\\Gozillapad\\widgets\\src\\components\\Tooltip.tsx";
function useTooltip(tooltip) {
  var hover = useHasHover(tooltip);
  var focus = useHasFocus(tooltip);
  return hover || focus;
}
var IconTooltip = /*#__PURE__*/_styled(IconButton).withConfig({
  displayName: "Tooltip__IconTooltip",
  componentId: "sc-tsxpgp-1"
})(["cursor:help;"]);
function Tooltip(_ref) {
  var _ref$icon = _ref.icon,
    Icon = _ref$icon === void 0 ? Info : _ref$icon,
    iconProps = _ref.iconProps,
    children = _ref.children,
    _ref$placement = _ref.placement,
    placement = _ref$placement === void 0 ? 'auto' : _ref$placement,
    offset = _ref.offset,
    contained = _ref.contained;
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    tooltip = _useState2[0],
    setTooltip = _useState2[1];
  var showTooltip = useTooltip(tooltip);
  return /*#__PURE__*/jsxDEV(Popover, {
    content: children,
    show: showTooltip,
    placement: placement,
    offset: offset,
    contained: contained,
    children: /*#__PURE__*/jsxDEV(IconTooltip, {
      icon: Icon,
      iconProps: iconProps,
      ref: setTooltip
    }, void 0, false, {
      fileName: _jsxFileName$j,
      lineNumber: 50,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName$j,
    lineNumber: 49,
    columnNumber: 5
  }, this);
}

var _excluded$2 = ["color", "disabled", "shouldUseDisabledColor", "action", "onClick", "children", "wrapperProps", "narrow"];
var _jsxFileName$i = "D:\\Gozillapad\\widgets\\src\\components\\ActionButton.tsx",
  _templateObject,
  _templateObject2,
  _templateObject3,
  _templateObject4;
function ownKeys$b(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$b(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$b(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$b(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var StyledButton = /*#__PURE__*/_styled(Button).withConfig({
  displayName: "ActionButton__StyledButton",
  componentId: "sc-xgl46p-0"
})(["border-radius:", "rem;flex-grow:1;max-height:", ";transition:background-color ", " ease-out,border-radius ", " ease-out,flex-grow ", " ease-out;", ";"], function (_ref) {
  var theme = _ref.theme,
    narrow = _ref.narrow;
  return narrow ? theme.borderRadius.small : theme.borderRadius.medium;
}, function (_ref2) {
  var narrow = _ref2.narrow;
  return narrow ? '2.5rem' : '3.5rem';
}, AnimationSpeed.Medium, AnimationSpeed.Medium, AnimationSpeed.Medium, function (_ref3) {
  var theme = _ref3.theme,
    disabled = _ref3.disabled,
    shouldUseDisabledColor = _ref3.shouldUseDisabledColor;
  return disabled && (shouldUseDisabledColor ? css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n          background-color: ", ";\n        "])), theme.interactive) : css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n          opacity: 0.6;\n        "]))));
});
var ActionRow = /*#__PURE__*/_styled(Row).withConfig({
  displayName: "ActionButton__ActionRow",
  componentId: "sc-xgl46p-1"
})([""]);
var grow = keyframes(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  from {\n    opacity: 0;\n    width: 0;\n  }\n  to {\n    opacity: 1;\n    width: max-content;\n  }\n"])));
var actionCss = css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  align-items: center;\n  border: 1px solid ", ";\n  padding: calc(0.25rem - 1px) calc(0.75rem - 1px);\n\n  ", " {\n    animation: ", " ", " ease-in;\n    flex-grow: 1;\n    justify-content: flex-start;\n    white-space: nowrap;\n  }\n\n  ", " {\n    /* Subtract the padding from the borderRadius so that it nests properly. */\n    border-radius: ", "rem;\n    flex-grow: 0;\n    height: 2.5rem;\n    padding: 0 0.75rem;\n  }\n"])), function (_ref4) {
  var theme = _ref4.theme;
  return theme.outline;
}, ActionRow, grow, AnimationSpeed.Medium, StyledButton, function (_ref5) {
  var theme = _ref5.theme;
  return theme.borderRadius.small;
});
var Overlay = /*#__PURE__*/_styled(Row).withConfig({
  displayName: "ActionButton__Overlay",
  componentId: "sc-xgl46p-2"
})(["border-radius:", "rem;flex-flow:row-reverse nowrap;margin-top:0.25rem;min-height:", ";transition:padding ", " ease-out;", ""], function (_ref6) {
  var theme = _ref6.theme,
    narrow = _ref6.narrow;
  return narrow ? theme.borderRadius.small : theme.borderRadius.medium;
}, function (_ref7) {
  var narrow = _ref7.narrow;
  return narrow ? '2.5rem' : '3.5rem';
}, AnimationSpeed.Medium, function (_ref8) {
  var hasAction = _ref8.hasAction;
  return hasAction && actionCss;
});
function ActionButton(_ref9) {
  var _action$color, _action$color2, _action$color3;
  var _ref9$color = _ref9.color,
    color = _ref9$color === void 0 ? 'accent' : _ref9$color,
    disabled = _ref9.disabled,
    _ref9$shouldUseDisabl = _ref9.shouldUseDisabledColor,
    shouldUseDisabledColor = _ref9$shouldUseDisabl === void 0 ? true : _ref9$shouldUseDisabl,
    action = _ref9.action,
    onClick = _ref9.onClick,
    children = _ref9.children,
    wrapperProps = _ref9.wrapperProps,
    narrow = _ref9.narrow,
    rest = _objectWithoutProperties(_ref9, _excluded$2);
  var textColor = useMemo(function () {
    if (disabled) {
      return 'primary';
    }
    switch (color) {
      case 'accent':
      case 'critical':
        return 'onAccent';
      case 'accentSoft':
        return 'accent';
      case 'warningSoft':
        return 'warning';
      default:
        return 'currentColor';
    }
  }, [color, disabled]);
  var buttonSize = useMemo(function () {
    return narrow ? 'small' : action ? 'medium' : 'large';
  }, [narrow, action]);
  return /*#__PURE__*/jsxDEV(Overlay, _objectSpread$b(_objectSpread$b({
    "data-testid": "action-button",
    hasAction: Boolean(action),
    flex: true,
    align: "stretch",
    narrow: narrow
  }, wrapperProps), {}, {
    children: [!(action !== null && action !== void 0 && action.hideButton) && /*#__PURE__*/jsxDEV(StyledButton, _objectSpread$b(_objectSpread$b({
      color: color,
      disabled: disabled || (action === null || action === void 0 ? void 0 : action.disableButton),
      shouldUseDisabledColor: shouldUseDisabledColor,
      onClick: (action === null || action === void 0 ? void 0 : action.onClick) || onClick,
      narrow: narrow
    }, rest), {}, {
      children: /*#__PURE__*/jsxDEV(TransitionButton, {
        buttonSize: buttonSize,
        color: textColor,
        children: (action === null || action === void 0 ? void 0 : action.children) || children
      }, void 0, false, {
        fileName: _jsxFileName$i,
        lineNumber: 141,
        columnNumber: 11
      }, this)
    }), void 0, false, {
      fileName: _jsxFileName$i,
      lineNumber: 133,
      columnNumber: 9
    }, this), action && /*#__PURE__*/jsxDEV(ActionRow, {
      gap: 0.5,
      color: (_action$color = action.color) !== null && _action$color !== void 0 ? _action$color : 'primary',
      children: [action.tooltipContent ? /*#__PURE__*/jsxDEV(Tooltip, {
        placement: "right",
        icon: LargeIcon,
        iconProps: {
          color: (_action$color2 = action.color) !== null && _action$color2 !== void 0 ? _action$color2 : 'currentColor',
          icon: action.icon || AlertTriangle
        },
        children: action.tooltipContent
      }, void 0, false, {
        fileName: _jsxFileName$i,
        lineNumber: 149,
        columnNumber: 13
      }, this) : /*#__PURE__*/jsxDEV(LargeIcon, {
        color: (_action$color3 = action.color) !== null && _action$color3 !== void 0 ? _action$color3 : 'currentColor',
        icon: action.icon || AlertTriangle
      }, void 0, false, {
        fileName: _jsxFileName$i,
        lineNumber: 157,
        columnNumber: 13
      }, this), /*#__PURE__*/jsxDEV(Subhead2, {
        children: action === null || action === void 0 ? void 0 : action.message
      }, void 0, false, {
        fileName: _jsxFileName$i,
        lineNumber: 159,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$i,
      lineNumber: 147,
      columnNumber: 9
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName$i,
    lineNumber: 124,
    columnNumber: 5
  }, this);
}

var Column = /*#__PURE__*/_styled.div.withConfig({
  displayName: "Column",
  componentId: "sc-1ul9eki-0"
})(["align-items:", ";color:", ";display:", ";flex-direction:column;flex-grow:", ";gap:", ";grid-auto-flow:row;grid-template-columns:1fr;justify-content:", ";padding:", ";", ""], function (_ref) {
  var align = _ref.align;
  return align !== null && align !== void 0 ? align : 'center';
}, function (_ref2) {
  var color = _ref2.color,
    theme = _ref2.theme;
  return color && theme[color];
}, function (_ref3) {
  var flex = _ref3.flex;
  return flex ? 'flex' : 'grid';
}, function (_ref4) {
  var grow = _ref4.grow;
  return grow && 1;
}, function (_ref5) {
  var gap = _ref5.gap;
  return gap && "".concat(gap, "rem");
}, function (_ref6) {
  var justify = _ref6.justify;
  return justify !== null && justify !== void 0 ? justify : 'space-between';
}, function (_ref7) {
  var padded = _ref7.padded,
    padding = _ref7.padding;
  return padding !== null && padding !== void 0 ? padding : padded ? '0.75rem' : 'unset';
}, function (_ref8) {
  var css = _ref8.css;
  return css;
});

var Rule = /*#__PURE__*/_styled.hr.withConfig({
  displayName: "Rule",
  componentId: "sc-1568p9j-0"
})(["border:none;border-bottom:1px solid ", ";margin:0 ", ";margin-bottom:", "px;margin-top:", "px;max-width:auto;width:auto;"], function (_ref) {
  var theme = _ref.theme;
  return theme.outline;
}, function (_ref2) {
  var padded = _ref2.padded;
  return padded ? '0.75rem' : 0;
}, function (_ref3) {
  var scrollingEdge = _ref3.scrollingEdge;
  return scrollingEdge === 'bottom' ? -1 : 0;
}, function (_ref4) {
  var scrollingEdge = _ref4.scrollingEdge;
  return scrollingEdge !== 'bottom' ? -1 : 0;
});

var overflowCss = /*#__PURE__*/css(["overflow-y:scroll;"]);
var hiddenScrollbarCss = /*#__PURE__*/css(["overflow-y:auto;"]);

/** Customizes the scrollbar for vertical overflow. */
var scrollbarCss = function scrollbarCss(padded) {
  return css(["overflow-y:scroll;::-webkit-scrollbar{width:1.25rem;}::-webkit-scrollbar-thumb{background:radial-gradient( closest-corner at 0.25rem 0.25rem,", " 0.25rem,transparent 0.25rem ),linear-gradient( to bottom,#ffffff00 0.25em,", " 0.25rem,", " calc(100% - 0.25rem),#ffffff00 calc(100% - 0.25rem) ),radial-gradient( closest-corner at 0.25em calc(100% - 0.25rem),", " 0.25rem,#ffffff00 0.25rem );background-clip:padding-box;border:none;", ":0.75rem solid transparent;}@supports not selector(::-webkit-scrollbar-thumb){scrollbar-color:", " transparent;}"], function (_ref) {
    var theme = _ref.theme;
    return theme.interactive;
  }, function (_ref2) {
    var theme = _ref2.theme;
    return theme.interactive;
  }, function (_ref3) {
    var theme = _ref3.theme;
    return theme.interactive;
  }, function (_ref4) {
    var theme = _ref4.theme;
    return theme.interactive;
  }, padded ? 'border-right' : 'border-left', function (_ref5) {
    var theme = _ref5.theme;
    return theme.interactive;
  });
};
function useScrollbar(element) {
  var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref6$padded = _ref6.padded,
    padded = _ref6$padded === void 0 ? false : _ref6$padded,
    _ref6$hideScrollbar = _ref6.hideScrollbar,
    hideScrollbar = _ref6$hideScrollbar === void 0 ? false : _ref6$hideScrollbar;
  return useMemo(
  // NB: The css must be applied on an element's first render. WebKit will not re-apply overflow
  // properties until any transitions have ended, so waiting a frame for state would cause jank.
  function () {
    if (hideScrollbar) return hiddenScrollbarCss;
    return hasOverflow(element) ? scrollbarCss(padded) : overflowCss;
  }, [element, padded, hideScrollbar]);
  function hasOverflow(element) {
    if (!element) return true;
    return element.scrollHeight > element.clientHeight;
  }
}

var _excluded$1 = ["title", "iconPrefix", "open", "onExpand", "height", "maxHeight", "children", "styledWrapper"];
var _jsxFileName$h = "D:\\Gozillapad\\widgets\\src\\components\\Expando.tsx";
function ownKeys$a(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$a(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$a(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$a(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var HeaderColumn = /*#__PURE__*/_styled(Column).withConfig({
  displayName: "Expando__HeaderColumn",
  componentId: "sc-yzkwmi-0"
})(["cursor:pointer;padding:1.25rem 1.5rem;"]);
var StyledWrapper = /*#__PURE__*/_styled(Column).withConfig({
  displayName: "Expando__StyledWrapper",
  componentId: "sc-yzkwmi-1"
})(["background-color:", ";border-radius:", "rem;overflow:hidden;@supports (overflow:clip){overflow:clip;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.module;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.borderRadius.medium;
});
var TitleRow = /*#__PURE__*/_styled(Row).withConfig({
  displayName: "Expando__TitleRow",
  componentId: "sc-yzkwmi-2"
})(["cursor:pointer;"]);
var TitleHeader = /*#__PURE__*/_styled.div.withConfig({
  displayName: "Expando__TitleHeader",
  componentId: "sc-yzkwmi-3"
})(["align-items:center;display:flex;justify-content:center;"]);
var MAX_HEIGHT = 20; // rem

function getExpandoContentHeight(height, maxHeight) {
  return Math.min(height !== null && height !== void 0 ? height : MAX_HEIGHT, maxHeight !== null && maxHeight !== void 0 ? maxHeight : MAX_HEIGHT);
}
var ExpandoColumn = /*#__PURE__*/_styled(Column).withConfig({
  displayName: "Expando__ExpandoColumn",
  componentId: "sc-yzkwmi-4"
})(["max-height:", "rem;overflow:hidden;position:relative;transition:max-height ", ",padding ", ";"], function (_ref3) {
  var open = _ref3.open,
    height = _ref3.height,
    maxHeight = _ref3.maxHeight;
  return open ? getExpandoContentHeight(height, maxHeight) : 0;
}, AnimationSpeed.Medium, AnimationSpeed.Medium);
var InnerColumn = /*#__PURE__*/_styled(Column).withConfig({
  displayName: "Expando__InnerColumn",
  componentId: "sc-yzkwmi-5"
})(["max-height:", "rem;"], function (_ref4) {
  var height = _ref4.height,
    maxHeight = _ref4.maxHeight;
  return getExpandoContentHeight(height, maxHeight);
});
var _StyledInnerColumn2 = /*#__PURE__*/_styled(InnerColumn).withConfig({
  displayName: "Expando___StyledInnerColumn2",
  componentId: "sc-yzkwmi-6"
})(["", ""], function (p) {
  return p.$_css2;
});
var _StyledInnerColumn = /*#__PURE__*/_styled(InnerColumn).withConfig({
  displayName: "Expando___StyledInnerColumn",
  componentId: "sc-yzkwmi-7"
})(["", ""], function (p) {
  return p.$_css;
});
var IconPrefix = /*#__PURE__*/_styled.div.withConfig({
  displayName: "Expando__IconPrefix",
  componentId: "sc-yzkwmi-8"
})(["color:", ";"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.primary;
});
/** A scrollable Expando with an absolute height. */
function Expando(_ref6) {
  var title = _ref6.title,
    iconPrefix = _ref6.iconPrefix,
    open = _ref6.open,
    onExpand = _ref6.onExpand,
    height = _ref6.height,
    maxHeight = _ref6.maxHeight,
    children = _ref6.children,
    _ref6$styledWrapper = _ref6.styledWrapper,
    styledWrapper = _ref6$styledWrapper === void 0 ? true : _ref6$styledWrapper,
    rest = _objectWithoutProperties(_ref6, _excluded$1);
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    scrollingEl = _useState2[0],
    setScrollingEl = _useState2[1];
  var scrollbar = useScrollbar(scrollingEl, {
    hideScrollbar: true
  });
  return /*#__PURE__*/jsxDEV(Column, _objectSpread$a(_objectSpread$a({}, rest), {}, {
    children: styledWrapper ? /*#__PURE__*/jsxDEV(StyledWrapper, {
      expanded: open,
      children: [/*#__PURE__*/jsxDEV(HeaderColumn, {
        onClick: onExpand,
        children: /*#__PURE__*/jsxDEV(ButtonSmall, {
          color: "secondary",
          children: /*#__PURE__*/jsxDEV(TitleRow, {
            gap: 1,
            children: [/*#__PURE__*/jsxDEV(TitleHeader, {
              children: title
            }, void 0, false, {
              fileName: _jsxFileName$h,
              lineNumber: 97,
              columnNumber: 17
            }, this), /*#__PURE__*/jsxDEV(Row, {
              gap: 0.2,
              children: [iconPrefix && /*#__PURE__*/jsxDEV(IconPrefix, {
                children: iconPrefix
              }, void 0, false, {
                fileName: _jsxFileName$h,
                lineNumber: 99,
                columnNumber: 34
              }, this), /*#__PURE__*/jsxDEV(IconButton, {
                color: "secondary",
                icon: Expando$1,
                iconProps: {
                  open: open
                }
              }, void 0, false, {
                fileName: _jsxFileName$h,
                lineNumber: 100,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName$h,
              lineNumber: 98,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$h,
            lineNumber: 96,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$h,
          lineNumber: 95,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$h,
        lineNumber: 94,
        columnNumber: 11
      }, this), open && /*#__PURE__*/jsxDEV(Rule, {
        padded: true
      }, void 0, false, {
        fileName: _jsxFileName$h,
        lineNumber: 105,
        columnNumber: 20
      }, this), /*#__PURE__*/jsxDEV(ExpandoColumn, {
        open: open,
        height: height,
        maxHeight: maxHeight,
        children: /*#__PURE__*/jsxDEV(_StyledInnerColumn, {
          flex: true,
          align: "stretch",
          height: height,
          maxHeight: maxHeight,
          ref: setScrollingEl,
          $_css: scrollbar,
          children: children
        }, void 0, false, {
          fileName: _jsxFileName$h,
          lineNumber: 107,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$h,
        lineNumber: 106,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$h,
      lineNumber: 93,
      columnNumber: 9
    }, this) : /*#__PURE__*/jsxDEV(Fragment, {
      children: [title, /*#__PURE__*/jsxDEV(ExpandoColumn, {
        open: open,
        height: height,
        maxHeight: maxHeight,
        children: /*#__PURE__*/jsxDEV(_StyledInnerColumn2, {
          flex: true,
          align: "stretch",
          height: height,
          maxHeight: maxHeight,
          ref: setScrollingEl,
          $_css2: scrollbar,
          children: children
        }, void 0, false, {
          fileName: _jsxFileName$h,
          lineNumber: 123,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$h,
        lineNumber: 122,
        columnNumber: 11
      }, this)]
    }, void 0, true)
  }), void 0, false, {
    fileName: _jsxFileName$h,
    lineNumber: 91,
    columnNumber: 5
  }, this);
}

var _jsxFileName$g = "D:\\Gozillapad\\widgets\\src\\components\\Error\\ErrorView.tsx";
var HeaderIcon = /*#__PURE__*/_styled(LargeIcon).withConfig({
  displayName: "ErrorView__HeaderIcon",
  componentId: "sc-tzhurb-0"
})(["flex-grow:1;margin:2rem 0;"]);
function StatusHeader(_ref) {
  var Icon = _ref.icon,
    iconColor = _ref.iconColor,
    _ref$iconSize = _ref.iconSize,
    iconSize = _ref$iconSize === void 0 ? 2.5 : _ref$iconSize,
    children = _ref.children;
  return /*#__PURE__*/jsxDEV(Fragment, {
    children: /*#__PURE__*/jsxDEV(Column, {
      flex: true,
      style: {
        flexGrow: 1
      },
      children: [/*#__PURE__*/jsxDEV(HeaderIcon, {
        icon: Icon,
        color: iconColor,
        size: iconSize
      }, void 0, false, {
        fileName: _jsxFileName$g,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/jsxDEV(Column, {
        gap: 0.75,
        flex: true,
        style: {
          textAlign: 'center'
        },
        children: children
      }, void 0, false, {
        fileName: _jsxFileName$g,
        lineNumber: 28,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$g,
      lineNumber: 26,
      columnNumber: 7
    }, this)
  }, void 0, false);
}
var ExpandoContent = /*#__PURE__*/_styled(Code).withConfig({
  displayName: "ErrorView__ExpandoContent",
  componentId: "sc-tzhurb-1"
})(["margin:0.5rem;"]);
var ErrorDialogWrapper = /*#__PURE__*/_styled(Column).withConfig({
  displayName: "ErrorView__ErrorDialogWrapper",
  componentId: "sc-tzhurb-2"
})(["background-color:", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.container;
});
function ErrorDialog(_ref3) {
  var header = _ref3.header,
    message = _ref3.message,
    error = _ref3.error,
    action = _ref3.action,
    onClick = _ref3.onClick,
    onDismiss = _ref3.onDismiss;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  return /*#__PURE__*/jsxDEV(ErrorDialogWrapper, {
    flex: true,
    padding: "1rem 0.5rem 0.25rem",
    gap: 0.5,
    align: "stretch",
    children: [/*#__PURE__*/jsxDEV(Row, {
      flex: true,
      flow: "row-reverse",
      children: /*#__PURE__*/jsxDEV(LargeIcon, {
        icon: StyledXButton,
        onClick: onDismiss
      }, void 0, false, {
        fileName: _jsxFileName$g,
        lineNumber: 59,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$g,
      lineNumber: 58,
      columnNumber: 7
    }, this), /*#__PURE__*/jsxDEV(StatusHeader, {
      icon: AlertTriangle,
      iconColor: "warning",
      iconSize: 2.5,
      children: /*#__PURE__*/jsxDEV(Column, {
        gap: 0.75,
        children: [/*#__PURE__*/jsxDEV(H4, {
          children: header || /*#__PURE__*/jsxDEV(Trans, {
            id: "Something went wrong"
          }, void 0, false, void 0, this)
        }, void 0, false, {
          fileName: _jsxFileName$g,
          lineNumber: 63,
          columnNumber: 11
        }, this), /*#__PURE__*/jsxDEV(Body1, {
          color: "secondary",
          children: message
        }, void 0, false, {
          fileName: _jsxFileName$g,
          lineNumber: 64,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$g,
        lineNumber: 62,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$g,
      lineNumber: 61,
      columnNumber: 7
    }, this), error ? /*#__PURE__*/jsxDEV(Expando, {
      title: open ? /*#__PURE__*/jsxDEV(Trans, {
        id: "Show less"
      }, void 0, false, void 0, this) : /*#__PURE__*/jsxDEV(Trans, {
        id: "Show more"
      }, void 0, false, void 0, this),
      open: open,
      onExpand: function onExpand() {
        return setOpen(function (open) {
          return !open;
        });
      },
      maxHeight: 11.5 /* rem */,
      children: /*#__PURE__*/jsxDEV(Column, {
        flex: true,
        grow: true,
        padded: true,
        children: /*#__PURE__*/jsxDEV(ExpandoContent, {
          userSelect: true,
          children: error.toString()
        }, void 0, false, {
          fileName: _jsxFileName$g,
          lineNumber: 75,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$g,
        lineNumber: 74,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$g,
      lineNumber: 68,
      columnNumber: 9
    }, this) : /*#__PURE__*/jsxDEV(Column, {
      style: {
        height: '7.5rem'
      }
    }, void 0, false, {
      fileName: _jsxFileName$g,
      lineNumber: 79,
      columnNumber: 9
    }, this), /*#__PURE__*/jsxDEV(ActionButton, {
      color: "accentSoft",
      onClick: onClick,
      narrow: true,
      children: action
    }, void 0, false, {
      fileName: _jsxFileName$g,
      lineNumber: 81,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName$g,
    lineNumber: 57,
    columnNumber: 5
  }, this);
}

var _jsxFileName$f = "D:\\Gozillapad\\widgets\\src\\components\\Error\\ErrorBoundary.tsx";
function _createSuper$6(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$6(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$6() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/**
 * Throws an error from outside of the React lifecycle.
 * Errors thrown through this method will correctly trigger the ErrorBoundary.
 *
 * @example
 * const throwError = useAsyncError()
 * useEffect(() => {
 *   fetch('http://example.com')
 *     .catch((e: Error) => {
 *       throwError(toWidgetError(e))
 *     })
 * }, [throwError])
 */
function useAsyncError() {
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    setError = _useState2[1];
  return useCallback(function (error) {
    return setError(function () {
      // Ignore user rejections - they should not trigger the ErrorBoundary
      if (error instanceof UserRejectedRequestError) return;
      if (error instanceof Error) throw error;
      throw new Error(error);
    });
  }, []);
}
var ErrorBoundary = /*#__PURE__*/function (_Component) {
  _inherits(ErrorBoundary, _Component);
  var _super = _createSuper$6(ErrorBoundary);
  function ErrorBoundary(props) {
    var _this;
    _classCallCheck(this, ErrorBoundary);
    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }
  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      var _this$props$onError, _this$props;
      (_this$props$onError = (_this$props = this.props).onError) === null || _this$props$onError === void 0 ? void 0 : _this$props$onError.call(_this$props, error, errorInfo);
    }
  }, {
    key: "renderErrorView",
    value: function renderErrorView(error) {
      var _this2 = this;
      var header = error instanceof WidgetError ? error.header : DEFAULT_ERROR_HEADER;
      return /*#__PURE__*/jsxDEV(ErrorDialog, {
        message: header,
        error: error,
        action: /*i18n*/i18n._("Get support"),
        onDismiss: error instanceof WidgetError && error.dismissable ? function () {
          _this2.setState({
            error: undefined
          });
        } : function () {
          return window.location.reload();
        },
        onClick: function onClick() {
          window.open('https://support.uniswap.org/', '_blank', 'noopener,noreferrer');
        }
      }, void 0, false, {
        fileName: _jsxFileName$f,
        lineNumber: 62,
        columnNumber: 7
      }, this);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.error) {
        return this.renderErrorView(this.state.error);
      }
      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      return {
        error: error
      };
    }
  }]);
  return ErrorBoundary;
}(Component);

var TransactionType;
(function (TransactionType) {
  TransactionType[TransactionType["APPROVAL"] = 0] = "APPROVAL";
  TransactionType[TransactionType["SWAP"] = 1] = "SWAP";
  TransactionType[TransactionType["WRAP"] = 2] = "WRAP";
  TransactionType[TransactionType["UNWRAP"] = 3] = "UNWRAP";
})(TransactionType || (TransactionType = {}));
var transactionsAtom = atomWithImmer({});

function isVisibilityStateSupported() {
  return 'visibilityState' in document;
}
function isWindowVisible() {
  return !isVisibilityStateSupported() || document.visibilityState !== 'hidden';
}

/**
 * Returns whether the window is currently visible to the user.
 */
function useIsWindowVisible() {
  var _useState = useState(true),
    _useState2 = _slicedToArray(_useState, 2),
    focused = _useState2[0],
    setFocused = _useState2[1];
  var listener = useCallback(function () {
    setFocused(isWindowVisible());
  }, [setFocused]);
  useEffect(function () {
    if (!isVisibilityStateSupported()) return undefined;
    setFocused(function (focused) {
      return isWindowVisible();
    });
    document.addEventListener('visibilitychange', listener);
    return function () {
      document.removeEventListener('visibilitychange', listener);
    };
  }, [listener]);
  return focused;
}

var _jsxFileName$e = "D:\\Gozillapad\\widgets\\src\\hooks\\useBlockNumber.tsx";
var MISSING_PROVIDER$1 = Symbol();
var BlockNumberContext = /*#__PURE__*/createContext(MISSING_PROVIDER$1);
function useBlockNumberContext() {
  var blockNumber = useContext(BlockNumberContext);
  if (blockNumber === MISSING_PROVIDER$1) {
    throw new Error('BlockNumber hooks must be wrapped in a <BlockNumberProvider>');
  }
  return blockNumber;
}

/** Requires that BlockUpdater be installed in the DOM tree. */
function useBlockNumber() {
  return useBlockNumberContext().value;
}
function useFastForwardBlockNumber() {
  return useBlockNumberContext().fastForward;
}
function Provider$5(_ref) {
  var children = _ref.children;
  var _useWeb3React = useWeb3React(),
    activeChainId = _useWeb3React.chainId,
    provider = _useWeb3React.provider;
  var _useState = useState({
      chainId: activeChainId
    }),
    _useState2 = _slicedToArray(_useState, 2),
    _useState2$ = _useState2[0],
    chainId = _useState2$.chainId,
    block = _useState2$.block,
    setChainBlock = _useState2[1];
  var onBlock = useCallback(function (block) {
    setChainBlock(function (chainBlock) {
      if (chainBlock.chainId === activeChainId) {
        if (!chainBlock.block || chainBlock.block < block) {
          return {
            chainId: activeChainId,
            block: block
          };
        }
      }
      return chainBlock;
    });
  }, [activeChainId]);
  var isWindowVisible = useIsWindowVisible();
  useEffect(function () {
    if (provider && activeChainId && isWindowVisible) {
      // If chainId hasn't changed, don't clear the block. This prevents re-fetching still valid data.
      setChainBlock(function (chainBlock) {
        return chainBlock.chainId === activeChainId ? chainBlock : {
          chainId: activeChainId
        };
      });
      var stale = false;
      provider.getBlockNumber().then(function (block) {
        if (stale) return;
        onBlock(block);
      })["catch"](function (error) {
        if (stale) return;
        console.error("Failed to get block number for chainId ".concat(activeChainId), error);
      });
      provider.on('block', onBlock);
      return function () {
        stale = true;
        provider.off('block', onBlock);
      };
    }
    return undefined;
  }, [activeChainId, provider, onBlock, setChainBlock, isWindowVisible]);
  var value = useMemo(function () {
    return {
      value: chainId === activeChainId ? block : undefined,
      fastForward: function fastForward(update) {
        if (block && update > block) {
          setChainBlock({
            chainId: activeChainId,
            block: update
          });
        }
      }
    };
  }, [activeChainId, block, chainId]);
  return /*#__PURE__*/jsxDEV(BlockNumberContext.Provider, {
    value: value,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName$e,
    lineNumber: 87,
    columnNumber: 10
  }, this);
}

var _CHAIN_NAMES_TO_IDS;
/**
 * List of all the networks supported by the Uniswap Interface
 */
var SupportedChainId;
(function (SupportedChainId) {
  SupportedChainId[SupportedChainId["MAINNET"] = 1] = "MAINNET";
  SupportedChainId[SupportedChainId["ROPSTEN"] = 3] = "ROPSTEN";
  SupportedChainId[SupportedChainId["RINKEBY"] = 4] = "RINKEBY";
  SupportedChainId[SupportedChainId["GOERLI"] = 5] = "GOERLI";
  SupportedChainId[SupportedChainId["KOVAN"] = 42] = "KOVAN";
  SupportedChainId[SupportedChainId["ARBITRUM_ONE"] = 42161] = "ARBITRUM_ONE";
  SupportedChainId[SupportedChainId["ARBITRUM_RINKEBY"] = 421611] = "ARBITRUM_RINKEBY";
  SupportedChainId[SupportedChainId["OPTIMISM"] = 10] = "OPTIMISM";
  SupportedChainId[SupportedChainId["OPTIMISM_GOERLI"] = 420] = "OPTIMISM_GOERLI";
  SupportedChainId[SupportedChainId["POLYGON"] = 137] = "POLYGON";
  SupportedChainId[SupportedChainId["POLYGON_MUMBAI"] = 80001] = "POLYGON_MUMBAI";
  SupportedChainId[SupportedChainId["CELO"] = 42220] = "CELO";
  SupportedChainId[SupportedChainId["CELO_ALFAJORES"] = 44787] = "CELO_ALFAJORES";
  SupportedChainId[SupportedChainId["BNB"] = 56] = "BNB";
  SupportedChainId[SupportedChainId["BASE"] = 8453] = "BASE";
})(SupportedChainId || (SupportedChainId = {}));
var ChainName;
(function (ChainName) {
  ChainName["MAINNET"] = "mainnet";
  ChainName["ROPSTEN"] = "ropsten";
  ChainName["RINKEBY"] = "rinkeby";
  ChainName["GOERLI"] = "goerli";
  ChainName["KOVAN"] = "kovan";
  ChainName["OPTIMISM"] = "optimism-mainnet";
  ChainName["OPTIMISM_GOERLI"] = "optimism-goerli";
  ChainName["ARBITRUM_ONE"] = "arbitrum-mainnet";
  ChainName["ARBITRUM_RINKEBY"] = "arbitrum-rinkeby";
  ChainName["POLYGON"] = "polygon-mainnet";
  ChainName["POLYGON_MUMBAI"] = "polygon-mumbai";
  ChainName["CELO"] = "celo";
  ChainName["CELO_ALFAJORES"] = "celo-alfajores";
  ChainName["BNB"] = "bnb";
  ChainName["BASE"] = "base";
})(ChainName || (ChainName = {}));
(_CHAIN_NAMES_TO_IDS = {}, _defineProperty(_CHAIN_NAMES_TO_IDS, ChainName.MAINNET, SupportedChainId.MAINNET), _defineProperty(_CHAIN_NAMES_TO_IDS, ChainName.ROPSTEN, SupportedChainId.ROPSTEN), _defineProperty(_CHAIN_NAMES_TO_IDS, ChainName.RINKEBY, SupportedChainId.RINKEBY), _defineProperty(_CHAIN_NAMES_TO_IDS, ChainName.GOERLI, SupportedChainId.GOERLI), _defineProperty(_CHAIN_NAMES_TO_IDS, ChainName.KOVAN, SupportedChainId.KOVAN), _defineProperty(_CHAIN_NAMES_TO_IDS, ChainName.POLYGON, SupportedChainId.POLYGON), _defineProperty(_CHAIN_NAMES_TO_IDS, ChainName.POLYGON_MUMBAI, SupportedChainId.POLYGON_MUMBAI), _defineProperty(_CHAIN_NAMES_TO_IDS, ChainName.ARBITRUM_ONE, SupportedChainId.ARBITRUM_ONE), _defineProperty(_CHAIN_NAMES_TO_IDS, ChainName.ARBITRUM_RINKEBY, SupportedChainId.ARBITRUM_RINKEBY), _defineProperty(_CHAIN_NAMES_TO_IDS, ChainName.OPTIMISM, SupportedChainId.OPTIMISM), _defineProperty(_CHAIN_NAMES_TO_IDS, ChainName.OPTIMISM_GOERLI, SupportedChainId.OPTIMISM_GOERLI), _defineProperty(_CHAIN_NAMES_TO_IDS, ChainName.CELO, SupportedChainId.CELO), _defineProperty(_CHAIN_NAMES_TO_IDS, ChainName.CELO_ALFAJORES, SupportedChainId.CELO_ALFAJORES), _defineProperty(_CHAIN_NAMES_TO_IDS, ChainName.BNB, SupportedChainId.BNB), _defineProperty(_CHAIN_NAMES_TO_IDS, ChainName.BASE, SupportedChainId.BASE), _CHAIN_NAMES_TO_IDS);

/**
 * Array of all the supported chain IDs
 */
Object.values(SupportedChainId).filter(function (id) {
  return typeof id === 'number';
});
[SupportedChainId.MAINNET, SupportedChainId.POLYGON, SupportedChainId.OPTIMISM, SupportedChainId.ARBITRUM_ONE, SupportedChainId.CELO, SupportedChainId.BNB, SupportedChainId.BASE];

/**
 * All the chain IDs that are running the Ethereum protocol.
 */
var L1_CHAIN_IDS = [SupportedChainId.MAINNET, SupportedChainId.ROPSTEN, SupportedChainId.RINKEBY, SupportedChainId.GOERLI, SupportedChainId.KOVAN, SupportedChainId.POLYGON, SupportedChainId.POLYGON_MUMBAI, SupportedChainId.CELO, SupportedChainId.CELO_ALFAJORES];
/**
 * Controls some L2 specific behavior, e.g. slippage tolerance, special UI behavior.
 * The expectation is that all of these networks have immediate transaction confirmation.
 */
var L2_CHAIN_IDS = [SupportedChainId.ARBITRUM_ONE, SupportedChainId.ARBITRUM_RINKEBY, SupportedChainId.OPTIMISM, SupportedChainId.OPTIMISM_GOERLI, SupportedChainId.BASE];

function _createSuper$5(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$5(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function wait(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}
function waitRandom(min, max) {
  return wait(min + Math.round(Math.random() * Math.max(0, max - min)));
}

/**
 * This error is thrown if the function is cancelled before completing
 */
var CancelledError = /*#__PURE__*/function (_Error) {
  _inherits(CancelledError, _Error);
  var _super = _createSuper$5(CancelledError);
  function CancelledError() {
    var _this;
    _classCallCheck(this, CancelledError);
    _this = _super.call(this, 'Cancelled');
    _defineProperty(_assertThisInitialized(_this), "isCancelledError", true);
    return _this;
  }
  return _createClass(CancelledError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * Throw this error if the function should retry
 */
var RetryableError = /*#__PURE__*/function (_Error2) {
  _inherits(RetryableError, _Error2);
  var _super2 = _createSuper$5(RetryableError);
  function RetryableError() {
    var _this2;
    _classCallCheck(this, RetryableError);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this2 = _super2.call.apply(_super2, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this2), "isRetryableError", true);
    return _this2;
  }
  return _createClass(RetryableError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * Retries the function that returns the promise until the promise successfully resolves up to n retries
 * @param fn function to retry
 * @param n how many times to retry
 * @param minWait min wait between retries in ms
 * @param maxWait max wait between retries in ms
 */
function retry(fn, _ref) {
  var n = _ref.n,
    minWait = _ref.minWait,
    maxWait = _ref.maxWait;
  var completed = false;
  var rejectCancelled;
  var promise = new Promise( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(resolve, reject) {
      var result;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              rejectCancelled = reject;
            case 1:
              result = void 0;
              _context.prev = 3;
              _context.next = 6;
              return fn();
            case 6:
              result = _context.sent;
              if (!completed) {
                resolve(result);
                completed = true;
              }
              return _context.abrupt("break", 24);
            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](3);
              if (!completed) {
                _context.next = 15;
                break;
              }
              return _context.abrupt("break", 24);
            case 15:
              if (!(n <= 0 || !_context.t0.isRetryableError)) {
                _context.next = 19;
                break;
              }
              reject(_context.t0);
              completed = true;
              return _context.abrupt("break", 24);
            case 19:
              n--;
            case 20:
              _context.next = 22;
              return waitRandom(minWait, maxWait);
            case 22:
              _context.next = 1;
              break;
            case 24:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 11]]);
    }));
    return function (_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }());
  return {
    promise: promise,
    cancel: function cancel() {
      if (completed) return;
      completed = true;
      rejectCancelled(new CancelledError());
    }
  };
}

var _RETRY_OPTIONS_BY_CHA;
function shouldCheck(lastBlockNumber, tx) {
  if (tx.receipt) return false;
  if (!tx.lastCheckedBlockNumber) return true;
  var blocksSinceCheck = lastBlockNumber - tx.lastCheckedBlockNumber;
  if (blocksSinceCheck < 1) return false;
  var minutesPending = (new Date().getTime() - tx.addedTime) / 60000;
  if (minutesPending > 60) {
    // every 10 blocks if pending longer than an hour
    return blocksSinceCheck > 9;
  } else if (minutesPending > 5) {
    // every 3 blocks if pending longer than 5 minutes
    return blocksSinceCheck > 2;
  } else {
    // otherwise every block
    return true;
  }
}
var RETRY_OPTIONS_BY_CHAIN_ID = (_RETRY_OPTIONS_BY_CHA = {}, _defineProperty(_RETRY_OPTIONS_BY_CHA, SupportedChainId.ARBITRUM_ONE, {
  n: 10,
  minWait: 250,
  maxWait: 1000
}), _defineProperty(_RETRY_OPTIONS_BY_CHA, SupportedChainId.ARBITRUM_RINKEBY, {
  n: 10,
  minWait: 250,
  maxWait: 1000
}), _defineProperty(_RETRY_OPTIONS_BY_CHA, SupportedChainId.OPTIMISM_GOERLI, {
  n: 10,
  minWait: 250,
  maxWait: 1000
}), _defineProperty(_RETRY_OPTIONS_BY_CHA, SupportedChainId.OPTIMISM, {
  n: 10,
  minWait: 250,
  maxWait: 1000
}), _defineProperty(_RETRY_OPTIONS_BY_CHA, SupportedChainId.BASE, {
  n: 10,
  minWait: 250,
  maxWait: 1000
}), _RETRY_OPTIONS_BY_CHA);
var DEFAULT_RETRY_OPTIONS = {
  n: 1,
  minWait: 0,
  maxWait: 0
};
function Updater(_ref) {
  var pendingTransactions = _ref.pendingTransactions,
    onCheck = _ref.onCheck,
    onReceipt = _ref.onReceipt;
  var _useWeb3React = useWeb3React(),
    chainId = _useWeb3React.chainId,
    provider = _useWeb3React.provider;
  var lastBlockNumber = useBlockNumber();
  var fastForwardBlockNumber = useFastForwardBlockNumber();
  var getReceipt = useCallback(function (hash) {
    var _RETRY_OPTIONS_BY_CHA2;
    if (!provider || !chainId) throw new Error('No library or chainId');
    var retryOptions = (_RETRY_OPTIONS_BY_CHA2 = RETRY_OPTIONS_BY_CHAIN_ID[chainId]) !== null && _RETRY_OPTIONS_BY_CHA2 !== void 0 ? _RETRY_OPTIONS_BY_CHA2 : DEFAULT_RETRY_OPTIONS;
    return retry(function () {
      return provider.getTransactionReceipt(hash).then(function (receipt) {
        if (receipt === null) {
          console.debug("Retrying tranasaction receipt for ".concat(hash));
          throw new RetryableError();
        }
        return receipt;
      });
    }, retryOptions);
  }, [chainId, provider]);
  useEffect(function () {
    if (!chainId || !provider || !lastBlockNumber) return;
    var cancels = Object.keys(pendingTransactions).filter(function (hash) {
      return shouldCheck(lastBlockNumber, pendingTransactions[hash]);
    }).map(function (hash) {
      var _getReceipt = getReceipt(hash),
        promise = _getReceipt.promise,
        cancel = _getReceipt.cancel;
      promise.then(function (receipt) {
        if (receipt) {
          fastForwardBlockNumber(receipt.blockNumber);
          onReceipt({
            chainId: chainId,
            hash: hash,
            receipt: receipt
          });
        } else {
          onCheck({
            chainId: chainId,
            hash: hash,
            blockNumber: lastBlockNumber
          });
        }
      })["catch"](function (error) {
        if (!error.isCancelledError) {
          console.warn("Failed to get transaction receipt for ".concat(hash), error);
        }
      });
      return cancel;
    });
    return function () {
      cancels.forEach(function (cancel) {
        return cancel();
      });
    };
  }, [chainId, provider, lastBlockNumber, getReceipt, fastForwardBlockNumber, onReceipt, onCheck, pendingTransactions]);
  return null;
}

var _jsxFileName$d = "D:\\Gozillapad\\widgets\\src\\hooks\\transactions\\index.tsx";
function ownKeys$9(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$9(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$9(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$9(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function usePendingTransactions() {
  var _ref;
  var _useWeb3React = useWeb3React(),
    chainId = _useWeb3React.chainId;
  var txs = useAtomValue(transactionsAtom);
  return (_ref = chainId ? txs[chainId] : null) !== null && _ref !== void 0 ? _ref : {};
}
function TransactionsUpdater(_ref2) {
  var onTxSubmit = _ref2.onTxSubmit,
    onTxSuccess = _ref2.onTxSuccess,
    onTxFail = _ref2.onTxFail;
  var currentPendingTxs = usePendingTransactions();
  var updateTxs = useUpdateAtom(transactionsAtom);
  var onCheck = useCallback(function (_ref3) {
    var chainId = _ref3.chainId,
      hash = _ref3.hash,
      blockNumber = _ref3.blockNumber;
    updateTxs(function (txs) {
      var _txs$chainId;
      var tx = (_txs$chainId = txs[chainId]) === null || _txs$chainId === void 0 ? void 0 : _txs$chainId[hash];
      if (tx) {
        tx.lastCheckedBlockNumber = tx.lastCheckedBlockNumber ? Math.max(tx.lastCheckedBlockNumber, blockNumber) : blockNumber;
      }
    });
  }, [updateTxs]);
  var onReceipt = useCallback(function (_ref4) {
    var chainId = _ref4.chainId,
      hash = _ref4.hash,
      receipt = _ref4.receipt;
    updateTxs(function (txs) {
      var _txs$chainId2;
      var tx = (_txs$chainId2 = txs[chainId]) === null || _txs$chainId2 === void 0 ? void 0 : _txs$chainId2[hash];
      if (tx) {
        tx.receipt = receipt;
      }
    });
    if (receipt.status === 0) {
      onTxFail === null || onTxFail === void 0 ? void 0 : onTxFail(hash, receipt);
    } else {
      onTxSuccess === null || onTxSuccess === void 0 ? void 0 : onTxSuccess(hash, _objectSpread$9(_objectSpread$9({}, currentPendingTxs[hash]), {}, {
        receipt: receipt
      }));
    }
  }, [updateTxs, onTxFail, onTxSuccess, currentPendingTxs]);
  var oldPendingTxs = useRef({});
  useEffect(function () {
    var newPendingTxHashes = Object.keys(currentPendingTxs);
    var oldPendingTxHashes = new Set(Object.keys(oldPendingTxs.current));
    if (newPendingTxHashes.length !== oldPendingTxHashes.size) {
      // if added new tx
      newPendingTxHashes.forEach(function (txHash) {
        if (!oldPendingTxHashes.has(txHash)) {
          onTxSubmit === null || onTxSubmit === void 0 ? void 0 : onTxSubmit(txHash, currentPendingTxs[txHash]);
        }
      });
      oldPendingTxs.current = currentPendingTxs;
    }
  }, [currentPendingTxs, onTxSubmit]);
  return /*#__PURE__*/jsxDEV(Updater, {
    pendingTransactions: currentPendingTxs,
    onCheck: onCheck,
    onReceipt: onReceipt
  }, void 0, false, {
    fileName: _jsxFileName$d,
    lineNumber: 129,
    columnNumber: 10
  }, this);
}

// Flags are sticky settings - they cannot be changed without remounting the Widget.

var flagsAtom = atom({});
function useInitialFlags(_ref) {
  var brandedFooter = _ref.brandedFooter,
    permit2 = _ref.permit2;
  // Only grab the initial flags on mount - ignore exhaustive-deps.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(function () {
    return [[flagsAtom, {
      brandedFooter: brandedFooter,
      permit2: permit2
    }]];
  }, []);
}

var EthereumLogo = "data:image/png;base64,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";

var arbitrumLogoUrl = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%20470.287%20514.251%22%20enable-background%3D%22new%200%200%20470.287%20514.251%22%20xml%3Aspace%3D%22preserve%22%3E%3Cg%20id%3D%22Background%22%3E%3C%2Fg%3E%3Cg%20id%3D%22Logos_and_symbols%22%3E%20%3Cg%20id%3D%22SYMBOL_VER_3%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_3_3_%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_4%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_4_1_%22%3E%20%20%3Cg%20id%3D%22SYMBOL_VER_4_3_%22%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_5_1_%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22off_2_1_%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22VER_3_1_%22%3E%20%20%3Cg%20id%3D%22SYMBOL_VER_2_1_%22%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22VER_3%22%3E%20%20%3Cg%20id%3D%22SYMBOL_VER_2%22%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22off_2%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_5%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_1%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_1_1_%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_1-1_3_%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_1-1_2_%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_1-1%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_1-1_1_%22%3E%20%20%3Cg%20id%3D%22_x31_-3%22%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22Symbol_-_Original_14_%22%3E%20%20%20%3Cpath%20fill%3D%22%232D374B%22%20d%3D%22M291.134%2C237.469l35.654-60.5l96.103%2C149.684l0.046%2C28.727l-0.313-197.672%20%20%20%20c-0.228-4.832-2.794-9.252-6.887-11.859L242.715%2C46.324c-4.045-1.99-9.18-1.967-13.22%2C0.063c-0.546%2C0.272-1.06%2C0.57-1.548%2C0.895%20%20%20%20l-0.604%2C0.379L59.399%2C144.983l-0.651%2C0.296c-0.838%2C0.385-1.686%2C0.875-2.48%2C1.444c-3.185%2C2.283-5.299%2C5.66-5.983%2C9.448%20%20%20%20c-0.103%2C0.574-0.179%2C1.158-0.214%2C1.749l0.264%2C161.083l89.515-138.745c11.271-18.397%2C35.825-24.323%2C58.62-24.001l26.753%2C0.706%20%20%20%20L67.588%2C409.765l18.582%2C10.697L245.692%2C157.22l70.51-0.256L157.091%2C426.849l66.306%2C38.138l7.922%2C4.556%20%20%20%20c3.351%2C1.362%2C7.302%2C1.431%2C10.681%2C0.21l175.453-101.678l-33.544%2C19.438L291.134%2C237.469z%20M304.736%2C433.395l-66.969-105.108%20%20%20%20l40.881-69.371l87.952%2C138.628L304.736%2C433.395z%22%2F%3E%20%20%20%3Cpolygon%20fill%3D%22%2328A0F0%22%20points%3D%22237.768%2C328.286%20304.736%2C433.395%20366.601%2C397.543%20278.648%2C258.915%20%20%20%20%22%2F%3E%20%20%20%3Cpath%20fill%3D%22%2328A0F0%22%20d%3D%22M422.937%2C355.379l-0.046-28.727l-96.103-149.684l-35.654%2C60.5l92.774%2C150.043l33.544-19.438%20%20%20%20c3.29-2.673%2C5.281-6.594%2C5.49-10.825L422.937%2C355.379z%22%2F%3E%20%20%20%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M20.219%2C382.469l47.369%2C27.296l157.634-252.801l-26.753-0.706c-22.795-0.322-47.35%2C5.604-58.62%2C24.001%20%20%20%20L50.334%2C319.004l-30.115%2C46.271V382.469z%22%2F%3E%20%20%20%3Cpolygon%20fill%3D%22%23FFFFFF%22%20points%3D%22316.202%2C156.964%20245.692%2C157.22%2086.17%2C420.462%20141.928%2C452.565%20157.091%2C426.849%20%20%20%20%22%2F%3E%20%20%20%3Cpath%20fill%3D%22%2396BEDC%22%20d%3D%22M452.65%2C156.601c-0.59-14.746-8.574-28.245-21.08-36.104L256.28%2C19.692%20%20%20%20c-12.371-6.229-27.825-6.237-40.218-0.004c-1.465%2C0.739-170.465%2C98.752-170.465%2C98.752c-2.339%2C1.122-4.592%2C2.458-6.711%2C3.975%20%20%20%20c-11.164%2C8.001-17.969%2C20.435-18.668%2C34.095v208.765l30.115-46.271L50.07%2C157.921c0.035-0.589%2C0.109-1.169%2C0.214-1.741%20%20%20%20c0.681-3.79%2C2.797-7.171%2C5.983-9.456c0.795-0.569%2C172.682-100.064%2C173.228-100.337c4.04-2.029%2C9.175-2.053%2C13.22-0.063%20%20%20%20l173.022%2C99.523c4.093%2C2.607%2C6.659%2C7.027%2C6.887%2C11.859v199.542c-0.209%2C4.231-1.882%2C8.152-5.172%2C10.825l-33.544%2C19.438%20%20%20%20l-17.308%2C10.031l-61.864%2C35.852l-62.737%2C36.357c-3.379%2C1.221-7.33%2C1.152-10.681-0.21l-74.228-42.693l-15.163%2C25.717%20%20%20%20l66.706%2C38.406c2.206%2C1.255%2C4.171%2C2.367%2C5.784%2C3.272c2.497%2C1.4%2C4.199%2C2.337%2C4.8%2C2.629c4.741%2C2.303%2C11.563%2C3.643%2C17.71%2C3.643%20%20%20%20c5.636%2C0%2C11.132-1.035%2C16.332-3.072l182.225-105.531c10.459-8.104%2C16.612-20.325%2C17.166-33.564V156.601z%22%2F%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22Symbol_-_Original_13_%22%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22Symbol_-_Original_6_%22%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22Symbol_-_Original_4_%22%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22One_color_version_-_White_3_%22%3E%20%20%20%3Cg%20id%3D%22Symbol_-_Original_15_%22%3E%20%20%20%3C%2Fg%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22One_color_version_-_White%22%3E%20%20%20%3Cg%20id%3D%22Symbol_-_Original%22%3E%20%20%20%3C%2Fg%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22Symbol_-_Monochromatic_3_%22%3E%20%20%20%3Cg%20id%3D%22_x33__7_%22%3E%20%20%20%3C%2Fg%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22Symbol_-_Monochromatic%22%3E%20%20%20%3Cg%20id%3D%22_x33__3_%22%3E%20%20%20%3C%2Fg%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22_x33__2_%22%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22_x33__1_%22%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22_x33_%22%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22Symbol_-_Original_10_%22%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22Symbol_-_Original_1_%22%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22Symbol_-_Original_2_%22%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22_x34__1_%22%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22Symbol_-_Monochromatic_2_%22%3E%20%20%20%3Cg%20id%3D%22_x33__6_%22%3E%20%20%20%3C%2Fg%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22One_color_version_-_White_2_%22%3E%20%20%20%3Cg%20id%3D%22Symbol_-_Original_11_%22%3E%20%20%20%3C%2Fg%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22Symbol_-_Original_5_%22%3E%20%20%20%3Cg%20id%3D%22Symbol_-_Original_12_%22%3E%20%20%20%3C%2Fg%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22One_color_version_-_White_1_%22%3E%20%20%20%3Cg%20id%3D%22Symbol_-_Original_9_%22%3E%20%20%20%3C%2Fg%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_1_2_%22%3E%20%20%3Cg%20id%3D%22SYMBOL_VER_2_4_%22%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22SYMBOL_VER_2-1-1_1_%22%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22SYMBOL_VER_2-2-1_1_%22%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22SYMBOL_VER_2-3-1_4_%22%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22New_Symbol_1_%22%3E%20%20%20%3Cg%20id%3D%22SYMBOL_VER_2-3-1_3_%22%3E%20%20%20%3C%2Fg%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22New_Symbol%22%3E%20%20%20%3Cg%20id%3D%22SYMBOL_VER_2-3-1_1_%22%3E%20%20%20%3C%2Fg%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_2_2_%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_4_2_%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_3_2_%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_3_1_%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_1-1-1_1_%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_1-1-1%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_1-1-1_2_2_%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_1-1-1_2%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_1-1-1_2_1_%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22Symbol_-_Original_7_%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22Symbol_-_Original_8_%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_2-1-1%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_2-2-1%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_2-3-1%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_5-1_1_%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_5-1%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_5-2_1_%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_5-2%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22Symbol_-_Monochromatic_1_%22%3E%20%20%3Cg%20id%3D%22_x33__4_%22%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

var BaseLogo = "data:image/svg+xml,%3Csvg%20width%3D%2228%22%20height%3D%2228%22%20viewBox%3D%220%200%2028%2028%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%2014C0%206.26801%206.26801%200%2014%200V0C21.732%200%2028%206.26801%2028%2014V14C28%2021.732%2021.732%2028%2014%2028V28C6.26801%2028%200%2021.732%200%2014V14Z%22%20fill%3D%22%230052FF%22%2F%3E%3Cg%20clip-path%3D%22url%28%23clip0_13924_33076%29%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M23.3332%2014.0003C23.3332%2019.155%2019.1472%2023.3337%2013.9836%2023.3337C9.08459%2023.3337%205.06565%2019.5724%204.6665%2014.7849H17.0245V13.2158H4.6665C5.06565%208.42825%209.08459%204.66699%2013.9836%204.66699C19.1472%204.66699%2023.3332%208.84566%2023.3332%2014.0003Z%22%20fill%3D%22white%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3CclipPath%20id%3D%22clip0_13924_33076%22%3E%3Crect%20width%3D%2218.6667%22%20height%3D%2218.6667%22%20fill%3D%22white%22%20transform%3D%22translate%284.66675%204.66699%29%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fsvg%3E";

var BnbLogo = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%202496%202496%22%20style%3D%22enable-background%3Anew%200%200%202496%202496%3B%22%20xml%3Aspace%3D%22preserve%22%3E%20%3Cg%3E%20%20%3Cpath%20style%3D%22fill-rule%3Aevenodd%3Bclip-rule%3Aevenodd%3Bfill%3A%23F0B90B%3B%22%20d%3D%22M1248%2C0c689.3%2C0%2C1248%2C558.7%2C1248%2C1248s-558.7%2C1248-1248%2C1248%20%20S0%2C1937.3%2C0%2C1248S558.7%2C0%2C1248%2C0L1248%2C0z%22%20%2F%3E%20%20%3Cpath%20style%3D%22fill%3A%23FFFFFF%3B%22%20d%3D%22M685.9%2C1248l0.9%2C330l280.4%2C165v193.2l-444.5-260.7v-524L685.9%2C1248L685.9%2C1248z%20M685.9%2C918v192.3%20%20l-163.3-96.6V821.4l163.3-96.6l164.1%2C96.6L685.9%2C918L685.9%2C918z%20M1084.3%2C821.4l163.3-96.6l164.1%2C96.6L1247.6%2C918L1084.3%2C821.4%20%20L1084.3%2C821.4z%22%20%2F%3E%20%20%3Cpath%20style%3D%22fill%3A%23FFFFFF%3B%22%20d%3D%22M803.9%2C1509.6v-193.2l163.3%2C96.6v192.3L803.9%2C1509.6L803.9%2C1509.6z%20M1084.3%2C1812.2l163.3%2C96.6%20%20l164.1-96.6v192.3l-164.1%2C96.6l-163.3-96.6V1812.2L1084.3%2C1812.2z%20M1645.9%2C821.4l163.3-96.6l164.1%2C96.6v192.3l-164.1%2C96.6V918%20%20L1645.9%2C821.4L1645.9%2C821.4L1645.9%2C821.4z%20M1809.2%2C1578l0.9-330l163.3-96.6v524l-444.5%2C260.7v-193.2L1809.2%2C1578L1809.2%2C1578%20%20L1809.2%2C1578z%22%20%2F%3E%20%20%3Cpolygon%20style%3D%22fill%3A%23FFFFFF%3B%22%20points%3D%221692.1%2C1509.6%201528.8%2C1605.3%201528.8%2C1413%201692.1%2C1316.4%201692.1%2C1509.6%20%20%22%20%2F%3E%20%20%3Cpath%20style%3D%22fill%3A%23FFFFFF%3B%22%20d%3D%22M1692.1%2C986.4l0.9%2C193.2l-281.2%2C165v330.8l-163.3%2C95.7l-163.3-95.7v-330.8l-281.2-165V986.4%20%20L968%2C889.8l279.5%2C165.8l281.2-165.8l164.1%2C96.6H1692.1L1692.1%2C986.4z%20M803.9%2C656.5l443.7-261.6l444.5%2C261.6l-163.3%2C96.6%20%20l-281.2-165.8L967.2%2C753.1L803.9%2C656.5L803.9%2C656.5z%22%20%2F%3E%20%3C%2Fg%3E%3C%2Fsvg%3E";

var CeloLogo = "data:image/svg+xml,%3Csvg%20id%3D%22Celo_Rings%22%20data-name%3D%22Celo%20Rings%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20950%20950%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill%3A%23fbcc5c%3B%7D.cls-2%7Bfill%3A%2335d07f%3B%7D.cls-3%7Bfill%3A%235ea33b%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Ctitle%3EArtboard%201%3C%2Ftitle%3E%3Cpath%20id%3D%22Bottom_Ring%22%20data-name%3D%22Bottom%20Ring%22%20class%3D%22cls-1%22%20d%3D%22M375%2C850c151.88%2C0%2C275-123.12%2C275-275S526.88%2C300%2C375%2C300%2C100%2C423.12%2C100%2C575%2C223.12%2C850%2C375%2C850Zm0%2C100C167.9%2C950%2C0%2C782.1%2C0%2C575S167.9%2C200%2C375%2C200%2C750%2C367.9%2C750%2C575%2C582.1%2C950%2C375%2C950Z%22%2F%3E%3Cpath%20id%3D%22Top_Ring%22%20data-name%3D%22Top%20Ring%22%20class%3D%22cls-2%22%20d%3D%22M575%2C650c151.88%2C0%2C275-123.12%2C275-275S726.88%2C100%2C575%2C100%2C300%2C223.12%2C300%2C375%2C423.12%2C650%2C575%2C650Zm0%2C100c-207.1%2C0-375-167.9-375-375S367.9%2C0%2C575%2C0%2C950%2C167.9%2C950%2C375%2C782.1%2C750%2C575%2C750Z%22%2F%3E%3Cpath%20id%3D%22Rings_Overlap%22%20data-name%3D%22Rings%20Overlap%22%20class%3D%22cls-3%22%20d%3D%22M587.39%2C750a274.38%2C274.38%2C0%2C0%2C0%2C54.55-108.06A274.36%2C274.36%2C0%2C0%2C0%2C750%2C587.4a373.63%2C373.63%2C0%2C0%2C1-29.16%2C133.45A373.62%2C373.62%2C0%2C0%2C1%2C587.39%2C750ZM308.06%2C308.06A274.36%2C274.36%2C0%2C0%2C0%2C200%2C362.6a373.63%2C373.63%2C0%2C0%2C1%2C29.16-133.45A373.62%2C373.62%2C0%2C0%2C1%2C362.61%2C200%2C274.38%2C274.38%2C0%2C0%2C0%2C308.06%2C308.06Z%22%2F%3E%3C%2Fsvg%3E";

var optimismLogoUrl = "data:image/svg+xml,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20viewBox%3D%220%200%20500%20500%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ccircle%20cx%3D%22250%22%20cy%3D%22250%22%20r%3D%22250%22%20fill%3D%22%23FF0420%22%2F%3E%3Cpath%20d%3D%22M177.133%20316.446C162.247%20316.446%20150.051%20312.943%20140.544%20305.938C131.162%20298.808%20126.471%20288.676%20126.471%20275.541C126.471%20272.789%20126.784%20269.411%20127.409%20265.408C129.036%20256.402%20131.35%20245.581%20134.352%20232.947C142.858%20198.547%20164.812%20181.347%20200.213%20181.347C209.845%20181.347%20218.476%20182.973%20226.107%20186.225C233.738%20189.352%20239.742%20194.106%20244.12%20200.486C248.498%20206.74%20250.688%20214.246%20250.688%20223.002C250.688%20225.629%20250.375%20228.944%20249.749%20232.947C247.873%20244.08%20245.621%20254.901%20242.994%20265.408C238.616%20282.546%20231.048%20295.368%20220.29%20303.874C209.532%20312.255%20195.147%20316.446%20177.133%20316.446ZM179.76%20289.426C186.766%20289.426%20192.707%20287.362%20197.586%20283.234C202.59%20279.106%20206.155%20272.789%20208.281%20264.283C211.158%20252.524%20213.348%20242.266%20214.849%20233.51C215.349%20230.883%20215.599%20228.194%20215.599%20225.441C215.599%20214.058%20209.657%20208.366%20197.774%20208.366C190.768%20208.366%20184.764%20210.43%20179.76%20214.558C174.882%20218.687%20171.379%20225.004%20169.253%20233.51C167.001%20241.891%20164.749%20252.149%20162.498%20264.283C161.997%20266.784%20161.747%20269.411%20161.747%20272.163C161.747%20283.672%20167.752%20289.426%20179.76%20289.426Z%22%20fill%3D%22white%22%2F%3E%3Cpath%20d%3D%22M259.303%20314.57C257.927%20314.57%20256.863%20314.132%20256.113%20313.256C255.487%20312.255%20255.3%20311.13%20255.55%20309.879L281.444%20187.914C281.694%20186.538%20282.382%20185.412%20283.508%20184.536C284.634%20183.661%20285.822%20183.223%20287.073%20183.223H336.985C350.87%20183.223%20362.003%20186.1%20370.384%20191.854C378.891%20197.609%20383.144%20205.927%20383.144%20216.81C383.144%20219.937%20382.769%20223.19%20382.018%20226.567C378.891%20240.953%20372.574%20251.586%20363.067%20258.466C353.685%20265.346%20340.8%20268.786%20324.413%20268.786H299.082L290.451%20309.879C290.2%20311.255%20289.512%20312.38%20288.387%20313.256C287.261%20314.132%20286.072%20314.57%20284.822%20314.57H259.303ZM325.727%20242.892C330.98%20242.892%20335.546%20241.453%20339.424%20238.576C343.427%20235.699%20346.054%20231.571%20347.305%20226.192C347.68%20224.065%20347.868%20222.189%20347.868%20220.563C347.868%20216.935%20346.805%20214.183%20344.678%20212.307C342.551%20210.305%20338.924%20209.305%20333.795%20209.305H311.278L304.148%20242.892H325.727Z%22%20fill%3D%22white%22%2F%3E%3C%2Fsvg%3E";

var polygonMaticLogo = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20viewBox%3D%220%200%2038.4%2033.5%22%20style%3D%22enable-background%3Anew%200%200%2038.4%2033.5%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%20.st0%7Bfill%3A%238247E5%3B%7D%3C%2Fstyle%3E%3Cg%3E%20%3Cpath%20class%3D%22st0%22%20d%3D%22M29%2C10.2c-0.7-0.4-1.6-0.4-2.4%2C0L21%2C13.5l-3.8%2C2.1l-5.5%2C3.3c-0.7%2C0.4-1.6%2C0.4-2.4%2C0L5%2C16.3%20%20c-0.7-0.4-1.2-1.2-1.2-2.1v-5c0-0.8%2C0.4-1.6%2C1.2-2.1l4.3-2.5c0.7-0.4%2C1.6-0.4%2C2.4%2C0L16%2C7.2c0.7%2C0.4%2C1.2%2C1.2%2C1.2%2C2.1v3.3l3.8-2.2V7%20%20c0-0.8-0.4-1.6-1.2-2.1l-8-4.7c-0.7-0.4-1.6-0.4-2.4%2C0L1.2%2C5C0.4%2C5.4%2C0%2C6.2%2C0%2C7v9.4c0%2C0.8%2C0.4%2C1.6%2C1.2%2C2.1l8.1%2C4.7%20%20c0.7%2C0.4%2C1.6%2C0.4%2C2.4%2C0l5.5-3.2l3.8-2.2l5.5-3.2c0.7-0.4%2C1.6-0.4%2C2.4%2C0l4.3%2C2.5c0.7%2C0.4%2C1.2%2C1.2%2C1.2%2C2.1v5c0%2C0.8-0.4%2C1.6-1.2%2C2.1%20%20L29%2C28.8c-0.7%2C0.4-1.6%2C0.4-2.4%2C0l-4.3-2.5c-0.7-0.4-1.2-1.2-1.2-2.1V21l-3.8%2C2.2v3.3c0%2C0.8%2C0.4%2C1.6%2C1.2%2C2.1l8.1%2C4.7%20%20c0.7%2C0.4%2C1.6%2C0.4%2C2.4%2C0l8.1-4.7c0.7-0.4%2C1.2-1.2%2C1.2-2.1V17c0-0.8-0.4-1.6-1.2-2.1L29%2C10.2z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E";

var _CHAIN_INFO;
var NetworkType;
(function (NetworkType) {
  NetworkType[NetworkType["L1"] = 0] = "L1";
  NetworkType[NetworkType["L2"] = 1] = "L2";
})(NetworkType || (NetworkType = {}));
var CHAIN_INFO = (_CHAIN_INFO = {}, _defineProperty(_CHAIN_INFO, SupportedChainId.MAINNET, {
  networkType: NetworkType.L1,
  docs: 'https://docs.uniswap.org/',
  explorer: 'https://etherscan.io/',
  infoLink: 'https://info.uniswap.org/#/',
  label: 'Ethereum',
  logoUrl: EthereumLogo,
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18
  },
  color: '#627EEA'
}), _defineProperty(_CHAIN_INFO, SupportedChainId.RINKEBY, {
  networkType: NetworkType.L1,
  docs: 'https://docs.uniswap.org/',
  explorer: 'https://rinkeby.etherscan.io/',
  infoLink: 'https://info.uniswap.org/#/',
  label: 'Rinkeby',
  logoUrl: EthereumLogo,
  nativeCurrency: {
    name: 'Rinkeby Ether',
    symbol: 'rETH',
    decimals: 18
  },
  color: '#FB118E'
}), _defineProperty(_CHAIN_INFO, SupportedChainId.ROPSTEN, {
  networkType: NetworkType.L1,
  docs: 'https://docs.uniswap.org/',
  explorer: 'https://ropsten.etherscan.io/',
  infoLink: 'https://info.uniswap.org/#/',
  label: 'Ropsten',
  logoUrl: EthereumLogo,
  nativeCurrency: {
    name: 'Ropsten Ether',
    symbol: 'ropETH',
    decimals: 18
  },
  color: '#A08116'
}), _defineProperty(_CHAIN_INFO, SupportedChainId.KOVAN, {
  networkType: NetworkType.L1,
  docs: 'https://docs.uniswap.org/',
  explorer: 'https://kovan.etherscan.io/',
  infoLink: 'https://info.uniswap.org/#/',
  label: 'Kovan',
  logoUrl: EthereumLogo,
  nativeCurrency: {
    name: 'Kovan Ether',
    symbol: 'kovETH',
    decimals: 18
  },
  color: '#FF0420'
}), _defineProperty(_CHAIN_INFO, SupportedChainId.GOERLI, {
  networkType: NetworkType.L1,
  docs: 'https://docs.uniswap.org/',
  explorer: 'https://goerli.etherscan.io/',
  infoLink: 'https://info.uniswap.org/#/',
  label: 'Görli',
  logoUrl: EthereumLogo,
  nativeCurrency: {
    name: 'Görli Ether',
    symbol: 'görETH',
    decimals: 18
  },
  color: '#209853'
}), _defineProperty(_CHAIN_INFO, SupportedChainId.OPTIMISM, {
  networkType: NetworkType.L2,
  blockWaitMsBeforeWarning: 1500000,
  bridge: 'https://app.optimism.io/bridge',
  docs: 'https://optimism.io/',
  explorer: 'https://optimistic.etherscan.io/',
  infoLink: 'https://info.uniswap.org/#/optimism/',
  label: 'Optimism',
  logoUrl: optimismLogoUrl,
  statusPage: 'https://optimism.io/status',
  helpCenterUrl: 'https://help.uniswap.org/en/collections/3137778-uniswap-on-optimistic-ethereum-oξ',
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18
  },
  color: '#FF0420',
  backgroundColor: '#ff042029'
}), _defineProperty(_CHAIN_INFO, SupportedChainId.OPTIMISM_GOERLI, {
  networkType: NetworkType.L2,
  blockWaitMsBeforeWarning: 1500000,
  bridge: 'https://app.optimism.io/bridge',
  docs: 'https://optimism.io/',
  explorer: 'https://goerli-optimism.etherscan.io/',
  infoLink: 'https://info.uniswap.org/#/optimism/',
  safe: {
    label: 'Optimism Goerli Testnet',
    symbol: 'ETH'
  },
  label: 'Optimism Görli',
  logoUrl: optimismLogoUrl,
  statusPage: 'https://optimism.io/status',
  helpCenterUrl: 'https://help.uniswap.org/en/collections/3137778-uniswap-on-optimistic-ethereum-oξ',
  nativeCurrency: {
    name: 'Optimism Goerli Ether',
    symbol: 'görOpETH',
    decimals: 18
  },
  color: '#FF0420',
  backgroundColor: '#ff042029'
}), _defineProperty(_CHAIN_INFO, SupportedChainId.ARBITRUM_ONE, {
  networkType: NetworkType.L2,
  blockWaitMsBeforeWarning: 600000,
  bridge: 'https://bridge.arbitrum.io/',
  docs: 'https://offchainlabs.com/',
  explorer: 'https://arbiscan.io/',
  infoLink: 'https://info.uniswap.org/#/arbitrum',
  label: 'Arbitrum',
  logoUrl: arbitrumLogoUrl,
  helpCenterUrl: 'https://help.uniswap.org/en/collections/3137787-uniswap-on-arbitrum',
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18
  },
  color: '#28A0F0',
  backgroundColor: '#28a0f029'
}), _defineProperty(_CHAIN_INFO, SupportedChainId.ARBITRUM_RINKEBY, {
  networkType: NetworkType.L2,
  blockWaitMsBeforeWarning: 600000,
  bridge: 'https://bridge.arbitrum.io/',
  docs: 'https://offchainlabs.com/',
  explorer: 'https://rinkeby-explorer.arbitrum.io/',
  infoLink: 'https://info.uniswap.org/#/arbitrum/',
  label: 'Arbitrum Rinkeby',
  logoUrl: arbitrumLogoUrl,
  helpCenterUrl: 'https://help.uniswap.org/en/collections/3137787-uniswap-on-arbitrum',
  nativeCurrency: {
    name: 'Rinkeby Arbitrum Ether',
    symbol: 'rinkArbETH',
    decimals: 18
  },
  color: '#28A0F0',
  backgroundColor: '#28a0f029'
}), _defineProperty(_CHAIN_INFO, SupportedChainId.POLYGON, {
  networkType: NetworkType.L1,
  blockWaitMsBeforeWarning: 600000,
  bridge: 'https://wallet.polygon.technology/login?redirectTo=%2Fpolygon%2Fbridge',
  docs: 'https://polygon.io/',
  explorer: 'https://polygonscan.com/',
  infoLink: 'https://info.uniswap.org/#/polygon/',
  safe: {
    label: 'Polygon Mainnet'
  },
  label: 'Polygon',
  logoUrl: polygonMaticLogo,
  nativeCurrency: {
    name: 'Polygon Matic',
    symbol: 'MATIC',
    decimals: 18
  },
  color: '#A457FF',
  backgroundColor: '#a457ff29'
}), _defineProperty(_CHAIN_INFO, SupportedChainId.POLYGON_MUMBAI, {
  networkType: NetworkType.L1,
  blockWaitMsBeforeWarning: 600000,
  bridge: 'https://wallet.polygon.technology/login?redirectTo=%2Fpolygon%2Fbridge',
  docs: 'https://polygon.io/',
  explorer: 'https://mumbai.polygonscan.com/',
  infoLink: 'https://info.uniswap.org/#/polygon/',
  safe: {
    symbol: 'MATIC'
  },
  label: 'Polygon Mumbai',
  logoUrl: polygonMaticLogo,
  nativeCurrency: {
    name: 'Polygon Mumbai Matic',
    symbol: 'mMATIC',
    decimals: 18
  },
  color: '#A457FF',
  backgroundColor: '#a457ff29'
}), _defineProperty(_CHAIN_INFO, SupportedChainId.CELO, {
  networkType: NetworkType.L1,
  blockWaitMsBeforeWarning: 600000,
  bridge: 'https://www.portalbridge.com/#/transfer',
  docs: 'https://docs.celo.org/',
  explorer: 'https://celoscan.io/',
  infoLink: 'https://info.uniswap.org/#/celo',
  safe: {
    label: 'Celo Mainnet'
  },
  label: 'Celo',
  logoUrl: CeloLogo,
  nativeCurrency: {
    name: 'Celo',
    symbol: 'CELO',
    decimals: 18
  },
  color: '#35D07F',
  backgroundColor: '#34d07f1f'
}), _defineProperty(_CHAIN_INFO, SupportedChainId.CELO_ALFAJORES, {
  networkType: NetworkType.L1,
  blockWaitMsBeforeWarning: 600000,
  bridge: 'https://www.portalbridge.com/#/transfer',
  docs: 'https://docs.celo.org/',
  explorer: 'https://alfajores.celoscan.io/',
  infoLink: 'https://info.uniswap.org/#/celo',
  safe: {
    label: 'Celo Alfajores Testnet',
    symbol: 'CELO'
  },
  label: 'Celo Alfajores',
  logoUrl: CeloLogo,
  nativeCurrency: {
    name: 'Celo',
    symbol: 'aCELO',
    decimals: 18
  },
  color: '#35D07F',
  backgroundColor: '#34d07f1f'
}), _defineProperty(_CHAIN_INFO, SupportedChainId.BNB, {
  networkType: NetworkType.L1,
  blockWaitMsBeforeWarning: 600000,
  bridge: 'https://cbridge.celer.network/1/56',
  docs: 'https://docs.bnbchain.org/',
  explorer: 'https://bscscan.com/',
  infoLink: 'https://info.uniswap.org/#/bnb/',
  label: 'BNB Chain',
  logoUrl: BnbLogo,
  nativeCurrency: {
    name: 'BNB',
    symbol: 'BNB',
    decimals: 18
  },
  color: '#F0B90B',
  backgroundColor: '#F0B90B'
}), _defineProperty(_CHAIN_INFO, SupportedChainId.BASE, {
  networkType: NetworkType.L2,
  blockWaitMsBeforeWarning: 1500000,
  bridge: 'https://bridge.base.org/',
  docs: 'https://docs.base.org/',
  explorer: 'https://basescan.org/',
  infoLink: 'https://info.uniswap.org/#/base/',
  label: 'Base',
  logoUrl: BaseLogo,
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18
  },
  color: '#0152ff',
  backgroundColor: '#0152ff'
}), _CHAIN_INFO);
CHAIN_INFO[SupportedChainId.MAINNET];

// https://eips.ethereum.org/EIPS/eip-1193#provider-errors
var ErrorCode;
(function (ErrorCode) {
  ErrorCode[ErrorCode["USER_REJECTED_REQUEST"] = 4001] = "USER_REJECTED_REQUEST";
  ErrorCode[ErrorCode["UNAUTHORIZED"] = 4100] = "UNAUTHORIZED";
  ErrorCode[ErrorCode["UNSUPPORTED_METHOD"] = 4200] = "UNSUPPORTED_METHOD";
  ErrorCode[ErrorCode["DISCONNECTED"] = 4900] = "DISCONNECTED";
  ErrorCode[ErrorCode["CHAIN_DISCONNECTED"] = 4901] = "CHAIN_DISCONNECTED";
  ErrorCode[ErrorCode["CHAIN_NOT_ADDED"] = 4902] = "CHAIN_NOT_ADDED";
})(ErrorCode || (ErrorCode = {}));

var _JSON_RPC_FALLBACK_EN;

/**
 * Fallback JSON RPC endpoints.
 * These are used if the integrator does not provide an endpoint, or if the endpoint does not work.
 *
 * MetaMask allows switching to any URL, but displays a warning if it is not on the "Safe" list:
 * https://github.com/MetaMask/metamask-mobile/blob/bdb7f37c90e4fc923881a07fca38d4e77c73a579/app/core/RPCMethods/wallet_addEthereumChain.js#L228-L235
 * https://chainid.network/chains.json
 *
 * These "Safe" URLs are listed first, followed by other fallback URLs, which are taken from chainlist.org.
 */
var JSON_RPC_FALLBACK_ENDPOINTS = (_JSON_RPC_FALLBACK_EN = {}, _defineProperty(_JSON_RPC_FALLBACK_EN, SupportedChainId.MAINNET, [
// "Safe" URLs
'https://cloudflare-eth.com',
// "Fallback" URLs
'https://rpc.ankr.com/eth', 'https://eth-mainnet.public.blastapi.io']), _defineProperty(_JSON_RPC_FALLBACK_EN, SupportedChainId.ROPSTEN, [
// "Fallback" URLs
'https://rpc.ankr.com/eth_ropsten']), _defineProperty(_JSON_RPC_FALLBACK_EN, SupportedChainId.RINKEBY, [
// "Fallback" URLs
'https://rinkeby-light.eth.linkpool.io/']), _defineProperty(_JSON_RPC_FALLBACK_EN, SupportedChainId.GOERLI, [
// "Safe" URLs
'https://rpc.goerli.mudit.blog/',
// "Fallback" URLs
'https://rpc.ankr.com/eth_goerli']), _defineProperty(_JSON_RPC_FALLBACK_EN, SupportedChainId.KOVAN, [
// "Fallback" URLs
'https://eth-kovan.public.blastapi.io']), _defineProperty(_JSON_RPC_FALLBACK_EN, SupportedChainId.POLYGON, [
// "Safe" URLs
'https://polygon-rpc.com/']), _defineProperty(_JSON_RPC_FALLBACK_EN, SupportedChainId.POLYGON_MUMBAI, [
// "Safe" URLs
'https://matic-mumbai.chainstacklabs.com', 'https://rpc-mumbai.maticvigil.com', 'https://matic-testnet-archive-rpc.bwarelabs.com']), _defineProperty(_JSON_RPC_FALLBACK_EN, SupportedChainId.ARBITRUM_ONE, [
// "Safe" URLs
'https://arb1.arbitrum.io/rpc',
// "Fallback" URLs
'https://arbitrum.public-rpc.com']), _defineProperty(_JSON_RPC_FALLBACK_EN, SupportedChainId.ARBITRUM_RINKEBY, [
// "Safe" URLs
'https://rinkeby.arbitrum.io/rpc']), _defineProperty(_JSON_RPC_FALLBACK_EN, SupportedChainId.OPTIMISM, [
// "Safe" URLs
'https://mainnet.optimism.io/',
// "Fallback" URLs
'https://rpc.ankr.com/optimism']), _defineProperty(_JSON_RPC_FALLBACK_EN, SupportedChainId.OPTIMISM_GOERLI, [
// "Safe" URLs
'https://goerli.optimism.io']), _defineProperty(_JSON_RPC_FALLBACK_EN, SupportedChainId.CELO, [
// "Safe" URLs
'https://forno.celo.org']), _defineProperty(_JSON_RPC_FALLBACK_EN, SupportedChainId.CELO_ALFAJORES, [
// "Safe" URLs
'https://alfajores-forno.celo-testnet.org']), _defineProperty(_JSON_RPC_FALLBACK_EN, SupportedChainId.BNB, [
// "Safe" URLs
'https://endpoints.omniatech.io/v1/bsc/mainnet/public', 'https://bsc-mainnet.gateway.pokt.network/v1/lb/6136201a7bad1500343e248d', 'https://1rpc.io/bnb', 'https://bsc-dataseed3.binance.org', 'https://bsc-dataseed2.defibit.io', 'https://bsc-dataseed1.ninicoin.io', 'https://binance.nodereal.io', 'https://bsc-dataseed4.defibit.io', 'https://rpc.ankr.com/bsc']), _defineProperty(_JSON_RPC_FALLBACK_EN, SupportedChainId.BASE, [
// "Safe" URLs
'https://mainnet.base.org', 'https://base.gateway.tenderly.co', 'https://base.publicnode.com',
// "Fallback" URLs
'https://1rpc.io/base', 'https://base.meowrpc.com']), _JSON_RPC_FALLBACK_EN);

var _jsxFileName$c = "D:\\Gozillapad\\widgets\\src\\hooks\\web3\\useJsonRpcUrlsMap.tsx";
var JsonRpcUrlMapContext = /*#__PURE__*/createContext(undefined);
function Provider$4(_ref) {
  var jsonRpcMap = _ref.jsonRpcMap,
    children = _ref.children;
  return /*#__PURE__*/jsxDEV(JsonRpcUrlMapContext.Provider, {
    value: jsonRpcMap,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName$c,
    lineNumber: 11,
    columnNumber: 10
  }, this);
}
function toJsonRpcMap(getChainConnections) {
  var _ref2;
  return _ref2 = {}, _defineProperty(_ref2, SupportedChainId.MAINNET, getChainConnections(SupportedChainId.MAINNET)), _defineProperty(_ref2, SupportedChainId.ROPSTEN, getChainConnections(SupportedChainId.ROPSTEN)), _defineProperty(_ref2, SupportedChainId.RINKEBY, getChainConnections(SupportedChainId.RINKEBY)), _defineProperty(_ref2, SupportedChainId.GOERLI, getChainConnections(SupportedChainId.GOERLI)), _defineProperty(_ref2, SupportedChainId.KOVAN, getChainConnections(SupportedChainId.KOVAN)), _defineProperty(_ref2, SupportedChainId.POLYGON, getChainConnections(SupportedChainId.POLYGON)), _defineProperty(_ref2, SupportedChainId.POLYGON_MUMBAI, getChainConnections(SupportedChainId.POLYGON_MUMBAI)), _defineProperty(_ref2, SupportedChainId.ARBITRUM_ONE, getChainConnections(SupportedChainId.ARBITRUM_ONE)), _defineProperty(_ref2, SupportedChainId.ARBITRUM_RINKEBY, getChainConnections(SupportedChainId.ARBITRUM_RINKEBY)), _defineProperty(_ref2, SupportedChainId.OPTIMISM, getChainConnections(SupportedChainId.OPTIMISM)), _defineProperty(_ref2, SupportedChainId.OPTIMISM_GOERLI, getChainConnections(SupportedChainId.OPTIMISM_GOERLI)), _defineProperty(_ref2, SupportedChainId.CELO, getChainConnections(SupportedChainId.CELO)), _defineProperty(_ref2, SupportedChainId.CELO_ALFAJORES, getChainConnections(SupportedChainId.CELO_ALFAJORES)), _defineProperty(_ref2, SupportedChainId.BNB, getChainConnections(SupportedChainId.BNB)), _defineProperty(_ref2, SupportedChainId.BASE, getChainConnections(SupportedChainId.BASE)), _ref2;
}
function getChainConnections(connectionMap, chainId) {
  var _filter;
  var value = connectionMap === null || connectionMap === void 0 ? void 0 : connectionMap[chainId];
  return (_filter = (Array.isArray(value) ? value : [value]).filter(function (value) {
    return Boolean(value);
  })).concat.apply(_filter, _toConsumableArray(JSON_RPC_FALLBACK_ENDPOINTS[chainId]));
}
function toJsonRpcConnectionMap(connectionMap) {
  function getJsonRpcProvider(chainId) {
    var _getChainConnections = getChainConnections(connectionMap, chainId),
      _getChainConnections2 = _slicedToArray(_getChainConnections, 1),
      connection = _getChainConnections2[0];
    return JsonRpcProvider.isProvider(connection) ? connection : new StaticJsonRpcProvider(connection, Number(chainId));
  }
  return toJsonRpcMap(getJsonRpcProvider);
}
function toJsonRpcUrlMap(connectionMap) {
  function getJsonRpcUrl(chainId) {
    var _getChainConnections3 = getChainConnections(connectionMap, chainId),
      _getChainConnections4 = _slicedToArray(_getChainConnections3, 1),
      connection = _getChainConnections4[0];
    return JsonRpcProvider.isProvider(connection) ? connection.connection.url : connection;
  }
  return toJsonRpcMap(getJsonRpcUrl);
}

var _jsxFileName$b = "D:\\Gozillapad\\widgets\\src\\hooks\\web3\\useConnectors.tsx";
var ConnectorsContext = /*#__PURE__*/createContext(null);
function Provider$3(_ref) {
  var connectors = _ref.connectors,
    children = _ref.children;
  var _useWeb3React = useWeb3React(),
    chainId = _useWeb3React.chainId,
    connector = _useWeb3React.connector;
  // The network chainId must be kept synchronized to avoid a loop when disconnecting and for a better UX.
  useEffect(function () {
    if (connector !== connectors.network) {
      try {
        connectors.network.activate(chainId);
      } catch (e) {
        // Unknown chains (eg hardhat) will fail to connect, and should not crash
      }
    }
  }, [chainId, connector, connectors.network]);
  return /*#__PURE__*/jsxDEV(ConnectorsContext.Provider, {
    value: connectors,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName$b,
    lineNumber: 34,
    columnNumber: 10
  }, this);
}

/** Defined by EIP-3085. */

/**
 * An integration hook called when the user tries to switch chains.
 * If the hook returns a Promise, it is assumed the integrator is attempting to switch the chain, and no further attempts will be made.
 * If that Promise rejects, the error will be ignored so as not to crash the widget.
 */

var onSwitchChainAtom = atom(undefined);

// If set, allows integrator to add behavior when 'Connect wallet to swap' button is clicked
var onConnectWalletClickAtom = atom(undefined);

function useSyncWidgetEventHandlers(_ref) {
  var onConnectWalletClick = _ref.onConnectWalletClick,
    onSwitchChain = _ref.onSwitchChain;
  var setOnConnectWalletClick = useUpdateAtom(onConnectWalletClickAtom);
  useEffect(function () {
    setOnConnectWalletClick(function () {
      return onConnectWalletClick;
    });
  }, [onConnectWalletClick, setOnConnectWalletClick]);
  var setOnSwitchChain = useUpdateAtom(onSwitchChainAtom);
  useEffect(function () {
    setOnSwitchChain(function () {
      return onSwitchChain;
    });
  }, [onSwitchChain, setOnSwitchChain]);
}

var REGISTRAR_ABI = [{
  constant: true,
  inputs: [{
    name: 'node',
    type: 'bytes32'
  }],
  name: 'resolver',
  outputs: [{
    name: 'resolverAddress',
    type: 'address'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}];
var REGISTRAR_ADDRESS = '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e';
var RESOLVER_ABI = [{
  constant: true,
  inputs: [{
    internalType: 'bytes32',
    name: 'node',
    type: 'bytes32'
  }],
  name: 'contenthash',
  outputs: [{
    internalType: 'bytes',
    name: '',
    type: 'bytes'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}];

// cache the resolver contracts since most of them are the public resolver
function resolverContract(resolverAddress, provider) {
  return new Contract(resolverAddress, RESOLVER_ABI, provider);
}

/**
 * Fetches and decodes the result of an ENS contenthash lookup on mainnet to a URI
 * @param ensName to resolve
 * @param provider provider to use to fetch the data
 */
function resolveENSContentHash(_x, _x2) {
  return _resolveENSContentHash.apply(this, arguments);
}
function _resolveENSContentHash() {
  _resolveENSContentHash = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(ensName, provider) {
    var ensRegistrarContract, hash, resolverAddress;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ensRegistrarContract = new Contract(REGISTRAR_ADDRESS, REGISTRAR_ABI, provider);
            hash = namehash(ensName);
            _context.next = 4;
            return ensRegistrarContract.resolver(hash);
          case 4:
            resolverAddress = _context.sent;
            return _context.abrupt("return", resolverContract(resolverAddress, provider).contenthash(hash));
          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _resolveENSContentHash.apply(this, arguments);
}

/**
 * Given a URI that may be ipfs, ipns, http, https, ar, or data protocol, return the fetch-able http(s) URLs for the same content
 * @param uri to convert to fetch-able http url
 */
function uriToHttp(uri) {
  var _uri$match, _uri$match2, _uri$match3;
  var protocol = uri.split(':')[0].toLowerCase();
  switch (protocol) {
    case 'data':
      return [uri];
    case 'https':
      return [uri];
    case 'http':
      return ['https' + uri.substr(4), uri];
    case 'ipfs':
      var hash = (_uri$match = uri.match(/^ipfs:(\/\/)?(.*)$/i)) === null || _uri$match === void 0 ? void 0 : _uri$match[2];
      return ["https://cloudflare-ipfs.com/ipfs/".concat(hash, "/"), "https://ipfs.io/ipfs/".concat(hash, "/")];
    case 'ipns':
      var name = (_uri$match2 = uri.match(/^ipns:(\/\/)?(.*)$/i)) === null || _uri$match2 === void 0 ? void 0 : _uri$match2[2];
      return ["https://cloudflare-ipfs.com/ipns/".concat(name, "/"), "https://ipfs.io/ipns/".concat(name, "/")];
    case 'ar':
      var tx = (_uri$match3 = uri.match(/^ar:(\/\/)?(.*)$/i)) === null || _uri$match3 === void 0 ? void 0 : _uri$match3[2];
      return ["https://arweave.net/".concat(tx)];
    default:
      return [];
  }
}

// returns the checksummed address if the address is valid, otherwise returns false
function isAddress(value) {
  try {
    return getAddress(value);
  } catch (_unused) {
    return false;
  }
}

// account is not optional
function getSigner(provider, account) {
  return provider.getSigner(account).connectUnchecked();
}

// account is optional
function getProviderOrSigner(provider, account) {
  return account ? getSigner(provider, account) : provider;
}

// account is optional
function getContract(address, ABI, provider, account) {
  if (!isAddress(address) || address === AddressZero) {
    throw Error("Invalid 'address' parameter '".concat(address, "'."));
  }
  return new Contract(address, ABI, getProviderOrSigner(provider, account));
}

var MaticLogo = "data:image/svg+xml,%3Csvg%20width%3D%221024%22%20height%3D%221024%22%20viewBox%3D%220%200%201024%201024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ccircle%20cx%3D%22512%22%20cy%3D%22512%22%20r%3D%22512%22%20fill%3D%22%238247E5%22%2F%3E%3Cpath%20d%3D%22M681.469%20402.456C669.189%20395.312%20653.224%20395.312%20639.716%20402.456L543.928%20457.228L478.842%20492.949L383.055%20547.721C370.774%20554.865%20354.81%20554.865%20341.301%20547.721L265.162%20504.856C252.882%20497.712%20244.286%20484.614%20244.286%20470.325V385.786C244.286%20371.498%20251.654%20358.4%20265.162%20351.256L340.073%20309.581C352.353%20302.437%20368.318%20302.437%20381.827%20309.581L456.737%20351.256C469.018%20358.4%20477.614%20371.498%20477.614%20385.786V440.558L542.7%20403.646V348.874C542.7%20334.586%20535.332%20321.488%20521.824%20314.344L383.055%20235.758C370.774%20228.614%20354.81%20228.614%20341.301%20235.758L200.076%20314.344C186.567%20321.488%20179.199%20334.586%20179.199%20348.874V507.237C179.199%20521.525%20186.567%20534.623%20200.076%20541.767L341.301%20620.353C353.582%20627.498%20369.546%20627.498%20383.055%20620.353L478.842%20566.772L543.928%20529.86L639.716%20476.279C651.996%20469.135%20667.961%20469.135%20681.469%20476.279L756.38%20517.953C768.66%20525.098%20777.257%20538.195%20777.257%20552.484V637.023C777.257%20651.312%20769.888%20664.409%20756.38%20671.553L681.469%20714.419C669.189%20721.563%20653.224%20721.563%20639.716%20714.419L564.805%20672.744C552.525%20665.6%20543.928%20652.502%20543.928%20638.214V583.442L478.842%20620.353V675.125C478.842%20689.414%20486.21%20702.512%20499.719%20709.656L640.944%20788.242C653.224%20795.386%20669.189%20795.386%20682.697%20788.242L823.922%20709.656C836.203%20702.512%20844.799%20689.414%20844.799%20675.125V516.763C844.799%20502.474%20837.431%20489.377%20823.922%20482.232L681.469%20402.456Z%22%20fill%3D%22white%22%2F%3E%3C%2Fsvg%3E";

function chainIdToNetworkName(networkId) {
  switch (networkId) {
    case SupportedChainId.MAINNET:
      return 'ethereum';
    case SupportedChainId.ARBITRUM_ONE:
      return 'arbitrum';
    case SupportedChainId.OPTIMISM:
      return 'optimism';
    case SupportedChainId.POLYGON:
      return 'polygon';
    case SupportedChainId.CELO:
      return 'celo';
    case SupportedChainId.BNB:
      return 'smartchain';
    case SupportedChainId.BASE:
      return 'base';
    default:
      return 'ethereum';
  }
}
function getAssetsRepoURI(asset) {
  var networkName = chainIdToNetworkName(asset.chainId);
  if (!networkName) return;
  if (asset.isNative) return "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/".concat(networkName, "/info/logo.png");
  var checksummedAddress = isAddress(asset.address);
  return checksummedAddress ? "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/".concat(networkName, "/assets/").concat(checksummedAddress, "/logo.png") : undefined;
}
function getNativeLogoURI() {
  var chainId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : SupportedChainId.MAINNET;
  switch (chainId) {
    case SupportedChainId.POLYGON:
    case SupportedChainId.POLYGON_MUMBAI:
      return MaticLogo;
    case SupportedChainId.CELO:
    case SupportedChainId.CELO_ALFAJORES:
      return CeloLogo;
    case SupportedChainId.BNB:
      return BnbLogo;
    case SupportedChainId.BASE:
      return BaseLogo;
    default:
      return EthereumLogo;
  }
}

function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var UriSrc = /*#__PURE__*/function () {
  function UriSrc(uri) {
    _classCallCheck(this, UriSrc);
    _defineProperty(this, "parsedUri", null);
    this.key = uri;
    this.unparsedUri = uri;
  }
  _createClass(UriSrc, [{
    key: "getUri",
    value: function getUri() {
      // Lazy-parse the address
      if (this.parsedUri === null) {
        var _uriToHttp = uriToHttp(this.unparsedUri);
        var _uriToHttp2 = _slicedToArray(_uriToHttp, 2);
        this.parsedUri = _uriToHttp2[0];
        this.alternateUri = _uriToHttp2[1];
      }
      return this.parsedUri;
    }
  }, {
    key: "useAlternateUri",
    value: function useAlternateUri() {
      this.parsedUri = this.alternateUri;
      delete this.alternateUri;
      return this.parsedUri;
    }
  }]);
  return UriSrc;
}();
var CoingeckoSrc = /*#__PURE__*/function (_UriSrc) {
  _inherits(CoingeckoSrc, _UriSrc);
  var _super = _createSuper$4(CoingeckoSrc);
  function CoingeckoSrc() {
    _classCallCheck(this, CoingeckoSrc);
    return _super.apply(this, arguments);
  }
  _createClass(CoingeckoSrc, [{
    key: "getUri",
    value: function getUri() {
      // Lazy-parse coingecko Url
      if (this.parsedUri === null) {
        this.parsedUri = this.unparsedUri.replace(/small|thumb/g, 'large');
      }
      return this.parsedUri;
    }
  }]);
  return CoingeckoSrc;
}(UriSrc);
var AssetsRepoSrc = /*#__PURE__*/function () {
  function AssetsRepoSrc(asset) {
    var _asset$address;
    _classCallCheck(this, AssetsRepoSrc);
    _defineProperty(this, "uri", null);
    this.key = "UNI-AR-".concat((_asset$address = asset.address) === null || _asset$address === void 0 ? void 0 : _asset$address.toLowerCase(), ":").concat(asset.chainId);
    this.asset = asset;
  }
  _createClass(AssetsRepoSrc, [{
    key: "getUri",
    value: function getUri() {
      // Lazy-builds assets repo address since it uses checksum
      if (this.uri === null) {
        this.uri = getAssetsRepoURI(this.asset);
      }
      return this.uri;
    }
  }]);
  return AssetsRepoSrc;
}();
var getKey = function getKey(_ref) {
  var address = _ref.address,
    chainId = _ref.chainId;
  return "".concat(address === null || address === void 0 ? void 0 : address.toLowerCase(), ":").concat(chainId);
};

/** Contains all sources for a specific asset */
var LogoStore = /*#__PURE__*/function () {
  function LogoStore(asset) {
    _classCallCheck(this, LogoStore);
    _defineProperty(this, "srcs", {});
    _defineProperty(this, "keys", []);
    if (asset.isNative) this.addUri(getNativeLogoURI(asset.chainId));
    this.addSrc(new AssetsRepoSrc(asset));
    if (asset.logoURI) this.addUri(asset.logoURI);
  }
  _createClass(LogoStore, [{
    key: "addSrc",
    value: function addSrc(newSrc) {
      if (this.srcs[newSrc.key]) return;
      this.srcs[newSrc.key] = newSrc;
      this.keys.push(newSrc.key);
    }
  }, {
    key: "addUri",
    value: function addUri(uri) {
      if (this.srcs[uri]) return;
      this.addSrc(uri.startsWith('https://assets.coingecko') ? new CoingeckoSrc(uri) : new UriSrc(uri));
    }

    /** Invalidates the current src and returns the new current source if available */
  }, {
    key: "invalidateSrc",
    value: function invalidateSrc() {
      var _currentSrc$useAltern;
      var currentSrc = this.getCurrent();
      if (!currentSrc) return;

      // Use a source's alternative uri if available before marking invalid
      if ((_currentSrc$useAltern = currentSrc.useAlternateUri) !== null && _currentSrc$useAltern !== void 0 && _currentSrc$useAltern.call(currentSrc)) {
        return currentSrc;
      } else {
        delete this.srcs[currentSrc.key];
        this.keys.shift();
        return this.getCurrent();
      }
    }
  }, {
    key: "getAllUris",
    value: function getAllUris() {
      var _this = this;
      return this.keys.map(function (key) {
        var _this$srcs$key;
        return (_this$srcs$key = _this.srcs[key]) === null || _this$srcs$key === void 0 ? void 0 : _this$srcs$key.getUri();
      }).filter(function (uri) {
        return !!uri;
      });
    }
  }, {
    key: "getCurrent",
    value: function getCurrent() {
      if (this.keys.length === 0) return;
      return this.srcs[this.keys[0]];
    }
  }]);
  return LogoStore;
}();
var LogoTable = /*#__PURE__*/function () {
  function LogoTable() {
    _classCallCheck(this, LogoTable);
    _defineProperty(this, "map", {});
    _defineProperty(this, "initialized", false);
    if (!!LogoTable.instance) throw new Error('Cannot instantiate multiple multiple logo tables');
  }

  /** Adds a new asset to the table and returns the newly added entry  */
  _createClass(LogoTable, [{
    key: "addToTable",
    value: function addToTable(asset) {
      var key = getKey(asset);
      var currentEntry = this.map[key];
      if (currentEntry) {
        asset.logoURI && currentEntry.addUri(asset.logoURI);
      } else {
        currentEntry = new LogoStore(asset);
        this.map[key] = currentEntry;
      }
      return currentEntry;
    }
  }, {
    key: "initialize",
    value: function initialize(tokens) {
      var _this2 = this;
      tokens.forEach(function (asset) {
        return _this2.addToTable(asset);
      });
      this.initialized = true;
    }
  }, {
    key: "isInitialized",
    value: function isInitialized() {
      return this.initialized;
    }
  }, {
    key: "getEntry",
    value: function getEntry(asset) {
      var _this$map$getKey;
      if (!asset) return undefined;
      return (_this$map$getKey = this.map[getKey(asset)]) !== null && _this$map$getKey !== void 0 ? _this$map$getKey : this.addToTable(asset);
    }
  }], [{
    key: "getInstance",
    value: /** Implements Singleton pattern to keep one source of logos */
    function getInstance() {
      if (!LogoTable.instance) {
        LogoTable.instance = new LogoTable();
      }
      return LogoTable.instance;
    }
  }]);
  return LogoTable;
}();

var table = LogoTable.getInstance();

/** An optional component to update table with logos as sources change */
function LogoUpdater(_ref) {
  var assets = _ref.assets;
  var isFirstRender = useRef(true);
  if (isFirstRender.current) {
    table.initialize(assets);
    isFirstRender.current = false;
  }
  useEffect(function () {
    table.initialize(assets);
  }, [assets]);
  return null;
}
function useLogos(currency) {
  return useMemo(function () {
    var _table$getEntry;
    return (_table$getEntry = table.getEntry(currency)) === null || _table$getEntry === void 0 ? void 0 : _table$getEntry.getAllUris();
  }, [currency]);
}
function useLogo(currency) {
  var _entry$getCurrent;
  var entry = useMemo(function () {
    return table.getEntry(currency);
  }, [currency]);
  var _useState = useState(entry === null || entry === void 0 ? void 0 : (_entry$getCurrent = entry.getCurrent()) === null || _entry$getCurrent === void 0 ? void 0 : _entry$getCurrent.getUri()),
    _useState2 = _slicedToArray(_useState, 2),
    src = _useState2[0],
    setSrc = _useState2[1];
  useEffect(function () {
    var _entry$getCurrent2;
    setSrc(entry === null || entry === void 0 ? void 0 : (_entry$getCurrent2 = entry.getCurrent()) === null || _entry$getCurrent2 === void 0 ? void 0 : _entry$getCurrent2.getUri());
  }, [currency, entry]);
  var invalidateSrc = useCallback(function () {
    var nextSrc = entry === null || entry === void 0 ? void 0 : entry.invalidateSrc();
    setSrc(nextSrc === null || nextSrc === void 0 ? void 0 : nextSrc.getUri());
  }, [entry]);
  return {
    src: src,
    invalidateSrc: invalidateSrc
  };
}

var _excluded = ["currency", "symbol", "backupImg", "size", "style"];
var _jsxFileName$a = "D:\\Gozillapad\\widgets\\src\\components\\Logo\\index.tsx";
function ownKeys$8(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$8(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$8(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$8(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var MissingImageLogo = /*#__PURE__*/_styled.div.withConfig({
  displayName: "Logo__MissingImageLogo",
  componentId: "sc-eh1803-0"
})(["--size:", ";background-color:", ";border-radius:100px;color:", ";font-size:calc(var(--size) / 3);font-weight:500;height:", ";line-height:", ";text-align:center;width:", ";"], function (_ref) {
  var size = _ref.size;
  return size !== null && size !== void 0 ? size : '24px';
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.interactive;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.primary;
}, function (_ref4) {
  var size = _ref4.size;
  return size !== null && size !== void 0 ? size : '24px';
}, function (_ref5) {
  var size = _ref5.size;
  return size !== null && size !== void 0 ? size : '24px';
}, function (_ref6) {
  var size = _ref6.size;
  return size !== null && size !== void 0 ? size : '24px';
});
var LogoImage = /*#__PURE__*/_styled.img.withConfig({
  displayName: "Logo__LogoImage",
  componentId: "sc-eh1803-1"
})(["background:radial-gradient(white 60%,#ffffff00 calc(70% + 1px));border-radius:50%;box-shadow:0 0 1px white;height:", ";width:", ";"], function (_ref7) {
  var size = _ref7.size;
  return size;
}, function (_ref8) {
  var size = _ref8.size;
  return size;
});

// TODO(cartcrom): add prop to optionally render an L2Icon w/ the logo
/**
 * Renders an image by prioritizing a list of sources, and then eventually a fallback triangle alert
 */
function Logo(_ref9) {
  var currency = _ref9.currency,
    symbol = _ref9.symbol;
    _ref9.backupImg;
    var _ref9$size = _ref9.size,
    size = _ref9$size === void 0 ? '24px' : _ref9$size,
    style = _ref9.style,
    rest = _objectWithoutProperties(_ref9, _excluded);
  var imageProps = _objectSpread$8({
    alt: "".concat(symbol !== null && symbol !== void 0 ? symbol : 'token', " logo"),
    size: size,
    style: style
  }, rest);
  var _useLogo = useLogo(currency),
    src = _useLogo.src,
    invalidateSrc = _useLogo.invalidateSrc;
  if (src) {
    return /*#__PURE__*/jsxDEV(LogoImage, _objectSpread$8(_objectSpread$8({}, imageProps), {}, {
      src: src,
      onError: invalidateSrc
    }), void 0, false, {
      fileName: _jsxFileName$a,
      lineNumber: 54,
      columnNumber: 12
    }, this);
  } else {
    return /*#__PURE__*/jsxDEV(MissingImageLogo, {
      size: size,
      children: symbol === null || symbol === void 0 ? void 0 : symbol.toUpperCase().replace('$', '').replace(/\s+/g, '').slice(0, 3)
    }, void 0, false, {
      fileName: _jsxFileName$a,
      lineNumber: 57,
      columnNumber: 7
    }, this);
  }
}

function hexToUint8Array(hex) {
  hex = hex.startsWith('0x') ? hex.substr(2) : hex;
  if (hex.length % 2 !== 0) throw new Error('hex must have length that is multiple of 2');
  var arr = new Uint8Array(hex.length / 2);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = parseInt(hex.substr(i * 2, 2), 16);
  }
  return arr;
}
var UTF_8_DECODER = new TextDecoder('utf-8');

/**
 * Returns the URI representation of the content hash for supported codecs
 * @param contenthash to decode
 */
function contenthashToUri(contenthash) {
  var data = hexToUint8Array(contenthash);
  var codec = getNameFromData(data);
  switch (codec) {
    case 'ipfs-ns':
      {
        var unprefixedData = rmPrefix(data);
        var cid = new CID(unprefixedData);
        return "ipfs://".concat(toB58String(cid.multihash));
      }
    case 'ipns-ns':
      {
        var _unprefixedData = rmPrefix(data);
        var _cid = new CID(_unprefixedData);
        var multihash = decode(_cid.multihash);
        if (multihash.name === 'identity') {
          return "ipns://".concat(UTF_8_DECODER.decode(multihash.digest).trim());
        } else {
          return "ipns://".concat(toB58String(_cid.multihash));
        }
      }
    default:
      throw new Error("Unrecognized codec: ".concat(codec));
  }
}

var ENS_NAME_REGEX = /^(([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\.)+)eth(\/.*)?$/;
function parseENSAddress(ensAddress) {
  var match = ensAddress.match(ENS_NAME_REGEX);
  if (!match) return undefined;
  return {
    ensName: "".concat(match[1].toLowerCase(), "eth"),
    ensPath: match[4]
  };
}

var ValidationSchema;
(function (ValidationSchema) {
  ValidationSchema["LIST"] = "list";
  ValidationSchema["TOKENS"] = "tokens";
})(ValidationSchema || (ValidationSchema = {}));
function getValidationErrors(validate) {
  var _validate$errors$map$, _validate$errors;
  return (_validate$errors$map$ = validate === null || validate === void 0 ? void 0 : (_validate$errors = validate.errors) === null || _validate$errors === void 0 ? void 0 : _validate$errors.map(function (error) {
    return [error.instancePath, error.message].filter(Boolean).join(' ');
  }).join('; ')) !== null && _validate$errors$map$ !== void 0 ? _validate$errors$map$ : 'unknown error';
}
function validate(_x, _x2) {
  return _validate.apply(this, arguments);
}
/**
 * Validates an array of tokens.
 * @param json the TokenInfo[] to validate
 */
function _validate() {
  _validate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(schema, data) {
    var validatorImport, _yield$Promise$all, _yield$Promise$all2, validatorModule, validator;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = schema;
            _context.next = _context.t0 === ValidationSchema.LIST ? 3 : _context.t0 === ValidationSchema.TOKENS ? 5 : 7;
            break;
          case 3:
            validatorImport = import('./validateTokenList-9cfa9fe4.js');
            return _context.abrupt("break", 9);
          case 5:
            validatorImport = import('./validateTokens-4b33204d.js');
            return _context.abrupt("break", 9);
          case 7:
            throw new Error('No validation function specified for schema');
          case 9:
            _context.next = 11;
            return Promise.all([import('ajv'), validatorImport]);
          case 11:
            _yield$Promise$all = _context.sent;
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
            validatorModule = _yield$Promise$all2[1];
            _context.next = 16;
            return validatorModule["default"];
          case 16:
            validator = _context.sent;
            if (!(validator !== null && validator !== void 0 && validator(data))) {
              _context.next = 19;
              break;
            }
            return _context.abrupt("return", data);
          case 19:
            throw new Error(getValidationErrors(validator));
          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _validate.apply(this, arguments);
}
function validateTokens(_x3) {
  return _validateTokens.apply(this, arguments);
}

/**
 * Validates a token list.
 * @param json the TokenList to validate
 */
function _validateTokens() {
  _validateTokens = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(json) {
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return validate(ValidationSchema.TOKENS, {
              tokens: json
            });
          case 3:
            return _context2.abrupt("return", json);
          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2["catch"](0);
            throw new Error("Tokens failed validation: ".concat(_context2.t0.message));
          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 6]]);
  }));
  return _validateTokens.apply(this, arguments);
}
function validateTokenList(_x4) {
  return _validateTokenList.apply(this, arguments);
}
function _validateTokenList() {
  _validateTokenList = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(json) {
    return _regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return validate(ValidationSchema.LIST, json);
          case 3:
            return _context3.abrupt("return", json);
          case 6:
            _context3.prev = 6;
            _context3.t0 = _context3["catch"](0);
            throw new Error("Token list failed validation: ".concat(_context3.t0.message));
          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 6]]);
  }));
  return _validateTokenList.apply(this, arguments);
}

var listCache = new Map();

/** Fetches and validates a token list. */
function fetchTokenList(_x, _x2) {
  return _fetchTokenList.apply(this, arguments);
}
function _fetchTokenList() {
  _fetchTokenList = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(listUrl, resolveENSContentHash) {
    var cached, urls, parsedENS, _parsedENS$ensPath, contentHashUri, message, translatedUri, _message, i, url, isLast, response, _message2, _message3, json, list;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cached = listCache === null || listCache === void 0 ? void 0 : listCache.get(listUrl); // avoid spurious re-fetches
            if (!cached) {
              _context.next = 3;
              break;
            }
            return _context.abrupt("return", cached);
          case 3:
            parsedENS = parseENSAddress(listUrl);
            if (!parsedENS) {
              _context.next = 28;
              break;
            }
            _context.prev = 5;
            _context.next = 8;
            return resolveENSContentHash(parsedENS.ensName);
          case 8:
            contentHashUri = _context.sent;
            _context.next = 16;
            break;
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](5);
            message = "failed to resolve ENS name: ".concat(parsedENS.ensName);
            console.debug(message, _context.t0);
            throw new Error(message);
          case 16:
            _context.prev = 16;
            translatedUri = contenthashToUri(contentHashUri);
            _context.next = 25;
            break;
          case 20:
            _context.prev = 20;
            _context.t1 = _context["catch"](16);
            _message = "failed to translate contenthash to URI: ".concat(contentHashUri);
            console.debug(_message, _context.t1);
            throw new Error(_message);
          case 25:
            urls = uriToHttp("".concat(translatedUri).concat((_parsedENS$ensPath = parsedENS.ensPath) !== null && _parsedENS$ensPath !== void 0 ? _parsedENS$ensPath : ''));
            _context.next = 29;
            break;
          case 28:
            urls = uriToHttp(listUrl);
          case 29:
            i = 0;
          case 30:
            if (!(i < urls.length)) {
              _context.next = 64;
              break;
            }
            url = urls[i];
            isLast = i === urls.length - 1;
            response = void 0;
            _context.prev = 34;
            _context.next = 37;
            return fetch(url, {
              credentials: 'omit'
            });
          case 37:
            response = _context.sent;
            _context.next = 47;
            break;
          case 40:
            _context.prev = 40;
            _context.t2 = _context["catch"](34);
            _message2 = "failed to fetch list: ".concat(listUrl);
            console.debug(_message2, _context.t2);
            if (!isLast) {
              _context.next = 46;
              break;
            }
            throw new Error(_message2);
          case 46:
            return _context.abrupt("continue", 61);
          case 47:
            if (response.ok) {
              _context.next = 53;
              break;
            }
            _message3 = "failed to fetch list: ".concat(listUrl);
            console.debug(_message3, response.statusText);
            if (!isLast) {
              _context.next = 52;
              break;
            }
            throw new Error(_message3);
          case 52:
            return _context.abrupt("continue", 61);
          case 53:
            _context.next = 55;
            return response.json();
          case 55:
            json = _context.sent;
            _context.next = 58;
            return validateTokenList(json);
          case 58:
            list = _context.sent;
            listCache === null || listCache === void 0 ? void 0 : listCache.set(listUrl, list);
            return _context.abrupt("return", list);
          case 61:
            i++;
            _context.next = 30;
            break;
          case 64:
            throw new Error('Unrecognized list URL protocol.');
          case 65:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[5, 11], [16, 20], [34, 40]]);
  }));
  return _fetchTokenList.apply(this, arguments);
}

function ownKeys$7(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$7(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$7(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$7(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * Token instances created from token info on a token list.
 */
var WrappedTokenInfo = /*#__PURE__*/function () {
  function WrappedTokenInfo(tokenInfo, list) {
    _classCallCheck(this, WrappedTokenInfo);
    _defineProperty(this, "isNative", false);
    _defineProperty(this, "isToken", true);
    _defineProperty(this, "_checksummedAddress", null);
    _defineProperty(this, "_tags", null);
    this.tokenInfo = tokenInfo;
    this.list = list;
  }
  _createClass(WrappedTokenInfo, [{
    key: "address",
    get: function get() {
      if (this._checksummedAddress) return this._checksummedAddress;
      var checksummedAddress = isAddress(this.tokenInfo.address);
      if (!checksummedAddress) throw new Error("Invalid token address: ".concat(this.tokenInfo.address));
      return this._checksummedAddress = checksummedAddress;
    }
  }, {
    key: "chainId",
    get: function get() {
      return this.tokenInfo.chainId;
    }
  }, {
    key: "decimals",
    get: function get() {
      return this.tokenInfo.decimals;
    }
  }, {
    key: "name",
    get: function get() {
      return this.tokenInfo.name;
    }
  }, {
    key: "symbol",
    get: function get() {
      return this.tokenInfo.symbol;
    }
  }, {
    key: "logoURI",
    get: function get() {
      return this.tokenInfo.logoURI;
    }
  }, {
    key: "tags",
    get: function get() {
      var _this$list;
      if (this._tags !== null) return this._tags;
      if (!this.tokenInfo.tags) return this._tags = [];
      var listTags = (_this$list = this.list) === null || _this$list === void 0 ? void 0 : _this$list.tags;
      if (!listTags) return this._tags = [];
      return this._tags = this.tokenInfo.tags.map(function (tagId) {
        return _objectSpread$7(_objectSpread$7({}, listTags[tagId]), {}, {
          id: tagId
        });
      });
    }
  }, {
    key: "equals",
    value: function equals(other) {
      return other.chainId === this.chainId && other.isToken && other.address.toLowerCase() === this.address.toLowerCase();
    }
  }, {
    key: "sortsBefore",
    value: function sortsBefore(other) {
      if (this.equals(other)) throw new Error('Addresses should not be equal');
      return this.address.toLowerCase() < other.address.toLowerCase();
    }
  }, {
    key: "wrapped",
    get: function get() {
      return this;
    }
  }]);
  return WrappedTokenInfo;
}();

var mapCache = typeof WeakMap !== 'undefined' ? new WeakMap() : null;
function tokensToChainTokenMap(tokens) {
  var cached = mapCache === null || mapCache === void 0 ? void 0 : mapCache.get(tokens);
  if (cached) return cached;
  var _ref = Array.isArray(tokens) ? [undefined, tokens] : [tokens, tokens.tokens],
    _ref2 = _slicedToArray(_ref, 2),
    list = _ref2[0],
    infos = _ref2[1];
  var map = infos.reduce(function (map, info) {
    var _map$token$chainId;
    var token = new WrappedTokenInfo(info, list);
    if (((_map$token$chainId = map[token.chainId]) === null || _map$token$chainId === void 0 ? void 0 : _map$token$chainId[token.address]) !== undefined) {
      console.warn("Duplicate token skipped: ".concat(token.address));
      return map;
    }
    if (!map[token.chainId]) {
      map[token.chainId] = {};
    }
    map[token.chainId][token.address] = {
      token: token,
      list: list
    };
    return map;
  }, {});
  mapCache === null || mapCache === void 0 ? void 0 : mapCache.set(tokens, map);
  return map;
}

var DEFAULT_NETWORKS = [SupportedChainId.MAINNET, SupportedChainId.ROPSTEN, SupportedChainId.RINKEBY, SupportedChainId.GOERLI, SupportedChainId.KOVAN];
function constructSameAddressMap(address) {
  var additionalNetworks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return DEFAULT_NETWORKS.concat(additionalNetworks).reduce(function (memo, chainId) {
    memo[chainId] = address;
    return memo;
  }, {});
}

var _objectSpread2$1, _objectSpread3, _ENS_REGISTRAR_ADDRES;
function ownKeys$6(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$6(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$6(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$6(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var UNI_ADDRESS = constructSameAddressMap('0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984');
var MULTICALL_ADDRESS = _objectSpread$6(_objectSpread$6({}, constructSameAddressMap('0x1F98415757620B543A52E61c46B32eB19261F984', [SupportedChainId.OPTIMISM_GOERLI, SupportedChainId.OPTIMISM, SupportedChainId.POLYGON_MUMBAI, SupportedChainId.POLYGON])), {}, (_objectSpread2$1 = {}, _defineProperty(_objectSpread2$1, SupportedChainId.ARBITRUM_ONE, '0xadF885960B47eA2CD9B55E6DAc6B42b7Cb2806dB'), _defineProperty(_objectSpread2$1, SupportedChainId.ARBITRUM_RINKEBY, '0xa501c031958F579dB7676fF1CE78AD305794d579'), _defineProperty(_objectSpread2$1, SupportedChainId.CELO, '0x633987602DE5C4F337e3DbF265303A1080324204'), _defineProperty(_objectSpread2$1, SupportedChainId.CELO_ALFAJORES, '0x633987602DE5C4F337e3DbF265303A1080324204'), _defineProperty(_objectSpread2$1, SupportedChainId.BASE, '0x091e99cb1C49331a94dD62755D168E941AbD0693'), _objectSpread2$1));
_objectSpread$6(_objectSpread$6({}, constructSameAddressMap('0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45', [SupportedChainId.OPTIMISM, SupportedChainId.OPTIMISM_GOERLI, SupportedChainId.ARBITRUM_ONE, SupportedChainId.ARBITRUM_RINKEBY, SupportedChainId.POLYGON, SupportedChainId.POLYGON_MUMBAI])), {}, (_objectSpread3 = {}, _defineProperty(_objectSpread3, SupportedChainId.CELO, '0x5615CDAb10dc425a742d643d949a7F474C01abc4'), _defineProperty(_objectSpread3, SupportedChainId.CELO_ALFAJORES, '0x5615CDAb10dc425a742d643d949a7F474C01abc4'), _defineProperty(_objectSpread3, SupportedChainId.BASE, '0x2626664c2603336E57B271c5C0b26F421741e481'), _objectSpread3));
_defineProperty({}, SupportedChainId.MAINNET, '0xeca4B0bDBf7c55E9b7925919d03CbF8Dc82537E8');
(_ENS_REGISTRAR_ADDRES = {}, _defineProperty(_ENS_REGISTRAR_ADDRES, SupportedChainId.MAINNET, '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'), _defineProperty(_ENS_REGISTRAR_ADDRES, SupportedChainId.ROPSTEN, '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'), _defineProperty(_ENS_REGISTRAR_ADDRES, SupportedChainId.GOERLI, '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'), _defineProperty(_ENS_REGISTRAR_ADDRES, SupportedChainId.RINKEBY, '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'), _ENS_REGISTRAR_ADDRES);

var _USDC, _UNI, _objectSpread2, _USDC2;
function ownKeys$5(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$5(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$5(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$5(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var USDC_MAINNET = new Token(SupportedChainId.MAINNET, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, 'USDC', 'USD//C');
var USDC_ROPSTEN = new Token(SupportedChainId.ROPSTEN, '0x07865c6e87b9f70255377e024ace6630c1eaa37f', 6, 'USDC', 'USD//C');
var USDC_RINKEBY = new Token(SupportedChainId.RINKEBY, '0x4DBCdF9B62e891a7cec5A2568C3F4FAF9E8Abe2b', 6, 'tUSDC', 'test USD//C');
var USDC_GOERLI = new Token(SupportedChainId.GOERLI, '0x07865c6e87b9f70255377e024ace6630c1eaa37f', 6, 'USDC', 'USD//C');
var USDC_KOVAN = new Token(SupportedChainId.KOVAN, '0x31eeb2d0f9b6fd8642914ab10f4dd473677d80df', 6, 'USDC', 'USD//C');
var USDC_OPTIMISM = new Token(SupportedChainId.OPTIMISM, '0x7F5c764cBc14f9669B88837ca1490cCa17c31607', 6, 'USDC', 'USD//C');
var USDC_OPTIMISM_GOERLI = new Token(SupportedChainId.OPTIMISM_GOERLI, '0x7E07E15D2a87A24492740D16f5bdF58c16db0c4E', 6, 'USDC', 'USD//C');
var USDC_ARBITRUM = new Token(SupportedChainId.ARBITRUM_ONE, '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8', 6, 'USDC', 'USD//C');
var USDC_ARBITRUM_RINKEBY = new Token(SupportedChainId.ARBITRUM_RINKEBY, '0x09b98f8b2395d076514037ff7d39a091a536206c', 6, 'USDC', 'USD//C');
var USDC_POLYGON = new Token(SupportedChainId.POLYGON, '0x2791bca1f2de4661ed88a30c99a7a9449aa84174', 6, 'USDC', 'USD//C');
var USDC_POLYGON_MUMBAI = new Token(SupportedChainId.POLYGON_MUMBAI, '0xe11a86849d99f524cac3e7a0ec1241828e332c62', 6, 'USDC', 'USD//C');
var PORTAL_USDC_CELO = new Token(SupportedChainId.CELO, '0x37f750B7cC259A2f741AF45294f6a16572CF5cAd', 6, 'USDCet', 'USDC (Portal from Ethereum)');
var USDC_CELO_ALFAJORES = new Token(SupportedChainId.CELO_ALFAJORES, '0x41F4a5d2632b019Ae6CE9625bE3c9CaC143AcC7D', 6, 'USDC', 'USD//C');
new Token(SupportedChainId.MAINNET, '0xD46bA6D942050d489DBd938a2C909A5d5039A161', 9, 'AMPL', 'Ampleforth');
var DAI = new Token(SupportedChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18, 'DAI', 'Dai Stablecoin');
new Token(SupportedChainId.ARBITRUM_ONE, '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1', 18, 'DAI', 'Dai stable coin');
var DAI_OPTIMISM = new Token(SupportedChainId.OPTIMISM, '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1', 18, 'DAI', 'Dai stable coin');
var USDC_BNB_CHAIN = new Token(SupportedChainId.BNB, '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d', 18, 'USDC', 'USDC');
var USDC_BASE = new Token(SupportedChainId.BASE, '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913', 6, 'USDC', 'USD Coin');
(_USDC = {}, _defineProperty(_USDC, SupportedChainId.MAINNET, USDC_MAINNET), _defineProperty(_USDC, SupportedChainId.ARBITRUM_ONE, USDC_ARBITRUM), _defineProperty(_USDC, SupportedChainId.OPTIMISM, USDC_OPTIMISM), _defineProperty(_USDC, SupportedChainId.ARBITRUM_RINKEBY, USDC_ARBITRUM_RINKEBY), _defineProperty(_USDC, SupportedChainId.OPTIMISM_GOERLI, USDC_OPTIMISM_GOERLI), _defineProperty(_USDC, SupportedChainId.POLYGON, USDC_POLYGON), _defineProperty(_USDC, SupportedChainId.POLYGON_MUMBAI, USDC_POLYGON_MUMBAI), _defineProperty(_USDC, SupportedChainId.CELO, PORTAL_USDC_CELO), _defineProperty(_USDC, SupportedChainId.CELO_ALFAJORES, USDC_CELO_ALFAJORES), _defineProperty(_USDC, SupportedChainId.GOERLI, USDC_GOERLI), _defineProperty(_USDC, SupportedChainId.RINKEBY, USDC_RINKEBY), _defineProperty(_USDC, SupportedChainId.KOVAN, USDC_KOVAN), _defineProperty(_USDC, SupportedChainId.ROPSTEN, USDC_ROPSTEN), _defineProperty(_USDC, SupportedChainId.BNB, USDC_BNB_CHAIN), _defineProperty(_USDC, SupportedChainId.BASE, USDC_BASE), _USDC);
new Token(SupportedChainId.POLYGON, '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063', 18, 'DAI', 'Dai Stablecoin');
new Token(SupportedChainId.POLYGON, '0xc2132d05d31c914a87c6611c10748aeb04b58e8f', 6, 'USDT', 'Tether USD');
new Token(SupportedChainId.POLYGON, '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6', 8, 'WBTC', 'Wrapped BTC');
new Token(SupportedChainId.MAINNET, '0xdAC17F958D2ee523a2206206994597C13D831ec7', 6, 'USDT', 'Tether USD');
new Token(SupportedChainId.ARBITRUM_ONE, '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9', 6, 'USDT', 'Tether USD');
new Token(SupportedChainId.OPTIMISM, '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58', 6, 'USDT', 'Tether USD');
new Token(SupportedChainId.MAINNET, '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', 8, 'WBTC', 'Wrapped BTC');
new Token(SupportedChainId.ARBITRUM_ONE, '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f', 8, 'WBTC', 'Wrapped BTC');
new Token(SupportedChainId.OPTIMISM, '0x68f180fcCe6836688e9084f035309E29Bf0A2095', 8, 'WBTC', 'Wrapped BTC');
new Token(SupportedChainId.MAINNET, '0x956F47F50A910163D8BF957Cf5846D573E7f87CA', 18, 'FEI', 'Fei USD');
new Token(SupportedChainId.MAINNET, '0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B', 18, 'TRIBE', 'Tribe');
new Token(SupportedChainId.MAINNET, '0x853d955aCEf822Db058eb8505911ED77F175b99e', 18, 'FRAX', 'Frax');
new Token(SupportedChainId.MAINNET, '0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0', 18, 'FXS', 'Frax Share');
new Token(SupportedChainId.MAINNET, '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D', 8, 'renBTC', 'renBTC');
new Token(SupportedChainId.MAINNET, '0xAa6E8127831c9DE45ae56bB1b0d4D4Da6e5665BD', 18, 'ETH2x-FLI', 'ETH 2x Flexible Leverage Index');
new Token(SupportedChainId.MAINNET, '0xFe2e637202056d30016725477c5da089Ab0A043A', 18, 'sETH2', 'StakeWise Staked ETH2');
new Token(SupportedChainId.MAINNET, '0x20BC832ca081b91433ff6c17f85701B6e92486c5', 18, 'rETH2', 'StakeWise Reward ETH2');
new Token(SupportedChainId.MAINNET, '0x48C3399719B582dD63eB5AADf12A40B4C3f52FA2', 18, 'SWISE', 'StakeWise');
new Token(SupportedChainId.POLYGON_MUMBAI, '0xa6fa4fb5f76172d178d61b04b0ecd319c5d1c0aa', 18, 'WETH', 'Wrapped Ether');
new Token(SupportedChainId.POLYGON, '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619', 18, 'WETH', 'Wrapped Ether');
var CELO_CELO = new Token(SupportedChainId.CELO, '0x471EcE3750Da237f93B8E339c536989b8978a438', 18, 'CELO', 'Celo');
var CUSD_CELO = new Token(SupportedChainId.CELO, '0x765DE816845861e75A25fCA122bb6898B8B1282a', 18, 'cUSD', 'Celo Dollar');
new Token(SupportedChainId.CELO, '0xD8763CBa276a3738E6DE85b4b3bF5FDed6D6cA73', 18, 'cEUR', 'Celo Euro Stablecoin');
new Token(SupportedChainId.CELO, '0x66803FB87aBd4aaC3cbB3fAd7C3aa01f6F3FB207', 18, 'ETH', 'Portal Ether');
new Token(SupportedChainId.CELO, '0x32A9FE697a32135BFd313a6Ac28792DaE4D9979d', 18, 'cMCO2', 'Celo Moss Carbon Credit');
var CELO_CELO_ALFAJORES = new Token(SupportedChainId.CELO_ALFAJORES, '0xF194afDf50B03e69Bd7D057c1Aa9e10c9954E4C9', 18, 'CELO', 'Celo');
new Token(SupportedChainId.CELO_ALFAJORES, '0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1', 18, 'CUSD', 'Celo Dollar');
new Token(SupportedChainId.CELO_ALFAJORES, '0x10c892A6EC43a53E45D0B916B4b7D383B1b78C0F', 18, 'CEUR', 'Celo Euro Stablecoin');
new Token(SupportedChainId.BNB, '0x55d398326f99059fF775485246999027B3197955', 18, 'USDT', 'USDT');
new Token(SupportedChainId.BNB, '0x2170Ed0880ac9A755fd29B2688956BD959F933F8', 18, 'ETH', 'Ethereum');
new Token(SupportedChainId.BNB, '0xCC42724C6683B7E57334c4E856f4c9965ED682bD', 18, 'MATIC', 'Matic');
new Token(SupportedChainId.BNB, '0x90C97F71E18723b0Cf0dfa30ee176Ab653E89F40', 18, 'FRAX', 'FRAX');
new Token(SupportedChainId.BNB, '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', 18, 'BTCB', 'BTCB');
new Token(SupportedChainId.BNB, '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82', 18, 'CAKE', 'Cake');
new Token(SupportedChainId.BNB, '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18, 'BUSD', 'BUSD');
new Token(SupportedChainId.BNB, '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3', 18, 'DAI', 'DAI');
new Token(SupportedChainId.BASE, '0x50c5725949a6f0c72e6c4a641f24049a917db0cb', 18, 'DAI', 'Dai Stablecoin');
function isBnbChain(chainId) {
  return chainId === SupportedChainId.BNB;
}
var BnbChainNativeCurrency = /*#__PURE__*/function (_NativeCurrency) {
  _inherits(BnbChainNativeCurrency, _NativeCurrency);
  var _super = _createSuper$3(BnbChainNativeCurrency);
  function BnbChainNativeCurrency(chainId) {
    _classCallCheck(this, BnbChainNativeCurrency);
    if (!isBnbChain(chainId)) throw new Error('Not BNB Chain');
    return _super.call(this, chainId, 18, 'BNB', 'BNB');
  }
  _createClass(BnbChainNativeCurrency, [{
    key: "equals",
    value: function equals(other) {
      return other.isNative && other.chainId === this.chainId;
    }
  }, {
    key: "wrapped",
    get: function get() {
      if (!isBnbChain(this.chainId)) throw new Error('Not BNB Chain');
      var wrapped = WRAPPED_NATIVE_CURRENCY[this.chainId];
      invariant(wrapped instanceof Token);
      return wrapped;
    }
  }]);
  return BnbChainNativeCurrency;
}(NativeCurrency);
var UNI = (_UNI = {}, _defineProperty(_UNI, SupportedChainId.MAINNET, new Token(SupportedChainId.MAINNET, UNI_ADDRESS[1], 18, 'UNI', 'Uniswap')), _defineProperty(_UNI, SupportedChainId.RINKEBY, new Token(SupportedChainId.RINKEBY, UNI_ADDRESS[4], 18, 'UNI', 'Uniswap')), _defineProperty(_UNI, SupportedChainId.ROPSTEN, new Token(SupportedChainId.ROPSTEN, UNI_ADDRESS[3], 18, 'UNI', 'Uniswap')), _defineProperty(_UNI, SupportedChainId.GOERLI, new Token(SupportedChainId.GOERLI, UNI_ADDRESS[5], 18, 'UNI', 'Uniswap')), _defineProperty(_UNI, SupportedChainId.KOVAN, new Token(SupportedChainId.KOVAN, UNI_ADDRESS[42], 18, 'UNI', 'Uniswap')), _UNI);
var WRAPPED_NATIVE_CURRENCY = _objectSpread$5(_objectSpread$5({}, WETH9), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, SupportedChainId.CELO, CELO_CELO), _defineProperty(_objectSpread2, SupportedChainId.CELO_ALFAJORES, CELO_CELO_ALFAJORES), _defineProperty(_objectSpread2, SupportedChainId.OPTIMISM, new Token(SupportedChainId.OPTIMISM, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether')), _defineProperty(_objectSpread2, SupportedChainId.OPTIMISM_GOERLI, new Token(SupportedChainId.OPTIMISM_GOERLI, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether')), _defineProperty(_objectSpread2, SupportedChainId.ARBITRUM_ONE, new Token(SupportedChainId.ARBITRUM_ONE, '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', 18, 'WETH', 'Wrapped Ether')), _defineProperty(_objectSpread2, SupportedChainId.ARBITRUM_RINKEBY, new Token(SupportedChainId.ARBITRUM_RINKEBY, '0xB47e6A5f8b33b3F17603C83a0535A9dcD7E32681', 18, 'WETH', 'Wrapped Ether')), _defineProperty(_objectSpread2, SupportedChainId.POLYGON, new Token(SupportedChainId.POLYGON, '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', 18, 'WMATIC', 'Wrapped MATIC')), _defineProperty(_objectSpread2, SupportedChainId.POLYGON_MUMBAI, new Token(SupportedChainId.POLYGON_MUMBAI, '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889', 18, 'WMATIC', 'Wrapped MATIC')), _defineProperty(_objectSpread2, SupportedChainId.BNB, new Token(SupportedChainId.BNB, '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18, 'WBNB', 'Wrapped BNB')), _defineProperty(_objectSpread2, SupportedChainId.BASE, new Token(SupportedChainId.BASE, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether')), _objectSpread2));
function isCelo(chainId) {
  return chainId === SupportedChainId.CELO_ALFAJORES || chainId === SupportedChainId.CELO;
}
function getCeloNativeCurrency(chainId) {
  switch (chainId) {
    case SupportedChainId.CELO_ALFAJORES:
      return CELO_CELO_ALFAJORES;
    case SupportedChainId.CELO:
      return CELO_CELO;
    default:
      throw new Error('Not celo');
  }
}
function isMatic(chainId) {
  return chainId === SupportedChainId.POLYGON_MUMBAI || chainId === SupportedChainId.POLYGON;
}
var MaticNativeCurrency = /*#__PURE__*/function (_NativeCurrency2) {
  _inherits(MaticNativeCurrency, _NativeCurrency2);
  var _super2 = _createSuper$3(MaticNativeCurrency);
  function MaticNativeCurrency(chainId) {
    _classCallCheck(this, MaticNativeCurrency);
    if (!isMatic(chainId)) throw new Error('Not matic');
    return _super2.call(this, chainId, 18, 'MATIC', 'Polygon Matic');
  }
  _createClass(MaticNativeCurrency, [{
    key: "equals",
    value: function equals(other) {
      return other.isNative && other.chainId === this.chainId;
    }
  }, {
    key: "wrapped",
    get: function get() {
      if (!isMatic(this.chainId)) throw new Error('Not matic');
      var wrapped = WRAPPED_NATIVE_CURRENCY[this.chainId];
      invariant(wrapped instanceof Token);
      return wrapped;
    }
  }]);
  return MaticNativeCurrency;
}(NativeCurrency);
var ExtendedEther = /*#__PURE__*/function (_Ether) {
  _inherits(ExtendedEther, _Ether);
  var _super3 = _createSuper$3(ExtendedEther);
  function ExtendedEther() {
    _classCallCheck(this, ExtendedEther);
    return _super3.apply(this, arguments);
  }
  _createClass(ExtendedEther, [{
    key: "wrapped",
    get: function get() {
      var wrapped = WRAPPED_NATIVE_CURRENCY[this.chainId];
      if (wrapped) return wrapped;
      throw new Error('Unsupported chain ID');
    }
  }], [{
    key: "onChain",
    value: function onChain(chainId) {
      var _this$_cachedExtended;
      return (_this$_cachedExtended = this._cachedExtendedEther[chainId]) !== null && _this$_cachedExtended !== void 0 ? _this$_cachedExtended : this._cachedExtendedEther[chainId] = new ExtendedEther(chainId);
    }
  }]);
  return ExtendedEther;
}(Ether);
_defineProperty(ExtendedEther, "_cachedExtendedEther", {});
var cachedNativeCurrency = {};
function nativeOnChain(chainId) {
  if (cachedNativeCurrency[chainId]) return cachedNativeCurrency[chainId];
  var nativeCurrency;
  if (isMatic(chainId)) {
    nativeCurrency = new MaticNativeCurrency(chainId);
  } else if (isCelo(chainId)) {
    nativeCurrency = getCeloNativeCurrency(chainId);
  } else if (isBnbChain(chainId)) {
    nativeCurrency = new BnbChainNativeCurrency(chainId);
  } else {
    nativeCurrency = ExtendedEther.onChain(chainId);
  }
  return cachedNativeCurrency[chainId] = nativeCurrency;
}
({
  USDC: (_USDC2 = {}, _defineProperty(_USDC2, SupportedChainId.MAINNET, USDC_MAINNET.address), _defineProperty(_USDC2, SupportedChainId.ARBITRUM_ONE, USDC_ARBITRUM.address), _defineProperty(_USDC2, SupportedChainId.OPTIMISM, USDC_OPTIMISM.address), _defineProperty(_USDC2, SupportedChainId.ARBITRUM_RINKEBY, USDC_ARBITRUM_RINKEBY.address), _defineProperty(_USDC2, SupportedChainId.OPTIMISM_GOERLI, USDC_OPTIMISM_GOERLI.address), _defineProperty(_USDC2, SupportedChainId.POLYGON, USDC_POLYGON.address), _defineProperty(_USDC2, SupportedChainId.POLYGON_MUMBAI, USDC_POLYGON_MUMBAI.address), _defineProperty(_USDC2, SupportedChainId.GOERLI, USDC_GOERLI.address), _defineProperty(_USDC2, SupportedChainId.RINKEBY, USDC_RINKEBY.address), _defineProperty(_USDC2, SupportedChainId.KOVAN, USDC_KOVAN.address), _defineProperty(_USDC2, SupportedChainId.ROPSTEN, USDC_ROPSTEN.address), _defineProperty(_USDC2, SupportedChainId.CELO, PORTAL_USDC_CELO.address), _defineProperty(_USDC2, SupportedChainId.CELO_ALFAJORES, USDC_CELO_ALFAJORES.address), _defineProperty(_USDC2, SupportedChainId.BASE, USDC_BASE.address), _USDC2)
});

var ERC20ABI = [
	{
		constant: true,
		inputs: [
		],
		name: "name",
		outputs: [
			{
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				name: "_spender",
				type: "address"
			},
			{
				name: "_value",
				type: "uint256"
			}
		],
		name: "approve",
		outputs: [
			{
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "totalSupply",
		outputs: [
			{
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				name: "_from",
				type: "address"
			},
			{
				name: "_to",
				type: "address"
			},
			{
				name: "_value",
				type: "uint256"
			}
		],
		name: "transferFrom",
		outputs: [
			{
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "decimals",
		outputs: [
			{
				name: "",
				type: "uint8"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				name: "_owner",
				type: "address"
			}
		],
		name: "balanceOf",
		outputs: [
			{
				name: "balance",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "symbol",
		outputs: [
			{
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				name: "_to",
				type: "address"
			},
			{
				name: "_value",
				type: "uint256"
			}
		],
		name: "transfer",
		outputs: [
			{
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				name: "_owner",
				type: "address"
			},
			{
				name: "_spender",
				type: "address"
			}
		],
		name: "allowance",
		outputs: [
			{
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		payable: true,
		stateMutability: "payable",
		type: "fallback"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				name: "owner",
				type: "address"
			},
			{
				indexed: true,
				name: "spender",
				type: "address"
			},
			{
				indexed: false,
				name: "value",
				type: "uint256"
			}
		],
		name: "Approval",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				name: "from",
				type: "address"
			},
			{
				indexed: true,
				name: "to",
				type: "address"
			},
			{
				indexed: false,
				name: "value",
				type: "uint256"
			}
		],
		name: "Transfer",
		type: "event"
	}
];

var _format = "hh-sol-artifact-1";
var contractName = "UniswapInterfaceMulticall";
var sourceName = "contracts/lens/UniswapInterfaceMulticall.sol";
var abi = [
	{
		inputs: [
		],
		name: "getCurrentBlockTimestamp",
		outputs: [
			{
				internalType: "uint256",
				name: "timestamp",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "addr",
				type: "address"
			}
		],
		name: "getEthBalance",
		outputs: [
			{
				internalType: "uint256",
				name: "balance",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "address",
						name: "target",
						type: "address"
					},
					{
						internalType: "uint256",
						name: "gasLimit",
						type: "uint256"
					},
					{
						internalType: "bytes",
						name: "callData",
						type: "bytes"
					}
				],
				internalType: "struct UniswapInterfaceMulticall.Call[]",
				name: "calls",
				type: "tuple[]"
			}
		],
		name: "multicall",
		outputs: [
			{
				internalType: "uint256",
				name: "blockNumber",
				type: "uint256"
			},
			{
				components: [
					{
						internalType: "bool",
						name: "success",
						type: "bool"
					},
					{
						internalType: "uint256",
						name: "gasUsed",
						type: "uint256"
					},
					{
						internalType: "bytes",
						name: "returnData",
						type: "bytes"
					}
				],
				internalType: "struct UniswapInterfaceMulticall.Result[]",
				name: "returnData",
				type: "tuple[]"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	}
];
var bytecode = "0x608060405234801561001057600080fd5b50610567806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80630f28c97d146100465780631749e1e3146100645780634d2301cc14610085575b600080fd5b61004e610098565b60405161005b919061041f565b60405180910390f35b6100776100723660046102a7565b61009c565b60405161005b929190610428565b61004e610093366004610286565b610220565b4290565b8051439060609067ffffffffffffffff811180156100b957600080fd5b506040519080825280602002602001820160405280156100f357816020015b6100e061023a565b8152602001906001900390816100d85790505b50905060005b835181101561021a57600080600086848151811061011357fe5b60200260200101516000015187858151811061012b57fe5b60200260200101516020015188868151811061014357fe5b60200260200101516040015192509250925060005a90506000808573ffffffffffffffffffffffffffffffffffffffff1685856040516101839190610403565b60006040518083038160008787f1925050503d80600081146101c1576040519150601f19603f3d011682016040523d82523d6000602084013e6101c6565b606091505b509150915060005a8403905060405180606001604052808415158152602001828152602001838152508989815181106101fb57fe5b60200260200101819052505050505050505080806001019150506100f9565b50915091565b73ffffffffffffffffffffffffffffffffffffffff163190565b604051806060016040528060001515815260200160008152602001606081525090565b803573ffffffffffffffffffffffffffffffffffffffff8116811461028157600080fd5b919050565b600060208284031215610297578081fd5b6102a08261025d565b9392505050565b600060208083850312156102b9578182fd5b823567ffffffffffffffff808211156102d0578384fd5b818501915085601f8301126102e3578384fd5b8135818111156102ef57fe5b6102fc8485830201610506565b81815284810190848601875b848110156103f457813587017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0606081838f03011215610346578a8bfd5b60408051606081018181108b8211171561035c57fe5b8252610369848d0161025d565b8152818401358c82015260608401358a811115610384578d8efd5b8085019450508e603f850112610398578c8dfd5b8b8401358a8111156103a657fe5b6103b68d85601f84011601610506565b93508084528f838287010111156103cb578d8efd5b808386018e86013783018c018d9052908101919091528552509287019290870190600101610308565b50909998505050505050505050565b6000825161041581846020870161052a565b9190910192915050565b90815260200190565b600060408083018584526020828186015281865180845260609350838701915083838202880101838901875b838110156104f6578983037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa001855281518051151584528681015187850152880151888401889052805188850181905260806104b582828801858c0161052a565b96880196601f919091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01694909401909301925090850190600101610454565b50909a9950505050505050505050565b60405181810167ffffffffffffffff8111828210171561052257fe5b604052919050565b60005b8381101561054557818101518382015260200161052d565b83811115610554576000848401525b5050505056fea164736f6c6343000706000a";
var deployedBytecode = "0x608060405234801561001057600080fd5b50600436106100415760003560e01c80630f28c97d146100465780631749e1e3146100645780634d2301cc14610085575b600080fd5b61004e610098565b60405161005b919061041f565b60405180910390f35b6100776100723660046102a7565b61009c565b60405161005b929190610428565b61004e610093366004610286565b610220565b4290565b8051439060609067ffffffffffffffff811180156100b957600080fd5b506040519080825280602002602001820160405280156100f357816020015b6100e061023a565b8152602001906001900390816100d85790505b50905060005b835181101561021a57600080600086848151811061011357fe5b60200260200101516000015187858151811061012b57fe5b60200260200101516020015188868151811061014357fe5b60200260200101516040015192509250925060005a90506000808573ffffffffffffffffffffffffffffffffffffffff1685856040516101839190610403565b60006040518083038160008787f1925050503d80600081146101c1576040519150601f19603f3d011682016040523d82523d6000602084013e6101c6565b606091505b509150915060005a8403905060405180606001604052808415158152602001828152602001838152508989815181106101fb57fe5b60200260200101819052505050505050505080806001019150506100f9565b50915091565b73ffffffffffffffffffffffffffffffffffffffff163190565b604051806060016040528060001515815260200160008152602001606081525090565b803573ffffffffffffffffffffffffffffffffffffffff8116811461028157600080fd5b919050565b600060208284031215610297578081fd5b6102a08261025d565b9392505050565b600060208083850312156102b9578182fd5b823567ffffffffffffffff808211156102d0578384fd5b818501915085601f8301126102e3578384fd5b8135818111156102ef57fe5b6102fc8485830201610506565b81815284810190848601875b848110156103f457813587017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0606081838f03011215610346578a8bfd5b60408051606081018181108b8211171561035c57fe5b8252610369848d0161025d565b8152818401358c82015260608401358a811115610384578d8efd5b8085019450508e603f850112610398578c8dfd5b8b8401358a8111156103a657fe5b6103b68d85601f84011601610506565b93508084528f838287010111156103cb578d8efd5b808386018e86013783018c018d9052908101919091528552509287019290870190600101610308565b50909998505050505050505050565b6000825161041581846020870161052a565b9190910192915050565b90815260200190565b600060408083018584526020828186015281865180845260609350838701915083838202880101838901875b838110156104f6578983037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa001855281518051151584528681015187850152880151888401889052805188850181905260806104b582828801858c0161052a565b96880196601f919091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01694909401909301925090850190600101610454565b50909a9950505050505050505050565b60405181810167ffffffffffffffff8111828210171561052257fe5b604052919050565b60005b8381101561054557818101518382015260200161052d565b83811115610554576000848401525b5050505056fea164736f6c6343000706000a";
var linkReferences = {
};
var deployedLinkReferences = {
};
var UniswapInterfaceMulticallJson = {
	_format: _format,
	contractName: contractName,
	sourceName: sourceName,
	abi: abi,
	bytecode: bytecode,
	deployedBytecode: deployedBytecode,
	linkReferences: linkReferences,
	deployedLinkReferences: deployedLinkReferences
};

var MulticallABI = UniswapInterfaceMulticallJson.abi;

// returns null on errors
function useContract(addressOrAddressMap, ABI) {
  var withSignerIfPossible = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var _useWeb3React = useWeb3React(),
    provider = _useWeb3React.provider,
    account = _useWeb3React.account,
    chainId = _useWeb3React.chainId;
  return useMemo(function () {
    if (!addressOrAddressMap || !ABI || !provider || !chainId) return null;
    var address;
    if (typeof addressOrAddressMap === 'string') address = addressOrAddressMap;else address = addressOrAddressMap[chainId];
    if (!address) return null;
    try {
      return getContract(address, ABI, provider, withSignerIfPossible && account ? account : undefined);
    } catch (error) {
      console.error('Failed to get contract', error);
      return null;
    }
  }, [addressOrAddressMap, ABI, provider, chainId, withSignerIfPossible, account]);
}
function useInterfaceMulticall() {
  return useContract(MULTICALL_ADDRESS, MulticallABI, false);
}

var _jsxFileName$9 = "D:\\Gozillapad\\widgets\\src\\state\\multicall.tsx";
var multicall = createMulticall();
function MulticallUpdater() {
  var _useWeb3React = useWeb3React(),
    chainId = _useWeb3React.chainId;
  var latestBlockNumber = useBlockNumber();
  var contract = useInterfaceMulticall();
  return /*#__PURE__*/jsxDEV(multicall.Updater, {
    chainId: chainId,
    latestBlockNumber: latestBlockNumber,
    contract: contract
  }, void 0, false, {
    fileName: _jsxFileName$9,
    lineNumber: 14,
    columnNumber: 10
  }, this);
}

new Interface(ERC20ABI);

var _jsxFileName$8 = "D:\\Gozillapad\\widgets\\src\\hooks\\useTokenList\\index.tsx";
var UNISWAP_TOKEN_LIST = 'https://gateway.ipfs.io/ipns/tokens.uniswap.org';
var EMPTY_TOKEN_LIST = [];
var MISSING_PROVIDER = Symbol();
var ChainTokenMapContext = /*#__PURE__*/createContext(MISSING_PROVIDER);
function useChainTokenMapContext() {
  var chainTokenMap = useContext(ChainTokenMapContext);
  if (chainTokenMap === MISSING_PROVIDER) {
    throw new Error('TokenList hooks must be wrapped in a <TokenListProvider>');
  }
  return chainTokenMap;
}
function useTokenList() {
  var _useWeb3React = useWeb3React(),
    chainId = _useWeb3React.chainId;
  var chainTokenMap = useChainTokenMapContext();
  var tokenMap = chainId && (chainTokenMap === null || chainTokenMap === void 0 ? void 0 : chainTokenMap[chainId]);
  return useMemo(function () {
    if (!tokenMap) return [];
    return Object.values(tokenMap).map(function (_ref) {
      var token = _ref.token;
      return token;
    });
  }, [tokenMap]);
}
function Provider$2(_ref5) {
  var _ref5$list = _ref5.list,
    list = _ref5$list === void 0 ? UNISWAP_TOKEN_LIST : _ref5$list,
    children = _ref5.children;
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    chainTokenMap = _useState2[0],
    setChainTokenMap = _useState2[1];
  useEffect(function () {
    return setChainTokenMap(undefined);
  }, [list]);
  var _useWeb3React3 = useWeb3React(),
    chainId = _useWeb3React3.chainId,
    provider = _useWeb3React3.provider;
  var resolver = useCallback(function (ensName) {
    if (provider && chainId === 1) {
      return resolveENSContentHash(ensName, provider);
    }
    throw new Error('Could not construct mainnet ENS resolver');
  }, [chainId, provider]);
  var throwError = useAsyncError();
  useEffect(function () {
    // If the list was already loaded, don't reload it.
    if (chainTokenMap) return;
    var stale = false;
    activateList(list);
    return function () {
      stale = true;
    };
    function activateList(_x) {
      return _activateList.apply(this, arguments);
    }
    function _activateList() {
      _activateList = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(list) {
        var tokens, map;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                if (!(typeof list === 'string')) {
                  _context.next = 7;
                  break;
                }
                _context.next = 4;
                return fetchTokenList(list, resolver);
              case 4:
                tokens = _context.sent;
                _context.next = 15;
                break;
              case 7:
                if (!(list.length > 0)) {
                  _context.next = 13;
                  break;
                }
                _context.next = 10;
                return validateTokens(list);
              case 10:
                _context.t0 = _context.sent;
                _context.next = 14;
                break;
              case 13:
                _context.t0 = EMPTY_TOKEN_LIST;
              case 14:
                tokens = _context.t0;
              case 15:
                // tokensToChainTokenMap also caches the fetched tokens, so it must be invoked even if stale.
                map = tokensToChainTokenMap(tokens);
                if (!stale) {
                  setChainTokenMap(map);
                }
                _context.next = 22;
                break;
              case 19:
                _context.prev = 19;
                _context.t1 = _context["catch"](0);
                if (!stale) {
                  // Do not update the token map, in case the map was already resolved without error on mainnet.
                  throwError(_context.t1);
                }
              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 19]]);
      }));
      return _activateList.apply(this, arguments);
    }
  }, [chainTokenMap, list, resolver, throwError]);
  return /*#__PURE__*/jsxDEV(ChainTokenMapContext.Provider, {
    value: chainTokenMap,
    children: [/*#__PURE__*/jsxDEV(TokenListLogoUpdater, {}, void 0, false, {
      fileName: _jsxFileName$8,
      lineNumber: 121,
      columnNumber: 7
    }, this), children]
  }, void 0, true, {
    fileName: _jsxFileName$8,
    lineNumber: 120,
    columnNumber: 5
  }, this);
}
function TokenListLogoUpdater() {
  return /*#__PURE__*/jsxDEV(LogoUpdater, {
    assets: useTokenList()
  }, void 0, false, {
    fileName: _jsxFileName$8,
    lineNumber: 128,
    columnNumber: 10
  }, this);
}

if (_typeof(global.process) !== 'object') {
  // WCv2 alters global.process, and other libs (eg jotai) depend on a static object.
  // Avoid breaking jotai by setting it statically before it is first seen.
  global.process = {
    env: {}
  };
}

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function parseChainId(chainId) {
  return Number.parseInt(chainId, 16);
}
var JsonRpcConnector = /*#__PURE__*/function (_Connector) {
  _inherits(JsonRpcConnector, _Connector);
  var _super = _createSuper$2(JsonRpcConnector);
  function JsonRpcConnector(_ref) {
    var _this;
    var actions = _ref.actions,
      provider = _ref.provider,
      onError = _ref.onError;
    _classCallCheck(this, JsonRpcConnector);
    _this = _super.call(this, actions, onError);
    _this.customProvider = provider.on('connect', function (_ref2) {
      var chainId = _ref2.chainId;
      _this.actions.update({
        chainId: parseChainId(chainId)
      });
    }).on('disconnect', function (error) {
      var _this$onError, _this2;
      (_this$onError = (_this2 = _this).onError) === null || _this$onError === void 0 ? void 0 : _this$onError.call(_this2, error);
      _this.actions.resetState();
    }).on('chainChanged', function (chainId) {
      _this.actions.update({
        chainId: parseChainId(chainId)
      });
    }).on('accountsChanged', function (accounts) {
      _this.actions.update({
        accounts: accounts
      });
    });
    return _this;
  }
  _createClass(JsonRpcConnector, [{
    key: "activate",
    value: function () {
      var _activate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var _yield$Promise$all, _yield$Promise$all2, chainId, accounts;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.actions.startActivation();
                _context.prev = 1;
                _context.next = 4;
                return Promise.all([this.customProvider.getNetwork(), this.customProvider.listAccounts()]);
              case 4:
                _yield$Promise$all = _context.sent;
                _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
                chainId = _yield$Promise$all2[0].chainId;
                accounts = _yield$Promise$all2[1];
                this.actions.update({
                  chainId: chainId,
                  accounts: accounts
                });
                _context.next = 15;
                break;
              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](1);
                this.actions.resetState();
                throw _context.t0;
              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 11]]);
      }));
      function activate() {
        return _activate.apply(this, arguments);
      }
      return activate;
    }()
  }]);
  return JsonRpcConnector;
}(Connector);

/**
 * Returns the input chain ID if chain is supported. If not, return undefined
 * @param chainId a chain ID, which will be returned if it is a supported chain ID
 */
function supportedChainId(chainId) {
  if (typeof chainId === 'number' && chainId in SupportedChainId) {
    return chainId;
  }
  return undefined;
}

function ownKeys$4(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$4(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$4(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$4(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var WalletConnectQR = /*#__PURE__*/function (_WalletConnect) {
  _inherits(WalletConnectQR, _WalletConnect);
  var _super = _createSuper$1(WalletConnectQR);
  function WalletConnectQR(_ref) {
    var _this;
    var actions = _ref.actions,
      options = _ref.options,
      defaultChainId = _ref.defaultChainId,
      timeout = _ref.timeout,
      onError = _ref.onError;
    _classCallCheck(this, WalletConnectQR);
    _this = _super.call(this, {
      actions: actions,
      options: _objectSpread$4(_objectSpread$4({}, options), {}, {
        showQrModal: false
      }),
      defaultChainId: defaultChainId,
      timeout: timeout,
      onError: onError
    });
    _this.events.once(URI_AVAILABLE, function () {
      var _this$provider;
      (_this$provider = _this.provider) === null || _this$provider === void 0 ? void 0 : _this$provider.events.on('disconnect', _this.deactivate);
    });
    _this.events.on(URI_AVAILABLE, /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(uri) {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.svg = undefined;
                if (uri) {
                  _context.next = 3;
                  break;
                }
                return _context.abrupt("return");
              case 3:
                _context.next = 5;
                return QRCode.toString(uri, {
                  // Leave a margin to increase contrast in dark mode.
                  margin: 1,
                  // Use 55*2=110 for the width to prevent distortion. The generated viewbox is "0 0 55 55".
                  width: 110,
                  type: 'svg'
                });
              case 5:
                _this.svg = _context.sent;
                _this.events.emit(WalletConnectQR.SVG_AVAILABLE, _this.svg);
              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    return _this;
  }
  _createClass(WalletConnectQR, [{
    key: "deactivate",
    value: function deactivate() {
      this.events.emit(URI_AVAILABLE);
      return _get(_getPrototypeOf(WalletConnectQR.prototype), "deactivate", this).call(this);
    }
  }]);
  return WalletConnectQR;
}(WalletConnect);
_defineProperty(WalletConnectQR, "SVG_AVAILABLE", 'svg_available');

var _jsxFileName$7 = "D:\\Gozillapad\\widgets\\src\\hooks\\web3\\index.tsx";
function ownKeys$3(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$3(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$3(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var DEFAULT_CHAIN_ID = SupportedChainId.MAINNET;
function Provider$1(_ref2) {
  var _ref2$defaultChainId = _ref2.defaultChainId,
    chainId = _ref2$defaultChainId === void 0 ? SupportedChainId.MAINNET : _ref2$defaultChainId,
    jsonRpcUrlMap = _ref2.jsonRpcUrlMap,
    provider = _ref2.provider,
    children = _ref2.children;
  var defaultChainId = useMemo(function () {
    if (!supportedChainId(chainId)) {
      console.warn("Unsupported chainId: ".concat(chainId, ". Falling back to ").concat(DEFAULT_CHAIN_ID, " (").concat(SupportedChainId[DEFAULT_CHAIN_ID], ")."));
      return DEFAULT_CHAIN_ID;
    }
    return chainId;
  }, [chainId]);
  var web3ReactConnectors = useWeb3ReactConnectors({
    provider: provider,
    jsonRpcUrlMap: jsonRpcUrlMap,
    defaultChainId: defaultChainId
  });
  var key = useRef(0);
  var prioritizedConnectors = useMemo(function () {
    // Re-key Web3ReactProvider before rendering new connectors, as it expects connectors to be
    // referentially static.
    key.current += 1;
    var prioritizedConnectors = [web3ReactConnectors.user, web3ReactConnectors.metaMask, web3ReactConnectors.walletConnect, web3ReactConnectors.walletConnectQR, web3ReactConnectors.network];
    return prioritizedConnectors.filter(function (connector) {
      return Boolean(connector);
    });
  }, [web3ReactConnectors]);
  var connectors = useMemo(function () {
    var _web3ReactConnectors$;
    return {
      user: (_web3ReactConnectors$ = web3ReactConnectors.user) === null || _web3ReactConnectors$ === void 0 ? void 0 : _web3ReactConnectors$[0],
      metaMask: web3ReactConnectors.metaMask[0],
      walletConnect: web3ReactConnectors.walletConnect[0],
      walletConnectQR: web3ReactConnectors.walletConnectQR[0],
      network: web3ReactConnectors.network[0]
    };
  }, [web3ReactConnectors]);
  var shouldEagerlyConnect = provider === undefined; // !== null
  useEffect(function () {
    // Ignore any errors during connection so they do not propagate to the widget.
    if (connectors.user) {
      connectors.user.activate()["catch"](function () {
        return undefined;
      });
      return;
    } else if (shouldEagerlyConnect) {
      var eagerConnectors = [connectors.metaMask, connectors.walletConnect];
      eagerConnectors.forEach(function (connector) {
        return connector.connectEagerly()["catch"](function () {
          return undefined;
        });
      });
    }
    connectors.network.activate()["catch"](function () {
      return undefined;
    });
  }, [connectors.metaMask, connectors.network, connectors.user, connectors.walletConnect, shouldEagerlyConnect]);
  return /*#__PURE__*/jsxDEV(Web3ReactProvider, {
    connectors: prioritizedConnectors,
    children: /*#__PURE__*/jsxDEV(Provider$4, {
      jsonRpcMap: jsonRpcUrlMap,
      children: /*#__PURE__*/jsxDEV(Provider$3, {
        connectors: connectors,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName$7,
        lineNumber: 120,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$7,
      lineNumber: 119,
      columnNumber: 7
    }, this)
  }, key.current, false, {
    fileName: _jsxFileName$7,
    lineNumber: 118,
    columnNumber: 5
  }, this);
}
function initializeWeb3ReactConnector(Constructor, options) {
  var _initializeConnector = initializeConnector(function (actions) {
      return new Constructor(_objectSpread$3({
        actions: actions
      }, options));
    }),
    _initializeConnector2 = _slicedToArray(_initializeConnector, 2),
    connector = _initializeConnector2[0],
    hooks = _initializeConnector2[1];
  if (options && 'provider' in options) {
    // Short-circuit provider selection to improve performance and testability.
    // Without doing so, provider will be unavailable for a frame.
    hooks.useProvider = function () {
      return options.provider;
    };
  }
  return [connector, hooks];
}
function useWeb3ReactConnectors(_ref3) {
  var defaultChainId = _ref3.defaultChainId,
    provider = _ref3.provider,
    jsonRpcUrlMap = _ref3.jsonRpcUrlMap;
  var _useMemo = useMemo(function () {
      return [toJsonRpcUrlMap(jsonRpcUrlMap), toJsonRpcConnectionMap(jsonRpcUrlMap)];
    }, [jsonRpcUrlMap]),
    _useMemo2 = _slicedToArray(_useMemo, 2),
    urlMap = _useMemo2[0],
    connectionMap = _useMemo2[1];
  var throwAsync = useAsyncError();
  var user = useMemo(function () {
    if (!provider) return;
    if (JsonRpcProvider.isProvider(provider)) {
      return initializeWeb3ReactConnector(JsonRpcConnector, {
        provider: provider,
        onError: console.error
      });
    } else if (JsonRpcProvider.isProvider(provider.provider)) {
      throw new Error('Eip1193Bridge is experimental: pass your ethers Provider directly');
    } else {
      return initializeWeb3ReactConnector(EIP1193, {
        provider: provider,
        onError: console.error
      });
    }
  }, [provider]);
  var metaMask = useMemo(function () {
    return initializeWeb3ReactConnector(MetaMask, {
      onError: function onError() {
        throwAsync(new MetaMaskConnectionError());
      }
    });
  }, [throwAsync]);
  var walletConnectDefaultOptions = useMemo(function () {
    return {
      rpcMap: urlMap,
      projectId: 'c6c9bacd35afa3eb9e6cccf6d8464395',
      // this requires the connecting wallet to support eth mainnet
      chains: [SupportedChainId.MAINNET],
      optionalChains: [].concat(_toConsumableArray(L1_CHAIN_IDS), _toConsumableArray(L2_CHAIN_IDS)),
      optionalMethods: ['eth_signTypedData', 'eth_signTypedData_v4', 'eth_sign'],
      qrModalOptions: {
        themeVariables: {
          '--wcm-z-index': Layer.DIALOG.toString()
        }
      }
    };
  }, [urlMap]);
  var walletConnect = useMemo(function () {
    return initializeWeb3ReactConnector(WalletConnect, {
      options: _objectSpread$3(_objectSpread$3({}, walletConnectDefaultOptions), {}, {
        showQrModal: true
      }),
      defaultChainId: defaultChainId,
      onError: console.error
    });
  }, [defaultChainId, walletConnectDefaultOptions]);
  var walletConnectQR = useMemo(function () {
    return initializeWeb3ReactConnector(WalletConnectQR, {
      options: _objectSpread$3(_objectSpread$3({}, walletConnectDefaultOptions), {}, {
        showQrModal: false
      }),
      defaultChainId: defaultChainId,
      onError: console.error
    });
  }, [defaultChainId, walletConnectDefaultOptions]);
  var network = useMemo(function () {
    return initializeWeb3ReactConnector(Network, {
      urlMap: connectionMap,
      defaultChainId: defaultChainId
    });
  }, [connectionMap, defaultChainId]);
  return useMemo(function () {
    return {
      user: user,
      metaMask: metaMask,
      walletConnect: walletConnect,
      walletConnectQR: walletConnectQR,
      network: network
    };
  }, [metaMask, network, user, walletConnect, walletConnectQR]);
}

var SUPPORTED_LOCALES = [
// order as they appear in the language dropdown
'en-US', 'af-ZA', 'ar-SA', 'ca-ES', 'cs-CZ', 'da-DK', 'de-DE', 'el-GR', 'es-ES', 'fi-FI', 'fr-FR', 'he-IL', 'hu-HU', 'id-ID', 'it-IT', 'ja-JP', 'ko-KR', 'nl-NL', 'no-NO', 'pl-PL', 'pt-BR', 'pt-PT', 'ro-RO', 'ru-RU', 'sr-SP', 'sv-SE', 'sw-TZ', 'tr-TR', 'uk-UA', 'vi-VN', 'zh-CN', 'zh-TW'];
var DEFAULT_LOCALE = 'en-US';

var _jsxFileName$6 = "D:\\Gozillapad\\widgets\\src\\i18n.tsx";
var _plurals = {
  'af-ZA': af,
  'ar-SA': ar,
  'ca-ES': ca,
  'cs-CZ': cs,
  'da-DK': da,
  'de-DE': de,
  'el-GR': el,
  'en-US': en,
  'es-ES': es,
  'fi-FI': fi,
  'fr-FR': fr,
  'he-IL': he,
  'hu-HU': hu,
  'id-ID': id,
  'it-IT': it,
  'ja-JP': ja,
  'ko-KR': ko,
  'nl-NL': nl,
  'no-NO': no,
  'pl-PL': pl,
  'pt-BR': pt,
  'pt-PT': pt,
  'ro-RO': ro,
  'ru-RU': ru,
  'sr-SP': sr,
  'sv-SE': sv,
  'sw-TZ': sw,
  'tr-TR': tr,
  'uk-UA': uk,
  'vi-VN': vi,
  'zh-CN': zh,
  'zh-TW': zh,
  pseudo: en
};
function dynamicActivate(_x) {
  return _dynamicActivate.apply(this, arguments);
}
function _dynamicActivate() {
  _dynamicActivate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(locale) {
    var catalog;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            i18n.loadLocaleData(locale, {
              plurals: function plurals() {
                return _plurals[locale];
              }
            });
            _context.prev = 1;
            _context.next = 4;
            return import("./locales/".concat(locale, ".js"));
          case 4:
            catalog = _context.sent;
            // Bundlers will either export it as default or as a named export named default.
            i18n.load(locale, catalog.messages || catalog["default"].messages);
            _context.next = 10;
            break;
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
          case 10:
            i18n.activate(locale);
          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));
  return _dynamicActivate.apply(this, arguments);
}
function Provider(_ref2) {
  var locale = _ref2.locale,
    _ref2$forceRenderAfte = _ref2.forceRenderAfterLocaleChange,
    forceRenderAfterLocaleChange = _ref2$forceRenderAfte === void 0 ? true : _ref2$forceRenderAfte,
    onActivate = _ref2.onActivate,
    children = _ref2.children;
  var processedLocale = useMemo(function () {
    if (locale && ![].concat(_toConsumableArray(SUPPORTED_LOCALES), ['pseudo']).includes(locale)) {
      console.warn("Unsupported locale: ".concat(locale, ". Falling back to ").concat(DEFAULT_LOCALE, "."));
      return DEFAULT_LOCALE;
    }
    return locale !== null && locale !== void 0 ? locale : DEFAULT_LOCALE;
  }, [locale]);
  useEffect(function () {
    dynamicActivate(processedLocale).then(function () {
      return onActivate === null || onActivate === void 0 ? void 0 : onActivate(processedLocale);
    })["catch"](function (error) {
      console.error('Failed to activate locale', processedLocale, error);
    });
  }, [processedLocale, onActivate]);

  // Initialize the locale immediately if it is DEFAULT_LOCALE, so that keys are shown while the translation messages load.
  // This renders the translation _keys_, not the translation _messages_, which is only acceptable while loading the DEFAULT_LOCALE,
  // as [there are no "default" messages](https://github.com/lingui/js-lingui/issues/388#issuecomment-497779030).
  // See https://github.com/lingui/js-lingui/issues/1194#issuecomment-1068488619.
  if (i18n.locale === undefined && locale === DEFAULT_LOCALE) {
    i18n.loadLocaleData(DEFAULT_LOCALE, {
      plurals: function plurals() {
        return _plurals[DEFAULT_LOCALE];
      }
    });
    i18n.load(DEFAULT_LOCALE, {});
    i18n.activate(DEFAULT_LOCALE);
  }
  return /*#__PURE__*/jsxDEV(I18nProvider, {
    forceRenderOnLocaleChange: forceRenderAfterLocaleChange,
    i18n: i18n,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName$6,
    lineNumber: 128,
    columnNumber: 5
  }, this);
}

var RouterPreference;
(function (RouterPreference) {
  RouterPreference["API"] = "api";
  RouterPreference["CLIENT"] = "client";
})(RouterPreference || (RouterPreference = {}));
var QuoteType;
(function (QuoteType) {
  QuoteType["TRADE"] = "trade";
  QuoteType["PRICE"] = "price";
  QuoteType["SKIP"] = "skip";
})(QuoteType || (QuoteType = {}));
var PoolType;

// swap router API special cases these strings to represent native currencies
// all chains have "ETH" as native currency symbol except for polygon
(function (PoolType) {
  PoolType["V2Pool"] = "v2-pool";
  PoolType["V3Pool"] = "v3-pool";
})(PoolType || (PoolType = {}));
var SwapRouterNativeAssets;
(function (SwapRouterNativeAssets) {
  SwapRouterNativeAssets["MATIC"] = "MATIC";
  SwapRouterNativeAssets["ETH"] = "ETH";
})(SwapRouterNativeAssets || (SwapRouterNativeAssets = {}));

var Field;
(function (Field) {
  Field["INPUT"] = "INPUT";
  Field["OUTPUT"] = "OUTPUT";
})(Field || (Field = {}));
var initialSwap = _defineProperty({
  type: TradeType.EXACT_INPUT,
  amount: ''
}, Field.INPUT, nativeOnChain(SupportedChainId.MAINNET));
var controlledAtom$1 = atom(undefined);
var stateAtom$1 = atomWithImmer(initialSwap);
var swapAtom = atom(function (get) {
  var controlled = get(controlledAtom$1);
  return controlled ? controlled : get(stateAtom$1);
}, stateAtom$1.write);

// If set to a transaction hash, that transaction will display in a status dialog.
atom(undefined);
atom(undefined);

/** An integration hook called when the user selects a new token. */

/**
 * An integration hook called when the user enters a new amount.
 * If the amount changed from the user clicking Max, origin will be set to 'max'.
 */

/** An integration hook called when the user switches the tokens. */

/**
 * An integration hook called when the user clicks the token selector.
 * If the hook resolve to false or rejects, the token selector will not open.
 */

/** An integration hook called when the user expands a swap's details. */

/**
 * An integration hook called when the user clicks 'Review swap'.
 * If the hook resolves to false or rejects, the review dialog will not open.
 */

/** An integration hook called when the user receives an initial quote for a set of inputs. */

/** An integration hook called when the user acks a quote's price update. */

/** An integration hook called when the user approves a token, either through allowance or permit. */

/** An integration hook called when the confirms a swap, but before it is submitted. */

var swapEventHandlersAtom = atom({});
atom(undefined);

function isExactInput(tradeType) {
  return tradeType === TradeType.EXACT_INPUT;
}
function invertTradeType(tradeType) {
  switch (tradeType) {
    case TradeType.EXACT_INPUT:
      return TradeType.EXACT_OUTPUT;
    case TradeType.EXACT_OUTPUT:
      return TradeType.EXACT_INPUT;
  }
}
function toTradeType(modifiedField) {
  switch (modifiedField) {
    case Field.INPUT:
      return TradeType.EXACT_INPUT;
    case Field.OUTPUT:
      return TradeType.EXACT_OUTPUT;
  }
}

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var TradeState;

// from https://github.com/Uniswap/routing-api/blob/main/lib/handlers/schema.ts
(function (TradeState) {
  TradeState[TradeState["LOADING"] = 0] = "LOADING";
  TradeState[TradeState["INVALID"] = 1] = "INVALID";
  TradeState[TradeState["NO_ROUTE_FOUND"] = 2] = "NO_ROUTE_FOUND";
  TradeState[TradeState["VALID"] = 3] = "VALID";
})(TradeState || (TradeState = {}));
var QuoteState;
(function (QuoteState) {
  QuoteState["SUCCESS"] = "Success";
  QuoteState["INITIALIZED"] = "Initialized";
  QuoteState["NOT_FOUND"] = "Not found";
})(QuoteState || (QuoteState = {}));
var InterfaceTrade = /*#__PURE__*/function (_Trade) {
  _inherits(InterfaceTrade, _Trade);
  var _super = _createSuper(InterfaceTrade);
  function InterfaceTrade() {
    _classCallCheck(this, InterfaceTrade);
    return _super.apply(this, arguments);
  }
  return _createClass(InterfaceTrade);
}(Trade);

/**
 * Transforms a Routing API quote into an array of routes that can be used to
 * create a `Trade`.
 */
function computeRoutes(tokenInIsNative, tokenOutIsNative, routes) {
  var _routes$, _routes$$, _routes$2, _routes$3, _routes$4;
  if (routes.length === 0) return [];
  var tokenIn = (_routes$ = routes[0]) === null || _routes$ === void 0 ? void 0 : (_routes$$ = _routes$[0]) === null || _routes$$ === void 0 ? void 0 : _routes$$.tokenIn;
  var tokenOut = (_routes$2 = routes[0]) === null || _routes$2 === void 0 ? void 0 : (_routes$3 = _routes$2[((_routes$4 = routes[0]) === null || _routes$4 === void 0 ? void 0 : _routes$4.length) - 1]) === null || _routes$3 === void 0 ? void 0 : _routes$3.tokenOut;
  if (!tokenIn || !tokenOut) throw new Error('Expected both tokenIn and tokenOut to be present');
  var parsedCurrencyIn = tokenInIsNative ? nativeOnChain(tokenIn.chainId) : parseToken(tokenIn);
  var parsedCurrencyOut = tokenOutIsNative ? nativeOnChain(tokenOut.chainId) : parseToken(tokenOut);
  try {
    return routes.map(function (route) {
      if (route.length === 0) {
        throw new Error('Expected route to have at least one pair or pool');
      }
      var rawAmountIn = route[0].amountIn;
      var rawAmountOut = route[route.length - 1].amountOut;
      if (!rawAmountIn || !rawAmountOut) {
        throw new Error('Expected both amountIn and amountOut to be present');
      }
      var isOnlyV2 = isVersionedRoute(PoolType.V2Pool, route);
      var isOnlyV3 = isVersionedRoute(PoolType.V3Pool, route);
      return {
        routev3: isOnlyV3 ? new Route(route.map(parsePool), parsedCurrencyIn, parsedCurrencyOut) : null,
        routev2: isOnlyV2 ? new Route$1(route.map(parsePair), parsedCurrencyIn, parsedCurrencyOut) : null,
        mixedRoute: !isOnlyV3 && !isOnlyV2 ? new MixedRouteSDK(route.map(parsePoolOrPair), parsedCurrencyIn, parsedCurrencyOut) : null,
        inputAmount: CurrencyAmount.fromRawAmount(parsedCurrencyIn, rawAmountIn),
        outputAmount: CurrencyAmount.fromRawAmount(parsedCurrencyOut, rawAmountOut)
      };
    });
  } catch (e) {
    console.error('computeRoutes error', e);
    return;
  }
}
function transformQuoteToTradeResult(args, data) {
  var _routes$filter$map, _routes$filter$map2, _routes$filter$map3;
  var tokenInAddress = args.tokenInAddress,
    tokenOutAddress = args.tokenOutAddress,
    tradeType = args.tradeType;
  var tokenInIsNative = Object.values(SwapRouterNativeAssets).includes(tokenInAddress);
  var tokenOutIsNative = Object.values(SwapRouterNativeAssets).includes(tokenOutAddress);
  var routes = computeRoutes(tokenInIsNative, tokenOutIsNative, data.route);
  var trade = new InterfaceTrade({
    v2Routes: (_routes$filter$map = routes === null || routes === void 0 ? void 0 : routes.filter(function (r) {
      return r.routev2 !== null;
    }).map(function (_ref) {
      var routev2 = _ref.routev2,
        inputAmount = _ref.inputAmount,
        outputAmount = _ref.outputAmount;
      return {
        routev2: routev2,
        inputAmount: inputAmount,
        outputAmount: outputAmount
      };
    })) !== null && _routes$filter$map !== void 0 ? _routes$filter$map : [],
    v3Routes: (_routes$filter$map2 = routes === null || routes === void 0 ? void 0 : routes.filter(function (r) {
      return r.routev3 !== null;
    }).map(function (_ref2) {
      var routev3 = _ref2.routev3,
        inputAmount = _ref2.inputAmount,
        outputAmount = _ref2.outputAmount;
      return {
        routev3: routev3,
        inputAmount: inputAmount,
        outputAmount: outputAmount
      };
    })) !== null && _routes$filter$map2 !== void 0 ? _routes$filter$map2 : [],
    mixedRoutes: (_routes$filter$map3 = routes === null || routes === void 0 ? void 0 : routes.filter(function (r) {
      return r.mixedRoute !== null;
    }).map(function (_ref3) {
      var mixedRoute = _ref3.mixedRoute,
        inputAmount = _ref3.inputAmount,
        outputAmount = _ref3.outputAmount;
      return {
        mixedRoute: mixedRoute,
        inputAmount: inputAmount,
        outputAmount: outputAmount
      };
    })) !== null && _routes$filter$map3 !== void 0 ? _routes$filter$map3 : [],
    tradeType: tradeType
  });
  return {
    state: QuoteState.SUCCESS,
    trade: trade,
    gasUseEstimateUSD: data.gasUseEstimateUSD,
    blockNumber: data.blockNumber
  };
}
var parseToken = function parseToken(_ref4) {
  var address = _ref4.address,
    chainId = _ref4.chainId,
    decimals = _ref4.decimals,
    symbol = _ref4.symbol;
  return new Token(chainId, address, parseInt(decimals.toString()), symbol);
};
var parsePool = function parsePool(_ref5) {
  var fee = _ref5.fee,
    sqrtRatioX96 = _ref5.sqrtRatioX96,
    liquidity = _ref5.liquidity,
    tickCurrent = _ref5.tickCurrent,
    tokenIn = _ref5.tokenIn,
    tokenOut = _ref5.tokenOut;
  return new Pool(parseToken(tokenIn), parseToken(tokenOut), parseInt(fee), sqrtRatioX96, liquidity, parseInt(tickCurrent));
};
var parsePair = function parsePair(_ref6) {
  var reserve0 = _ref6.reserve0,
    reserve1 = _ref6.reserve1;
  return new Pair(CurrencyAmount.fromRawAmount(parseToken(reserve0.token), reserve0.quotient), CurrencyAmount.fromRawAmount(parseToken(reserve1.token), reserve1.quotient));
};
var parsePoolOrPair = function parsePoolOrPair(pool) {
  return pool.type === PoolType.V3Pool ? parsePool(pool) : parsePair(pool);
};
function isVersionedRoute(type, route) {
  return route.every(function (pool) {
    return pool.type === type;
  });
}

var NON_SERIALIZABLE_KEYS = ['provider', 'onQuote'];
function serializeGetQuoteArgs(args) {
  return JSON.stringify(args, function (key, value) {
    if (NON_SERIALIZABLE_KEYS.includes(key)) {
      return undefined;
    }
    if (isPlainObject(value)) {
      return Object.keys(value).sort().reduce(function (acc, key) {
        acc[key] = value[key];
        return acc;
      }, {});
    } else {
      return value;
    }
  });
}

/** Omits the non-serializable keys from GetQuoteArgs' cache key. */
function serializeGetQuoteQueryArgs(_ref) {
  var endpointName = _ref.endpointName,
    queryArgs = _ref.queryArgs;
  return "".concat(endpointName, "(").concat(serializeGetQuoteArgs(queryArgs), ")");
}

function ownKeys$2(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$2(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$2(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var protocols = [Protocol.V2, Protocol.V3, Protocol.MIXED];

// routing API quote query params: https://github.com/Uniswap/routing-api/blob/main/lib/handlers/quote/schema/quote-schema.ts
var DEFAULT_QUERY_PARAMS = {
  protocols: protocols.map(function (p) {
    return p.toLowerCase();
  }).join(',')
};
var baseQuery = function baseQuery() {
  return {
    error: {
      status: 'CUSTOM_ERROR',
      error: 'Unimplemented baseQuery'
    }
  };
};
var routing = createApi({
  reducerPath: 'routing',
  baseQuery: baseQuery,
  serializeQueryArgs: serializeGetQuoteQueryArgs,
  endpoints: function endpoints(build) {
    return {
      getTradeQuote: build.query({
        onQueryStarted: function onQueryStarted(args, _ref) {
          return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
            var _args$onQuote;
            var queryFulfilled;
            return _regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    queryFulfilled = _ref.queryFulfilled;
                    if (!(args === skipToken)) {
                      _context.next = 3;
                      break;
                    }
                    return _context.abrupt("return");
                  case 3:
                    (_args$onQuote = args.onQuote) === null || _args$onQuote === void 0 ? void 0 : _args$onQuote.call(args, JSON.parse(serializeGetQuoteArgs(args)), WidgetPromise.from(queryFulfilled, function (_ref2) {
                      var data = _ref2.data;
                      return data;
                    }, function (error) {
                      var queryError = error.error;
                      if (queryError && _typeof(queryError) === 'object' && 'status' in queryError) {
                        var parsedError = queryError;
                        switch (parsedError.status) {
                          case 'CUSTOM_ERROR':
                          case 'FETCH_ERROR':
                          case 'PARSING_ERROR':
                            throw new WidgetError({
                              message: parsedError.error,
                              error: parsedError
                            });
                          default:
                            throw new WidgetError({
                              message: parsedError.status.toString(),
                              error: parsedError
                            });
                        }
                      }
                      throw new WidgetError({
                        message: 'Unknown error',
                        error: error
                      });
                    }));
                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }))();
        },
        // Explicitly typing the return type enables typechecking of return values.
        queryFn: function queryFn(args) {
          return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
            var tokenInAddress, tokenInChainId, tokenOutAddress, tokenOutChainId, amount, tradeType, type, query, response, data, quoteData, tradeResult, _ref3, _error$message, clientSideSmartOrderRouter, quoteResult, _tradeResult, _ref4, _error$message2;
            return _regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(args === skipToken)) {
                      _context2.next = 2;
                      break;
                    }
                    return _context2.abrupt("return", {
                      error: {
                        status: 'CUSTOM_ERROR',
                        error: 'Skipped'
                      }
                    });
                  case 2:
                    if (!(
                    // If enabled, try the routing API, falling back to client-side routing.
                    args.routerPreference === RouterPreference.API && Boolean(args.routerUrl) &&
                    // A null amount may be passed to initialize the client-side routing.
                    args.amount !== null)) {
                      _context2.next = 28;
                      break;
                    }
                    _context2.prev = 3;
                    tokenInAddress = args.tokenInAddress, tokenInChainId = args.tokenInChainId, tokenOutAddress = args.tokenOutAddress, tokenOutChainId = args.tokenOutChainId, amount = args.amount, tradeType = args.tradeType;
                    type = isExactInput(tradeType) ? 'exactIn' : 'exactOut';
                    query = qs.stringify(_objectSpread$2(_objectSpread$2({}, DEFAULT_QUERY_PARAMS), {}, {
                      tokenInAddress: tokenInAddress,
                      tokenInChainId: tokenInChainId,
                      tokenOutAddress: tokenOutAddress,
                      tokenOutChainId: tokenOutChainId,
                      amount: amount,
                      type: type
                    }));
                    _context2.next = 9;
                    return global.fetch("".concat(args.routerUrl, "quote?").concat(query));
                  case 9:
                    response = _context2.sent;
                    if (response.ok) {
                      _context2.next = 18;
                      break;
                    }
                    _context2.next = 13;
                    return response.text();
                  case 13:
                    data = _context2.sent;
                    try {
                      data = JSON.parse(data);
                    } catch (_unused) {}

                    // NO_ROUTE should be treated as a valid response to prevent retries.
                    if (!(_typeof(data) === 'object' && data.errorCode === 'NO_ROUTE')) {
                      _context2.next = 17;
                      break;
                    }
                    return _context2.abrupt("return", {
                      data: {
                        state: QuoteState.NOT_FOUND
                      }
                    });
                  case 17:
                    throw data;
                  case 18:
                    _context2.next = 20;
                    return response.json();
                  case 20:
                    quoteData = _context2.sent;
                    tradeResult = transformQuoteToTradeResult(args, quoteData);
                    return _context2.abrupt("return", {
                      data: tradeResult
                    });
                  case 25:
                    _context2.prev = 25;
                    _context2.t0 = _context2["catch"](3);
                    console.warn("GetQuote failed on routing API, falling back to client: ".concat((_ref3 = (_error$message = _context2.t0 === null || _context2.t0 === void 0 ? void 0 : _context2.t0.message) !== null && _error$message !== void 0 ? _error$message : _context2.t0 === null || _context2.t0 === void 0 ? void 0 : _context2.t0.detail) !== null && _ref3 !== void 0 ? _ref3 : _context2.t0));
                  case 28:
                    _context2.next = 30;
                    return import('./clientSideSmartOrderRouter-8f981eac.js');
                  case 30:
                    clientSideSmartOrderRouter = _context2.sent;
                    _context2.prev = 31;
                    _context2.next = 34;
                    return clientSideSmartOrderRouter.getClientSideQuoteResult(args, {
                      protocols: protocols
                    });
                  case 34:
                    quoteResult = _context2.sent;
                    if (!(quoteResult.state === QuoteState.SUCCESS)) {
                      _context2.next = 40;
                      break;
                    }
                    _tradeResult = transformQuoteToTradeResult(args, quoteResult.data);
                    return _context2.abrupt("return", {
                      data: _tradeResult
                    });
                  case 40:
                    return _context2.abrupt("return", {
                      data: quoteResult
                    });
                  case 41:
                    _context2.next = 47;
                    break;
                  case 43:
                    _context2.prev = 43;
                    _context2.t1 = _context2["catch"](31);
                    console.warn("GetQuote failed on client: ".concat(_context2.t1));
                    return _context2.abrupt("return", {
                      error: {
                        status: 'CUSTOM_ERROR',
                        error: (_ref4 = (_error$message2 = _context2.t1 === null || _context2.t1 === void 0 ? void 0 : _context2.t1.message) !== null && _error$message2 !== void 0 ? _error$message2 : _context2.t1 === null || _context2.t1 === void 0 ? void 0 : _context2.t1.detail) !== null && _ref4 !== void 0 ? _ref4 : _context2.t1
                      }
                    });
                  case 47:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, null, [[3, 25], [31, 43]]);
          }))();
        },
        keepUnusedDataFor: 10000
      })
    };
  }
});
routing.useLazyGetTradeQuoteQuery;
routing.endpoints.getTradeQuote.useQueryState;

var _combineReducers;
var reducer = combineReducers((_combineReducers = {}, _defineProperty(_combineReducers, multicall.reducerPath, multicall.reducer), _defineProperty(_combineReducers, routing.reducerPath, routing.reducer), _combineReducers));
var store = configureStore({
  reducer: reducer,
  middleware: function middleware(getDefaultMiddleware) {
    return (
      // in routing, we pass in a non-serializable provider object to queryFn to avoid re-instantiating on every query
      // rtk-query stores original args in state, so we need to turn off serializableCheck
      // this is OK because we don't use time-travel debugging nor persistence
      getDefaultMiddleware({
        thunk: true,
        serializableCheck: {
          // meta.arg and meta.baseQueryMeta are defaults. payload.trade is a nonserializable return value, but that's ok
          // because we are not adding it into any persisted store that requires serialization (e.g. localStorage)
          ignoredActionPaths: ['meta.arg', 'meta.baseQueryMeta', 'payload.trade'],
          ignoredPaths: [routing.reducerPath]
        }
      }).concat(routing.middleware)
    );
  }
});

// Widget width breakpoints, denoted in px
var WIDGET_BREAKPOINTS;
// Screen width breakpoints, denoted in px
(function (WIDGET_BREAKPOINTS) {
  WIDGET_BREAKPOINTS[WIDGET_BREAKPOINTS["EXTRA_WIDE"] = 440] = "EXTRA_WIDE";
  WIDGET_BREAKPOINTS[WIDGET_BREAKPOINTS["WIDE"] = 420] = "WIDE";
  WIDGET_BREAKPOINTS[WIDGET_BREAKPOINTS["MEDIUM"] = 400] = "MEDIUM";
  WIDGET_BREAKPOINTS[WIDGET_BREAKPOINTS["SMALL"] = 375] = "SMALL";
  WIDGET_BREAKPOINTS[WIDGET_BREAKPOINTS["EXTRA_SMALL"] = 360] = "EXTRA_SMALL";
})(WIDGET_BREAKPOINTS || (WIDGET_BREAKPOINTS = {}));
var SCREEN_BREAKPOINTS;
(function (SCREEN_BREAKPOINTS) {
  SCREEN_BREAKPOINTS[SCREEN_BREAKPOINTS["MOBILE"] = 900] = "MOBILE";
})(SCREEN_BREAKPOINTS || (SCREEN_BREAKPOINTS = {}));

var _jsxFileName$5 = "D:\\Gozillapad\\widgets\\src\\hooks\\useWidgetWidth.tsx";
var WidgetWidthContext = /*#__PURE__*/createContext(0);
function WidgetWidthProvider(_ref) {
  var width = _ref.width,
    children = _ref.children;
  return /*#__PURE__*/jsxDEV(WidgetWidthContext.Provider, {
    value: width,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName$5,
    lineNumber: 11,
    columnNumber: 10
  }, this);
}

/**
 * Converts a number to a CSS length string. If the value is not a number, it is returned as is.
 * If the value is a number, we treat it like a pixel amount.
 *
 * @param length CSS length value, either a string like "100%" or "100px" or a number like 100
 */
function toLength(length) {
  if (isNaN(Number(length))) {
    return length;
  } else {
    return "".concat(length, "px");
  }
}

var _jsxFileName$4 = "D:\\Gozillapad\\widgets\\src\\components\\WidgetWrapper.tsx";
var ROOT_CONTAINER_PADDING = 8;
var StyledWidgetWrapper = /*#__PURE__*/_styled.div.withConfig({
  displayName: "WidgetWrapper__StyledWidgetWrapper",
  componentId: "sc-11krezp-0"
})(["-webkit-tap-highlight-color:rgba(0,0,0,0);background-color:", ";border:", ";border-radius:", "rem;box-shadow:", ";box-sizing:border-box;display:flex;flex-direction:column;max-width:600px;min-height:300px;min-width:300px;padding:", "px;position:relative;user-select:none;width:", ";*{box-sizing:border-box;}", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.container;
}, function (_ref2) {
  var theme = _ref2.theme;
  return "1px solid ".concat(theme.outline);
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.borderRadius.large;
}, function (_ref4) {
  var theme = _ref4.theme;
  return "0px 40px 120px 0px ".concat(theme.networkDefaultShadow);
}, ROOT_CONTAINER_PADDING, function (_ref5) {
  var width = _ref5.width;
  return toLength(width);
}, globalFontStyles);
function WidgetWrapper(props) {
  var initialWidth = useMemo(function () {
    var _props$width;
    if (props.width) {
      if (props.width < 300) {
        console.warn("Widget width must be at least 300px (you set it to ".concat(props.width, "). Falling back to 300px."));
        return 300;
      }
      if (props.width > 600) {
        console.warn("Widget width must be at most 600px (you set it to ".concat(props.width, "). Falling back to 600px."));
        return 600;
      }
    }
    return (_props$width = props.width) !== null && _props$width !== void 0 ? _props$width : WIDGET_BREAKPOINTS.EXTRA_SMALL;
  }, [props.width]);

  /**
   * We need to manually track the width of the widget because the width prop could be a string
   * like "100%" or "400px" instead of a number.
   */
  var ref = useRef(null);
  var _useState = useState(toLength(initialWidth) === initialWidth ? WIDGET_BREAKPOINTS.EXTRA_SMALL // If the initial width is a string, use default width until the ResizeObserver gives us the true width as a number.
    : initialWidth),
    _useState2 = _slicedToArray(_useState, 2),
    wrapperWidth = _useState2[0],
    setWidgetWidth = _useState2[1];
  useEffect(function () {
    var observer = new ResizeObserver(function (entries) {
      // contentRect doesn't include padding or borders
      var width = entries[0].contentRect.width;
      setWidgetWidth(width + 2 * ROOT_CONTAINER_PADDING);
    });
    var current = ref.current;
    if (current) {
      observer.observe(ref.current);
    }
    return function () {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);
  return /*#__PURE__*/jsxDEV(StyledWidgetWrapper, {
    width: initialWidth,
    className: props.className,
    ref: ref,
    children: /*#__PURE__*/jsxDEV(WidgetWidthProvider, {
      width: wrapperWidth,
      children: props.children
    }, void 0, false, {
      fileName: _jsxFileName$4,
      lineNumber: 85,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName$4,
    lineNumber: 84,
    columnNumber: 5
  }, this);
}

var _jsxFileName$3 = "D:\\Gozillapad\\widgets\\src\\components\\Widget.tsx";
function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var DialogWrapper = /*#__PURE__*/_styled.div.withConfig({
  displayName: "Widget__DialogWrapper",
  componentId: "sc-f3lvcb-0"
})(["border-radius:", "rem;height:100%;left:0;padding:0.5rem;position:absolute;top:0;width:100%;"], function (_ref) {
  var theme = _ref.theme;
  return theme.borderRadius.large;
});
function Widget(props) {
  var _useState = useState(props.dialog || null),
    _useState2 = _slicedToArray(_useState, 2),
    dialog = _useState2[0],
    setDialog = _useState2[1];
  return /*#__PURE__*/jsxDEV(StrictMode, {
    children: /*#__PURE__*/jsxDEV(Provider$7, {
      theme: props.theme,
      children: /*#__PURE__*/jsxDEV(WidgetWrapper, {
        width: props.width,
        className: props.className,
        children: /*#__PURE__*/jsxDEV(Provider, {
          locale: props.locale,
          children: [/*#__PURE__*/jsxDEV(DialogWrapper, {
            ref: setDialog
          }, void 0, false, {
            fileName: _jsxFileName$3,
            lineNumber: 53,
            columnNumber: 13
          }, this), /*#__PURE__*/jsxDEV(Provider$6, {
            value: props.dialog || dialog,
            options: props.dialogOptions,
            children: /*#__PURE__*/jsxDEV(ErrorBoundary, {
              onError: props.onError,
              children: /*#__PURE__*/jsxDEV(Provider$8, {
                store: store,
                children: /*#__PURE__*/jsxDEV(Provider$9, {
                  initialValues: useInitialFlags(props),
                  children: [/*#__PURE__*/jsxDEV(WidgetUpdater, _objectSpread$1({}, props), void 0, false, {
                    fileName: _jsxFileName$3,
                    lineNumber: 61,
                    columnNumber: 21
                  }, this), /*#__PURE__*/jsxDEV(Provider$1, _objectSpread$1(_objectSpread$1({}, props), {}, {
                    children: /*#__PURE__*/jsxDEV(Provider$5, {
                      children: [/*#__PURE__*/jsxDEV(MulticallUpdater, {}, void 0, false, {
                        fileName: _jsxFileName$3,
                        lineNumber: 64,
                        columnNumber: 25
                      }, this), /*#__PURE__*/jsxDEV(TransactionsUpdater, _objectSpread$1({}, props), void 0, false, {
                        fileName: _jsxFileName$3,
                        lineNumber: 65,
                        columnNumber: 25
                      }, this), /*#__PURE__*/jsxDEV(Provider$2, {
                        list: props.tokenList,
                        children: props.children
                      }, void 0, false, {
                        fileName: _jsxFileName$3,
                        lineNumber: 66,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$3,
                      lineNumber: 63,
                      columnNumber: 23
                    }, this)
                  }), void 0, false, {
                    fileName: _jsxFileName$3,
                    lineNumber: 62,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName$3,
                  lineNumber: 60,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName$3,
                lineNumber: 56,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName$3,
              lineNumber: 55,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$3,
            lineNumber: 54,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName$3,
          lineNumber: 52,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$3,
        lineNumber: 51,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$3,
      lineNumber: 50,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName$3,
    lineNumber: 49,
    columnNumber: 5
  }, this);
}

/** A component in the scope of AtomProvider to set Widget-scoped state. */
function WidgetUpdater(props) {
  useSyncWidgetEventHandlers(props);
  return null;
}

/* eslint-disable @typescript-eslint/ban-types */

/**
 * Creates a derived atom whose value is the picked object property.
 * By default, the setter acts as a primitive atom's, changing the original atom.
 * A custom setter may also be passed, which uses an Immer Draft so that it may be mutated directly.
 */

function pickAtom(anAtom, key) {
  var setter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (draft, update) {
    return update;
  };
  return atom(function (get) {
    return get(anAtom)[key];
  }, function (get, set, update) {
    return set(withImmer(anAtom), function (value) {
      var derived = setter(value[key], update);
      value[key] = derived;
    });
  });
}

// The oldest block (per chain) to be considered valid.
atomWithImmer({});

var _STABLECOIN_AMOUNT_OU;

// Stablecoin amounts used when calculating spot price for a given currency.
// The amount is large enough to filter low liquidity pairs.
(_STABLECOIN_AMOUNT_OU = {}, _defineProperty(_STABLECOIN_AMOUNT_OU, SupportedChainId.MAINNET, CurrencyAmount.fromRawAmount(USDC_MAINNET, 100000e6)), _defineProperty(_STABLECOIN_AMOUNT_OU, SupportedChainId.ARBITRUM_ONE, CurrencyAmount.fromRawAmount(USDC_ARBITRUM, 10000e6)), _defineProperty(_STABLECOIN_AMOUNT_OU, SupportedChainId.OPTIMISM, CurrencyAmount.fromRawAmount(DAI_OPTIMISM, 10000e18)), _defineProperty(_STABLECOIN_AMOUNT_OU, SupportedChainId.POLYGON, CurrencyAmount.fromRawAmount(USDC_POLYGON, 10000e6)), _defineProperty(_STABLECOIN_AMOUNT_OU, SupportedChainId.CELO, CurrencyAmount.fromRawAmount(CUSD_CELO, 10000e18)), _defineProperty(_STABLECOIN_AMOUNT_OU, SupportedChainId.BASE, CurrencyAmount.fromRawAmount(USDC_BASE, 10000e6)), _STABLECOIN_AMOUNT_OU);

({
  state: TradeState.INVALID,
  trade: undefined
});
({
  state: TradeState.NO_ROUTE_FOUND,
  trade: undefined
});
({
  state: TradeState.LOADING,
  trade: undefined
});

var ApprovalState$1;
(function (ApprovalState) {
  ApprovalState[ApprovalState["PENDING"] = 0] = "PENDING";
  ApprovalState[ApprovalState["SYNCING"] = 1] = "SYNCING";
  ApprovalState[ApprovalState["SYNCED"] = 2] = "SYNCED";
})(ApprovalState$1 || (ApprovalState$1 = {}));
var AllowanceState;
(function (AllowanceState) {
  AllowanceState[AllowanceState["LOADING"] = 0] = "LOADING";
  AllowanceState[AllowanceState["REQUIRED"] = 1] = "REQUIRED";
  AllowanceState[AllowanceState["ALLOWED"] = 2] = "ALLOWED";
})(AllowanceState || (AllowanceState = {}));

// used for rewards deadlines
JSBI.BigInt(60 * 60 * 24 * 7);
JSBI.BigInt(0);

// one basis JSBI.BigInt
var BIPS_BASE = JSBI.BigInt(10000);
new Percent(JSBI.BigInt(1), BIPS_BASE);

// used for warning states
new Percent(JSBI.BigInt(100), BIPS_BASE); // 1%
new Percent(JSBI.BigInt(300), BIPS_BASE); // 3%
new Percent(JSBI.BigInt(500), BIPS_BASE); // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
new Percent(JSBI.BigInt(1000), BIPS_BASE); // 10%
// for non expert mode disable swaps above this
new Percent(JSBI.BigInt(1500), BIPS_BASE); // 15%

new Percent(JSBI.BigInt(50), BIPS_BASE);
new Percent('0');
new Percent(JSBI.BigInt(200), BIPS_BASE);
new Percent('1');

var initialSettings = {
  slippage: {
    auto: true,
    max: undefined
  },
  transactionTtl: undefined,
  // Set to API by default so that if the consumer passes in the `routerUrl` prop, it is
  // automatically set to use that url. Otherwise, it will fallback to client side routing.
  routerPreference: RouterPreference.API
};
var controlledAtom = atom(undefined);
var stateAtom = atomWithReset(initialSettings);
var settingsAtom = atom(function (get) {
  var controlled = get(controlledAtom);
  return controlled ? controlled : get(stateAtom);
}, stateAtom.write);
pickAtom(settingsAtom, 'slippage');
pickAtom(settingsAtom, 'transactionTtl');
pickAtom(settingsAtom, 'routerPreference');

/** An integration hook called when the user resets settings. */

/** An integration hook called when the user changes slippage settings. */

/** An integration hook called when the user changes transaction deadline settings. */

new Percent(50, 10000); // .50%
var ONE_TENTHS_PERCENT = new Percent(10, 10000); // .10%
var DEFAULT_AUTO_SLIPPAGE = ONE_TENTHS_PERCENT;
new Percent(10, 100); // 10%
new Percent(5, 1000); // 0.5%
new Percent(25, 100); // 25%

var DEFAULT_SLIPPAGE = {
  auto: true,
  allowed: DEFAULT_AUTO_SLIPPAGE
};
new Percent(1, 2);
new Percent(1, 100);

var _SupportedChainId$MAI, _SupportedChainId$ROP, _PERMITTABLE_TOKENS;
var PermitType;

// 20 minutes to submit after signing
(function (PermitType) {
  PermitType[PermitType["AMOUNT"] = 1] = "AMOUNT";
  PermitType[PermitType["ALLOWED"] = 2] = "ALLOWED";
})(PermitType || (PermitType = {}));
// todo: read this information from extensions on token lists or elsewhere (permit registry?)
(_PERMITTABLE_TOKENS = {}, _defineProperty(_PERMITTABLE_TOKENS, SupportedChainId.MAINNET, (_SupportedChainId$MAI = {}, _defineProperty(_SupportedChainId$MAI, USDC_MAINNET.address, {
  type: PermitType.AMOUNT,
  name: 'USD Coin',
  version: '2'
}), _defineProperty(_SupportedChainId$MAI, DAI.address, {
  type: PermitType.ALLOWED,
  name: 'Dai Stablecoin',
  version: '1'
}), _defineProperty(_SupportedChainId$MAI, UNI[SupportedChainId.MAINNET].address, {
  type: PermitType.AMOUNT,
  name: 'Uniswap'
}), _SupportedChainId$MAI)), _defineProperty(_PERMITTABLE_TOKENS, SupportedChainId.RINKEBY, _defineProperty({
  '0xc7AD46e0b8a400Bb3C915120d284AafbA8fc4735': {
    type: PermitType.ALLOWED,
    name: 'Dai Stablecoin',
    version: '1'
  }
}, UNI[SupportedChainId.RINKEBY].address, {
  type: PermitType.AMOUNT,
  name: 'Uniswap'
})), _defineProperty(_PERMITTABLE_TOKENS, SupportedChainId.ROPSTEN, (_SupportedChainId$ROP = {}, _defineProperty(_SupportedChainId$ROP, UNI[SupportedChainId.ROPSTEN].address, {
  type: PermitType.AMOUNT,
  name: 'Uniswap'
}), _defineProperty(_SupportedChainId$ROP, '0x07865c6E87B9F70255377e024ace6630C1Eaa37F', {
  type: PermitType.AMOUNT,
  name: 'USD Coin',
  version: '2'
}), _SupportedChainId$ROP)), _defineProperty(_PERMITTABLE_TOKENS, SupportedChainId.GOERLI, _defineProperty({}, UNI[SupportedChainId.GOERLI].address, {
  type: PermitType.AMOUNT,
  name: 'Uniswap'
})), _defineProperty(_PERMITTABLE_TOKENS, SupportedChainId.KOVAN, _defineProperty({}, UNI[SupportedChainId.KOVAN].address, {
  type: PermitType.AMOUNT,
  name: 'Uniswap'
})), _PERMITTABLE_TOKENS);
var PermitState;
(function (PermitState) {
  PermitState[PermitState["NOT_APPLICABLE"] = 0] = "NOT_APPLICABLE";
  PermitState[PermitState["LOADING"] = 1] = "LOADING";
  PermitState[PermitState["NOT_SIGNED"] = 2] = "NOT_SIGNED";
  PermitState[PermitState["SIGNED"] = 3] = "SIGNED";
})(PermitState || (PermitState = {}));

var ApprovalState;
(function (ApprovalState) {
  ApprovalState["UNKNOWN"] = "UNKNOWN";
  ApprovalState["NOT_APPROVED"] = "NOT_APPROVED";
  ApprovalState["PENDING"] = "PENDING";
  ApprovalState["APPROVED"] = "APPROVED";
})(ApprovalState || (ApprovalState = {}));

var SwapApprovalState;
(function (SwapApprovalState) {
  SwapApprovalState[SwapApprovalState["REQUIRES_APPROVAL"] = 0] = "REQUIRES_APPROVAL";
  SwapApprovalState[SwapApprovalState["PENDING_APPROVAL"] = 1] = "PENDING_APPROVAL";
  SwapApprovalState[SwapApprovalState["REQUIRES_SIGNATURE"] = 2] = "REQUIRES_SIGNATURE";
  SwapApprovalState[SwapApprovalState["PENDING_SIGNATURE"] = 3] = "PENDING_SIGNATURE";
  SwapApprovalState[SwapApprovalState["APPROVED"] = 4] = "APPROVED";
})(SwapApprovalState || (SwapApprovalState = {}));

var _DEFAULT_SWAP_INFO;
var ChainError;
(function (ChainError) {
  ChainError[ChainError["UNCONNECTED_CHAIN"] = 0] = "UNCONNECTED_CHAIN";
  ChainError[ChainError["ACTIVATING_CHAIN"] = 1] = "ACTIVATING_CHAIN";
  ChainError[ChainError["UNSUPPORTED_CHAIN"] = 2] = "UNSUPPORTED_CHAIN";
  ChainError[ChainError["MISMATCHED_TOKEN_CHAINS"] = 3] = "MISMATCHED_TOKEN_CHAINS";
  ChainError[ChainError["MISMATCHED_CHAINS"] = 4] = "MISMATCHED_CHAINS";
})(ChainError || (ChainError = {}));
var DEFAULT_SWAP_INFO = (_DEFAULT_SWAP_INFO = {}, _defineProperty(_DEFAULT_SWAP_INFO, Field.INPUT, {}), _defineProperty(_DEFAULT_SWAP_INFO, Field.OUTPUT, {}), _defineProperty(_DEFAULT_SWAP_INFO, "error", ChainError.UNCONNECTED_CHAIN), _defineProperty(_DEFAULT_SWAP_INFO, "trade", {
  state: TradeState.INVALID,
  trade: undefined
}), _defineProperty(_DEFAULT_SWAP_INFO, "approval", {
  state: SwapApprovalState.APPROVED
}), _defineProperty(_DEFAULT_SWAP_INFO, "allowance", {
  state: AllowanceState.LOADING
}), _defineProperty(_DEFAULT_SWAP_INFO, "slippage", DEFAULT_SLIPPAGE), _DEFAULT_SWAP_INFO);
var SwapInfoContext = /*#__PURE__*/createContext(DEFAULT_SWAP_INFO);

/** Requires that SwapInfoUpdater be installed in the DOM tree. **/
function useSwapInfo() {
  return useContext(SwapInfoContext);
}

function useSwitchSwapCurrencies() {
  var _useAtomValue = useAtomValue(swapEventHandlersAtom),
    onSwitchTokens = _useAtomValue.onSwitchTokens;
  var setSwap = useUpdateAtom(swapAtom);
  return useCallback(function () {
    setSwap(function (swap) {
      onSwitchTokens === null || onSwitchTokens === void 0 ? void 0 : onSwitchTokens();
      swap.type = invertTradeType(swap.type);
      var oldOutput = swap[Field.OUTPUT];
      swap[Field.OUTPUT] = swap[Field.INPUT];
      swap[Field.INPUT] = oldOutput;
    });
  }, [onSwitchTokens, setSwap]);
}
pickAtom(swapAtom, 'type');
pickAtom(swapAtom, 'amount');

var _jsxFileName$2 = "D:\\Gozillapad\\widgets\\src\\components\\Swap\\ReverseButton.tsx";
var Underlayer = /*#__PURE__*/_styled.div.withConfig({
  displayName: "ReverseButton__Underlayer",
  componentId: "sc-d3cn9-0"
})(["background-color:", ";border-radius:", "em;height:48px;left:50%;position:absolute;transform:translate(-50%,calc(-50% - 2px));width:48px;z-index:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.container;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.borderRadius.medium;
}, Layer.OVERLAY);
var StyledReverseButton = /*#__PURE__*/_styled(Button).withConfig({
  displayName: "ReverseButton__StyledReverseButton",
  componentId: "sc-d3cn9-1"
})(["align-items:center;background-color:", ";border:4px solid ", ";border-radius:", "rem;display:flex;justify-content:center;width:100%;"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.module;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.container;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.borderRadius.medium;
});
function ReverseButton() {
  var _useSwapInfo = useSwapInfo(),
    error = _useSwapInfo.error;
  var isDisabled = error !== undefined;
  var switchCurrencies = useSwitchSwapCurrencies();
  return /*#__PURE__*/jsxDEV(Underlayer, {
    children: /*#__PURE__*/jsxDEV(StyledReverseButton, {
      disabled: isDisabled,
      onClick: switchCurrencies,
      children: /*#__PURE__*/jsxDEV(LargeIcon, {
        icon: Reverse
      }, void 0, false, {
        fileName: _jsxFileName$2,
        lineNumber: 38,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$2,
      lineNumber: 37,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName$2,
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

var _jsxFileName$1 = "D:\\Gozillapad\\widgets\\src\\components\\Swap\\Skeleton.tsx";
var LoadingWrapper = /*#__PURE__*/_styled.div.withConfig({
  displayName: "Skeleton__LoadingWrapper",
  componentId: "sc-1ra2yb8-0"
})(["display:flex;flex-direction:column;justify-content:space-between;"]);
var Blob = /*#__PURE__*/_styled.div.withConfig({
  displayName: "Skeleton__Blob",
  componentId: "sc-1ra2yb8-1"
})(["background-color:", ";border-radius:", ";height:", ";width:", ";"], function (_ref) {
  var isModule = _ref.isModule,
    theme = _ref.theme;
  return isModule ? theme.outline : theme.module;
}, function (_ref2) {
  var radius = _ref2.radius;
  return (radius !== null && radius !== void 0 ? radius : 0.25) + 'rem';
}, function (_ref3) {
  var height = _ref3.height;
  return height;
}, function (_ref4) {
  var width = _ref4.width;
  return width;
});
var WideColumn = /*#__PURE__*/_styled(Column).withConfig({
  displayName: "Skeleton__WideColumn",
  componentId: "sc-1ra2yb8-2"
})(["width:100%;"]);
var TitleColumn = /*#__PURE__*/_styled(Column).withConfig({
  displayName: "Skeleton__TitleColumn",
  componentId: "sc-1ra2yb8-3"
})(["padding:0.5rem;padding-bottom:1.25rem;width:100%;"]);
var InputColumn = /*#__PURE__*/_styled(Column).withConfig({
  displayName: "Skeleton__InputColumn",
  componentId: "sc-1ra2yb8-4"
})(["background-color:", ";border-radius:", "rem;display:flex;gap:1.875rem;margin-bottom:0.25rem;padding:0.75rem;padding-bottom:3.25rem;padding-top:3.25rem;"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.module;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.borderRadius.medium;
});
var OutputColumn = /*#__PURE__*/_styled(InputColumn).withConfig({
  displayName: "Skeleton__OutputColumn",
  componentId: "sc-1ra2yb8-5"
})(["padding-bottom:3rem;padding-top:3.5rem;"]);
var ButtonColumn = /*#__PURE__*/_styled(Column).withConfig({
  displayName: "Skeleton__ButtonColumn",
  componentId: "sc-1ra2yb8-6"
})(["padding-bottom:0rem;padding-top:0.55rem;width:100%;"]);
function FloatingTitle() {
  return /*#__PURE__*/jsxDEV(TitleColumn, {
    gap: 0.75,
    children: /*#__PURE__*/jsxDEV(Row, {
      children: /*#__PURE__*/jsxDEV(Blob, {
        height: "1rem",
        width: "2.5rem"
      }, void 0, false, {
        fileName: _jsxFileName$1,
        lineNumber: 57,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$1,
      lineNumber: 56,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName$1,
    lineNumber: 55,
    columnNumber: 5
  }, this);
}
function FloatingInput() {
  return /*#__PURE__*/jsxDEV(WideColumn, {
    gap: 0.75,
    children: /*#__PURE__*/jsxDEV(Row, {
      children: [/*#__PURE__*/jsxDEV(Blob, {
        height: "2rem",
        width: "3.75rem",
        isModule: true
      }, void 0, false, {
        fileName: _jsxFileName$1,
        lineNumber: 67,
        columnNumber: 9
      }, this), /*#__PURE__*/jsxDEV(Blob, {
        height: "2rem",
        width: "7.25rem",
        isModule: true
      }, void 0, false, {
        fileName: _jsxFileName$1,
        lineNumber: 68,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$1,
      lineNumber: 66,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName$1,
    lineNumber: 65,
    columnNumber: 5
  }, this);
}
function FloatingButton() {
  return /*#__PURE__*/jsxDEV(ButtonColumn, {
    children: /*#__PURE__*/jsxDEV(Blob, {
      height: "3.5rem",
      width: "100%",
      radius: 0.75
    }, void 0, false, {
      fileName: _jsxFileName$1,
      lineNumber: 77,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName$1,
    lineNumber: 76,
    columnNumber: 5
  }, this);
}
function SwapWidgetSkeleton(_ref7) {
  var theme = _ref7.theme,
    width = _ref7.width;
  return /*#__PURE__*/jsxDEV(StrictMode, {
    children: /*#__PURE__*/jsxDEV(Provider$7, {
      theme: theme,
      children: /*#__PURE__*/jsxDEV(WidgetWrapper, {
        width: width,
        children: /*#__PURE__*/jsxDEV(LoadingWrapper, {
          children: [/*#__PURE__*/jsxDEV(FloatingTitle, {}, void 0, false, {
            fileName: _jsxFileName$1,
            lineNumber: 93,
            columnNumber: 13
          }, this), /*#__PURE__*/jsxDEV(InputColumn, {
            children: /*#__PURE__*/jsxDEV(FloatingInput, {}, void 0, false, {
              fileName: _jsxFileName$1,
              lineNumber: 95,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$1,
            lineNumber: 94,
            columnNumber: 13
          }, this), /*#__PURE__*/jsxDEV("div", {
            children: [/*#__PURE__*/jsxDEV(ReverseButton, {}, void 0, false, {
              fileName: _jsxFileName$1,
              lineNumber: 98,
              columnNumber: 15
            }, this), /*#__PURE__*/jsxDEV(OutputColumn, {
              children: /*#__PURE__*/jsxDEV(FloatingInput, {}, void 0, false, {
                fileName: _jsxFileName$1,
                lineNumber: 100,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName$1,
              lineNumber: 99,
              columnNumber: 15
            }, this), /*#__PURE__*/jsxDEV(FloatingButton, {}, void 0, false, {
              fileName: _jsxFileName$1,
              lineNumber: 102,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$1,
            lineNumber: 97,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName$1,
          lineNumber: 92,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$1,
        lineNumber: 91,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$1,
      lineNumber: 90,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName$1,
    lineNumber: 89,
    columnNumber: 5
  }, this);
}

var _jsxFileName = "D:\\Gozillapad\\widgets\\src\\index.tsx";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function SwapWidget(props) {
  return /*#__PURE__*/jsxDEV(Widget, _objectSpread({}, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 5
  }, this);
}

export { DialogAnimationType as D, EMPTY_TOKEN_LIST as E, Field as F, Logo as L, QuoteState as Q, RouterPreference as R, SwapRouterNativeAssets as S, TransactionType as T, UnknownError as U, WidgetError as W, SwapWidget as a, getNativeLogoURI as b, LogoUpdater as c, useLogos as d, SwapWidgetSkeleton as e, SupportedChainId as f, getAssetsRepoURI as g, DEFAULT_LOCALE as h, isExactInput as i, SUPPORTED_LOCALES as j, UserRejectedRequestError as k, UNISWAP_TOKEN_LIST as l, validateTokens as m, nativeOnChain as n, darkTheme as o, defaultTheme as p, lightTheme as q, invertTradeType as r, toTradeType as t, useLogo as u, validateTokenList as v };
//# sourceMappingURL=index-4dcdee2b.js.map
