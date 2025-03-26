import { AppProps } from 'next/app'; // Importing AppProps type
import '../styles/globals.css'; // Import global styles, including Tailwind CSS
import React from 'react'; // Explicitly import React if it's not automatically imported
import Wishlist from '../components/wishlist';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  
  return (
    <div>
      <h1>My E-Commerce App</h1>
      <Wishlist />
      <Component {...pageProps} />
    </div>
  );
};

export default App;

