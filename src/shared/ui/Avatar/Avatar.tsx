import { CSSProperties, FC, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import styles from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  alt?: string;
  size?: number;
  src?: string;
}

export const Avatar: FC<AvatarProps> = memo((props) => {
  const { t } = useTranslation();
  const { className, alt, size, src } = props;

  const style = useMemo<CSSProperties>(
    () => ({
      width: `${size}px` || '100px',
      height: `${size}px` || '100px',
    }),
    [size]
  );

  return (
    <img
      className={getClassNames(styles.avatar, {}, [className])}
      alt={alt || t('Picture')}
      style={style}
      src={
        src ||
        'https://img.freepik.com/premium-photo/emoji-with-medical-mask-sunglass-royal-crown-3d_286925-127.jpg?w=826'
      }
    />
  );
});
