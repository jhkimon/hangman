import { useEffect } from 'react';

function BlankWord(props) {
    const strArr = [...props.letter];
    const correctWord = props.guessedLetters;

    useEffect(() => {
        const correctWord = props.guessedLetters;
    }, [props.guessedLetters]);

    return (
        <div className="flex justify-center m-3">
            {strArr.map((charElem, index) => (
                <span key={index} className="inline-block">
                    {charElem === ' ' ? (
                        <span className="w-12 p-2 m-2"></span>
                    ) : (
                        <span className="w-24 p-2 m-3 border-b-4 border-stone-500 font-extrabold text-xl text-stone-900">
                            {props.guessedLetters != null && props.guessedLetters.includes(charElem) ? (
                                charElem
                            ) : (
                                <span className="invisible">{charElem}</span>
                            )}
                        </span>
                    )}
                </span>
            ))}
        </div>
    );
}

export default BlankWord;
