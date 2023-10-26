import { CDN_URL } from "../utilis/constants";
const RestaurantCards=(props)=>{
    const {resData}=props;
   //  console.log(resData);
    const {cloudinaryImageId,name,avgRating,costForTwo}=resData?.info
   
      return(
         <div className="res-card">
   <img src={CDN_URL+cloudinaryImageId } className="card-img" alt="food-img"/>
   <h4>{name}</h4>
   <h5>{avgRating}</h5>
   <h5>{costForTwo}</h5>
   
         </div>
      )
   }
   export default RestaurantCards;