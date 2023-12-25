import { useState } from 'react';

const ExploreNavbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <div className="container mb-4">
      <h1 className="font-weight-bold title">Explore Hihihi</h1>
      <div className="row">
        <nav className="navbar navbar-expand-lg navbar-light bg-white pl-2 pr-2">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExplore"
            aria-controls="navbarsExplore"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${
              isNavCollapsed ? '' : 'show'
            }`}
            id="navbarsExplore"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Lifestyle
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Food
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Travel
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdown01"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  More
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdown01">
                  <a className="dropdown-item" href="#">
                    Astronomy
                  </a>
                  <a className="dropdown-item" href="#">
                    Nature
                  </a>
                  <a className="dropdown-item" href="#">
                    Cooking
                  </a>
                  <a className="dropdown-item" href="#">
                    Fashion
                  </a>
                  <a className="dropdown-item" href="#">
                    Wellness
                  </a>
                  <a className="dropdown-item" href="#">
                    Dieting
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default ExploreNavbar;
