import React, { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: Date;
  onEnd: () => void;
}

interface TimeLeft {
  total: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  return {
    total: difference,
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const Countdown: React.FC<CountdownProps> = ({ targetDate, onEnd }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    calculateTimeLeft(targetDate)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(targetDate);
      setTimeLeft(newTimeLeft);
      if (newTimeLeft.total <= 0) {
        clearInterval(timer);
        onEnd();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onEnd]);

  if (timeLeft.total <= 0) {
    return null;
  }

  return (
    <div className="h-screen bg-gray-950 w-screen flex flex-col justify-center place-items-center text-white">
      <div className="text-3xl font-bold">
        Countdown to <span className="text-yellow-500">Ara's</span> birthday!!
      </div>
      <div className="flex items-center">
        <div className="flex flex-col text-center px-6">
          <span className="text-9xl font-bold">
            {String(timeLeft.days).padStart(2, "0")}
          </span>
          <span className="font-semibold">Days</span>
        </div>
        <div className="flex flex-col text-center px-6">
          <span className="text-9xl font-bold">
            {String(timeLeft.hours).padStart(2, "0")}
          </span>
          <span className="font-semibold">Hours</span>
        </div>
        <div className="flex flex-col text-center px-6">
          <span className="text-9xl font-bold">
            {String(timeLeft.minutes).padStart(2, "0")}
          </span>
          <span className="font-semibold">Minutes</span>
        </div>
        <div className="flex flex-col text-center px-6">
          <span className="text-9xl font-bold text-yellow-500">
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>
          <span className="text-yellow-500 font-semibold">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
