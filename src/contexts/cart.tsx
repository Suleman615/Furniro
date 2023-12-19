'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';

interface MyCartProps {
    children: React.ReactNode;
}

interface MyCartType {
    cart: Array<Object>;
    setCart: React.Dispatch<React.SetStateAction<Array<Object>>>;
    saveToLocalStorage: any
}

const MyCart = createContext<MyCartType | undefined>(undefined);

export const CartProvider = ({ children }: MyCartProps) => {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            localStorage.clear()
            let value = localStorage.getItem('cart') || '[]'
            setCart(JSON.parse(value));
        }
    }, []);



    // When user submits the form, save the favorite number to the local storage
    const saveToLocalStorage = () => {
        // preventDefault()
        localStorage.setItem("cart", JSON.stringify(cart))
    }


    return (
        <MyCart.Provider value={{ cart, setCart, saveToLocalStorage }}>
            {children}
        </MyCart.Provider>
    );
};

export const useMyCart = () => {
    const context = useContext(MyCart);
    if (!context) {
        throw new Error('useMyCart must be used within a CartProvider');
    }
    return context;
};







