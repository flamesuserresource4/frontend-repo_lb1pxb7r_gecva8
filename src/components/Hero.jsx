import { ArrowRight, GraduationCap } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero({ gridStyle = 'dots' }) {
  // gridStyle: 'dots' | 'lines'
  return (
    <section className="relative overflow-hidden">
      {/* 3D Spline cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hinHjJppKaZFIbCr/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Dark gradient overlay that follows theme. pointer-events-none so Spline remains interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 dark:from-black/60 dark:via-black/50 dark:to-black/70" />

      {/* Optional red grid accent - configurable with gridStyle */}
      <div
        aria-hidden
        className={
          `pointer-events-none absolute inset-0 mix-blend-screen opacity-40 [mask-image:radial-gradient(600px_400px_at_var(--x,50%)_var(--y,40%),#000_20%,transparent_70%)]`
        }
        style={{
          backgroundImage:
            gridStyle === 'lines'
              ? 'linear-gradient(rgba(255,0,80,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,80,0.25) 1px, transparent 1px)'
              : 'radial-gradient(circle at 1px 1px, rgba(255,0,80,0.35) 1px, transparent 1px)',
          backgroundSize: gridStyle === 'lines' ? '40px 40px, 40px 40px' : '24px 24px',
          backgroundPosition: gridStyle === 'lines' ? '0 0, 0 0' : '0 0',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
              <GraduationCap className="h-3.5 w-3.5 mr-2" /> Indira Gandhi Institute of Technology, Sarang
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              CSE Alumni Network
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-xl">
              Connect with graduates, discover opportunities, and give back. A dedicated space for IGIT Sarang B.Tech CSE alumni across the globe.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#join" className="inline-flex items-center rounded-md bg-rose-600 px-5 py-3 text-white hover:bg-rose-500 transition-colors">
                Join the Network
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#directory" className="inline-flex items-center rounded-md border border-white/20 bg-white/10 px-5 py-3 text-white/90 hover:bg-white/20">
                Explore Directory
              </a>
            </div>
            <dl className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <dt className="text-xs text-white/70">Alumni</dt>
                <dd className="text-2xl font-semibold text-white">3,200+</dd>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <dt className="text-xs text-white/70">Companies</dt>
                <dd className="text-2xl font-semibold text-white">450+</dd>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <dt className="text-xs text-white/70">Chapters</dt>
                <dd className="text-2xl font-semibold text-white">12</dd>
              </div>
            </dl>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-white/10 bg-white/5 p-4 shadow-2xl">
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
