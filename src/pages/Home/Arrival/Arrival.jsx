import React from 'react';
import img from '../../../assets/arrival.png'
const Arrival = () => {
    return (
        <section className="arrival">
            <div className="container">
                <h2 className="title">
                    New Arrival
                </h2>
                <div className="arrival__row">
                    <div className="arrival__card">
                        <img src={img} alt=""/>
                        <h3 className="arrival__card-title">
                            Knitted Joggers
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Arrival;