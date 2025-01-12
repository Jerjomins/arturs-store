import React, { useEffect, useState } from 'react';
import { useCart } from '@/context/CartContext';

const Header = () => {
    const { cart } = useCart();
    const [totalItemsInCart, setTotalItemsInCart] = useState(0);

    useEffect(() => {
        // Aprēķinam kopējo preču daudzumu grozā
        const total = cart.reduce((sum, item) => sum + item.quantity, 0);
        setTotalItemsInCart(total);
    }, [cart]);

    return (
        <nav className="bg-black-600 p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold">Arturs Store</h1>
                <ul className="flex space-x-6">
                    <li>
                        <a href="/" className="text-white hover:text-gray-300">Sākums</a>
                    </li>
                    <li>
                        <a href="/products" className="text-white hover:text-gray-300">Produkti</a>
                    </li>
                    <li>
                        <a href="/cart" className="text-white hover:text-gray-300">
                            Grozs <span
                            className="text-red-600">{totalItemsInCart > 0 && `(${totalItemsInCart})`}</span>
                        </a>
                    </li>
                    <li>
                        <a href="/about_us" className="text-white hover:text-gray-300">Par mums</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
