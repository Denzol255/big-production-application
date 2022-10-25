import {
  fetchProfileData,
  getProfileError,
  getProfileFormData,
  getProfileIsLoading,
  getProfileReadonly,
  profileActions,
  ProfileCard,
  profileReducer,
} from 'entities/Profile';
import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { useAppDispatch } from 'shared/lib/getClassNames/useAppDispatch/useAppDispatch';
import styles from './ProfilePage.module.scss';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

interface ProfilePageProps {
  className?: string;
}

const initialsReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = memo((props: ProfilePageProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileFormData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);

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
      console.log(value);
      console.log(age);

      if (age >= 0 && age < 123) {
        console.log(123);

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

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={initialsReducers} removeAfterUnmount>
      <div className={getClassNames(styles.profilePage, {}, [className])}>
        <ProfilePageHeader />
        <ProfileCard
          formData={formData}
          error={error}
          isLoading={isLoading}
          handleFirstname={handleFirstname}
          handleLastname={handleLastname}
          handleCity={handleCity}
          handleAge={handleAge}
          readonly={readonly}
        />
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
