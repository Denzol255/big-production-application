import { EditableProfileCard } from 'features/editableProfileCard';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { Text } from 'shared/ui/Text/Text';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import styles from './ProfilePage.module.scss';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = memo((props: ProfilePageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <PageWrapper
        className={getClassNames(styles.profilePage, {}, [className])}
      >
        <Text text={t('Profile is not found')} />
      </PageWrapper>
    );
  }

  return (
    <PageWrapper className={getClassNames(styles.profilePage, {}, [className])}>
      <EditableProfileCard id={id} />
    </PageWrapper>
  );
});

export default ProfilePage;
