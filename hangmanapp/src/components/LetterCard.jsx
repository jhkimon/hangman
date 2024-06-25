import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';


const LetterSpan = styled.div`
    display: inline-block;
    border: 2px solid black;
    padding: 0.5rem 0.5rem;
    margin: 0.5rem;
    cursor: pointer;
    width: 40px;
    text-align: center;
    &:active {
        background-color: lightgray;
    }


`

function LetterCard({ letter, onClick }) {
  return (
    <>
        <LetterSpan className='text-2xl hover:-translate-y-1 hover:scale-110 ease-in-out transform duration-500' onClick={onClick}>
            {letter}
        </LetterSpan>
    </>
  );
}

export default LetterCard;