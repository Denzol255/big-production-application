import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import styles from './ArticleCodeBlock.module.scss';

interface ArticleCodeBlockProps {
  className?: string;
}

export const ArticleCodeBlock: FC<ArticleCodeBlockProps> = (props) => {
  const { t } = useTranslation();
  const { className } = props;
  return (
    <div className={getClassNames(styles.articleCodeBlock, {}, [className])}>
      123
    </div>
  );
};
