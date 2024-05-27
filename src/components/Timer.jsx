import { useEffect, useState } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const lastActive = localStorage.getItem('lastActive');
    const now = new Date().getTime();
    const inactiveTime = 240000; // 240 seconds or 4 minutes

    if (!lastActive || (now - lastActive) > inactiveTime) {
      setSeconds(65);
    }

    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [seconds]);

  useEffect(() => {
    const handleActivity = () => {
      localStorage.setItem('lastActive', new Date().getTime());
    };

    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keypress', handleActivity);

    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keypress', handleActivity);
    };
  }, []);

  return (
    <div>
      {seconds > 0 ? (
        <p>Timer: {seconds} seconds remaining</p>
      ) : (
        <p>Timer ended</p>
      )}
    </div>
  );
};

export default Timer;
