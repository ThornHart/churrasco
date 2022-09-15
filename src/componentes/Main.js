import React,{useState} from "react";
import Product from "./Product";
import Product1 from "./Product1";
import Product2 from "./Product2";
import Product3 from "./Product3";
import Product4 from "./Product4";
import Product5 from "./Product5";

export default function Main(props){
    const [menu, setMenu] = useState(1)
    return(
        <div className="div2" >
            <div className="row" style={{display: 'flex'}}>
                <button className="menu" onClick={()=>setMenu(1)} >ITAIPAVA</button>
                <button className="menu" onClick={()=>setMenu(2)} >BRAHMA</button>
                <button className="menu" onClick={()=>setMenu(3)} >HENEIKEIN</button>
                <button className="menu" onClick={()=>setMenu(4)} >DEVASSA</button>
                <button className="menu" onClick={()=>setMenu(5)} >WHISKY</button>
                <button className="menu" onClick={()=>setMenu(6)} >REFRIGERANTE</button>
            </div>
            {menu===1?<div className="row" style={{padding: '2rem', display: 'flex', width: '1000px'}} >
                {props.products.map((p)=>
                    <Product key={p.id} product = {p} onAdd = {props.onAdd}/>
                )}
            </div>:null}
            {menu===2?<div className="row" style={{padding: '2rem',display: 'flex', width: '1000px'}}>
                {props.products1.map((p)=>
                    <Product1 key={p.id} product = {p} onAdd = {props.onAdd}/>
                )}
            </div>:null }

            {menu===3?<div className="row" style={{padding:'2rem', display: 'flex', width: '1000px'}}>
                {props.products2.map((p)=>
                    <Product2 key={p.id} product = {p} onAdd = {props.onAdd}/>
                )}
            </div>:null }
            {menu===4?<div className="row" style={{padding: '2rem',display: 'flex', width: '1000px'}}>
                {props.products3.map((p)=>
                    <Product3 key={p.id} product = {p} onAdd = {props.onAdd}/>
                )}
            </div>:null}
            {menu===5?<div className="row"style={{padding: '2rem', display: 'flex', width: '1000px'}}>
                {props.products4.map((p)=>
                    <Product4 key={p.id} product ={p} onAdd = {props.onAdd}/>
                )}
            </div>:null}
            {menu === 6? <div className="row" style = {{padding: '2rem', display: 'flex', width: '1000px'}}>
                {props.products5.map((p)=>
                    <Product5 key = {p.id} product = {p} onAdd = {props.onAdd}/>
                )}
            </div>:null}
        </div>
    )
}