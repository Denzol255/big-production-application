import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
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
        <Text
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
          className={styles.commentList}
          text={t('Try to reload the page')}
          title={t('Error while loading comments')}
        />
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
            key={comment.id}
          />
        ))
      ) : (
        <Text text={t('No comments')} />
      )}
    </div>
  );
});
