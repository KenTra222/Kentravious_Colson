import React from 'react'
import NavItems from '../NavItems/NavItems'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'

const Layout = ({children}) => {
  return (
    <div>
        <Header/>
        <main>
          {children}
        </main>
        <Footer/>
    </div>
  )
}

export default Layout