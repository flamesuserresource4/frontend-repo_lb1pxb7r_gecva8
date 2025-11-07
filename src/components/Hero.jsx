import { ArrowRight, GraduationCap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 mb-4">
              <GraduationCap className="h-3.5 w-3.5 mr-2" /> Indira Gandhi Institute of Technology, Sarang
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
              CSE Alumni Network
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              Connect with graduates, discover opportunities, and give back. A dedicated space for IGIT Sarang B.Tech CSE alumni across the globe.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#join" className="inline-flex items-center rounded-md bg-indigo-600 px-5 py-3 text-white hover:bg-indigo-700 transition-colors">
                Join the Network
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#directory" className="inline-flex items-center rounded-md border border-gray-300 bg-white px-5 py-3 text-gray-700 hover:bg-gray-50">
                Explore Directory
              </a>
            </div>
            <dl className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
              <div className="rounded-lg border bg-white p-4">
                <dt className="text-xs text-gray-500">Alumni</dt>
                <dd className="text-2xl font-semibold text-gray-900">3,200+</dd>
              </div>
              <div className="rounded-lg border bg-white p-4">
                <dt className="text-xs text-gray-500">Companies</dt>
                <dd className="text-2xl font-semibold text-gray-900">450+</dd>
              </div>
              <div className="rounded-lg border bg-white p-4">
                <dt className="text-xs text-gray-500">Chapters</dt>
                <dd className="text-2xl font-semibold text-gray-900">12</dd>
              </div>
            </dl>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border bg-white p-4 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1470&auto=format&fit=crop"
                alt="IGIT Sarang Campus"
                className="h-full w-full object-cover rounded-xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
