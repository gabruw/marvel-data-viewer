import { useEffect } from "react";

import { useFetch, UseFetchReturn } from "_hooks/useFetch";
import { useCharactersPaginationStore } from "_pages/home/storages/charactersPagination";
import { Character } from "_types/models/Character";
import { Pagination } from "_types/response/Pagination";

export type UseFetchCharactersReturn = UseFetchReturn<Pagination<Character[]>>;

export const useFetchCharacters = (): UseFetchCharactersReturn => {
	const { limit, offset, updateTotal } = useCharactersPaginationStore();

	const [characters, isCharactersLoading, charactersErrors] = useFetch<Pagination<Character[]>>(
		`/characters?limit=${limit}&offset=${offset}`,
	);

	useEffect(() => {
		if (characters) {
			updateTotal(characters.total);
		}
	}, [characters, updateTotal]);

	return [characters, isCharactersLoading, charactersErrors];
};
