import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button'; // 경로 확인
import setTheme from '../App';
import ClickAudio1 from '../audio/poka01.mp3';

const clickaudio1 = new Audio(ClickAudio1);
const themes = ['Food', 'Country', 'Suneung', 'Idol', 'NEXT'];

function Theme() {
    const navigate = useNavigate();

    const handleButtonClick = (theme) => {
        clickaudio1.play();
        console.log('얍');
        navigate(`/main/${theme}`);
    };

    return (
        <div>
            {themes.map((theme) => (
                <Button key={theme} letter={theme} onClick={() => handleButtonClick(theme)} setTheme={theme} />
            ))}
        </div>
    );
}

export default Theme;
