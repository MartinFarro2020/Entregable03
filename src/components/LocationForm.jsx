const LocationForm = ({handleSubmit}) => {
    
  return (
    <section className="grid grid-cols-1 justify-center bg-[url('/image/bg-header.png')] items-center mx-w-[1200px]">

      <section className="flex flex-col items-center">
        <img className="relative min-w-fit h-64" src="/images/portal04.gif"/>
        {/* animate-spin transiton duration-1000 */}
        <img className="absolute w-72 h-28 mt-14" src="/images/logo.png"/>
      </section>
      <div className="flex flex-col justify-center items-center gap-4">
          <form onSubmit={handleSubmit} className="flex-row w-76 h-12 border-[#8EFF8B] border-2">
                <input className="text-white bg-black w-52 outline-none" min={1} max={126} id="newLocation" placeholder="Type a location id...(1-126)" type="number"  />
                <button className="bg-[#8EFF8B80] w-16 h-11">search</button>
          </form>
          <h2 className="py-4 text-[#8EFF8B] text-[17px] font-firacode">¡Welcome to the crazy universe!</h2> 
      </div>
          
      
        
    </section>
  )
}
export default LocationForm

