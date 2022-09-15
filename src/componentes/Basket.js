import React from "react";

export default function Basket(props){
    const itemsPrice = props.cartItems.reduce((total, obj)=> total + obj.price * obj.qty, 0)
    const totalPrice = itemsPrice
    return(
        <aside style={{backgroundColor: '#5A6E82', padding: '1rem', borderRadius: '0.5rem',width:'600px', opacity: '0.9'}}> 
            <h2>Produtos do Carrinho</h2>
            {props.cartItems.length===0 && <div>Adicione um produto</div>}
            {props.cartItems.map((x)=>
                <div style={{width: '600px'}}>
                    <div key={x.id} className= "row" style={{display: 'flex'}}>
                        <div className="col-1" >{x.name}</div>
                        <div style={{display: 'flex', justifyContent: 'space-between', width:'60px'}}>
                            <button className="add" onClick={()=>props.onAdd(x)} > + </button> 
                            <button className="remove" onClick={()=>props.onRemove(x)}> - </button>
                        </div>
                        <div className="col-2 text-right" >
                            {x.qty} x R$ {x.price.toFixed(2)}
                        </div>
                    </div>
                </div>
                
            )}
            {props.cartItems.length !==0 && (
                <>
                    <hr/>
                    <div className="row" style={{display: 'flex', width:'300px'}} >
                        <div>Preço Total:</div>
                        <div>R$ {totalPrice.toFixed(2)}</div>
                    </div>
                    <hr/>
                    
                    <div style={{width: '300px'}}>
                        <button className="compra" onClick={()=>alert('Seu pedido foi enviado o vendedor')} >Fazer Pedido</button>
                    </div>  
                </>

            )}
        </aside>
    )
}