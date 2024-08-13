import React, { useState } from 'react'
import { colors, cars } from '../mock/BaiTapChonXe'


export default function BaiTapChonXe() {

    const [rencentlyImg, setRecentlyImg] = useState(cars[0].imgSrc);

    function renderImage(index){
        setRecentlyImg(cars[index].imgSrc);
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-7">
                    <img style={{width:"100%", height:"100%"}} src={rencentlyImg} alt="black-car" />
                </div>
                <div className="col-5">
                    <div className="card text-dark">
                        <div className="card-header text-primary">Exterior Color</div>
                        <div className="card-body">
                            {/* Render with Map */}
                            {colors.map((color,index) => (
                                <div key={index} className="row border border-link pt-2 pb-2 mb-2" style={{cursor:'pointer'}}>
                                    <img className="col-2 p-0" src={color.imgSrc} alt={`${color.name}-icon`} onClick={() => renderImage(index)} />
                                    <div className="col-10">
                                        <h3>{color.name}</h3>
                                        <p>{color.description}</p>                                
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
