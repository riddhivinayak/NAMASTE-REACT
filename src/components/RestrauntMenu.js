import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import{MENU_RES_API} from "../utils/constants"; 

const RestrauntMenu = () => {

  const [resinfo, setResInfo] = useState(null);
   const {resId} = useParams(); // Extracting restaurant id from the URL
  console.log(resId);
    useEffect(() => {

      fetchMenu();
     
    }, []);


  const fetchMenu = async () => {

    const data = await fetch(MENU_RES_API + resId); // Fetching the menu data from the API using the restaurant id

    const json = await data.json();

    console.log(json);

    setResInfo(json.data);
    
  };
 
  if(resinfo === null) return <Shimmer />;
  const {name,costForTwoMessage,avgRatingString, cuisines  } = resinfo?.cards[2]?.card?.card?.info;

  const {itemCards}=resinfo
  ?.cards?.[4]
  ?.groupedCard
  ?.cardGroupMap
  ?.REGULAR
  ?.cards?.[6]
  ?.card?.card;
 
    return (
        <div className="menu">
     
                <div>
                    <h1>{name}</h1>
                    <h2>{costForTwoMessage}</h2>
                    <h3>{cuisines.join(", ")}</h3>
                    <h3>{avgRatingString}</h3>

                    <h2>Menu</h2>
                    <ul>
                    {itemCards?.map(item =>

                    <li key={item?.card?.info?.id}>
                     <i className="menuname"> {item?.card?.info?.name}</i> -
                     {"Rs"} 
                     {item?.card?.info?.price/100}
                      ***||{item?.card?.info?.description}
                      <br></br>
                      </li>

                    )}
                    </ul>
                
                   
                </div>
          
        </div>
    );
 
}
export default RestrauntMenu;