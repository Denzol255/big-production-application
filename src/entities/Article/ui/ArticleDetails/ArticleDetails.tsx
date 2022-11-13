import { fetchArticleByID } from 'entities/Article/model/services/fetchArticleByID/fetchArticleByID';
import {
  ArticleBlock,
  ArticleBlockType,
} from 'entities/Article/model/types/article';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import CalendarIcon from 'shared/assets/icons/calendarIcon.svg';
import EyeIcon from 'shared/assets/icons/eyeIcon.svg';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Icon } from 'shared/ui/Icon/Icon';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text, TextAlign, TextSize, TextTheme } from 'shared/ui/Text/Text';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleCodeImageComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
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
  const article = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);
  let content;

  const renderBlocks = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return (
          <ArticleCodeBlockComponent
            key={block.id}
            block={block}
            className={styles.block}
          />
        );
      case ArticleBlockType.TEXT:
        return (
          <ArticleTextBlockComponent
            key={block.id}
            block={block}
            className={styles.block}
          />
        );
      case ArticleBlockType.IMAGE:
        return (
          <ArticleImageBlockComponent
            key={block.id}
            block={block}
            className={styles.block}
          />
        );
      default:
        return null;
    }
  }, []);

  useInitialEffect(() => {
    dispatch(fetchArticleByID(id));
  });

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
        title={t('An error occurred while loading the article')}
        text={t('Try to reload the page')}
        align={TextAlign.CENTER}
      />
    );
  } else {
    content = (
      <>
        <div className={styles.avatarWrapper}>
          <Avatar size={200} src={article?.img} className={styles.avatar} />
        </div>
        <Text
          className={styles.title}
          title={article?.title}
          text={article?.subtitle}
          size={TextSize.LARGE}
        />
        <div className={styles.articleInfo}>
          <Icon Svg={EyeIcon} className={`${styles.icon} ${styles.eyeIcon}`} />
          <Text text={String(article?.views)} />
        </div>
        <div className={styles.articleInfo}>
          <Icon Svg={CalendarIcon} className={styles.icon} />
          <Text text={String(article?.createdAt)} />
        </div>
        {article?.blocks.map(renderBlocks)}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={initialsReducers} removeAfterUnmount>
      <div className={getClassNames(styles.articleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
