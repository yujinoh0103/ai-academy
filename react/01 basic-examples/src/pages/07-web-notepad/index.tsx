import { useEffect, useRef, useState } from "react";
import "./style.css";

const STORAGE_KEY = "webNotepadData";

interface Note {
  id: string;
  title: string;
  content: string;
  lastModified: string;
}

export default function WebNotepadApp() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [currentNoteId, setCurrentNoteId] = useState<string | null>(null);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [lastSaved, setLastSaved] = useState<string>("");
  const [saveStatus, setSaveStatus] = useState<string>("");
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const saveTimeout = useRef<NodeJS.Timeout | null>(null);

  const init = () => {
    loadNotes();
  };

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
      setTitle((prevTitle) => {
        setContent((prevContent) => {
          setNotes((prevNotes) => {
            const note = prevNotes.find((note) => note.id === currentNoteId);

            if (note) {
              note.title = prevTitle;
              note.content = prevContent;
              note.lastModified = new Date().toISOString();
              saveNotes();
            }

            return [...prevNotes];
          });

          return prevContent;
        });

        return prevTitle;
      });
    }, 1000);
  };

  const deleteCurrentNote = () => {
    if (!currentNoteId || notes.length <= 1) return;

    setNotes((prev) => {
      const nextNotes = [...prev];
      const index = nextNotes.findIndex((note) => note.id === currentNoteId);
      nextNotes.splice(index, 1);
      openNote(nextNotes[0].id);
      saveNotes();
      return nextNotes;
    });
  };

  return (
    <div className="container">
      <header className="header">
        <h1>웹 메모장</h1>
        <div className="header-buttons">
          <button
            id="newNoteBtn"
            className="btn primary"
            onClick={createNewNote}
          >
            새 메모
          </button>
          <button
            id="deleteNoteBtn"
            className="btn danger"
            onClick={deleteCurrentNote}
          >
            삭제
          </button>
        </div>
      </header>

      <div className="tabs" id="tabList">
        {notes.map((note) => (
          <div
            key={note.id}
            className={`tab ${note.id === currentNoteId ? "active" : ""}`}
            onClick={() => {
              openNote(note.id);
            }}
          >
            {note.title || "제목 없음"}
          </div>
        ))}
      </div>

      <div className="editor">
        <div className="editor-header">
          <input
            type="text"
            id="noteTitle"
            placeholder="메모 제목"
            className="title-input"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              scheduleAutoSave();
            }}
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
          onChange={(e) => {
            setContent(e.target.value);
            scheduleAutoSave();
          }}
        ></textarea>
      </div>

      <div className="status-bar">
        <span id="charCount">{content.length}자</span>
        <span id="saveStatus">{saveStatus}</span>
      </div>
    </div>
  );
}
