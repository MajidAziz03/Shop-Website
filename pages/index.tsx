import Navbar from '@/Components/navbar/Navbar'
import Header from '@/Components/header/Header'
import Featured from '@/Components/featured/Featured'
import Announcement from '@/Components/announcement/Announcement'
import Products from '@/Components/products/Products'
import { useState } from 'react'
import ProductFilter from '@/Components/products/productsfilter/ProductFilter'
import { store } from '@/redux/store/store'
import { Provider } from 'react-redux'

export default function Home() {
  const [fromHome, setFromHome] = useState(true)
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
