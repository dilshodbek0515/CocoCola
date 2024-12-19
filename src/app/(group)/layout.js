import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
