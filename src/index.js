import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import * as serviceWorker from './serviceWorker';

//git remote add origin https://github.com/arihant557/react.git

ReactDOM.render
(
   //created a fxn that will render i.e. createElement which has 3 arguments a) name of tag   b) any property   c) children or text

  React.createElement("h1" , {style:{color : "red"} } , "Working  on  it "),
  document.getElementById('root'),
  console.log("Hi")

);







//serviceWorker.unregister();
