export type UseCreateRandomKey = {
	createRandomKey: (mutator: number | string) => string;
};

export const useCreateRandomKey = (): UseCreateRandomKey => {
	const createRandomKey = (mutator: number | string) => `${mutator}_${new Date().getTime()}`;

	return { createRandomKey };
};
