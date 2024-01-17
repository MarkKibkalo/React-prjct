import {ReactComponent as ArrowBack} from "../img/icon/arrow-back.svg"
import { useNavigate } from "react-router-dom"


const Back = () => {
   const navigate = useNavigate()

   const goBack = () => navigate(-1)
   
   return (
      <ArrowBack onClick={goBack}/>
   )

}

export {Back}