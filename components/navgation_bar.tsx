import Link from "next/link";
import React from "react";

function Navgation_bar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <Link className="navbar-brand js-scroll-trigger" href="/">
        <span className="d-block d-lg-none">Clarence Taylor</span>
        <span className="d-none d-lg-block">
          <img
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src="assets/img/profile.jpg"
            alt="..."
          />
        </span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="/navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link js-scroll-trigger" href="/home/">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link js-scroll-trigger"
              href="/home/experience"
            >
              Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link js-scroll-trigger" href="/home/education">
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link js-scroll-trigger" href="/home/skills">
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link js-scroll-trigger" href="/home/interests">
              Interests
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link js-scroll-trigger" href="/home/awards">
              Awards
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navgation_bar;
