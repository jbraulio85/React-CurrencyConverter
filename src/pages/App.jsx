import { BrowserRouter as Router } from "react-router-dom"
import Navbar from "../components/navbar/Navbar.jsx"
import Convertidor from '../components/convertidor/Convertidor.jsx'

function App() {
  
  return (
    <Router>
      <main>
        <Navbar/>
        <Convertidor/>
      </main>
    </Router>
  )
}

export default App
