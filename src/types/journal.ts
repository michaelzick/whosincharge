export interface JournalEntry {
  date: string; // ISO date string (YYYY-MM-DD)
  part: string; // part ID
  partLabel: string; // part label for display
  text: string; // legacy field used for preview/snippets
  feeling?: string; // what's this part feeling right now
  need?: string; // what does this part need
  help?: string; // how can the higher self help
  timestamp: number; // for sorting entries within a day
}

export interface GroupedEntries {
  [date: string]: JournalEntry[];
}