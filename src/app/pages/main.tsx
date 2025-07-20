import React from 'react';
import { useI18n } from '@/i18n/i18nContext';


const Main: React.FC = () => {
    const { t } = useI18n();

    return (
        <main className="max-w-7xl mx-auto px-6 py-8">
            <h1>{t('aboutMe')}</h1>
            <p>{t('aboutMe')}</p>
        </main>
    );
};

export default Main;
