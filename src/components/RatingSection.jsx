import { Star } from "lucide-react"

export default function RatingSection() {
  return (
    <div className="bg-emerald-400 w-full py-6 px-4 my-8 rounded-lg">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="bg-white p-1 m-0.5">
              <Star className="w-6 h-6 text-emerald-400 fill-emerald-400" />
            </div>
          ))}
        </div>
        <div className="flex items-baseline">
          <span className="text-black font-bold text-2xl md:text-3xl">Excellent 4.7</span>
          <span className="text-black ml-2">out of 5</span>
        </div>
      </div>
      <p className="text-center text-black text-sm mt-2">BASED ON 800 REVIEWS</p>
    </div>
  )
}
