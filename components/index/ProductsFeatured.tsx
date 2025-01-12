import React from 'react';
import products from '../../data/products_json';

const FeaturedProducts: React.FC = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl text-black font-bold mb-8">Populārie Produkti</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {products
                        .sort((a, b) => b.views - a.views)
                        .slice(0, 3)
                        .map((product) => (
                        <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-blue-600">{product.name}</h3>
                                <p className="text-gray-700 mt-2">Cena: {product.price}{product.currency}</p>
                                <a
                                    href={`/products/${product.id}`}
                                    className="block mt-4 bg-blue-600 text-white py-2 px-6 rounded-full text-sm hover:bg-blue-700 transition"
                                >
                                    Skatīt
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
