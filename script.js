(function () {
  "use strict";

  /* =========================================================
     1. TRANSLATIONS
     ========================================================= */
  var translations = {
    en: {
      nav_about: "About",
      nav_features: "Features",
      nav_tech: "Tech",
      nav_contact: "Contact",
      hero_eyebrow: "Student project · RFMSH",
      hero_title_1: "Where science",
      hero_title_2: "meets many languages",
      hero_lead: "An interactive lab built by a student of the Republican Physics and Mathematics School — exploring how code, mathematics and culture can speak one universal language.",
      hero_cta_1: "Explore the project",
      hero_cta_2: "Get in touch",
      hero_hint: "Move your cursor or touch the heart",
      about_eyebrow: "About",
      about_title: "A project by an RFMSH student",
      about_card_title: "What is RFMSH Future Lab?",
      about_p1: "RFMSH Future Lab is a personal research and design project created by a student of the Republican Physics and Mathematics School (RFMSH) — a school known for its strong focus on mathematics, physics and computer science.",
      about_p2: "The lab shows that technology has no borders: the interactive heart on this page is drawn with a mathematical curve, animated by a particle system and greets you in many languages of the world.",
      stat_1: "Languages in the heart",
      stat_2: "Interface languages",
      stat_3: "External libraries",
      feat_eyebrow: "Features",
      feat_title: "Built with curiosity",
      feat_1_title: "Mathematics",
      feat_1_text: "The heart shape is generated from a parametric equation, then brought to life with spring physics.",
      feat_2_title: "Clean code",
      feat_2_text: "Pure HTML, CSS and JavaScript — no frameworks, no dependencies, instant loading on GitHub Pages.",
      feat_3_title: "International by design",
      feat_3_text: "Switch between English, Russian and Kazakh instantly. Your choice is remembered next time you visit.",
      tech_eyebrow: "Technology",
      tech_title: "Under the hood",
      contact_title: "Let's build the future together",
      contact_text: "Open to collaboration, research ideas and international opportunities.",
      contact_btn: "Visit my GitHub",
      footer_text: "Made with code and curiosity"
    },
    ru: {
      nav_about: "О проекте",
      nav_features: "Возможности",
      nav_tech: "Технологии",
      nav_contact: "Контакты",
      hero_eyebrow: "Ученический проект · РФМШ",
      hero_title_1: "Где наука",
      hero_title_2: "встречает множество языков",
      hero_lead: "Интерактивная лаборатория, созданная учеником Республиканской физико-математической школы — исследование того, как код, математика и культура могут говорить на одном универсальном языке.",
      hero_cta_1: "Узнать о проекте",
      hero_cta_2: "Связаться",
      hero_hint: "Двигайте курсор или коснитесь сердца",
      about_eyebrow: "О проекте",
      about_title: "Проект ученика РФМШ",
      about_card_title: "Что такое RFMSH Future Lab?",
      about_p1: "RFMSH Future Lab — личный исследовательский и дизайнерский проект, созданный учеником Республиканской физико-математической школы (РФМШ) — школы, известной сильной подготовкой по математике, физике и информатике.",
      about_p2: "Лаборатория показывает, что у технологий нет границ: интерактивное сердце на этой странице построено по математической кривой, анимировано системой частиц и приветствует вас на разных языках мира.",
      stat_1: "Языков в сердце",
      stat_2: "Языка интерфейса",
      stat_3: "Внешних библиотек",
      feat_eyebrow: "Возможности",
      feat_title: "Создано с любопытством",
      feat_1_title: "Математика",
      feat_1_text: "Форма сердца задаётся параметрическим уравнением, а затем оживает благодаря пружинной физике.",
      feat_2_title: "Чистый код",
      feat_2_text: "Только HTML, CSS и JavaScript — без фреймворков и зависимостей, мгновенная загрузка на GitHub Pages.",
      feat_3_title: "Международный по замыслу",
      feat_3_text: "Мгновенное переключение между английским, русским и казахским. Ваш выбор запоминается.",
      tech_eyebrow: "Технологии",
      tech_title: "Что под капотом",
      contact_title: "Создадим будущее вместе",
      contact_text: "Открыт к сотрудничеству, исследовательским идеям и международным возможностям.",
      contact_btn: "Мой GitHub",
      footer_text: "Создано с кодом и любопытством"
    },
    kk: {
      nav_about: "Жоба туралы",
      nav_features: "Мүмкіндіктер",
      nav_tech: "Технологиялар",
      nav_contact: "Байланыс",
      hero_eyebrow: "Оқушы жобасы · РФММ",
      hero_title_1: "Ғылым көптеген",
      hero_title_2: "тілдермен кездесетін жер",
      hero_lead: "Республикалық физика-математикалық мектеп оқушысы жасаған интерактивті зертхана — код, математика және мәдениет бір әмбебап тілде сөйлей алатынын зерттейді.",
      hero_cta_1: "Жобамен танысу",
      hero_cta_2: "Хабарласу",
      hero_hint: "Курсорды жылжытыңыз немесе жүрекке тиіңіз",
      about_eyebrow: "Жоба туралы",
      about_title: "РФМММ оқушысының жобасы",
      about_card_title: "RFMSH Future Lab дегеніміз не?",
      about_p1: "RFMSH Future Lab — математика, физика және информатика бойынша мықты дайындығымен танымал Республикалық физика-математикалық мектептің (РФММ) оқушысы жасаған жеке зерттеу және дизайн жобасы.",
      about_p2: "Зертхана технологияның шекарасы жоқ екенін көрсетеді: бұл беттегі интерактивті жүрек математикалық қисық бойынша салынған, бөлшектер жүйесімен жандандырылған және сізді әлемнің көптеген тілінде қарсы алады.",
      stat_1: "Жүректегі тіл саны",
      stat_2: "Интерфейс тілдері",
      stat_3: "Сыртқы кітапханалар",
      feat_eyebrow: "Мүмкіндіктер",
      feat_title: "Қызығушылықпен жасалған",
      feat_1_title: "Математика",
      feat_1_text: "Жүрек пішіні параметрлік теңдеу арқылы құрылып, серіппелі физикамен жанданады.",
      feat_2_title: "Таза код",
      feat_2_text: "Таза HTML, CSS және JavaScript — фреймворксіз, тәуелділіксіз, GitHub Pages-те лезде жүктеледі.",
      feat_3_title: "Халықаралық дизайн",
      feat_3_text: "Ағылшын, орыс және қазақ тілдерінің арасында лезде ауыстырыңыз. Таңдауыңыз есте сақталады.",
      tech_eyebrow: "Технологиялар",
      tech_title: "Қақпақ астында",
      contact_title: "Болашақты бірге құрайық",
      contact_text: "Ынтымақтастыққа, зерттеу идеяларына және халықаралық мүмкіндіктерге ашықпын.",
      contact_btn: "Менің GitHub-ым",
      footer_text: "Код пен қызығушылықпен жасалған"
    }
  };

  var STORAGE_KEY = "rfmsh-lang";
  var currentLang = "en";

  function detectLang() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* storage unavailable */ }
    if (saved && translations[saved]) return saved;
    var nav = (navigator.language || "en").slice(0, 2).toLowerCase();
    return translations[nav] ? nav : "en";
  }

  function applyTranslations(lang) {
    var dict = translations[lang];
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-i18n");
      if (dict[key] !== undefined) nodes[i].textContent = dict[key];
    }
    document.documentElement.lang = lang;
  }

  function moveIndicator() {
    var active = document.querySelector(".lang-btn.active");
    var indicator = document.querySelector(".lang-indicator");
    if (!active || !indicator) return;
    indicator.style.width = active.offsetWidth + "px";
    indicator.style.transform = "translateX(" + (active.offsetLeft - 4) + "px)";
  }

  function setLang(lang, animate) {
    if (!translations[lang]) return;
    currentLang = lang;

    var buttons = document.querySelectorAll(".lang-btn");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.toggle("active", buttons[i].getAttribute("data-lang") === lang);
      buttons[i].setAttribute("aria-pressed", buttons[i].getAttribute("data-lang") === lang ? "true" : "false");
    }
    moveIndicator();

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }

    if (animate) {
      document.body.classList.add("switching");
      setTimeout(function () {
        applyTranslations(lang);
        document.body.classList.remove("switching");
      }, 250);
    } else {
      applyTranslations(lang);
    }
  }

  /* =========================================================
     2. MULTILINGUAL WORDS FOR THE HEART
     ========================================================= */
  var loveWords = [
    { word: "Love",     lang: "English" },
    { word: "Любовь",   lang: "Русский" },
    { word: "Махаббат", lang: "Қазақша" },
    { word: "Amor",     lang: "Español" },
    { word: "Liebe",    lang: "Deutsch" },
    { word: "Amour",    lang: "Français" },
    { word: "愛",        lang: "日本語" },
    { word: "사랑",      lang: "한국어" },
    { word: "حب",       lang: "العربية" }
  ];
  var wordIndex = 0;

  function showWord(index) {
    var caption = document.querySelector(".heart-caption");
    var wordEl = document.getElementById("heart-word");
    var langEl = document.getElementById("heart-lang");
    if (!caption || !wordEl || !langEl) return;
    caption.classList.add("fade");
    setTimeout(function () {
      wordEl.textContent = loveWords[index].word;
      langEl.textContent = loveWords[index].lang;
      caption.classList.remove("fade");
    }, 500);
  }

  function nextWord() {
    wordIndex = (wordIndex + 1) % loveWords.length;
    showWord(wordIndex);
  }

  /* =========================================================
     3. PARTICLE HEART (Canvas)
     ========================================================= */
  function initHeart() {
    var canvas = document.getElementById("heart-canvas");
    if (!canvas || !canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    var size = 0, dpr = 1;
    var particles = [];
    var pointer = { x: -9999, y: -9999, active: false };
    var burst = 0; // extra pulse energy on click
    var COUNT = 900;

    function heartPoint(t) {
      // classic parametric heart curve
      var x = 16 * Math.pow(Math.sin(t), 3);
      var y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
      return { x: x, y: y };
    }

    function buildParticles() {
      particles = [];
      for (var i = 0; i < COUNT; i++) {
        var t = Math.random() * Math.PI * 2;
        var p = heartPoint(t);
        // fill the interior: scale by random radius (sqrt for even density)
        var r = Math.pow(Math.random(), 0.55);
        // keep a stronger outline
        if (Math.random() < 0.35) r = 1;
        particles.push({
          bx: p.x * r,
          by: p.y * r,
          x: (Math.random() - 0.5) * size,
          y: (Math.random() - 0.5) * size,
          vx: 0, vy: 0,
          s: Math.random() * 1.6 + 0.6,
          hue: 190 + Math.random() * 150, // cyan -> violet -> pink
          phase: Math.random() * Math.PI * 2
        });
      }
    }

    function resize() {
      var rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      size = rect.width;
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildParticles();
    }

    function setPointer(e) {
      var rect = canvas.getBoundingClientRect();
      var cx = (e.touches ? e.touches[0].clientX : e.clientX);
      var cy = (e.touches ? e.touches[0].clientY : e.clientY);
      pointer.x = cx - rect.left;
      pointer.y = cy - rect.top;
      pointer.active = true;
    }

    canvas.addEventListener("mousemove", setPointer);
    canvas.addEventListener("touchmove", setPointer, { passive: true });
    canvas.addEventListener("touchstart", function (e) { setPointer(e); burst = 1; nextWord(); }, { passive: true });
    canvas.addEventListener("mouseleave", function () { pointer.active = false; pointer.x = pointer.y = -9999; });
    canvas.addEventListener("touchend", function () { pointer.active = false; pointer.x = pointer.y = -9999; });
    canvas.addEventListener("click", function () { burst = 1; nextWord(); });

    var start = performance.now();

    function frame(now) {
      var time = (now - start) / 1000;

      // heartbeat: two quick beats then rest (lub-dub)
      var beatCycle = time % 1.4;
      var beat = Math.exp(-Math.pow((beatCycle - 0.15) * 9, 2)) + 0.6 * Math.exp(-Math.pow((beatCycle - 0.45) * 9, 2));
      if (reduceMotion) beat = 0;
      burst *= 0.94;

      var scale = (size / 38) * (1 + beat * 0.07 + burst * 0.12);
      var cx = size / 2;
      var cy = size / 2 + size * 0.02;

      ctx.clearRect(0, 0, size, size);

      // soft glow behind the heart
      var grad = ctx.createRadialGradient(cx, cy, size * 0.05, cx, cy, size * 0.5);
      grad.addColorStop(0, "rgba(244, 114, 182, " + (0.18 + beat * 0.12) + ")");
      grad.addColorStop(1, "rgba(7, 11, 20, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, size, size);

      ctx.globalCompositeOperation = "lighter";

      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        var wobble = Math.sin(time * 1.5 + p.phase) * 0.35;
        var tx = cx + (p.bx + wobble * 0.3) * scale;
        var ty = cy + (p.by + wobble * 0.3) * scale;

        // spring toward target
        p.vx += (tx - p.x) * 0.045;
        p.vy += (ty - p.y) * 0.045;

        // pointer repulsion
        if (pointer.active) {
          var dx = p.x - pointer.x;
          var dy = p.y - pointer.y;
          var d2 = dx * dx + dy * dy;
          var radius = size * 0.16;
          if (d2 < radius * radius) {
            var d = Math.sqrt(d2) || 1;
            var force = (1 - d / radius) * 5.5;
            p.vx += (dx / d) * force;
            p.vy += (dy / d) * force;
          }
        }

        // burst impulse outward from center
        if (burst > 0.5) {
          var ox = p.x - cx, oy = p.y - cy;
          var od = Math.sqrt(ox * ox + oy * oy) || 1;
          p.vx += (ox / od) * burst * 1.4;
          p.vy += (oy / od) * burst * 1.4;
        }

        p.vx *= 0.82;
        p.vy *= 0.82;
        p.x += p.vx;
        p.y += p.vy;

        var alpha = 0.55 + beat * 0.35;
        ctx.beginPath();
        ctx.fillStyle = "hsla(" + (p.hue + time * 12) % 360 + ", 90%, 65%, " + alpha + ")";
        ctx.arc(p.x, p.y, p.s * (1 + beat * 0.4), 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalCompositeOperation = "source-over";
      requestAnimationFrame(frame);
    }

    resize();
    window.addEventListener("resize", function () { resize(); moveIndicator(); });
    requestAnimationFrame(frame);
  }

  /* =========================================================
     4. SCROLL REVEAL + COUNTERS
     ========================================================= */
  function animateCount(el) {
    var target = parseInt(el.getAttribute("data-count"), 10) || 0;
    if (target === 0) { el.textContent = "0"; return; }
    var duration = 1400;
    var startTime = null;
    function step(ts) {
      if (!startTime) startTime = ts;
      var progress = Math.min((ts - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased);
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function initReveal() {
    var items = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      for (var i = 0; i < items.length; i++) items[i].classList.add("visible");
      var counters = document.querySelectorAll("[data-count]");
      for (var j = 0; j < counters.length; j++) animateCount(counters[j]);
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        var nums = entry.target.querySelectorAll("[data-count]");
        for (var k = 0; k < nums.length; k++) animateCount(nums[k]);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.15 });

    for (var n = 0; n < items.length; n++) observer.observe(items[n]);
  }

  /* =========================================================
     5. INIT
     ========================================================= */
  document.addEventListener("DOMContentLoaded", function () {
    // language switcher
    var buttons = document.querySelectorAll(".lang-btn");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        var lang = this.getAttribute("data-lang");
        if (lang !== currentLang) setLang(lang, true);
      });
    }
    setLang(detectLang(), false);

    // footer year
    var year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();

    initHeart();
    initReveal();

    // cycle languages in the heart
    setInterval(nextWord, 3200);

    // keep the language indicator aligned once fonts are loaded
    window.addEventListener("load", moveIndicator);
  });
})();