import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Events from './components/Events';
import Directory from './components/Directory';
import Join from './components/Join';

function Footer() {
  return (
    <footer className="border-t bg-white dark:bg-neutral-950 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} IGIT Sarang CSE Alumni Network. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900 dark:hover:text-white">Privacy</a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white">Code of Conduct</a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
  }, [theme]);

  // Track mouse to reveal red grid near cursor in hero
  useEffect(() => {
    const handler = (e) => {
      document.documentElement.style.setProperty('--x', e.clientX + 'px');
      document.documentElement.style.setProperty('--y', e.clientY + 'px');
    };
    window.addEventListener('pointermove', handler);
    return () => window.removeEventListener('pointermove', handler);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-neutral-950 dark:text-white transition-colors">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero gridStyle="lines" />
        <Highlights />
        <Events />
        <Directory />
        <Join />
      </main>
      <Footer />
    </div>
  );
}
