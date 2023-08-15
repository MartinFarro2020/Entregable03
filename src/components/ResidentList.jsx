import { useState } from "react"
import ResidentCard from "./ResidentCard"
import Pagination from "./Pagination"

const ResidentList = ({residents}) => {

  const [currentPage, setCurrentPage] = useState(1)

  //!Cantidad de residentes por pagina
  const RESIDENTS_PER_PAGE =20;

  //!Cantidad total de paginas
  const totalPages = Math.ceil(residents.length/RESIDENTS_PER_PAGE)

  //!Residentes que se van a mostrar en la pagina actual
  const sliceStart = (currentPage -1) * RESIDENTS_PER_PAGE
  const sliceEnd = sliceStart + RESIDENTS_PER_PAGE
  const residentsInPage = residents.slice(sliceStart,sliceEnd)

  //!Generacion del arrelo de las paginas que se van a mostrar
  const pages=[]
  for(let i=1; i <= totalPages; i++){
    pages.push(i)
  }

  return (
    <section>
      <section className="pt-10 grid gap-8 justify-center grid-cols-[repeat(auto-fill,280px)] max-w-[898px] mx-auto">
      {
        residentsInPage.map((resident) => <ResidentCard key={resident} residentUrl={resident}/>)
      }
      </section>

      <Pagination 
      pages={pages} setCurrentPage={setCurrentPage} 
      currentPage={currentPage}/>
    </section>
  )
}
export default ResidentList