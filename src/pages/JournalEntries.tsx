import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { getEntries, groupEntriesByDate, formatDate } from "@/utils/journal";
import { JournalEntry } from "@/types/journal";
import { EntryModal } from "@/components/EntryModal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { FileText, Calendar } from "lucide-react";

export const JournalEntries = () => {
  useScrollToTop();
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [selectedEntry, setSelectedEntry] = useState<JournalEntry | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const loadEntries = () => {
      const allEntries = getEntries();
      // Sort by date (newest first) and then by timestamp (newest first)
      const sortedEntries = allEntries.sort((a, b) => {
        const dateCompare = b.date.localeCompare(a.date);
        if (dateCompare !== 0) return dateCompare;
        return b.timestamp - a.timestamp;
      });
      setEntries(sortedEntries);
    };

    loadEntries();
  }, []);

  const handleEntryClick = (entry: JournalEntry) => {
    setSelectedEntry(entry);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEntry(null);
  };

  const groupedEntries = groupEntriesByDate(entries);
  const sortedDates = Object.keys(groupedEntries).sort((a, b) => b.localeCompare(a));

  if (entries.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto p-6">
          <div className="text-center py-16">
            <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-2">
              No Journal Entries Yet
            </h2>
            <p className="text-muted-foreground mb-6">
              Start journaling with your parts on the Parts Board to see entries here.
            </p>
            <Button asChild className="bg-primary">
              <Link to="/">Go to Parts Board</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-background"
      style={{ paddingTop: "calc(var(--nav-height) + 0.5rem)" }}
    >
      <div className="max-w-4xl mx-auto p-6">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Your Journal Entries
          </h2>
          <p className="text-muted-foreground">
            Explore your conversations with different parts over time.
          </p>
        </div>

        <div className="space-y-4">
          <Accordion type="multiple" className="w-full">
            {sortedDates.map((date) => (
              <AccordionItem key={date} value={date} className="border border-border rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 rounded-t-lg">
                  <div className="flex items-center gap-3 text-left">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {formatDate(date)}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {groupedEntries[date].length} {groupedEntries[date].length === 1 ? 'entry' : 'entries'}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="space-y-2">
                    {groupedEntries[date].map((entry, index) => (
                      <button
                        key={`${entry.part}-${entry.timestamp}`}
                        onClick={() => handleEntryClick(entry)}
                        className="w-full text-left p-3 rounded-lg bg-card hover:bg-muted/50 border border-border transition-colors duration-150 group"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                              {entry.partLabel}
                            </h4>
                            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                              {entry.text}
                            </p>
                          </div>
                          <div className="text-xs text-muted-foreground ml-4">
                            {new Date(entry.timestamp).toLocaleTimeString([], {
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <EntryModal
        entry={selectedEntry}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};
