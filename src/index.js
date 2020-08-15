import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import * as serviceWorker from './serviceWorker';

                                            //git remote add origin https://github.com/arihant557/react.git

// dynamically ussage of city in h1 tag  #5 point.

// let city = "Delhi";

// now doing this same thing by making object of city

let city = {  
                 state: "Delhi",
                 country: "India"
            }



ReactDOM.render
(



          //     1
         //created a fxn that will render i.e. createElement which has 3 arguments a) name of tag   b) any property (by passing in object)  c) children or text
        //React.createElement("h1" , {style:{color : "red"} } , "Working  on  it ..."),




    //     2
   //rendering multiple elements just by makingg changes in children
  //React.createElement("h1" , {style:{color : "red"} } , React.createElement("p" , {style:{color : "green"} } , "progress")),
  




        //    3     making list
       // React.createElement("ul" , {style:{color : "red"} } , 
      // React.createElement("li" , null , "english"),
     // React.createElement("li" , null , "maths"),
    // React.createElement("li" , null , "science")),




      //////   jsx   ///// no need of elements and all babel is handling whole that thing

        //4
       // <ul>
      //   <li>burger</li>
     //   <li>pizza</li>
    //   <li>fries</li>
   // </ul>,

            

                  // 5
                  //<h1> {city} is the capital of India</h1>,

                  //done this by object...
                  <h1>{city.state} is the capital of {city.country}</h1>,
  
  
  
  document.getElementById('root'),
  console.log("Hi")

);


























//serviceWorker.unregister();
