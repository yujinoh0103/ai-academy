import React from 'react';
import { TabProps, TabType } from './types';
import './styles.css';

export const Tabs: React.FC<TabProps> = ({ activeTab, onTabChange }) => {
  const handleTabClick = (tab: TabType) => {
    onTabChange(tab);
  };

  return (
    <div className="tabs">
      <button
        className={`tab-btn ${activeTab === 'timer' ? 'active' : ''}`}
        onClick={() => handleTabClick('timer')}
      >
        타이머
      </button>
      <button
        className={`tab-btn ${activeTab === 'stopwatch' ? 'active' : ''}`}
        onClick={() => handleTabClick('stopwatch')}
      >
        스톱워치
      </button>
    </div>
  );
};
