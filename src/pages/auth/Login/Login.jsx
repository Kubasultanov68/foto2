import React from 'react';
import sl from '../auth.module.css';
import {Link} from "react-router-dom";
import {BeatLoader} from "react-spinners";
import {useForm} from "react-hook-form";
import InputItem from "../components/InputItem";


const Login = () => {

    const [isLoading, _] = React.useState(false)

    const {
        handleSubmit,
        register,
        setError,
        formState: {errors}
    } = useForm({
        defaultValues: {
            userName: '',
            password: '',
        }
    })

    const onSubmit = ({userName, password}) => {
        console.log({
            userName,
            password
        })
    }

    return (
        <div className={'container center'}>
            <form className={sl.auth} onSubmit={handleSubmit(onSubmit)}>
                <h3 className={sl.title}>С возвращением!</h3>
                <h5 className={sl.subtitle}>Войдите в аккаунт</h5>
                <div className={sl.ii_list}>
                    <InputItem
                        type='text'
                        label='Логин'
                        placeholder='Введите ваш логин'
                        error={errors?.userName?.message}
                        register={register}
                        name='userName'
                    />
                    <InputItem
                        type='password'
                        label='Пароль'
                        placeholder='Введите ваш пароль'
                        error={errors?.password?.message}
                        register={register}
                        name='password'
                    />
                </div>
                <button
                    className={sl.btn}
                    disabled={isLoading}
                    type='submit'
                >
                    Войти
                </button>
                <div className={sl.sb} style={{height: '50px'}}>
                    <Link to='/auth/reset' className={sl.sb_link}>
                        Забыли пароль?
                    </Link>
                    <Link to='/auth/register' className={sl.sb_link}>
                        Создать аккаунт
                    </Link>
                </div>
                <div className={sl.loading} style={{display: isLoading ? 'flex' : 'none'}}>
                    <BeatLoader className={sl.loading_icon} color="#7535FC" />
                </div>
            </form>
        </div>
    );
};

export default Login;