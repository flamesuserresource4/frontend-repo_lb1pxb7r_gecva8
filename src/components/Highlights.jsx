import { Briefcase, HeartHandshake, Newspaper, Sparkles } from 'lucide-react';

const highlights = [
  {
    icon: Briefcase,
    title: 'Career Opportunities',
    desc: 'Discover roles shared by alumni, referral threads, and campus recruitment updates.'
  },
  {
    icon: HeartHandshake,
    title: 'Mentorship',
    desc: 'One-on-one mentoring, mock interviews, and guidance for higher studies.'
  },
  {
    icon: Newspaper,
    title: 'News & Achievements',
    desc: 'Celebrate alumni milestones, research, entrepreneurship, and awards.'
  },
  {
    icon: Sparkles,
    title: 'Give Back',
    desc: 'Support scholarships, workshops, and departmental initiatives.'
  }
];

export default function Highlights() {
  return (
    <section id="highlights" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">What you can do here</h2>
          <p className="mt-2 text-gray-600">Everything an alumni network needs—organized and purposeful.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600"><Icon className="h-5 w-5" /></div>
                <h3 className="font-semibold text-gray-900">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
