import React,{useState} from "react";
import Header from "./componentes/Header";
import Main from "./componentes/Main";
import Basket from "./componentes/Basket";
import Pedido from './componentes/Pedido';
import data from "./data";
import data1 from './data1';
import data2 from './data2';
import data3 from './data3';
import data4 from './data4';
import data5 from './data5';
import {Routes,Route,Link} from 'react-router-dom'
function App(){
  const {products} = data
  const {products1} = data1
  const {products2} = data2
  const {products3} = data3
  const {products4} = data4
  const {products5} = data5
  const [cartItems, setCartItems] = useState([])
  const onAdd = (product) => {
    const exist = cartItems.find((x)=>x.id === product.id)
    if(exist){
      setCartItems(cartItems.map((x)=>x.id === product.id? {...exist, qty: exist.qty + 1}:x))
    }else {
      setCartItems([...cartItems, {...product, qty: 1}])
    }
  }
  const onRemove = (product) =>{
    const exist = cartItems.find((x)=>x.id === product.id)
    if (exist.qty ===1){
      setCartItems(cartItems.filter((x)=>x.id !== product.id))
    }else{
      setCartItems(cartItems.map((x)=>x.id === product.id?{...exist, qty: exist.qty - 1}:x))
    }
  }
  return(
      <div className="div1">
        <header>
          <Header cartItems = {cartItems.length}/>
          <Link to="/home" style={{width:'200px'}} >Home</Link>
        </header>
        <main>
          <Routes>
            <Route path="/home" element={<Main products = {products} products1 ={products1} products2 ={products2} products3 = {products3} products4 ={products4} products5={products5} onAdd = {onAdd}/>}/>
            <Route path="/carrinho" element={<Basket cartItems = {cartItems} onAdd = {onAdd} onRemove = {onRemove} />}/>
          </Routes>
        </main>
        <hr/>
        <Pedido/>
      </div>
  )
}
export default App;