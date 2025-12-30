"use client";

import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface CountdownTimerProps {
  deadline?: Date; // Optional absolute deadline
  hours?: number; // Or relative duration in hours
  text?: string;
}

export function CountdownTimer({ deadline, hours = 24, text = "Akce končí za:" }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // If no deadline provided, set one relative to now (e.g., end of day or next 24h)
    // For this demo, let's simulate a "same day shipping" deadline (e.g., 14:00) or just a recurring 24h timer
    // Let's make it count down to midnight for "Flash Sale" feel
    
    const target = deadline || new Date();
    if (!deadline) {
      target.setHours(23, 59, 59, 999); // End of today
    }

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        // Reset or stop
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [deadline]);

  return (
    <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#D32F2F] bg-red-50 px-3 py-1.5 rounded-full w-full">
      <Clock className="w-3 h-3 animate-pulse" />
      <span>{text}</span>
      <div className="flex items-center gap-0.5 font-mono">
        <span className="bg-white px-1 rounded border border-red-100 min-w-[20px] text-center">
          {timeLeft.hours.toString().padStart(2, '0')}
        </span>
        <span>:</span>
        <span className="bg-white px-1 rounded border border-red-100 min-w-[20px] text-center">
          {timeLeft.minutes.toString().padStart(2, '0')}
        </span>
        <span>:</span>
        <span className="bg-white px-1 rounded border border-red-100 min-w-[20px] text-center">
          {timeLeft.seconds.toString().padStart(2, '0')}
        </span>
      </div>
    </div>
  );
}
