export interface JournalEntry {
  date: string; // ISO date string (YYYY-MM-DD)
  part: string; // part ID
  partLabel: string; // part label for display
  text: string;
  timestamp: number; // for sorting entries within a day
}

export interface GroupedEntries {
  [date: string]: JournalEntry[];
}