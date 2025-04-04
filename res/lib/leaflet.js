/* @preserve
 * Leaflet 1.7.1+Detached: 0f904a515879fcd08f69b7f51799ee7f18f23fd8.0f904a5, a JS library for interactive maps. http://leafletjs.com
 * (c) 2010-2021 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
!(function (t, i) {
  "object" == typeof exports && "undefined" != typeof module
    ? i(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], i)
    : i((t.L = {}));
})(this, function (t) {
  "use strict";
  function h(t) {
    for (var i, e, n = 1, o = arguments.length; n < o; n++)
      for (i in (e = arguments[n])) t[i] = e[i];
    return t;
  }
  var s =
    Object.create ||
    function (t) {
      return (i.prototype = t), new i();
    };
  function i() {}
  function _(t, i) {
    var e = Array.prototype.slice;
    if (t.bind) return t.bind.apply(t, e.call(arguments, 1));
    var n = e.call(arguments, 2);
    return function () {
      return t.apply(i, n.length ? n.concat(e.call(arguments)) : arguments);
    };
  }
  var e = 0;
  function m(t) {
    return (t._leaflet_id = t._leaflet_id || ++e), t._leaflet_id;
  }
  function n(t, i, e) {
    var n,
      o,
      s = function () {
        (n = !1), o && (r.apply(e, o), (o = !1));
      },
      r = function () {
        n
          ? (o = arguments)
          : (t.apply(e, arguments), setTimeout(s, i), (n = !0));
      };
    return r;
  }
  function o(t, i, e) {
    var n = i[1],
      o = i[0],
      i = n - o;
    return t === n && e ? t : ((((t - o) % i) + i) % i) + o;
  }
  function a() {
    return !1;
  }
  function r(t, i) {
    i = Math.pow(10, void 0 === i ? 6 : i);
    return Math.round(t * i) / i;
  }
  function u(t) {
    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
  }
  function l(t) {
    return u(t).split(/\s+/);
  }
  function c(t, i) {
    for (var e in (Object.prototype.hasOwnProperty.call(t, "options") ||
      (t.options = t.options ? s(t.options) : {}),
    i))
      t.options[e] = i[e];
    return t.options;
  }
  function d(t, i, e) {
    var n,
      o = [];
    for (n in t)
      o.push(
        encodeURIComponent(e ? n.toUpperCase() : n) +
          "=" +
          encodeURIComponent(t[n])
      );
    return (i && -1 !== i.indexOf("?") ? "&" : "?") + o.join("&");
  }
  var p = /\{ *([\w_ -]+) *\}/g;
  function f(t, e) {
    return t.replace(p, function (t, i) {
      i = e[i];
      if (void 0 === i) throw new Error("No value provided for variable " + t);
      return (i = "function" == typeof i ? i(e) : i);
    });
  }
  var g =
    Array.isArray ||
    function (t) {
      return "[object Array]" === Object.prototype.toString.call(t);
    };
  function v(t, i) {
    for (var e = 0; e < t.length; e++) if (t[e] === i) return e;
    return -1;
  }
  var y = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
  function x(t) {
    return window["webkit" + t] || window["moz" + t] || window["ms" + t];
  }
  var w = 0;
  function P(t) {
    var i = +new Date(),
      e = Math.max(0, 16 - (i - w));
    return (w = i + e), window.setTimeout(t, e);
  }
  var b = window.requestAnimationFrame || x("RequestAnimationFrame") || P,
    T =
      window.cancelAnimationFrame ||
      x("CancelAnimationFrame") ||
      x("CancelRequestAnimationFrame") ||
      function (t) {
        window.clearTimeout(t);
      };
  function z(t, i, e) {
    if (!e || b !== P) return b.call(window, _(t, i));
    t.call(i);
  }
  function M(t) {
    t && T.call(window, t);
  }
  var C = {
    extend: h,
    create: s,
    bind: _,
    lastId: e,
    stamp: m,
    throttle: n,
    wrapNum: o,
    falseFn: a,
    formatNum: r,
    trim: u,
    splitWords: l,
    setOptions: c,
    getParamString: d,
    template: f,
    isArray: g,
    indexOf: v,
    emptyImageUrl: y,
    requestFn: b,
    cancelFn: T,
    requestAnimFrame: z,
    cancelAnimFrame: M,
  };
  function S() {}
  (S.extend = function (t) {
    function i() {
      this.initialize && this.initialize.apply(this, arguments),
        this.callInitHooks();
    }
    var e,
      n = (i.__super__ = this.prototype),
      o = s(n);
    for (e in (((o.constructor = i).prototype = o), this))
      Object.prototype.hasOwnProperty.call(this, e) &&
        "prototype" !== e &&
        "__super__" !== e &&
        (i[e] = this[e]);
    return (
      t.statics && (h(i, t.statics), delete t.statics),
      t.includes &&
        ((function (t) {
          if ("undefined" != typeof L && L && L.Mixin) {
            t = g(t) ? t : [t];
            for (var i = 0; i < t.length; i++)
              t[i] === L.Mixin.Events &&
                console.warn(
                  "Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",
                  new Error().stack
                );
          }
        })(t.includes),
        h.apply(null, [o].concat(t.includes)),
        delete t.includes),
      o.options && (t.options = h(s(o.options), t.options)),
      h(o, t),
      (o._initHooks = []),
      (o.callInitHooks = function () {
        if (!this._initHooksCalled) {
          n.callInitHooks && n.callInitHooks.call(this),
            (this._initHooksCalled = !0);
          for (var t = 0, i = o._initHooks.length; t < i; t++)
            o._initHooks[t].call(this);
        }
      }),
      i
    );
  }),
    (S.include = function (t) {
      return h(this.prototype, t), this;
    }),
    (S.mergeOptions = function (t) {
      return h(this.prototype.options, t), this;
    }),
    (S.addInitHook = function (t) {
      var i = Array.prototype.slice.call(arguments, 1),
        e =
          "function" == typeof t
            ? t
            : function () {
                this[t].apply(this, i);
              };
      return (
        (this.prototype._initHooks = this.prototype._initHooks || []),
        this.prototype._initHooks.push(e),
        this
      );
    });
  var Z = {
    on: function (t, i, e) {
      if ("object" == typeof t) for (var n in t) this._on(n, t[n], i);
      else
        for (var o = 0, s = (t = l(t)).length; o < s; o++) this._on(t[o], i, e);
      return this;
    },
    off: function (t, i, e) {
      if (t)
        if ("object" == typeof t) for (var n in t) this._off(n, t[n], i);
        else
          for (var o = 0, s = (t = l(t)).length; o < s; o++)
            this._off(t[o], i, e);
      else delete this._events;
      return this;
    },
    _on: function (t, i, e) {
      this._events = this._events || {};
      var n = this._events[t];
      n || ((n = []), (this._events[t] = n));
      for (
        var t = { fn: i, ctx: (e = e === this ? void 0 : e) },
          o = n,
          s = 0,
          r = o.length;
        s < r;
        s++
      )
        if (o[s].fn === i && o[s].ctx === e) return;
      o.push(t);
    },
    _off: function (t, i, e) {
      var n, o, s;
      if (this._events && (n = this._events[t]))
        if (i) {
          if ((e === this && (e = void 0), n))
            for (o = 0, s = n.length; o < s; o++) {
              var r = n[o];
              if (r.ctx === e && r.fn === i)
                return (
                  (r.fn = a),
                  this._firingCount && (this._events[t] = n = n.slice()),
                  void n.splice(o, 1)
                );
            }
        } else {
          for (o = 0, s = n.length; o < s; o++) n[o].fn = a;
          delete this._events[t];
        }
    },
    fire: function (t, i, e) {
      if (!this.listens(t, e)) return this;
      var n = h({}, i, {
        type: t,
        target: this,
        sourceTarget: (i && i.sourceTarget) || this,
      });
      if (this._events) {
        var o = this._events[t];
        if (o) {
          this._firingCount = this._firingCount + 1 || 1;
          for (var s = 0, r = o.length; s < r; s++) {
            var a = o[s];
            a.fn.call(a.ctx || this, n);
          }
          this._firingCount--;
        }
      }
      return e && this._propagateEvent(n), this;
    },
    listens: function (t, i) {
      var e = this._events && this._events[t];
      if (e && e.length) return !0;
      if (i)
        for (var n in this._eventParents)
          if (this._eventParents[n].listens(t, i)) return !0;
      return !1;
    },
    once: function (t, i, e) {
      if ("object" == typeof t) {
        for (var n in t) this.once(n, t[n], i);
        return this;
      }
      var o = _(function () {
        this.off(t, i, e).off(t, o, e);
      }, this);
      return this.on(t, i, e).on(t, o, e);
    },
    addEventParent: function (t) {
      return (
        (this._eventParents = this._eventParents || {}),
        (this._eventParents[m(t)] = t),
        this
      );
    },
    removeEventParent: function (t) {
      return this._eventParents && delete this._eventParents[m(t)], this;
    },
    _propagateEvent: function (t) {
      for (var i in this._eventParents)
        this._eventParents[i].fire(
          t.type,
          h({ layer: t.target, propagatedFrom: t.target }, t),
          !0
        );
    },
  };
  (Z.addEventListener = Z.on),
    (Z.removeEventListener = Z.clearAllEventListeners = Z.off),
    (Z.addOneTimeEventListener = Z.once),
    (Z.fireEvent = Z.fire),
    (Z.hasEventListeners = Z.listens);
  var E = S.extend(Z);
  function k(t, i, e) {
    (this.x = e ? Math.round(t) : t), (this.y = e ? Math.round(i) : i);
  }
  var B =
    Math.trunc ||
    function (t) {
      return 0 < t ? Math.floor(t) : Math.ceil(t);
    };
  function A(t, i, e) {
    return t instanceof k
      ? t
      : g(t)
      ? new k(t[0], t[1])
      : null == t
      ? t
      : "object" == typeof t && "x" in t && "y" in t
      ? new k(t.x, t.y)
      : new k(t, i, e);
  }
  function I(t, i) {
    if (t)
      for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++)
        this.extend(e[n]);
  }
  function O(t, i) {
    return !t || t instanceof I ? t : new I(t, i);
  }
  function R(t, i) {
    if (t)
      for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++)
        this.extend(e[n]);
  }
  function N(t, i) {
    return t instanceof R ? t : new R(t, i);
  }
  function D(t, i, e) {
    if (isNaN(t) || isNaN(i))
      throw new Error("Invalid LatLng object: (" + t + ", " + i + ")");
    (this.lat = +t), (this.lng = +i), void 0 !== e && (this.alt = +e);
  }
  function j(t, i, e) {
    return t instanceof D
      ? t
      : g(t) && "object" != typeof t[0]
      ? 3 === t.length
        ? new D(t[0], t[1], t[2])
        : 2 === t.length
        ? new D(t[0], t[1])
        : null
      : null == t
      ? t
      : "object" == typeof t && "lat" in t
      ? new D(t.lat, "lng" in t ? t.lng : t.lon, t.alt)
      : void 0 === i
      ? null
      : new D(t, i, e);
  }
  (k.prototype = {
    clone: function () {
      return new k(this.x, this.y);
    },
    add: function (t) {
      return this.clone()._add(A(t));
    },
    _add: function (t) {
      return (this.x += t.x), (this.y += t.y), this;
    },
    subtract: function (t) {
      return this.clone()._subtract(A(t));
    },
    _subtract: function (t) {
      return (this.x -= t.x), (this.y -= t.y), this;
    },
    divideBy: function (t) {
      return this.clone()._divideBy(t);
    },
    _divideBy: function (t) {
      return (this.x /= t), (this.y /= t), this;
    },
    multiplyBy: function (t) {
      return this.clone()._multiplyBy(t);
    },
    _multiplyBy: function (t) {
      return (this.x *= t), (this.y *= t), this;
    },
    scaleBy: function (t) {
      return new k(this.x * t.x, this.y * t.y);
    },
    unscaleBy: function (t) {
      return new k(this.x / t.x, this.y / t.y);
    },
    round: function () {
      return this.clone()._round();
    },
    _round: function () {
      return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
    },
    floor: function () {
      return this.clone()._floor();
    },
    _floor: function () {
      return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
    },
    ceil: function () {
      return this.clone()._ceil();
    },
    _ceil: function () {
      return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
    },
    trunc: function () {
      return this.clone()._trunc();
    },
    _trunc: function () {
      return (this.x = B(this.x)), (this.y = B(this.y)), this;
    },
    distanceTo: function (t) {
      var i = (t = A(t)).x - this.x,
        t = t.y - this.y;
      return Math.sqrt(i * i + t * t);
    },
    equals: function (t) {
      return (t = A(t)).x === this.x && t.y === this.y;
    },
    contains: function (t) {
      return (
        (t = A(t)),
        Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
      );
    },
    toString: function () {
      return "Point(" + r(this.x) + ", " + r(this.y) + ")";
    },
  }),
    (I.prototype = {
      extend: function (t) {
        return (
          (t = A(t)),
          this.min || this.max
            ? ((this.min.x = Math.min(t.x, this.min.x)),
              (this.max.x = Math.max(t.x, this.max.x)),
              (this.min.y = Math.min(t.y, this.min.y)),
              (this.max.y = Math.max(t.y, this.max.y)))
            : ((this.min = t.clone()), (this.max = t.clone())),
          this
        );
      },
      getCenter: function (t) {
        return new k(
          (this.min.x + this.max.x) / 2,
          (this.min.y + this.max.y) / 2,
          t
        );
      },
      getBottomLeft: function () {
        return new k(this.min.x, this.max.y);
      },
      getTopRight: function () {
        return new k(this.max.x, this.min.y);
      },
      getTopLeft: function () {
        return this.min;
      },
      getBottomRight: function () {
        return this.max;
      },
      getSize: function () {
        return this.max.subtract(this.min);
      },
      contains: function (t) {
        var i, e;
        return (
          (t = ("number" == typeof t[0] || t instanceof k ? A : O)(
            t
          )) instanceof I
            ? ((i = t.min), (e = t.max))
            : (i = e = t),
          i.x >= this.min.x &&
            e.x <= this.max.x &&
            i.y >= this.min.y &&
            e.y <= this.max.y
        );
      },
      intersects: function (t) {
        t = O(t);
        var i = this.min,
          e = this.max,
          n = t.min,
          o = t.max,
          t = o.x >= i.x && n.x <= e.x,
          e = o.y >= i.y && n.y <= e.y;
        return t && e;
      },
      overlaps: function (t) {
        t = O(t);
        var i = this.min,
          e = this.max,
          n = t.min,
          o = t.max,
          t = o.x > i.x && n.x < e.x,
          e = o.y > i.y && n.y < e.y;
        return t && e;
      },
      isValid: function () {
        return !(!this.min || !this.max);
      },
    }),
    (R.prototype = {
      extend: function (t) {
        var i,
          e,
          n = this._southWest,
          o = this._northEast;
        if (t instanceof D) e = i = t;
        else {
          if (!(t instanceof R)) return t ? this.extend(j(t) || N(t)) : this;
          if (((i = t._southWest), (e = t._northEast), !i || !e)) return this;
        }
        return (
          n || o
            ? ((n.lat = Math.min(i.lat, n.lat)),
              (n.lng = Math.min(i.lng, n.lng)),
              (o.lat = Math.max(e.lat, o.lat)),
              (o.lng = Math.max(e.lng, o.lng)))
            : ((this._southWest = new D(i.lat, i.lng)),
              (this._northEast = new D(e.lat, e.lng))),
          this
        );
      },
      pad: function (t) {
        var i = this._southWest,
          e = this._northEast,
          n = Math.abs(i.lat - e.lat) * t,
          t = Math.abs(i.lng - e.lng) * t;
        return new R(new D(i.lat - n, i.lng - t), new D(e.lat + n, e.lng + t));
      },
      getCenter: function () {
        return new D(
          (this._southWest.lat + this._northEast.lat) / 2,
          (this._southWest.lng + this._northEast.lng) / 2
        );
      },
      getSouthWest: function () {
        return this._southWest;
      },
      getNorthEast: function () {
        return this._northEast;
      },
      getNorthWest: function () {
        return new D(this.getNorth(), this.getWest());
      },
      getSouthEast: function () {
        return new D(this.getSouth(), this.getEast());
      },
      getWest: function () {
        return this._southWest.lng;
      },
      getSouth: function () {
        return this._southWest.lat;
      },
      getEast: function () {
        return this._northEast.lng;
      },
      getNorth: function () {
        return this._northEast.lat;
      },
      contains: function (t) {
        t = ("number" == typeof t[0] || t instanceof D || "lat" in t ? j : N)(
          t
        );
        var i,
          e,
          n = this._southWest,
          o = this._northEast;
        return (
          t instanceof R
            ? ((i = t.getSouthWest()), (e = t.getNorthEast()))
            : (i = e = t),
          i.lat >= n.lat && e.lat <= o.lat && i.lng >= n.lng && e.lng <= o.lng
        );
      },
      intersects: function (t) {
        t = N(t);
        var i = this._southWest,
          e = this._northEast,
          n = t.getSouthWest(),
          o = t.getNorthEast(),
          t = o.lat >= i.lat && n.lat <= e.lat,
          e = o.lng >= i.lng && n.lng <= e.lng;
        return t && e;
      },
      overlaps: function (t) {
        t = N(t);
        var i = this._southWest,
          e = this._northEast,
          n = t.getSouthWest(),
          o = t.getNorthEast(),
          t = o.lat > i.lat && n.lat < e.lat,
          e = o.lng > i.lng && n.lng < e.lng;
        return t && e;
      },
      toBBoxString: function () {
        return [
          this.getWest(),
          this.getSouth(),
          this.getEast(),
          this.getNorth(),
        ].join(",");
      },
      equals: function (t, i) {
        return (
          !!t &&
          ((t = N(t)),
          this._southWest.equals(t.getSouthWest(), i) &&
            this._northEast.equals(t.getNorthEast(), i))
        );
      },
      isValid: function () {
        return !(!this._southWest || !this._northEast);
      },
    });
  var W = {
      latLngToPoint: function (t, i) {
        (t = this.projection.project(t)), (i = this.scale(i));
        return this.transformation._transform(t, i);
      },
      pointToLatLng: function (t, i) {
        (i = this.scale(i)), (i = this.transformation.untransform(t, i));
        return this.projection.unproject(i);
      },
      project: function (t) {
        return this.projection.project(t);
      },
      unproject: function (t) {
        return this.projection.unproject(t);
      },
      scale: function (t) {
        return 256 * Math.pow(2, t);
      },
      zoom: function (t) {
        return Math.log(t / 256) / Math.LN2;
      },
      getProjectedBounds: function (t) {
        if (this.infinite) return null;
        var i = this.projection.bounds,
          t = this.scale(t);
        return new I(
          this.transformation.transform(i.min, t),
          this.transformation.transform(i.max, t)
        );
      },
      infinite: !(D.prototype = {
        equals: function (t, i) {
          return (
            !!t &&
            ((t = j(t)),
            Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <=
              (void 0 === i ? 1e-9 : i))
          );
        },
        toString: function (t) {
          return "LatLng(" + r(this.lat, t) + ", " + r(this.lng, t) + ")";
        },
        distanceTo: function (t) {
          return H.distance(this, j(t));
        },
        wrap: function () {
          return H.wrapLatLng(this);
        },
        toBounds: function (t) {
          var i = (180 * t) / 40075017,
            t = i / Math.cos((Math.PI / 180) * this.lat);
          return N([this.lat - i, this.lng - t], [this.lat + i, this.lng + t]);
        },
        clone: function () {
          return new D(this.lat, this.lng, this.alt);
        },
      }),
      wrapLatLng: function (t) {
        var i = this.wrapLng ? o(t.lng, this.wrapLng, !0) : t.lng;
        return new D(
          this.wrapLat ? o(t.lat, this.wrapLat, !0) : t.lat,
          i,
          t.alt
        );
      },
      wrapLatLngBounds: function (t) {
        var i = t.getCenter(),
          e = this.wrapLatLng(i),
          n = i.lat - e.lat,
          i = i.lng - e.lng;
        if (0 == n && 0 == i) return t;
        (e = t.getSouthWest()), (t = t.getNorthEast());
        return new R(new D(e.lat - n, e.lng - i), new D(t.lat - n, t.lng - i));
      },
    },
    H = h({}, W, {
      wrapLng: [-180, 180],
      R: 6371e3,
      distance: function (t, i) {
        var e = Math.PI / 180,
          n = t.lat * e,
          o = i.lat * e,
          s = Math.sin(((i.lat - t.lat) * e) / 2),
          e = Math.sin(((i.lng - t.lng) * e) / 2),
          e = s * s + Math.cos(n) * Math.cos(o) * e * e,
          e = 2 * Math.atan2(Math.sqrt(e), Math.sqrt(1 - e));
        return this.R * e;
      },
    }),
    F = 6378137,
    U = {
      R: F,
      MAX_LATITUDE: 85.0511287798,
      project: function (t) {
        var i = Math.PI / 180,
          e = this.MAX_LATITUDE,
          e = Math.max(Math.min(e, t.lat), -e),
          e = Math.sin(e * i);
        return new k(
          this.R * t.lng * i,
          (this.R * Math.log((1 + e) / (1 - e))) / 2
        );
      },
      unproject: function (t) {
        var i = 180 / Math.PI;
        return new D(
          (2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * i,
          (t.x * i) / this.R
        );
      },
      bounds: new I([-(gt = F * Math.PI), -gt], [gt, gt]),
    };
  function V(t, i, e, n) {
    if (g(t))
      return (
        (this._a = t[0]),
        (this._b = t[1]),
        (this._c = t[2]),
        void (this._d = t[3])
      );
    (this._a = t), (this._b = i), (this._c = e), (this._d = n);
  }
  function q(t, i, e, n) {
    return new V(t, i, e, n);
  }
  V.prototype = {
    transform: function (t, i) {
      return this._transform(t.clone(), i);
    },
    _transform: function (t, i) {
      return (
        (i = i || 1),
        (t.x = i * (this._a * t.x + this._b)),
        (t.y = i * (this._c * t.y + this._d)),
        t
      );
    },
    untransform: function (t, i) {
      return (
        (i = i || 1),
        new k((t.x / i - this._b) / this._a, (t.y / i - this._d) / this._c)
      );
    },
  };
  var G = h({}, H, {
      code: "EPSG:3857",
      projection: U,
      transformation: q((vt = 0.5 / (Math.PI * U.R)), 0.5, -vt, 0.5),
    }),
    K = h({}, G, { code: "EPSG:900913" });
  function Y(t) {
    return document.createElementNS("http://www.w3.org/2000/svg", t);
  }
  function X(t, i) {
    for (var e, n, o, s, r = "", a = 0, h = t.length; a < h; a++) {
      for (e = 0, n = (o = t[a]).length; e < n; e++)
        r += (e ? "L" : "M") + (s = o[e]).x + " " + s.y;
      r += i ? (Tt ? "z" : "x") : "";
    }
    return r || "M0 0";
  }
  var J = document.documentElement.style,
    $ = "ActiveXObject" in window,
    Q = $ && !document.addEventListener,
    tt = "msLaunchUri" in navigator && !("documentMode" in document),
    it = Mt("webkit"),
    et = Mt("android"),
    nt = Mt("android 2") || Mt("android 3"),
    ot = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
    st = et && Mt("Google") && ot < 537 && !("AudioNode" in window),
    rt = !!window.opera,
    at = !tt && Mt("chrome"),
    ht = Mt("gecko") && !it && !rt && !$,
    ut = !at && Mt("safari"),
    lt = Mt("phantom"),
    ct = "OTransition" in J,
    _t = 0 === navigator.platform.indexOf("Win"),
    dt = $ && "transition" in J,
    pt =
      "WebKitCSSMatrix" in window &&
      "m11" in new window.WebKitCSSMatrix() &&
      !nt,
    mt = "MozPerspective" in J,
    ft = !window.L_DISABLE_3D && (dt || pt || mt) && !ct && !lt,
    F = "undefined" != typeof orientation || Mt("mobile"),
    gt = F && it,
    vt = F && pt,
    ot = !window.PointerEvent && window.MSPointerEvent,
    yt = !(!window.PointerEvent && !ot),
    xt =
      !window.L_NO_TOUCH &&
      (yt ||
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
    wt = F && rt,
    J = F && ht,
    Pt =
      1 <
      (window.devicePixelRatio ||
        window.screen.deviceXDPI / window.screen.logicalXDPI),
    Lt = (function () {
      var t = !1;
      try {
        var i = Object.defineProperty({}, "passive", {
          get: function () {
            t = !0;
          },
        });
        window.addEventListener("testPassiveEventSupport", a, i),
          window.removeEventListener("testPassiveEventSupport", a, i);
      } catch (t) {}
      return t;
    })(),
    bt = !!document.createElement("canvas").getContext,
    Tt = !(!document.createElementNS || !Y("svg").createSVGRect),
    zt =
      !Tt &&
      (function () {
        try {
          var t = document.createElement("div");
          t.innerHTML = '<v:shape adj="1"/>';
          t = t.firstChild;
          return (
            (t.style.behavior = "url(#default#VML)"),
            t && "object" == typeof t.adj
          );
        } catch (t) {
          return !1;
        }
      })();
  function Mt(t) {
    return 0 <= navigator.userAgent.toLowerCase().indexOf(t);
  }
  var rt = {
      ie: $,
      ielt9: Q,
      edge: tt,
      webkit: it,
      android: et,
      android23: nt,
      androidStock: st,
      opera: rt,
      chrome: at,
      gecko: ht,
      safari: ut,
      phantom: lt,
      opera12: ct,
      win: _t,
      ie3d: dt,
      webkit3d: pt,
      gecko3d: mt,
      any3d: ft,
      mobile: F,
      mobileWebkit: gt,
      mobileWebkit3d: vt,
      msPointer: ot,
      pointer: yt,
      touch: xt,
      mobileOpera: wt,
      mobileGecko: J,
      retina: Pt,
      passiveEvents: Lt,
      canvas: bt,
      svg: Tt,
      vml: zt,
    },
    Ct = ot ? "MSPointerDown" : "pointerdown",
    St = ot ? "MSPointerMove" : "pointermove",
    Zt = ot ? "MSPointerUp" : "pointerup",
    Et = ot ? "MSPointerCancel" : "pointercancel",
    kt = {},
    Bt = !1;
  function At(t, i, e, n) {
    function o(t) {
      Nt(t, s);
    }
    var s, r, a, h, u, l;
    function c(t) {
      (t.pointerType === (t.MSPOINTER_TYPE_MOUSE || "mouse") &&
        0 === t.buttons) ||
        Nt(t, r);
    }
    return (
      "touchstart" === i
        ? ((a = t),
          (h = e),
          (u = n),
          (l = _(function (t) {
            t.MSPOINTER_TYPE_TOUCH &&
              t.pointerType === t.MSPOINTER_TYPE_TOUCH &&
              Zi(t),
              Nt(t, h);
          })),
          (a["_leaflet_touchstart" + u] = l),
          a.addEventListener(Ct, l, !1),
          Bt ||
            (document.addEventListener(Ct, It, !0),
            document.addEventListener(St, Ot, !0),
            document.addEventListener(Zt, Rt, !0),
            document.addEventListener(Et, Rt, !0),
            (Bt = !0)))
        : "touchmove" === i
        ? ((r = e),
          ((l = t)["_leaflet_touchmove" + n] = c),
          l.addEventListener(St, c, !1))
        : "touchend" === i &&
          ((s = e),
          ((t = t)["_leaflet_touchend" + n] = o),
          t.addEventListener(Zt, o, !1),
          t.addEventListener(Et, o, !1)),
      this
    );
  }
  function It(t) {
    kt[t.pointerId] = t;
  }
  function Ot(t) {
    kt[t.pointerId] && (kt[t.pointerId] = t);
  }
  function Rt(t) {
    delete kt[t.pointerId];
  }
  function Nt(t, i) {
    for (var e in ((t.touches = []), kt)) t.touches.push(kt[e]);
    (t.changedTouches = [t]), i(t);
  }
  var Dt = ot ? "MSPointerDown" : yt ? "pointerdown" : "touchstart",
    jt = ot ? "MSPointerUp" : yt ? "pointerup" : "touchend",
    Wt = "_leaflet_";
  var Ht,
    Ft,
    Ut,
    Vt,
    qt,
    Gt,
    Kt = li([
      "transform",
      "webkitTransform",
      "OTransform",
      "MozTransform",
      "msTransform",
    ]),
    Yt = li([
      "webkitTransition",
      "transition",
      "OTransition",
      "MozTransition",
      "msTransition",
    ]),
    Xt =
      "webkitTransition" === Yt || "OTransition" === Yt
        ? Yt + "End"
        : "transitionend";
  function Jt(t) {
    return "string" == typeof t ? document.getElementById(t) : t;
  }
  function $t(t, i) {
    var e = t.style[i] || (t.currentStyle && t.currentStyle[i]);
    return "auto" ===
      (e =
        (!e || "auto" === e) && document.defaultView
          ? (t = document.defaultView.getComputedStyle(t, null))
            ? t[i]
            : null
          : e)
      ? null
      : e;
  }
  function Qt(t, i, e) {
    t = document.createElement(t);
    return (t.className = i || ""), e && e.appendChild(t), t;
  }
  function ti(t) {
    var i = t.parentNode;
    i && i.removeChild(t);
  }
  function ii(t) {
    for (; t.firstChild; ) t.removeChild(t.firstChild);
  }
  function ei(t) {
    var i = t.parentNode;
    i && i.lastChild !== t && i.appendChild(t);
  }
  function ni(t) {
    var i = t.parentNode;
    i && i.firstChild !== t && i.insertBefore(t, i.firstChild);
  }
  function oi(t, i) {
    if (void 0 !== t.classList) return t.classList.contains(i);
    t = hi(t);
    return 0 < t.length && new RegExp("(^|\\s)" + i + "(\\s|$)").test(t);
  }
  function si(t, i) {
    var e;
    if (void 0 !== t.classList)
      for (var n = l(i), o = 0, s = n.length; o < s; o++) t.classList.add(n[o]);
    else oi(t, i) || ai(t, ((e = hi(t)) ? e + " " : "") + i);
  }
  function ri(t, i) {
    void 0 !== t.classList
      ? t.classList.remove(i)
      : ai(t, u((" " + hi(t) + " ").replace(" " + i + " ", " ")));
  }
  function ai(t, i) {
    void 0 === t.className.baseVal
      ? (t.className = i)
      : (t.className.baseVal = i);
  }
  function hi(t) {
    return void 0 ===
      (t = t.correspondingElement ? t.correspondingElement : t).className
        .baseVal
      ? t.className
      : t.className.baseVal;
  }
  function ui(t, i) {
    "opacity" in t.style
      ? (t.style.opacity = i)
      : "filter" in t.style &&
        (function (t, i) {
          var e = !1,
            n = "DXImageTransform.Microsoft.Alpha";
          try {
            e = t.filters.item(n);
          } catch (t) {
            if (1 === i) return;
          }
          (i = Math.round(100 * i)),
            e
              ? ((e.Enabled = 100 !== i), (e.Opacity = i))
              : (t.style.filter += " progid:" + n + "(opacity=" + i + ")");
        })(t, i);
  }
  function li(t) {
    for (var i = document.documentElement.style, e = 0; e < t.length; e++)
      if (t[e] in i) return t[e];
    return !1;
  }
  function ci(t, i, e) {
    i = i || new k(0, 0);
    t.style[Kt] =
      (dt
        ? "translate(" + i.x + "px," + i.y + "px)"
        : "translate3d(" + i.x + "px," + i.y + "px,0)") +
      (e ? " scale(" + e + ")" : "");
  }
  function _i(t, i) {
    (t._leaflet_pos = i),
      ft ? ci(t, i) : ((t.style.left = i.x + "px"), (t.style.top = i.y + "px"));
  }
  function di(t) {
    return t._leaflet_pos || new k(0, 0);
  }
  function pi() {
    xi(window, "dragstart", Zi);
  }
  function mi() {
    Pi(window, "dragstart", Zi);
  }
  function fi(t) {
    for (; -1 === t.tabIndex; ) t = t.parentNode;
    t.style &&
      (gi(),
      (Gt = (qt = t).style.outline),
      (t.style.outline = "none"),
      xi(window, "keydown", gi));
  }
  function gi() {
    qt &&
      ((qt.style.outline = Gt), (Gt = qt = void 0), Pi(window, "keydown", gi));
  }
  function vi(t) {
    for (
      ;
      (t = t.parentNode),
        !((t.offsetWidth && t.offsetHeight) || t === document.body);

    );
    return t;
  }
  function yi(t) {
    var i = t.getBoundingClientRect();
    return {
      x: i.width / t.offsetWidth || 1,
      y: i.height / t.offsetHeight || 1,
      boundingClientRect: i,
    };
  }
  Vt =
    "onselectstart" in document
      ? ((Ut = function () {
          xi(window, "selectstart", Zi);
        }),
        function () {
          Pi(window, "selectstart", Zi);
        })
      : ((Ft = li([
          "userSelect",
          "WebkitUserSelect",
          "OUserSelect",
          "MozUserSelect",
          "msUserSelect",
        ])),
        (Ut = function () {
          var t;
          Ft &&
            ((t = document.documentElement.style),
            (Ht = t[Ft]),
            (t[Ft] = "none"));
        }),
        function () {
          Ft && ((document.documentElement.style[Ft] = Ht), (Ht = void 0));
        });
  lt = {
    TRANSFORM: Kt,
    TRANSITION: Yt,
    TRANSITION_END: Xt,
    get: Jt,
    getStyle: $t,
    create: Qt,
    remove: ti,
    empty: ii,
    toFront: ei,
    toBack: ni,
    hasClass: oi,
    addClass: si,
    removeClass: ri,
    setClass: ai,
    getClass: hi,
    setOpacity: ui,
    testProp: li,
    setTransform: ci,
    setPosition: _i,
    getPosition: di,
    disableTextSelection: Ut,
    enableTextSelection: Vt,
    disableImageDrag: pi,
    enableImageDrag: mi,
    preventOutline: fi,
    restoreOutline: gi,
    getSizedParentNode: vi,
    getScale: yi,
  };
  function xi(t, i, e, n) {
    if ("object" == typeof i) for (var o in i) Ti(t, o, i[o], e);
    else for (var s = 0, r = (i = l(i)).length; s < r; s++) Ti(t, i[s], e, n);
    return this;
  }
  var wi = "_leaflet_events";
  function Pi(t, i, e, n) {
    if ("object" == typeof i) for (var o in i) zi(t, o, i[o], e);
    else if (i)
      for (var s = 0, r = (i = l(i)).length; s < r; s++) zi(t, i[s], e, n);
    else {
      for (var a in t[wi]) zi(t, a, t[wi][a]);
      delete t[wi];
    }
    return this;
  }
  function Li() {
    return yt && !tt && !ut;
  }
  var bi = {
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    wheel: !("onwheel" in window) && "mousewheel",
  };
  function Ti(i, t, e, n) {
    var o = t + m(e) + (n ? "_" + m(n) : "");
    if (i[wi] && i[wi][o]) return this;
    var s,
      r,
      a,
      h,
      u,
      l,
      c = function (t) {
        return e.call(n || i, t || window.event);
      },
      _ = c;
    function d(t) {
      if (yt) {
        if (!t.isPrimary) return;
        if ("mouse" === t.pointerType) return;
      } else if (1 < t.touches.length) return;
      var i = Date.now(),
        e = i - (h || i);
      (u = t.touches ? t.touches[0] : t), (l = 0 < e && e <= 250), (h = i);
    }
    function p(t) {
      if (l && !u.cancelBubble) {
        if (yt) {
          if ("mouse" === t.pointerType) return;
          var i,
            e,
            n = {};
          for (e in u) (i = u[e]), (n[e] = i && i.bind ? i.bind(u) : i);
          u = n;
        }
        (u.type = "dblclick"), (u.button = 0), r(u), (h = null);
      }
    }
    yt && 0 === t.indexOf("touch")
      ? At(i, t, c, o)
      : xt && "dblclick" === t && !Li()
      ? ((r = c),
        (l = !1),
        ((s = i)[Wt + Dt + (a = o)] = d),
        (s[Wt + jt + a] = p),
        (s[Wt + "dblclick" + a] = r),
        s.addEventListener(Dt, d, !!Lt && { passive: !1 }),
        s.addEventListener(jt, p, !!Lt && { passive: !1 }),
        s.addEventListener("dblclick", r, !1))
      : "addEventListener" in i
      ? "touchstart" === t ||
        "touchmove" === t ||
        "wheel" === t ||
        "mousewheel" === t
        ? i.addEventListener(bi[t] || t, c, !!Lt && { passive: !1 })
        : "mouseenter" === t || "mouseleave" === t
        ? ((c = function (t) {
            (t = t || window.event), Ni(i, t) && _(t);
          }),
          i.addEventListener(bi[t], c, !1))
        : i.addEventListener(t, _, !1)
      : "attachEvent" in i && i.attachEvent("on" + t, c),
      (i[wi] = i[wi] || {}),
      (i[wi][o] = c);
  }
  function zi(t, i, e, n) {
    var o,
      s,
      r,
      a = i + m(e) + (n ? "_" + m(n) : ""),
      e = t[wi] && t[wi][a];
    if (!e) return this;
    yt && 0 === i.indexOf("touch")
      ? ((r = (o = t)["_leaflet_" + (s = i) + (r = a)]),
        "touchstart" === s
          ? o.removeEventListener(Ct, r, !1)
          : "touchmove" === s
          ? o.removeEventListener(St, r, !1)
          : "touchend" === s &&
            (o.removeEventListener(Zt, r, !1),
            o.removeEventListener(Et, r, !1)))
      : xt && "dblclick" === i && !Li()
      ? ((o = (n = t)[Wt + Dt + (s = a)]),
        (r = n[Wt + jt + s]),
        (s = n[Wt + "dblclick" + s]),
        n.removeEventListener(Dt, o, !!Lt && { passive: !1 }),
        n.removeEventListener(jt, r, !!Lt && { passive: !1 }),
        n.removeEventListener("dblclick", s, !1))
      : "removeEventListener" in t
      ? t.removeEventListener(bi[i] || i, e, !1)
      : "detachEvent" in t && t.detachEvent("on" + i, e),
      (t[wi][a] = null);
  }
  function Mi(t) {
    return (
      t.stopPropagation
        ? t.stopPropagation()
        : t.originalEvent
        ? (t.originalEvent._stopped = !0)
        : (t.cancelBubble = !0),
      Ri(t),
      this
    );
  }
  function Ci(t) {
    return Ti(t, "wheel", Mi), this;
  }
  function Si(t) {
    return xi(t, "mousedown touchstart dblclick", Mi), Ti(t, "click", Oi), this;
  }
  function Zi(t) {
    return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), this;
  }
  function Ei(t) {
    return Zi(t), Mi(t), this;
  }
  function ki(t, i) {
    if (!i) return new k(t.clientX, t.clientY);
    var e = yi(i),
      n = e.boundingClientRect;
    return new k(
      (t.clientX - n.left) / e.x - i.clientLeft,
      (t.clientY - n.top) / e.y - i.clientTop
    );
  }
  var Bi =
    _t && at ? 2 * window.devicePixelRatio : ht ? window.devicePixelRatio : 1;
  function Ai(t) {
    return tt
      ? t.wheelDeltaY / 2
      : t.deltaY && 0 === t.deltaMode
      ? -t.deltaY / Bi
      : t.deltaY && 1 === t.deltaMode
      ? 20 * -t.deltaY
      : t.deltaY && 2 === t.deltaMode
      ? 60 * -t.deltaY
      : t.deltaX || t.deltaZ
      ? 0
      : t.wheelDelta
      ? (t.wheelDeltaY || t.wheelDelta) / 2
      : t.detail && Math.abs(t.detail) < 32765
      ? 20 * -t.detail
      : t.detail
      ? (t.detail / -32765) * 60
      : 0;
  }
  var Ii = {};
  function Oi(t) {
    Ii[t.type] = !0;
  }
  function Ri(t) {
    var i = Ii[t.type];
    return (Ii[t.type] = !1), i;
  }
  function Ni(t, i) {
    var e = i.relatedTarget;
    if (!e) return !0;
    try {
      for (; e && e !== t; ) e = e.parentNode;
    } catch (t) {
      return !1;
    }
    return e !== t;
  }
  var ct = {
      on: xi,
      off: Pi,
      stopPropagation: Mi,
      disableScrollPropagation: Ci,
      disableClickPropagation: Si,
      preventDefault: Zi,
      stop: Ei,
      getMousePosition: ki,
      getWheelDelta: Ai,
      fakeStop: Oi,
      skipped: Ri,
      isExternalTarget: Ni,
      addListener: xi,
      removeListener: Pi,
    },
    Di = E.extend({
      run: function (t, i, e, n) {
        this.stop(),
          (this._el = t),
          (this._inProgress = !0),
          (this._duration = e || 0.25),
          (this._easeOutPower = 1 / Math.max(n || 0.5, 0.2)),
          (this._startPos = di(t)),
          (this._offset = i.subtract(this._startPos)),
          (this._startTime = +new Date()),
          this.fire("start"),
          this._animate();
      },
      stop: function () {
        this._inProgress && (this._step(!0), this._complete());
      },
      _animate: function () {
        (this._animId = z(this._animate, this)), this._step();
      },
      _step: function (t) {
        var i = +new Date() - this._startTime,
          e = 1e3 * this._duration;
        i < e
          ? this._runFrame(this._easeOut(i / e), t)
          : (this._runFrame(1), this._complete());
      },
      _runFrame: function (t, i) {
        t = this._startPos.add(this._offset.multiplyBy(t));
        i && t._round(), _i(this._el, t), this.fire("step");
      },
      _complete: function () {
        M(this._animId), (this._inProgress = !1), this.fire("end");
      },
      _easeOut: function (t) {
        return 1 - Math.pow(1 - t, this._easeOutPower);
      },
    }),
    ji = E.extend({
      options: {
        crs: G,
        center: void 0,
        zoom: void 0,
        minZoom: void 0,
        maxZoom: void 0,
        layers: [],
        maxBounds: void 0,
        renderer: void 0,
        zoomAnimation: !0,
        zoomAnimationThreshold: 4,
        fadeAnimation: !0,
        markerZoomAnimation: !0,
        transform3DLimit: 8388608,
        zoomSnap: 1,
        zoomDelta: 1,
        trackResize: !0,
      },
      initialize: function (t, i) {
        (i = c(this, i)),
          (this._handlers = []),
          (this._layers = {}),
          (this._zoomBoundLayers = {}),
          (this._sizeChanged = !0),
          this._initContainer(t),
          this._initLayout(),
          (this._onResize = _(this._onResize, this)),
          this._initEvents(),
          i.maxBounds && this.setMaxBounds(i.maxBounds),
          void 0 !== i.zoom && (this._zoom = this._limitZoom(i.zoom)),
          i.center &&
            void 0 !== i.zoom &&
            this.setView(j(i.center), i.zoom, { reset: !0 }),
          this.callInitHooks(),
          (this._zoomAnimated = Yt && ft && !wt && this.options.zoomAnimation),
          this._zoomAnimated &&
            (this._createAnimProxy(),
            xi(this._proxy, Xt, this._catchTransitionEnd, this)),
          this._addLayers(this.options.layers);
      },
      setView: function (t, i, e) {
        if (
          ((i = void 0 === i ? this._zoom : this._limitZoom(i)),
          (t = this._limitCenter(j(t), i, this.options.maxBounds)),
          (e = e || {}),
          this._stop(),
          this._loaded && !e.reset && !0 !== e) &&
          (void 0 !== e.animate &&
            ((e.zoom = h({ animate: e.animate }, e.zoom)),
            (e.pan = h({ animate: e.animate, duration: e.duration }, e.pan))),
          this._zoom !== i
            ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, i, e.zoom)
            : this._tryAnimatedPan(t, e.pan))
        )
          return clearTimeout(this._sizeTimer), this;
        return this._resetView(t, i), this;
      },
      setZoom: function (t, i) {
        return this._loaded
          ? this.setView(this.getCenter(), t, { zoom: i })
          : ((this._zoom = t), this);
      },
      zoomIn: function (t, i) {
        return (
          (t = t || (ft ? this.options.zoomDelta : 1)),
          this.setZoom(this._zoom + t, i)
        );
      },
      zoomOut: function (t, i) {
        return (
          (t = t || (ft ? this.options.zoomDelta : 1)),
          this.setZoom(this._zoom - t, i)
        );
      },
      setZoomAround: function (t, i, e) {
        var n = this.getZoomScale(i),
          o = this.getSize().divideBy(2),
          n = (t instanceof k ? t : this.latLngToContainerPoint(t))
            .subtract(o)
            .multiplyBy(1 - 1 / n),
          n = this.containerPointToLatLng(o.add(n));
        return this.setView(n, i, { zoom: e });
      },
      _getBoundsCenterZoom: function (t, i) {
        (i = i || {}), (t = t.getBounds ? t.getBounds() : N(t));
        var e = A(i.paddingTopLeft || i.padding || [0, 0]),
          n = A(i.paddingBottomRight || i.padding || [0, 0]),
          o = this.getBoundsZoom(t, !1, e.add(n));
        if (
          (o = "number" == typeof i.maxZoom ? Math.min(i.maxZoom, o) : o) ===
          1 / 0
        )
          return { center: t.getCenter(), zoom: o };
        (n = n.subtract(e).divideBy(2)),
          (e = this.project(t.getSouthWest(), o)),
          (t = this.project(t.getNorthEast(), o));
        return {
          center: this.unproject(e.add(t).divideBy(2).add(n), o),
          zoom: o,
        };
      },
      fitBounds: function (t, i) {
        if (!(t = N(t)).isValid()) throw new Error("Bounds are not valid.");
        t = this._getBoundsCenterZoom(t, i);
        return this.setView(t.center, t.zoom, i);
      },
      fitWorld: function (t) {
        return this.fitBounds(
          [
            [-90, -180],
            [90, 180],
          ],
          t
        );
      },
      panTo: function (t, i) {
        return this.setView(t, this._zoom, { pan: i });
      },
      panBy: function (t, i) {
        return (
          (i = i || {}),
          (t = A(t).round()).x || t.y
            ? (!0 === i.animate || this.getSize().contains(t)
                ? (this._panAnim ||
                    ((this._panAnim = new Di()),
                    this._panAnim.on(
                      {
                        step: this._onPanTransitionStep,
                        end: this._onPanTransitionEnd,
                      },
                      this
                    )),
                  i.noMoveStart || this.fire("movestart"),
                  !1 !== i.animate
                    ? (si(this._mapPane, "leaflet-pan-anim"),
                      (e = this._getMapPanePos().subtract(t).round()),
                      this._panAnim.run(
                        this._mapPane,
                        e,
                        i.duration || 0.25,
                        i.easeLinearity
                      ))
                    : (this._rawPanBy(t), this.fire("move").fire("moveend")))
                : this._resetView(
                    this.unproject(this.project(this.getCenter()).add(t)),
                    this.getZoom()
                  ),
              this)
            : this.fire("moveend")
        );
        var e;
      },
      flyTo: function (n, o, t) {
        if (!1 === (t = t || {}).animate || !ft) return this.setView(n, o, t);
        this._stop();
        var s = this.project(this.getCenter()),
          r = this.project(n),
          i = this.getSize(),
          a = this._zoom;
        (n = j(n)), (o = void 0 === o ? a : o);
        var h = Math.max(i.x, i.y),
          e = h * this.getZoomScale(a, o),
          u = r.distanceTo(s) || 1,
          l = 1.42,
          c = l * l;
        function _(t) {
          (t =
            (e * e - h * h + (t ? -1 : 1) * c * c * u * u) /
            (2 * (t ? e : h) * c * u)),
            (t = Math.sqrt(t * t + 1) - t);
          return t < 1e-9 ? -18 : Math.log(t);
        }
        function d(t) {
          return (Math.exp(t) - Math.exp(-t)) / 2;
        }
        function p(t) {
          return (Math.exp(t) + Math.exp(-t)) / 2;
        }
        var m = _(0);
        function f(t) {
          return (h * (p(m) * (d((t = m + l * t)) / p(t)) - d(m))) / c;
        }
        var g = Date.now(),
          v = (_(1) - m) / l,
          y = t.duration ? 1e3 * t.duration : 1e3 * v * 0.8;
        return (
          this._moveStart(!0, t.noMoveStart),
          function t() {
            var i = (Date.now() - g) / y,
              e = ((e = i), (1 - Math.pow(1 - e, 1.5)) * v);
            i <= 1
              ? ((this._flyToFrame = z(t, this)),
                this._move(
                  this.unproject(s.add(r.subtract(s).multiplyBy(f(e) / u)), a),
                  this.getScaleZoom(h / (h * (p(m) / p(m + l * e))), a),
                  { flyTo: !0 }
                ))
              : this._move(n, o)._moveEnd(!0);
          }.call(this),
          this
        );
      },
      flyToBounds: function (t, i) {
        t = this._getBoundsCenterZoom(t, i);
        return this.flyTo(t.center, t.zoom, i);
      },
      setMaxBounds: function (t) {
        return (t = N(t)).isValid()
          ? (this.options.maxBounds &&
              this.off("moveend", this._panInsideMaxBounds),
            (this.options.maxBounds = t),
            this._loaded && this._panInsideMaxBounds(),
            this.on("moveend", this._panInsideMaxBounds))
          : ((this.options.maxBounds = null),
            this.off("moveend", this._panInsideMaxBounds));
      },
      setMinZoom: function (t) {
        var i = this.options.minZoom;
        return (
          (this.options.minZoom = t),
          this._loaded &&
          i !== t &&
          (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom)
            ? this.setZoom(t)
            : this
        );
      },
      setMaxZoom: function (t) {
        var i = this.options.maxZoom;
        return (
          (this.options.maxZoom = t),
          this._loaded &&
          i !== t &&
          (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom)
            ? this.setZoom(t)
            : this
        );
      },
      panInsideBounds: function (t, i) {
        this._enforcingBounds = !0;
        var e = this.getCenter(),
          t = this._limitCenter(e, this._zoom, N(t));
        return (
          e.equals(t) || this.panTo(t, i), (this._enforcingBounds = !1), this
        );
      },
      panInside: function (t, i) {
        var e = A((i = i || {}).paddingTopLeft || i.padding || [0, 0]),
          n = A(i.paddingBottomRight || i.padding || [0, 0]),
          o = this.project(this.getCenter()),
          s = this.project(t),
          t = this.getPixelBounds(),
          e = O([t.min.add(e), t.max.subtract(n)]),
          t = e.getSize();
        return (
          e.contains(s) ||
            ((this._enforcingBounds = !0),
            (n = s.subtract(e.getCenter())),
            (t = e.extend(s).getSize().subtract(t)),
            (o.x += n.x < 0 ? -t.x : t.x),
            (o.y += n.y < 0 ? -t.y : t.y),
            this.panTo(this.unproject(o), i),
            (this._enforcingBounds = !1)),
          this
        );
      },
      invalidateSize: function (t) {
        if (!this._loaded) return this;
        t = h({ animate: !1, pan: !0 }, !0 === t ? { animate: !0 } : t);
        var i = this.getSize();
        (this._sizeChanged = !0), (this._lastCenter = null);
        var e = this.getSize(),
          n = i.divideBy(2).round(),
          o = e.divideBy(2).round(),
          o = n.subtract(o);
        return o.x || o.y
          ? (t.animate && t.pan
              ? this.panBy(o)
              : (t.pan && this._rawPanBy(o),
                this.fire("move"),
                t.debounceMoveend
                  ? (clearTimeout(this._sizeTimer),
                    (this._sizeTimer = setTimeout(
                      _(this.fire, this, "moveend"),
                      200
                    )))
                  : this.fire("moveend")),
            this.fire("resize", { oldSize: i, newSize: e }))
          : this;
      },
      stop: function () {
        return (
          this.setZoom(this._limitZoom(this._zoom)),
          this.options.zoomSnap || this.fire("viewreset"),
          this._stop()
        );
      },
      locate: function (t) {
        if (
          ((t = this._locateOptions = h({ timeout: 1e4, watch: !1 }, t)),
          !("geolocation" in navigator))
        )
          return (
            this._handleGeolocationError({
              code: 0,
              message: "Geolocation not supported.",
            }),
            this
          );
        var i = _(this._handleGeolocationResponse, this),
          e = _(this._handleGeolocationError, this);
        return (
          t.watch
            ? (this._locationWatchId = navigator.geolocation.watchPosition(
                i,
                e,
                t
              ))
            : navigator.geolocation.getCurrentPosition(i, e, t),
          this
        );
      },
      stopLocate: function () {
        return (
          navigator.geolocation &&
            navigator.geolocation.clearWatch &&
            navigator.geolocation.clearWatch(this._locationWatchId),
          this._locateOptions && (this._locateOptions.setView = !1),
          this
        );
      },
      _handleGeolocationError: function (t) {
        var i = t.code,
          t =
            t.message ||
            (1 === i
              ? "permission denied"
              : 2 === i
              ? "position unavailable"
              : "timeout");
        this._locateOptions.setView && !this._loaded && this.fitWorld(),
          this.fire("locationerror", {
            code: i,
            message: "Geolocation error: " + t + ".",
          });
      },
      _handleGeolocationResponse: function (t) {
        var i,
          e = new D(t.coords.latitude, t.coords.longitude),
          n = e.toBounds(2 * t.coords.accuracy),
          o = this._locateOptions;
        o.setView &&
          ((i = this.getBoundsZoom(n)),
          this.setView(e, o.maxZoom ? Math.min(i, o.maxZoom) : i));
        var s,
          r = { latlng: e, bounds: n, timestamp: t.timestamp };
        for (s in t.coords)
          "number" == typeof t.coords[s] && (r[s] = t.coords[s]);
        this.fire("locationfound", r);
      },
      addHandler: function (t, i) {
        if (!i) return this;
        i = this[t] = new i(this);
        return this._handlers.push(i), this.options[t] && i.enable(), this;
      },
      remove: function () {
        if (
          (this._initEvents(!0),
          this.off("moveend", this._panInsideMaxBounds),
          this._containerId !== this._container._leaflet_id)
        )
          throw new Error("Map container is being reused by another instance");
        try {
          delete this._container._leaflet_id, delete this._containerId;
        } catch (t) {
          (this._container._leaflet_id = void 0), (this._containerId = void 0);
        }
        for (var t in (void 0 !== this._locationWatchId && this.stopLocate(),
        this._stop(),
        ti(this._mapPane),
        this._clearControlPos && this._clearControlPos(),
        this._resizeRequest &&
          (M(this._resizeRequest), (this._resizeRequest = null)),
        this._clearHandlers(),
        this._loaded && this.fire("unload"),
        this._layers))
          this._layers[t].remove();
        for (t in this._panes) ti(this._panes[t]);
        return (
          (this._layers = []),
          (this._panes = []),
          delete this._mapPane,
          delete this._renderer,
          this
        );
      },
      createPane: function (t, i) {
        i = Qt(
          "div",
          "leaflet-pane" +
            (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""),
          i || this._mapPane
        );
        return t && (this._panes[t] = i), i;
      },
      getCenter: function () {
        return (
          this._checkIfLoaded(),
          this._lastCenter && !this._moved()
            ? this._lastCenter
            : this.layerPointToLatLng(this._getCenterLayerPoint())
        );
      },
      getZoom: function () {
        return this._zoom;
      },
      getBounds: function () {
        var t = this.getPixelBounds();
        return new R(
          this.unproject(t.getBottomLeft()),
          this.unproject(t.getTopRight())
        );
      },
      getMinZoom: function () {
        return void 0 === this.options.minZoom
          ? this._layersMinZoom || 0
          : this.options.minZoom;
      },
      getMaxZoom: function () {
        return void 0 === this.options.maxZoom
          ? void 0 === this._layersMaxZoom
            ? 1 / 0
            : this._layersMaxZoom
          : this.options.maxZoom;
      },
      getBoundsZoom: function (t, i, e) {
        (t = N(t)), (e = A(e || [0, 0]));
        var n = this.getZoom() || 0,
          o = this.getMinZoom(),
          s = this.getMaxZoom(),
          r = t.getNorthWest(),
          a = t.getSouthEast(),
          t = this.getSize().subtract(e),
          e = O(this.project(a, n), this.project(r, n)).getSize(),
          a = ft ? this.options.zoomSnap : 1,
          r = t.x / e.x,
          e = t.y / e.y,
          e = i ? Math.max(r, e) : Math.min(r, e),
          n = this.getScaleZoom(e, n);
        return (
          a &&
            ((n = Math.round(n / (a / 100)) * (a / 100)),
            (n = i ? Math.ceil(n / a) * a : Math.floor(n / a) * a)),
          Math.max(o, Math.min(s, n))
        );
      },
      getSize: function () {
        return (
          (this._size && !this._sizeChanged) ||
            ((this._size = new k(
              this._container.clientWidth || 0,
              this._container.clientHeight || 0
            )),
            (this._sizeChanged = !1)),
          this._size.clone()
        );
      },
      getPixelBounds: function (t, i) {
        i = this._getTopLeftPoint(t, i);
        return new I(i, i.add(this.getSize()));
      },
      getPixelOrigin: function () {
        return this._checkIfLoaded(), this._pixelOrigin;
      },
      getPixelWorldBounds: function (t) {
        return this.options.crs.getProjectedBounds(
          void 0 === t ? this.getZoom() : t
        );
      },
      getPane: function (t) {
        return "string" == typeof t ? this._panes[t] : t;
      },
      getPanes: function () {
        return this._panes;
      },
      getContainer: function () {
        return this._container;
      },
      getZoomScale: function (t, i) {
        var e = this.options.crs;
        return (i = void 0 === i ? this._zoom : i), e.scale(t) / e.scale(i);
      },
      getScaleZoom: function (t, i) {
        var e = this.options.crs;
        i = void 0 === i ? this._zoom : i;
        i = e.zoom(t * e.scale(i));
        return isNaN(i) ? 1 / 0 : i;
      },
      project: function (t, i) {
        return (
          (i = void 0 === i ? this._zoom : i),
          this.options.crs.latLngToPoint(j(t), i)
        );
      },
      unproject: function (t, i) {
        return (
          (i = void 0 === i ? this._zoom : i),
          this.options.crs.pointToLatLng(A(t), i)
        );
      },
      layerPointToLatLng: function (t) {
        t = A(t).add(this.getPixelOrigin());
        return this.unproject(t);
      },
      latLngToLayerPoint: function (t) {
        return this.project(j(t))._round()._subtract(this.getPixelOrigin());
      },
      wrapLatLng: function (t) {
        return this.options.crs.wrapLatLng(j(t));
      },
      wrapLatLngBounds: function (t) {
        return this.options.crs.wrapLatLngBounds(N(t));
      },
      distance: function (t, i) {
        return this.options.crs.distance(j(t), j(i));
      },
      containerPointToLayerPoint: function (t) {
        return A(t).subtract(this._getMapPanePos());
      },
      layerPointToContainerPoint: function (t) {
        return A(t).add(this._getMapPanePos());
      },
      containerPointToLatLng: function (t) {
        t = this.containerPointToLayerPoint(A(t));
        return this.layerPointToLatLng(t);
      },
      latLngToContainerPoint: function (t) {
        return this.layerPointToContainerPoint(this.latLngToLayerPoint(j(t)));
      },
      mouseEventToContainerPoint: function (t) {
        return ki(t, this._container);
      },
      mouseEventToLayerPoint: function (t) {
        return this.containerPointToLayerPoint(
          this.mouseEventToContainerPoint(t)
        );
      },
      mouseEventToLatLng: function (t) {
        return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
      },
      _initContainer: function (t) {
        t = this._container = Jt(t);
        if (!t) throw new Error("Map container not found.");
        if (t._leaflet_id)
          throw new Error("Map container is already initialized.");
        xi(t, "scroll", this._onScroll, this), (this._containerId = m(t));
      },
      _initLayout: function () {
        var t = this._container;
        (this._fadeAnimated = this.options.fadeAnimation && ft),
          si(
            t,
            "leaflet-container" +
              (xt ? " leaflet-touch" : "") +
              (Pt ? " leaflet-retina" : "") +
              (Q ? " leaflet-oldie" : "") +
              (ut ? " leaflet-safari" : "") +
              (this._fadeAnimated ? " leaflet-fade-anim" : "")
          );
        var i = $t(t, "position");
        "absolute" !== i &&
          "relative" !== i &&
          "fixed" !== i &&
          (t.style.position = "relative"),
          this._initPanes(),
          this._initControlPos && this._initControlPos();
      },
      _initPanes: function () {
        var t = (this._panes = {});
        (this._paneRenderers = {}),
          (this._mapPane = this.createPane("mapPane", this._container)),
          _i(this._mapPane, new k(0, 0)),
          this.createPane("tilePane"),
          this.createPane("overlayPane"),
          this.createPane("shadowPane"),
          this.createPane("markerPane"),
          this.createPane("tooltipPane"),
          this.createPane("popupPane"),
          this.options.markerZoomAnimation ||
            (si(t.markerPane, "leaflet-zoom-hide"),
            si(t.shadowPane, "leaflet-zoom-hide"));
      },
      _resetView: function (t, i) {
        _i(this._mapPane, new k(0, 0));
        var e = !this._loaded;
        (this._loaded = !0),
          (i = this._limitZoom(i)),
          this.fire("viewprereset");
        var n = this._zoom !== i;
        this._moveStart(n, !1)._move(t, i)._moveEnd(n),
          this.fire("viewreset"),
          e && this.fire("load");
      },
      _moveStart: function (t, i) {
        return t && this.fire("zoomstart"), i || this.fire("movestart"), this;
      },
      _move: function (t, i, e) {
        void 0 === i && (i = this._zoom);
        var n = this._zoom !== i;
        return (
          (this._zoom = i),
          (this._lastCenter = t),
          (this._pixelOrigin = this._getNewPixelOrigin(t)),
          (n || (e && e.pinch)) && this.fire("zoom", e),
          this.fire("move", e)
        );
      },
      _moveEnd: function (t) {
        return t && this.fire("zoomend"), this.fire("moveend");
      },
      _stop: function () {
        return M(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
      },
      _rawPanBy: function (t) {
        _i(this._mapPane, this._getMapPanePos().subtract(t));
      },
      _getZoomSpan: function () {
        return this.getMaxZoom() - this.getMinZoom();
      },
      _panInsideMaxBounds: function () {
        this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
      },
      _checkIfLoaded: function () {
        if (!this._loaded) throw new Error("Set map center and zoom first.");
      },
      _initEvents: function (t) {
        this._targets = {};
        var i = t ? Pi : xi;
        i(
          (this._targets[m(this._container)] = this)._container,
          "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",
          this._handleDOMEvent,
          this
        ),
          this.options.trackResize && i(window, "resize", this._onResize, this),
          ft &&
            this.options.transform3DLimit &&
            (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
      },
      _onResize: function () {
        M(this._resizeRequest),
          (this._resizeRequest = z(function () {
            this.invalidateSize({ debounceMoveend: !0 });
          }, this));
      },
      _onScroll: function () {
        (this._container.scrollTop = 0), (this._container.scrollLeft = 0);
      },
      _onMoveEnd: function () {
        var t = this._getMapPanePos();
        Math.max(Math.abs(t.x), Math.abs(t.y)) >=
          this.options.transform3DLimit &&
          this._resetView(this.getCenter(), this.getZoom());
      },
      _findEventTargets: function (t, i) {
        for (
          var e,
            n = [],
            o = "mouseout" === i || "mouseover" === i,
            s = t.target || t.srcElement,
            r = !1;
          s;

        ) {
          if (
            (e = this._targets[m(s)]) &&
            ("click" === i || "preclick" === i) &&
            !t._simulated &&
            this._draggableMoved(e)
          ) {
            r = !0;
            break;
          }
          if (e && e.listens(i, !0)) {
            if (o && !Ni(s, t)) break;
            if ((n.push(e), o)) break;
          }
          if (s === this._container) break;
          s = s.parentNode;
        }
        return (n = !(n.length || r || o) && Ni(s, t) ? [this] : n);
      },
      _handleDOMEvent: function (t) {
        var i;
        this._loaded &&
          !Ri(t) &&
          ("mousedown" === (i = t.type) && fi(t.target || t.srcElement),
          this._fireDOMEvent(t, i));
      },
      _mouseEvents: [
        "click",
        "dblclick",
        "mouseover",
        "mouseout",
        "contextmenu",
      ],
      _fireDOMEvent: function (t, i, e) {
        if (
          ("click" === t.type &&
            (((o = h({}, t)).type = "preclick"),
            this._fireDOMEvent(o, o.type, e)),
          !t._stopped &&
            (e = (e || []).concat(this._findEventTargets(t, i))).length)
        ) {
          var n = e[0];
          "contextmenu" === i && n.listens(i, !0) && Zi(t);
          var o,
            s = { originalEvent: t };
          "keypress" !== t.type &&
            "keydown" !== t.type &&
            "keyup" !== t.type &&
            ((o = n.getLatLng && (!n._radius || n._radius <= 10)),
            (s.containerPoint = o
              ? this.latLngToContainerPoint(n.getLatLng())
              : this.mouseEventToContainerPoint(t)),
            (s.layerPoint = this.containerPointToLayerPoint(s.containerPoint)),
            (s.latlng = o
              ? n.getLatLng()
              : this.layerPointToLatLng(s.layerPoint)));
          for (var r = 0; r < e.length; r++)
            if (
              (e[r].fire(i, s, !0),
              s.originalEvent._stopped ||
                (!1 === e[r].options.bubblingMouseEvents &&
                  -1 !== v(this._mouseEvents, i)))
            )
              return;
        }
      },
      _draggableMoved: function (t) {
        return (
          ((t = t.dragging && t.dragging.enabled() ? t : this).dragging &&
            t.dragging.moved()) ||
          (this.boxZoom && this.boxZoom.moved())
        );
      },
      _clearHandlers: function () {
        for (var t = 0, i = this._handlers.length; t < i; t++)
          this._handlers[t].disable();
      },
      whenReady: function (t, i) {
        return (
          this._loaded
            ? t.call(i || this, { target: this })
            : this.on("load", t, i),
          this
        );
      },
      _getMapPanePos: function () {
        return di(this._mapPane) || new k(0, 0);
      },
      _moved: function () {
        var t = this._getMapPanePos();
        return t && !t.equals([0, 0]);
      },
      _getTopLeftPoint: function (t, i) {
        return (
          t && void 0 !== i
            ? this._getNewPixelOrigin(t, i)
            : this.getPixelOrigin()
        ).subtract(this._getMapPanePos());
      },
      _getNewPixelOrigin: function (t, i) {
        var e = this.getSize()._divideBy(2);
        return this.project(t, i)
          ._subtract(e)
          ._add(this._getMapPanePos())
          ._round();
      },
      _latLngToNewLayerPoint: function (t, i, e) {
        e = this._getNewPixelOrigin(e, i);
        return this.project(t, i)._subtract(e);
      },
      _latLngBoundsToNewLayerBounds: function (t, i, e) {
        e = this._getNewPixelOrigin(e, i);
        return O([
          this.project(t.getSouthWest(), i)._subtract(e),
          this.project(t.getNorthWest(), i)._subtract(e),
          this.project(t.getSouthEast(), i)._subtract(e),
          this.project(t.getNorthEast(), i)._subtract(e),
        ]);
      },
      _getCenterLayerPoint: function () {
        return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
      },
      _getCenterOffset: function (t) {
        return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
      },
      _limitCenter: function (t, i, e) {
        if (!e) return t;
        var n = this.project(t, i),
          o = this.getSize().divideBy(2),
          o = new I(n.subtract(o), n.add(o)),
          e = this._getBoundsOffset(o, e, i);
        return e.round().equals([0, 0]) ? t : this.unproject(n.add(e), i);
      },
      _limitOffset: function (t, i) {
        if (!i) return t;
        var e = this.getPixelBounds(),
          e = new I(e.min.add(t), e.max.add(t));
        return t.add(this._getBoundsOffset(e, i));
      },
      _getBoundsOffset: function (t, i, e) {
        (i = O(
          this.project(i.getNorthEast(), e),
          this.project(i.getSouthWest(), e)
        )),
          (e = i.min.subtract(t.min)),
          (t = i.max.subtract(t.max));
        return new k(this._rebound(e.x, -t.x), this._rebound(e.y, -t.y));
      },
      _rebound: function (t, i) {
        return 0 < t + i
          ? Math.round(t - i) / 2
          : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(i));
      },
      _limitZoom: function (t) {
        var i = this.getMinZoom(),
          e = this.getMaxZoom(),
          n = ft ? this.options.zoomSnap : 1;
        return n && (t = Math.round(t / n) * n), Math.max(i, Math.min(e, t));
      },
      _onPanTransitionStep: function () {
        this.fire("move");
      },
      _onPanTransitionEnd: function () {
        ri(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
      },
      _tryAnimatedPan: function (t, i) {
        t = this._getCenterOffset(t)._trunc();
        return (
          !(!0 !== (i && i.animate) && !this.getSize().contains(t)) &&
          (this.panBy(t, i), !0)
        );
      },
      _createAnimProxy: function () {
        var t = (this._proxy = Qt(
          "div",
          "leaflet-proxy leaflet-zoom-animated"
        ));
        this._panes.mapPane.appendChild(t),
          this.on(
            "zoomanim",
            function (t) {
              var i = Kt,
                e = this._proxy.style[i];
              ci(
                this._proxy,
                this.project(t.center, t.zoom),
                this.getZoomScale(t.zoom, 1)
              ),
                e === this._proxy.style[i] &&
                  this._animatingZoom &&
                  this._onZoomTransitionEnd();
            },
            this
          ),
          this.on("load moveend", this._animMoveEnd, this),
          this._on("unload", this._destroyAnimProxy, this);
      },
      _destroyAnimProxy: function () {
        ti(this._proxy),
          this.off("load moveend", this._animMoveEnd, this),
          delete this._proxy;
      },
      _animMoveEnd: function () {
        var t = this.getCenter(),
          i = this.getZoom();
        ci(this._proxy, this.project(t, i), this.getZoomScale(i, 1));
      },
      _catchTransitionEnd: function (t) {
        this._animatingZoom &&
          0 <= t.propertyName.indexOf("transform") &&
          this._onZoomTransitionEnd();
      },
      _nothingToAnimate: function () {
        return !this._container.getElementsByClassName("leaflet-zoom-animated")
          .length;
      },
      _tryAnimatedZoom: function (t, i, e) {
        if (this._animatingZoom) return !0;
        if (
          ((e = e || {}),
          !this._zoomAnimated ||
            !1 === e.animate ||
            this._nothingToAnimate() ||
            Math.abs(i - this._zoom) > this.options.zoomAnimationThreshold)
        )
          return !1;
        var n = this.getZoomScale(i),
          n = this._getCenterOffset(t)._divideBy(1 - 1 / n);
        return (
          !(!0 !== e.animate && !this.getSize().contains(n)) &&
          (z(function () {
            this._moveStart(!0, !1)._animateZoom(t, i, !0);
          }, this),
          !0)
        );
      },
      _animateZoom: function (t, i, e, n) {
        this._mapPane &&
          (e &&
            ((this._animatingZoom = !0),
            (this._animateToCenter = t),
            (this._animateToZoom = i),
            si(this._mapPane, "leaflet-zoom-anim")),
          this.fire("zoomanim", { center: t, zoom: i, noUpdate: n }),
          setTimeout(_(this._onZoomTransitionEnd, this), 250));
      },
      _onZoomTransitionEnd: function () {
        this._animatingZoom &&
          (this._mapPane && ri(this._mapPane, "leaflet-zoom-anim"),
          (this._animatingZoom = !1),
          this._move(this._animateToCenter, this._animateToZoom),
          z(function () {
            this._moveEnd(!0);
          }, this));
      },
    });
  var Wi = S.extend({
      options: { position: "topright" },
      initialize: function (t) {
        c(this, t);
      },
      getPosition: function () {
        return this.options.position;
      },
      setPosition: function (t) {
        var i = this._map;
        return (
          i && i.removeControl(this),
          (this.options.position = t),
          i && i.addControl(this),
          this
        );
      },
      getContainer: function () {
        return this._container;
      },
      addTo: function (t) {
        this.remove(), (this._map = t);
        var i = (this._container = this.onAdd(t)),
          e = this.getPosition(),
          t = t._controlCorners[e];
        return (
          si(i, "leaflet-control"),
          -1 !== e.indexOf("bottom")
            ? t.insertBefore(i, t.firstChild)
            : t.appendChild(i),
          this._map.on("unload", this.remove, this),
          this
        );
      },
      remove: function () {
        return (
          this._map &&
            (ti(this._container),
            this.onRemove && this.onRemove(this._map),
            this._map.off("unload", this.remove, this),
            (this._map = null)),
          this
        );
      },
      _refocusOnMap: function (t) {
        this._map &&
          t &&
          0 < t.screenX &&
          0 < t.screenY &&
          this._map.getContainer().focus();
      },
    }),
    pt = function (t) {
      return new Wi(t);
    };
  ji.include({
    addControl: function (t) {
      return t.addTo(this), this;
    },
    removeControl: function (t) {
      return t.remove(), this;
    },
    _initControlPos: function () {
      var n = (this._controlCorners = {}),
        o = "leaflet-",
        s = (this._controlContainer = Qt(
          "div",
          o + "control-container",
          this._container
        ));
      function t(t, i) {
        var e = o + t + " " + o + i;
        n[t + i] = Qt("div", e, s);
      }
      t("top", "left"),
        t("top", "right"),
        t("bottom", "left"),
        t("bottom", "right");
    },
    _clearControlPos: function () {
      for (var t in this._controlCorners) ti(this._controlCorners[t]);
      ti(this._controlContainer),
        delete this._controlCorners,
        delete this._controlContainer;
    },
  });
  var Hi = Wi.extend({
      options: {
        collapsed: !0,
        position: "topright",
        autoZIndex: !0,
        hideSingleBase: !1,
        sortLayers: !1,
        sortFunction: function (t, i, e, n) {
          return e < n ? -1 : n < e ? 1 : 0;
        },
      },
      initialize: function (t, i, e) {
        for (var n in (c(this, e),
        (this._layerControlInputs = []),
        (this._layers = []),
        (this._lastZIndex = 0),
        (this._handlingClick = !1),
        t))
          this._addLayer(t[n], n);
        for (n in i) this._addLayer(i[n], n, !0);
      },
      onAdd: function (t) {
        this._initLayout(),
          this._update(),
          (this._map = t).on("zoomend", this._checkDisabledLayers, this);
        for (var i = 0; i < this._layers.length; i++)
          this._layers[i].layer.on("add remove", this._onLayerChange, this);
        return this._container;
      },
      addTo: function (t) {
        return Wi.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
      },
      onRemove: function () {
        this._map.off("zoomend", this._checkDisabledLayers, this);
        for (var t = 0; t < this._layers.length; t++)
          this._layers[t].layer.off("add remove", this._onLayerChange, this);
      },
      addBaseLayer: function (t, i) {
        return this._addLayer(t, i), this._map ? this._update() : this;
      },
      addOverlay: function (t, i) {
        return this._addLayer(t, i, !0), this._map ? this._update() : this;
      },
      removeLayer: function (t) {
        t.off("add remove", this._onLayerChange, this);
        t = this._getLayer(m(t));
        return (
          t && this._layers.splice(this._layers.indexOf(t), 1),
          this._map ? this._update() : this
        );
      },
      expand: function () {
        si(this._container, "leaflet-control-layers-expanded"),
          (this._section.style.height = null);
        var t = this._map.getSize().y - (this._container.offsetTop + 50);
        return (
          t < this._section.clientHeight
            ? (si(this._section, "leaflet-control-layers-scrollbar"),
              (this._section.style.height = t + "px"))
            : ri(this._section, "leaflet-control-layers-scrollbar"),
          this._checkDisabledLayers(),
          this
        );
      },
      collapse: function () {
        return ri(this._container, "leaflet-control-layers-expanded"), this;
      },
      _initLayout: function () {
        var t = "leaflet-control-layers",
          i = (this._container = Qt("div", t)),
          e = this.options.collapsed;
        i.setAttribute("aria-haspopup", !0), Si(i), Ci(i);
        var n = (this._section = Qt("section", t + "-list"));
        e &&
          (this._map.on("click", this.collapse, this),
          et ||
            xi(
              i,
              { mouseenter: this.expand, mouseleave: this.collapse },
              this
            ));
        var o = (this._layersLink = Qt("a", t + "-toggle", i));
        (o.href = "#"),
          (o.title = "Layers"),
          xt
            ? (xi(o, "click", Ei), xi(o, "click", this.expand, this))
            : xi(o, "focus", this.expand, this),
          e || this.expand(),
          (this._baseLayersList = Qt("div", t + "-base", n)),
          (this._separator = Qt("div", t + "-separator", n)),
          (this._overlaysList = Qt("div", t + "-overlays", n)),
          i.appendChild(n);
      },
      _getLayer: function (t) {
        for (var i = 0; i < this._layers.length; i++)
          if (this._layers[i] && m(this._layers[i].layer) === t)
            return this._layers[i];
      },
      _addLayer: function (t, i, e) {
        this._map && t.on("add remove", this._onLayerChange, this),
          this._layers.push({ layer: t, name: i, overlay: e }),
          this.options.sortLayers &&
            this._layers.sort(
              _(function (t, i) {
                return this.options.sortFunction(
                  t.layer,
                  i.layer,
                  t.name,
                  i.name
                );
              }, this)
            ),
          this.options.autoZIndex &&
            t.setZIndex &&
            (this._lastZIndex++, t.setZIndex(this._lastZIndex)),
          this._expandIfNotCollapsed();
      },
      _update: function () {
        if (!this._container) return this;
        ii(this._baseLayersList),
          ii(this._overlaysList),
          (this._layerControlInputs = []);
        for (var t, i, e, n = 0, o = 0; o < this._layers.length; o++)
          (e = this._layers[o]),
            this._addItem(e),
            (i = i || e.overlay),
            (t = t || !e.overlay),
            (n += e.overlay ? 0 : 1);
        return (
          this.options.hideSingleBase &&
            ((t = t && 1 < n),
            (this._baseLayersList.style.display = t ? "" : "none")),
          (this._separator.style.display = i && t ? "" : "none"),
          this
        );
      },
      _onLayerChange: function (t) {
        this._handlingClick || this._update();
        var i = this._getLayer(m(t.target)),
          t = i.overlay
            ? "add" === t.type
              ? "overlayadd"
              : "overlayremove"
            : "add" === t.type
            ? "baselayerchange"
            : null;
        t && this._map.fire(t, i);
      },
      _createRadioElement: function (t, i) {
        (t =
          '<input type="radio" class="leaflet-control-layers-selector" name="' +
          t +
          '"' +
          (i ? ' checked="checked"' : "") +
          "/>"),
          (i = document.createElement("div"));
        return (i.innerHTML = t), i.firstChild;
      },
      _addItem: function (t) {
        var i,
          e = document.createElement("label"),
          n = this._map.hasLayer(t.layer);
        t.overlay
          ? (((i = document.createElement("input")).type = "checkbox"),
            (i.className = "leaflet-control-layers-selector"),
            (i.defaultChecked = n))
          : (i = this._createRadioElement("leaflet-base-layers_" + m(this), n)),
          this._layerControlInputs.push(i),
          (i.layerId = m(t.layer)),
          xi(i, "click", this._onInputClick, this);
        var o = document.createElement("span");
        o.innerHTML = " " + t.name;
        n = document.createElement("div");
        return (
          e.appendChild(n),
          n.appendChild(i),
          n.appendChild(o),
          (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(
            e
          ),
          this._checkDisabledLayers(),
          e
        );
      },
      _onInputClick: function () {
        var t,
          i,
          e = this._layerControlInputs,
          n = [],
          o = [];
        this._handlingClick = !0;
        for (var s = e.length - 1; 0 <= s; s--)
          (t = e[s]),
            (i = this._getLayer(t.layerId).layer),
            t.checked ? n.push(i) : t.checked || o.push(i);
        for (s = 0; s < o.length; s++)
          this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
        for (s = 0; s < n.length; s++)
          this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
        (this._handlingClick = !1), this._refocusOnMap();
      },
      _checkDisabledLayers: function () {
        for (
          var t,
            i,
            e = this._layerControlInputs,
            n = this._map.getZoom(),
            o = e.length - 1;
          0 <= o;
          o--
        )
          (t = e[o]),
            (i = this._getLayer(t.layerId).layer),
            (t.disabled =
              (void 0 !== i.options.minZoom && n < i.options.minZoom) ||
              (void 0 !== i.options.maxZoom && n > i.options.maxZoom));
      },
      _expandIfNotCollapsed: function () {
        return this._map && !this.options.collapsed && this.expand(), this;
      },
      _expand: function () {
        return this.expand();
      },
      _collapse: function () {
        return this.collapse();
      },
    }),
    Fi = Wi.extend({
      options: {
        position: "topleft",
        zoomInText: "+",
        zoomInTitle: "Zoom in",
        zoomOutText: "&#x2212;",
        zoomOutTitle: "Zoom out",
      },
      onAdd: function (t) {
        var i = "leaflet-control-zoom",
          e = Qt("div", i + " leaflet-bar"),
          n = this.options;
        return (
          (this._zoomInButton = this._createButton(
            n.zoomInText,
            n.zoomInTitle,
            i + "-in",
            e,
            this._zoomIn
          )),
          (this._zoomOutButton = this._createButton(
            n.zoomOutText,
            n.zoomOutTitle,
            i + "-out",
            e,
            this._zoomOut
          )),
          this._updateDisabled(),
          t.on("zoomend zoomlevelschange", this._updateDisabled, this),
          e
        );
      },
      onRemove: function (t) {
        t.off("zoomend zoomlevelschange", this._updateDisabled, this);
      },
      disable: function () {
        return (this._disabled = !0), this._updateDisabled(), this;
      },
      enable: function () {
        return (this._disabled = !1), this._updateDisabled(), this;
      },
      _zoomIn: function (t) {
        !this._disabled &&
          this._map._zoom < this._map.getMaxZoom() &&
          this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
      },
      _zoomOut: function (t) {
        !this._disabled &&
          this._map._zoom > this._map.getMinZoom() &&
          this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
      },
      _createButton: function (t, i, e, n, o) {
        n = Qt("a", e, n);
        return (
          (n.innerHTML = t),
          (n.href = "#"),
          (n.title = i),
          n.setAttribute("role", "button"),
          n.setAttribute("aria-label", i),
          Si(n),
          xi(n, "click", Ei),
          xi(n, "click", o, this),
          xi(n, "click", this._refocusOnMap, this),
          n
        );
      },
      _updateDisabled: function () {
        var t = this._map,
          i = "leaflet-disabled";
        ri(this._zoomInButton, i),
          ri(this._zoomOutButton, i),
          this._zoomInButton.setAttribute("aria-disabled", "false"),
          this._zoomOutButton.setAttribute("aria-disabled", "false"),
          (!this._disabled && t._zoom !== t.getMinZoom()) ||
            (si(this._zoomOutButton, i),
            this._zoomOutButton.setAttribute("aria-disabled", "true")),
          (!this._disabled && t._zoom !== t.getMaxZoom()) ||
            (si(this._zoomInButton, i),
            this._zoomInButton.setAttribute("aria-disabled", "true"));
      },
    });
  ji.mergeOptions({ zoomControl: !0 }),
    ji.addInitHook(function () {
      this.options.zoomControl &&
        ((this.zoomControl = new Fi()), this.addControl(this.zoomControl));
    });
  var Ui = Wi.extend({
      options: {
        position: "bottomleft",
        maxWidth: 100,
        metric: !0,
        imperial: !0,
      },
      onAdd: function (t) {
        var i = "leaflet-control-scale",
          e = Qt("div", i),
          n = this.options;
        return (
          this._addScales(n, i + "-line", e),
          t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this),
          t.whenReady(this._update, this),
          e
        );
      },
      onRemove: function (t) {
        t.off(
          this.options.updateWhenIdle ? "moveend" : "move",
          this._update,
          this
        );
      },
      _addScales: function (t, i, e) {
        t.metric && (this._mScale = Qt("div", i, e)),
          t.imperial && (this._iScale = Qt("div", i, e));
      },
      _update: function () {
        var t = this._map,
          i = t.getSize().y / 2,
          i = t.distance(
            t.containerPointToLatLng([0, i]),
            t.containerPointToLatLng([this.options.maxWidth, i])
          );
        this._updateScales(i);
      },
      _updateScales: function (t) {
        this.options.metric && t && this._updateMetric(t),
          this.options.imperial && t && this._updateImperial(t);
      },
      _updateMetric: function (t) {
        var i = this._getRoundNum(t),
          e = i < 1e3 ? i + " m" : i / 1e3 + " km";
        this._updateScale(this._mScale, e, i / t);
      },
      _updateImperial: function (t) {
        var i,
          e = 3.2808399 * t;
        5280 < e
          ? ((i = e / 5280),
            (t = this._getRoundNum(i)),
            this._updateScale(this._iScale, t + " mi", t / i))
          : ((i = this._getRoundNum(e)),
            this._updateScale(this._iScale, i + " ft", i / e));
      },
      _updateScale: function (t, i, e) {
        (t.style.width = Math.round(this.options.maxWidth * e) + "px"),
          (t.innerHTML = i);
      },
      _getRoundNum: function (t) {
        var i = Math.pow(10, (Math.floor(t) + "").length - 1),
          t = t / i;
        return (
          i * (t = 10 <= t ? 10 : 5 <= t ? 5 : 3 <= t ? 3 : 2 <= t ? 2 : 1)
        );
      },
    }),
    Vi = Wi.extend({
      options: {
        position: "bottomright",
        prefix:
          '<a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>',
      },
      initialize: function (t) {
        c(this, t), (this._attributions = {});
      },
      onAdd: function (t) {
        for (var i in (((t.attributionControl = this)._container = Qt(
          "div",
          "leaflet-control-attribution"
        )),
        Si(this._container),
        t._layers))
          t._layers[i].getAttribution &&
            this.addAttribution(t._layers[i].getAttribution());
        return this._update(), this._container;
      },
      setPrefix: function (t) {
        return (this.options.prefix = t), this._update(), this;
      },
      addAttribution: function (t) {
        return (
          t &&
            (this._attributions[t] || (this._attributions[t] = 0),
            this._attributions[t]++,
            this._update()),
          this
        );
      },
      removeAttribution: function (t) {
        return (
          t &&
            this._attributions[t] &&
            (this._attributions[t]--, this._update()),
          this
        );
      },
      _update: function () {
        if (this._map) {
          var t,
            i = [];
          for (t in this._attributions) this._attributions[t] && i.push(t);
          var e = [];
          this.options.prefix && e.push(this.options.prefix),
            i.length && e.push(i.join(", ")),
            (this._container.innerHTML = e.join(" | "));
        }
      },
    });
  ji.mergeOptions({ attributionControl: !0 }),
    ji.addInitHook(function () {
      this.options.attributionControl && new Vi().addTo(this);
    });
  (Wi.Layers = Hi),
    (Wi.Zoom = Fi),
    (Wi.Scale = Ui),
    (Wi.Attribution = Vi),
    (pt.layers = function (t, i, e) {
      return new Hi(t, i, e);
    }),
    (pt.zoom = function (t) {
      return new Fi(t);
    }),
    (pt.scale = function (t) {
      return new Ui(t);
    }),
    (pt.attribution = function (t) {
      return new Vi(t);
    });
  mt = S.extend({
    initialize: function (t) {
      this._map = t;
    },
    enable: function () {
      return this._enabled || ((this._enabled = !0), this.addHooks()), this;
    },
    disable: function () {
      return this._enabled && ((this._enabled = !1), this.removeHooks()), this;
    },
    enabled: function () {
      return !!this._enabled;
    },
  });
  mt.addTo = function (t, i) {
    return t.addHandler(i, this), this;
  };
  var qi,
    gt = { Events: Z },
    Gi = xt ? "touchstart mousedown" : "mousedown",
    Ki = {
      mousedown: "mouseup",
      touchstart: "touchend",
      pointerdown: "touchend",
      MSPointerDown: "touchend",
    },
    Yi = {
      mousedown: "mousemove",
      touchstart: "touchmove",
      pointerdown: "touchmove",
      MSPointerDown: "touchmove",
    },
    Xi = E.extend({
      options: { clickTolerance: 3 },
      initialize: function (t, i, e, n) {
        c(this, n),
          (this._element = t),
          (this._dragStartTarget = i || t),
          (this._preventOutline = e);
      },
      enable: function () {
        this._enabled ||
          (xi(this._dragStartTarget, Gi, this._onDown, this),
          (this._enabled = !0));
      },
      disable: function () {
        this._enabled &&
          (Xi._dragging === this && this.finishDrag(),
          Pi(this._dragStartTarget, Gi, this._onDown, this),
          (this._enabled = !1),
          (this._moved = !1));
      },
      _onDown: function (t) {
        var i, e;
        !t._simulated &&
          this._enabled &&
          ((this._moved = !1),
          oi(this._element, "leaflet-zoom-anim") ||
            Xi._dragging ||
            t.shiftKey ||
            (1 !== t.which && 1 !== t.button && !t.touches) ||
            ((Xi._dragging = this)._preventOutline && fi(this._element),
            pi(),
            Ut(),
            this._moving ||
              (this.fire("down"),
              (i = t.touches ? t.touches[0] : t),
              (e = vi(this._element)),
              (this._startPoint = new k(i.clientX, i.clientY)),
              (this._parentScale = yi(e)),
              xi(document, Yi[t.type], this._onMove, this),
              xi(document, Ki[t.type], this._onUp, this))));
      },
      _onMove: function (t) {
        var i;
        !t._simulated &&
          this._enabled &&
          (t.touches && 1 < t.touches.length
            ? (this._moved = !0)
            : ((i = new k(
                (i =
                  t.touches && 1 === t.touches.length
                    ? t.touches[0]
                    : t).clientX,
                i.clientY
              )._subtract(this._startPoint)).x ||
                i.y) &&
              (Math.abs(i.x) + Math.abs(i.y) < this.options.clickTolerance ||
                ((i.x /= this._parentScale.x),
                (i.y /= this._parentScale.y),
                Zi(t),
                this._moved ||
                  (this.fire("dragstart"),
                  (this._moved = !0),
                  (this._startPos = di(this._element).subtract(i)),
                  si(document.body, "leaflet-dragging"),
                  (this._lastTarget = t.target || t.srcElement),
                  window.SVGElementInstance &&
                    this._lastTarget instanceof window.SVGElementInstance &&
                    (this._lastTarget =
                      this._lastTarget.correspondingUseElement),
                  si(this._lastTarget, "leaflet-drag-target")),
                (this._newPos = this._startPos.add(i)),
                (this._moving = !0),
                M(this._animRequest),
                (this._lastEvent = t),
                (this._animRequest = z(this._updatePosition, this, !0)))));
      },
      _updatePosition: function () {
        var t = { originalEvent: this._lastEvent };
        this.fire("predrag", t),
          _i(this._element, this._newPos),
          this.fire("drag", t);
      },
      _onUp: function (t) {
        !t._simulated && this._enabled && this.finishDrag();
      },
      finishDrag: function () {
        for (var t in (ri(document.body, "leaflet-dragging"),
        this._lastTarget &&
          (ri(this._lastTarget, "leaflet-drag-target"),
          (this._lastTarget = null)),
        Yi))
          Pi(document, Yi[t], this._onMove, this),
            Pi(document, Ki[t], this._onUp, this);
        mi(),
          Vt(),
          this._moved &&
            this._moving &&
            (M(this._animRequest),
            this.fire("dragend", {
              distance: this._newPos.distanceTo(this._startPos),
            })),
          (this._moving = !1),
          (Xi._dragging = !1);
      },
    });
  function Ji(t, i) {
    if (!i || !t.length) return t.slice();
    i *= i;
    return (t = (function (t, i) {
      var e = t.length,
        n = new (typeof Uint8Array != void 0 + "" ? Uint8Array : Array)(e);
      (n[0] = n[e - 1] = 1),
        (function t(i, e, n, o, s) {
          var r,
            a,
            h,
            u = 0;
          for (a = o + 1; a <= s - 1; a++)
            (h = ee(i[a], i[o], i[s], !0)), u < h && ((r = a), (u = h));
          n < u && ((e[r] = 1), t(i, e, n, o, r), t(i, e, n, r, s));
        })(t, n, i, 0, e - 1);
      var o,
        s = [];
      for (o = 0; o < e; o++) n[o] && s.push(t[o]);
      return s;
    })(
      (t = (function (t, i) {
        for (var e = [t[0]], n = 1, o = 0, s = t.length; n < s; n++)
          (function (t, i) {
            var e = i.x - t.x,
              t = i.y - t.y;
            return e * e + t * t;
          })(t[n], t[o]) > i && (e.push(t[n]), (o = n));
        o < s - 1 && e.push(t[s - 1]);
        return e;
      })(t, i)),
      i
    ));
  }
  function $i(t, i, e) {
    return Math.sqrt(ee(t, i, e, !0));
  }
  function Qi(t, i, e, n, o) {
    var s,
      r,
      a,
      h = n ? qi : ie(t, e),
      u = ie(i, e);
    for (qi = u; ; ) {
      if (!(h | u)) return [t, i];
      if (h & u) return !1;
      (a = ie((r = te(t, i, (s = h || u), e, o)), e)),
        s === h ? ((t = r), (h = a)) : ((i = r), (u = a));
    }
  }
  function te(t, i, e, n, o) {
    var s,
      r,
      a = i.x - t.x,
      h = i.y - t.y,
      i = n.min,
      n = n.max;
    return (
      8 & e
        ? ((s = t.x + (a * (n.y - t.y)) / h), (r = n.y))
        : 4 & e
        ? ((s = t.x + (a * (i.y - t.y)) / h), (r = i.y))
        : 2 & e
        ? ((s = n.x), (r = t.y + (h * (n.x - t.x)) / a))
        : 1 & e && ((s = i.x), (r = t.y + (h * (i.x - t.x)) / a)),
      new k(s, r, o)
    );
  }
  function ie(t, i) {
    var e = 0;
    return (
      t.x < i.min.x ? (e |= 1) : t.x > i.max.x && (e |= 2),
      t.y < i.min.y ? (e |= 4) : t.y > i.max.y && (e |= 8),
      e
    );
  }
  function ee(t, i, e, n) {
    var o = i.x,
      s = i.y,
      r = e.x - o,
      a = e.y - s,
      i = r * r + a * a;
    return (
      0 < i &&
        (1 < (i = ((t.x - o) * r + (t.y - s) * a) / i)
          ? ((o = e.x), (s = e.y))
          : 0 < i && ((o += r * i), (s += a * i))),
      (r = t.x - o),
      (a = t.y - s),
      n ? r * r + a * a : new k(o, s)
    );
  }
  function ne(t) {
    return !g(t[0]) || ("object" != typeof t[0][0] && void 0 !== t[0][0]);
  }
  function oe(t) {
    return (
      console.warn(
        "Deprecated use of _flat, please use L.LineUtil.isFlat instead."
      ),
      ne(t)
    );
  }
  vt = {
    simplify: Ji,
    pointToSegmentDistance: $i,
    closestPointOnSegment: function (t, i, e) {
      return ee(t, i, e);
    },
    clipSegment: Qi,
    _getEdgeIntersection: te,
    _getBitCode: ie,
    _sqClosestPointOnSegment: ee,
    isFlat: ne,
    _flat: oe,
  };
  function se(t, i, e) {
    for (
      var n, o, s, r, a, h, u, l = [1, 4, 2, 8], c = 0, _ = t.length;
      c < _;
      c++
    )
      t[c]._code = ie(t[c], i);
    for (s = 0; s < 4; s++) {
      for (h = l[s], n = [], c = 0, o = (_ = t.length) - 1; c < _; o = c++)
        (r = t[c]),
          (a = t[o]),
          r._code & h
            ? a._code & h ||
              (((u = te(a, r, h, i, e))._code = ie(u, i)), n.push(u))
            : (a._code & h &&
                (((u = te(a, r, h, i, e))._code = ie(u, i)), n.push(u)),
              n.push(r));
      t = n;
    }
    return t;
  }
  var J = { clipPolygon: se },
    ot = {
      project: function (t) {
        return new k(t.lng, t.lat);
      },
      unproject: function (t) {
        return new D(t.y, t.x);
      },
      bounds: new I([-180, -90], [180, 90]),
    },
    _t = {
      R: 6378137,
      R_MINOR: 6356752.314245179,
      bounds: new I(
        [-20037508.34279, -15496570.73972],
        [20037508.34279, 18764656.23138]
      ),
      project: function (t) {
        var i = Math.PI / 180,
          e = this.R,
          n = t.lat * i,
          o = this.R_MINOR / e,
          s = Math.sqrt(1 - o * o),
          o = s * Math.sin(n),
          s =
            Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - o) / (1 + o), s / 2),
          n = -e * Math.log(Math.max(s, 1e-10));
        return new k(t.lng * i * e, n);
      },
      unproject: function (t) {
        for (
          var i,
            e = 180 / Math.PI,
            n = this.R,
            o = this.R_MINOR / n,
            s = Math.sqrt(1 - o * o),
            r = Math.exp(-t.y / n),
            a = Math.PI / 2 - 2 * Math.atan(r),
            h = 0,
            u = 0.1;
          h < 15 && 1e-7 < Math.abs(u);
          h++
        )
          (i = s * Math.sin(a)),
            (i = Math.pow((1 - i) / (1 + i), s / 2)),
            (a += u = Math.PI / 2 - 2 * Math.atan(r * i) - a);
        return new D(a * e, (t.x * e) / n);
      },
    },
    at = { LonLat: ot, Mercator: _t, SphericalMercator: U },
    Z = h({}, H, {
      code: "EPSG:3395",
      projection: _t,
      transformation: q((ht = 0.5 / (Math.PI * _t.R)), 0.5, -ht, 0.5),
    }),
    re = h({}, H, {
      code: "EPSG:4326",
      projection: ot,
      transformation: q(1 / 180, 1, -1 / 180, 0.5),
    }),
    U = h({}, W, {
      projection: ot,
      transformation: q(1, 0, -1, 0),
      scale: function (t) {
        return Math.pow(2, t);
      },
      zoom: function (t) {
        return Math.log(t) / Math.LN2;
      },
      distance: function (t, i) {
        var e = i.lng - t.lng,
          t = i.lat - t.lat;
        return Math.sqrt(e * e + t * t);
      },
      infinite: !0,
    });
  (W.Earth = H),
    (W.EPSG3395 = Z),
    (W.EPSG3857 = G),
    (W.EPSG900913 = K),
    (W.EPSG4326 = re),
    (W.Simple = U);
  var ae = E.extend({
    options: {
      pane: "overlayPane",
      attribution: null,
      bubblingMouseEvents: !0,
    },
    addTo: function (t) {
      return t.addLayer(this), this;
    },
    remove: function () {
      return this.removeFrom(this._map || this._mapToAdd);
    },
    removeFrom: function (t) {
      return t && t.removeLayer(this), this;
    },
    getPane: function (t) {
      return this._map.getPane(t ? this.options[t] || t : this.options.pane);
    },
    addInteractiveTarget: function (t) {
      return (this._map._targets[m(t)] = this);
    },
    removeInteractiveTarget: function (t) {
      return delete this._map._targets[m(t)], this;
    },
    getAttribution: function () {
      return this.options.attribution;
    },
    _layerAdd: function (t) {
      var i,
        e = t.target;
      e.hasLayer(this) &&
        ((this._map = e),
        (this._zoomAnimated = e._zoomAnimated),
        this.getEvents &&
          ((i = this.getEvents()),
          e.on(i, this),
          this.once(
            "remove",
            function () {
              e.off(i, this);
            },
            this
          )),
        this.onAdd(e),
        this.getAttribution &&
          e.attributionControl &&
          e.attributionControl.addAttribution(this.getAttribution()),
        this.fire("add"),
        e.fire("layeradd", { layer: this }));
    },
  });
  ji.include({
    addLayer: function (t) {
      if (!t._layerAdd) throw new Error("The provided object is not a Layer.");
      var i = m(t);
      return (
        this._layers[i] ||
          (((this._layers[i] = t)._mapToAdd = this),
          t.beforeAdd && t.beforeAdd(this),
          this.whenReady(t._layerAdd, t)),
        this
      );
    },
    removeLayer: function (t) {
      var i = m(t);
      return (
        this._layers[i] &&
          (this._loaded && t.onRemove(this),
          t.getAttribution &&
            this.attributionControl &&
            this.attributionControl.removeAttribution(t.getAttribution()),
          delete this._layers[i],
          this._loaded &&
            (this.fire("layerremove", { layer: t }), t.fire("remove")),
          (t._map = t._mapToAdd = null)),
        this
      );
    },
    hasLayer: function (t) {
      return !!t && m(t) in this._layers;
    },
    eachLayer: function (t, i) {
      for (var e in this._layers) t.call(i, this._layers[e]);
      return this;
    },
    _addLayers: function (t) {
      for (var i = 0, e = (t = t ? (g(t) ? t : [t]) : []).length; i < e; i++)
        this.addLayer(t[i]);
    },
    _addZoomLimit: function (t) {
      (!isNaN(t.options.maxZoom) && isNaN(t.options.minZoom)) ||
        ((this._zoomBoundLayers[m(t)] = t), this._updateZoomLevels());
    },
    _removeZoomLimit: function (t) {
      t = m(t);
      this._zoomBoundLayers[t] &&
        (delete this._zoomBoundLayers[t], this._updateZoomLevels());
    },
    _updateZoomLevels: function () {
      var t,
        i = 1 / 0,
        e = -1 / 0,
        n = this._getZoomSpan();
      for (t in this._zoomBoundLayers)
        var o = this._zoomBoundLayers[t].options,
          i = void 0 === o.minZoom ? i : Math.min(i, o.minZoom),
          e = void 0 === o.maxZoom ? e : Math.max(e, o.maxZoom);
      (this._layersMaxZoom = e === -1 / 0 ? void 0 : e),
        (this._layersMinZoom = i === 1 / 0 ? void 0 : i),
        n !== this._getZoomSpan() && this.fire("zoomlevelschange"),
        void 0 === this.options.maxZoom &&
          this._layersMaxZoom &&
          this.getZoom() > this._layersMaxZoom &&
          this.setZoom(this._layersMaxZoom),
        void 0 === this.options.minZoom &&
          this._layersMinZoom &&
          this.getZoom() < this._layersMinZoom &&
          this.setZoom(this._layersMinZoom);
    },
  });
  var he = ae.extend({
      initialize: function (t, i) {
        var e, n;
        if ((c(this, i), (this._layers = {}), t))
          for (e = 0, n = t.length; e < n; e++) this.addLayer(t[e]);
      },
      addLayer: function (t) {
        var i = this.getLayerId(t);
        return (this._layers[i] = t), this._map && this._map.addLayer(t), this;
      },
      removeLayer: function (t) {
        t = t in this._layers ? t : this.getLayerId(t);
        return (
          this._map &&
            this._layers[t] &&
            this._map.removeLayer(this._layers[t]),
          delete this._layers[t],
          this
        );
      },
      hasLayer: function (t) {
        return (
          !!t && ("number" == typeof t ? t : this.getLayerId(t)) in this._layers
        );
      },
      clearLayers: function () {
        return this.eachLayer(this.removeLayer, this);
      },
      invoke: function (t) {
        var i,
          e,
          n = Array.prototype.slice.call(arguments, 1);
        for (i in this._layers) (e = this._layers[i])[t] && e[t].apply(e, n);
        return this;
      },
      onAdd: function (t) {
        this.eachLayer(t.addLayer, t);
      },
      onRemove: function (t) {
        this.eachLayer(t.removeLayer, t);
      },
      eachLayer: function (t, i) {
        for (var e in this._layers) t.call(i, this._layers[e]);
        return this;
      },
      getLayer: function (t) {
        return this._layers[t];
      },
      getLayers: function () {
        var t = [];
        return this.eachLayer(t.push, t), t;
      },
      setZIndex: function (t) {
        return this.invoke("setZIndex", t);
      },
      getLayerId: m,
    }),
    ue = he.extend({
      addLayer: function (t) {
        return this.hasLayer(t)
          ? this
          : (t.addEventParent(this),
            he.prototype.addLayer.call(this, t),
            this.fire("layeradd", { layer: t }));
      },
      removeLayer: function (t) {
        return this.hasLayer(t)
          ? ((t = t in this._layers ? this._layers[t] : t).removeEventParent(
              this
            ),
            he.prototype.removeLayer.call(this, t),
            this.fire("layerremove", { layer: t }))
          : this;
      },
      setStyle: function (t) {
        return this.invoke("setStyle", t);
      },
      bringToFront: function () {
        return this.invoke("bringToFront");
      },
      bringToBack: function () {
        return this.invoke("bringToBack");
      },
      getBounds: function () {
        var t,
          i = new R();
        for (t in this._layers) {
          var e = this._layers[t];
          i.extend(e.getBounds ? e.getBounds() : e.getLatLng());
        }
        return i;
      },
    }),
    le = S.extend({
      options: { popupAnchor: [0, 0], tooltipAnchor: [0, 0], crossOrigin: !1 },
      initialize: function (t) {
        c(this, t);
      },
      createIcon: function (t) {
        return this._createIcon("icon", t);
      },
      createShadow: function (t) {
        return this._createIcon("shadow", t);
      },
      _createIcon: function (t, i) {
        var e = this._getIconUrl(t);
        if (!e) {
          if ("icon" === t)
            throw new Error("iconUrl not set in Icon options (see the docs).");
          return null;
        }
        i = this._createImg(e, i && "IMG" === i.tagName ? i : null);
        return (
          this._setIconStyles(i, t),
          (!this.options.crossOrigin && "" !== this.options.crossOrigin) ||
            (i.crossOrigin =
              !0 === this.options.crossOrigin ? "" : this.options.crossOrigin),
          i
        );
      },
      _setIconStyles: function (t, i) {
        var e = this.options,
          n = e[i + "Size"],
          o = A((n = "number" == typeof n ? [n, n] : n)),
          n = A(
            ("shadow" === i && e.shadowAnchor) ||
              e.iconAnchor ||
              (o && o.divideBy(2, !0))
          );
        (t.className = "leaflet-marker-" + i + " " + (e.className || "")),
          n &&
            ((t.style.marginLeft = -n.x + "px"),
            (t.style.marginTop = -n.y + "px")),
          o && ((t.style.width = o.x + "px"), (t.style.height = o.y + "px"));
      },
      _createImg: function (t, i) {
        return ((i = i || document.createElement("img")).src = t), i;
      },
      _getIconUrl: function (t) {
        return (Pt && this.options[t + "RetinaUrl"]) || this.options[t + "Url"];
      },
    });
  var ce = le.extend({
      options: {
        iconUrl: "marker-icon.png",
        iconRetinaUrl: "marker-icon-2x.png",
        shadowUrl: "marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41],
      },
      _getIconUrl: function (t) {
        return (
          ce.imagePath || (ce.imagePath = this._detectIconPath()),
          (this.options.imagePath || ce.imagePath) +
            le.prototype._getIconUrl.call(this, t)
        );
      },
      _detectIconPath: function () {
        var t = Qt("div", "leaflet-default-icon-path", document.body),
          i = $t(t, "background-image") || $t(t, "backgroundImage");
        return (
          document.body.removeChild(t),
          (i =
            null === i || 0 !== i.indexOf("url")
              ? ""
              : i
                  .replace(/^url\(["']?/, "")
                  .replace(/marker-icon\.png["']?\)$/, ""))
        );
      },
    }),
    _e = mt.extend({
      initialize: function (t) {
        this._marker = t;
      },
      addHooks: function () {
        var t = this._marker._icon;
        this._draggable || (this._draggable = new Xi(t, t, !0)),
          this._draggable
            .on(
              {
                dragstart: this._onDragStart,
                predrag: this._onPreDrag,
                drag: this._onDrag,
                dragend: this._onDragEnd,
              },
              this
            )
            .enable(),
          si(t, "leaflet-marker-draggable");
      },
      removeHooks: function () {
        this._draggable
          .off(
            {
              dragstart: this._onDragStart,
              predrag: this._onPreDrag,
              drag: this._onDrag,
              dragend: this._onDragEnd,
            },
            this
          )
          .disable(),
          this._marker._icon &&
            ri(this._marker._icon, "leaflet-marker-draggable");
      },
      moved: function () {
        return this._draggable && this._draggable._moved;
      },
      _adjustPan: function (t) {
        var i = this._marker,
          e = i._map,
          n = this._marker.options.autoPanSpeed,
          o = this._marker.options.autoPanPadding,
          s = di(i._icon),
          r = e.getPixelBounds(),
          a = e.getPixelOrigin(),
          o = O(r.min._subtract(a).add(o), r.max._subtract(a).subtract(o));
        o.contains(s) ||
          ((n = A(
            (Math.max(o.max.x, s.x) - o.max.x) / (r.max.x - o.max.x) -
              (Math.min(o.min.x, s.x) - o.min.x) / (r.min.x - o.min.x),
            (Math.max(o.max.y, s.y) - o.max.y) / (r.max.y - o.max.y) -
              (Math.min(o.min.y, s.y) - o.min.y) / (r.min.y - o.min.y)
          ).multiplyBy(n)),
          e.panBy(n, { animate: !1 }),
          this._draggable._newPos._add(n),
          this._draggable._startPos._add(n),
          _i(i._icon, this._draggable._newPos),
          this._onDrag(t),
          (this._panRequest = z(this._adjustPan.bind(this, t))));
      },
      _onDragStart: function () {
        (this._oldLatLng = this._marker.getLatLng()),
          this._marker.closePopup && this._marker.closePopup(),
          this._marker.fire("movestart").fire("dragstart");
      },
      _onPreDrag: function (t) {
        this._marker.options.autoPan &&
          (M(this._panRequest),
          (this._panRequest = z(this._adjustPan.bind(this, t))));
      },
      _onDrag: function (t) {
        var i = this._marker,
          e = i._shadow,
          n = di(i._icon),
          o = i._map.layerPointToLatLng(n);
        e && _i(e, n),
          (i._latlng = o),
          (t.latlng = o),
          (t.oldLatLng = this._oldLatLng),
          i.fire("move", t).fire("drag", t);
      },
      _onDragEnd: function (t) {
        M(this._panRequest),
          delete this._oldLatLng,
          this._marker.fire("moveend").fire("dragend", t);
      },
    }),
    de = ae.extend({
      options: {
        icon: new ce(),
        interactive: !0,
        keyboard: !0,
        title: "",
        alt: "",
        zIndexOffset: 0,
        opacity: 1,
        riseOnHover: !1,
        riseOffset: 250,
        pane: "markerPane",
        shadowPane: "shadowPane",
        bubblingMouseEvents: !1,
        draggable: !1,
        autoPan: !1,
        autoPanPadding: [50, 50],
        autoPanSpeed: 10,
      },
      initialize: function (t, i) {
        c(this, i), (this._latlng = j(t));
      },
      onAdd: function (t) {
        (this._zoomAnimated =
          this._zoomAnimated && t.options.markerZoomAnimation),
          this._zoomAnimated && t.on("zoomanim", this._animateZoom, this),
          this._initIcon(),
          this.update();
      },
      onRemove: function (t) {
        this.dragging &&
          this.dragging.enabled() &&
          ((this.options.draggable = !0), this.dragging.removeHooks()),
          delete this.dragging,
          this._zoomAnimated && t.off("zoomanim", this._animateZoom, this),
          this._removeIcon(),
          this._removeShadow();
      },
      getEvents: function () {
        return { zoom: this.update, viewreset: this.update };
      },
      getLatLng: function () {
        return this._latlng;
      },
      setLatLng: function (t) {
        var i = this._latlng;
        return (
          (this._latlng = j(t)),
          this.update(),
          this.fire("move", { oldLatLng: i, latlng: this._latlng })
        );
      },
      setZIndexOffset: function (t) {
        return (this.options.zIndexOffset = t), this.update();
      },
      getIcon: function () {
        return this.options.icon;
      },
      setIcon: function (t) {
        return (
          (this.options.icon = t),
          this._map && (this._initIcon(), this.update()),
          this._popup && this.bindPopup(this._popup, this._popup.options),
          this
        );
      },
      getElement: function () {
        return this._icon;
      },
      update: function () {
        var t;
        return (
          this._icon &&
            this._map &&
            ((t = this._map.latLngToLayerPoint(this._latlng).round()),
            this._setPos(t)),
          this
        );
      },
      _initIcon: function () {
        var t = this.options,
          i = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
          e = t.icon.createIcon(this._icon),
          n = !1;
        e !== this._icon &&
          (this._icon && this._removeIcon(),
          (n = !0),
          t.title && (e.title = t.title),
          "IMG" === e.tagName && (e.alt = t.alt || "")),
          si(e, i),
          t.keyboard && (e.tabIndex = "0"),
          (this._icon = e),
          t.riseOnHover &&
            this.on({
              mouseover: this._bringToFront,
              mouseout: this._resetZIndex,
            });
        var o = t.icon.createShadow(this._shadow),
          e = !1;
        o !== this._shadow && (this._removeShadow(), (e = !0)),
          o && (si(o, i), (o.alt = "")),
          (this._shadow = o),
          t.opacity < 1 && this._updateOpacity(),
          n && this.getPane().appendChild(this._icon),
          this._initInteraction(),
          o && e && this.getPane(t.shadowPane).appendChild(this._shadow);
      },
      _removeIcon: function () {
        this.options.riseOnHover &&
          this.off({
            mouseover: this._bringToFront,
            mouseout: this._resetZIndex,
          }),
          ti(this._icon),
          this.removeInteractiveTarget(this._icon),
          (this._icon = null);
      },
      _removeShadow: function () {
        this._shadow && ti(this._shadow), (this._shadow = null);
      },
      _setPos: function (t) {
        this._icon && _i(this._icon, t),
          this._shadow && _i(this._shadow, t),
          (this._zIndex = t.y + this.options.zIndexOffset),
          this._resetZIndex();
      },
      _updateZIndex: function (t) {
        this._icon && (this._icon.style.zIndex = this._zIndex + t);
      },
      _animateZoom: function (t) {
        t = this._map
          ._latLngToNewLayerPoint(this._latlng, t.zoom, t.center)
          .round();
        this._setPos(t);
      },
      _initInteraction: function () {
        var t;
        this.options.interactive &&
          (si(this._icon, "leaflet-interactive"),
          this.addInteractiveTarget(this._icon),
          _e &&
            ((t = this.options.draggable),
            this.dragging &&
              ((t = this.dragging.enabled()), this.dragging.disable()),
            (this.dragging = new _e(this)),
            t && this.dragging.enable()));
      },
      setOpacity: function (t) {
        return (
          (this.options.opacity = t), this._map && this._updateOpacity(), this
        );
      },
      _updateOpacity: function () {
        var t = this.options.opacity;
        this._icon && ui(this._icon, t), this._shadow && ui(this._shadow, t);
      },
      _bringToFront: function () {
        this._updateZIndex(this.options.riseOffset);
      },
      _resetZIndex: function () {
        this._updateZIndex(0);
      },
      _getPopupAnchor: function () {
        return this.options.icon.options.popupAnchor;
      },
      _getTooltipAnchor: function () {
        return this.options.icon.options.tooltipAnchor;
      },
    });
  var pe = ae.extend({
      options: {
        stroke: !0,
        color: "#3388ff",
        weight: 3,
        opacity: 1,
        lineCap: "round",
        lineJoin: "round",
        dashArray: null,
        dashOffset: null,
        fill: !1,
        fillColor: null,
        fillOpacity: 0.2,
        fillRule: "evenodd",
        interactive: !0,
        bubblingMouseEvents: !0,
      },
      beforeAdd: function (t) {
        this._renderer = t.getRenderer(this);
      },
      onAdd: function () {
        this._renderer._initPath(this),
          this._reset(),
          this._renderer._addPath(this);
      },
      onRemove: function () {
        this._renderer._removePath(this);
      },
      redraw: function () {
        return this._map && this._renderer._updatePath(this), this;
      },
      setStyle: function (t) {
        return (
          c(this, t),
          this._renderer &&
            (this._renderer._updateStyle(this),
            this.options.stroke &&
              t &&
              Object.prototype.hasOwnProperty.call(t, "weight") &&
              this._updateBounds()),
          this
        );
      },
      bringToFront: function () {
        return this._renderer && this._renderer._bringToFront(this), this;
      },
      bringToBack: function () {
        return this._renderer && this._renderer._bringToBack(this), this;
      },
      getElement: function () {
        return this._path;
      },
      _reset: function () {
        this._project(), this._update();
      },
      _clickTolerance: function () {
        return (
          (this.options.stroke ? this.options.weight / 2 : 0) +
          this._renderer.options.tolerance
        );
      },
    }),
    me = pe.extend({
      options: { fill: !0, radius: 10 },
      initialize: function (t, i) {
        c(this, i), (this._latlng = j(t)), (this._radius = this.options.radius);
      },
      setLatLng: function (t) {
        var i = this._latlng;
        return (
          (this._latlng = j(t)),
          this.redraw(),
          this.fire("move", { oldLatLng: i, latlng: this._latlng })
        );
      },
      getLatLng: function () {
        return this._latlng;
      },
      setRadius: function (t) {
        return (this.options.radius = this._radius = t), this.redraw();
      },
      getRadius: function () {
        return this._radius;
      },
      setStyle: function (t) {
        var i = (t && t.radius) || this._radius;
        return pe.prototype.setStyle.call(this, t), this.setRadius(i), this;
      },
      _project: function () {
        (this._point = this._map.latLngToLayerPoint(this._latlng)),
          this._updateBounds();
      },
      _updateBounds: function () {
        var t = this._radius,
          i = this._radiusY || t,
          e = this._clickTolerance(),
          e = [t + e, i + e];
        this._pxBounds = new I(this._point.subtract(e), this._point.add(e));
      },
      _update: function () {
        this._map && this._updatePath();
      },
      _updatePath: function () {
        this._renderer._updateCircle(this);
      },
      _empty: function () {
        return (
          this._radius && !this._renderer._bounds.intersects(this._pxBounds)
        );
      },
      _containsPoint: function (t) {
        return (
          t.distanceTo(this._point) <= this._radius + this._clickTolerance()
        );
      },
    });
  var fe = me.extend({
    initialize: function (t, i, e) {
      if (
        (c(this, (i = "number" == typeof i ? h({}, e, { radius: i }) : i)),
        (this._latlng = j(t)),
        isNaN(this.options.radius))
      )
        throw new Error("Circle radius cannot be NaN");
      this._mRadius = this.options.radius;
    },
    setRadius: function (t) {
      return (this._mRadius = t), this.redraw();
    },
    getRadius: function () {
      return this._mRadius;
    },
    getBounds: function () {
      var t = [this._radius, this._radiusY || this._radius];
      return new R(
        this._map.layerPointToLatLng(this._point.subtract(t)),
        this._map.layerPointToLatLng(this._point.add(t))
      );
    },
    setStyle: pe.prototype.setStyle,
    _project: function () {
      var t,
        i,
        e,
        n,
        o,
        s = this._latlng.lng,
        r = this._latlng.lat,
        a = this._map,
        h = a.options.crs;
      h.distance === H.distance
        ? ((o = Math.PI / 180),
          (t = this._mRadius / H.R / o),
          (i = a.project([r + t, s])),
          (n = a.project([r - t, s])),
          (e = i.add(n).divideBy(2)),
          (n = a.unproject(e).lat),
          (o =
            Math.acos(
              (Math.cos(t * o) - Math.sin(r * o) * Math.sin(n * o)) /
                (Math.cos(r * o) * Math.cos(n * o))
            ) / o),
          (!isNaN(o) && 0 !== o) || (o = t / Math.cos((Math.PI / 180) * r)),
          (this._point = e.subtract(a.getPixelOrigin())),
          (this._radius = isNaN(o) ? 0 : e.x - a.project([n, s - o]).x),
          (this._radiusY = e.y - i.y))
        : ((h = h.unproject(
            h.project(this._latlng).subtract([this._mRadius, 0])
          )),
          (this._point = a.latLngToLayerPoint(this._latlng)),
          (this._radius = this._point.x - a.latLngToLayerPoint(h).x)),
        this._updateBounds();
    },
  });
  var ge = pe.extend({
    options: { smoothFactor: 1, noClip: !1 },
    initialize: function (t, i) {
      c(this, i), this._setLatLngs(t);
    },
    getLatLngs: function () {
      return this._latlngs;
    },
    setLatLngs: function (t) {
      return this._setLatLngs(t), this.redraw();
    },
    isEmpty: function () {
      return !this._latlngs.length;
    },
    closestLayerPoint: function (t) {
      for (
        var i = 1 / 0, e = null, n = ee, o = 0, s = this._parts.length;
        o < s;
        o++
      )
        for (var r = this._parts[o], a = 1, h = r.length; a < h; a++) {
          var u,
            l,
            c = n(t, (u = r[a - 1]), (l = r[a]), !0);
          c < i && ((i = c), (e = n(t, u, l)));
        }
      return e && (e.distance = Math.sqrt(i)), e;
    },
    getCenter: function () {
      if (!this._map)
        throw new Error("Must add layer to map before using getCenter()");
      var t,
        i,
        e,
        n,
        o,
        s,
        r = this._rings[0],
        a = r.length;
      if (!a) return null;
      for (i = t = 0; t < a - 1; t++) i += r[t].distanceTo(r[t + 1]) / 2;
      if (0 === i) return this._map.layerPointToLatLng(r[0]);
      for (e = t = 0; t < a - 1; t++)
        if (((n = r[t]), (o = r[t + 1]), i < (e += s = n.distanceTo(o))))
          return (
            (s = (e - i) / s),
            this._map.layerPointToLatLng([
              o.x - s * (o.x - n.x),
              o.y - s * (o.y - n.y),
            ])
          );
    },
    getBounds: function () {
      return this._bounds;
    },
    addLatLng: function (t, i) {
      return (
        (i = i || this._defaultShape()),
        (t = j(t)),
        i.push(t),
        this._bounds.extend(t),
        this.redraw()
      );
    },
    _setLatLngs: function (t) {
      (this._bounds = new R()), (this._latlngs = this._convertLatLngs(t));
    },
    _defaultShape: function () {
      return ne(this._latlngs) ? this._latlngs : this._latlngs[0];
    },
    _convertLatLngs: function (t) {
      for (var i = [], e = ne(t), n = 0, o = t.length; n < o; n++)
        e
          ? ((i[n] = j(t[n])), this._bounds.extend(i[n]))
          : (i[n] = this._convertLatLngs(t[n]));
      return i;
    },
    _project: function () {
      var t = new I();
      (this._rings = []),
        this._projectLatlngs(this._latlngs, this._rings, t),
        this._bounds.isValid() &&
          t.isValid() &&
          ((this._rawPxBounds = t), this._updateBounds());
    },
    _updateBounds: function () {
      var t = this._clickTolerance(),
        t = new k(t, t);
      this._pxBounds = new I([
        this._rawPxBounds.min.subtract(t),
        this._rawPxBounds.max.add(t),
      ]);
    },
    _projectLatlngs: function (t, i, e) {
      var n,
        o,
        s = t[0] instanceof D,
        r = t.length;
      if (s) {
        for (o = [], n = 0; n < r; n++)
          (o[n] = this._map.latLngToLayerPoint(t[n])), e.extend(o[n]);
        i.push(o);
      } else for (n = 0; n < r; n++) this._projectLatlngs(t[n], i, e);
    },
    _clipPoints: function () {
      var t = this._renderer._bounds;
      if (((this._parts = []), this._pxBounds && this._pxBounds.intersects(t)))
        if (this.options.noClip) this._parts = this._rings;
        else
          for (
            var i,
              e,
              n,
              o,
              s = this._parts,
              r = 0,
              a = 0,
              h = this._rings.length;
            r < h;
            r++
          )
            for (i = 0, e = (o = this._rings[r]).length; i < e - 1; i++)
              (n = Qi(o[i], o[i + 1], t, i, !0)) &&
                ((s[a] = s[a] || []),
                s[a].push(n[0]),
                (n[1] === o[i + 1] && i !== e - 2) || (s[a].push(n[1]), a++));
    },
    _simplifyPoints: function () {
      for (
        var t = this._parts, i = this.options.smoothFactor, e = 0, n = t.length;
        e < n;
        e++
      )
        t[e] = Ji(t[e], i);
    },
    _update: function () {
      this._map &&
        (this._clipPoints(), this._simplifyPoints(), this._updatePath());
    },
    _updatePath: function () {
      this._renderer._updatePoly(this);
    },
    _containsPoint: function (t, i) {
      var e,
        n,
        o,
        s,
        r,
        a,
        h = this._clickTolerance();
      if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
      for (e = 0, s = this._parts.length; e < s; e++)
        for (n = 0, o = (r = (a = this._parts[e]).length) - 1; n < r; o = n++)
          if ((i || 0 !== n) && $i(t, a[o], a[n]) <= h) return !0;
      return !1;
    },
  });
  ge._flat = oe;
  var ve = ge.extend({
    options: { fill: !0 },
    isEmpty: function () {
      return !this._latlngs.length || !this._latlngs[0].length;
    },
    getCenter: function () {
      if (!this._map)
        throw new Error("Must add layer to map before using getCenter()");
      var t,
        i,
        e,
        n,
        o,
        s,
        r,
        a,
        h,
        u = this._rings[0],
        l = u.length;
      if (!l) return null;
      for (t = s = r = a = 0, i = l - 1; t < l; i = t++)
        (e = u[t]),
          (n = u[i]),
          (o = e.y * n.x - n.y * e.x),
          (r += (e.x + n.x) * o),
          (a += (e.y + n.y) * o),
          (s += 3 * o);
      return (
        (h = 0 === s ? u[0] : [r / s, a / s]), this._map.layerPointToLatLng(h)
      );
    },
    _convertLatLngs: function (t) {
      var i = ge.prototype._convertLatLngs.call(this, t),
        t = i.length;
      return 2 <= t && i[0] instanceof D && i[0].equals(i[t - 1]) && i.pop(), i;
    },
    _setLatLngs: function (t) {
      ge.prototype._setLatLngs.call(this, t),
        ne(this._latlngs) && (this._latlngs = [this._latlngs]);
    },
    _defaultShape: function () {
      return (ne(this._latlngs[0]) ? this._latlngs : this._latlngs[0])[0];
    },
    _clipPoints: function () {
      var t = this._renderer._bounds,
        i = this.options.weight,
        i = new k(i, i),
        t = new I(t.min.subtract(i), t.max.add(i));
      if (((this._parts = []), this._pxBounds && this._pxBounds.intersects(t)))
        if (this.options.noClip) this._parts = this._rings;
        else
          for (var e, n = 0, o = this._rings.length; n < o; n++)
            (e = se(this._rings[n], t, !0)).length && this._parts.push(e);
    },
    _updatePath: function () {
      this._renderer._updatePoly(this, !0);
    },
    _containsPoint: function (t) {
      var i,
        e,
        n,
        o,
        s,
        r,
        a,
        h,
        u = !1;
      if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
      for (o = 0, a = this._parts.length; o < a; o++)
        for (s = 0, r = (h = (i = this._parts[o]).length) - 1; s < h; r = s++)
          (e = i[s]),
            (n = i[r]),
            e.y > t.y != n.y > t.y &&
              t.x < ((n.x - e.x) * (t.y - e.y)) / (n.y - e.y) + e.x &&
              (u = !u);
      return u || ge.prototype._containsPoint.call(this, t, !0);
    },
  });
  var ye = ue.extend({
    initialize: function (t, i) {
      c(this, i), (this._layers = {}), t && this.addData(t);
    },
    addData: function (t) {
      var i,
        e,
        n,
        o = g(t) ? t : t.features;
      if (o) {
        for (i = 0, e = o.length; i < e; i++)
          ((n = o[i]).geometries ||
            n.geometry ||
            n.features ||
            n.coordinates) &&
            this.addData(n);
        return this;
      }
      var s = this.options;
      if (s.filter && !s.filter(t)) return this;
      var r = xe(t, s);
      return r
        ? ((r.feature = Me(t)),
          (r.defaultOptions = r.options),
          this.resetStyle(r),
          s.onEachFeature && s.onEachFeature(t, r),
          this.addLayer(r))
        : this;
    },
    resetStyle: function (t) {
      return void 0 === t
        ? this.eachLayer(this.resetStyle, this)
        : ((t.options = h({}, t.defaultOptions)),
          this._setLayerStyle(t, this.options.style),
          this);
    },
    setStyle: function (i) {
      return this.eachLayer(function (t) {
        this._setLayerStyle(t, i);
      }, this);
    },
    _setLayerStyle: function (t, i) {
      t.setStyle &&
        ("function" == typeof i && (i = i(t.feature)), t.setStyle(i));
    },
  });
  function xe(t, i) {
    var e,
      n,
      o,
      s,
      r = "Feature" === t.type ? t.geometry : t,
      a = r ? r.coordinates : null,
      h = [],
      u = i && i.pointToLayer,
      l = (i && i.coordsToLatLng) || Pe;
    if (!a && !r) return null;
    switch (r.type) {
      case "Point":
        return we(u, t, (e = l(a)), i);
      case "MultiPoint":
        for (o = 0, s = a.length; o < s; o++)
          (e = l(a[o])), h.push(we(u, t, e, i));
        return new ue(h);
      case "LineString":
      case "MultiLineString":
        return (n = Le(a, "LineString" === r.type ? 0 : 1, l)), new ge(n, i);
      case "Polygon":
      case "MultiPolygon":
        return (n = Le(a, "Polygon" === r.type ? 1 : 2, l)), new ve(n, i);
      case "GeometryCollection":
        for (o = 0, s = r.geometries.length; o < s; o++) {
          var c = xe(
            {
              geometry: r.geometries[o],
              type: "Feature",
              properties: t.properties,
            },
            i
          );
          c && h.push(c);
        }
        return new ue(h);
      default:
        throw new Error("Invalid GeoJSON object.");
    }
  }
  function we(t, i, e, n) {
    return t ? t(i, e) : new de(e, n && n.markersInheritOptions && n);
  }
  function Pe(t) {
    return new D(t[1], t[0], t[2]);
  }
  function Le(t, i, e) {
    for (var n, o = [], s = 0, r = t.length; s < r; s++)
      (n = i ? Le(t[s], i - 1, e) : (e || Pe)(t[s])), o.push(n);
    return o;
  }
  function be(t, i) {
    return (
      (i = "number" == typeof i ? i : 6),
      void 0 !== t.alt
        ? [r(t.lng, i), r(t.lat, i), r(t.alt, i)]
        : [r(t.lng, i), r(t.lat, i)]
    );
  }
  function Te(t, i, e, n) {
    for (var o = [], s = 0, r = t.length; s < r; s++)
      o.push(i ? Te(t[s], i - 1, e, n) : be(t[s], n));
    return !i && e && o.push(o[0]), o;
  }
  function ze(t, i) {
    return t.feature ? h({}, t.feature, { geometry: i }) : Me(i);
  }
  function Me(t) {
    return "Feature" === t.type || "FeatureCollection" === t.type
      ? t
      : { type: "Feature", properties: {}, geometry: t };
  }
  _t = {
    toGeoJSON: function (t) {
      return ze(this, { type: "Point", coordinates: be(this.getLatLng(), t) });
    },
  };
  function Ce(t, i) {
    return new ye(t, i);
  }
  de.include(_t),
    fe.include(_t),
    me.include(_t),
    ge.include({
      toGeoJSON: function (t) {
        var i = !ne(this._latlngs);
        return ze(this, {
          type: (i ? "Multi" : "") + "LineString",
          coordinates: Te(this._latlngs, i ? 1 : 0, !1, t),
        });
      },
    }),
    ve.include({
      toGeoJSON: function (t) {
        var i = !ne(this._latlngs),
          e = i && !ne(this._latlngs[0]),
          t = Te(this._latlngs, e ? 2 : i ? 1 : 0, !0, t);
        return ze(this, {
          type: (e ? "Multi" : "") + "Polygon",
          coordinates: (t = !i ? [t] : t),
        });
      },
    }),
    he.include({
      toMultiPoint: function (i) {
        var e = [];
        return (
          this.eachLayer(function (t) {
            e.push(t.toGeoJSON(i).geometry.coordinates);
          }),
          ze(this, { type: "MultiPoint", coordinates: e })
        );
      },
      toGeoJSON: function (i) {
        var t =
          this.feature && this.feature.geometry && this.feature.geometry.type;
        if ("MultiPoint" === t) return this.toMultiPoint(i);
        var e = "GeometryCollection" === t,
          n = [];
        return (
          this.eachLayer(function (t) {
            t.toGeoJSON &&
              ((t = t.toGeoJSON(i)),
              e
                ? n.push(t.geometry)
                : "FeatureCollection" === (t = Me(t)).type
                ? n.push.apply(n, t.features)
                : n.push(t));
          }),
          e
            ? ze(this, { geometries: n, type: "GeometryCollection" })
            : { type: "FeatureCollection", features: n }
        );
      },
    });
  var ht = Ce,
    Se = ae.extend({
      options: {
        opacity: 1,
        alt: "",
        interactive: !1,
        crossOrigin: !1,
        errorOverlayUrl: "",
        zIndex: 1,
        className: "",
      },
      initialize: function (t, i, e) {
        (this._url = t), (this._bounds = N(i)), c(this, e);
      },
      onAdd: function () {
        this._image ||
          (this._initImage(),
          this.options.opacity < 1 && this._updateOpacity()),
          this.options.interactive &&
            (si(this._image, "leaflet-interactive"),
            this.addInteractiveTarget(this._image)),
          this.getPane().appendChild(this._image),
          this._reset();
      },
      onRemove: function () {
        ti(this._image),
          this.options.interactive && this.removeInteractiveTarget(this._image);
      },
      setOpacity: function (t) {
        return (
          (this.options.opacity = t), this._image && this._updateOpacity(), this
        );
      },
      setStyle: function (t) {
        return t.opacity && this.setOpacity(t.opacity), this;
      },
      bringToFront: function () {
        return this._map && ei(this._image), this;
      },
      bringToBack: function () {
        return this._map && ni(this._image), this;
      },
      setUrl: function (t) {
        return (this._url = t), this._image && (this._image.src = t), this;
      },
      setBounds: function (t) {
        return (this._bounds = N(t)), this._map && this._reset(), this;
      },
      getEvents: function () {
        var t = { zoom: this._reset, viewreset: this._reset };
        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      },
      setZIndex: function (t) {
        return (this.options.zIndex = t), this._updateZIndex(), this;
      },
      getBounds: function () {
        return this._bounds;
      },
      getElement: function () {
        return this._image;
      },
      _initImage: function () {
        var t = "IMG" === this._url.tagName,
          i = (this._image = t ? this._url : Qt("img"));
        si(i, "leaflet-image-layer"),
          this._zoomAnimated && si(i, "leaflet-zoom-animated"),
          this.options.className && si(i, this.options.className),
          (i.onselectstart = a),
          (i.onmousemove = a),
          (i.onload = _(this.fire, this, "load")),
          (i.onerror = _(this._overlayOnError, this, "error")),
          (!this.options.crossOrigin && "" !== this.options.crossOrigin) ||
            (i.crossOrigin =
              !0 === this.options.crossOrigin ? "" : this.options.crossOrigin),
          this.options.zIndex && this._updateZIndex(),
          t
            ? (this._url = i.src)
            : ((i.src = this._url), (i.alt = this.options.alt));
      },
      _animateZoom: function (t) {
        var i = this._map.getZoomScale(t.zoom),
          t = this._map._latLngBoundsToNewLayerBounds(
            this._bounds,
            t.zoom,
            t.center
          ).min;
        ci(this._image, t, i);
      },
      _reset: function () {
        var t = this._image,
          i = new I(
            this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
            this._map.latLngToLayerPoint(this._bounds.getSouthEast())
          ),
          e = i.getSize();
        _i(t, i.min),
          (t.style.width = e.x + "px"),
          (t.style.height = e.y + "px");
      },
      _updateOpacity: function () {
        ui(this._image, this.options.opacity);
      },
      _updateZIndex: function () {
        this._image &&
          void 0 !== this.options.zIndex &&
          null !== this.options.zIndex &&
          (this._image.style.zIndex = this.options.zIndex);
      },
      _overlayOnError: function () {
        this.fire("error");
        var t = this.options.errorOverlayUrl;
        t && this._url !== t && ((this._url = t), (this._image.src = t));
      },
    }),
    Ze = Se.extend({
      options: { autoplay: !0, loop: !0, keepAspectRatio: !0, muted: !1 },
      _initImage: function () {
        var t = "VIDEO" === this._url.tagName,
          i = (this._image = t ? this._url : Qt("video"));
        if (
          (si(i, "leaflet-image-layer"),
          this._zoomAnimated && si(i, "leaflet-zoom-animated"),
          this.options.className && si(i, this.options.className),
          (i.onselectstart = a),
          (i.onmousemove = a),
          (i.onloadeddata = _(this.fire, this, "load")),
          t)
        ) {
          for (
            var e = i.getElementsByTagName("source"), n = [], o = 0;
            o < e.length;
            o++
          )
            n.push(e[o].src);
          this._url = 0 < e.length ? n : [i.src];
        } else {
          g(this._url) || (this._url = [this._url]),
            !this.options.keepAspectRatio &&
              Object.prototype.hasOwnProperty.call(i.style, "objectFit") &&
              (i.style.objectFit = "fill"),
            (i.autoplay = !!this.options.autoplay),
            (i.loop = !!this.options.loop),
            (i.muted = !!this.options.muted);
          for (var s = 0; s < this._url.length; s++) {
            var r = Qt("source");
            (r.src = this._url[s]), i.appendChild(r);
          }
        }
      },
    });
  var Ee = Se.extend({
    _initImage: function () {
      var t = (this._image = this._url);
      si(t, "leaflet-image-layer"),
        this._zoomAnimated && si(t, "leaflet-zoom-animated"),
        this.options.className && si(t, this.options.className),
        (t.onselectstart = a),
        (t.onmousemove = a);
    },
  });
  var ke = ae.extend({
      options: { offset: [0, 7], className: "", pane: "popupPane" },
      initialize: function (t, i) {
        c(this, t), (this._source = i);
      },
      onAdd: function (t) {
        (this._zoomAnimated = t._zoomAnimated),
          this._container || this._initLayout(),
          t._fadeAnimated && ui(this._container, 0),
          clearTimeout(this._removeTimeout),
          this.getPane().appendChild(this._container),
          this.update(),
          t._fadeAnimated && ui(this._container, 1),
          this.bringToFront();
      },
      onRemove: function (t) {
        t._fadeAnimated
          ? (ui(this._container, 0),
            (this._removeTimeout = setTimeout(
              _(ti, void 0, this._container),
              200
            )))
          : ti(this._container);
      },
      getLatLng: function () {
        return this._latlng;
      },
      setLatLng: function (t) {
        return (
          (this._latlng = j(t)),
          this._map && (this._updatePosition(), this._adjustPan()),
          this
        );
      },
      getContent: function () {
        return this._content;
      },
      setContent: function (t) {
        return (this._content = t), this.update(), this;
      },
      getElement: function () {
        return this._container;
      },
      update: function () {
        this._map &&
          ((this._container.style.visibility = "hidden"),
          this._updateContent(),
          this._updateLayout(),
          this._updatePosition(),
          (this._container.style.visibility = ""),
          this._adjustPan());
      },
      getEvents: function () {
        var t = { zoom: this._updatePosition, viewreset: this._updatePosition };
        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      },
      isOpen: function () {
        return !!this._map && this._map.hasLayer(this);
      },
      bringToFront: function () {
        return this._map && ei(this._container), this;
      },
      bringToBack: function () {
        return this._map && ni(this._container), this;
      },
      _prepareOpen: function (t, i, e) {
        if ((i instanceof ae || ((e = i), (i = t)), i instanceof ue))
          for (var n in t._layers) {
            i = t._layers[n];
            break;
          }
        if (!e)
          if (i.getCenter) e = i.getCenter();
          else if (i.getLatLng) e = i.getLatLng();
          else {
            if (!i.getBounds)
              throw new Error("Unable to get source layer LatLng.");
            e = i.getBounds().getCenter();
          }
        return (this._source = i), this.update(), e;
      },
      _updateContent: function () {
        if (this._content) {
          var t = this._contentNode,
            i =
              "function" == typeof this._content
                ? this._content(this._source || this)
                : this._content;
          if ("string" == typeof i) t.innerHTML = i;
          else {
            for (; t.hasChildNodes(); ) t.removeChild(t.firstChild);
            t.appendChild(i);
          }
          this.fire("contentupdate");
        }
      },
      _updatePosition: function () {
        var t, i, e;
        this._map &&
          ((t = this._map.latLngToLayerPoint(this._latlng)),
          (e = A(this.options.offset)),
          (i = this._getAnchor()),
          this._zoomAnimated
            ? _i(this._container, t.add(i))
            : (e = e.add(t).add(i)),
          (i = this._containerBottom = -e.y),
          (e = this._containerLeft =
            -Math.round(this._containerWidth / 2) + e.x),
          (this._container.style.bottom = i + "px"),
          (this._container.style.left = e + "px"));
      },
      _getAnchor: function () {
        return [0, 0];
      },
    }),
    Be = ke.extend({
      options: {
        maxWidth: 300,
        minWidth: 50,
        maxHeight: null,
        autoPan: !0,
        autoPanPaddingTopLeft: null,
        autoPanPaddingBottomRight: null,
        autoPanPadding: [5, 5],
        keepInView: !1,
        closeButton: !0,
        autoClose: !0,
        closeOnEscapeKey: !0,
        className: "",
      },
      openOn: function (t) {
        return t.openPopup(this), this;
      },
      onAdd: function (t) {
        ke.prototype.onAdd.call(this, t),
          t.fire("popupopen", { popup: this }),
          this._source &&
            (this._source.fire("popupopen", { popup: this }, !0),
            this._source instanceof pe || this._source.on("preclick", Mi));
      },
      onRemove: function (t) {
        ke.prototype.onRemove.call(this, t),
          t.fire("popupclose", { popup: this }),
          this._source &&
            (this._source.fire("popupclose", { popup: this }, !0),
            this._source instanceof pe || this._source.off("preclick", Mi));
      },
      getEvents: function () {
        var t = ke.prototype.getEvents.call(this);
        return (
          (void 0 !== this.options.closeOnClick
            ? this.options.closeOnClick
            : this._map.options.closePopupOnClick) &&
            (t.preclick = this._close),
          this.options.keepInView && (t.moveend = this._adjustPan),
          t
        );
      },
      _close: function () {
        this._map && this._map.closePopup(this);
      },
      _initLayout: function () {
        var t = "leaflet-popup",
          i = (this._container = Qt(
            "div",
            t + " " + (this.options.className || "") + " leaflet-zoom-animated"
          )),
          e = (this._wrapper = Qt("div", t + "-content-wrapper", i));
        (this._contentNode = Qt("div", t + "-content", e)),
          Si(i),
          Ci(this._contentNode),
          xi(i, "contextmenu", Mi),
          (this._tipContainer = Qt("div", t + "-tip-container", i)),
          (this._tip = Qt("div", t + "-tip", this._tipContainer)),
          this.options.closeButton &&
            (((i = this._closeButton = Qt("a", t + "-close-button", i)).href =
              "#close"),
            (i.innerHTML = "&#215;"),
            xi(i, "click", this._onCloseButtonClick, this));
      },
      _updateLayout: function () {
        var t = this._contentNode,
          i = t.style;
        (i.width = ""), (i.whiteSpace = "nowrap");
        var e = t.offsetWidth,
          e = Math.min(e, this.options.maxWidth);
        (e = Math.max(e, this.options.minWidth)),
          (i.width = e + 1 + "px"),
          (i.whiteSpace = ""),
          (i.height = "");
        var n = t.offsetHeight,
          o = this.options.maxHeight,
          e = "leaflet-popup-scrolled";
        o && o < n ? ((i.height = o + "px"), si(t, e)) : ri(t, e),
          (this._containerWidth = this._container.offsetWidth);
      },
      _animateZoom: function (t) {
        var i = this._map._latLngToNewLayerPoint(
            this._latlng,
            t.zoom,
            t.center
          ),
          t = this._getAnchor();
        _i(this._container, i.add(t));
      },
      _adjustPan: function () {
        var t, i, e, n, o, s, r, a, h;
        this.options.autoPan &&
          (this._map._panAnim && this._map._panAnim.stop(),
          (t = this._map),
          (r = parseInt($t(this._container, "marginBottom"), 10) || 0),
          (i = this._container.offsetHeight + r),
          (e = this._containerWidth),
          (a = new k(this._containerLeft, -i - this._containerBottom))._add(
            di(this._container)
          ),
          (n = t.layerPointToContainerPoint(a)),
          (h = A(this.options.autoPanPadding)),
          (o = A(this.options.autoPanPaddingTopLeft || h)),
          (s = A(this.options.autoPanPaddingBottomRight || h)),
          (r = t.getSize()),
          (h = a = 0),
          n.x + e + s.x > r.x && (a = n.x + e - r.x + s.x),
          n.x - a - o.x < 0 && (a = n.x - o.x),
          n.y + i + s.y > r.y && (h = n.y + i - r.y + s.y),
          n.y - h - o.y < 0 && (h = n.y - o.y),
          (a || h) && t.fire("autopanstart").panBy([a, h]));
      },
      _onCloseButtonClick: function (t) {
        this._close(), Ei(t);
      },
      _getAnchor: function () {
        return A(
          this._source && this._source._getPopupAnchor
            ? this._source._getPopupAnchor()
            : [0, 0]
        );
      },
    });
  ji.mergeOptions({ closePopupOnClick: !0 }),
    ji.include({
      openPopup: function (t, i, e) {
        return (
          t instanceof Be || (t = new Be(e).setContent(t)),
          i && t.setLatLng(i),
          this.hasLayer(t)
            ? this
            : (this._popup &&
                this._popup.options.autoClose &&
                this.closePopup(),
              (this._popup = t),
              this.addLayer(t))
        );
      },
      closePopup: function (t) {
        return (
          (t && t !== this._popup) || ((t = this._popup), (this._popup = null)),
          t && this.removeLayer(t),
          this
        );
      },
    }),
    ae.include({
      bindPopup: function (t, i) {
        return (
          t instanceof Be
            ? (c(t, i), ((this._popup = t)._source = this))
            : ((this._popup && !i) || (this._popup = new Be(i, this)),
              this._popup.setContent(t)),
          this._popupHandlersAdded ||
            (this.on({
              click: this._openPopup,
              keypress: this._onKeyPress,
              remove: this.closePopup,
              move: this._movePopup,
            }),
            (this._popupHandlersAdded = !0)),
          this
        );
      },
      unbindPopup: function () {
        return (
          this._popup &&
            (this.off({
              click: this._openPopup,
              keypress: this._onKeyPress,
              remove: this.closePopup,
              move: this._movePopup,
            }),
            (this._popupHandlersAdded = !1),
            (this._popup = null)),
          this
        );
      },
      openPopup: function (t, i) {
        return (
          this._popup &&
            this._map &&
            ((i = this._popup._prepareOpen(this, t, i)),
            this._map.openPopup(this._popup, i)),
          this
        );
      },
      closePopup: function () {
        return this._popup && this._popup._close(), this;
      },
      togglePopup: function (t) {
        return (
          this._popup &&
            (this._popup._map ? this.closePopup() : this.openPopup(t)),
          this
        );
      },
      isPopupOpen: function () {
        return !!this._popup && this._popup.isOpen();
      },
      setPopupContent: function (t) {
        return this._popup && this._popup.setContent(t), this;
      },
      getPopup: function () {
        return this._popup;
      },
      _openPopup: function (t) {
        var i = t.layer || t.target;
        this._popup &&
          this._map &&
          (Ei(t),
          i instanceof pe
            ? this.openPopup(t.layer || t.target, t.latlng)
            : this._map.hasLayer(this._popup) && this._popup._source === i
            ? this.closePopup()
            : this.openPopup(i, t.latlng));
      },
      _movePopup: function (t) {
        this._popup.setLatLng(t.latlng);
      },
      _onKeyPress: function (t) {
        13 === t.originalEvent.keyCode && this._openPopup(t);
      },
    });
  var Ae = ke.extend({
    options: {
      pane: "tooltipPane",
      offset: [0, 0],
      direction: "auto",
      permanent: !1,
      sticky: !1,
      interactive: !1,
      opacity: 0.9,
    },
    onAdd: function (t) {
      ke.prototype.onAdd.call(this, t),
        this.setOpacity(this.options.opacity),
        t.fire("tooltipopen", { tooltip: this }),
        this._source && this._source.fire("tooltipopen", { tooltip: this }, !0);
    },
    onRemove: function (t) {
      ke.prototype.onRemove.call(this, t),
        t.fire("tooltipclose", { tooltip: this }),
        this._source &&
          this._source.fire("tooltipclose", { tooltip: this }, !0);
    },
    getEvents: function () {
      var t = ke.prototype.getEvents.call(this);
      return xt && !this.options.permanent && (t.preclick = this._close), t;
    },
    _close: function () {
      this._map && this._map.closeTooltip(this);
    },
    _initLayout: function () {
      var t =
        "leaflet-tooltip " +
        (this.options.className || "") +
        " leaflet-zoom-" +
        (this._zoomAnimated ? "animated" : "hide");
      this._contentNode = this._container = Qt("div", t);
    },
    _updateLayout: function () {},
    _adjustPan: function () {},
    _setPosition: function (t) {
      var i,
        e = this._map,
        n = this._container,
        o = e.latLngToContainerPoint(e.getCenter()),
        s = e.layerPointToContainerPoint(t),
        r = this.options.direction,
        a = n.offsetWidth,
        h = n.offsetHeight,
        u = A(this.options.offset),
        e = this._getAnchor(),
        h =
          "top" === r
            ? ((i = a / 2), h)
            : "bottom" === r
            ? ((i = a / 2), 0)
            : ((i =
                "center" === r
                  ? a / 2
                  : "right" === r
                  ? 0
                  : "left" === r
                  ? a
                  : s.x < o.x
                  ? ((r = "right"), 0)
                  : ((r = "left"), a + 2 * (u.x + e.x))),
              h / 2);
      (t = t.subtract(A(i, h, !0)).add(u).add(e)),
        ri(n, "leaflet-tooltip-right"),
        ri(n, "leaflet-tooltip-left"),
        ri(n, "leaflet-tooltip-top"),
        ri(n, "leaflet-tooltip-bottom"),
        si(n, "leaflet-tooltip-" + r),
        _i(n, t);
    },
    _updatePosition: function () {
      var t = this._map.latLngToLayerPoint(this._latlng);
      this._setPosition(t);
    },
    setOpacity: function (t) {
      (this.options.opacity = t), this._container && ui(this._container, t);
    },
    _animateZoom: function (t) {
      t = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
      this._setPosition(t);
    },
    _getAnchor: function () {
      return A(
        this._source && this._source._getTooltipAnchor && !this.options.sticky
          ? this._source._getTooltipAnchor()
          : [0, 0]
      );
    },
  });
  ji.include({
    openTooltip: function (t, i, e) {
      return (
        t instanceof Ae || (t = new Ae(e).setContent(t)),
        i && t.setLatLng(i),
        this.hasLayer(t) ? this : this.addLayer(t)
      );
    },
    closeTooltip: function (t) {
      return t && this.removeLayer(t), this;
    },
  }),
    ae.include({
      bindTooltip: function (t, i) {
        return (
          t instanceof Ae
            ? (c(t, i), ((this._tooltip = t)._source = this))
            : ((this._tooltip && !i) || (this._tooltip = new Ae(i, this)),
              this._tooltip.setContent(t)),
          this._initTooltipInteractions(),
          this._tooltip.options.permanent &&
            this._map &&
            this._map.hasLayer(this) &&
            this.openTooltip(),
          this
        );
      },
      unbindTooltip: function () {
        return (
          this._tooltip &&
            (this._initTooltipInteractions(!0),
            this.closeTooltip(),
            (this._tooltip = null)),
          this
        );
      },
      _initTooltipInteractions: function (t) {
        var i, e;
        (!t && this._tooltipHandlersAdded) ||
          ((i = t ? "off" : "on"),
          (e = { remove: this.closeTooltip, move: this._moveTooltip }),
          this._tooltip.options.permanent
            ? (e.add = this._openTooltip)
            : ((e.mouseover = this._openTooltip),
              (e.mouseout = this.closeTooltip),
              this._tooltip.options.sticky && (e.mousemove = this._moveTooltip),
              xt && (e.click = this._openTooltip)),
          this[i](e),
          (this._tooltipHandlersAdded = !t));
      },
      openTooltip: function (t, i) {
        return (
          this._tooltip &&
            this._map &&
            ((i = this._tooltip._prepareOpen(this, t, i)),
            this._map.openTooltip(this._tooltip, i),
            this._tooltip.options.interactive &&
              this._tooltip._container &&
              (si(this._tooltip._container, "leaflet-clickable"),
              this.addInteractiveTarget(this._tooltip._container))),
          this
        );
      },
      closeTooltip: function () {
        return (
          this._tooltip &&
            (this._tooltip._close(),
            this._tooltip.options.interactive &&
              this._tooltip._container &&
              (ri(this._tooltip._container, "leaflet-clickable"),
              this.removeInteractiveTarget(this._tooltip._container))),
          this
        );
      },
      toggleTooltip: function (t) {
        return (
          this._tooltip &&
            (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)),
          this
        );
      },
      isTooltipOpen: function () {
        return this._tooltip.isOpen();
      },
      setTooltipContent: function (t) {
        return this._tooltip && this._tooltip.setContent(t), this;
      },
      getTooltip: function () {
        return this._tooltip;
      },
      _openTooltip: function (t) {
        var i = t.layer || t.target;
        this._tooltip &&
          this._map &&
          this.openTooltip(i, this._tooltip.options.sticky ? t.latlng : void 0);
      },
      _moveTooltip: function (t) {
        var i = t.latlng;
        this._tooltip.options.sticky &&
          t.originalEvent &&
          ((t = this._map.mouseEventToContainerPoint(t.originalEvent)),
          (t = this._map.containerPointToLayerPoint(t)),
          (i = this._map.layerPointToLatLng(t))),
          this._tooltip.setLatLng(i);
      },
    });
  var Ie = le.extend({
    options: {
      iconSize: [12, 12],
      html: !1,
      bgPos: null,
      className: "leaflet-div-icon",
    },
    createIcon: function (t) {
      var i = t && "DIV" === t.tagName ? t : document.createElement("div"),
        t = this.options;
      return (
        t.html instanceof Element
          ? (ii(i), i.appendChild(t.html))
          : (i.innerHTML = !1 !== t.html ? t.html : ""),
        t.bgPos &&
          ((t = A(t.bgPos)),
          (i.style.backgroundPosition = -t.x + "px " + -t.y + "px")),
        this._setIconStyles(i, "icon"),
        i
      );
    },
    createShadow: function () {
      return null;
    },
  });
  le.Default = ce;
  var Oe = ae.extend({
    options: {
      tileSize: 256,
      opacity: 1,
      updateWhenIdle: F,
      updateWhenZooming: !0,
      updateInterval: 200,
      zIndex: 1,
      bounds: null,
      minZoom: 0,
      maxZoom: void 0,
      maxNativeZoom: void 0,
      minNativeZoom: void 0,
      noWrap: !1,
      pane: "tilePane",
      className: "",
      keepBuffer: 2,
    },
    initialize: function (t) {
      c(this, t);
    },
    onAdd: function () {
      this._initContainer(),
        (this._levels = {}),
        (this._tiles = {}),
        this._resetView(),
        this._update();
    },
    beforeAdd: function (t) {
      t._addZoomLimit(this);
    },
    onRemove: function (t) {
      this._removeAllTiles(),
        ti(this._container),
        t._removeZoomLimit(this),
        (this._container = null),
        (this._tileZoom = void 0);
    },
    bringToFront: function () {
      return (
        this._map && (ei(this._container), this._setAutoZIndex(Math.max)), this
      );
    },
    bringToBack: function () {
      return (
        this._map && (ni(this._container), this._setAutoZIndex(Math.min)), this
      );
    },
    getContainer: function () {
      return this._container;
    },
    setOpacity: function (t) {
      return (this.options.opacity = t), this._updateOpacity(), this;
    },
    setZIndex: function (t) {
      return (this.options.zIndex = t), this._updateZIndex(), this;
    },
    isLoading: function () {
      return this._loading;
    },
    redraw: function () {
      return this._map && (this._removeAllTiles(), this._update()), this;
    },
    getEvents: function () {
      var t = {
        viewprereset: this._invalidateAll,
        viewreset: this._resetView,
        zoom: this._resetView,
        moveend: this._onMoveEnd,
      };
      return (
        this.options.updateWhenIdle ||
          (this._onMove ||
            (this._onMove = n(
              this._onMoveEnd,
              this.options.updateInterval,
              this
            )),
          (t.move = this._onMove)),
        this._zoomAnimated && (t.zoomanim = this._animateZoom),
        t
      );
    },
    createTile: function () {
      return document.createElement("div");
    },
    getTileSize: function () {
      var t = this.options.tileSize;
      return t instanceof k ? t : new k(t, t);
    },
    _updateZIndex: function () {
      this._container &&
        void 0 !== this.options.zIndex &&
        null !== this.options.zIndex &&
        (this._container.style.zIndex = this.options.zIndex);
    },
    _setAutoZIndex: function (t) {
      for (
        var i,
          e = this.getPane().children,
          n = -t(-1 / 0, 1 / 0),
          o = 0,
          s = e.length;
        o < s;
        o++
      )
        (i = e[o].style.zIndex),
          e[o] !== this._container && i && (n = t(n, +i));
      isFinite(n) &&
        ((this.options.zIndex = n + t(-1, 1)), this._updateZIndex());
    },
    _updateOpacity: function () {
      if (this._map && !Q) {
        ui(this._container, this.options.opacity);
        var t,
          i = +new Date(),
          e = !1,
          n = !1;
        for (t in this._tiles) {
          var o,
            s = this._tiles[t];
          s.current &&
            s.loaded &&
            ((o = Math.min(1, (i - s.loaded) / 200)),
            ui(s.el, o),
            o < 1
              ? (e = !0)
              : (s.active ? (n = !0) : this._onOpaqueTile(s), (s.active = !0)));
        }
        n && !this._noPrune && this._pruneTiles(),
          e &&
            (M(this._fadeFrame),
            (this._fadeFrame = z(this._updateOpacity, this)));
      }
    },
    _onOpaqueTile: a,
    _initContainer: function () {
      this._container ||
        ((this._container = Qt(
          "div",
          "leaflet-layer " + (this.options.className || "")
        )),
        this._updateZIndex(),
        this.options.opacity < 1 && this._updateOpacity(),
        this.getPane().appendChild(this._container));
    },
    _updateLevels: function () {
      var t = this._tileZoom,
        i = this.options.maxZoom;
      if (void 0 !== t) {
        for (var e in this._levels)
          (e = Number(e)),
            this._levels[e].el.children.length || e === t
              ? ((this._levels[e].el.style.zIndex = i - Math.abs(t - e)),
                this._onUpdateLevel(e))
              : (ti(this._levels[e].el),
                this._removeTilesAtZoom(e),
                this._onRemoveLevel(e),
                delete this._levels[e]);
        var n = this._levels[t],
          o = this._map;
        return (
          n ||
            (((n = this._levels[t] = {}).el = Qt(
              "div",
              "leaflet-tile-container leaflet-zoom-animated",
              this._container
            )),
            (n.el.style.zIndex = i),
            (n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round()),
            (n.zoom = t),
            this._setZoomTransform(n, o.getCenter(), o.getZoom()),
            a(n.el.offsetWidth),
            this._onCreateLevel(n)),
          (this._level = n)
        );
      }
    },
    _onUpdateLevel: a,
    _onRemoveLevel: a,
    _onCreateLevel: a,
    _pruneTiles: function () {
      if (this._map) {
        var t,
          i,
          e,
          n = this._map.getZoom();
        if (n > this.options.maxZoom || n < this.options.minZoom)
          this._removeAllTiles();
        else {
          for (t in this._tiles) (e = this._tiles[t]).retain = e.current;
          for (t in this._tiles)
            (e = this._tiles[t]).current &&
              !e.active &&
              ((i = e.coords),
              this._retainParent(i.x, i.y, i.z, i.z - 5) ||
                this._retainChildren(i.x, i.y, i.z, i.z + 2));
          for (t in this._tiles) this._tiles[t].retain || this._removeTile(t);
        }
      }
    },
    _removeTilesAtZoom: function (t) {
      for (var i in this._tiles)
        this._tiles[i].coords.z === t && this._removeTile(i);
    },
    _removeAllTiles: function () {
      for (var t in this._tiles) this._removeTile(t);
    },
    _invalidateAll: function () {
      for (var t in this._levels)
        ti(this._levels[t].el),
          this._onRemoveLevel(Number(t)),
          delete this._levels[t];
      this._removeAllTiles(), (this._tileZoom = void 0);
    },
    _retainParent: function (t, i, e, n) {
      var o = Math.floor(t / 2),
        t = Math.floor(i / 2),
        i = e - 1,
        e = new k(+o, +t);
      e.z = +i;
      (e = this._tileCoordsToKey(e)), (e = this._tiles[e]);
      return e && e.active
        ? (e.retain = !0)
        : (e && e.loaded && (e.retain = !0),
          n < i && this._retainParent(o, t, i, n));
    },
    _retainChildren: function (t, i, e, n) {
      for (var o = 2 * t; o < 2 * t + 2; o++)
        for (var s = 2 * i; s < 2 * i + 2; s++) {
          var r = new k(o, s);
          r.z = e + 1;
          (r = this._tileCoordsToKey(r)), (r = this._tiles[r]);
          r && r.active
            ? (r.retain = !0)
            : (r && r.loaded && (r.retain = !0),
              e + 1 < n && this._retainChildren(o, s, e + 1, n));
        }
    },
    _resetView: function (t) {
      t = t && (t.pinch || t.flyTo);
      this._setView(this._map.getCenter(), this._map.getZoom(), t, t);
    },
    _animateZoom: function (t) {
      this._setView(t.center, t.zoom, !0, t.noUpdate);
    },
    _clampZoom: function (t) {
      var i = this.options;
      return void 0 !== i.minNativeZoom && t < i.minNativeZoom
        ? i.minNativeZoom
        : void 0 !== i.maxNativeZoom && i.maxNativeZoom < t
        ? i.maxNativeZoom
        : t;
    },
    _setView: function (t, i, e, n) {
      var o = Math.round(i),
        o =
          (void 0 !== this.options.maxZoom && o > this.options.maxZoom) ||
          (void 0 !== this.options.minZoom && o < this.options.minZoom)
            ? void 0
            : this._clampZoom(o),
        s = this.options.updateWhenZooming && o !== this._tileZoom;
      (n && !s) ||
        ((this._tileZoom = o),
        this._abortLoading && this._abortLoading(),
        this._updateLevels(),
        this._resetGrid(),
        void 0 !== o && this._update(t),
        e || this._pruneTiles(),
        (this._noPrune = !!e)),
        this._setZoomTransforms(t, i);
    },
    _setZoomTransforms: function (t, i) {
      for (var e in this._levels) this._setZoomTransform(this._levels[e], t, i);
    },
    _setZoomTransform: function (t, i, e) {
      var n = this._map.getZoomScale(e, t.zoom),
        e = t.origin
          .multiplyBy(n)
          .subtract(this._map._getNewPixelOrigin(i, e))
          .round();
      ft ? ci(t.el, e, n) : _i(t.el, e);
    },
    _resetGrid: function () {
      var t = this._map,
        i = t.options.crs,
        e = (this._tileSize = this.getTileSize()),
        n = this._tileZoom,
        o = this._map.getPixelWorldBounds(this._tileZoom);
      o && (this._globalTileRange = this._pxBoundsToTileRange(o)),
        (this._wrapX = i.wrapLng &&
          !this.options.noWrap && [
            Math.floor(t.project([0, i.wrapLng[0]], n).x / e.x),
            Math.ceil(t.project([0, i.wrapLng[1]], n).x / e.y),
          ]),
        (this._wrapY = i.wrapLat &&
          !this.options.noWrap && [
            Math.floor(t.project([i.wrapLat[0], 0], n).y / e.x),
            Math.ceil(t.project([i.wrapLat[1], 0], n).y / e.y),
          ]);
    },
    _onMoveEnd: function () {
      this._map && !this._map._animatingZoom && this._update();
    },
    _getTiledPixelBounds: function (t) {
      var i = this._map,
        e = i._animatingZoom
          ? Math.max(i._animateToZoom, i.getZoom())
          : i.getZoom(),
        e = i.getZoomScale(e, this._tileZoom),
        t = i.project(t, this._tileZoom).floor(),
        e = i.getSize().divideBy(2 * e);
      return new I(t.subtract(e), t.add(e));
    },
    _update: function (t) {
      var i = this._map;
      if (i) {
        var e = this._clampZoom(i.getZoom());
        if ((void 0 === t && (t = i.getCenter()), void 0 !== this._tileZoom)) {
          var n,
            i = this._getTiledPixelBounds(t),
            o = this._pxBoundsToTileRange(i),
            s = o.getCenter(),
            r = [],
            i = this.options.keepBuffer,
            a = new I(
              o.getBottomLeft().subtract([i, -i]),
              o.getTopRight().add([i, -i])
            );
          if (
            !(
              isFinite(o.min.x) &&
              isFinite(o.min.y) &&
              isFinite(o.max.x) &&
              isFinite(o.max.y)
            )
          )
            throw new Error("Attempted to load an infinite number of tiles");
          for (n in this._tiles) {
            var h = this._tiles[n].coords;
            (h.z === this._tileZoom && a.contains(new k(h.x, h.y))) ||
              (this._tiles[n].current = !1);
          }
          if (1 < Math.abs(e - this._tileZoom)) this._setView(t, e);
          else {
            for (var u = o.min.y; u <= o.max.y; u++)
              for (var l = o.min.x; l <= o.max.x; l++) {
                var c,
                  _ = new k(l, u);
                (_.z = this._tileZoom),
                  this._isValidTile(_) &&
                    ((c = this._tiles[this._tileCoordsToKey(_)])
                      ? (c.current = !0)
                      : r.push(_));
              }
            if (
              (r.sort(function (t, i) {
                return t.distanceTo(s) - i.distanceTo(s);
              }),
              0 !== r.length)
            ) {
              this._loading || ((this._loading = !0), this.fire("loading"));
              for (
                var d = document.createDocumentFragment(), l = 0;
                l < r.length;
                l++
              )
                this._addTile(r[l], d);
              this._level.el.appendChild(d);
            }
          }
        }
      }
    },
    _isValidTile: function (t) {
      var i = this._map.options.crs;
      if (!i.infinite) {
        var e = this._globalTileRange;
        if (
          (!i.wrapLng && (t.x < e.min.x || t.x > e.max.x)) ||
          (!i.wrapLat && (t.y < e.min.y || t.y > e.max.y))
        )
          return !1;
      }
      if (!this.options.bounds) return !0;
      t = this._tileCoordsToBounds(t);
      return N(this.options.bounds).overlaps(t);
    },
    _keyToBounds: function (t) {
      return this._tileCoordsToBounds(this._keyToTileCoords(t));
    },
    _tileCoordsToNwSe: function (t) {
      var i = this._map,
        e = this.getTileSize(),
        n = t.scaleBy(e),
        e = n.add(e);
      return [i.unproject(n, t.z), i.unproject(e, t.z)];
    },
    _tileCoordsToBounds: function (t) {
      (t = this._tileCoordsToNwSe(t)), (t = new R(t[0], t[1]));
      return (t = !this.options.noWrap ? this._map.wrapLatLngBounds(t) : t);
    },
    _tileCoordsToKey: function (t) {
      return t.x + ":" + t.y + ":" + t.z;
    },
    _keyToTileCoords: function (t) {
      var i = t.split(":"),
        t = new k(+i[0], +i[1]);
      return (t.z = +i[2]), t;
    },
    _removeTile: function (t) {
      var i = this._tiles[t];
      i &&
        (ti(i.el),
        delete this._tiles[t],
        this.fire("tileunload", {
          tile: i.el,
          coords: this._keyToTileCoords(t),
        }));
    },
    _initTile: function (t) {
      si(t, "leaflet-tile");
      var i = this.getTileSize();
      (t.style.width = i.x + "px"),
        (t.style.height = i.y + "px"),
        (t.onselectstart = a),
        (t.onmousemove = a),
        Q && this.options.opacity < 1 && ui(t, this.options.opacity),
        et && !nt && (t.style.WebkitBackfaceVisibility = "hidden");
    },
    _addTile: function (t, i) {
      var e = this._getTilePos(t),
        n = this._tileCoordsToKey(t),
        o = this.createTile(this._wrapCoords(t), _(this._tileReady, this, t));
      this._initTile(o),
        this.createTile.length < 2 && z(_(this._tileReady, this, t, null, o)),
        _i(o, e),
        (this._tiles[n] = { el: o, coords: t, current: !0 }),
        i.appendChild(o),
        this.fire("tileloadstart", { tile: o, coords: t });
    },
    _tileReady: function (t, i, e) {
      i && this.fire("tileerror", { error: i, tile: e, coords: t });
      var n = this._tileCoordsToKey(t);
      (e = this._tiles[n]) &&
        ((e.loaded = +new Date()),
        this._map._fadeAnimated
          ? (ui(e.el, 0),
            M(this._fadeFrame),
            (this._fadeFrame = z(this._updateOpacity, this)))
          : ((e.active = !0), this._pruneTiles()),
        i ||
          (si(e.el, "leaflet-tile-loaded"),
          this.fire("tileload", { tile: e.el, coords: t })),
        this._noTilesToLoad() &&
          ((this._loading = !1),
          this.fire("load"),
          Q || !this._map._fadeAnimated
            ? z(this._pruneTiles, this)
            : setTimeout(_(this._pruneTiles, this), 250)));
    },
    _getTilePos: function (t) {
      return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
    },
    _wrapCoords: function (t) {
      var i = new k(
        this._wrapX ? o(t.x, this._wrapX) : t.x,
        this._wrapY ? o(t.y, this._wrapY) : t.y
      );
      return (i.z = t.z), i;
    },
    _pxBoundsToTileRange: function (t) {
      var i = this.getTileSize();
      return new I(
        t.min.unscaleBy(i).floor(),
        t.max.unscaleBy(i).ceil().subtract([1, 1])
      );
    },
    _noTilesToLoad: function () {
      for (var t in this._tiles) if (!this._tiles[t].loaded) return !1;
      return !0;
    },
  });
  var Re = Oe.extend({
    options: {
      minZoom: 0,
      maxZoom: 18,
      subdomains: "abc",
      errorTileUrl: "",
      zoomOffset: 0,
      tms: !1,
      zoomReverse: !1,
      detectRetina: !1,
      crossOrigin: !1,
    },
    initialize: function (t, i) {
      (this._url = t),
        (i = c(this, i)).detectRetina &&
          Pt &&
          0 < i.maxZoom &&
          ((i.tileSize = Math.floor(i.tileSize / 2)),
          i.zoomReverse
            ? (i.zoomOffset--, i.minZoom++)
            : (i.zoomOffset++, i.maxZoom--),
          (i.minZoom = Math.max(0, i.minZoom))),
        "string" == typeof i.subdomains &&
          (i.subdomains = i.subdomains.split("")),
        et || this.on("tileunload", this._onTileRemove);
    },
    setUrl: function (t, i) {
      return (
        this._url === t && void 0 === i && (i = !0),
        (this._url = t),
        i || this.redraw(),
        this
      );
    },
    createTile: function (t, i) {
      var e = document.createElement("img");
      return (
        xi(e, "load", _(this._tileOnLoad, this, i, e)),
        xi(e, "error", _(this._tileOnError, this, i, e)),
        (!this.options.crossOrigin && "" !== this.options.crossOrigin) ||
          (e.crossOrigin =
            !0 === this.options.crossOrigin ? "" : this.options.crossOrigin),
        (e.alt = ""),
        e.setAttribute("role", "presentation"),
        (e.src = this.getTileUrl(t)),
        e
      );
    },
    getTileUrl: function (t) {
      var i = {
        r: Pt ? "@2x" : "",
        s: this._getSubdomain(t),
        x: t.x,
        y: t.y,
        z: this._getZoomForUrl(),
      };
      return (
        this._map &&
          !this._map.options.crs.infinite &&
          ((t = this._globalTileRange.max.y - t.y),
          this.options.tms && (i.y = t),
          (i["-y"] = t)),
        f(this._url, h(i, this.options))
      );
    },
    _tileOnLoad: function (t, i) {
      Q ? setTimeout(_(t, this, null, i), 0) : t(null, i);
    },
    _tileOnError: function (t, i, e) {
      var n = this.options.errorTileUrl;
      n && i.getAttribute("src") !== n && (i.src = n), t(e, i);
    },
    _onTileRemove: function (t) {
      t.tile.onload = null;
    },
    _getZoomForUrl: function () {
      var t = this._tileZoom,
        i = this.options.maxZoom;
      return (
        (t = this.options.zoomReverse ? i - t : t) + this.options.zoomOffset
      );
    },
    _getSubdomain: function (t) {
      t = Math.abs(t.x + t.y) % this.options.subdomains.length;
      return this.options.subdomains[t];
    },
    _abortLoading: function () {
      var t, i;
      for (t in this._tiles)
        this._tiles[t].coords.z !== this._tileZoom &&
          (((i = this._tiles[t].el).onload = a),
          (i.onerror = a),
          i.complete || ((i.src = y), ti(i), delete this._tiles[t]));
    },
    _removeTile: function (t) {
      var i = this._tiles[t];
      if (i)
        return (
          st || i.el.setAttribute("src", y),
          Oe.prototype._removeTile.call(this, t)
        );
    },
    _tileReady: function (t, i, e) {
      if (this._map && (!e || e.getAttribute("src") !== y))
        return Oe.prototype._tileReady.call(this, t, i, e);
    },
  });
  function Ne(t, i) {
    return new Re(t, i);
  }
  var De = Re.extend({
    defaultWmsParams: {
      service: "WMS",
      request: "GetMap",
      layers: "",
      styles: "",
      format: "image/jpeg",
      transparent: !1,
      version: "1.1.1",
    },
    options: { crs: null, uppercase: !1 },
    initialize: function (t, i) {
      this._url = t;
      var e,
        n = h({}, this.defaultWmsParams);
      for (e in i) e in this.options || (n[e] = i[e]);
      var o = (i = c(this, i)).detectRetina && Pt ? 2 : 1,
        t = this.getTileSize();
      (n.width = t.x * o), (n.height = t.y * o), (this.wmsParams = n);
    },
    onAdd: function (t) {
      (this._crs = this.options.crs || t.options.crs),
        (this._wmsVersion = parseFloat(this.wmsParams.version));
      var i = 1.3 <= this._wmsVersion ? "crs" : "srs";
      (this.wmsParams[i] = this._crs.code), Re.prototype.onAdd.call(this, t);
    },
    getTileUrl: function (t) {
      var i = this._tileCoordsToNwSe(t),
        e = this._crs,
        e = O(e.project(i[0]), e.project(i[1])),
        i = e.min,
        e = e.max,
        e = (
          1.3 <= this._wmsVersion && this._crs === re
            ? [i.y, i.x, e.y, e.x]
            : [i.x, i.y, e.x, e.y]
        ).join(","),
        t = Re.prototype.getTileUrl.call(this, t);
      return (
        t +
        d(this.wmsParams, t, this.options.uppercase) +
        (this.options.uppercase ? "&BBOX=" : "&bbox=") +
        e
      );
    },
    setParams: function (t, i) {
      return h(this.wmsParams, t), i || this.redraw(), this;
    },
  });
  (Re.WMS = De),
    (Ne.wms = function (t, i) {
      return new De(t, i);
    });
  var je = ae.extend({
      options: { padding: 0.1, tolerance: 0 },
      initialize: function (t) {
        c(this, t), m(this), (this._layers = this._layers || {});
      },
      onAdd: function () {
        this._container ||
          (this._initContainer(),
          this._zoomAnimated && si(this._container, "leaflet-zoom-animated")),
          this.getPane().appendChild(this._container),
          this._update(),
          this.on("update", this._updatePaths, this);
      },
      onRemove: function () {
        this.off("update", this._updatePaths, this), this._destroyContainer();
      },
      getEvents: function () {
        var t = {
          viewreset: this._reset,
          zoom: this._onZoom,
          moveend: this._update,
          zoomend: this._onZoomEnd,
        };
        return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
      },
      _onAnimZoom: function (t) {
        this._updateTransform(t.center, t.zoom);
      },
      _onZoom: function () {
        this._updateTransform(this._map.getCenter(), this._map.getZoom());
      },
      _updateTransform: function (t, i) {
        var e = this._map.getZoomScale(i, this._zoom),
          n = di(this._container),
          o = this._map.getSize().multiplyBy(0.5 + this.options.padding),
          s = this._map.project(this._center, i),
          s = this._map.project(t, i).subtract(s),
          s = o.multiplyBy(-e).add(n).add(o).subtract(s);
        ft ? ci(this._container, s, e) : _i(this._container, s);
      },
      _reset: function () {
        for (var t in (this._update(),
        this._updateTransform(this._center, this._zoom),
        this._layers))
          this._layers[t]._reset();
      },
      _onZoomEnd: function () {
        for (var t in this._layers) this._layers[t]._project();
      },
      _updatePaths: function () {
        for (var t in this._layers) this._layers[t]._update();
      },
      _update: function () {
        var t = this.options.padding,
          i = this._map.getSize(),
          e = this._map.containerPointToLayerPoint(i.multiplyBy(-t)).round();
        (this._bounds = new I(e, e.add(i.multiplyBy(1 + 2 * t)).round())),
          (this._center = this._map.getCenter()),
          (this._zoom = this._map.getZoom());
      },
    }),
    We = je.extend({
      getEvents: function () {
        var t = je.prototype.getEvents.call(this);
        return (t.viewprereset = this._onViewPreReset), t;
      },
      _onViewPreReset: function () {
        this._postponeUpdatePaths = !0;
      },
      onAdd: function () {
        je.prototype.onAdd.call(this), this._draw();
      },
      _initContainer: function () {
        var t = (this._container = document.createElement("canvas"));
        xi(t, "mousemove", this._onMouseMove, this),
          xi(
            t,
            "click dblclick mousedown mouseup contextmenu",
            this._onClick,
            this
          ),
          xi(t, "mouseout", this._handleMouseOut, this),
          (this._ctx = t.getContext("2d"));
      },
      _destroyContainer: function () {
        M(this._redrawRequest),
          delete this._ctx,
          ti(this._container),
          Pi(this._container),
          delete this._container;
      },
      _updatePaths: function () {
        if (!this._postponeUpdatePaths) {
          for (var t in ((this._redrawBounds = null), this._layers))
            this._layers[t]._update();
          this._redraw();
        }
      },
      _update: function () {
        var t, i, e, n;
        (this._map._animatingZoom && this._bounds) ||
          (je.prototype._update.call(this),
          (t = this._bounds),
          (i = this._container),
          (e = t.getSize()),
          (n = Pt ? 2 : 1),
          _i(i, t.min),
          (i.width = n * e.x),
          (i.height = n * e.y),
          (i.style.width = e.x + "px"),
          (i.style.height = e.y + "px"),
          Pt && this._ctx.scale(2, 2),
          this._ctx.translate(-t.min.x, -t.min.y),
          this.fire("update"));
      },
      _reset: function () {
        je.prototype._reset.call(this),
          this._postponeUpdatePaths &&
            ((this._postponeUpdatePaths = !1), this._updatePaths());
      },
      _initPath: function (t) {
        this._updateDashArray(t);
        t = (this._layers[m(t)] = t)._order = {
          layer: t,
          prev: this._drawLast,
          next: null,
        };
        this._drawLast && (this._drawLast.next = t),
          (this._drawLast = t),
          (this._drawFirst = this._drawFirst || this._drawLast);
      },
      _addPath: function (t) {
        this._requestRedraw(t);
      },
      _removePath: function (t) {
        var i = t._order,
          e = i.next,
          i = i.prev;
        e ? (e.prev = i) : (this._drawLast = i),
          i ? (i.next = e) : (this._drawFirst = e),
          delete t._order,
          delete this._layers[m(t)],
          this._requestRedraw(t);
      },
      _updatePath: function (t) {
        this._extendRedrawBounds(t),
          t._project(),
          t._update(),
          this._requestRedraw(t);
      },
      _updateStyle: function (t) {
        this._updateDashArray(t), this._requestRedraw(t);
      },
      _updateDashArray: function (t) {
        if ("string" == typeof t.options.dashArray) {
          for (
            var i, e = t.options.dashArray.split(/[, ]+/), n = [], o = 0;
            o < e.length;
            o++
          ) {
            if (((i = Number(e[o])), isNaN(i))) return;
            n.push(i);
          }
          t.options._dashArray = n;
        } else t.options._dashArray = t.options.dashArray;
      },
      _requestRedraw: function (t) {
        this._map &&
          (this._extendRedrawBounds(t),
          (this._redrawRequest = this._redrawRequest || z(this._redraw, this)));
      },
      _extendRedrawBounds: function (t) {
        var i;
        t._pxBounds &&
          ((i = (t.options.weight || 0) + 1),
          (this._redrawBounds = this._redrawBounds || new I()),
          this._redrawBounds.extend(t._pxBounds.min.subtract([i, i])),
          this._redrawBounds.extend(t._pxBounds.max.add([i, i])));
      },
      _redraw: function () {
        (this._redrawRequest = null),
          this._redrawBounds &&
            (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()),
          this._clear(),
          this._draw(),
          (this._redrawBounds = null);
      },
      _clear: function () {
        var t,
          i = this._redrawBounds;
        i
          ? ((t = i.getSize()), this._ctx.clearRect(i.min.x, i.min.y, t.x, t.y))
          : (this._ctx.save(),
            this._ctx.setTransform(1, 0, 0, 1, 0, 0),
            this._ctx.clearRect(
              0,
              0,
              this._container.width,
              this._container.height
            ),
            this._ctx.restore());
      },
      _draw: function () {
        var t,
          i,
          e = this._redrawBounds;
        this._ctx.save(),
          e &&
            ((i = e.getSize()),
            this._ctx.beginPath(),
            this._ctx.rect(e.min.x, e.min.y, i.x, i.y),
            this._ctx.clip()),
          (this._drawing = !0);
        for (var n = this._drawFirst; n; n = n.next)
          (t = n.layer),
            (!e || (t._pxBounds && t._pxBounds.intersects(e))) &&
              t._updatePath();
        (this._drawing = !1), this._ctx.restore();
      },
      _updatePoly: function (t, i) {
        if (this._drawing) {
          var e,
            n,
            o,
            s,
            r = t._parts,
            a = r.length,
            h = this._ctx;
          if (a) {
            for (h.beginPath(), e = 0; e < a; e++) {
              for (n = 0, o = r[e].length; n < o; n++)
                (s = r[e][n]), h[n ? "lineTo" : "moveTo"](s.x, s.y);
              i && h.closePath();
            }
            this._fillStroke(h, t);
          }
        }
      },
      _updateCircle: function (t) {
        var i, e, n, o;
        this._drawing &&
          !t._empty() &&
          ((i = t._point),
          (e = this._ctx),
          (n = Math.max(Math.round(t._radius), 1)),
          1 != (o = (Math.max(Math.round(t._radiusY), 1) || n) / n) &&
            (e.save(), e.scale(1, o)),
          e.beginPath(),
          e.arc(i.x, i.y / o, n, 0, 2 * Math.PI, !1),
          1 != o && e.restore(),
          this._fillStroke(e, t));
      },
      _fillStroke: function (t, i) {
        var e = i.options;
        e.fill &&
          ((t.globalAlpha = e.fillOpacity),
          (t.fillStyle = e.fillColor || e.color),
          t.fill(e.fillRule || "evenodd")),
          e.stroke &&
            0 !== e.weight &&
            (t.setLineDash &&
              t.setLineDash((i.options && i.options._dashArray) || []),
            (t.globalAlpha = e.opacity),
            (t.lineWidth = e.weight),
            (t.strokeStyle = e.color),
            (t.lineCap = e.lineCap),
            (t.lineJoin = e.lineJoin),
            t.stroke());
      },
      _onClick: function (t) {
        for (
          var i,
            e,
            n = this._map.mouseEventToLayerPoint(t),
            o = this._drawFirst;
          o;
          o = o.next
        )
          (i = o.layer).options.interactive &&
            i._containsPoint(n) &&
            ((("click" === t.type || "preclick" !== t.type) &&
              this._map._draggableMoved(i)) ||
              (e = i));
        e && (Oi(t), this._fireEvent([e], t));
      },
      _onMouseMove: function (t) {
        var i;
        !this._map ||
          this._map.dragging.moving() ||
          this._map._animatingZoom ||
          ((i = this._map.mouseEventToLayerPoint(t)),
          this._handleMouseHover(t, i));
      },
      _handleMouseOut: function (t) {
        var i = this._hoveredLayer;
        i &&
          (ri(this._container, "leaflet-interactive"),
          this._fireEvent([i], t, "mouseout"),
          (this._hoveredLayer = null),
          (this._mouseHoverThrottled = !1));
      },
      _handleMouseHover: function (t, i) {
        if (!this._mouseHoverThrottled) {
          for (var e, n, o = this._drawFirst; o; o = o.next)
            (e = o.layer).options.interactive && e._containsPoint(i) && (n = e);
          n !== this._hoveredLayer &&
            (this._handleMouseOut(t),
            n &&
              (si(this._container, "leaflet-interactive"),
              this._fireEvent([n], t, "mouseover"),
              (this._hoveredLayer = n))),
            this._hoveredLayer && this._fireEvent([this._hoveredLayer], t),
            (this._mouseHoverThrottled = !0),
            setTimeout(
              _(function () {
                this._mouseHoverThrottled = !1;
              }, this),
              32
            );
        }
      },
      _fireEvent: function (t, i, e) {
        this._map._fireDOMEvent(i, e || i.type, t);
      },
      _bringToFront: function (t) {
        var i,
          e,
          n = t._order;
        n &&
          ((i = n.next),
          (e = n.prev),
          i &&
            ((i.prev = e) ? (e.next = i) : i && (this._drawFirst = i),
            (n.prev = this._drawLast),
            ((this._drawLast.next = n).next = null),
            (this._drawLast = n),
            this._requestRedraw(t)));
      },
      _bringToBack: function (t) {
        var i,
          e,
          n = t._order;
        n &&
          ((i = n.next),
          (e = n.prev) &&
            ((e.next = i) ? (i.prev = e) : e && (this._drawLast = e),
            (n.prev = null),
            (n.next = this._drawFirst),
            (this._drawFirst.prev = n),
            (this._drawFirst = n),
            this._requestRedraw(t)));
      },
    });
  function He(t) {
    return bt ? new We(t) : null;
  }
  var Fe = (function () {
      try {
        return (
          document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
          function (t) {
            return document.createElement("<lvml:" + t + ' class="lvml">');
          }
        );
      } catch (t) {}
      return function (t) {
        return document.createElement(
          "<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">'
        );
      };
    })(),
    ot = {
      _initContainer: function () {
        this._container = Qt("div", "leaflet-vml-container");
      },
      _update: function () {
        this._map._animatingZoom ||
          (je.prototype._update.call(this), this.fire("update"));
      },
      _initPath: function (t) {
        var i = (t._container = Fe("shape"));
        si(i, "leaflet-vml-shape " + (this.options.className || "")),
          (i.coordsize = "1 1"),
          (t._path = Fe("path")),
          i.appendChild(t._path),
          this._updateStyle(t),
          (this._layers[m(t)] = t);
      },
      _addPath: function (t) {
        var i = t._container;
        this._container.appendChild(i),
          t.options.interactive && t.addInteractiveTarget(i);
      },
      _removePath: function (t) {
        var i = t._container;
        ti(i), t.removeInteractiveTarget(i), delete this._layers[m(t)];
      },
      _updateStyle: function (t) {
        var i = t._stroke,
          e = t._fill,
          n = t.options,
          o = t._container;
        (o.stroked = !!n.stroke),
          (o.filled = !!n.fill),
          n.stroke
            ? ((i = i || (t._stroke = Fe("stroke"))),
              o.appendChild(i),
              (i.weight = n.weight + "px"),
              (i.color = n.color),
              (i.opacity = n.opacity),
              n.dashArray
                ? (i.dashStyle = g(n.dashArray)
                    ? n.dashArray.join(" ")
                    : n.dashArray.replace(/( *, *)/g, " "))
                : (i.dashStyle = ""),
              (i.endcap = n.lineCap.replace("butt", "flat")),
              (i.joinstyle = n.lineJoin))
            : i && (o.removeChild(i), (t._stroke = null)),
          n.fill
            ? ((e = e || (t._fill = Fe("fill"))),
              o.appendChild(e),
              (e.color = n.fillColor || n.color),
              (e.opacity = n.fillOpacity))
            : e && (o.removeChild(e), (t._fill = null));
      },
      _updateCircle: function (t) {
        var i = t._point.round(),
          e = Math.round(t._radius),
          n = Math.round(t._radiusY || e);
        this._setPath(
          t,
          t._empty()
            ? "M0 0"
            : "AL " + i.x + "," + i.y + " " + e + "," + n + " 0,23592600"
        );
      },
      _setPath: function (t, i) {
        t._path.v = i;
      },
      _bringToFront: function (t) {
        ei(t._container);
      },
      _bringToBack: function (t) {
        ni(t._container);
      },
    },
    Ue = zt ? Fe : Y,
    Ve = je.extend({
      getEvents: function () {
        var t = je.prototype.getEvents.call(this);
        return (t.zoomstart = this._onZoomStart), t;
      },
      _initContainer: function () {
        (this._container = Ue("svg")),
          this._container.setAttribute("pointer-events", "none"),
          (this._rootGroup = Ue("g")),
          this._container.appendChild(this._rootGroup);
      },
      _destroyContainer: function () {
        ti(this._container),
          Pi(this._container),
          delete this._container,
          delete this._rootGroup,
          delete this._svgSize;
      },
      _onZoomStart: function () {
        this._update();
      },
      _update: function () {
        var t, i, e;
        (this._map._animatingZoom && this._bounds) ||
          (je.prototype._update.call(this),
          (i = (t = this._bounds).getSize()),
          (e = this._container),
          (this._svgSize && this._svgSize.equals(i)) ||
            ((this._svgSize = i),
            e.setAttribute("width", i.x),
            e.setAttribute("height", i.y)),
          _i(e, t.min),
          e.setAttribute("viewBox", [t.min.x, t.min.y, i.x, i.y].join(" ")),
          this.fire("update"));
      },
      _initPath: function (t) {
        var i = (t._path = Ue("path"));
        t.options.className && si(i, t.options.className),
          t.options.interactive && si(i, "leaflet-interactive"),
          this._updateStyle(t),
          (this._layers[m(t)] = t);
      },
      _addPath: function (t) {
        this._rootGroup || this._initContainer(),
          this._rootGroup.appendChild(t._path),
          t.addInteractiveTarget(t._path);
      },
      _removePath: function (t) {
        ti(t._path),
          t.removeInteractiveTarget(t._path),
          delete this._layers[m(t)];
      },
      _updatePath: function (t) {
        t._project(), t._update();
      },
      _updateStyle: function (t) {
        var i = t._path,
          t = t.options;
        i &&
          (t.stroke
            ? (i.setAttribute("stroke", t.color),
              i.setAttribute("stroke-opacity", t.opacity),
              i.setAttribute("stroke-width", t.weight),
              i.setAttribute("stroke-linecap", t.lineCap),
              i.setAttribute("stroke-linejoin", t.lineJoin),
              t.dashArray
                ? i.setAttribute("stroke-dasharray", t.dashArray)
                : i.removeAttribute("stroke-dasharray"),
              t.dashOffset
                ? i.setAttribute("stroke-dashoffset", t.dashOffset)
                : i.removeAttribute("stroke-dashoffset"))
            : i.setAttribute("stroke", "none"),
          t.fill
            ? (i.setAttribute("fill", t.fillColor || t.color),
              i.setAttribute("fill-opacity", t.fillOpacity),
              i.setAttribute("fill-rule", t.fillRule || "evenodd"))
            : i.setAttribute("fill", "none"));
      },
      _updatePoly: function (t, i) {
        this._setPath(t, X(t._parts, i));
      },
      _updateCircle: function (t) {
        var i = t._point,
          e = Math.max(Math.round(t._radius), 1),
          n =
            "a" +
            e +
            "," +
            (Math.max(Math.round(t._radiusY), 1) || e) +
            " 0 1,0 ",
          e = t._empty()
            ? "M0 0"
            : "M" +
              (i.x - e) +
              "," +
              i.y +
              n +
              2 * e +
              ",0 " +
              n +
              2 * -e +
              ",0 ";
        this._setPath(t, e);
      },
      _setPath: function (t, i) {
        t._path.setAttribute("d", i);
      },
      _bringToFront: function (t) {
        ei(t._path);
      },
      _bringToBack: function (t) {
        ni(t._path);
      },
    });
  function qe(t) {
    return Tt || zt ? new Ve(t) : null;
  }
  zt && Ve.include(ot),
    ji.include({
      getRenderer: function (t) {
        t =
          (t =
            t.options.renderer ||
            this._getPaneRenderer(t.options.pane) ||
            this.options.renderer ||
            this._renderer) || (this._renderer = this._createRenderer());
        return this.hasLayer(t) || this.addLayer(t), t;
      },
      _getPaneRenderer: function (t) {
        if ("overlayPane" === t || void 0 === t) return !1;
        var i = this._paneRenderers[t];
        return (
          void 0 === i &&
            ((i = this._createRenderer({ pane: t })),
            (this._paneRenderers[t] = i)),
          i
        );
      },
      _createRenderer: function (t) {
        return (this.options.preferCanvas && He(t)) || qe(t);
      },
    });
  var Ge = ve.extend({
    initialize: function (t, i) {
      ve.prototype.initialize.call(this, this._boundsToLatLngs(t), i);
    },
    setBounds: function (t) {
      return this.setLatLngs(this._boundsToLatLngs(t));
    },
    _boundsToLatLngs: function (t) {
      return [
        (t = N(t)).getSouthWest(),
        t.getNorthWest(),
        t.getNorthEast(),
        t.getSouthEast(),
      ];
    },
  });
  (Ve.create = Ue),
    (Ve.pointsToPath = X),
    (ye.geometryToLayer = xe),
    (ye.coordsToLatLng = Pe),
    (ye.coordsToLatLngs = Le),
    (ye.latLngToCoords = be),
    (ye.latLngsToCoords = Te),
    (ye.getFeature = ze),
    (ye.asFeature = Me),
    ji.mergeOptions({ boxZoom: !0 });
  Z = mt.extend({
    initialize: function (t) {
      (this._map = t),
        (this._container = t._container),
        (this._pane = t._panes.overlayPane),
        (this._resetStateTimeout = 0),
        t.on("unload", this._destroy, this);
    },
    addHooks: function () {
      xi(this._container, "mousedown", this._onMouseDown, this);
    },
    removeHooks: function () {
      Pi(this._container, "mousedown", this._onMouseDown, this);
    },
    moved: function () {
      return this._moved;
    },
    _destroy: function () {
      ti(this._pane), delete this._pane;
    },
    _resetState: function () {
      (this._resetStateTimeout = 0), (this._moved = !1);
    },
    _clearDeferredResetState: function () {
      0 !== this._resetStateTimeout &&
        (clearTimeout(this._resetStateTimeout), (this._resetStateTimeout = 0));
    },
    _onMouseDown: function (t) {
      if (!t.shiftKey || (1 !== t.which && 1 !== t.button)) return !1;
      this._clearDeferredResetState(),
        this._resetState(),
        Ut(),
        pi(),
        (this._startPoint = this._map.mouseEventToContainerPoint(t)),
        xi(
          document,
          {
            contextmenu: Ei,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown,
          },
          this
        );
    },
    _onMouseMove: function (t) {
      this._moved ||
        ((this._moved = !0),
        (this._box = Qt("div", "leaflet-zoom-box", this._container)),
        si(this._container, "leaflet-crosshair"),
        this._map.fire("boxzoomstart")),
        (this._point = this._map.mouseEventToContainerPoint(t));
      var i = new I(this._point, this._startPoint),
        t = i.getSize();
      _i(this._box, i.min),
        (this._box.style.width = t.x + "px"),
        (this._box.style.height = t.y + "px");
    },
    _finish: function () {
      this._moved && (ti(this._box), ri(this._container, "leaflet-crosshair")),
        Vt(),
        mi(),
        Pi(
          document,
          {
            contextmenu: Ei,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown,
          },
          this
        );
    },
    _onMouseUp: function (t) {
      (1 !== t.which && 1 !== t.button) ||
        (this._finish(),
        this._moved &&
          (this._clearDeferredResetState(),
          (this._resetStateTimeout = setTimeout(_(this._resetState, this), 0)),
          (t = new R(
            this._map.containerPointToLatLng(this._startPoint),
            this._map.containerPointToLatLng(this._point)
          )),
          this._map.fitBounds(t).fire("boxzoomend", { boxZoomBounds: t })));
    },
    _onKeyDown: function (t) {
      27 === t.keyCode && this._finish();
    },
  });
  ji.addInitHook("addHandler", "boxZoom", Z),
    ji.mergeOptions({ doubleClickZoom: !0 });
  G = mt.extend({
    addHooks: function () {
      this._map.on("dblclick", this._onDoubleClick, this);
    },
    removeHooks: function () {
      this._map.off("dblclick", this._onDoubleClick, this);
    },
    _onDoubleClick: function (t) {
      var i = this._map,
        e = i.getZoom(),
        n = i.options.zoomDelta,
        n = t.originalEvent.shiftKey ? e - n : e + n;
      "center" === i.options.doubleClickZoom
        ? i.setZoom(n)
        : i.setZoomAround(t.containerPoint, n);
    },
  });
  ji.addInitHook("addHandler", "doubleClickZoom", G),
    ji.mergeOptions({
      dragging: !0,
      inertia: !nt,
      inertiaDeceleration: 3400,
      inertiaMaxSpeed: 1 / 0,
      easeLinearity: 0.2,
      worldCopyJump: !1,
      maxBoundsViscosity: 0,
    });
  K = mt.extend({
    addHooks: function () {
      var t;
      this._draggable ||
        ((t = this._map),
        (this._draggable = new Xi(t._mapPane, t._container)),
        this._draggable.on(
          {
            dragstart: this._onDragStart,
            drag: this._onDrag,
            dragend: this._onDragEnd,
          },
          this
        ),
        this._draggable.on("predrag", this._onPreDragLimit, this),
        t.options.worldCopyJump &&
          (this._draggable.on("predrag", this._onPreDragWrap, this),
          t.on("zoomend", this._onZoomEnd, this),
          t.whenReady(this._onZoomEnd, this))),
        si(this._map._container, "leaflet-grab leaflet-touch-drag"),
        this._draggable.enable(),
        (this._positions = []),
        (this._times = []);
    },
    removeHooks: function () {
      ri(this._map._container, "leaflet-grab"),
        ri(this._map._container, "leaflet-touch-drag"),
        this._draggable.disable();
    },
    moved: function () {
      return this._draggable && this._draggable._moved;
    },
    moving: function () {
      return this._draggable && this._draggable._moving;
    },
    _onDragStart: function () {
      var t,
        i = this._map;
      i._stop(),
        this._map.options.maxBounds && this._map.options.maxBoundsViscosity
          ? ((t = N(this._map.options.maxBounds)),
            (this._offsetLimit = O(
              this._map.latLngToContainerPoint(t.getNorthWest()).multiplyBy(-1),
              this._map
                .latLngToContainerPoint(t.getSouthEast())
                .multiplyBy(-1)
                .add(this._map.getSize())
            )),
            (this._viscosity = Math.min(
              1,
              Math.max(0, this._map.options.maxBoundsViscosity)
            )))
          : (this._offsetLimit = null),
        i.fire("movestart").fire("dragstart"),
        i.options.inertia && ((this._positions = []), (this._times = []));
    },
    _onDrag: function (t) {
      var i, e;
      this._map.options.inertia &&
        ((i = this._lastTime = +new Date()),
        (e = this._lastPos =
          this._draggable._absPos || this._draggable._newPos),
        this._positions.push(e),
        this._times.push(i),
        this._prunePositions(i)),
        this._map.fire("move", t).fire("drag", t);
    },
    _prunePositions: function (t) {
      for (; 1 < this._positions.length && 50 < t - this._times[0]; )
        this._positions.shift(), this._times.shift();
    },
    _onZoomEnd: function () {
      var t = this._map.getSize().divideBy(2),
        i = this._map.latLngToLayerPoint([0, 0]);
      (this._initialWorldOffset = i.subtract(t).x),
        (this._worldWidth = this._map.getPixelWorldBounds().getSize().x);
    },
    _viscousLimit: function (t, i) {
      return t - (t - i) * this._viscosity;
    },
    _onPreDragLimit: function () {
      var t, i;
      this._viscosity &&
        this._offsetLimit &&
        ((t = this._draggable._newPos.subtract(this._draggable._startPos)),
        (i = this._offsetLimit),
        t.x < i.min.x && (t.x = this._viscousLimit(t.x, i.min.x)),
        t.y < i.min.y && (t.y = this._viscousLimit(t.y, i.min.y)),
        t.x > i.max.x && (t.x = this._viscousLimit(t.x, i.max.x)),
        t.y > i.max.y && (t.y = this._viscousLimit(t.y, i.max.y)),
        (this._draggable._newPos = this._draggable._startPos.add(t)));
    },
    _onPreDragWrap: function () {
      var t = this._worldWidth,
        i = Math.round(t / 2),
        e = this._initialWorldOffset,
        n = this._draggable._newPos.x,
        o = ((n - i + e) % t) + i - e,
        i = ((n + i + e) % t) - i - e,
        i = Math.abs(o + e) < Math.abs(i + e) ? o : i;
      (this._draggable._absPos = this._draggable._newPos.clone()),
        (this._draggable._newPos.x = i);
    },
    _onDragEnd: function (t) {
      var i,
        e,
        n,
        o,
        s = this._map,
        r = s.options,
        a = !r.inertia || this._times.length < 2;
      s.fire("dragend", t),
        a
          ? s.fire("moveend")
          : (this._prunePositions(+new Date()),
            (e = this._lastPos.subtract(this._positions[0])),
            (t = (this._lastTime - this._times[0]) / 1e3),
            (i = r.easeLinearity),
            (e = (a = e.multiplyBy(i / t)).distanceTo([0, 0])),
            (t = Math.min(r.inertiaMaxSpeed, e)),
            (e = a.multiplyBy(t / e)),
            (n = t / (r.inertiaDeceleration * i)),
            (o = e.multiplyBy(-n / 2).round()).x || o.y
              ? ((o = s._limitOffset(o, s.options.maxBounds)),
                z(function () {
                  s.panBy(o, {
                    duration: n,
                    easeLinearity: i,
                    noMoveStart: !0,
                    animate: !0,
                  });
                }))
              : s.fire("moveend"));
    },
  });
  ji.addInitHook("addHandler", "dragging", K),
    ji.mergeOptions({ keyboard: !0, keyboardPanDelta: 80 });
  U = mt.extend({
    keyCodes: {
      left: [37],
      right: [39],
      down: [40],
      up: [38],
      zoomIn: [187, 107, 61, 171],
      zoomOut: [189, 109, 54, 173],
    },
    initialize: function (t) {
      (this._map = t),
        this._setPanDelta(t.options.keyboardPanDelta),
        this._setZoomDelta(t.options.zoomDelta);
    },
    addHooks: function () {
      var t = this._map._container;
      t.tabIndex <= 0 && (t.tabIndex = "0"),
        xi(
          t,
          {
            focus: this._onFocus,
            blur: this._onBlur,
            mousedown: this._onMouseDown,
          },
          this
        ),
        this._map.on({ focus: this._addHooks, blur: this._removeHooks }, this);
    },
    removeHooks: function () {
      this._removeHooks(),
        Pi(
          this._map._container,
          {
            focus: this._onFocus,
            blur: this._onBlur,
            mousedown: this._onMouseDown,
          },
          this
        ),
        this._map.off({ focus: this._addHooks, blur: this._removeHooks }, this);
    },
    _onMouseDown: function () {
      var t, i, e;
      this._focused ||
        ((t = document.body),
        (e = document.documentElement),
        (i = t.scrollTop || e.scrollTop),
        (e = t.scrollLeft || e.scrollLeft),
        this._map._container.focus(),
        window.scrollTo(e, i));
    },
    _onFocus: function () {
      (this._focused = !0), this._map.fire("focus");
    },
    _onBlur: function () {
      (this._focused = !1), this._map.fire("blur");
    },
    _setPanDelta: function (t) {
      for (
        var i = (this._panKeys = {}),
          e = this.keyCodes,
          n = 0,
          o = e.left.length;
        n < o;
        n++
      )
        i[e.left[n]] = [-1 * t, 0];
      for (n = 0, o = e.right.length; n < o; n++) i[e.right[n]] = [t, 0];
      for (n = 0, o = e.down.length; n < o; n++) i[e.down[n]] = [0, t];
      for (n = 0, o = e.up.length; n < o; n++) i[e.up[n]] = [0, -1 * t];
    },
    _setZoomDelta: function (t) {
      for (
        var i = (this._zoomKeys = {}),
          e = this.keyCodes,
          n = 0,
          o = e.zoomIn.length;
        n < o;
        n++
      )
        i[e.zoomIn[n]] = t;
      for (n = 0, o = e.zoomOut.length; n < o; n++) i[e.zoomOut[n]] = -t;
    },
    _addHooks: function () {
      xi(document, "keydown", this._onKeyDown, this);
    },
    _removeHooks: function () {
      Pi(document, "keydown", this._onKeyDown, this);
    },
    _onKeyDown: function (t) {
      if (!(t.altKey || t.ctrlKey || t.metaKey)) {
        var i,
          e = t.keyCode,
          n = this._map;
        if (e in this._panKeys)
          (n._panAnim && n._panAnim._inProgress) ||
            ((i = this._panKeys[e]),
            t.shiftKey && (i = A(i).multiplyBy(3)),
            n.panBy(i),
            n.options.maxBounds && n.panInsideBounds(n.options.maxBounds));
        else if (e in this._zoomKeys)
          n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[e]);
        else {
          if (27 !== e || !n._popup || !n._popup.options.closeOnEscapeKey)
            return;
          n.closePopup();
        }
        Ei(t);
      }
    },
  });
  ji.addInitHook("addHandler", "keyboard", U),
    ji.mergeOptions({
      scrollWheelZoom: !0,
      wheelDebounceTime: 40,
      wheelPxPerZoomLevel: 60,
    });
  _t = mt.extend({
    addHooks: function () {
      xi(this._map._container, "wheel", this._onWheelScroll, this),
        (this._delta = 0);
    },
    removeHooks: function () {
      Pi(this._map._container, "wheel", this._onWheelScroll, this);
    },
    _onWheelScroll: function (t) {
      var i = Ai(t),
        e = this._map.options.wheelDebounceTime;
      (this._delta += i),
        (this._lastMousePos = this._map.mouseEventToContainerPoint(t)),
        this._startTime || (this._startTime = +new Date());
      e = Math.max(e - (+new Date() - this._startTime), 0);
      clearTimeout(this._timer),
        (this._timer = setTimeout(_(this._performZoom, this), e)),
        Ei(t);
    },
    _performZoom: function () {
      var t = this._map,
        i = t.getZoom(),
        e = this._map.options.zoomSnap || 0;
      t._stop();
      var n = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
        n = (4 * Math.log(2 / (1 + Math.exp(-Math.abs(n))))) / Math.LN2,
        n = e ? Math.ceil(n / e) * e : n,
        n = t._limitZoom(i + (0 < this._delta ? n : -n)) - i;
      (this._delta = 0),
        (this._startTime = null),
        n &&
          ("center" === t.options.scrollWheelZoom
            ? t.setZoom(i + n)
            : t.setZoomAround(this._lastMousePos, i + n));
    },
  });
  ji.addInitHook("addHandler", "scrollWheelZoom", _t),
    ji.mergeOptions({ tap: ut && F, tapTolerance: 15 });
  ot = mt.extend({
    addHooks: function () {
      xi(this._map._container, "touchstart", this._onDown, this);
    },
    removeHooks: function () {
      Pi(this._map._container, "touchstart", this._onDown, this);
    },
    _onDown: function (t) {
      if (t.touches) {
        if ((Zi(t), (this._fireClick = !0), 1 < t.touches.length))
          return (this._fireClick = !1), void clearTimeout(this._holdTimeout);
        var i = t.touches[0],
          t = i.target;
        (this._startPos = this._newPos = new k(i.clientX, i.clientY)),
          t.tagName &&
            "a" === t.tagName.toLowerCase() &&
            si(t, "leaflet-active"),
          (this._holdTimeout = setTimeout(
            _(function () {
              this._isTapValid() &&
                ((this._fireClick = !1),
                this._onUp(),
                this._simulateEvent("contextmenu", i));
            }, this),
            1e3
          )),
          this._simulateEvent("mousedown", i),
          xi(document, { touchmove: this._onMove, touchend: this._onUp }, this);
      }
    },
    _onUp: function (t) {
      var i;
      clearTimeout(this._holdTimeout),
        Pi(document, { touchmove: this._onMove, touchend: this._onUp }, this),
        this._fireClick &&
          t &&
          t.changedTouches &&
          ((t = (i = t.changedTouches[0]).target) &&
            t.tagName &&
            "a" === t.tagName.toLowerCase() &&
            ri(t, "leaflet-active"),
          this._simulateEvent("mouseup", i),
          this._isTapValid() && this._simulateEvent("click", i));
    },
    _isTapValid: function () {
      return (
        this._newPos.distanceTo(this._startPos) <=
        this._map.options.tapTolerance
      );
    },
    _onMove: function (t) {
      t = t.touches[0];
      (this._newPos = new k(t.clientX, t.clientY)),
        this._simulateEvent("mousemove", t);
    },
    _simulateEvent: function (t, i) {
      var e = document.createEvent("MouseEvents");
      (e._simulated = !0),
        (i.target._simulatedClick = !0),
        e.initMouseEvent(
          t,
          !0,
          !0,
          window,
          1,
          i.screenX,
          i.screenY,
          i.clientX,
          i.clientY,
          !1,
          !1,
          !1,
          !1,
          0,
          null
        ),
        i.target.dispatchEvent(e);
    },
  });
  ji.addInitHook("addHandler", "tap", ot),
    ji.mergeOptions({ touchZoom: xt && !nt, bounceAtZoomLimits: !0 });
  F = mt.extend({
    addHooks: function () {
      si(this._map._container, "leaflet-touch-zoom"),
        xi(this._map._container, "touchstart", this._onTouchStart, this);
    },
    removeHooks: function () {
      ri(this._map._container, "leaflet-touch-zoom"),
        Pi(this._map._container, "touchstart", this._onTouchStart, this);
    },
    _onTouchStart: function (t) {
      var i,
        e,
        n = this._map;
      !t.touches ||
        2 !== t.touches.length ||
        n._animatingZoom ||
        this._zooming ||
        ((i = n.mouseEventToContainerPoint(t.touches[0])),
        (e = n.mouseEventToContainerPoint(t.touches[1])),
        (this._centerPoint = n.getSize()._divideBy(2)),
        (this._startLatLng = n.containerPointToLatLng(this._centerPoint)),
        "center" !== n.options.touchZoom &&
          (this._pinchStartLatLng = n.containerPointToLatLng(
            i.add(e)._divideBy(2)
          )),
        (this._startDist = i.distanceTo(e)),
        (this._startZoom = n.getZoom()),
        (this._moved = !1),
        (this._zooming = !0),
        n._stop(),
        xi(document, "touchmove", this._onTouchMove, this),
        xi(document, "touchend", this._onTouchEnd, this),
        Zi(t));
    },
    _onTouchMove: function (t) {
      if (t.touches && 2 === t.touches.length && this._zooming) {
        var i = this._map,
          e = i.mouseEventToContainerPoint(t.touches[0]),
          n = i.mouseEventToContainerPoint(t.touches[1]),
          o = e.distanceTo(n) / this._startDist;
        if (
          ((this._zoom = i.getScaleZoom(o, this._startZoom)),
          !i.options.bounceAtZoomLimits &&
            ((this._zoom < i.getMinZoom() && o < 1) ||
              (this._zoom > i.getMaxZoom() && 1 < o)) &&
            (this._zoom = i._limitZoom(this._zoom)),
          "center" === i.options.touchZoom)
        ) {
          if (((this._center = this._startLatLng), 1 == o)) return;
        } else {
          n = e._add(n)._divideBy(2)._subtract(this._centerPoint);
          if (1 == o && 0 === n.x && 0 === n.y) return;
          this._center = i.unproject(
            i.project(this._pinchStartLatLng, this._zoom).subtract(n),
            this._zoom
          );
        }
        this._moved || (i._moveStart(!0, !1), (this._moved = !0)),
          M(this._animRequest);
        i = _(i._move, i, this._center, this._zoom, { pinch: !0, round: !1 });
        (this._animRequest = z(i, this, !0)), Zi(t);
      }
    },
    _onTouchEnd: function () {
      this._moved && this._zooming
        ? ((this._zooming = !1),
          M(this._animRequest),
          Pi(document, "touchmove", this._onTouchMove, this),
          Pi(document, "touchend", this._onTouchEnd, this),
          this._map.options.zoomAnimation
            ? this._map._animateZoom(
                this._center,
                this._map._limitZoom(this._zoom),
                !0,
                this._map.options.zoomSnap
              )
            : this._map._resetView(
                this._center,
                this._map._limitZoom(this._zoom)
              ))
        : (this._zooming = !1);
    },
  });
  ji.addInitHook("addHandler", "touchZoom", F),
    (ji.BoxZoom = Z),
    (ji.DoubleClickZoom = G),
    (ji.Drag = K),
    (ji.Keyboard = U),
    (ji.ScrollWheelZoom = _t),
    (ji.Tap = ot),
    (ji.TouchZoom = F),
    (t.version = "1.7.1"),
    (t.Control = Wi),
    (t.control = pt),
    (t.Browser = rt),
    (t.Evented = E),
    (t.Mixin = gt),
    (t.Util = C),
    (t.Class = S),
    (t.Handler = mt),
    (t.extend = h),
    (t.bind = _),
    (t.stamp = m),
    (t.setOptions = c),
    (t.DomEvent = ct),
    (t.DomUtil = lt),
    (t.PosAnimation = Di),
    (t.Draggable = Xi),
    (t.LineUtil = vt),
    (t.PolyUtil = J),
    (t.Point = k),
    (t.point = A),
    (t.Bounds = I),
    (t.bounds = O),
    (t.Transformation = V),
    (t.transformation = q),
    (t.Projection = at),
    (t.LatLng = D),
    (t.latLng = j),
    (t.LatLngBounds = R),
    (t.latLngBounds = N),
    (t.CRS = W),
    (t.GeoJSON = ye),
    (t.geoJSON = Ce),
    (t.geoJson = ht),
    (t.Layer = ae),
    (t.LayerGroup = he),
    (t.layerGroup = function (t, i) {
      return new he(t, i);
    }),
    (t.FeatureGroup = ue),
    (t.featureGroup = function (t, i) {
      return new ue(t, i);
    }),
    (t.ImageOverlay = Se),
    (t.imageOverlay = function (t, i, e) {
      return new Se(t, i, e);
    }),
    (t.VideoOverlay = Ze),
    (t.videoOverlay = function (t, i, e) {
      return new Ze(t, i, e);
    }),
    (t.SVGOverlay = Ee),
    (t.svgOverlay = function (t, i, e) {
      return new Ee(t, i, e);
    }),
    (t.DivOverlay = ke),
    (t.Popup = Be),
    (t.popup = function (t, i) {
      return new Be(t, i);
    }),
    (t.Tooltip = Ae),
    (t.tooltip = function (t, i) {
      return new Ae(t, i);
    }),
    (t.Icon = le),
    (t.icon = function (t) {
      return new le(t);
    }),
    (t.DivIcon = Ie),
    (t.divIcon = function (t) {
      return new Ie(t);
    }),
    (t.Marker = de),
    (t.marker = function (t, i) {
      return new de(t, i);
    }),
    (t.TileLayer = Re),
    (t.tileLayer = Ne),
    (t.GridLayer = Oe),
    (t.gridLayer = function (t) {
      return new Oe(t);
    }),
    (t.SVG = Ve),
    (t.svg = qe),
    (t.Renderer = je),
    (t.Canvas = We),
    (t.canvas = He),
    (t.Path = pe),
    (t.CircleMarker = me),
    (t.circleMarker = function (t, i) {
      return new me(t, i);
    }),
    (t.Circle = fe),
    (t.circle = function (t, i, e) {
      return new fe(t, i, e);
    }),
    (t.Polyline = ge),
    (t.polyline = function (t, i) {
      return new ge(t, i);
    }),
    (t.Polygon = ve),
    (t.polygon = function (t, i) {
      return new ve(t, i);
    }),
    (t.Rectangle = Ge),
    (t.rectangle = function (t, i) {
      return new Ge(t, i);
    }),
    (t.Map = ji),
    (t.map = function (t, i) {
      return new ji(t, i);
    });
  var Ke = window.L;
  (t.noConflict = function () {
    return (window.L = Ke), this;
  }),
    (window.L = t);
});
//# sourceMappingURL=leaflet.js.map
