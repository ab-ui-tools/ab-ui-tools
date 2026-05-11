import { Outlet, Route, Routes as BaseRoutes } from 'react-router-dom';

import UserRoutes from '../modules/user/routes/UserRoutes.tsx';

const Routes = () => {
  return (
    <BaseRoutes>
      <Route
        element={
          <>
            <Outlet />
          </>
        }
      >
        <Route path={`/*`} element={<UserRoutes />} />
      </Route>
    </BaseRoutes>
  );
};

export default Routes;
