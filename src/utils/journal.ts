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

export const entriesToCSV = (entries: JournalEntry[]): string => {
  const headers = [
    'date',
    'part',
    'partLabel',
    'feeling',
    'need',
    'help',
    'timestamp',
  ];

  const escape = (value: string | number) => {
    const str = String(value ?? '');
    if (str.includes('"') || str.includes(',') || str.includes('\n')) {
      return `"${str.replace(/"/g, '""')}"`;
    }
    return str;
  };

  const rows = entries.map((e) =>
    [
      e.date,
      e.part,
      e.partLabel,
      e.feeling ?? e.text ?? '',
      e.need || '',
      e.help || '',
      e.timestamp,
    ]
      .map(escape)
      .join(',')
  );

  return [headers.join(','), ...rows].join('\n');
};

const downloadTextFile = (
  filename: string,
  text: string,
  type: string
) => {
  const blob = new Blob([text], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const exportEntriesAsCSV = (): void => {
  const entries = getEntries();
  const csv = entriesToCSV(entries);
  downloadTextFile('journal_entries.csv', csv, 'text/csv');
};

export const exportEntriesAsJSON = (): void => {
  const entries = getEntries();
  const json = JSON.stringify(entries, null, 2);
  downloadTextFile('journal_entries.json', json, 'application/json');
};