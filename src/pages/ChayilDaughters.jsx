import { useState } from "react";
import { motion } from "framer-motion";
import {
	FaPrayingHands,
	FaBook,
	FaUserFriends,
	FaHandsHelping,
	FaChalkboardTeacher,
} from "react-icons/fa";

import backgroundPic from "../images/47b226c1-abcb-450d-983b-f1bfa8d36526.jpg";

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
];

// Testimonials
const testimonials = [
	{
		name: "Ada E.",
		text: "Being part of God’s Chayil Daughters has strengthened my faith and given me a loving sisterhood across nations.",
		img: "",
	},
	{
		name: "Blessing M.",
		text: "This community empowered me to serve others while growing spiritually and emotionally.",
		img: "",
	},
];

const ChayilDaughters = () => {
	const [joinData, setJoinData] = useState({
		name: "",
		email: "",
		phone: "",
		country: "",
		message: "",
	});
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (e) => {
		setJoinData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Join Request:", joinData);
		setSubmitted(true);
		setJoinData({ name: "", email: "", phone: "", country: "", message: "" });
		// TODO: Send email via backend
	};

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
							href='#join-form'
							className='inline-block px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition'>
							Join God’s Chayil Daughters
						</a>
						<a
							href='/missions#partner'
							className='inline-block px-8 py-3 bg-purple-700 text-white font-semibold rounded-full hover:bg-purple-800 transition'>
							Partner With Us
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

			{/* ================= JOIN FORM ================= */}
			<section id='join-form' className='py-24 px-6 bg-purple-50'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className='max-w-4xl mx-auto text-center space-y-6'>
					<h2 className='text-3xl font-serif mb-4'>
						Join God’s Chayil Daughters
					</h2>
					<p className='text-gray-700 text-lg'>
						Fill the form below to become part of our global sisterhood.
					</p>

					{submitted && (
						<p className='text-green-600 font-semibold'>
							Thank you! Your request has been received. We will contact you
							soon.
						</p>
					)}

					<form
						onSubmit={handleSubmit}
						className='mt-8 grid gap-4 max-md:grid-cols-1 grid-cols-1'>
						<input
							type='text'
							name='name'
							placeholder='Full Name'
							value={joinData.name}
							onChange={handleChange}
							required
							className=' p-3 rounded-lg border border-gray-300'
						/>
						<input
							type='email'
							name='email'
							placeholder='Email'
							value={joinData.email}
							onChange={handleChange}
							required
							className='p-3 rounded-lg border border-gray-300'
						/>
						<input
							type='tel'
							name='phone'
							placeholder='Phone Number'
							value={joinData.phone}
							onChange={handleChange}
							required
							className='p-3 rounded-lg border border-gray-300'
						/>
						<input
							type='text'
							name='country'
							placeholder='Country'
							value={joinData.country}
							onChange={handleChange}
							required
							className='p-3 rounded-lg border border-gray-300'
						/>
						<textarea
							name='message'
							placeholder='Tell us why you want to join (optional)'
							value={joinData.message}
							onChange={handleChange}
							className=' p-3 rounded-lg border border-gray-300'
						/>
						<button
							type='submit'
							className=' py-3 bg-purple-700 text-white rounded-full hover:bg-purple-800 transition'>
							Submit Request
						</button>
					</form>
				</motion.div>
			</section>
		</main>
	);
};

export default ChayilDaughters;
