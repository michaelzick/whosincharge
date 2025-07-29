import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Part } from "@/data/parts";
import { saveEntry, getTodayString } from "@/utils/journal";
import { useToast } from "@/hooks/use-toast";

interface JournalModalProps {
  part: Part | null;
  isOpen: boolean;
  onClose: () => void;
}

export const JournalModal = ({ part, isOpen, onClose }: JournalModalProps) => {
  const [feeling, setFeeling] = useState("");
  const [need, setNeed] = useState("");
  const [help, setHelp] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    if (!isOpen) {
      setFeeling("");
      setNeed("");
      setHelp("");
    }
  }, [isOpen]);

  const handleSave = () => {
    if (!part || !feeling.trim() && !need.trim() && !help.trim()) {
      onClose();
      return;
    }

    const entry = {
      date: getTodayString(),
      part: part.id,
      partLabel: part.label,
      feeling: feeling.trim(),
      need: need.trim(),
      help: help.trim(),
      timestamp: Date.now()
    };

    saveEntry(entry);

    toast({
      title: "Saved to Journal ✍🏻",
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
        className="max-w-[95vw] sm:max-w-[425px] z-50 bg-background/70 backdrop-blur-md border border-white rounded-lg"
        onKeyDown={handleKeyDown}
      >
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            {part.label}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-8 py-4">
          <div className="space-y-2">
            <Label htmlFor="feeling" className="text-sm text-muted-foreground">
              What is this part feeling right now?
              <br />
              What does it want to say?
            </Label>
            <Textarea
              id="feeling"
              placeholder="Type here"
              value={feeling}
              onChange={(e) => setFeeling(e.target.value)}
              className="min-h-[100px] resize-none"
              autoFocus
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="need" className="text-sm text-muted-foreground">
              What does this part need?
            </Label>
            <Textarea
              id="need"
              placeholder="Type here"
              value={need}
              onChange={(e) => setNeed(e.target.value)}
              className="min-h-[100px] resize-none"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="help" className="text-sm text-muted-foreground">
              How can you help this part?
              <br />
              What does it need from you (your Higher Self)?
            </Label>
            <Textarea
              id="help"
              placeholder="Type here"
              value={help}
              onChange={(e) => setHelp(e.target.value)}
              className="min-h-[100px] resize-none"
            />
          </div>
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
