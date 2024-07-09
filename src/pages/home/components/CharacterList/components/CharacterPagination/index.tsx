import { Pagination, Skeleton } from "@nextui-org/react";
import { ReactElement, useMemo, useState } from "react";

import { useCharactersPaginationStore } from "_pages/home/storages/charactersPagination";

export const CharacterPagination = (): ReactElement => {
	const [page, setPage] = useState(1);
	const { limit, offset, total, updateOffset } = useCharactersPaginationStore();

	const pagesCount = useMemo<number>(() => {
		const totalPages = total / limit;
		return total % limit ? Math.floor(totalPages) + 1 : totalPages;
	}, [total, limit]);

	const handleChangePage = (nextPage: number): void => {
		let newOffset = offset;

		if (page > nextPage) {
			newOffset -= limit;
		} else {
			newOffset += limit;
		}

		setPage(nextPage);
		updateOffset(Math.abs(newOffset));
	};

	return (
		<div className="flex justify-center">
			<Skeleton isLoaded={!!pagesCount} className="w-full max-w-[356px] rounded-lg">
				{!!pagesCount && (
					<Pagination showControls page={page} defaultValue={1} total={pagesCount} onChange={handleChangePage} />
				)}
			</Skeleton>
		</div>
	);
};
