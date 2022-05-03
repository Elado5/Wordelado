import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";
import { Words_Filter } from "../words_filter";
import {Words_Source } from "../words_source";

const Game = () => {
	const alphabet: string[] = [
		"פ",
		"ם",
		"ן",
		"ו",
		"ט",
		"א",
		"ר",
		"ק",
		"ף",
		"ך",
		"ל",
		"ח",
		"י",
		"ע",
		"כ",
		"ג",
		"ד",
		"ש",
		"ץ",
		"ת",
		"צ",
		"מ",
		"נ",
		"ה",
		"ב",
		"ס",
		"ז"
	];

// Calculate days since launch
var initialDate = new Date("04/15/2022");
var now = Date.now();
var difference = now - initialDate.getTime();
var millisecondsPerDay = 24 * 60 * 60 * 1000;
var daysSince = Math.floor(difference / millisecondsPerDay);

	const [ dailyWord, setDailyWord ] = useState<string>(Words_Source[daysSince]); //The daily chosen word.
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

	const [ badTry1, setBadTry1] = useState(false);
	const [ badTry2, setBadTry2] = useState(false);
	const [ badTry3, setBadTry3] = useState(false);
	const [ badTry4, setBadTry4] = useState(false);
	const [ badTry5, setBadTry5] = useState(false);
	const [ badTry6, setBadTry6] = useState(false);


	const [ yellowCubes, setYellowCubes ] = useState<string[]>([]); // Array that stores the IDs of cubes that contain semi-correct guesses.
	const [ greenCubes, setGreenCubes ] = useState<string[]>([]); // Array that stores the IDs of cubes that contain fully correct guesses.
	const [ toReveal, setToReveal ] = useState<string[]>([]); //Array that stores the IDs of cubes that contain any guess, for styling purposes.
	const [ greyLetters, setGreyLetters ] = useState<string[]>([]);
	const [ yellowLetters, setYellowLetters ] = useState<string[]>([]);
	const [ greenLetters, setGreenLetters ] = useState<string[]>([]);

	const [winRow, setWinRow] = useState<number>();

	//returns if string is in Hebrew
	const containsHeb = (str :string) => {
		return (/[\u0590-\u05FF]/).test(str);
	}

	//Function to get how many times the same substring appears in a string, in our case - character in a word.
	const getOccurrence = (value: string, word: string) => {
		if(value !==""){
		return word.split(value).length - 1;
	}
	else{
		return 0;
	}
	};

	const visualizeResult = () => {

		let result: string = `וורדאלעדו ${daysSince}\nנסיון ${winRow} מתוך 6\n`;

		for (let index = 4; index >= 0; index--) {
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
				if(index=== 0){
					result +="\n"
				}
			}
		}
		for (let index = 9; index >= 5; index--) {
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
				if(index=== 5){
					result +="\n"
				}
			}
		}
		for (let index = 14; index >= 10; index--) {
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
				if(index=== 10){
					result +="\n"
				}
			}
		}
		for (let index = 19; index >= 15; index--) {
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
				if(index=== 15){
					result +="\n"
				}
			}
		}
		for (let index = 24; index >= 20; index--) {
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
				if(index=== 20){
					result +="\n"
				}
			}
		}
		for (let index = 29; index >= 25; index--) {
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
				if(index=== 25){
					result +="\n"
				}
			}
		}
		return(result);
	}

	//What happens when you click a letter on the virtual keyboard.
	const letterPress = (letter: string) => {
		if (currentIndex > 4 || currentIndex < 0 || !containsHeb(letter)) {
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

	const returnParallelLetter = (character: string) => {
		if(character === "מ") {
			return "ם";
		}
		else if(character === "נ"){
			return "ן";
		}
		else if(character === "פ"){
			return "ף";
		}
		else if(character === "צ"){
			return "ץ";
		}
		else if(character === "ם"){
			return "מ";
		}
		else if(character === "ן"){
			return "נ";
		}
		else if(character === "ף"){
			return "פ";
		}
		else if(character === "ץ"){
			return "צ";
		}
		else{
			return "";
		}
	}

	const pushParallelLetter = (arr: string[]) => {
		if (arr.includes("נ") && !arr.includes("ן")) {
			arr.push("ן");
		}
		if (arr.includes("מ") && !arr.includes("ם")) {
			arr.push("ם");
		}
		if (arr.includes("צ") && !arr.includes("ץ")) {
			arr.push("ץ");
		}
		if (arr.includes("פ") && !arr.includes("ף")) {
			arr.push("ף");
		}
		if (arr.includes("ן") && !arr.includes("נ")) {
			arr.push("נ");
		}
		if (arr.includes("ם") && !arr.includes("מ")) {
			arr.push("מ");
		}
		if (arr.includes("ץ") && !arr.includes("צ")) {
			arr.push("צ");
		}
		if (arr.includes("ף") && !arr.includes("פ")) {
			arr.push("פ");
		}
		return;
	};

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

				if(!Words_Filter.includes(row1.join("")) && !Words_Source.includes(row1.join(""))){
					setTimeout(() => setBadTry1(true), 100);
					setBadTry1(false)
					return;
				}

				for (let index = 0; index < row1.length; index++) {
					let occurences: number = getOccurrence(row1[index], dailyWord) + getOccurrence(returnParallelLetter(row1[index]), dailyWord);
					let markedTimes: number = getOccurrence(row1[index], markedLetters.toString());
					if (dailyWord[index] === row1[index] || dailyWord[index] === returnParallelLetter(row1[index])) {
						markedLetters.push(row1[index]);
						greenLoad.push(`key${index}`);
						greenLettersLoad.push(row1[index]);
						if (returnParallelLetter(row1[index]) !== ""){
						markedLetters.push(returnParallelLetter(row1[index]));
						greenLettersLoad.push(returnParallelLetter(row1[index]));
						}
					}
					else if (
					(dailyWord.includes(row1[index]) || dailyWord.includes(returnParallelLetter(row1[index]))) &&
						((occurences > 1 && occurences > markedTimes) ||
							(occurences === 1 && !markedLetters.includes(row1[index])))
					) {
						markedLetters.push(row1[index]);
						yellowLoad.push(`key${index}`);
						yellowLettersLoad.push(row1[index]);
						if (returnParallelLetter(row1[index]) !== ""){
							markedLetters.push(returnParallelLetter(row1[index]));
							yellowLoad.push(`key${index}`);
							yellowLettersLoad.push(returnParallelLetter(row1[index]));
						}
					}
					else if (!greenCubes.includes(row1[index]) && !yellowCubes.includes(row1[index])) {
						greyLettersLoad.push(row1[index]);
						greyLettersLoad.push(returnParallelLetter(row1[index]));
					}
					revealLoad.push(`key${index}`);
				}
			} else if (currentRow === 2) {
				if(!Words_Filter.includes(row2.join("")) && !Words_Source.includes(row2.join(""))){
					setTimeout(() => setBadTry2(true), 100);
					setBadTry2(false)
					return;
				}

				for (let index = 0; index < row2.length; index++) {
					let occurences: number = getOccurrence(row2[index], dailyWord) + getOccurrence(returnParallelLetter(row2[index]), dailyWord);
					let markedTimes: number = getOccurrence(row2[index], markedLetters.toString());
					if (dailyWord[index] === row2[index] || dailyWord[index] === returnParallelLetter(row2[index])) {
						markedLetters.push(row2[index]);
						greenLoad.push(`key${index + 5}`);
						greenLettersLoad.push(row2[index]);
						if (returnParallelLetter(row2[index]) !== ""){
						markedLetters.push(returnParallelLetter(row2[index]));
						greenLettersLoad.push(returnParallelLetter(row2[index]));
						}
					}
					else if (
					(dailyWord.includes(row2[index]) || dailyWord.includes(returnParallelLetter(row2[index]))) &&
						((occurences > 1 && occurences > markedTimes) ||
							(occurences === 1 && !markedLetters.includes(row2[index])))
					) {
						markedLetters.push(row2[index]);
						yellowLoad.push(`key${index + 5}`);
						yellowLettersLoad.push(row2[index]);
						if (returnParallelLetter(row2[index]) !== ""){
							markedLetters.push(returnParallelLetter(row2[index]));
							yellowLoad.push(`key${index + 5}`);
							yellowLettersLoad.push(returnParallelLetter(row2[index]));
						}
					}
					else if (!greenCubes.includes(row2[index]) && !yellowCubes.includes(row2[index])) {
						greyLettersLoad.push(row2[index]);
						greyLettersLoad.push(returnParallelLetter(row2[index]));
					}
					revealLoad.push(`key${index + 5}`);
				}
			} else if (currentRow === 3) {
				if(!Words_Filter.includes(row3.join("")) && !Words_Source.includes(row3.join(""))){
					setTimeout(() => setBadTry3(true), 100);
					setBadTry3(false)
					return;
				}

				for (let index = 0; index < row3.length; index++) {
					let occurences: number = getOccurrence(row3[index], dailyWord) + getOccurrence(returnParallelLetter(row3[index]), dailyWord);
					let markedTimes: number = getOccurrence(row3[index], markedLetters.toString());
					if (dailyWord[index] === row3[index] || dailyWord[index] === returnParallelLetter(row3[index])) {
						markedLetters.push(row3[index]);
						greenLoad.push(`key${index + 10}`);
						greenLettersLoad.push(row3[index]);
						if (returnParallelLetter(row3[index]) !== ""){
						markedLetters.push(returnParallelLetter(row3[index]));
						greenLettersLoad.push(returnParallelLetter(row3[index]));
						}
					}
					else if (
					(dailyWord.includes(row3[index]) || dailyWord.includes(returnParallelLetter(row3[index]))) &&
						((occurences > 1 && occurences > markedTimes) ||
							(occurences === 1 && !markedLetters.includes(row3[index])))
					) {
						markedLetters.push(row3[index]);
						yellowLoad.push(`key${index + 10}`);
						yellowLettersLoad.push(row3[index]);
						if (returnParallelLetter(row3[index]) !== ""){
							markedLetters.push(returnParallelLetter(row3[index]));
							yellowLoad.push(`key${index + 10}`);
							yellowLettersLoad.push(returnParallelLetter(row3[index]));
						}
					}
					else if (!greenCubes.includes(row3[index]) && !yellowCubes.includes(row3[index])) {
						greyLettersLoad.push(row3[index]);
						greyLettersLoad.push(returnParallelLetter(row3[index]));
					}
					revealLoad.push(`key${index + 10}`);
				}
			} else if (currentRow === 4) {
				if(!Words_Filter.includes(row4.join("")) && !Words_Source.includes(row4.join(""))){
					setTimeout(() => setBadTry4(true), 100);
					setBadTry4(false)
					return;
				}

				for (let index = 0; index < row4.length; index++) {
					let occurences: number = getOccurrence(row4[index], dailyWord) + getOccurrence(returnParallelLetter(row4[index]), dailyWord);
					let markedTimes: number = getOccurrence(row4[index], markedLetters.toString());
					if (dailyWord[index] === row4[index] || dailyWord[index] === returnParallelLetter(row4[index])) {
						markedLetters.push(row4[index]);
						greenLoad.push(`key${index + 15}`);
						greenLettersLoad.push(row4[index]);
						if (returnParallelLetter(row4[index]) !== ""){
						markedLetters.push(returnParallelLetter(row4[index]));
						greenLettersLoad.push(returnParallelLetter(row4[index]));
						}
					}
					else if (
					(dailyWord.includes(row4[index]) || dailyWord.includes(returnParallelLetter(row4[index]))) &&
						((occurences > 1 && occurences > markedTimes) ||
							(occurences === 1 && !markedLetters.includes(row4[index])))
					) {
						markedLetters.push(row4[index]);
						yellowLoad.push(`key${index + 15}`);
						yellowLettersLoad.push(row4[index]);
						if (returnParallelLetter(row4[index]) !== ""){
							markedLetters.push(returnParallelLetter(row4[index]));
							yellowLoad.push(`key${index + 15}`);
							yellowLettersLoad.push(returnParallelLetter(row4[index]));
						}
					}
					else if (!greenCubes.includes(row4[index]) && !yellowCubes.includes(row4[index])) {
						greyLettersLoad.push(row4[index]);
						greyLettersLoad.push(returnParallelLetter(row4[index]));
					}
					revealLoad.push(`key${index + 15}`);
				}
			} else if (currentRow === 5) {
				if(!Words_Filter.includes(row5.join("")) && !Words_Source.includes(row5.join(""))){
					setTimeout(() => setBadTry5(true), 100);
					setBadTry5(false)
					return;
				}

				for (let index = 0; index < row5.length; index++) {
					let occurences: number = getOccurrence(row5[index], dailyWord) + getOccurrence(returnParallelLetter(row5[index]), dailyWord);
					let markedTimes: number = getOccurrence(row5[index], markedLetters.toString());
					if (dailyWord[index] === row5[index] || dailyWord[index] === returnParallelLetter(row5[index])) {
						markedLetters.push(row5[index]);
						greenLoad.push(`key${index + 20}`);
						greenLettersLoad.push(row5[index]);
						if (returnParallelLetter(row5[index]) !== ""){
						markedLetters.push(returnParallelLetter(row5[index]));
						greenLettersLoad.push(returnParallelLetter(row5[index]));
						}
					}
					else if (
					(dailyWord.includes(row5[index]) || dailyWord.includes(returnParallelLetter(row5[index]))) &&
						((occurences > 1 && occurences > markedTimes) ||
							(occurences === 1 && !markedLetters.includes(row5[index])))
					) {
						markedLetters.push(row5[index]);
						yellowLoad.push(`key${index + 20}`);
						yellowLettersLoad.push(row5[index]);
						if (returnParallelLetter(row5[index]) !== ""){
							markedLetters.push(returnParallelLetter(row5[index]));
							yellowLoad.push(`key${index + 20}`);
							yellowLettersLoad.push(returnParallelLetter(row5[index]));
						}
					}
					else if (!greenCubes.includes(row5[index]) && !yellowCubes.includes(row5[index])) {
						greyLettersLoad.push(row5[index]);
						greyLettersLoad.push(returnParallelLetter(row5[index]));
					}
					revealLoad.push(`key${index + 20}`);
				}
			} else if (currentRow === 6) {
				if(!Words_Filter.includes(row6.join("")) && !Words_Source.includes(row6.join(""))){
					setTimeout(() => setBadTry6(true), 100);
					setBadTry6(false)
					return;
				}

				for (let index = 0; index < row6.length; index++) {
					let occurences: number = getOccurrence(row6[index], dailyWord) + getOccurrence(returnParallelLetter(row6[index]), dailyWord);
					let markedTimes: number = getOccurrence(row6[index], markedLetters.toString());
					if (dailyWord[index] === row6[index] || dailyWord[index] === returnParallelLetter(row6[index])) {
						markedLetters.push(row6[index]);
						greenLoad.push(`key${index + 25}`);
						greenLettersLoad.push(row6[index]);
						if (returnParallelLetter(row6[index]) !== ""){
						markedLetters.push(returnParallelLetter(row6[index]));
						greenLettersLoad.push(returnParallelLetter(row6[index]));
						}
					}
					else if (
					(dailyWord.includes(row6[index]) || dailyWord.includes(returnParallelLetter(row6[index]))) &&
						((occurences > 1 && occurences > markedTimes) ||
							(occurences === 1 && !markedLetters.includes(row6[index])))
					) {
						markedLetters.push(row6[index]);
						yellowLoad.push(`key${index + 25}`);
						yellowLettersLoad.push(row6[index]);
						if (returnParallelLetter(row6[index]) !== ""){
							markedLetters.push(returnParallelLetter(row6[index]));
							yellowLoad.push(`key${index + 25}`);
							yellowLettersLoad.push(returnParallelLetter(row6[index]));
						}
					}
					else if (!greenCubes.includes(row6[index]) && !yellowCubes.includes(row6[index])) {
						greyLettersLoad.push(row6[index]);
						greyLettersLoad.push(returnParallelLetter(row6[index]));
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


	useEffect(() => {

		const handleKeyDown = (e :any) => {
			if(e.key === "Backspace"){
				backspacePress();
			}
			else if(e.key === "Enter"){
				sendGuess();
			}
			else{
			letterPress(e.key);
			}
		}
		document.addEventListener('keydown', handleKeyDown );
	  return () => {
		document.removeEventListener('keydown', handleKeyDown);
	}
	}, [letterPress, backspacePress]);
	

	return (
		<div className="game">
			<div className={`cube-grid ${win === true ? "win-animation" : ""}`}>
				<div className={`cube-row ${badTry1 === true ? "not-exist-animation" : ""}`}>
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
				<div className={`cube-row ${badTry2 === true ? "not-exist-animation" : ""}`}>
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
				<div className={`cube-row ${badTry3 === true ? "not-exist-animation" : ""}`}>
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
				<div className={`cube-row ${badTry4 === true ? "not-exist-animation" : ""}`}>
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
				<div className={`cube-row ${badTry5 === true ? "not-exist-animation" : ""}`}>
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
				<div className={`cube-row ${badTry6 === true ? "not-exist-animation" : ""}`}>
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
					{alphabet.slice(0, 8).map((value, key) => (
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
					{alphabet.slice(8, 18).map((value, key) => (
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
					{alphabet.slice(18).map(
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
