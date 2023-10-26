import { useEffect, useState } from "react";
import RestaurantCards from "./RestaurantCards";
import Shimmer from "./Shimmer";

const RestaurantContainer = () => {
  const [restList, setRestList] = useState([]);
  const [inputText, setInputText] = useState("");
  const[filterRestList,setFilterRestList]=useState([])
  useEffect(() => {
    console.log("useeffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setRestList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )
    setFilterRestList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return filterRestList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="res-container">
      <div className="search-bar">
        <div className="search-box">
          <input
            type="text"
            value={inputText}
            placeholder="Search here"
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          />
       
          <button className="search-btn" onClick={()=>{
            const searchFilter=restList.filter((filterres)=>filterres.info.name.toLowerCase().includes(inputText.toLowerCase()))
            setFilterRestList(searchFilter) 
          }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = restList.filter(
              (list) => list.info.avgRating > 4
            );
          setFilterRestList(filterList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="rescards-container">
        {filterRestList.map((restaurants) => (
          <RestaurantCards resData={restaurants} key={restaurants.info.id} />
        ))}
      </div>
    </div>
  );
};
export default RestaurantContainer;
