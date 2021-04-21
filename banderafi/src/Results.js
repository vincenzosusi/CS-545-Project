import './App.css';
import { Link } from 'react-router-dom';
import {useLocation} from "react-router-dom";

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

        return (
            <div className="results_section">
                <p> You answered {score} out of {numAnswered} correctly</p>
                <p> {score} / {numAnswered} = {percent}%</p>
                <Link to={{
                    pathname: "/play"
                }}>
                    <button type="button" id="retry">Play Again</button>
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