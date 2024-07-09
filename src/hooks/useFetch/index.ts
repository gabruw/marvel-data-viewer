import useSWR, { Key } from "swr";

import { BaseResponse } from "_types/response/BaseResponse";
import { SuccessResponse } from "_types/response/SuccessResponse";

export type UseFetchReturn<Data, Error extends BaseResponse = BaseResponse> = [
	Data | undefined,
	boolean,
	Error | undefined,
];

export const useFetch = <Data, Error extends BaseResponse = BaseResponse>(path: Key): UseFetchReturn<Data, Error> => {
	const { data, error, isLoading } = useSWR<SuccessResponse<Data>, Error>(path);
	return [data?.data, isLoading, error];
};
