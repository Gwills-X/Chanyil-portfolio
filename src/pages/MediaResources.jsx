import { motion } from "framer-motion";
import { FaLink, FaYoutube, FaTiktok, FaInstagram } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6"; // 👈 this is the correct import for X

import flyerPlaceholder from "../images/IMG-20260106-WA0003.jpg"; // replace with actual flyer

const MediaResources = () => {
	const resources = [
		{
			title: "Videos & Teachings",
			description:
				"Faith-based words of encouragement, teachings to empower, strengthen, equip and refine women in faith, identity, obedience and purpose.",
			button: "Watch on YouTube",
			link: "https://youtube.com/c/ChannelleDebrah?sub_confirmation=1",
			icon: <FaYoutube />,
		},
		{
			title: "Interviews & Podcasts",
			description:
				"Spirit-led conversations, interviews, and podcast features exploring faith, leadership, calling, healing, and generational impact.",
			button: "Listen to Podcasts",
			link: "https://www.tiktok.com/@channellechayil?_r=1&_t=zn-92bcqdp7g0u",
			icon: <FaTiktok />,
		},
		{
			title: "Devotionals & Digital Resources",
			description:
				"Written devotionals, guides, and digital resources created to support daily spiritual growth and leadership formation.",
			button: "View Resources",
			link: "https://x.com/channellechayil/status/2005365753281921174",
			icon: <FaXTwitter />,
		},
		{
			title: "Upcoming Projects",
			description:
				"Books, Chayil TV, and the Chayil School of Leadership — prayerfully built initiatives designed for global and generational impact.",
			button: "Learn More",
			link: "https://linktr.ee/channellechayil",
			icon: <FaLink />,
		},
	];

	const upcomingEvents = [
		{
			title: "BOND & BUILD | Chayil Fellowships 🤍✨",
			date: "Last Friday Of Every Month, 6–9PM",
			location: "Croydon (exact location revealed upon registration)",
			description: `
A night to connect, be refreshed, and be strengthened in sisterhood. Come as you are. Leave built.
Bond & Build is a safe, uplifting space where you can relax, connect, laugh, and leave empowered, refreshed, and strengthened. Enjoy prayer, worship, the Word, fun games, food & drinks, and genuine connection. ✨ Ladies only ✨
      `,
			registrationLink:
				"https://www.eventbrite.co.uk/e/bond-and-build-chayil-felllowships-tickets-1979449721402",
			flyer: flyerPlaceholder, // replace with actual flyer image
		},
	];

	return (
		<main className='bg-white'>
			{/* ================= HEADER ================= */}
			<section className='py-24 px-6 bg-gray-50 flex flex-col justify-center items-center'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className='max-w-4xl mx-auto mt-10 text-center'>
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
							className='border rounded-2xl p-8 hover:shadow-lg transition flex flex-col justify-between'>
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

			{/* ================= UPCOMING EVENTS ================= */}
			<section className='py-24 px-6 bg-gray-50'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className='max-w-6xl mx-auto text-center mb-16'>
					<h2 className='text-4xl md:text-5xl font-bold mb-4 text-black'>
						Upcoming Events
					</h2>
					<p className='text-gray-800 max-w-2xl mx-auto'>
						Join us for inspiring fellowship, prayer, and community events.
						Register for events below.
					</p>
				</motion.div>

				{upcomingEvents.map((event, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: index * 0.1 }}
						viewport={{ once: true }}
						className='max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center mb-16 border rounded-2xl p-8 hover:shadow-lg transition bg-white'>
						{/* FLYER IMAGE */}
						<div className='flex-shrink-0 w-full md:w-1/2'>
							<img
								src={event.flyer}
								alt={`${event.title} Flyer`}
								className='w-full h-full object-cover rounded-2xl shadow-md'
							/>
						</div>

						{/* EVENT TEXT */}
						<div className='flex-1 text-center md:text-left'>
							<h3 className='text-3xl font-bold mb-4'>{event.title}</h3>
							<p className='text-gray-800 mb-2'>{event.date}</p>
							<p className='text-gray-800 mb-2'>{event.location}</p>
							<p className='text-gray-700  mb-4 whitespace-pre-line'>
								{event.description}
							</p>
							<a
								href={event.registrationLink}
								target='_blank'
								className='inline-block px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-500 transition font-medium'>
								Register Now
							</a>
						</div>
					</motion.div>
				))}
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
						href='https://linktr.ee/channellechayil'
						target='_blank'
						className='inline-block px-10 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition'>
						Follow Channelle
					</a>
				</motion.div>
			</section>
		</main>
	);
};

export default MediaResources;
