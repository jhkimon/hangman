import React from "react";
import { useEffect, useState } from "react";

function ProgressBar({ progress }) {
    return (
        <div className="w-full h-10 bg-gray-200 rounded-lg">
            <div
                className="h-10 bg-green-500 rounded-lg"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
}

export default ProgressBar;