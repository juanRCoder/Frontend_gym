import React, { useState } from 'react'
import Questions from './questions/Questions'

function Accordeon() {

  const [FAQS , useFAQ] = useState([
    {
        id : 1,
        question : "¿Listo para transformar tu vida?" ,
        response: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis veniam magni modi harum ea illum veritatis saepe at nisi odio, ratione sint quos aut error maiores distinctio assumenda earum molestias!"
    },
    {
        id : 2,
        question : "¿Listo para transformar tu vida?" ,
        response: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis veniam magni modi harum ea illum veritatis saepe at nisi odio, ratione sint quos aut error maiores distinctio assumenda earum molestias!"
    },
    {
        id : 3,
        question : "¿Listo para transformar tu vida?" ,
        response: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis veniam magni modi harum ea illum veritatis saepe at nisi odio, ratione sint quos aut error maiores distinctio assumenda earum molestias!"
    }
])


  

  return (
    <div className='bg-black pt-[96px] pb-[50px]'>
      <section className='max-w-6xl m-auto'>

      <section className='flex flex-col  h-24 w-11/12 sm: mb-6'>
          <div className='w-28 border-t-[3px] border-yellow '></div>
          <h3 className='text-4xl font-bold text-left mt-3 text-white '>PREGUNTAS FRECUENTES</h3>
     </section>
  {
    FAQS.map( FAQ => <Questions key={FAQ.id} question={FAQ.question} response={FAQ.response}/> )
  }
      </section>
    </div>
  )
}

export default Accordeon;