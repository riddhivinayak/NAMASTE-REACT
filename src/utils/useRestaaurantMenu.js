 import { useState, useEffect } from "react";
 import{MENU_RES_API} from "../utils/constants"; 

 const useRestaurantMenu = (resId) => {
    const [resinfo, setresinfo] = useState(null);
//  console.log(resId);
    useEffect( () => {

      fetchMenu();
     
    }, []);


  const fetchMenu = async () => {

    const data = await fetch(MENU_RES_API + resId); // Fetching the menu data from the API using the restaurant id

    const json = await data.json();
      setresinfo(json.data); // Setting the fetched data to state

   // console.log(json);
  };


  return resinfo;
};

export default useRestaurantMenu;
// This custom hook fetches the restaurant menu data from the API using the restaurant id