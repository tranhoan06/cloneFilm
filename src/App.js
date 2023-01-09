import './App.css';
import { Routes, Route } from 'react-router-dom';
import {PUBLIC_ROUTES, PRIVATE_ROUTES} from "./routes/index" 
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from './component/Navbar/Navbar';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const {user} = useSelector(state => state.auth)


  const routes = user ? PRIVATE_ROUTES : PUBLIC_ROUTES

  return (
      <div className="App">
        <Navbar/>
        <Routes>
          {routes.map((route, id) => <Route key={id} path={route.path} element={<route.component />}/>)}
          <Route path='/Search' element={<Search/>}/>
        </Routes>
        
      </div>
  );
}

export default App;
