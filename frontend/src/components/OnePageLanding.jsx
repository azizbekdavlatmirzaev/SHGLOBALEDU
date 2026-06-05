import React, { useEffect, useState } from "react";
import "../styles/onepage.css";

function OnePageLanding() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

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
              <img src="/logo.svg" alt="SH Global EDU" className="op-logo-img" />
            </a>
            <nav className="op-nav">
              <a href="#why">Nega biz</a>
              <a href="#programs">Yo‘nalishlar</a>
              <a href="#scholarship">Stipendiya</a>
              <a href="#form-section" onClick={(e) => { e.preventDefault(); scrollToForm(); }}>Ariza topshirish</a>
            </nav>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="op-hero">
        <div className="op-float-shape s1"></div>
        <div className="op-float-shape s2"></div>
        <div className="op-float-shape s3"></div>
        <div className="op-container">
          <div className="op-hero-badge">🔥 2026-yil kuzgi qabul ochiq</div>
          <h1>TOPIK<span className="highlight">siz</span> ham Koreyada<br/>Magistratura 🎓</h1>
          <p className="op-subtitle">Janubiy Koreyada magistratura o‘qish imkoniyati. Onlayn suhbat orqali qabul, D-2 talaba vizasi va xorijiy talabalar uchun stipendiya.</p>
          <div className="op-hero-points">
            <div className="op-hero-point">✅ TOPIKsiz ham topshirish mumkin</div>
            <div className="op-hero-point">✅ 20% kafolatlangan stipendiya</div>
            <div className="op-hero-point">✅ MBA va IT yo‘nalishlari</div>
          </div>
          <div className="op-cta-group">
            <button className="op-btn-primary" onClick={scrollToForm}>Bepul konsultatsiya 🚀</button>
            <button className="op-btn-secondary" onClick={scrollToForm}>Batafsil ma'lumot</button>
          </div>
        </div>
      </section>

      {/* COUNTDOWN */}
      <section className="op-countdown">
        <div className="op-container">
          <h3>⏰ 2026 kuzgi qabul yopilishiga qoldi:</h3>
          <div className="op-countdown-timer">
            <div className="op-countdown-box"><div className="op-countdown-num">{timeLeft.days}</div><div className="op-countdown-label">Kun</div></div>
            <div className="op-countdown-box"><div className="op-countdown-num">{timeLeft.hours}</div><div className="op-countdown-label">Soat</div></div>
            <div className="op-countdown-box"><div className="op-countdown-num">{timeLeft.minutes}</div><div className="op-countdown-label">Daqiqa</div></div>
            <div className="op-countdown-box"><div className="op-countdown-num">{timeLeft.seconds}</div><div className="op-countdown-label">Soniya</div></div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="op-stats">
        <div className="op-container">
          <div className="op-stats-grid">
            <div className="op-stat-card reveal"><div className="op-stat-number">20–60%</div><div className="op-stat-label">Stipendiya</div></div>
            <div className="op-stat-card reveal"><div className="op-stat-number">4</div><div className="op-stat-label">Yo‘nalish</div></div>
            <div className="op-stat-card reveal"><div className="op-stat-number">D-2</div><div className="op-stat-label">Talaba vizasi</div></div>
            <div className="op-stat-card reveal"><div className="op-stat-number">TOPIKsiz</div><div className="op-stat-label">Qabul imkoniyati</div></div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="op-section op-why">
        <div className="op-container">
          <h2>Nega aynan <span className="highlight">biz</span> 💡</h2>
          <div className="op-features-grid">
            <div className="op-feature-card reveal"><div className="op-feature-icon">📝</div><h3>TOPIKsiz qabul</h3><p>Koreys tili sertifikati bo‘lmasa ham hujjat topshirish mumkin. Til talab qilinmaydigan yo‘nalishlar mavjud.</p></div>
            <div className="op-feature-card reveal"><div className="op-feature-icon">💰</div><h3>Kafolatlangan stipendiya</h3><p>Xorijiy talabalar uchun 20% dan boshlab, TOPIK darajangizga qarab 60% gacha grant.</p></div>
            <div className="op-feature-card reveal"><div className="op-feature-icon">💻</div><h3>Onlayn suhbat</h3><p>Qabul jarayoni onlayn yoki oflayn suhbat orqali. Koreyaga bormasdan turib hujjat topshirasiz.</p></div>
            <div className="op-feature-card reveal"><div className="op-feature-icon">🛂</div><h3>To‘liq qo‘llab-quvvatlash</h3><p>D-2 talaba vizasi, hujjatlar, o‘qish davomida qonuniy ishlash va bitiruvdan so‘ng ish topish bo‘yicha yordam.</p></div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="op-section op-programs">
        <div className="op-container">
          <h2>Magistratura <span className="highlight">yo‘nalishlari</span> 🎯</h2>
          <div className="op-programs-grid">
            <div className="op-program-card reveal"><div className="op-program-icon">💼</div><h3>MBA</h3><div className="op-program-field">Biznes boshqaruvi</div><ul><li>Menejment & Marketing</li><li>Xalqaro biznes</li><li>Tadbirkorlik</li><li>Yuqori talab</li></ul></div>
            <div className="op-program-card reveal"><div className="op-program-icon">🧠</div><h3>Psixologiya</h3><div className="op-program-field">Counseling Psychology</div><ul><li>Maslahat psixologiyasi</li><li>HR & klinika</li><li>Inson resurslari</li><li>Zamonaviy soha</li></ul></div>
            <div className="op-program-card reveal"><div className="op-program-icon">💻</div><h3>Engineering & IT</h3><div className="op-program-field">Convergence / Smart Engineering</div><ul><li>Dasturlash & AI</li><li>IT texnologiyalar</li><li>Smart muhandislik</li><li>Eng yuqori talab</li></ul></div>
            <div className="op-program-card reveal"><div className="op-program-icon">🏃</div><h3>Sport fanlari</h3><div className="op-program-field">Sports Science</div><ul><li>Sport menejmenti</li><li>Reabilitatsiya</li><li>Murabbiylik</li><li>Amaliy yo‘nalish</li></ul></div>
          </div>
        </div>
      </section>

      {/* SCHOLARSHIP */}
      <section id="scholarship" className="op-section op-scholarship">
        <div className="op-container">
          <h2>Stipendiya <span className="highlight">tizimi</span> 💰</h2>
          <p className="op-scholarship-intro">TOPIK darajangiz qancha yuqori bo‘lsa, grant shuncha katta. Sertifikat bo‘lmasa ham 20% kafolatlanadi.</p>
          <div className="op-scholarship-grid">
            <div className="op-scholarship-card reveal"><div className="op-scholarship-level">TOPIKsiz</div><div className="op-scholarship-percent">20%</div><div className="op-scholarship-note">Kafolatlangan</div></div>
            <div className="op-scholarship-card reveal"><div className="op-scholarship-level">TOPIK 4</div><div className="op-scholarship-percent">30%</div><div className="op-scholarship-note">Grant</div></div>
            <div className="op-scholarship-card reveal"><div className="op-scholarship-level">TOPIK 5</div><div className="op-scholarship-percent">50%</div><div className="op-scholarship-note">Grant</div></div>
            <div className="op-scholarship-card reveal featured"><div className="op-scholarship-level">TOPIK 6</div><div className="op-scholarship-percent">60%</div><div className="op-scholarship-note">Maksimal grant</div></div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="op-section op-testimonials">
        <div className="op-container">
          <h2>Talabalarimiz <span className="highlight">fikrlari</span> ⭐</h2>
          <div className="op-testimonials-container">
            <div className="op-testimonial-card reveal"><div className="op-stars">⭐⭐⭐⭐⭐</div><div className="op-testimonial-text">"TOPIKim yo‘q edi, lekin baribir MBA ga qabul qilishdi. Hozir Koreyada o‘qiyapman va qisman ishlayapman."</div><div className="op-testimonial-author">Anisa, Samarqand</div></div>
            <div className="op-testimonial-card reveal"><div className="op-stars">⭐⭐⭐⭐⭐</div><div className="op-testimonial-text">"IT yo‘nalishiga hujjat topshirdim, suhbat onlayn bo‘ldi. Hammasi tushunarli va tez kechdi. Rahmat SH Global EDU!"</div><div className="op-testimonial-author">Bobur, Toshkent</div></div>
            <div className="op-testimonial-card reveal"><div className="op-stars">⭐⭐⭐⭐⭐</div><div className="op-testimonial-text">"TOPIK 5 bilan 50% stipendiya oldim. O‘qish narxi ancha arzonlashdi. Maslahat uchun rahmat."</div><div className="op-testimonial-author">Dilobar, Buxoro</div></div>
          </div>
        </div>
      </section>

      {/* VISME FORM */}
      <section id="form-section" className="op-section op-form">
        <div className="op-container">
          <h2>Ariza qoldiring 🚀</h2>
          <p className="op-form-intro">Ma'lumotlaringizni qoldiring — mutaxassislarimiz siz uchun mos yo‘nalish va stipendiyani tanlab, bepul konsultatsiya beradi.</p>
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
            <img src="/logo.svg" alt="SH Global EDU" className="op-footer-logo-img" />
          </div>
          <p>📍 Toshkent, O‘zbekiston | 📱 +998 90 123 4567</p>
          <p>🎓 Koreyada magistratura • TOPIKsiz qabul • 20–60% stipendiya</p>
        </div>
      </footer>
    </div>
  );
}

export default OnePageLanding;
