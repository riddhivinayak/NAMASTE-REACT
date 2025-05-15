
import React, {lazy, Suspense} from "react";//calling lazy from react
import ReactDOM from "react-dom/client"
import Header from "./components/Headers";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About";
import ContactUs from  "./components/ContactUs";
import Error from "./components/Error";
import Cart from "./components/Cart";
import RestrauntMenu from "./components/RestrauntMenu";
//import Grocery from "./components/grocery"; now we will not import grocery like this

const Grocery= lazy(()=> import("./components/grocery"));//this will import the grocery component only when it is needed
//this is called code splitting
 const Applayout =() =>
 {
    return(
        <div className ="app">
       <Header/>
       <Outlet/>
        </div>
    )
 };

 const appRouter = createBrowserRouter([
    {path:"/",
        element:<Applayout/>,
        children:[
            {path:"/",
            element:<Body/>,

            } ,{
            path:"/about",
            element:<About/>
          },
          {
           path:"/contact",
           element:<ContactUs/>
          },
          { path:"/home",
            element:<Body/>,

            },
             {
            path:"/grocery",
            element:<Suspense fallback={<h1>loading</h1>}><Grocery/></Suspense>
         }
        ,
        {
            path:"/cart",
            element:<Cart/>
         }
        ,
    {///:resID will be dynamic id
        ///this is used to get the id of the restaurant from the url and use it to get the data  OF RESTARUANT
        ///and show the menu of the restaurant
        path:"/restaurant/:resId",
        element:<RestrauntMenu/>
    }],
        errorElement:<Error/>,
    },
   
 ])

const  root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);












