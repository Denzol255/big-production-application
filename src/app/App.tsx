import { userActions } from 'entities/User';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { USER_LOCAL_STORAGE_KEY } from 'shared/constants/localstorage';
import { getClassNames } from 'shared/lib/getClassNames/getClassNames';
import { Loader } from 'shared/ui/Loader/Loader';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/router';

const App = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem(USER_LOCAL_STORAGE_KEY));
  useEffect(() => {
    dispatch(userActions.initAuthData(user));
  }, [dispatch, user]);

  return (
    <div
      className={getClassNames('app', { hovered: true, selected: true }, [])}
    >
      <Suspense fallback={<Loader />}>
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
