import React from 'react';
import styled from 'styled-components';

const LetterSpan = styled.div`
    display: inline-block;
    border: 2px solid black;
    padding: 0.3rem 0.3rem;
    margin: 0.7rem;
    cursor: pointer;
    width: 60px;
    text-align: center;
    &:active {
        background-color: lightgray;
    }
    background-color: ${({ isRight, isClicked }) => 
        !isClicked ? 'white' :
        isRight ? 'lightgreen' : 'rgb(248 113 113)'};
    pointer-events: ${({ isClicked }) => isClicked ? 'none' : 'auto'};
    opacity: ${({ isClicked }) => isClicked ? '0.2' : '1'};
`;

function LetterCard({ letter, onClick, isRight, isClicked }) {
    return (
        <LetterSpan 
            className='text-3xl hover:-translate-y-1 hover:scale-110 ease-in-out transform duration-500' 
            onClick={onClick}
            isRight={isRight}
            isClicked={isClicked}
        >
            {letter}
        </LetterSpan>
    );
}

export default LetterCard;
