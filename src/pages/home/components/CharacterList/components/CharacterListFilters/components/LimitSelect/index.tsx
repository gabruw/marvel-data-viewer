import { Select, Selection, SelectItem } from "@nextui-org/react";
import { ReactElement } from "react";

import { useCharactersPaginationStore } from "_pages/home/storages/charactersPagination";

const LIMIT_ITEMS = Array.from({ length: 10 }).map((_, index) => String(10 * (index + 1)));

export const LimitSelect = (): ReactElement => {
	const { limit, updateLimit } = useCharactersPaginationStore();

	const handleLimitChange = (selectedOption: Selection) => {
		const selections = Array.from(selectedOption);
		updateLimit(+selections[0]);
	};

	return (
		<Select label="Characters per page" selectedKeys={[limit.toString()]} onSelectionChange={handleLimitChange}>
			{LIMIT_ITEMS.map((option) => (
				<SelectItem key={option} textValue={option}>
					{option}
				</SelectItem>
			))}
		</Select>
	);
};
