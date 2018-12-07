!(function(n) {
    var e = n.document,
      t = e.documentElement,
      i = 750,
      d = i / 100,
      o = "orientationchange" in n ? "orientationchange" : "resize",
      a = function() {
        // if (window.orientation == 90 || window.orientation == -90) {
        //   n = t.clientWidth || 320;
        // } else {
        //   n = t.clientHeight || 320;
        // }
        n = t.clientWidth;
        n > 750 && (n = 750);
        t.style.fontSize = n / d + "px";
      };
    e.addEventListener &&
      (n.addEventListener(o, a, !1),
      e.addEventListener("DOMContentLoaded", a, !1));
  })(window);