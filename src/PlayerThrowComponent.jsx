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

    return (
        <div id='player-throw'>
            <img className={(props.playerChoice === 0) ? 'player-selected' : 'not-selected'}
                id='rock'
                src='images/rock.PNG'
                onClick={() => { handleClicked(0) }} />

            <img className={(props.playerChoice === 1) ? 'player-selected' : 'not-selected'}
                id='paper'
                src='images/paper.PNG'
                onClick={() => { handleClicked(1) }} />

            <img className={(props.playerChoice === 2) ? 'player-selected' : 'not-selected'}
                id='scissors'
                src='images/scissors.PNG'
                onClick={() => { handleClicked(2) }} />
        </div>
    );
}
export default PlayerThrow;
