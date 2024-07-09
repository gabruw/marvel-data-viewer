export type NestedItem = {
	name: string;
	resourceURI: string;
};

export type NestedInfo<Items = NestedItem[]> = {
	items: Items;
	returned: number;
	available: number;
	collectionURI: string;
};
