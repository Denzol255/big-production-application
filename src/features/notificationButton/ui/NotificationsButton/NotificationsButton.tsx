import { NotificationList } from 'entities/Notification';
import { memo } from 'react';
import NotificationIcon from 'shared/assets/icons/notificationIcon.svg';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { Popover } from 'shared/ui/Popovers';
import styles from './NotificationsButton.module.scss';

interface NotificationsButtonProps {
  className?: string;
}

export const NotificationsButton = memo((props: NotificationsButtonProps) => {
  const { className } = props;
  return (
    <Popover
      className={getClassNames('', {}, [className])}
      trigger={
        <Button
          className={styles.navbarNotificationButton}
          theme={ButtonTheme.CLEAR}
        >
          <Icon Svg={NotificationIcon} inverted />
        </Button>
      }
      optionsDirection='bottomLeft'
    >
      <NotificationList className={styles.navbarNotificationList} />
    </Popover>
  );
});
