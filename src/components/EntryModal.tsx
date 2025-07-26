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
        className="max-w-[95vw] sm:max-w-[500px] z-50 bg-background/70 backdrop-blur-md border border-border/20"
        onKeyDown={handleKeyDown}
      >
        <DialogHeader className="relative">
          <DialogTitle className="text-xl font-semibold pr-8">
            {entry.partLabel}
          </DialogTitle>
        </DialogHeader>

        <div className="py-4">
          <div className="bg-muted/50 rounded-lg p-4">
            <p className="text-foreground whitespace-pre-wrap leading-relaxed">
              {entry.text}
            </p>
          </div>

          <div className="mt-4 text-xs text-muted-foreground">
            {new Date(entry.timestamp).toLocaleString()}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
