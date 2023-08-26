import React from 'react';

const Low = () => {
    return (
        <section className="low">
            <div className="container">
                <div className="low__row">
                    <div className="low__left">
                        <p className="low__price">Low Price</p>
                        <h2 className="low__title">High Coziness</h2>
                        <p className="low__sale">UPTO 50% OFF</p>
                        <a href="" className="low__explore">Explore Items</a>
                    </div>
                    <div className="low__right">
                        <p className="low__price">Beyoung Presents</p>
                        <h2 className="low__title">Breezy Summer <br/> Style</h2>
                        <p className="low__sale">UPTO 50% OFF</p>
                        <a href="" className="low__explore">Explore Items</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Low;