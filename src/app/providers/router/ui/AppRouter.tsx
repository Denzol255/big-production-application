import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routerConfig/RouteConfig';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter = () => {
  return (
    <Routes>
      {Object.values(routeConfig).map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<PageLoader />}>
              <div className='page-wrapper'>{element}</div>
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
};
