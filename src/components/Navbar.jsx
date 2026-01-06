import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/CC LOGO 1_033945.png";

const Navbar = () => {
	const [scrollPoint, setScrollPoint] = useState(0);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrollPoint(window.scrollY);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		if (menuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		return () => {
			document.body.style.overflow = "auto";
		};
	}, [menuOpen]);

	const handleToggle = () => setMenuOpen((prev) => !prev);
	const closeMenu = () => setMenuOpen(false);

	return (
		<nav
			className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
			${
				scrollPoint > 50
					? "bg-white/90 backdrop-blur-md shadow-sm"
					: "bg-transparent pt-5"
			}
		`}>
			<div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
				{/* Logo – ALWAYS visible */}
				<div className='flex items-center'>
					<img
						src={logo}
						alt='Logo'
						className='w-50 relative z-10 max-md:w-35 max-lg:50 transition-transform duration-300'
						style={{
							filter: "invert(1) brightness(2)",
						}}
					/>
				</div>

				{/* Desktop Menu */}
				<ul className='hidden lg:flex items-center gap-8 text-sm xl:text-base text-black'>
					{navLinks(closeMenu)}
				</ul>

				{/* Mobile Toggle */}
				<button
					onClick={handleToggle}
					className='lg:hidden text-black z-50'
					aria-label='Toggle menu'>
					{menuOpen ? <CloseIcon /> : <MenuIcon />}
				</button>
			</div>

			{/* Mobile Menu */}
			<div
				className={`lg:hidden fixed inset-0 bg-white/95 backdrop-blur-md
				transform transition-transform duration-500
				${
					menuOpen
						? "translate-x-0 translate-y-0 bg-black h-dvh"
						: "translate-x-full translate-y-0"
				}`}>
				<ul className='flex flex-col items-center justify-center h-full gap-8 text-lg text-black'>
					{navLinks(closeMenu)}
				</ul>
			</div>
		</nav>
	);
};

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
					? "font-semibold text-black border-b-2 border-black pb-1"
					: "text-gray-900 hover:text-black transition-all duration-150 "
			}>
			{label}
		</NavLink>
	</li>
);

/* ---------- Inline SVG Icons ---------- */

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
