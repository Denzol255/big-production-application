import { useTheme } from 'app/providers/ThemeProvider';
import { Suspense } from 'react';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { MainLoader } from 'shared/ui';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/router';

const App = () => {
  return (
    <div
      className={getClassNames('app', { hovered: true, selected: true }, [])}
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
