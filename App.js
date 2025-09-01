import React from "react";
import ReactDOM from "react-dom/client";
import { cartList } from "./utils/cart-data";
import { imageEndpoint } from "./utils/app-constants";


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://pentagram-production.imgix.net/702b9844-190a-4d98-b95c-6b818fb6c3c6/djs_popeyes_01.jpg?auto=compress%2Cformat&crop=entropy&fit=crop&fm=jpg&h=470&q=80&rect=215%2C99%2C1671%2C1043&w=900" alt="Company Logo"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
        
    )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {cartList.map((res) => {
          return <RestaurantCard key={res.info.id} resData={res} />;
        })}
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
    const { name, cuisines, avgRatingString, sla, cloudinaryImageId} = props.resData.info;

    return (        
        <div className = "res-card">
            <img 
                className="res-logo"
                src={imageEndpoint+cloudinaryImageId}
                alt="res-logo"
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRatingString}⭐️</h4>
            <h4>{sla.slaString}</h4>    
        </div>        
    );    
};



const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);