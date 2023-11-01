import { CDN_URL } from "../utilis/constants";
const RestaurantCards=(props)=>{
    const {resData}=props;
   //  console.log(resData);
    const {cloudinaryImageId,name,avgRating,costForTwo}=resData?.info
   
      return(
         <div className="w-[300px] h-[350px] border-0 shadow-xl  text-start p-5 rounded-lg hover:scale-90 transition ease-in-out delay-150 hover:duration-500 cursor-pointer">
   <img src={CDN_URL+cloudinaryImageId } className="w-[270px] h-[200px] rounded-md " alt="food-img"/>
   <h4>{name}</h4>
   <h5>{avgRating}</h5>
   <h5>{costForTwo}</h5>
   
         </div>
      )
   }
   export default RestaurantCards;