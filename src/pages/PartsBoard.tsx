import { useState } from "react";
import { parts, Part } from "@/data/parts";
import { PartsSection } from "@/components/PartsSection";
import { JournalModal } from "@/components/JournalModal";

export const PartsBoard = () => {
  const [selectedPart, setSelectedPart] = useState<Part | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Choose a Part to Journal With
          </h2>
          <p className="text-muted-foreground">
            Click on any part below to explore what it wants to express today
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-200px)]">
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
    </div>
  );
};