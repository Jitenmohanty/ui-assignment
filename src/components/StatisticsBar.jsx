export default function StatisticsBar() {
  return (
    <div className="bg-white rounded-xl border-2 border-[#E91E63] p-4 -mt-6 relative z-20 mx-4">
      <div className="grid grid-cols-3 divide-x divide-gray-200">
        <div className="px-2 text-center">
          <h3 className="text-[#E91E63] font-bold text-3xl md:text-4xl">100+</h3>
          <p className="text-gray-700 text-sm md:text-base">Cities Around the World</p>
        </div>
        <div className="px-2 text-center">
          <h3 className="text-[#E91E63] font-bold text-3xl md:text-4xl">10,000+</h3>
          <p className="text-gray-700 text-sm md:text-base">Parents Attended</p>
        </div>
        <div className="px-2 text-center">
          <h3 className="text-[#E91E63] font-bold text-3xl md:text-4xl">2000+</h3>
          <p className="text-gray-700 text-sm md:text-base">Kids Became Fabreaders</p>
        </div>
      </div>
    </div>
  )
}
