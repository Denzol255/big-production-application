import { getUserAuthData, getUserRoles } from 'entities/User';
import { UserRole } from 'entities/User/model/types/userSchema';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routerConfig/RouteConfig';

interface RequireAuthProps {
  children: JSX.Element;
  roles?: UserRole[];
}

export function RequireAuth({ children, roles }: RequireAuthProps) {
  const authData = useSelector(getUserAuthData);
  const location = useLocation();
  const userRoles = useSelector(getUserRoles);
  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true;
    }

    return roles?.some((requiredRole) => {
      return userRoles?.includes(requiredRole);
    });
  }, [roles, userRoles]);

  if (!authData) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  if (!hasRequiredRoles) {
    return (
      <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />
    );
  }

  return children;
}
