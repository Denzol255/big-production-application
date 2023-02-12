import { memo, ReactNode } from 'react';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import Overlay from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import styles from './Drawer.module.scss';

interface DrawerProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  content: ReactNode;
  lazy?: boolean;
}

const ANIMATION_DELAY_SHOW = 100;
const ANIMATION_DELAY_HIDE = 200;

const Drawer = memo((props: DrawerProps) => {
  const { className, isOpen, onClose, content, lazy } = props;
  const { isClosing, showContent, isMounted, close } = useModal({
    animationDelayHide: ANIMATION_DELAY_HIDE,
    animationDelayShow: ANIMATION_DELAY_SHOW,
    isOpen,
    onClose,
  });
  const drawerMods = {
    [styles.opened]: isOpen,
  };
  const contentMods = {
    [styles.contentOpen]: showContent,
    [styles.contentClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={getClassNames(styles.drawer, drawerMods, [className])}>
        <Overlay onClose={close} />
        <div className={getClassNames(styles.contentWrapper, contentMods, [])}>
          {content}
        </div>
      </div>
    </Portal>
  );
});

export default Drawer;
