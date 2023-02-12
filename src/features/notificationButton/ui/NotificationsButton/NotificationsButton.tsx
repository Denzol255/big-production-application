import { NotificationList } from 'entities/Notification';
import { memo, useState } from 'react';
import NotificationIcon from 'shared/assets/icons/notificationIcon.svg';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { useCheckDevice } from 'shared/lib/hooks/useCheckDevice/useCheckDevice';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import Drawer from 'shared/ui/Drawer/Drawer';
import { Icon } from 'shared/ui/Icon/Icon';
import { Popover } from 'shared/ui/Popovers';
import styles from './NotificationsButton.module.scss';

interface NotificationsButtonProps {
  className?: string;
}

export const NotificationsButton = memo((props: NotificationsButtonProps) => {
  const { className } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const content = <NotificationList className={styles.notificationList} />;
  const isMobile = useCheckDevice();

  return (
    <>
      {isMobile ? (
        <>
          <Drawer
            isOpen={isOpen}
            content={content}
            onClose={() => setIsOpen(false)}
            lazy
          />
          <Button
            className={styles.navbarNotificationButton}
            theme={ButtonTheme.CLEAR}
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <Icon Svg={NotificationIcon} inverted />
          </Button>
        </>
      ) : (
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
          {content}
        </Popover>
      )}
    </>
  );
});
