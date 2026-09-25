import { FaBookOpen } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-neutral-content mt-auto min-h-[400px] flex flex-col justify-between pt-16 pb-6">
      
      {/* 4-Column Layout */}
      <div className="footer grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto px-10 w-full items-start">
        <aside>
          <div className="flex items-center gap-2 text-3xl font-bold mb-2">
            <FaBookOpen className="text-primary" /> Book Vibe
          </div>
          <p>
            Book Vibe Ltd.<br />
            Your ultimate reading companion
          </p>
        </aside>
        
        <nav>
          <h6 className="footer-title">Explore</h6>
          <a className="link link-hover">Books Catalog</a>
          <a className="link link-hover">Listed Books</a>
          <a className="link link-hover">Pages to Read</a>
        </nav>
        
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Careers</a>
        </nav>
        
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>

      {/* Copyright Text */}
      <div className="mt-10 border-t border-gray-800 pt-6 text-center w-full">
        <h2 className="text-sm font-medium text-gray-400">Made by Shihab 2026</h2>
      </div>
      
    </footer>
  );
}
