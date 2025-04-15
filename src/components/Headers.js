  import { LOGO_URL } from "../utils/constants";
  import { useState } from "react";
const  Header =() =>
    { console.log("Header component")
      const [btnname,setbtnname] = useState("Login")
        return (

        <div className="header">
          <div>
            <img  className="logo" src = {LOGO_URL}/>
          </div>
             <div className="nav-items">
               <ul>
                 <li>Home</li>
                 <li>Aboutus</li>
                 <li>Contact Us</li>
                 <li>Cart</li> 
                 <button className="login-btn"
                 onClick={()=>{
                  if(btnname === "Login")
                    {
                    setbtnname("Logout")
                    }else {
                      setbtnname("Login")
                    }
                
              
                 }}
                 >{btnname}
                 </button>
               </ul>
            </div>
          </div>
    
        
        )
    }
    
    export default Header;