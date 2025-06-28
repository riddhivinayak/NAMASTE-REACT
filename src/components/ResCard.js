import { RESIMG_URL } from "../utils/constants";


const ResCard = (props)=>
    {   const {resData} = props;
       
    const {name,cuisines,avgRating,deliveryTime,cloudinaryImageId,sla} =resData?.info;
       return(
           <div className="p-3 m-3 w-[220px] break-words shadow-2xl bg-pink-50 hover:bg-pink-100 cursor-pointer" >
               <img className=" rounded-lg p-2 " alt="res-logo" src ={RESIMG_URL+cloudinaryImageId}/>
            
               <h3 className="font-bold py-2">{name}</h3>
               <h4>{cuisines.join(",")}</h4>
               <p>{avgRating}</p> 
               <p>{sla.deliveryTime + "mins"}</p>
              
           </div>
       )
    }
   export const WithPromotedLabel = (ResCard) => {
        return (props) => {
            return (
                <div className="Open">
                    <span className="absolute bg-pink-100 text-black font-mono p-1 m-2 rounded-lg">Promoted</span>
                    <ResCard {...props} />
                </div>
            );
        };
    };
    export default ResCard;