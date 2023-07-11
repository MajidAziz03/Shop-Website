import React, { useEffect, useState } from 'react'
import Navbar from './navbar/Navbar'
import Announcement from './announcement/Announcement'
import { useRouter } from 'next/router'
import { useAppSelector } from '@/redux/hooks'
import { RootState } from '@/redux/store/store'

const BaseLayout = (props: any) => {
    const route = useRouter()
    const [announceInProducts, setAnnounceInProducts] = useState(false)
    const user = useAppSelector((state: RootState) => state.user.user.token)

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