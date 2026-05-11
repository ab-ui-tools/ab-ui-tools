import { useEffect } from 'react';

import Example from '@/modules/user/components/Example/Example.tsx';

import useUser from '../hooks/useUser.tsx';

const User = () => {
  const { isUserLoading, getUser } = useUser();

  useEffect(() => {
    getUser();
  }, []);
  console.log(isUserLoading);
  return <Example />;
};

export default User;
