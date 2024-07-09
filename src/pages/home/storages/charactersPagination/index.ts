import { create } from "zustand";

import { CharactersPaginationActions, CharactersPaginationState } from "./types";

const initialState: CharactersPaginationState = {
	total: 0,
	limit: 20,
	offset: 0,
};

export const useCharactersPaginationStore = create<CharactersPaginationState & CharactersPaginationActions>((set) => ({
	...initialState,
	updateTotal: (total) => set({ total }),
	updateLimit: (limit) => set({ limit }),
	updateOffset: (offset) => set({ offset }),
}));
