import { useState } from "react";
import { motion } from "framer-motion";
import {
	FaUserGraduate,
	FaChalkboardTeacher,
	FaMicrophone,
	FaHandsHelping,
} from "react-icons/fa";
import profilePic from "../images/profilePic.png";

// Define mentorship pathways for the section
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

// Testimonials to display in the page
const testimonials = [
	{
		name: "Susan ekeh - Mentee",
		text: "Prophetess Chanelle is a leader per excellence. Having served closely under her leadership, I can confidently say she leads by example, not by title. She is intentional, structured, and deeply detailed in all that she does; nothing about her leadership is haphazard. There is always clarity, order, and purpose in her approach. What sets her apart is her selfless commitment to seeing people become the best version of themselves. I am a living testament to the transforming power of her leadership, mentorship, and unwavering dedication to excellence and purpose",
	},
	{
		name: "Benedicta - Mentee",
		text: "Ms. Chayil is an exceptional woman with a genuine heart for people. She is our prayer warrior, always standing in the gap and consistently covering everyone in the group with prayer and encouragement. She takes time to check on each person, ensuring that everyone is doing well spiritually, emotionally, and personally. She is truly one of a kind — selfless, compassionate, and deeply committed to the growth and well-being of others. Beyond leadership, she is a mentor who leads by example, offering guidance, wisdom, and unwavering support. I am grateful to be under her mentorship, and her influence has had a meaningful impact on my life.",
	},
];

const LeadershipMentorship = () => {
	// State to track if form was submitted successfully
	const [submitted, setSubmitted] = useState(false);

	// State to hold form data inputs
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		country: "",
		message: "",
	});

	// Update form data on input change
	const handleChange = (e) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();

		// Prepare data to send via FormSubmit
		const data = new FormData();
		data.append("name", formData.name);
		data.append("email", formData.email);
		data.append("phone", formData.phone);
		data.append("country", formData.country);
		data.append("message", formData.message);
		data.append("_subject", "New Leadership Registration"); // Email subject
		data.append("_template", "table"); // FormSubmit email format
		data.append("_captcha", "false"); // Disable captcha for convenience

		// Optional: Redirect to WhatsApp after submit
		// data.append("_next", "https://wa.me/234XXXXXXXXXX?text=Hello! I want to join the leadership program");

		try {
			// Send data to FormSubmit endpoint
			const response = await fetch(
				"https://formsubmit.co/ajax/register@channellechayil.com",
				{
					method: "POST",
					body: data,
					headers: { Accept: "application/json" },
				}
			);

			if (response.ok) {
				// Show confirmation message
				setSubmitted(true);
				// Reset form fields
				setFormData({
					name: "",
					email: "",
					phone: "",
					country: "",
					message: "",
				});
				// Optional WhatsApp redirect
				// window.location.href = "https://wa.me/234XXXXXXXXXX?text=Hello! I want to join the leadership program";
			} else {
				alert("Oops! Something went wrong. Please try again.");
			}
		} catch (err) {
			console.error(err);
			alert("Network error. Please check your connection.");
		}
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
						Leadership formation for women ready to lead with wisdom, impact and
						love.
					</p>
					<p className='text-gray-600 leading-relaxed max-w-2xl mx-auto'>
						A faith-rooted leadership formation for purpose-driven women ready
						to lead with wisdom, confidence, and love - equipped through
						mentorship, biblical foundations, and practical training.
					</p>

					{/* Buttons linking to sections */}
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
					{/* Text content */}
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
							Chayil School of Leadership forms faith-rooted women who lead from
							identity, wisdom, and love through mentorship, biblical
							foundations, and practical leadership training.
						</p>
						<p>
							We raise grounded, confident, and love-led leaders who steward
							influence well and create lasting impact in every sphere of life.
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

					{/* Founder image */}
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

					{/* Features grid */}
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

			{/* ================= APPLICATION FORM ================= */}
			<section id='application' className='py-24 px-6 bg-green-50'>
				<div className='max-w-4xl mx-auto text-center'>
					<h2 className='text-3xl font-serif mb-4'>Apply & Register</h2>
					<p className='mb-8 text-gray-700'>
						Spaces are limited to maintain depth and quality. Application
						required.
					</p>

					{/* Confirmation message on successful submission */}
					{submitted && (
						<p className='text-green-600 font-semibold mb-4'>
							Application received. We’ll be in touch soon.
						</p>
					)}

					{/* Form */}
					<form onSubmit={handleSubmit} className='grid gap-4'>
						{/* Name input */}
						<input
							type='text'
							name='name'
							placeholder='Full Name'
							value={formData.name}
							onChange={handleChange}
							required
							className='p-3 border rounded-lg'
						/>
						{/* Email input */}
						<input
							type='email'
							name='email'
							placeholder='Email'
							value={formData.email}
							onChange={handleChange}
							required
							className='p-3 border rounded-lg'
						/>
						{/* Phone input */}
						<input
							type='tel'
							name='phone'
							placeholder='Phone Number'
							value={formData.phone}
							onChange={handleChange}
							required
							className='p-3 border rounded-lg'
						/>
						{/* Country input */}
						<input
							type='text'
							name='country'
							placeholder='Country'
							value={formData.country}
							onChange={handleChange}
							required
							className='p-3 border rounded-lg'
						/>
						{/* Message textarea */}
						<textarea
							name='message'
							placeholder='Why are you applying?'
							value={formData.message}
							onChange={handleChange}
							className='p-3 border rounded-lg'
						/>
						{/* Submit button */}
						<button
							type='submit'
							className='py-3 bg-black text-white rounded-full'>
							Submit Application
						</button>
					</form>
				</div>
			</section>
		</main>
	);
};

export default LeadershipMentorship;
