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
		desc: "Personalised guidance tailored to your calling and season.",
	},
	{
		title: "Leadership Formation Programmes",
		icon: <FaUserGraduate />,
		desc: "Faith-rooted leadership development built on character and obedience.",
	},
	{
		title: "Teaching & Training Sessions",
		icon: <FaChalkboardTeacher />,
		desc: "Practical teaching designed to bring clarity, structure, and growth.",
	},
	{
		title: "Speaking Engagements & Workshops",
		icon: <FaMicrophone />,
		desc: "Impactful sessions that strengthen vision, faith, and leadership capacity.",
	},
];

const testimonials = [
	{
		name: "Jane Doe",
		text: "This programme brought clarity to my calling and confidence in my leadership.",
	},
	{
		name: "Mary Smith",
		text: "The mentorship was deeply personal, practical, and spiritually grounding.",
	},
];

const LeadershipMentorship = () => {
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);
	};

	return (
		<main className='bg-white'>
			{/* ================= HERO ================= */}
			<section className='min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-50 to-gray-100 px-6'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className='max-w-4xl text-center'>
					<h1 className='text-4xl md:text-5xl font-serif font-semibold mb-6'>
						Chayil School of Leadership
					</h1>

					<p className='text-lg text-gray-700 mb-4'>
						Leadership formation for women called to lead with wisdom,
						confidence, and impact.
					</p>

					<p className='text-gray-600 leading-relaxed max-w-2xl mx-auto'>
						A faith-rooted, practical leadership programme designed to prepare
						women for real responsibility — not just visibility.
					</p>

					<div className='mt-10 flex flex-col sm:flex-row gap-4 justify-center'>
						<a
							href='#application'
							className='px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition'>
							Apply Now
						</a>
						<a
							href='#about'
							className='px-8 py-3 border border-black rounded-full hover:bg-black hover:text-white transition'>
							Learn More
						</a>
					</div>
				</motion.div>
			</section>

			{/* ================= ABOUT ================= */}
			<section id='about' className='py-24 px-6'>
				<div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center'>
					{/* Text */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className='space-y-6 text-gray-700 leading-relaxed'>
						<h2 className='text-2xl font-serif font-semibold text-black'>
							The Vision
						</h2>
						<p>
							The Chayil School of Leadership exists to form prepared leaders —
							not rushed or performative ones. This is not a theory-only course.
						</p>
						<p>
							It is personal formation, mentorship, and practical leadership
							development grounded in identity, obedience, and execution.
						</p>

						<h3 className='text-xl font-serif font-semibold text-black pt-4'>
							About the Founder
						</h3>
						<p>
							Led by <strong>Channelle Chayil</strong>, a leadership mentor with
							years of ministry leadership, mentorship, missions, and apostolic
							and prophetic training.
						</p>
						<p>
							This school is built from lived experience — the process, the
							cost, the lessons, and the grace required to lead well.
						</p>

						<h3 className='text-xl font-serif font-semibold text-black pt-4'>
							Who This Is For
						</h3>
						<ul className='list-disc pl-5 space-y-2'>
							<li>Women called to leadership but seeking clarity</li>
							<li>Women already leading who want stronger foundations</li>
							<li>Those desiring faith-rooted, practical growth</li>
							<li>Women who value mentorship and accountability</li>
						</ul>

						<p className='italic text-sm text-gray-600'>
							No title required — only availability, obedience, and
							teachability.
						</p>
					</motion.div>

					{/* Founder Image */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className='rounded-2xl overflow-hidden shadow-lg'>
						<img
							src={profilePic}
							alt='Channelle Chayil'
							className='w-full h-full object-cover'
						/>
					</motion.div>
				</div>
			</section>

			{/* ================= PROGRAMME ================= */}
			<section className='py-24 bg-gray-50 px-6'>
				<div className='max-w-4xl mx-auto text-center space-y-6'>
					<h2 className='text-3xl font-serif'>The Programme</h2>

					<p className='text-gray-700'>
						<strong>Duration:</strong> 3 Months &nbsp;|&nbsp;
						<strong>Format:</strong> Online (Live via Zoom)
					</p>
					<p className='text-gray-700'>
						<strong>Start:</strong> January 2026 &nbsp;|&nbsp;
						<strong>Investment:</strong> £100
					</p>

					<div className='grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mt-8'>
						<ul className='space-y-2'>
							<li>✔ Weekly live group leadership classes</li>
							<li>✔ Weekly one-to-one personal mentoring</li>
							<li>✔ Practical leadership assignments</li>
						</ul>
						<ul className='space-y-2'>
							<li>✔ Biblical foundations for leadership</li>
							<li>✔ Identity & personal development</li>
							<li>✔ Accountability, prayer & support</li>
						</ul>
					</div>
				</div>
			</section>

			{/* ================= PATHWAYS ================= */}
			<section className='py-24 px-6'>
				<div className='max-w-6xl mx-auto'>
					<h2 className='text-3xl font-serif text-center mb-12'>
						Mentorship Pathways
					</h2>

					<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
						{pathways.map((item, index) => (
							<div
								key={index}
								className='border rounded-xl p-6 text-center hover:shadow-lg transition'>
								<div className='text-4xl mb-4 flex justify-center'>
									{item.icon}
								</div>
								<h4 className='font-semibold mb-2'>{item.title}</h4>
								<p className='text-sm text-gray-600'>{item.desc}</p>
							</div>
						))}
					</div>

					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16'>
						{[mentorship1, mentorship2, mentorship3].map((img, i) => (
							<div key={i} className='rounded-xl overflow-hidden shadow'>
								<img src={img} alt='' className='h-60 w-full object-cover' />
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ================= TESTIMONIALS ================= */}
			<section className='py-20 px-6 bg-gray-50'>
				<div className='max-w-4xl mx-auto'>
					<h3 className='text-3xl font-serif text-center mb-12'>
						What Participants Say
					</h3>
					<div className='grid md:grid-cols-2 gap-8'>
						{testimonials.map((item, index) => (
							<div key={index} className='border rounded-xl p-6'>
								<p className='italic mb-4'>" {item.text} "</p>
								<p className='font-semibold text-right'>— {item.name}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ================= APPLICATION ================= */}
			<section id='application' className='py-24 px-6 bg-green-50'>
				<div className='max-w-4xl mx-auto text-center'>
					<h2 className='text-3xl font-serif mb-4'>Apply & Register</h2>
					<p className='mb-8 text-gray-700'>
						Spaces are limited to maintain depth and quality. Application
						required.
					</p>

					{submitted && (
						<p className='text-green-600 font-semibold mb-4'>
							Application received. We’ll be in touch soon.
						</p>
					)}

					<form onSubmit={handleSubmit} className='grid gap-4'>
						<input
							className='p-3 border rounded-lg'
							placeholder='Full Name'
							required
						/>
						<input
							className='p-3 border rounded-lg'
							placeholder='Email'
							required
						/>
						<input
							className='p-3 border rounded-lg'
							placeholder='Phone Number'
							required
						/>
						<input
							className='p-3 border rounded-lg'
							placeholder='Country'
							required
						/>
						<textarea
							className='p-3 border rounded-lg'
							placeholder='Why are you applying?'
						/>
						<button className='py-3 bg-black text-white rounded-full'>
							Submit Application
						</button>
					</form>
				</div>
			</section>
		</main>
	);
};

export default LeadershipMentorship;
