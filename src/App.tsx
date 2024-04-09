import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Post from './components/post/Post';
import Edit from './components/post/Edit';
import Create from './components/post/Create';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App(): JSX.Element {
  return (
    <div className="App">
      <Navbar />
      <div className={'container'}>
        <Routes>
          <Route path={"/"} Component={Home} />
          <Route path={"/post/:postId"} Component={Post} />
          <Route path={"/edit/:postId"} Component={Edit} />
          <Route path={"/create"} Component={Create} />
        </Routes>
      </div>
    </div>
  );
}
export default App;