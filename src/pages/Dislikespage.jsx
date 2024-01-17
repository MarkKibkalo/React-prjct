import { Header } from "../components/Header"
import {Back} from "../components/Back"
import { useEffect, useState } from "react"
import axios from "axios"
import { catOptions } from "../options"
import "../components/CatsSelect.css";


const Dislikes = () => {
   const [Dislikes, setDislikes] = useState(null)
   const [DislikesList, setDislikesList] = useState([])

   const fetchData = () => {
      axios.get(
         `https://api.thecatapi.com/v1/votes?sub_id=my-user-7`,
         catOptions,
      ).then((response) => setDislikes(response.data))
   }

   const pupulateArray = () => {
      Dislikes?.map((dislike) => {
         axios.get(`https://api.thecatapi.com/v1/images/${dislike.image_id}`,
         catOptions  
         ).then((response) => 
            setDislikesList((fulldata) => [...fulldata, response.data]));
      })
   }

   useEffect(() => {
      fetchData();
      pupulateArray();
   }, [])

   console.log(Dislikes)

   return (
      <>
         <Header/>
         <div className="wrapper">
            <div className="page">
               <div className="nav">
                  <div className="btn-red">
                     <Back />
                  </div>
                  <div className="page__title">DISLIKES</div>   
                  <button className="page__title" onClick={pupulateArray}>LOAD DISLIKES</button>     
               </div>
               <div className="favourites__page">
                  {DislikesList.slice(0, 12).map((DislikeItem) => (
                     <img className="cat-image" 
                        src={DislikeItem.url}
                        alt="cat"
                        key={DislikeItem.id}>
                     </img>
                  ))}
               </div>
            </div>
         </div>
      </>
   )
}

export {Dislikes}