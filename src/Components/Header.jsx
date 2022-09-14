import React from 'react';
import {Link} from 'react-router-dom';
const Header = (props) => {
    return (
        <div>
            <header className="d-flex justify-between align-center p-40">
                    <div className='d-flex align-center'>
                    <Link to = '/'>
                        <img width= {40} height={40} src="/img/Mers.jpg" alt="logo" />
                        <div className='headerLogo'>
                            <h3 className="text-uppercase">React Shop</h3>
                            <p>Shop of the best</p>
                        </div>
                    </Link>  
                    
                    </div>
                    
                    <ul className='d-flex'>
                        <li className="mr-30 cu-p" onClick={props.openCart}>
                            <img width={18} height={18} src="/img/Volg.jpg" alt="cart" />
                            <span>1205 USD</span>
                        </li>
                        <li>
                            <img width={18} height={18} src="/img/Mers.jpg" alt="cart" />
                        </li>
                        <li>
                            <Link to='/Favourites'>Log in/Registration </Link>
                            
                        </li>
                    </ul>
            </header>           
        </div>
    );
};

export default Header;