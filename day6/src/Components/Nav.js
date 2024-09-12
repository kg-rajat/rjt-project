import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to="#">Sweet shop</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        <Link class="nav-link" to="/about">About</Link>
        <Link class="nav-link" to="/contact">Contact</Link>
        <Link class="nav-link" to="/service">Service</Link>
        <Link class="nav-link" to="/visit">Visit</Link>
        
      </div>
    </div>
  </div>
</nav>
  )
}