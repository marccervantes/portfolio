'use client';

import { useI18n } from '../i18n/i18nContext';

export default function Home() {
  const { t, locale, setLocale } = useI18n();

  return (
    <main style={{ padding: 20 }}>
      <h1>{t('greeting')}</h1>
      <p>{t('description')}</p>

      <button onClick={() => setLocale('es')} disabled={locale === 'es'}>
        Español
      </button>
      <button onClick={() => setLocale('en')} disabled={locale === 'en'}>
        English
      </button>
    </main>
  );
}
