import { Link } from "react-router-dom";
import { PageNavLink } from "./PageNavLink";

export const MainNav = () => (
  <nav className="navbar is-light px-3">
    <div className="navbar-brand">
      <Link to="/" className="navbar-item">
        <img src="/logo.svg" alt="MA" className="logo" />
      </Link>

      <PageNavLink to="/" text='Home' />
      <PageNavLink to="todos" text='Todos' />


      {/* <NavLink
          to="/"
          className={({ isActive }) => classNames('navbar-item', { 'is-active': isActive })}
        // style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
        >
          Home
        </NavLink> */}
      {/* 
        <NavLink
          to="todos"
          // end
          className={({ isActive }) => classNames('navbar-item', { 'is-active': isActive })}
        >
          Todos
        </NavLink> */}
    </div>
  </nav>
);
