// import Image from 'next/image'
"use client"
import { bookContext } from "@/context/booksContext";
import { useContext } from "react";

const Listedpage = () => {

    const {readBooks}= useContext(bookContext)
    console.log(readBooks)

    
    const {wishList}= useContext(bookContext)
    console.log(wishList)

    return (
        <section className="bg-gray-500">
            <h2>ListedPage this is!</h2>
 
            <div>
                {/* <Image
                src={}
                alt={""}
                 /> */}
            </div>
            <div>

            </div>
        </section>
    );
};

export default Listedpage;