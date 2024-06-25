import { useEffect, useState } from 'react';

function BlankWord(props) {
    const strArr = [...props.letter];
    return (
        <>
            <div className='flex justify-center'>
                {strArr.map((charElem, index) => {
                    return (
                        <span className="w-8 p-2 m-2 border-b-4 border-stone-500">
                            <span className="font-extrabold text-2xl text-stone-900">{charElem}</span>
                        </span>
                    );
                })}
            </div>
        </>
    );
}

export default BlankWord;
