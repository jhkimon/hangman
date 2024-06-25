import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";

function ScoreBoard({score}) {
    return (
            <div className="w-60 p-2 grid place-items-center font-bold text-xl text-stone-900 border-4 border-stone-500">
                {score}
            </div>
    );
}

export default ScoreBoard;
