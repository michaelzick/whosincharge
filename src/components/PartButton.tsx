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
        className="part-button group relative overflow-hidden rounded-xl aspect-[2/3] bg-card border-2 border-border focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 shadow-lg hover:shadow-xl transition-all duration-200 w-full max-w-[200px]"
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
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          />
        </div>
      </button>
      
      <h3 className="text-foreground text-sm font-semibold text-center leading-tight px-2">
        {part.label}
      </h3>
    </div>
  );
};