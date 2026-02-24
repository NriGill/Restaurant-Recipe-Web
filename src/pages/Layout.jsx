import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const Layout = () => {
  const [search, setsearch] = useState("");
  const navigate= useNavigate()
  const handlesubmit=(e)=>{

    e.preventDefault()
    navigate("/search/"+search)
  }
  return (
    <div>

<nav className="navbar navbar-expand-lg navbar-dark py-3">
  <div className="container">
    <a className="navbar-brand fw-bold" href="/"><span style={{color: 'var(--accent)'}}>NRI Café </span></a>
    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navMenu">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navMenu">
      <ul className="navbar-nav ms-auto gap-3">
        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/menu">Menu</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/gallery">Gallery</Link></li>
        <li className='nav-item'><Link className='nav-link' to="/recipes">Recipes</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>

        <form onSubmit={handlesubmit} class="d-flex" role="search">
      <input onChange={(e)=> setsearch(e.target.value) } class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit"><i className="bx  bx-search" />
 </button>
    </form>
          {/* <Link class="btn btn-outline-success" to="/login">Login</Link> */}
                    <Link class="btn btn-outline-success" to="/profile"><i className="bx  bx-user" /> </Link>
                    <Link class="btn btn-outline-success" to="/cart"><i className="bx  bx-cart" />
 </Link>


      </ul>
    </div>
  </div>
</nav>





<div style={{minHeight:"80vh"}}>

<Outlet/>
</div>




 



<footer className="text-center text-muted small">
  © 2025 Café Aurora — All Rights Reserved
</footer>




    </div>
  )
}

export default Layout