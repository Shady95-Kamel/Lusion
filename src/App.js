import React, {Fragment, useState} from 'react'
import Navi from './Components/Navi';
import FirstHome from './Components/FirstHome'
import {Routes,Route} from 'react-router-dom'
import s1 from "./Photos/s1.jpg"
import s2 from "./Photos/s2.jpg"
import s3 from "./Photos/s3.jpg"
import s4 from "./Photos/s4.jpg"
import t1 from "./Photos/t1.jpg"
import t2 from "./Photos/t2.jpg"
import t3 from "./Photos/t3.jpg"
import t4 from "./Photos/t4.jpg"
import f1 from "./Photos/fifth1.jpg"
import f2 from "./Photos/fifth2.jpg"
import f3 from "./Photos/fifth3.jpg"
import f4 from "./Photos/fifth4.jpg"
import f5 from "./Photos/fifth5.jpg"
import f6 from "./Photos/fifth6.jpg"
import shopC1 from "./Photos/shopC1.jpg"
import shopC2 from "./Photos/shopC2.jpg"
import shopC3 from "./Photos/shopC3.jpg"
import shopC4 from "./Photos/shopC4.jpg"
import shopC5 from "./Photos/shopC5.jpg"
import shopC6 from "./Photos/shopC6.jpg"
import shopC7 from "./Photos/shopC7.jpg"
import shopC8 from "./Photos/shopC8.jpg"

import FirstShop from './Components/FirstShop';
import SetCart from './Components/SetCart';
import ProductDetails from './Components/ProductDetails';
import DataContext from './Components/DataContext';



function App() {
  const [secondInfo]=useState([
    {id:1 , photo:s1 , type:"Clothing" , items:5},
    {id:2 , photo:s2 , type:"Bag Brand" , items:20},
    {id:3 , photo:s3 , type:"Accessories" , items:6},
    {id:4 , photo:s4 , type:"Shoes" , items:8}
  ]);

  const [thirdInfo]=useState([
    {id:1 , photo:t1 , type:"Shirt" , price:239,invQty:5},
    {id:2 , photo:t2 , type:"SweatShirt" , price:569,invQty:6},
    {id:3 , photo:t3 , type:"Hoodie" , price:449,invQty:7},
    {id:4 , photo:t4 , type:"Jeans" , price:219,invQty:9},
  ]);

  const[fifthInfo]=useState([
    {id:1, photo:f1},
    {id:2, photo:f2},
    {id:3, photo:f3},
    {id:4, photo:f4},
    {id:5, photo:f5},
    {id:6, photo:f6},
  ])

  const [shopData,setShop]=useState([
    {id:1 , photo:shopC1 , type:"Hoodie" , price:179 ,buyQty:0},
    {id:2 , photo:shopC2 , type:"Shirt" , price:179 ,buyQty:0 },
    {id:3 , photo:shopC3 , type:"Shirt" , price:179 ,buyQty:0},
    {id:4 , photo:shopC4 , type:"Shirt" , price:179 ,buyQty:0},
    {id:5, photo:shopC5 , type:"Shirt" , price:179 ,buyQty:0},
    {id:6 , photo:shopC6, type:"Shirt" , price:179 ,buyQty:0},
    {id:7 , photo:shopC7 , type:"Jeans" , price:179 ,buyQty:0},
    {id:8 , photo:shopC8 , type:"Jeans" , price:179 ,buyQty:0},
  ])

  // push data into the cart
  const [cart,setCart]=useState([])
  //Counting in Nav
  const [count,setCount]=useState(0);
  // add to cart func
  function addToCart(id){
    //clone
    let data = shopData;
    //edit
     data.map(e=>{
      if(id===e.id){
        const index= cart.findIndex(el=>el.id === e.id);
        if(index === -1){
          cart.push(e)
         setCart(cart)
        }
        e.buyQty++;
      }
      return e
    })
    //update
    setShop(data)
    setCount(cart.length)
    console.log(cart);
  }

  function del(id){
    let deletes= cart;
    deletes=deletes.filter(e=>{
     return e.id!==id;
    })
    setCount(count-1)
    console.log(deletes);
    setCart(deletes)
  }

  function increment(id)
  { 
    let add = cart
    add=add.map(e=>{
      if(id===e.id){
        e.buyQty++;
      }
      return e
    })
    setCart(add)
    console.log(add);
  }

  function decrement(id)
  {
    let minus = cart
   minus = minus.map(e=>{
      if(id===e.id){
        if(e.buyQty>0){
          e.buyQty--
        }
      }
      return e
    })
    setCart(minus)
  }
  
  return (
  <Fragment>
    <DataContext.Provider
    value={{
      secondInfo:secondInfo,
      thirdInfo:thirdInfo,
      fifthInfo:fifthInfo,
      shopData:shopData,
      cart:cart,
      count:count,
      addToCart:addToCart,
      inc:increment,
      dec:decrement,
      del:del
    }}
    >

    <Navi/>

    <Routes>
      <Route path='/' element={<FirstHome />}>
      </Route>
      <Route path='*' element={<FirstHome />}>
      </Route>
      <Route path='/Shop' element={<FirstShop/>}>
      </Route>
      <Route path='/Cart' element={<SetCart/>}>
      </Route>
      <Route path="/ProductDetails" element={<ProductDetails/>}>
      </Route>
    </Routes>

    </DataContext.Provider>
  </Fragment>
  );
}

export default App;
