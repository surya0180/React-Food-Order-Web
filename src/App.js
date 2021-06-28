import React, { useContext, useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
import CartProvider from './store/cart-provider';
import CartContext from './store/cart-context';

function App() {
  const cartCtx = useContext(CartContext);

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    console.log(cartCtx.items)
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
