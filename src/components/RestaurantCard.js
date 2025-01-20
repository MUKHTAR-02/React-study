import { CLOUD_IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;   // Destructuring on the fly
    const {cloudinaryImageId, name, avgRating, cuisines, sla} = resData?.info;
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={CLOUD_IMG_URL + cloudinaryImageId} />
            
            <h3>{name}</h3>
            <h4>{cuisines?.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla.slaString}</h4>
        </div>
    );
};

export default RestaurantCard;