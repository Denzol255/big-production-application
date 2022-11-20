/* eslint-disable jsx-a11y/click-events-have-key-events */
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import EyeIcon from 'shared/assets/icons/eyeIcon.svg';
import { RoutePath } from 'shared/config/routerConfig/RouteConfig';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button } from 'shared/ui/Button/Button';
import { Card } from 'shared/ui/Card/Card';
import { Icon } from 'shared/ui/Icon/Icon';
import { Text } from 'shared/ui/Text/Text';
import {
  Article,
  ArticleBlockType,
  ArticleTextBlock,
  ArticleView,
} from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import styles from './ArticleListItem.module.scss';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}

const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className, view, article } = props;
  const { t } = useTranslation();

  const views = (
    <div className={styles.viewsWrapper}>
      <Text className={styles.views} text={String(article.views)} />
      <Icon Svg={EyeIcon} className={styles.eyeIcon} />
    </div>
  );

  const types = <Text className={styles.types} text={article.type.join(',')} />;
  const navigate = useNavigate();
  const handleOpenArticle = useCallback(() => {
    navigate(RoutePath.articles_details + article.id);
  }, [article.id, navigate]);

  if (view === ArticleView.LIST) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT
    ) as ArticleTextBlock;
    return (
      <div
        className={getClassNames(styles.articleListItem, {}, [
          className,
          styles[view],
        ])}
      >
        <Card className={styles.listCard} onClick={handleOpenArticle}>
          <div className={styles.articleTop}>
            <div className={styles.imageUsernameBlock}>
              <Avatar
                size={30}
                src={article.user.avatar}
                className={styles.userAvatar}
              />
              <Text text={article.user.username} />
            </div>
            <Text text={article.createdAt} className={styles.date} />
          </div>
          <Text title={article.title} className={styles.listTitle} />
          {types}
          <img src={article.img} className={styles.img} alt={article.title} />
          {textBlock && (
            <ArticleTextBlockComponent
              block={textBlock}
              className={styles.textBlock}
            />
          )}
          <div className={styles.footer}>
            <Button onClick={handleOpenArticle}>{t('Read more')}...</Button>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div
      className={getClassNames(styles.articleListItem, {}, [
        className,
        styles[view],
      ])}
    >
      <Card className={styles.gridCard} onClick={handleOpenArticle}>
        <div className={styles.imageWrapper}>
          <img src={article.img} className={styles.img} alt={article.title} />
          <Text text={article.createdAt} className={styles.date} />
        </div>
        <div className={styles.infoWrapper}>
          {types}
          {views}
        </div>
        <Text text={article.title} className={styles.title} />
      </Card>
    </div>
  );
});

export default ArticleListItem;
