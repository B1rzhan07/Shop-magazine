import React from 'react';
import Card from './Card/Card';

const Favourite = ({items, onAddFavourite}) => {
    return (
        <div className="content p-40">
                
                <div className="d-flex align-center justify-between mb-40">
                <div className="d-flex flex-wrap">  
                {
                    items
                    .map((i)=>(
                    <Card
                    name={i.name} price={i.price} imgUrl={i.imgUrl}
                    onZak={(obj)=>onAddFavourite(obj)} />
                    )) 
                }
                    
                
                </div>

                </div>
                </div>
    );
};

export default Favourite;