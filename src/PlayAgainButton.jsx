import { useEffect } from 'react'

function PlayAgain(props) {
    const handleReset = () => {
        props.setSelectedFn(false);
        props.setPlayerChoice(-1);
        props.setImageState(-1);
        props.setOutcomeState(-1);
    }

    const keyPressed = (event) => {
        if (event.key === " ") {
            handleReset();
        }

    }
    useEffect(() => {
        document.addEventListener('keydown', keyPressed);
        return () => {
            document.removeEventListener('keydown', keyPressed);
        };
    }, []);



    return (
        <button id="play-button" onClick={handleReset} >Play Again</button>

    )
}
export default PlayAgain;