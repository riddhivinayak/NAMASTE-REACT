import { RESIMG_URL } from "../utils/constants";


const ResCard = (props)=>
    {   const {resData} = props;
       
    const {name,cuisines,avgRating,deliveryTime,cloudinaryImageId,sla} =resData?.info;
       return(
           <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
               <img alt="res-logo" className="res-img" src ={RESIMG_URL+cloudinaryImageId}/>
            
               <h3>{name}</h3>
               <h4>{cuisines.join(",")}</h4>
               <p>{avgRating}</p> 
               <p>{sla.deliveryTime + "mins"}</p>
              
           </div>
       )
    };
    export default ResCard;