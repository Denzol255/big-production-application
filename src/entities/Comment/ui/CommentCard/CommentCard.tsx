import { FC, memo } from 'react';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text } from 'shared/ui/Text/Text';
import { CommentItem } from '../../model/types/comment';
import styles from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment: CommentItem;
  isLoading?: boolean;
}

export const CommentCard: FC<CommentCardProps> = memo((props) => {
  const { className, isLoading, comment } = props;

  if (isLoading) {
    return (
      <div className={getClassNames(styles.commentCard, {}, [className])}>
        <div className={styles.header}>
          <Skeleton width={30} height={30} border='50%' />
          <Skeleton height={16} width={100} />
        </div>
        <Skeleton className={styles.text} height={50} width={'100%'} />
      </div>
    );
  }

  return (
    <div className={getClassNames(styles.commentCard, {}, [className])}>
      <div className={styles.header}>
        {comment.user.avatar ? (
          <Avatar size={30} src={comment.user.avatar} />
        ) : null}
        <Text className={styles.username} title={comment.user.username} />
      </div>
      <Text className={styles.text} text={comment.text} />
    </div>
  );
});
