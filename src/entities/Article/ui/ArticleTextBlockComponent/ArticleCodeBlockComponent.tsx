import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import styles from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
  className?: string;
}

export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = (
  props
) => {
  const { t } = useTranslation();
  const { className } = props;
  return (
    <div className={getClassNames(styles.articleCodeBlock, {}, [className])}>
      2211
    </div>
  );
};
