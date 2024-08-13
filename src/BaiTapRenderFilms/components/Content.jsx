import React from 'react'
import { ListFilms } from '../../mock/DataFilms.js'
import Image from '../../assets/products/black-car.jpg'

export default function Content() {
    return (
        <div className="row text-white text-center mt-2">
            {ListFilms.map((film, index) => (
                <div key={index} className="col-2">
                    <img style={{ width: '100%', height: '300px' }} src={film.hinhAnh} alt={film.tenPhim} />
                    <div className="bg-primary">
                        <h3>{film.tenPhim}</h3>
                        <p>{film.moTa}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
