export type Pagination<Results = object[]> = {
	count: number;
	limit: number;
	offset: number;
	total: number;
	results: Results;
};
