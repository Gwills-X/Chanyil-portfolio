import { motion } from "framer-motion";
import {
	FaMicrophone,
	FaMusic,
	FaUsers,
	FaBook,
	FaHandsHelping,
	FaAward,
} from "react-icons/fa";

const Highlights = () => {
	const highlights = [
		{
			icon: <FaMusic className='text-4xl text-black' />,
			text: "Ministering Through Worship in Sound",
		},
		{
			icon: <FaMicrophone className='text-4xl text-black' />,
			text: "Global Worship Leader & Speaker",
		},
		{
			icon: <FaUsers className='text-4xl text-black' />,
			text: "Founder of God’s Chayil Daughters Community",
		},
		{
			icon: <FaBook className='text-4xl text-black' />,
			text: "Leadership Formation & Faith-Based Discipleship",
		},
		{
			icon: <FaHandsHelping className='text-4xl text-black' />,
			text: "Empowering Women Through Mentorship ",
		},
		{
			icon: <FaAward className='text-4xl text-black' />,
			text: "Best Woman Leader In Ministry - Women Worship Awards 2024 ",
		},
	];

	return (
		<section className='py-20 px-6 bg-gray-50'>
			<div className='max-w-6xl mx-auto text-center'>
				<motion.h2
					className='text-3xl md:text-4xl font-serif font-semibold mb-12'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}>
					Highlights & Credentials
				</motion.h2>

				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
					{highlights.map((item, index) => (
						<motion.div
							key={index}
							className='flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-300'
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.2, duration: 0.6 }}
							viewport={{ once: true }}>
							{item.icon}
							<p className='mt-4 text-gray-700 font-medium'>{item.text}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Highlights;
