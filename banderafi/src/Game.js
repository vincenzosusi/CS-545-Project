import React, { useState, useEffect } from 'react';
import './App.css';
import CountryList from './Countries';
import { Link } from 'react-router-dom';
import { AuthContext } from './Auth';

let answered = false;
function Game() {
    const [flags, setFlags] = useState([]);
    const [correctAnswer, setAnswer] = useState("");
    const [score, setScore] = useState(0);
    const [numAnswered, setNumAnswered] = useState(0);
    const [user, setUser] = useState(AuthContext);
    const [wrongFlags, setWrong] = useState([]);

    useEffect(() => {
        getFlags();
    }, [])
    function getFlags()
    {
        answered = false;
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
                flagIndex = Math.floor(Math.random() * CountryList.length);
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
                let button = document.getElementById(name);
                button.style.background = '#FF0000'
                setWrong(wrongFlags.concat(button));
            }
            else
                setScore(score+1);
        }
    }
    function newFlags()
    {
        if (answered === true)
            getFlags();
        // Changes flag backgrounds back to white if they were changed
        document.getElementById(correctAnswer).style.background = '#FFFFFF';
        wrongFlags.forEach((flag) => {
            flag.style.background = '#FFFFFF';
        });
    }
    return (
        <div className='game_area'>
            <div className='question_area'>
                <p>Which of the following is {correctAnswer}'s flag?</p>
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
            <div className='next_button'>
                <button type="button" id="next" onClick={newFlags}>Continue</button>
            </div>
            <div className="divider"/>
            <div className='exit_button'>
                <Link to={{
                    pathname: "/results",
                    state: {
                        score: score,
                        numAnswered: numAnswered
                    }
                }}>
                    <button type="button" id="exit">Exit</button>
                </Link>
            </div>
            <div className='score_area'>
                <p>Score: {score}</p>
            </div>
        </div>
    )
}

export default Game;