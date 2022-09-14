import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import {Route, Routes} from 'react-router-dom';
import Drayer from "./Components/Drayer";
import Header from "./Components/Header";
import Favourite from "./Components/Favourite";
import Home from "./Components/Card/Home";




function App() {
  const [open,setOpen]=useState(false);
  const [items,setItems]=useState([]);
  const [cartItems,setCartItems]=useState([]);
  const [favourite,setFavourite]=useState([]);
  const [searchValue,setSearchValue]=useState('');

  useEffect(()=>{
    
    axios.get('https://631c61f01b470e0e12008710.mockapi.io/items').then(res=>{
    setItems(res.data)
  })
    axios.get('https://631c61f01b470e0e12008710.mockapi.io/cart').then(res=>{
      setCartItems(res.data)
  })
    axios.get('https://631c61f01b470e0e12008710.mockapi.io/Favourites').then(res=>{
        setFavourite(res.data)
    })

  }, []);


   const onAddCart =(obj)=>{
    axios.post('https://631c61f01b470e0e12008710.mockapi.io/cart', obj);
    setCartItems(prev =>[...prev, obj])
   }

   const onAddFavourite = async (obj)=>{
    axios.post('https://631c61f01b470e0e12008710.mockapi.io/Favourites', obj);
    setFavourite(prev =>[...prev, obj])

   } 


   const onRemove=(id)=>{
    axios.delete(`https://631c61f01b470e0e12008710.mockapi.io/cart/${id}`)
    setCartItems((prev)=>prev.filter(item=>item.id !== id));  //delete 
   }

   const onChangeSearchInp=(e)=>{
    setSearchValue(e.target.value)
    
   }
  
  return (
    <div className='wrapper clear'>
      {open && <Drayer  items={cartItems} closeCart={()=> setOpen(false)} onRemove={onRemove}/>}
      <Header openCart={()=> setOpen(true)} />
      <Routes>
        <Route path="/Favourites" exact element={<Favourite
        items={favourite} onAddFavourite={onAddFavourite} />} />
        <Route path='/' exact element={<Home 
        items={items} searchValue={searchValue} setSearchValue={setSearchValue} onChangeSearchInp={onChangeSearchInp}
        onAddCart={onAddCart}
        />} />

        
      </Routes>

      
      
      

    </div>
  );
}

export default App;
