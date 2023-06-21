import React, { useState } from 'react';
import axios from 'axios';

import '../styles/adviceSection/adviceSectionStyle.css';

const AdviceSection = () => {

    const [advice, setAdvice] = useState(null);
    const [number, setNumber] = useState(0);

    const generateAdvice = () =>{

        axios({
            method: 'get',
            url: 'https://api.adviceslip.com/advice'
        })
        .then(function (response) {
            console.log(response);
            setAdvice(response.data.slip.advice);
            setNumber(response.data.slip.id);
        })
        .catch(function(error){
            console.log(error);
        });
    } 

    return (
        <div id="advice-section">
            {advice === null ? 
            <h1 className='header'>Advice Generator</h1> :
            <h1 className='header'>ADVICE #{number}</h1>}
            {advice === null ?
            <p className='advice-text'>Generate a new advice by clicking the dice button</p> :
            <p className='advice-text'>"{advice}"</p>}
            <img src="images/pattern-divider-desktop.svg" alt="pattern-divider" id="pattern-divider-desktop"></img>
            <img src="images/pattern-divider-mobile.svg" alt="pattern-divider" id="pattern-divider-mobile"></img>
            <button onClick={generateAdvice} id="advice-button"><img src="images/icon-dice.svg" alt="icon-dice"></img></button>
        </div>
    );
}

export default AdviceSection;
