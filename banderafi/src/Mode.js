import './App.css';
import { Link } from 'react-router-dom';

function Mode() {
    return (
        <div className="mode_section">
            <p> Select a game mode to play</p>
            <Link to={{
                pathname: "/play",
                state: {
                    mode: "freeplay"
                }
            }}>
                <button type="button" id="retry">Freeplay</button>
            </Link>
            <Link to={{
                pathname: "/play",
                state: {
                    mode: 'survival'
                }
            }}>
                <button type="button" id="retry">Survival</button>
            </Link>
        </div>
    )
}

export default Mode;