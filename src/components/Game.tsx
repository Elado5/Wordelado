import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";

const Game = () => {
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

    const [yellowCubes, setYellowCubes ] = useState<string[]>([]);
    const [greenCubes, setGreenCubes ] = useState<string[]>([]);


	const letterPress = (letter: string) => {

        if(currentIndex > 4 || currentIndex < 0){
            return;
        }
		if (currentRow === 1) {
			const rowCopy = row1.slice();
			rowCopy[currentIndex] = letter;
			setRow1(rowCopy);
			setCurrentIndex(currentIndex + 1);
		} else if (currentRow === 2) {
			const rowCopy = row1.slice();
			rowCopy[currentIndex] = letter;
			setRow2(rowCopy);
			setCurrentIndex(currentIndex + 1);
		} else if (currentRow === 3) {
			const rowCopy = row1.slice();
			rowCopy[currentIndex] = letter;
			setRow3(rowCopy);
			setCurrentIndex(currentIndex + 1);
		} else if (currentRow === 4) {
			const rowCopy = row1.slice();
			rowCopy[currentIndex] = letter;
			setRow4(rowCopy);
			setCurrentIndex(currentIndex + 1);
		} else if (currentRow === 5) {
			const rowCopy = row1.slice();
			rowCopy[currentIndex] = letter;
			setRow5(rowCopy);
			setCurrentIndex(currentIndex + 1);
		}
	};

    // function that "uses up" a guess if the word exists in the word bank, and then displays if any letter matches or exists in the daily word.
    const sendGuess = async () => {

        if(currentRow === 1){
            if(currentIndex === 5) {
                const greenLoad :string[] = [];
                const yellowLoad :string[] = [];
                for (let index = 0; index < 5; index++) {
                    if(dailyWord[index] === row1[index]){
                        greenLoad.push(`key${index}`);
                        
                    }
                    else if (dailyWord.includes(row1[index])){
                        yellowLoad.push(`key${index}`);
                    }                   
                }
                setGreenCubes(greenLoad);
                setYellowCubes(yellowLoad);
            }              
        }
        if(currentRow === 2){
            if(currentIndex === 5) {
                for (let index = 0; index < row2.length; index++) {
                    if(dailyWord[index] === row2[index]){
                        setGreenCubes([...greenCubes, `key${index+5}`]);
                    }
                    else if (dailyWord.includes(row2[index])){
                        setYellowCubes([...yellowCubes ,`key${index+5}` ]);
                    }                   
                }
            }      
        }
        if(currentRow === 3){            
            if(currentIndex === 5) {
            for (let index = 0; index < row3.length; index++) {
                if(dailyWord[index] === row3[index]){
                    setGreenCubes([...greenCubes, `key${index+10}`]);
                }
                else if (dailyWord.includes(row3[index])){
                    setYellowCubes([...yellowCubes ,`key${index+10}` ]);
                }                   
            }
        }      }
        if(currentRow === 4){
            if(currentIndex === 5) {
                for (let index = 0; index < row4.length; index++) {
                    if(dailyWord[index] === row4[index]){
                        setGreenCubes([...greenCubes, `key${index+15}`]);
                    }
                    else if (dailyWord.includes(row4[index])){
                        setYellowCubes([...yellowCubes ,`key${index+15}` ]);
                    }                   
                }
            }      
        }
        if(currentRow === 5){
            if(currentIndex === 5) {
                for (let index = 0; index < row5.length; index++) {
                    if(dailyWord[index] === row5[index]){
                        setGreenCubes([...greenCubes, `key${index+20}`]);
                    }
                    else if (dailyWord.includes(row5[index])){
                        setYellowCubes([...yellowCubes ,`key${index+20}` ]);
                    }                   
                }
            }      
        }

    }

	return (
		<div className="game">
			<div className="cube-grid">
				<div className="cube-row">{row1.map((value, key) => <p className={`text-cube ${yellowCubes.includes("key" + key) ? "yellow-cube" : ""}`} id={"key"+key}>{value}</p>)}</div>
				<div className="cube-row">{row2.map((value, key) => <p className={`text-cube ${yellowCubes.includes("key" + key + 5) ? "yellow-cube" : ""}`} id={"key"+(key+5)}>{value}</p>)}</div>
				<div className="cube-row">{row3.map((value, key) => <p className={`text-cube ${yellowCubes.includes("key" + key + 10) ? "yellow-cube" : ""}`} id={"key"+(key+10)}>{value}</p>)}</div>
				<div className="cube-row">{row4.map((value, key) => <p className={`text-cube ${yellowCubes.includes("key" + key + 15) ? "yellow-cube" : ""}`} id={"key"+(key+15)}>{value}</p>)}</div>
				<div className="cube-row">{row5.map((value, key) => <p className={`text-cube ${yellowCubes.includes("key" + key + 20) ? "yellow-cube" : ""}`} id={"key"+(key+20)}>{value}</p>)}</div>
			</div>

			<div className="letter-cube-grid">
				<div className="letter-row">
					<p className="letter-cube backspace">
						<FontAwesomeIcon icon={faBackspace} />
					</p>
					<p className="letter-cube" onClick={(e) => letterPress("א")}>א</p>
					<p className="letter-cube" onClick={(e) => letterPress("ב")}>ב</p>
					<p className="letter-cube" onClick={(e) => letterPress("ג")}>ג</p>
					<p className="letter-cube" onClick={(e) => letterPress("ד")}>ד</p>
					<p className="letter-cube" onClick={(e) => letterPress("ה")}>ה</p>
					<p className="letter-cube" onClick={(e) => letterPress("ו")}>ו</p>
					<p className="letter-cube" onClick={(e) => letterPress("ז")}>ז</p>
					<p className="letter-cube" onClick={(e) => letterPress("ח")}>ח</p>
				</div>
				<div className="letter-row">
					<p className="letter-cube" onClick={(e) => letterPress("ט")}>ט</p>
					<p className="letter-cube"onClick={(e) => letterPress("י")}>י</p>
					<p className="letter-cube" onClick={(e) => letterPress("כ")}>כ</p>
                    <p className="letter-cube" onClick={(e) => letterPress("ל")}>ל</p>
					<p className="letter-cube" onClick={(e) => letterPress("מ")}>מ</p>
					<p className="letter-cube" onClick={(e) => letterPress("נ")}>נ</p>
					<p className="letter-cube" onClick={(e) => letterPress("ס")}>ס</p>
					<p className="letter-cube" onClick={(e) => letterPress("ע")}>ע</p>
					<p className="letter-cube" onClick={(e) => letterPress("פ")}>פ</p>
					<p className="letter-cube" onClick={(e) => letterPress("צ")}>צ</p>
				</div>
				<div className="letter-row">
					<p className="letter-cube" onClick={(e) => letterPress("ק")}>ק</p>
					<p className="letter-cube" onClick={(e) => letterPress("ש")}>ש</p>
					<p className="letter-cube" onClick={(e) => letterPress("ת")}>ת</p>
					<p className="letter-cube" onClick={(e) => letterPress("ץ")}>ף</p>
					<p className="letter-cube" onClick={(e) => letterPress("ם")}>ם</p>
					<p className="letter-cube" onClick={(e) => letterPress("ץ")}>ץ</p>
					<p className="letter-cube" onClick={(e) => letterPress("ך")}>ך</p>
					<p className="letter-cube enter" onClick={(e) => sendGuess()}>Enter</p>
				</div>
			</div>
		</div>
	);
};

export default Game;
