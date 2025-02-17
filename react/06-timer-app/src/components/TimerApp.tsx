import React, { useState } from 'react';
import { TabType } from './types';
import { Tabs } from './Tabs';
import { Timer } from './Timer';
import { Stopwatch } from './Stopwatch';
import './styles.css';

export const TimerApp: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('timer');

  return (
    <div className="container">
      <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
      {activeTab === 'timer' ? <Timer /> : <Stopwatch />}
    </div>
  );
};
