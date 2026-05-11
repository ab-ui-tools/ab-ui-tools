import type { IUser } from '@/modules/user/common/types.ts';

import { useState } from 'react';

import { getUserService } from '@/modules/user/services/UserServices.ts';

// this is simple example of requests and store response data,
// if you decide to use libs for shared stores you can change this part of architecture

const useUser = () => {
  const [isUserLoading, setIsUserLoading] = useState(false);
  const [user, setUser] = useState<Partial<IUser>>({});

  const getUser = () => {
    setIsUserLoading(true);
    getUserService()
      .then(({ data }) => {
        setUser(data);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => setIsUserLoading(false));
  };

  return { user, isUserLoading, getUser };
};

export default useUser;
