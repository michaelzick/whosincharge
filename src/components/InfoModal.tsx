import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface InfoModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const InfoModal = ({ title, isOpen, onClose, children }: InfoModalProps) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-[95vw] sm:max-w-[500px] z-50 bg-background/70 backdrop-blur-md border border-white rounded-lg"
        onKeyDown={handleKeyDown}
      >
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">{title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-foreground text-sm">{children}</div>
        <div className="flex justify-end pt-2">
          <Button onClick={onClose} className="bg-white text-black hover:bg-white/90">
            OK
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InfoModal;
