import { memo } from 'react';
import GridIcon from 'shared/assets/icons/gridIcon.svg';
import ListIcon from 'shared/assets/icons/listIcon.svg';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleView } from '../../model/const/articleConst';
import styles from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  { view: ArticleView.GRID, icon: GridIcon },
  { view: ArticleView.LIST, icon: ListIcon },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className, onViewClick, view } = props;

  const handleClickView = (view: ArticleView) => () => {
    onViewClick?.(view);
  };

  return (
    <div className={getClassNames(styles.articleViewSelector, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          theme={ButtonTheme.CLEAR}
          key={viewType.view}
          onClick={handleClickView(viewType.view)}
          className={styles.btn}
        >
          <Icon
            Svg={viewType.icon}
            className={`${styles.icon} ${
              viewType.view == view && styles.active
            }`}
          />
        </Button>
      ))}
    </div>
  );
});
