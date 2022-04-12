import React, { useState } from "react";

const Game = () => {
	const [ letter1, setLetter1 ] = useState<string>("");
	const [ letter2, setLetter2 ] = useState<string>("");
	const [ letter3, setLetter3 ] = useState<string>("");
	const [ letter4, setLetter4 ] = useState<string>("");
	const [ letter5, setLetter5 ] = useState<string>("");
	const [ letter6, setLetter6 ] = useState<string>("");
	const [ letter7, setLetter7 ] = useState<string>("");
	const [ letter8, setLetter8 ] = useState<string>("");
	const [ letter9, setLetter9 ] = useState<string>("");
	const [ letter10, setLetter10 ] = useState<string>("");
	const [ letter11, setLetter11 ] = useState<string>("");
	const [ letter12, setLetter12 ] = useState<string>("");
	const [ letter13, setLetter13 ] = useState<string>("");
	const [ letter14, setLetter14 ] = useState<string>("");
	const [ letter15, setLetter15 ] = useState<string>("");
	const [ letter16, setLetter16 ] = useState<string>("");
	const [ letter17, setLetter17 ] = useState<string>("");
	const [ letter18, setLetter18 ] = useState<string>("");
	const [ letter19, setLetter19 ] = useState<string>("");
	const [ letter20, setLetter20 ] = useState<string>("");
	const [ letter21, setLetter21 ] = useState<string>("");
	const [ letter22, setLetter22 ] = useState<string>("");
	const [ letter23, setLetter23 ] = useState<string>("");
	const [ letter24, setLetter24 ] = useState<string>("");
	const [ letter25, setLetter25 ] = useState<string>("");

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
