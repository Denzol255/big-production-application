/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ErrorBoundary } from 'app/providers/ErrorProvider';
import { StoreProvider } from 'app/providers/StoreProvider';
import 'app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import { ThemeProvider } from './app/providers/ThemeProvider';
import './shared/config/i18n/i18n';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>
);
