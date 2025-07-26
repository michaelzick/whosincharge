import { Part, getCategoryEmoji, getCategoryTitle, getCategoryDescription } from "@/data/parts";
import { PartButton } from "./PartButton";
import { useEffect, useState } from "react";

interface PartsSectionProps {
  category: Part["cat"];
  parts: Part[];
  onPartClick: (part: Part) => void;
}

export const PartsSection = ({ category, parts, onPartClick }: PartsSectionProps) => {
  const emoji = getCategoryEmoji(category);
  const title = getCategoryTitle(category);
  const description = getCategoryDescription(category);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const updateOffset = () => {
      const nav = document.getElementById("main-nav");
      setOffset((nav?.offsetHeight || 0) + 5);
    };
    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, []);

  return (
    <section className="flex-1 rounded-xl p-6 space-y-6 border border-border/20 bg-card">
      <div
        className="sticky z-10 bg-background/80 backdrop-blur-md rounded-lg p-4 border border-border/20 shadow"
        style={{ top: offset }}
      >
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
          <span className="text-2xl">{emoji}</span>
          {title}
        </h2>
        <p className="text-muted-foreground text-m mt-1 capitalize">
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
    </section>
  );
};
