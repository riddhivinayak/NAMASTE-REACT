import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaaurantMenu"; // Custom hook to fetch restaurant menu data

const RestrauntMenu = () => {

 
   const {resId} = useParams(); // Extracting restaurant id from the URL
   
   const resinfo = useRestaurantMenu(resId); // Using custom hook to fetch restaurant menu data
   
    
  
 
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