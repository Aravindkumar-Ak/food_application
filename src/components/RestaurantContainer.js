import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

  return restList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-2 ">
      <div className="flex  px-6 mb-8 items-center">
        <div className="mr-11 ">
          <input
            type="text"
            value={inputText}
            placeholder="Search here"
            className="p-1 border-0 rounded-md border-slate-500 cursor-pointer "
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          />
       
          <button className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-1 px-4 ml-2 border border-blue-500 hover:border-transparent rounded-md" onClick={()=>{
            const searchFilter=restList.filter((filterres)=>filterres.info.name.toLowerCase().includes(inputText.toLowerCase()))
            setFilterRestList(searchFilter) 
          }}>Search</button>
        </div>
        <button
          className="bg-transparent hover:bg-black text-black text-sm font-bold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-md"
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
      <div className="grid grid-cols-4 gap-4 place-items-center">
        {filterRestList.map((restaurants) => (
        <Link to={`/restaurants/${restaurants.info.id}`} key={restaurants.info.id}><RestaurantCards resData={restaurants}  /></Link>
        ))}
      </div>
    </div>
  );
};
export default RestaurantContainer;
