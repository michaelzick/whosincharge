import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { JournalEntry } from "@/types/journal";
import { updateEntry, deleteEntry } from "@/utils/journal";
import { useToast } from "@/hooks/use-toast";

interface EntryModalProps {
  entry: JournalEntry | null;
  isOpen: boolean;
  onClose: () => void;
  onEntryUpdate?: () => void;
  onEntryDelete?: () => void;
}

export const EntryModal = ({ entry, isOpen, onClose, onEntryUpdate, onEntryDelete }: EntryModalProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [feeling, setFeeling] = useState("");
  const [need, setNeed] = useState("");
  const [help, setHelp] = useState("");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const { toast } = useToast();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      if (isEditing) {
        handleCancel();
      } else {
        onClose();
      }
    }
  };

  const handleEdit = () => {
    if (entry) {
      setFeeling(entry.feeling || entry.text || "");
      setNeed(entry.need || "");
      setHelp(entry.help || "");
      setIsEditing(true);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFeeling("");
    setNeed("");
    setHelp("");
  };

  const handleSave = () => {
    if (entry) {
      const updatedEntry: JournalEntry = {
        ...entry,
        feeling: feeling,
        text: feeling, // Keep text field in sync with feeling
        need: need,
        help: help
      };
      
      updateEntry(updatedEntry);
      setIsEditing(false);
      toast({
        title: "Entry updated",
        description: "Your journal entry has been updated successfully.",
      });
      onEntryUpdate?.();
    }
  };

  const handleDelete = () => {
    if (entry) {
      deleteEntry(entry.timestamp);
      setShowDeleteConfirm(false);
      toast({
        title: "Entry deleted",
        description: "Your journal entry has been deleted.",
      });
      onEntryDelete?.();
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
          <DialogTitle className="text-xl font-semibold">
            {entry.partLabel}
          </DialogTitle>
        </DialogHeader>

        <div className="py-4 space-y-8">
          <div>
            <h4 className="text-sm font-medium mb-1 text-muted-foreground">
              What is this part feeling right now?
              <br />
              What does it want to say?
            </h4>
            {isEditing ? (
              <Textarea
                value={feeling}
                onChange={(e) => setFeeling(e.target.value)}
                className="min-h-[100px] resize-none"
                placeholder="What is this part feeling right now? What does it want to say?"
              />
            ) : (
              <div className="bg-muted/50 rounded-lg p-4 min-h-[1.5rem]">
                <p className="text-foreground whitespace-pre-wrap leading-relaxed">
                  {entry.feeling || entry.text || ""}
                </p>
              </div>
            )}
          </div>

          <div>
            <h4 className="text-sm font-medium mb-1 text-muted-foreground">What does this part need?</h4>
            {isEditing ? (
              <Textarea
                value={need}
                onChange={(e) => setNeed(e.target.value)}
                className="min-h-[100px] resize-none"
                placeholder="What does this part need?"
              />
            ) : (
              <div className="bg-muted/50 rounded-lg p-4 min-h-[1.5rem]">
                <p className="text-foreground whitespace-pre-wrap leading-relaxed">
                  {entry.need || ""}
                </p>
              </div>
            )}
          </div>

          <div>
            <h4 className="text-sm font-medium mb-1 text-muted-foreground">
              How can you help this part?
              <br />
              What does it need from you (your Higher Self)?
            </h4>
            {isEditing ? (
              <Textarea
                value={help}
                onChange={(e) => setHelp(e.target.value)}
                className="min-h-[100px] resize-none"
                placeholder="How can you help this part? What does it need from you?"
              />
            ) : (
              <div className="bg-muted/50 rounded-lg p-4 min-h-[1.5rem]">
                <p className="text-foreground whitespace-pre-wrap leading-relaxed">
                  {entry.help || ""}
                </p>
              </div>
            )}
          </div>

          <div className="text-xs text-muted-foreground">
            {new Date(entry.timestamp).toLocaleString()}
          </div>

          <div className="flex justify-end gap-2 pt-2">
            {isEditing ? (
              <>
                <Button variant="outline" onClick={handleCancel}>
                  Cancel
                </Button>
                <Button onClick={handleSave}>
                  Save
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" onClick={handleEdit}>
                  Edit
                </Button>
                <AlertDialog open={showDeleteConfirm} onOpenChange={setShowDeleteConfirm}>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline">
                      Delete
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="max-w-[95vw] sm:max-w-[500px] bg-background/70 backdrop-blur-md border border-white rounded-lg">
                    <AlertDialogHeader>
                      <AlertDialogTitle>Delete Entry</AlertDialogTitle>
                      <AlertDialogDescription>
                        Are you sure you want to delete this entry? This cannot be undone!
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={handleDelete}
                        className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                      >
                        Delete 💥
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
