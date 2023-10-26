import { LOGO_URL } from "../utilis/constants";
export const Header=()=>(
    <nav>
       <div className="nav-logo">
 <img className="food-logo" src={LOGO_URL} alt="food-img"/>
       </div>
       <div className="nav-items">
 <ul>
    <li>Product</li>
    <li>Contact Us</li>
    <li>About Us</li>
    <li>Cart</li>
 </ul>
       </div>
  </nav>
  
 )

 export default Header;