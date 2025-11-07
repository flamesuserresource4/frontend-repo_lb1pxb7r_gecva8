import { Mail, MapPin, GraduationCap } from 'lucide-react';

const sampleAlumni = [
  {
    name: 'Ananya Das',
    batch: 'CSE • 2018',
    role: 'Senior Software Engineer, Microsoft',
    location: 'Hyderabad, IN',
    email: 'ananya@example.com',
  },
  {
    name: 'Rohit Mishra',
    batch: 'CSE • 2016',
    role: 'SDE III, Amazon',
    location: 'Bengaluru, IN',
    email: 'rohit@example.com',
  },
  {
    name: 'Priya Singh',
    batch: 'CSE • 2020',
    role: 'Data Scientist, Swiggy',
    location: 'Bengaluru, IN',
    email: 'priya@example.com',
  },
  {
    name: 'Abhishek Kumar',
    batch: 'CSE • 2015',
    role: 'Founder, DevX Labs',
    location: 'Pune, IN',
    email: 'abhishek@example.com',
  },
];

export default function Directory() {
  return (
    <section id="directory" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Alumni Directory</h2>
            <p className="mt-2 text-gray-600">A snapshot of our community. Search and filters coming soon.</p>
          </div>
          <a href="#join" className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">Add your profile</a>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sampleAlumni.map((a) => (
            <div key={a.email} className="rounded-xl border bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-semibold">
                  {a.name.split(' ').map(s=>s[0]).join('').slice(0,2)}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{a.name}</h3>
                  <p className="text-xs text-gray-500 flex items-center gap-1"><GraduationCap className="h-3.5 w-3.5"/> {a.batch}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-700">{a.role}</p>
              <div className="mt-3 flex items-center justify-between text-sm">
                <span className="inline-flex items-center gap-1 text-gray-600"><MapPin className="h-4 w-4"/> {a.location}</span>
                <a href={`mailto:${a.email}`} className="inline-flex items-center gap-1 text-indigo-600 hover:underline"><Mail className="h-4 w-4"/> Email</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
