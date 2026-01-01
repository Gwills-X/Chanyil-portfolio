import { motion } from "framer-motion";
import { FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className='bg-black text-white' id='contact'>
			<div className='max-w-7xl mx-auto px-6 py-10'>
				{/* Top Section */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-14'>
					{/* Brand */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}>
						<h3 className='text-2xl font-serif mb-4'>Chanel Ministry</h3>
						<p className='text-gray-400 leading-relaxed'>
							Faith-rooted speaking and worship ministry committed to obedience,
							clarity, and spiritual alignment.
						</p>
					</motion.div>

					{/* Navigation */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						viewport={{ once: true }}>
						<h4 className='text-lg font-semibold mb-4'>Explore</h4>
						<ul className='space-y-3 text-gray-400'>
							<li>
								<a href='/' className='hover:text-white'>
									Home
								</a>
							</li>
							<li>
								<a href='/about' className='hover:text-white'>
									About
								</a>
							</li>
							<li>
								<a href='/speaking' className='hover:text-white'>
									Speaking
								</a>
							</li>
							<li>
								<a href='/contact' className='hover:text-white'>
									Contact
								</a>
							</li>
						</ul>
					</motion.div>

					{/* Contact */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}>
						<h4 className='text-lg font-semibold mb-4'>Connect</h4>

						<div className='flex items-center gap-5'>
							<a
								href='https://www.instagram.com/channellechayil/?utm_source=ig_web_button_share_sheet'
								aria-label='Instagram'
								target='_blank'
								className='text-gray-400 hover:text-white text-xl'>
								<FaInstagram />
							</a>

							<a
								href='https://youtube.com/c/ChannelleDebrah?sub_confirmation=1'
								aria-label='YouTube'
								target='_blank'
								className='text-gray-400 hover:text-white text-xl'>
								<FaYoutube />
							</a>

							<a
								href='#'
								aria-label='Email'
								target='_blank'
								className='text-gray-400 hover:text-white text-xl'>
								<FaEnvelope />
							</a>
						</div>
					</motion.div>
				</div>

				{/* Divider */}
				<div className='border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm'>
					© {new Date().getFullYear()} Chanel Ministry. All rights reserved.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
