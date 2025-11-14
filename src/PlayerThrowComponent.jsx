import { useState } from 'react';
import './style.css';
function PlayerThrow(props) {


    const handleClicked = (num) => {
        if (props.selected === 0) {
            if (num === 1) {

            } else if (num === 1) {
                setPaper('player-selected');
            } else if (num === 2) {
                setScissors('player-selected');
            }
            props.setSelected(num);

        }

    };

    return (
        <div id='player-throw'>
            <img className={(props.selected === 1) ? 'player-selected' : 'not-selected'}
                id='rock'
                src='images/rock.PNG'
                onClick={() => { handleClicked(1) }} />
            <img className={(props.selected === 2) ? 'player-selected' : 'not-selected'} id='paper' src='images/paper.PNG' onClick={() => { handleClicked(2) }} />
            <img className={(props.selected === 3) ? 'player-selected' : 'not-selected'} id='scissors' src='images/scissors.PNG' onClick={() => { handleClicked(3) }} />
        </div>
    );
}
export default PlayerThrow;
