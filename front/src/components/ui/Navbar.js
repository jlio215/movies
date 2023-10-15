import React from 'react'

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarPillsExample" aria-controls="navbarExample" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="/">
      <h1>MOVIES</h1></a>
    <div className="collapse navbar-collapse" id="navbarPillsExample">
      <ul className="navbar-nav navbar-nav-pills">
        <li className="nav-item">
          <a className="nav-link" href="/">Movies</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/genders">Genders</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/directors">Directors</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/productors">Productors</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/types">Types</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}
