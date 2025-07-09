type ProjectCardProps = {
  title: string;
  description: string;
  stack: string[];
  role: string;
  github: string;
  // image: string; // Remove image
  tags: string[];
  company?: string;
  date?: string;
};

export default function ProjectCard({ title, description, stack, role, github, tags, company, date }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 flex flex-col gap-4 border border-gray-200 dark:border-gray-800">
      {/* Removed project image */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span key={i} className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs font-medium">{tag}</span>
        ))}
      </div>
      <h2 className="text-xl font-semibold text-blue-600">{title}</h2>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
      <div className="flex flex-wrap gap-2 text-sm text-gray-500 dark:text-gray-400">
        {stack.map((tech, i) => (
          <span key={i} className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">{tech}</span>
        ))}
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400">Role: <span className="font-medium text-gray-700 dark:text-gray-200">{role}</span></div>
      {company && <div className="text-sm text-gray-400">{company}</div>}
      {date && <div className="text-sm text-gray-400">{date}</div>}
      <div className="flex gap-4 mt-2">
        <a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
      </div>
    </div>
  );
} 