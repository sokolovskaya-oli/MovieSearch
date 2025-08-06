import { ThemeProvider } from "../app/theme/ThemeContext";
import StyledComponentsRegistry from "../app/lib/registry";

export default function RootLayout({ children }) {
  return (
    <StyledComponentsRegistry>
      <ApolloProvider client={client}>
        <ThemeProvider>{children}</ThemeProvider>
      </ApolloProvider>

      <ThemeProvider> {children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
}
