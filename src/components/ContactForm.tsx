import { FormEvent, ChangeEvent } from 'react';

type ContactFormProps = {
  form: { name: string; email: string; message: string; service: string };
  services: string[];
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onSubmit: (e: FormEvent) => void;
  submitted: boolean;
};

export default function ContactForm({ form, services, onChange, onSubmit, submitted }: ContactFormProps) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 bg-white dark:bg-gray-900 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-800">
      <input name="name" value={form.name} onChange={onChange} required placeholder="Name" className="px-4 py-2 rounded border border-gray-300 dark:bg-gray-800 dark:border-gray-700" />
      <input name="email" value={form.email} onChange={onChange} required type="email" placeholder="Email" className="px-4 py-2 rounded border border-gray-300 dark:bg-gray-800 dark:border-gray-700" />
      <select name="service" value={form.service} onChange={onChange} className="px-4 py-2 rounded border border-gray-300 dark:bg-gray-800 dark:border-gray-700">
        {services.map((s, i) => <option key={i}>{s}</option>)}
      </select>
      <textarea name="message" value={form.message} onChange={onChange} required placeholder="Message" rows={4} className="px-4 py-2 rounded border border-gray-300 dark:bg-gray-800 dark:border-gray-700" />
      <button type="submit" className="px-6 py-3 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">Send Message</button>
      {submitted && <div className="text-green-600 font-medium mt-2">Thank you! Your message has been sent.</div>}
    </form>
  );
} 