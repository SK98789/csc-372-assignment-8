import { useEffect } from 'react'
import './style.css';

function PlayerThrow(props) {

    /**
     * If the card hasnt been selected, select it and save the player's choice
     * @param {int} num - the index of the selection
     */
    const handleClicked = (num) => {
        if (!props.selected) {
            props.setSelected(true);
            props.setPlayerChoice(num);
        }
    };
    const keyPressed =(event) => {
        if(event.key === "ArrowLeft"){
            handleClicked(0);
        }
        if(event.key === "ArrowUp"){
            handleClicked(1);
        }
        if(event.key === "ArrowRight"){
            handleClicked(2);
        }
  }
    useEffect(() => {
        document.addEventListener('keydown', keyPressed);
        return () => {
            document.removeEventListener('keydown', keyPressed);
        };
    }, [props.selected]);

    return (
        <>
            <h2>Player</h2>
            <h3>Click on your choice or use the left, up, and right arrows on your keyboard to select your move.</h3>
            <h3>Use the "Play Again" button, or use the Spacebar to start a new game.</h3>
            <div id='player-throw'>
                <img className={(props.playerChoice === 0) ? 'player-selected' : 'not-selected'}
                    id='rock'
                    src='images/rock.PNG'
                    alt='Rock'
                    onClick={() => { handleClicked(0) }} />

                <img className={(props.playerChoice === 1) ? 'player-selected' : 'not-selected'}
                    id='paper'
                    src='images/paper.PNG'
                    alt='Paper'
                    onClick={() => { handleClicked(1) }} />

                <img className={(props.playerChoice === 2) ? 'player-selected' : 'not-selected'}
                    id='scissors'
                    src='images/scissors.PNG'
                    alt='Scissors'
                    onClick={() => { handleClicked(2) }} />
            </div>
        </>
    );
}
export default PlayerThrow;
