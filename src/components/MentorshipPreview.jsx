import { motion } from "framer-motion";

const MentorshipPreview = () => {
	return (
		<section className='bg-transparent my-4 mt-7 text-center rounded-2xl border border-black p-6 md:p-8 max-w-3xl mx-auto shadow-sm'>
			<div className='max-w-4xl mx-auto text-center  '>
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='text-3xl md:text-4xl font-serif mb-6'>
					Ministry & Brand Mentorship
				</motion.h2>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.1 }}
					className='text-lg md:text-xl text-gray-700 mb-8'>
					This mentorship programme is designed for individuals called to
					leadership, ministry, or purpose-driven brands who need clarity,
					structure, and direction. Channelle mentors leaders to steward
					their calling with wisdom, integrity, and faith-centred excellence.
				</motion.p>

				<p className='italic mb-8'>
					This is a mentorship programme — not a one-off session.
				</p>

				<a
					href='https://tr.ee/hGklTxXd4V'
							target='_blank'
					className='inline-block px-10 py-4 bg-black text-white rounded-full hover:bg-transparent hover:text-black hover:border hover:border-black transition'>
					Register for Mentorship
				</a>
			</div>
		</section>
	);
};

export default MentorshipPreview;
