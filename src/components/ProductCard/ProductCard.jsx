import React from 'react';
import cat from '../../assets/cat.png'
import { CiHeart } from "react-icons/ci";
const ProductCard = () => {
    return (
        <div className="card">
            <div className="card__block">
                <span className='card__block-fav'>
                    <CiHeart size={20}/>
                </span>
                <img src={cat} alt="card" className="card__block-img"/>
            </div>
            <div className="card__bottom">
                <p className="card__bottom-text">
                    Black Shorts
                    <span>
                        MM’s  Brand
                    </span>
                </p>
                <p className="card__bottom-price">
                    $37.00
                </p>
            </div>
        </div>
    );
};

export default ProductCard;