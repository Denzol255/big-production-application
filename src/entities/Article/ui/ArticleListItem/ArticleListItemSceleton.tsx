/* eslint-disable jsx-a11y/click-events-have-key-events */
import { memo } from 'react';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { ArticleView } from '../../model/const/articleConst';
import styles from './ArticleListItem.module.scss';

interface ArticleListItemSceletonProps {
  className?: string;
  view: ArticleView;
}

const ArticleListItemSceleton = memo((props: ArticleListItemSceletonProps) => {
  const { className, view } = props;

  if (view === ArticleView.LIST) {
    return (
      <div
        className={getClassNames(styles.articleListItem, {}, [
          className,
          styles[view],
        ])}
      >
        <Card className={styles.listCard}>
          <div className={styles.articleTop}>
            <div className={styles.imageUsernameBlock}>
              <Skeleton
                width={30}
                height={30}
                border={'50%'}
                className={styles.userAvatar}
              />
              <Skeleton width={150} height={16} />
            </div>
            <Skeleton width={150} height={16} className={styles.date} />
          </div>
          <Skeleton width={250} height={24} className={styles.listTitle} />
          <Skeleton height={200} className={styles.img} />
          <Skeleton height={150} className={styles.textBlock} />
          <div className={styles.footer}>
            <Skeleton width={200} height={36} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div
      className={getClassNames(styles.articleListItem, {}, [
        className,
        styles[view],
      ])}
    >
      <Card className={styles.gridCard}>
        <div className={styles.imageWrapper}>
          <Skeleton width={200} height={200} className={styles.img} />
        </div>
        <div className={styles.infoWrapper}>
          <Skeleton width={130} height={16} className={styles.viewWrapper} />
        </div>
        <Skeleton width={150} height={16} className={styles.title} />
      </Card>
    </div>
  );
});

export default ArticleListItemSceleton;
