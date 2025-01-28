 //exibição de hora local 
import React, { useState, useEffect } from 'react';

const TimeDisplay: React.FC = () => {
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 60000);  

    return () => clearInterval(timer);  
  }, []);

  return <span className="time">{time}</span>;
};

export default TimeDisplay;
