import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MAX_LENGTH = 180;

const TestimonialCard = ({ t }) => {
	const [open, setOpen] = useState(false);
	const isLong = t.text.length > MAX_LENGTH;

	return (
		<motion.div
			whileHover={{ y: -4 }}
			className='bg-transparent backdrop-blur
                 p-6 rounded-2xl shadow-xl border border-black
                 flex flex-col h-full'>
			{/* Text */}
			<div className='relative overflow-hidden '>
				<AnimatePresence initial={false}>
					<motion.p
						key={open ? "open" : "closed"}
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.35, ease: "easeInOut" }}
						className='text-black  text-sm leading-relaxed'>
						{open || !isLong ? t.text : `${t.text.slice(0, MAX_LENGTH)}...`}
					</motion.p>
				</AnimatePresence>
			</div>

			{/* Read more */}
			{isLong && (
				<button
					onClick={() => setOpen(!open)}
					className='mt-3 text-indigo-600 
                     font-medium text-sm self-start hover:underline'>
					{open ? "Show less" : "Read more"}
				</button>
			)}

			{/* Footer */}
			<div className='mt-auto pt-5 border-t border-gray-200/60 dark:border-gray-700'>
				<h4 className='font-semibold text-black mb-1'>{t.name}</h4>
				<span className='text-xs text-gray-950'>{t.role}</span>
			</div>
		</motion.div>
	);
};

export default TestimonialCard;
