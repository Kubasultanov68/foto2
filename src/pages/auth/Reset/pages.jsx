import sl from "../auth.module.css";
import InputItem from "../components/InputItem";
import React from "react";

export const OnePage = ({errors, register}) => {
    return (
        <>
            <h5 className={sl.subtitle}>Введите E-mail указанный при регистрации</h5>
            <div>
                <InputItem
                    placeholder='Укажите вашу почту'
                    type='email'
                    label='E-mail'
                    register={register}
                    error={errors?.email?.message}
                    name='email'
                />
            </div>
        </>
    )
}

export const TwoPage = ({errors, register}) => {
    return (
        <>
            <h5 className={sl.subtitle}>На указанный адрес было отправлено письмо с кодом подтверждения</h5>
            <div>
                <InputItem
                    placeholder='Ваш код'
                    type='number'
                    label='Код подтверждения'
                    register={register}
                    error={errors?.code?.message}
                    name='code'
                />
            </div>
        </>
    )
}

export const ThreePage = ({errors, register}) => {
    return (
        <>
            <h5 className={sl.subtitle}>Установите новый пароль для входа</h5>
            <div>
                <InputItem
                    placeholder='Задайте пароль'
                    type='password'
                    label='Новый пароль'
                    register={register}
                    error={errors?.password?.message}
                    name='password'
                />
            </div>
        </>
    )
}