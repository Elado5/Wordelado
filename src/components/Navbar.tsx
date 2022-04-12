import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
	return (
		<nav className="navbar">
			<FontAwesomeIcon icon={faCog} id="icon" />
			<div className="title">
				<p className="title-half">וורד</p>
				<p className="title-half2">אלעדו</p>
			</div>
			<FontAwesomeIcon icon={faQuestionCircle} id="icon" />
		</nav>
	);
};

export default Navbar;
