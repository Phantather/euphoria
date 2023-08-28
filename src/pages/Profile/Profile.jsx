import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {logOut} from "../../redux/reducers/user";

const Profile = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    return (
        <section>
            <div className="container">
                <button onClick={() => {
                    navigate('/')
                    dispatch(logOut())
                    localStorage.removeItem("user")
                }}>
                    log out
                </button>
            </div>
        </section>
    );
};

export default Profile;