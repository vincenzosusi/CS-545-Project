import './App.css';
import { Link } from 'react-router-dom';
import {useLocation} from "react-router-dom";

function Results() {
    let data = useLocation();
    let score = data.state.score;
    let numAnswered = data.state.numAnswered;
    let mode = data.state.mode;
    let toStudy = data.state.toStudy;
    let percent = 0;

    if (mode === 'study') {
        mode = 'freeplay';
    }

    if (numAnswered!==0)
    {
        percent = score / numAnswered * 100;
        percent = Math.round(percent);
    }

    return (
        <div className="results_section">
            <p> You answered {score} out of {numAnswered} correctly</p>
            <p> {score} / {numAnswered} = {percent}%</p>
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

export default Results;