import React from 'react';
import Begin from "./Begin/Begin";
import Low from "./Low/Low";
import Arrival from "./Arrival/Arrival";
import Saving from "./Saving/Saving";
import Made from "./Made/Made";
import MenCategories from "./MenCategories/MenCategories";
import WomenCategories from "./WomenCategories/WomenCategories";
import Brands from "./Brands/Brands";

const Home = () => {
    return (
        <>
            <Begin/>
            <Low/>
            <Arrival/>
            <Saving/>
            <Made/>
            <MenCategories/>
            <WomenCategories/>
            <Brands/>
        </>
    );
};

export default Home;