import { ThemeProvider } from "../app/theme/ThemeContext";
import StyledComponentsRegistry from "../app/lib/registry";

export default function RootLayout({ children }) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
}
