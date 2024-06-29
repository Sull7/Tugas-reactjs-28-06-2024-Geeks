import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setTime(new Date());
  };

  return (
    <div>
      <h2>Waktu yang Menggunakan Hooks</h2>
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  );
};

export default Clock;
