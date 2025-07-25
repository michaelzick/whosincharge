import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { JournalEntry } from "@/types/journal";
import { X } from "lucide-react";

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
        className="sm:max-w-[500px] modal-content"
        onKeyDown={handleKeyDown}
      >
        <DialogHeader className="relative">
          <DialogTitle className="text-xl font-semibold pr-8">
            {entry.partLabel}
          </DialogTitle>
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0 h-8 w-8 p-0"
            onClick={onClose}
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </Button>
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