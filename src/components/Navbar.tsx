import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { useStateType, setUseStateType } from "../implementation";
import ToggleButton from "react-toggle-button";

const Navbar = ({
	setShowHelp,
	lightTheme,
	setLightTheme
}: {
	setShowHelp: setUseStateType;
	lightTheme: useStateType;
	setLightTheme: setUseStateType;
}) => {
	const [ dropDown, setDropDown ] = useState(false);
	const [ buttonState, setButtonState ] = useState(false);
	return (
		<nav className="navbar">
			<div className="settings">
				<FontAwesomeIcon
					icon={faCog}
					id="icon"
					onClick={() => {
						setDropDown(!dropDown);
					}}
				/>
				<div className={`dropdown-menu ${dropDown ? "" : "hidden"}`}>
					<ToggleButton
						inactiveLabel={"כהה"}
						activeLabel={"בהיר"}
						value={buttonState}
						onToggle={() => {
							setButtonState(!buttonState);
							setLightTheme(!lightTheme);
						}}>
						<p>ערכת נושא</p>
					</ToggleButton>
				</div>
			</div>
			<div className="title">
				<p className="title-half">וורד</p>
				<p className="title-half2">אלעדו</p>
			</div>
			<FontAwesomeIcon
				icon={faQuestionCircle}
				id="icon"
				onClick={() => {
					setShowHelp(true);
				}}
			/>
		</nav>
	);
};

export default Navbar;
