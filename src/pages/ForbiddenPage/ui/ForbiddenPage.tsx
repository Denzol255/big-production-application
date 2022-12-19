import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routerConfig/RouteConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Text, TextAlign, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import styles from './ForbiddenPage.module.scss';

const ForbiddenPage = memo(() => {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <Text
        align={TextAlign.CENTER}
        size={TextSize.LARGE}
        theme={TextTheme.ERROR}
        title={t('You are not allowed to access this page')}
      />
      <div className={styles.backToMainLinkWrapper}>
        <AppLink className={styles.backToMainLink} to={RoutePath.main}>
          {t('Back to main page')}
        </AppLink>
      </div>
    </PageWrapper>
  );
});

export default ForbiddenPage;
