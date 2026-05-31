import React from 'react'

function Navbar( { setVista } ) {

  const token = false
  const total = 25000

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">Pizzería Mamma Mia!</a>
        <div className="d-flex me-auto gap-2">
          <button className="btn btn-sm btn-outline-light text-white border-light">🍕 Home</button>
          {token ? (
            <>
              <button className="btn btn-sm btn-outline-light text-white border-light">🔓 Profile</button>
              <button className="btn btn-sm btn-outline-light text-white border-light">🔒 Logout</button>
            </>
          ) : (
            <>


            
              <button 
                className="btn btn-sm btn-outline-light text-white border-light"
                onClick={() => setVista("login")}
              >
                🔐 Iniciar sesión
              </button>
              


              <button 
                className="btn btn-sm btn-outline-light text-white border-light"
                onClick={() => setVista("register")}
              >
                🔐 Registrarse
              </button>
            </>
          )}
        </div>
        <div className="d-flex">
          <button className="btn btn-sm btn-outline-info text-info border-info fw-bold">
            🛒 Total: ${total.toLocaleString('es-CL')}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
