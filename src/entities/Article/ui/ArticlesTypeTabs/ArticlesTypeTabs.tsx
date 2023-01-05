import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from '../../model/const/articleConst';

interface ArticlesTypeTabsProps {
  className?: string;
  articlesType: ArticleType;
  handleTabClick: (tab: TabItem) => void;
}

export const ArticlesTypeTabs = memo((props: ArticlesTypeTabsProps) => {
  const { className, articlesType, handleTabClick } = props;
  const { t } = useTranslation();

  const typesTabs = useMemo<TabItem[]>(
    () => [
      {
        value: ArticleType.ECONOMIC,
        content: t('Economic'),
      },
      {
        value: ArticleType.IT,
        content: t('IT'),
      },
      {
        value: ArticleType.ALL,
        content: t('All'),
      },
      {
        value: ArticleType.MEDICINE,
        content: t('Medicine'),
      },
      {
        value: ArticleType.SCIENCE,
        content: t('Science'),
      },
    ],
    [t]
  );

  return (
    <div className={getClassNames('', {}, [className])}>
      <Tabs tabs={typesTabs} value={articlesType} onTabClick={handleTabClick} />
    </div>
  );
});
