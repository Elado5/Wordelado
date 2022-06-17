import React, {useState} from 'react';
import {useStateType, setUseStateType} from '../implementation';

const FloatFinish = ({showWin, setShowWin, dailyWord, guessNumber} : {showWin: useStateType, setShowWin: setUseStateType, dailyWord: string, guessNumber: number}) => {

    return(
    <div className={`Float ${showWin ? '' : 'hidden'}`} onClick={() => {setShowWin(false)} }>
        {guessNumber === 1 && <p>ניסיון אחד? מדהים!</p>}
        {guessNumber === 2 && <p>שני נסיונות? עבודה מעולה!</p>}
        {guessNumber === 3 && <p>שלושה נסיונות, מרשים!</p>}
        {guessNumber === 4 && <p>כל הכבוד!</p>}
        {guessNumber === 5 && <p>זה היה ממש קרוב, כל הכבוד!</p>}
        {guessNumber === 6 && <p>המילה היומית הייתה '${dailyWord}', בהצלחה בפעם הבאה!</p>}
    </div>
    )
}

export default FloatFinish;