import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button'; // 경로 확인

const themes = ['Food', 'Country', 'Suneung', 'Idol', 'NEXT', 'Random'];

function Theme() {
    const navigate = useNavigate();

    const handleButtonClick = (theme) => {
        console.log('얍');
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
