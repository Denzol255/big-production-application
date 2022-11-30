import {
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from 'entities/Profile';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';

interface ProfilePageHeaderProps {
  className?: string;
  canEdit: boolean;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = (props) => {
  const { t } = useTranslation();
  const { className, canEdit } = props;
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
    <HStack
      maxWidth
      justify='between'
      className={getClassNames('', {}, [className])}
    >
      <Text title={t('Profile')} />
      <>
        {canEdit && (
          <HStack>
            {readonly ? (
              <Button theme={ButtonTheme.PRIMARY} onClick={onEdit}>
                {t('Edit')}
              </Button>
            ) : (
              <>
                <Button theme={ButtonTheme.PRIMARY} onClick={onSave}>
                  {t('Save')}
                </Button>
                <Button theme={ButtonTheme.DANGER} onClick={onCancelEdit}>
                  {t('Cancel')}
                </Button>
              </>
            )}
          </HStack>
        )}
      </>
    </HStack>
  );
};
