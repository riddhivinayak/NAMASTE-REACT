import ResCard from "./ResCard";
import resList from "../utils/MockData";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body =()=>

    {   
        //whenevr state variable 
       // console.log("Body component");
// USING HTHE MOCK DATA
        const [listofRest, setlistofRes] = useState([]);

        //copy for filtered restaurants 
        const [filteredRestList, setFilteredResList] = useState([]);
       
         const [searchText, setSearchText] = useState("");

        useEffect(()=>{
          fetchData();
        },
        []);

        const fetchData = async () => {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.971599&lng=77.594566&page_type=DESKTOP_WEB_LISTING");
        

        const json = await data.json();
     //   console.log(json);

        //optinal chaining
     setlistofRes(json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants);
     setFilteredResList(json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants);
        };
       
        
// showing loading screen is not a good practice better is using shimmmer or skeleton loader
//condtional rendering
     if(listofRest.length===0){ 
        
     return <Shimmer></Shimmer>;  
         } ;
            return( 
        <div className="body">
         
            <div className="filter">

               <div className="Search-btn"> 
              
                <input type="text" placeholder="Search for Restraunts" 
                className="search-box"
                 value={searchText} 
                 onChange={(e)=>{ 
                
                    setSearchText(e.target.value);
                 }}
                 />
               
               <button onClick={()=>
                {  
                   
                    
                    console.log(searchText);
                    //Filter logic here
                     
                    //note we are  keeing the listofRest as it is and no changes are done to this and only the filtered 
                    //list is changed and we are using the filtered list to show the data
                    //this is done to keep the original data intact and not to change it
                    const filterList =
                    listofRest.filter(
                        (restaraunts)=> restaraunts.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );

                    if(filterList.length===0){
                        alert("No Restraunts found");
                    }
                    setFilteredResList(filterList);
                             
                }
               } >Search</button>
             </div>  



                <button className="filter-btn" 
                onClick={()=>{
                    //Filter logic here
                    const filterList =listofRest.filter(
                        (restaraunts)=> restaraunts.info.avgRating>4
                    );
                    setFilteredResList(filterList);

                 } }
                >Top Rated button</button>
            </div>
            <div className="res-container">
                {/*here we will put res-card component*/}
                
             {//using keys (not acceptable) <<index of key <<<< key as a uniue id from backend(best)
       
     
                 filteredRestList.map
                     ( 
                     (restaraunts) =>
                        (
                      <Link className="reslink" to={"/restaurant/"+restaraunts.info.id} key={restaraunts.info.id}><ResCard  resData={restaraunts}/></Link>
                    ))
        
             }
       </div>
    
        </div>
    
        )
    };
  
    export  default Body;