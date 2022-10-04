import { getClassNames } from '@/shared/lib/getClassNames/getClassNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './TemplateName.module.scss';

interface TemplateNameProps {
  className?: string;
}

export const TemplateName: FC<TemplateNameProps> = (props) => {
  const { t } = useTranslation();
  const { className } = props;
  return (
    <div className={getClassNames(styles.templateName, {}, [className])}></div>
  );
};
