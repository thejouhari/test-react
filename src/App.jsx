
import Navbar from "./components/Navebar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Counter from "./components/counter/Counter";

import { useState } from "react";

function App() {

  let [count,setCount] = useState(0)

  const changeCount = ()=>{
    setCount(count+1);
    console.log(count);
  }

  return(
    <>
    <button onClick={changeCount} >AbdelFattah Jouhari {count}</button>
    </>
  )

};

export default App;



