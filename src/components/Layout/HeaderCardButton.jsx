import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCardButton.module.css'


const HeaderCardButton = (props) => {
    const cartCtx = useContext(CartContext);

    const noci = cartCtx.items.reduce((cn, item) => {
        return cn + item.amount;
    }, 0);

    return <React.Fragment>
        <button className={classes.button} onClick={props.onShowCart}>
            <span className={classes.icon}><CartIcon/></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{noci}</span>
        </button>
    </React.Fragment>
};

export default HeaderCardButton;