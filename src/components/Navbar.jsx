import { GraduationCap, Users } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-gray-900">
            <GraduationCap className="h-6 w-6 text-indigo-600" />
            <span className="font-semibold tracking-tight">IGIT Sarang • CSE Alumni</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a href="#highlights" className="hover:text-gray-900">Highlights</a>
            <a href="#events" className="hover:text-gray-900">Events</a>
            <a href="#directory" className="hover:text-gray-900 flex items-center gap-1">
              <Users className="h-4 w-4" /> Directory
            </a>
            <a href="#join" className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 transition-colors">Join</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
