import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

/*
    * Header
        - Logo
        - Nav Items
    * Body
        - Search
        - Restaurant Container
            - Restaurant Card
                - Img
                - Name of dish, Star Rating, Cuisine, Delivery time
    * Footer
        - Copyright
        - Link
        - Address
        - Contact
*/ 





const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);