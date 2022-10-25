import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { Input, InputTheme } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Profile } from '../../model/types/profile';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  formData?: Profile;
  error?: string;
  isLoading?: boolean;
  handleLastname: (value: string) => void;
  handleFirstname: (value: string) => void;
  handleAge: (value: string) => void;
  handleCity: (value: string) => void;
  readonly?: boolean;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
  const { t } = useTranslation();
  const {
    className,
    formData,
    isLoading,
    error,
    handleFirstname,
    handleLastname,
    handleAge,
    handleCity,
    readonly = false,
  } = props;

  if (isLoading) {
    return (
      <div
        className={getClassNames(styles.profileCard, {}, [
          className,
          styles.loading,
        ])}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={getClassNames(styles.profileCard, {}, [
          className,
          styles.loading,
        ])}
      >
        <Text
          align={TextAlign.CENTER}
          theme={TextTheme.ERROR}
          title={t('An error occurred while loading the profile')}
          text={t('Try to reload the page')}
        />
      </div>
    );
  }

  return (
    <div className={getClassNames(styles.profileCard, {}, [className])}>
      <div className={styles.profileData}>
        <Input
          theme={InputTheme.INVERTED_LABEL}
          inputName={t('Firstname')}
          className={styles.profileInput}
          value={formData?.first || ''}
          onChange={handleFirstname}
          placeholder={t('Your firstname')}
          readonly={readonly}
        />
        <Input
          theme={InputTheme.INVERTED_LABEL}
          inputName={t('Lastname')}
          className={styles.profileInput}
          value={formData?.lastname || ''}
          onChange={handleLastname}
          placeholder={t('Your lastname')}
          readonly={readonly}
        />
        <Input
          theme={InputTheme.INVERTED_LABEL}
          inputName={t('Age')}
          className={styles.profileInput}
          value={formData?.age || 0}
          onChange={handleAge}
          placeholder={t('Your age')}
          readonly={readonly}
        />
        <Input
          theme={InputTheme.INVERTED_LABEL}
          inputName={t('Lastname')}
          className={styles.profileInput}
          value={formData?.city || ''}
          onChange={handleCity}
          placeholder={t('Your city')}
          readonly={readonly}
        />
      </div>
    </div>
  );
};
