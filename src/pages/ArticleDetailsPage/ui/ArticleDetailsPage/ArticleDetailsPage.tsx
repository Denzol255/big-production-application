import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import {
  getArticleCommentsError,
  getArticleCommentsIsLoading,
} from 'pages/ArticleDetailsPage/model/selectors/comments';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { Text } from 'shared/ui/Text/Text';
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from '../../model/slices/articleDetailsCommentsSlice';
import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const { t } = useTranslation();
  const { className } = props;
  const { id } = useParams<{ id: string }>();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const commentsError = useSelector(getArticleCommentsError);

  if (!id) {
    return (
      <div
        className={getClassNames(styles.articleDetailsPage, {}, [className])}
      >
        {t('Article is not found')}
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div
        className={getClassNames(styles.articleDetailsPage, {}, [className])}
      >
        <ArticleDetails id={id} />
        <Text
          className={styles.articleCommentListTitle}
          title={t('Comments')}
        />
        <CommentList
          error={commentsError}
          isLoading={commentsIsLoading}
          comments={comments}
          className={styles.articleCommentList}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
