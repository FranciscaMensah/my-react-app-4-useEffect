import React from 'react';
import './Header.css';
import {IoAperture} from 'react-icons/io5';

export default function Header(){
    return(
        <div className='header'>
            <div className='logo'>
                    <IoAperture
                    size = {36}
                    className = 'logo--icon'
                    />
                   <h1 className='logo--text'>MemeGenerator</h1>
            </div>  
            <h2 className='header--subtitle'>React Course - Project 4</h2>
        </div>
    )
}