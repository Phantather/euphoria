import React from 'react';
import {useSelector} from "react-redux";

const ProfileInfo = () => {
    const {user} = useSelector(store => store.userSlice)


    return (
        <section className="profile__section">
            <h2 className="profile__title">
                My Info
            </h2>
            <h3 className="profile__section-title">
                Contact Details
            </h3>
            <ul className="profile__section-list">
                <li className="profile__section-item">
                    <p className="profile__section-info">
                        <span>Your Name</span>
                        Jhanvi Shah
                    </p>
                    <span className="profile__section-change">
                                Change
                            </span>
                </li>
                <li className="profile__section-item">
                    <p className="profile__section-info">
                        <span>Email Address</span>
                        {user.email}
                    </p>
                    <span className="profile__section-change">
                                Change
                            </span>
                </li>
            </ul>
        </section>
    );
};

export default ProfileInfo;