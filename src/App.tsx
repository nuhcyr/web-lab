import './App.css';

function App() {
  return (
    <div className="portfolio-container">
      <a href="#main-content" className="skip-link">Ana içeriğe atla</a>

      <header className="navbar">
        <div className="logo">Nuh Çayır</div>
        <nav aria-label="Ana navigasyon">
          <ul className="nav-links">
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section id="hakkimda" className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Merhaba, Ben <span className="highlight">Nuh Çayır</span></h1>
            <p className="hero-subtitle">Modern ve Dinamik Frontend Geliştirici</p>
            <div className="tech-stack">
              <span className="tech-badge">HTML5</span>
              <span className="tech-badge">CSS3</span>
              <span className="tech-badge">JavaScript</span>
              <span className="tech-badge">React</span>
            </div>
            <a href="#projeler" className="cta-button">Projelerimi İncele</a>
          </div>
          <div className="hero-image-wrapper">
            <div className="image-glow"></div>
            <img src="profil.jpg" alt="Nuh Çayır profil fotoğrafı" className="hero-image" />
          </div>
        </section>

        <section id="projeler" className="projects-section">
          <h2 className="section-title">Projelerim</h2>
          <div className="projects-grid">
            <article className="project-card">
              <div className="project-image-box">
                <img src="proje1.jpg" alt="E-Ticaret Sitesi ekran görüntüsü" />
              </div>
              <div className="project-info">
                <h3>E-Ticaret Sitesi</h3>
                <p>React ve Node.js kullanılarak geliştirilmiş tam kapsamlı e-ticaret uygulaması.</p>
                <div className="tech-list">React • Node.js • Vercel</div>
              </div>
            </article>

            <article className="project-card">
              <div className="project-image-box">
                <img src="proje2.jpg" alt="Blog Uygulaması ekran görüntüsü" />
              </div>
              <div className="project-info">
                <h3>Blog Uygulaması</h3>
                <p>Kişisel yazılar için hazırlanmış modern blog sayfası.</p>
                <div className="tech-list">HTML • CSS • JavaScript</div>
              </div>
            </article>
          </div>
        </section>

        <section id="iletisim" className="contact-section">
          <div className="contact-container">
            <h2 className="section-title">İletişim</h2>
            <p className="contact-subtitle">Benimle bir proje hakkında konuşmak ister misiniz? Mesaj gönderin!</p>
            <form className="contact-form" action="#" method="POST" noValidate>
              <div className="form-group">
                <label htmlFor="name">Ad Soyad</label>
                <input type="text" id="name" name="name" required minLength={2} aria-describedby="name-error" placeholder="Adınız Soyadınız" />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta</label>
                <input type="email" id="email" name="email" required aria-describedby="email-error" placeholder="ornek@mail.com" />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu</label>
                <select id="subject" name="subject" required aria-describedby="subject-error">
                  <option value="">-- Seçiniz --</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Öneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız</label>
                <textarea id="message" name="message" rows={5} required minLength={10} aria-describedby="message-error" placeholder="Mesajınızı buraya yazın..."></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit" className="submit-button">Gönder</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2026 Nuh Çayır. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}

export default App;