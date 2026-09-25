import Image from "next/image";
import Link from "next/link";
import { CiStar } from "react-icons/ci";

const getBooks = async () => {
  try {
        const baseUrl = process.env.NEXT_PUBLIC_SERVER_BASE_URL || 'http://localhost:3000';
        const res = await fetch(`${baseUrl}/booksData.json`);
        const data = await res.json()
        return data
    }catch(error)
    {
        console.error("There is a problem:" ,error)
        return []
    }
};

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

const Pagebooks = async () => {
  const books = await getBooks();

  return (
    <section className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-10 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          Explore Collection
        </p>

        <h2 className="text-4xl font-extrabold tracking-tight text-base-content md:text-5xl">
          Discover Your Next Book
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-base-content/60 md:text-base">
          Explore our handpicked collection of books and find your next
          favorite story.
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((card: BooksCard) => (
          <div
            key={card.bookId}
            className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-base-300/70 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/20 hover:shadow-2xl"
          >
            <div>
              {/* Image */}
              <div className="relative overflow-hidden bg-base-200">
                <Image
                  src={card.image}
                  alt={card.bookName}
                  width={400}
                  height={500}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to- from-black/50 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                {/* Category Badge */}
                <div className="absolute left-4 top-4">
                  <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-gray-800 shadow backdrop-blur-sm">
                    {card.category}
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/60 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur-md">
                  <CiStar className="text-lg text-yellow-400" />
                  {card.rating}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Publisher + Year */}
                <div className="mb-3 flex items-center justify-between text-xs text-base-content/50">
                  <span className="font-medium">{card.publisher}</span>
                  <span>{card.yearOfPublishing}</span>
                </div>

                {/* Book Name */}
                <h2 className="line-clamp-1 text-xl font-bold text-base-content transition-colors group-hover:text-primary">
                  {card.bookName}
                </h2>

                {/* Author */}
                <p className="mt-1 text-sm text-base-content/60">
                  By{" "}
                  <span className="font-medium text-base-content/80">
                    {card.author}
                  </span>
                </p>

                {/* Divider */}
                <div className="my-5 border-t border-dashed border-base-300" />

                {/* Bottom Info */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {card.tags?.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-base-200 px-3 py-1 text-xs font-medium text-base-content/70"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1 text-sm font-semibold">
                    <CiStar className="text-xl text-yellow-500" />
                    <span>{card.rating}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* View Details Button */}
            <div className="p-5 pt-0">
              <Link
                href={`/books/${card.bookId}`}
                className="block w-full text-center rounded-xl bg-green-500 text-white py-2.5 font-semibold transition duration-300 hover:bg-green-600 shadow-none"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pagebooks;