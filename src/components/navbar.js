import React from 'react'
import CartWidget from './CartWidget'
import {Link} from 'react-router-dom'
export const NavBar = () => {
    return (<div> 
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link to={`/`} className="navbar-brand"><strong>Repuestos Bora</strong></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link to={`/category/1`} className="nav-link" >Para arranques </Link>
      </li>
      <li className="nav-item active">
        <Link to={`/category/2`} className="nav-link" >Para alternadores</Link>
      </li>
      <li className="nav-item active">
        <Link to={`/category/3`} className="nav-link">Para luces</Link>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#" >Para instalaciones eléctricas</a>
      </li>
    </ul>
    <CartWidget/>
  </div>  
  {/* <CartWidget/> */}
</nav>
    
    </div>
    );
};
