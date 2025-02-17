import "./style.css";

export default function TimerApp() {
  return (
    <div className="container">
      <div className="tabs">
        <button className="tab-btn active" data-tab="timer">
          타이머
        </button>
        <button className="tab-btn" data-tab="stopwatch">
          스톱워치
        </button>
      </div>

      <div className="tab-content active" id="timer">
        <div className="display">
          <span id="timer-minutes">00</span>:<span id="timer-seconds">00</span>
        </div>
        <div className="controls">
          <input
            type="number"
            id="set-minutes"
            placeholder="분"
            min="0"
            max="59"
          />
          <input
            type="number"
            id="set-seconds"
            placeholder="초"
            min="0"
            max="59"
          />
          <button id="timer-start">시작</button>
          <button id="timer-stop">정지</button>
          <button id="timer-reset">리셋</button>
        </div>
      </div>

      <div className="tab-content" id="stopwatch">
        <div className="display">
          <span id="stopwatch-minutes">00</span>:
          <span id="stopwatch-seconds">00</span>:
          <span id="stopwatch-milliseconds">00</span>
        </div>
        <div className="controls">
          <button id="stopwatch-start">시작</button>
          <button id="stopwatch-stop">정지</button>
          <button id="stopwatch-reset">리셋</button>
          <button id="stopwatch-lap">랩</button>
        </div>
        <div className="lap-times">
          <h3>랩 타임</h3>
          <ul id="lap-list"></ul>
        </div>
      </div>
    </div>
  );
}
