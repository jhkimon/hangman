import React, { useEffect, useState, useMemo } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import BlankWord from '../components/BlankWord';
import LetterCard from '../components/LetterCard';
import ThemeCard from '../components/ThemeCard';
import ScoreBoard from '../components/ScoreBoard';
import ProgressBar from '../components/ProgressBar';
import CategorizedWords from '../components/CategorizedWords';
import CorrectAudio from '../audio/correct_answer2.mp3';
import WrongAudio from '../audio/blip02.mp3';
import Correct from '../audio/correct_answer3.mp3';
import Wrong from '../audio/99770E4A5CDE91EE18.mp3';

const correctaudio = new Audio(CorrectAudio);
const wrongaudio = new Audio(WrongAudio);
const correct = new Audio(Correct);
const wrong = new Audio(Wrong);

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fcfcfc;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
    background-color: #fcfcfc;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 24px;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    @media (min-width: 768px) {
        width: 48%;
    }
`;

const RightColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    @media (min-width: 768px) {
        width: 48%;
    }
`;

const ImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 300px;
`;

const LetterWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin: 3%;
`;
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

const BlankWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin: 1%;
`;

const NextButton = styled.button`
    margin: 1% 5%;
    padding: 10px 20px;
    background-color: #48bb78;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 90%;
    transition: background-color 0.3s;

    &:hover {
        background-color: #2f855a;
    }
`;

const RightModal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40%;
    aspect-ratio: 1/1;
    border: 10px solid red;
    border-radius: 50%;
    pointer-events: none;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const WrongModal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    &:before,
    &:after {
        position: absolute;
        content: ' ';
        height: 600px;
        width: 10px;
        background-color: blue;
    }
    &:before {
        transform: rotate(45deg);
    }
    &:after {
        transform: rotate(-45deg);
    }
    @media (max-width: 768px) {
        &:before,
        &:after {
            height: 300px;
        }
    }
`;

function Main({ score, setScore }) {
    const { theme } = useParams();
    const [id, setId] = useState(0);
    const [attempts, setAttempts] = useState(1);
    const [guessedLetters, setGuessedLetters] = useState([]);
    const wordList = useMemo(() => {
        const words = CategorizedWords[theme];
        const shuffledWords = shuffleArray(words).slice(0, 10);
        console.log(shuffledWords);
        return shuffledWords.map((word) => word.toUpperCase());
    }, [theme]);
    const currentWord = wordList[id];
    const [ifShowBtnToNext, setIfShowBtnToNext] = useState(false);
    const [ifShowRightModal, setIfShowRightModal] = useState(null); // -1을 null로 변경
    console.log(currentWord);
    const [alphabet, setAlphabet] = useState(
        'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => ({
            letter,
            isRight: false,
            isClicked: false,
        }))
    );

    const checkIfWordGuessed = (word, guessedLetters) => {
        return word
            .split('')
            .filter((letter) => letter !== ' ')
            .every((letter) => guessedLetters.includes(letter));
    };

    const handleLetterBtnClick = (clickedLetter) => {
        if (currentWord.includes(clickedLetter)) {
            correctaudio.play();
            console.log('correct');
            setGuessedLetters((prev) => [...prev, clickedLetter]);
        } else {
            wrongaudio.play();
            console.log('wrong');
            setAttempts((prev) => prev + 1);
        }
        if (attempts >= 9) {
            setIfShowBtnToNext(true);
            setIfShowRightModal(0);
        } else if (attempts < 9 && checkIfWordGuessed(currentWord, [...guessedLetters, clickedLetter])) {
            setIfShowBtnToNext(true);
            setIfShowRightModal(1);
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
    const navigate = useNavigate();

    const handleNextBtnClick = () => {
        if (checkIfWordGuessed(currentWord, guessedLetters)) {
            setScore(score + 200 - 10 * attempts);
        }
        setId((prev) => (prev + 1) % wordList.length);
        setAttempts(1);
        setGuessedLetters([]);
        setIfShowBtnToNext(false);
        if (id == 9) {
            navigate('/result');
        }
        setIfShowRightModal(null); // 모달 상태 초기화
        setAlphabet(
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => ({
                letter,
                isRight: false,
                isClicked: false,
            }))
        );
    };

    return (
        <Container>
            {ifShowRightModal === 1 && <RightModal />}
            {ifShowRightModal === 0 && <WrongModal />}
            <ProgressBar progress={(id + 1) * 10} />
            <ContentWrapper>
                <LeftColumn>
                    <ScoreBoard score={score} />
                    <ImageWrapper>
                        <img src={`/img/hangman${attempts - 1}.png`} alt="hangman" width="50%" />
                    </ImageWrapper>
                </LeftColumn>
                <RightColumn>
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
                                ifShow={ifShowBtnToNext}
                            />
                        ))}
                    </LetterWrapper>
                </RightColumn>
            </ContentWrapper>
            {ifShowBtnToNext && <NextButton onClick={() => handleNextBtnClick()}>Next</NextButton>}
        </Container>
    );
}

export default Main;
