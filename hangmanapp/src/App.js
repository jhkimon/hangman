import './App.css';
import './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import {useState, useEffect} from 'react';
import Landing from './pages/landing';
import Theme from './pages/theme';
import Main from './pages/main';
import Result from './pages/result';

function App() {
    const [score, setScore] = useState(0);
    const [theme, setTheme] = useState('countries');
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/theme" element={<Theme />} />
                    <Route path="/main/:theme" element={<Main />} />
                    <Route path="/result" element={<Result />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
