import {useState, useEffect} from 'react';
import UseMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function WalkMenu(props) {
    const [walkEvent, setWalkEvent] = useState(0);
    const [walkPara1, setWalkPara1] = useState("");
    const [walkPara2, setWalkPara2] = useState("");
    const [walkPara3, setWalkPara3] = useState("");
    const [walkPara4, setWalkPara4] = useState("");
    const theme = useTheme();
    const isMobile = UseMediaQuery(theme.breakpoints.down('sm'));
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
        if (walkEvent === "givenCross") {
            props.setInventory([...props.inventory, "Crucifix"]);
        }
        if (walkEvent === "robbed") {
            props.setMoney(props.money - 50);
        }
        if (walkEvent === "givenFirstAidKit") {
            props.setInventory([...props.inventory, "First Aid Kit"]);
        }
        if (walkEvent === "fortuneTold") {
            props.setMoney(props.money - 5);
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
        else if (randomEvent < 0.2) {
            setWalkEvent("givenCross");
            setWalkPara1("You walk around for a few hours, stopping to rest on a bench in a churchyard.");
            setWalkPara2("The priest is nearby, and he stops to talk to you. You tell him about your adventures so far.");
            setWalkPara3("He talks about how dangerous it is out there and insists on giving you something that will help keep you safe.");
            setWalkPara4("He hands you a wooden crucifix.");
        }
        else if (randomEvent < 0.1) {
            setWalkEvent("robbed");
            setWalkPara1("You walk around for a few hours before heading back to your starting point.");
            setWalkPara2("When you get back, you realise that you're missing some money - you've been pickpocketed!");
            setWalkPara3("You've lost £50.");
            setWalkPara4("");
        }
        else if (randomEvent < 0.07) {
            setWalkEvent("fortuneTold");
            setWalkPara1("You walk around for a few hours and see a woman on the side of the road. She looks deep in thought.");
            setWalkPara2("She accosts you as you pass, telling you she can see the future. She tells you she can see a great adventure in front of you, albeit one fraught with many dangers.");
            setWalkPara3("She insists you cross her palm with silver as a reward for such valuable information.");
            setWalkPara4("Not wanting to cause a scene, you give her £5 and be on your way.");
        }
        else if (randomEvent < 0.05) {
            setWalkEvent("givenFirstAidKit");
            setWalkPara1("You walk around for a few hours, taking a break on a bench outside a nearby clinic.");
            setWalkPara2("A nurse comes out and asks if you're okay. You tell her about your adventures so far.");
            setWalkPara3("She tells you to be careful out there and insists on giving you something that will help keep you safe.");
            setWalkPara4("She hands you a first aid kit. You thank her and go on your way.");
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
            <p style={{fontSize: isMobile ? '10px' : '14px', width: isMobile ? '320px' : '30vw', margin: '0 auto', marginBottom: '2%'}}>You decide to have a walk around and explore town.</p>
            <p style={{fontSize: isMobile ? '10px' : '14px', width: isMobile ? '320px' : '30vw', margin: '0 auto', marginBottom: '2%'}}>{walkPara1}</p>
            <p style={{fontSize: isMobile ? '10px' : '14px', width: isMobile ? '320px' : '30vw', margin: '0 auto', marginBottom: '2%'}}>{walkPara2}</p>
            <p style={{fontSize: isMobile ? '10px' : '14px', width: isMobile ? '320px' : '30vw', margin: '0 auto', marginBottom: '2%'}}>{walkPara3}</p>
            <p style={{fontSize: isMobile ? '10px' : '14px', width: isMobile ? '320px' : '30vw', margin: '0 auto', marginBottom: '2%'}}>{walkPara4}</p>
            <button onClick={closeWalkMenu} className="keyButtons" style={{fontSize: '12px', width: isMobile ? '20vw' : '10vw',}}>Go back</button>
            
        </div>
    )
}