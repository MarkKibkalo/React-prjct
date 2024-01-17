import { Header } from "../components/Header"
// import Cats  from "../components/Cats"
import { CatsSelect } from "../components/CatsSelect"




const Breeds = () => {
   return (
      <>
         <Header/>
         <div className="wrapper">
            <div className="page">
               <CatsSelect />
            </div>
         </div>
      </>
   )
}

export {Breeds}