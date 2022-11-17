import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { AddCommentForm } from 'features/addCommentForm';
import {
  getArticleCommentsError,
  getArticleCommentsIsLoading,
} from 'pages/ArticleDetailsPage/model/selectors/comments';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RoutePath } from 'shared/config/routerConfig/RouteConfig';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
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
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSendComment = useCallback(
    (value: string) => {
      dispatch(addCommentForArticle(value));
    },
    [dispatch]
  );

  const handleBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

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
        <Button theme={ButtonTheme.OUTLINE} onClick={handleBackToList}>
          {t('Back to list')}
        </Button>
        <ArticleDetails id={id} />
        <Text
          className={styles.articleCommentListTitle}
          title={t('Comments')}
        />
        <AddCommentForm handleSendComment={handleSendComment} />
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
