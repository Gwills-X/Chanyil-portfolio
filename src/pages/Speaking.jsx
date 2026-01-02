import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import profilePic from "../images/something.jpg";
import one from "../images/61e5efdf-5d5d-4500-936c-e18e7209bed0.jpg";
import two from "../images/IMG_5435.PNG";
import three from "../images/IMG_4979.JPG";
import four from "../images/IMG_4980.JPG";
import five from "../images/62c45394-478c-4964-bea7-c9a5f2b0493d.jpg";
import six from "../images/8aad0d5b-2a4a-44cd-9ed7-7c207b33d821.jpg";

const topics = [
	"Identity & Purpose",
	"Faith-Based Leadership",
	"Obedience & Alignment",
	"Healing, Restoration & Calling",
	"Women, Legacy & Impact",
];

const ministrySlides = [one, two, three, four, five, six];

const Speaking = () => {
	const [current, setCurrent] = useState(0);

	// Forms state
	const [partnerData, setPartnerData] = useState({
		name: "",
		email: "",
		phone: "",
		amount: "",
		message: "",
	});
	const [inviteData, setInviteData] = useState({
		name: "",
		email: "",
		phone: "",
		event: "",
		message: "",
	});
	const [partnerSubmitted, setPartnerSubmitted] = useState(false);
	const [inviteSubmitted, setInviteSubmitted] = useState(false);

	// Auto slide
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent((prev) => (prev + 1) % ministrySlides.length);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	const next = () => setCurrent((prev) => (prev + 1) % ministrySlides.length);
	const prev = () =>
		setCurrent(
			(prev) => (prev - 1 + ministrySlides.length) % ministrySlides.length
		);

	// Form handlers
	const handlePartnerChange = (e) => {
		setPartnerData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};
	const handleInviteChange = (e) => {
		setInviteData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handlePartnerSubmit = (e) => {
		e.preventDefault();
		console.log("Partner Request:", partnerData);
		setPartnerSubmitted(true);
		setPartnerData({ name: "", email: "", phone: "", amount: "", message: "" });
		// TODO: send email to backend
	};
	const handleInviteSubmit = (e) => {
		e.preventDefault();
		console.log("Invitation Request:", inviteData);
		setInviteSubmitted(true);
		setInviteData({ name: "", email: "", phone: "", event: "", message: "" });
		// TODO: send email to backend
	};

	return (
		<main className='bg-white overflow-x-hidden'>
			{/* ========== PROFESSIONAL SECTION ========== */}
			<section className='py-24 px-6 bg-white pt-40'>
				<div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center'>
					{/* Profile */}
					<div className='flex justify-center'>
						<img
							src={profilePic}
							alt='Professional portrait'
							className='w-full max-w-sm rounded-2xl shadow-xl object-cover grayscale'
						/>
					</div>

					{/* Text */}
					<div>
						<h2 className='text-3xl md:text-4xl font-serif mb-6'>
							Speaking & Worship Ministry
						</h2>
						<p className='text-lg text-gray-700 leading-relaxed'>
							Chanel ministers through both the spoken word and worship,
							delivering faith-centered messages that inspire obedience,
							spiritual clarity, and transformation through Christ.
						</p>

						{/* Buttons */}
						<div className='flex flex-col sm:flex-row gap-4 mt-6'>
							<a
								href='/missions#partner'
								className='px-8 py-3 border bg-black text-white rounded-full hover:bg-transparent hover:text-black transition-all duration-300'>
								Partner With Us
							</a>
							<a
								href='#invite-form'
								className='px-8 py-3 border bg-transparent text-black rounded-full hover:bg-black hover:text-white  transition-all duration-300'>
								Invite Chanel
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* ========== SLIDESHOW SECTION ========== */}
			<section className='py-24 px-6 bg-gray-50'>
				<div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center'>
					{/* Text */}
					<div>
						<h2 className='text-3xl md:text-4xl font-serif mb-6'>
							Ministry in Action
						</h2>
						<p className='text-lg text-gray-700 leading-relaxed'>
							From worship sessions to teaching moments, Chanel’s ministry
							creates spaces where hearts are aligned, faith is strengthened,
							and God’s presence is experienced.
						</p>
					</div>

					{/* SLIDER */}
					<div className='relative w-full max-w-md mx-auto h-[420px] rounded-2xl overflow-hidden shadow-xl'>
						<AnimatePresence mode='wait'>
							<motion.img
								key={current}
								src={ministrySlides[current]}
								alt='Ministry moment'
								initial={{ opacity: 0, x: 80 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -80 }}
								transition={{ duration: 0.7, ease: "easeInOut" }}
								className='absolute inset-0 w-full h-full object-cover'
							/>
						</AnimatePresence>

						{/* Controls */}
						<button
							onClick={prev}
							className='absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white w-9 h-9 rounded-full'>
							‹
						</button>
						<button
							onClick={next}
							className='absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white w-9 h-9 rounded-full'>
							›
						</button>
					</div>
				</div>
			</section>

			{/* ============ TOPICS ============ */}
			<section className='py-24 px-6 bg-white'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className='max-w-5xl mx-auto'>
					<h2 className='text-3xl font-serif mb-12 text-center'>
						Speaking Topics Include
					</h2>

					<div className='grid gap-6 md:grid-cols-2'>
						{topics.map((topic, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}
								viewport={{ once: true }}
								className='border rounded-xl p-6 text-lg text-gray-700'>
								{topic}
							</motion.div>
						))}
					</div>
				</motion.div>
			</section>

			{/* ============ INVITATION FORM ============ */}
			<section id='invite-form' className='py-24 px-6 bg-purple-50'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className='max-w-4xl mx-auto text-center space-y-6'>
					<h2 className='text-3xl font-serif mb-4'>Invite Chanel to Speak</h2>
					<p className='text-gray-700 text-lg'>
						Fill the form below to request Chanel to minister, teach, or lead
						worship at your event.
					</p>

					{inviteSubmitted && (
						<p className='text-green-600 font-semibold'>
							Thank you! Your invitation request has been received.
						</p>
					)}

					<form
						onSubmit={handleInviteSubmit}
						className='mt-8 grid gap-4 grid-cols-1'>
						<input
							type='text'
							name='name'
							placeholder='Full Name'
							value={inviteData.name}
							onChange={handleInviteChange}
							required
							className=' p-3 rounded-lg border border-gray-300'
						/>
						<input
							type='email'
							name='email'
							placeholder='Email'
							value={inviteData.email}
							onChange={handleInviteChange}
							required
							className='p-3 rounded-lg border border-gray-300'
						/>
						<input
							type='tel'
							name='phone'
							placeholder='Phone Number'
							value={inviteData.phone}
							onChange={handleInviteChange}
							required
							className='p-3 rounded-lg border border-gray-300'
						/>
						<input
							type='text'
							name='event'
							placeholder='Event Name / Details'
							value={inviteData.event}
							onChange={handleInviteChange}
							required
							className=' p-3 rounded-lg border border-gray-300'
						/>
						<textarea
							name='message'
							placeholder='Any additional message'
							value={inviteData.message}
							onChange={handleInviteChange}
							className=' p-3 rounded-lg border border-gray-300'
						/>
						<button
							type='submit'
							className=' py-3 bg-black text-white rounded-full hover:bg-gray-800 transition'>
							Send Invitation Request
						</button>
					</form>
				</motion.div>
			</section>
		</main>
	);
};

export default Speaking;
