import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import GameRule from "../components/GameRule";


function Landing() {
    const [modal, setModal] = useState(false);
    const showRule = () => {
        setModal(!modal);
    }
    const navigate = useNavigate();
    
    const handleButtonClick = () => {
        console.log('얍');
        navigate("/theme");
    };
    return (
        <div className="h-full w-full flex flex-col justify-center items-center">
            <h1 className="font-grandstander text-center text-6xl mt-10">Hangman</h1>
            <div className="flex flex-row items-center space-x-4 mt-10">
                <Button onClick={handleButtonClick} letter="Game Start" />
                <Button onClick={showRule} letter="Game Rules"/>
            </div>
            {modal && <GameRule isOpen={modal} onRequestClose={showRule} />}
        </div>
    );
}

export default Landing;
