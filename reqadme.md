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