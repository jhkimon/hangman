import React, { useEffect, useState, useMemo } from 'react';
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
    margin: 3%;
`;

const BlankWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 600px;
    margin: 1%;
`;

function Main({ score, setScore }) {
    const { theme } = useParams();
    const [id, setId] = useState(0);
    const [attempts, setAttempts] = useState(0);
    const [guessedLetters, setGuessedLetters] = useState([]);
    const wordList = useMemo(() => CategorizedWords[theme].slice(0, 10).map((word) => word.toUpperCase()), [theme]);
    const currentWord = wordList[id];

    const [alphabet, setAlphabet] = useState(
        'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => ({
            letter,
            isRight: false,
            isClicked: false,
        }))
    );

    const checkIfWordGuessed = (word, guessedLetters) => {
        return word.split('').every((letter) => guessedLetters.includes(letter));
    };

    const handleLetterBtnClick = (clickedLetter) => {
        if (currentWord.includes(clickedLetter)) {
            setGuessedLetters((prev) => [...prev, clickedLetter]);
        } else {
            setAttempts((prev) => prev + 1);
        }

        if (attempts + 1 >= 9) {
            // 실패
            setId((prev) => (prev + 1) % wordList.length);
            setAttempts(0);
            setGuessedLetters([]);
            setAlphabet((prevAlphabet) =>
                prevAlphabet.map((letter) => ({ ...letter, isClicked: false, isRight: false }))
            );
            // 성공
        } else if (checkIfWordGuessed(currentWord, [...guessedLetters, clickedLetter])) {
            setScore(score + 200 - 10 * (attempts + 1));
            setId((prev) => (prev + 1) % wordList.length);
            setAttempts(0);
            setGuessedLetters([]);
            setAlphabet((prevAlphabet) =>
                prevAlphabet.map((letter) => ({ ...letter, isClicked: false, isRight: false }))
            );
        } else {
            setAlphabet(
                alphabet.map((letter) =>
                    !letter.isClicked && letter.letter === clickedLetter
                        ? {
                              ...letter,
                              isRight: currentWord.includes(clickedLetter),
                              isClicked: true,
                          }
                        : letter
                )
            );
        }
    };

    return (
        <div className="container mx-auto p-10">
            <ProgressBar progress={(id + 1) * 10} />
            <div className="container flex mt-24">
                <div className="w-1/2 flex items-center flex-col">
                    <ThemeCard theme={theme} />
                    <BlankWrapper>
                        <BlankWord letter={currentWord} guessedLetters={guessedLetters} />
                    </BlankWrapper>
                    <LetterWrapper>
                        {alphabet.map((letter, index) => (
                            <LetterCard
                                key={index}
                                letter={letter.letter}
                                onClick={() => handleLetterBtnClick(letter.letter)}
                                isClicked={letter.isClicked}
                                isRight={letter.isRight}
                            />
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
