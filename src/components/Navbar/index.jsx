import { useState } from "react";

import Hamburger from "../../assets/images/icon-hamburger.svg";
import Logo from "../../assets/images/logo.svg";
import CloseIcon from "../../assets/images/icon-close.svg";
import classes from "./index.module.scss";

function Navbar() {
	const [isExpand, setIsExpand] = useState(false);

	const handleExpand = () => {
		setIsExpand(!isExpand);
	};

	return (
		<>
			<nav className={isExpand ? classes["expand"] : ""}>
				<img src={CloseIcon} alt="close icon" onClick={() => handleExpand()} />
				<ul>
					<li>home</li>
					<li>shop</li>
					<li>about</li>
					<li>contact</li>
				</ul>
			</nav>
			<header>
				<img src={Hamburger} alt="hamburger icon" onClick={() => handleExpand()} />
				<img src={Logo} alt="room's logo" />
			</header>
		</>
	);
}

export default Navbar;
