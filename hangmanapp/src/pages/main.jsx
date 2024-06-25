import React, { useEffect, useState, useMemo } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import BlankWord from "../components/BlankWord";
import LetterCard from "../components/LetterCard";
import ThemeCard from "../components/ThemeCard";
import ScoreBoard from "../components/ScoreBoard";
import ProgressBar from "../components/ProgressBar";
import CategorizedWords from "../components/CategorizedWords";

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

const RightModal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
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
        content: " ";
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
    const wordList = useMemo(
        () =>
            CategorizedWords[theme]
                .slice(0, 10)
                .map((word) => word.toUpperCase()),
        [theme]
    );
    const currentWord = wordList[id];
    const [ifShowBtnToNext, setIfShowBtnToNext] = useState(false);
    const [ifShowRightModal, setIfShowRightModal] = useState(null); // -1을 null로 변경
    console.log(currentWord);
    const [alphabet, setAlphabet] = useState(
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => ({
            letter,
            isRight: false,
            isClicked: false,
        }))
    );

    const checkIfWordGuessed = (word, guessedLetters) => {
        return word
            .split("")
            .every((letter) => guessedLetters.includes(letter));
    };

    const handleLetterBtnClick = (clickedLetter) => {
        if (currentWord.includes(clickedLetter)) {
            console.log("correct");
            setGuessedLetters((prev) => [...prev, clickedLetter]);
        } else {
            console.log("wrong");
            setAttempts((prev) => prev + 1);
        }
        if (attempts >= 9) {
            setIfShowBtnToNext(true);
            setIfShowRightModal(0);
        } else if (
            attempts < 9 &&
            checkIfWordGuessed(currentWord, [...guessedLetters, clickedLetter])
        ) {
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

    const handleNextBtnClick = () => {
        if (checkIfWordGuessed(currentWord, guessedLetters)) {
            setScore(score + 200 - 10 * attempts);
        }
        setId((prev) => (prev + 1) % wordList.length);
        setAttempts(1);
        setGuessedLetters([]);
        setIfShowBtnToNext(false);
        setIfShowRightModal(null); // 모달 상태 초기화
        setAlphabet(
            "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => ({
                letter,
                isRight: false,
                isClicked: false,
            }))
        );
    };

    return (
        <div className="container mx-auto p-10 relative">
            {ifShowRightModal === 1 && <RightModal />}
            {ifShowRightModal === 0 && <WrongModal />}
            <ProgressBar progress={(id + 1) * 10} />
            <div className="container flex mt-24">
                <div className="w-1/2 flex items-center flex-col">
                    <ThemeCard theme={theme} />
                    <BlankWrapper>
                        <BlankWord
                            letter={currentWord}
                            guessedLetters={guessedLetters}
                        />
                    </BlankWrapper>
                    <LetterWrapper>
                        {alphabet.map((letter, index) => (
                            <LetterCard
                                key={index}
                                letter={letter.letter}
                                onClick={() =>
                                    handleLetterBtnClick(letter.letter)
                                }
                                isClicked={letter.isClicked}
                                isRight={letter.isRight}
                                ifShow={ifShowBtnToNext}
                            />
                        ))}
                    </LetterWrapper>
                </div>
                <div className="w-1/2 flex items-center flex-col">
                    <ScoreBoard score={score} />
                    <img
                        src={`/img/hangman${attempts - 1}.png`}
                        alt="hangman"
                    />
                    {ifShowBtnToNext && (
                        <button
                            className="mt-5 p-2 bg-green-500 text-white font-bold rounded-md"
                            onClick={handleNextBtnClick}
                        >
                            Next
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Main;
