

import React from "react";
import ReactDOM from "react-dom/client"

/*
1--> HEADER 
  --LOGO 
  -- NAV ITEMS 
2--> BODY 
  -- SEARCH 
  -- RESTTARUNAT CONATINER 
     --RES-CARD
       --IMG
       --REVEIW ,NAME OF RES , CUSINIE, DELEIVERY TIME
 3--> FOOTTER 
  -- COPYRIGHT
  --LINKS
  -- ADDRESS
  --CONTRACT  
*/

const  Header =() =>
{
    return (
    <div className="header">
      <div>
        <img  className="logo"src ="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"/>
      </div>
         <div className="nav-items">
           <ul>
             <li>Home</li>
             <li>Aboutus</li>
             <li>Contact Us</li>
             <li>Cart</li> 
           </ul>
        </div>
      </div>

    
    )
}


const resList=[
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "1003414",
        "name": "Pizza Hut",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/6513abee-f904-4a0e-9b49-90d1cc29551c_1003414.jpg",
        "locality": "Chhindwara",
        "areaName": "Parasia Road",
        "costForTwo": "₹350 for two",
        "cuisines": [
        "Pizzas"
        ],
        "avgRating": 4.1,
        "parentId": "721",
        "avgRatingString": "4.1",
        "totalRatingsString": "57",
        "sla": {
        "deliveryTime": 51,
        "lastMileTravel": 13.8,
        "serviceability": "SERVICEABLE",
        "slaString": "50-55 mins",
        "lastMileTravelString": "13.8 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-04-10 23:00:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
        "context": "seo-data-4792851a-9e74-44d0-a9dd-42e05a59ac38"
        },
        "cta": {
        "link": "https://www.swiggy.com/city/chhindwara/pizza-hut-parasia-road-rest1003414",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "151656",
        "name": "Dev International",
        "cloudinaryImageId": "enj3srsnhbltbom2ovvh",
        "locality": "khajri road",
        "areaName": "Mohan Nagar",
        "costForTwo": "₹100 for two",
        "cuisines": [
        "North Indian",
        "Chinese",
        "Fast Food",
        "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "71556",
        "avgRatingString": "4.3",
        "totalRatingsString": "475",
        "sla": {
        "deliveryTime": 48,
        "lastMileTravel": 11.7,
        "serviceability": "SERVICEABLE",
        "slaString": "45-50 mins",
        "lastMileTravelString": "11.7 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-04-10 22:30:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "₹150 OFF",
        "subHeader": "ABOVE ₹399",
        "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
        "context": "seo-data-4792851a-9e74-44d0-a9dd-42e05a59ac38"
        },
        "cta": {
        "link": "https://www.swiggy.com/city/chhindwara/dev-international-khajri-road-mohan-nagar-rest151656",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "213358",
        "name": "Apni Rasoi Family Dhaba",
        "cloudinaryImageId": "sidigb8zqjfrfpkrtqgl",
        "locality": "Vishnu Nagar",
        "areaName": "Parasia Road",
        "costForTwo": "₹250 for two",
        "cuisines": [
        "Indian",
        "South Indian",
        "Chinese"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "35024",
        "avgRatingString": "4.3",
        "totalRatingsString": "1.3K+",
        "sla": {
        "deliveryTime": 45,
        "lastMileTravel": 13.9,
        "serviceability": "SERVICEABLE",
        "slaString": "45-50 mins",
        "lastMileTravelString": "13.9 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-04-10 23:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "v1695133679/badges/Pure_Veg111.png",
        "description": "pureveg"
        }
        ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "description": "pureveg",
        "imageId": "v1695133679/badges/Pure_Veg111.png"
        }
        }
        ]
        },
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {},
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "151649",
        "name": "Hotel Sai Nath & Sai Restaurant",
        "cloudinaryImageId": "vkhcohhmqfczycw9vsar",
        "locality": "railway station",
        "areaName": "Chhindwara Locality",
        "costForTwo": "₹200 for two",
        "cuisines": [
        "North Indian",
        "South Indian",
        "Chinese",
        "Beverages",
        "Fast Food",
        "Desserts"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "101802",
        "avgRatingString": "4.3",
        "totalRatingsString": "986",
        "sla": {
        "deliveryTime": 43,
        "lastMileTravel": 10.3,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "10.3 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-04-10 22:30:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "v1695133679/badges/Pure_Veg111.png",
        "description": "pureveg"
        }
        ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "description": "pureveg",
        "imageId": "v1695133679/badges/Pure_Veg111.png"
        }
        }
        ]
        },
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {},
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "618037",
        "name": "Jai Ganesh Bhojnalaya",
        "cloudinaryImageId": "yzgqriufpzmloogcn2vl",
        "locality": "Railway Colony",
        "areaName": "Bus stand",
        "costForTwo": "₹200 for two",
        "cuisines": [],
        "avgRating": 4,
        "veg": true,
        "parentId": "368432",
        "avgRatingString": "4.0",
        "totalRatingsString": "361",
        "sla": {
        "deliveryTime": 44,
        "lastMileTravel": 12.1,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "12.1 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-04-10 23:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "v1695133679/badges/Pure_Veg111.png",
        "description": "pureveg"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "description": "pureveg",
        "imageId": "v1695133679/badges/Pure_Veg111.png"
        }
        }
        ]
        },
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "₹50 OFF",
        "subHeader": "ABOVE ₹349",
        "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
        "context": "seo-data-4792851a-9e74-44d0-a9dd-42e05a59ac38"
        },
        "cta": {},
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "150586",
        "name": "Accord International",
        "cloudinaryImageId": "ntcsuou2650qimnkrc3m",
        "locality": "Parasia Road",
        "areaName": "Vishnu Nagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
        "South Indian",
        "Continental",
        "Beverages"
        ],
        "avgRating": 4.4,
        "parentId": "26828",
        "avgRatingString": "4.4",
        "totalRatingsString": "620",
        "sla": {
        "deliveryTime": 65,
        "lastMileTravel": 14.3,
        "serviceability": "SERVICEABLE",
        "slaString": "65-70 mins",
        "lastMileTravelString": "14.3 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-04-10 23:30:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {},
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "630193",
        "name": "Champaran  Handi Restaurant",
        "cloudinaryImageId": "xph0vf5pvbxjf8xchwjk",
        "locality": "Sinchai Colony",
        "areaName": "Nagpur road",
        "costForTwo": "₹200 for two",
        "cuisines": [
        "North Indian"
        ],
        "avgRating": 4.3,
        "parentId": "376324",
        "avgRatingString": "4.3",
        "totalRatingsString": "397",
        "sla": {
        "deliveryTime": 42,
        "lastMileTravel": 11.9,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "11.9 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-04-10 23:00:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹79"
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {},
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "584795",
        "name": "Chaska Cafe",
        "cloudinaryImageId": "uxgpy3bwmc5rsojmtw43",
        "locality": "Parasia Road",
        "areaName": "Chhindwara Locality",
        "costForTwo": "₹150 for two",
        "cuisines": [
        "Cafe",
        "Italian",
        "Chinese"
        ],
        "avgRating": 3.6,
        "veg": true,
        "parentId": "58237",
        "avgRatingString": "3.6",
        "totalRatingsString": "6",
        "sla": {
        "deliveryTime": 52,
        "lastMileTravel": 13,
        "serviceability": "SERVICEABLE",
        "slaString": "50-55 mins",
        "lastMileTravelString": "13.0 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-04-10 23:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "v1695133679/badges/Pure_Veg111.png",
        "description": "pureveg"
        }
        ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "description": "pureveg",
        "imageId": "v1695133679/badges/Pure_Veg111.png"
        }
        }
        ]
        },
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
        "context": "seo-data-4792851a-9e74-44d0-a9dd-42e05a59ac38"
        },
        "cta": {
        "link": "https://www.swiggy.com/city/chhindwara/chaska-cafe-parasia-road-chhindwara-locality-rest584795",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        }
    ]


const Body =()=>
{
    return( 
    <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
            {/*here we will put res-card component*/}
            
            {
   
 //using keys (not acceptable) <<index of key <<<< key as a uniue id from backend(best)
   resList.map( 
        (restaraunt) =>
        (<ResCard key={restaraunt.info.id} resData={restaraunt}/>))
}
        </div>

    </div>

    )
};

 const ResCard = (props)=>
 {   const {resData} = props;
    
 const {name,cuisines,avgRating,deliveryTime,cloudinaryImageId} =resData?.info;
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img alt="res-logo" className="res-img" src ={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
         
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <p>{avgRating}</p> <p>{deliveryTime + "mins"}</p>
           
        </div>
    )
 };
 const Applayout =() =>
 {
    return(
        <div className ="app">
       <Header/>
       <Body/>
        </div>
    )
 };


const  root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout></Applayout>);












