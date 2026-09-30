import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';

interface LangSwitcherProps {
  className?: string;
  long?: boolean;
}

export const LangSwitcher = ({ className, long }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            onClick={toggle}
            theme={ButtonTheme.CLEAR_INVERTED}
            className={classNames('', {}, [className])}
        >
            {t(long ? 'Короткий язык' : 'Язык')}
        </Button>
    );
};
