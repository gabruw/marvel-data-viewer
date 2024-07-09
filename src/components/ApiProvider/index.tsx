import { ReactElement } from "react";
import { SWRConfig } from "swr";

import { useApiUrlParams } from "_hooks/useApiUrlParams";
import { useAxios } from "_hooks/useAxios";

export type ApiProviderProps = {
	children: ReactElement;
};

export const ApiProvider = ({ children }: ApiProviderProps): ReactElement<ApiProviderProps> => {
	const axiosClient = useAxios();
	const { buildParams } = useApiUrlParams();

	return (
		<SWRConfig
			value={{
				fetcher: (path) => axiosClient.get(path, { params: buildParams() }).then((res) => res.data),
			}}
		>
			{children}
		</SWRConfig>
	);
};
