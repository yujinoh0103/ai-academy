// DOM 요소
const noteTitle = document.getElementById("noteTitle");
const noteContent = document.getElementById("noteContent");
const newNoteBtn = document.getElementById("newNoteBtn");
const deleteNoteBtn = document.getElementById("deleteNoteBtn");
const tabList = document.getElementById("tabList");
const lastSaved = document.getElementById("lastSaved");
const charCount = document.getElementById("charCount");
const saveStatus = document.getElementById("saveStatus");

// 상태 변수
let notes = [];
let currentNoteId = null;
let saveTimeout = null;

// 로컬 스토리지 키
const STORAGE_KEY = "webNotepadData";

// 노트 클래스
class Note {
  constructor(id, title = "", content = "") {
    this.id = id;
    this.title = title;
    this.content = content;
    this.lastModified = new Date().toISOString();
  }
}

// 초기화
function init() {
  loadNotes();
  if (notes.length === 0) {
    createNewNote();
  } else {
    renderTabs();
    openNote(notes[0].id);
  }
  setupEventListeners();
}

// 노트 저장
function saveNotes() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  updateLastSaved();
  saveStatus.textContent = "저장됨";
}

// 노트 불러오기
function loadNotes() {
  const savedNotes = localStorage.getItem(STORAGE_KEY);
  notes = savedNotes ? JSON.parse(savedNotes) : [];
}

// 새 노트 생성
function createNewNote() {
  const id = Date.now().toString();
  const newNote = new Note(id);
  notes.unshift(newNote);
  renderTabs();
  openNote(id);
  saveNotes();
}

// 노트 열기
function openNote(id) {
  currentNoteId = id;
  const note = notes.find((note) => note.id === id);
  if (note) {
    noteTitle.value = note.title;
    noteContent.value = note.content;
    updateCharCount();
    highlightCurrentTab();
  }
}

// 노트 삭제
function deleteCurrentNote() {
  if (!currentNoteId || notes.length <= 1) return;

  const index = notes.findIndex((note) => note.id === currentNoteId);
  notes.splice(index, 1);

  renderTabs();
  openNote(notes[0].id);
  saveNotes();
}

// 탭 렌더링
function renderTabs() {
  tabList.innerHTML = "";
  notes.forEach((note) => {
    const tab = document.createElement("div");
    tab.className = "tab";
    tab.textContent = note.title || "제목 없음";
    tab.dataset.id = note.id;
    if (note.id === currentNoteId) {
      tab.classList.add("active");
    }
    tab.addEventListener("click", () => openNote(note.id));
    tabList.appendChild(tab);
  });
}

// 현재 탭 하이라이트
function highlightCurrentTab() {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.id === currentNoteId);
  });
}

// 마지막 저장 시간 업데이트
function updateLastSaved() {
  const now = new Date();
  const timeString = now.toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
  });
  lastSaved.textContent = `마지막 저장: ${timeString}`;
}

// 글자 수 업데이트
function updateCharCount() {
  const count = noteContent.value.length;
  charCount.textContent = `${count}자`;
}

// 자동 저장
function scheduleAutoSave() {
  saveStatus.textContent = "저장 중...";
  if (saveTimeout) {
    clearTimeout(saveTimeout);
  }
  saveTimeout = setTimeout(() => {
    const note = notes.find((note) => note.id === currentNoteId);
    if (note) {
      note.title = noteTitle.value;
      note.content = noteContent.value;
      note.lastModified = new Date().toISOString();
      saveNotes();
      renderTabs();
    }
  }, 1000);
}

// 이벤트 리스너 설정
function setupEventListeners() {
  newNoteBtn.addEventListener("click", createNewNote);
  deleteNoteBtn.addEventListener("click", deleteCurrentNote);

  noteTitle.addEventListener("input", () => {
    scheduleAutoSave();
  });

  noteContent.addEventListener("input", () => {
    updateCharCount();
    scheduleAutoSave();
  });

  // 탭 키 처리
  noteContent.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const start = noteContent.selectionStart;
      const end = noteContent.selectionEnd;
      noteContent.value =
        noteContent.value.substring(0, start) +
        "    " +
        noteContent.value.substring(end);
      noteContent.selectionStart = noteContent.selectionEnd = start + 4;
    }
  });
}

// 앱 초기화
init();
