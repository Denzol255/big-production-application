import { ArticlesSortField } from 'entities/Article/model/types/article';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { SortOrder } from 'shared/types/sort';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import styles from './ArticlesSortSelector.module.scss';

interface ArticlesSortSelectorProps {
  className?: string;
  sort: ArticlesSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (sort: ArticlesSortField) => void;
}

export const ArticlesSortSelector = memo((props: ArticlesSortSelectorProps) => {
  const { className, onChangeOrder, onChangeSort, order, sort } = props;
  const { t } = useTranslation();

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      {
        value: 'asc',
        text: t('Ascending'),
      },
      {
        value: 'desc',
        text: t('Descending'),
      },
    ],
    [t]
  );

  const sortFieldOptions = useMemo<SelectOption<ArticlesSortField>[]>(
    () => [
      {
        value: ArticlesSortField.CREATED,
        text: t('Creation date'),
      },
      {
        value: ArticlesSortField.TITLE,
        text: t('Title'),
      },
      {
        value: ArticlesSortField.VIEWS,
        text: t('Views'),
      },
    ],
    [t]
  );

  return (
    <div
      className={getClassNames(styles.articlesSortSelector, {}, [className])}
    >
      <Select
        className={styles.sort}
        label={t('Sort by')}
        options={sortFieldOptions}
        onChange={onChangeSort}
        value={sort}
      />
      <Select
        className={styles.order}
        label={t('By')}
        options={orderOptions}
        value={order}
        onChange={onChangeOrder}
      />
    </div>
  );
});
