import { useAccordianContext } from "./Accordian"
export default function AccordionTitle({id ,className,children}){
    const {toggleItem} = useAccordianContext();
    return (
        <>
         <h3 className={className}
          onClick={()=>toggleItem(id)}>{children}</h3>
        </>
    )
}