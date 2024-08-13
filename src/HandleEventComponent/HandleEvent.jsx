import React from 'react'

// Định nghĩa hàm xử lý sự kiện khi người dùng click vào button
const btnClickme = (name) => {
    alert('Hello: ' + name);
}

// Truyền tham số khi click
const handleClickParam = (param,button) => {
    console.log("Param: ", param);
    console.log("Button: ", button);
    alert("Param: " + param);
    alert("Button: " + button);
}

export default function HandleEvent() {
    return (
        <div>
            {/* <button onClick={btnClickme}>Click me!</button> */}
            <button onClick={
                () => { btnClickme("Hoàng") }
            }>Click me!</button>

            <button onClick={handleClickParam.bind(this,"Hello World!","NGU")}>Click Param!</button>
        </div>
    )
}
