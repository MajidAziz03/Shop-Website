import React from 'react'
import styles from './register.module.scss';

const Stepper = ({step} : number) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.step}>
                <p className={styles.number}>1</p>
                <span className={styles.circle}></span>
                <p className={styles.title}>Create Profile</p>
            </div>
        </div>
    )
}

export default Stepper;