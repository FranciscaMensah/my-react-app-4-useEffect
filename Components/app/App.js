import React from "react";
import './App.css';
import Header from '../header/Header';
import Main from '../main/Main';

export default function App(){
    return(
        <div className="app">
           <Header/>
           <Main/>
        </div>
    )
}