import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
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
        <div className="h-full w-full flex flex-col justify-center items-center mt-20">
            <h2 className="font-bold text-4xl mb-12">Choose Theme!</h2>
            <div className="grid grid-cols-2 gap-4">
                {themes.slice(0, 2).map((theme) => (
                    <Button
                        key={theme}
                        letter={theme}
                        onClick={() => handleButtonClick(theme)}
                        setTheme={theme}
                        className="hover:bg-gray-100"
                    />
                ))}
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
                {themes.slice(2).map((theme) => (
                    <Button
                        key={theme}
                        letter={theme}
                        onClick={() => handleButtonClick(theme)}
                        setTheme={theme}
                        className={theme === 'NEXT' ? 'hover:bg-yellow-200' : 'hover:bg-gray-100'} // NEXT 버튼에만 노란색 hover 스타일 적용
                    />
                ))}
            </div>
        </div>
    );
}

export default Theme;
