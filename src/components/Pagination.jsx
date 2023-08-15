const Pagination = ({pages,setCurrentPage,currentPage}) => {
  return (
    <section className="grid grid-cols-1 w-[280px] max-w-[898px] mx-auto pt-7 pb-10">
        <ul className="flex gap-5 items-center">
            {
              pages.map((page) => (<li className={`${currentPage === page && "text-xl font-bold text-black bg-[#38f532] w-8 h-8 px-[11px] py-[2px] rounded-full"}`} onClick={() => setCurrentPage(page)} key={page}>{page}</li>))
            }
         </ul>
    </section>
    
  )
}
export default Pagination