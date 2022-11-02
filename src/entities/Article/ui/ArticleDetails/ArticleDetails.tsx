import { fetchArticleByID } from 'entities/Article/model/services/fetchArticleByID/fetchArticleByID';
import { FC, memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { useAppDispatch } from 'shared/lib/getClassNames/useAppDispatch/useAppDispatch';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import styles from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const initialsReducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails: FC<ArticleDetailsProps> = memo((props) => {
  const { t } = useTranslation();
  const { className, id } = props;
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const data = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);
  let content;

  useEffect(() => {
    dispatch(fetchArticleByID(id));
  }, [dispatch, id]);

  if (isLoading) {
    content = (
      <>
        <Skeleton
          className={styles.avatar}
          width={200}
          height={200}
          border={'50%'}
        />
        <Skeleton className={styles.title} width={300} height={32} />
        <Skeleton className={styles.skeletonBlock} width={600} height={24} />
        <Skeleton className={styles.skeletonBlock} width='100%' height={200} />
        <Skeleton className={styles.skeletonBlock} width='100%' height={200} />
      </>
    );
  } else if (error) {
    content = (
      <Text
        theme={TextTheme.ERROR}
        title={'An error occurred while loading the article'}
        text={'Try to reload the page'}
        align={TextAlign.CENTER}
      />
    );
  } else {
    content = 'article details213123';
  }

  return (
    <DynamicModuleLoader reducers={initialsReducers} removeAfterUnmount>
      <div className={getClassNames(styles.articleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
