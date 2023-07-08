import styles from './stepper.module.scss';

const Stepper = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.steps}>
                <div className={styles.step}>
                    <p className={styles.number}>1</p>
                    <span className={styles.circle}></span>
                    <p className={styles.title}>Create Profile</p>
                </div>
                <div className={styles.step}>
                    <p className={styles.number}>2</p>
                    <span className={styles.circle}></span>
                    <p className={styles.title}>Complete Profile</p>
                </div>
                <div className={styles.step}>
                    <p className={styles.number}>3</p>
                    <span className={styles.circle}></span>
                    <p className={styles.title}>Finish Profile</p>
                </div>
            </div>
        </div>
    )
}

export default Stepper;