import { useFruits } from '../hooks/useFruits.ts'
import weatherapi from '../apis/weatherapi.ts'
import Navbar from './Navbar.tsx'

function App() {
  weatherapi()

  return (
    <>
      <div className="app">
        <Navbar />
        <h1>Fullstack Boilerplate - with Fruits!</h1>
      </div>
    </>
  )
}

export default App
