import { products } from '@/utils';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface CompareProps {
    children: React.ReactNode;
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
    const saveCompare = (ID: string) => {
        // preventDefault()
        let tempCompare: Array<Object> = compare;

        // if (tempCompare.length === 2) {
        //     console.log(" product 1 = " + tempCompare.length + " " + ID)
        //     tempCompare[2] = products.filter((p) => (p.webID === ID))[0]
        //     setCompare(tempCompare)
        //     return

        // }
        // else if (tempCompare.length === 1) {
        //     console.log(" product 2 = " + tempCompare.length + " " + ID)

        //     tempCompare[1] = products.filter((p) => (p.webID == ID))[0]
        //     setCompare(tempCompare)
        //     return
        // } else if (tempCompare.length === 0) {
        //     console.log(" product 3 = " + tempCompare.length + " " + ID)

        //     tempCompare[0] = products.filter((p) => (p.webID == ID))[0]
        //     setCompare(tempCompare)
        //     return
        // }
        // else if (tempCompare.length > 2 || tempCompare.length < 0) {
        //     tempCompare = [];
        //     console.log(" product 0 = " + tempCompare.length + " " + ID)

        //     tempCompare[0] = products.filter((p) => (p.webID == ID))[0]
        //     setCompare(tempCompare)
        //     return
        // }

        console.log(ID)


        if (tempCompare.length >= 3) {
            if (!tempCompare.some((p) => p.webID == ID)) { tempCompare = [] }

            tempCompare.push(products.filter((p) => (p.webID == ID))[0])
            setCompare(tempCompare)

        } else if (tempCompare.length < 3) {
            if (!tempCompare.some(p => p.webID == ID)) {
                tempCompare.push(products.filter(p => (p.webID == ID))[0])
                setCompare(tempCompare)
            }


        }

        localStorage.setItem("compare", JSON.stringify(compare))
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







