import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import GameRule from '../components/GameRule';
import ClickAudio1 from '../audio/select01.mp3';
import ClickAudio2 from '../audio/select06.mp3';
import { createGlobalStyle } from 'styled-components';

const clickaudio1 = new Audio(ClickAudio1);
const clickaudio2 = new Audio(ClickAudio2);

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fcfcfc;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function Landing() {
    const [modal, setModal] = useState(false);
    const showRule = () => {
        clickaudio2.play();
        setModal(!modal);
    };
    const navigate = useNavigate();

    const handleButtonClick = () => {
        clickaudio1.play();
        navigate('/theme');
    };

    return (
        <div
            className="h-full w-full flex flex-col items-center"
            style={{ backgroundColor: '#fcfcfc', minHeight: '100vh' }}
        >
            <h1 className="font-kalam font-black tracking-tighter text-center text-6xl mt-10">Hangman</h1>
            <img src={`${process.env.PUBLIC_URL}/img/hangman9.png`} className="w-96" alt="Hangman Image" />{' '}

            <div className="flex flex-row items-center space-x-4 mt-5">
                <Button onClick={handleButtonClick} letter="Game Start" />
                <Button onClick={showRule} letter="Game Rules" />
            </div>
            {modal && <GameRule isOpen={modal} onRequestClose={showRule} />}
        </div>
    );
}

export default Landing;
