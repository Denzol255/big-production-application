import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import {
  fetchProfileData,
  getProfileData,
  getProfileError,
  getProfileFormData,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  profileActions,
  ProfileCard,
  profileReducer,
  ValidateProfileErrors,
} from 'entities/Profile';
import { getUserAuthData } from 'entities/User';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from 'shared/ui/Page/Page';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import styles from './ProfilePage.module.scss';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

interface ProfilePageProps {
  className?: string;
}

const initialReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = memo((props: ProfilePageProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileFormData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;

  const validatesErrorTranslate = {
    [ValidateProfileErrors.SERVER_ERROR]: t(
      'Error while getting data from server'
    ),
    [ValidateProfileErrors.INCORRECT_AGE]: t('Incorrect age'),
    [ValidateProfileErrors.INCORRECT_USER_DATA]: t(
      'First and last name are required'
    ),
    [ValidateProfileErrors.NO_DATA]: t('Data not specified'),
  };

  const handleFirstname = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfileFormData({ first: value || '' }));
    },
    [dispatch]
  );

  const handleLastname = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfileFormData({ lastname: value || '' }));
    },
    [dispatch]
  );

  const handleAge = useCallback(
    (value: string) => {
      const age = Number(value);
      if (age >= 0 && age < 123) {
        dispatch(
          profileActions.updateProfileFormData({ age: Number(value || 0) })
        );
      }
    },
    [dispatch]
  );

  const handleCity = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfileFormData({ city: value || '' }));
    },
    [dispatch]
  );

  const handleAvatar = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfileFormData({ avatar: value || '' }));
    },
    [dispatch]
  );

  const handleUsername = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfileFormData({ username: value || '' }));
    },
    [dispatch]
  );

  const handleCurrency = useCallback(
    (currency: Currency) => {
      dispatch(
        profileActions.updateProfileFormData({
          currency: currency || Currency.RUB,
        })
      );
    },
    [dispatch]
  );

  const handleCountry = useCallback(
    (country: Country) => {
      dispatch(
        profileActions.updateProfileFormData({
          country: country || Country.RUSSIA,
        })
      );
    },
    [dispatch]
  );

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <Page className={getClassNames(styles.profilePage, {}, [className])}>
        <ProfilePageHeader canEdit={canEdit} />
        {validateErrors?.length &&
          validateErrors.map((error) => {
            return (
              <Text
                theme={TextTheme.ERROR}
                text={validatesErrorTranslate[error]}
                key={error}
              />
            );
          })}
        <ProfileCard
          formData={formData}
          error={error}
          isLoading={isLoading}
          handleFirstname={handleFirstname}
          handleLastname={handleLastname}
          handleCity={handleCity}
          handleAge={handleAge}
          handleUsername={handleUsername}
          handleAvatar={handleAvatar}
          handleCurrency={handleCurrency}
          handleCountry={handleCountry}
          readonly={readonly}
        />
      </Page>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
