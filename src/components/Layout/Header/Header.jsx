import React from 'react';
import {Link, NavLink} from "react-router-dom";
import logo from '../../../assets/logo.svg'
import {AiOutlineHeart, AiOutlineUser, AiOutlineShoppingCart} from "react-icons/ai"
import {GrUserAdmin} from "react-icons/gr"


const Header = () => {

    const user = localStorage.getItem("user") !== null ? JSON.parse(localStorage.getItem("user")) : ""

    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <Link to={'/'}>
                        <img src={logo} alt=""/>
                    </Link>
                    <div className="header__menu">
                        <NavLink to={'/shop'} className="header__link">
                            Shop
                        </NavLink>
                        <NavLink to={'/shop'} className="header__link">
                            Men
                        </NavLink>
                        <NavLink to={'/shop'} className="header__link">
                            Women
                        </NavLink>
                        <NavLink to={'/shop'} className="header__link">
                            Combos
                        </NavLink>
                        <NavLink to={'/shop'} className="header__link">
                            Joggers
                        </NavLink>
                    </div>
                    <div className="header__icons">
                        <Link to={'/wishlist'} className="header__icons-link">
                            <AiOutlineHeart/>
                        </Link>
                        <Link to={user ? "/profile" : "/register"} className="header__icons-link">
                            <AiOutlineUser/>
                        </Link>
                        <Link to={'/cart'} className="header__icons-link">
                            <AiOutlineShoppingCart/>
                        </Link>
                        {
                            user.email === 'admin@mail.ru' ?
                                <Link to={'/admin-panel'} className="header__icons-link">
                                    <GrUserAdmin/>
                                </Link>
                                : ''
                        }
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;