import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <NavLink to="/">
            <h2>JobRouter</h2>
          </NavLink>
          <div className="sub-nav">
            <NavLink to="about">About</NavLink>
            <NavLink to="careers">Careers</NavLink>
          </div>
        </nav>
      </header>

      <main>
        <Outlet/>
      </main>
    </div>
  );
};

export default RootLayout;
