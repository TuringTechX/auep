// src/components/Header.tsx
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-xl font-bold">AUEP</div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" passHref>
                <a className="hover:text-gray-200">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about" passHref>
                <a className="hover:text-gray-200">About</a>
              </Link>
            </li>
            <li>
              <Link href="/contact" passHref>
                <a className="hover:text-gray-200">Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
