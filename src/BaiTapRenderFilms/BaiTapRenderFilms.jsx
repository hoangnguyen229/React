import React from 'react'
import Navbar from './components/Navbar.jsx'
import Content from './components/Content.jsx'
import BackgroundImage from '../assets/background/avanger.jpg'

export default function BaiTapRenderFilms() {
    return (
        <div style={{backgroundImage: `url(${BackgroundImage})`, overflowX:'hidden'}} className="container-fluid px-0">
            <div style={{ backgroundColor: 'rgba(0,0,0,.7)'}}>
                <Navbar />
                <Content />
            </div>
        </div>
    )
}
