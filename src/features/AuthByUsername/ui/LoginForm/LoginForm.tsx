import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { Button } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/ui/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = memo((props) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { password, username, isLoading, error } = useSelector(getLoginState);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );
  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );
  const handleLogin = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  if (error) {
    console.log(error);
  }
  return (
    <>
      <form className={getClassNames(styles.loginForm, {}, [className])}>
        <Text
          theme={TextTheme.PRIMARY_INVERTED}
          className={styles.loginTitle}
          title={t('Authorization form')}
        />
        <Input
          autofocus
          className={styles.loginInput}
          placeholder={t('Login')}
          inputName='username'
          value={username}
          onChange={onChangeUsername}
        />
        <Input
          className={styles.loginInput}
          placeholder={t('Password')}
          inputName='password'
          value={password}
          onChange={onChangePassword}
        />
        <Button
          disabled={isLoading}
          type='button'
          theme={ButtonTheme.PRIMARY}
          className={styles.loginBtn}
          onClick={handleLogin}
        >
          {t('Sign in')}
        </Button>
      </form>
      {error && (
        <Text
          className={styles.loginError}
          theme={TextTheme.ERROR}
          text={t(error)}
        />
      )}
    </>
  );
});
