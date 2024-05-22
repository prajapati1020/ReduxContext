import { useRef, useState } from "react"

export default function SearchAbleList({items ,itemKeyFn,children}){
    const lastChange =useRef()
       const [searchTerm ,setSearchTerm] =useState('');

       const searchResults =items.filter((item)=> JSON.stringify(item).toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))

       function handleChange(event){
       if(lastChange.current){
        clearTimeout(lastChange.current)
       }


       lastChange.current = setTimeout(()=>{

        lastChange.current =null//for remove the storage
        setSearchTerm(event.target.value)
       },500)
       }


    return <div className="searchable-list">
        <input type="search" onChange={handleChange} placeholder="Search"/>
        <ul>
            {searchResults.map((item )=>(
                <li key={itemKeyFn(item)}>
                   {children(item)}
                </li>
            ))}
        </ul>

    </div>
}