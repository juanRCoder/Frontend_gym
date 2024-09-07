// import { FlatESLint } from 'eslint/use-at-your-own-risk';
import React, { useEffect, useState } from 'react'
import { HiChevronRight, HiChevronDown } from "react-icons/hi";
import '../assets/styles/App.css'
import '../assets/styles/index.css'
function Questions() {
  const [IsFaqsOne, setIsFaqsOne] = useState(true)
  const [IsFaqsTwo, setIsFaqsTwo] = useState(true)
  const [IsFaqsThree, setIsFaqsThree] = useState(true)


  const handleDown = (e) => {
    let Faqs = e.currentTarget
    if (Faqs.id == "faqs-1") {
      let faqs = e.currentTarget
      IsFaqsOne ? faqs.className = "rounded-md w-11/12 flex flex-col items-center overflow-y-hidden bg-dark h-48" : faqs.className = 'rounded-md w-11/12 flex flex-col items-center justify-between overflow-y-hidden bg-dark h-12'

      IsFaqsOne ? setIsFaqsOne(false) : setIsFaqsOne(true)
    }
    if (Faqs.id == "faqs-2") {
      let faqs = e.currentTarget
      IsFaqsTwo ? faqs.className = "rounded-md w-11/12 flex flex-col items-center justify-between overflow-y-hidden bg-dark h-48" : faqs.className = 'rounded-md w-11/12 flex flex-col items-center justify-between overflow-y-hidden bg-dark h-12 '
      IsFaqsTwo ? setIsFaqsTwo(false) : setIsFaqsTwo(true)
    }
    if (Faqs.id == "faqs-3") {
      let faqs = e.currentTarget
      IsFaqsThree ? faqs.className = "rounded-md w-11/12 flex flex-col items-center justify-between overflow-y-hidden bg-dark h-48" : faqs.className = 'rounded-md w-11/12 flex flex-col items-center justify-between overflow-y-hidden bg-dark h-12 '

      IsFaqsThree ? setIsFaqsThree(false) : setIsFaqsThree(true)
    }
  }
  return (
    <article className='min-h-screen flex justify-center bg-black '>
      <section className='w-11/12'>

        <section className='ml-4 mt-12'>
          <div className='w-20 h-0.5 bg-[color:var(--yellow)]'></div>
          <h3 className='text-4xl font-bold mt-3 text-white'>PREGUNTAS FRECUENTES</h3>
        </section>
        <section className='mt-8 ml-4 h-4/5 flex flex-col gap-3 ' >
          <section  id='faqs-1' onClick={(e) => handleDown(e)} className='cursor-pointer rounded-md w-11/12  flex flex-col items-center justify-between overflow-y-hidden bg-dark h-11' >
            <div className='flex items-center justify-between w-full p-1 '> <h3 className='text-[color:var(--yellow)] text-3xl font-bold ml-4 oswald-medium'>¿listo para transformar tu vida? </h3> {IsFaqsOne ? <HiChevronRight fontSize={30} className='text-[color:var(--yellow)] pt-1'/> : <HiChevronDown className='text-[color:var(--yellow)]' fontSize={30}  />}  </div>
            <div className='bg-[#222932] rounded-b-lg mt-2 h-60'> <p className='p-3 z-10 text-2xl text-[color:var(--white)]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum reiciendis, explicabo ad molestiae est sequi dolore aliquam voluptatibus nisi expedita id officia esse adipisci, aspernatur quia! Nobis maiores officiis consectetur!</p> </div>
          </section>

          <section id='faqs-2' onClick={(e) => handleDown(e)} className='cursor-pointer rounded-md w-11/12 flex flex-col items-center justify-between overflow-y-hidden bg-dark h-11 ' >
            <div className='flex items-center justify-between w-full  pt-1'> <h3 className='text-[color:var(--yellow)] text-3xl font-bold ml-4 oswald-medium '>¿listo para transformar tu vida?</h3> {IsFaqsTwo ? <HiChevronRight fontSize={30}  className='text-[color:var(--yellow)] pt-1' /> : <HiChevronDown fontSize={30} className='text-[color:var(--yellow)]' />}  </div>
            <div className='bg-[#222932]  rounded-b-lg mt-2 h-60'> <p className='p-3  text-2xl z-10 text-[color:var(--white)]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum reiciendis, explicabo ad molestiae est sequi dolore aliquam voluptatibus nisi expedita id officia esse adipisci, aspernatur quia! Nobis maiores officiis consectetur!</p> </div>
          </section>

          <section id='faqs-3' onClick={(e) => handleDown(e)} className='cursor-pointer rounded-md w-11/12 flex flex-col items-center justify-between overflow-y-hidden bg-dark h-11 ' >
            <div className='flex items-center justify-between w-full  pt-1'> <h3 className='text-[color:var(--yellow)] text-3xl font-bold ml-4 oswald-medium '>¿listo para transformar tu vida?</h3> {IsFaqsThree ? <HiChevronRight fontSize={30} className='text-[color:var(--yellow)] pt-1' /> : <HiChevronDown fontSize={30} className='text-[color:var(--yellow)]' />}  </div>
            <div className='bg-[#222932] rounded-b-lg mt-2 h-3/4'> <p className='p-3  text-2xl z-10 text-[color:var(--white)]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum reiciendis, explicabo ad molestiae est sequi dolore aliquam voluptatibus nisi expedita id officia esse adipisci, aspernatur quia! Nobis maiores officiis consectetur!</p> </div>
          </section>
        </section>


      </section>
    </article>
  )
}


export default Questions
