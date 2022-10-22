import { profileReducer } from 'entities/Profile';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import styles from './ProfilePage.module.scss';

interface ProfilePageProps {
  className?: string;
}

const initialsReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = memo((props: ProfilePageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <DynamicModuleLoader reducers={initialsReducers} removeAfterUnmount>
      <div className={getClassNames(styles.profilePage, {}, [className])}>
        {t('Page profile')}
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
