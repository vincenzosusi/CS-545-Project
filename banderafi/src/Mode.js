import './App.css';
import { Link } from 'react-router-dom';
import country from './country_flags.png'
import us from './US_flags.png'

function Mode() {
    return (
        <div className="mode_section">
            <p> SELECT A GAME MODE:</p>
            <div className="row">
            <div class="column"><p> Country Flags</p>
            <p2>test your knowledge on flags of different countries!</p2>
            <div class="buttondivider"/>
            <p2>Freeplay Mode: unlimited lives | Survival Mode: 3 lives</p2>
            <div class="buttondivider"/>
            <img class='resize_fit_center' src={country} alt="country flags"/>
            <div class="buttondivider"/>
            <Link to={{
                pathname: "/play",
                state: {
                    mode: "freeplay",
                    type: 'country'
                }
            }}>
                <button type="button" id="retry" title="unlimited lives" >Freeplay</button>
                <div class="buttondivider"/>
            </Link>
            <Link to={{
                pathname: "/play",
                state: {
                    mode: 'survival',
                    type: 'country'
                }
            }}>
                <button type="button" id="retry" title="only 3 lives">Survival</button>
                <div class="buttondivider"/>
            </Link></div>
            <div class="column"><p> State Flags</p>
            <p2>test your knowledge on flags of the U.S. states!</p2>
            <div class="buttondivider"/>
            <p2>Freeplay Mode: unlimited lives | Survival Mode: 3 lives</p2>
            <div class="buttondivider"/>
            <img class='resize_fit_center' src={us} alt="us flags"/>
            <div class="buttondivider"/>
            <Link to={{
                pathname: "/play",
                state: {
                    mode: "freeplay",
                    type: 'states'
                }
            }}>
                <button type="button" id="retry" title="unlimited lives">Freeplay</button>
                <div class="buttondivider"/>
            </Link>
            <Link to={{
                pathname: "/play",
                state: {
                    mode: 'survival',
                    type: 'states'
                }
            }}>
                <button type="button" id="retry" title="only 3 lives">Survival</button>
                <div class="buttondivider"/>
            </Link></div>
            </div>
        </div>
    )
}

export default Mode;