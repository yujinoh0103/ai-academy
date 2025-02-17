import React from 'react';
import { TabsProps } from './types';
import './styles.css';

export const TabList: React.FC<TabsProps> = ({
  notes,
  currentNoteId,
  onSelectNote,
}) => {
  return (
    <div className="tabs" id="tabList">
      {notes.map((note) => (
        <div
          key={note.id}
          className={`tab ${note.id === currentNoteId ? "active" : ""}`}
          onClick={() => onSelectNote(note.id)}
        >
          {note.title || "제목 없음"}
        </div>
      ))}
    </div>
  );
};
