import { useState, useEffect } from 'react';
import './App.css';
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About'
import Info from './pages/Info';
import Game, {gload} from './pages/Game';
import Experience, {sugAction} from './pages/Experience';
import Call from './pages/Call';
import Resources from './pages/Resources';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} >
        <Route path="/resources" element={<Resources />} />
        <Route path="/call" element={<Call />} />
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="/info" element={<Info />} />
      <Route path="/game" element={<Game />} loader={gload} />
      <Route path="/exp" element={<Experience />} action={sugAction} />
    </Route>
  ))

function App() {

  return <RouterProvider router={router} />
}

export default App
