
 import User from './User';
import UserClass from './Userclass';
import React from 'react';
class About extends React.Component 
{ constructor(props) {
    super(props);
   // console.log(" Parent Constructor called");
    this.state = {
        count: 0,
    };
} 
componentDidMount() {
  //  console.log(" Parent Component Did Mount called");
 
}
render() {
  //  console.log(" Parent Render called");
    return (
        <div>
            <h1>About Us</h1>
        {// <User name={"RIDDHI (FUNCTION)"}></User>
        }
            <UserClass name ={"RIDDHI  (CLASS)"}></UserClass>
        </div>
    );
}

   
};

export default About;