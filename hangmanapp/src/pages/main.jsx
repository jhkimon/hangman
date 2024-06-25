import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
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

function Main() {
    const { theme } = useParams();

    const [id, setId] = useState(0);
    const [attempts, setAttempts] = useState(0);
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [score, setScore] = useState(0);

    const letters = useMemo(() => CategorizedWords[theme].slice(0, 10).map((word) => word.toUpperCase()), [theme]);

    const currentWord = letters[id];

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    const handleLetterClick = (char) => {
        if (currentWord.includes(char)) {
            setGuessedLetters((prev) => [...prev, char]);
        } else {
            setAttempts((prev) => prev + 1);
        }

        if (attempts + 1 >= 9) {
            setId((prev) => (prev + 1) % letters.length);
            setAttempts(0);
            setGuessedLetters([]);
        }
        if (checkIfWordGuessed(currentWord, guessedLetters)) {
            setId((prev) => (prev + 1) % letters.length);
            setScore(score + 200 - 10 * (attempts + 1));
            setAttempts(0);
            setGuessedLetters([]);
        }
    };

    const checkIfWordGuessed = (word, guessedLetters) => {
        return word.split('').every((letter) => guessedLetters.includes(letter));
    };

    return (
        <div className="container mx-auto p-10">
            <ProgressBar progress={(id + 1) * 10} />
            <div className="container flex mt-24">
                <div className="w-1/2 flex items-center flex-col">
                    <ThemeCard theme={theme} />
                    <BlankWord letter={currentWord} guessedLetters={guessedLetters} />
                    <LetterWrapper>
                        {alphabet.map((char, index) => (
                            <LetterCard key={index} letter={char} onClick={() => handleLetterClick(char)} />
                        ))}
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
