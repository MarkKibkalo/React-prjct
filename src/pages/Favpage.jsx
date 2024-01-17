import { Header } from "../components/Header"
import {Back} from "../components/Back"
import { useEffect, useState } from "react"
import axios from "axios"
import { catOptions } from "../options"
import "../components/CatsSelect.css";


const Fav = () => {
   const [favourites, setFavourites] = useState(null)
   const [favouritesList, setFavouritesList] = useState([])

   const fetchData = () => {
      axios.get(
         `https://api.thecatapi.com/v1/favourites?sub_id=my-user-6`,
         catOptions,
      ).then((response) => setFavourites(response.data))
   }

   const pupulateArray = () => {
      favourites?.map((favourite) => {
         axios.get(`https://api.thecatapi.com/v1/images/${favourite.image_id}`,
         catOptions  
         ).then((response) => 
            setFavouritesList((fulldata) => [...fulldata, response.data]));
      })
   }

   useEffect(() => {
      fetchData();
      pupulateArray();
   }, [])

   console.log(favourites)
   return (
      <>
         <Header/>
         <div className="wrapper">
            <div className="page">
               <div className="nav">
                  <div className="btn-red">
                     <Back />
                  </div>
                  <div className="page__title">FAVORITES</div>     
                  
                  <button className="page__title" onClick={pupulateArray}>LOAD FEVOURITES</button>     
                  </div>
               <div className="favourites__page">
                  {favouritesList.slice(0, 10).map((favouriteItem) => (
                     <img className="cat-image" 
                        src={favouriteItem.url}
                        alt="cat"
                        key={favouriteItem.id}>
                     </img>
                  ))}
               </div>
            </div>
         </div>
      </>
   )
}

export {Fav}