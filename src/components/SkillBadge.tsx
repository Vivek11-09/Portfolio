type SkillBadgeProps = {
  name: string;
  level: number;
};

export default function SkillBadge({ name, level }: SkillBadgeProps) {
  return (
    <div className="flex items-center gap-2 bg-blue-50 dark:bg-gray-800 px-3 py-1 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium">
      {name}
      <span className="ml-2 text-xs text-gray-400">Level {level}</span>
    </div>
  );
} 