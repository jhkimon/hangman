import React from 'react';
import Modal from 'react-modal';
import img from '../image/GameRule1.png';
import Button from './Button';

function GameRule({ isOpen, onRequestClose }) {
    return (
        <Modal
            isOpen={isOpen}
            ariaHideApp={false}
            onRequestClose={onRequestClose}
            overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
            <div className="flex flex-col justify-center items-center">
                <img src={img} className="w-40 " />
                <h2 className="text-center text-5xl font-extrabold mt-5">Game Rules</h2>
                <h2 className="text-center text-2xl">
                    <br />A word related to the chosen topic will be given.
                    <br />
                    <br />
                    Guess the letters to fill in the blanks and complete the word to win. If you choose an incorrect
                    letter, a part of the hangman will be drawn. You have a total of to guess wrong. hangman drawing is
                    completed, you lose.
                    <br />
                    <br />
                    Try to guess the word before the hangman is fully drawn!
                </h2>
                <br />
                <Button
                    onClick={onRequestClose}
                    overlayclassName="text-center text-2xl border-2 flex justify-center items-center p-2"
                    letter="Close"
                ></Button>
            </div>
        </Modal>
    );
}

export default GameRule;
