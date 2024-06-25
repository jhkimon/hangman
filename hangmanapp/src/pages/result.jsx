import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

function Result({ score, theme }) {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/');
    };
    return (
        <div className="h-full w-full flex flex-col justify-center items-center">
            <h1 className="font-grandstander font-black tracking-tighter text-center text-6xl mt-10">Congratulation</h1>
            <p className="font-grandstander font-black tracking-tighter text-center text-4xl mt-10">{theme}</p>
            <p className="font-grandstander font-black tracking-tighter text-center text-4xl mt-10">score: {score}</p>
            <br />
            <Button onClick={handleButtonClick} letter="restart" overlayClassname=""></Button>
        </div>
    );
}

export default Result;
