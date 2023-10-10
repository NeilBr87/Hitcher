import React, { useState, useEffect } from 'react';
import './style.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Intro(props) {
    const [showPara1, setShowPara1] = useState(false);
    const [showPara2, setShowPara2] = useState(false);
    const [showPara3, setShowPara3] = useState(false);
    const [showPara4, setShowPara4] = useState(false);
    const [showPara5, setShowPara5] = useState(false);
    const [showPara6, setShowPara6] = useState(false);
    const [showPara7, setShowPara7] = useState(false);
    const [showPara8, setShowPara8] = useState(false);
    const [showPara9, setShowPara9] = useState(false);
    const [showPara10, setShowPara10] = useState(false);
    const [showPara11, setShowPara11] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        const delay = 600;

        const timer1 = setTimeout(() => {
            setShowPara1(true);
        }, delay);

        const timer2 = setTimeout(() => {
            setShowPara2(true);
        }, delay * 6);

        const timer3 = setTimeout(() => {
            setShowPara3(true);
        }, delay * 12);

        const timer4 = setTimeout(() => {
            setShowPara4(true);
        }, delay * 18);

        const timer5 = setTimeout(() => {
            setShowPara5(true);
        }, delay * 24);

        const timer6 = setTimeout(() => {
            setShowPara6(true);
        }, delay * 30);

        const timer7 = setTimeout(() => {
            setShowPara7(true);
        }, delay * 36);

        const timer8 = setTimeout(() => {
            setShowPara8(true);
        }, delay * 42);

        const timer9 = setTimeout(() => {
            setShowPara9(true);
        }, delay * 48);

        const timer10 = setTimeout(() => {
            setShowPara10(true);
        }, delay * 54);

        const timer11 = setTimeout(() => {
            setShowPara11(true);
        }, delay * 60);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4);
            clearTimeout(timer5);
            clearTimeout(timer6);
            clearTimeout(timer7);
            clearTimeout(timer8);
            clearTimeout(timer9);
            clearTimeout(timer10);
            clearTimeout(timer11);
        };
    }, []);

    function introProceed() {
        props.setStart(false)
        props.setGameMenu(true);
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', backgroundColor: 'rgb(30, 30, 65)', color: 'white', width: '100%', overflow: 'hidden', height: '100vh'}}>
        <div style={{ backgroundColor: 'black', color: 'white', height: '100vh' }}>
                <h2>Introduction</h2>
                <p onClick={introProceed} style={{fontSize: isMobile ? '10px' : '12px', marginTop: '-10px', marginBottom: '0px', cursor: 'pointer'}}>(Skip)</p>
                {showPara1 && (
                    <p style={{fontSize: isMobile ? '10px' : '16px', width: isMobile ? '92%' : '60%'}} id="introPara1" className="introText">"Sometimes, if you stand on the bottom rail of a bridge and lean over to watch the river slipping slowly away beneath you, you will suddenly know everything there is to be known."</p>
                )}
                {showPara2 && (
                    <p  style={{fontSize: isMobile ? '10px' : '16px', width: isMobile ? '92%' : '60%'}} id="introPara2" className="introText">This quote - you think it's from Winnie the Pooh, of all things - has dogged you for as long as you can remember. You've found yourself in an all-too-familiar position. Dead-end job, not much in the way of prospects, nothing really to live for.</p>
                )}
                {showPara3 && (
                    <p style={{fontSize: isMobile ? '10px' : '16px', width: isMobile ? '92%' : '60%'}} id="introPara3" className="introText">Then, you met George.</p>
                )}
                {showPara4 && (
                    <p style={{fontSize: isMobile ? '10px' : '16px', width: isMobile ? '92%' : '60%'}} id="introPara4" className="introText">He sat on the same bench that you always sit on during your lunch break, in a small little park near your office. And he started talking.</p>
                )}
                {showPara5 && (
                    <p style={{fontSize: isMobile ? '10px' : '16px', width: isMobile ? '92%' : '60%'}} id="introPara5" className="introText">He explained that he was a rich man now, but he'd grown up poor. And before making his millions, he'd travelled all over the world just by hitchhiking.</p>
                )}
                {showPara6 && (
                    <p style={{fontSize: isMobile ? '10px' : '16px', width: isMobile ? '92%' : '60%'}} id="introPara6" className="introText">He said his heart broke at the thought that hitchhiking was no longer a way of life. He said that he'd been watching you for a while, and knew how stuck you felt in your life - and he had a proposal for you.</p>
                )}
                {showPara7 && (
                    <p style={{fontSize: isMobile ? '10px' : '16px', width: isMobile ? '92%' : '60%'}} id="introPara7" className="introText">"I want to prove that hitchhiking is still a safe, magical form of travel," he said. "You will have one month to make your way from one side of Europe to another. I'll give you a thousand pounds in order to survive. If you reach one of the cities on my list, you will get a large reward."</p>
                )}
                {showPara8 && (
                    <p style={{fontSize: isMobile ? '10px' : '16px', width: isMobile ? '92%' : '60%'}} id="introPara8" className="introText">He hands you a list of places. Some are in North Africa, some are over in Russia. You get a strong sense that you can do this, that this is the answer to the way your life has turned out. </p>
                )}

                {showPara9 && (
                    <p style={{fontSize: isMobile ? '10px' : '16px', width: isMobile ? '92%' : '60%'}} id="introPara9" className="introText">What else can you do? You accept his offer, heading back to your office to quit. Your new life begins tomorrow.</p>
                )}

                {showPara10 && (
                    <p style={{fontSize: isMobile ? '10px' : '16px', width: isMobile ? '92%' : '60%'}} id="introPara10" className="introText">You are a Hitcher.</p>
                )}

                {showPara11 && (
                    <button onClick={introProceed} id="introButton" className="introText">Proceed</button>
                )}

            </div>
        </div>
    )
}
