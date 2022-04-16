import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";

const Game = () => {
	const alphabet: string[] = [
		"פ",
		"ו",
		"ט",
		"א",
		"ר",
		"ק",
		"ל",
		"ח",
		"י",
		"ע",
		"כ",
		"ג",
		"ד",
		"ש",
		"ת",
		"צ",
		"מ",
		"נ",
		"ה",
		"ב",
		"ס",
		"ז"
	];
	const words: string[] = [
		"מעולה",
		"קדמונ",
		"מעולפ",
		"אהובה",
		"חמודה",
		"ארמונ",
		"מגילה",
		"מניפה",
		"חשמלי",
		"מתקדמ",
		"מערבי",
		"מזרחי",
		"מרוקו",
		"ישראל",
		"אנגליה",
		"ברזיל",
		"מכשיל",
		"מאדימ",
		"מחילה",
		"מנהרה",
		"ארגמן",
		"מתנדב",
		"מעורב",
		"מחושב",
		"מחושל",
		"משוחד",
		"מתבקש",
		"מתבלט",
		"מקודש",
		"טיפקס",
		"מגניב",
		"מקסימ",
		"ברווז",
		"מוצלח",
		""
	];

	let date = new Date();
	let day = date.getDay();
	let month = date.getMonth();

	// Calculate days since Dec 1st 2012
var initialDate = new Date("04/15/2022"); // Attention: month is zero-based
var now = Date.now();
var difference = now - initialDate.getTime();
var millisecondsPerDay = 24 * 60 * 60 * 1000;
var daysSince = Math.floor(difference / millisecondsPerDay);

	const [ dailyWord, setDailyWord ] = useState<string>(words[day]); //The daily chosen word.
	const [ win, setWin ] = useState<boolean>(false); //Will change to 'true' when win condition is fulfilled.
	const [ currentRow, setCurrentRow ] = useState<number>(1); //The current row which letters are being added to.
	const [ currentIndex, setCurrentIndex ] = useState<number>(0); //The current index in the word which letters are being added to.

	//States of the text rows the guesses go to
	const [ row1, setRow1 ] = useState<string[]>([ "", "", "", "", "" ]);
	const [ row2, setRow2 ] = useState<string[]>([ "", "", "", "", "" ]);
	const [ row3, setRow3 ] = useState<string[]>([ "", "", "", "", "" ]);
	const [ row4, setRow4 ] = useState<string[]>([ "", "", "", "", "" ]);
	const [ row5, setRow5 ] = useState<string[]>([ "", "", "", "", "" ]);
	const [ row6, setRow6 ] = useState<string[]>([ "", "", "", "", "" ]);

	const [ yellowCubes, setYellowCubes ] = useState<string[]>([]); // Array that stores the IDs of cubes that contain semi-correct guesses.
	const [ greenCubes, setGreenCubes ] = useState<string[]>([]); // Array that stores the IDs of cubes that contain fully correct guesses.
	const [ toReveal, setToReveal ] = useState<string[]>([]); //Array that stores the IDs of cubes that contain any guess, for styling purposes.
	const [ greyLetters, setGreyLetters ] = useState<string[]>([]);
	const [ yellowLetters, setYellowLetters ] = useState<string[]>([]);
	const [ greenLetters, setGreenLetters ] = useState<string[]>([]);

	const [winRow, setWinRow] = useState<number>();
	//Function to get how many times the same substring appears in a string, in our case - character in a word.
	const getOccurrence = (value: string, word: string) => {
		return word.split(value).length - 1;
	};

	const visualizeResult = () => {

		let result: string = `וורדאלעדו ${daysSince}\nנסיון ${winRow} מתוך 6\n`;

		for (let index = 0; index < 30; index++) {
			if(document.getElementById(`key${index}`)?.innerText !== ""){
				if(greenCubes.includes(`key${index}`)){
					result +="🟩";
				}
				else if(yellowCubes.includes(`key${index}`)){
					result +="🟨";
				}
				else{
					result +="⬛";
				}
				if((index+1) % 5 === 0){
					result +="\n"
				}
			}
		}

		return(result);
	}

	//What happens when you click a letter on the virtual keyboard.
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
		} else if (currentRow === 6) {
			const rowCopy = row6.slice();
			rowCopy[currentIndex] = letter;
			setRow6(rowCopy);
			setCurrentIndex(currentIndex + 1);
		}
	};

	//what happens when you click backspace on the virtual keyboard.
	const backspacePress = () => {
		if (currentIndex > 0) {
			if (currentRow === 1) {
				const rowCopy = row1.slice();
				rowCopy[currentIndex - 1] = "";
				setRow1(rowCopy);
				setCurrentIndex(currentIndex - 1);
			} else if (currentRow === 2) {
				const rowCopy = row2.slice();
				rowCopy[currentIndex - 1] = "";
				setRow2(rowCopy);
				setCurrentIndex(currentIndex - 1);
			} else if (currentRow === 3) {
				const rowCopy = row3.slice();
				rowCopy[currentIndex - 1] = "";
				setRow3(rowCopy);
				setCurrentIndex(currentIndex - 1);
			} else if (currentRow === 4) {
				const rowCopy = row4.slice();
				rowCopy[currentIndex - 1] = "";
				setRow4(rowCopy);
				setCurrentIndex(currentIndex - 1);
			} else if (currentRow === 5) {
				const rowCopy = row5.slice();
				rowCopy[currentIndex - 1] = "";
				setRow5(rowCopy);
				setCurrentIndex(currentIndex - 1);
			} else if (currentRow === 6) {
				const rowCopy = row6.slice();
				rowCopy[currentIndex - 1] = "";
				setRow6(rowCopy);
				setCurrentIndex(currentIndex - 1);
			}
		}
		visualizeResult();
	};

	// const returnParallelLetter = (character: string) => {
	// 	if(character === "מ") {
	// 		return "ם";
	// 	}
	// 	else if(character === "נ"){
	// 		return "ן";
	// 	}
	// 	else if(character === "פ"){
	// 		return "ף";
	// 	}
	// 	else if(character === "צ"){
	// 		return "ץ";
	// 	}
	// 	else if(character === "ם"){
	// 		return "מ";
	// 	}
	// 	else if(character === "ן"){
	// 		return "נ";
	// 	}
	// 	else if(character === "ף"){
	// 		return "פ";
	// 	}
	// 	else if(character === "ץ"){
	// 		return "צ";
	// 	}
	// 	else{
	// 		return "";
	// 	}
	// }

	// const pushParallelLetter = (arr: string[]) => {
	// 	if (arr.includes("נ") && !arr.includes("ן")) {
	// 		arr.push("ן");
	// 	}
	// 	if (arr.includes("מ") && !arr.includes("ם")) {
	// 		arr.push("ם");
	// 	}
	// 	if (arr.includes("צ") && !arr.includes("ץ")) {
	// 		arr.push("ץ");
	// 	}
	// 	if (arr.includes("פ") && !arr.includes("ף")) {
	// 		arr.push("ף");
	// 	}
	// 	if (arr.includes("ן") && !arr.includes("נ")) {
	// 		arr.push("נ");
	// 	}
	// 	if (arr.includes("ם") && !arr.includes("מ")) {
	// 		arr.push("מ");
	// 	}
	// 	if (arr.includes("ץ") && !arr.includes("צ")) {
	// 		arr.push("צ");
	// 	}
	// 	if (arr.includes("ף") && !arr.includes("פ")) {
	// 		arr.push("פ");
	// 	}
	// 	return;
	// };

	// function that "uses up" a guess if the word exists in the word bank, and then displays if any letter matches or exists in the daily word.
	const sendGuess = async () => {
		if (currentIndex === 5) {
			const greenLoad: string[] = greenCubes.slice();
			const yellowLoad: string[] = yellowCubes.slice();
			const revealLoad: string[] = toReveal.slice();
			const greyLettersLoad: string[] = greyLetters.slice();
			const yellowLettersLoad: string[] = yellowLetters.slice();
			const greenLettersLoad: string[] = greenLetters.slice();
			let markedLetters: string[] = [];
			if (currentRow === 1) {
				for (let index = 0; index < row1.length; index++) {
					let occurences: number = getOccurrence(row1[index], dailyWord);
					let markedTimes: number = getOccurrence(row1[index], markedLetters.toString());
					if (dailyWord[index] === row1[index]) {
						markedLetters.push(row1[index]);
						greenLoad.push(`key${index}`);
						greenLettersLoad.push(row1[index]);
					}
					// else if ( dailyWord[index] === returnParallelLetter(row1[index])){
					// 	markedLetters.push(returnParallelLetter(row1[index]));
					// 	greenLoad.push(`key${index}`);
					// 	greenLettersLoad.push(returnParallelLetter(row1[index]));
					// }
					else if (
						dailyWord.includes(row1[index]) &&
						((occurences > 1 && occurences > markedTimes) ||
							(occurences === 1 && !markedLetters.includes(row1[index])))
					) {
						markedLetters.push(row1[index]);
						yellowLoad.push(`key${index}`);
						yellowLettersLoad.push(row1[index]);
					}
					// else if (
					// 	dailyWord.includes(returnParallelLetter(row1[index])) &&
					// 	((occurences > 1 && occurences > markedTimes) ||
					// 		(occurences === 1 && !markedLetters.includes(returnParallelLetter(row1[index]))))
					// ) {
					// 	markedLetters.push(returnParallelLetter(row1[index]));
					// 	yellowLoad.push(`key${index}`);
					// 	yellowLettersLoad.push(returnParallelLetter(row1[index]));
					// }
					
					else if (!greenCubes.includes(row1[index]) && !yellowCubes.includes(row1[index])) {
						greyLettersLoad.push(row1[index]);
					}
					revealLoad.push(`key${index}`);
				}
			} else if (currentRow === 2) {
				for (let index = 0; index < row2.length; index++) {
					let occurences: number = getOccurrence(row2[index], dailyWord);
					let markedTimes: number = getOccurrence(row2[index], markedLetters.toString());
					if (dailyWord[index] === row2[index]) {
						markedLetters.push(row2[index]);
						greenLoad.push(`key${index + 5}`);
						greenLettersLoad.push(row2[index]);
					} else if (
						(dailyWord.includes(row2[index])) &&
						((occurences > 1 && occurences > markedTimes) ||
							(occurences === 1 && !markedLetters.includes(row2[index])))
					) {
						markedLetters.push(row2[index]);
						yellowLoad.push(`key${index + 5}`);
						yellowLettersLoad.push(row2[index]);
					} else if (!greenCubes.includes(row2[index]) && !yellowCubes.includes(row2[index])) {
						greyLettersLoad.push(row2[index]);
					}
					revealLoad.push(`key${index + 5}`);
				}
			} else if (currentRow === 3) {
				for (let index = 0; index < row3.length; index++) {
					let occurences: number = getOccurrence(row3[index], dailyWord);
					let markedTimes: number = getOccurrence(row3[index], markedLetters.toString());
					if (dailyWord[index] === row3[index]) {
						markedLetters.push(row3[index]);
						greenLoad.push(`key${index + 10}`);
						greenLettersLoad.push(row3[index]);
					} else if (
						dailyWord.includes(row3[index]) &&
						((occurences > 1 && occurences > markedTimes) ||
							(occurences === 1 && !markedLetters.includes(row3[index])))
					) {
						markedLetters.push(row3[index]);
						yellowLoad.push(`key${index + 10}`);
						yellowLettersLoad.push(row3[index]);
					} else if (!greenCubes.includes(row3[index]) && !yellowCubes.includes(row3[index])) {
						greyLettersLoad.push(row3[index]);
					}
					revealLoad.push(`key${index + 10}`);
				}
			} else if (currentRow === 4) {
				for (let index = 0; index < row4.length; index++) {
					let occurences: number = getOccurrence(row4[index], dailyWord);
					let markedTimes: number = getOccurrence(row4[index], markedLetters.toString());
					if (dailyWord[index] === row4[index]) {
						markedLetters.push(row4[index]);
						greenLoad.push(`key${index + 15}`);
						greenLettersLoad.push(row4[index]);
					} else if (
						dailyWord.includes(row4[index]) &&
						((occurences > 1 && occurences > markedTimes) ||
							(occurences === 1 && !markedLetters.includes(row4[index])))
					) {
						markedLetters.push(row4[index]);
						yellowLoad.push(`key${index + 15}`);
						yellowLettersLoad.push(row4[index]);
					} else if (!greenCubes.includes(row4[index]) && !yellowCubes.includes(row4[index])) {
						greyLettersLoad.push(row4[index]);
					}
					revealLoad.push(`key${index + 15}`);
				}
			} else if (currentRow === 5) {
				for (let index = 0; index < row5.length; index++) {
					let occurences: number = getOccurrence(row5[index], dailyWord);
					let markedTimes: number = getOccurrence(row5[index], markedLetters.toString());
					if (dailyWord[index] === row5[index]) {
						markedLetters.push(row5[index]);
						greenLoad.push(`key${index + 20}`);
						greenLettersLoad.push(row5[index]);
					} else if (
						dailyWord.includes(row5[index]) &&
						((occurences > 1 && occurences > markedTimes) ||
							(occurences === 1 && !markedLetters.includes(row5[index])))
					) {
						markedLetters.push(row5[index]);
						yellowLoad.push(`key${index + 20}`);
						yellowLettersLoad.push(row5[index]);
					} else if (!greenCubes.includes(row5[index]) && !yellowCubes.includes(row5[index])) {
						greyLettersLoad.push(row5[index]);
					}
					revealLoad.push(`key${index + 20}`);
				}
			} else if (currentRow === 6) {
				for (let index = 0; index < row6.length; index++) {
					let occurences: number = getOccurrence(row6[index], dailyWord);
					let markedTimes: number = getOccurrence(row6[index], markedLetters.toString());
					if (dailyWord[index] === row6[index]) {
						markedLetters.push(row6[index]);
						greenLoad.push(`key${index + 25}`);
						greenLettersLoad.push(row6[index]);
					} else if (
						dailyWord.includes(row6[index]) &&
						((occurences > 1 && occurences > markedTimes) ||
							(occurences === 1 && !markedLetters.includes(row6[index])))
					) {
						markedLetters.push(row6[index]);
						yellowLoad.push(`key${index + 25}`);
						yellowLettersLoad.push(row6[index]);
					} else if (!greenCubes.includes(row6[index]) && !yellowCubes.includes(row6[index])) {
						greyLettersLoad.push(row6[index]);
					}
					revealLoad.push(`key${index + 25}`);
				}
			}
			// pushParallelLetter(greenLettersLoad);
			// pushParallelLetter(yellowLettersLoad);
			// pushParallelLetter(greyLettersLoad);
			console.log('yellowLettersLoad', yellowLettersLoad);
			setGreenCubes(greenLoad);
			setYellowCubes(yellowLoad);
			setToReveal(revealLoad);
			greyLetters.forEach((item) => {
				greyLettersLoad.push(item);
			});
			greenLetters.forEach((item) => {
				greenLettersLoad.push(item);
			});
			yellowLetters.forEach((item) => {
				yellowLettersLoad.push(item);
			});

			setGreyLetters(greyLettersLoad);
			setGreenLetters(greenLettersLoad);
			setYellowLetters(yellowLettersLoad);
			setCurrentRow(currentRow + 1);
			setCurrentIndex(0);
			checkWin(greenLoad);
		}
		return;
	};

	//Checks the win condition for the game.
	const checkWin = (arr: string[]) => {
		if (
			arr.includes("key0") &&
			arr.includes("key1") &&
			arr.includes("key2") &&
			arr.includes("key3") &&
			arr.includes("key4")
		) {
			setWin(true);
			alert("ניסיון אחד? מדהים!");
			setWinRow(1);
			setCurrentRow(8);
		} else if (
			arr.includes("key5") &&
			arr.includes("key6") &&
			arr.includes("key7") &&
			arr.includes("key8") &&
			arr.includes("key9")
		) {
			alert("שני נסיונות? עבודה מעולה!");
			setCurrentRow(8);
			setWin(true);
			setWinRow(2);
		} else if (
			arr.includes("key10") &&
			arr.includes("key11") &&
			arr.includes("key12") &&
			arr.includes("key13") &&
			arr.includes("key14")
		) {
			alert("שלושה נסיונות, מרשים!");
			setCurrentRow(8);
			setWin(true);
			setWinRow(3);

		} else if (
			arr.includes("key15") &&
			arr.includes("key16") &&
			arr.includes("key17") &&
			arr.includes("key18") &&
			arr.includes("key19")
		) {
			alert("כל הכבוד!");
			setCurrentRow(8);
			setWin(true);
			setWinRow(4);

		} else if (
			arr.includes("key20") &&
			arr.includes("key21") &&
			arr.includes("key22") &&
			arr.includes("key23") &&
			arr.includes("key24")
		) {
			alert("זה היה דיי קרוב, כל הכבוד!");
			setCurrentRow(8);
			setWin(true);
			setWinRow(5);

		} else if (
			arr.includes("key25") &&
			arr.includes("key26") &&
			arr.includes("key27") &&
			arr.includes("key28") &&
			arr.includes("key29")
		) {
			alert("זה היה ממש קרוב, כל הכבוד!");
			setCurrentRow(8);
			setWin(true);
			setWinRow(6);

		} else if (currentRow === 6) {
			alert(`המילה היומית הייתה '${dailyWord}', בהצלחה בפעם הבאה!`);
		}
	};

	return (
		<div className="game">
			<div className={`cube-grid ${win === true ? "win-animation" : ""}`}>
				<div className="cube-row">
					{row1.map((value, key) => (
						<p
							className={`text-cube ${yellowCubes.includes("key" + key)
								? "yellow-cube"
								: ""} ${greenCubes.includes("key" + key) ? "green-cube" : ""} ${toReveal.includes(
								"key" + key
							)
								? "revealing"
								: ""}`}
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
								: ""} ${greenCubes.includes("key" + (key + 5)) ? "green-cube" : ""} ${toReveal.includes(
								"key" + (key + 5)
							)
								? "revealing"
								: ""}`}
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
								: ""} ${greenCubes.includes("key" + (key + 10))
								? "green-cube"
								: ""} ${toReveal.includes("key" + (key + 10)) ? "revealing" : ""}`}
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
								: ""} ${greenCubes.includes("key" + (key + 15))
								? "green-cube"
								: ""} ${toReveal.includes("key" + (key + 15)) ? "revealing" : ""}`}
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
								: ""} ${greenCubes.includes("key" + (key + 20))
								? "green-cube"
								: ""} ${toReveal.includes("key" + (key + 20)) ? "revealing" : ""}`}
							id={"key" + (key + 20)}>
							{value}
						</p>
					))}
				</div>
				<div className="cube-row">
					{row6.map((value, key) => (
						<p
							className={`text-cube ${yellowCubes.includes("key" + (key + 25))
								? "yellow-cube"
								: ""} ${greenCubes.includes("key" + (key + 25))
								? "green-cube"
								: ""} ${toReveal.includes("key" + (key + 25)) ? "revealing" : ""}`}
							id={"key" + (key + 25)}>
							{value}
						</p>
					))}
				</div>
			</div>
						<button className={`result-button ${winRow ? "" : "hidden"}`} onClick={() => navigator.clipboard.writeText(visualizeResult())}>העתק תוצאה</button>
			<div className="letter-cube-grid">
				<div className="letter-row">
					<p className="letter-cube backspace" onClick={() => backspacePress()}>
						<FontAwesomeIcon icon={faBackspace} />
					</p>
					{alphabet.slice(0, 7).map((value, key) => (
						<p
							className={`letter-cube ${greyLetters.includes(value) ? "blacken" : ""}
							 ${greenLetters.includes(value) ? "green-cube" : ""}
							 ${yellowLetters.includes(value) ? "yellow-cube" : ""}`}
							onClick={() => letterPress(value)}>
							{value}
						</p>
					))}
				</div>
				<div className="letter-row">
					{alphabet.slice(7, 16).map((value, key) => (
						<p
							className={`letter-cube ${greyLetters.includes(value) ? "blacken" : ""}
							${greenLetters.includes(value) ? "green-cube" : ""}
							${yellowLetters.includes(value) ? "yellow-cube" : ""}`}
							onClick={() => letterPress(value)}>
							{value}
						</p>
					))}
				</div>
				<div className="letter-row">
					{alphabet.slice(16).map(
						(value, key) =>
								<p
									className={`letter-cube ${greyLetters.includes(value) ? "blacken" : ""}
							${greenLetters.includes(value) ? "green-cube" : ""}
							${yellowLetters.includes(value) ? "yellow-cube" : ""}`}
									onClick={() => letterPress(value)}>
									{value}
								</p>
					)}

					<p className="letter-cube enter" onClick={(e) => sendGuess()}>
						Enter
					</p>
				</div>
			</div>
		</div>
	);
};

export default Game;
