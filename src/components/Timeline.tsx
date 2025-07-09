type TimelineItem = { year: string; role: string };
type TimelineProps = { items: TimelineItem[] };

export default function Timeline({ items }: TimelineProps) {
  return (
    <ol className="border-l-4 border-blue-500 pl-6 space-y-4">
      {items.map((item, idx) => (
        <li key={idx} className="relative">
          <span className="absolute -left-3 top-1 w-3 h-3 bg-blue-500 rounded-full"></span>
          <span className="font-bold text-blue-600">{item.year}</span> — <span className="text-gray-700 dark:text-gray-200">{item.role}</span>
        </li>
      ))}
    </ol>
  );
} 