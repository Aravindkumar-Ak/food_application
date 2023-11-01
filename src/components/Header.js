import { LOGO_URL } from "../utilis/constants";
export const Header=()=>(
    <nav className="w-full  bg-blue-400 h-[83px] px-8 mb-8 sticky top-0 z-50 ">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
       <div >
 <img className="w-32 pt-2" src={LOGO_URL} alt="food-img"/>
       </div>
       <div className="">
 <ul className="flex justify-between font-medium text-lg">
    <li className="mr-4">Product</li>
    <li  className="mr-4">Contact Us</li>
    <li  className="mr-4">About Us</li>
    <li>Cart</li>
 </ul>
       </div>
       </div>
  </nav>
  
 )

 export default Header;