import Image from "next/image";
import { Product } from "../../lib/types";
import { useState } from "react";


interface ProductCardProps {
    product: Product;
    onAddToCart: (product: Product, quantity: number) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
    const [imageError, setImageError] = useState(false);

    return (
        <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="relative h-48 w-full">
                <Image
                    src={imageError ? '/placeholder-product.jpg' : product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    onError={() => setImageError(true)}
                />
            </div>
            <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
                    <div className="flex items-center">
                        <span className="text-yellow-500">★</span>
                        <span className="ml-1 text-sm">{product.rating} ({product.reviewCount})</span>
                    </div>
                </div>
                <button
                    onClick={() => onAddToCart(product, 1)}
                    className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    )
}