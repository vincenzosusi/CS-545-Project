import './App.css';
import { Link } from 'react-router-dom';

function Mode() {
    return (
        <div className="mode_section">
            <p> Select a game mode to play</p>
            <p> Country Flags</p>
            <Link to={{
                pathname: "/play",
                state: {
                    mode: "freeplay",
                    type: 'country'
                }
            }}>
                <button type="button" id="retry">Freeplay</button>
            </Link>
            <Link to={{
                pathname: "/play",
                state: {
                    mode: 'survival',
                    type: 'country'
                }
            }}>
                <button type="button" id="retry">Survival</button>
            </Link>
            <p> State Flags</p>
            <Link to={{
                pathname: "/play",
                state: {
                    mode: "freeplay",
                    type: 'states'
                }
            }}>
                <button type="button" id="retry">Freeplay</button>
            </Link>
            <Link to={{
                pathname: "/play",
                state: {
                    mode: 'survival',
                    type: 'states'
                }
            }}>
                <button type="button" id="retry">Survival</button>
            </Link>
        </div>
    )
}

export default Mode;