import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link
          to='/'
          tabIndex={0}
          className="navbar-brand"
          aria-label='Ir a Inicio'
        >
          PELICULAS
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink 
              to='/'
              tabIndex={1}
              className="nav-link"
            >
              Movies
            </NavLink>
            <NavLink 
              to='/genders'
              tabIndex={2}
              className="nav-link"
            >
              Genders
            </NavLink>
            <NavLink 
              to='/directors'
              tabIndex={3}
              className="nav-link"
            >
              Directors
            </NavLink>
            <NavLink 
              to='/productors'
              tabIndex={4}
              className="nav-link"
            >
              Productors
            </NavLink>
            <NavLink 
              to='/types'
              tabIndex={5}
              className="nav-link"
            >
              Types
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )}