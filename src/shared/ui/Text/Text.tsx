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

export const enum TextSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

interface TextProps {
  className?: string;
  text?: string;
  title?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
}

export const Text: FC<TextProps> = memo((props) => {
  const {
    className,
    text,
    title,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.MEDIUM,
  } = props;

  type HeaderType = 'h1' | 'h2' | 'h3';

  const mapSizeToHeaderType: Record<TextSize, HeaderType> = {
    [TextSize.SMALL]: 'h3',
    [TextSize.MEDIUM]: 'h2',
    [TextSize.LARGE]: 'h1',
  };

  const HeaderTag = mapSizeToHeaderType[size];

  return (
    <div
      className={getClassNames(
        styles.textMain,
        { [styles[theme]]: true, [styles[align]]: true },
        [className, styles[size]]
      )}
    >
      {title && <HeaderTag className={styles.textTitle}>{title}</HeaderTag>}
      {text && <p className={styles.textDescription}>{text}</p>}
    </div>
  );
});
