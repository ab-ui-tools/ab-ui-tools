import type { DataResponse } from '@/shared/common/types.ts';

import { request } from '@/shared/services/RequestService.ts';
import { ApiUrls, Methods } from '@/shared/common/constants.ts';

import type { IUser } from '../common/types.ts';

export const getUserService = (): Promise<DataResponse<IUser>> => request(Methods.GET, `/${ApiUrls.user}`);
