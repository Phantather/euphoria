import React from 'react';
import { BsArrowDown } from "react-icons/bs";

const Saving = () => {
    return (
        <section className="saving">
            <div className="container">
                <h2 className="title">
                    Big Saving Zone
                </h2>
                <div className="saving__row">
                    <div className="saving__card saving__card_first">
                        <h3 className="saving__card-title">
                            Hawaiian
                            Shirts
                        </h3>
                        <p className="saving__card-desc">
                            Dress up in summer vibe
                        </p>
                        <p className="saving__card-sale">
                            UPTO 50% OFF
                        </p>
                        <div className="saving__card-arrow">
                            <BsArrowDown style={{color: 'white'}}/>
                        </div>
                        <button className="saving__card-btn">
                            SHOP NOW
                        </button>
                    </div>
                    <div className="saving__card saving__card_second">
                        <button className="saving__card-limit">
                            Limited Stock
                        </button>
                        <h3 className="saving__card-title">
                            Printed
                            T-Shirt
                        </h3>
                        <p className="saving__card-desc">
                            New Designs Every Week
                        </p>
                        <p className="saving__card-sale">
                            UPTO 40% OFF
                        </p>
                        <div className="saving__card-arrow">
                            <BsArrowDown style={{color: 'white'}}/>
                        </div>
                        <button className="saving__card-btn">
                            SHOP NOW
                        </button>
                    </div>
                    <div className="saving__card saving__card_third">
                        <h3 className="saving__card-title black">
                            Cargo
                            Joggers
                        </h3>
                        <p className="saving__card-desc black">
                            Move with style & comfort
                        </p>
                        <p className="saving__card-sale black">
                            UPTO 50% OFF
                        </p>
                        <div className="saving__card-arrow">
                            <BsArrowDown/>
                        </div>
                        <button className="saving__card-btn btnBlack">
                            SHOP NOW
                        </button>
                    </div>

                    <div className="saving__cardHalf saving__cardHalf_first">
                        <h3 className="saving__card-title black">
                            Urban
                            Shirts
                        </h3>
                        <p className="saving__card-desc black">
                            Live In Confort
                        </p>
                        <p className="saving__card-sale black">
                            FLAT 60% OFF
                        </p>
                        <div className="saving__card-arrow">
                            <BsArrowDown/>
                        </div>
                        <button className="saving__card-btn btnBlack">
                            SHOP NOW
                        </button>
                    </div>
                    <div className="saving__cardHalf saving__cardHalf_second">
                        <h3 className="saving__card-title black">
                            Oversized
                            T-Shirts
                        </h3>
                        <p className="saving__card-desc black">
                            Street Style Icon
                        </p>
                        <p className="saving__card-sale black">
                            UPTO 60% OFF
                        </p>
                        <div className="saving__card-arrow">
                            <BsArrowDown/>
                        </div>
                        <button className="saving__card-btn btnBlack">
                            SHOP NOW
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Saving;