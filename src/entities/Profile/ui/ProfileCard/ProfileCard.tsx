import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input, InputTheme } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
  const { t } = useTranslation();
  const { className } = props;
  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);

  return (
    <div className={getClassNames(styles.profileCard, {}, [className])}>
      <div className={styles.profileHeader}>
        <Text title={t('Profile')} />
        <Button theme={ButtonTheme.PRIMARY}>{t('Edit')}</Button>
      </div>
      <div className={styles.profileData}>
        <Input
          theme={InputTheme.INVERTED_LABEL}
          inputName={t('Firstname')}
          className={styles.profileInput}
          value={data?.first || ''}
          placeholder={t('Your firstname')}
        />
        <Input
          theme={InputTheme.INVERTED_LABEL}
          inputName={t('Lastname')}
          className={styles.profileInput}
          value={data?.lastname || ''}
          placeholder={t('Your lastname')}
        />
      </div>
    </div>
  );
};
