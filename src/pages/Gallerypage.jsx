// import { Header } from "../components/Header"
// import {Back} from "../components/Back"
// import { GetCats } from "../components/GetCats"
// // import { UploadImg } from "./Uploadpage"
// import {ReactComponent as Upload} from "../img/icon/upload.svg"
// import {ReactComponent as Update} from "../img/icon/update.svg"
// import { NavLink } from "react-router-dom"

const Gallery = () => {
   return (
      <>
         {/* <Header/>
         <div className="wrapper">
            <div className="page">
               <div className="nav__flex-container">
                  <div className="nav__left">
                     <div className="btn-red">
                        <Back />
                     </div>
                     <div className="page__title">GALLERY</div>
                  </div>
                  <NavLink to="/upload" className="nav__upload btn-red">
                     <Upload/>
                     UPLOAD
                  </NavLink>
               </div>

               <div className="sorting-list gray-container">
                  <div className="sorting-item">
                     <div className="sorting__title">ORDER</div>
                     <div className="sorting__select">
                        <select className="sortAPI" name="order">
                           <option value="1">Random</option>
                           <option value="2">Desc</option>
                           <option value="3">Asc</option>
                        </select>
                     </div>
                  </div>
                  <div className="sorting-item">
                     <div className="sorting__title">TYPE</div>
                     <div className="sorting__select">
                        <select className="sortAPI" name="type">
                           <option value="1">All</option>
                           <option value="2">Static</option>
                           <option value="3">Animated</option>
                        </select>
                     </div>
                  </div>
                  <div className="sorting-item">
                     <div className="sorting__title">BREED</div>
                     <div className="sorting__select">
                        <select className="sortAPI" name="breeds">
                           <option value="1">None</option>
                           <option value="2">Abyssinian</option>
                           <option value="3">Bengal</option>
                        </select>
                     </div>
                  </div>
                  <div className="sorting-item" style={{width: 'calc(50% - 70px)'}}>
                     <div className="sorting__title">LIMIT</div>
                     <div className="sorting__select">
                        <select className="sortAPI limit" name="limit">
                           <option value="1">5 items per page</option>
                           <option value="2">10 items per page</option>
                           <option value="2">15 items per page</option>
                           <option value="2">20 items per page</option>
                        </select>
                     </div>
                  </div>
                  <div className="white-container-icon">
                     <Update/>
                  </div>
               </div>
               <div className="page__img">
                  <GetCats/>
               </div>
            </div>
         </div> */}
      </>
   )
}

export {Gallery}