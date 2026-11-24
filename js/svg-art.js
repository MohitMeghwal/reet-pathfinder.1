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
      return '<svg viewBox="0 0 64 64" width="44" height="44" aria-hidden="true">' +
        '<defs><linearGradient id="lgGold" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#fef08a"/><stop offset="100%" stop-color="#f97316"/></linearGradient></defs>' +
        '<circle cx="32" cy="18" r="14" fill="rgba(250,204,21,0.22)"/>' +
        '<path d="M8 24c9-5 17-4 24 3 7-7 15-8 24-3v27c-9-5-17-4-24 3-7-7-15-8-24-3z" fill="#fffdf7" stroke="#eab308" stroke-width="2.4"/>' +
        '<path d="M12 28c7-3 13-2 20 3M52 28c-7-3-13-2-20 3" fill="none" stroke="#94a3b8" stroke-width="1.5"/>' +
        '<path d="M32 27v27" stroke="#0f5f64" stroke-width="2.5"/>' +
        '<polygon points="32,3 35.8,11.8 45,12.6 38,18.4 40.2,27.2 32,22.4 23.8,27.2 26,18.4 19,12.6 28.2,11.8" fill="url(#lgGold)" stroke="#b45309" stroke-width="1"/>' +
      '</svg>';
    },

    trophy: function () {
      return '<svg viewBox="0 0 64 64" width="42" height="42" aria-hidden="true">' +
        '<path d="M18 12h28v14c0 9-6 16-14 16s-14-7-14-16V12z" fill="#facc15" stroke="#ca8a04" stroke-width="2.4"/>' +
        '<path d="M18 16H10c0 9 3 13 8 14M46 16h8c0 9-3 13-8 14" fill="none" stroke="#fde047" stroke-width="3" stroke-linecap="round"/>' +
        '<rect x="27" y="42" width="10" height="9" fill="#eab308"/>' +
        '<rect x="20" y="51" width="24" height="6" rx="3" fill="#ca8a04"/>' +
        '<polygon points="32,18 34,23 39,23.5 35,27 36,32 32,29 28,32 29,27 25,23.5 30,23" fill="#fff"/>' +
      '</svg>';
    },

    heroPalaceAndStudents: function () {
      return '<svg viewBox="0 0 460 225" width="460" height="225" aria-hidden="true">' +
        '<defs>' +
          '<linearGradient id="skyG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#bae6fd"/></linearGradient>' +
          '<linearGradient id="fortG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fef3c7"/><stop offset="100%" stop-color="#d97706"/></linearGradient>' +
          '<linearGradient id="domeG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fde047"/><stop offset="100%" stop-color="#ea580c"/></linearGradient>' +
        '</defs>' +
        '<rect width="460" height="225" rx="14" fill="url(#skyG)"/>' +
        '<circle cx="72" cy="48" r="26" fill="#fef08a" opacity="0.9"/>' +
        '<path d="M20 55 Q45 38 75 50 Q100 35 125 55 Q140 60 125 68 L25 68 Z" fill="#fff" opacity="0.72"/>' +
        '<path d="M270 35 Q300 20 330 32 Q360 18 390 36 L270 46 Z" fill="#fff" opacity="0.65"/>' +
        /* Rajasthani Palace / Fort Skyline */
        '<path d="M12 180 L12 110 L28 92 L44 110 L44 125 L68 125 L68 82 Q88 55 108 82 L108 118 L136 118 L136 72 L152 54 L168 72 L168 110 L196 110 L196 86 Q216 62 236 86 L236 180 Z" fill="url(#fortG)" stroke="#b45309" stroke-width="1.5"/>' +
        '<path d="M76 80 Q88 60 100 80 Z" fill="url(#domeG)"/><path d="M204 84 Q216 64 228 84 Z" fill="url(#domeG)"/>' +
        '<rect x="82" y="96" width="12" height="18" rx="6" fill="#78350f" opacity="0.65"/>' +
        '<rect x="146" y="88" width="12" height="20" rx="6" fill="#78350f" opacity="0.65"/>' +
        '<rect x="210" y="100" width="12" height="18" rx="6" fill="#78350f" opacity="0.65"/>' +
        '<path d="M0 175 Q140 155 280 175 T460 168 L460 225 L0 225 Z" fill="#16a34a"/>' +
        /* Anime-style Boy Student with Backpack */
        '<g transform="translate(260,52)">' +
          '<rect x="8" y="54" width="18" height="44" rx="7" fill="#1d4ed8"/>' +
          '<circle cx="36" cy="28" r="18" fill="#fed7aa" stroke="#9a3412" stroke-width="1.2"/>' +
          '<path d="M16 26c2-17 38-17 40 0c-4-7-11-11-20-11s-16 4-20 11z" fill="#0f172a"/>' +
          '<circle cx="30" cy="29" r="2.2" fill="#0f172a"/><circle cx="43" cy="29" r="2.2" fill="#0f172a"/>' +
          '<path d="M32 37 Q36 41 41 37" fill="none" stroke="#9a3412" stroke-width="1.8" stroke-linecap="round"/>' +
          '<path d="M20 48h32l4 52H16z" fill="#f8fafc" stroke="#1e293b" stroke-width="1.4"/>' +
          '<path d="M34 48l-3 22 3 6 3-6z" fill="#1e3a8a"/>' +
          '<rect x="44" y="60" width="22" height="28" rx="3" fill="#fde047" stroke="#0f172a" stroke-width="1.5"/>' +
        '</g>' +
        /* Anime-style Girl Student with Books */
        '<g transform="translate(345,58)">' +
          '<path d="M12 24c0-18 42-18 42 0v32c-8-6-34-6-42 0z" fill="#1e1b4b"/>' +
          '<circle cx="33" cy="26" r="17" fill="#fed7aa" stroke="#9a3412" stroke-width="1.2"/>' +
          '<path d="M16 22c5-9 29-9 34 0" fill="none" stroke="#312e81" stroke-width="3"/>' +
          '<circle cx="27" cy="27" r="2.2" fill="#0f172a"/><circle cx="39" cy="27" r="2.2" fill="#0f172a"/>' +
          '<path d="M29 35 Q33 38 37 35" fill="none" stroke="#9a3412" stroke-width="1.8" stroke-linecap="round"/>' +
          '<path d="M16 46h34l6 50H10z" fill="#be123c" stroke="#4c0519" stroke-width="1.4"/>' +
          '<rect x="6" y="56" width="22" height="26" rx="3" fill="#fff" stroke="#0f172a" stroke-width="1.5"/>' +
          '<rect x="10" y="60" width="14" height="4" fill="#38bdf8"/>' +
        '</g>' +
      '</svg>';
    },

    subjectArt: function (subjectId) {
      switch (subjectId) {
        case "cdp":
          return '<svg viewBox="0 0 110 90" width="96" height="80" aria-hidden="true">' +
            '<circle cx="36" cy="28" r="13" fill="#fed7aa"/><path d="M24 24c3-10 21-10 24 0" fill="#1e293b"/>' +
            '<circle cx="74" cy="28" r="13" fill="#fde68a"/><path d="M62 24c3-10 21-10 24 0" fill="#4c1d95"/>' +
            '<path d="M16 66c0-13 40-13 40 0" fill="#ffe4e6"/><path d="M54 66c0-13 40-13 40 0" fill="#fce7f3"/>' +
            '<path d="M24 54c10-4 20-4 31 2 11-6 21-6 31-2v22c-10-4-20-4-31 2-11-6-21-6-31-2z" fill="#fff" stroke="#881337" stroke-width="2"/>' +
          '</svg>';
        case "hindi":
          return '<svg viewBox="0 0 110 90" width="96" height="80" aria-hidden="true">' +
            '<rect x="14" y="54" width="60" height="16" rx="4" fill="#7dd3fc" stroke="#0c4a6e" stroke-width="2"/>' +
            '<rect x="20" y="38" width="54" height="16" rx="4" fill="#bae6fd" stroke="#0c4a6e" stroke-width="2"/>' +
            '<rect x="24" y="24" width="46" height="14" rx="4" fill="#e0f2fe" stroke="#0c4a6e" stroke-width="2"/>' +
            '<path d="M86 10L62 56l-6 14 14-6L94 18z" fill="#fde047" stroke="#0c4a6e" stroke-width="2"/>' +
            '<rect x="74" y="58" width="18" height="16" rx="3" fill="#1e293b"/>' +
          '</svg>';
        case "english":
          return '<svg viewBox="0 0 110 90" width="96" height="80" aria-hidden="true">' +
            '<rect x="18" y="14" width="24" height="62" rx="3" fill="#ede9fe" stroke="#3b0764" stroke-width="2"/>' +
            '<polygon points="18,14 30,4 42,14" fill="#c4b5fd" stroke="#3b0764" stroke-width="2"/>' +
            '<circle cx="30" cy="30" r="8" fill="#fff" stroke="#3b0764" stroke-width="2"/>' +
            '<path d="M30 25v5l3 2" fill="none" stroke="#3b0764" stroke-width="1.8"/>' +
            '<path d="M48 48c10-5 20-5 26 2 6-7 16-7 26-2v26c-10-5-20-5-26 2-6-7-16-7-26-2z" fill="#fff" stroke="#3b0764" stroke-width="2"/>' +
          '</svg>';
        case "maths":
          return '<svg viewBox="0 0 110 90" width="96" height="80" aria-hidden="true">' +
            '<path d="M16 68 A28 28 0 0 1 72 68 Z" fill="#fed7aa" stroke="#7c2d12" stroke-width="2"/>' +
            '<path d="M24 72 L44 16 L64 72" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/>' +
            '<rect x="66" y="24" width="30" height="44" rx="5" fill="#fff7ed" stroke="#7c2d12" stroke-width="2"/>' +
            '<rect x="72" y="30" width="18" height="10" rx="2" fill="#fdba74"/>' +
            '<circle cx="75" cy="48" r="2.5" fill="#d9480f"/><circle cx="85" cy="48" r="2.5" fill="#d9480f"/>' +
            '<circle cx="75" cy="58" r="2.5" fill="#d9480f"/><circle cx="85" cy="58" r="2.5" fill="#d9480f"/>' +
          '</svg>';
        case "evs":
        default:
          return '<svg viewBox="0 0 110 90" width="96" height="80" aria-hidden="true">' +
            '<circle cx="54" cy="44" r="28" fill="#0284c7" stroke="#fff" stroke-width="2.5"/>' +
            '<path d="M36 32c10-8 26-6 32 6-5 12-22 18-32 6z" fill="#4ade80"/>' +
            '<path d="M52 54c8-4 16 0 18 8-8 6-16 4-18-8z" fill="#22c55e"/>' +
            '<path d="M78 18c10 2 14 12 10 22-10-2-14-12-10-22z" fill="#bbf7d0" stroke="#15803d" stroke-width="1.5"/>' +
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
