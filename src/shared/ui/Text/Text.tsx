import { FC, memo } from 'react';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import styles from './Text.module.scss';

export const enum TextTheme {
  PRIMARY = 'primary',
  PRIMARY_INVERTED = 'primary_inverted',
  ERROR = 'error',
}

export const enum TextAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

interface TextProps {
  className?: string;
  text?: string;
  title?: string;
  theme?: TextTheme;
  align?: TextAlign;
}

export const Text: FC<TextProps> = memo((props) => {
  const {
    className,
    text,
    title,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
  } = props;
  return (
    <div
      className={getClassNames(
        styles.textMain,
        { [styles[theme]]: true, [styles[align]]: true },
        [className]
      )}
    >
      <p className={styles.textTitle}>{title}</p>
      <p className={styles.textDescription}>{text}</p>
    </div>
  );
});
