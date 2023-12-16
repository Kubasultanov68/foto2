import sl from "../auth.module.css";
import {Link} from "react-router-dom";
import React from "react";
import InputItem from "../components/InputItem";

export const OnePage = ({errors, register}) => {
    return (
        <div>
            <InputItem
                placeholder='Укажите ваше имя и фамилию'
                type='text'
                label='Имя и фамилия'
                register={register}
                error={errors?.fullName?.message}
                name='fullName'
            />

            <InputItem
                placeholder='Укажите вашу почту'
                type='email'
                label='E-mail'
                register={register}
                error={errors?.email?.message}
                name='email'
            />
        </div>
    )
}

export const TwoPage = ({register, errors}) => {
    return (
        <div>
            <InputItem
                label='Логин'
                placeholder='Придумайте логин'
                type='text'
                register={register}
                name='userName'
                error={errors?.userName?.message}
            />

            <InputItem
                label='Пароль'
                placeholder='Задайте пароль для входа'
                type='password'
                register={register}
                name={'password'}
                error={errors?.password?.message}
            />
            <div className={sl.pk}>
                {/*<span onClick={() => setIsOnPrivacy(!isOnPrivacy)}>*/}
                {/*    {isOnPrivacy ? (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">*/}
                {/*    <path d="M2 5.2C2 4.07989 2 3.51984 2.21799 3.09202C2.40973 2.71569 2.71569 2.40973 3.09202 2.21799C3.51984 2 4.0799 2 5.2 2H10.8C11.9201 2 12.4802 2 12.908 2.21799C13.2843 2.40973 13.5903 2.71569 13.782 3.09202C14 3.51984 14 4.0799 14 5.2V10.8C14 11.9201 14 12.4802 13.782 12.908C13.5903 13.2843 13.2843 13.5903 12.908 13.782C12.4802 14 11.9201 14 10.8 14H5.2C4.07989 14 3.51984 14 3.09202 13.782C2.71569 13.5903 2.40973 13.2843 2.21799 12.908C2 12.4802 2 11.9201 2 10.8V5.2Z" stroke="#ABA8AD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>*/}
                {/*</svg>) : (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5 8L7 10L11 6M5.2 14H10.8C11.9201 14 12.4802 14 12.908 13.782C13.2843 13.5903 13.5903 13.2843 13.782 12.908C14 12.4802 14 11.9201 14 10.8V5.2C14 4.0799 14 3.51984 13.782 3.09202C13.5903 2.71569 13.2843 2.40973 12.908 2.21799C12.4802 2 11.9201 2 10.8 2H5.2C4.0799 2 3.51984 2 3.09202 2.21799C2.71569 2.40973 2.40973 2.71569 2.21799 3.09202C2 3.51984 2 4.0799 2 5.2V10.8C2 11.9201 2 12.4802 2.21799 12.908C2.40973 13.2843 2.71569 13.5903 3.09202 13.782C3.51984 14 4.0799 14 5.2 14Z" stroke="#1F1F1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>)}*/}
                {/*</span>*/}
                <input type="checkbox" {...register('privacyPolicy')} style={{cursor: 'pointer'}}/>
                <p>
                    Я согласен с <span>
                    <Link
                        to='/privacy-policy'
                        className={sl.pk_link}
                        component='span'
                    >
                        политикой конфиденциальности
                    </Link>
                </span>
                </p>
            </div>
            <div style={{
                height: '1px',
                width: '100%',
                background: 'red',
                display: errors?.privacyPolicy?.message ? 'block' : 'none'
            }}></div>
        </div>
    )
}