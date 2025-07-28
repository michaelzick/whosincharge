import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { disclaimerModalText } from "@/data/content";

const ACK_KEY = "ifs-journal-disclaimer-ack";

export const DisclaimerModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const seen = localStorage.getItem(ACK_KEY);
      if (!seen) {
        setOpen(true);
      }
    } catch {
      // ignore
    }
  }, []);

  const acknowledge = () => {
    try {
      localStorage.setItem(ACK_KEY, "true");
    } catch {
      // ignore
    }
    setOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="max-w-[95vw] sm:max-w-[500px] z-50 bg-background/70 backdrop-blur-md border border-white rounded-lg"
        onKeyDown={handleKeyDown}
      >
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Disclaimer
          </DialogTitle>
          <DialogDescription asChild>
            <div className="space-y-4 pt-2 text-left text-white">{disclaimerModalText}</div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-end">
          <Button className="mt-2" onClick={acknowledge}>Acknowledge</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
