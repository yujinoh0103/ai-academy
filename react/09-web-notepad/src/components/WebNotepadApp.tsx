import React, { useEffect, useRef, useState } from "react";
import { Header } from "./Header";
import { Tabs } from "./Tabs";
import { Editor } from "./Editor";
import { StatusBar } from "./StatusBar";
import { Note } from "./types";
import { STORAGE_KEY } from "./constants";
import "./styles.css";

export const WebNotepadApp: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [currentNoteId, setCurrentNoteId] = useState<string | null>(null);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [lastSaved, setLastSaved] = useState<string>("");
  const [saveStatus, setSaveStatus] = useState<string>("");
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const saveTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    if (isLoaded) {
      if (notes.length === 0) {
        createNewNote();
      } else {
        openNote(notes[0].id);
      }
    }
  }, [isLoaded]);

  const init = () => {
    loadNotes();
  };

  const loadNotes = () => {
    const savedNotes = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    setNotes(savedNotes);
    setIsLoaded(true);
  };

  const createNewNote = () => {
    const id = Date.now().toString();
    const newNote = {
      id: id,
      title: "",
      content: "",
      lastModified: new Date().toISOString(),
    };
    setNotes([newNote, ...notes]);
    openNote(id);
    saveNotes();
  };

  const openNote = (id: string) => {
    setCurrentNoteId(id);
    setNotes((prevNotes) => {
      const note = prevNotes.find((note) => note.id === id);
      if (note) {
        setTitle(note.title);
        setContent(note.content);
      }
      return prevNotes;
    });
  };

  const saveNotes = () => {
    setNotes((prev) => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prev));
      updateLastSaved();
      setSaveStatus("저장됨");
      return prev;
    });
  };

  const updateLastSaved = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString("ko-KR", {
      hour: "2-digit",
      minute: "2-digit",
    });
    setLastSaved(`마지막 저장: ${timeString}`);
  };

  const scheduleAutoSave = () => {
    setSaveStatus("저장 중...");
    if (saveTimeout.current) {
      clearTimeout(saveTimeout.current);
    }
    saveTimeout.current = setTimeout(() => {
      const updatedNotes = notes.map((note) =>
        note.id === currentNoteId
          ? {
              ...note,
              title,
              content,
              lastModified: new Date().toISOString(),
            }
          : note
      );
      setNotes(updatedNotes);
      saveNotes();
    }, 1000);
  };

  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
    scheduleAutoSave();
  };

  const handleContentChange = (newContent: string) => {
    setContent(newContent);
    scheduleAutoSave();
  };

  const deleteCurrentNote = () => {
    if (!currentNoteId) return;

    const updatedNotes = notes.filter((note) => note.id !== currentNoteId);
    setNotes(updatedNotes);
    saveNotes();

    if (updatedNotes.length > 0) {
      openNote(updatedNotes[0].id);
    } else {
      createNewNote();
    }
  };

  return (
    <div className="container">
      <Header onNewNote={createNewNote} onDeleteNote={deleteCurrentNote} />
      <Tabs
        notes={notes}
        currentNoteId={currentNoteId}
        onSelectNote={openNote}
      />
      <Editor
        title={title}
        content={content}
        lastSaved={saveStatus}
        onTitleChange={handleTitleChange}
        onContentChange={handleContentChange}
      />
      <StatusBar charCount={content.length} saveStatus={lastSaved} />
    </div>
  );
};
