import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input';
import { useState } from 'react';

const MainPage = () => {
    const { t } = useTranslation('main');
    const [value, setValue] = useState('');
    const onChange = (value: string) => {
        setValue(value);
    };
    return (
        <div>
            {t('Главная страница')}
            <Input
                placeholder="ssss"
                type="text"
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default MainPage;
