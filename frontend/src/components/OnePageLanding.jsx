import React, { useEffect, useState } from "react";
import "../styles/onepage.css";

// ============================================
// 3 TILLI TARJIMALAR: UZB / RUS / ENG
// ============================================
const T = {
  uz: {
    nav: { why: "Nega biz", programs: "Yo'nalishlar", scholarship: "Stipendiya", apply: "Ariza topshirish" },
    countdown: { title: "⏰ 2026 kuzgi qabul yopilishiga qoldi:", days: "Kun", hours: "Soat", minutes: "Daqiqa", seconds: "Soniya" },
    hero: {
      badge: "🔥 2026-yil kuzgi qabul ochiq",
      titleA: "", titleHi: "TOPIKsiz", titleB: " ham Koreyada Magistratura 🎓",
      subtitle: "Janubiy Koreyada magistratura o'qish imkoniyati. Onlayn suhbat orqali qabul, D-2 talaba vizasi va xorijiy talabalar uchun stipendiya",
      points: ["✅ TOPIKsiz ham topshirish mumkin", "✅ 20% kafolatlangan stipendiya", "✅ MBA va IT yo'nalishlari"],
      btnPrimary: "Bepul konsultatsiya 🚀", btnSecondary: "Batafsil ma'lumot",
    },
    stats: [
      { n: "20–60%", l: "Stipendiya" }, { n: "4", l: "Yo'nalish" },
      { n: "D-2", l: "Talaba vizasi" }, { n: "TOPIKsiz", l: "Qabul imkoniyati" },
    ],
    why: {
      a: "Nega aynan ", hi: "biz", b: " 💡",
      cards: [
        { icon: "📝", t: "TOPIKsiz qabul", d: "Koreys tili sertifikati bo'lmasa ham hujjat topshirish mumkin. Til talab qilinmaydigan yo'nalishlar mavjud" },
        { icon: "💰", t: "Kafolatlangan stipendiya", d: "Xorijiy talabalar uchun 20% dan boshlab, TOPIK darajangizga qarab 60% gacha grant" },
        { icon: "💻", t: "Onlayn suhbat", d: "Qabul jarayoni onlayn yoki oflayn suhbat orqali. Koreyaga bormasdan turib hujjat topshirasiz" },
        { icon: "🛂", t: "To'liq qo'llab-quvvatlash", d: "D-2 talaba vizasi, hujjatlar, o'qish davomida qonuniy ishlash va bitiruvdan so'ng ish topish bo'yicha yordam" },
      ],
    },
    programs: {
      a: "Magistratura ", hi: "yo'nalishlari", b: " 🎯",
      cards: [
        { icon: "💼", t: "MBA", f: "Biznes boshqaruvi", li: ["Menejment & Marketing", "Xalqaro biznes", "Tadbirkorlik", "Yuqori talab"] },
        { icon: "🧠", t: "Psixologiya", f: "Counseling Psychology", li: ["Maslahat psixologiyasi", "HR & klinika", "Inson resurslari", "Zamonaviy soha"] },
        { icon: "💻", t: "Engineering & IT", f: "Convergence / Smart Engineering", li: ["Dasturlash & AI", "IT texnologiyalar", "Smart muhandislik", "Eng yuqori talab"] },
        { icon: "🏃", t: "Sport fanlari", f: "Sports Science", li: ["Sport menejmenti", "Reabilitatsiya", "Murabbiylik", "Amaliy yo'nalish"] },
      ],
    },
    scholarship: {
      a: "Stipendiya ", hi: "tizimi", b: " 💰",
      intro: "TOPIK darajangiz qancha yuqori bo'lsa, grant shuncha katta. Sertifikat bo'lmasa ham 20% kafolatlanadi",
      cards: [
        { lvl: "TOPIKsiz", p: "20%", note: "Kafolatlangan" }, { lvl: "TOPIK 4", p: "30%", note: "Grant" },
        { lvl: "TOPIK 5", p: "50%", note: "Grant" }, { lvl: "TOPIK 6", p: "60%", note: "Maksimal grant" },
      ],
    },
    testimonials: {
      a: "Talabalarimiz ", hi: "fikrlari", b: " ⭐",
      cards: [
        { tx: "TOPIKim yo'q edi, lekin baribir MBA ga qabul qilishdi. Hozir Koreyada o'qiyapman va qisman ishlayapman", au: "Anisa, Samarqand" },
        { tx: "IT yo'nalishiga hujjat topshirdim, suhbat onlayn bo'ldi. Hammasi tushunarli va tez kechdi. Rahmat SH Global EDU!", au: "Bobur, Toshkent" },
        { tx: "TOPIK 5 bilan 50% stipendiya oldim. O'qish narxi ancha arzonlashdi. Maslahat uchun rahmat", au: "Dilobar, Buxoro" },
      ],
    },
    form: { h: "Ariza qoldiring 🚀", intro: "Ma'lumotlaringizni qoldiring — mutaxassislarimiz siz uchun mos yo'nalish va stipendiyani tanlab, bepul konsultatsiya beradi" },
    footer: { loc: "📍 Toshkent, O'zbekiston", tag: "🎓 Koreyada magistratura • TOPIKsiz qabul • 20–60% stipendiya" },
  },

  ru: {
    nav: { why: "Почему мы", programs: "Направления", scholarship: "Стипендия", apply: "Подать заявку" },
    countdown: { title: "⏰ До конца осеннего набора 2026 осталось:", days: "Дней", hours: "Часов", minutes: "Минут", seconds: "Секунд" },
    hero: {
      badge: "🔥 Осенний набор 2026 открыт",
      titleA: "Магистратура в Корее ", titleHi: "без TOPIK", titleB: " 🎓",
      subtitle: "Возможность учиться в магистратуре в Южной Корее. Поступление через онлайн-собеседование, студенческая виза D-2 и стипендии для иностранных студентов",
      points: ["✅ Можно подать даже без TOPIK", "✅ Гарантированная стипендия 20%", "✅ Направления MBA и IT"],
      btnPrimary: "Бесплатная консультация 🚀", btnSecondary: "Подробнее",
    },
    stats: [
      { n: "20–60%", l: "Стипендия" }, { n: "4", l: "Направления" },
      { n: "D-2", l: "Студ. виза" }, { n: "Без TOPIK", l: "Поступление" },
    ],
    why: {
      a: "Почему именно ", hi: "мы", b: " 💡",
      cards: [
        { icon: "📝", t: "Поступление без TOPIK", d: "Можно подать документы даже без сертификата корейского языка. Есть направления, не требующие знания языка" },
        { icon: "💰", t: "Гарантированная стипендия", d: "Для иностранных студентов от 20%, а в зависимости от уровня TOPIK — грант до 60%" },
        { icon: "💻", t: "Онлайн-собеседование", d: "Процесс поступления через онлайн или офлайн собеседование. Подаёте документы, не выезжая в Корею" },
        { icon: "🛂", t: "Полная поддержка", d: "Помощь со студенческой визой D-2, документами, легальной работой во время учёбы и поиском работы после выпуска" },
      ],
    },
    programs: {
      a: "Направления ", hi: "магистратуры", b: " 🎯",
      cards: [
        { icon: "💼", t: "MBA", f: "Управление бизнесом", li: ["Менеджмент и маркетинг", "Международный бизнес", "Предпринимательство", "Высокий спрос"] },
        { icon: "🧠", t: "Психология", f: "Counseling Psychology", li: ["Консультативная психология", "HR и клиника", "Человеческие ресурсы", "Современная сфера"] },
        { icon: "💻", t: "Engineering & IT", f: "Convergence / Smart Engineering", li: ["Программирование и AI", "IT-технологии", "Smart-инженерия", "Самый высокий спрос"] },
        { icon: "🏃", t: "Спортивные науки", f: "Sports Science", li: ["Спортивный менеджмент", "Реабилитация", "Тренерство", "Прикладное направление"] },
      ],
    },
    scholarship: {
      a: "Система ", hi: "стипендий", b: " 💰",
      intro: "Чем выше ваш уровень TOPIK, тем больше грант. Даже без сертификата гарантируется 20%",
      cards: [
        { lvl: "Без TOPIK", p: "20%", note: "Гарантировано" }, { lvl: "TOPIK 4", p: "30%", note: "Грант" },
        { lvl: "TOPIK 5", p: "50%", note: "Грант" }, { lvl: "TOPIK 6", p: "60%", note: "Максимальный грант" },
      ],
    },
    testimonials: {
      a: "Отзывы ", hi: "студентов", b: " ⭐",
      cards: [
        { tx: "У меня не было TOPIK, но меня всё равно приняли на MBA. Сейчас учусь в Корее и подрабатываю", au: "Аниса, Самарканд" },
        { tx: "Подал на IT-направление, собеседование было онлайн. Всё прошло понятно и быстро. Спасибо SH Global EDU!", au: "Бобур, Ташкент" },
        { tx: "С TOPIK 5 я получила стипендию 50%. Обучение стало намного дешевле. Спасибо за консультацию", au: "Дилобар, Бухара" },
      ],
    },
    form: { h: "Оставьте заявку 🚀", intro: "Оставьте свои данные — наши специалисты подберут подходящее направление и стипендию и дадут бесплатную консультацию" },
    footer: { loc: "📍 Ташкент, Узбекистан", tag: "🎓 Магистратура в Корее • Поступление без TOPIK • Стипендия 20–60%" },
  },

  en: {
    nav: { why: "Why us", programs: "Programs", scholarship: "Scholarship", apply: "Apply now" },
    countdown: { title: "⏰ Time left until Fall 2026 admission closes:", days: "Days", hours: "Hours", minutes: "Minutes", seconds: "Seconds" },
    hero: {
      badge: "🔥 Fall 2026 admission is open",
      titleA: "Master's in Korea ", titleHi: "without TOPIK", titleB: " 🎓",
      subtitle: "Study for a Master's degree in South Korea. Admission via online interview, D-2 student visa and scholarships for international students",
      points: ["✅ Apply even without TOPIK", "✅ 20% guaranteed scholarship", "✅ MBA and IT programs"],
      btnPrimary: "Free consultation 🚀", btnSecondary: "Learn more",
    },
    stats: [
      { n: "20–60%", l: "Scholarship" }, { n: "4", l: "Programs" },
      { n: "D-2", l: "Student visa" }, { n: "No TOPIK", l: "Admission" },
    ],
    why: {
      a: "Why ", hi: "us", b: " 💡",
      cards: [
        { icon: "📝", t: "Admission without TOPIK", d: "You can apply even without a Korean language certificate. There are programs that don't require the language" },
        { icon: "💰", t: "Guaranteed scholarship", d: "From 20% for international students, and up to 60% grant depending on your TOPIK level" },
        { icon: "💻", t: "Online interview", d: "Admission via online or offline interview. Apply without traveling to Korea" },
        { icon: "🛂", t: "Full support", d: "Help with the D-2 student visa, documents, legal work during study and finding a job after graduation" },
      ],
    },
    programs: {
      a: "Master's ", hi: "programs", b: " 🎯",
      cards: [
        { icon: "💼", t: "MBA", f: "Business Administration", li: ["Management & Marketing", "International business", "Entrepreneurship", "High demand"] },
        { icon: "🧠", t: "Psychology", f: "Counseling Psychology", li: ["Counseling psychology", "HR & clinical", "Human resources", "Modern field"] },
        { icon: "💻", t: "Engineering & IT", f: "Convergence / Smart Engineering", li: ["Programming & AI", "IT technologies", "Smart engineering", "Highest demand"] },
        { icon: "🏃", t: "Sports Science", f: "Sports Science", li: ["Sports management", "Rehabilitation", "Coaching", "Applied field"] },
      ],
    },
    scholarship: {
      a: "Scholarship ", hi: "system", b: " 💰",
      intro: "The higher your TOPIK level, the bigger the grant. Even without a certificate, 20% is guaranteed",
      cards: [
        { lvl: "No TOPIK", p: "20%", note: "Guaranteed" }, { lvl: "TOPIK 4", p: "30%", note: "Grant" },
        { lvl: "TOPIK 5", p: "50%", note: "Grant" }, { lvl: "TOPIK 6", p: "60%", note: "Maximum grant" },
      ],
    },
    testimonials: {
      a: "Student ", hi: "stories", b: " ⭐",
      cards: [
        { tx: "I didn't have TOPIK, but I was still admitted to the MBA. Now I study in Korea and work part-time", au: "Anisa, Samarkand" },
        { tx: "I applied for IT, the interview was online. Everything was clear and fast. Thank you SH Global EDU!", au: "Bobur, Tashkent" },
        { tx: "With TOPIK 5 I got a 50% scholarship. Tuition became much cheaper. Thanks for the guidance", au: "Dilobar, Bukhara" },
      ],
    },
    form: { h: "Leave a request 🚀", intro: "Leave your details — our specialists will pick the right program and scholarship for you and give a free consultation" },
    footer: { loc: "📍 Tashkent, Uzbekistan", tag: "🎓 Master's in Korea • Admission without TOPIK • 20–60% scholarship" },
  },
};

const LANGS = [
  { code: "ru", label: "RUS" },
  { code: "en", label: "ENG" },
  { code: "uz", label: "UZB" },
];

const PHONE = "TEL: +998-50-307-2262 / 92";

function OnePageLanding() {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem("lang") || "uz"; } catch { return "uz"; }
  });
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const t = T[lang];

  useEffect(() => {
    try { localStorage.setItem("lang", lang); } catch {}
    document.documentElement.lang = lang;
  }, [lang]);

  const scrollToForm = () => {
    document.getElementById("form-section").scrollIntoView({ behavior: "smooth" });
  };

  // Countdown timer (30 kun)
  useEffect(() => {
    const deadline = new Date();
    deadline.setDate(deadline.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = deadline.getTime() - now;
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Scroll reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Visme embed script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => { if (document.body.contains(script)) document.body.removeChild(script); };
  }, []);

  return (
    <div className="onepage" id="top">
      {/* HEADER */}
      <header className="op-header">
        <div className="op-container">
          <div className="op-header-content">
            <a className="op-logo" href="#top">
              <img src="/logo-light.svg" alt="SH Global EDU" className="op-logo-img" />
            </a>
            <div className="op-header-right">
              <nav className="op-nav">
                <a href="#why">{t.nav.why}</a>
                <a href="#programs">{t.nav.programs}</a>
                <a href="#scholarship">{t.nav.scholarship}</a>
                <a href="#form-section" onClick={(e) => { e.preventDefault(); scrollToForm(); }}>{t.nav.apply}</a>
              </nav>
              <div className="op-lang">
                {LANGS.map((L) => (
                  <button
                    key={L.code}
                    className={lang === L.code ? "active" : ""}
                    onClick={() => setLang(L.code)}
                  >
                    {L.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* COUNTDOWN — birinchi ko'rinadi */}
      <section className="op-countdown">
        <div className="op-container">
          <h3>{t.countdown.title}</h3>
          <div className="op-countdown-timer">
            <div className="op-countdown-box"><div className="op-countdown-num">{timeLeft.days}</div><div className="op-countdown-label">{t.countdown.days}</div></div>
            <div className="op-countdown-box"><div className="op-countdown-num">{timeLeft.hours}</div><div className="op-countdown-label">{t.countdown.hours}</div></div>
            <div className="op-countdown-box"><div className="op-countdown-num">{timeLeft.minutes}</div><div className="op-countdown-label">{t.countdown.minutes}</div></div>
            <div className="op-countdown-box"><div className="op-countdown-num">{timeLeft.seconds}</div><div className="op-countdown-label">{t.countdown.seconds}</div></div>
          </div>
        </div>
      </section>

      {/* HERO */}
      <section className="op-hero">
        <div className="op-float-shape s1"></div>
        <div className="op-float-shape s2"></div>
        <div className="op-float-shape s3"></div>
        <div className="op-container">
          <div className="op-hero-badge">{t.hero.badge}</div>
          <h1>{t.hero.titleA}<span className="highlight">{t.hero.titleHi}</span>{t.hero.titleB}</h1>
          <p className="op-subtitle">{t.hero.subtitle}</p>
          <div className="op-hero-points">
            {t.hero.points.map((p, i) => <div className="op-hero-point" key={i}>{p}</div>)}
          </div>
          <div className="op-cta-group">
            <button className="op-btn-primary" onClick={scrollToForm}>{t.hero.btnPrimary}</button>
            <button className="op-btn-secondary" onClick={scrollToForm}>{t.hero.btnSecondary}</button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="op-stats">
        <div className="op-container">
          <div className="op-stats-grid">
            {t.stats.map((s, i) => (
              <div className="op-stat-card reveal" key={i}><div className="op-stat-number">{s.n}</div><div className="op-stat-label">{s.l}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="op-section op-why">
        <div className="op-container">
          <h2>{t.why.a}<span className="highlight">{t.why.hi}</span>{t.why.b}</h2>
          <div className="op-features-grid">
            {t.why.cards.map((c, i) => (
              <div className="op-feature-card reveal" key={i}><div className="op-feature-icon">{c.icon}</div><h3>{c.t}</h3><p>{c.d}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="op-section op-programs">
        <div className="op-container">
          <h2>{t.programs.a}<span className="highlight">{t.programs.hi}</span>{t.programs.b}</h2>
          <div className="op-programs-grid">
            {t.programs.cards.map((c, i) => (
              <div className="op-program-card reveal" key={i}>
                <div className="op-program-icon">{c.icon}</div>
                <h3>{c.t}</h3>
                <div className="op-program-field">{c.f}</div>
                <ul>{c.li.map((x, j) => <li key={j}>{x}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHOLARSHIP */}
      <section id="scholarship" className="op-section op-scholarship">
        <div className="op-container">
          <h2>{t.scholarship.a}<span className="highlight">{t.scholarship.hi}</span>{t.scholarship.b}</h2>
          <p className="op-scholarship-intro">{t.scholarship.intro}</p>
          <div className="op-scholarship-grid">
            {t.scholarship.cards.map((c, i) => (
              <div className={"op-scholarship-card reveal" + (i === t.scholarship.cards.length - 1 ? " featured" : "")} key={i}>
                <div className="op-scholarship-level">{c.lvl}</div>
                <div className="op-scholarship-percent">{c.p}</div>
                <div className="op-scholarship-note">{c.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="op-section op-testimonials">
        <div className="op-container">
          <h2>{t.testimonials.a}<span className="highlight">{t.testimonials.hi}</span>{t.testimonials.b}</h2>
          <div className="op-testimonials-container">
            {t.testimonials.cards.map((c, i) => (
              <div className="op-testimonial-card reveal" key={i}>
                <div className="op-stars">⭐⭐⭐⭐⭐</div>
                <div className="op-testimonial-text">"{c.tx}"</div>
                <div className="op-testimonial-author">{c.au}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISME FORM */}
      <section id="form-section" className="op-section op-form">
        <div className="op-container">
          <h2>{t.form.h}</h2>
          <p className="op-form-intro">{t.form.intro}</p>
          <div className="op-form-wrapper">
            <div
              className="visme_d"
              data-title="Report Download 2"
              data-url="4k977z0q-untitled-project"
              data-domain="forms"
              data-full-page="false"
              data-min-height="800px"
              data-form-id="183269"
            ></div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="op-footer">
        <div className="op-container">
          <div className="op-footer-logo">
            <img src="/logo-light.svg" alt="SH Global EDU" className="op-footer-logo-img" />
          </div>
          <p>{t.footer.loc} | 📞 {PHONE}</p>
          <p>{t.footer.tag}</p>
        </div>
      </footer>
    </div>
  );
}

export default OnePageLanding;
