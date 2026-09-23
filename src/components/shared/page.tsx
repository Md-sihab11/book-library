import logo from '@/assets/book.ico'
import Image from 'next/image'
import Link from 'next/link'

const PageNavbar = () => {
    return (
        <nav className="bg-base-100 shadow-sm">
            <div className="container mx-auto navbar px-8 py-4">
                {/* Navbar Start */}
                <div className="navbar-start">
                    {/* Mobile Menu */}
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                aria-label="Menu"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>

                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <Link className="hover:text-green-600 hover:bg-green-50 transition duration-300" href="/">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link className="hover:text-green-600 hover:bg-green-50 transition duration-300" href="/listedBooks">
                                    Listed Books
                                </Link>
                            </li>

                            <li>
                                <a className="hover:text-green-600 hover:bg-green-50 transition duration-300">
                                    Pages to Read
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Logo */}
                    <Link href="/" className="flex gap-2 items-center text-2xl font-bold cursor-pointer">
                        <Image
                            src={logo} alt={'Logo'}
                        />
                        Books Vibe
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link href="/" className="hover:border font-semibold hover:text-green-600 hover:bg-green-50">
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link href="/listedBooks" className="hover:border font-semibold hover:text-green-600 hover:bg-green-50">
                                Listed Books
                            </Link>
                        </li>

                        <li>
                            <Link className="hover:border font-semibold hover:text-green-600 hover:bg-green-50" href={'/pagesToread'}>
                                Pages to Read
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Buttons */}
                <div className="navbar-end gap-2">
                    <button className="btn btn-success bg-green-500 shadow-none">Sign In</button>
                    <button className="btn btn-success bg-blue-500 shadow-none">Sign Up</button>
                </div>
            </div>
        </nav>
    );
};

export default PageNavbar;