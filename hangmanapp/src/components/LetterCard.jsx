import React from 'react';
import styled, { css } from 'styled-components';

const LetterSpan = styled.div`
    display: inline-block;
    border: 2px solid black;
    padding: 0.3rem 0.3rem;
    margin: 0.7rem;
    cursor: pointer;
    width: 60px;
    text-align: center;
    background-color: ${({ isRight, isClicked }) =>
        !isClicked ? 'white' : isRight ? 'lightgreen' : 'rgb(248 113 113)'};
    opacity: ${({ isClicked }) => (isClicked ? '0.2' : '1')};

    &:active {
        background-color: lightgray;
    }

    /* 조건에 따라 pointer-events-none 적용 */
    ${({ ifShow }) =>
        ifShow &&
        css`
            pointer-events: none !important;
            opacity: 0.4 !important;
        `}

    /* hover 효과 */
    transition: transform 0.5s ease-in-out;

    &:hover {
        transform: translateY(-1px) scale(1.1);
    }
`;

function LetterCard({ letter, onClick, isRight, isClicked, ifShow }) {
    return (
        <LetterSpan
            onClick={isClicked ? null : onClick} // isClicked일 때는 onClick을 null로 설정하여 클릭 무효화
            isRight={isRight}
            isClicked={isClicked}
            ifShow={ifShow}
        >
            {letter}
        </LetterSpan>
    );
}

export default LetterCard;
