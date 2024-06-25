import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Button from "../components/Button";


function Landing() {
    const [modal, setModal] = useState(false);
    const showRule = () => {
        setModal(!modal);
    }
    return (
        <div className="h-full w-full flex flex-col justify-center items-center">
            <h1 className="font-grandstander text-center text-6xl mt-10">Hangman</h1>
            <div className="flex flex-row items-center space-x-4 mt-10">
                <Button onClick={showRule} className="font-grandstander text-center text-xl" letter="Game Start" />
                <Button className="font-grandstander text-center text-xl" letter="Game Rules" />
            </div>
        </div>
    );
}

export default Landing;
