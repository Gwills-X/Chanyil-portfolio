import { motion } from "framer-motion";
import profilePic from "../images/IMG_7540.JPG";

const Hero = () => {
	return (
		<section className='relative bg-gray-50 pt-10'>
			<div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 py-24 px-6'>
				{/* Left Side: Text */}
				<motion.div
					className='flex-1'
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}>
					<h1 className='text-5xl md:text-6xl font-serif font-bold mb-6'>
						Channelle Chayil
					</h1>

					<p className='text-xl md:text-2xl mb-4'>
						Faith-Centered Leader | Speaker | Mentor | Worship Minister
					</p>

					<p className='text-lg md:text-xl mb-6'>
						Raising purpose-driven women to lead in love, faith, and
						obedience—impacting lives, communities, and generations.
					</p>

					<p className='text-lg md:text-xl mb-8'>
						Through her voice and ministry, Channelle inspires hearts with
						worship, song, and faith-based teaching.
					</p>

					{/* Buttons */}
					<div className='flex flex-col sm:flex-row gap-4'>
	<a
		href='https://calendly.com/channellechayil/30min'
		target='_blank'
		rel='noopener noreferrer'
		className='px-8 py-4 bg-black text-white rounded-full hover:bg-transparent hover:text-black hover:border hover:border-black transition hover:-translate-y-2 duration-500 text-center'>
		Book a Prayer Call
	</a>

	<a
		href='/services'
		className='px-8 py-4 border border-black rounded-full hover:bg-black hover:text-white transition hover:-translate-y-2 duration-500 text-center'>
		Work With Channelle
	</a>

	<a
		href='/chayil-daughters'
		className='px-8 py-4 bg-black text-white rounded-full hover:bg-transparent hover:text-black hover:border hover:border-black transition hover:-translate-y-2 duration-500 text-center'>
		Join the Community
	</a>
</div>

				</motion.div>

				{/* Right Side: Image */}
				<motion.div
					className='flex-1'
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}>
					<img
						src={profilePic}
						alt='Channelle Chayil'
						className='rounded-xl shadow-lg w-full object-cover'
					/>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
