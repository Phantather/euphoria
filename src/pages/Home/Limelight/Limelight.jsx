import React from 'react';
import ProductCard from "../../../components/ProductCard/ProductCard";

const Limelight = () => {
    return (
        <section className="limelight">
            <div className="container">
                <h2 className="title">
                    In The Limelight
                </h2>
                <div className="limelight__row">
                    <ProductCard/>
                </div>
            </div>
        </section>
    );
};

export default Limelight;