"use client"
import { bookContext } from "@/context/booksContext";
import { useContext } from "react";
import Image from 'next/image'
import { useState } from 'react'


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

const Listedpage = () => {



    const { readBooks, wishList } = useContext(bookContext)
    console.log(readBooks, wishList, "ReadBooks", "WishList")

    const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating")
    console.log("SortBy: ", sortBy)

    const sortBooks = (books: BooksCard[]) => {
        const sortedBooks = [...books]
        if (sortBy === "rating")
            sortedBooks.sort((a, b) => b.rating - a.rating)
        else if(sortBy === "pages")
            sortedBooks.sort((a, b) => a.totalPages - b.totalPages)
        else if(sortBy === "year")
             sortedBooks.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing)
    
        return sortedBooks;
    };
    const sortedReadBooks = sortBooks(readBooks)
    const sortedwishllist = sortBooks(wishList)

    return (
        <section className="">
            {/* <h2>ListedPage this is!</h2>
        <h2>ReadBooks: {readBooks.length} and WishList: {wishList.length}</h2> */}
            <div className="container mx-auto text-center p-5 bg-gray-300 my-4 rounded-2xl">
                Books
            </div>
            <div className="text-center">
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as "rating" | "pages" | "year")}
                    defaultValue="Pick a Runtime" className="select select-success items-center">
                    <option disabled={true}>Sort By</option>
                    <option value="rating">Rating</option>
                    <option value="pages">Number of Pages</option>
                    <option value="year">Publisher year</option>
                </select>
            </div>
            {/* name of each tab group should be unique */}
            <div className="container mx-auto tabs tabs-border">
                <input type="radio" name="my_tabs_2" className="tab" aria-label={`Read Books (${readBooks.length})`} />

                {/* readbooks */}
                <div className="tab-content border-base-300 bg-base-100 p-10">
                    {sortedReadBooks.length > 0 ? (
                        sortedReadBooks.map((book: BooksCard) => (
                            <div
                                key={book.bookId}
                                className="container mx-auto px-4 py-12"
                            >
                                <div className="card card-side bg-base-100 shadow-sm border border-base-300 grid grid-cols-2 justify-between px-5">

                                    <figure className="relative w-80 h-96">
                                        <Image
                                            src={book.image}
                                            alt={book.bookName}
                                            width={400}
                                            height={500}
                                            className="h-72 w-full object-cover"
                                        />
                                    </figure>

                                    <div className="card-body p-6 md:p-8 space-y-4">

                                        {/* Book Title & Author */}
                                        <div>
                                            <h2 className="card-title text-3xl font-extrabold text-base-content tracking-tight">
                                                {book.bookName}
                                            </h2>

                                            <p className="text-base font-medium text-base-content/70 mt-1">
                                                By:{" "}
                                                <span className="text-primary font-semibold">
                                                    {book.author}
                                                </span>
                                            </p>
                                        </div>

                                        <div className="divider my-1"></div>

                                        {/* Category */}
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-semibold text-base-content/60">
                                                Category:
                                            </span>

                                            <span className="badge badge-outline badge-primary font-medium px-3 py-2">
                                                {book.category}
                                            </span>
                                        </div>

                                        {/* Review */}
                                        <p className="text-sm leading-relaxed text-base-content/80 bg-base-200/50 p-4 rounded-xl border border-base-300/50">
                                            <span className="font-semibold text-base-content block mb-1">
                                                Review:
                                            </span>

                                            {book.review}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap items-center gap-2 pt-1">
                                            <span className="text-sm font-semibold text-base-content/60 mr-1">
                                                Tag:
                                            </span>

                                            {book.tags?.map((tag: string, index: number) => (
                                                <span
                                                    key={index}
                                                    className="badge bg-green-50 text-green-600 font-semibold border-green-200 px-3 py-2"
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Additional Info */}
                                        <div className="grid grid-cols-2 gap-4 py-3 text-sm text-base-content/70 border-t border-b border-base-200 my-2">

                                            <div>
                                                <p>
                                                    <span className="font-semibold text-base-content">
                                                        Number of Pages:
                                                    </span>{" "}
                                                    {book.totalPages}
                                                </p>

                                                <p className="mt-1.5">
                                                    <span className="font-semibold text-base-content">
                                                        Publisher:
                                                    </span>{" "}
                                                    {book.publisher}
                                                </p>
                                            </div>

                                            <div>
                                                <p>
                                                    <span className="font-semibold text-base-content">
                                                        Rating:
                                                    </span>{" "}
                                                    ⭐ {book.rating}
                                                </p>

                                                <p className="mt-1.5">
                                                    <span className="font-semibold text-base-content">
                                                        Published Year:
                                                    </span>{" "}
                                                    {book.yearOfPublishing}
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center py-10">
                            No books selected!!
                        </p>
                    )}
                </div>

                <input type="radio" name="my_tabs_2" className="tab" aria-label={`WishList Books (${wishList.length})`} defaultChecked />
                <div className="tab-content border-base-300 bg-base-100 p-10">
                    {/* wishList data */}

                    {sortedwishllist.length > 0 ? (
                        sortedwishllist.map((book: BooksCard) => (
                            <div
                                key={book.bookId}
                                className="container mx-auto px-4 py-12"
                            >
                                <div className="card card-side bg-base-100 shadow-sm border border-base-300 grid grid-cols-2 justify-between px-5">

                                    <figure className="relative w-80 h-96">
                                        <Image
                                            src={book.image}
                                            alt={book.bookName}
                                            width={400}
                                            height={500}
                                            className="h-72 w-full object-cover"
                                        />
                                    </figure>

                                    <div className="card-body p-6 md:p-8 space-y-4">

                                        {/* Book Title & Author */}
                                        <div>
                                            <h2 className="card-title text-3xl font-extrabold text-base-content tracking-tight">
                                                {book.bookName}
                                            </h2>

                                            <p className="text-base font-medium text-base-content/70 mt-1">
                                                By:{" "}
                                                <span className="text-primary font-semibold">
                                                    {book.author}
                                                </span>
                                            </p>
                                        </div>

                                        <div className="divider my-1"></div>

                                        {/* Category */}
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-semibold text-base-content/60">
                                                Category:
                                            </span>

                                            <span className="badge badge-outline badge-primary font-medium px-3 py-2">
                                                {book.category}
                                            </span>
                                        </div>

                                        {/* Review */}
                                        <p className="text-sm leading-relaxed text-base-content/80 bg-base-200/50 p-4 rounded-xl border border-base-300/50">
                                            <span className="font-semibold text-base-content block mb-1">
                                                Review:
                                            </span>

                                            {book.review}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap items-center gap-2 pt-1">
                                            <span className="text-sm font-semibold text-base-content/60 mr-1">
                                                Tag:
                                            </span>

                                            {book.tags?.map((tag: string, index: number) => (
                                                <span
                                                    key={index}
                                                    className="badge bg-green-50 text-green-600 font-semibold border-green-200 px-3 py-2"
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Additional Info */}
                                        <div className="grid grid-cols-2 gap-4 py-3 text-sm text-base-content/70 border-t border-b border-base-200 my-2">

                                            <div>
                                                <p>
                                                    <span className="font-semibold text-base-content">
                                                        Number of Pages:
                                                    </span>{" "}
                                                    {book.totalPages}
                                                </p>

                                                <p className="mt-1.5">
                                                    <span className="font-semibold text-base-content">
                                                        Publisher:
                                                    </span>{" "}
                                                    {book.publisher}
                                                </p>
                                            </div>

                                            <div>
                                                <p>
                                                    <span className="font-semibold text-base-content">
                                                        Rating:
                                                    </span>{" "}
                                                    ⭐ {book.rating}
                                                </p>

                                                <p className="mt-1.5">
                                                    <span className="font-semibold text-base-content">
                                                        Published Year:
                                                    </span>{" "}
                                                    {book.yearOfPublishing}
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center py-10">
                            No books selected!!
                        </p>
                    )}


                </div>

            </div>
        </section>
    );
};

export default Listedpage;