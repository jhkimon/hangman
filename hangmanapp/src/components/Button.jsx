import React from 'react';
import 'tailwindcss/tailwind.css';

function Button(props) {

    return (
        <button
            className="px-5 py-2.5 border-2 border-black bg-white hover:bg-gray-100 rounded-none text-2xl text-black cursor-pointer"
            onClick={props.onClick}
            style={{ fontFamily: 'Caveat, cursive' }} // 손글씨 폰트 적용
        >
            {props.letter}
        </button>
    );
}

export default Button;
