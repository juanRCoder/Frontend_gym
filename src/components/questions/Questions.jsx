// import { FlatESLint } from 'eslint/use-at-your-own-risk';
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
function Questions({question , response}) {

  return (
    <>
      <Accordion className="bg-black" type="single" collapsible>
        <AccordionItem value="item-1" className='bg-dark mb-4 cursor-pointer rounded-md w-[100%] ' >
          <AccordionTrigger className="text-[color:var(--yellow)] text-3xl font-bold ml-4 oswald-medium">{question} </AccordionTrigger>
          <AccordionContent className="p-3 text-2xl text-[color:var(--white)]">
            {response}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  )
}


export default Questions
