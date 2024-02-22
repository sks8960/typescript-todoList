import React, {
  useState,
  useRef,
  useEffect,
  useReducer,
  useContext,
} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./css/App.css";
import Editor from "./components/Editor";
import { Todo } from "./Types";
import TodoItem from "./components/TodoItem";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./bootstrap/Navbar";
// import { text } from "stream/consumers";

import Home from "./page/Home";
import TodoList from "./page/TodoList";
import Calander from "./page/Calander";

import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="calander" element={<Calander />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
