import { Navigate, Route, Routes } from 'react-router-dom';

import { AppPaths } from '@/shared/common/constants.ts';

import User from '../containers/User.tsx';
// import NotFound from '../../../components/NotFound/NotFound.tsx';

const UserRoutes = () => {
  return (
    <Routes>
      <Route index element={<Navigate to={AppPaths.user} />} />
      <Route path={AppPaths.user}>
        <Route index element={<User />} />
        <Route path={`/${AppPaths.user}/:${AppPaths.id}`} element={<User />} />
        {/*<Route path="*" element={<NotFound />} />*/}
      </Route>
      {/*<Route path="*" element={<NotFound />} />*/}
      {/*<Route path="notFound" element={<NotFound />} />*/}
    </Routes>
  );
};

export default UserRoutes;
