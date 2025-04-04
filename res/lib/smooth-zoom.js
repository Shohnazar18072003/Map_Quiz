// https://github.com/mutsuyuki/Leaflet.SmoothWheelZoom/blob/master/SmoothWheelZoom.js
L.Map.mergeOptions({ smoothWheelZoom: !0, smoothSensitivity: 1 }),
  (L.Map.SmoothWheelZoom = L.Handler.extend({
    addHooks: function () {
      L.DomEvent.on(this._map._container, "wheel", this._onWheelScroll, this);
    },
    removeHooks: function () {
      L.DomEvent.off(this._map._container, "wheel", this._onWheelScroll, this);
    },
    _onWheelScroll: function (o) {
      this._isWheeling || this._onWheelStart(o), this._onWheeling(o);
    },
    _onWheelStart: function (o) {
      var t = this._map;
      (this._isWheeling = !0),
        (this._wheelMousePosition = t.mouseEventToContainerPoint(o)),
        (this._centerPoint = t.getSize()._divideBy(2)),
        (this._startLatLng = t.containerPointToLatLng(this._centerPoint)),
        (this._wheelStartLatLng = t.containerPointToLatLng(
          this._wheelMousePosition
        )),
        (this._startZoom = t.getZoom()),
        (this._moved = !1),
        (this._zooming = !0),
        t._stop(),
        t._panAnim && t._panAnim.stop(),
        (this._goalZoom = t.getZoom()),
        (this._prevCenter = t.getCenter()),
        (this._prevZoom = t.getZoom()),
        (this._zoomAnimationId = requestAnimationFrame(
          this._updateWheelZoom.bind(this)
        ));
    },
    _onWheeling: function (o) {
      var t = this._map;
      (this._goalZoom =
        this._goalZoom +
        0.003 * L.DomEvent.getWheelDelta(o) * t.options.smoothSensitivity),
        (this._goalZoom < t.getMinZoom() || this._goalZoom > t.getMaxZoom()) &&
          (this._goalZoom = t._limitZoom(this._goalZoom)),
        (this._wheelMousePosition = this._map.mouseEventToContainerPoint(o)),
        clearTimeout(this._timeoutId),
        (this._timeoutId = setTimeout(this._onWheelEnd.bind(this), 200)),
        L.DomEvent.preventDefault(o),
        L.DomEvent.stopPropagation(o);
    },
    _onWheelEnd: function (o) {
      (this._isWheeling = !1),
        cancelAnimationFrame(this._zoomAnimationId),
        this._map._moveEnd(!0);
    },
    _updateWheelZoom: function () {
      var o = this._map;
      if (
        o.getCenter().equals(this._prevCenter) &&
        o.getZoom() == this._prevZoom
      ) {
        (this._zoom = o.getZoom() + 0.3 * (this._goalZoom - o.getZoom())),
          (this._zoom = Math.floor(100 * this._zoom) / 100);
        var t = this._wheelMousePosition.subtract(this._centerPoint);
        (0 === t.x && 0 === t.y) ||
          ("center" === o.options.smoothWheelZoom
            ? (this._center = this._startLatLng)
            : (this._center = o.unproject(
                o.project(this._wheelStartLatLng, this._zoom).subtract(t),
                this._zoom
              )),
          this._moved || (o._moveStart(!0, !1), (this._moved = !0)),
          o._move(this._center, this._zoom),
          (this._prevCenter = o.getCenter()),
          (this._prevZoom = o.getZoom()),
          (this._zoomAnimationId = requestAnimationFrame(
            this._updateWheelZoom.bind(this)
          )));
      }
    },
  })),
  L.Map.addInitHook("addHandler", "smoothWheelZoom", L.Map.SmoothWheelZoom);
