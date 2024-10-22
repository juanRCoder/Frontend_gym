import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../lib/CustomAccodion";
import { dataAccordeon } from "../../data/dataAccordeon";

function Accordeon() {
  const [active, setActive] = useState(false);

  return (
    <section className="py-20 relative z-50">
      <div className="max-w-7xl m-auto">
        <section className="flex flex-col w-fit my-10 mx-8 lg:mx-24">
          <div className="tracking-wide space-y-2 mb-16">
            <span className="block border-t-2 border-yellow w-[70%] rounded-md mb-6" />
            <p className="text-2xl sm:text-3xl text-white">
              PREGUNTAS <br />
              FRECUENTES
            </p>
          </div>
        </section>
        {dataAccordeon.map((FAQ) => (
          <Accordion key={FAQ.id} type="single" collapsible className=" mx-8 lg:mx-24">
            <AccordionItem
              value="item-1"
              className={`bg-dark mb-8 rounded-[19px] ${ active ? "rounded-[19px]" : "" }`}
              onClick={() => setActive(!active)}
            >
              <AccordionTrigger className="text-yellow text-2xl text-left sm:text-3xl font-medium py-6 px-5 flex flex-1 items-center justify-between">
                {FAQ.question}
              </AccordionTrigger>
              <AccordionContent className="bg-[#222932] px-6 sm:px-12 py-6 text-lg sm:text-[22px] text-white leading-9 rounded-b-[19px]">
                {FAQ.response}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  );
}

export default Accordeon;
