import { useState } from "react"

const User =({name}) =>
{ let  [count,setcount] = useState(0);
     return(
    <div className="user">
        <h1>FUNCTIONAL BASED COMPONENT</h1>
        <h1>User</h1>
        <h2>Name : {name}</h2>
        <h2>Count : {count}</h2>
        <button onClick={()=>setcount(count+1)}>Click Me</button>
        <h2>Locaation : Noida</h2>
        <h2>Contact : riddhivinayak001@gmail.com</h2>
    </div>
)
    
}
export default User