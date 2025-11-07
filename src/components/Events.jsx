import { Calendar, Clock, MapPin } from 'lucide-react';

const events = [
  {
    title: 'Annual Alumni Meet 2025',
    date: 'Jan 18, 2025',
    time: '10:00 AM IST',
    location: 'IGIT Sarang Campus Auditorium',
    description: 'Reunite with your batchmates, keynote by distinguished alumni, awards, and cultural night.'
  },
  {
    title: 'Mentorship Kickoff - Spring',
    date: 'Mar 02, 2025',
    time: '6:00 PM IST',
    location: 'Online (Zoom)',
    description: 'Launch of mentor-mentee program for final year students with resume and interview prep.'
  },
  {
    title: 'Tech Talk: AI in Industry',
    date: 'Apr 14, 2025',
    time: '7:00 PM IST',
    location: 'Online (Google Meet)',
    description: 'Panel discussion with alumni working in AI/ML across top product companies.'
  },
];

export default function Events() {
  return (
    <section id="events" className="py-16 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Events & Meetups</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Stay in the loop and never miss a chance to reconnect.</p>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {events.map((e) => (
            <div key={e.title} className="rounded-xl border bg-white p-5 shadow-sm hover:shadow-md transition-shadow dark:bg-neutral-900 dark:border-white/10">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{e.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{e.description}</p>
                </div>
                <Calendar className="h-5 w-5 text-rose-600" />
              </div>
              <div className="mt-4 text-sm text-gray-700 dark:text-gray-300 space-y-2">
                <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-gray-500"/> {e.date} • {e.time}</div>
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gray-500"/> {e.location}</div>
              </div>
              <div className="mt-4">
                <button className="w-full rounded-md bg-rose-600 text-white py-2 hover:bg-rose-500">Register</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
