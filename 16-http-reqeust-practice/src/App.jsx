import Header from './components/Header.jsx';
import Meals from './components/Meals.jsx';
import React, { useRef } from 'react';
import { CartContextProvider } from './store/CarContext.jsx';
import Cart from './components/Cart.jsx';
import { UserProgressContextProvider } from './store/UserProgressContext.jsx';
import Checkout from './components/Checkout.jsx';

function App() {
  const dialog = useRef();

  function handleClick() {
    dialog.current.open();
  }

  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header onClickButton={handleClick} />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
