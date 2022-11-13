import { FC, memo } from 'react';
import { RoutePath } from 'shared/config/routerConfig/RouteConfig';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text } from 'shared/ui/Text/Text';
import { CommentItem } from '../../model/types/comment';
import styles from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment?: CommentItem;
  isLoading?: boolean;
}

export const CommentCard: FC<CommentCardProps> = memo((props) => {
  const { className, isLoading, comment } = props;

  if (isLoading) {
    return (
      <div
        className={getClassNames(styles.commentCard, {}, [
          className,
          styles.loading,
        ])}
      >
        <div className={styles.header}>
          <Skeleton width={30} height={30} border='50%' />
          <Skeleton height={16} width={100} />
        </div>
        <Skeleton className={styles.text} height={50} width={'100%'} />
      </div>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <div className={getClassNames(styles.commentCard, {}, [className])}>
      <AppLink
        to={`${RoutePath.profile}${comment.user.id}`}
        className={styles.header}
      >
        {comment.user.avatar ? (
          <Avatar size={30} src={comment.user.avatar} />
        ) : null}
        <Text className={styles.username} title={comment.user.username} />
      </AppLink>
      <Text className={styles.text} text={comment.text} />
    </div>
  );
});
