"use client"

import { useState, useEffect } from "react"

export default function CountdownTimer() {
  // Set target date to 7 days from now
  const calculateTargetDate = () => {
    const target = new Date()
    target.setDate(target.getDate() + 7)
    return target
  }

  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 0,
    minutes: 14,
    seconds: 28,
  })

  useEffect(() => {
    const targetDate = calculateTargetDate()

    const interval = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference <= 0) {
        clearInterval(interval)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const formatNumber = (num) => {
    return num < 10 ? `0${num}` : num.toString()
  }

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-4 gap-2">
        {/* Days */}
        <div className="flex flex-col items-center">
          <div className="flex">
            {formatNumber(timeLeft.days)
              .split("")
              .map((digit, index) => (
                <div
                  key={`days-${index}`}
                  className="bg-gray-800 text-white text-4xl md:text-5xl font-bold w-12 h-16 md:w-16 md:h-20 flex items-center justify-center rounded-md mx-0.5"
                >
                  {digit}
                </div>
              ))}
          </div>
          <span className="text-gray-600 text-sm mt-1">DAYS</span>
        </div>

        {/* Hours */}
        <div className="flex flex-col items-center">
          <div className="flex">
            {formatNumber(timeLeft.hours)
              .split("")
              .map((digit, index) => (
                <div
                  key={`hours-${index}`}
                  className="bg-gray-800 text-white text-4xl md:text-5xl font-bold w-12 h-16 md:w-16 md:h-20 flex items-center justify-center rounded-md mx-0.5"
                >
                  {digit}
                </div>
              ))}
          </div>
          <span className="text-gray-600 text-sm mt-1">HOURS</span>
        </div>

        {/* Minutes */}
        <div className="flex flex-col items-center">
          <div className="flex">
            {formatNumber(timeLeft.minutes)
              .split("")
              .map((digit, index) => (
                <div
                  key={`minutes-${index}`}
                  className="bg-gray-800 text-white text-4xl md:text-5xl font-bold w-12 h-16 md:w-16 md:h-20 flex items-center justify-center rounded-md mx-0.5"
                >
                  {digit}
                </div>
              ))}
          </div>
          <span className="text-gray-600 text-sm mt-1">MINUTES</span>
        </div>

        {/* Seconds */}
        <div className="flex flex-col items-center">
          <div className="flex">
            {formatNumber(timeLeft.seconds)
              .split("")
              .map((digit, index) => (
                <div
                  key={`seconds-${index}`}
                  className="bg-gray-800 text-white text-4xl md:text-5xl font-bold w-12 h-16 md:w-16 md:h-20 flex items-center justify-center rounded-md mx-0.5"
                >
                  {digit}
                </div>
              ))}
          </div>
          <span className="text-gray-600 text-sm mt-1">SECONDS</span>
        </div>
      </div>
    </div>
  )
}
