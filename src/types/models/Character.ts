import { NestedInfo } from "_types/response/NestedInfo";

import { CharacterUrls } from "./CharacterUrls";
import { Comic } from "./Comic";
import { Event } from "./Event";
import { Serie } from "./Serie";
import { Story } from "./Story";
import { Thumbnail } from "./Thumbnail";

export type Character = {
	id: number;
	name: string;
	comics: Comic;
	events: Event;
	series: Serie;
	modified: Date;
	resourceURI: string;
	description?: string;
	thumbnail: Thumbnail;
	urls: CharacterUrls[];
	stories: NestedInfo<Story[]>;
};
