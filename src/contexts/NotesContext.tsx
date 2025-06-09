import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useEffect, useState } from 'react';
import { Note, NotesContextType } from '@/common/types/note.model';

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export function NotesProvider({ children }: { children: React.ReactNode }) {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    try {
      const storedNotes = await AsyncStorage.getItem('notes');
      if (storedNotes) {
        setNotes(JSON.parse(storedNotes));
      }
    } catch (error) {
      console.error('Error loading notes:', error);
    }
  };

  const saveNotes = async (updatedNotes: Note[]) => {
    try {
      await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
      setNotes(updatedNotes);
    } catch (error) {
      console.error('Error saving notes:', error);
    }
  };

  const addNote = async (title: string, content: string) => {
    const newNote: Note = {
      id: Date.now().toString(),
      title,
      content,
      createdAt: new Date().toISOString(),
      isArchived: false,
    };
    await saveNotes([newNote, ...notes]);
  };

  const updateNote = async (id: string, title: string, content: string) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, title, content } : note
    );
    await saveNotes(updatedNotes);
  };

  const archiveNote = async (id: string) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, isArchived: true } : note
    );
    await saveNotes(updatedNotes);
  };

  const restoreNote = async (id: string) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, isArchived: false } : note
    );
    await saveNotes(updatedNotes);
  };

  const deleteNote = async (id: string) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    await saveNotes(updatedNotes);
  };

  const clearAllNotes = async () => {
    await AsyncStorage.removeItem('notes');
    setNotes([]);
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        addNote,
        updateNote,
        archiveNote,
        deleteNote,
        restoreNote,
        clearAllNotes,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}

export function useNotes() {
  const context = useContext(NotesContext);
  if (context === undefined) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
}
