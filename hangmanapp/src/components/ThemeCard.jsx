import { useEffect, useState } from 'react';

function ThemeCard(props) {
    return (
        <div>
            <div className="w-60 p-2 grid place-items-center font-bold text-xl text-stone-900 border-4 border-stone-500 ...">
                {props.theme}
            </div>
        </div>
    );
}

export default ThemeCard;
