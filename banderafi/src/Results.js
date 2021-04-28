import './App.css';
import { Link } from 'react-router-dom';
import {useLocation} from "react-router-dom";
import CountryList from './Countries';
import StateList from './States';

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

        let toStudyDatabase = [];
        let toStudyFlags = [];
        if (data.state.type === "country")
            toStudyDatabase = CountryList;
        else
            toStudyDatabase = StateList;

        for (let i = 0; i < toStudy.length; i++)
        {
            toStudyFlags[i] = toStudyDatabase[toStudy[i]].name;
        }
    
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
                {toStudy.length > 0 && toStudyFlags.map((flag) =>
                    <p key={flag}>{flag}</p>)}
                <Link to={{
                    pathname: "/play",
                    state: {
                        mode: mode,
                        type: data.state.type
                    }
                }}>
                    <button type="button" id="retry">Play Again</button>
                </Link>
                {toStudy.length !== 0 && 
                <Link to={{
                    pathname: "/play",
                    state: {
                        mode: 'study',
                        toStudy: toStudy,
                        type: data.state.type
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
                    pathname: "/selection"
                }}>
                    <button type="button" id="retry">Play</button>
                </Link>
            </div>
        )
    }
}

export default Results;
