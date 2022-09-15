import React from "react";
import {Link} from 'react-router-dom'
export default function Header(props){

    return(
        <div className="row block center" style={{display:'flex'}}>
            <div>
                <p>
                    GALPAO 37
                </p>
            </div>
            <div>
                <div>
                    <Link to="/carrinho">Carrinho</Link>
                    {props.cartItems?(
                    <button className="badge">{props.cartItems}</button>
                ):('')}
                </div>{ ''}
            </div>
        </div>
    )
}