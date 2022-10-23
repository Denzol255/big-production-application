import {
  fetchProfileData,
  ProfileCard,
  profileReducer,
} from 'entities/Profile';
import { memo, useEffect } from 'react';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { useAppDispatch } from 'shared/lib/getClassNames/useAppDispatch/useAppDispatch';
import styles from './ProfilePage.module.scss';

interface ProfilePageProps {
  className?: string;
}

const initialsReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = memo((props: ProfilePageProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={initialsReducers} removeAfterUnmount>
      <div className={getClassNames(styles.profilePage, {}, [className])}>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
