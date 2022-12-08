import { ReactNode, FC } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
type LayoutType = {
  children: ReactNode;
};

export const Layout: FC<LayoutType> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
