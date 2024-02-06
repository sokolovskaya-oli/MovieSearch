import StyledComponentsRegistry from '../app/lib/registry';

export default function RootLayout({ children }) {
  return (
     <StyledComponentsRegistry>
        {children}
     </StyledComponentsRegistry>
  );
}
