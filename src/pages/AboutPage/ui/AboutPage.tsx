import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <div data-testid="about-page">
            {t('О сайте')}
        </div>
    );
};

export default AboutPage;
