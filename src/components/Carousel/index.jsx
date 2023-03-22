import classes from "./index.module.scss";

function Carousel({ isMobile }) {
	return (
		<div className={classes["carousel"]}>
			{isMobile ? (
				<>
					<img
						src={require("../../assets/images/mobile-image-hero-1.jpg")}
						alt="hero img"
					/>
					<img
						src={require("../../assets/images/mobile-image-hero-2.jpg")}
						alt="hero img"
					/>
					<img
						src={require("../../assets/images/mobile-image-hero-3.jpg")}
						alt="hero img"
					/>
				</>
			) : (
				<>
					<img
						src={require("../../assets/images/desktop-image-hero-1.jpg")}
						alt="hero img"
					/>
					<img
						src={require("../../assets/images/desktop-image-hero-2.jpg")}
						alt="hero img"
					/>
					<img
						src={require("../../assets/images/desktop-image-hero-3.jpg")}
						alt="hero img"
					/>
				</>
			)}
		</div>
	);
}

export default Carousel;
