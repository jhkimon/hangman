import { useEffect, useState } from 'react';

function BlankWord(props) {
    const strArr = [...props.letter];
    return (
        <>
            <div className="flex justify-center m-3">
                {strArr.map((charElem, index) => {
                    return (
                        <span>
                            {charElem == ' ' ? (
                                <span className="w-8 p-2 m-2">
                                    <span className=""></span>
                                </span>
                            ) : (
                                <span className="w-8 p-2 m-2 border-b-4 border-stone-500">
                                    <span className="font-extrabold text-2xl text-stone-900">{charElem}</span>
                                </span>
                            )}
                        </span>
                    );
                })}
            </div>
        </>
    );
}

export default BlankWord;
