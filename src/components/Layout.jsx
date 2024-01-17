import { NavLink, Outlet } from "react-router-dom";

import imgVoting from '../img/img-1.png';
import imgBreeds from '../img/img-2.png';
// import imgGallery from '../img/img-3.png';
import '../App.css';

const setActive = ({isActive}) => isActive ? 'active' : '';

const Layout = () => {
   return (
      <div className="app">
         <main className='main'>
            <div className='left-container'>
               <div className="left-container__sticky">
                  
                  <div className='main-container'>
                     <h1 className='greetings'>Hi!👋</h1>
                     <p className='text-regular-20-grey text-welcome'>Welcome to my project</p>
                     <h2 className='text-medium-20'>Lets start using The Cat API</h2>
                     <div className='card__list'>
                        <NavLink  to="/voting" className={setActive}>
                           <div className='card__item'>
                              <img src={imgVoting} alt="voting" style={{backgroundColor: '#B4B7FF' }}/>
                                 <button className="btn">VOTING</button>
                           </div>
                        </NavLink>
                        <NavLink to="/breeds" className={setActive}>
                           <div className='card__item'>
                              <img src={imgBreeds} alt="breeds" style={{backgroundColor: '#97EAB9' }}/>
                              <button className='btn'>BREEDS</button>
                           </div>
                        </NavLink>
                        {/* <NavLink to="/gallery" className={setActive}>
                           <div className='card__item'>
                              <img src={imgGallery} alt="gallery" style={{backgroundColor: '#FFD280' }}/>
                              <button className='btn'>GALLERY</button>
                           </div>
                        </NavLink> */}
                     </div>
                  </div>
               </div>
            </div>
            <div className='right-container'>
               <Outlet/>
            </div>
         </main>
      </div>
   )
}

export {Layout}