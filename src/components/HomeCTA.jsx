import { motion } from "framer-motion";

const HomeCTA = () => {
	return (
		<section className='py-24 px-6 bg-gray-950 text-white'>
			<motion.div
				className='max-w-4xl mx-auto text-center space-y-6'
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}>
				<motion.h2
					className='text-3xl md:text-4xl font-serif font-semibold'
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.6 }}>
					Experience Channelle’s Ministry & Leadership
				</motion.h2>

				<motion.p
					className='text-lg md:text-xl max-w-2xl mx-auto'
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4, duration: 0.6 }}>
					Whether you want to be inspired through worship and music, explore
					mentorship, or invite Channelle to speak, take the next step to engage
					with her ministry today.
				</motion.p>

				<motion.div
					className='flex flex-col sm:flex-row justify-center gap-6 mt-8'
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6, duration: 0.6 }}>
					<a
						href='/invite'
						className='px-10 py-4 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-transparent hover:text-white hover:border hover:border-white hover:-translate-y-2 transition duration-500'>
						Work With Channelle
					</a>

					<a
						href='/chayil-daughters'
						className='px-10 py-4 border-2 border-white font-semibold rounded-full hover:bg-white hover:text-black transition hover:-translate-y-2 duration-500'>
						Join the Community
					</a>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default HomeCTA;
