import { motion } from "framer-motion";

const WaysToWork = () => {
	return (
		<section className='py-24 px-6 bg-gray-50'>
			<div className='max-w-6xl mx-auto'>
				<h2 className='text-3xl md:text-4xl font-serif text-center mb-12'>
					Ways to Work With Channelle
				</h2>

				<div className='grid md:grid-cols-2 gap-8'>
					{/* PRAYER CALL */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className='bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition'>
						<h3 className='text-2xl font-serif mb-4'>
							15-Minute Prayer Call
						</h3>

						<p className='text-gray-700 mb-6'>
							A focused time of intercession, encouragement, and faith-filled
							prayer led by Channelle. Ideal for those navigating a challenging
							season, seeking clarity, or needing prayer support.
						</p>

						<ul className='list-disc pl-5 space-y-2 text-gray-700 mb-6'>
							<li>Focused prayer around your request</li>
							<li>Biblical encouragement and insight</li>
							<li>Confidential and supportive atmosphere</li>
						</ul>

						<p className='text-sm italic mb-6'>
							This session is prayer-focused (not counselling or coaching).
						</p>

						<a
								href='https://calendly.com/channellechayil/prayer-call'
		target='_blank'
							rel='noopener noreferrer'
							className='inline-block px-6 py-3 bg-black text-white rounded-full hover:bg-transparent hover:text-black hover:border hover:border-black transition'>
							Book a Prayer Call
						</a>
					</motion.div>

					{/* SPIRITUAL GUIDANCE */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
						className='bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition'>
						<h3 className='text-2xl font-serif mb-4'>
							Spiritual Guidance & Prayer Sessions
						</h3>

						<p className='text-gray-700 mb-6'>
							For those seeking deeper, ongoing spiritual support through
							prayer, biblical wisdom, and personalized mentoring across life
							transitions and growth seasons.
						</p>

						<ul className='list-disc pl-5 space-y-2 text-gray-700 mb-6'>
							<li>Personalized spiritual mentoring journey</li>
							<li>Prayer and biblical insight tailored to your needs</li>
							<li>Clarity, encouragement, and alignment</li>
							<li>Confidential, relational support over time</li>
						</ul>

						<a
							href='https://calendly.com/channellechayil/prayer-alignment-session'
							target='_blank'
							className='inline-block px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition'>
							Book Your Spiritual Guidance Series
						</a>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default WaysToWork;
