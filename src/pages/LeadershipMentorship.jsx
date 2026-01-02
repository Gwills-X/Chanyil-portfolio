import { useState } from "react";
import { motion } from "framer-motion";
import {
	FaUserGraduate,
	FaChalkboardTeacher,
	FaMicrophone,
	FaHandsHelping,
} from "react-icons/fa";
import profilePic from "../images/profilePic.png";
import mentorship1 from "../images/02aa05e6-e61a-4cf2-8373-dbd870a9efa3.jpg";
import mentorship2 from "../images/61e5efdf-5d5d-4500-936c-e18e7209bed0.jpg";
import mentorship3 from "../images/a5edebd0-6cd5-40c0-a285-c4e8effa862d.jpg";

const pathways = [
	{
		title: "One-to-One Mentorship",
		icon: <FaHandsHelping />,
		desc: "Personalized guidance tailored to your calling.",
	},
	{
		title: "Leadership Formation Programmes",
		icon: <FaUserGraduate />,
		desc: "Develop leadership skills rooted in faith and character.",
	},
	{
		title: "Teaching & Training Sessions",
		icon: <FaChalkboardTeacher />,
		desc: "Interactive sessions designed for growth and clarity.",
	},
	{
		title: "Speaking Engagements & Workshops",
		icon: <FaMicrophone />,
		desc: "Inspiring talks to empower vision and impact.",
	},
];

const testimonials = [
	{
		name: "Jane Doe",
		text: "Chanel's mentorship transformed my leadership journey. I now lead with clarity and purpose.",
	},
	{
		name: "Mary Smith",
		text: "The guidance I received was practical, faith-filled, and deeply personal.",
	},
];

const LeadershipMentorship = () => {
	const [mentorshipData, setMentorshipData] = useState({
		name: "",
		email: "",
		phone: "",
		country: "",
		message: "",
	});
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (e) => {
		setMentorshipData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Mentorship Request:", mentorshipData);
		setSubmitted(true);
		setMentorshipData({
			name: "",
			email: "",
			phone: "",
			country: "",
			message: "",
		});
		// TODO: Send email via backend
	};

	return (
		<main className='bg-white'>
			{/* ================= HEADER ================= */}
			<section className='py-24 px-6 bg-gradient-to-r from-gray-50 to-gray-100 h-dvh flex flex-col justify-center items-center'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className='max-w-4xl mx-auto text-center'>
					<h1 className='text-4xl md:text-5xl font-serif font-semibold mb-4'>
						Leadership & Mentorship
					</h1>
					<div className='w-24 h-1 bg-black mx-auto mb-6 rounded-full'></div>
					<p className='text-lg text-gray-700 leading-relaxed'>
						Faith-based leadership formation rooted in identity, obedience, and
						sustainable impact.
					</p>
					<div className='mt-6 flex flex-col sm:flex-row gap-4 justify-center'>
						<a
							href='#mentorship-form'
							className='inline-block px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition'>
							Request Mentorship
						</a>
						<a
							href='/missions#partner'
							className='inline-block px-8 py-3 bg-purple-700 text-white rounded-full hover:bg-purple-800 transition'>
							Partner With Us
						</a>
					</div>
				</motion.div>
			</section>

			{/* ================= BODY ================= */}
			<section className='py-20 px-6'>
				<div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center'>
					{/* Text */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className='space-y-8 text-lg text-gray-700 leading-relaxed'>
						<p>
							Chanel offers faith-based leadership mentorship for women called
							to lead in ministry, business, and community. Her mentorship is
							rooted in formation — not performance — focusing on character,
							obedience, and sustainable leadership.
						</p>
						<p>
							Each pathway is prayerfully designed and built from lived
							experience rather than theory, creating space for spiritual depth,
							clarity, and long-term effectiveness.
						</p>
						<a
							href='#pathways'
							className='inline-block px-8 py-3 bg-gray-800 text-white rounded-full hover:bg-black transition'>
							Discover Mentorship Pathways
						</a>
					</motion.div>

					{/* Profile Image */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className='rounded-2xl overflow-hidden shadow-lg'>
						<img
							src={profilePic}
							alt='Chanel mentoring'
							className='w-full h-full object-cover'
						/>
					</motion.div>
				</div>
			</section>

			{/* ================= PATHWAYS ================= */}
			<section id='pathways' className='py-24 bg-gray-50 px-6'>
				<div className='max-w-6xl mx-auto'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}>
						<h2 className='text-3xl font-serif mb-12 text-center'>
							Mentorship Pathways
						</h2>

						<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
							{pathways.map((item, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.1 }}
									viewport={{ once: true }}
									className='border rounded-xl p-6 text-center text-gray-700 hover:shadow-lg transition'>
									<div className='text-4xl mb-4 text-black flex justify-center'>
										{item.icon}
									</div>
									<h4 className='font-semibold text-lg mb-2'>{item.title}</h4>
									<p className='text-sm'>{item.desc}</p>
								</motion.div>
							))}
						</div>

						{/* Image Cards */}
						<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16'>
							{[mentorship1, mentorship2, mentorship3].map((img, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.1 }}
									viewport={{ once: true }}
									className='rounded-xl overflow-hidden border hover:shadow-lg transition'>
									<img
										src={img}
										alt={`Mentorship ${index + 1}`}
										className='w-full h-60 object-cover'
									/>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</section>

			{/* ================= TESTIMONIALS ================= */}
			<section className='py-20 px-6'>
				<div className='max-w-4xl mx-auto'>
					<h3 className='text-3xl font-serif mb-12 text-center'>
						What Mentees Say
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
								<p className='mb-4 italic'>" {item.text} "</p>
								<p className='font-semibold text-right'>- {item.name}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* ================= MENTORSHIP FORM ================= */}
			<section id='mentorship-form' className='py-24 px-6 bg-green-50'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className='max-w-4xl mx-auto text-center space-y-6'>
					<h2 className='text-3xl font-serif mb-4'>Request Mentorship</h2>
					<p className='text-gray-700 text-lg'>
						Fill the form below to request mentorship from Chanel.
					</p>

					{submitted && (
						<p className='text-green-600 font-semibold'>
							Thank you! Your mentorship request has been received. We will
							contact you soon.
						</p>
					)}

					<form
						onSubmit={handleSubmit}
						className='mt-8 grid gap-4 max-md:grid-cols-1'>
						<input
							type='text'
							name='name'
							placeholder='Full Name'
							value={mentorshipData.name}
							onChange={handleChange}
							required
							className=' p-3 rounded-lg border border-gray-300'
						/>
						<input
							type='email'
							name='email'
							placeholder='Email'
							value={mentorshipData.email}
							onChange={handleChange}
							required
							className='p-3 rounded-lg border border-gray-300'
						/>
						<input
							type='tel'
							name='phone'
							placeholder='Phone Number'
							value={mentorshipData.phone}
							onChange={handleChange}
							required
							className='p-3 rounded-lg border border-gray-300'
						/>
						<input
							type='text'
							name='country'
							placeholder='Country'
							value={mentorshipData.country}
							onChange={handleChange}
							required
							className='p-3 rounded-lg border border-gray-300'
						/>
						<textarea
							name='message'
							placeholder='Tell us what guidance you are seeking'
							value={mentorshipData.message}
							onChange={handleChange}
							className=' p-3 rounded-lg border border-gray-300'
						/>
						<button
							type='submit'
							className=' py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition'>
							Request Mentorship
						</button>
					</form>
				</motion.div>
			</section>

			{/* ================= CTA ================= */}
			<section className='py-24 px-6 text-center bg-gradient-to-r from-gray-50 to-gray-100'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className='max-w-4xl mx-auto'>
					<h3 className='text-2xl md:text-3xl font-serif mb-6'>
						Explore mentorship shaped by faith, formation, and obedience.
					</h3>

					<a
						href='#mentorship-form'
						className='inline-block px-10 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition mr-4 mb-4'>
						Request Mentorship
					</a>
					<a
						href='/missions#partner'
						className='inline-block px-10 py-4 bg-purple-700 text-white rounded-full hover:bg-purple-800 transition mb-4'>
						Partner With Us
					</a>
					<a
						href='#'
						className='inline-block px-10 py-4 bg-gray-800 text-white rounded-full hover:bg-black transition mb-4'>
						Download Brochure
					</a>
				</motion.div>
			</section>
		</main>
	);
};

export default LeadershipMentorship;
