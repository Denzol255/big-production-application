import { t } from 'i18next';
import { FC, memo } from 'react';

import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { ArticleImageBlock } from '../../model/types/article';
import styles from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> =
  memo((props) => {
    const { className, block } = props;
    return (
      <div
        className={getClassNames(styles.articleImageBlockComponent, {}, [
          className,
        ])}
      >
        <img
          src={block.src}
          className={styles.image}
          alt={block.title || t('code')}
        />
        {block.title && <Text title={block.title} align={TextAlign.CENTER} />}
      </div>
    );
  });
