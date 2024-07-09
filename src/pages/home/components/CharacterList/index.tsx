import { ReactElement, useMemo } from "react";

import { useCreateRandomKey } from "_hooks/useCreateRandomKey";
import { useFetchCharacters } from "_pages/home/api/useFetchCharacters";
import { CharacterDetailsModal } from "_pages/home/components/CharacterDetailsModal";
import { useCharactersPaginationStore } from "_pages/home/storages/charactersPagination";
import { Character } from "_types/models/Character";

import { CharacterCard } from "./components/CharacterCard";
import { CharacterListFilters } from "./components/CharacterListFilters";
import { CharacterPagination } from "./components/CharacterPagination";

export const CharacterList = (): ReactElement => {
	const { limit } = useCharactersPaginationStore();
	const { createRandomKey } = useCreateRandomKey();

	const [characters, isCharactersLoading] = useFetchCharacters();

	const charactersList = useMemo(() => {
		const charactersLoadingList = Array.from<Character>({ length: limit });
		const list = isCharactersLoading ? charactersLoadingList : characters?.results;

		return list ?? [];
	}, [limit, characters, isCharactersLoading]);

	return (
		<>
			<div className="flex justify-center py-10">
				<div className="grid gap-6 2xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
					{charactersList.map((character, index) => (
						<CharacterCard key={createRandomKey(index)} character={character} isLoading={isCharactersLoading} />
					))}
				</div>
			</div>

			<CharacterPagination />
		</>
	);
};
