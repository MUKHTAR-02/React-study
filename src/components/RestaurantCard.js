import { RES_URL } from "../utils/constants";

                            // key = {res.id}
                            // resName = {res.name}
                            // cuisine = {res.cuisines}
                            // rating = {res.avgRating}
                            // img = {res.cloudinaryImageId}

const RestaurantCard = (props) => {
    const {resData} = props;   // Destructuring on the fly
    const {cloudinaryImageId, name, avgRating, cuisines } = resData?.info;
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={RES_URL} />
            
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{avgRating}</h4>
            <h4>38 minutes</h4>
        </div>
    );
};

export default RestaurantCard;