import { Header } from "../components/Header"
import {Back} from "../components/Back"
import { useEffect, useState } from "react"
import axios from "axios"
import { catOptions } from "../options"
import "../components/CatsSelect.css";


const Likes = () => {
   const [Likes, setLikes] = useState(null)
   const [LikesList, setLikesList] = useState([])

   const fetchData = () => {
      axios.get(
         `https://api.thecatapi.com/v1/votes?sub_id=my-user-6`,
         catOptions,
      ).then((response) => setLikes(response.data))
   }

   const pupulateArray = () => {
      Likes?.map((like) => {
         axios.get(`https://api.thecatapi.com/v1/images/${like.image_id}`,
         catOptions
         ).then((response) => 
            setLikesList((fulldata) => [...fulldata, response.data]))
            .catch((error) => console.log("error value"));
      })
   }

   useEffect(() => {
      fetchData();
      pupulateArray();
   }, [])

   const res = LikesList.filter(function(item){
      return item.value = 1;
   })
   console.log(res, "true")



   return (
      <>
         <Header/>
         <div className="wrapper">
            <div className="page">
               <div className="nav">
                  <div className="btn-red">
                     <Back />
                  </div>
                  <div className="page__title">LIKES</div>   
                  <button className="page__title" onClick={pupulateArray}>LOAD LIKES</button>     
               </div>
               <div className="favourites__page">
                  {
                     res.slice(0, 10).map((LikeItem) => (
                  
                     <img className="cat-image" 
                        src={LikeItem.url}
                        alt="cat"
                        key={LikeItem.id}
                        value={LikeItem.value}>
                     </img>
                  ))
                  }
               </div>
            </div>
         </div>
      </>
   )
}

export {Likes}