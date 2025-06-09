export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  isArchived: boolean;
}

export interface NotesContextType {
  notes: Note[];
  addNote: (title: string, content: string) => Promise<void>;
  updateNote: (id: string, title: string, content: string) => Promise<void>;
  archiveNote: (id: string) => Promise<void>;
  deleteNote: (id: string) => Promise<void>;
  restoreNote: (id: string) => Promise<void>;
  clearAllNotes: () => Promise<void>;
}