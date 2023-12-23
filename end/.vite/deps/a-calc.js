// D:/IdeaPro/HBuilderProjects/end/node_modules/a-calc/es/index.js
function _iterableToArrayLimit(e, t) {
  var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
  if (null != r) {
    var n, o, i, a, s = [], c = true, l = false;
    try {
      if (i = (r = r.call(e)).next, 0 === t) {
        if (Object(r) !== r)
          return;
        c = false;
      } else
        for (; !(c = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); c = true)
          ;
    } catch (e2) {
      l = true, o = e2;
    } finally {
      try {
        if (!c && null != r.return && (a = r.return(), Object(a) !== a))
          return;
      } finally {
        if (l)
          throw o;
      }
    }
    return s;
  }
}
function ownKeys(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(t2) {
      return Object.getOwnPropertyDescriptor(e, t2).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _objectSpread2(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {};
    t % 2 ? ownKeys(Object(r), true).forEach(function(t2) {
      _defineProperty(e, t2, r[t2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach(function(t2) {
      Object.defineProperty(e, t2, Object.getOwnPropertyDescriptor(r, t2));
    });
  }
  return e;
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function() {
    return e;
  };
  var e = {}, t = Object.prototype, r = t.hasOwnProperty, n = Object.defineProperty || function(e2, t2, r2) {
    e2[t2] = r2.value;
  }, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", s = o.toStringTag || "@@toStringTag";
  function c(e2, t2, r2) {
    return Object.defineProperty(e2, t2, { value: r2, enumerable: true, configurable: true, writable: true }), e2[t2];
  }
  try {
    c({}, "");
  } catch (e2) {
    c = function(e3, t2, r2) {
      return e3[t2] = r2;
    };
  }
  function l(e2, t2, r2, o2) {
    var i2 = t2 && t2.prototype instanceof h ? t2 : h, a2 = Object.create(i2.prototype), s2 = new O(o2 || []);
    return n(a2, "_invoke", { value: S(e2, r2, s2) }), a2;
  }
  function u(e2, t2, r2) {
    try {
      return { type: "normal", arg: e2.call(t2, r2) };
    } catch (e3) {
      return { type: "throw", arg: e3 };
    }
  }
  e.wrap = l;
  var f = {};
  function h() {
  }
  function p() {
  }
  function g() {
  }
  var _ = {};
  c(_, i, function() {
    return this;
  });
  var d = Object.getPrototypeOf, m = d && d(d(C([])));
  m && m !== t && r.call(m, i) && (_ = m);
  var b = g.prototype = h.prototype = Object.create(_);
  function y(e2) {
    ["next", "throw", "return"].forEach(function(t2) {
      c(e2, t2, function(e3) {
        return this._invoke(t2, e3);
      });
    });
  }
  function v(e2, t2) {
    function o2(n2, i3, a2, s2) {
      var c2 = u(e2[n2], e2, i3);
      if ("throw" !== c2.type) {
        var l2 = c2.arg, f2 = l2.value;
        return f2 && "object" == typeof f2 && r.call(f2, "__await") ? t2.resolve(f2.__await).then(function(e3) {
          o2("next", e3, a2, s2);
        }, function(e3) {
          o2("throw", e3, a2, s2);
        }) : t2.resolve(f2).then(function(e3) {
          l2.value = e3, a2(l2);
        }, function(e3) {
          return o2("throw", e3, a2, s2);
        });
      }
      s2(c2.arg);
    }
    var i2;
    n(this, "_invoke", { value: function(e3, r2) {
      function n2() {
        return new t2(function(t3, n3) {
          o2(e3, r2, t3, n3);
        });
      }
      return i2 = i2 ? i2.then(n2, n2) : n2();
    } });
  }
  function S(e2, t2, r2) {
    var n2 = "suspendedStart";
    return function(o2, i2) {
      if ("executing" === n2)
        throw new Error("Generator is already running");
      if ("completed" === n2) {
        if ("throw" === o2)
          throw i2;
        return A();
      }
      for (r2.method = o2, r2.arg = i2; ; ) {
        var a2 = r2.delegate;
        if (a2) {
          var s2 = w(a2, r2);
          if (s2) {
            if (s2 === f)
              continue;
            return s2;
          }
        }
        if ("next" === r2.method)
          r2.sent = r2._sent = r2.arg;
        else if ("throw" === r2.method) {
          if ("suspendedStart" === n2)
            throw n2 = "completed", r2.arg;
          r2.dispatchException(r2.arg);
        } else
          "return" === r2.method && r2.abrupt("return", r2.arg);
        n2 = "executing";
        var c2 = u(e2, t2, r2);
        if ("normal" === c2.type) {
          if (n2 = r2.done ? "completed" : "suspendedYield", c2.arg === f)
            continue;
          return { value: c2.arg, done: r2.done };
        }
        "throw" === c2.type && (n2 = "completed", r2.method = "throw", r2.arg = c2.arg);
      }
    };
  }
  function w(e2, t2) {
    var r2 = t2.method, n2 = e2.iterator[r2];
    if (void 0 === n2)
      return t2.delegate = null, "throw" === r2 && e2.iterator.return && (t2.method = "return", t2.arg = void 0, w(e2, t2), "throw" === t2.method) || "return" !== r2 && (t2.method = "throw", t2.arg = new TypeError("The iterator does not provide a '" + r2 + "' method")), f;
    var o2 = u(n2, e2.iterator, t2.arg);
    if ("throw" === o2.type)
      return t2.method = "throw", t2.arg = o2.arg, t2.delegate = null, f;
    var i2 = o2.arg;
    return i2 ? i2.done ? (t2[e2.resultName] = i2.value, t2.next = e2.nextLoc, "return" !== t2.method && (t2.method = "next", t2.arg = void 0), t2.delegate = null, f) : i2 : (t2.method = "throw", t2.arg = new TypeError("iterator result is not an object"), t2.delegate = null, f);
  }
  function $(e2) {
    var t2 = { tryLoc: e2[0] };
    1 in e2 && (t2.catchLoc = e2[1]), 2 in e2 && (t2.finallyLoc = e2[2], t2.afterLoc = e2[3]), this.tryEntries.push(t2);
  }
  function E(e2) {
    var t2 = e2.completion || {};
    t2.type = "normal", delete t2.arg, e2.completion = t2;
  }
  function O(e2) {
    this.tryEntries = [{ tryLoc: "root" }], e2.forEach($, this), this.reset(true);
  }
  function C(e2) {
    if (e2) {
      var t2 = e2[i];
      if (t2)
        return t2.call(e2);
      if ("function" == typeof e2.next)
        return e2;
      if (!isNaN(e2.length)) {
        var n2 = -1, o2 = function t3() {
          for (; ++n2 < e2.length; )
            if (r.call(e2, n2))
              return t3.value = e2[n2], t3.done = false, t3;
          return t3.value = void 0, t3.done = true, t3;
        };
        return o2.next = o2;
      }
    }
    return { next: A };
  }
  function A() {
    return { value: void 0, done: true };
  }
  return p.prototype = g, n(b, "constructor", { value: g, configurable: true }), n(g, "constructor", { value: p, configurable: true }), p.displayName = c(g, s, "GeneratorFunction"), e.isGeneratorFunction = function(e2) {
    var t2 = "function" == typeof e2 && e2.constructor;
    return !!t2 && (t2 === p || "GeneratorFunction" === (t2.displayName || t2.name));
  }, e.mark = function(e2) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e2, g) : (e2.__proto__ = g, c(e2, s, "GeneratorFunction")), e2.prototype = Object.create(b), e2;
  }, e.awrap = function(e2) {
    return { __await: e2 };
  }, y(v.prototype), c(v.prototype, a, function() {
    return this;
  }), e.AsyncIterator = v, e.async = function(t2, r2, n2, o2, i2) {
    void 0 === i2 && (i2 = Promise);
    var a2 = new v(l(t2, r2, n2, o2), i2);
    return e.isGeneratorFunction(r2) ? a2 : a2.next().then(function(e2) {
      return e2.done ? e2.value : a2.next();
    });
  }, y(b), c(b, s, "Generator"), c(b, i, function() {
    return this;
  }), c(b, "toString", function() {
    return "[object Generator]";
  }), e.keys = function(e2) {
    var t2 = Object(e2), r2 = [];
    for (var n2 in t2)
      r2.push(n2);
    return r2.reverse(), function e3() {
      for (; r2.length; ) {
        var n3 = r2.pop();
        if (n3 in t2)
          return e3.value = n3, e3.done = false, e3;
      }
      return e3.done = true, e3;
    };
  }, e.values = C, O.prototype = { constructor: O, reset: function(e2) {
    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = false, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !e2)
      for (var t2 in this)
        "t" === t2.charAt(0) && r.call(this, t2) && !isNaN(+t2.slice(1)) && (this[t2] = void 0);
  }, stop: function() {
    this.done = true;
    var e2 = this.tryEntries[0].completion;
    if ("throw" === e2.type)
      throw e2.arg;
    return this.rval;
  }, dispatchException: function(e2) {
    if (this.done)
      throw e2;
    var t2 = this;
    function n2(r2, n3) {
      return a2.type = "throw", a2.arg = e2, t2.next = r2, n3 && (t2.method = "next", t2.arg = void 0), !!n3;
    }
    for (var o2 = this.tryEntries.length - 1; o2 >= 0; --o2) {
      var i2 = this.tryEntries[o2], a2 = i2.completion;
      if ("root" === i2.tryLoc)
        return n2("end");
      if (i2.tryLoc <= this.prev) {
        var s2 = r.call(i2, "catchLoc"), c2 = r.call(i2, "finallyLoc");
        if (s2 && c2) {
          if (this.prev < i2.catchLoc)
            return n2(i2.catchLoc, true);
          if (this.prev < i2.finallyLoc)
            return n2(i2.finallyLoc);
        } else if (s2) {
          if (this.prev < i2.catchLoc)
            return n2(i2.catchLoc, true);
        } else {
          if (!c2)
            throw new Error("try statement without catch or finally");
          if (this.prev < i2.finallyLoc)
            return n2(i2.finallyLoc);
        }
      }
    }
  }, abrupt: function(e2, t2) {
    for (var n2 = this.tryEntries.length - 1; n2 >= 0; --n2) {
      var o2 = this.tryEntries[n2];
      if (o2.tryLoc <= this.prev && r.call(o2, "finallyLoc") && this.prev < o2.finallyLoc) {
        var i2 = o2;
        break;
      }
    }
    i2 && ("break" === e2 || "continue" === e2) && i2.tryLoc <= t2 && t2 <= i2.finallyLoc && (i2 = null);
    var a2 = i2 ? i2.completion : {};
    return a2.type = e2, a2.arg = t2, i2 ? (this.method = "next", this.next = i2.finallyLoc, f) : this.complete(a2);
  }, complete: function(e2, t2) {
    if ("throw" === e2.type)
      throw e2.arg;
    return "break" === e2.type || "continue" === e2.type ? this.next = e2.arg : "return" === e2.type ? (this.rval = this.arg = e2.arg, this.method = "return", this.next = "end") : "normal" === e2.type && t2 && (this.next = t2), f;
  }, finish: function(e2) {
    for (var t2 = this.tryEntries.length - 1; t2 >= 0; --t2) {
      var r2 = this.tryEntries[t2];
      if (r2.finallyLoc === e2)
        return this.complete(r2.completion, r2.afterLoc), E(r2), f;
    }
  }, catch: function(e2) {
    for (var t2 = this.tryEntries.length - 1; t2 >= 0; --t2) {
      var r2 = this.tryEntries[t2];
      if (r2.tryLoc === e2) {
        var n2 = r2.completion;
        if ("throw" === n2.type) {
          var o2 = n2.arg;
          E(r2);
        }
        return o2;
      }
    }
    throw new Error("illegal catch attempt");
  }, delegateYield: function(e2, t2, r2) {
    return this.delegate = { iterator: C(e2), resultName: t2, nextLoc: r2 }, "next" === this.method && (this.arg = void 0), f;
  } }, e;
}
function _typeof(e) {
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e2) {
    return typeof e2;
  } : function(e2) {
    return e2 && "function" == typeof Symbol && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
  }, _typeof(e);
}
function asyncGeneratorStep(e, t, r, n, o, i, a) {
  try {
    var s = e[i](a), c = s.value;
  } catch (e2) {
    return void r(e2);
  }
  s.done ? t(c) : Promise.resolve(c).then(n, o);
}
function _asyncToGenerator(e) {
  return function() {
    var t = this, r = arguments;
    return new Promise(function(n, o) {
      var i = e.apply(t, r);
      function a(e2) {
        asyncGeneratorStep(i, n, o, a, s, "next", e2);
      }
      function s(e2) {
        asyncGeneratorStep(i, n, o, a, s, "throw", e2);
      }
      a(void 0);
    });
  };
}
function _defineProperty(e, t, r) {
  return (t = _toPropertyKey(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: true, configurable: true, writable: true }) : e[t] = r, e;
}
function _slicedToArray(e, t) {
  return _arrayWithHoles(e) || _iterableToArrayLimit(e, t) || _unsupportedIterableToArray(e, t) || _nonIterableRest();
}
function _toConsumableArray(e) {
  return _arrayWithoutHoles(e) || _iterableToArray(e) || _unsupportedIterableToArray(e) || _nonIterableSpread();
}
function _arrayWithoutHoles(e) {
  if (Array.isArray(e))
    return _arrayLikeToArray(e);
}
function _arrayWithHoles(e) {
  if (Array.isArray(e))
    return e;
}
function _iterableToArray(e) {
  if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
    return Array.from(e);
}
function _unsupportedIterableToArray(e, t) {
  if (e) {
    if ("string" == typeof e)
      return _arrayLikeToArray(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? _arrayLikeToArray(e, t) : void 0;
  }
}
function _arrayLikeToArray(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toPrimitive(e, t) {
  if ("object" != typeof e || null === e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (void 0 !== r) {
    var n = r.call(e, t || "default");
    if ("object" != typeof n)
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === t ? String : Number)(e);
}
function _toPropertyKey(e) {
  var t = _toPrimitive(e, "string");
  return "symbol" == typeof t ? t : String(t);
}
var version = "1.3.8";
var RegexNumber = /^[+-]?\d[\d.]*(?:e\+|E\+|e-|E-|e|E)?\d*$/;
var RegexUnitNumber = /^[+-]?\d[\d.]*(?:e\+|E\+|e-|E-|e|E)?\d*\D*$/;
function decimal_round(e, t, r, n, o) {
  var i = e, a = t, s = t.length, c = { "~-": function() {
    var e2 = "<" === r ? n - 1 : n;
    a = t.slice(0, e2);
  }, "~+": function() {
    var e2 = "<" === r ? n - 1 : n;
    if (!(s <= e2 || 0 === s)) {
      var o2 = t.slice(0, e2);
      0 == +t.slice(e2, s) ? a = o2 : (o2 = (+"9".concat(o2) + 1).toString().slice(1)).length > e2 ? (a = o2.slice(1, o2.length), i = (+i + 1).toString()) : a = o2;
    }
  }, "~5": function() {
    if (0 !== s) {
      var e2 = "<" === r ? n - 1 : n;
      a = t.slice(0, e2);
      var o2 = +t[e2];
      Number.isNaN(o2) || o2 >= 5 && (a = (+"9".concat(a) + 1).toString().slice(1)).length > e2 && (a = a.slice(1, a.length), i = (+i + 1).toString());
    }
  }, "~6": function() {
    if (0 !== s) {
      var o2, c2 = "<" === r ? n - 1 : n, l = +t[c2], u = t.slice(+c2 + 1, t.length);
      u = "" === u ? 0 : parseInt(u), o2 = 0 === c2 ? +e[e.length - 1] : +t[c2 - 1], a = t.slice(0, c2), (l >= 6 || 5 === l && u > 0 || 5 === l && o2 % 2 != 0) && (a = (+"9".concat(a) + 1).toString().slice(1)).length > c2 && (a = a.slice(1, a.length), i = (+i + 1).toString());
    }
  } };
  return "<=" === r ? s <= n ? a = t : (c[o] && c[o](), a = a.replace(/0+$/, "")) : "<" === r ? s < n ? a = t : (c[o] && c[o](), a = a.replace(/0+$/, "")) : "=" === r ? s < n ? a = t + "0".repeat(n - s) : s > n && c[o] && c[o]() : ">=" === r ? s < n && (a = t + "0".repeat(n - s)) : ">" === r && s <= n && (a = t + "0".repeat(n - s + 1)), { int_part: i, dec_part: a };
}
function is_operator(e) {
  return "+-*/%()**".indexOf(e) > -1;
}
function get_prioraty(e) {
  switch (e) {
    case "+":
    case "-":
      return 1;
    case "*":
    case "/":
    case "%":
      return 2;
    case "**":
      return 3;
    default:
      return 0;
  }
}
function prioraty(e, t) {
  return get_prioraty(e) <= get_prioraty(t);
}
function not_undefined(e) {
  return void 0 !== e;
}
function is_null(e) {
  return null === e;
}
function not_null(e) {
  return null !== e;
}
function is_number(e) {
  return "number" == typeof e || is_str_number(e);
}
function is_str_number(e) {
  return "string" == typeof e && !!RegexNumber.test(e);
}
function split_unit_num(e) {
  for (var t, r = null, n = null, o = [/^([+-]?[\d.]+(?:e|E)(?:\+|-)?\d+)(.*)$/, /^([+-]?[\d.]+)(.*)$/], i = 0; i < o.length; i++) {
    var a = e.match(o[i]);
    if (a) {
      t = a;
      break;
    }
  }
  if (t) {
    n = t[1];
    var s = t[2];
    "" !== s.trim() && (r = s);
  }
  return { num: n, unit: r };
}
function parse_mantissa(e, t, r, n) {
  var o = e.split("."), i = o[0], a = 1 === o.length ? "" : o[1], s = decimal_round(i, a, t, +r, n);
  return i = s.int_part, "" === (a = s.dec_part) ? i : "".concat(i, ".").concat(a);
}
function parse_thousands(e) {
  var t = e.split(".");
  if (t.length > 1) {
    var r = t[0];
    r.includes("-") ? t[0] = r[0] + r.slice(1).replace(/(?=(?!^)(?:\d{3})+$)/g, ",") : t[0] = r.replace(/(?=(?!^)(?:\d{3})+$)/g, ","), e = t.join(".");
  } else {
    var n = t[0];
    e = n.includes("-") ? n[0] + n.slice(1).replace(/(?=(?!^)(?:\d{3})+$)/g, ",") : n.replace(/(?=(?!^)(?:\d{3})+$)/g, ",");
  }
  return e;
}
var state$1 = { initial: "initial", number: "number", variable: "var", symbol: "symbol", percent: "percent", round: "round", plus: "plus", comma: "comma", fraction: "fraction", to_number: "to-number", to_number_string: "to-number-string", scientific: "scientific" };
var symbol = "<>=";
function fmt_tokenizer(e) {
  for (var t = state$1.initial, r = [], n = []; e; ) {
    var o = e[0];
    if (t === state$1.initial)
      if (/\s/.test(o))
        e = e.slice(1);
      else if (symbol.includes(o))
        t = state$1.symbol, r.push(o), e = e.slice(1);
      else if ("," === o)
        t = state$1.initial, n.push({ type: "comma", value: o }), e = e.slice(1);
      else if (/[a-zA-Z_]/.test(o))
        t = state$1.variable, r.push(o), e = e.slice(1);
      else if (/\d/.test(o))
        t = state$1.number, r.push(o), e = e.slice(1);
      else if ("+" === o)
        t = state$1.initial, n.push({ type: "plus", value: o }), e = e.slice(1);
      else if ("~" === o)
        t = state$1.round, r.push(o), e = e.slice(1);
      else if ("%" === o)
        t = state$1.initial, n.push({ type: "percent", value: o }), e = e.slice(1);
      else if ("/" === o)
        t = state$1.initial, n.push({ type: "fraction", value: o }), e = e.slice(1);
      else {
        if ("!" !== o)
          throw new Error("不识别的fmt字符：".concat(o));
        if (t = state$1.initial, /[Ee]/.test(e[1]))
          n.push({ type: "scientific", value: e[1] }), e = e.slice(2);
        else if (/[Nn]/.test(e[1]))
          n.push({ type: "to-number", value: e[1] }), e = e.slice(2);
        else {
          if (!/[Uu]/.test(e[1]))
            throw new Error("不识别的fmt字符：".concat(e.slice(2)));
          n.push({ type: "to-number-string", value: e[1] }), e = e.slice(2);
        }
      }
    else if (t === state$1.number)
      /\d/.test(o) ? (r.push(o), e = e.slice(1)) : (n.push({ type: "number", value: r.join("") }), r.length = 0, t = state$1.initial);
    else if (t === state$1.variable)
      /[\$\w_\-.\[\]"']/.test(o) ? (r.push(o), e = e.slice(1)) : (n.push({ type: "var", value: r.join("") }), r.length = 0, t = state$1.initial);
    else if (t === state$1.symbol) {
      if (/\s/.test(o)) {
        e = e.slice(1);
        continue;
      }
      symbol.includes(o) ? (r.push(o), e = e.slice(1)) : (n.push({ type: "symbol", value: r.join("") }), r.length = 0, t = state$1.initial);
    } else {
      if (t !== state$1.round)
        throw new Error("错误的自动机状态");
      if (/\s/.test(o)) {
        e = e.slice(1);
        continue;
      }
      if (!("56+-".includes(o) && r.length < 2))
        throw new Error("舍入格式化语法错误：".concat(o));
      r.push(o), e = e.slice(1), n.push({ type: "round", value: r.join("") }), r.length = 0, t = state$1.initial;
    }
  }
  if (r.length > 0 && (n.push({ type: t, value: r.join("") }), r.length = 0, t = state$1.initial), n.filter(function(e2) {
    return "number" === e2.type;
  }).length > 1)
    throw new Error("格式化字符串错误，发现多余的数字");
  return n;
}
var commonjsGlobal = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function getDefaultExportFromCjs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var isArray$3 = Array.isArray;
var isArray_1 = isArray$3;
var freeGlobal$1 = "object" == _typeof(commonjsGlobal) && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$1;
var freeGlobal = _freeGlobal;
var freeSelf = "object" == ("undefined" == typeof self ? "undefined" : _typeof(self)) && self && self.Object === Object && self;
var root$3 = freeGlobal || freeSelf || Function("return this")();
var _root = root$3;
var root$2 = _root;
var _Symbol2 = root$2.Symbol;
var _Symbol$3 = _Symbol2;
var _Symbol$2 = _Symbol$3;
var objectProto$4 = Object.prototype;
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
var nativeObjectToString$1 = objectProto$4.toString;
var symToStringTag$1 = _Symbol$2 ? _Symbol$2.toStringTag : void 0;
function getRawTag$1(e) {
  var t = hasOwnProperty$3.call(e, symToStringTag$1), r = e[symToStringTag$1];
  try {
    e[symToStringTag$1] = void 0;
    var n = true;
  } catch (e2) {
  }
  var o = nativeObjectToString$1.call(e);
  return n && (t ? e[symToStringTag$1] = r : delete e[symToStringTag$1]), o;
}
var _getRawTag = getRawTag$1;
var objectProto$3 = Object.prototype;
var nativeObjectToString = objectProto$3.toString;
function objectToString$1(e) {
  return nativeObjectToString.call(e);
}
var _objectToString = objectToString$1;
var _Symbol$1 = _Symbol$3;
var getRawTag = _getRawTag;
var objectToString = _objectToString;
var nullTag = "[object Null]";
var undefinedTag = "[object Undefined]";
var symToStringTag = _Symbol$1 ? _Symbol$1.toStringTag : void 0;
function baseGetTag$2(e) {
  return null == e ? void 0 === e ? undefinedTag : nullTag : symToStringTag && symToStringTag in Object(e) ? getRawTag(e) : objectToString(e);
}
var _baseGetTag = baseGetTag$2;
function isObjectLike$1(e) {
  return null != e && "object" == _typeof(e);
}
var isObjectLike_1 = isObjectLike$1;
var baseGetTag$1 = _baseGetTag;
var isObjectLike = isObjectLike_1;
var symbolTag = "[object Symbol]";
function isSymbol$3(e) {
  return "symbol" == _typeof(e) || isObjectLike(e) && baseGetTag$1(e) == symbolTag;
}
var isSymbol_1 = isSymbol$3;
var isArray$2 = isArray_1;
var isSymbol$2 = isSymbol_1;
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var reIsPlainProp = /^\w*$/;
function isKey$1(e, t) {
  if (isArray$2(e))
    return false;
  var r = _typeof(e);
  return !("number" != r && "symbol" != r && "boolean" != r && null != e && !isSymbol$2(e)) || (reIsPlainProp.test(e) || !reIsDeepProp.test(e) || null != t && e in Object(t));
}
var _isKey = isKey$1;
function isObject$2(e) {
  var t = _typeof(e);
  return null != e && ("object" == t || "function" == t);
}
var isObject_1 = isObject$2;
var baseGetTag = _baseGetTag;
var isObject$1 = isObject_1;
var asyncTag = "[object AsyncFunction]";
var funcTag = "[object Function]";
var genTag = "[object GeneratorFunction]";
var proxyTag = "[object Proxy]";
function isFunction$1(e) {
  if (!isObject$1(e))
    return false;
  var t = baseGetTag(e);
  return t == funcTag || t == genTag || t == asyncTag || t == proxyTag;
}
var isFunction_1 = isFunction$1;
var root$1 = _root;
var coreJsData$1 = root$1["__core-js_shared__"];
var _coreJsData = coreJsData$1;
var coreJsData = _coreJsData;
var maskSrcKey = (uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || ""), uid ? "Symbol(src)_1." + uid : "");
var uid;
function isMasked$1(e) {
  return !!maskSrcKey && maskSrcKey in e;
}
var _isMasked = isMasked$1;
var funcProto$1 = Function.prototype;
var funcToString$1 = funcProto$1.toString;
function toSource$1(e) {
  if (null != e) {
    try {
      return funcToString$1.call(e);
    } catch (e2) {
    }
    try {
      return e + "";
    } catch (e2) {
    }
  }
  return "";
}
var _toSource = toSource$1;
var isFunction = isFunction_1;
var isMasked = _isMasked;
var isObject = isObject_1;
var toSource = _toSource;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype;
var objectProto$2 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty$2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative$1(e) {
  return !(!isObject(e) || isMasked(e)) && (isFunction(e) ? reIsNative : reIsHostCtor).test(toSource(e));
}
var _baseIsNative = baseIsNative$1;
function getValue$1(e, t) {
  return null == e ? void 0 : e[t];
}
var _getValue = getValue$1;
var baseIsNative = _baseIsNative;
var getValue = _getValue;
function getNative$2(e, t) {
  var r = getValue(e, t);
  return baseIsNative(r) ? r : void 0;
}
var _getNative = getNative$2;
var getNative$1 = _getNative;
var nativeCreate$4 = getNative$1(Object, "create");
var _nativeCreate = nativeCreate$4;
var nativeCreate$3 = _nativeCreate;
function hashClear$1() {
  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {}, this.size = 0;
}
var _hashClear = hashClear$1;
function hashDelete$1(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var _hashDelete = hashDelete$1;
var nativeCreate$2 = _nativeCreate;
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function hashGet$1(e) {
  var t = this.__data__;
  if (nativeCreate$2) {
    var r = t[e];
    return r === HASH_UNDEFINED$1 ? void 0 : r;
  }
  return hasOwnProperty$1.call(t, e) ? t[e] : void 0;
}
var _hashGet = hashGet$1;
var nativeCreate$1 = _nativeCreate;
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function hashHas$1(e) {
  var t = this.__data__;
  return nativeCreate$1 ? void 0 !== t[e] : hasOwnProperty.call(t, e);
}
var _hashHas = hashHas$1;
var nativeCreate = _nativeCreate;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function hashSet$1(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = nativeCreate && void 0 === t ? HASH_UNDEFINED : t, this;
}
var _hashSet = hashSet$1;
var hashClear = _hashClear;
var hashDelete = _hashDelete;
var hashGet = _hashGet;
var hashHas = _hashHas;
var hashSet = _hashSet;
function Hash$1(e) {
  var t = -1, r = null == e ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Hash$1.prototype.clear = hashClear, Hash$1.prototype.delete = hashDelete, Hash$1.prototype.get = hashGet, Hash$1.prototype.has = hashHas, Hash$1.prototype.set = hashSet;
var _Hash = Hash$1;
function listCacheClear$1() {
  this.__data__ = [], this.size = 0;
}
var _listCacheClear = listCacheClear$1;
function eq$1(e, t) {
  return e === t || e != e && t != t;
}
var eq_1 = eq$1;
var eq = eq_1;
function assocIndexOf$4(e, t) {
  for (var r = e.length; r--; )
    if (eq(e[r][0], t))
      return r;
  return -1;
}
var _assocIndexOf = assocIndexOf$4;
var assocIndexOf$3 = _assocIndexOf;
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete$1(e) {
  var t = this.__data__, r = assocIndexOf$3(t, e);
  return !(r < 0) && (r == t.length - 1 ? t.pop() : splice.call(t, r, 1), --this.size, true);
}
var _listCacheDelete = listCacheDelete$1;
var assocIndexOf$2 = _assocIndexOf;
function listCacheGet$1(e) {
  var t = this.__data__, r = assocIndexOf$2(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var _listCacheGet = listCacheGet$1;
var assocIndexOf$1 = _assocIndexOf;
function listCacheHas$1(e) {
  return assocIndexOf$1(this.__data__, e) > -1;
}
var _listCacheHas = listCacheHas$1;
var assocIndexOf = _assocIndexOf;
function listCacheSet$1(e, t) {
  var r = this.__data__, n = assocIndexOf(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var _listCacheSet = listCacheSet$1;
var listCacheClear = _listCacheClear;
var listCacheDelete = _listCacheDelete;
var listCacheGet = _listCacheGet;
var listCacheHas = _listCacheHas;
var listCacheSet = _listCacheSet;
function ListCache$1(e) {
  var t = -1, r = null == e ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ListCache$1.prototype.clear = listCacheClear, ListCache$1.prototype.delete = listCacheDelete, ListCache$1.prototype.get = listCacheGet, ListCache$1.prototype.has = listCacheHas, ListCache$1.prototype.set = listCacheSet;
var _ListCache = ListCache$1;
var getNative = _getNative;
var root = _root;
var Map$1 = getNative(root, "Map");
var _Map = Map$1;
var Hash = _Hash;
var ListCache = _ListCache;
var Map = _Map;
function mapCacheClear$1() {
  this.size = 0, this.__data__ = { hash: new Hash(), map: new (Map || ListCache)(), string: new Hash() };
}
var _mapCacheClear = mapCacheClear$1;
function isKeyable$1(e) {
  var t = _typeof(e);
  return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e;
}
var _isKeyable = isKeyable$1;
var isKeyable = _isKeyable;
function getMapData$4(e, t) {
  var r = e.__data__;
  return isKeyable(t) ? r["string" == typeof t ? "string" : "hash"] : r.map;
}
var _getMapData = getMapData$4;
var getMapData$3 = _getMapData;
function mapCacheDelete$1(e) {
  var t = getMapData$3(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var _mapCacheDelete = mapCacheDelete$1;
var getMapData$2 = _getMapData;
function mapCacheGet$1(e) {
  return getMapData$2(this, e).get(e);
}
var _mapCacheGet = mapCacheGet$1;
var getMapData$1 = _getMapData;
function mapCacheHas$1(e) {
  return getMapData$1(this, e).has(e);
}
var _mapCacheHas = mapCacheHas$1;
var getMapData = _getMapData;
function mapCacheSet$1(e, t) {
  var r = getMapData(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var _mapCacheSet = mapCacheSet$1;
var mapCacheClear = _mapCacheClear;
var mapCacheDelete = _mapCacheDelete;
var mapCacheGet = _mapCacheGet;
var mapCacheHas = _mapCacheHas;
var mapCacheSet = _mapCacheSet;
function MapCache$1(e) {
  var t = -1, r = null == e ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
MapCache$1.prototype.clear = mapCacheClear, MapCache$1.prototype.delete = mapCacheDelete, MapCache$1.prototype.get = mapCacheGet, MapCache$1.prototype.has = mapCacheHas, MapCache$1.prototype.set = mapCacheSet;
var _MapCache = MapCache$1;
var MapCache = _MapCache;
var FUNC_ERROR_TEXT = "Expected a function";
function memoize$1(e, t) {
  if ("function" != typeof e || null != t && "function" != typeof t)
    throw new TypeError(FUNC_ERROR_TEXT);
  var r = function r2() {
    var n = arguments, o = t ? t.apply(this, n) : n[0], i = r2.cache;
    if (i.has(o))
      return i.get(o);
    var a = e.apply(this, n);
    return r2.cache = i.set(o, a) || i, a;
  };
  return r.cache = new (memoize$1.Cache || MapCache)(), r;
}
memoize$1.Cache = MapCache;
var memoize_1 = memoize$1;
var memoize = memoize_1;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped$1(e) {
  var t = memoize(e, function(e2) {
    return r.size === MAX_MEMOIZE_SIZE && r.clear(), e2;
  }), r = t.cache;
  return t;
}
var _memoizeCapped = memoizeCapped$1;
var memoizeCapped = _memoizeCapped;
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath$1 = memoizeCapped(function(e) {
  var t = [];
  return 46 === e.charCodeAt(0) && t.push(""), e.replace(rePropName, function(e2, r, n, o) {
    t.push(n ? o.replace(reEscapeChar, "$1") : r || e2);
  }), t;
});
var _stringToPath = stringToPath$1;
function arrayMap$1(e, t) {
  for (var r = -1, n = null == e ? 0 : e.length, o = Array(n); ++r < n; )
    o[r] = t(e[r], r, e);
  return o;
}
var _arrayMap = arrayMap$1;
var _Symbol = _Symbol$3;
var arrayMap = _arrayMap;
var isArray$1 = isArray_1;
var isSymbol$1 = isSymbol_1;
var INFINITY$1 = 1 / 0;
var symbolProto = _Symbol ? _Symbol.prototype : void 0;
var symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseToString$1(e) {
  if ("string" == typeof e)
    return e;
  if (isArray$1(e))
    return arrayMap(e, baseToString$1) + "";
  if (isSymbol$1(e))
    return symbolToString ? symbolToString.call(e) : "";
  var t = e + "";
  return "0" == t && 1 / e == -INFINITY$1 ? "-0" : t;
}
var _baseToString = baseToString$1;
var baseToString = _baseToString;
function toString$1(e) {
  return null == e ? "" : baseToString(e);
}
var toString_1 = toString$1;
var isArray = isArray_1;
var isKey = _isKey;
var stringToPath = _stringToPath;
var toString = toString_1;
function castPath$1(e, t) {
  return isArray(e) ? e : isKey(e, t) ? [e] : stringToPath(toString(e));
}
var _castPath = castPath$1;
var isSymbol = isSymbol_1;
var INFINITY = 1 / 0;
function toKey$1(e) {
  if ("string" == typeof e || isSymbol(e))
    return e;
  var t = e + "";
  return "0" == t && 1 / e == -INFINITY ? "-0" : t;
}
var _toKey = toKey$1;
var castPath = _castPath;
var toKey = _toKey;
function baseGet$1(e, t) {
  for (var r = 0, n = (t = castPath(t, e)).length; null != e && r < n; )
    e = e[toKey(t[r++])];
  return r && r == n ? e : void 0;
}
var _baseGet = baseGet$1;
var baseGet = _baseGet;
function get(e, t, r) {
  var n = null == e ? void 0 : baseGet(e, t);
  return void 0 === n ? r : n;
}
var get_1 = get;
var get$1 = getDefaultExportFromCjs(get_1);
function parse_args(e) {
  var t = "", r = e[0], n = e[1], o = { origin_expr: r, origin_fill_data: n, expr: "", fmt_tokens: null, options: null, fmt_err: false, expr_err: false };
  not_undefined(n) && (o.options = n);
  var i = get$1(n, "_error", false);
  if (0 === e.length)
    throw new Error("至少传入一个参数");
  if ("string" == typeof r) {
    if (t = r, "" === r.trim() || r.includes("NaN"))
      return o.expr_err = true, o;
  } else {
    if ("number" != typeof r) {
      if (true === i)
        return o.expr_err = true, o;
      throw new Error("错误的第一个参数类型: ".concat(r, " 类型为:").concat(_typeof(r)));
    }
    t = r.toString();
  }
  var a = t.split("|");
  if (o.expr = a[0], a.length > 1) {
    var s = a[1];
    if ("" !== s.trim())
      try {
        o.fmt_tokens = fmt_tokenizer(s);
      } catch (e2) {
        return o.fmt_err = true, o;
      }
  }
  if (null !== o.options && o.options._fmt) {
    var c = [];
    try {
      c = fmt_tokenizer(o.options._fmt);
    } catch (e2) {
      return o.fmt_err = true, o;
    }
    if (null === o.fmt_tokens)
      o.fmt_tokens = c;
    else {
      var l = o.fmt_tokens.map(function(e2) {
        return e2.type;
      });
      c.forEach(function(e2) {
        l.includes(e2.type) || o.fmt_tokens.push(e2);
      });
    }
  }
  return o;
}
var state = { initial: "initial", number: "number", scientific: "scientific", operator: "operator", bracket: "bracket", var: "var" };
var signed = "+-";
var operator = "*/%";
var brackets = "()";
function tokenizer(e) {
  for (var t, r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = state.initial, o = [], i = [], a = function() {
    o.push(t), e = e.slice(1);
  }, s = function(e2) {
    i.push({ type: e2, value: o.join("") }), o.length = 0;
  }, c = function() {
    e = e.slice(1);
  }; e; )
    switch (t = e[0], n) {
      case state.initial:
        if (signed.includes(t)) {
          var l = i.at(-1);
          0 === i.length || "operator" === l.type || "(" === l ? (n = state.number, a()) : (n = state.operator, a());
        } else if (operator.includes(t))
          n = state.operator, a();
        else if (/\d/.test(t))
          n = state.number, a();
        else if (brackets.includes(t))
          n = state.bracket;
        else if (/[a-zA-Z_$]/.test(t))
          n = state.var, a();
        else {
          if (!/\s/.test(t))
            throw new Error("不识别的字符".concat(t));
          c();
        }
        break;
      case state.bracket:
        i.push({ type: state.bracket, value: t }), c(), n = state.initial;
        break;
      case state.operator:
        var u = o.at(-1);
        "*" === t && "*" === u && a(), s(state.operator), n = state.initial;
        break;
      case state.number:
        if (/\d/.test(t))
          a();
        else if ("." === t) {
          if (0 === o.length || o.includes("."))
            throw new Error("非法的小数部分".concat(o.join("")));
          a();
        } else
          "Ee".includes(t) ? (n = state.scientific, a()) : ["auto", "on", true].includes(r) && /[^*/+\-()\s]/.test(t) || "space" === r && /\S/.test(t) ? a() : (s(state.number), n = state.initial);
        break;
      case state.scientific:
        if (/\d/.test(t))
          a();
        else if (signed.includes(t)) {
          var f = o.slice(1), h = o.at(-1);
          f.includes(t) || !/[Ee]/.test(h) ? (s(state.scientific), n = state.initial) : a();
        } else
          ["auto", "on", true].includes(r) && /[^*/+\-()\s]/.test(t) || "space" === r && /\S/.test(t) ? a() : (s(state.scientific), n = state.initial);
        break;
      case state.var:
        /[\w_.\[\]"']/.test(t) ? a() : (s(state.var), n = state.initial);
        break;
      default:
        throw new Error("状态错误");
    }
  return 0 !== o.length && (i.push({ type: n, value: o.join("") }), o.length = 0, n = state.initial), i;
}
function fill_tokens(e, t, r) {
  if (is_null(t))
    throw new Error("错误的填充数据:", t);
  for (var n = [], o = 0; o < e.length; o++) {
    var i = e[o];
    if ("var" === i.type) {
      if ("undefined" === i.value || "NaN" === i.value)
        throw new Error("key不应该为:".concat(i.value));
      for (var a = null, s = 0; s < t.length; s++) {
        var c = t[s], l = get$1(c, i.value);
        if (void 0 !== l) {
          a = l;
          break;
        }
      }
      if (null === a)
        throw new Error("token填充失败,请确认".concat(i, "存在"));
      if ("string" == typeof a) {
        if ("" === a.trim())
          throw new Error("token填充失败,".concat(i.value, "值不可为空字符"));
        if ([true, "on", "auto", "space"].includes(r)) {
          if (!RegexUnitNumber.test(a))
            throw new Error("token填充失败,".concat(i.value, "值:").concat(a, "为非法单位数字"));
        } else if (!is_str_number(a))
          throw new Error("token填充失败,".concat(i, "值:").concat(a, "为非法数字"));
      }
      a = "string" != typeof a ? a.toString() : a, n.push({ type: "number", value: a });
    } else
      n.push(i);
  }
  return n;
}
function token2postfix(e) {
  for (var t = [], r = [], n = e.map(function(e2) {
    return e2.value;
  }); n.length > 0; ) {
    var o = n.shift();
    if (is_operator(o))
      if ("(" === o)
        t.push(o);
      else if (")" === o) {
        for (var i = t.pop(); "(" !== i && t.length > 0; )
          r.push(i), i = t.pop();
        if ("(" !== i)
          throw "error: unmatched ()";
      } else {
        for (; prioraty(o, t[t.length - 1]) && t.length > 0; )
          r.push(t.pop());
        t.push(o);
      }
    else
      r.push(o);
  }
  if (t.length > 0) {
    if (")" === t[t.length - 1] || "(" === t[t.length - 1])
      throw "error: unmatched ()";
    for (; t.length > 0; )
      r.push(t.pop());
  }
  return r;
}
var isNumeric = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i;
var mathceil = Math.ceil;
var mathfloor = Math.floor;
var bignumberError = "[BigNumber Error] ";
var tooManyDigits = bignumberError + "Number primitive has more than 15 significant digits: ";
var BASE = 1e14;
var LOG_BASE = 14;
var MAX_SAFE_INTEGER = 9007199254740991;
var POWS_TEN = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13];
var SQRT_BASE = 1e7;
var MAX = 1e9;
function clone(e) {
  var t, r, n, o, i, a, s, c, l, u, f = O.prototype = { constructor: O, toString: null, valueOf: null }, h = new O(1), p = 20, g = 4, _ = -7, d = 21, m = -1e7, b = 1e7, y = false, v = 1, S = 0, w = { prefix: "", groupSize: 3, secondaryGroupSize: 0, groupSeparator: ",", decimalSeparator: ".", fractionGroupSize: 0, fractionGroupSeparator: " ", suffix: "" }, $ = "0123456789abcdefghijklmnopqrstuvwxyz", E = true;
  function O(e2, t2) {
    var o2, i2, a2, s2, c2, l2, u2, f2, h2 = this;
    if (!(h2 instanceof O))
      return new O(e2, t2);
    if (null == t2) {
      if (e2 && true === e2._isBigNumber)
        return h2.s = e2.s, void (!e2.c || e2.e > b ? h2.c = h2.e = null : e2.e < m ? h2.c = [h2.e = 0] : (h2.e = e2.e, h2.c = e2.c.slice()));
      if ((l2 = "number" == typeof e2) && 0 * e2 == 0) {
        if (h2.s = 1 / e2 < 0 ? (e2 = -e2, -1) : 1, e2 === ~~e2) {
          for (s2 = 0, c2 = e2; c2 >= 10; c2 /= 10, s2++)
            ;
          return void (s2 > b ? h2.c = h2.e = null : (h2.e = s2, h2.c = [e2]));
        }
        f2 = String(e2);
      } else {
        if (!isNumeric.test(f2 = String(e2)))
          return n(h2, f2, l2);
        h2.s = 45 == f2.charCodeAt(0) ? (f2 = f2.slice(1), -1) : 1;
      }
      (s2 = f2.indexOf(".")) > -1 && (f2 = f2.replace(".", "")), (c2 = f2.search(/e/i)) > 0 ? (s2 < 0 && (s2 = c2), s2 += +f2.slice(c2 + 1), f2 = f2.substring(0, c2)) : s2 < 0 && (s2 = f2.length);
    } else {
      if (intCheck(t2, 2, $.length, "Base"), 10 == t2 && E)
        return x(h2 = new O(e2), p + h2.e + 1, g);
      if (f2 = String(e2), l2 = "number" == typeof e2) {
        if (0 * e2 != 0)
          return n(h2, f2, l2, t2);
        if (h2.s = 1 / e2 < 0 ? (f2 = f2.slice(1), -1) : 1, O.DEBUG && f2.replace(/^0\.0*|\./, "").length > 15)
          throw Error(tooManyDigits + e2);
      } else
        h2.s = 45 === f2.charCodeAt(0) ? (f2 = f2.slice(1), -1) : 1;
      for (o2 = $.slice(0, t2), s2 = c2 = 0, u2 = f2.length; c2 < u2; c2++)
        if (o2.indexOf(i2 = f2.charAt(c2)) < 0) {
          if ("." == i2) {
            if (c2 > s2) {
              s2 = u2;
              continue;
            }
          } else if (!a2 && (f2 == f2.toUpperCase() && (f2 = f2.toLowerCase()) || f2 == f2.toLowerCase() && (f2 = f2.toUpperCase()))) {
            a2 = true, c2 = -1, s2 = 0;
            continue;
          }
          return n(h2, String(e2), l2, t2);
        }
      l2 = false, (s2 = (f2 = r(f2, t2, 10, h2.s)).indexOf(".")) > -1 ? f2 = f2.replace(".", "") : s2 = f2.length;
    }
    for (c2 = 0; 48 === f2.charCodeAt(c2); c2++)
      ;
    for (u2 = f2.length; 48 === f2.charCodeAt(--u2); )
      ;
    if (f2 = f2.slice(c2, ++u2)) {
      if (u2 -= c2, l2 && O.DEBUG && u2 > 15 && (e2 > MAX_SAFE_INTEGER || e2 !== mathfloor(e2)))
        throw Error(tooManyDigits + h2.s * e2);
      if ((s2 = s2 - c2 - 1) > b)
        h2.c = h2.e = null;
      else if (s2 < m)
        h2.c = [h2.e = 0];
      else {
        if (h2.e = s2, h2.c = [], c2 = (s2 + 1) % LOG_BASE, s2 < 0 && (c2 += LOG_BASE), c2 < u2) {
          for (c2 && h2.c.push(+f2.slice(0, c2)), u2 -= LOG_BASE; c2 < u2; )
            h2.c.push(+f2.slice(c2, c2 += LOG_BASE));
          c2 = LOG_BASE - (f2 = f2.slice(c2)).length;
        } else
          c2 -= u2;
        for (; c2--; f2 += "0")
          ;
        h2.c.push(+f2);
      }
    } else
      h2.c = [h2.e = 0];
  }
  function C(e2, t2, r2, n2) {
    var o2, i2, a2, s2, c2;
    if (null == r2 ? r2 = g : intCheck(r2, 0, 8), !e2.c)
      return e2.toString();
    if (o2 = e2.c[0], a2 = e2.e, null == t2)
      c2 = coeffToString(e2.c), c2 = 1 == n2 || 2 == n2 && (a2 <= _ || a2 >= d) ? toExponential(c2, a2) : toFixedPoint(c2, a2, "0");
    else if (i2 = (e2 = x(new O(e2), t2, r2)).e, s2 = (c2 = coeffToString(e2.c)).length, 1 == n2 || 2 == n2 && (t2 <= i2 || i2 <= _)) {
      for (; s2 < t2; c2 += "0", s2++)
        ;
      c2 = toExponential(c2, i2);
    } else if (t2 -= a2, c2 = toFixedPoint(c2, i2, "0"), i2 + 1 > s2) {
      if (--t2 > 0)
        for (c2 += "."; t2--; c2 += "0")
          ;
    } else if ((t2 += i2 - s2) > 0)
      for (i2 + 1 == s2 && (c2 += "."); t2--; c2 += "0")
        ;
    return e2.s < 0 && o2 ? "-" + c2 : c2;
  }
  function A(e2, t2) {
    for (var r2, n2 = 1, o2 = new O(e2[0]); n2 < e2.length; n2++) {
      if (!(r2 = new O(e2[n2])).s) {
        o2 = r2;
        break;
      }
      t2.call(o2, r2) && (o2 = r2);
    }
    return o2;
  }
  function T(e2, t2, r2) {
    for (var n2 = 1, o2 = t2.length; !t2[--o2]; t2.pop())
      ;
    for (o2 = t2[0]; o2 >= 10; o2 /= 10, n2++)
      ;
    return (r2 = n2 + r2 * LOG_BASE - 1) > b ? e2.c = e2.e = null : r2 < m ? e2.c = [e2.e = 0] : (e2.e = r2, e2.c = t2), e2;
  }
  function x(e2, t2, r2, n2) {
    var o2, i2, a2, s2, c2, l2, u2, f2 = e2.c, h2 = POWS_TEN;
    if (f2) {
      e: {
        for (o2 = 1, s2 = f2[0]; s2 >= 10; s2 /= 10, o2++)
          ;
        if ((i2 = t2 - o2) < 0)
          i2 += LOG_BASE, a2 = t2, u2 = (c2 = f2[l2 = 0]) / h2[o2 - a2 - 1] % 10 | 0;
        else if ((l2 = mathceil((i2 + 1) / LOG_BASE)) >= f2.length) {
          if (!n2)
            break e;
          for (; f2.length <= l2; f2.push(0))
            ;
          c2 = u2 = 0, o2 = 1, a2 = (i2 %= LOG_BASE) - LOG_BASE + 1;
        } else {
          for (c2 = s2 = f2[l2], o2 = 1; s2 >= 10; s2 /= 10, o2++)
            ;
          u2 = (a2 = (i2 %= LOG_BASE) - LOG_BASE + o2) < 0 ? 0 : c2 / h2[o2 - a2 - 1] % 10 | 0;
        }
        if (n2 = n2 || t2 < 0 || null != f2[l2 + 1] || (a2 < 0 ? c2 : c2 % h2[o2 - a2 - 1]), n2 = r2 < 4 ? (u2 || n2) && (0 == r2 || r2 == (e2.s < 0 ? 3 : 2)) : u2 > 5 || 5 == u2 && (4 == r2 || n2 || 6 == r2 && (i2 > 0 ? a2 > 0 ? c2 / h2[o2 - a2] : 0 : f2[l2 - 1]) % 10 & 1 || r2 == (e2.s < 0 ? 8 : 7)), t2 < 1 || !f2[0])
          return f2.length = 0, n2 ? (t2 -= e2.e + 1, f2[0] = h2[(LOG_BASE - t2 % LOG_BASE) % LOG_BASE], e2.e = -t2 || 0) : f2[0] = e2.e = 0, e2;
        if (0 == i2 ? (f2.length = l2, s2 = 1, l2--) : (f2.length = l2 + 1, s2 = h2[LOG_BASE - i2], f2[l2] = a2 > 0 ? mathfloor(c2 / h2[o2 - a2] % h2[a2]) * s2 : 0), n2)
          for (; ; ) {
            if (0 == l2) {
              for (i2 = 1, a2 = f2[0]; a2 >= 10; a2 /= 10, i2++)
                ;
              for (a2 = f2[0] += s2, s2 = 1; a2 >= 10; a2 /= 10, s2++)
                ;
              i2 != s2 && (e2.e++, f2[0] == BASE && (f2[0] = 1));
              break;
            }
            if (f2[l2] += s2, f2[l2] != BASE)
              break;
            f2[l2--] = 0, s2 = 1;
          }
        for (i2 = f2.length; 0 === f2[--i2]; f2.pop())
          ;
      }
      e2.e > b ? e2.c = e2.e = null : e2.e < m && (e2.c = [e2.e = 0]);
    }
    return e2;
  }
  function N(e2) {
    var t2, r2 = e2.e;
    return null === r2 ? e2.toString() : (t2 = coeffToString(e2.c), t2 = r2 <= _ || r2 >= d ? toExponential(t2, r2) : toFixedPoint(t2, r2, "0"), e2.s < 0 ? "-" + t2 : t2);
  }
  return O.clone = clone, O.ROUND_UP = 0, O.ROUND_DOWN = 1, O.ROUND_CEIL = 2, O.ROUND_FLOOR = 3, O.ROUND_HALF_UP = 4, O.ROUND_HALF_DOWN = 5, O.ROUND_HALF_EVEN = 6, O.ROUND_HALF_CEIL = 7, O.ROUND_HALF_FLOOR = 8, O.EUCLID = 9, O.config = O.set = function(e2) {
    var t2, r2;
    if (null != e2) {
      if ("object" != _typeof(e2))
        throw Error(bignumberError + "Object expected: " + e2);
      if (e2.hasOwnProperty(t2 = "DECIMAL_PLACES") && (intCheck(r2 = e2[t2], 0, MAX, t2), p = r2), e2.hasOwnProperty(t2 = "ROUNDING_MODE") && (intCheck(r2 = e2[t2], 0, 8, t2), g = r2), e2.hasOwnProperty(t2 = "EXPONENTIAL_AT") && ((r2 = e2[t2]) && r2.pop ? (intCheck(r2[0], -MAX, 0, t2), intCheck(r2[1], 0, MAX, t2), _ = r2[0], d = r2[1]) : (intCheck(r2, -MAX, MAX, t2), _ = -(d = r2 < 0 ? -r2 : r2))), e2.hasOwnProperty(t2 = "RANGE"))
        if ((r2 = e2[t2]) && r2.pop)
          intCheck(r2[0], -MAX, -1, t2), intCheck(r2[1], 1, MAX, t2), m = r2[0], b = r2[1];
        else {
          if (intCheck(r2, -MAX, MAX, t2), !r2)
            throw Error(bignumberError + t2 + " cannot be zero: " + r2);
          m = -(b = r2 < 0 ? -r2 : r2);
        }
      if (e2.hasOwnProperty(t2 = "CRYPTO")) {
        if ((r2 = e2[t2]) !== !!r2)
          throw Error(bignumberError + t2 + " not true or false: " + r2);
        if (r2) {
          if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes)
            throw y = !r2, Error(bignumberError + "crypto unavailable");
          y = r2;
        } else
          y = r2;
      }
      if (e2.hasOwnProperty(t2 = "MODULO_MODE") && (intCheck(r2 = e2[t2], 0, 9, t2), v = r2), e2.hasOwnProperty(t2 = "POW_PRECISION") && (intCheck(r2 = e2[t2], 0, MAX, t2), S = r2), e2.hasOwnProperty(t2 = "FORMAT")) {
        if ("object" != _typeof(r2 = e2[t2]))
          throw Error(bignumberError + t2 + " not an object: " + r2);
        w = r2;
      }
      if (e2.hasOwnProperty(t2 = "ALPHABET")) {
        if ("string" != typeof (r2 = e2[t2]) || /^.?$|[+\-.\s]|(.).*\1/.test(r2))
          throw Error(bignumberError + t2 + " invalid: " + r2);
        E = "0123456789" == r2.slice(0, 10), $ = r2;
      }
    }
    return { DECIMAL_PLACES: p, ROUNDING_MODE: g, EXPONENTIAL_AT: [_, d], RANGE: [m, b], CRYPTO: y, MODULO_MODE: v, POW_PRECISION: S, FORMAT: w, ALPHABET: $ };
  }, O.isBigNumber = function(e2) {
    if (!e2 || true !== e2._isBigNumber)
      return false;
    if (!O.DEBUG)
      return true;
    var t2, r2, n2 = e2.c, o2 = e2.e, i2 = e2.s;
    e:
      if ("[object Array]" == {}.toString.call(n2)) {
        if ((1 === i2 || -1 === i2) && o2 >= -MAX && o2 <= MAX && o2 === mathfloor(o2)) {
          if (0 === n2[0]) {
            if (0 === o2 && 1 === n2.length)
              return true;
            break e;
          }
          if ((t2 = (o2 + 1) % LOG_BASE) < 1 && (t2 += LOG_BASE), String(n2[0]).length == t2) {
            for (t2 = 0; t2 < n2.length; t2++)
              if ((r2 = n2[t2]) < 0 || r2 >= BASE || r2 !== mathfloor(r2))
                break e;
            if (0 !== r2)
              return true;
          }
        }
      } else if (null === n2 && null === o2 && (null === i2 || 1 === i2 || -1 === i2))
        return true;
    throw Error(bignumberError + "Invalid BigNumber: " + e2);
  }, O.maximum = O.max = function() {
    return A(arguments, f.lt);
  }, O.minimum = O.min = function() {
    return A(arguments, f.gt);
  }, O.random = (o = 9007199254740992, i = Math.random() * o & 2097151 ? function() {
    return mathfloor(Math.random() * o);
  } : function() {
    return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0);
  }, function(e2) {
    var t2, r2, n2, o2, a2, s2 = 0, c2 = [], l2 = new O(h);
    if (null == e2 ? e2 = p : intCheck(e2, 0, MAX), o2 = mathceil(e2 / LOG_BASE), y)
      if (crypto.getRandomValues) {
        for (t2 = crypto.getRandomValues(new Uint32Array(o2 *= 2)); s2 < o2; )
          (a2 = 131072 * t2[s2] + (t2[s2 + 1] >>> 11)) >= 9e15 ? (r2 = crypto.getRandomValues(new Uint32Array(2)), t2[s2] = r2[0], t2[s2 + 1] = r2[1]) : (c2.push(a2 % 1e14), s2 += 2);
        s2 = o2 / 2;
      } else {
        if (!crypto.randomBytes)
          throw y = false, Error(bignumberError + "crypto unavailable");
        for (t2 = crypto.randomBytes(o2 *= 7); s2 < o2; )
          (a2 = 281474976710656 * (31 & t2[s2]) + 1099511627776 * t2[s2 + 1] + 4294967296 * t2[s2 + 2] + 16777216 * t2[s2 + 3] + (t2[s2 + 4] << 16) + (t2[s2 + 5] << 8) + t2[s2 + 6]) >= 9e15 ? crypto.randomBytes(7).copy(t2, s2) : (c2.push(a2 % 1e14), s2 += 7);
        s2 = o2 / 7;
      }
    if (!y)
      for (; s2 < o2; )
        (a2 = i()) < 9e15 && (c2[s2++] = a2 % 1e14);
    for (o2 = c2[--s2], e2 %= LOG_BASE, o2 && e2 && (a2 = POWS_TEN[LOG_BASE - e2], c2[s2] = mathfloor(o2 / a2) * a2); 0 === c2[s2]; c2.pop(), s2--)
      ;
    if (s2 < 0)
      c2 = [n2 = 0];
    else {
      for (n2 = -1; 0 === c2[0]; c2.splice(0, 1), n2 -= LOG_BASE)
        ;
      for (s2 = 1, a2 = c2[0]; a2 >= 10; a2 /= 10, s2++)
        ;
      s2 < LOG_BASE && (n2 -= LOG_BASE - s2);
    }
    return l2.e = n2, l2.c = c2, l2;
  }), O.sum = function() {
    for (var e2 = 1, t2 = arguments, r2 = new O(t2[0]); e2 < t2.length; )
      r2 = r2.plus(t2[e2++]);
    return r2;
  }, r = function() {
    var e2 = "0123456789";
    function r2(e3, t2, r3, n2) {
      for (var o2, i2, a2 = [0], s2 = 0, c2 = e3.length; s2 < c2; ) {
        for (i2 = a2.length; i2--; a2[i2] *= t2)
          ;
        for (a2[0] += n2.indexOf(e3.charAt(s2++)), o2 = 0; o2 < a2.length; o2++)
          a2[o2] > r3 - 1 && (null == a2[o2 + 1] && (a2[o2 + 1] = 0), a2[o2 + 1] += a2[o2] / r3 | 0, a2[o2] %= r3);
      }
      return a2.reverse();
    }
    return function(n2, o2, i2, a2, s2) {
      var c2, l2, u2, f2, h2, _2, d2, m2, b2 = n2.indexOf("."), y2 = p, v2 = g;
      for (b2 >= 0 && (f2 = S, S = 0, n2 = n2.replace(".", ""), _2 = (m2 = new O(o2)).pow(n2.length - b2), S = f2, m2.c = r2(toFixedPoint(coeffToString(_2.c), _2.e, "0"), 10, i2, e2), m2.e = m2.c.length), u2 = f2 = (d2 = r2(n2, o2, i2, s2 ? (c2 = $, e2) : (c2 = e2, $))).length; 0 == d2[--f2]; d2.pop())
        ;
      if (!d2[0])
        return c2.charAt(0);
      if (b2 < 0 ? --u2 : (_2.c = d2, _2.e = u2, _2.s = a2, d2 = (_2 = t(_2, m2, y2, v2, i2)).c, h2 = _2.r, u2 = _2.e), b2 = d2[l2 = u2 + y2 + 1], f2 = i2 / 2, h2 = h2 || l2 < 0 || null != d2[l2 + 1], h2 = v2 < 4 ? (null != b2 || h2) && (0 == v2 || v2 == (_2.s < 0 ? 3 : 2)) : b2 > f2 || b2 == f2 && (4 == v2 || h2 || 6 == v2 && 1 & d2[l2 - 1] || v2 == (_2.s < 0 ? 8 : 7)), l2 < 1 || !d2[0])
        n2 = h2 ? toFixedPoint(c2.charAt(1), -y2, c2.charAt(0)) : c2.charAt(0);
      else {
        if (d2.length = l2, h2)
          for (--i2; ++d2[--l2] > i2; )
            d2[l2] = 0, l2 || (++u2, d2 = [1].concat(d2));
        for (f2 = d2.length; !d2[--f2]; )
          ;
        for (b2 = 0, n2 = ""; b2 <= f2; n2 += c2.charAt(d2[b2++]))
          ;
        n2 = toFixedPoint(n2, u2, c2.charAt(0));
      }
      return n2;
    };
  }(), t = function() {
    function e2(e3, t3, r3) {
      var n2, o2, i2, a2, s2 = 0, c2 = e3.length, l2 = t3 % SQRT_BASE, u2 = t3 / SQRT_BASE | 0;
      for (e3 = e3.slice(); c2--; )
        s2 = ((o2 = l2 * (i2 = e3[c2] % SQRT_BASE) + (n2 = u2 * i2 + (a2 = e3[c2] / SQRT_BASE | 0) * l2) % SQRT_BASE * SQRT_BASE + s2) / r3 | 0) + (n2 / SQRT_BASE | 0) + u2 * a2, e3[c2] = o2 % r3;
      return s2 && (e3 = [s2].concat(e3)), e3;
    }
    function t2(e3, t3, r3, n2) {
      var o2, i2;
      if (r3 != n2)
        i2 = r3 > n2 ? 1 : -1;
      else
        for (o2 = i2 = 0; o2 < r3; o2++)
          if (e3[o2] != t3[o2]) {
            i2 = e3[o2] > t3[o2] ? 1 : -1;
            break;
          }
      return i2;
    }
    function r2(e3, t3, r3, n2) {
      for (var o2 = 0; r3--; )
        e3[r3] -= o2, o2 = e3[r3] < t3[r3] ? 1 : 0, e3[r3] = o2 * n2 + e3[r3] - t3[r3];
      for (; !e3[0] && e3.length > 1; e3.splice(0, 1))
        ;
    }
    return function(n2, o2, i2, a2, s2) {
      var c2, l2, u2, f2, h2, p2, g2, _2, d2, m2, b2, y2, v2, S2, w2, $2, E2, C2 = n2.s == o2.s ? 1 : -1, A2 = n2.c, T2 = o2.c;
      if (!(A2 && A2[0] && T2 && T2[0]))
        return new O(n2.s && o2.s && (A2 ? !T2 || A2[0] != T2[0] : T2) ? A2 && 0 == A2[0] || !T2 ? 0 * C2 : C2 / 0 : NaN);
      for (d2 = (_2 = new O(C2)).c = [], C2 = i2 + (l2 = n2.e - o2.e) + 1, s2 || (s2 = BASE, l2 = bitFloor(n2.e / LOG_BASE) - bitFloor(o2.e / LOG_BASE), C2 = C2 / LOG_BASE | 0), u2 = 0; T2[u2] == (A2[u2] || 0); u2++)
        ;
      if (T2[u2] > (A2[u2] || 0) && l2--, C2 < 0)
        d2.push(1), f2 = true;
      else {
        for (S2 = A2.length, $2 = T2.length, u2 = 0, C2 += 2, (h2 = mathfloor(s2 / (T2[0] + 1))) > 1 && (T2 = e2(T2, h2, s2), A2 = e2(A2, h2, s2), $2 = T2.length, S2 = A2.length), v2 = $2, b2 = (m2 = A2.slice(0, $2)).length; b2 < $2; m2[b2++] = 0)
          ;
        E2 = T2.slice(), E2 = [0].concat(E2), w2 = T2[0], T2[1] >= s2 / 2 && w2++;
        do {
          if (h2 = 0, (c2 = t2(T2, m2, $2, b2)) < 0) {
            if (y2 = m2[0], $2 != b2 && (y2 = y2 * s2 + (m2[1] || 0)), (h2 = mathfloor(y2 / w2)) > 1)
              for (h2 >= s2 && (h2 = s2 - 1), g2 = (p2 = e2(T2, h2, s2)).length, b2 = m2.length; 1 == t2(p2, m2, g2, b2); )
                h2--, r2(p2, $2 < g2 ? E2 : T2, g2, s2), g2 = p2.length, c2 = 1;
            else
              0 == h2 && (c2 = h2 = 1), g2 = (p2 = T2.slice()).length;
            if (g2 < b2 && (p2 = [0].concat(p2)), r2(m2, p2, b2, s2), b2 = m2.length, -1 == c2)
              for (; t2(T2, m2, $2, b2) < 1; )
                h2++, r2(m2, $2 < b2 ? E2 : T2, b2, s2), b2 = m2.length;
          } else
            0 === c2 && (h2++, m2 = [0]);
          d2[u2++] = h2, m2[0] ? m2[b2++] = A2[v2] || 0 : (m2 = [A2[v2]], b2 = 1);
        } while ((v2++ < S2 || null != m2[0]) && C2--);
        f2 = null != m2[0], d2[0] || d2.splice(0, 1);
      }
      if (s2 == BASE) {
        for (u2 = 1, C2 = d2[0]; C2 >= 10; C2 /= 10, u2++)
          ;
        x(_2, i2 + (_2.e = u2 + l2 * LOG_BASE - 1) + 1, a2, f2);
      } else
        _2.e = l2, _2.r = +f2;
      return _2;
    };
  }(), a = /^(-?)0([xbo])(?=\w[\w.]*$)/i, s = /^([^.]+)\.$/, c = /^\.([^.]+)$/, l = /^-?(Infinity|NaN)$/, u = /^\s*\+(?=[\w.])|^\s+|\s+$/g, n = function(e2, t2, r2, n2) {
    var o2, i2 = r2 ? t2 : t2.replace(u, "");
    if (l.test(i2))
      e2.s = isNaN(i2) ? null : i2 < 0 ? -1 : 1;
    else {
      if (!r2 && (i2 = i2.replace(a, function(e3, t3, r3) {
        return o2 = "x" == (r3 = r3.toLowerCase()) ? 16 : "b" == r3 ? 2 : 8, n2 && n2 != o2 ? e3 : t3;
      }), n2 && (o2 = n2, i2 = i2.replace(s, "$1").replace(c, "0.$1")), t2 != i2))
        return new O(i2, o2);
      if (O.DEBUG)
        throw Error(bignumberError + "Not a" + (n2 ? " base " + n2 : "") + " number: " + t2);
      e2.s = null;
    }
    e2.c = e2.e = null;
  }, f.absoluteValue = f.abs = function() {
    var e2 = new O(this);
    return e2.s < 0 && (e2.s = 1), e2;
  }, f.comparedTo = function(e2, t2) {
    return compare(this, new O(e2, t2));
  }, f.decimalPlaces = f.dp = function(e2, t2) {
    var r2, n2, o2, i2 = this;
    if (null != e2)
      return intCheck(e2, 0, MAX), null == t2 ? t2 = g : intCheck(t2, 0, 8), x(new O(i2), e2 + i2.e + 1, t2);
    if (!(r2 = i2.c))
      return null;
    if (n2 = ((o2 = r2.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE, o2 = r2[o2])
      for (; o2 % 10 == 0; o2 /= 10, n2--)
        ;
    return n2 < 0 && (n2 = 0), n2;
  }, f.dividedBy = f.div = function(e2, r2) {
    return t(this, new O(e2, r2), p, g);
  }, f.dividedToIntegerBy = f.idiv = function(e2, r2) {
    return t(this, new O(e2, r2), 0, 1);
  }, f.exponentiatedBy = f.pow = function(e2, t2) {
    var r2, n2, o2, i2, a2, s2, c2, l2, u2 = this;
    if ((e2 = new O(e2)).c && !e2.isInteger())
      throw Error(bignumberError + "Exponent not an integer: " + N(e2));
    if (null != t2 && (t2 = new O(t2)), a2 = e2.e > 14, !u2.c || !u2.c[0] || 1 == u2.c[0] && !u2.e && 1 == u2.c.length || !e2.c || !e2.c[0])
      return l2 = new O(Math.pow(+N(u2), a2 ? e2.s * (2 - isOdd(e2)) : +N(e2))), t2 ? l2.mod(t2) : l2;
    if (s2 = e2.s < 0, t2) {
      if (t2.c ? !t2.c[0] : !t2.s)
        return new O(NaN);
      (n2 = !s2 && u2.isInteger() && t2.isInteger()) && (u2 = u2.mod(t2));
    } else {
      if (e2.e > 9 && (u2.e > 0 || u2.e < -1 || (0 == u2.e ? u2.c[0] > 1 || a2 && u2.c[1] >= 24e7 : u2.c[0] < 8e13 || a2 && u2.c[0] <= 9999975e7)))
        return i2 = u2.s < 0 && isOdd(e2) ? -0 : 0, u2.e > -1 && (i2 = 1 / i2), new O(s2 ? 1 / i2 : i2);
      S && (i2 = mathceil(S / LOG_BASE + 2));
    }
    for (a2 ? (r2 = new O(0.5), s2 && (e2.s = 1), c2 = isOdd(e2)) : c2 = (o2 = Math.abs(+N(e2))) % 2, l2 = new O(h); ; ) {
      if (c2) {
        if (!(l2 = l2.times(u2)).c)
          break;
        i2 ? l2.c.length > i2 && (l2.c.length = i2) : n2 && (l2 = l2.mod(t2));
      }
      if (o2) {
        if (0 === (o2 = mathfloor(o2 / 2)))
          break;
        c2 = o2 % 2;
      } else if (x(e2 = e2.times(r2), e2.e + 1, 1), e2.e > 14)
        c2 = isOdd(e2);
      else {
        if (0 === (o2 = +N(e2)))
          break;
        c2 = o2 % 2;
      }
      u2 = u2.times(u2), i2 ? u2.c && u2.c.length > i2 && (u2.c.length = i2) : n2 && (u2 = u2.mod(t2));
    }
    return n2 ? l2 : (s2 && (l2 = h.div(l2)), t2 ? l2.mod(t2) : i2 ? x(l2, S, g, void 0) : l2);
  }, f.integerValue = function(e2) {
    var t2 = new O(this);
    return null == e2 ? e2 = g : intCheck(e2, 0, 8), x(t2, t2.e + 1, e2);
  }, f.isEqualTo = f.eq = function(e2, t2) {
    return 0 === compare(this, new O(e2, t2));
  }, f.isFinite = function() {
    return !!this.c;
  }, f.isGreaterThan = f.gt = function(e2, t2) {
    return compare(this, new O(e2, t2)) > 0;
  }, f.isGreaterThanOrEqualTo = f.gte = function(e2, t2) {
    return 1 === (t2 = compare(this, new O(e2, t2))) || 0 === t2;
  }, f.isInteger = function() {
    return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
  }, f.isLessThan = f.lt = function(e2, t2) {
    return compare(this, new O(e2, t2)) < 0;
  }, f.isLessThanOrEqualTo = f.lte = function(e2, t2) {
    return -1 === (t2 = compare(this, new O(e2, t2))) || 0 === t2;
  }, f.isNaN = function() {
    return !this.s;
  }, f.isNegative = function() {
    return this.s < 0;
  }, f.isPositive = function() {
    return this.s > 0;
  }, f.isZero = function() {
    return !!this.c && 0 == this.c[0];
  }, f.minus = function(e2, t2) {
    var r2, n2, o2, i2, a2 = this, s2 = a2.s;
    if (t2 = (e2 = new O(e2, t2)).s, !s2 || !t2)
      return new O(NaN);
    if (s2 != t2)
      return e2.s = -t2, a2.plus(e2);
    var c2 = a2.e / LOG_BASE, l2 = e2.e / LOG_BASE, u2 = a2.c, f2 = e2.c;
    if (!c2 || !l2) {
      if (!u2 || !f2)
        return u2 ? (e2.s = -t2, e2) : new O(f2 ? a2 : NaN);
      if (!u2[0] || !f2[0])
        return f2[0] ? (e2.s = -t2, e2) : new O(u2[0] ? a2 : 3 == g ? -0 : 0);
    }
    if (c2 = bitFloor(c2), l2 = bitFloor(l2), u2 = u2.slice(), s2 = c2 - l2) {
      for ((i2 = s2 < 0) ? (s2 = -s2, o2 = u2) : (l2 = c2, o2 = f2), o2.reverse(), t2 = s2; t2--; o2.push(0))
        ;
      o2.reverse();
    } else
      for (n2 = (i2 = (s2 = u2.length) < (t2 = f2.length)) ? s2 : t2, s2 = t2 = 0; t2 < n2; t2++)
        if (u2[t2] != f2[t2]) {
          i2 = u2[t2] < f2[t2];
          break;
        }
    if (i2 && (o2 = u2, u2 = f2, f2 = o2, e2.s = -e2.s), (t2 = (n2 = f2.length) - (r2 = u2.length)) > 0)
      for (; t2--; u2[r2++] = 0)
        ;
    for (t2 = BASE - 1; n2 > s2; ) {
      if (u2[--n2] < f2[n2]) {
        for (r2 = n2; r2 && !u2[--r2]; u2[r2] = t2)
          ;
        --u2[r2], u2[n2] += BASE;
      }
      u2[n2] -= f2[n2];
    }
    for (; 0 == u2[0]; u2.splice(0, 1), --l2)
      ;
    return u2[0] ? T(e2, u2, l2) : (e2.s = 3 == g ? -1 : 1, e2.c = [e2.e = 0], e2);
  }, f.modulo = f.mod = function(e2, r2) {
    var n2, o2, i2 = this;
    return e2 = new O(e2, r2), !i2.c || !e2.s || e2.c && !e2.c[0] ? new O(NaN) : !e2.c || i2.c && !i2.c[0] ? new O(i2) : (9 == v ? (o2 = e2.s, e2.s = 1, n2 = t(i2, e2, 0, 3), e2.s = o2, n2.s *= o2) : n2 = t(i2, e2, 0, v), (e2 = i2.minus(n2.times(e2))).c[0] || 1 != v || (e2.s = i2.s), e2);
  }, f.multipliedBy = f.times = function(e2, t2) {
    var r2, n2, o2, i2, a2, s2, c2, l2, u2, f2, h2, p2, g2, _2, d2, m2 = this, b2 = m2.c, y2 = (e2 = new O(e2, t2)).c;
    if (!(b2 && y2 && b2[0] && y2[0]))
      return !m2.s || !e2.s || b2 && !b2[0] && !y2 || y2 && !y2[0] && !b2 ? e2.c = e2.e = e2.s = null : (e2.s *= m2.s, b2 && y2 ? (e2.c = [0], e2.e = 0) : e2.c = e2.e = null), e2;
    for (n2 = bitFloor(m2.e / LOG_BASE) + bitFloor(e2.e / LOG_BASE), e2.s *= m2.s, (c2 = b2.length) < (f2 = y2.length) && (g2 = b2, b2 = y2, y2 = g2, o2 = c2, c2 = f2, f2 = o2), o2 = c2 + f2, g2 = []; o2--; g2.push(0))
      ;
    for (_2 = BASE, d2 = SQRT_BASE, o2 = f2; --o2 >= 0; ) {
      for (r2 = 0, h2 = y2[o2] % d2, p2 = y2[o2] / d2 | 0, i2 = o2 + (a2 = c2); i2 > o2; )
        r2 = ((l2 = h2 * (l2 = b2[--a2] % d2) + (s2 = p2 * l2 + (u2 = b2[a2] / d2 | 0) * h2) % d2 * d2 + g2[i2] + r2) / _2 | 0) + (s2 / d2 | 0) + p2 * u2, g2[i2--] = l2 % _2;
      g2[i2] = r2;
    }
    return r2 ? ++n2 : g2.splice(0, 1), T(e2, g2, n2);
  }, f.negated = function() {
    var e2 = new O(this);
    return e2.s = -e2.s || null, e2;
  }, f.plus = function(e2, t2) {
    var r2, n2 = this, o2 = n2.s;
    if (t2 = (e2 = new O(e2, t2)).s, !o2 || !t2)
      return new O(NaN);
    if (o2 != t2)
      return e2.s = -t2, n2.minus(e2);
    var i2 = n2.e / LOG_BASE, a2 = e2.e / LOG_BASE, s2 = n2.c, c2 = e2.c;
    if (!i2 || !a2) {
      if (!s2 || !c2)
        return new O(o2 / 0);
      if (!s2[0] || !c2[0])
        return c2[0] ? e2 : new O(s2[0] ? n2 : 0 * o2);
    }
    if (i2 = bitFloor(i2), a2 = bitFloor(a2), s2 = s2.slice(), o2 = i2 - a2) {
      for (o2 > 0 ? (a2 = i2, r2 = c2) : (o2 = -o2, r2 = s2), r2.reverse(); o2--; r2.push(0))
        ;
      r2.reverse();
    }
    for ((o2 = s2.length) - (t2 = c2.length) < 0 && (r2 = c2, c2 = s2, s2 = r2, t2 = o2), o2 = 0; t2; )
      o2 = (s2[--t2] = s2[t2] + c2[t2] + o2) / BASE | 0, s2[t2] = BASE === s2[t2] ? 0 : s2[t2] % BASE;
    return o2 && (s2 = [o2].concat(s2), ++a2), T(e2, s2, a2);
  }, f.precision = f.sd = function(e2, t2) {
    var r2, n2, o2, i2 = this;
    if (null != e2 && e2 !== !!e2)
      return intCheck(e2, 1, MAX), null == t2 ? t2 = g : intCheck(t2, 0, 8), x(new O(i2), e2, t2);
    if (!(r2 = i2.c))
      return null;
    if (n2 = (o2 = r2.length - 1) * LOG_BASE + 1, o2 = r2[o2]) {
      for (; o2 % 10 == 0; o2 /= 10, n2--)
        ;
      for (o2 = r2[0]; o2 >= 10; o2 /= 10, n2++)
        ;
    }
    return e2 && i2.e + 1 > n2 && (n2 = i2.e + 1), n2;
  }, f.shiftedBy = function(e2) {
    return intCheck(e2, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER), this.times("1e" + e2);
  }, f.squareRoot = f.sqrt = function() {
    var e2, r2, n2, o2, i2, a2 = this, s2 = a2.c, c2 = a2.s, l2 = a2.e, u2 = p + 4, f2 = new O("0.5");
    if (1 !== c2 || !s2 || !s2[0])
      return new O(!c2 || c2 < 0 && (!s2 || s2[0]) ? NaN : s2 ? a2 : 1 / 0);
    if (0 == (c2 = Math.sqrt(+N(a2))) || c2 == 1 / 0 ? (((r2 = coeffToString(s2)).length + l2) % 2 == 0 && (r2 += "0"), c2 = Math.sqrt(+r2), l2 = bitFloor((l2 + 1) / 2) - (l2 < 0 || l2 % 2), n2 = new O(r2 = c2 == 1 / 0 ? "5e" + l2 : (r2 = c2.toExponential()).slice(0, r2.indexOf("e") + 1) + l2)) : n2 = new O(c2 + ""), n2.c[0]) {
      for ((c2 = (l2 = n2.e) + u2) < 3 && (c2 = 0); ; )
        if (i2 = n2, n2 = f2.times(i2.plus(t(a2, i2, u2, 1))), coeffToString(i2.c).slice(0, c2) === (r2 = coeffToString(n2.c)).slice(0, c2)) {
          if (n2.e < l2 && --c2, "9999" != (r2 = r2.slice(c2 - 3, c2 + 1)) && (o2 || "4999" != r2)) {
            +r2 && (+r2.slice(1) || "5" != r2.charAt(0)) || (x(n2, n2.e + p + 2, 1), e2 = !n2.times(n2).eq(a2));
            break;
          }
          if (!o2 && (x(i2, i2.e + p + 2, 0), i2.times(i2).eq(a2))) {
            n2 = i2;
            break;
          }
          u2 += 4, c2 += 4, o2 = 1;
        }
    }
    return x(n2, n2.e + p + 1, g, e2);
  }, f.toExponential = function(e2, t2) {
    return null != e2 && (intCheck(e2, 0, MAX), e2++), C(this, e2, t2, 1);
  }, f.toFixed = function(e2, t2) {
    return null != e2 && (intCheck(e2, 0, MAX), e2 = e2 + this.e + 1), C(this, e2, t2);
  }, f.toFormat = function(e2, t2, r2) {
    var n2, o2 = this;
    if (null == r2)
      null != e2 && t2 && "object" == _typeof(t2) ? (r2 = t2, t2 = null) : e2 && "object" == _typeof(e2) ? (r2 = e2, e2 = t2 = null) : r2 = w;
    else if ("object" != _typeof(r2))
      throw Error(bignumberError + "Argument not an object: " + r2);
    if (n2 = o2.toFixed(e2, t2), o2.c) {
      var i2, a2 = n2.split("."), s2 = +r2.groupSize, c2 = +r2.secondaryGroupSize, l2 = r2.groupSeparator || "", u2 = a2[0], f2 = a2[1], h2 = o2.s < 0, p2 = h2 ? u2.slice(1) : u2, g2 = p2.length;
      if (c2 && (i2 = s2, s2 = c2, c2 = i2, g2 -= i2), s2 > 0 && g2 > 0) {
        for (i2 = g2 % s2 || s2, u2 = p2.substr(0, i2); i2 < g2; i2 += s2)
          u2 += l2 + p2.substr(i2, s2);
        c2 > 0 && (u2 += l2 + p2.slice(i2)), h2 && (u2 = "-" + u2);
      }
      n2 = f2 ? u2 + (r2.decimalSeparator || "") + ((c2 = +r2.fractionGroupSize) ? f2.replace(new RegExp("\\d{" + c2 + "}\\B", "g"), "$&" + (r2.fractionGroupSeparator || "")) : f2) : u2;
    }
    return (r2.prefix || "") + n2 + (r2.suffix || "");
  }, f.toFraction = function(e2) {
    var r2, n2, o2, i2, a2, s2, c2, l2, u2, f2, p2, _2, d2 = this, m2 = d2.c;
    if (null != e2 && (!(c2 = new O(e2)).isInteger() && (c2.c || 1 !== c2.s) || c2.lt(h)))
      throw Error(bignumberError + "Argument " + (c2.isInteger() ? "out of range: " : "not an integer: ") + N(c2));
    if (!m2)
      return new O(d2);
    for (r2 = new O(h), u2 = n2 = new O(h), o2 = l2 = new O(h), _2 = coeffToString(m2), a2 = r2.e = _2.length - d2.e - 1, r2.c[0] = POWS_TEN[(s2 = a2 % LOG_BASE) < 0 ? LOG_BASE + s2 : s2], e2 = !e2 || c2.comparedTo(r2) > 0 ? a2 > 0 ? r2 : u2 : c2, s2 = b, b = 1 / 0, c2 = new O(_2), l2.c[0] = 0; f2 = t(c2, r2, 0, 1), 1 != (i2 = n2.plus(f2.times(o2))).comparedTo(e2); )
      n2 = o2, o2 = i2, u2 = l2.plus(f2.times(i2 = u2)), l2 = i2, r2 = c2.minus(f2.times(i2 = r2)), c2 = i2;
    return i2 = t(e2.minus(n2), o2, 0, 1), l2 = l2.plus(i2.times(u2)), n2 = n2.plus(i2.times(o2)), l2.s = u2.s = d2.s, p2 = t(u2, o2, a2 *= 2, g).minus(d2).abs().comparedTo(t(l2, n2, a2, g).minus(d2).abs()) < 1 ? [u2, o2] : [l2, n2], b = s2, p2;
  }, f.toNumber = function() {
    return +N(this);
  }, f.toPrecision = function(e2, t2) {
    return null != e2 && intCheck(e2, 1, MAX), C(this, e2, t2, 2);
  }, f.toString = function(e2) {
    var t2, n2 = this, o2 = n2.s, i2 = n2.e;
    return null === i2 ? o2 ? (t2 = "Infinity", o2 < 0 && (t2 = "-" + t2)) : t2 = "NaN" : (null == e2 ? t2 = i2 <= _ || i2 >= d ? toExponential(coeffToString(n2.c), i2) : toFixedPoint(coeffToString(n2.c), i2, "0") : 10 === e2 && E ? t2 = toFixedPoint(coeffToString((n2 = x(new O(n2), p + i2 + 1, g)).c), n2.e, "0") : (intCheck(e2, 2, $.length, "Base"), t2 = r(toFixedPoint(coeffToString(n2.c), i2, "0"), 10, e2, o2, true)), o2 < 0 && n2.c[0] && (t2 = "-" + t2)), t2;
  }, f.valueOf = f.toJSON = function() {
    return N(this);
  }, f._isBigNumber = true, f[Symbol.toStringTag] = "BigNumber", f[Symbol.for("nodejs.util.inspect.custom")] = f.valueOf, null != e && O.set(e), O;
}
function bitFloor(e) {
  var t = 0 | e;
  return e > 0 || e === t ? t : t - 1;
}
function coeffToString(e) {
  for (var t, r, n = 1, o = e.length, i = e[0] + ""; n < o; ) {
    for (t = e[n++] + "", r = LOG_BASE - t.length; r--; t = "0" + t)
      ;
    i += t;
  }
  for (o = i.length; 48 === i.charCodeAt(--o); )
    ;
  return i.slice(0, o + 1 || 1);
}
function compare(e, t) {
  var r, n, o = e.c, i = t.c, a = e.s, s = t.s, c = e.e, l = t.e;
  if (!a || !s)
    return null;
  if (r = o && !o[0], n = i && !i[0], r || n)
    return r ? n ? 0 : -s : a;
  if (a != s)
    return a;
  if (r = a < 0, n = c == l, !o || !i)
    return n ? 0 : !o ^ r ? 1 : -1;
  if (!n)
    return c > l ^ r ? 1 : -1;
  for (s = (c = o.length) < (l = i.length) ? c : l, a = 0; a < s; a++)
    if (o[a] != i[a])
      return o[a] > i[a] ^ r ? 1 : -1;
  return c == l ? 0 : c > l ^ r ? 1 : -1;
}
function intCheck(e, t, r, n) {
  if (e < t || e > r || e !== mathfloor(e))
    throw Error(bignumberError + (n || "Argument") + ("number" == typeof e ? e < t || e > r ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(e));
}
function isOdd(e) {
  var t = e.c.length - 1;
  return bitFloor(e.e / LOG_BASE) == t && e.c[t] % 2 != 0;
}
function toExponential(e, t) {
  return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (t < 0 ? "e" : "e+") + t;
}
function toFixedPoint(e, t, r) {
  var n, o;
  if (t < 0) {
    for (o = r + "."; ++t; o += r)
      ;
    e = o + e;
  } else if (++t > (n = e.length)) {
    for (o = r, t -= n; --t; o += r)
      ;
    e += o;
  } else
    t < n && (e = e.slice(0, t) + "." + e.slice(t));
  return e;
}
var BigNumber = clone();
function eval_postfix(e) {
  for (var t = []; e.length > 0; ) {
    var r = e.shift();
    if (is_operator(r)) {
      if (t.length < 2)
        throw new Error("错误的栈长度, 可能是无法计算的表达式");
      var n = t.pop(), o = t.pop();
      if ("string" == typeof n && !BigNumber.isBigNumber(n)) {
        if (!is_str_number(n))
          throw new Error("".concat(n, "不是一个合法的数字"));
        n = new BigNumber(n);
      }
      if ("string" == typeof o && !BigNumber.isBigNumber(o)) {
        if (!is_str_number(o))
          throw new Error("".concat(o, "不是一个合法的数字"));
        o = new BigNumber(o);
      }
      switch (r) {
        case "+":
          t.push(o.plus(n));
          break;
        case "-":
          t.push(o.minus(n));
          break;
        case "*":
          t.push(o.times(n));
          break;
        case "/":
          t.push(o.div(n));
          break;
        case "%":
          t.push(o.mod(n));
          break;
        case "**":
          t.push(o.pow(n));
      }
    } else
      t.push(r);
  }
  if (1 !== t.length)
    throw "unvalid expression";
  var i = t[0];
  if ((i = BigNumber.isBigNumber(i) ? i : BigNumber(i)).isNaN())
    throw new Error("计算结果为NaN");
  return i;
}
function format(e, t) {
  var r = "";
  if (BigNumber.isBigNumber(e) ? r = e.toFixed() : "string" != typeof e && (r = e.toString()), "undefined" === r || "NaN" === r)
    return [null, {}];
  var n = { mantissa: null, mantissa_type: null, thousands: false, sign: false, round: "~-", scientific: false, fraction: false, percent: false, to_number: false, to_number_string: false };
  if (t.forEach(function(e2) {
    var t2 = e2.type;
    if ("symbol" === t2) {
      if (![">=", "<=", "=", "<", ">"].includes(e2.value))
        throw new Error("错误的格式化参数:", e2.value);
      n.mantissa_type = e2.value;
    } else if ("to-number" === t2)
      n.to_number = true;
    else if ("to-number-string" === t2)
      n.to_number_string = true;
    else if ("comma" === t2)
      n.thousands = true;
    else if ("number" === t2)
      n.mantissa = e2.value;
    else if ("plus" === t2)
      n.sign = true;
    else if ("round" === t2)
      n.round = e2.value;
    else if ("fraction" === t2)
      n.fraction = true;
    else if ("scientific" === t2)
      n.scientific = true;
    else {
      if ("percent" !== t2)
        throw new Error("错误的fmt Token");
      n.percent = true;
    }
  }), n.to_number)
    return [+parse_mantissa(r, n.mantissa_type, n.mantissa, n.round), n];
  if (n.scientific) {
    var o = BigNumber(r).toExponential();
    return [n.sign && !o.startsWith("-") ? "+" + o : o, n];
  }
  if (n.fraction) {
    var i = BigNumber(r).toFraction().map(function(e2) {
      return e2.toFixed();
    }).join("/");
    return [n.sign && !i.startsWith("-") ? "+" + i : i, n];
  }
  return n.percent && (r = BigNumber(r).times(100).toFixed()), n.mantissa && (r = parse_mantissa(r, n.mantissa_type, n.mantissa, n.round)), n.thousands && (r = parse_thousands(r)), n.sign && (n.to_number = false, r.startsWith("-") || (r = "+" + r)), n.percent && (r += "%"), [r, n];
}
function fill_fmt_tokens(e, t) {
  return e.map(function(e2) {
    if ("var" !== e2.type)
      return e2;
    for (var r, n = 0; n < t.length && !not_undefined(r = get$1(t[n], e2.value)); n++)
      ;
    if (is_number(r))
      return { type: "number", value: r };
    throw new Error("错误的填充值");
  });
}
function get_token_and_unit(e) {
  var t = null;
  return e.length, { tokens: e.map(function(e2) {
    var r = split_unit_num(e2.value);
    return null !== r.unit ? (null == t && (t = r.unit), { type: "number", value: r.num }) : e2;
  }), unit: t };
}
var _debug = false;
function open_debug() {
  _debug = true;
}
function close_debug() {
  _debug = false;
}
function get_debug_config() {
  return _debug;
}
var debug_color = { bg: "#ff8936", fg: "#fff", field: "#67C23A", field2: "#ee7959" };
var debug_style = { expr: "background: ".concat(debug_color.bg, ";color: ").concat(debug_color.fg, ";font-weight: bold;border-radius: 4px; padding: 3px 8px;"), label1: "color: ".concat(debug_color.field, "; font-weight: bold; white-space:nowrap; overflow: hidden; text-overflow: ellipsis;"), label2: "color: ".concat(debug_color.field2, "; font-weight: bold; white-space:nowrap; overflow: hidden; text-overflow: ellipsis;"), nowrap: "white-space:nowrap; overflow: hidden; text-overflow: ellipsis;" };
function calc_wrap(e, t) {
  var r = {}, n = { _error: "-" };
  return ["string", "number"].includes(_typeof(e)) ? (Array.isArray(t) || void 0 === t || Object.keys(t).forEach(function(e2) {
    return e2.startsWith("_") && (n[e2] = t[e2]);
  }), r = null != t ? t : {}, /[a-zA-Z_$]/.test(e.toString()) ? void 0 !== t ? (r = t, calc(e, _objectSpread2(_objectSpread2({}, n), r))) : function(t2) {
    return calc(e, _objectSpread2(_objectSpread2({}, n), t2));
  } : calc(e, _objectSpread2(_objectSpread2({}, n), r))) : (r = e, function(e2) {
    return calc(e2, _objectSpread2(_objectSpread2({}, n), r));
  });
}
function check_version() {
  return _check_version.apply(this, arguments);
}
function _check_version() {
  return _check_version = _asyncToGenerator(_regeneratorRuntime().mark(function _callee() {
    var res, code, versions, last_version, larr, varr, script;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      for (; ; )
        switch (_context.prev = _context.next) {
          case 0:
            if ("undefined" == typeof process || "node" !== process.release.name) {
              _context.next = 19;
              break;
            }
            if (!(parseInt(process.versions.node) >= 17)) {
              _context.next = 17;
              break;
            }
            return _context.next = 4, fetch("https://cdn.jsdelivr.net/npm/a-calc/a-calc.versions.js");
          case 4:
            return res = _context.sent, _context.next = 7, res.text();
          case 7:
            code = _context.sent, versions = eval(code), last_version = versions.at(-1), larr = last_version.match(/(\d+)\.(\d+)\.(\d+)/), larr.shift(), larr = larr.map(function(e) {
              return parseInt(e);
            }), varr = version.match(/(\d+)\.(\d+)\.(\d+)/), varr.shift(), varr = varr.map(function(e) {
              return parseInt(e);
            }), (larr[0] > varr[0] || larr[0] === varr[0] && larr[1] > varr[1] || larr[0] === varr[0] && larr[1] === varr[1] && larr[2] > varr[2]) && console.warn("a-calc has a new version:", last_version);
          case 17:
            _context.next = 23;
            break;
          case 19:
            script = document.createElement("script"), script.onload = function() {
              var e = a_calc_versions;
              if (Array.isArray(e)) {
                var t = e.at(-1), r = t.match(/(\d+)\.(\d+)\.(\d+)/);
                r.shift(), r = r.map(function(e2) {
                  return parseInt(e2);
                });
                var n = version.match(/(\d+)\.(\d+)\.(\d+)/);
                n.shift(), n = n.map(function(e2) {
                  return parseInt(e2);
                }), (r[0] > n[0] || r[0] === n[0] && r[1] > n[1] || r[0] === n[0] && r[1] === n[1] && r[2] > n[2]) && console.log("%c↑↑↑ a-calc has a new version: %s ↑↑↑", "color: #67C23A;", t);
              }
            }, script.src = "https://cdn.jsdelivr.net/npm/a-calc/a-calc.versions.js", document.body.appendChild(script);
          case 23:
          case "end":
            return _context.stop();
        }
    }, _callee);
  })), _check_version.apply(this, arguments);
}
function calc() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n, o, i = parse_args(t), a = get$1(i, "options._error", void 0), s = get$1(i, "options._debug", false), c = get$1(i, "options._unit", false), l = i.options, u = null;
  if (i.fmt_err || i.expr_err) {
    if (not_undefined(a))
      return a;
    throw new Error("表达式或格式化字符串错误,表达式为：".concat(i.expr));
  }
  var f = i.fmt_tokens;
  if (not_undefined(a))
    try {
      n = tokenizer(i.expr, c);
    } catch (e2) {
      return a;
    }
  else
    n = tokenizer(i.expr, c);
  if (is_null(l))
    o = n;
  else {
    var h = [];
    if (Array.isArray(l))
      h = l;
    else {
      h.push(l);
      var p = get$1(l, "_fill_data", {});
      not_undefined(p) && (Array.isArray(p) ? h = [].concat(_toConsumableArray(h), _toConsumableArray(p)) : h.push(p));
    }
    if (not_undefined(a))
      try {
        o = fill_tokens(n, h, c), not_null(i.fmt_tokens) && (f = fill_fmt_tokens(i.fmt_tokens, h));
      } catch (e2) {
        return a;
      }
    else
      o = fill_tokens(n, h, c), not_null(i.fmt_tokens) && (f = fill_fmt_tokens(i.fmt_tokens, h));
    if ([true, "on", "auto", "space"].includes(c)) {
      var g = get_token_and_unit(o);
      u = g.unit, o = g.tokens;
    }
  }
  var _ = token2postfix(o), d = null, m = {};
  if (not_undefined(a))
    try {
      d = eval_postfix(_);
    } catch (e2) {
      return a;
    }
  else
    d = eval_postfix(_);
  if (not_null(f)) {
    var b = _slicedToArray(format(d, f), 2);
    d = b[0], m = b[1];
  } else
    d = null !== d ? d.toFixed() : null;
  if ("Infinity" === d || null === d) {
    if (not_undefined(a))
      return a;
    throw new Error("计算错误可能是非法的计算式");
  }
  return null === u || m.to_number || m.to_number_string || (d += u), (get_debug_config() || s) && (console.groupCollapsed("%c" + i.origin_expr, debug_style.expr), console.groupCollapsed("%c表达式: %c%s", debug_style.label1, debug_style.nowrap, i.origin_expr), console.log(i.origin_expr), console.groupEnd(), console.groupCollapsed("%c数据源: %c%s", debug_style.label1, debug_style.nowrap, JSON.stringify(i.origin_fill_data)), console.log(i.origin_fill_data), console.groupEnd(), console.groupCollapsed("%c结果: %c%s", debug_style.label1, debug_style.nowrap, JSON.stringify(d)), console.log(d), console.groupEnd(), console.groupCollapsed("%ctokens: %c%s", debug_style.label1, debug_style.nowrap, JSON.stringify(n)), console.log(n), console.groupEnd(), console.groupCollapsed("%cfilled-tokens: %c%s", debug_style.label1, debug_style.nowrap, JSON.stringify(o)), console.log(o), console.groupEnd(), console.groupCollapsed("%cfmt-tokens: %c%s", debug_style.label1, debug_style.nowrap, JSON.stringify(i.fmt_tokens)), console.log(i.fmt_tokens), console.groupEnd(), console.groupCollapsed("%cfmt-filled-tokens: %c%s", debug_style.label1, debug_style.nowrap, JSON.stringify(f)), console.log(f), console.groupEnd(), console.groupCollapsed("%cpostfix-tokens: %c%s", debug_style.label1, debug_style.nowrap, JSON.stringify(_)), console.log(_), console.groupEnd(), console.groupCollapsed("%c单位: %c%s", debug_style.label1, debug_style.nowrap, u), console.log(u), console.groupEnd(), console.groupCollapsed("%cparse-arg: %c%s", debug_style.label1, debug_style.nowrap, JSON.stringify(i)), console.log(i), console.groupEnd(), console.groupEnd()), d;
}
function check_update() {
  check_version().catch(function() {
  });
}
function print_version() {
  console.log("%ca-calc:%c ".concat(version, " %c=> %curl:%c https://www.npmjs.com/package/a-calc"), "color: #fff;background: #67C23A;padding: 2px 5px;border-radius:4px;font-size: 14px;", "color: #67C23A;font-size:14px;", "color: #67C23A;font-size:14px;", "background: #67C23A;font-size:14px; padding: 2px 5px; border-radius: 4px; color: #fff;", "font-size:14px;");
}
var calc_util = { check_update, print_version, open_debug, close_debug };
var fmt = calc;
export {
  calc,
  calc_util,
  calc_wrap,
  fmt,
  version
};
//# sourceMappingURL=a-calc.js.map
