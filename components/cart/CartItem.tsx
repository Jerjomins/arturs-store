import React from 'react';

interface CartItemProps {
    product: {
        id: string;
        name: string;
        price: number;
        quantity: number;
        image: string;
        currency: string;
    };
    onRemove: (id: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({ product, onRemove }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        <div className="p-4">
            <h3 className="text-xl font-semibold text-blue-600">{product.name}</h3>
            <p className="text-gray-700 mt-2">
                Cena: {(product.price * product.quantity).toFixed(2)} {product.currency}
            </p>
            <p className="text-gray-500 mt-1">Daudzums: {product.quantity}</p>
            <button
                onClick={() => onRemove(product.id)}
                className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600 transition mt-4"
            >
                Noņemt
            </button>
        </div>
    </div>
);

export default CartItem;
