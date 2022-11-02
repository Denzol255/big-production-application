import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import styles from './ArticleCodeImageComponent.module.scss';

interface ArticleCodeImageComponentProps {
  className?: string;
}

export const ArticleCodeImageComponent: FC<ArticleCodeImageComponentProps> = (
  props
) => {
  const { t } = useTranslation();
  const { className } = props;
  return (
    <div className={getClassNames(styles.articleImageBlock, {}, [className])}>
      222
    </div>
  );
};
