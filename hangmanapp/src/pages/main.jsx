import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import BlankWord from "../components/BlankWord";
import LetterCard from "../components/LetterCard";
import ThemeCard from "../components/ThemeCard";
import ScoreBoard from "../components/ScoreBoard";

const LetterWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 600px;
`;

function Main() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    return (
        <div>
            <ThemeCard />
            <BlankWord />
            <LetterWrapper>
                {alphabet.map((letter, index) => {
                    return letter ? (
                        <LetterCard key={index} letter={letter} />
                    ) : null;
                })}
            </LetterWrapper>

            <ScoreBoard />
        </div>
    );
}

export default Main;
