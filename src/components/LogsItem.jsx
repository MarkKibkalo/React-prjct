import {ReactComponent as LikeWhite} from "../img/icon/like-white.svg"


const LogsItem = () => {
   

   return (
      <div className="logs-item">
         <div className="time">22:35</div>
         <div className="image-id">Image ID: fQSunHvl8 was added to Favourites</div>
         <div className="react"></div>
         <div className="icon-react">
            <LikeWhite fill="red" />
            {/* <FavWhite fill="red" />
            <DisWhite fill="red" /> */}
         </div>
      </div>
   )
}

export {LogsItem} 