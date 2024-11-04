import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const Dashboard = lazy(() => import ('./components/Dashboard'))
const Landing = lazy(() => import('./components/Landing'))
const Appbar = lazy(() => import('./components/Appbar'))


function App() {
  return(
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path='/dashboard' element={<Suspense fallback={"loading..."}><Dashboard /></Suspense> }/>
          <Route path='/'element={<Suspense fallback={"loading..."}><Landing /></Suspense> }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App
