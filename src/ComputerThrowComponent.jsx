import { useEffect } from 'react'
import './style.css';


function ComputerThrow(props) {
    const image_choices = ["rock.PNG", "paper.PNG", "scissors.PNG"];
    const alts = ["Rock", "Paper", "Scissors", "Question Mark"];
    function displayedImage() {
        //If the counter has not started yet
        if (props.image === -1) {
            return "question-mark.PNG";
        }
        //if the counter has started and an outcome hasn't been determined
        if (props.outcomeState === -1) {
            return image_choices[props.image % 3];
        }
        //if the outcome has been chosen
        return image_choices[props.outcomeState];
    }
    function displayedAlt() {
        //If the counter has not started yet
        if (props.image === -1) {
            return alts[3];
        }
        //if the counter has started and an outcome hasn't been determined
        if (props.outcomeState === -1) {
            return alts[(props.image % 3)];
        }
        //if the outcome has been chosen
        return alts[props.outcomeState];
    }


    if (props.selected > 0) {
        useEffect(() => {

            const interval = setInterval(() => {
                props.setImage((img) => {
                    if (img >= 5) {
                        clearInterval(interval);
                        props.setOutcomeState(Math.floor(Math.random() * 3));
                    } return img + 1;
                });
            }, 500);
            return () => {
                clearInterval(interval);
            };
        }, []);

    }
    return (
        <>
            <h2>Computer</h2>
            <section id="computer-throw">
                <img className={(props.outcomeState < 0) ? "not-selected" : "computer-selected"} src={"images/" + displayedImage()} alt={displayedAlt()} />
            </section>
        </>
    );
}

export default ComputerThrow;