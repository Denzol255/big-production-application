import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';

const AdminPanelPage = memo(() => {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <div>{t('Admin page')}</div>
    </PageWrapper>
  );
});

export default AdminPanelPage;
