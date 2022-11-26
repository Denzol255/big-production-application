import { getArticleDetailsData } from 'entities/Article';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routerConfig/RouteConfig';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { getCanEditArticle } from '../../model/selectors/article';
import styles from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

const ArticleDetailsPageHeader = memo(
  (props: ArticleDetailsPageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);
    const handleBackToList = useCallback(() => {
      navigate(RoutePath.articles);
    }, [navigate]);
    const handleEditArticle = useCallback(() => {
      navigate(`${RoutePath.articles_details}${article?.id}/edit`);
    }, [article?.id, navigate]);

    return (
      <div className={getClassNames(styles.wrapper, {}, [className])}>
        <Button theme={ButtonTheme.OUTLINE} onClick={handleBackToList}>
          {t('Back to list')}
        </Button>
        {canEdit && (
          <Button
            className={styles.editBtn}
            theme={ButtonTheme.OUTLINE}
            onClick={handleEditArticle}
          >
            {t('Edit')}
          </Button>
        )}
      </div>
    );
  }
);

export default ArticleDetailsPageHeader;
