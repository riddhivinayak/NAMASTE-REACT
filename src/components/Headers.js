  import { LOGO_URL } from "../utils/constants";
  import {  useEffect, useState } from "react";
  import { Link } from "react-router-dom";
  import useOnlineCheck from  "../utils/useOnlinecheck";
const  Header =() =>
    { //console.log("Header component")
      const [btnname,setbtnname] = useState("Login");
      const onlinevariable = useOnlineCheck();

//1
      //if no dependency array is passed, it will run on every render
     /* useEffect(()=>{
        console.log("useEffect is called");
      })*/


//2
 // if empty array is passed, it will run only once when the component is mounted
    //  useEffect(()=>{
    //    console.log("useEffect is called only once")
    //  },[]);

//3
//if dependency array is passed, it will run when the state variable is changed
  useEffect(()=>{
   // console.log("useEffect is called when btnname is changed")
   },[btnname]
   );



        return (

        <div className="flex justify-between items-center bg-pink-50 shadow-lg h-40">
          <div>
            <img  className="w-50 h-40" src = {LOGO_URL}/>
          </div>
             <div className="nav-items">
               <ul className="flex p-4 ">
                <li >Online Status ={onlinevariable ? "🟢":"🔴"}</li>
               <li className="px-4"><Link to="/home">Home</Link></li>
                 <li className="px-4"><Link to="/about" >About</Link></li>
                 <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                 <li className="px-4"> <Link to="/grocery">Grocery</Link></li> 
                 <li className="px-4"> <Link to="/cart">Cart</Link></li> 
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