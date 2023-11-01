import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utilis/useRestaurantMenu";
import Shimmer from "./Shimmer"

    const RestaurantMenu = () => {
 
    const {resId} = useParams();
  

   const restInfo=useRestaurantMenu(resId)
    if (restInfo === null) {
        return <Shimmer />;
    }
    

    const { name, avgRating, cuisines } = restInfo?.data?.cards[0]?.card?.card?.info;

    const { itemCards } =
        restInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
console.log(restInfo);
    return (
        <div>
        <h1>{name}</h1>
        <p>{avgRating}</p>
        <p>{cuisines.join("-")}</p>
        <h1>Menu</h1>
        <ul>
            {itemCards.map((item) => (
            <li key={item.card.info.id}>{item.card.info.name}</li>
            ))}
        </ul>
        </div>
    );
    };

    export default RestaurantMenu;

