import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import GameRule from '../components/GameRule';
import ClickAudio1 from '../audio/select01.mp3';
import ClickAudio2 from '../audio/select06.mp3';

const clickaudio1 = new Audio(ClickAudio1);
const clickaudio2= new Audio(ClickAudio2);
function Landing() {
    const [modal, setModal] = useState(false);
    const showRule = () => {
        clickaudio2.play();
        setModal(!modal);
    };
    const navigate = useNavigate();
    const handleButtonClick = () => {
        clickaudio1.play();
        console.log('얍');
        navigate('/theme');
    };
    return (
        <div className="h-full w-full flex flex-col justify-center items-center">
            <h1 className="font-grandstander font-black tracking-tighter text-center text-6xl mt-10">Hangman</h1>
            <div className="flex flex-row items-center space-x-4 mt-10">
                <Button onClick={handleButtonClick} letter="Game Start" />
                <Button onClick={showRule} letter="Game Rules" />
            </div>
            {modal && <GameRule isOpen={modal} onRequestClose={showRule} />}
        </div>
    );
}

export default Landing;
