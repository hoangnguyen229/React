import React from 'react'
import BackgroundImage from '../assets/glassesImage/background.jpg'
import Navbar from './components/Navbar'
import Content from './components/Content'

export default function BaiTapChonKinh() {
    return (
        <div style={{backgroundImage: `url(${BackgroundImage})`, overflowX:'hidden', width:'100%', height:'100vh'}} className="container-fluid px-0">
            <div style={{ backgroundColor: 'rgba(0,0,0,.8)', height:'100vh'}}>
                <Navbar />
                <Content />
            </div>
        </div>
    )
}
