import React, { useState, useEffect } from 'react'
import Model from '../../assets/glassesImage/model.jpg'
import GlassesImageG1 from '../../assets/glassesImage/v1.png'
import { ListGlasses } from '../../mock/DataGlasses'

export default function Content() {
    const [recentlyImage, setRecentlyImg] = useState({
        img: ListGlasses[0].img,
        name: ListGlasses[0].name,
        price: ListGlasses[0].price
    });

    useEffect(() => {
        console.log(ListGlasses[0].name);
        console.log(ListGlasses[0].img);
    })

    function renderImage(index){
        const selected = ListGlasses[index]
        setRecentlyImg({
            img: selected.img,
            name: selected.name,
            price: selected.price
        });
    }
    
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-6 text-center">
                    <img className="position-absolute" style={{ width: '250px' }} src={Model} alt='model.jpg' />
                    <img className="position-relative" style={{ width: '134px', marginLeft: '57px', marginTop: '73px', opacity: '0.7' }} src={recentlyImage.img} alt="" />
                    <div className="position-relative text-white" style={{ width: '251px', marginLeft: '174px', marginTop: '123px', backgroundColor: 'rgba(0,0,0,.9)' }}>
                        <h3 className="text-primary">{recentlyImage.name}</h3>
                        <p>{recentlyImage.price}</p>
                    </div>
                </div>
                <div className="col-6 text-center">
                    <img style={{ width: '250px' }} src={Model} alt='model.jpg' />

                </div>
            </div>
            <div className="row text-center mt-5 bg-light">
                {ListGlasses.map((glass, index) => (
                    <div key={index} className="col-4 mb-2">
                        <img style={{ width: '150px', cursor:'pointer' }} src={glass.img} alt={glass.name} onClick={() => renderImage(index)} />
                    </div>
                ))}
            </div>
        </div>
    )
}
