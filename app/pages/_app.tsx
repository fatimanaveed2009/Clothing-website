// _app.tsx
import { AppProps } from 'next/app';  // Importing AppProps type
import '../styles/globals.css';  // Import global styles, including Tailwind CSS
import React from 'react';  // Explicitly import React if it's not automatically imported

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
