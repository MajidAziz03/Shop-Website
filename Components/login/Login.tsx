import React, { useEffect, useState } from 'react'
import styles from './login.module.scss';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store/store';
import { userSuccess } from '@/redux/slices/userSlice';
import { useRouter } from 'next/router';

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const user = useAppSelector((state: RootState) => state.user.user.token)
    const disptach = useAppDispatch()
    const router = useRouter()

    const LoginUser = async (email: string, password: string) => {
        try {
            const res = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: email,
                    password: password,
                })
            })
            const response = await res.json()
            if (response) {
                disptach(userSuccess(response))
                router.push("/")
            }
        }
        catch (error: any) {
            console.log("error", error)
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
                        <button onClick={() => { LoginUser(email, password) }}> Login </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;