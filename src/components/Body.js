import ResCard from "./ResCard";
import resList from "../utils/MockData";
import { useState } from "react";


const Body =()=>
    {  //NOW HERE WE WIILL CREATE POWERFULL VARIABLE WITH USESTATE HOOK -- local state variable
     //if u want to update the list of res then it has to be done through setlist{you can name it anyting but 
     //the norm is to use setlist fo,llowed by anything u desire}

     /* this is a sample data
  let [listofRest, setlistofRes] = useState([
{  "info": {
    "id": "1003414",
    "name": "Pizza Hut",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/6513abee-f904-4a0e-9b49-90d1cc29551c_1003414.jpg",
    "costForTwo": "₹350 for two",
    "cuisines":["Pizzas"] ,
    "avgRating": 4.1,
    "avgRatingString": "4.1",
    "totalRatingsString": "57",
    "sla": 
    { "deliveryTime": 51,
    },
    }
},
{ "info": {
    "id": "1003415",
    "name": "Dominoes",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/6513abee-f904-4a0e-9b49-90d1cc29551c_1003414.jpg",
    "costForTwo": "₹350 for two",
    "cuisines":["Pizzas"] ,
    "avgRating": 3.8,
    "avgRatingString": "3.8",
    "totalRatingsString": "57",
    "sla": 
    { "deliveryTime": 45,
    },
    }
},
{  "info": {
    "id": "1003416",
    "name": "Mac D",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/6513abee-f904-4a0e-9b49-90d1cc29551c_1003414.jpg",
    "costForTwo": "₹350 for two",
    "cuisines":["BUrgers"] ,
    "avgRating": 4.5,
    "avgRatingString": "4.5",
    "totalRatingsString": "57",
    "sla": 
    { "deliveryTime": 75,
    },
    }
},]);
*/

        //THIS IS   A NORMAL JS VARIABLE 
       /*  let listofRest =[
        { "info": {
            "id": "1003414",
            "name": "Pizza Hut",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/6513abee-f904-4a0e-9b49-90d1cc29551c_1003414.jpg",
            "costForTwo": "₹350 for two",
            "cuisines":["Pizzas"] ,
            "avgRating": 4.1,
            "avgRatingString": "4.1",
            "totalRatingsString": "57",
            "sla": 
            { "deliveryTime": 51,
            },
            }
        },
        { "info": {
            "id": "1003415",
            "name": "Dominoes",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/6513abee-f904-4a0e-9b49-90d1cc29551c_1003414.jpg",
            "costForTwo": "₹350 for two",
            "cuisines":["Pizzas"] ,
            "avgRating": 3.8,
            "avgRatingString": "3.8",
            "totalRatingsString": "57",
            "sla": 
            { "deliveryTime": 45,
            },
            }
        },
        { "info": {
            "id": "1003416",
            "name": "Mac D",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/6513abee-f904-4a0e-9b49-90d1cc29551c_1003414.jpg",
            "costForTwo": "₹350 for two",
            "cuisines":["BUrgers"] ,
            "avgRating": 4.5,
            "avgRatingString": "4.5",
            "totalRatingsString": "57",
            "sla": 
            { "deliveryTime": 75,
            },
            }
        },
        ];
        */

// USING HTHE MOCK DATA
        let [listofRest, setlistofRes] = useState(resList);
        return( 
        <div className="body">
            
            <div className="filter">
                <button className="filter-btn" 
                onClick={()=>{
                    //Filter logic here
                    const filterList =listofRest.filter(
                        (res)=> res.info.avgRating>4
                    );
                    setlistofRes(filterList);

                 } }
                >Top Rated button</button>
            </div>
            <div className="res-container">
                {/*here we will put res-card component*/}
                
                {
       
     //using keys (not acceptable) <<index of key <<<< key as a uniue id from backend(best)
       listofRest.map( 
            (restaraunt) =>
            (<ResCard key={restaraunt.info.id} resData={restaraunt}/>))
        }
 
       </div>
    
        </div>
    
        )
    };
  
    export  default Body;