

import React from "react";
import ReactDOM from "react-dom/client"


//React.createElement=>ReactElement object=>HTMLelement(render)
//const heading= React.createElement("h1",{},"hello namaste react");
//console.log(heading);

//creatng jsx element[note this whole code is transpiled before it reaches the js engine ] -- this is done by parcel by Babel
//jsx=> babel transplies it => React.createElement =>ReactElemrnt -js object =>htmlelemrnt(render)

const jsxheading = (<h1 id ="jsx">
hello world thi is jsx
</h1>);

console.log(jsxheading);

//REACT COMPONETS
//1=> CLASS COMPONENT(OLD) ,2=>  FUNCTIONAL COMPONENT (NEW)
//FUNCTIONAL COMPONENT

// const Fn1 = () => true;
//const Fn2= ()=>{ return true ;};

// COMPONENT COMNPOSTION 
const Titile =() => "hello this is titile"


 const  Headingcomponet =()   =>  ( <div>
 <Titile/>
 <h1 className="abc">hello from fucntional component</h1>
 </div>
 );

//{ any js code } you can put and use to put element inside or element iside compoent etc

const elem = <span>React ele</span>

const  Exaample =()   =>  ( <div>
   {elem}
    <h1 className="abc">hello from fucntional component 222</h1>
    </div>
    );

//const Headingcomponet = ()=> { return <h1>namste from functional componet </h1>}

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
//root.render(jsxheading);
root.render(<Headingcomponet/>);
//root.render(<Exaample/>);