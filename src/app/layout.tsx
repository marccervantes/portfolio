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
  title: 'Marc Cervantes Garcia',
  description: "I'm a web developer with experience in designing and building responsive websites and web applications. I've worked with a variety of technologies and frameworks, including React, Angular, Laravel, and WordPress, which has allowed me to take on diverse projects and quickly adapt to different tech environments.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${spaceGrotesk.className} bg-gradient-to-r from-white to-blue-100`} cz-shortcut-listen="true">
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
