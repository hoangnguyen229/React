import React, { useState, useEffect } from 'react'

export default function StateDemo() {
    
    //state: là thuộc tính có sẵn của react component giúp định nghĩa những 
    //       nội dung có khả năng thay đổi khi người dùng thao tác sự kiện

    const [status, setStatus] = useState(false);

    const userLogin = {
        name: 'Hoàng Nguyễn',
        age: 21
    }

    // setState là phương thức giúp thay đổi giá trị state và render lại giao diện
    // setState là phương thức bất đồng bộ
    const login = () => {
        setStatus(true);
        // console.log(status); // ở đây sẽ cho ra false vì status ở đây không thông qua setState 
                                // nghĩa là không đi từ trên xuống dưới mà khi gọi hàm thì các dòng code chạy cùng 1 lúc 
                                // vì vậy để muốn thấy được sự thay đổi của state thì phải sử dụng hook useEffect
    }

    // Sử dụng useEffect để log ra những thay đổi khi set lại state cho status
    useEffect(() => {
        console.log(status) // true
    },[status]);

    const renderUserLogin = () => {
        if(status){
            return <div className="text-center">{userLogin.name}</div>
        }
        return <button onClick={login}>Đăng nhập</button>;
    }

    return (
        <div>
            {renderUserLogin()}
        </div>  
    )
}
