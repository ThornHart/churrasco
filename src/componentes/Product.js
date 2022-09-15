import React from "react";

export default function Product(props){

    return(
        <div>
            <div>
                <img className="small" src={props.product.image} alt = {props.product.name}></img>
                <h3>{props.product.name}</h3>
                <div style={{color:'#fff'}}>R$ {props.product.price},00</div>
            </div>
            <div>
                <button className="compra" onClick={()=>props.onAdd(props.product)} >Adicionar</button>
            </div>
           
        </div>
    )
}