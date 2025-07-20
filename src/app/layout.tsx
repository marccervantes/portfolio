import { I18nProvider } from '../i18n/i18nContext';
import "./globals.css";
import Footer from './pages/footer';
import Nav from './pages/nav';

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
      <body>
        <I18nProvider>
          <Nav />
            {children}
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
