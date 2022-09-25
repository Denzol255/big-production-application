import { useTheme } from '@/app/providers/ThemeProvider';
import { getClassNames } from '@/shared/lib/getClassNames';
import { Navbar } from '@/widgets/Navbar';
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
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
