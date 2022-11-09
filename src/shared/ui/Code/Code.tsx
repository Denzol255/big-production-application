import { FC, useCallback } from 'react';
import CopyIcon from 'shared/assets/icons/copyIcon.svg';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { Button, ButtonTheme } from '../Button/Button';
import styles from './Code.module.scss';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code: FC<CodeProps> = (props) => {
  const { className, text } = props;
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);
  return (
    <pre className={getClassNames(styles.code, {}, [className])}>
      <div className={styles.codeViewportWrapper}>
        <Button
          onClick={onCopy}
          theme={ButtonTheme.CLEAR}
          className={styles.copyBtn}
        >
          <CopyIcon className={styles.copyBtnIcon} />
        </Button>
        <code>{text}</code>
      </div>
    </pre>
  );
};
