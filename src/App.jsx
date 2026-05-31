import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Formulario from './components/Formulario'
import FormularioLogin from './components/Formulario-login'
import Footer from './components/Footer'

function App() {
  
  const [vista, setVista] = useState("register")

  return (
    <div className="App d-flex flex-column min-vh-100">
      <Navbar setVista={setVista} />
      {vista === "register" ? <Formulario /> : <FormularioLogin />}
      <Footer />
    </div>      
  )
}

export default App
