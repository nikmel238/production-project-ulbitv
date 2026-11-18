import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/ui/Text';
import { loginByUsername } from '../../../modal/services/loginByUsername/loginByUsername';
import { getLoginState } from '../../../modal/selectors/getLoginState/getLoginState';
import { loginActions } from '../../../modal/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();

    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);
    const dispatch = useDispatch();

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div
            className={classNames(cls.LoginForm, {}, [className])}
            data-testid="login-form"
        >
            <Text title={t('Форма авторизации')} />
            {error && <Text text={t('Неверный логин или пароль')} theme={TextTheme.ERROR} />}
            <Input
                className={cls.input}
                type="text"
                autofocus
                placeholder={t('Логин')}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                className={cls.input}
                type="password"
                placeholder={t('Пароль')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                className={cls.loginBtn}
                theme={ButtonTheme.OUTLINE}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});
