"use strict";

(function () {
  "use strict";

  var e,
    o = {
      819: function _(e, o, r) {
        r.r(o), r.d(o, {
          callNameArrow: function callNameArrow() {
            return t;
          }
        });
        var t = function t(e) {
          console.log(e);
        };
      }
    },
    r = {};
  function t(e) {
    var l = r[e];
    if (void 0 !== l) return l.exports;
    var n = r[e] = {
      exports: {}
    };
    return o[e](n, n.exports, t), n.exports;
  }
  t.d = function (e, o) {
    for (var r in o) t.o(o, r) && !t.o(e, r) && Object.defineProperty(e, r, {
      enumerable: !0,
      get: o[r]
    });
  }, t.o = function (e, o) {
    return Object.prototype.hasOwnProperty.call(e, o);
  }, t.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, e = t(819), console.log((0, e.callNameArrow)("Naveed Ali Rehmani"));
})();
