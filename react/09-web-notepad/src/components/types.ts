export interface Note {
  id: string;
  title: string;
  content: string;
  lastModified: string;
}

export interface HeaderProps {
  onNewNote: () => void;
  onDeleteNote: () => void;
}

export interface TabsProps {
  notes: Note[];
  currentNoteId: string | null;
  onSelectNote: (id: string) => void;
}

export interface EditorProps {
  title: string;
  content: string;
  lastSaved: string;
  onTitleChange: (value: string) => void;
  onContentChange: (value: string) => void;
}

export interface StatusBarProps {
  charCount: number;
  saveStatus: string;
}
