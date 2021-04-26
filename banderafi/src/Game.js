import React, { useState, useEffect } from 'react';
import './App.css';
import CountryList from './Countries';
import { Link } from 'react-router-dom';
import {useLocation} from "react-router-dom";
import { AuthContext } from './Auth';
import Confetti from 'react-dom-confetti';

let answered = false;
let correct = false;
function Game() {
    let data = useLocation();
    let studyFlags = [];
    let mode = 'freeplay';
    if (data.state !== undefined) { // Ensures state was passed in before accessing state
        mode = data.state.mode;
    }
    if (mode === 'study'){
        studyFlags = data.state.toStudy;
    }
    const [flags, setFlags] = useState([]);
    const [correctAnswer, setAnswer] = useState("");
    const [score, setScore] = useState(0);
    const [numAnswered, setNumAnswered] = useState(0);
    const [lives, setLives] = useState(3);
    const [toStudy, setStudy] = useState(studyFlags);
    const [studyIndex, setStudyIndex] = useState(0);
    const [remainingStudy, setRemaining] = useState(toStudy.length);
    const [user, setUser] = useState(AuthContext);
    const [wrongFlags, setWrong] = useState([]);
    const [answerMessage, setMessage] = useState("");

    useEffect(() => {
        getFlags();
    }, [])
    function getFlags()
    {
        setMessage("");
        answered = false;
        correct = false;
        let flagsList = [];
        let answerIndex = Math.floor(Math.random() * 4);
        let flagIndex;
        let curCountry;
        let name;
        for (let i = 0; i < 4; i++)
        {
            let checkedDuplicate = false;

            while (checkedDuplicate === false)
            {
                if (mode === 'study' && i === answerIndex){
                    flagIndex = toStudy.shift();
                    setStudy(toStudy);
                } else {
                    flagIndex = Math.floor(Math.random() * CountryList.length);
                }
                curCountry = CountryList[flagIndex];
                name = curCountry.name;

                if (flagsList.length === 0)
                    checkedDuplicate = true;
                else
                {
                    for (let j = 0; j < flagsList.length; j++)
                    {
                        if (name === flagsList[j].name)
                            break;
                        if (j === flagsList.length -1)
                            checkedDuplicate = true;
                    }
                }
            }
            let code = (curCountry.code).toLowerCase();
            let image = "https://flagcdn.com/256x192/"+code+".png";
            let answer = false;
            if (i === answerIndex)
            {
                setStudyIndex(flagIndex);

                answer = true;
                setAnswer(curCountry.name);
            }
            flagsList[i] = {
                name: name,
                image: image,
                answer: answer
            };
        }
        setFlags(flagsList);
    }
    function checkAnswer(name) 
    {
        if (answered === false)
        {
            setNumAnswered(numAnswered+1);
            answered = true;
            document.getElementById(correctAnswer).style.background = '#00FF00';

            if(name !== correctAnswer)
            {
                setMessage("Sorry, that is " + name + "'s Flag");
                setLives(lives - 1);
                setStudy(toStudy.concat(studyIndex));
                let button = document.getElementById(name);
                button.style.background = '#FF0000'
                setWrong(wrongFlags.concat(button));
            }
            else {
                setMessage("Correct!");
                correct = true;
                setScore(score+1);
                setRemaining(remainingStudy - 1);
            }
        }
    }
    function newFlags()
    {
        if (answered === true)
            getFlags();
        document.getElementById(correctAnswer).style.background = '#FFFFFF';
        wrongFlags.forEach((flag) => {
            flag.style.background = '#FFFFFF';
        });
    }
    function Next(props) 
    {
        if (props.gamemode === 'survival' && lives <= 0) {
            return <p class="game_over">Game Over</p>;
        } else if (props.gamemode === 'study' && remainingStudy === 0) {
            return <p class="game_over">Finished Studying</p>;
        } else {
            return <div className='next_button'>
                        <button type="button" id="next" onClick={newFlags}>Continue</button>
                    </div>
        }
    }

    const confettiConfig = {
        angle: 90,
        spread: 360,
        startVelocity: 40,
        elementCount: 70,
        dragFriction: 0.12,
        duration: 3000,
        stagger: 3,
        width: "10px",
        height: "10px",
        perspective: "500px",
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
      };

    return (
        <div className='game_area'>
            <div className='confetti'>
                <Confetti active={correct} config={confettiConfig}/>
            </div>
            <div className='question_area'>
                <p>Which of the following is {correctAnswer}'s flag?</p>
            </div>
            <div className='answer_area'>
                <p>{answerMessage}</p>
            </div>
            <div className='flags_display'>
                <div className='flags'>
                    {
                        flags.map((flag) => 
                            <button key={flag.name} id={flag.name} onClick={() => checkAnswer(flag.name)}>
                                <img src={flag.image} alt={flag.code}/>
                            </button>)
                    }
                </div>
            </div>
            <div className="divider"/>
            <Next gamemode={mode} />
            <div className="divider"/>
            <div className='exit_button'>
                <Link to={{
                    pathname: "/results",
                    state: {
                        score: score,
                        numAnswered: numAnswered,
                        mode: mode,
                        toStudy: toStudy
                    }
                }}>
                    <button type="button" id="exit">Exit</button>
                </Link>
            </div>
            <div className='score_area'>
                <p>Score: {score}</p>
                {mode === 'survival' && <p>Lives: {lives}</p>}
                {mode === 'study' && <p>Flags Remaining: {remainingStudy}</p>}
            </div>
        </div>
    )
}

export default Game;