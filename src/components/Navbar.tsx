import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    
	return (
		<nav className="navbar">
			<FontAwesomeIcon icon={faCog} />
		</nav>
	);
};

export default Navbar;
