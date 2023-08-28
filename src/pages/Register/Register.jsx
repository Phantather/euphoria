import React, {useState} from 'react';
import {AiFillEye,AiFillEyeInvisible} from "react-icons/ai"
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import axios from "axios";
import {logIn} from "../../redux/reducers/user";
const Register = () => {

    const [showPass, setShowPass] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {
        register,
        reset,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm({mode: "onBlur"})

    const onSubmit = (data) => {
        axios.post(`http://localhost:8080/register`, data)
            .then((res) => {
                dispatch(logIn({
                    ...res.data.email,
                    token: res.data.token
                }))
                navigate('/')
                localStorage.setItem("user", JSON.stringify({
                    ...res,
                    token: res.data.token
                }) )
            })
    }

    return (
        <section className="register">
            <div className="register__img"></div>
            <form className="register__form" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="register__form-title">
                    Sign Up
                </h2>
                <p className="register__form-desc">
                    Sign up for free to access to in any of our products
                </p>
                <label className="register__form-label">
                    Email Address
                    <input
                        {...register('email',{
                            required: {
                                message: 'Email обязательно к заполнению',
                                value: true
                            },
                            minLength: {
                                message: 'Минимум 10 символа',
                                value: 10
                            },
                            pattern: {
                                message: 'Напишите правильно свой email',
                                value:  /^[^ ]+@[^ ]+\.[a-z]{2,5}$/
                            }
                        })}
                        type="email"
                        className="register__form-field"
                        required
                    />
                    <p className='register__form-error'>
                        {errors.email && errors.email?.message}
                    </p>
                </label>
                <label className="register__form-label">
                    <span className="register__form-pass">
                        Password
                        <span onClick={() => setShowPass(!showPass)}>
                            {
                                showPass ? <AiFillEyeInvisible/>  :  <AiFillEye/>
                            }
                        </span>
                    </span>
                    <input
                        {...register('password', {
                            required: {
                                message: "Пароль обязателен к заполнению",
                                value: true
                            },
                            pattern: {
                                value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g,
                                message: 'Пароль должен содержать не менее 8 символов, заглавную букву, число!'
                            }
                        })}
                        type={showPass ? 'text' : 'password'}
                        className="register__form-field"
                        required
                    />
                    <p className='register__form-error'>
                        {errors.password && errors.password?.message}
                    </p>
                </label>
                <button className="register__form-btn" type="submit">
                    Sign Up
                </button>
                <p>
                    Already have an  account? <Link to={'/login'}>Log in</Link>
                </p>
                <Link to={'/'}>
                    Back to home page
                </Link>
            </form>
        </section>
    );
};

export default Register;