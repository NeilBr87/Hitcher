import {useState, useEffect} from 'react';

export default function WalkMenu(props) {
    const [walkEvent, setWalkEvent] = useState(0);
    const [walkPara1, setWalkPara1] = useState("");
    const [walkPara2, setWalkPara2] = useState("");
    const [walkPara3, setWalkPara3] = useState("");
    const [walkPara4, setWalkPara4] = useState("");

    const randomEvent = Math.random();

    function closeWalkMenu() {
        setWalkPara1("");
        setWalkPara2("");
        setWalkPara3("");
        setWalkPara4("");
        props.setTime(props.time + 3)
        if (walkEvent === "foundTen") {
            props.setMoney(props.money + 10);
        }
        if (walkEvent === "foundTwenty") {
            props.setMoney(props.money + 20);
        }
        props.setWalkConfirm(false);
    }

    useEffect(() => {
        if (randomEvent < 0.4) {
            setWalkEvent("foundTen");
            setWalkPara1("While walking, you find £10 on the ground.");
            setWalkPara2("You pick it up and put it in your pocket.");
            setWalkPara3("You walk around for a few hours before heading back to your starting point.");
            setWalkPara4("");
        }
        else if (randomEvent < 0.3) {
            setWalkEvent("foundTwenty");
            setWalkPara1("While walking, you find £20 on the ground.");
            setWalkPara2("You pick it up and put it in your pocket.");
            setWalkPara3("You walk around for a few hours before heading back to your starting point.");
            setWalkPara4("");
        }
        else {
            setWalkEvent("nothing");
            setWalkPara1("You walk around for a few hours before heading back to your starting point.");
            setWalkPara2("");
            setWalkPara3("");
            setWalkPara4("");
        }
    }, [randomEvent]);

    



    return (
        <div>
            <p>You decide to have a walk around and explore town.</p>
            <p style={{width: '320px', margin: '0 auto', marginBottom: '2%'}}>{walkPara1}</p>
            <p style={{width: '320px', margin: '0 auto', marginBottom: '2%'}}>{walkPara2}</p>
            <p style={{width: '320px', margin: '0 auto', marginBottom: '2%'}}>{walkPara3}</p>
            <p style={{width: '320px', margin: '0 auto', marginBottom: '2%'}}>{walkPara4}</p>
            <button onClick={closeWalkMenu} className="keyButtons" style={{fontSize: '12px'}}>Go back</button>
            
        </div>
    )
}