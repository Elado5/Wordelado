import React, {useState} from 'react';
import {useStateType, setUseStateType} from '../implementation';

const FloatHelp = ({showHelp, setShowHelp} : {showHelp: useStateType, setShowHelp: setUseStateType}) => {

    return(
    <div className={`Float ${showHelp ? '' : 'hidden'}`} onClick={() => {setShowHelp(false)} }>
        <h1>איך משחקים?</h1>
        <p>נחשו את המילה בתוך שישה נסיונות או פחות.<br/> כל ניסיון הוא מילה בת חמש אותיות בדיוק.<br/>
        אחרי כל ניסיון, האותיות ייצבעו בצבעים שמשקפים עד כמה הניחוש קרוב למילה שנבחרה.           
        </p>
        <hr/>
        <div className="cube-row">
            <div className=" text-cube green-cube revealing">א</div>
            <div className=" text-cube ">ר</div>
            <div className=" text-cube ">ו</div>
            <div className=" text-cube ">ח</div>
            <div className=" text-cube ">ה</div>
        </div>
        <p>האות קיימת במילה במיקום המדויק שסומן בירוק.</p>
        <hr/>
        <div className="cube-row">
            <div className=" text-cube ">מ</div>
            <div className=" text-cube ">ע</div>
            <div className=" text-cube revealing yellow-cube">ו</div>
            <div className=" text-cube ">צ</div>
            <div className=" text-cube ">ב</div>
        </div>
        <p>האות קיימת במילה, אך לא במיקום שסומן בצהוב.</p>
        <hr/>

        <div className="cube-row">
            <div className=" text-cube">מ</div>
            <div className=" text-cube revealing">ש</div>
            <div className=" text-cube">ח</div>
            <div className=" text-cube ">ק</div>
            <div className=" text-cube ">ת</div>
        </div>
        <p>אות שמסומנת באפור לא קיימת במילה.</p>
    </div>
    )
}

export default FloatHelp;