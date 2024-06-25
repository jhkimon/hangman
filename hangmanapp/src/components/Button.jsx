import React from 'react';
import 'tailwindcss/tailwind.css';

function Button({ onClick, letter, className }) {
    return (
        <button
            className={`px-8 py-4 border-2 border-black bg-white text-xl cursor-pointer hover:bg-gray-100 ${className}`}
            onClick={onClick}
        >
            {letter}
        </button>
    );
}

export default Button;
