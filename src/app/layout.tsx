import { I18nProvider } from '../i18n/i18nContext';
import "./globals.css";
import Footer from './components/footer';
import Nav from './components/nav';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Elige los pesos que necesites
  display: 'swap',
});

export const metadata = {
  title: 'Portfolio',
  description: 'Example of i18n without routes in Next.js 13+',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${spaceGrotesk.className} bg-gradient-to-r from-white to-blue-100`}>
      {/* <body className={`${spaceGrotesk.className} bg-gradient-to-r from-white to-gray-100`}> */}
        <I18nProvider>
          <Nav />
            {children}
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
