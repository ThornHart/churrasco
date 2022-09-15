import React from "react";

export default function Product4(props){

    return(
        <div>
            <img className="small" src={props.product.image}></img>
            <h3>{props.product.name}</h3>
            <div style={{color: '#fff'}}>R$ {props.product.price},00</div>
            <div>
                <button className="compra" onClick={()=>props.onAdd(props.product)} >Adicionar</button>
            </div>
        </div>
    )
}