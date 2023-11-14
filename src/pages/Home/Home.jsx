import React from 'react';
import Begin from "./Begin/Begin";
import Low from "./Low/Low";
import Arrival from "./Arrival/Arrival";
import Saving from "./Saving/Saving";
import Made from "./Made/Made";

const Home = () => {
    return (
        <>
            <Begin/>
            <Low/>
            <Arrival/>
            <Saving/>
            <Made/>
        </>
    );
};

export default Home;