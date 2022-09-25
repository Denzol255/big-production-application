import { routeConfig } from '@/shared/config/routerConfig/RouteConfig';
import { MainLoader } from '@/shared/ui';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <Suspense fallback={<MainLoader />}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={
              <Suspense fallback={<MainLoader />}>
                <div className='page-wrapper'>{element}</div>
              </Suspense>
            }
          />
        ))}
      </Routes>
    </Suspense>
  );
};
