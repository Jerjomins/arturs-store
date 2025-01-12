import React, { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import CartItem from './CartItem';

const CartList: React.FC = () => {
    const { removeFromCart, clearCart, cart } = useCart();
    const [clientCart, setClientCart] = useState([]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
            setClientCart(storedCart);
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('cart', JSON.stringify(clientCart));
        }
    }, [clientCart]);

    useEffect(() => {
        setClientCart(cart);
    }, [cart]);

    const total = clientCart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl text-black font-bold mb-8">Produkti</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {clientCart.length === 0 ? (
                        <p className="text-xl text-gray-600">Tavs grozs ir tukšs. Pievieno produktus!</p>
                    ) : (
                        clientCart.map((product) => (
                            <CartItem key={product.id} product={product} onRemove={removeFromCart} />
                        ))
                    )}
                </div>

                {clientCart.length > 0 && (
                    <div className="mt-6">
                        <button
                            onClick={clearCart}
                            className="mt-4 bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
                        >
                            Notīrīt grozu
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CartList;
