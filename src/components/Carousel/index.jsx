import { useState } from "react";

import leftIcon from "../../assets/images/icon-angle-left.svg";
import rightIcon from "../../assets/images/icon-angle-right.svg";
import classes from "./index.module.scss";

function Carousel({ isMobile }) {
	const [slide, setSlide] = useState(1);

	const handleToggleLeft = () => {
		slide === 1 ? setSlide(3) : setSlide(slide - 1);
	};

	const handleToggleRight = () => {
		slide === 3 ? setSlide(1) : setSlide(slide + 1);
	};

	return (
		<div className={classes.carousel}>
			{isMobile ? (
				<img
					src={require(`../../assets/images/mobile-image-hero-${slide}.jpg`)}
					alt="hero img"
				/>
			) : (
				<img
					src={require(`../../assets/images/desktop-image-hero-${slide}.jpg`)}
					alt="hero img"
				/>
			)}

			<div className={classes.btnGroup}>
				<button onClick={() => handleToggleLeft()}>
					<img src={leftIcon} alt="left-icon" />
				</button>
				<button onClick={() => handleToggleRight()}>
					<img src={rightIcon} alt="left-icon" />
				</button>
			</div>
		</div>
	);
}

export default Carousel;
