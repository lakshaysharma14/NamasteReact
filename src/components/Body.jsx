import RestaurantCard  from "./RestaurantCard";
import { cartList } from "../../utils/cart-data";
import { useState } from "react";

const Body = () => {

  const [listOfRestaurants,setListOfRestaurants] = useState(cartList);

  // Handler function for Top Rated Restaurants filter button
  const handleFilterButtonClick = () => {
    const filteredList = listOfRestaurants.filter((res) => {
        return res.info.avgRating > 4.3
    });
    setListOfRestaurants(filteredList);
  };

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