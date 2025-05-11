//THIS IS A CLASS BASED COMPONENT
import React from 'react';

class UserClass extends React.Component
{ constructor(props)
     { super(props);
       // console.log("Constructor called");
      this.state = {
           userinfo: {
            name: "John Doe",
            location: "default",          
            avatar_url : "https://via.placeholder.com/150",
           },
        };
        
}
async componentDidMount()
{ //console.log("Component Did Mount called");

     const data = await fetch("https://api.github.com/users/akshaymarch7");
     const json = await data.json();
     console.log(json);
   this.setState({
        userinfo: json,
             });
}       
    render()
    { 
  const{name, location,
avatar_url} = this.state.userinfo;
        return(
          //  console.log("Render called"),
        
            <div className="user">
            <h1>CLASS BASED COMPONENT</h1>
            <h1>User</h1>
            <h2>name: {name}</h2>
            <h2>location: {location}</h2>
            <img src={avatar_url} alt="User Avatar" />
          
            
        </div>
        );
    }
}

export default UserClass;
