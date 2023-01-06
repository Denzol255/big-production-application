import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import styles from './NotificationItem.module.scss';

interface NotificationItemProps {
  className?: string;
}

const NotificationItem = memo((props: NotificationItemProps) => {
  const { className } = props;
  const { t } = useTranslation();
  return (
    <div className={getClassNames(styles.notificationItem, {}, [className])}>
      notificationItem
    </div>
  );
});

export default NotificationItem;
