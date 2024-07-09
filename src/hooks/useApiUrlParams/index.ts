import md5 from "blueimp-md5";

export type UseApiUrlParamsReturn = {
	buildParams: () => URLSearchParams;
};

export const useApiUrlParams = (): UseApiUrlParamsReturn => {
	const buildParams = (): URLSearchParams => {
		const timestamp = Date.now();
		const hash = md5(timestamp + import.meta.env.VITE_API_PRIVATE_KEY + import.meta.env.VITE_API_PUBLIC_KEY);

		const params = new URLSearchParams({
			hash,
			ts: timestamp.toString(),
			apikey: import.meta.env.VITE_API_PUBLIC_KEY,
		});

		return params;
	};

	return {
		buildParams,
	};
};
