import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../images/CC LOGO 1_033945.png";

const Navbar = () => {
  const [scrollPoint, setScrollPoint] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const isKingdomPage = location.pathname === "/kingdom-ventures";

  useEffect(() => {
    const handleScroll = () => setScrollPoint(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const handleToggle = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  /* -------- Navbar Style Logic -------- */

  const isScrolled = isKingdomPage ? scrollPoint > 70 : scrollPoint > 50;

  const navbarClasses = `
    fixed top-0 left-0 w-full z-50 transition-all duration-300
    ${
      isScrolled
        ? "bg-white/95 backdrop-blur-md shadow-sm text-black"
        : isKingdomPage
          ? "bg-transparent text-white pt-5"
          : "bg-transparent text-black pt-5"
    }
  `;

  return (
    <nav className={navbarClasses}>
      <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
        {/* Logo */}
        <div className='flex items-center'>
          <img
            src={logo}
            alt='Logo'
            className='w-50 relative z-10 max-md:w-35 transition-transform duration-300'
            style={{
              filter:
                !isScrolled && isKingdomPage
                  ? "invert(0) brightness(2)"
                  : "invert(1)",
            }}
          />
        </div>

        {/* Desktop Menu */}
        <ul className='hidden lg:flex items-center gap-5 text-sm xl:text-base'>
          {navLinks(closeMenu)}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={handleToggle}
          className='lg:hidden z-50'
          aria-label='Toggle menu'>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-white transform transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <ul className='flex flex-col items-start mt-20 ml-8 gap-6 text-lg'>
          {navLinks(closeMenu)}
        </ul>
      </div>
    </nav>
  );
};

/* -------- NAV LINKS -------- */

const navLinks = (closeMenu) => (
  <>
    <NavItem to='/' label='Home' closeMenu={closeMenu} />
    <NavItem to='/about' label='About' closeMenu={closeMenu} />
    <NavItem to='/missions' label='Mission' closeMenu={closeMenu} />
    <NavItem
      to='/chayil-daughters'
      label='Chayil Daughters'
      closeMenu={closeMenu}
    />
    <NavItem
      to='/leadership'
      label='Leadership & Mentorship'
      closeMenu={closeMenu}
    />
    <NavItem
      to='/kingdom-ventures'
      label='Kingdom Ventures'
      closeMenu={closeMenu}
    />
    <NavItem to='/testimonials' label='Testimonials' closeMenu={closeMenu} />
    <NavItem to='/invite' label='Invite' closeMenu={closeMenu} />
    <NavItem to='/media' label='Media Resources' closeMenu={closeMenu} />
  </>
);

const NavItem = ({ to, label, closeMenu }) => (
  <li>
    <NavLink
      to={to}
      onClick={closeMenu}
      className={({ isActive }) =>
        isActive
          ? "font-semibold border-b-2 border-current pb-1"
          : "hover:opacity-70 transition-all duration-150"
      }>
      {label}
    </NavLink>
  </li>
);

/* -------- Icons -------- */

const MenuIcon = () => (
  <svg width='28' height='28' fill='none' stroke='currentColor' strokeWidth='2'>
    <line x1='4' y1='7' x2='24' y2='7' />
    <line x1='4' y1='14' x2='24' y2='14' />
    <line x1='4' y1='21' x2='24' y2='21' />
  </svg>
);

const CloseIcon = () => (
  <svg width='28' height='28' fill='none' stroke='currentColor' strokeWidth='2'>
    <line x1='6' y1='6' x2='22' y2='22' />
    <line x1='22' y1='6' x2='6' y2='22' />
  </svg>
);

export default Navbar;
