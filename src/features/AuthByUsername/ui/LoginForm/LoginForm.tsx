import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import styles from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialsReducers: ReducersList = {
  login: loginReducer,
};

const LoginForm: FC<LoginFormProps> = memo((props) => {
  const { className, onSuccess } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

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
  const handleLogin = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispatch, password, username, onSuccess]);

  return (
    <DynamicModuleLoader reducers={initialsReducers} removeAfterUnmount>
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
    </DynamicModuleLoader>
  );
});

export default LoginForm;
