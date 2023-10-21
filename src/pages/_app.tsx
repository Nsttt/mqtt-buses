import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React from "react";
import {NextUIProvider} from '@nextui-org/react';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <NextUIProvider>
          <Navbar/>
          <Component {...pageProps} />
          <Footer/>
      </NextUIProvider>
        )
}
