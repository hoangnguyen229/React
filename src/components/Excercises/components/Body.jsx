import React from 'react'
import Banner from './components/Banner'
import Item from './components/Item'

export default function Body() {
    let style = {
        padding:0
    }
    return (
        <div className="row justify-content-center">
            <div className="col-8">
                <Banner />
            </div>
            <div style={style} className="col-8 d-flex text-center">
                <div className="col-3">
                    <Item />
                </div>
  
                <div className="col-3">
                    <Item />
                </div>
                    
                <div className="col-3">
                    <Item />
                </div>
                    
                <div className="col-3">
                    <Item />
                </div>
                    
            </div>
        </div>
    )
}
