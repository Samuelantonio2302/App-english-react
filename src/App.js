import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Colors } from './pages/Colors/Colors';
import { Numbers } from './pages/Numbers/Numbers';
import { Alphabet } from './pages/Alphabet/Alphabet'
import { ColorPlay } from './pages/Colors/ColorsPlay';
import { NumberPlay } from './pages/Numbers/Numberplay';
import { Desarrollo } from './pages/desarrollo';
import { PageNotFound } from './pages/PageNotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/colors" element={<Colors />}></Route>
      <Route path="/numbers" element={<Numbers />}></Route>
      <Route path="/alphabet" element={<Alphabet />}></Route>
      <Route path="/alphabet/play" element={<Alphabet />}></Route>
      <Route path="/colors/play" element={<ColorPlay />}></Route>
      <Route path="/number/play" element={<NumberPlay />}></Route>
      <Route path="/desarrollo" element={<Desarrollo />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
}

export default App;
