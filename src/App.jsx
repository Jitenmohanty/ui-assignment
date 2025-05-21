import { Menu } from "lucide-react"
import CountdownTimer from "./components/CountdownTimer.jsx"
import StatisticsBar from "./components/StatisticsBar.jsx"
import RatingSection from "./components/RatingSection.jsx"
import Footer from "./components/Footer.jsx"

export default function App() {
  return (
    <main className="flex font-mono min-h-screen flex-col items-center bg-white overflow-hidden relative">
      {/* Scalloped top border */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-white">
        <div className="flex justify-between">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="w-1/8 h-16 bg-[#E91E63] rounded-b-full" />
          ))}
        </div>
      </div>

      {/* Main content container */}
      <div className="w-full max-w-4xl mx-auto pt-16 pb-8 px-4 sm:px-6 relative z-10">
        {/* Header with menu */}
        <header className="flex justify-end mb-4">
          <button className="p-2 text-gray-700">
            <Menu className="w-8 h-8" />
          </button>
        </header>

        {/* Pink background section */}
        <div className="bg-pink-600 rounded-3xl p-6 pb-12 text-white relative overflow-hidden">
      {/* Date and time */}
      <div className="text-center mb-4">
        <h2 className="text-yellow-300 font-bold text-xl md:text-2xl tracking-wide">
          13TH AND 14TH MAY 2025 6:00 PM - 7:30 PM
        </h2>
      </div>

      {/* Main headline */}
      <div className="bg-white rounded-xl p-4 mb-2 mx-auto max-w-2xl">
        <h1 className="text-black font-extrabold text-2xl md:text-4xl text-center leading-tight">
          YOUR CHILD CAN START READING AT HOME - EVEN BEFORE AGE 3
        </h1>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mb-1">
        <div className="bg-yellow-300 px-6 py-2 rounded-lg transform rotate-1 shadow-md">
          <p className="font-black text-black text-xl">RESERVE YOUR SPOT - RS.499</p>
        </div>
      </div>

      {/* Proof text */}
      <p className="text-center text-white mb-6">(proof below)</p>

      {/* Side by side layout for image and description */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {/* Parent and child image - left side on desktop */}
      
        
        {/* Masterclass description - right side on desktop */}
        <div className="w-full md:w-1/3 flex items-center">
          <p className="text-white text-lg md:text-xl leading-snug">
            Join the World's Highest-Rated Online Masterclass (for Parents) Learn simple, science backed techniques to
            teach your child to read — in just 15 minutes a day.
          </p>
        </div>
          <div className="w-full">
          <div className="relative w-full h-64 md:h-80">
            <img
              src="./profile.png"
              alt="Parent and child reading together"
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>

        {/* Statistics bar */}
        <StatisticsBar />

        {/* Rating section */}
        <RatingSection />

        {/* Registration closing section */}
        <div className="text-center my-12">
          <h2 className="text-[#E91E63] font-bold text-3xl mb-2">REGISTRATION FOR THE NEXT</h2>
          <h3 className="text-black font-black text-3xl mb-8">MASTERCLASS CLOSES SOON</h3>

          {/* Countdown timer */}
          <CountdownTimer />

          {/* Bottom CTA button */}
          <div className="flex justify-center mt-12">
            <div className="bg-[#FFEB3B] px-6 py-3 rounded-lg transform rotate-1 shadow-md">
              <p className="font-black text-black text-xl">RESERVE YOUR SPOT - RS.499</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  )
}
