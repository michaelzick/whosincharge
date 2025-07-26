import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Part } from "@/data/parts";
import { saveEntry, getTodayString } from "@/utils/journal";
import { useToast } from "@/hooks/use-toast";

interface JournalModalProps {
  part: Part | null;
  isOpen: boolean;
  onClose: () => void;
}

export const JournalModal = ({ part, isOpen, onClose }: JournalModalProps) => {
  const [text, setText] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    if (!isOpen) {
      setText("");
    }
  }, [isOpen]);

  const handleSave = () => {
    if (!part || !text.trim()) {
      onClose();
      return;
    }

    const entry = {
      date: getTodayString(),
      part: part.id,
      partLabel: part.label,
      text: text.trim(),
      timestamp: Date.now()
    };

    saveEntry(entry);

    toast({
      title: "Saved to Journal ✅",
      description: `Entry for ${part.label} has been saved.`,
      duration: 3000,
    });

    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  if (!part) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-[95vw] sm:max-w-[425px] z-50 bg-background/70 backdrop-blur-md border border-border/20"
        onKeyDown={handleKeyDown}
      >
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            {part.label}
          </DialogTitle>
          <DialogDescription>
            Write what this part wants to express today
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <Textarea
            placeholder="Write what this part wants to say…"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="min-h-[120px] resize-none"
            autoFocus
          />
        </div>

        <div className="flex justify-end space-x-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
