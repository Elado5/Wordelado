import React from 'react';

const FloatHelp = () => {


    return(
    <div className="Float hidden">
        <h3>איך משחקים?</h3>
        <p>נחשו את המילה בתוך שישה נסיונות או פחות. כל ניסיון הוא מילה בת חמש אותיות בדיוק.
אחרי כל ניסיון, האותיות ייצבעו בצבעים שמשקפים עד כמה הניחוש קרוב למילה שנבחרה.           
        </p>
        <hr/>
        <div className="cube-row">
            <div className=" text-cube green-cube revealing">א</div>
            <div className=" text-cube revealing">ר</div>
            <div className=" text-cube revealing">ו</div>
            <div className=" text-cube revealing">ח</div>
            <div className=" text-cube revealing">ה</div>
        </div>
    </div>
    )
}

export default FloatHelp;