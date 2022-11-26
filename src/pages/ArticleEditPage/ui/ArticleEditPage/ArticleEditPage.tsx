import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import styles from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
  className?: string;
}
// TODO
const ArticleEditPage = memo((props: ArticleEditPageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { id } = useParams();
  return (
    <PageWrapper className={getClassNames(styles.wrapper, {}, [className])}>
      {id ? 'ARTICLE EDIT PAGE' : 'ARTICLE CREATE PAGE'}
    </PageWrapper>
  );
});

export default ArticleEditPage;
