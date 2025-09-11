import Link from "next/link";
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

interface HeaderProps {
    cartItemCount: number;
    onCartClick: () => void;
}

export default function Header({ cartItemCount, onCartClick }: HeaderProps) {
    return (
        <header className="bg-white shadow-sm sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="text-xl font-bold text-blue-600">
                        EcomStore
                    </Link>

                    <nav className="hidden md:flex space-x-8">
                        <Link href="/" className="text-gray-700 hover:text-blue-600">
                            Home
                        </Link>
                        <Link href="/products" className="text-gray-700 hover:text-blue-600">
                            Products
                        </Link>
                        <Link href="/categories" className="text-gray-700 hover:text-blue-600">
                            Categories
                        </Link>
                        <Link href="/about" className="text-gray-700 hover:text-blue-600">
                            About
                        </Link>
                    </nav>

                    <div className="flex items-center space-x-4">
                        <button className="relative" onClick={onCartClick}>
                            <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
                            {cartItemCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    {cartItemCount}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}