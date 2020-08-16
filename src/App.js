import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import User from "./components/User";
import Job from "./components/Job";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <br />
        <Route pat="/" exact component={User} />
        <Route pat="/edit/:id" component={EditUser} />
        <Route pat="/create" component={CreateUser} />
        <Route pat="/job" component={Job} />
      </Container>
    </BrowserRouter>
  );
}

export default App;
