import React from 'react'
import Product from './Product';

const name = 'Footer';
const copyBy = {
    name: 'MIXTURE',
    year: 2024
}
const renderMultiComponent = () => {
    //trả về 1 đối tượng
    const virus = {
        id: 'Covid-19',
        name: 'Corona',
        alias: 'SARs'
    }
    return virus; 

    // trả về component
    // return <Product />; 

    // trả về giao diện
    // return <nav class="nav justify-content-center">
    //   <a class="nav-link active" href="#">Active link</a>
    //   <a class="nav-link" href="#">Link</a>
    //   <a class="nav-link disabled" href="#">Disabled link</a>
    // </nav>

    // kết hợp giao diện và đối tượng
    // return (
    //     <nav class="nav justify-content-center">
    //         <a class="nav-link active" href="#">{virus.id}</a>
    //         <a class="nav-link" href="#">{virus.name}</a>
    //         <a class="nav-link" href="#">{virus.alias}</a>
    //     </nav>
    // )
}
export default function Footer() {
    const virus = renderMultiComponent();

    return (
        <div className="bg-secondary text-white text-center">
            <div>
                {name}
            </div>
            <div>
                CopyBy: {copyBy.name + ' ' + copyBy.year + '            '}
                {virus.id}
                {virus.name}
                {virus.alias}
            </div>
            {/* <div>{virus}</div> */}
        </div>
    )
}
