import React, { useEffect, useState } from 'react'
import Navbar from './navbar/Navbar'
import Announcement from './announcement/Announcement'
import { useRouter } from 'next/router'

const BaseLayout = (props: any) => {
    const route = useRouter()
    const [announceInProducts, setAnnounceInProducts] = useState(false)

    useEffect(() => {
        if (route.pathname == '/products') {
            setAnnounceInProducts(true)
        }
    }, [route])
    return (
        <>
            {!announceInProducts && <Announcement />}
            <Navbar />
            {props.children}
        </>
    )
}

export default BaseLayout;