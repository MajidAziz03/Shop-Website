import React, { useEffect, useState } from 'react'
import styles from './login.module.scss';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store/store';
import { isFetching, userFetching, userSuccess } from '@/redux/slices/userSlice';
import { useRouter } from 'next/router';
import { LoginUser } from '@/functions/user';
import { Progress } from 'reactstrap';

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const user = useAppSelector((state: RootState) => state.user.user.token)
    const disptach = useAppDispatch()
    const router = useRouter()
    const isUserFetching = useAppSelector((state : RootState) => state.user.isLoading)

    const handle_login = async() => {
        disptach(userFetching())
        const res = await LoginUser(email,password)
        if(res) {
            disptach(userSuccess(res))
            router.push("/")
        }
    }

    useEffect(() => {
        if (user) {
            router.replace("/")
        }
    }, [])

    return (
        <div className={styles.wrapper}>
            <div className={styles.login}>
                <div className={styles.info}>
                    <h3> Login User! </h3>
                    <div className={styles.wrapperInput}>
                        <label htmlFor=""> Name </label>
                        <input type="text" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className={styles.wrapperInput}>
                        <label htmlFor=""> Password </label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className={styles.btnWrapper}>
                        <button disabled={isUserFetching} onClick={handle_login}> Login </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;