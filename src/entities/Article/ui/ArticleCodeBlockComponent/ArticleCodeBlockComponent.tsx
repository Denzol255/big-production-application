import { FC, memo } from 'react';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { Code } from 'shared/ui/Code/Code';
import { ArticleCodeBlock } from '../../model/types/article';
import styles from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> =
  memo((props) => {
    const { className, block } = props;
    return (
      <div
        className={getClassNames(styles.articleCodeBlockComponent, {}, [
          className,
        ])}
      >
        <Code text={block.code} />
      </div>
    );
  });
