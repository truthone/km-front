import { AxiosPromise } from 'axios';

import { customKmAxios } from 'api/customKmAxios';
import {
  ArchiveInfo,
  ArchiveRequest,
  GeneralResponseArchiveResponse,
  PickResponse,
} from 'constants/type/api';

export function getArchivesById({
  id,
  sortType,
}: {
  id: number;
  sortType: 'MODIFY_DESC' | 'LIKE_DESC';
}) {
  return customKmAxios({
    url: `/api/items/${id}/archives`,
    method: 'GET',
    params: {
      sortType,
    },
  }) as AxiosPromise<GeneralResponseArchiveResponse>;
}

export function postArchivesById({ request }: { request: ArchiveRequest }) {
  return customKmAxios({
    url: `/api/archives`,
    method: 'POST',
    data: request,
  }) as AxiosPromise<ArchiveInfo>;
}

export function putArchivesLike({ id, body }: { id: number; body: boolean }) {
  return customKmAxios({
    url: `/api/archives/${id}/like?status=${body}`,
    method: 'PUT',
  }) as AxiosPromise<PickResponse>;
}
