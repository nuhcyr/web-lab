import { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';
import Alert from './components/Alert';
import UIKit from './pages/UIKit';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showUIKit, setShowUIKit] = useState(false);

  const toggleDark = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  if (showUIKit) {
    return (
      <div className={darkMode ? 'dark' : ''}>
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDark}
          className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
          aria-label="Tema değiştir"
        >
          <span className="dark:hidden">&#9790;</span>
          <span className="hidden dark:inline">&#9728;</span>
        </button>
        <button
          onClick={() => setShowUIKit(false)}
          className="fixed top-4 left-4 z-50 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-700"
        >
          &larr; Portföy
        </button>
        <UIKit />
      </div>
    );
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      {/* Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-800 text-white p-2 z-50"
      >
        Ana içeriğe atla
      </a>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDark}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Tema değiştir"
      >
        <span className="dark:hidden">&#9790;</span>
        <span className="hidden dark:inline">&#9728;</span>
      </button>

      {/* UI Kit Link */}
      <button
        onClick={() => setShowUIKit(true)}
        className="fixed top-4 left-4 z-50 bg-indigo-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
      >
        UI Kit &rarr;
      </button>

      {/* Header & Nav */}
      <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <h1 className="text-xl font-bold text-blue-800 dark:text-blue-300">Nuh Çayır</h1>
          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap gap-2 list-none">
              <li>
                <a href="#hakkimda" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">
                  Hakkımda
                </a>
              </li>
              <li>
                <a href="#projeler" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">
                  Projeler
                </a>
              </li>
              <li>
                <a href="#iletisim" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">
                  İletişim
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        {/* Hakkımda */}
        <section id="hakkimda" className="py-16 px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
            <figure className="shrink-0">
              <img
                src="profil.jpg"
                alt="Nuh Çayır profil fotoğrafı"
                className="w-40 h-40 rounded-full object-cover shadow-lg"
              />
            </figure>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
                Hakkımda
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Merhaba, ben Nuh Çayır. Modern web teknolojileriyle kullanıcı dostu arayüzler oluşturuyorum.
              </p>
              <ul className="flex flex-wrap gap-2 list-none p-0">
                {['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Tailwind'].map((tech) => (
                  <li key={tech} className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Projeler */}
        <section id="projeler" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
              Projelerim
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card
                variant="elevated"
                title="E-Ticaret Sitesi"
                image="proje1.jpg"
                imageAlt="E-Ticaret sitesi ekran görüntüsü"
              >
                <p>React ve Node.js ile geliştirilmiş tam kapsamlı uygulama.</p>
              </Card>
              <Card
                variant="elevated"
                title="Blog Uygulaması"
                image="proje2.jpg"
                imageAlt="Blog uygulaması ekran görüntüsü"
              >
                <p>Kişisel blog platformu. Markdown destekli yazı editörü.</p>
              </Card>
              <Card
                variant="outlined"
                title="Hava Durumu"
              >
                <p>OpenWeather API ile anlık hava durumu bilgisi.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* İletişim */}
        <section id="iletisim" className="py-16 px-4">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              İletişim
            </h2>
            <form className="space-y-4" action="#" method="POST" noValidate>
              <Input id="name" label="Ad Soyad" placeholder="Adınız Soyadınız" required />
              <Input id="email" label="E-posta" type="email" placeholder="ornek@mail.com" required />
              <div className="space-y-1">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  placeholder="Mesajınızı yazın..."
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
                />
              </div>
              <Button variant="primary" size="lg" type="submit" className="w-full">
                Gönder
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center py-6 px-4 text-gray-500 dark:text-gray-400 text-sm">
        <p>&copy; 2026 Nuh Çayır. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}

export default App;