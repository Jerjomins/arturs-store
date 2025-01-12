import React from 'react';

interface ProductItemProps {
    product: {
        id: string;
        name: string;
        price: number;
        image: string;
        currency: string;
    };
    onAddToCart: (product: { id: string; quantity: number }) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, onAddToCart }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        <div className="p-4">
            <h3 className="text-xl font-semibold text-blue-600">{product.name}</h3>
            <p className="text-gray-700 mt-2">Cena: {product.price} {product.currency}</p>
            <a
                href={`/products/${product.id}`}
                className="block mt-4 bg-blue-600 text-white py-2 px-6 rounded-full text-sm hover:bg-blue-700 transition"
            >
                Skatīt
            </a>
            <button
                onClick={() => onAddToCart({ ...product, quantity: 1 })}
                className="w-full block mt-4 bg-blue-600 text-white py-2 px-6 rounded-full text-sm hover:bg-blue-700 transition"
            >
                Pievienot grozam
            </button>
        </div>
    </div>
);

export default ProductItem;
