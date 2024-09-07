// import { FlatESLint } from 'eslint/use-at-your-own-risk';
import React, { useEffect, useState } from 'react'
import { HiChevronRight, HiChevronDown } from "react-icons/hi";
function Questions() {
  const [IsFaqsOne, setIsFaqsOne] = useState(true)
  const [IsFaqsTwo, setIsFaqsTwo] = useState(true)
  const [IsFaqsThree, setIsFaqsThree] = useState(true)


  const handleDown = (e) => {
    let Faqs = e.currentTarget
    if (Faqs.id == "faqs-1") {
      let faqs = e.currentTarget
      IsFaqsOne ? faqs.className = "w-11/12 flex flex-col items-center justify-between overflow-y-hidden bg-slate-800 h-48" : faqs.className = 'w-11/12 flex flex-col items-center justify-between overflow-y-hidden bg-slate-800 h-11 '

      IsFaqsOne ? setIsFaqsOne(false) : setIsFaqsOne(true)
    }
    if (Faqs.id == "faqs-2") {
      let faqs = e.currentTarget
      IsFaqsTwo ? faqs.className = "w-11/12 flex flex-col items-center justify-between overflow-y-hidden bg-slate-800 h-48" : faqs.className = 'w-11/12 flex flex-col items-center justify-between overflow-y-hidden bg-slate-800 h-11 '
      IsFaqsTwo ? setIsFaqsTwo(false) : setIsFaqsTwo(true)
    }
    if (Faqs.id == "faqs-3") {
      let faqs = e.currentTarget
      IsFaqsThree ? faqs.className = "w-11/12 flex flex-col items-center justify-between overflow-y-hidden bg-slate-800 h-48" : faqs.className = 'w-11/12 flex flex-col items-center justify-between overflow-y-hidden bg-slate-800 h-11 '

      IsFaqsThree ? setIsFaqsThree(false) : setIsFaqsThree(true)
    }
  }
  return (
    <article className='min-h-screen flex justify-center'>
      <section className='w-11/12'>

        <section className='ml-4 mt-12'>
          <div className='w-20 h-0.5 bg-amber-300'></div>
          <h3 className='text-5xl font-bold mt-3'>preguntas frecuentes</h3>
        </section>
        <section className='mt-8 ml-4 h-4/5 flex flex-col gap-3 ' >
          <section id='faqs-1' onClick={(e) => handleDown(e)} className='w-11/12  flex flex-col items-center justify-between overflow-y-hidden bg-slate-800 h-11' >
            <div className='flex items-center justify-between w-full pt-2 '> <h3 className='text-yellow-300 text-2xl font-bold ml-4'>¿listo para transformar tu vida?</h3> {IsFaqsOne ? <HiChevronRight fontSize={30} color='yellow' /> : <HiChevronDown fontSize={30} color='yellow' />}  </div>
            <div className='bg-slate-600  rounded-b-lg mt-2 '> <p className='p-3 z-10 text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum reiciendis, explicabo ad molestiae est sequi dolore aliquam voluptatibus nisi expedita id officia esse adipisci, aspernatur quia! Nobis maiores officiis consectetur!</p> </div>
          </section>

          <section id='faqs-2' onClick={(e) => handleDown(e)} className='w-11/12 flex flex-col items-center justify-between overflow-y-hidden bg-slate-800 h-11 ' >
            <div className='flex items-center justify-between w-full  pt-2'> <h3 className='text-yellow-300 text-2xl font-bold ml-4'>¿listo para transformar tu vida?</h3> {IsFaqsTwo ? <HiChevronRight fontSize={30} color='yellow' /> : <HiChevronDown fontSize={30} color='yellow' />}  </div>
            <div className='bg-slate-600  rounded-b-lg mt-2'> <p className='p-3 text-2xl z-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum reiciendis, explicabo ad molestiae est sequi dolore aliquam voluptatibus nisi expedita id officia esse adipisci, aspernatur quia! Nobis maiores officiis consectetur!</p> </div>
          </section>

          <section id='faqs-3' onClick={(e) => handleDown(e)} className='w-11/12 flex flex-col items-center justify-between overflow-y-hidden bg-slate-800 h-11 ' >
            <div className='flex items-center justify-between w-full  pt-2'> <h3 className='text-yellow-300 text-2xl font-bold ml-4'>¿listo para transformar tu vida?</h3> {IsFaqsThree ? <HiChevronRight fontSize={30} color='yellow' /> : <HiChevronDown fontSize={30} color='yellow' />}  </div>
            <div className='bg-slate-600 rounded-b-lg mt-2'> <p className='p-3 text-2xl z-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum reiciendis, explicabo ad molestiae est sequi dolore aliquam voluptatibus nisi expedita id officia esse adipisci, aspernatur quia! Nobis maiores officiis consectetur!</p> </div>
          </section>
        </section>


      </section>
    </article>
  )
}

export default Questions
