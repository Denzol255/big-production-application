import { ArticleDetails, ArticleList, ArticleView } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { AddCommentForm } from 'features/addCommentForm';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import {
  getArticleCommentsError,
  getArticleCommentsIsLoading,
} from '../../../model/selectors/comments';
import {
  getArticleRecommendationsError,
  getArticleRecommendationsIsLoading,
} from '../../../model/selectors/recommendations';
import { addCommentForArticle } from '../../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { fetchArticleRecommendations } from '../../../model/services/fetchRecommendations/fetchRecommendations';
import { articleDetailsPageReducer } from '../../../model/slices';
import { getArticleComments } from '../../../model/slices/articleDetailsCommentsSlice';
import { getArticleRecommendations } from '../../../model/slices/articleDetailsPageRecommendationsSlice';
import ArticleDetailsPageHeader from '../../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const { t } = useTranslation();
  const { className } = props;
  const { id } = useParams<{ id: string }>();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const commentsError = useSelector(getArticleCommentsError);
  const recommendationsIsLoading = useSelector(
    getArticleRecommendationsIsLoading
  );
  const recommendationsError = useSelector(getArticleRecommendationsError);
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const dispatch = useAppDispatch();

  const handleSendComment = useCallback(
    (value: string) => {
      dispatch(addCommentForArticle(value));
    },
    [dispatch]
  );

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecommendations());
  });

  if (!id) {
    return (
      <PageWrapper
        className={getClassNames(styles.articleDetailsPage, {}, [className])}
      >
        {t('Article is not found')}
      </PageWrapper>
    );
  }

  console.log('recommendations', recommendations);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <PageWrapper
        className={getClassNames(styles.articleDetailsPage, {}, [className])}
      >
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <Text
          size={TextSize.LARGE}
          className={styles.articleCommentListTitle}
          title={t('Recommendations')}
        />
        <ArticleList
          target='_blank'
          view={ArticleView.GRID}
          articles={recommendations}
          isLoading={recommendationsIsLoading}
          className={styles.recommendations}
        />
        <Text
          size={TextSize.LARGE}
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
      </PageWrapper>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
