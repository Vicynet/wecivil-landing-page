import logo from './logo.svg';
import './App.css';
import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import GlobalStyle from './GlobalStyle'
import LogoDiv from './components/logo/logo'
import Features from './components/features/features'
import Footer from './components/footer/footer'

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <>
              <GlobalStyle/>
              <Route path="/" exact component={LogoDiv}/>
              <Route path="/" exact component={Features}/>
              <Route path="/" exact component={Footer}/>
            </>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
