import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LoginForm.module.scss';
import { Button } from 'shared/ui';
import { Input } from 'shared/ui/Input/ui/Input';
import { ButtonTheme } from 'shared/ui/Button/Button';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
  const { t } = useTranslation();
  const { className } = props;
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  return (
    <form className={getClassNames(styles.loginForm, {}, [className])}>
      <Input
        autofocus
        className={styles.loginInput}
        placeholder={t('Login')}
        inputName='username'
        value={username}
        onChange={setUsername}
      />
      <Input
        className={styles.loginInput}
        placeholder={t('Password')}
        inputName='password'
        value={password}
        onChange={setPassword}
      />
      <Button theme={ButtonTheme.PRIMARY} className={styles.loginBtn}>
        {t('Sign in')}
      </Button>
    </form>
  );
};
