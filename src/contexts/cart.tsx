'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';



useEffect(() => {
    window.localStorage.setItem('myCart', JSON.stringify(['fgh']));

}, [])

// var HighScore = JSON.parse(localStorage.myCart);


interface MyCartProps {
    children: React.ReactNode;
}

interface MyCartType {
    cart: Array<Object>;
    setCart: React.Dispatch<React.SetStateAction<Array<Object>>>;
}

const MyCart = createContext<MyCartType | undefined>(undefined);

export const CartProvider = ({ children }: MyCartProps) => {
    const [cart, setCart] = useState<Array<Object>>([]);


    return (
        <MyCart.Provider value={{ cart, setCart }}>
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







