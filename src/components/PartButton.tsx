import { Part } from "@/data/parts";

interface PartButtonProps {
  part: Part;
  onClick: (part: Part) => void;
}

export const PartButton = ({ part, onClick }: PartButtonProps) => {
  const handleClick = () => {
    onClick(part);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick(part);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-3">
      <button
        className="part-button group relative overflow-visible rounded-xl aspect-[2/3] bg-card border border-border/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 shadow-2xl hover:shadow-primary/20 hover:border-primary/50 hover:scale-110 hover:z-20 transition-all duration-300 w-full h-64"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label={`Journal with ${part.label}`}
      >
        <div className="absolute inset-0">
          <img
            src={part.img}
            alt={part.label}
            className="w-full h-full object-cover transition-transform duration-200"
          />
        </div>
      </button>
      
      <h3 className="text-foreground text-sm font-semibold text-center leading-tight px-2">
        {part.label}
      </h3>
    </div>
  );
};