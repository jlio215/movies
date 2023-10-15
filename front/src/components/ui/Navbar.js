import React from 'react'

export default function navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarPillsExample" aria-controls="navbarExample" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="home">
      <h1>MOVIES</h1></a>
    <div className="collapse navbar-collapse" id="navbarPillsExample">
      <ul className="navbar-nav navbar-nav-pills">
        <li className="nav-item">
          <a className="nav-link" href="movies">Movies</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="genders">Genders</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="productors">Productors</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle active" href="directors" role="button" data-bs-toggle="dropdown" aria-expanded="false">Directors</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}
