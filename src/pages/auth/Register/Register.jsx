import React, {useState} from 'react';
import sl from '../auth.module.css';
import {InputItem} from "../components/InputItem";
import {Link} from "react-router-dom";
import {IoMdArrowBack} from "react-icons/io";
import {BeatLoader} from "react-spinners";
import {useForm} from "react-hook-form";
import {OnePage, TwoPage} from "./pages";


const Register = () => {

    const [page, setPage] = useState(1)
    const [isLoading, _] = React.useState(false)

    const {
        handleSubmit,
        register,
        setError,
        formState: {errors}
    } = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            userName: '',
            password: '',
            privacyPolicy: false,
        }
    })

    const onSubmit = ({fullName, email, userName, password, privacyPolicy}) => {
        if (page === 1) {

            console.log({
                fullName,
                email,
                page
            })

            setPage(page + 1)

        } else {

            console.log({
                userName,
                password,
                page,
                privacyPolicy
            })

        }
    }

    const RenderPage = page === 1 ?
        <OnePage
            page={page}
            setPage={setPage}
            register={register}
            errors={errors}
        /> :
        <TwoPage
            page={page}
            setPage={setPage}
            register={register}
            errors={errors}
        />;



    return (
        <div className='container center'>
            <form className={sl.auth} onSubmit={handleSubmit(onSubmit)}>
                <h3 className={sl.title}>Добро пожаловать!</h3>
                <h5 className={sl.subtitle}>Создайте аккаунт</h5>

                {RenderPage}

                <button
                    className={sl.btn}
                    type='submit'
                >Продолжить</button>

                <div className={sl.nav}>
                    {
                        page === 1 ? (
                            <>
                                <div className={sl.active}></div>
                                <span></span>
                            </>
                        ) : (
                            <>
                                <span></span>
                                <div className={sl.active}></div>
                            </>
                        )
                    }
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    {page === 1 ? (
                        <Link className={sl.go_back} to='/auth/login'>
                            Уже есть аккаунт?
                        </Link>
                    ) : (
                        <p className={sl.go_back} onClick={() => setPage(page - 1)}>
                            <IoMdArrowBack className={sl.go_back_icon}/>
                            Назад
                        </p>
                    )}
                </div>
                <div className={sl.loading} style={{display: isLoading ? 'flex' : 'none'}}>
                    <BeatLoader className={sl.loading_icon} color="#7535FC" />
                </div>
            </form>
        </div>
    );
};

export default Register;