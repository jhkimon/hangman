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
            overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            className="bg-white p-8 rounded-lg max-w-3xl w-full mx-4"
        >
            <div className="flex flex-col justify-center items-center">
                <img src={img} className="w-40 mb-5" /> {/* 이미지 아래에 마진 추가 */}
                <h2 className="text-center text-5xl font-extrabold mt-5">Game Rules</h2>
                <div className="text-center text-2xl mt-5 mx-8">
                    {' '}
                    {/* 텍스트에 양쪽 마진 추가 */}
                    <p>A word related to the chosen topic will be given.</p>
                    <p className="mt-4">
                        Guess the letters to fill in the blanks and complete the word to win. If you choose an incorrect
                        letter, a part of the hangman will be drawn. You have a total of{' '}
                        <span className="text-red-500 font-bold">9 chances</span> to guess wrong. hangman drawing is
                        completed, you lose.
                    </p>
                    <p className="mt-4">Try to guess the word before the hangman is fully drawn!</p>
                </div>
                <Button
                    onClick={onRequestClose}
                    className="text-center text-2xl border-2 flex justify-center items-center p-2 mt-12" // 마진을 더 넓게 설정
                    letter="Close"
                />
            </div>
        </Modal>
    );
}

export default GameRule;
