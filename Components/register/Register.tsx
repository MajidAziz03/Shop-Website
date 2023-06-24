import React from 'react'
import styles from './register.module.scss';

const Register = () => {
    return (
        <div className={styles.register}>
            <div className={styles.wrapper}>
                <h3> Create Profile </h3>
                <div className={styles.fields}>
                    <div className={styles.singleWrapper}>
                        <label htmlFor=""> First Name </label>
                        <input type="text" />
                    </div>
                    <div className={styles.singleWrapper}>
                        <label htmlFor=""> Last Name </label>
                        <input type="text" />
                    </div>
                    <div className={styles.singleWrapper}>
                        <label htmlFor=""> User Name </label>
                        <input type="text" />
                    </div>
                    <div className={styles.singleWrapper}>
                        <label htmlFor=""> Password </label>
                        <input type="passoword" />
                    </div>
                    <div className={styles.singleWrapper}>
                        <label htmlFor=""> Confirm Password </label>
                        <input type="password" />
                    </div>
                </div>
                <div className={styles.btnWrapper}>
                    <button> Register </button>
                </div>
            </div>
        </div>
    )
}

export default Register;