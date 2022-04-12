import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace } from '@fortawesome/free-solid-svg-icons';

const Keyboard = () => {




    return (<>
    <div className="letter-cube-grid">
				<div className="letter-row">
                <p className="letter-cube backspace"><FontAwesomeIcon icon={faBackspace}/></p>
					<p className="letter-cube">א</p>
                    <p className="letter-cube">ב</p>
					<p className="letter-cube">ג</p>
					<p className="letter-cube">ג</p>
					<p className="letter-cube">ד</p>
					<p className="letter-cube">ה</p>
                    <p className="letter-cube">ו</p>
                    <p className="letter-cube">ז</p>
                    <p className="letter-cube">ח</p>
				</div>
                <div className="letter-row">
                <p className="letter-cube">ט</p>
					<p className="letter-cube">י</p>
                    <p className="letter-cube">כ</p>
					<p className="letter-cube">ל</p>
					<p className="letter-cube">מ</p>
					<p className="letter-cube">נ</p>
					<p className="letter-cube">ס</p>
                    <p className="letter-cube">ע</p>
                    <p className="letter-cube">פ</p>
                    <p className="letter-cube">צ</p>
				</div>
                <div className="letter-row">
                <p className="letter-cube">ק</p>
					<p className="letter-cube">ש</p>
                    <p className="letter-cube">ת</p>
					<p className="letter-cube">ף</p>
					<p className="letter-cube">ם</p>
					<p className="letter-cube">ץ</p>
					<p className="letter-cube">ך</p>
                    <p className="letter-cube enter">Enter</p>
				</div>
			</div>
    </>)
}

export default Keyboard;