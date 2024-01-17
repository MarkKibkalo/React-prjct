import { useEffect, useState } from "react";
import { TailSpin } from 'react-loader-spinner';


const Cats = ({onLoad}) => {
  // const maximumCatsPerPage = 1;
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
 
   const handleIdChange = (event) => {
    onLoad(event.target.id, event.target.src);
    // requestCats();
   }
  //  requestCats()
   return (
     <>
        {isLoading ? (
        <div className="flex-center">
          <TailSpin color="#FF868E"/>
        </div>
        ) : cats ? (
          <>
            {cats.map((cat) => (
              <div key={cat.id} className="h-100" >
                <img  id={cat.id} className="card__img" src={cat.url} alt="cat" onLoad={handleIdChange} />
              </div>
            ))}
          </>
        ) : (
          <h3 className="text-center text-danger fw-bold">
            Impossible to retrieve cats
          </h3>
        )}
     </>
   );
 };
 
 export default Cats;
