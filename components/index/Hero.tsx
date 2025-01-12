import React from 'react';

const Hero: React.FC = () => (
    <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto text-center">
            <h1 className="text-5xl font-extrabold mb-4">Laipni lūdzam Arturs Store!</h1>
            <p className="text-xl mb-6">Apskati mūsu ekskluzīvos produktus un atrast kaut ko īpašu tieši tev.</p>
            <a
                href="/products"
                className="bg-white text-blue-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-200 transition"
            >
                Apskatīt Produktus
            </a>
        </div>
    </section>
);

export default Hero;
