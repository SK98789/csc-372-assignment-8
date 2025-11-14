function Outcome(props) {
    /**
     * Determine who wins and loses
     * @param {int} player - the player's choice
     * @param {int} computer - the computer's choice
     * @returns 
     */
    function calculateWinner(player, computer){
        if(props.outcomeState < 0){
            return "";
        }
        if(player === computer){
            return "Tie!";
        }
        if(player > computer && !(player===2 && computer === 0) || (player===0 && computer===2))
            return "You Win!";
        return "You Lose!";


    }
    return (
        <section id="outcome">
            <div id="results-text">
                <p> Results: </p>
                <p id="res-display">{calculateWinner(props.playerChoice, props.outcomeState)}</p>

            </div>
            <button id="play-button" onClick={() => { 
                props.setSelectedFn(false);
                props.setPlayerChoice(-1);
                props.setImageState(-1);
                props.setOutcomeState(-1);
             }} >Play Again</button>

        </section>
    );
}

export default Outcome;