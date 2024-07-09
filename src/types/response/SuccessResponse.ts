import { BaseResponse } from "./BaseResponse";

export type SuccessResponse<Data = object> = {
	data: Data;
	etag: string;
	copyright: string;
	attributionText: string;
	attributionHTML: string;
} & BaseResponse;
