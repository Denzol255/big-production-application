import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';
import { useNotificationsList } from '../../api/notificationsApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import styles from './NotificationList.module.scss';

interface NotificationListProps {
  className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const {
    data: notifications,
    isError,
    isLoading,
  } = useNotificationsList(null, {
    pollingInterval: 5000,
  });

  if (isError) {
    return (
      <div className={getClassNames(styles.notificationList, {}, [className])}>
        <Text
          title={t('Error while getting data from server')}
          text={t('Try to reload the page')}
        />
      </div>
    );
  }

  if (isLoading) {
    return (
      <VStack
        gap='16'
        maxWidth
        className={getClassNames(styles.notificationList, {}, [className])}
      >
        <Skeleton width='100%' border='8px' height='80px' />
        <Skeleton width='100%' border='8px' height='80px' />
        <Skeleton width='100%' border='8px' height='80px' />
      </VStack>
    );
  }

  return (
    <VStack
      gap='16'
      maxWidth
      className={getClassNames(styles.notificationList, {}, [className])}
    >
      {notifications &&
        notifications.map((notification) => (
          <NotificationItem key={notification.id} notification={notification} />
        ))}
    </VStack>
  );
});
