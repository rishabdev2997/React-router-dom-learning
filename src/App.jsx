import { BrowserRouter, Route, Routes } from 'react-router-dom'
const Dashboard = React.lazy(() => import ('./components/Dashboard'))
const Landing = React.lazy(() => import('./components/Landing'))
const Appbar = React.lazy(() => import('./components/Appbar'))




function App() {
  return(
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/' element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App
