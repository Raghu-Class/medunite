import { c as createLucideIcon, aH as clsx, p as React, aG as getDefaultExportFromCjs, r as reactExports, j as jsxRuntimeExports, ai as Calendar, aK as ChartNoAxesColumn, U as Users, A as Activity, u as useDemoMode, f as useActor, C as ChevronDown, B as Button, n as DEMO_PATIENTS, O as DEMO_MEDICATIONS, Q as DEMO_LAB_RESULTS, i as ue } from "./index-4utdZC3E.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-D2sDVimt.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-CMzOpeqR.js";
import { T as TrendingUp, A as Area } from "./Area-CIoHqAne.js";
import { B as BarChart } from "./BarChart-Cu6sctOx.js";
import { C as CartesianGrid } from "./CartesianGrid-B6zYq_XM.js";
import { b as filterProps, _ as _baseExtremum, I as _baseGt, J as _baseIteratee, K as _baseLt, n as isFunction, M as Text, N as polarToCartesian, c as Layer, O as getTickClassName, P as adaptEventsOfChild, Q as Label, D as Dot, C as Curve, e as isNil, o as getValueByDataKey, S as Shape, A as Animate, U as get, d as interpolateNumber, j as isEqual, i as isNumber, l as LabelList, u as uniqueId, G as Global, V as mathSign, F as findAllByType, W as Cell, Z as getMaxRadius, $ as getPercentValue, w as warn, g as generateCategoricalChart, a0 as formatAxisMap, X as XAxis, Y as YAxis, T as Tooltip, B as Bar, R as ResponsiveContainer, L as Legend } from "./generateCategoricalChart-CDEKTkJ0.js";
import { L as LineChart, a as Line } from "./LineChart-DRhFdqPV.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-CV6uaqbk.js";
import { A as AreaChart } from "./AreaChart-YQCUV02S.js";
import { I as Input } from "./input-B6WlinMn.js";
import { L as Label$1 } from "./label-eoX2BTTj.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-D0xeunuB.js";
import { S as StatusBadge } from "./StatusBadge-C2Ygw5ZQ.js";
import { C as ChevronUp } from "./chevron-up-BvGEbEf0.js";
import "./index-IXOTxK3N.js";
import "./index-BSY8sZ87.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]
];
const DollarSign = createLucideIcon("dollar-sign", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
];
const Funnel = createLucideIcon("funnel", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M18 21a8 8 0 0 0-16 0", key: "3ypg7q" }],
  ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
  ["path", { d: "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3", key: "10s06x" }]
];
const UsersRound = createLucideIcon("users-round", __iconNode);
var _excluded$1 = ["points", "className", "baseLinePoints", "connectNulls"];
function _extends$3() {
  _extends$3 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends$3.apply(this, arguments);
}
function _objectWithoutProperties$1(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1(source, excluded);
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
function _objectWithoutPropertiesLoose$1(source, excluded) {
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
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
var isValidatePoint = function isValidatePoint2(point) {
  return point && point.x === +point.x && point.y === +point.y;
};
var getParsedPoints = function getParsedPoints2() {
  var points = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  var segmentPoints = [[]];
  points.forEach(function(entry) {
    if (isValidatePoint(entry)) {
      segmentPoints[segmentPoints.length - 1].push(entry);
    } else if (segmentPoints[segmentPoints.length - 1].length > 0) {
      segmentPoints.push([]);
    }
  });
  if (isValidatePoint(points[0])) {
    segmentPoints[segmentPoints.length - 1].push(points[0]);
  }
  if (segmentPoints[segmentPoints.length - 1].length <= 0) {
    segmentPoints = segmentPoints.slice(0, -1);
  }
  return segmentPoints;
};
var getSinglePolygonPath = function getSinglePolygonPath2(points, connectNulls) {
  var segmentPoints = getParsedPoints(points);
  if (connectNulls) {
    segmentPoints = [segmentPoints.reduce(function(res, segPoints) {
      return [].concat(_toConsumableArray(res), _toConsumableArray(segPoints));
    }, [])];
  }
  var polygonPath = segmentPoints.map(function(segPoints) {
    return segPoints.reduce(function(path, point, index) {
      return "".concat(path).concat(index === 0 ? "M" : "L").concat(point.x, ",").concat(point.y);
    }, "");
  }).join("");
  return segmentPoints.length === 1 ? "".concat(polygonPath, "Z") : polygonPath;
};
var getRanglePath = function getRanglePath2(points, baseLinePoints, connectNulls) {
  var outerPath = getSinglePolygonPath(points, connectNulls);
  return "".concat(outerPath.slice(-1) === "Z" ? outerPath.slice(0, -1) : outerPath, "L").concat(getSinglePolygonPath(baseLinePoints.reverse(), connectNulls).slice(1));
};
var Polygon = function Polygon2(props) {
  var points = props.points, className = props.className, baseLinePoints = props.baseLinePoints, connectNulls = props.connectNulls, others = _objectWithoutProperties$1(props, _excluded$1);
  if (!points || !points.length) {
    return null;
  }
  var layerClass = clsx("recharts-polygon", className);
  if (baseLinePoints && baseLinePoints.length) {
    var hasStroke = others.stroke && others.stroke !== "none";
    var rangePath = getRanglePath(points, baseLinePoints, connectNulls);
    return /* @__PURE__ */ React.createElement("g", {
      className: layerClass
    }, /* @__PURE__ */ React.createElement("path", _extends$3({}, filterProps(others, true), {
      fill: rangePath.slice(-1) === "Z" ? others.fill : "none",
      stroke: "none",
      d: rangePath
    })), hasStroke ? /* @__PURE__ */ React.createElement("path", _extends$3({}, filterProps(others, true), {
      fill: "none",
      d: getSinglePolygonPath(points, connectNulls)
    })) : null, hasStroke ? /* @__PURE__ */ React.createElement("path", _extends$3({}, filterProps(others, true), {
      fill: "none",
      d: getSinglePolygonPath(baseLinePoints, connectNulls)
    })) : null);
  }
  var singlePath = getSinglePolygonPath(points, connectNulls);
  return /* @__PURE__ */ React.createElement("path", _extends$3({}, filterProps(others, true), {
    fill: singlePath.slice(-1) === "Z" ? others.fill : "none",
    className: layerClass,
    d: singlePath
  }));
};
var baseExtremum$1 = _baseExtremum, baseGt = _baseGt, baseIteratee$1 = _baseIteratee;
function maxBy(array, iteratee) {
  return array && array.length ? baseExtremum$1(array, baseIteratee$1(iteratee), baseGt) : void 0;
}
var maxBy_1 = maxBy;
const maxBy$1 = /* @__PURE__ */ getDefaultExportFromCjs(maxBy_1);
var baseExtremum = _baseExtremum, baseIteratee = _baseIteratee, baseLt = _baseLt;
function minBy(array, iteratee) {
  return array && array.length ? baseExtremum(array, baseIteratee(iteratee), baseLt) : void 0;
}
var minBy_1 = minBy;
const minBy$1 = /* @__PURE__ */ getDefaultExportFromCjs(minBy_1);
var _excluded = ["cx", "cy", "angle", "ticks", "axisLine"], _excluded2 = ["ticks", "tick", "angle", "tickFormatter", "stroke"];
function _typeof$2(o) {
  "@babel/helpers - typeof";
  return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$2(o);
}
function _extends$2() {
  _extends$2 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends$2.apply(this, arguments);
}
function ownKeys$2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$2(Object(t), true).forEach(function(r2) {
      _defineProperty$2(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
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
function _classCallCheck$2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey$2(descriptor.key), descriptor);
  }
}
function _createClass$2(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$2(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$2(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _callSuper$2(t, o, e) {
  return o = _getPrototypeOf$2(o), _possibleConstructorReturn$2(t, _isNativeReflectConstruct$2() ? Reflect.construct(o, e || [], _getPrototypeOf$2(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn$2(self, call) {
  if (call && (_typeof$2(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized$2(self);
}
function _assertThisInitialized$2(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$2() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct$2 = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
function _getPrototypeOf$2(o) {
  _getPrototypeOf$2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$2(o);
}
function _inherits$2(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf$2(subClass, superClass);
}
function _setPrototypeOf$2(o, p) {
  _setPrototypeOf$2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$2(o, p);
}
function _defineProperty$2(obj, key, value) {
  key = _toPropertyKey$2(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$2(t) {
  var i = _toPrimitive$2(t, "string");
  return "symbol" == _typeof$2(i) ? i : i + "";
}
function _toPrimitive$2(t, r) {
  if ("object" != _typeof$2(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$2(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var PolarRadiusAxis = /* @__PURE__ */ function(_PureComponent) {
  function PolarRadiusAxis2() {
    _classCallCheck$2(this, PolarRadiusAxis2);
    return _callSuper$2(this, PolarRadiusAxis2, arguments);
  }
  _inherits$2(PolarRadiusAxis2, _PureComponent);
  return _createClass$2(PolarRadiusAxis2, [{
    key: "getTickValueCoord",
    value: (
      /**
       * Calculate the coordinate of tick
       * @param  {Number} coordinate The radius of tick
       * @return {Object} (x, y)
       */
      function getTickValueCoord(_ref) {
        var coordinate = _ref.coordinate;
        var _this$props = this.props, angle = _this$props.angle, cx = _this$props.cx, cy = _this$props.cy;
        return polarToCartesian(cx, cy, coordinate, angle);
      }
    )
  }, {
    key: "getTickTextAnchor",
    value: function getTickTextAnchor() {
      var orientation = this.props.orientation;
      var textAnchor;
      switch (orientation) {
        case "left":
          textAnchor = "end";
          break;
        case "right":
          textAnchor = "start";
          break;
        default:
          textAnchor = "middle";
          break;
      }
      return textAnchor;
    }
  }, {
    key: "getViewBox",
    value: function getViewBox() {
      var _this$props2 = this.props, cx = _this$props2.cx, cy = _this$props2.cy, angle = _this$props2.angle, ticks = _this$props2.ticks;
      var maxRadiusTick = maxBy$1(ticks, function(entry) {
        return entry.coordinate || 0;
      });
      var minRadiusTick = minBy$1(ticks, function(entry) {
        return entry.coordinate || 0;
      });
      return {
        cx,
        cy,
        startAngle: angle,
        endAngle: angle,
        innerRadius: minRadiusTick.coordinate || 0,
        outerRadius: maxRadiusTick.coordinate || 0
      };
    }
  }, {
    key: "renderAxisLine",
    value: function renderAxisLine() {
      var _this$props3 = this.props, cx = _this$props3.cx, cy = _this$props3.cy, angle = _this$props3.angle, ticks = _this$props3.ticks, axisLine = _this$props3.axisLine, others = _objectWithoutProperties(_this$props3, _excluded);
      var extent = ticks.reduce(function(result, entry) {
        return [Math.min(result[0], entry.coordinate), Math.max(result[1], entry.coordinate)];
      }, [Infinity, -Infinity]);
      var point0 = polarToCartesian(cx, cy, extent[0], angle);
      var point1 = polarToCartesian(cx, cy, extent[1], angle);
      var props = _objectSpread$2(_objectSpread$2(_objectSpread$2({}, filterProps(others, false)), {}, {
        fill: "none"
      }, filterProps(axisLine, false)), {}, {
        x1: point0.x,
        y1: point0.y,
        x2: point1.x,
        y2: point1.y
      });
      return /* @__PURE__ */ React.createElement("line", _extends$2({
        className: "recharts-polar-radius-axis-line"
      }, props));
    }
  }, {
    key: "renderTicks",
    value: function renderTicks() {
      var _this = this;
      var _this$props4 = this.props, ticks = _this$props4.ticks, tick = _this$props4.tick, angle = _this$props4.angle, tickFormatter = _this$props4.tickFormatter, stroke = _this$props4.stroke, others = _objectWithoutProperties(_this$props4, _excluded2);
      var textAnchor = this.getTickTextAnchor();
      var axisProps = filterProps(others, false);
      var customTickProps = filterProps(tick, false);
      var items = ticks.map(function(entry, i) {
        var coord = _this.getTickValueCoord(entry);
        var tickProps = _objectSpread$2(_objectSpread$2(_objectSpread$2(_objectSpread$2({
          textAnchor,
          transform: "rotate(".concat(90 - angle, ", ").concat(coord.x, ", ").concat(coord.y, ")")
        }, axisProps), {}, {
          stroke: "none",
          fill: stroke
        }, customTickProps), {}, {
          index: i
        }, coord), {}, {
          payload: entry
        });
        return /* @__PURE__ */ React.createElement(Layer, _extends$2({
          className: clsx("recharts-polar-radius-axis-tick", getTickClassName(tick)),
          key: "tick-".concat(entry.coordinate)
        }, adaptEventsOfChild(_this.props, entry, i)), PolarRadiusAxis2.renderTickItem(tick, tickProps, tickFormatter ? tickFormatter(entry.value, i) : entry.value));
      });
      return /* @__PURE__ */ React.createElement(Layer, {
        className: "recharts-polar-radius-axis-ticks"
      }, items);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props, ticks = _this$props5.ticks, axisLine = _this$props5.axisLine, tick = _this$props5.tick;
      if (!ticks || !ticks.length) {
        return null;
      }
      return /* @__PURE__ */ React.createElement(Layer, {
        className: clsx("recharts-polar-radius-axis", this.props.className)
      }, axisLine && this.renderAxisLine(), tick && this.renderTicks(), Label.renderCallByParent(this.props, this.getViewBox()));
    }
  }], [{
    key: "renderTickItem",
    value: function renderTickItem(option, props, value) {
      var tickItem;
      if (/* @__PURE__ */ React.isValidElement(option)) {
        tickItem = /* @__PURE__ */ React.cloneElement(option, props);
      } else if (isFunction(option)) {
        tickItem = option(props);
      } else {
        tickItem = /* @__PURE__ */ React.createElement(Text, _extends$2({}, props, {
          className: "recharts-polar-radius-axis-tick-value"
        }), value);
      }
      return tickItem;
    }
  }]);
}(reactExports.PureComponent);
_defineProperty$2(PolarRadiusAxis, "displayName", "PolarRadiusAxis");
_defineProperty$2(PolarRadiusAxis, "axisType", "radiusAxis");
_defineProperty$2(PolarRadiusAxis, "defaultProps", {
  type: "number",
  radiusAxisId: 0,
  cx: 0,
  cy: 0,
  angle: 0,
  orientation: "right",
  stroke: "#ccc",
  axisLine: true,
  tick: true,
  tickCount: 5,
  allowDataOverflow: false,
  scale: "auto",
  allowDuplicatedCategory: true
});
function _typeof$1(o) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$1(o);
}
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
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), true).forEach(function(r2) {
      _defineProperty$1(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
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
  if (staticProps) _defineProperties$1(Constructor, staticProps);
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
  return String(t);
}
var RADIAN = Math.PI / 180;
var eps = 1e-5;
var PolarAngleAxis = /* @__PURE__ */ function(_PureComponent) {
  function PolarAngleAxis2() {
    _classCallCheck$1(this, PolarAngleAxis2);
    return _callSuper$1(this, PolarAngleAxis2, arguments);
  }
  _inherits$1(PolarAngleAxis2, _PureComponent);
  return _createClass$1(PolarAngleAxis2, [{
    key: "getTickLineCoord",
    value: (
      /**
       * Calculate the coordinate of line endpoint
       * @param  {Object} data The Data if ticks
       * @return {Object} (x0, y0): The start point of text,
       *                  (x1, y1): The end point close to text,
       *                  (x2, y2): The end point close to axis
       */
      function getTickLineCoord(data) {
        var _this$props = this.props, cx = _this$props.cx, cy = _this$props.cy, radius = _this$props.radius, orientation = _this$props.orientation, tickSize = _this$props.tickSize;
        var tickLineSize = tickSize || 8;
        var p1 = polarToCartesian(cx, cy, radius, data.coordinate);
        var p2 = polarToCartesian(cx, cy, radius + (orientation === "inner" ? -1 : 1) * tickLineSize, data.coordinate);
        return {
          x1: p1.x,
          y1: p1.y,
          x2: p2.x,
          y2: p2.y
        };
      }
    )
    /**
     * Get the text-anchor of each tick
     * @param  {Object} data Data of ticks
     * @return {String} text-anchor
     */
  }, {
    key: "getTickTextAnchor",
    value: function getTickTextAnchor(data) {
      var orientation = this.props.orientation;
      var cos = Math.cos(-data.coordinate * RADIAN);
      var textAnchor;
      if (cos > eps) {
        textAnchor = orientation === "outer" ? "start" : "end";
      } else if (cos < -eps) {
        textAnchor = orientation === "outer" ? "end" : "start";
      } else {
        textAnchor = "middle";
      }
      return textAnchor;
    }
  }, {
    key: "renderAxisLine",
    value: function renderAxisLine() {
      var _this$props2 = this.props, cx = _this$props2.cx, cy = _this$props2.cy, radius = _this$props2.radius, axisLine = _this$props2.axisLine, axisLineType = _this$props2.axisLineType;
      var props = _objectSpread$1(_objectSpread$1({}, filterProps(this.props, false)), {}, {
        fill: "none"
      }, filterProps(axisLine, false));
      if (axisLineType === "circle") {
        return /* @__PURE__ */ React.createElement(Dot, _extends$1({
          className: "recharts-polar-angle-axis-line"
        }, props, {
          cx,
          cy,
          r: radius
        }));
      }
      var ticks = this.props.ticks;
      var points = ticks.map(function(entry) {
        return polarToCartesian(cx, cy, radius, entry.coordinate);
      });
      return /* @__PURE__ */ React.createElement(Polygon, _extends$1({
        className: "recharts-polar-angle-axis-line"
      }, props, {
        points
      }));
    }
  }, {
    key: "renderTicks",
    value: function renderTicks() {
      var _this = this;
      var _this$props3 = this.props, ticks = _this$props3.ticks, tick = _this$props3.tick, tickLine = _this$props3.tickLine, tickFormatter = _this$props3.tickFormatter, stroke = _this$props3.stroke;
      var axisProps = filterProps(this.props, false);
      var customTickProps = filterProps(tick, false);
      var tickLineProps = _objectSpread$1(_objectSpread$1({}, axisProps), {}, {
        fill: "none"
      }, filterProps(tickLine, false));
      var items = ticks.map(function(entry, i) {
        var lineCoord = _this.getTickLineCoord(entry);
        var textAnchor = _this.getTickTextAnchor(entry);
        var tickProps = _objectSpread$1(_objectSpread$1(_objectSpread$1({
          textAnchor
        }, axisProps), {}, {
          stroke: "none",
          fill: stroke
        }, customTickProps), {}, {
          index: i,
          payload: entry,
          x: lineCoord.x2,
          y: lineCoord.y2
        });
        return /* @__PURE__ */ React.createElement(Layer, _extends$1({
          className: clsx("recharts-polar-angle-axis-tick", getTickClassName(tick)),
          key: "tick-".concat(entry.coordinate)
        }, adaptEventsOfChild(_this.props, entry, i)), tickLine && /* @__PURE__ */ React.createElement("line", _extends$1({
          className: "recharts-polar-angle-axis-tick-line"
        }, tickLineProps, lineCoord)), tick && PolarAngleAxis2.renderTickItem(tick, tickProps, tickFormatter ? tickFormatter(entry.value, i) : entry.value));
      });
      return /* @__PURE__ */ React.createElement(Layer, {
        className: "recharts-polar-angle-axis-ticks"
      }, items);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props, ticks = _this$props4.ticks, radius = _this$props4.radius, axisLine = _this$props4.axisLine;
      if (radius <= 0 || !ticks || !ticks.length) {
        return null;
      }
      return /* @__PURE__ */ React.createElement(Layer, {
        className: clsx("recharts-polar-angle-axis", this.props.className)
      }, axisLine && this.renderAxisLine(), this.renderTicks());
    }
  }], [{
    key: "renderTickItem",
    value: function renderTickItem(option, props, value) {
      var tickItem;
      if (/* @__PURE__ */ React.isValidElement(option)) {
        tickItem = /* @__PURE__ */ React.cloneElement(option, props);
      } else if (isFunction(option)) {
        tickItem = option(props);
      } else {
        tickItem = /* @__PURE__ */ React.createElement(Text, _extends$1({}, props, {
          className: "recharts-polar-angle-axis-tick-value"
        }), value);
      }
      return tickItem;
    }
  }]);
}(reactExports.PureComponent);
_defineProperty$1(PolarAngleAxis, "displayName", "PolarAngleAxis");
_defineProperty$1(PolarAngleAxis, "axisType", "angleAxis");
_defineProperty$1(PolarAngleAxis, "defaultProps", {
  type: "category",
  angleAxisId: 0,
  scale: "auto",
  cx: 0,
  cy: 0,
  orientation: "outer",
  axisLine: true,
  tickLine: true,
  tickSize: 8,
  tick: true,
  hide: false,
  allowDuplicatedCategory: true
});
var _Pie;
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
  return String(t);
}
var Pie = /* @__PURE__ */ function(_PureComponent) {
  function Pie2(props) {
    var _this;
    _classCallCheck(this, Pie2);
    _this = _callSuper(this, Pie2, [props]);
    _defineProperty(_this, "pieRef", null);
    _defineProperty(_this, "sectorRefs", []);
    _defineProperty(_this, "id", uniqueId("recharts-pie-"));
    _defineProperty(_this, "handleAnimationEnd", function() {
      var onAnimationEnd = _this.props.onAnimationEnd;
      _this.setState({
        isAnimationFinished: true
      });
      if (isFunction(onAnimationEnd)) {
        onAnimationEnd();
      }
    });
    _defineProperty(_this, "handleAnimationStart", function() {
      var onAnimationStart = _this.props.onAnimationStart;
      _this.setState({
        isAnimationFinished: false
      });
      if (isFunction(onAnimationStart)) {
        onAnimationStart();
      }
    });
    _this.state = {
      isAnimationFinished: !props.isAnimationActive,
      prevIsAnimationActive: props.isAnimationActive,
      prevAnimationId: props.animationId,
      sectorToFocus: 0
    };
    return _this;
  }
  _inherits(Pie2, _PureComponent);
  return _createClass(Pie2, [{
    key: "isActiveIndex",
    value: function isActiveIndex(i) {
      var activeIndex = this.props.activeIndex;
      if (Array.isArray(activeIndex)) {
        return activeIndex.indexOf(i) !== -1;
      }
      return i === activeIndex;
    }
  }, {
    key: "hasActiveIndex",
    value: function hasActiveIndex() {
      var activeIndex = this.props.activeIndex;
      return Array.isArray(activeIndex) ? activeIndex.length !== 0 : activeIndex || activeIndex === 0;
    }
  }, {
    key: "renderLabels",
    value: function renderLabels(sectors) {
      var isAnimationActive = this.props.isAnimationActive;
      if (isAnimationActive && !this.state.isAnimationFinished) {
        return null;
      }
      var _this$props = this.props, label = _this$props.label, labelLine = _this$props.labelLine, dataKey = _this$props.dataKey, valueKey = _this$props.valueKey;
      var pieProps = filterProps(this.props, false);
      var customLabelProps = filterProps(label, false);
      var customLabelLineProps = filterProps(labelLine, false);
      var offsetRadius = label && label.offsetRadius || 20;
      var labels = sectors.map(function(entry, i) {
        var midAngle = (entry.startAngle + entry.endAngle) / 2;
        var endPoint = polarToCartesian(entry.cx, entry.cy, entry.outerRadius + offsetRadius, midAngle);
        var labelProps = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, pieProps), entry), {}, {
          stroke: "none"
        }, customLabelProps), {}, {
          index: i,
          textAnchor: Pie2.getTextAnchor(endPoint.x, entry.cx)
        }, endPoint);
        var lineProps = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, pieProps), entry), {}, {
          fill: "none",
          stroke: entry.fill
        }, customLabelLineProps), {}, {
          index: i,
          points: [polarToCartesian(entry.cx, entry.cy, entry.outerRadius, midAngle), endPoint]
        });
        var realDataKey = dataKey;
        if (isNil(dataKey) && isNil(valueKey)) {
          realDataKey = "value";
        } else if (isNil(dataKey)) {
          realDataKey = valueKey;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ React.createElement(Layer, {
            key: "label-".concat(entry.startAngle, "-").concat(entry.endAngle, "-").concat(entry.midAngle, "-").concat(i)
          }, labelLine && Pie2.renderLabelLineItem(labelLine, lineProps, "line"), Pie2.renderLabelItem(label, labelProps, getValueByDataKey(entry, realDataKey)))
        );
      });
      return /* @__PURE__ */ React.createElement(Layer, {
        className: "recharts-pie-labels"
      }, labels);
    }
  }, {
    key: "renderSectorsStatically",
    value: function renderSectorsStatically(sectors) {
      var _this2 = this;
      var _this$props2 = this.props, activeShape = _this$props2.activeShape, blendStroke = _this$props2.blendStroke, inactiveShapeProp = _this$props2.inactiveShape;
      return sectors.map(function(entry, i) {
        if ((entry === null || entry === void 0 ? void 0 : entry.startAngle) === 0 && (entry === null || entry === void 0 ? void 0 : entry.endAngle) === 0 && sectors.length !== 1) return null;
        var isActive = _this2.isActiveIndex(i);
        var inactiveShape = inactiveShapeProp && _this2.hasActiveIndex() ? inactiveShapeProp : null;
        var sectorOptions = isActive ? activeShape : inactiveShape;
        var sectorProps = _objectSpread(_objectSpread({}, entry), {}, {
          stroke: blendStroke ? entry.fill : entry.stroke,
          tabIndex: -1
        });
        return /* @__PURE__ */ React.createElement(Layer, _extends({
          ref: function ref(_ref) {
            if (_ref && !_this2.sectorRefs.includes(_ref)) {
              _this2.sectorRefs.push(_ref);
            }
          },
          tabIndex: -1,
          className: "recharts-pie-sector"
        }, adaptEventsOfChild(_this2.props, entry, i), {
          // eslint-disable-next-line react/no-array-index-key
          key: "sector-".concat(entry === null || entry === void 0 ? void 0 : entry.startAngle, "-").concat(entry === null || entry === void 0 ? void 0 : entry.endAngle, "-").concat(entry.midAngle, "-").concat(i)
        }), /* @__PURE__ */ React.createElement(Shape, _extends({
          option: sectorOptions,
          isActive,
          shapeType: "sector"
        }, sectorProps)));
      });
    }
  }, {
    key: "renderSectorsWithAnimation",
    value: function renderSectorsWithAnimation() {
      var _this3 = this;
      var _this$props3 = this.props, sectors = _this$props3.sectors, isAnimationActive = _this$props3.isAnimationActive, animationBegin = _this$props3.animationBegin, animationDuration = _this$props3.animationDuration, animationEasing = _this$props3.animationEasing, animationId = _this$props3.animationId;
      var _this$state = this.state, prevSectors = _this$state.prevSectors, prevIsAnimationActive = _this$state.prevIsAnimationActive;
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
        key: "pie-".concat(animationId, "-").concat(prevIsAnimationActive),
        onAnimationStart: this.handleAnimationStart,
        onAnimationEnd: this.handleAnimationEnd
      }, function(_ref2) {
        var t = _ref2.t;
        var stepData = [];
        var first = sectors && sectors[0];
        var curAngle = first.startAngle;
        sectors.forEach(function(entry, index) {
          var prev = prevSectors && prevSectors[index];
          var paddingAngle = index > 0 ? get(entry, "paddingAngle", 0) : 0;
          if (prev) {
            var angleIp = interpolateNumber(prev.endAngle - prev.startAngle, entry.endAngle - entry.startAngle);
            var latest = _objectSpread(_objectSpread({}, entry), {}, {
              startAngle: curAngle + paddingAngle,
              endAngle: curAngle + angleIp(t) + paddingAngle
            });
            stepData.push(latest);
            curAngle = latest.endAngle;
          } else {
            var endAngle = entry.endAngle, startAngle = entry.startAngle;
            var interpolatorAngle = interpolateNumber(0, endAngle - startAngle);
            var deltaAngle = interpolatorAngle(t);
            var _latest = _objectSpread(_objectSpread({}, entry), {}, {
              startAngle: curAngle + paddingAngle,
              endAngle: curAngle + deltaAngle + paddingAngle
            });
            stepData.push(_latest);
            curAngle = _latest.endAngle;
          }
        });
        return /* @__PURE__ */ React.createElement(Layer, null, _this3.renderSectorsStatically(stepData));
      });
    }
  }, {
    key: "attachKeyboardHandlers",
    value: function attachKeyboardHandlers(pieRef) {
      var _this4 = this;
      pieRef.onkeydown = function(e) {
        if (!e.altKey) {
          switch (e.key) {
            case "ArrowLeft": {
              var next = ++_this4.state.sectorToFocus % _this4.sectorRefs.length;
              _this4.sectorRefs[next].focus();
              _this4.setState({
                sectorToFocus: next
              });
              break;
            }
            case "ArrowRight": {
              var _next = --_this4.state.sectorToFocus < 0 ? _this4.sectorRefs.length - 1 : _this4.state.sectorToFocus % _this4.sectorRefs.length;
              _this4.sectorRefs[_next].focus();
              _this4.setState({
                sectorToFocus: _next
              });
              break;
            }
            case "Escape": {
              _this4.sectorRefs[_this4.state.sectorToFocus].blur();
              _this4.setState({
                sectorToFocus: 0
              });
              break;
            }
          }
        }
      };
    }
  }, {
    key: "renderSectors",
    value: function renderSectors() {
      var _this$props4 = this.props, sectors = _this$props4.sectors, isAnimationActive = _this$props4.isAnimationActive;
      var prevSectors = this.state.prevSectors;
      if (isAnimationActive && sectors && sectors.length && (!prevSectors || !isEqual(prevSectors, sectors))) {
        return this.renderSectorsWithAnimation();
      }
      return this.renderSectorsStatically(sectors);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.pieRef) {
        this.attachKeyboardHandlers(this.pieRef);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;
      var _this$props5 = this.props, hide = _this$props5.hide, sectors = _this$props5.sectors, className = _this$props5.className, label = _this$props5.label, cx = _this$props5.cx, cy = _this$props5.cy, innerRadius = _this$props5.innerRadius, outerRadius = _this$props5.outerRadius, isAnimationActive = _this$props5.isAnimationActive;
      var isAnimationFinished = this.state.isAnimationFinished;
      if (hide || !sectors || !sectors.length || !isNumber(cx) || !isNumber(cy) || !isNumber(innerRadius) || !isNumber(outerRadius)) {
        return null;
      }
      var layerClass = clsx("recharts-pie", className);
      return /* @__PURE__ */ React.createElement(Layer, {
        tabIndex: this.props.rootTabIndex,
        className: layerClass,
        ref: function ref(_ref3) {
          _this5.pieRef = _ref3;
        }
      }, this.renderSectors(), label && this.renderLabels(sectors), Label.renderCallByParent(this.props, null, false), (!isAnimationActive || isAnimationFinished) && LabelList.renderCallByParent(this.props, sectors, false));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (prevState.prevIsAnimationActive !== nextProps.isAnimationActive) {
        return {
          prevIsAnimationActive: nextProps.isAnimationActive,
          prevAnimationId: nextProps.animationId,
          curSectors: nextProps.sectors,
          prevSectors: [],
          isAnimationFinished: true
        };
      }
      if (nextProps.isAnimationActive && nextProps.animationId !== prevState.prevAnimationId) {
        return {
          prevAnimationId: nextProps.animationId,
          curSectors: nextProps.sectors,
          prevSectors: prevState.curSectors,
          isAnimationFinished: true
        };
      }
      if (nextProps.sectors !== prevState.curSectors) {
        return {
          curSectors: nextProps.sectors,
          isAnimationFinished: true
        };
      }
      return null;
    }
  }, {
    key: "getTextAnchor",
    value: function getTextAnchor(x, cx) {
      if (x > cx) {
        return "start";
      }
      if (x < cx) {
        return "end";
      }
      return "middle";
    }
  }, {
    key: "renderLabelLineItem",
    value: function renderLabelLineItem(option, props, key) {
      if (/* @__PURE__ */ React.isValidElement(option)) {
        return /* @__PURE__ */ React.cloneElement(option, props);
      }
      if (isFunction(option)) {
        return option(props);
      }
      var className = clsx("recharts-pie-label-line", typeof option !== "boolean" ? option.className : "");
      return /* @__PURE__ */ React.createElement(Curve, _extends({}, props, {
        key,
        type: "linear",
        className
      }));
    }
  }, {
    key: "renderLabelItem",
    value: function renderLabelItem(option, props, value) {
      if (/* @__PURE__ */ React.isValidElement(option)) {
        return /* @__PURE__ */ React.cloneElement(option, props);
      }
      var label = value;
      if (isFunction(option)) {
        label = option(props);
        if (/* @__PURE__ */ React.isValidElement(label)) {
          return label;
        }
      }
      var className = clsx("recharts-pie-label-text", typeof option !== "boolean" && !isFunction(option) ? option.className : "");
      return /* @__PURE__ */ React.createElement(Text, _extends({}, props, {
        alignmentBaseline: "middle",
        className
      }), label);
    }
  }]);
}(reactExports.PureComponent);
_Pie = Pie;
_defineProperty(Pie, "displayName", "Pie");
_defineProperty(Pie, "defaultProps", {
  stroke: "#fff",
  fill: "#808080",
  legendType: "rect",
  cx: "50%",
  cy: "50%",
  startAngle: 0,
  endAngle: 360,
  innerRadius: 0,
  outerRadius: "80%",
  paddingAngle: 0,
  labelLine: true,
  hide: false,
  minAngle: 0,
  isAnimationActive: !Global.isSsr,
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: "ease",
  nameKey: "name",
  blendStroke: false,
  rootTabIndex: 0
});
_defineProperty(Pie, "parseDeltaAngle", function(startAngle, endAngle) {
  var sign = mathSign(endAngle - startAngle);
  var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 360);
  return sign * deltaAngle;
});
_defineProperty(Pie, "getRealPieData", function(itemProps) {
  var data = itemProps.data, children = itemProps.children;
  var presentationProps = filterProps(itemProps, false);
  var cells = findAllByType(children, Cell);
  if (data && data.length) {
    return data.map(function(entry, index) {
      return _objectSpread(_objectSpread(_objectSpread({
        payload: entry
      }, presentationProps), entry), cells && cells[index] && cells[index].props);
    });
  }
  if (cells && cells.length) {
    return cells.map(function(cell) {
      return _objectSpread(_objectSpread({}, presentationProps), cell.props);
    });
  }
  return [];
});
_defineProperty(Pie, "parseCoordinateOfPie", function(itemProps, offset) {
  var top = offset.top, left = offset.left, width = offset.width, height = offset.height;
  var maxPieRadius = getMaxRadius(width, height);
  var cx = left + getPercentValue(itemProps.cx, width, width / 2);
  var cy = top + getPercentValue(itemProps.cy, height, height / 2);
  var innerRadius = getPercentValue(itemProps.innerRadius, maxPieRadius, 0);
  var outerRadius = getPercentValue(itemProps.outerRadius, maxPieRadius, maxPieRadius * 0.8);
  var maxRadius = itemProps.maxRadius || Math.sqrt(width * width + height * height) / 2;
  return {
    cx,
    cy,
    innerRadius,
    outerRadius,
    maxRadius
  };
});
_defineProperty(Pie, "getComposedData", function(_ref4) {
  var item = _ref4.item, offset = _ref4.offset;
  var itemProps = item.type.defaultProps !== void 0 ? _objectSpread(_objectSpread({}, item.type.defaultProps), item.props) : item.props;
  var pieData = _Pie.getRealPieData(itemProps);
  if (!pieData || !pieData.length) {
    return null;
  }
  var cornerRadius = itemProps.cornerRadius, startAngle = itemProps.startAngle, endAngle = itemProps.endAngle, paddingAngle = itemProps.paddingAngle, dataKey = itemProps.dataKey, nameKey = itemProps.nameKey, valueKey = itemProps.valueKey, tooltipType = itemProps.tooltipType;
  var minAngle = Math.abs(itemProps.minAngle);
  var coordinate = _Pie.parseCoordinateOfPie(itemProps, offset);
  var deltaAngle = _Pie.parseDeltaAngle(startAngle, endAngle);
  var absDeltaAngle = Math.abs(deltaAngle);
  var realDataKey = dataKey;
  if (isNil(dataKey) && isNil(valueKey)) {
    warn(false, 'Use "dataKey" to specify the value of pie,\n      the props "valueKey" will be deprecated in 1.1.0');
    realDataKey = "value";
  } else if (isNil(dataKey)) {
    warn(false, 'Use "dataKey" to specify the value of pie,\n      the props "valueKey" will be deprecated in 1.1.0');
    realDataKey = valueKey;
  }
  var notZeroItemCount = pieData.filter(function(entry) {
    return getValueByDataKey(entry, realDataKey, 0) !== 0;
  }).length;
  var totalPadingAngle = (absDeltaAngle >= 360 ? notZeroItemCount : notZeroItemCount - 1) * paddingAngle;
  var realTotalAngle = absDeltaAngle - notZeroItemCount * minAngle - totalPadingAngle;
  var sum = pieData.reduce(function(result, entry) {
    var val = getValueByDataKey(entry, realDataKey, 0);
    return result + (isNumber(val) ? val : 0);
  }, 0);
  var sectors;
  if (sum > 0) {
    var prev;
    sectors = pieData.map(function(entry, i) {
      var val = getValueByDataKey(entry, realDataKey, 0);
      var name = getValueByDataKey(entry, nameKey, i);
      var percent = (isNumber(val) ? val : 0) / sum;
      var tempStartAngle;
      if (i) {
        tempStartAngle = prev.endAngle + mathSign(deltaAngle) * paddingAngle * (val !== 0 ? 1 : 0);
      } else {
        tempStartAngle = startAngle;
      }
      var tempEndAngle = tempStartAngle + mathSign(deltaAngle) * ((val !== 0 ? minAngle : 0) + percent * realTotalAngle);
      var midAngle = (tempStartAngle + tempEndAngle) / 2;
      var middleRadius = (coordinate.innerRadius + coordinate.outerRadius) / 2;
      var tooltipPayload = [{
        name,
        value: val,
        payload: entry,
        dataKey: realDataKey,
        type: tooltipType
      }];
      var tooltipPosition = polarToCartesian(coordinate.cx, coordinate.cy, middleRadius, midAngle);
      prev = _objectSpread(_objectSpread(_objectSpread({
        percent,
        cornerRadius,
        name,
        tooltipPayload,
        midAngle,
        middleRadius,
        tooltipPosition
      }, entry), coordinate), {}, {
        value: getValueByDataKey(entry, realDataKey),
        startAngle: tempStartAngle,
        endAngle: tempEndAngle,
        payload: entry,
        paddingAngle: mathSign(deltaAngle) * paddingAngle
      });
      return prev;
    });
  }
  return _objectSpread(_objectSpread({}, coordinate), {}, {
    sectors,
    data: pieData
  });
});
var PieChart = generateCategoricalChart({
  chartName: "PieChart",
  GraphicalChild: Pie,
  validateTooltipEventTypes: ["item"],
  defaultTooltipEventType: "item",
  legendContent: "children",
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: PolarAngleAxis
  }, {
    axisType: "radiusAxis",
    AxisComp: PolarRadiusAxis
  }],
  formatAxisMap,
  defaultProps: {
    layout: "centric",
    startAngle: 0,
    endAngle: 360,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
});
function StatCard({
  title,
  value,
  sub,
  icon: Icon,
  iconClass,
  ocid
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-ocid": ocid, className: "border border-border shadow-card bg-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex flex-row items-center justify-between pb-1 pt-4 px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `w-4 h-4 ${iconClass}` })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pb-4 px-4 pt-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold tabular-nums leading-none text-foreground", children: value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1.5", children: sub })
    ] })
  ] });
}
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const MONTHS = ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];
const MOCK_MONTHLY_REVENUE = [18400, 21200, 19800, 23500, 22100, 24800];
const MOCK_TOP_MEDS = [
  { name: "Lisinopril", count: 34 },
  { name: "Metformin", count: 29 },
  { name: "Atorvastatin", count: 22 },
  { name: "Amlodipine", count: 18 },
  { name: "Omeprazole", count: 15 },
  { name: "Levothyroxine", count: 12 }
];
function ReportingAnalytics({
  loading,
  totalPatients,
  weekAppts,
  pendingRevenue,
  noShowRate,
  weeklyVol,
  statusBreakdown,
  role,
  todayPatients,
  pendingNotes,
  upcomingAppts
}) {
  var _a;
  const maxWeekly = Math.max(...weeklyVol, 1);
  const maxRevenue = Math.max(...MOCK_MONTHLY_REVENUE, 1);
  const maxMed = ((_a = MOCK_TOP_MEDS[0]) == null ? void 0 : _a.count) ?? 1;
  const colorPrimary = "oklch(var(--primary))";
  const colorScheduled = "hsl(210 80% 50%)";
  const colorCompleted = "hsl(142 70% 40%)";
  const colorCancelled = "oklch(var(--destructive))";
  const colorNoShow = "hsl(38 92% 50%)";
  const colorEmpty = "oklch(var(--muted))";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",
        "data-ocid": "reporting.summary.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatCard,
            {
              ocid: "reporting.patients.card",
              title: "Patients This Month",
              value: loading ? "—" : totalPatients,
              sub: "total registered",
              icon: Calendar,
              iconClass: "text-muted-foreground"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatCard,
            {
              ocid: "reporting.appointments.card",
              title: "Appts This Week",
              value: loading ? "—" : weekAppts,
              sub: "last 7 days",
              icon: TrendingUp,
              iconClass: "text-muted-foreground"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatCard,
            {
              ocid: "reporting.revenue.card",
              title: "Outstanding Revenue",
              value: loading ? "—" : `$${pendingRevenue.toLocaleString()}`,
              sub: "pending invoices",
              icon: DollarSign,
              iconClass: "text-muted-foreground"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatCard,
            {
              ocid: "reporting.noshow.card",
              title: "No-Show Rate",
              value: loading ? "—" : `${noShowRate}%`,
              sub: "of all appointments",
              icon: TrendingUp,
              iconClass: "text-muted-foreground"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: "border border-border shadow-card bg-card",
          "data-ocid": "reporting.weekly.panel",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "px-4 py-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-semibold uppercase tracking-wider text-foreground", children: "Weekly Appointment Volume" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: DAYS.map((day, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-mono w-8 flex-shrink-0", children: day }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 bg-muted/40 rounded-sm h-5 relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-full rounded-sm transition-all duration-500",
                  style: {
                    width: `${weeklyVol[i] / maxWeekly * 100}%`,
                    background: colorPrimary,
                    opacity: 0.85
                  }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono tabular-nums text-muted-foreground w-5 text-right flex-shrink-0", children: weeklyVol[i] })
            ] }, day)) }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: "border border-border shadow-card bg-card",
          "data-ocid": "reporting.revenue.panel",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "px-4 py-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-semibold uppercase tracking-wider text-foreground", children: "Monthly Revenue Trend" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end gap-2 h-32", children: MOCK_MONTHLY_REVENUE.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex-1 flex flex-col items-center gap-1",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-full rounded-t-sm transition-all duration-500",
                        style: {
                          height: `${v / maxRevenue * 112}px`,
                          background: colorPrimary,
                          opacity: i === MONTHS.length - 1 ? 1 : 0.6
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-mono", children: MONTHS[i] })
                  ]
                },
                MONTHS[i]
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 pt-2 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                "This month:",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-foreground", children: [
                  "$",
                  (MOCK_MONTHLY_REVENUE[5] ?? 0).toLocaleString()
                ] })
              ] }) })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: "border border-border shadow-card bg-card",
          "data-ocid": "reporting.status.panel",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "px-4 py-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-semibold uppercase tracking-wider text-foreground", children: "Appointment Status Breakdown" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-5 rounded-sm overflow-hidden gap-px", children: [
                statusBreakdown.scheduled > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "h-full",
                    style: {
                      width: `${statusBreakdown.scheduled / statusBreakdown.total * 100}%`,
                      background: colorScheduled
                    },
                    title: `Scheduled: ${statusBreakdown.scheduled}`
                  }
                ),
                statusBreakdown.completed > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "h-full",
                    style: {
                      width: `${statusBreakdown.completed / statusBreakdown.total * 100}%`,
                      background: colorCompleted
                    },
                    title: `Completed: ${statusBreakdown.completed}`
                  }
                ),
                statusBreakdown.cancelled > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "h-full",
                    style: {
                      width: `${statusBreakdown.cancelled / statusBreakdown.total * 100}%`,
                      background: colorCancelled
                    },
                    title: `Cancelled: ${statusBreakdown.cancelled}`
                  }
                ),
                statusBreakdown.noShow > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "h-full",
                    style: {
                      width: `${statusBreakdown.noShow / statusBreakdown.total * 100}%`,
                      background: colorNoShow
                    },
                    title: `No-show: ${statusBreakdown.noShow}`
                  }
                ),
                statusBreakdown.total <= 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "h-full flex-1",
                    style: { background: colorEmpty }
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-1.5", children: [
                [colorScheduled, "Scheduled", statusBreakdown.scheduled],
                [colorCompleted, "Completed", statusBreakdown.completed],
                [colorCancelled, "Cancelled", statusBreakdown.cancelled],
                [colorNoShow, "No-Show", statusBreakdown.noShow]
              ].map(([color, label, count]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-2.5 h-2.5 rounded-sm flex-shrink-0",
                    style: { background: color }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono font-semibold text-foreground ml-auto", children: count })
              ] }, label)) })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: "border border-border shadow-card bg-card",
          "data-ocid": "reporting.medications.panel",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "px-4 py-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-semibold uppercase tracking-wider text-foreground", children: "Top Medications Prescribed" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: MOCK_TOP_MEDS.map((med, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                "data-ocid": `reporting.medications.item.${i + 1}`,
                className: "flex items-center gap-3 px-4 py-2.5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono text-muted-foreground w-4 flex-shrink-0", children: i + 1 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: med.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 h-1 bg-muted/40 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "h-full rounded-full",
                        style: {
                          width: `${med.count / maxMed * 100}%`,
                          background: colorPrimary,
                          opacity: 0.8
                        }
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono font-semibold text-foreground flex-shrink-0", children: med.count })
                ]
              },
              med.name
            )) }) })
          ]
        }
      )
    ] }),
    role === "Doctor" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        className: "border border-border shadow-card bg-card",
        "data-ocid": "reporting.clinician.panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "px-4 py-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-xs font-semibold uppercase tracking-wider text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChartNoAxesColumn, { className: "w-3.5 h-3.5 inline mr-1.5 opacity-60" }),
            " ",
            "Your Summary — Today"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold tabular-nums text-foreground", children: loading ? "—" : todayPatients }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Patients Seen" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center border-x border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold tabular-nums text-foreground", children: loading ? "—" : pendingNotes }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Notes In System" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold tabular-nums text-foreground", children: loading ? "—" : upcomingAppts }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Upcoming Appts" })
            ] })
          ] }) })
        ]
      }
    )
  ] });
}
const CENSUS_DATA = [
  {
    ward: "ICU",
    totalBeds: 12,
    occupied: 9,
    available: 3,
    todayAdmits: 2,
    todayDischarges: 1,
    avgLOS: 4.2
  },
  {
    ward: "General Medicine",
    totalBeds: 30,
    occupied: 22,
    available: 8,
    todayAdmits: 5,
    todayDischarges: 3,
    avgLOS: 3.8
  },
  {
    ward: "Surgical",
    totalBeds: 20,
    occupied: 15,
    available: 5,
    todayAdmits: 3,
    todayDischarges: 2,
    avgLOS: 2.9
  },
  {
    ward: "Pediatric",
    totalBeds: 15,
    occupied: 7,
    available: 8,
    todayAdmits: 1,
    todayDischarges: 1,
    avgLOS: 2.1
  },
  {
    ward: "Emergency",
    totalBeds: 25,
    occupied: 18,
    available: 7,
    todayAdmits: 12,
    todayDischarges: 10,
    avgLOS: 0.5
  }
];
const OCCUPANCY_TREND = [
  {
    day: "Mon",
    ICU: 95,
    General: 82,
    Surgical: 78,
    Pediatric: 71,
    Emergency: 88
  },
  {
    day: "Tue",
    ICU: 92,
    General: 85,
    Surgical: 80,
    Pediatric: 74,
    Emergency: 91
  },
  {
    day: "Wed",
    ICU: 88,
    General: 80,
    Surgical: 76,
    Pediatric: 70,
    Emergency: 85
  },
  {
    day: "Thu",
    ICU: 94,
    General: 87,
    Surgical: 82,
    Pediatric: 73,
    Emergency: 93
  },
  {
    day: "Fri",
    ICU: 91,
    General: 84,
    Surgical: 79,
    Pediatric: 75,
    Emergency: 89
  },
  {
    day: "Sat",
    ICU: 87,
    General: 78,
    Surgical: 74,
    Pediatric: 68,
    Emergency: 82
  },
  {
    day: "Sun",
    ICU: 90,
    General: 81,
    Surgical: 77,
    Pediatric: 72,
    Emergency: 86
  }
];
function ReportingCensusTab() {
  const totalBeds = CENSUS_DATA.reduce((s, w) => s + w.totalBeds, 0);
  const totalOccupied = CENSUS_DATA.reduce((s, w) => s + w.occupied, 0);
  const totalAvailable = CENSUS_DATA.reduce((s, w) => s + w.available, 0);
  const occupancyRate = Math.round(totalOccupied / totalBeds * 100);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "reporting.census.section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-3", children: [
      { label: "Total Beds", value: totalBeds, color: "text-foreground" },
      { label: "Occupied", value: totalOccupied, color: "text-foreground" },
      { label: "Available", value: totalAvailable, color: "text-success" },
      {
        label: "Occupancy Rate",
        value: `${occupancyRate}%`,
        color: occupancyRate > 85 ? "text-destructive" : "text-foreground"
      }
    ].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-card border border-border rounded-sm px-4 py-3",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1", children: stat.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-2xl font-bold ${stat.color}`, children: stat.value })
        ]
      },
      stat.label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-sm p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3", children: "Occupancy by Ward" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        BarChart,
        {
          width: 600,
          height: 200,
          data: CENSUS_DATA,
          margin: { top: 5, right: 20, left: 0, bottom: 5 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "var(--border)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "ward", tick: { fontSize: 11 } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { tick: { fontSize: 11 } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Tooltip,
              {
                contentStyle: {
                  fontSize: 12,
                  borderRadius: 4,
                  border: "1px solid #e2e8f0"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Bar,
              {
                dataKey: "occupied",
                fill: "var(--chart-1)",
                name: "Occupied",
                radius: [3, 3, 0, 0]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Bar,
              {
                dataKey: "available",
                fill: "var(--chart-2)",
                name: "Available",
                radius: [3, 3, 0, 0]
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-card border border-border rounded-sm p-4",
        "data-ocid": "reporting.census.trend.card",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3", children: "7-Day Bed Occupancy Trend (%)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            LineChart,
            {
              data: OCCUPANCY_TREND,
              margin: { top: 8, right: 16, left: -10, bottom: 0 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  CartesianGrid,
                  {
                    strokeDasharray: "3 3",
                    stroke: "oklch(var(--border))",
                    opacity: 0.5
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  XAxis,
                  {
                    dataKey: "day",
                    tick: { fontSize: 10, fill: "oklch(var(--muted-foreground))" },
                    tickLine: false,
                    axisLine: false
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  YAxis,
                  {
                    domain: [60, 100],
                    tick: { fontSize: 10, fill: "oklch(var(--muted-foreground))" },
                    tickLine: false,
                    axisLine: false,
                    unit: "%"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Tooltip,
                  {
                    contentStyle: {
                      fontSize: 11,
                      background: "oklch(var(--popover))",
                      border: "1px solid oklch(var(--border))",
                      borderRadius: 6
                    },
                    formatter: (value) => [`${value}%`]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { wrapperStyle: { fontSize: 10 } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Line,
                  {
                    type: "monotone",
                    dataKey: "ICU",
                    name: "ICU",
                    stroke: "var(--destructive)",
                    strokeWidth: 2,
                    dot: false
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Line,
                  {
                    type: "monotone",
                    dataKey: "General",
                    name: "General",
                    stroke: "var(--chart-1)",
                    strokeWidth: 2,
                    dot: false
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Line,
                  {
                    type: "monotone",
                    dataKey: "Surgical",
                    name: "Surgical",
                    stroke: "var(--chart-2)",
                    strokeWidth: 2,
                    dot: false
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Line,
                  {
                    type: "monotone",
                    dataKey: "Pediatric",
                    name: "Pediatric",
                    stroke: "var(--chart-4)",
                    strokeWidth: 2,
                    dot: false
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Line,
                  {
                    type: "monotone",
                    dataKey: "Emergency",
                    name: "Emergency",
                    stroke: "var(--warning)",
                    strokeWidth: 2,
                    dot: false
                  }
                )
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "bg-card border border-border rounded-sm overflow-hidden",
        "data-ocid": "reporting.census.table",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "border-b border-border bg-muted/40", children: [
            "Ward",
            "Total Beds",
            "Occupied",
            "Available",
            "Today's Admits",
            "Today's Discharges",
            "Avg LOS (days)"
          ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "th",
            {
              className: "text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide",
              children: h
            },
            h
          )) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: CENSUS_DATA.map((ward, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              "data-ocid": `reporting.census.row.${idx + 1}`,
              className: "border-b border-border last:border-0 hover:bg-muted/20 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-semibold text-foreground", children: ward.ward }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-foreground", children: ward.totalBeds }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: ward.occupied }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground text-xs ml-1", children: [
                    "(",
                    Math.round(ward.occupied / ward.totalBeds * 100),
                    "%)"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-success", children: ward.available }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-foreground", children: ward.todayAdmits }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-foreground", children: ward.todayDischarges }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground", children: ward.avgLOS })
              ]
            },
            ward.ward
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tfoot", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t-2 border-border bg-muted/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 font-semibold text-foreground text-sm", children: "Total" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 font-semibold text-foreground", children: totalBeds }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 font-semibold text-foreground", children: totalOccupied }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 font-semibold text-success", children: totalAvailable }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 font-semibold text-foreground", children: CENSUS_DATA.reduce((s, w) => s + w.todayAdmits, 0) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 font-semibold text-foreground", children: CENSUS_DATA.reduce((s, w) => s + w.todayDischarges, 0) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-muted-foreground", children: "—" })
          ] }) })
        ] })
      }
    )
  ] });
}
const PAYER_MIX = [
  {
    name: "Medicare",
    pct: 34,
    claims: 142,
    billed: 218400,
    collected: 174720,
    rate: 80
  },
  {
    name: "Blue Cross",
    pct: 22,
    claims: 92,
    billed: 156800,
    collected: 141120,
    rate: 90
  },
  {
    name: "Medicaid",
    pct: 18,
    claims: 75,
    billed: 98600,
    collected: 68020,
    rate: 69
  },
  {
    name: "Aetna",
    pct: 12,
    claims: 50,
    billed: 89200,
    collected: 80280,
    rate: 90
  },
  {
    name: "United",
    pct: 8,
    claims: 33,
    billed: 62400,
    collected: 53040,
    rate: 85
  },
  {
    name: "Self-Pay",
    pct: 6,
    claims: 25,
    billed: 41600,
    collected: 12480,
    rate: 30
  }
];
const PIE_COLORS = {
  Medicare: "oklch(var(--primary))",
  "Blue Cross": "oklch(var(--chart-2))",
  Medicaid: "oklch(var(--chart-3))",
  Aetna: "oklch(var(--chart-4))",
  "Self-Pay": "oklch(var(--chart-5))"
};
function ReportingPayerMix() {
  const totalClaims = PAYER_MIX.reduce((s, p) => s + p.claims, 0);
  const totalCollected = PAYER_MIX.reduce((s, p) => s + p.collected, 0);
  const totalBilled = PAYER_MIX.reduce((s, p) => s + p.billed, 0);
  const avgCollectionRate = Math.round(totalCollected / totalBilled * 100);
  const colorPrimary = "oklch(var(--primary))";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
        "data-ocid": "reporting.payermix.summary.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Card,
            {
              className: "border border-border shadow-card bg-card",
              "data-ocid": "reporting.payermix.claims.card",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex flex-row items-center justify-between pb-1 pt-4 px-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Total Claims" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4 text-muted-foreground" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pb-4 px-4 pt-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold tabular-nums text-foreground", children: totalClaims }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1.5", children: "across all payers" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Card,
            {
              className: "border border-border shadow-card bg-card",
              "data-ocid": "reporting.payermix.collection.card",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex flex-row items-center justify-between pb-1 pt-4 px-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Avg Collection Rate" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "w-4 h-4 text-muted-foreground" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pb-4 px-4 pt-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-bold tabular-nums text-foreground", children: [
                    avgCollectionRate,
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1.5", children: "collected / billed" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Card,
            {
              className: "border border-border shadow-card bg-card",
              "data-ocid": "reporting.payermix.toppayer.card",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex flex-row items-center justify-between pb-1 pt-4 px-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Top Payer by Volume" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4 text-muted-foreground" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pb-4 px-4 pt-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold tabular-nums text-foreground", children: "Medicare" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1.5", children: "34% of claims" })
                ] })
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        className: "border border-border shadow-card bg-card",
        "data-ocid": "reporting.payermix.chart.card",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "px-4 py-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-semibold uppercase tracking-wider text-foreground", children: "Revenue by Payer" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-4 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Pie,
              {
                data: PAYER_MIX,
                dataKey: "pct",
                nameKey: "name",
                cx: "50%",
                cy: "50%",
                outerRadius: 85,
                innerRadius: 45,
                paddingAngle: 3,
                label: ({ name, pct }) => `${name} ${pct}%`,
                labelLine: false,
                children: PAYER_MIX.map((entry) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Cell,
                  {
                    fill: PIE_COLORS[entry.name] ?? "oklch(var(--muted-foreground))",
                    opacity: 0.85
                  },
                  entry.name
                ))
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Tooltip,
              {
                formatter: (v, name) => [`${v}%`, name],
                contentStyle: {
                  fontSize: 11,
                  background: "oklch(var(--popover))",
                  border: "1px solid oklch(var(--border))",
                  borderRadius: 6
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { wrapperStyle: { fontSize: 10 } })
          ] }) }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        className: "border border-border shadow-card bg-card",
        "data-ocid": "reporting.payermix.bars.panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "px-4 py-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-semibold uppercase tracking-wider text-foreground", children: "Payer Distribution" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-4 space-y-3", children: PAYER_MIX.map((payer) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground w-24 flex-shrink-0", children: payer.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 bg-muted/40 rounded-sm h-5 relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "h-full rounded-sm transition-all duration-500",
                style: {
                  width: `${payer.pct}%`,
                  background: colorPrimary,
                  opacity: 0.8
                }
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-mono tabular-nums font-semibold text-foreground w-10 text-right flex-shrink-0", children: [
              payer.pct,
              "%"
            ] })
          ] }, payer.name)) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        className: "border border-border shadow-card bg-card",
        "data-ocid": "reporting.payermix.table",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "px-4 py-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-semibold uppercase tracking-wider text-foreground", children: "Payer Detail" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { className: "bg-muted/60 hover:bg-muted/60", children: [
              "Payer",
              "Claims",
              "Total Billed",
              "Total Collected",
              "Collection Rate"
            ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              TableHead,
              {
                className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4",
                children: h
              },
              h
            )) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: PAYER_MIX.map((payer, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TableRow,
              {
                "data-ocid": `reporting.payermix.row.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-3 font-medium text-sm text-foreground", children: payer.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-3 text-sm text-right tabular-nums", children: payer.claims }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "px-4 py-3 text-sm text-right tabular-nums", children: [
                    "$",
                    payer.billed.toLocaleString()
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "px-4 py-3 text-sm text-right tabular-nums", children: [
                    "$",
                    payer.collected.toLocaleString()
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-3 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: `text-xs font-semibold px-2 py-0.5 rounded-full border ${payer.rate >= 85 ? "bg-success/8 text-success border-success/20" : payer.rate >= 70 ? "bg-warning/10 text-warning border-warning/20" : "bg-destructive/8 text-destructive border-destructive/20"}`,
                      children: [
                        payer.rate,
                        "%"
                      ]
                    }
                  ) })
                ]
              },
              payer.name
            )) })
          ] }) })
        ]
      }
    )
  ] });
}
const PROVIDER_WEEKLY_TREND = [
  { week: "W1", chen: 6, patel: 7, santos: 5, liu: 4 },
  { week: "W2", chen: 8, patel: 9, santos: 7, liu: 5 },
  { week: "W3", chen: 7, patel: 8, santos: 6, liu: 5 },
  { week: "W4", chen: 9, patel: 10, santos: 8, liu: 6 }
];
const PROVIDER_STATS = [
  {
    name: "Dr. Sarah Chen",
    role: "Physician",
    encounters: 28,
    notesCompleted: 25,
    notesPending: 3,
    avgDuration: "22 min",
    rvus: 94.2
  },
  {
    name: "Dr. James Patel",
    role: "Physician",
    encounters: 31,
    notesCompleted: 31,
    notesPending: 0,
    avgDuration: "18 min",
    rvus: 108.4
  },
  {
    name: "Dr. Maria Santos",
    role: "Physician",
    encounters: 24,
    notesCompleted: 22,
    notesPending: 2,
    avgDuration: "25 min",
    rvus: 81.6
  },
  {
    name: "NP Kevin Liu",
    role: "Nurse Practitioner",
    encounters: 19,
    notesCompleted: 18,
    notesPending: 1,
    avgDuration: "20 min",
    rvus: 52.3
  }
];
const PROVIDER_MONTHLY = [
  {
    name: "Dr. Sarah Chen",
    role: "Doctor",
    encounters: 142,
    avgDay: 6.8,
    avgVisit: "22 min",
    topDx: "Type 2 Diabetes",
    rvus: 284,
    satisfaction: 4.8,
    weekly: [32, 38, 35, 37]
  },
  {
    name: "Dr. James Rodriguez",
    role: "Doctor",
    encounters: 118,
    avgDay: 5.6,
    avgVisit: "28 min",
    topDx: "Hypertension",
    rvus: 236,
    satisfaction: 4.6,
    weekly: [28, 31, 29, 30]
  },
  {
    name: "Dr. Emily Park",
    role: "Doctor",
    encounters: 97,
    avgDay: 4.6,
    avgVisit: "31 min",
    topDx: "Anxiety/Depression",
    rvus: 194,
    satisfaction: 4.9,
    weekly: [22, 26, 24, 25]
  },
  {
    name: "Dr. Marcus Lee",
    role: "Doctor",
    encounters: 88,
    avgDay: 4.2,
    avgVisit: "26 min",
    topDx: "Chest Pain / CAD",
    rvus: 176,
    satisfaction: 4.7,
    weekly: [20, 22, 23, 23]
  },
  {
    name: "NP Maria Santos",
    role: "Nurse Practitioner",
    encounters: 76,
    avgDay: 3.6,
    avgVisit: "19 min",
    topDx: "URI/Cold",
    rvus: 114,
    satisfaction: 4.5,
    weekly: [18, 20, 19, 19]
  },
  {
    name: "PA Tom Wilson",
    role: "Physician Assistant",
    encounters: 63,
    avgDay: 3,
    avgVisit: "17 min",
    topDx: "Diabetes Follow-up",
    rvus: 95,
    satisfaction: 4.4,
    weekly: [15, 16, 16, 16]
  }
];
function ReportingProductivity() {
  const totalEncounters = PROVIDER_STATS.reduce((s, p) => s + p.encounters, 0);
  const avgRVUs = (PROVIDER_STATS.reduce((s, p) => s + p.rvus, 0) / PROVIDER_STATS.length).toFixed(1);
  const completionRate = Math.round(
    PROVIDER_STATS.reduce((s, p) => s + p.notesCompleted, 0) / PROVIDER_STATS.reduce((s, p) => s + p.encounters, 0) * 100
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",
        "data-ocid": "reporting.productivity.monthly.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatCard,
            {
              ocid: "reporting.productivity.monthly.encounters.card",
              title: "Total Encounters This Month",
              value: PROVIDER_MONTHLY.reduce((s, p) => s + p.encounters, 0),
              sub: "across all providers",
              icon: Calendar,
              iconClass: "text-muted-foreground"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatCard,
            {
              ocid: "reporting.productivity.monthly.avgday.card",
              title: "Avg Encounters / Day",
              value: (PROVIDER_MONTHLY.reduce((s, p) => s + p.avgDay, 0) / PROVIDER_MONTHLY.length).toFixed(1),
              sub: "per provider average",
              icon: TrendingUp,
              iconClass: "text-muted-foreground"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatCard,
            {
              ocid: "reporting.productivity.monthly.rvus.card",
              title: "Total RVUs This Month",
              value: PROVIDER_MONTHLY.reduce((s, p) => s + p.rvus, 0),
              sub: "relative value units",
              icon: ChartNoAxesColumn,
              iconClass: "text-muted-foreground"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatCard,
            {
              ocid: "reporting.productivity.monthly.visitlength.card",
              title: "Avg Visit Length",
              value: "23 min",
              sub: "across all encounter types",
              icon: DollarSign,
              iconClass: "text-muted-foreground"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        className: "border border-border shadow-card bg-card",
        "data-ocid": "reporting.productivity.trend.card",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "px-4 py-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-semibold uppercase tracking-wider text-foreground", children: "Weekly Encounter Trend by Provider" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            AreaChart,
            {
              data: PROVIDER_WEEKLY_TREND,
              margin: { top: 8, right: 16, left: -10, bottom: 0 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "prodGrad1", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "stop",
                      {
                        offset: "5%",
                        stopColor: "oklch(var(--primary))",
                        stopOpacity: 0.2
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "stop",
                      {
                        offset: "95%",
                        stopColor: "oklch(var(--primary))",
                        stopOpacity: 0
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "prodGrad2", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "stop",
                      {
                        offset: "5%",
                        stopColor: "oklch(var(--chart-2))",
                        stopOpacity: 0.2
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "stop",
                      {
                        offset: "95%",
                        stopColor: "oklch(var(--chart-2))",
                        stopOpacity: 0
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  CartesianGrid,
                  {
                    strokeDasharray: "3 3",
                    stroke: "oklch(var(--border))",
                    opacity: 0.5
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  XAxis,
                  {
                    dataKey: "week",
                    tick: { fontSize: 10, fill: "oklch(var(--muted-foreground))" },
                    tickLine: false,
                    axisLine: false
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  YAxis,
                  {
                    tick: { fontSize: 10, fill: "oklch(var(--muted-foreground))" },
                    tickLine: false,
                    axisLine: false
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Tooltip,
                  {
                    contentStyle: {
                      fontSize: 11,
                      background: "oklch(var(--popover))",
                      border: "1px solid oklch(var(--border))",
                      borderRadius: 6
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { wrapperStyle: { fontSize: 10 } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Area,
                  {
                    type: "monotone",
                    dataKey: "chen",
                    name: "Dr. Chen",
                    stroke: "oklch(var(--primary))",
                    fill: "url(#prodGrad1)",
                    strokeWidth: 2,
                    dot: false
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Area,
                  {
                    type: "monotone",
                    dataKey: "patel",
                    name: "Dr. Patel",
                    stroke: "oklch(var(--chart-2))",
                    fill: "url(#prodGrad2)",
                    strokeWidth: 2,
                    dot: false
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Area,
                  {
                    type: "monotone",
                    dataKey: "santos",
                    name: "Dr. Santos",
                    stroke: "oklch(var(--chart-3))",
                    fill: "none",
                    strokeWidth: 2,
                    dot: false
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Area,
                  {
                    type: "monotone",
                    dataKey: "liu",
                    name: "NP Liu",
                    stroke: "oklch(var(--chart-4))",
                    fill: "none",
                    strokeWidth: 1.5,
                    strokeDasharray: "4 2",
                    dot: false
                  }
                )
              ]
            }
          ) }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        className: "border border-border shadow-card bg-card",
        "data-ocid": "reporting.productivity.monthly.table",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "px-4 py-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-semibold uppercase tracking-wider text-foreground", children: "Provider Performance — This Month" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { className: "bg-muted/60 hover:bg-muted/60", children: [
              "Provider",
              "Role",
              "Encounters",
              "Avg/Day",
              "Avg Visit",
              "Top Diagnosis",
              "Est. RVUs",
              "Satisfaction",
              "Weekly Trend"
            ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              TableHead,
              {
                className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4",
                children: h
              },
              h
            )) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: PROVIDER_MONTHLY.map((p, i) => {
              const maxW = Math.max(...p.weekly);
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                TableRow,
                {
                  "data-ocid": `reporting.productivity.row.${i + 1}`,
                  className: "hover:bg-muted/30 transition-colors",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-3 text-sm font-semibold text-foreground", children: p.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-3 text-sm text-muted-foreground", children: p.role }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-3 text-sm tabular-nums text-right font-medium", children: p.encounters }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-3 text-sm tabular-nums text-right", children: p.avgDay }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-3 text-sm tabular-nums text-right text-muted-foreground", children: p.avgVisit }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-3 text-sm text-muted-foreground max-w-[140px] truncate", children: p.topDx }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-3 text-sm tabular-nums text-right font-semibold text-success", children: p.rvus }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "px-4 py-3 text-right", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "text-sm tabular-nums font-semibold",
                          style: {
                            color: (p.satisfaction ?? 0) >= 4.7 ? "var(--chart-2)" : (p.satisfaction ?? 0) >= 4.4 ? "var(--chart-5)" : "var(--destructive)"
                          },
                          children: (p.satisfaction ?? 0).toFixed(1)
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground ml-0.5", children: "/5" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "svg",
                      {
                        width: "60",
                        height: "24",
                        viewBox: "0 0 60 24",
                        className: "overflow-visible",
                        role: "img",
                        "aria-label": `Weekly trend for ${p.name}`,
                        children: p.weekly.map((v, wi) => {
                          const barH = Math.round(v / maxW * 18);
                          const x = wi * 16;
                          return /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "rect",
                            {
                              x,
                              y: 24 - barH,
                              width: "12",
                              height: barH,
                              rx: "2",
                              className: "fill-primary opacity-70"
                            },
                            `w${wi}-${v}`
                          );
                        })
                      }
                    ) })
                  ]
                },
                p.name
              );
            }) })
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
        "data-ocid": "reporting.productivity.weekly.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Card,
            {
              className: "border border-border shadow-card bg-card",
              "data-ocid": "reporting.productivity.encounters.card",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex flex-row items-center justify-between pb-1 pt-4 px-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Total Encounters" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4 text-muted-foreground" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pb-4 px-4 pt-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold tabular-nums text-foreground", children: totalEncounters }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1.5", children: "this week, all providers" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Card,
            {
              className: "border border-border shadow-card bg-card",
              "data-ocid": "reporting.productivity.rvus.card",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex flex-row items-center justify-between pb-1 pt-4 px-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Avg RVUs / Provider" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4 text-muted-foreground" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pb-4 px-4 pt-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold tabular-nums text-foreground", children: avgRVUs }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1.5", children: "relative value units" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Card,
            {
              className: "border border-border shadow-card bg-card",
              "data-ocid": "reporting.productivity.completion.card",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex flex-row items-center justify-between pb-1 pt-4 px-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Note Completion Rate" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChartNoAxesColumn, { className: "w-4 h-4 text-muted-foreground" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pb-4 px-4 pt-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-bold tabular-nums text-foreground", children: [
                    completionRate,
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1.5", children: "notes signed / encounters" })
                ] })
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        className: "border border-border shadow-card bg-card",
        "data-ocid": "reporting.productivity.table",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "px-4 py-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-semibold uppercase tracking-wider text-foreground", children: "Provider Performance — This Week" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { className: "bg-muted/60 hover:bg-muted/60", children: [
              "Provider",
              "Role",
              "Encounters",
              "Notes Done",
              "Pending",
              "Avg Duration",
              "RVUs"
            ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              TableHead,
              {
                className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4",
                children: h
              },
              h
            )) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: PROVIDER_STATS.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TableRow,
              {
                "data-ocid": `reporting.productivity.row.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-3 font-medium text-sm text-foreground", children: p.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-3 text-sm text-muted-foreground", children: p.role }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-3 text-sm text-right tabular-nums", children: p.encounters }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-3 text-sm text-right tabular-nums text-success", children: p.notesCompleted }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-3 text-sm text-right tabular-nums", children: p.notesPending > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-warning font-medium", children: p.notesPending }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "—" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-3 text-sm text-right text-muted-foreground", children: p.avgDuration }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-3 text-sm text-right tabular-nums font-semibold", children: p.rvus })
                ]
              },
              p.name
            )) })
          ] }) })
        ]
      }
    )
  ] });
}
const QUALITY_MEASURES = [
  {
    name: "Diabetic HbA1c Control (<8%)",
    category: "Diabetes",
    rate: 71,
    benchmark: 75,
    status: "Below",
    trend: "↓"
  },
  {
    name: "Blood Pressure Control (<140/90)",
    category: "Cardiovascular",
    rate: 82,
    benchmark: 80,
    status: "Meeting",
    trend: "↑"
  },
  {
    name: "Breast Cancer Screening (Mammogram)",
    category: "Preventive",
    rate: 68,
    benchmark: 70,
    status: "Below",
    trend: "→"
  },
  {
    name: "Colorectal Cancer Screening",
    category: "Preventive",
    rate: 74,
    benchmark: 75,
    status: "Below",
    trend: "↑"
  },
  {
    name: "Flu Vaccination Rate",
    category: "Immunization",
    rate: 89,
    benchmark: 80,
    status: "Above",
    trend: "↑"
  },
  {
    name: "Pneumococcal Vaccination",
    category: "Immunization",
    rate: 76,
    benchmark: 70,
    status: "Above",
    trend: "→"
  },
  {
    name: "Statin Therapy for CVD",
    category: "Cardiovascular",
    rate: 91,
    benchmark: 85,
    status: "Above",
    trend: "↑"
  },
  {
    name: "Depression Screening (PHQ-9)",
    category: "Behavioral",
    rate: 63,
    benchmark: 70,
    status: "Below",
    trend: "↓"
  },
  {
    name: "Tobacco Use Screening",
    category: "Preventive",
    rate: 94,
    benchmark: 90,
    status: "Above",
    trend: "↑"
  }
];
function ReportingQualityMeasures() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",
        "data-ocid": "reporting.quality.summary.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatCard,
            {
              ocid: "reporting.quality.score.card",
              title: "Overall Quality Score",
              value: "78%",
              sub: "composite across 9 measures",
              icon: TrendingUp,
              iconClass: "text-muted-foreground"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatCard,
            {
              ocid: "reporting.quality.benchmark.card",
              title: "Measures Meeting Benchmark",
              value: "6 / 9",
              sub: "5 above, 1 at, 3 below",
              icon: ChartNoAxesColumn,
              iconClass: "text-muted-foreground"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatCard,
            {
              ocid: "reporting.quality.gaps.card",
              title: "Patients Flagged for Gaps",
              value: 23,
              sub: "care gap alerts this period",
              icon: Users,
              iconClass: "text-muted-foreground"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatCard,
            {
              ocid: "reporting.quality.period.card",
              title: "Reporting Period",
              value: "Q1 2026",
              sub: "Jan 1 – Mar 31, 2026",
              icon: Calendar,
              iconClass: "text-muted-foreground"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        className: "border border-border shadow-card bg-card",
        "data-ocid": "reporting.quality.chart.card",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "px-4 py-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-semibold uppercase tracking-wider text-foreground", children: "Compliance Rate vs. Benchmark" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            BarChart,
            {
              data: QUALITY_MEASURES,
              layout: "vertical",
              margin: { top: 0, right: 40, left: 140, bottom: 0 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  CartesianGrid,
                  {
                    strokeDasharray: "3 3",
                    stroke: "oklch(var(--border))",
                    horizontal: false
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  XAxis,
                  {
                    type: "number",
                    domain: [0, 100],
                    tick: { fontSize: 10, fill: "oklch(var(--muted-foreground))" },
                    tickLine: false,
                    axisLine: false,
                    unit: "%"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  YAxis,
                  {
                    type: "category",
                    dataKey: "name",
                    tick: { fontSize: 10, fill: "oklch(var(--foreground))" },
                    tickLine: false,
                    axisLine: false,
                    width: 140
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Tooltip,
                  {
                    formatter: (v) => [`${v}%`],
                    contentStyle: {
                      fontSize: 11,
                      background: "oklch(var(--popover))",
                      border: "1px solid oklch(var(--border))",
                      borderRadius: 6
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { wrapperStyle: { fontSize: 10 } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Bar,
                  {
                    dataKey: "rate",
                    name: "Rate %",
                    fill: "oklch(var(--primary))",
                    radius: [0, 3, 3, 0],
                    opacity: 0.85
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Bar,
                  {
                    dataKey: "benchmark",
                    name: "Benchmark %",
                    fill: "oklch(var(--muted-foreground))",
                    radius: [0, 3, 3, 0],
                    opacity: 0.4
                  }
                )
              ]
            }
          ) }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        className: "border border-border shadow-card bg-card",
        "data-ocid": "reporting.quality.table",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "px-4 py-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-semibold uppercase tracking-wider text-foreground", children: "HEDIS / Quality Measures — Q1 2026" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { className: "bg-muted/60 hover:bg-muted/60", children: [
              "Measure",
              "Category",
              "Rate",
              "Benchmark",
              "Status",
              "Trend"
            ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              TableHead,
              {
                className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4",
                children: h
              },
              h
            )) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: QUALITY_MEASURES.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TableRow,
              {
                "data-ocid": `reporting.quality.row.${i + 1}`,
                className: "hover:bg-muted/30 transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-3 text-sm font-medium text-foreground max-w-[280px]", children: m.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-2 py-0.5 rounded-sm text-xs font-medium bg-muted text-muted-foreground", children: m.category }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-3 text-sm font-semibold tabular-nums text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: m.status === "Above" ? "text-success" : m.status === "Below" ? "text-destructive" : "text-foreground",
                      children: [
                        m.rate,
                        "%"
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "px-4 py-3 text-sm tabular-nums text-right text-muted-foreground", children: [
                    m.benchmark,
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `inline-flex items-center px-2 py-0.5 rounded-sm text-xs font-semibold ${m.status === "Above" ? "bg-success/8 text-success border border-success/25" : m.status === "Meeting" ? "bg-primary/8 text-primary border border-primary/20" : "bg-destructive/8 text-destructive border border-destructive/20"}`,
                      children: m.status
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `text-base font-bold ${m.trend === "↑" ? "text-success" : m.trend === "↓" ? "text-destructive" : "text-muted-foreground"}`,
                      children: m.trend
                    }
                  ) })
                ]
              },
              m.name
            )) })
          ] }) })
        ]
      }
    )
  ] });
}
const SHIFT_ACTIVITY = {
  day: [
    { hour: "7am", patients: 4, vitals: 8, meds: 12 },
    { hour: "8am", patients: 8, vitals: 16, meds: 22 },
    { hour: "9am", patients: 11, vitals: 22, meds: 30 },
    { hour: "10am", patients: 9, vitals: 18, meds: 25 },
    { hour: "11am", patients: 10, vitals: 20, meds: 28 },
    { hour: "12pm", patients: 7, vitals: 14, meds: 18 },
    { hour: "1pm", patients: 9, vitals: 17, meds: 23 },
    { hour: "2pm", patients: 12, vitals: 24, meds: 32 },
    { hour: "3pm", patients: 8, vitals: 16, meds: 21 }
  ],
  evening: [
    { hour: "3pm", patients: 6, vitals: 11, meds: 15 },
    { hour: "4pm", patients: 7, vitals: 13, meds: 18 },
    { hour: "5pm", patients: 8, vitals: 15, meds: 20 },
    { hour: "6pm", patients: 5, vitals: 9, meds: 13 },
    { hour: "7pm", patients: 4, vitals: 7, meds: 11 },
    { hour: "8pm", patients: 6, vitals: 10, meds: 14 },
    { hour: "9pm", patients: 3, vitals: 5, meds: 8 },
    { hour: "10pm", patients: 2, vitals: 4, meds: 7 },
    { hour: "11pm", patients: 1, vitals: 3, meds: 5 }
  ],
  night: [
    { hour: "11pm", patients: 1, vitals: 3, meds: 4 },
    { hour: "12am", patients: 2, vitals: 4, meds: 6 },
    { hour: "1am", patients: 1, vitals: 2, meds: 3 },
    { hour: "2am", patients: 1, vitals: 2, meds: 3 },
    { hour: "3am", patients: 2, vitals: 4, meds: 5 },
    { hour: "4am", patients: 1, vitals: 3, meds: 4 },
    { hour: "5am", patients: 2, vitals: 4, meds: 6 },
    { hour: "6am", patients: 3, vitals: 6, meds: 9 },
    { hour: "7am", patients: 4, vitals: 8, meds: 12 }
  ]
};
const ACTIVE_CARE_PLANS = [
  {
    patient: "Margaret Chen",
    condition: "Type 2 Diabetes",
    nurse: "R. Williams, RN",
    priority: "High",
    updated: "Today 09:15"
  },
  {
    patient: "James Okafor",
    condition: "Hypertension / CHF",
    nurse: "T. Davis, RN",
    priority: "High",
    updated: "Today 08:30"
  },
  {
    patient: "Linda Torres",
    condition: "Post-op Day 2",
    nurse: "S. Johnson, RN",
    priority: "Medium",
    updated: "Today 10:00"
  },
  {
    patient: "Robert Kim",
    condition: "Asthma exacerbation",
    nurse: "K. Martinez, RN",
    priority: "Medium",
    updated: "Yesterday 16:45"
  },
  {
    patient: "Priya Nair",
    condition: "Chronic Kidney Disease",
    nurse: "R. Williams, RN",
    priority: "Low",
    updated: "Yesterday 14:20"
  }
];
function ReportingShiftSummary() {
  const [activeShift, setActiveShift] = reactExports.useState(
    "day"
  );
  const shiftData = SHIFT_ACTIVITY[activeShift];
  const shiftLabels = {
    day: "Day Shift (7am–3pm)",
    evening: "Evening Shift (3pm–11pm)",
    night: "Night Shift (11pm–7am)"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "reporting.shift-summary.panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3", children: [
      {
        label: "Patients Today",
        value: "47",
        icon: Users,
        color: "text-chart-1",
        sub: "14 inpatient, 33 outpatient"
      },
      {
        label: "Vitals Recorded",
        value: "128",
        icon: Activity,
        color: "text-chart-2",
        sub: "across all units"
      },
      {
        label: "Meds Administered",
        value: "214",
        icon: TrendingUp,
        color: "text-chart-3",
        sub: "98.1% on schedule"
      },
      {
        label: "New Orders",
        value: "63",
        icon: ChartNoAxesColumn,
        color: "text-chart-4",
        sub: "31 lab, 18 imaging, 14 Rx"
      },
      {
        label: "Critical Alerts",
        value: "3",
        icon: DollarSign,
        color: "text-destructive",
        sub: "2 acknowledged"
      }
    ].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        "data-ocid": `reporting.shift.stat.${i + 1}`,
        className: "border border-border shadow-card bg-card",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex flex-row items-center justify-between pb-1 pt-4 px-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: s.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: `w-4 h-4 ${s.color}` })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pb-4 px-4 pt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold tabular-nums leading-none text-foreground", children: s.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1.5", children: s.sub })
          ] })
        ]
      },
      s.label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        className: "border border-border shadow-card bg-card",
        "data-ocid": "reporting.shift.chart.card",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "px-4 py-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-xs font-semibold uppercase tracking-wider text-foreground", children: [
              "Hourly Activity — ",
              shiftLabels[activeShift]
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1", children: ["day", "evening", "night"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": `reporting.shift.${s}.tab`,
                onClick: () => setActiveShift(s),
                className: "px-2.5 py-1 text-xs font-semibold rounded-sm transition-all capitalize",
                style: {
                  background: activeShift === s ? "var(--chart-1)" : "var(--muted)",
                  color: activeShift === s ? "var(--primary-foreground)" : "var(--muted-foreground)",
                  border: activeShift === s ? "1px solid var(--primary)" : "1px solid var(--border)"
                },
                children: s
              },
              s
            )) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            BarChart,
            {
              data: shiftData,
              margin: { top: 0, right: 16, left: 0, bottom: 0 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  CartesianGrid,
                  {
                    strokeDasharray: "3 3",
                    stroke: "oklch(var(--border))",
                    vertical: false
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  XAxis,
                  {
                    dataKey: "hour",
                    tick: { fontSize: 10, fill: "oklch(var(--muted-foreground))" },
                    tickLine: false,
                    axisLine: false
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  YAxis,
                  {
                    tick: { fontSize: 10, fill: "oklch(var(--muted-foreground))" },
                    tickLine: false,
                    axisLine: false
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Tooltip,
                  {
                    contentStyle: {
                      fontSize: 11,
                      background: "oklch(var(--popover))",
                      border: "1px solid oklch(var(--border))",
                      borderRadius: 6
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { wrapperStyle: { fontSize: 10 } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Bar,
                  {
                    dataKey: "patients",
                    name: "Patients",
                    fill: "oklch(var(--primary))",
                    radius: [2, 2, 0, 0],
                    opacity: 0.85
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Bar,
                  {
                    dataKey: "vitals",
                    name: "Vitals",
                    fill: "hsl(142 70% 40%)",
                    radius: [2, 2, 0, 0],
                    opacity: 0.7
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Bar,
                  {
                    dataKey: "meds",
                    name: "Medications",
                    fill: "hsl(275 70% 55%)",
                    radius: [2, 2, 0, 0],
                    opacity: 0.6
                  }
                )
              ]
            }
          ) }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: "border border-border shadow-card bg-card",
          "data-ocid": "reporting.shift.staff.card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "px-4 py-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-xs font-semibold uppercase tracking-wider text-foreground flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-3.5 h-3.5 text-muted-foreground" }),
              " Staff on Duty"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              [
                {
                  role: "Registered Nurses (RN)",
                  count: 12,
                  color: "bg-chart-1"
                },
                { role: "Physicians (MD/DO)", count: 4, color: "bg-chart-2" },
                { role: "Pharmacists", count: 2, color: "bg-chart-3" },
                { role: "Technicians", count: 8, color: "bg-chart-4" }
              ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-2 h-2 rounded-full ${s.color}` }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground", children: s.role })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold tabular-nums text-foreground", children: s.count })
              ] }, s.role)),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 border-t border-border flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-muted-foreground", children: "Total Staff" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold tabular-nums text-foreground", children: "26" })
              ] })
            ] }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: "border border-border shadow-card bg-card",
          "data-ocid": "reporting.shift.incidents.card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "px-4 py-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-xs font-semibold uppercase tracking-wider text-foreground flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-3.5 h-3.5 text-muted-foreground" }),
              " ",
              "Incidents Today"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl font-bold tabular-nums text-foreground", children: "2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "reported incidents" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-success font-medium", children: "Down 2 from yesterday" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [
                {
                  type: "Near-fall event",
                  unit: "General Med — Bed GM-04",
                  time: "08:42"
                },
                {
                  type: "Medication delay",
                  unit: "ICU — Bed ICU-02",
                  time: "11:15"
                }
              ].map((inc) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "flex items-start gap-2 p-2 bg-muted/30 rounded-sm",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground", children: inc.type }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                      inc.unit,
                      " · ",
                      inc.time
                    ] })
                  ] })
                },
                inc.type
              )) })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        className: "border border-border shadow-card bg-card",
        "data-ocid": "reporting.shift.careplans.table",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "px-4 py-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-semibold uppercase tracking-wider text-foreground", children: "Active Nursing Care Plans" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { className: "bg-muted/60 hover:bg-muted/60", children: [
              "Patient",
              "Condition",
              "Assigned Nurse",
              "Priority",
              "Last Updated"
            ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              TableHead,
              {
                className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground h-9 px-4",
                children: h
              },
              h
            )) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: ACTIVE_CARE_PLANS.map((plan, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TableRow,
              {
                "data-ocid": `reporting.shift.careplan.row.${i + 1}`,
                className: "hover:bg-muted/30 transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-3 text-sm font-medium text-foreground", children: plan.patient }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-3 text-sm text-foreground", children: plan.condition }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-3 text-sm text-muted-foreground", children: plan.nurse }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `inline-flex items-center px-2 py-0.5 rounded-sm text-xs font-semibold border ${plan.priority === "High" ? "bg-destructive/8 text-destructive border-destructive/20" : plan.priority === "Medium" ? "bg-warning/10 text-warning-foreground border-warning/20" : "bg-muted text-muted-foreground border-border"}`,
                      children: plan.priority
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "px-4 py-3 text-sm text-muted-foreground", children: plan.updated })
                ]
              },
              plan.patient
            )) })
          ] }) })
        ]
      }
    )
  ] });
}
function calcAge(dob) {
  const birth = new Date(dob);
  const now = /* @__PURE__ */ new Date();
  let age = now.getFullYear() - birth.getFullYear();
  const m = now.getMonth() - birth.getMonth();
  if (m < 0 || m === 0 && now.getDate() < birth.getDate()) age--;
  return age;
}
const QUICK_COHORTS = [
  {
    id: "diabetics-hba1c",
    label: "Diabetics with HbA1c > 9",
    description: "Patients with T2DM and poorly controlled glycemia"
  },
  {
    id: "warfarin",
    label: "Patients on Warfarin",
    description: "Active warfarin prescriptions requiring INR monitoring"
  },
  {
    id: "flu-shot",
    label: "Overdue for Flu Shot",
    description: "Patients without influenza vaccine this season"
  },
  {
    id: "chf",
    label: "Active CHF Patients",
    description: "Patients with congestive heart failure diagnosis"
  },
  {
    id: "hypertension",
    label: "Uncontrolled Hypertension",
    description: "Patients with HTN and last BP > 140/90"
  },
  {
    id: "statins",
    label: "Patients on Statins",
    description: "Active statin prescriptions for lipid management"
  }
];
function getCohortResults(cohort) {
  switch (cohort) {
    case "diabetics-hba1c":
      return [
        {
          patientId: 1,
          patientName: "Margaret Chen",
          dob: "1968-03-15",
          age: calcAge("1968-03-15"),
          diagnosis: "Type 2 Diabetes Mellitus (E11.9)",
          lastVisit: "Mar 12, 2026",
          labValue: "HbA1c 8.2%",
          careGapStatus: "overdue"
        }
      ];
    case "warfarin":
      return [
        {
          patientId: 2,
          patientName: "Robert Okonkwo",
          dob: "1954-07-22",
          age: calcAge("1954-07-22"),
          diagnosis: "Atrial Fibrillation (I48.91)",
          lastVisit: "Mar 12, 2026",
          labValue: "INR 2.1",
          careGapStatus: "due-soon"
        }
      ];
    case "flu-shot":
      return [
        {
          patientId: 4,
          patientName: "James Thornton",
          dob: "1975-01-30",
          age: calcAge("1975-01-30"),
          diagnosis: "Annual wellness — flu shot overdue",
          lastVisit: "Mar 11, 2026",
          careGapStatus: "overdue"
        },
        {
          patientId: 5,
          patientName: "Aisha Patel",
          dob: "1990-06-14",
          age: calcAge("1990-06-14"),
          diagnosis: "Allergic rhinitis — flu shot overdue",
          lastVisit: "Mar 10, 2026",
          careGapStatus: "overdue"
        }
      ];
    case "chf":
      return [
        {
          patientId: 2,
          patientName: "Robert Okonkwo",
          dob: "1954-07-22",
          age: calcAge("1954-07-22"),
          diagnosis: "Congestive Heart Failure (I50.9)",
          lastVisit: "Mar 12, 2026",
          labValue: "BNP elevated",
          careGapStatus: "due-soon"
        }
      ];
    case "hypertension":
      return [
        {
          patientId: 1,
          patientName: "Margaret Chen",
          dob: "1968-03-15",
          age: calcAge("1968-03-15"),
          diagnosis: "Hypertension (I10)",
          lastVisit: "Mar 12, 2026",
          labValue: "Last BP: 148/92",
          careGapStatus: "due-soon"
        },
        {
          patientId: 2,
          patientName: "Robert Okonkwo",
          dob: "1954-07-22",
          age: calcAge("1954-07-22"),
          diagnosis: "Hypertension (I10) + CHF",
          lastVisit: "Mar 12, 2026",
          labValue: "Last BP: 162/98",
          careGapStatus: "overdue"
        }
      ];
    case "statins":
      return [
        {
          patientId: 4,
          patientName: "James Thornton",
          dob: "1975-01-30",
          age: calcAge("1975-01-30"),
          diagnosis: "Dyslipidemia (E78.5)",
          lastVisit: "Mar 11, 2026",
          labValue: "LDL 142 mg/dL",
          careGapStatus: "due-soon"
        }
      ];
    default:
      return [];
  }
}
function getCustomResults(diagFilter, medFilter, careGapFilter, patients, meds, labs) {
  const patientSource = patients ?? DEMO_PATIENTS;
  const medSource = meds ?? DEMO_MEDICATIONS;
  const labSource = labs ?? DEMO_LAB_RESULTS;
  return patientSource.filter((p) => {
    const patMeds = medSource.filter(
      (m) => m.patientId === p.id && m.status === "active"
    );
    labSource.filter((l) => l.patientId === p.id);
    if (medFilter && !patMeds.some(
      (m) => m.name.toLowerCase().includes(medFilter.toLowerCase())
    )) {
      return false;
    }
    if (diagFilter && ![
      "Type 2 Diabetes",
      "CHF",
      "Hypertension",
      "Dyslipidemia",
      "Hypothyroidism",
      "Allergic Rhinitis"
    ].join(" ").toLowerCase().includes(diagFilter.toLowerCase())) {
      return false;
    }
    return true;
  }).map((p) => {
    const patLabs = labSource.filter((l) => l.patientId === p.id);
    const firstLab = patLabs[0];
    return {
      patientId: Number(p.id),
      patientName: p.name,
      dob: p.dateOfBirth,
      age: calcAge(p.dateOfBirth),
      diagnosis: "See patient chart",
      lastVisit: "Mar 12, 2026",
      labValue: firstLab ? `${firstLab.testName}: ${firstLab.result} ${firstLab.unit}` : void 0,
      careGapStatus: careGapFilter ? "overdue" : "n/a"
    };
  });
}
const careGapBadge = (status) => {
  switch (status) {
    case "overdue":
      return { variant: "danger", label: "Overdue" };
    case "due-soon":
      return { variant: "warning", label: "Due Soon" };
    case "up-to-date":
      return { variant: "success", label: "Up to Date" };
    default:
      return { variant: "neutral", label: "N/A" };
  }
};
function PopulationHealth({
  onNavigate
}) {
  var _a;
  const { isDemoMode } = useDemoMode();
  const { actor, isFetching: actorFetching } = useActor();
  const [activeCohort, setActiveCohort] = reactExports.useState(null);
  const [showFilters, setShowFilters] = reactExports.useState(false);
  const [diagFilter, setDiagFilter] = reactExports.useState("");
  const [medFilter, setMedFilter] = reactExports.useState("");
  const [labTest, setLabTest] = reactExports.useState("");
  const [labThreshold, setLabThreshold] = reactExports.useState("");
  const [careGapFilter, setCareGapFilter] = reactExports.useState("");
  const [backendPatients, setBackendPatients] = reactExports.useState(null);
  const [backendMeds, setBackendMeds] = reactExports.useState(null);
  const [backendLabs, setBackendLabs] = reactExports.useState(null);
  const [cohortLoading, setCohortLoading] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (isDemoMode || !actor || actorFetching) return;
    setCohortLoading(true);
    Promise.all([
      actor.listPatients(),
      actor.listLabResults(),
      actor.listMedications()
    ]).then(([patients, labs, meds]) => {
      setBackendPatients(patients);
      setBackendLabs(labs);
      setBackendMeds(meds);
    }).catch(() => {
    }).finally(() => setCohortLoading(false));
  }, [isDemoMode, actor, actorFetching]);
  const results = reactExports.useMemo(() => {
    if (activeCohort !== null) return getCohortResults(activeCohort);
    if (diagFilter || medFilter || careGapFilter) {
      return getCustomResults(
        diagFilter,
        medFilter,
        careGapFilter,
        !isDemoMode && backendPatients ? backendPatients : void 0,
        !isDemoMode && backendMeds ? backendMeds : void 0,
        !isDemoMode && backendLabs ? backendLabs : void 0
      );
    }
    return [];
  }, [
    activeCohort,
    diagFilter,
    medFilter,
    careGapFilter,
    isDemoMode,
    backendPatients,
    backendMeds,
    backendLabs
  ]);
  const hasFilters = !!(diagFilter || medFilter || labTest || labThreshold || careGapFilter);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", "data-ocid": "population-health.page", children: [
    (() => {
      let optInCount = 0;
      for (let i = 1; i <= 10; i++) {
        try {
          const raw = localStorage.getItem(`medunite_consent_${i}`);
          if (raw) {
            const c = JSON.parse(raw);
            if (c.analyticsOptIn === true) optInCount++;
          } else {
          }
        } catch {
        }
      }
      const displayCount = optInCount === 0 ? 6 : optInCount;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-start gap-4 p-4 bg-card border border-border rounded text-sm",
          "data-ocid": "population-health.analytics.card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "Analytics Opt-In Rate" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Cohort analytics include only patients who have consented to anonymous data sharing." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right flex-shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-bold tabular-nums text-primary", children: [
                displayCount,
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal text-muted-foreground", children: "/10" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                displayCount * 10,
                "% opted in"
              ] })
            ] })
          ]
        }
      );
    })(),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3", children: "Quick Cohorts" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: QUICK_COHORTS.map((cohort) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          "data-ocid": `population-health.${cohort.id}.button`,
          onClick: () => setActiveCohort(activeCohort === cohort.id ? null : cohort.id),
          title: cohort.description,
          className: `inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border transition-all ${activeCohort === cohort.id ? "bg-primary text-primary-foreground border-primary" : "bg-card text-foreground border-border hover:border-primary/50 hover:bg-muted"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(UsersRound, { className: "w-3 h-3 flex-shrink-0" }),
            cohort.label
          ]
        },
        cohort.id
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "border border-border bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          "data-ocid": "population-health.filter.toggle",
          className: "w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-foreground hover:bg-muted/40 transition-colors",
          onClick: () => setShowFilters((v) => !v),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "w-4 h-4 text-muted-foreground" }),
              "Custom Filters",
              hasFilters && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-sm text-xs font-bold bg-primary text-primary-foreground", children: [diagFilter, medFilter, labTest, careGapFilter].filter(
                Boolean
              ).length })
            ] }),
            showFilters ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4 text-muted-foreground" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 text-muted-foreground" })
          ]
        }
      ),
      showFilters && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border px-4 py-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label$1, { className: "text-xs", children: "Diagnosis (ICD-10 keyword)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                "data-ocid": "population-health.diag.input",
                placeholder: "e.g. diabetes, hypertension",
                value: diagFilter,
                onChange: (e) => {
                  setDiagFilter(e.target.value);
                  setActiveCohort(null);
                },
                className: "h-8 text-xs"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label$1, { className: "text-xs", children: "Medication" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                "data-ocid": "population-health.med.input",
                placeholder: "e.g. metformin, warfarin",
                value: medFilter,
                onChange: (e) => {
                  setMedFilter(e.target.value);
                  setActiveCohort(null);
                },
                className: "h-8 text-xs"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label$1, { className: "text-xs", children: "Lab Test Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                "data-ocid": "population-health.lab.input",
                placeholder: "e.g. HbA1c, LDL",
                value: labTest,
                onChange: (e) => setLabTest(e.target.value),
                className: "h-8 text-xs"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label$1, { className: "text-xs", children: "Lab Threshold (e.g. > 9)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                "data-ocid": "population-health.threshold.input",
                placeholder: "e.g. > 9",
                value: labThreshold,
                onChange: (e) => setLabThreshold(e.target.value),
                className: "h-8 text-xs"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label$1, { className: "text-xs", children: "Care Gap" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: careGapFilter,
                onValueChange: (v) => {
                  setCareGapFilter(v === "all" ? "" : v);
                  setActiveCohort(null);
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      "data-ocid": "population-health.care-gap.select",
                      className: "h-8 text-xs",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "All care gaps" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All care gaps" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "flu-shot", children: "Flu shot" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "mammogram", children: "Mammogram" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "hba1c", children: "HbA1c check" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "colonoscopy", children: "Colonoscopy" })
                  ] })
                ]
              }
            )
          ] })
        ] }),
        hasFilters && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            "data-ocid": "population-health.clear.button",
            variant: "ghost",
            size: "sm",
            className: "mt-3 h-7 text-xs text-muted-foreground",
            onClick: () => {
              setDiagFilter("");
              setMedFilter("");
              setLabTest("");
              setLabThreshold("");
              setCareGapFilter("");
              setActiveCohort(null);
            },
            children: "Clear filters"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "border border-border bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-3 border-b border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: activeCohort ? (_a = QUICK_COHORTS.find((c) => c.id === activeCohort)) == null ? void 0 : _a.label : hasFilters ? "Filtered Results" : "Patient Cohort Results" }),
        results.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
          results.length,
          " patient",
          results.length !== 1 ? "s" : ""
        ] })
      ] }),
      cohortLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "py-12 text-center",
          "data-ocid": "population-health.loading_state",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground animate-pulse", children: "Loading cohort data…" })
        }
      ) : results.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "py-12 text-center",
          "data-ocid": "population-health.empty_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(UsersRound, { className: "w-8 h-8 mx-auto text-muted-foreground/40 mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Select a quick cohort or apply filters to view results" })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { "data-ocid": "population-health.table", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Patient" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Age / DOB" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Relevant Diagnosis" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Last Visit" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Lab Value" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Care Gap" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: results.map((r, idx) => {
          const gapBadge = careGapBadge(r.careGapStatus);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            TableRow,
            {
              "data-ocid": `population-health.item.${idx + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs font-medium", children: r.patientName }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "text-xs text-muted-foreground", children: [
                  r.age,
                  " yrs",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: r.dob })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs", children: r.diagnosis }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs text-muted-foreground", children: r.lastVisit }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs", children: r.labValue ?? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "—" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  StatusBadge,
                  {
                    variant: gapBadge.variant,
                    label: gapBadge.label
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: onNavigate && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-ocid": `population-health.patient.link.${idx + 1}`,
                    className: "text-xs text-primary hover:underline",
                    onClick: () => onNavigate("patients"),
                    children: "View Chart →"
                  }
                ) })
              ]
            },
            r.patientId
          );
        }) })
      ] })
    ] })
  ] });
}
const MOCK_WEEKLY_VOLUME = [8, 12, 9, 15, 11, 4, 3];
function Reporting({ role }) {
  const { actor, isFetching } = useActor();
  const [totalPatients, setTotalPatients] = reactExports.useState(0);
  const [weekAppts, setWeekAppts] = reactExports.useState(0);
  const [pendingRevenue, setPendingRevenue] = reactExports.useState(0);
  const [noShowRate, setNoShowRate] = reactExports.useState(0);
  const [statusBreakdown, setStatusBreakdown] = reactExports.useState({
    scheduled: 0,
    completed: 0,
    cancelled: 0,
    noShow: 0,
    total: 0
  });
  const [weeklyVol, setWeeklyVol] = reactExports.useState(MOCK_WEEKLY_VOLUME);
  const [loading, setLoading] = reactExports.useState(true);
  const [todayPatients, setTodayPatients] = reactExports.useState(0);
  const [pendingNotes, setPendingNotes] = reactExports.useState(0);
  const [upcomingAppts, setUpcomingAppts] = reactExports.useState(0);
  const todayStr = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  reactExports.useEffect(() => {
    if (!actor || isFetching) return;
    setLoading(true);
    Promise.all([
      actor.listPatients(),
      actor.listAppointments(),
      actor.listInvoices(),
      actor.listClinicalNotes()
    ]).then(([patients, appointments, invoices, notes]) => {
      setTotalPatients(patients.length);
      const weekAgo = /* @__PURE__ */ new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      const weekStr = weekAgo.toISOString().slice(0, 10);
      setWeekAppts(appointments.filter((a) => a.date >= weekStr).length);
      const pending = invoices.filter((i) => i.status !== "paid").reduce((sum, i) => sum + Number(i.amount), 0);
      setPendingRevenue(pending);
      const counts = { scheduled: 0, completed: 0, cancelled: 0, noShow: 0 };
      for (const a of appointments) {
        if (a.status === "scheduled") counts.scheduled++;
        else if (a.status === "completed") counts.completed++;
        else if (a.status === "cancelled") counts.cancelled++;
        else if (a.status === "no-show") counts.noShow++;
      }
      const total = appointments.length || 1;
      setStatusBreakdown({ ...counts, total });
      setNoShowRate(
        appointments.length > 0 ? Math.round(counts.noShow / appointments.length * 100) : 0
      );
      const vol = [0, 0, 0, 0, 0, 0, 0];
      for (const a of appointments) {
        const d = new Date(a.date);
        const dayOfWeek = (d.getDay() + 6) % 7;
        if (!Number.isNaN(dayOfWeek)) vol[dayOfWeek]++;
      }
      setWeeklyVol(vol.some((v) => v > 0) ? vol : MOCK_WEEKLY_VOLUME);
      if (role === "Doctor") {
        setTodayPatients(
          appointments.filter(
            (a) => a.date.startsWith(todayStr) && a.status === "completed"
          ).length
        );
        setPendingNotes(notes.length);
        setUpcomingAppts(
          appointments.filter(
            (a) => a.date > (/* @__PURE__ */ new Date()).toISOString() && a.status === "scheduled"
          ).length
        );
      }
    }).catch(() => ue.error("Failed to load reporting data")).finally(() => setLoading(false));
  }, [actor, isFetching, role, todayStr]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", "data-ocid": "reporting.page", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "overview", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      TabsList,
      {
        className: "w-full justify-start rounded-none border-b border-border bg-transparent h-10 gap-0 mb-4",
        "data-ocid": "reporting.tabs",
        children: [
          { value: "overview", label: "Overview" },
          { value: "productivity", label: "Provider Productivity" },
          { value: "quality", label: "Quality Measures" },
          { value: "payermix", label: "Payer Mix" },
          { value: "population-health", label: "Population Health" },
          { value: "census", label: "Census" },
          { value: "shift-summary", label: "Shift Summary" }
        ].map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabsTrigger,
          {
            value: tab.value,
            "data-ocid": `reporting.${tab.value}.tab`,
            className: "rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary text-xs font-medium px-4 h-10",
            children: tab.label
          },
          tab.value
        ))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "overview", className: "mt-0 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ReportingAnalytics,
      {
        loading,
        totalPatients,
        weekAppts,
        pendingRevenue,
        noShowRate,
        weeklyVol,
        statusBreakdown,
        role,
        todayPatients,
        pendingNotes,
        upcomingAppts
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "productivity", className: "mt-0 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ReportingProductivity, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "quality", className: "mt-0 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ReportingQualityMeasures, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "payermix", className: "mt-0 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ReportingPayerMix, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "population-health", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PopulationHealth, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "census", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ReportingCensusTab, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "shift-summary", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ReportingShiftSummary, {}) })
  ] }) });
}
export {
  Reporting as default
};
