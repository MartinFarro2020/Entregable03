const LocationInfo = ({currentLocation}) => {
  // console.log(currentLocation)
  return (
    <section className = "grid grid-cols-1 w-[280px] max-w-[898px] mx-auto p-2 gap-5 border-[#8EFF8B] border-2">
      <h2 className = "flex text-white text-xl font-bold justify-center items-center line-clamp-1">{currentLocation?.name}</h2>
      <ul className = "flex flex-col text-[#8EFF8B] px-[20px]">
        <li><span className="font-semibold text-yellow-500">Type      :</span>{currentLocation?.type}</li>
        <li className="line-clamp-1"><span className="font-semibold text-yellow-500">Dimension :</span>{currentLocation?.dimension}</li>
        <li><span className="font-semibold text-yellow-500">Population:</span>{currentLocation?.residents.length}</li>
      </ul>
    </section>
  )
}
export default LocationInfo