import { useTheme } from '@/app/providers/ThemeProvider';
import { getClassNames } from '@/shared/lib/getClassNames';
import { MainLoader } from '@/shared/ui';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { Suspense } from 'react';
import { AppRouter } from './providers/router';
import './styles/index.scss';

const App = () => {
  const { theme } = useTheme();

  return (
    <div
      className={getClassNames('app', { hovered: true, selected: true }, [
        theme,
      ])}
    >
      <Suspense fallback={<MainLoader />}>
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;