import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { Text } from 'shared/ui/Text/Text';
import { CommentItem } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import styles from './CommentList.module.scss';

interface CommentListProps {
  className?: string;
  comments?: CommentItem[];
  isLoading?: boolean;
  error?: string;
}

export const CommentList: FC<CommentListProps> = memo((props) => {
  const { className, isLoading, error, comments } = props;
  const { t } = useTranslation();

  if (error) {
    return (
      <div className={getClassNames(styles.commentList, {}, [className])}>
        <span className={styles.commentList}>
          {t('Error while loading comments')}
        </span>
      </div>
    );
  }

  return (
    <div className={getClassNames(styles.commentList, {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard
            isLoading={isLoading}
            comment={comment}
            key={comment.toString()}
          />
        ))
      ) : (
        <Text text={t('No comments')} />
      )}
    </div>
  );
});
