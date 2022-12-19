import React from 'react'
import CardList from "../pages/api/data";


function Blog() {
  return (
    <>

<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
            {CardList.map((card) => (
             <div className=" container mx-auto w-3/4  flex-col  sm:ml-32 font-spectral  sm:pl-0 font-medium flex flex-row gap-4 mt-12 overflow-x-scroll no-scrollbar text-mygrey ">
             <a target="_blank" rel="noreferrer" href="https://astralcodexten.substack.com/p/microaddictions"><div className="font-spectral font-medium text-lg md:text-xl cursor-pointer hover:opacity-60 transition-all  sm:ml-13  sm:pl-0 ">{card.title}</div></a>
            
             <div className="font-spectral  sm:ml-13  sm:pl-0  font-medium text-base md:text-lg opacity-50">{card.author}r</div>
             </div>
          ))}
          </div>
       
    </>
  )
}

export default Blog