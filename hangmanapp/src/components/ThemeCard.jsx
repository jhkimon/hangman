import React, { useEffect } from 'react';

function ThemeCard({ theme }) {
    return (
        <div>
            <div className="w-60 p-2 grid place-items-center font-bold text-xl text-stone-900 border-4 border-stone-500">
                {theme}
            </div>
        </div>
    );
}

export default ThemeCard;
