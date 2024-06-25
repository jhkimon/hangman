import './App.css';
import './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Landing from './pages/landing';
import Theme from './pages/theme';
import Main from './pages/main';
import Result from './pages/result';

function App() {
    const [score, setScore] = useState(0);
    const [theme, setTheme] = useState('countries');

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/theme" element={<Theme theme={theme} setTheme={setTheme} setScore={setScore} />} />
                <Route path="/main/:theme" element={<Main score={score} setScore={setScore} />} />
                <Route path="/result" element={<Result score={score} theme={theme} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
