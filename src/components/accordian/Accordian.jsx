import {createContext, useContext, useState} from  'react'
import AccordianItem from './AccordianItem';
import AccordionContent from './AccordionContent';
import AccordionTitle from './AccordionTitle';

const AccordianContext =createContext();

export function useAccordianContext(){
    const ctx =useContext(AccordianContext)
    if(!ctx){
        throw new Error("Accordion-related components must be wrapped by <Accordion/>")
    }
    return ctx;
}

export default function Accordian({children ,className }){
  const [openItemId ,setOpenItemId] =  useState()



       function toggleItem(id){
        setOpenItemId(prevId=>prevId === id ? null :id)
        
       
       }

        const contextValue ={
            openItemId,
         toggleItem,
        };

    
    return (
        <>
       <AccordianContext.Provider value={contextValue}>
       <ul className={className}>
        {children}
        </ul>
       </AccordianContext.Provider>
        </>
    )
}

Accordian.Item = AccordianItem;
Accordian.Title =AccordionTitle;
Accordian.Content =AccordionContent;
