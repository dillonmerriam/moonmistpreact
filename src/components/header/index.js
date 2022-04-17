import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<h1>Moonmist.io</h1>
		<nav>
			<a activeClassName={style.active} href="#about">About</a>
			<a activeClassName={style.active} href="#testimonials">Reviews</a>
			<a activeClassName={style.active} href="#contact">Contact</a>
		</nav>
	</header>
);

export default Header;
