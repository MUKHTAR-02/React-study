import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const {resId} = useParams();    // this will return us an object that's y we wrote resId in {} braces
    console.log(resId);

    // handling api fetching (by creating a custom hook)
    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null) return <Shimmer />; 

    // always destructure on fly after writing the null condition, or you will get the error
    const {name, cuisines, costForTwoMessage} = resInfo?.cards?.[2]?.card?.card?.info;
    const resMenu = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards;
    
    return (
        <div>
            <h1> {name} </h1>
            <p> {cuisines.join(", ") } - {costForTwoMessage} </p>
            <h3>Menu</h3>
            <ul>
                {resMenu.map((item) => (
                    <li key={item.card.info.id}> {item.card.info.name} - Rs.{item.card.info.price/100} </li>    
                ))}
            </ul>
        </div>
    );
}

export default RestaurantMenu;