import React from 'react';
import classes from './Card.module.scss';
import { useState } from 'react';
const Card = ({price, onZak, imgUrl, name, onClick, items=[]}) => {
    const [imgAdded, setImgAdded]=useState(false)
    const [imgFavou, setImgFavou]=useState(false)
    const click =()=>{
        onClick({price, name, imgUrl});
        if(imgAdded){
            setImgAdded(false)
        }
        else{
            setImgAdded(true)
        }
    }

    const onClickFavou =()=>{
        onZak({price,name, imgUrl});
        console.log("fjdfj")
        setImgFavou(!imgFavou);
    }
    return (
        <div >
            <div className={classes.card}>
                <div className={classes.favorite}>
                    <img width={20} height={20} src={imgFavou ? '/img/Mers.jpg' : '/img/Volg.jpg'} alt="Unliked" onClick={onClickFavou}/>
                </div>
                
                <img width={133} height={112} src={imgUrl} alt="first" />
                <p>{name}</p>
                <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Price</span>
                    <b>{price}</b>
                </div>
                    <img className={classes.cardImg} onClick={click} width={40} height={40} src={imgAdded ? '/img/Mers.jpg' : '/img/Volg.jpg'} alt="Plus" />
                </div>
            </div>                
            </div>
    );
};

export default Card;