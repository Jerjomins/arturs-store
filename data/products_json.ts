interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    views: number;
    currency: string;
}

const products: Product[] = [
    {
        id: '1',
        name: 'T-Krekls 1',
        price: 53.99,
        image: '/products/shirt.jpg',
        views: 50,
        currency: '€',
    },
    {
        id: '2',
        name: 'Cepure',
        price: 89.99,
        image: '/products/hat.jpg',
        views: 15,
        currency: '€',
    },
    {
        id: '3',
        name: 'Kurpes',
        price: 79.99,
        image: '/products/shoes.jpg',
        views: 35,
        currency: '€',
    },
    {
        id: '4',
        name: 'T-Krekls 2',
        price: 51.51,
        image: '/products/shirt2.jpg',
        views: 50,
        currency: '€',
    },
    {
        id: '5',
        name: 'T-Krekls 3',
        price: 39,
        image: '/products/shirt3.jpg',
        views: 15,
        currency: '€',
    },
    {
        id: '6',
        name: 'Sega',
        price: 35,
        image: '/products/blanket.jpg',
        views: 35,
        currency: '€',
    },
    {
        id: '8',
        name: 'T-Krekls 4',
        price: 22.25,
        image: '/products/shirt4.jpg',
        views: 15,
        currency: '€',
    },
];
export default products;