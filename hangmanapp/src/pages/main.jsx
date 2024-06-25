import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
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
`;

function Main() {
    const { theme } = useParams();
    const [alphabet, setAlphabet] = useState([
        { letter: "A", isRight: false, isClicked: false },
        { letter: "B", isRight: false, isClicked: false },
        { letter: "C", isRight: false, isClicked: false },
        { letter: "D", isRight: false, isClicked: false },
        { letter: "E", isRight: false, isClicked: false },
        { letter: "F", isRight: false, isClicked: false },
        { letter: "G", isRight: false, isClicked: false },
        { letter: "H", isRight: false, isClicked: false },
        { letter: "I", isRight: false, isClicked: false },
        { letter: "J", isRight: false, isClicked: false },
        { letter: "K", isRight: false, isClicked: false },
        { letter: "L", isRight: false, isClicked: false },
        { letter: "M", isRight: false, isClicked: false },
        { letter: "N", isRight: false, isClicked: false },
        { letter: "O", isRight: false, isClicked: false },
        { letter: "P", isRight: false, isClicked: false },
        { letter: "Q", isRight: false, isClicked: false },
        { letter: "R", isRight: false, isClicked: false },
        { letter: "S", isRight: false, isClicked: false },
        { letter: "T", isRight: false, isClicked: false },
        { letter: "U", isRight: false, isClicked: false },
        { letter: "V", isRight: false, isClicked: false },
        { letter: "W", isRight: false, isClicked: false },
        { letter: "X", isRight: false, isClicked: false },
        { letter: "Y", isRight: false, isClicked: false },
        { letter: "Z", isRight: false, isClicked: false },
    ]);
    const [selectedWord, setSelectedWord] = useState("");
    const [score, setScore] = useState(300);

    useEffect(() => {
        if (theme && CategorizedWords[theme]) {
            const randomWord =
                CategorizedWords[theme][
                    Math.floor(Math.random() * CategorizedWords[theme].length)
                ];
            setSelectedWord(randomWord.toUpperCase());
        }
    }, [theme]);

    const handleLetterClick = (clickedLetter) => {
        setAlphabet(
            alphabet.map((letter) =>
                !letter.isClicked && letter.letter === clickedLetter
                    ? {
                          ...letter,
                          isRight: selectedWord.includes(clickedLetter),
                          isClicked: true,
                      }
                    : letter
            )
        );
    };

    return (
        <div className="container mx-auto p-10">
            <ProgressBar progress={10} />
            <div className="container flex mt-24">
                <div className="w-1/2 flex items-center flex-col">
                    <ThemeCard theme={theme} />
                    <BlankWord letter={selectedWord} alphabet={alphabet}/>
                    <LetterWrapper>
                        {alphabet.map((letter, index) => {
                            return (
                                <LetterCard
                                    key={index}
                                    letter={letter.letter}
                                    onClick={() =>
                                        handleLetterClick(letter.letter)
                                    }
                                    isClicked={letter.isClicked}
                                    isRight={letter.isRight}
                                />
                            );
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
