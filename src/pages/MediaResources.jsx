import { motion } from "framer-motion";
import { FaTiktok, FaTwitter } from "react-icons/fa";
import {
	FaYoutube,
	FaPodcast,
	FaInstagram,
	FaFacebook,
	FaXTwitter,
} from "react-icons/fa6";

const resources = [
	{
		title: "Videos & Teachings",
		description:
			"Faith-based video teachings designed to equip, refine, and strengthen women in identity, obedience, leadership, and purpose.",
		button: "Watch on YouTube",
		link: "https://youtube.com/c/ChannelleDebrah?sub_confirmation=1", // YouTube channel link
		icon: <FaYoutube />,
	},
	{
		title: "Interviews & Podcasts",
		description:
			"Spirit-led conversations, interviews, and podcast features exploring faith, leadership, calling, healing, and generational impact.",
		button: "Listen to Podcasts",
		link: "https://www.tiktok.com/@channellechayil?_r=1&_t=zn-92bcqdp7g0u", // Podcast platform link
		icon: <FaTiktok />,
	},
	{
		title: "Devotionals & Digital Resources",
		description:
			"Written devotionals, guides, and digital resources created to support daily spiritual growth and leadership formation.",
		button: "View Resources",
		link: "https://x.com/channellechayil/status/2005365753281921174?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E2005365753281921174%7Ctwgr%5E612724389a382219a93f8b838613fd48e9742593%7Ctwcon%5Es1_c10&ref_url=https%3A%2F%2Flinktr.ee%2Fchannellechayil",
		icon: <FaTwitter />,
	},
	{
		title: "Upcoming Projects",
		description:
			"Books, Chayil TV, and the Chayil School of Leadership — prayerfully built initiatives designed for global and generational impact.",
		button: "Learn More",
		link: "https://www.instagram.com/channellechayil/?utm_source=ig_web_button_share_sheet",
		icon: <FaInstagram />,
	},
];

const MediaResources = () => {
	return (
		<main className='bg-white'>
			{/* ================= HEADER ================= */}
			<section className='py-24 px-6 bg-gray-50 h-dvh flex flex-col justify-center items-center'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className='max-w-4xl mx-auto text-center'>
					<h1 className='text-4xl md:text-5xl font-serif font-semibold mb-6'>
						Media & Resources
					</h1>
					<p className='text-lg text-gray-700 leading-relaxed'>
						Teachings, conversations, and resources created to support faith,
						formation, leadership, and purpose.
					</p>
				</motion.div>
			</section>

			{/* ================= RESOURCE CARDS ================= */}
			<section className='py-24 px-6'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className='max-w-6xl mx-auto grid gap-8 md:grid-cols-2'>
					{resources.map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}
							viewport={{ once: true }}
							className='border rounded-2xl p-8 hover:shadow-lg transition'>
							{item.icon && (
								<div className='text-3xl mb-4 text-black'>{item.icon}</div>
							)}
							<h3 className='text-2xl font-serif mb-4'>{item.title}</h3>
							<p className='text-gray-700 leading-relaxed mb-6'>
								{item.description}
							</p>

							{item.button && (
								<a
									href={item.link}
									target='_blank'
									className='inline-block px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition'>
									{item.button}
								</a>
							)}
						</motion.div>
					))}
				</motion.div>
			</section>

			{/* ================= SOCIAL MEDIA ================= */}
			<section className='py-20 px-6 bg-gray-50'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className='max-w-4xl mx-auto text-center'>
					<h3 className='text-2xl md:text-3xl font-serif mb-6'>
						Connect With Us
					</h3>
					<p className='text-gray-700 mb-10'>
						Follow along for teachings, updates, encouragement, and faith-filled
						conversations across our media platforms.
					</p>

					<div className='flex justify-center gap-6 text-3xl'>
						<a
							href='https://youtube.com/c/ChannelleDebrah?sub_confirmation=1'
							target='_blank'
							className='hover:text-gray-600 transition'>
							<FaYoutube />
						</a>

						<a
							href='https://www.instagram.com/channellechayil/?utm_source=ig_web_button_share_sheet'
							target='_blank'
							className='hover:text-gray-600 transition'>
							<FaInstagram />
						</a>

						<a
							href='https://x.com/channellechayil/status/2005365753281921174?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E2005365753281921174%7Ctwgr%5E612724389a382219a93f8b838613fd48e9742593%7Ctwcon%5Es1_c10&ref_url=https%3A%2F%2Flinktr.ee%2Fchannellechayil'
							target='_blank'
							className='hover:text-gray-600 transition'>
							<FaXTwitter />
						</a>
					</div>
				</motion.div>
			</section>

			{/* ================= CTA ================= */}
			<section className='py-24 px-6 text-center'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className='max-w-4xl mx-auto'>
					<h3 className='text-2xl md:text-3xl font-serif mb-6'>
						Be equipped, encouraged, and strengthened for your faith journey.
					</h3>

					<a
						href='#'
						className='inline-block px-10 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition'>
						Explore Media & Resources
					</a>
				</motion.div>
			</section>
		</main>
	);
};

export default MediaResources;
