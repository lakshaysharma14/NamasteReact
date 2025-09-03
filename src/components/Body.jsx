import RestaurantCard  from "./RestaurantCard";
import Shimmer from "./Shimmer"
import { SWIGGY_API_URL, TopRating } from "../../utils/constants";
import { useState, useEffect } from "react";

const Body = () => {

  const [listOfRestaurants,setListOfRestaurants] = useState([]);
  
  useEffect(()=>{
    console.log("useEffect :: fetchData");
    fetchData();
  },[]);
  
  const fetchData = async () => {
    try{
        const data = await fetch(SWIGGY_API_URL,{ cache: 'no-store',mode:'cors' });
        const json = await data.json();
        console.log("fetchData :: json-data :",json);
        await setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }catch(err){
        console.log("fetchData :: Error While Fetching Restaurants:",err);
    }
  };

  // Handler function for Top Rated Restaurants filter button
  const handleFilterButtonClick = () => {
    const filteredList = listOfRestaurants.filter((res) => {
        return res.info.avgRating > TopRating
    });
    setListOfRestaurants(filteredList);
  };
  
  if(listOfRestaurants.length === 0){
    console.log("Shimmer UI");
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={handleFilterButtonClick}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((res) => {
          return <RestaurantCard key={res.info.id} resData={res} />;
        })}
      </div>
    </div>
  );
};

export default Body;