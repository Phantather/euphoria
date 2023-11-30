import React from 'react';
import nike from "../../../assets/nike.png"
import hm from "../../../assets/h&m.png"
import levis from "../../../assets/levis.png"
import polo from "../../../assets/polo.png"
import puma from "../../../assets/puma.png"

const Brands = () => {
    return (
        <section className='brands'>
            <div className="container">
                <div className="brands__content">
                    <h2 className="brands__title">
                        Top Brands Deal
                    </h2>
                    <p className="brands__desc">
                        Up To <span>60%</span> off on brands
                    </p>
                    <div className="brands__row">
                        <div className="brands__card">
                            <img src={nike} alt=""/>
                        </div>
                        <div className="brands__card">
                            <img src={hm} alt=""/>
                        </div>
                        <div className="brands__card">
                            <img src={levis} alt=""/>
                        </div>
                        <div className="brands__card">
                            <img src={polo} alt=""/>
                        </div>
                        <div className="brands__card">
                            <img src={puma} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brands;