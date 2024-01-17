import { Header } from "../components/Header"
import {Back} from "../components/Back"
// import Cats  from "../components/Cats"
import {ReactComponent as LikeWhite} from "../img/icon/like-white.svg"
import {ReactComponent as FavWhite} from "../img/icon/fav-white.svg"
import {ReactComponent as DisWhite} from "../img/icon/dis-white.svg"
import Like from "../img/Like.png"
import Favourite from "../img/Favourite.png"
import Dislike from "../img/Dislike.png" 
import { useState, useEffect } from "react";
import { TailSpin } from 'react-loader-spinner';
import axios from "axios"

const Voting = () => {

   const apiUrl = `https://api.thecatapi.com/v1/images/search`;
 
   const [cats, setCats] = useState(null);
   const [isLoading, setIsLoading] = useState(false);
 


  const requestCats = async () => {
    const headers = {
    "Content-Type": "application/json",
    "x-api-key": 'live_PWJOw8SyxzMsrHdd5OK78nN5m6kmAlSrACg9fzUfQ4NozK7eIDV5n9m4ZkagVU2E',
    };
 
    try {
      setIsLoading(true);
      
       const apiResponse = await fetch(apiUrl, { headers });
       const catsList = await apiResponse.json();
 
       setCats(catsList);
     } catch (error) {
       console.error(error.message);
     } finally {
       setIsLoading(false);
     }
   };
 
   useEffect(() => {
     requestCats();
   }, []);
 
   // const handleIdChange = (event) => {
   //  onunload(event.target.id, event.target.src);
   // }


   const [ImgSrc, setImgSrc] = useState('')
   
   function handleSetIdChange (ImgSrc) {
      setImgSrc(ImgSrc)
   }


   function handlerAddLog(item) {
      const logsList = document.querySelector('.logs-list')
      const currentHours = new Date().getHours();
      const currentMinutes = new Date().getMinutes();
      const currentTime = currentHours + ':' + currentMinutes;
      const id = item.target.id;

      const logItem = document.createElement('li');
      const time = document.createElement('span');
      const imageID = document.createElement('span');
      const imageReaction = document.createElement('img')
      const imgId = document.querySelector('.card__img').id
      logItem.classList.add("logs-item");

      const selectReaction = (id) => {
         const catAddFavouriteOptions = {
            headers: {
               "Content-Type": 'application/json',
               "x-api-key": 'live_PWJOw8SyxzMsrHdd5OK78nN5m6kmAlSrACg9fzUfQ4NozK7eIDV5n9m4ZkagVU2E',
            }
         };
         
         if (id === 'Like') {
            const data = {
               'image_id': imgId,
               'sub_id': 'my-user-6',
               'value': '1', 
            };
      
            axios.post(
               "https://api.thecatapi.com/v1/votes", 
               data, 
               catAddFavouriteOptions
            ).then(response => console.log(response.data))
            .catch((error) => {console.log('error')});

            return Like
         }
         if (id === 'Favourite') {
            const data = {
               'image_id': imgId,
               'sub_id': 'my-user-6' 
            };
      
            axios.post(
               "https://api.thecatapi.com/v1/favourites", 
               data, 
               catAddFavouriteOptions
            ).then(response => console.log(response.data))
            .catch((error) => {console.log('error')});

            return Favourite
         } 
         if (id === 'Dislike') {
            const data = {
               'image_id': imgId,
               'sub_id': 'my-user-7',
               'value': -1, 
            };
      
            axios.post(
               "https://api.thecatapi.com/v1/votes", 
               data, 
               catAddFavouriteOptions
            ).then(response => console.log(response.data))
            .catch((error) => {console.log('error')});

            return Dislike
         }
       }

      time.textContent = currentTime;
      imageID.textContent = `Image ID: ${imgId} was added to ${id}`;
      imageReaction.src = selectReaction(id)


      logItem.appendChild(time).classList.add('time');
      logItem.appendChild(imageID).classList.add('image-id');
      logItem.appendChild(imageReaction).classList.add('icon-react');

      logsList.prepend(logItem);

      handleSetIdChange(imgId, ImgSrc);

      requestCats();
    }
   

    
   return (
      <>
         <div className="voting">
            <Header /> 
         </div>
         <div className="wrapper">
            <div className="page">
               <div className="nav">
                  <div className="btn-red">
                     <Back />
                  </div>
                  <div className="page__title">VOTING</div>
               </div>
               <div className="page__img">
                  {isLoading ? (
                  <div className="flex-center">
                     <TailSpin color="#FF868E"/>
                  </div>
                  ) : cats ? (
                     <>
                        {cats.map((cat) => (
                        <div key={cat.id} className="h-100" >
                           <img  id={cat.id} className="card__img" src={cat.url} alt="cat" onLoad={handleSetIdChange} />
                        </div>
                        ))}
                     </>
                  ) : (
                     <h3 className="text-center text-danger fw-bold">
                        Impossible to retrieve cats
                     </h3>
                  )}
                  <ul className="btn-group">
                     <li key={Like} onClick={handlerAddLog} id="Like" className="btn-item _green">
                        <LikeWhite />
                     </li>
                     <li key={Favourite} onClick={handlerAddLog} id="Favourite" className="btn-item _red">
                        <FavWhite />
                     </li>
                     <li key={Dislike} onClick={handlerAddLog} id="Dislike" className="btn-item _yellow">
                        <DisWhite />
                     </li>
                  </ul>
               </div>
               <ul className="logs-list">
 
               </ul>
            </div>
         </div>
      </>
   )
}

export {Voting}