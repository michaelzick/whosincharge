import { JournalEntry, GroupedEntries } from "@/types/journal";

const STORAGE_KEY = "ifs-journal-entries";

export const saveEntry = (entry: JournalEntry): void => {
  const entries = getEntries();
  entries.push(entry);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
};

export const getEntries = (): JournalEntry[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

export const groupEntriesByDate = (entries: JournalEntry[]): GroupedEntries => {
  return entries.reduce((groups, entry) => {
    if (!groups[entry.date]) {
      groups[entry.date] = [];
    }
    groups[entry.date].push(entry);
    return groups;
  }, {} as GroupedEntries);
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString + 'T00:00:00');
  return date.toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  });
};

export const updateEntry = (updatedEntry: JournalEntry): void => {
  const entries = getEntries();
  const index = entries.findIndex(entry => entry.timestamp === updatedEntry.timestamp);
  if (index !== -1) {
    entries[index] = updatedEntry;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  }
};

export const deleteEntry = (timestamp: number): void => {
  const entries = getEntries();
  const filteredEntries = entries.filter(entry => entry.timestamp !== timestamp);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredEntries));
};

export const getTodayString = (): string => {
  return new Date().toISOString().split('T')[0];
};