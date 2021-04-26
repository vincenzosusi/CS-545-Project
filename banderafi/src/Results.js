import './App.css';
import { Link } from 'react-router-dom';
import {useLocation} from "react-router-dom";
import CountryList from './Countries'

function Results() {
    let data = useLocation();

    if (data.state !== undefined)
    {
        let score = data.state.score;
        let numAnswered = data.state.numAnswered;
        let percent = 0;

        if (numAnswered!==0)
        {
            percent = score / numAnswered * 100;
            percent = Math.round(percent);
        }

        let mode = data.state.mode;
        let toStudy = data.state.toStudy;

        let toStudyCountries = [];

        for (let i = 0; i < toStudy.length; i++)
        {
            toStudyCountries[i] = CountryList[toStudy[i]].name;
        }

        console.log(toStudy);
    
        if (mode === 'study') {
            mode = 'freeplay';
        }

        return (
            <div className="results_section">
                {data.state.mode !== 'study' && <p> You answered {score} out of {numAnswered} correctly</p>}
                {data.state.mode !== 'study' && <p> {score} / {numAnswered} = {percent}%</p>}
                {data.state.mode === 'study' && score > 0 && <p>Great Job! You learned {score} flags!</p>}
                {data.state.mode === 'study' && score < 1 && <p>You did not learn any flags.</p>}
                {toStudy.length > 0 && <p>You still need to learn: </p>}
                {toStudy.length > 0 && toStudyCountries.map((country) =>
                    <p key={country}>{country}</p>)}
                <Link to={{
                    pathname: "/play",
                    state: {
                        mode: mode
                    }
                }}>
                    <button type="button" id="retry">Play Again</button>
                </Link>
                {toStudy.length !== 0 && 
                <Link to={{
                    pathname: "/play",
                    state: {
                        mode: 'study',
                        toStudy: toStudy
                    }
                }}>
                    <button type="button" id="study">Study</button>
                </Link> }
                <Link to={{
                    pathname: "/selection",
                }}>
                    <button type="button" id="new_mode">Select new mode</button>
                </Link>
            </div>
        )
    }
    else
    {
        return (
            <div className="results_section">
                <p> No score available. Play the game to earn a score.</p>
                <Link to={{
                    pathname: "/play"
                }}>
                    <button type="button" id="retry">Play</button>
                </Link>
            </div>
        )
    }
}

export default Results;
