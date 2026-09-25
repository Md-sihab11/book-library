"use client"
import { bookContext } from '@/context/booksContext';
import { useContext, useState } from 'react'

interface BooksCard {
    bookId: number;
    bookName: string;
    author: string;
    image: string;
    review: string;
    totalPages: number;
    rating: number;
    category: string;
    tags: string[];
    publisher: string;
    yearOfPublishing: number;
}

const Purchasebutton = ({books}:{books:BooksCard}) => {
    
    const [isPurchased, setIsPurchased] = useState(false)

    const handlePurchase = () => {
        setIsPurchased(true);
    };

    const {readBooks, setReadBooks} = useContext(bookContext)
    const {wishList, setWishlist} = useContext(bookContext)

    
    const ReadBook = () => {
    console.log(`btn trigerred! ${books}`)
    setReadBooks([...readBooks,books])
    };
    const wishBook = () => {
    console.log(`btn trigerred! ${books}`)
    setWishlist([...wishList,books])
    };

    return (
        <div className="card-actions justify-end gap-2">
            <button className="btn btn-outline" onClick={()=>ReadBook()}>Read</button>
            <button className="btn btn-outline btn-secondary" onClick={()=>wishBook()}>Wishlist</button>
            <button
                onClick={handlePurchase}
                className={`btn ${isPurchased ? 'btn-success' : 'btn-primary'}`}
                disabled={isPurchased}
            >
                {isPurchased ? 'Check the Cart list' : 'Purchase Now'}
            </button>
        </div>
    );
};

export default Purchasebutton;