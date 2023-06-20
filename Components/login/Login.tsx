import React, { useEffect, useState } from 'react'
import styles from './login.module.scss';
import { LoginUser } from '@/functions/user';

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

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
                        <button onClick={() => { LoginUser(email, password, setError) }}> Login </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;