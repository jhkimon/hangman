import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Button from '../components/Button';
import BlankWord from '../components/BlankWord';
import LetterCard from '../components/LetterCard';
import ThemeCard from '../components/ThemeCard';
import ScoreBoard from '../components/ScoreBoard';
import ProgressBar from '../components/ProgressBar';
import CategorizedWords from '../components/CategorizedWords';


const LetterWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 580px;
`;

const theme = 'countries';
const letter = CategorizedWords[theme][Math.floor(Math.random() * CategorizedWords[theme].length)];

function Main() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const [score, setScore] = useState(300);
    return (
        <div className="container mx-auto p-10">
            <ProgressBar progress={10} />
            <div className="container flex mt-24">
                <div className="w-1/2 flex items-center flex-col">
                    <ThemeCard theme={theme} />
                    <BlankWord letter={letter} />
                    <LetterWrapper>
                        {alphabet.map((letter, index) => {
                            return letter ? <LetterCard key={index} letter={letter} /> : null;
                        })}
                    </LetterWrapper>
                </div>
                <div className="w-1/2 flex items-center flex-col">
                    <ScoreBoard score={score} />
                    <img
                        src="https://www.shutterstock.com/image-vector/hangman-hang-man-guessing-game-260nw-2179099581.jpg"
                        alt="hangman"
                    />
                </div>
            </div>
        </div>
    );
}

export default Main;
