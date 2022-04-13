import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";

const Game = () => {
	const alphabet :string[] = ["פ", "ם", "ן", "ו", "ט", "א", "ר", "ק", "ף", "ך", "ל", "ח", "י", "ע", "כ", "ג", "ד", "ש", "ץ", "ת", "צ", "מ", "נ", "ה", "ב", "ס", "ז"];
	const [ dailyWord, setDailyWord ] = useState<string>("אהבתי"); //The daily chosen word
	const [ currentRow, setCurrentRow ] = useState<number>(1); //The current row which letters are being added to
	const [ currentIndex, setCurrentIndex ] = useState<number>(0); //The current index in the word which letters are being added to

	const [ guess1, setGuess1 ] = useState<string>("");
	const [ guess2, setGuess2 ] = useState<string>("");
	const [ guess3, setGuess3 ] = useState<string>("");
	const [ guess4, setGuess4 ] = useState<string>("");
	const [ guess5, setGuess5 ] = useState<string>("");

	const [ row1, setRow1 ] = useState<string[]>([ "", "", "", "", "" ]);
	const [ row2, setRow2 ] = useState<string[]>([ "", "", "", "", "" ]);
	const [ row3, setRow3 ] = useState<string[]>([ "", "", "", "", "" ]);
	const [ row4, setRow4 ] = useState<string[]>([ "", "", "", "", "" ]);
	const [ row5, setRow5 ] = useState<string[]>([ "", "", "", "", "" ]);

	const [ yellowCubes, setYellowCubes ] = useState<string[]>([]);
	const [ greenCubes, setGreenCubes ] = useState<string[]>([]);
	const [	toReveal, setToReveal] = useState<string[]>([]);

	const letterPress = (letter: string) => {
		if (currentIndex > 4 || currentIndex < 0) {
			return;
		}
		if (currentRow === 1) {
			const rowCopy = row1.slice();
			rowCopy[currentIndex] = letter;
			setRow1(rowCopy);
			setCurrentIndex(currentIndex + 1);
		} else if (currentRow === 2) {
			const rowCopy = row2.slice();
			rowCopy[currentIndex] = letter;
			setRow2(rowCopy);
			setCurrentIndex(currentIndex + 1);
		} else if (currentRow === 3) {
			const rowCopy = row3.slice();
			rowCopy[currentIndex] = letter;
			setRow3(rowCopy);
			setCurrentIndex(currentIndex + 1);
		} else if (currentRow === 4) {
			const rowCopy = row4.slice();
			rowCopy[currentIndex] = letter;
			setRow4(rowCopy);
			setCurrentIndex(currentIndex + 1);
		} else if (currentRow === 5) {
			const rowCopy = row5.slice();
			rowCopy[currentIndex] = letter;
			setRow5(rowCopy);
			setCurrentIndex(currentIndex + 1);
		}
	};

	const backspacePress = () => {
		if ( currentIndex > 0) {
			if(currentRow === 1){
				const rowCopy = row1.slice();
				rowCopy[currentIndex-1] = "";
				setRow1(rowCopy);
				setCurrentIndex(currentIndex - 1);
			}
			else if(currentRow === 2){
				const rowCopy = row2.slice();
				rowCopy[currentIndex-1] = "";
				setRow2(rowCopy);
				setCurrentIndex(currentIndex - 1);
			}
			else if (currentRow === 3){
				const rowCopy = row3.slice();
				rowCopy[currentIndex-1] = "";
				setRow3(rowCopy);
				setCurrentIndex(currentIndex - 1);
			}
			else if (currentRow === 4){
				const rowCopy = row4.slice();
				rowCopy[currentIndex-1] = "";
				setRow4(rowCopy);
				setCurrentIndex(currentIndex - 1);
			}
			else if (currentRow === 5){
				const rowCopy = row5.slice();
				rowCopy[currentIndex-1] = "";
				setRow5(rowCopy);
				setCurrentIndex(currentIndex - 1);
			}
		}
	}

	// function that "uses up" a guess if the word exists in the word bank, and then displays if any letter matches or exists in the daily word.
	const sendGuess = async () => {
		if (currentIndex === 5) {
			const greenLoad: string[] = greenCubes.slice();
			const yellowLoad: string[] = yellowCubes.slice();
			const revealLoad: string[] = toReveal.slice();
			if (currentRow === 1) {
				for (let index = 0; index < row1.length; index++) {
					if (dailyWord[index] === row1[index]) {
						greenLoad.push(`key${index}`);
					} else if (dailyWord.includes(row1[index])) {
						yellowLoad.push(`key${index}`);
					}
					revealLoad.push(`key${index}`)
				}
			}
			if (currentRow === 2) {
				for (let index = 0; index < row2.length; index++) {
					if (dailyWord[index] === row2[index]) {
						greenLoad.push(`key${index + 5}`);
					} else if (dailyWord.includes(row2[index])) {
						yellowLoad.push(`key${index + 5}`);
					}
					revealLoad.push(`key${(index + 5)}`)
				}

			}
			if (currentRow === 3) {
				for (let index = 0; index < row3.length; index++) {
					if (dailyWord[index] === row3[index]) {
						greenLoad.push(`key${index + 10}`);
					} else if (dailyWord.includes(row3[index])) {
						yellowLoad.push(`key${index + 10}`);
					}
					revealLoad.push(`key${index + 10}`)
				}

			}
			if (currentRow === 4) {
				for (let index = 0; index < row4.length; index++) {
					if (dailyWord[index] === row4[index]) {
						greenLoad.push(`key${index + 15}`);
					} else if (dailyWord.includes(row4[index])) {
						yellowLoad.push(`key${index + 15}`);
					}
					revealLoad.push(`key${index + 15}`)
				}

			}
			if (currentRow === 5) {
				for (let index = 0; index < row5.length; index++) {
					if (dailyWord[index] === row5[index]) {
						greenLoad.push(`key${index + 20}`);
					} else if (dailyWord.includes(row5[index])) {
						yellowLoad.push(`key${index + 20}`);
					}
					revealLoad.push(`key${index + 20}`)
				}

			}
			setGreenCubes(greenLoad);
			setYellowCubes(yellowLoad);
			setToReveal(revealLoad);
			setCurrentRow(currentRow + 1);
			setCurrentIndex(0);
			checkWin(greenLoad);
			console.log('greenCubes', greenCubes)
		}
		return;
	};

	const checkWin = (arr :string[]) => {
		if (arr.includes("key0") && arr.includes("key1") && arr.includes("key2") && arr.includes("key3") && arr.includes("key4")){
			alert("ניסיון אחד? מדהים!");
			setCurrentRow(6);
		} 
		else if (arr.includes("key5") && arr.includes("key6") && arr.includes("key7") && arr.includes("key8") && arr.includes("key9")){
			alert("שני נסיונות? עבודה מעולה!");
			setCurrentRow(6);
		}
		else if (arr.includes("key10") && arr.includes("key11") && arr.includes("key12") && arr.includes("key13") && arr.includes("key14")){
			alert("שלושה נסיונות, מרשים!");
			setCurrentRow(6);
		}
		else if (arr.includes("key15") && arr.includes("key16") && arr.includes("key17") && arr.includes("key18") && arr.includes("key19")){
			alert("כל הכבוד!");
			setCurrentRow(6);
		}
		else if (arr.includes("key20") && arr.includes("key21") && arr.includes("key22") && arr.includes("key23") && arr.includes("key24")){
			alert("זה היה קרוב, כל הכבוד!");
			setCurrentRow(6);
		}
	}

	return (
		<div className="game">
			<div className="cube-grid">
				<div className="cube-row">
					{row1.map((value, key) => (
						<p
							className={`text-cube ${yellowCubes.includes("key" + key)
								? "yellow-cube"
								: ""} ${greenCubes.includes("key" + key) ? "green-cube" : ""} ${toReveal.includes("key" + key) ? "revealing" : ""}`}
							id={"key" + key}>
							{value}
						</p>
					))}
				</div>
				<div className="cube-row">
					{row2.map((value, key) => (
						<p
							className={`text-cube ${yellowCubes.includes("key" + (key + 5))
								? "yellow-cube"
								: ""} ${greenCubes.includes("key" + (key + 5)) ? "green-cube" : ""} ${toReveal.includes("key" + (key + 5)) ? "revealing" : ""}`}
							id={"key" + (key + 5)}>
							{value}
						</p>
					))}
				</div>
				<div className="cube-row">
					{row3.map((value, key) => (
						<p
							className={`text-cube ${yellowCubes.includes("key" + (key + 10))
								? "yellow-cube"
								: ""} ${greenCubes.includes("key" + (key + 10)) ? "green-cube" : ""} ${toReveal.includes("key" + (key + 10)) ? "revealing" : ""}`}
							id={"key" + (key + 10)}>
							{value}
						</p>
					))}
				</div>
				<div className="cube-row">
					{row4.map((value, key) => (
						<p
							className={`text-cube ${yellowCubes.includes("key" + (key + 15))
								? "yellow-cube"
								: ""} ${greenCubes.includes("key" + (key + 15)) ? "green-cube" : ""} ${toReveal.includes("key" + (key + 15)) ? "revealing" : ""}`}
							id={"key" + (key + 15)}>
							{value}
						</p>
					))}
				</div>
				<div className="cube-row">
					{row5.map((value, key) => (
						<p
							className={`text-cube ${yellowCubes.includes("key" + (key + 20))
								? "yellow-cube"
								: ""} ${greenCubes.includes("key" + (key + 20)) ? "green-cube" : ""} ${toReveal.includes("key" + (key + 20)) ? "revealing" : ""}`}
							id={"key" + (key + 20)}>
							{value}
						</p>
					))}
				</div>
			</div>

			<div className="letter-cube-grid">
				<div className="letter-row">
					<p className="letter-cube backspace">
						<FontAwesomeIcon onClick= {() => backspacePress()} icon={faBackspace} />
					</p>
					{alphabet.slice(0, 8).map((value, key) => <p className="letter-cube" onClick={() => letterPress(value)}>{value}</p>)}

				</div>
				<div className="letter-row">
				{alphabet.slice(8, 18).map((value, key) => <p className="letter-cube" onClick={() => letterPress(value)}>{value}</p>)}

				</div>
				<div className="letter-row">
				{alphabet.slice(18).map((value, key) => <p className="letter-cube" onClick={() => letterPress(value)}>{value}</p>)}

					<p className="letter-cube enter" onClick={(e) => sendGuess()}>
						Enter
					</p>
				</div>
			</div>
		</div>
	);
};

export default Game;
