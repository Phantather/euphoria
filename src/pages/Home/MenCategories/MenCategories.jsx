import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
import cat from '../../../assets/cat.png'
const MenCategories = () => {
    return (
        <section className="categories">
            <div className="container">
                <h2 className="title">Categories For Men</h2>
                <div className="categories__row">
                    <div className="categories__card">
                        <img src={cat} alt="" className="categories__card-img"/>
                        <div className="categories__card-bottom">
                            <p className="categories__card-cat">
                                Shirts
                                <span>
                                    Explore Now!
                                </span>
                            </p>
                            <a href="" className="categories__card-link">
                                <IoIosArrowRoundForward />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MenCategories;