import Navbar from '@/Components/navbar/Navbar'
import Header from '@/Components/header/Header'
import Featured from '@/Components/featured/Featured'
import Announcement from '@/Components/announcement/Announcement'
import Products from '@/Components/products/Products'
import { useEffect, useState } from 'react'
import ProductFilter from '@/Components/products/productsfilter/ProductFilter'
import { RootState, store } from '@/redux/store/store'
import { Provider } from 'react-redux'
import { useAppSelector } from '@/redux/hooks'
import { useRouter } from 'next/router'

export default function Home() {
  const [fromHome, setFromHome] = useState(true)
  const user = useAppSelector((state : RootState) => state.user.user.token) 
  const router = useRouter()

  return (
    <>
      <Announcement />
      <Navbar />
      <Header />
      <Featured />
      <Products fromHome={fromHome} />
    </>
  )
}

