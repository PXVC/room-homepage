import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";

import classes from "./components/index.module.scss";

import ArrowIcon from "./assets/images/icon-arrow.svg";

function App() {
	return (
		<div className="header">
			<Navbar />
			<section>
				<Carousel isMobile={true} />
				<div className={classes.textBox}>
					<h1>Discover innovative ways to decorate</h1>
					<p>
						We provide unmatched quality, comfort, and style for property owners across
						the country. Our experts combine form and function in bringing your vision to
						life. Create a room in your own style with our collection and make your
						property a reflection of you and what you love.
					</p>
					<a href="/#">
						SHOP NOW <img src={ArrowIcon} alt="arrow icon" />
					</a>
				</div>
			</section>
		</div>
	);
}

export default App;
