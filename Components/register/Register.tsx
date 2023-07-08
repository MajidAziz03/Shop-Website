import React from 'react'
import styles from './register.module.scss';
import Stepper from './Stepper';

const Register = () => {
    return (
        <>
        <div className={styles.register}>
            <div className={styles.wrapper}>
                <h3> Create Profile </h3>
                <div className={styles.discalimer}>
                    <p> By creating profile I Agree to all rules</p>
                    <p> I pay all tax</p>
                    <p> I agree to guidlines </p>
                </div>
                    <input type="email" placeholder='Enter your email' />
                <div className={styles.btnWrapper}>
                    <button> Register </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Register;