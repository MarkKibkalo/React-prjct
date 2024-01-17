import {ReactComponent as Search} from "../img/icon/search.svg"
import {ReactComponent as Likes} from "../img/icon/link-likes.svg"
import {ReactComponent as Fav} from "../img/icon/link-favourites.svg"
import {ReactComponent as Dislikes} from "../img/icon/link-dislikes.svg"
import logo from '../img/logo.svg';
import { NavLink } from "react-router-dom";

const Header = ({onChange}) => {
   const handleTextChange = (event) => {
      onChange(event.target.value);
   }

   return (
      <nav className="nav space-between">
         <div className='logo-container'>
                     <NavLink to="/">
                        <img src={logo} className="logo" alt="logo" />
                     </NavLink>
         </div>
         <NavLink to="/search" className="nav__search">
            <input 
                  onChange={handleTextChange}
                  type="search" 
                  placeholder="Search for breeds by name"/>
            <div className="btn-red _search"><Search/></div>
         </NavLink>
         <div className="nav__link-list">
            <NavLink to="/likes" className="nav__link-item">
               <Likes/>
            </NavLink>
            <NavLink to="/favorites" className="nav__link-item">
               <Fav/>
            </NavLink>
            <NavLink to="/dislikes" className="nav__link-item">
               <Dislikes/>
            </NavLink>
         </div>
      </nav>
      
   )
}

export {Header} 