import React from 'react';
import TimeDisplay from './TimeDisplay';

const StatusBar: React.FC = () => {
  return (
    <div className="status-bar">
      <TimeDisplay />
      <div className="icons">
        <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="26" height="22" viewBox="0 0 24 24">
          <image href="/public/header-signal.svg" />
        </svg>
        <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="26" height="22" viewBox="0 0 24 24">
          <image href="/public/header-wifi.svg" />
        </svg>
        <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="26" height="22" viewBox="0 0 24 24">
          <image href="/public/header-battery.svg" />
        </svg>
      </div>
    </div>
  );
};

export default StatusBar;
