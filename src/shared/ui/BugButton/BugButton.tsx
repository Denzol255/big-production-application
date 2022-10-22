import { FC, memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { Button, ButtonTheme } from '../Button/Button';

interface BugButtonProps {
  className?: string;
}

export const BugButton: FC<BugButtonProps> = memo((props) => {
  const { t } = useTranslation();
  const { className } = props;
  const [isError, setIsError] = useState(false);

  const handleThrowError = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    event.preventDefault();
    setIsError(true);
  };

  useEffect(() => {
    if (isError) {
      throw new Error('test error');
    }
  }, [isError]);

  return (
    <Button
      onClick={handleThrowError}
      theme={ButtonTheme.PRIMARY}
      className={getClassNames('', {}, [className])}
    >
      {t('Throw error')}
    </Button>
  );
});
