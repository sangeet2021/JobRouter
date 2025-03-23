import { NavLink, Outlet } from "react-router-dom";

const HelpLayout = () => {
  return (
    <div className="help">
      <h1>Help!</h1>

      <div className="helping">
        <NavLink to="faq">FAQ</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </div>

      <Outlet />
    </div>
  );
};

export default HelpLayout;
