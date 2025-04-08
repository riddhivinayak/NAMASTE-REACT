/*
<div id="parent">

<div id="child">
<h1></h1>
<h2></h2>
</div>

<div id="child">
<h1></h1>
<h2></h2>
</div>

</div>
*/
const parent = React.createElement(
    "div",
    {id:"parent"}

    , [React.createElement("div"
        ,{id:"child"}

        ,[React.createElement(
            "h1",{},"iam an h1 tag"),
            React.createElement(
                "h2",{},"iam an h2 tag"),
            ])
            
            ,React.createElement("div"
                ,{id:"child2"}
        
                ,[React.createElement(
                    "h1",{},"iam an h1 tag"),
                    React.createElement(
                        "h2",{},"iam an h2 tag"),
                    ])]
        );



    const heading = React.createElement("h1",{id:"heading",xyz:"nothing"},"hello from react");
    console.log(heading)
    const root =ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);
    root.render(parent);
    console.log(parent);
