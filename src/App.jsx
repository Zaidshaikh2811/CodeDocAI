import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './pages/Landing'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=" w-full text-gray-900 min-h-screen flex flex-col items-center px-6 ">


      <Navbar />
      <LandingPage />

    </div>
  )
}

export default App
