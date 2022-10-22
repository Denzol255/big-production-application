import { FC, memo } from 'react';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import styles from './Text.module.scss';

export const enum TextTheme {
  PRIMARY = 'primary',
  PRIMARY_INVERTED = 'primary_inverted',
  ERROR = 'error',
}

interface TextProps {
  className?: string;
  text?: string;
  title?: string;
  theme?: TextTheme;
}

export const Text: FC<TextProps> = memo((props) => {
  const { className, text, title, theme = TextTheme.PRIMARY } = props;
  return (
    <div
      className={getClassNames(styles.textMain, { [styles[theme]]: true }, [
        className,
      ])}
    >
      <p className={styles.textTitle}>{title}</p>
      <p className={styles.textDescription}>{text}</p>
    </div>
  );
});
