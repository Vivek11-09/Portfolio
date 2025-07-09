type ServiceCardProps = {
  title: string;
  description: string;
  deliverables: string[];
  pricing: string;
  fiverr: string;
};

export default function ServiceCard({ title, description, deliverables, pricing, fiverr }: ServiceCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 flex flex-col gap-4 border border-gray-200 dark:border-gray-800">
      <h2 className="text-xl font-semibold text-blue-600">{title}</h2>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
      <ul className="list-disc list-inside text-gray-500 dark:text-gray-400">
        {deliverables.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <div className="font-bold text-green-600 dark:text-green-400">{pricing}</div>
      <a href={fiverr} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">Fiverr Profile</a>
    </div>
  );
} 