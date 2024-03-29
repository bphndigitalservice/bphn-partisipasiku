import { FunctionComponent, PropsWithChildren } from 'react';
import { Inter, Fira_Sans as FiraSans } from 'next/font/google';
import Footer from '@/components/base/Footer';
import Header from '@/components/base/Header';
import { clsx } from 'clsx';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const firaSans = FiraSans({
  subsets: ['latin'],
  variable: '--font-fira',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
const RootLayout: FunctionComponent<PropsWithChildren> = ({
  children,
}: PropsWithChildren) => {
  return (
    <div className={clsx([inter.variable, firaSans.variable], 'font-sans')}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
