import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExportCSV: () => void;
  onExportJSON: () => void;
}

export const ExportModal = ({ isOpen, onClose, onExportCSV, onExportJSON }: ExportModalProps) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-[95vw] sm:max-w-[400px] z-50 bg-background/70 backdrop-blur-md border border-white rounded-lg"
        onKeyDown={handleKeyDown}
      >
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Export Entries</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-2 text-center">
          <p className="text-sm text-muted-foreground">Which format would you like to export?</p>
          <div className="flex justify-center gap-4">
            <Button onClick={onExportCSV}>CSV</Button>
            <Button onClick={onExportJSON}>JSON</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExportModal;
