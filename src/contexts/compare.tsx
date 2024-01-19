import { products } from '@/utils';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface CompareProps {
    children: React.ReactNode;
}

interface tempCompareProps {
    webID: string
}

interface CompareType {
    compare: Array<object>;
    setCompare: React.Dispatch<React.SetStateAction<Array<object>>>;
    saveCompare: any
}

const Compare = createContext<CompareType | undefined>(undefined);

export const CompareProvider = ({ children }: CompareProps) => {

    const [compare, setCompare] = useState<Array<Object>>([]);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            localStorage.removeItem('compare')
            let value = localStorage.getItem('compare') || '[]'
            setCompare(JSON.parse(value));
        }
    }, []);



    // When user submits the form, save the favorite number to the local storage
    const saveCompare = () => {
        // preventDefault()



    }


    return (
        <Compare.Provider value={{ compare, setCompare, saveCompare }}>
            {children}
        </Compare.Provider>
    );
};

export const useCompare = () => {
    const context = useContext(Compare);
    if (!context) {
        throw new Error('usecompare must be used within a compareProvider');
    }
    return context;
};







