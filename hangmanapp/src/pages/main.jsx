import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Button from '../components/Button';
import BlankWord from '../components/BlankWord';
import LetterCard from '../components/LetterCard';
import ThemeCard from '../components/ThemeCard';
import ScoreBoard from '../components/ScoreBoard';

const ModifiedButton = styled(Button)`
    margin: 10px;
`;

const letter = 'apple';
const theme = 'NEXT';

function Main() {
    return (
        <div>
            <ThemeCard theme={theme} />
            <BlankWord letter={letter} />
            <LetterCard />
            <ScoreBoard />
            <ModifiedButton />
        </div>
    );
}

export default Main;
