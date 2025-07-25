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
    <button
      className="part-button group relative overflow-hidden rounded-xl aspect-[3/4] bg-card border border-border focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
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
          className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-150"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <h3 className="text-white text-sm font-semibold text-center leading-tight drop-shadow-lg">
          {part.label}
        </h3>
      </div>
    </button>
  );
};