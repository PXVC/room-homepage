import { useMediaQuery } from "react-responsive";

import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";

import classes from "./components/index.module.scss";
import ArrowIcon from "./assets/images/icon-arrow.svg";

function App() {
	return (
		<>
			<div className={classes.header}>
				<Navbar />
				<section>
					<Carousel isMobile={useMediaQuery({ query: "(max-width: 500px)" })} />
					<div className={classes.textBox}>
						<h1>Discover innovative ways to decorate</h1>
						<p>
							We provide unmatched quality, comfort, and style for property owners across
							the country. Our experts combine form and function in bringing your vision
							to life. Create a room in your own style with our collection and make your
							property a reflection of you and what you love.
						</p>
						<a href="/#">
							SHOP NOW <img src={ArrowIcon} alt="arrow icon" />
						</a>
					</div>
				</section>
			</div>
			<section className={classes.body}>
				<img src={require("./assets/images/image-about-dark.jpg")} alt="about" />
				<div className={classes.textBox}>
					<h2>ABOUT OUR FURNITURE</h2>
					<p>
						Our multifunctional collection blends design and function to suit your
						individual taste. Make each room unique, or pick a cohesive theme that best
						express your interests and what inspires you. Find the furniture pieces you
						need, from traditional to contemporary styles or anything in between. Product
						specialists are available to help you create your dream space.
					</p>
				</div>
				<img src={require("./assets/images/image-about-light.jpg")} alt="about" />
			</section>
		</>
	);
}

export default App;
