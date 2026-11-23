(function (global) {
  "use strict";

  var REET = global.REET = global.REET || {};

  REET.assets = {
    logo: null,
    hero: null,
    cdp: null,
    hindi: null,
    english: null,
    maths: null,
    evs: null
  };

  REET.svg = {
    logo: function () {
      return '<svg viewBox="0 0 64 64" width="42" height="42" aria-hidden="true">' +
        '<defs><linearGradient id="lgGold" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#fde047"/><stop offset="100%" stop-color="#f97316"/></linearGradient></defs>' +
        '<path d="M8 22c9-4 17-3 24 3 7-6 15-7 24-3v27c-9-4-17-3-24 3-7-6-15-7-24-3z" fill="#fffdf7" stroke="#eab308" stroke-width="2.5"/>' +
        '<path d="M32 25v27" stroke="#0f5f64" stroke-width="2.5"/>' +
        '<polygon points="32,4 35.5,12 44,12.8 37.5,18.2 39.5,26.5 32,22 24.5,26.5 26.5,18.2 20,12.8 28.5,12" fill="url(#lgGold)"/>' +
      '</svg>';
    },

    trophy: function () {
      return '<svg viewBox="0 0 64 64" width="40" height="40" aria-hidden="true">' +
        '<path d="M18 12h28v14c0 9-6 16-14 16s-14-7-14-16V12z" fill="#facc15" stroke="#ca8a04" stroke-width="2.5"/>' +
        '<path d="M18 16H10c0 9 3 13 8 14M46 16h8c0 9-3 13-8 14" fill="none" stroke="#fde047" stroke-width="3" stroke-linecap="round"/>' +
        '<rect x="27" y="42" width="10" height="9" fill="#eab308"/>' +
        '<rect x="20" y="51" width="24" height="6" rx="3" fill="#ca8a04"/>' +
      '</svg>';
    },

    heroPalaceAndStudents: function () {
      return '<svg viewBox="0 0 420 210" width="420" height="210" aria-hidden="true">' +
        '<defs>' +
          '<linearGradient id="skyG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#60a5fa"/><stop offset="100%" stop-color="#bae6fd"/></linearGradient>' +
          '<linearGradient id="fortG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fde68a"/><stop offset="100%" stop-color="#d97706"/></linearGradient>' +
        '</defs>' +
        '<rect width="420" height="210" rx="14" fill="url(#skyG)"/>' +
        '<circle cx="65" cy="48" r="24" fill="#fef08a" opacity="0.85"/>' +
        '<path d="M18 165 L18 92 L36 74 L54 92 L54 110 L82 110 L82 65 L108 44 L134 65 L134 108 L168 108 L168 78 L194 60 L220 78 L220 165 Z" fill="url(#fortG)" opacity="0.92"/>' +
        '<path d="M0 165 Q130 145 260 165 T420 160 L420 210 L0 210 Z" fill="#15803d"/>' +
        '<g transform="translate(245,56)">' +
          '<circle cx="34" cy="26" r="16" fill="#fed7aa"/>' +
          '<path d="M18 23c2-13 30-13 32 0c-6-6-26-6-32 0z" fill="#1e293b"/>' +
          '<rect x="20" y="44" width="28" height="48" rx="8" fill="#1e3a8a"/>' +
          '<rect x="14" y="48" width="10" height="34" rx="5" fill="#f97316"/>' +
          '<rect x="40" y="54" width="20" height="26" rx="3" fill="#fef3c7" stroke="#0f172a" stroke-width="1.5"/>' +
        '</g>' +
        '<g transform="translate(322,62)">' +
          '<circle cx="34" cy="24" r="15" fill="#fed7aa"/>' +
          '<path d="M16 24c0-16 36-16 36 0v20c-6-5-30-5-36 0z" fill="#312e81"/>' +
          '<path d="M18 42h32l6 46H12z" fill="#be185d"/>' +
          '<rect x="10" y="52" width="18" height="24" rx="3" fill="#fff" stroke="#0f172a" stroke-width="1.5"/>' +
        '</g>' +
      '</svg>';
    },

    subjectArt: function (subjectId) {
      switch (subjectId) {
        case "cdp":
          return '<svg viewBox="0 0 96 80" width="84" height="70" aria-hidden="true">' +
            '<circle cx="34" cy="28" r="12" fill="#fed7aa"/><circle cx="62" cy="28" r="12" fill="#fde68a"/>' +
            '<path d="M18 62c0-11 32-11 32 0" fill="#fff0f6"/><path d="M46 62c0-11 32-11 32 0" fill="#ffe4e6"/>' +
            '<rect x="26" y="48" width="44" height="22" rx="4" fill="#fff" stroke="#881337" stroke-width="2"/>' +
          '</svg>';
        case "hindi":
          return '<svg viewBox="0 0 96 80" width="84" height="70" aria-hidden="true">' +
            '<rect x="16" y="38" width="54" height="16" rx="4" fill="#e0f2fe" stroke="#0c4a6e" stroke-width="2"/>' +
            '<rect x="22" y="24" width="48" height="14" rx="4" fill="#bae6fd" stroke="#0c4a6e" stroke-width="2"/>' +
            '<path d="M74 12L54 54l-6 12 12-6L80 18z" fill="#fde047" stroke="#0c4a6e" stroke-width="2"/>' +
          '</svg>';
        case "english":
          return '<svg viewBox="0 0 96 80" width="84" height="70" aria-hidden="true">' +
            '<rect x="20" y="14" width="22" height="54" rx="3" fill="#ede9fe" stroke="#3b0764" stroke-width="2"/>' +
            '<circle cx="31" cy="28" r="7" fill="#fff" stroke="#3b0764" stroke-width="2"/>' +
            '<path d="M48 44c8-4 16-4 24 0s14 4 14 0v22c-6 3-12 3-14 0-8-4-16-4-24 0z" fill="#fff" stroke="#3b0764" stroke-width="2"/>' +
          '</svg>';
        case "maths":
          return '<svg viewBox="0 0 96 80" width="84" height="70" aria-hidden="true">' +
            '<polygon points="16,66 48,14 80,66" fill="none" stroke="#fff" stroke-width="3"/>' +
            '<rect x="52" y="24" width="26" height="36" rx="4" fill="#fff7ed" stroke="#7c2d12" stroke-width="2"/>' +
            '<path d="M58 34h14M58 42h14M58 50h14" stroke="#d9480f" stroke-width="2.5"/>' +
          '</svg>';
        case "evs":
        default:
          return '<svg viewBox="0 0 96 80" width="84" height="70" aria-hidden="true">' +
            '<circle cx="48" cy="40" r="24" fill="#38bdf8" stroke="#fff" stroke-width="2.5"/>' +
            '<path d="M34 32c8-6 22-4 26 6-4 10-18 14-26 6z" fill="#4ade80"/>' +
            '<path d="M68 20c8 2 12 10 8 18-8-2-12-10-8-18z" fill="#bbf7d0"/>' +
          '</svg>';
      }
    }
  };

  REET.checkOptionalAssets = function () {
    var map = {
      logo: "assets/logo.png",
      hero: "assets/hero.jpg",
      cdp: "assets/subject-cdp.png",
      hindi: "assets/subject-hindi.png",
      english: "assets/subject-english.png",
      maths: "assets/subject-maths.png",
      evs: "assets/subject-evs.png"
    };
    Object.keys(map).forEach(function (key) {
      var img = new global.Image();
      img.onload = function () {
        REET.assets[key] = map[key];
        if (REET.renderCurrentView) REET.renderCurrentView();
      };
      img.src = map[key];
    });
  };
})(window);
