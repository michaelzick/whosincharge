import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { JournalEntry } from "@/types/journal";

interface EntryModalProps {
  entry: JournalEntry | null;
  isOpen: boolean;
  onClose: () => void;
}

export const EntryModal = ({ entry, isOpen, onClose }: EntryModalProps) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  if (!entry) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-[95vw] sm:max-w-[500px] z-50 bg-background/70 backdrop-blur-md border border-white rounded-lg"
        onKeyDown={handleKeyDown}
      >
        <DialogHeader className="relative">
          <DialogTitle className="text-xl font-semibold pr-8">
            {entry.partLabel}
          </DialogTitle>
        </DialogHeader>

        <div className="py-4 space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-1">
              What's this part feeling right now?
              <br />
              What does it want to say?
            </h4>
            <div className="bg-muted/50 rounded-lg p-4 min-h-[1.5rem]">
              <p className="text-foreground whitespace-pre-wrap leading-relaxed">
                {entry.feeling || entry.text || ""}
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-1">What does this part need?</h4>
            <div className="bg-muted/50 rounded-lg p-4 min-h-[1.5rem]">
              <p className="text-foreground whitespace-pre-wrap leading-relaxed">
                {entry.need || ""}
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-1">
              How can you help this part?
              <br />
              What does it need from you (your Higher Self)?
            </h4>
            <div className="bg-muted/50 rounded-lg p-4 min-h-[1.5rem]">
              <p className="text-foreground whitespace-pre-wrap leading-relaxed">
                {entry.help || ""}
              </p>
            </div>
          </div>

          <div className="text-xs text-muted-foreground">
            {new Date(entry.timestamp).toLocaleString()}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
