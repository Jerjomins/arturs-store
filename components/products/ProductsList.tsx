import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import products from '../../data/products_json';
import { useCart } from '../../context/CartContext';

const ProductsList: React.FC = () => {
    const { addToCart } = useCart();

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl text-black font-bold mb-8">Produkti</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <ProductItem key={product.id} product={product} onAddToCart={addToCart}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsList;
