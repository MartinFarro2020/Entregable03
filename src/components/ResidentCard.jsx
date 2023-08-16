import axios from "axios";
import { useEffect, useState } from "react"

const ResidentCard = ({residentUrl}) => {
    const [residentInfo, setResidentInfo] = useState(null)
    useEffect(() => {
      axios
        .get(residentUrl)
        .then(({data}) => setResidentInfo(data))
        .catch((err) => console.log(err));
    }, [])
    
    const residentStatus ={
      Alive:"bg-green-500",
      Dead: "bg-red-500",
      unknown:"bg-slate-50"

    }

  return (
    <article className="grid grid-cols-1">
        <header className="border-[#8EFF8B] border-2 rounded-t-md">
            <section className="flex flex-col items-center align-bottom">
              <img className="relative h-full w-full object-cover" src={residentInfo?.image} alt=""/>
              <section className="absolute flex justify-center items-center w-[120px] h-[25px] bg-black border-[#8EFF8B] border-2 mt-60 gap-2">
                  <div className={`h-[10px] aspect-square bg-green-500 rounded-full ${residentStatus[residentInfo?.status]}`}></div>
                  {residentInfo?.status} 
              </section>
            </section>
            
        </header>
        <section className="p-2 py-4 border-[#8EFF8B] border-2 rounded-b-lg">
            <h3 className="px-2 text-l text-center font-firacode">{residentInfo?.name}</h3>
            <ul className="px-2">
                <li><span className="text-[#8EFF8B]">Species  </span>     {residentInfo?.species}</li>
                <li><span className="text-[#8EFF8B]">Origin </span>       {residentInfo?.origin.name}</li>
                <li><span className="text-[#8EFF8B]">Times appear</span>  {residentInfo?.episode.length}</li>
            </ul>
        </section>
    </article>
  )
}
export default ResidentCard