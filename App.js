import React from "react";
import  ReactDOM  from "react-dom/client";
import "./App.css"
import{ Header} from "./src/components/Header";
import RestaurantContainer from "./src/components/RestaurantContainer";
import RestaurentFooter from "./src/components/RestaurentFooter";
//jsx=>object(ReactElement)=>render Html element
// const title=<div><Header/></div>






const AppLayout=()=>{
   return(
      <div className="App">
<Header/>
<RestaurantContainer/>
<RestaurentFooter/>

      </div>
   )
}




const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>);