import { ArticleDetails } from 'entities/Article';
import { ArticleRecommendationsList } from 'features/articleRecommendationsList';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import { fetchCommentsByArticleId } from '../../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { articleDetailsPageReducer } from '../../../model/slices';
import ArticleDetailsComments from '../../ArticleDetailsComments/ArticleDetailsComments';
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
  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
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

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <PageWrapper
        className={getClassNames(styles.articleDetailsPage, {}, [className])}
      >
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <ArticleRecommendationsList />
        <ArticleDetailsComments id={id} />
      </PageWrapper>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
