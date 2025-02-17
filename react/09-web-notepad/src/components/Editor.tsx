import React from 'react';
import { EditorProps } from './types';
import './styles.css';

export const Editor: React.FC<EditorProps> = ({
  title,
  content,
  lastSaved,
  onTitleChange,
  onContentChange,
}) => {
  return (
    <div className="editor">
      <div className="editor-header">
        <input
          type="text"
          id="noteTitle"
          placeholder="메모 제목"
          className="title-input"
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
        />
        <span id="lastSaved" className="last-saved">
          {lastSaved}
        </span>
      </div>
      <textarea
        id="noteContent"
        placeholder="여기에 메모를 입력하세요..."
        className="content-input"
        value={content}
        onChange={(e) => onContentChange(e.target.value)}
      ></textarea>
    </div>
  );
};
