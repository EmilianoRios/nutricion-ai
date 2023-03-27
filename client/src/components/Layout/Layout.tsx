import React from 'react'
import { Footer } from '../Footer'
import { Navbar } from '../Navbar'
import { SearchBar } from '../SearchBar'
export interface LayoutInterface {
  children: React.ReactNode
}

const Layout: React.FC<LayoutInterface> = ({ children }) => {
  return (
    <>
      <Navbar />
      <SearchBar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
