import './orders.css';
import React, { useEffect, useState } from 'react';
import FakeData from '../../FakeData';
import Cart from '../Cart/Cart';

export default function Orders() {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);

    // const handlePlaceOrder = () => {
    //     setCart([]);
    //     setOrderPlaced(true);
    //     processOrder();
    // }

    const getUser = () => {
        const existingUser = sessionStorage.getItem('userId');
        if (existingUser) {
            return existingUser;
        } else {
            const newUser = 'user-' + new Date().getTime();
            sessionStorage.setItem('userId', newUser)
            return newUser;
        }
    }

    const addToDatabaseCart = (key, count) => {
        const currentCart = getDatabaseCart();
        currentCart[key] = count;
        localStorage.setItem(getDataKey(), JSON.stringify(currentCart));
    }
    
    const removeFromDatabaseCart = key => {
        const currentCart = getDatabaseCart();
        delete currentCart[key];
        localStorage.setItem(getDataKey(), JSON.stringify(currentCart));
    }

    const getDataKey = () => {
        const userId = getUser();
        return `emaJohn/carts/${userId}`
    }

    // push to local storage: a temporary place for database
    const getDatabaseCart = () => {
        const dataKey = getDataKey();
        const data = localStorage.getItem(dataKey) || "{}";
        return JSON.parse(data);
    }

    const RemoveProduct = (productKey) => {
        // console.log(productKey);
        const newCart = cart.filter(pd => pd.id !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);

    }

    useEffect(() => {
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);

        const cartProduct = productKeys.map(id => {
            const product = FakeData.find(pd => pd.id === id);
            product.quantity = saveCart[id];

            return product;

        });
        // console.log(cartProduct);
        setCart(cartProduct);
    }, []);

    return (
        <div className="text-center">
            <h2>Order Summery</h2>
            <h4>Books Order: {cart.length}</h4>
            <h4>Books Price: ${cart.price}</h4>
            <div className="product-container">
                {
                    cart.map(pd => <Cart
                        key={pd.id}
                        product={pd}
                        
                    />)
                }
                
            </div>
        </div>
    )
}
