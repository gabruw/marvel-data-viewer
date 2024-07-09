import { cx } from "classix";
import { motion } from "framer-motion";

const DOTS = [
	{ color: "bg-orange-600", delay: 0 },
	{ color: "bg-blue-600", delay: 0.2 },
	{ color: "bg-orange-600", delay: 0.4 },
	{ color: "bg-blue-600", delay: 0.6 },
];

export const Backdrop = () => {
	return (
		<div className="fixed inset-0 z-50 backdrop-blur-sm">
			<div className="flex gap-2 justify-center items-center h-full">
				{DOTS.map(({ color, delay }, index) => (
					<motion.div
						key={color + index}
						className={cx("inline-block size-7 rounded-full", color)}
						animate="end"
						initial="start"
						transition={{
							delay,
							duration: 1,
							repeat: Infinity,
							ease: "easeInOut",
							repeatType: "reverse",
						}}
						variants={{
							start: {
								scale: 0.2,
								rotate: 0,
							},
							end: {
								scale: 1,
								rotate: 360,
							},
						}}
					/>
				))}
			</div>
		</div>
	);
};
