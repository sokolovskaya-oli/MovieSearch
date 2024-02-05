
import { Roboto } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from './lib/registry'
import { SearchProvider } from "../app/context/SearchContext";

const roboto = Roboto({ subsets: ["latin"], weight:["400"] });

export const metadata = {
  title: "Movie Search",
  description: "Generated movie searcher",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <SearchProvider>
      <body className={roboto.className}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
      </SearchProvider>
    </html>
  );
}
