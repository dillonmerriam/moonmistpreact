import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import About from './about';
import Contact from './contact';
import Hero from './hero';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Testimonials from './testimonials';


const App = () => (
	<div id="app">
		<Header />
		<Hero />
		<About />
		<Testimonials />
		<Contact />
	</div>
)

export default App;
