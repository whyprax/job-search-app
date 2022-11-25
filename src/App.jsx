import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home.component";
import JobSearch from "./pages/Job_Search/JobSearch.component";

const App = () => {
  return (
    <div className="app__body">
      <Link to="/">
        <div className="app__logo">
          <span className="app__job">JOB</span>
          <span className="app__search">Search</span>
        </div>
      </Link>

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/jobsearch" exact element={<JobSearch />} />
      </Routes>
    </div>
  );
};

export default App;
