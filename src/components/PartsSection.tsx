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

  return (
    <div className={`flex-1 min-h-0 ${category}-section rounded-xl p-6`}>
      <div className="sticky top-0 z-10 bg-card/80 backdrop-blur-sm rounded-lg p-4 mb-6 border border-border/50">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
          <span className="text-2xl">{emoji}</span>
          {title}
        </h2>
        <p className="text-sm text-muted-foreground mt-1 italic">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
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