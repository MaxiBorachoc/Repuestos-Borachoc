import React from 'react'
import CartWidget from './CartWidget'
export const NavBar = () => {
    return (<div> 
      {/* <nav class="navbar navbar-light bg-light"><h3>Repuestos Bora</h3></nav>
   
      <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link" href="">De arranques</a></li>
          <li class="nav-item"><a class="nav-link" href=""> De alternadores</a></li>
          <li class="nav-item"><a class="nav-link" href="">Luces</a></li>
          <li class="nav-item"><a class="nav-link" href="">De instalaciones</a></li>
         
        
          
      </ul> */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand"><strong>Repuestos Bora</strong></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Para motores de arranque <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">Para alternadores</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">Para luces</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#" >Para instalaciones eléctricas</a>
      </li>
    </ul>
    <CartWidget/>
  </div>  
  {/* <CartWidget/> */}
</nav>
    
    </div>
    );
};
