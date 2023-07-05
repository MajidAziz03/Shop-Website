import { useRouter } from 'next/router';
import styles from './annoucement.module.scss';
import { useEffect, useState } from 'react';

const Announcement = () => {
    const route = useRouter()
    const [announce, setAnnounce] = useState(false);

    useEffect(() => {
        if (route.pathname == "/products") {
            setAnnounce(true)
        }
    }, [route])
    return (
        <div className={styles.wrapper} id='wrapper' style={announce ? { background: "#222", color: "white" } : {}}>
            <span> Super deal offer 10% off on all items </span>
        </div>
    )
}

export default Announcement;