import { useState } from "react";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { parts, Part } from "@/data/parts";
import { PartsSection } from "@/components/PartsSection";
import { JournalModal } from "@/components/JournalModal";
import InfoModal from "@/components/InfoModal";
import { ifsDescription, instructions, disclaimerText } from "@/data/content";

export const PartsBoard = () => {
  useScrollToTop();
  const [selectedPart, setSelectedPart] = useState<Part | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isIFSOpen, setIsIFSOpen] = useState(false);
  const [isInstructionsOpen, setIsInstructionsOpen] = useState(false);

  const handlePartClick = (part: Part) => {
    setSelectedPart(part);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPart(null);
  };

  const managers = parts.filter(part => part.cat === "manager");
  const firefighters = parts.filter(part => part.cat === "firefighter");
  const exiles = parts.filter(part => part.cat === "exile");

  return (
    <div
      className="min-h-screen bg-background"
      style={{ paddingTop: "calc(var(--nav-height) + 0.5rem)" }}
    >
      <div className="max-w-8xl mx-auto p-6">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Who's In Charge?
          </h1>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Internal Family Systems Journaling
          </h2>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setIsIFSOpen(true)}
              className="flex items-center justify-between gap-2 p-6 border border-white rounded-lg bg-background hover:bg-muted/50 transition-colors"
            >
              <span>What Is IFS?</span>
              <span role="img" aria-label="candle">🕯️</span>
            </button>
            <button
              onClick={() => setIsInstructionsOpen(true)}
              className="flex items-center justify-between gap-2 p-6 border border-white rounded-lg bg-background hover:bg-muted/50 transition-colors"
            >
              <span>Instructions</span>
              <span role="img" aria-label="abacus">🧮</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <PartsSection
            category="manager"
            parts={managers}
            onPartClick={handlePartClick}
          />

          <PartsSection
            category="firefighter"
            parts={firefighters}
            onPartClick={handlePartClick}
          />

          <PartsSection
            category="exile"
            parts={exiles}
            onPartClick={handlePartClick}
          />
        </div>
      </div>

      <JournalModal
        part={selectedPart}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      <InfoModal
        title="What Is IFS?"
        isOpen={isIFSOpen}
        onClose={() => setIsIFSOpen(false)}
      >
        {ifsDescription}
      </InfoModal>
      <InfoModal
        title="Instructions"
        isOpen={isInstructionsOpen}
        onClose={() => setIsInstructionsOpen(false)}
      >
        {instructions}
        <div className="pt-4 space-y-2 text-left">
          <h3 className="text-lg font-semibold">Disclaimer</h3>
          <div className="space-y-4 pt-2">{disclaimerText}</div>
        </div>
      </InfoModal>
    </div >
  );
};
