import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { FigmaRouter } from '../figma/routes/FigmaRouter'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={ <FigmaRouter/> } />
    </Routes>
  )
}

