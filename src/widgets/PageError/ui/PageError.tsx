import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import cls from './PageError.module.scss';
import { reloadPage } from './reloadPage';

interface ErrorPageProps {
  className?: string;
}

export const PageError = ({ className }: ErrorPageProps) => {
    const { t } = useTranslation();

    return (
        <div
            className={classNames(cls.PageError, {}, [className])}
            data-testid="page-error"
        >
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button
                onClick={reloadPage}
                theme={ButtonTheme.OUTLINE}
            >
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};
