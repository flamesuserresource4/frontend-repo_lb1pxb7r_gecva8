import { Send, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

export default function Join() {
  const [form, setForm] = useState({ name: '', email: '', batch: '', company: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="join" className="py-16 bg-gradient-to-b from-white to-indigo-50 dark:from-neutral-950 dark:to-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Join the Alumni Network</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Create your profile to appear in the directory, receive event invites, and contribute to initiatives.</p>
            <ul className="mt-6 space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2"><ShieldCheck className="h-5 w-5 text-green-600 mt-0.5"/> Verified alumni only</li>
              <li className="flex items-start gap-2"><ShieldCheck className="h-5 w-5 text-green-600 mt-0.5"/> Opt-in communication
              </li>
              <li className="flex items-start gap-2"><ShieldCheck className="h-5 w-5 text-green-600 mt-0.5"/> Your data stays private</li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm dark:bg-neutral-900 dark:border-white/10">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                  <input required value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} className="mt-1 w-full rounded-md border-gray-300 focus:border-rose-500 focus:ring-rose-500 dark:bg-neutral-800 dark:border-white/10 dark:text-white" placeholder="Your name"/>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                    <input type="email" required value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} className="mt-1 w-full rounded-md border-gray-300 focus:border-rose-500 focus:ring-rose-500 dark:bg-neutral-800 dark:border-white/10 dark:text-white" placeholder="you@example.com"/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Batch</label>
                    <input required value={form.batch} onChange={(e)=>setForm({...form, batch:e.target.value})} className="mt-1 w-full rounded-md border-gray-300 focus:border-rose-500 focus:ring-rose-500 dark:bg-neutral-800 dark:border-white/10 dark:text-white" placeholder="e.g., 2019"/>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Company / Role</label>
                  <input value={form.company} onChange={(e)=>setForm({...form, company:e.target.value})} className="mt-1 w-full rounded-md border-gray-300 focus:border-rose-500 focus:ring-rose-500 dark:bg-neutral-800 dark:border-white/10 dark:text-white" placeholder="Where do you work?"/>
                </div>
                <button type="submit" className="inline-flex items-center rounded-md bg-rose-600 px-5 py-3 text-white hover:bg-rose-500">
                  Submit
                  <Send className="h-4 w-4 ml-2"/>
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Thank you for joining!</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">We will verify your alumni status and send a confirmation email soon.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
