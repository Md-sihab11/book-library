"use client"
import { createContext, useState } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const bookContext = createContext<any>(null);


const BooksProvider = ({children}: Readonly<{
  children: React.ReactNode;
}>) => {
    const [readBooks, setReadBooks] = useState([])
    const [wishList, setWishlist] = useState([])


    const sharedData = {
        readBooks, setReadBooks, wishList, setWishlist
    }
    return <bookContext.Provider value={sharedData}>{children}</bookContext.Provider>
};

export default BooksProvider;