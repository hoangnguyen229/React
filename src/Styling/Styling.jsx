import React from 'react'
import './Styling.css' // sử dụng cho toàn bộ giao diện
import style from './Styling.module.css' // sử dụng cho 1 component được call tới
import Child from './Child'

// Khai báo Style theo kiểu đối tượng

const styleText = {
    color: 'pink',
    padding: '10px',
    justifyContent: 'center',
    backgroundColor: 'black'
}

export default function Styling() {
    return (
        <div>
            <Child />
            <p className="txt">HELLO</p>
            <span className={style.txtStyle}>HELLO BRO</span>
            <p style={styleText}>HELLO WORLD</p>
        </div>
    )
}
