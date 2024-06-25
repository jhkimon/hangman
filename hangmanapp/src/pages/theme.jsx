import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button'; // Ensure this path is correct
import ClickAudio1 from '../audio/poka01.mp3';

const clickaudio1 = new Audio(ClickAudio1);
const themes = ['Food', 'Country', 'Suneung', 'Idol', 'NEXT'];

function Theme({ theme, setTheme, setScore }) {
    const navigate = useNavigate();
    console.log(theme, setTheme, setScore);
    const handleButtonClick = (theme) => {
        clickaudio1.play();
        setScore(0); // Reset score on theme change
        setTheme(theme);
        navigate(`/main/${theme}`);
    };

    return (
        <div>
            {themes.map((theme) => (
                <Button key={theme} letter={theme} onClick={() => handleButtonClick(theme)} />
            ))}
        </div>
    );
}

export default Theme;
