import { Pagination } from "_types/response/Pagination";

export type CharactersPaginationState = Pick<Pagination, "limit" | "offset" | "total">;

export type CharactersPaginationActions = {
	updateTotal: (total: CharactersPaginationState["total"]) => void;
	updateLimit: (limit: CharactersPaginationState["limit"]) => void;
	updateOffset: (offset: CharactersPaginationState["offset"]) => void;
};
