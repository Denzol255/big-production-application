import { getClassNames } from '@/shared/lib/getClassNames/getClassNames';
import { Button } from '@/shared/ui';
import { ButtonTheme } from '@/shared/ui/Button/Button';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import './FallbackComponent.scss';

interface ErrorFallbackComponentProps {
  className?: string;
}

export const ErrorFallbackComponent: FC<ErrorFallbackComponentProps> = (
  props
) => {
  const { t } = useTranslation();
  const { className } = props;
  const navigate = useNavigate();
  const handleReload = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    navigate(0);
  };
  const handleGoHome = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    window.location.href = '/';
  };

  return (
    <div className={getClassNames('', {}, [className])}>
      <h1>500</h1>
      <h2>
        {t('Unexpected Error')} <b>:(</b>
      </h2>
      <div className='gears'>
        <div className='gear one'>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>
        <div className='gear two'>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>
        <div className='gear three'>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>
      </div>
      <div className='fallback-buttons'>
        <Button
          onClick={handleReload}
          theme={ButtonTheme.PRIMARY}
          className='fallback-buttons__reload'
        >
          {t('Reload page')}
        </Button>
        <Button
          onClick={handleGoHome}
          theme={ButtonTheme.PRIMARY}
          className='fallback-buttons__go-home'
        >
          {t('Go to home page')}
        </Button>
      </div>
    </div>
  );
};
