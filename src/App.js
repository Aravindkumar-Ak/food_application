import React from "react";
import  ReactDOM  from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./../index.css"
import Contactus from "./components/Contactus";
import Error from "./components/Error";
import{ Header} from "./components/Header";
import Product from "./components/Product";
import RestaurantContainer from "./components/RestaurantContainer";
import RestaurantMenu from "./components/RestaurantMenu";
import RestaurentFooter from "./components/RestaurentFooter";
//jsx=>object(ReactElement)=>render Html element
// const title=<div><Header/></div>
const AppLayout=()=>{
   return(
      <>
<Header/>
<Outlet/>


      </>
   
   )}

const appRouter=createBrowserRouter([
  { path:"/",
   element:<AppLayout/>,
   
   children:[
      {
         path:"/",
         element:<RestaurantContainer/>
      },
      
      {

      path:"/product",
     element:<Product/>,
   },
   {
      path:"/contactus",
      element:<Contactus/>
   },{
      path:"/restaurants/:resId",
      element:<RestaurantMenu/>
   }
   
],

   
   errorElement:<Error/>
}
])








const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)