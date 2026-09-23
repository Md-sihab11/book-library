// import React from 'react';

import Image from "next/image"
import Purchasebutton from '../purchaseButton/page';

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

interface IbookDetails {

    params: Promise<{
        bookid: string
    }>;
}


const getBooks = async () => {
    const res = await fetch("http://localhost:3000/booksData.json");
    const data = await res.json()
    return data
}


const ViewDetailsPage = async ({ params }: IbookDetails) => {

    const { bookid } = await params;
    const post = await getBooks()
    const books = post.find((item: BooksCard) => item.bookId.toString() === bookid)

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="card card-side bg-base-100 shadow-sm border border-base-300 grid grid-cols-2 justify-between px-5">
                <figure className="relative w-80 h-96">
                    <Image
                        src={books.image}
                        alt={books.bookName}
                        width={400}
                        height={500}
                        className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                </figure>


                <div className="card-body p-6 md:p-8 space-y-4">
                    {/* Book Title & Author */}
                    <div>
                        <h2 className="card-title text-3xl font-extrabold text-base-content tracking-tight">
                            {books.bookName}
                        </h2>
                        <p className="text-base font-medium text-base-content/70 mt-1">
                            By: <span className="text-primary font-semibold">{books.author}</span>
                        </p>
                    </div>

                    <div className="divider my-1"></div>

                    {/* Category */}
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-base-content/60">Category:</span>
                        <span className="badge badge-outline badge-primary font-medium px-3 py-2">
                            {books.category}
                        </span>
                    </div>

                    {/* Review */}
                    <p className="text-sm leading-relaxed text-base-content/80 bg-base-200/50 p-4 rounded-xl border border-base-300/50">
                        <span className="font-semibold text-base-content block mb-1">Review:</span>
                        {books.review}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                        <span className="text-sm font-semibold text-base-content/60 mr-1">Tag:</span>
                        {books.tags?.map((tag: string, index: number) => (
                            <span key={index} className="badge bg-green-50 text-green-600 font-semibold border-green-200 px-3 py-2">
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* Additional Info Grid */}
                    <div className="grid grid-cols-2 gap-4 py-3 text-sm text-base-content/70 border-t border-b border-base-200 my-2">
                        <div>
                            <p><span className="font-semibold text-base-content">Number of Pages:</span> {books.totalPages}</p>
                            <p className="mt-1.5"><span className="font-semibold text-base-content">Publisher:</span> {books.publisher}</p>
                        </div>
                        <div>
                            <p><span className="font-semibold text-base-content">Rating:</span> ⭐ {books.rating}</p>
                            <p className="mt-1.5"><span className="font-semibold text-base-content">Published Year:</span> {books.yearOfPublishing}</p>
                        </div>
                    </div>



                     {/* //props */}
                    <Purchasebutton 
                    books={books} />
                </div>

            </div>

        </div>
    );
};

export default ViewDetailsPage;