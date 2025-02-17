import React from 'react';
import { HeaderProps } from './types';
import './styles.css';

export const Header: React.FC<HeaderProps> = ({
  onNewNote,
  onDeleteNote,
}) => {
  return (
    <header className="header">
      <h1>웹 메모장</h1>
      <div className="header-buttons">
        <button
          id="newNoteBtn"
          className="btn primary"
          onClick={onNewNote}
        >
          새 메모
        </button>
        <button
          id="deleteNoteBtn"
          className="btn danger"
          onClick={onDeleteNote}
        >
          삭제
        </button>
      </div>
    </header>
  );
};
