import {
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from 'entities/Profile';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { useAppDispatch } from 'shared/lib/getClassNames/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import styles from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = (props) => {
  const { t } = useTranslation();
  const { className } = props;
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={getClassNames(styles.profileHeader, {}, [className])}>
      <div className={styles.profileHeader}>
        <Text title={t('Profile')} />
        <div className={styles.profileHeaderButtons}>
          {readonly ? (
            <Button
              theme={ButtonTheme.PRIMARY}
              className={styles.profileHeaderButtonOnEdit}
              onClick={onEdit}
            >
              {t('Edit')}
            </Button>
          ) : (
            <>
              <Button
                theme={ButtonTheme.PRIMARY}
                onClick={onSave}
                className={styles.profileHeaderButtonSave}
              >
                {t('Save')}
              </Button>
              <Button
                theme={ButtonTheme.DANGER}
                onClick={onCancelEdit}
                className={styles.profileHeaderButtonCancel}
              >
                {t('Cancel')}
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
