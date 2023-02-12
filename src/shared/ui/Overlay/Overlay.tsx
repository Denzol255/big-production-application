import { memo } from 'react';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import styles from './Overlay.module.scss';

interface OverlayProps {
  className?: string;
  onClose: () => void;
}

const Overlay = memo((props: OverlayProps) => {
  const { className, onClose } = props;
  return (
    <div
      className={getClassNames(styles.overlay, {}, [className])}
      onClick={onClose}
    />
  );
});

export default Overlay;
