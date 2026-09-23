// import React from 'react';
"use client"
import { useState } from 'react'


const Purchasebutton = () => {

    const [isPurchased, setIsPurchased] = useState(false)

    const handlePurchase = () => {
        setIsPurchased(true);
    };

    return (
        <div className="card-actions justify-end gap-2">
            <button className="btn btn-outline">Read</button>
            <button className="btn btn-outline btn-secondary">Wishlist</button>
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