import ResCard from "./ResCard";
import resList from "../utils/MockData";



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
 
 
  {  // RUNNING SECOND LOOP FOR MORE CARDS
 
    resList.map( 
            (restaraunt) =>
            (<ResCard key={restaraunt.info.id} resData={restaraunt}/>))
    }
            </div>
    
        </div>
    
        )
    };
  
    export  default Body;