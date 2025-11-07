import { GraduationCap, Users, Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navbar({ theme, onToggleTheme }) {
  // Persist theme preference (optional but nice UX)
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/70 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-white/10 dark:bg-neutral-900/70 supports-[backdrop-filter]:dark:bg-neutral-900/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-gray-900 dark:text-white">
            <GraduationCap className="h-6 w-6 text-indigo-600" />
            <span className="font-semibold tracking-tight">IGIT Sarang • CSE Alumni</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
            <a href="#highlights" className="hover:text-gray-900 dark:hover:text-white">Highlights</a>
            <a href="#events" className="hover:text-gray-900 dark:hover:text-white">Events</a>
            <a href="#directory" className="hover:text-gray-900 dark:hover:text-white flex items-center gap-1">
              <Users className="h-4 w-4" /> Directory
            </a>
            <a href="#join" className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 transition-colors">Join</a>
            <button
              aria-label="Toggle theme"
              onClick={onToggleTheme}
              className="ml-2 inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200/70 bg-white/80 text-gray-700 hover:bg-white dark:border-white/10 dark:bg-neutral-800/80 dark:text-gray-200"
            >
              {mounted && theme === 'dark' ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
