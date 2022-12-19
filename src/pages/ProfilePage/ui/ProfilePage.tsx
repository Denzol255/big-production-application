import { EditableProfileCard } from 'features/editableProfileCard';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import styles from './ProfilePage.module.scss';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = memo((props: ProfilePageProps) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();

  return (
    <PageWrapper className={getClassNames(styles.profilePage, {}, [className])}>
      <EditableProfileCard id={id} />
    </PageWrapper>
  );
});

export default ProfilePage;
