import { Country, CountrySelect } from 'entities/Country';
import { Currency, CurrencySelect } from 'entities/Currency';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input, InputTheme } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { VStack } from 'shared/ui/Stack';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Profile } from '../../model/types/profile';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  formData?: Profile;
  error?: string;
  isLoading?: boolean;
  handleLastname?: (value: string) => void;
  handleFirstname?: (value: string) => void;
  handleAge?: (value: string) => void;
  handleCity?: (value: string) => void;
  handleAvatar?: (value: string) => void;
  handleUsername?: (value: string) => void;
  handleCurrency?: (currency: Currency) => void;
  handleCountry?: (country: Country) => void;
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
    handleAvatar,
    handleUsername,
    handleCurrency,
    handleCountry,
    readonly = false,
  } = props;

  const mods = {
    [styles.editing]: !readonly,
  };

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
        className={getClassNames(styles.profileCard, mods, [
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
    <div className={getClassNames(styles.profileCard, mods, [className])}>
      <VStack gap='16' align='start'>
        <Avatar size={150} src={formData?.avatar} alt={t('Avatar')} />
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
        <Input
          theme={InputTheme.INVERTED_LABEL}
          inputName={t('Username')}
          className={styles.profileInput}
          value={formData?.username || ''}
          onChange={handleUsername}
          placeholder={t('Your username')}
          readonly={readonly}
        />
        <Input
          theme={InputTheme.INVERTED_LABEL}
          inputName={t('Avatar')}
          className={styles.profileInput}
          value={formData?.avatar || ''}
          onChange={handleAvatar}
          placeholder={t('Your avatar')}
          readonly={readonly}
        />
        <CurrencySelect
          className={styles.profileInput}
          value={formData?.currency || Currency.RUB}
          onChange={handleCurrency}
          readonly={readonly}
        />
        <CountrySelect
          className={styles.profileInput}
          value={formData?.country || Country.RUSSIA}
          onChange={handleCountry}
          readonly={readonly}
        />
      </VStack>
    </div>
  );
};
