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
            Privacy Notice
          </DialogTitle>
          <DialogDescription asChild>
            <div className="space-y-4 pt-2 text-left">
              <p>
                For maximum privacy, none of your journal entries are stored in the
                cloud. The data stays in your browser's Local Storage, which means
                that if you switch browsers, use an Incognito or private window, or
                delete your Local Storage, you WILL LOSE YOUR ENTRIES!
              </p>
              <p>
                It's recommended that you use this app on a device that only you can
                access and keep your Local Storage. You can find your entries in
                Local Storage &gt; ifs-journal-entries.
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-end">
          <Button onClick={acknowledge}>Acknowledge</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
