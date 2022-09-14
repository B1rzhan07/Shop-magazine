import React from 'react';

const Drayer = ({closeCart, items=[], onRemove}) => {
    
    return (
        <div className='overlay'>
            <div className='drayer'>
            <div className='d-flex justify-between'> 
                <h2>Backet</h2>
                <button onClick={closeCart}>Close</button>
            </div>
            {items.length>0 ?(
                <div className='items'>
                {items.map((i)=>(
                    <div className="backet-card d-flex align-center mr-10 mb-20">
                        <img className="mr-10" width={110} height={100} src={i.imgUrl} alt="logo" />
                    <div>
                    <p>{i.name}</p>
                    <b>{i.price}</b>
                    </div>
                    <button onClick={()=>onRemove(i.id)}>Remove</button>
                </div>
                ))
                }
                </div>) :
                (
                    <div className="cartEmpty d-flex aligh-center justify-between flex-column flex">
                                    <h2>Basket is Empty</h2>
                                    <p className='opacity-6'>Add something to make a purchase in Our store!</p>
                                    <button onClick={closeCart} className='greenButton'>
                                        Go Back
                                    </button>

                                </div>
                )            
            }

            

            

            

            <div className="bottom-item">
                <ul className="align-end">
                <li className="d-flex justify-between">
                    <span>All:</span>
                    <div className="dashItem"></div>
                    <b>21.000 USd</b>
                </li>
                <li className="d-flex justify-between">
                    <span>Tax: 5%</span>
                    <div className="dashItem"></div>
                    <b>21.000 USd</b>
                </li>
                </ul>
            </div>
            <button>Deliver</button>
            </div>   
        </div>
    );
};

export default Drayer;