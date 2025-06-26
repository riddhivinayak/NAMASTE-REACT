#namaste react by akashay
#parcel

// app structure 
- /*
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


--> types of export and import 
  ---1-- 
  default 
   export default <name>;
   import <named> from </location>;

   --2--
   named[used for more than one exports and import]
   export const <name> 
   export const <name2>

   import {<name>,<name2>,<name3< if needed >>} from <location>


 ===> WHY REACT MAKES A SINGLE PAGE APPLICATON --{SERVER SIDE ROUTING}

# THERE ARE TWO TYPES OF ROUTING IN WEBAPPS
-CLIENT SIDE ROUTING -->[NO NETWORK CALLS ARE MADE, ALL PPAGES ARE  ALREADY PRESENT FROM THE FIRST TIME IT LOADS  ]
-SERVER SIDE ROUTING -->[NETWORK CALLS ARE MADE FOR  EACH NEW PAGE THAT IS THE WHOLE HTML CODE IS FETCHED FOR EACH NEW PAGE ]

   
// resId =1003411

//safe copy of css file before tailwind
.header{
    display: flex;
    justify-content: space-between;
    border: 1px solid ;
}
.logo
{
    width: 150px;
}
.nav-items > ul
{
display: flex;
list-style-type: none;
font-size: 23px;
}

.nav-items > ul> li
{ 
    padding: 5px;
    margin: 20px;
    

}
.res-container
{  display: flex;
    margin: 5px;
    flex-wrap: wrap;

}
.res-card   
{ padding: 5px;
 margin:5px;
   width: 17vw;
   
}
.res-card:hover{ 
    border: 1px solid black;
    cursor: pointer;
    box-shadow: 12px 12px 2px 1px rgba(17, 17, 19, 0.2);
}
.search
{ 
    padding: 10px;
}
.res-img{
   height: 45%;
    width: 100%;
}

.filter-btn{
    margin: 10px;
    padding: 10px;
     cursor: pointer;
}
.shimmer-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 5px;
}
.shimmer-card{
    width: 17vw;
    height: 39vh;
    margin: 5px;
    padding: 5px;
    background-color: #f0f0f0;
  
}
.Search-btn{
    padding: 10px;
    margin: 10px;
    cursor: pointer;
}
.filter{ display: flex;

}
  .line a {
        color: #ff6600; /* change to any color you want */
        text-decoration: none; /* removes the underline */
      }
      

     .line a:hover {
            text-decoration: underline; /* adds the underline back on hover */
        color: red; /* change to any color you want */
     }

     .menu
     
     { margin-top: 5px;
        margin-left: 5px;
        padding: 5px;
        background-color: #f0f0f0;
     
     width: 60vb;
        background-color: beige;
   
        border: 1px solid black;
        padding: 10px;
     }
     .menuname{
       
        font-weight: bold;
        margin: 5px;
     }
     .reslink {
        color: #ff6600; /* change to any color you want */
        text-decoration: none; /* removes the underline */
      }
      .user
      {
       
        margin: 5px;
        padding: 5px;
        background-color: #fbcab1;
        width: 60vw;
        border: 1px solid black;
      }