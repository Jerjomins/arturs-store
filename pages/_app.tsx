import '@/style/globals.css';
import { CartProvider } from '@/context/CartContext';
import Header from '../components/style/Header';
import Footer from '../components/style/Footer';

const App: React.FC = ({ Component, pageProps }) => (
    <CartProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
    </CartProvider>
);

export default App;
