import { motion } from "framer-motion";
import {
	FaPrayingHands,
	FaBullseye,
	FaHeart,
	FaUsers,
	FaGlobeAmericas,
} from "react-icons/fa";
import mentorship3 from "../images/a5edebd0-6cd5-40c0-a285-c4e8effa862d.jpg";
import { useState } from "react";

const coreValues = [
	{ title: "Faith & Obedience", icon: <FaPrayingHands /> },
	{ title: "Identity & Purpose", icon: <FaBullseye /> },
	{ title: "Integrity & Stewardship", icon: <FaHeart /> },
	{ title: "Leadership with Compassion", icon: <FaUsers /> },
	{ title: "Generational Impact", icon: <FaGlobeAmericas /> },
];

const Mission = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		amount: "",
		message: "",
	});
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (e) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// TODO: Send formData to backend or email service
		console.log("Partnership request submitted:", formData);

		setSubmitted(true);
		setFormData({ name: "", email: "", phone: "", amount: "", message: "" });
	};

	return (
		<main className='bg-white'>
			{/* ================= HEADER ================= */}
			<section className='py-24 px-6 bg-gradient-to-r from-gray-500 via-gray-600 to-gray-500 relative h-dvh flex flex-col justify-center items-center'>
				{/* Optional subtle header image */}
				<img
					src={mentorship3}
					alt='Mission header'
					className='absolute inset-0 w-full h-full object-cover opacity-50'
				/>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className='max-w-4xl mx-auto text-center relative z-10'>
					<h1 className='text-4xl md:text-5xl text-white font-serif font-semibold mb-4'>
						Mission, Vision & Values
					</h1>
					<div className='w-24 h-1 bg-white mx-auto mb-6 rounded-full'></div>
					<p className='text-lg text-white leading-relaxed'>
						The foundation guiding the work, leadership, and movement.
					</p>
				</motion.div>
			</section>

			{/* ================= MISSION ================= */}
			<section className='py-20 px-6'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className='max-w-4xl mx-auto text-center space-y-6'>
					<h2 className='text-3xl font-serif mb-2'>Our Mission</h2>
					<p className='text-xl text-gray-700 leading-relaxed'>
						To raise faith-filled, purpose-driven women who are grounded in
						identity, obedience, and spiritual maturity — equipped to lead and
						serve with impact.
					</p>
				</motion.div>
			</section>

			{/* ================= VISION ================= */}
			<section className='py-20 px-6 bg-gray-50'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className='max-w-4xl mx-auto text-center space-y-6'>
					<h2 className='text-3xl font-serif mb-2'>Our Vision</h2>
					<p className='text-xl text-gray-700 leading-relaxed'>
						A global movement of women walking confidently in their God-given
						calling, influencing families, communities, and nations through
						faith-centred leadership.
					</p>
				</motion.div>
			</section>

			{/* ================= CORE VALUES ================= */}
			<section className='py-24 px-6'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className='max-w-6xl mx-auto'>
					<h2 className='text-3xl font-serif mb-12 text-center'>
						Our Core Values
					</h2>

					<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
						{coreValues.map((value, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}
								viewport={{ once: true }}
								className='border rounded-xl p-6 text-center text-gray-700 hover:shadow-lg transition'>
								<div className='text-4xl mb-4 text-gray-700 flex justify-center'>
									{value.icon}
								</div>
								<h4 className='font-semibold text-lg'>{value.title}</h4>
							</motion.div>
						))}
					</div>
				</motion.div>
			</section>

			{/* ================= PARTNER WITH US ================= */}
			<section id='partner' className='py-24 px-6 bg-purple-50'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className='max-w-4xl mx-auto text-center space-y-6'>
					<h2 className='text-3xl font-serif mb-4'>Partner With Us</h2>
					<p className='text-gray-700 text-lg'>
						Join hands with our ministry to impact lives, support programs, and
						raise purpose-driven women. Fill out the form below to get started.
					</p>

					{submitted && (
						<p className='text-green-600 font-semibold'>
							Thank you! Your partnership request has been received.
						</p>
					)}

					<form
						onSubmit={handleSubmit}
						className='mt-8 grid gap-4 sm:grid-cols-1 max-md:grid-cols-1'>
						<input
							type='text'
							name='name'
							placeholder='Full Name'
							value={formData.name}
							onChange={handleChange}
							required
							className=' p-3 rounded-lg border border-gray-300'
						/>
						<input
							type='email'
							name='email'
							placeholder='Email'
							value={formData.email}
							onChange={handleChange}
							required
							className='p-3 rounded-lg border border-gray-300'
						/>
						<input
							type='tel'
							name='phone'
							placeholder='Phone Number'
							value={formData.phone}
							onChange={handleChange}
							required
							className='p-3 rounded-lg border border-gray-300'
						/>
						<input
							type='number'
							name='amount'
							placeholder='Amount (Optional)'
							value={formData.amount}
							onChange={handleChange}
							className='p-3 rounded-lg border border-gray-300'
						/>
						<textarea
							name='message'
							placeholder='Briefly tell us why you want to partner'
							value={formData.message}
							onChange={handleChange}
							className=' p-3 rounded-lg border border-gray-300'
						/>
						<button
							type='submit'
							className=' py-3 bg-black text-white rounded-full hover:bg-gray-800 transition'>
							Submit Partnership Request
						</button>
					</form>
				</motion.div>
			</section>
		</main>
	);
};

export default Mission;
