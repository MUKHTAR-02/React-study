    import RestaurantCard from "./RestaurantCard";
    import { useState, useEffect } from "react";
    // import { RESLIST } from "../utils/constants";
    import Shimmer from "./Shimmer";

    const Body = () => {
        // state variables
        // const [restroList, setRestroList] = useState(RESLIST);
        const [restroListAll, setRestroListAll] = useState([]);    // Main data
        const [restroList, setRestroList] = useState([]);          // Temp data, which will be manipulated
        const [searchText, setSearchText] = useState("");

        // Normal JS variable
        // let restroList = RESLIST;

        console.log("React Rendering");

        // use effect
        useEffect(()=>{
            fetchData();
        }, []);

        const fetchData = async () => {
            try {
                const data = await fetch(
                    "https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.73091903725903&lng=75.92084568116466&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
                );
                const json = await data.json();
                console.log(json);
                console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
                setRestroListAll(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                setRestroList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

            } catch (error) {
                console.error("Error fetching data:", error);
            }   
        };

        //  Conditional Rendering
        if(restroListAll.length === 0) {
            // return <h1>Spinning Loading Amination...</h1>

            // shimmer ui
            return <Shimmer />;
        }

        return (
            <div className="body">
                <div className="filter">
                    <input className="input-text" type="text" placeholder="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button className="search-btn" onClick={() => {
                        const filteredRestroList =  restroListAll.filter(
                            (res) => res?.info?.cuisines?.join(", ")?.toLowerCase()?.includes(searchText.toLowerCase()));
                            setRestroList(filteredRestroList);
                    }}>Search
                    </button>

                    <button className="filter-restro" onClick={() => {
                        const filteredRestroList = restroListAll.filter(
                            (res) => res?.info?.avgRating > 4.2);
                        setRestroList(filteredRestroList);
                    }}> Top Rated Restros 
                    </button>
                </div>
                <div className="res-container"> {
                    restroList.map((res) => (
                        <RestaurantCard 
                            key = {res?.info?.id}
                            resData = {res}
                        />
                    ))} 
                </div>
            </div>
        );
    };

    export default Body;