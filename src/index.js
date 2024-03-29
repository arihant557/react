import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import * as serviceWorker from './serviceWorker';

                                          /////git remote add origin https://github.com/arihant557/react.git

// dynamically ussage of city in h1 tag  #5 point.

// let city = "Delhi";


// now doing this same thing by making object of city
// let city = {  
//                  state: "Delhi",
//                  country: "India"
//             };


//--------------------------------------------------


//here comes in work of components from point number 6 before that we were workng in the elements
//component is basically a function which return some  ui   or for building user interface
// RULE OF COMPONENT is the first letter should be capital always....otherwise error will come
// function Hello()
// {
//   return (
//     <div>
//   <h1>Welcome to react !</h1>
//   <p>Let's build</p>
//   </div>
//   );  
// }



   ////  7)  properties or props
  // Props, or properties, is an object in React that contains properties about the component.
 // With props we can display dynamic data within a component. 
 function Hello(props){
                                                       //Object.keys() method returns an array of a given object's here op is ["library", "message", "numbers"]
  console.log(Object.keys(props));
   return (
     <div>
   <h1>This is {props.library}</h1>
   <p>{props.message}</p>  
   <h3>{props.numbers} total props</h3>
   <h3>{Object.keys(props).length} total props</h3>
   </div>
   );  
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
                  //<h1 id="heading" className="text">{city.state} is the capital of {city.country}</h1>,
  


    // 6
    // so here hello as added as a jsx tag...in render
    //<Hello></Hello>,

   //self closing tag
   //7) passing the attribute of the object in this tag and this library props will except dynamic values like : vue 
   <Hello
    library="vue" 
    message="Having fun"
    numbers={3}
    />,

  
  
  document.getElementById('root'),
  console.log("running in console")

);


























//serviceWorker.unregister();
