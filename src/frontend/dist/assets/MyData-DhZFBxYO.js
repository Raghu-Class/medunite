import { r as reactExports, p as React, aH as clsx, aO as usePortalContext, L as DEMO_CARE_GAPS, j as jsxRuntimeExports, B as Button, F as FlaskConical, T as TriangleAlert, P as Pill, ai as Calendar, W as DEMO_APPOINTMENTS, O as DEMO_MEDICATIONS, Y as DEMO_VITALS, Q as DEMO_LAB_RESULTS, i as ue, n as DEMO_PATIENTS } from "./index-4utdZC3E.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-CMzOpeqR.js";
import { D as Download } from "./download-CYVPrROH.js";
import { H as Heart } from "./heart-CgPgDgav.js";
import { A as Area, T as TrendingUp } from "./Area-CIoHqAne.js";
import { S as Shape, a1 as Symbols, b as filterProps, c as Layer, P as adaptEventsOfChild, A as Animate, d as interpolateNumber, j as isEqual, F as findAllByType, H as ErrorBar, o as getValueByDataKey, a2 as getLinearRegression, n as isFunction, C as Curve, e as isNil, l as LabelList, G as Global, W as Cell, p as getCateCoordinateOfLine, u as uniqueId, g as generateCategoricalChart, B as Bar, X as XAxis, Y as YAxis, f as formatAxisMap, R as ResponsiveContainer, a3 as ReferenceArea, T as Tooltip, L as Legend } from "./generateCategoricalChart-CDEKTkJ0.js";
import { a as Line, L as LineChart } from "./LineChart-DRhFdqPV.js";
import { C as CartesianGrid } from "./CartesianGrid-B6zYq_XM.js";
function _typeof$1(o) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$1(o);
}
function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey$1(descriptor.key), descriptor);
  }
}
function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _callSuper$1(t, o, e) {
  return o = _getPrototypeOf$1(o), _possibleConstructorReturn$1(t, _isNativeReflectConstruct$1() ? Reflect.construct(o, e || [], _getPrototypeOf$1(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn$1(self, call) {
  if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized$1(self);
}
function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$1() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct$1 = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
function _getPrototypeOf$1(o) {
  _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$1(o);
}
function _inherits$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf$1(subClass, superClass);
}
function _setPrototypeOf$1(o, p) {
  _setPrototypeOf$1 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$1(o, p);
}
function _defineProperty$1(obj, key, value) {
  key = _toPropertyKey$1(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$1(t) {
  var i = _toPrimitive$1(t, "string");
  return "symbol" == _typeof$1(i) ? i : i + "";
}
function _toPrimitive$1(t, r) {
  if ("object" != _typeof$1(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$1(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var ZAxis = /* @__PURE__ */ function(_React$Component) {
  function ZAxis2() {
    _classCallCheck$1(this, ZAxis2);
    return _callSuper$1(this, ZAxis2, arguments);
  }
  _inherits$1(ZAxis2, _React$Component);
  return _createClass$1(ZAxis2, [{
    key: "render",
    value: function render() {
      return null;
    }
  }]);
}(reactExports.Component);
_defineProperty$1(ZAxis, "displayName", "ZAxis");
_defineProperty$1(ZAxis, "defaultProps", {
  zAxisId: 0,
  range: [64, 64],
  scale: "auto",
  type: "number"
});
var _excluded = ["option", "isActive"];
function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function ScatterSymbol(_ref) {
  var option = _ref.option, isActive = _ref.isActive, props = _objectWithoutProperties(_ref, _excluded);
  if (typeof option === "string") {
    return /* @__PURE__ */ reactExports.createElement(Shape, _extends$1({
      option: /* @__PURE__ */ reactExports.createElement(Symbols, _extends$1({
        type: option
      }, props)),
      isActive,
      shapeType: "symbols"
    }, props));
  }
  return /* @__PURE__ */ reactExports.createElement(Shape, _extends$1({
    option,
    isActive,
    shapeType: "symbols"
  }, props));
}
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var Scatter = /* @__PURE__ */ function(_PureComponent) {
  function Scatter2() {
    var _this;
    _classCallCheck(this, Scatter2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Scatter2, [].concat(args));
    _defineProperty(_this, "state", {
      isAnimationFinished: false
    });
    _defineProperty(_this, "handleAnimationEnd", function() {
      _this.setState({
        isAnimationFinished: true
      });
    });
    _defineProperty(_this, "handleAnimationStart", function() {
      _this.setState({
        isAnimationFinished: false
      });
    });
    _defineProperty(_this, "id", uniqueId("recharts-scatter-"));
    return _this;
  }
  _inherits(Scatter2, _PureComponent);
  return _createClass(Scatter2, [{
    key: "renderSymbolsStatically",
    value: function renderSymbolsStatically(points) {
      var _this2 = this;
      var _this$props = this.props, shape = _this$props.shape, activeShape = _this$props.activeShape, activeIndex = _this$props.activeIndex;
      var baseProps = filterProps(this.props, false);
      return points.map(function(entry, i) {
        var isActive = activeIndex === i;
        var option = isActive ? activeShape : shape;
        var props = _objectSpread(_objectSpread({}, baseProps), entry);
        return /* @__PURE__ */ React.createElement(Layer, _extends({
          className: "recharts-scatter-symbol",
          key: "symbol-".concat(entry === null || entry === void 0 ? void 0 : entry.cx, "-").concat(entry === null || entry === void 0 ? void 0 : entry.cy, "-").concat(entry === null || entry === void 0 ? void 0 : entry.size, "-").concat(i)
        }, adaptEventsOfChild(_this2.props, entry, i), {
          role: "img"
        }), /* @__PURE__ */ React.createElement(ScatterSymbol, _extends({
          option,
          isActive,
          key: "symbol-".concat(i)
        }, props)));
      });
    }
  }, {
    key: "renderSymbolsWithAnimation",
    value: function renderSymbolsWithAnimation() {
      var _this3 = this;
      var _this$props2 = this.props, points = _this$props2.points, isAnimationActive = _this$props2.isAnimationActive, animationBegin = _this$props2.animationBegin, animationDuration = _this$props2.animationDuration, animationEasing = _this$props2.animationEasing, animationId = _this$props2.animationId;
      var prevPoints = this.state.prevPoints;
      return /* @__PURE__ */ React.createElement(Animate, {
        begin: animationBegin,
        duration: animationDuration,
        isActive: isAnimationActive,
        easing: animationEasing,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "pie-".concat(animationId),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(_ref) {
        var t = _ref.t;
        var stepData = points.map(function(entry, index) {
          var prev = prevPoints && prevPoints[index];
          if (prev) {
            var interpolatorCx = interpolateNumber(prev.cx, entry.cx);
            var interpolatorCy = interpolateNumber(prev.cy, entry.cy);
            var interpolatorSize = interpolateNumber(prev.size, entry.size);
            return _objectSpread(_objectSpread({}, entry), {}, {
              cx: interpolatorCx(t),
              cy: interpolatorCy(t),
              size: interpolatorSize(t)
            });
          }
          var interpolator = interpolateNumber(0, entry.size);
          return _objectSpread(_objectSpread({}, entry), {}, {
            size: interpolator(t)
          });
        });
        return /* @__PURE__ */ React.createElement(Layer, null, _this3.renderSymbolsStatically(stepData));
      });
    }
  }, {
    key: "renderSymbols",
    value: function renderSymbols() {
      var _this$props3 = this.props, points = _this$props3.points, isAnimationActive = _this$props3.isAnimationActive;
      var prevPoints = this.state.prevPoints;
      if (isAnimationActive && points && points.length && (!prevPoints || !isEqual(prevPoints, points))) {
        return this.renderSymbolsWithAnimation();
      }
      return this.renderSymbolsStatically(points);
    }
  }, {
    key: "renderErrorBar",
    value: function renderErrorBar() {
      var isAnimationActive = this.props.isAnimationActive;
      if (isAnimationActive && !this.state.isAnimationFinished) {
        return null;
      }
      var _this$props4 = this.props, points = _this$props4.points, xAxis = _this$props4.xAxis, yAxis = _this$props4.yAxis, children = _this$props4.children;
      var errorBarItems = findAllByType(children, ErrorBar);
      if (!errorBarItems) {
        return null;
      }
      return errorBarItems.map(function(item, i) {
        var _item$props = item.props, direction = _item$props.direction, errorDataKey = _item$props.dataKey;
        return /* @__PURE__ */ React.cloneElement(item, {
          key: "".concat(direction, "-").concat(errorDataKey, "-").concat(points[i]),
          data: points,
          xAxis,
          yAxis,
          layout: direction === "x" ? "vertical" : "horizontal",
          dataPointFormatter: function dataPointFormatter(dataPoint, dataKey) {
            return {
              x: dataPoint.cx,
              y: dataPoint.cy,
              value: direction === "x" ? +dataPoint.node.x : +dataPoint.node.y,
              errorVal: getValueByDataKey(dataPoint, dataKey)
            };
          }
        });
      });
    }
  }, {
    key: "renderLine",
    value: function renderLine() {
      var _this$props5 = this.props, points = _this$props5.points, line = _this$props5.line, lineType = _this$props5.lineType, lineJointType = _this$props5.lineJointType;
      var scatterProps = filterProps(this.props, false);
      var customLineProps = filterProps(line, false);
      var linePoints, lineItem;
      if (lineType === "joint") {
        linePoints = points.map(function(entry) {
          return {
            x: entry.cx,
            y: entry.cy
          };
        });
      } else if (lineType === "fitting") {
        var _getLinearRegression = getLinearRegression(points), xmin = _getLinearRegression.xmin, xmax = _getLinearRegression.xmax, a = _getLinearRegression.a, b = _getLinearRegression.b;
        var linearExp = function linearExp2(x) {
          return a * x + b;
        };
        linePoints = [{
          x: xmin,
          y: linearExp(xmin)
        }, {
          x: xmax,
          y: linearExp(xmax)
        }];
      }
      var lineProps = _objectSpread(_objectSpread(_objectSpread({}, scatterProps), {}, {
        fill: "none",
        stroke: scatterProps && scatterProps.fill
      }, customLineProps), {}, {
        points: linePoints
      });
      if (/* @__PURE__ */ React.isValidElement(line)) {
        lineItem = /* @__PURE__ */ React.cloneElement(line, lineProps);
      } else if (isFunction(line)) {
        lineItem = line(lineProps);
      } else {
        lineItem = /* @__PURE__ */ React.createElement(Curve, _extends({}, lineProps, {
          type: lineJointType
        }));
      }
      return /* @__PURE__ */ React.createElement(Layer, {
        className: "recharts-scatter-line",
        key: "recharts-scatter-line"
      }, lineItem);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props, hide = _this$props6.hide, points = _this$props6.points, line = _this$props6.line, className = _this$props6.className, xAxis = _this$props6.xAxis, yAxis = _this$props6.yAxis, left = _this$props6.left, top = _this$props6.top, width = _this$props6.width, height = _this$props6.height, id = _this$props6.id, isAnimationActive = _this$props6.isAnimationActive;
      if (hide || !points || !points.length) {
        return null;
      }
      var isAnimationFinished = this.state.isAnimationFinished;
      var layerClass = clsx("recharts-scatter", className);
      var needClipX = xAxis && xAxis.allowDataOverflow;
      var needClipY = yAxis && yAxis.allowDataOverflow;
      var needClip = needClipX || needClipY;
      var clipPathId = isNil(id) ? this.id : id;
      return /* @__PURE__ */ React.createElement(Layer, {
        className: layerClass,
        clipPath: needClip ? "url(#clipPath-".concat(clipPathId, ")") : null
      }, needClipX || needClipY ? /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", {
        id: "clipPath-".concat(clipPathId)
      }, /* @__PURE__ */ React.createElement("rect", {
        x: needClipX ? left : left - width / 2,
        y: needClipY ? top : top - height / 2,
        width: needClipX ? width : width * 2,
        height: needClipY ? height : height * 2
      }))) : null, line && this.renderLine(), this.renderErrorBar(), /* @__PURE__ */ React.createElement(Layer, {
        key: "recharts-scatter-symbols"
      }, this.renderSymbols()), (!isAnimationActive || isAnimationFinished) && LabelList.renderCallByParent(this.props, points));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.animationId !== prevState.prevAnimationId) {
        return {
          prevAnimationId: nextProps.animationId,
          curPoints: nextProps.points,
          prevPoints: prevState.curPoints
        };
      }
      if (nextProps.points !== prevState.curPoints) {
        return {
          curPoints: nextProps.points
        };
      }
      return null;
    }
  }]);
}(reactExports.PureComponent);
_defineProperty(Scatter, "displayName", "Scatter");
_defineProperty(Scatter, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  zAxisId: 0,
  legendType: "circle",
  lineType: "joint",
  lineJointType: "linear",
  data: [],
  shape: "circle",
  hide: false,
  isAnimationActive: !Global.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "linear"
});
_defineProperty(Scatter, "getComposedData", function(_ref2) {
  var xAxis = _ref2.xAxis, yAxis = _ref2.yAxis, zAxis = _ref2.zAxis, item = _ref2.item, displayedData = _ref2.displayedData, xAxisTicks = _ref2.xAxisTicks, yAxisTicks = _ref2.yAxisTicks, offset = _ref2.offset;
  var tooltipType = item.props.tooltipType;
  var cells = findAllByType(item.props.children, Cell);
  var xAxisDataKey = isNil(xAxis.dataKey) ? item.props.dataKey : xAxis.dataKey;
  var yAxisDataKey = isNil(yAxis.dataKey) ? item.props.dataKey : yAxis.dataKey;
  var zAxisDataKey = zAxis && zAxis.dataKey;
  var defaultRangeZ = zAxis ? zAxis.range : ZAxis.defaultProps.range;
  var defaultZ = defaultRangeZ && defaultRangeZ[0];
  var xBandSize = xAxis.scale.bandwidth ? xAxis.scale.bandwidth() : 0;
  var yBandSize = yAxis.scale.bandwidth ? yAxis.scale.bandwidth() : 0;
  var points = displayedData.map(function(entry, index) {
    var x = getValueByDataKey(entry, xAxisDataKey);
    var y = getValueByDataKey(entry, yAxisDataKey);
    var z = !isNil(zAxisDataKey) && getValueByDataKey(entry, zAxisDataKey) || "-";
    var tooltipPayload = [{
      name: isNil(xAxis.dataKey) ? item.props.name : xAxis.name || xAxis.dataKey,
      unit: xAxis.unit || "",
      value: x,
      payload: entry,
      dataKey: xAxisDataKey,
      type: tooltipType
    }, {
      name: isNil(yAxis.dataKey) ? item.props.name : yAxis.name || yAxis.dataKey,
      unit: yAxis.unit || "",
      value: y,
      payload: entry,
      dataKey: yAxisDataKey,
      type: tooltipType
    }];
    if (z !== "-") {
      tooltipPayload.push({
        name: zAxis.name || zAxis.dataKey,
        unit: zAxis.unit || "",
        value: z,
        payload: entry,
        dataKey: zAxisDataKey,
        type: tooltipType
      });
    }
    var cx = getCateCoordinateOfLine({
      axis: xAxis,
      ticks: xAxisTicks,
      bandSize: xBandSize,
      entry,
      index,
      dataKey: xAxisDataKey
    });
    var cy = getCateCoordinateOfLine({
      axis: yAxis,
      ticks: yAxisTicks,
      bandSize: yBandSize,
      entry,
      index,
      dataKey: yAxisDataKey
    });
    var size = z !== "-" ? zAxis.scale(z) : defaultZ;
    var radius = Math.sqrt(Math.max(size, 0) / Math.PI);
    return _objectSpread(_objectSpread({}, entry), {}, {
      cx,
      cy,
      x: cx - radius,
      y: cy - radius,
      xAxis,
      yAxis,
      zAxis,
      width: 2 * radius,
      height: 2 * radius,
      size,
      node: {
        x,
        y,
        z
      },
      tooltipPayload,
      tooltipPosition: {
        x: cx,
        y: cy
      },
      payload: entry
    }, cells && cells[index] && cells[index].props);
  });
  return _objectSpread({
    points
  }, offset);
});
var ComposedChart = generateCategoricalChart({
  chartName: "ComposedChart",
  GraphicalChild: [Line, Area, Bar, Scatter],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: XAxis
  }, {
    axisType: "yAxis",
    AxisComp: YAxis
  }, {
    axisType: "zAxis",
    AxisComp: ZAxis
  }],
  formatAxisMap
});
function buildLabTrends(patientId) {
  const PORTAL_PATIENT_ID = patientId;
  const labs = DEMO_LAB_RESULTS.filter(
    (l) => l.patientId === PORTAL_PATIENT_ID
  );
  const hba1cSeries = [
    { month: "Sep '25", value: 8.8 },
    { month: "Nov '25", value: 8.4 },
    { month: "Jan '26", value: 8.2 },
    { month: "Mar '26", value: 7.9 }
  ];
  const glucoseSeries = [
    { month: "Sep '25", value: 210 },
    { month: "Nov '25", value: 195 },
    { month: "Jan '26", value: 182 },
    { month: "Mar '26", value: 168 }
  ];
  const creatinineSeries = [
    { month: "Sep '25", value: 0.95 },
    { month: "Nov '25", value: 0.98 },
    { month: "Jan '26", value: 1.02 },
    { month: "Mar '26", value: 0.99 }
  ];
  const abnormalCount = labs.filter((l) => l.isCritical).length;
  return {
    hba1cSeries,
    glucoseSeries,
    creatinineSeries,
    abnormalCount,
    totalLabs: labs.length
  };
}
function buildVitalsTrends(patientId) {
  const PORTAL_PATIENT_ID = patientId;
  const vitals = DEMO_VITALS.filter((v) => v.patientId === PORTAL_PATIENT_ID).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()).map((v) => ({
    date: new Date(v.date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric"
    }),
    systolic: Number.parseInt(v.bp.split("/")[0] ?? "0"),
    weight: Math.round(v.weight * 2.205)
    // kg to lbs
  }));
  return vitals;
}
function buildMedTimeline(patientId) {
  const PORTAL_PATIENT_ID = patientId;
  return DEMO_MEDICATIONS.filter(
    (m) => m.patientId === PORTAL_PATIENT_ID && m.status === "active"
  );
}
function computeHealthRisk(patientId) {
  const PORTAL_PATIENT_ID = patientId;
  const patient = DEMO_PATIENTS.find((p) => p.id === PORTAL_PATIENT_ID);
  const factors = [];
  let riskPoints = 0;
  if (patient == null ? void 0 : patient.dateOfBirth) {
    const age = (/* @__PURE__ */ new Date()).getFullYear() - new Date(patient.dateOfBirth).getFullYear();
    const ageFactor = age >= 70 ? 20 : age >= 60 ? 14 : age >= 50 ? 8 : age >= 40 ? 4 : 0;
    if (ageFactor > 0) {
      riskPoints += ageFactor;
      factors.push({
        label: "Age",
        contribution: ageFactor,
        detail: `Age ${age} adds baseline risk`
      });
    }
  }
  const patientMeds = DEMO_MEDICATIONS.filter(
    (m) => m.patientId === PORTAL_PATIENT_ID && m.status === "active"
  );
  const medCount = patientMeds.length;
  const conditionRisk = Math.min(25, medCount * 3);
  if (conditionRisk > 0) {
    riskPoints += conditionRisk;
    factors.push({
      label: "Active Conditions",
      contribution: conditionRisk,
      detail: `${medCount} active medications indicate managed conditions`
    });
  }
  const abnormalLabs = DEMO_LAB_RESULTS.filter(
    (l) => l.patientId === PORTAL_PATIENT_ID && l.isCritical
  ).length;
  const labRisk = Math.min(20, abnormalLabs * 8);
  if (labRisk > 0) {
    riskPoints += labRisk;
    factors.push({
      label: "Abnormal Labs",
      contribution: labRisk,
      detail: `${abnormalLabs} critical result${abnormalLabs > 1 ? "s" : ""}`
    });
  }
  const overdueGaps = DEMO_CARE_GAPS.filter(
    (g) => g.patientId === PORTAL_PATIENT_ID && new Date(g.dueDate) < /* @__PURE__ */ new Date()
  ).length;
  const gapRisk = Math.min(15, overdueGaps * 5);
  if (gapRisk > 0) {
    riskPoints += gapRisk;
    factors.push({
      label: "Missed Screenings",
      contribution: gapRisk,
      detail: `${overdueGaps} overdue preventive care item${overdueGaps > 1 ? "s" : ""}`
    });
  }
  const score = Math.min(100, Math.max(5, riskPoints));
  let summary = "";
  if (score < 30) {
    summary = "Your overall health risk is low. Keep up with your preventive care schedule.";
  } else if (score < 60) {
    summary = "Your overall health risk is moderate. Your HbA1c has been improving over the past 6 months. Consider scheduling your annual eye exam.";
  } else {
    summary = "Your overall health risk is elevated. Several factors need attention. Discuss a care plan with your provider at your next visit.";
  }
  return { score, factors, summary };
}
function computeHealthScore(abnormalLabs, overdueGaps) {
  let score = 100;
  score -= abnormalLabs * 8;
  score -= overdueGaps * 6;
  return Math.max(20, Math.min(100, score));
}
function HealthScoreArc({ score }) {
  const angle = score / 100 * 180;
  const color = score >= 75 ? "var(--success)" : score >= 50 ? "var(--warning)" : "var(--destructive)";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-28 h-14 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 rounded-t-full border-8 border-muted",
          style: { borderBottom: "none" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 rounded-t-full border-8",
          style: {
            borderColor: color,
            borderBottom: "none",
            transform: `rotate(${angle - 180}deg)`,
            transformOrigin: "50% 100%",
            transition: "transform 1s ease"
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "-mt-2 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-bold tabular-nums", style: { color }, children: score }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "/100" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: score >= 75 ? "Good" : score >= 50 ? "Needs attention" : "Action required" })
  ] });
}
function MyData() {
  const { id: PORTAL_PATIENT_ID } = usePortalContext();
  const { hba1cSeries, glucoseSeries, creatinineSeries, abnormalCount } = buildLabTrends(PORTAL_PATIENT_ID);
  const vitalsData = buildVitalsTrends(PORTAL_PATIENT_ID);
  const activeMeds = buildMedTimeline(PORTAL_PATIENT_ID);
  const overdueGaps = DEMO_CARE_GAPS.filter(
    (g) => g.patientId === PORTAL_PATIENT_ID && new Date(g.dueDate) < /* @__PURE__ */ new Date()
  ).length;
  const healthScore = computeHealthScore(abnormalCount, overdueGaps);
  const riskData = computeHealthRisk(PORTAL_PATIENT_ID);
  const labChartData = hba1cSeries.map((row, i) => {
    var _a, _b;
    return {
      month: row.month,
      hba1c: row.value,
      glucose: (_a = glucoseSeries[i]) == null ? void 0 : _a.value,
      creatinine: (_b = creatinineSeries[i]) == null ? void 0 : _b.value
    };
  });
  function handleDownload() {
    const data = {
      exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
      patient: { id: 4, name: "Aisha Patel", mrn: "MRN-004" },
      labs: DEMO_LAB_RESULTS.filter(
        (l) => l.patientId === PORTAL_PATIENT_ID
      ).map((l) => ({ test: l.testName, result: l.result, unit: l.unit })),
      vitals: DEMO_VITALS.filter((v) => v.patientId === PORTAL_PATIENT_ID).map(
        (v) => ({ date: v.date, bp: v.bp, hr: v.hr, weight: v.weight })
      ),
      medications: DEMO_MEDICATIONS.filter(
        (m) => m.patientId === PORTAL_PATIENT_ID
      ).map((m) => ({
        name: m.name,
        dose: m.dose,
        frequency: m.frequency,
        status: m.status
      })),
      appointments: DEMO_APPOINTMENTS.filter(
        (a2) => a2.patientId === PORTAL_PATIENT_ID
      ).map((a2) => ({ date: a2.date, status: a2.status }))
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "my-health-data.json";
    a.click();
    URL.revokeObjectURL(url);
    ue.success("Health data downloaded successfully");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", "data-ocid": "mydata.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-lg font-bold text-foreground", children: "My Health Data" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: "Your complete health picture, owned by you." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "outline",
          size: "sm",
          "data-ocid": "mydata.download_button",
          onClick: handleDownload,
          className: "gap-1.5 flex-shrink-0",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3.5 h-3.5" }),
            "Download My Data"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-ocid": "mydata.health_risk.panel", className: "border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "px-5 py-4 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-semibold flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-4 h-4 text-primary" }),
        "Health Risk Score"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "px-5 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-6 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center min-w-[120px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HealthScoreArc, { score: riskData.score }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: riskData.summary }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-2", children: [
            riskData.factors.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "bg-muted rounded p-2 space-y-0.5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground", children: f.label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-destructive", children: [
                      "+",
                      f.contribution
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-snug", children: f.detail })
                ]
              },
              f.label
            )),
            riskData.factors.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-4 text-xs text-muted-foreground", children: "No significant risk factors identified." })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-ocid": "mydata.health_score.card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-semibold flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4 text-primary" }),
          "Health Score"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "flex justify-center pt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HealthScoreArc, { score: healthScore }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-ocid": "mydata.abnormal_labs.card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-semibold flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "w-4 h-4 text-warning" }),
          "Abnormal Labs"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-bold tabular-nums text-foreground", children: abnormalCount }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: abnormalCount === 0 ? "All results within range" : `${abnormalCount} result${abnormalCount > 1 ? "s" : ""} outside normal range` }),
          abnormalCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center gap-1.5 text-xs text-warning", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3 h-3" }),
            "Review with your provider"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-ocid": "mydata.care_gaps.card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-semibold flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-4 h-4 text-destructive" }),
          "Care Gaps"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-bold tabular-nums text-foreground", children: overdueGaps }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: overdueGaps === 0 ? "All screenings up to date" : `${overdueGaps} overdue screening${overdueGaps > 1 ? "s" : ""}` }),
          overdueGaps > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center gap-1.5 text-xs text-destructive", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3 h-3" }),
            "Schedule with your provider"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-ocid": "mydata.lab_trends.card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-semibold flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "w-4 h-4 text-primary" }),
          "Lab Trends"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Key results tracked over time" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-56", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        ComposedChart,
        {
          data: labChartData,
          margin: { top: 4, right: 16, left: 0, bottom: 0 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "var(--border)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              XAxis,
              {
                dataKey: "month",
                tick: { fontSize: 11, fill: "var(--muted-foreground)" },
                axisLine: false,
                tickLine: false
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              YAxis,
              {
                yAxisId: "hba1c",
                domain: [4, 12],
                tick: { fontSize: 11, fill: "var(--muted-foreground)" },
                axisLine: false,
                tickLine: false,
                width: 28
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              YAxis,
              {
                yAxisId: "glucose",
                orientation: "right",
                domain: [60, 300],
                tick: { fontSize: 11, fill: "var(--muted-foreground)" },
                axisLine: false,
                tickLine: false,
                width: 36
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ReferenceArea,
              {
                yAxisId: "hba1c",
                y1: 4,
                y2: 5.7,
                fill: "var(--success)",
                fillOpacity: 0.06
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Tooltip,
              {
                contentStyle: {
                  background: "var(--popover)",
                  border: "1px solid var(--border)",
                  borderRadius: "4px",
                  fontSize: 12
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Legend,
              {
                wrapperStyle: {
                  fontSize: 11,
                  color: "var(--muted-foreground)"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Line,
              {
                yAxisId: "hba1c",
                type: "monotone",
                dataKey: "hba1c",
                stroke: "var(--chart-1)",
                strokeWidth: 2,
                dot: { r: 3 },
                name: "HbA1c (%)"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Line,
              {
                yAxisId: "glucose",
                type: "monotone",
                dataKey: "glucose",
                stroke: "var(--chart-2)",
                strokeWidth: 2,
                dot: { r: 3 },
                name: "Glucose (mg/dL)"
              }
            )
          ]
        }
      ) }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-ocid": "mydata.vitals_trends.card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-semibold flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-4 h-4 text-primary" }),
          "Vitals Trends"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Blood pressure and weight over time" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-48", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        LineChart,
        {
          data: vitalsData,
          margin: { top: 4, right: 16, left: 0, bottom: 0 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "var(--border)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              XAxis,
              {
                dataKey: "date",
                tick: { fontSize: 11, fill: "var(--muted-foreground)" },
                axisLine: false,
                tickLine: false
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              YAxis,
              {
                yAxisId: "bp",
                domain: [60, 180],
                tick: { fontSize: 11, fill: "var(--muted-foreground)" },
                axisLine: false,
                tickLine: false,
                width: 28
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              YAxis,
              {
                yAxisId: "weight",
                orientation: "right",
                domain: [140, 165],
                tick: { fontSize: 11, fill: "var(--muted-foreground)" },
                axisLine: false,
                tickLine: false,
                width: 36
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ReferenceArea,
              {
                yAxisId: "bp",
                y1: 100,
                y2: 130,
                fill: "var(--success)",
                fillOpacity: 0.06
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Tooltip,
              {
                contentStyle: {
                  background: "var(--popover)",
                  border: "1px solid var(--border)",
                  borderRadius: "4px",
                  fontSize: 12
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Legend,
              {
                wrapperStyle: {
                  fontSize: 11,
                  color: "var(--muted-foreground)"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Line,
              {
                yAxisId: "bp",
                type: "monotone",
                dataKey: "systolic",
                stroke: "var(--chart-1)",
                strokeWidth: 2,
                dot: { r: 3 },
                name: "Systolic BP (mmHg)"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Line,
              {
                yAxisId: "weight",
                type: "monotone",
                dataKey: "weight",
                stroke: "var(--chart-3)",
                strokeWidth: 2,
                dot: { r: 3 },
                name: "Weight (lbs)"
              }
            )
          ]
        }
      ) }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-ocid": "mydata.medications.card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-semibold flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { className: "w-4 h-4 text-primary" }),
          "Active Medications"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Current medication schedule" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: activeMeds.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "text-sm text-muted-foreground py-4 text-center",
          "data-ocid": "mydata.medications.empty_state",
          children: "No active medications on file."
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", "data-ocid": "mydata.medications.list", children: [
        activeMeds.map((med, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-ocid": `mydata.medications.item.${idx + 1}`,
            className: "flex items-center gap-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-28 flex-shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground leading-tight", children: med.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                  med.dose,
                  " · ",
                  med.frequency
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 h-5 bg-muted rounded-full overflow-hidden relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute inset-y-0 left-0 rounded-full",
                    style: {
                      width: "100%",
                      background: `var(--chart-${idx % 5 + 1})`,
                      opacity: 0.4
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute inset-y-0 rounded-full",
                    style: {
                      left: `${10 + idx * 5 % 20}%`,
                      right: "0%",
                      background: `var(--chart-${idx % 5 + 1})`,
                      opacity: 0.85
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground flex-shrink-0 w-12 text-right", children: "Present" })
            ]
          },
          String(med.id)
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-2 mt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "6 months ago" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Today" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-ocid": "mydata.timeline.card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-semibold flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4 text-primary" }),
          "Health Timeline"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Your recent health events in chronological order" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HealthTimeline, {}) })
    ] })
  ] });
}
function HealthTimeline() {
  const events = [];
  for (const a of DEMO_APPOINTMENTS.filter((a2) => a2.patientId === 1n)) {
    events.push({
      type: "visit",
      date: new Date(a.date),
      label: `Visit: ${a.status}`,
      sub: new Date(a.date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      })
    });
  }
  for (const l of DEMO_LAB_RESULTS.filter((l2) => l2.patientId === 1n)) {
    const critical = l.isCritical ? " (CRITICAL)" : "";
    events.push({
      type: "lab",
      date: /* @__PURE__ */ new Date(),
      label: `Lab: ${l.testName} ${l.result}${l.unit ? ` ${l.unit}` : ""}${critical}`,
      sub: "On file"
    });
  }
  for (const m of DEMO_MEDICATIONS.filter((m2) => m2.patientId === 1n)) {
    events.push({
      type: "medication",
      date: /* @__PURE__ */ new Date(),
      label: `Med: ${m.name} ${m.dose ?? ""}`,
      sub: m.status === "active" ? "Active" : m.status ?? "On file"
    });
  }
  const sorted = events.sort((a, b) => b.date.getTime() - a.date.getTime()).slice(0, 12);
  if (sorted.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        className: "text-sm text-muted-foreground py-4 text-center",
        "data-ocid": "mydata.timeline.empty_state",
        children: "No timeline events found."
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "relative ml-4 pl-4 border-l-2 border-border space-y-4",
      "data-ocid": "mydata.timeline.list",
      children: sorted.map((event, i) => {
        const iconClass = event.type === "visit" ? "bg-primary/10 text-primary" : event.type === "lab" ? "bg-warning/10 text-warning" : "bg-success/10 text-success";
        const Icon = event.type === "visit" ? Calendar : event.type === "lab" ? FlaskConical : Pill;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-ocid": `mydata.timeline.item.${i + 1}`,
            className: "flex items-start gap-3 relative",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-[22px] top-0.5 w-3 h-3 rounded-full border-2 border-background bg-border" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${iconClass}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-3.5 h-3.5" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-foreground leading-snug", children: event.label }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground flex-shrink-0 text-right", children: event.sub })
            ]
          },
          `${event.type}-${String(i)}`
        );
      })
    }
  );
}
export {
  MyData as default
};
