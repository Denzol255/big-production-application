import { memo } from 'react';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';
import { Notification } from '../../model/types/notification';
import styles from './NotificationItem.module.scss';

interface NotificationItemProps {
  className?: string;
  notification: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
  const { className, notification } = props;
  const clickableNofitication = notification.href && styles.clickable;
  const content = (
    <Card
      theme={CardTheme.OUTLINE}
      className={getClassNames(styles.notificationItem, {}, [
        className,
        clickableNofitication,
      ])}
    >
      <Text title={notification.title} text={notification.description} />
    </Card>
  );

  return notification.href ? (
    <a target='_blank' href={notification.href} rel='noreferrer'>
      {content}
    </a>
  ) : (
    content
  );
});
