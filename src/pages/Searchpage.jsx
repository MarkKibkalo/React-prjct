import { useState } from "react"
import { Header } from "../components/Header"
import {Back} from "../components/Back"


const Search = () => {
   const [text, setText] = useState('')
   const handleTextChange = (text) => {
      setText(text); 
   }
   return (
      <>
         <Header onChange={handleTextChange}/>
         <div className="wrapper">
            <div className="page">
               <div className="nav">
                  <div className="btn-red">
                     <Back />
                  </div>
                  <div className="page__title">SEARCH</div>     
                  </div>
               <div className="page__img">
                  <div className="text-regular-20-grey">Search results for: {text}</div>
                  <div className="grid__list">
                     {/* <div className="grid__item-1 grid__item"><Cats /></div>
                     <div className="grid__item-2 grid__item"><Cats /></div>
                     <div className="grid__item-3 grid__item"><Cats /></div>
                     <div className="grid__item-4 grid__item"><Cats /></div>
                     <div className="grid__item-5 grid__item"><Cats /></div> */}
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export {Search}