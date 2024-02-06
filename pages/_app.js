'use client'
import React from "react";
import RootLayout from "./layout";
import {SearchProvider} from '../context/SearchContext'
import "../app/globals.css";


export default function CustomApp({ Component, pageProps }) {
    return (
         <RootLayout>
            <SearchProvider>
                <Component {...pageProps} />
            </SearchProvider>
        </RootLayout>
    );
}