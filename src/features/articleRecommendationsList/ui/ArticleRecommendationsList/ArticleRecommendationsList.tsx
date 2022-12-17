import { ArticleList, ArticleView } from 'entities/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { Loader } from 'shared/ui/Loader/Loader';
import { VStack } from 'shared/ui/Stack';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useArticlesRecommedationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo(
  (props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const {
      isLoading,
      error,
      data: recommendationsArticles,
    } = useArticlesRecommedationsList(4);

    if (isLoading) {
      return (
        <VStack
          align='center'
          justify='center'
          className={getClassNames('', {}, [className])}
        >
          <Loader />
        </VStack>
      );
    }

    if (error) {
      return (
        <VStack
          align='center'
          justify='center'
          className={getClassNames('', {}, [className])}
        >
          <Text
            title={t('Error while getting data from server')}
            text={t('Try to reload the page')}
          />
        </VStack>
      );
    }

    return (
      <VStack
        gap='8'
        align='start'
        className={getClassNames('', {}, [className])}
      >
        <Text size={TextSize.LARGE} title={t('Recommendations')} />
        <ArticleList
          target='_blank'
          view={ArticleView.GRID}
          articles={recommendationsArticles || []}
        />
      </VStack>
    );
  }
);
