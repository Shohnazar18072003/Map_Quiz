//From https://github.com/farzher/fuzzysort; MIT LICENCE Copyright (c) 2018 Stephen Kamenar
!(function (e, r) {
  "function" == typeof define && define.amd
    ? define([], r)
    : "object" == typeof module && module.exports
    ? (module.exports = r())
    : (e.fuzzysort = r());
})(this, function () {
  var P = "undefined" != typeof require && "undefined" == typeof window,
    n = new Map(),
    o = new Map(),
    j = [];
  j.total = 0;
  var m = [],
    T = [];
  function r() {
    n.clear(), o.clear(), (m = []), (T = []);
  }
  function N(e) {
    for (var r = -9007199254740991, n = e.length - 1; 0 <= n; --n) {
      var o = e[n];
      null !== o && r < (o = o.score) && (r = o);
    }
    return -9007199254740991 === r ? null : r;
  }
  function S(e, r) {
    var n = e[r];
    if (void 0 !== n) return n;
    var o = r;
    Array.isArray(r) || (o = r.split("."));
    for (var t = o.length, a = -1; e && ++a < t; ) e = e[o[a]];
    return e;
  }
  function D(e) {
    return "object" == typeof e;
  }
  var t = function () {
      var a = [],
        i = 0,
        e = {};
      function r() {
        for (var e = a[(o = 0)], r = 1; r < i; ) {
          var n = r + 1,
            o = r;
          n < i && a[n].score < a[r].score && (o = n),
            (a[(o - 1) >> 1] = a[o]),
            (r = 1 + (o << 1));
        }
        for (
          var t = (o - 1) >> 1;
          0 < o && e.score < a[t].score;
          t = ((o = t) - 1) >> 1
        )
          a[o] = a[t];
        a[o] = e;
      }
      return (
        (e.add = function (e) {
          var r = i;
          a[i++] = e;
          for (
            var n = (r - 1) >> 1;
            0 < r && e.score < a[n].score;
            n = ((r = n) - 1) >> 1
          )
            a[r] = a[n];
          a[r] = e;
        }),
        (e.poll = function () {
          if (0 !== i) {
            var e = a[0];
            return (a[0] = a[--i]), r(), e;
          }
        }),
        (e.peek = function (e) {
          if (0 !== i) return a[0];
        }),
        (e.replaceTop = function (e) {
          (a[0] = e), r();
        }),
        e
      );
    },
    k = t();
  return (function e(A) {
    var L = {
      single: function (e, r, n) {
        return e
          ? (D(e) || (e = L.getPreparedSearch(e)),
            r
              ? (D(r) || (r = L.getPrepared(r)),
                ((
                  n && void 0 !== n.allowTypo
                    ? n.allowTypo
                    : !A || void 0 === A.allowTypo || A.allowTypo
                )
                  ? L.algorithm
                  : L.algorithmNoTypo)(e, r, e[0]))
              : null)
          : null;
      },
      go: function (e, r, n) {
        if (!e) return j;
        var o = (e = L.prepareSearch(e))[0],
          t = (n && n.threshold) || (A && A.threshold) || -9007199254740991,
          a = (n && n.limit) || (A && A.limit) || 9007199254740991,
          i = (
            n && void 0 !== n.allowTypo
              ? n.allowTypo
              : !A || void 0 === A.allowTypo || A.allowTypo
          )
            ? L.algorithm
            : L.algorithmNoTypo,
          l = 0,
          f = 0,
          u = r.length;
        if (n && n.keys)
          for (
            var s = n.scoreFn || N, p = n.keys, d = p.length, c = u - 1;
            0 <= c;
            --c
          ) {
            for (var g = r[c], v = new Array(d), h = d - 1; 0 <= h; --h)
              (y = S(g, (x = p[h])))
                ? (D(y) || (y = L.getPrepared(y)), (v[h] = i(e, y, o)))
                : (v[h] = null);
            v.obj = g;
            var w = s(v);
            null !== w &&
              (w < t ||
                ((v.score = w),
                l < a
                  ? (k.add(v), ++l)
                  : (++f, w > k.peek().score && k.replaceTop(v))));
          }
        else if (n && n.key)
          for (var x = n.key, c = u - 1; 0 <= c; --c)
            (y = S((g = r[c]), x)) &&
              (D(y) || (y = L.getPrepared(y)),
              null !== (m = i(e, y, o)) &&
                (m.score < t ||
                  ((m = {
                    target: m.target,
                    _targetLowerCodes: null,
                    _nextBeginningIndexes: null,
                    score: m.score,
                    indexes: m.indexes,
                    obj: g,
                  }),
                  l < a
                    ? (k.add(m), ++l)
                    : (++f, m.score > k.peek().score && k.replaceTop(m)))));
        else
          for (var y, m, c = u - 1; 0 <= c; --c)
            (y = r[c]) &&
              (D(y) || (y = L.getPrepared(y)),
              null !== (m = i(e, y, o)) &&
                (m.score < t ||
                  (l < a
                    ? (k.add(m), ++l)
                    : (++f, m.score > k.peek().score && k.replaceTop(m)))));
        if (0 === l) return j;
        for (var T = new Array(l), c = l - 1; 0 <= c; --c) T[c] = k.poll();
        return (T.total = l + f), T;
      },
      goAsync: function (I, B, _) {
        var C = !1,
          e = new Promise(function (c, g) {
            if (!I) return c(j);
            var v = (I = L.prepareSearch(I))[0],
              h = t(),
              w = B.length - 1,
              x = (_ && _.threshold) || (A && A.threshold) || -9007199254740991,
              y = (_ && _.limit) || (A && A.limit) || 9007199254740991,
              m = (
                _ && void 0 !== _.allowTypo
                  ? _.allowTypo
                  : !A || void 0 === A.allowTypo || A.allowTypo
              )
                ? L.algorithm
                : L.algorithmNoTypo,
              T = 0,
              k = 0;
            function b() {
              if (C) return g("canceled");
              var e = Date.now();
              if (_ && _.keys)
                for (
                  var r = _.scoreFn || N, n = _.keys, o = n.length;
                  0 <= w;
                  --w
                ) {
                  for (var t = B[w], a = new Array(o), i = o - 1; 0 <= i; --i)
                    (f = S(t, (u = n[i])))
                      ? (D(f) || (f = L.getPrepared(f)), (a[i] = m(I, f, v)))
                      : (a[i] = null);
                  a.obj = t;
                  var l = r(a);
                  if (
                    null !== l &&
                    !(l < x) &&
                    ((a.score = l),
                    T < y
                      ? (h.add(a), ++T)
                      : (++k, l > h.peek().score && h.replaceTop(a)),
                    w % 1e3 == 0 && 10 <= Date.now() - e)
                  )
                    return void (P ? setImmediate : setTimeout)(b);
                }
              else if (_ && _.key) {
                for (var f, u = _.key; 0 <= w; --w)
                  if ((f = S((t = B[w]), u))) {
                    D(f) || (f = L.getPrepared(f));
                    var s = m(I, f, v);
                    if (
                      null !== s &&
                      !(s.score < x) &&
                      ((s = {
                        target: s.target,
                        _targetLowerCodes: null,
                        _nextBeginningIndexes: null,
                        score: s.score,
                        indexes: s.indexes,
                        obj: t,
                      }),
                      T < y
                        ? (h.add(s), ++T)
                        : (++k, s.score > h.peek().score && h.replaceTop(s)),
                      w % 1e3 == 0 && 10 <= Date.now() - e)
                    )
                      return void (P ? setImmediate : setTimeout)(b);
                  }
              } else
                for (; 0 <= w; --w)
                  if (
                    (f = B[w]) &&
                    (D(f) || (f = L.getPrepared(f)),
                    (s = m(I, f, v)),
                    null !== s &&
                      !(s.score < x) &&
                      (T < y
                        ? (h.add(s), ++T)
                        : (++k, s.score > h.peek().score && h.replaceTop(s)),
                      w % 1e3 == 0 && 10 <= Date.now() - e))
                  )
                    return void (P ? setImmediate : setTimeout)(b);
              if (0 === T) return c(j);
              for (var p = new Array(T), d = T - 1; 0 <= d; --d)
                p[d] = h.poll();
              (p.total = T + k), c(p);
            }
            P ? setImmediate(b) : b();
          });
        return (
          (e.cancel = function () {
            C = !0;
          }),
          e
        );
      },
      highlight: function (e, r, n) {
        if (null === e) return null;
        void 0 === r && (r = "<b>"), void 0 === n && (n = "</b>");
        for (
          var o = "",
            t = 0,
            a = !1,
            i = e.target,
            l = i.length,
            f = e.indexes,
            u = 0;
          u < l;
          ++u
        ) {
          var s = i[u];
          if (f[t] === u) {
            if ((a || ((a = !0), (o += r)), ++t === f.length)) {
              o += s + n + i.substr(u + 1);
              break;
            }
          } else a && ((a = !1), (o += n));
          o += s;
        }
        return o;
      },
      prepare: function (e) {
        if (e)
          return {
            target: e,
            _targetLowerCodes: L.prepareLowerCodes(e),
            _nextBeginningIndexes: null,
            score: null,
            indexes: null,
            obj: null,
          };
      },
      prepareSlow: function (e) {
        if (e)
          return {
            target: e,
            _targetLowerCodes: L.prepareLowerCodes(e),
            _nextBeginningIndexes: L.prepareNextBeginningIndexes(e),
            score: null,
            indexes: null,
            obj: null,
          };
      },
      prepareSearch: function (e) {
        if (e) return L.prepareLowerCodes(e);
      },
      getPrepared: function (e) {
        if (999 < e.length) return L.prepare(e);
        var r = n.get(e);
        return void 0 !== r || ((r = L.prepare(e)), n.set(e, r)), r;
      },
      getPreparedSearch: function (e) {
        if (999 < e.length) return L.prepareSearch(e);
        var r = o.get(e);
        return void 0 !== r || ((r = L.prepareSearch(e)), o.set(e, r)), r;
      },
      algorithm: function (e, r, n) {
        for (
          var o = r._targetLowerCodes,
            t = e.length,
            a = o.length,
            i = 0,
            l = 0,
            f = 0,
            u = 0;
          ;

        ) {
          if (n === o[l]) {
            if (((m[u++] = l), ++i === t)) break;
            n = e[0 === f ? i : f === i ? i + 1 : f === i - 1 ? i - 1 : i];
          }
          if (a <= ++l)
            for (;;) {
              if (i <= 1) return null;
              if (0 === f) {
                if (n === e[--i]) continue;
                f = i;
              } else {
                if (1 === f) return null;
                if ((n = e[1 + (i = --f)]) === e[i]) continue;
              }
              l = m[(u = i) - 1] + 1;
              break;
            }
        }
        var i = 0,
          s = 0,
          p = !1,
          d = 0,
          c = r._nextBeginningIndexes;
        null === c &&
          (c = r._nextBeginningIndexes =
            L.prepareNextBeginningIndexes(r.target));
        var g,
          v,
          h = (l = 0 === m[0] ? 0 : c[m[0] - 1]);
        if (l !== a)
          for (;;)
            if (a <= l)
              if (i <= 0) {
                if (t - 2 < ++s) break;
                e[s] !== e[s + 1] && (l = h);
              } else --i, (l = c[T[--d]]);
            else if (
              e[0 === s ? i : s === i ? i + 1 : s === i - 1 ? i - 1 : i] ===
              o[l]
            ) {
              if (((T[d++] = l), ++i === t)) {
                p = !0;
                break;
              }
              ++l;
            } else l = c[l];
        v = p ? ((g = T), d) : ((g = m), u);
        for (var w = 0, x = -1, y = 0; y < t; ++y)
          x !== (l = g[y]) - 1 && (w -= l), (x = l);
        for (
          p ? 0 !== s && (w += -20) : ((w *= 1e3), 0 !== f && (w += -20)),
            w -= a - t,
            r.score = w,
            r.indexes = new Array(v),
            y = v - 1;
          0 <= y;
          --y
        )
          r.indexes[y] = g[y];
        return r;
      },
      algorithmNoTypo: function (e, r, n) {
        for (
          var o = r._targetLowerCodes,
            t = e.length,
            a = o.length,
            i = 0,
            l = 0,
            f = 0;
          ;

        ) {
          if (n === o[l]) {
            if (((m[f++] = l), ++i === t)) break;
            n = e[i];
          }
          if (a <= ++l) return null;
        }
        var u,
          s,
          i = 0,
          p = !1,
          d = 0,
          c = r._nextBeginningIndexes;
        if (
          (null === c &&
            (c = r._nextBeginningIndexes =
              L.prepareNextBeginningIndexes(r.target)),
          (l = 0 === m[0] ? 0 : c[m[0] - 1]) !== a)
        )
          for (;;)
            if (a <= l) {
              if (i <= 0) break;
              --i, (l = c[T[--d]]);
            } else if (e[i] === o[l]) {
              if (((T[d++] = l), ++i === t)) {
                p = !0;
                break;
              }
              ++l;
            } else l = c[l];
        s = p ? ((u = T), d) : ((u = m), f);
        for (var g = 0, v = -1, h = 0; h < t; ++h)
          v !== (l = u[h]) - 1 && (g -= l), (v = l);
        for (
          p || (g *= 1e3),
            g -= a - t,
            r.score = g,
            r.indexes = new Array(s),
            h = s - 1;
          0 <= h;
          --h
        )
          r.indexes[h] = u[h];
        return r;
      },
      prepareLowerCodes: function (e) {
        for (var r = e.length, n = [], o = e.toLowerCase(), t = 0; t < r; ++t)
          n[t] = o.charCodeAt(t);
        return n;
      },
      prepareBeginningIndexes: function (e) {
        for (
          var r = e.length, n = [], o = 0, t = !1, a = !1, i = 0;
          i < r;
          ++i
        ) {
          var l = e.charCodeAt(i),
            f = 65 <= l && l <= 90,
            u = f || (97 <= l && l <= 122) || (48 <= l && l <= 57),
            l = (f && !t) || !a || !u,
            t = f,
            a = u;
          l && (n[o++] = i);
        }
        return n;
      },
      prepareNextBeginningIndexes: function (e) {
        for (
          var r = e.length,
            n = L.prepareBeginningIndexes(e),
            o = [],
            t = n[0],
            a = 0,
            i = 0;
          i < r;
          ++i
        )
          i < t ? (o[i] = t) : ((t = n[++a]), (o[i] = void 0 === t ? r : t));
        return o;
      },
      cleanup: r,
      new: e,
    };
    return L;
  })();
});
