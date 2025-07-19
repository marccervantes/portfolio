import { I18nProvider } from '../i18n/i18nContext';

export const metadata = {
  title: 'Next.js i18n Example',
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
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
