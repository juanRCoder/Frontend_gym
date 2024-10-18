import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
import { string } from "prop-types"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item 
    ref={ref} 
    className={className} 
    {...props} 
  />
))
AccordionItem.displayName = "AccordionItem"

// Customizar header del acordeon
const AccordionTrigger = React.forwardRef(({ className, children }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={`transition-all [&[data-state=open]>svg]:rotate-180 ${className}`}
    >
      {children}
    {/* ICON SVG */}
    <ChevronDown className="h-9 w-9 ml-5 sm:h-14 sm:w-14 font-bold shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

// Customizar contenido del acordeon
const AccordionContent = React.forwardRef(({ className, children }, ref) => (
  <AccordionPrimitive.Content 
    ref={ref} 
    className="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
  >
  <div className={className}>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName


AccordionItem.propTypes = {
  className: string,
};
AccordionTrigger.propTypes = {
  className: string,
  children: string
};
AccordionContent.propTypes = {
  className: string,
  children: string
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }