import React from 'react';
import Card from './Card';


const Home = ({items, searchValue, setSearchValue, onChangeSearchInp, onAddCart}) => {
    return (
        <div>

        <div className="content p-40">
                
                <div className="d-flex align-center justify-between mb-40">
                <h1>{searchValue ? `Searching for '${searchValue}'` : 'All the boots'}</h1>
                <div className="search-input d-flex justify-between align-center">
                    <img width={30} height={30} src="/img/Mers.jpg" alt="logo" />
                    
                    <input onChange={onChangeSearchInp } type="search" placeholder="searching...." value={searchValue} />
                </div>
                </div>
                <div className="d-flex flex-wrap">  
                {
                    items
                    .filter((item)=> item.name.toLowerCase().includes(searchValue.toLowerCase()))
                    .map((i,index)=>(
                    <Card key={index}
                    name={i.name} price={i.price} imgUrl={i.imgUrl}  
                    
                    onClick={(obj)=>onAddCart(obj)} />
                    ))
                }
                </div>

            </div>
        </div>
    );
};

export default Home;