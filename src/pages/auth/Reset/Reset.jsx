import React, {useState} from 'react';
import sl from '../auth.module.css';
import {useForm} from "react-hook-form";
import InputItem from "../components/InputItem";
import {Link, useNavigate} from "react-router-dom";
import {IoMdArrowBack} from "react-icons/io";
import {BeatLoader} from "react-spinners";
import {OnePage, ThreePage, TwoPage} from "./pages";



const Reset = () => {

    const [page, setPage] = useState(1)
    const [isLoading, _] = React.useState(false)

    const {
        handleSubmit,
        register,
        setError,
        formState: {errors}
    } = useForm({
        defaultValues: {
            email: '',
            password: '',
            code: ''
        }
    })

    const onSubmit = ({ email,  password, code}) => {
        if (page === 1) {

            console.log({
                email,
                page
            })

            setPage(page + 1)

        } else if (page === 2) {

            console.log({
                code,
                page,
            })

            setPage(page + 1)

        } else {
            console.log({
                password,
                page
            })
        }
    }

    const RenderPage = () => {
        if (page === 1) {
            return <OnePage
                page={page}
                setPage={setPage}
                register={register}
                errors={errors}
            />
        } else if (page === 2) {
            return <TwoPage
                page={page}
                setPage={setPage}
                register={register}
                errors={errors}
            />
        } else {
            return <ThreePage
                page={page}
                setPage={setPage}
                register={register}
                errors={errors}
            />
        }
    }

    const pageNav = () => {
        if (page === 1) {
           return (
               <>
                <div className={sl.active}></div>
                <span></span>
                <span></span>
                </>
           )
        } else if (page === 2) {
            return (
                <>
                    <span></span>
                    <div className={sl.active}></div>
                    <span></span>
                </>
            )
        } else {
            return (
                <>
                    <span></span>
                    <span></span>
                    <div className={sl.active}></div>
                </>
            )
        }
    }

    const navigate = useNavigate()


    return (
        <div className='container center'>
            <form className={sl.auth} onSubmit={handleSubmit(onSubmit)}>
                <h3 className={sl.title}>Восстановление пароля</h3>
                {RenderPage()}

                <button
                    className={sl.btn}
                    type='submit'
                >Продолжить</button>

                <div className={sl.nav}>
                    {pageNav()}
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>

                    <p className={sl.go_back} onClick={() => {
                        page === 1 ? navigate('/auth/login') : setPage(page - 1)}
                    }>
                        <IoMdArrowBack className={sl.go_back_icon}/>
                        Назад
                    </p>

                </div>
                <div className={sl.loading} style={{display: isLoading ? 'flex' : 'none'}}>
                    <BeatLoader className={sl.loading_icon} color="#7535FC" />
                </div>
            </form>
        </div>
    );
};

export default Reset;