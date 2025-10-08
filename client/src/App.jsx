// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { createContext, useState } from "react";
import  { withRandomColor } from "../component";



function SayHello({name}) {
  return (
    <h1>Hello {name}</h1>
  )
}



const ColorFullHello = withRandomColor(SayHello)
function App() {
  
  return (
 
    <ColorFullHello name="mmad" />
    
  );
}
export default App;
