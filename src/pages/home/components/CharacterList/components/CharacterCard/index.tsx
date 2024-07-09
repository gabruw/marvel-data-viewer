import { Button, Card, CardFooter, Image, Skeleton, Tooltip } from "@nextui-org/react";
import { motion } from "framer-motion";
import { ReactElement } from "react";

import { useCharacterDetailsStore } from "_pages/home/storages/characterDetails";
import { Character } from "_types/models/Character";

export type CharacterCardProps = {
	isLoading?: boolean;
	character?: Character;
};

export const CharacterCard = ({ character, isLoading }: CharacterCardProps): ReactElement<CharacterCardProps> => {
	const { updateCharacter } = useCharacterDetailsStore();

	const handleOpenDetails = (): void => {
		updateCharacter(character);
	};

	return (
		<motion.div
			className="w-[250px] h-[350px]"
			whileTap={{ scale: 0.9 }}
			whileHover={{ scale: 1.1 }}
			transition={{
				duration: 0.2,
				ease: "easeInOut",
				repeatType: "reverse",
			}}
		>
			<Card className="w-[250px] h-[350px]" isPressable isFooterBlurred onPress={handleOpenDetails}>
				<Image
					className="w-full h-full object-cover"
					removeWrapper
					isLoading={isLoading}
					alt={`${character?.name} character's image`}
					src={`${character?.thumbnail.path}.${character?.thumbnail.extension}`}
				/>

				<CardFooter className="z-10 absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 h-[75px] justify-between">
					<Tooltip
						showArrow
						isDisabled={isLoading}
						content={
							<div className="px-1 py-2 max-w-[200px]">
								<div className="text-small font-bold">{character?.name}</div>
								<div className="text-tiny text-wrap">{character?.description}</div>
							</div>
						}
					>
						<div className="flex flex-col gap-1 w-[150px] text-start">
							<Skeleton isLoaded={!isLoading} className="rounded-full">
								<p className="text-black font-bold text-xl truncate">{character?.name}</p>
							</Skeleton>

							<Skeleton isLoaded={!isLoading} className="rounded-full">
								<p className="text-black font-medium text-tiny truncate">{character?.description}</p>
							</Skeleton>
						</div>
					</Tooltip>

					<Skeleton isLoaded={!isLoading} className="w-3/8 rounded-full">
						<Button className="text-tiny" size="sm" radius="full" color="primary">
							Details
						</Button>
					</Skeleton>
				</CardFooter>
			</Card>
		</motion.div>
	);
};
