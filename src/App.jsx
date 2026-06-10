import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<h1>Hello world</h1>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
      </Router>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
`;

export default App;
