import type { Methods } from '@/shared/common/constants.ts';

import axios, { type AxiosRequestConfig } from 'axios';

import { API_URL } from '@/shared/common/constants.ts';

type TRequestConfig = Omit<AxiosRequestConfig, 'url' | 'method'>;

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export const request = <T>(method: Methods, url: string, configs?: TRequestConfig): Promise<{ data: T }> =>
  axiosInstance({ method, url, ...configs });
