import { useEffect, useState } from 'react';

function BlankWord(props) {
    const strArr = [...props.letter];
    const correctWord = props.guessedLetters;

    useEffect(() => {
        const correctWord = props.guessedLetters;
    }, [props.guessedLetters]);

    return (
        <>
            <div className="flex justify-center m-3">
                {strArr.map((charElem, index) => (
                    <span key={index}>
                        {charElem === ' ' ? (
                            <span className="w-8 p-2 m-2">
                                <span className=""></span>
                            </span>
                        ) : (
                            <span className="w-8 p-2 m-2 border-b-4 border-stone-500">
                                <span className="font-extrabold text-2xl text-stone-900">
                                    {props.guessedLetters != null && props.guessedLetters.includes(charElem)
                                        ? charElem
                                        : ''}
                                </span>
                            </span>
                        )}
                    </span>
                ))}
            </div>
        </>
    );
}

export default BlankWord;
