import { motion } from "framer-motion";
import {
	FaPrayingHands,
	FaBook,
	FaUserFriends,
	FaHandsHelping,
	FaChalkboardTeacher,
} from "react-icons/fa";
import { FaPeopleGroup, FaWhatsapp } from "react-icons/fa6";

import backgroundPic from "../images/IMG-20260106-WA0081.jpg";

// Activities
const activities = [
	{
		title: "Prayer & Intercession",
		icon: <FaPrayingHands />,
		description:
			"Engaging in consistent prayer and intercession to support our community spiritually.",
	},
	{
		title: "Bible Studies & Teaching",
		icon: <FaBook />,
		description:
			"Hosting structured Bible studies and teaching sessions to deepen knowledge and faith.",
	},
	{
		title: "Mentorship & Check-Ins",
		icon: <FaUserFriends />,
		description:
			"Providing mentorship and regular check-ins to guide personal and spiritual growth.",
	},
	{
		title: "Charitable & Mission Outreach",
		icon: <FaHandsHelping />,
		description:
			"Organizing charitable initiatives and mission outreach to serve those in need.",
	},
	{
		title: "Leadership & Spiritual Formation",
		icon: <FaChalkboardTeacher />,
		description:
			"Equipping women with leadership skills and spiritual formation to impact communities.",
	},
	{
		title: " Events & Programmes.",
		icon: <FaPeopleGroup />,
		description:
			"Faith-led gatherings which empower, build community and strengthen women.",
	},
];

// Testimonials
const testimonials = [
	{
		name: "Apostle Joseph Seidu",
		text: "Since coming to Ghana, Channelle Chayil has tirelessly poured herself into the lives of widows, orphans, and single mothers. Through her vision and commitment, sustainable systems were established—empowering many widows through farming initiatives, while others were supported to start small businesses. Her impact has gone far beyond relief; she has restored dignity, purpose, and hope. Her sacrifice, obedience, and unwavering willingness to serve have touched my life in ways words cannot fully express.",
		img: "",
	},
	{
		name: "Nanlop",
		text: "Sis Channelle is a devoted minister whose life truly reflects the heart of God, her service in ministry has been marked by humility, excellence, and a deep passion for souls. As a leader of God's Chayil Daughters, she has empowered many young people, children, and women to grow in faith, purpose, prayer, and strength. Her commitment, grace, and unwavering love for God continue to inspire everyone around her.",
		img: "",
	},
	{
		name: "Miriam",
		text: "Channelle is a dedicated leader with a deep heart for women. She is passionate about seeing women grow and step into their powerful, God-given purpose. As an open book, she shares her own experiences honestly, creating a space where others can relate and feel seen. Through her story, she consistently points women to the God who transformed her life—the same God who still moves, still heals, and still does the impossible.",
		img: "",
	},
	{
		name: "Mrs Phoebe Caleb Manabe",
		text: "Channelle, the founder of Chayil Daughters, has been a true source of inspiration to me. Through her obedience and willingness to yield fully to the Lord, God has used this platform to transform lives—mine included. Being part of Chayil Daughters has greatly increased my prayer life and deepened my walk with God. Her surrender to God’s leading is evident in the impact this community continues to make. I am grateful for her obedience and for the spiritual growth I have experienced through this platform.",
		img: "",
	},
];

const ChayilDaughters = () => {
	const whatsappGroupLink = "https://chat.whatsapp.com/YourGroupInviteLink"; // Replace with your WhatsApp group invite

	return (
		<main className='bg-white'>
			{/* ================= HEADER ================= */}
			<section className='py-24 px-6 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 h-dvh relative flex flex-col justify-center items-center'>
				<img
					src={backgroundPic}
					alt='Chayil Daughters Header'
					className='absolute inset-0 w-full h-full object-cover opacity-50'
				/>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className='max-w-4xl mx-auto text-center relative z-10'>
					<h1 className='text-4xl md:text-5xl font-serif font-semibold mb-4 text-white'>
						God’s Chayil Daughters
					</h1>
					<div className='w-24 h-1 bg-white mx-auto mb-6 rounded-full'></div>
					<p className='text-lg text-white leading-relaxed'>
						A global sisterhood rooted in faith, unity, and purpose.
					</p>
					<div className='mt-6 flex flex-col sm:flex-row gap-4 justify-center'>
						<a
							href='https://linktr.ee/godschayildaughters'
							target='_blank'
							className='inline-block px-8 py-3 border bg-white text-black font-semibold rounded-full hover:bg-black hover:text-white transition-all duration-300'>
							Explore God’s Chayil Daughters
						</a>
					</div>
				</motion.div>
			</section>

			{/* ================= BODY COPY ================= */}
			<section className='py-20 px-6'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className='max-w-4xl mx-auto space-y-8 text-lg text-gray-700 leading-relaxed'>
					<p>
						God’s Chayil Daughters is a global community of women from different
						nations who gather for prayer, Bible study, mentorship, and
						charitable outreach. The community exists to strengthen women
						spiritually, emotionally, and practically — while fostering unity,
						accountability, and service.
					</p>
					<p>
						The community actively supports widows, single mothers, and orphans,
						providing a safe space for women to grow in faith, leadership, and
						purpose.
					</p>
				</motion.div>
			</section>

			{/* ================= ACTIVITIES ================= */}
			<section id='activities' className='py-24 bg-gray-50 px-6'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className='max-w-6xl mx-auto'>
					<h2 className='text-3xl font-serif mb-12 text-center'>What We Do</h2>

					<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
						{activities.map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}
								viewport={{ once: true }}
								className='border rounded-xl p-6 text-center text-gray-700 hover:shadow-lg transition'>
								<div className='text-4xl mb-4 text-gray-700 flex justify-center'>
									{item.icon}
								</div>
								<h4 className='font-semibold text-lg mb-2'>{item.title}</h4>
								<p className='text-gray-700'>{item.description}</p>
							</motion.div>
						))}
					</div>
				</motion.div>
			</section>

			{/* ================= TESTIMONIALS ================= */}
			<section className='py-20 px-6'>
				<div className='max-w-4xl mx-auto'>
					<h3 className='text-3xl font-serif mb-12 text-center'>
						Testimonials
					</h3>
					<div className='grid md:grid-cols-2 gap-8'>
						{testimonials.map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}
								viewport={{ once: true }}
								className='border rounded-xl p-6 text-gray-700 shadow-sm hover:shadow-lg transition'>
								{item.img && (
									<img
										src={item.img}
										alt={item.name}
										className='w-16 h-16 rounded-full mx-auto mb-4 object-cover'
									/>
								)}
								<p className='mb-4 italic'>" {item.text} "</p>
								<p className='font-semibold text-right'>- {item.name}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* ================= JOIN VIA WHATSAPP ================= */}
			<section id='join-form' className='py-24 px-6 bg-purple-50'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className='max-w-4xl mx-auto text-center space-y-6'>
					<h2 className='text-3xl font-serif mb-4'>
						Join God’s Chayil Daughters on WhatsApp
					</h2>
					<p className='text-gray-700 text-lg'>
						Click the button below to join our WhatsApp group and connect with
						sisters globally.
					</p>

					<a
						href={whatsappGroupLink}
						target='_blank'
						rel='noopener noreferrer'
						className='inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-all duration-300 gap-2'>
						<FaWhatsapp className='text-2xl' /> Join Our WhatsApp Group
					</a>
				</motion.div>
			</section>
		</main>
	);
};

export default ChayilDaughters;
