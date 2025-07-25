import { Part, getCategoryEmoji, getCategoryTitle, getCategoryDescription } from "@/data/parts";
import { PartButton } from "./PartButton";

interface PartsSectionProps {
  category: Part["cat"];
  parts: Part[];
  onPartClick: (part: Part) => void;
}

export const PartsSection = ({ category, parts, onPartClick }: PartsSectionProps) => {
  const emoji = getCategoryEmoji(category);
  const title = getCategoryTitle(category);
  const description = getCategoryDescription(category);

  const headerBg = "section-header";

  return (
    <div className="flex-1 min-h-0 rounded-xl p-6">
      <div className="sticky top-0 z-10 bg-background/10 backdrop-blur-md rounded-lg p-4 mb-6 border border-border/20 shadow-lg">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
          <span className="text-2xl">{emoji}</span>
          {title}
        </h2>
        <p className="text-muted-foreground text-sm mt-1 italic">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 justify-items-center">
        {parts.map((part) => (
          <PartButton
            key={part.id}
            part={part}
            onClick={onPartClick}
          />
        ))}
      </div>
    </div>
  );
};