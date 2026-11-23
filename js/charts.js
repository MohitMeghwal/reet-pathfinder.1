(function (global) {
  "use strict";

  var REET = global.REET = global.REET || {};

  REET.charts = {
    donut: function (percent, centerText) {
      var pct = Math.max(0, Math.min(100, Number(percent) || 0));
      var r = 42;
      var c = 2 * Math.PI * r;
      var offset = c - (pct / 100) * c;
      return '<svg viewBox="0 0 110 110" width="106" height="106" role="img" aria-label="' + pct + '% स्कोर">' +
        '<circle cx="55" cy="55" r="' + r + '" fill="none" stroke="#e2e8f0" stroke-width="11"/>' +
        '<circle cx="55" cy="55" r="' + r + '" fill="none" stroke="#167a7e" stroke-width="11" stroke-linecap="round" ' +
        'stroke-dasharray="' + c.toFixed(1) + '" stroke-dashoffset="' + offset.toFixed(1) + '" transform="rotate(-90 55 55)"/>' +
        '<text x="55" y="60" text-anchor="middle" font-size="20" font-weight="800" fill="#0b2f3a">' + REET.escapeHTML(centerText || (pct + "%")) + '</text>' +
      '</svg>';
    },

    bars: function (items) {
      if (!items || !items.length) return "";
      var maxVal = Math.max.apply(null, items.map(function (i) { return i.value || 0; }).concat([1]));
      var rowH = 34;
      var height = items.length * rowH + 12;
      var svg = '<svg viewBox="0 0 420 ' + height + '" width="100%" height="' + height + '" role="img" aria-label="प्रगति बार चार्ट">';
      items.forEach(function (it, idx) {
        var y = 10 + idx * rowH;
        var w = Math.round(((it.value || 0) / maxVal) * 230);
        svg += '<text x="4" y="' + (y + 16) + '" font-size="13" font-weight="600" fill="#13222b">' + REET.escapeHTML(it.label) + '</text>';
        svg += '<rect x="115" y="' + (y + 4) + '" width="230" height="16" rx="8" fill="#e2e8f0"/>';
        svg += '<rect x="115" y="' + (y + 4) + '" width="' + w + '" height="16" rx="8" fill="' + (it.color || "#167a7e") + '"/>';
        svg += '<text x="355" y="' + (y + 17) + '" font-size="13" font-weight="700" fill="#0b2f3a">' + REET.escapeHTML(it.display || String(it.value || 0)) + '</text>';
      });
      svg += '</svg>';
      return svg;
    },

    line: function (points) {
      if (!points || points.length < 2) {
        return '<p class="text-muted">ट्रेंड ग्राफ देखने के लिए कम से कम 2 रिकॉर्ड आवश्यक हैं।</p>';
      }
      var maxV = Math.max.apply(null, points.map(function (p) { return p.value; }).concat([100]));
      var w = 400;
      var h = 150;
      var pad = 24;
      var stepX = (w - pad * 2) / (points.length - 1);
      var coords = points.map(function (p, i) {
        var x = pad + i * stepX;
        var y = h - pad - ((p.value / maxV) * (h - pad * 2));
        return x.toFixed(1) + "," + y.toFixed(1);
      });
      var svg = '<svg viewBox="0 0 ' + w + ' ' + h + '" width="100%" height="' + h + '" role="img" aria-label="प्रगति ट्रेंड चार्ट">';
      svg += '<polyline fill="none" stroke="#167a7e" stroke-width="3" points="' + coords.join(" ") + '"/>';
      points.forEach(function (p, i) {
        var xy = coords[i].split(",");
        svg += '<circle cx="' + xy[0] + '" cy="' + xy[1] + '" r="4.5" fill="#f97316"/>';
        svg += '<text x="' + xy[0] + '" y="' + (h - 6) + '" text-anchor="middle" font-size="11" fill="#3f525e">' + REET.escapeHTML(p.label) + '</text>';
      });
      svg += '</svg>';
      return svg;
    }
  };
})(window);
