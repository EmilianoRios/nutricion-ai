import { NotFound } from '@@/'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

interface AppRoutesWithNotFoundProps {
  children: React.ReactNode
}

const AppRoutesWithNotFound: React.FC<AppRoutesWithNotFoundProps> = ({
  children,
}) => {
  return (
    <>
      <Routes>
        {children}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default AppRoutesWithNotFound
