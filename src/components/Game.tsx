import React, { useState } from "react";

const Game = () => {
	const [ letter1, setLetter1 ] = useState("");
	const [ letter2, setLetter2 ] = useState("");
	const [ letter3, setLetter3 ] = useState("");
	const [ letter4, setLetter4 ] = useState("");
	const [ letter5, setLetter5 ] = useState("");
	const [ letter6, setLetter6 ] = useState("");
	const [ letter7, setLetter7 ] = useState("");
	const [ letter8, setLetter8 ] = useState("");
	const [ letter9, setLetter9 ] = useState("");
	const [ letter10, setLetter10 ] = useState("");
	const [ letter11, setLetter11 ] = useState("");
	const [ letter12, setLetter12 ] = useState("");
	const [ letter13, setLetter13 ] = useState("");
	const [ letter14, setLetter14 ] = useState("");
	const [ letter15, setLetter15 ] = useState("");
	const [ letter16, setLetter16 ] = useState("");
	const [ letter17, setLetter17 ] = useState("");
	const [ letter18, setLetter18 ] = useState("");
	const [ letter19, setLetter19 ] = useState("");
	const [ letter20, setLetter20 ] = useState("");
	const [ letter21, setLetter21 ] = useState("");
	const [ letter22, setLetter22 ] = useState("");
	const [ letter23, setLetter23 ] = useState("");
	const [ letter24, setLetter24 ] = useState("");
	const [ letter25, setLetter25 ] = useState("");

	return (

			<div className="cube-grid">
				<div className="cube-row">
					<p className="text-cube">{letter1}</p>
					<p className="text-cube">{letter2}</p>
					<p className="text-cube">{letter3}</p>
					<p className="text-cube">{letter4}</p>
					<p className="text-cube">{letter5}</p>
				</div>
				<div className="cube-row">
					<p className="text-cube">{letter6}</p>
					<p className="text-cube">{letter7}</p>
					<p className="text-cube">{letter8}</p>
					<p className="text-cube">{letter9}</p>
					<p className="text-cube">{letter10}</p>
				</div>
				<div className="cube-row">
					<p className="text-cube">{letter11}</p>
					<p className="text-cube">{letter12}</p>
					<p className="text-cube">{letter13}</p>
					<p className="text-cube">{letter14}</p>
					<p className="text-cube">{letter15}</p>
				</div>
				<div className="cube-row">
					<p className="text-cube">{letter16}</p>
					<p className="text-cube">{letter17}</p>
					<p className="text-cube">{letter18}</p>
					<p className="text-cube">{letter19}</p>
					<p className="text-cube">{letter20}</p>
				</div>
				<div className="cube-row">
					<p className="text-cube">{letter21}</p>
					<p className="text-cube">{letter22}</p>
					<p className="text-cube">{letter23}</p>
					<p className="text-cube">{letter24}</p>
					<p className="text-cube">{letter25}</p>
				</div>
			</div>
	);
};

export default Game;
