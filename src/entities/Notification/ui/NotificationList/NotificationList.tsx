import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import styles from './NotificationList.module.scss';

interface NotificationListProps {
  className?: string;
}

const NotificationList = memo((props: NotificationListProps) => {
  const { className } = props;
  const { t } = useTranslation();
  return (
    <div className={getClassNames(styles.notificationList, {}, [className])}>
      notificationList
    </div>
  );
});

export default NotificationList;
