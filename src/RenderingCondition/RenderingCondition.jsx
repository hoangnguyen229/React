import React from 'react'

const login = false;
const userName = "Nguyễn Văn Hoàng";

const renderContent = () => {
    if(login === true){
        return <p>Hello {userName}</p>;
    }
    return <button>Đăng nhập</button>;
}

export default function RenderingCondition() {
    return (
        <div>
            {/* {login === true ? <p>Hello {userName}</p> : <button>Đăng nhập</button>} */}
            {renderContent()}
        </div>
    )
}
