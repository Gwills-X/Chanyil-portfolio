import { motion } from "framer-motion";
import {
	FaPrayingHands,
	FaBullseye,
	FaHeart,
	FaUsers,
	FaGlobeAmericas,
} from "react-icons/fa";

const coreValues = [
	{ title: "Faith & Obedience", icon: <FaPrayingHands /> },
	{ title: "Identity & Purpose", icon: <FaBullseye /> },
	{ title: "Integrity & Stewardship", icon: <FaHeart /> },
	{ title: "Leadership with Compassion", icon: <FaUsers /> },
	{ title: "Generational Impact", icon: <FaGlobeAmericas /> },
];
import mentorship3 from "../images/a5edebd0-6cd5-40c0-a285-c4e8effa862d.jpg";
const Mission = () => {
	return (
		<main className='bg-white'>
			{/* ================= HEADER ================= */}
			<section className='py-24 px-6 bg-gradient-to-r from-gray-500 via-gray-600 to-gray-500 relative h-dvh flex flex-col justify-center items-center'>
				{/* Optional subtle header image */}
				<img
					src={mentorship3} // Optional background image of women leading, praying, or abstract faith illustration
					alt='Mission header'
					className='absolute inset-0 w-full h-full object-cover opacity-50'
				/>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className='max-w-4xl mx-auto text-center relative z-10'>
					<h1 className='text-4xl md:text-5xl text-white font-serif font-semibold mb-4'>
						Mission, Vision & Values
					</h1>
					<div className='w-24 h-1 bg-white mx-auto mb-6 rounded-full'></div>
					<p className='text-lg text-white leading-relaxed'>
						The foundation guiding the work, leadership, and movement.
					</p>
				</motion.div>
			</section>

			{/* ================= MISSION ================= */}
			<section className='py-20 px-6'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className='max-w-4xl mx-auto text-center space-y-6'>
					<h2 className='text-3xl font-serif mb-2'>Our Mission</h2>
					<p className='text-xl text-gray-700 leading-relaxed'>
						To raise faith-filled, purpose-driven women who are grounded in
						identity, obedience, and spiritual maturity — equipped to lead and
						serve with impact.
					</p>
				</motion.div>
			</section>

			{/* ================= VISION ================= */}
			<section className='py-20 px-6 bg-gray-50'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className='max-w-4xl mx-auto text-center space-y-6'>
					<h2 className='text-3xl font-serif mb-2'>Our Vision</h2>
					<p className='text-xl text-gray-700 leading-relaxed'>
						A global movement of women walking confidently in their God-given
						calling, influencing families, communities, and nations through
						faith-centred leadership.
					</p>
				</motion.div>
			</section>

			{/* ================= CORE VALUES ================= */}
			<section className='py-24 px-6'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className='max-w-6xl mx-auto'>
					<h2 className='text-3xl font-serif mb-12 text-center'>
						Our Core Values
					</h2>

					<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
						{coreValues.map((value, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}
								viewport={{ once: true }}
								className='border rounded-xl p-6 text-center text-gray-700 hover:shadow-lg transition'>
								{/* Optional icon or image */}
								<div className='text-4xl mb-4 text-gray-700 flex justify-center'>
									{value.icon}
								</div>
								<h4 className='font-semibold text-lg'>{value.title}</h4>
							</motion.div>
						))}
					</div>
				</motion.div>
			</section>
		</main>
	);
};

export default Mission;
