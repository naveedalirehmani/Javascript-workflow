"use strict";

(function () {
  "use strict";

  var e,
    r = {
      371: function _(e, r) {
        Object.defineProperty(r, "__esModule", {
          value: !0
        }), r.callNameArrow = void 0, r.callNameArrow = function (e) {
          console.log(e);
        };
      }
    },
    o = {};
  e = function e(l) {
    var a = o[l];
    if (void 0 !== a) return a.exports;
    var t = o[l] = {
      exports: {}
    };
    return r[l](t, t.exports, e), t.exports;
  }(371), console.log((0, e.callNameArrow)("Naveed Ali Rehmani"));
})();
