import { motion } from "framer-motion";
import profilePic3 from "../images/IMG_7547.JPG";
import familyPic from "../images/familyPic.png";

const fadeUp = {
	initial: { opacity: 0, y: 30 },
	animate: { opacity: 1, y: 0 },
};

const About = () => {
	return (
		<main className='bg-white text-black overflow-hidden '>
			{/* PAGE HEADER */}
			<section className='py-24 px-6 bg-gradient-to-r from-gray-500 via-gray-600 to-gray-500 relative h-dvh flex flex-col justify-center items-center bg-top'>
				{/* Optional subtle header image */}
				<img
					src={familyPic} // Optional background image of women leading, praying, or abstract faith illustration
					alt='family header'
					className='absolute inset-0 w-full h-full object-cover object-top  opacity-70'
				/>
				<motion.div
					initial='initial'
					animate='animate'
					variants={fadeUp}
					transition={{ duration: 0.8 }}
					className='max-w-5xl mx-auto text-center'>
					<h1 className='text-4xl md:text-6xl font-serif font-semibold mb-8 relative z-10 text-white'>
						Meet Channelle Chayil
					</h1>

					<p className='text-lg md:text-xl text-white leading-relaxed max-w-3xl mx-auto relative z-10'>
						A life shaped by culture, creativity, faith, and purposeful living.
					</p>
				</motion.div>
			</section>

			{/* IMAGE + STORY GRID */}
			<section className='py-24 px-6'>
				<div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
					{/* IMAGE SLOT */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className='w-full'>
						<div className='relative'>
							{/* Accent frame */}
							<div className='absolute -top-4 -left-4 w-full h-full border border-black/20' />

							<img
								src={profilePic3}
								alt='Channelle Chayil'
								className='relative z-10 w-full h-auto object-cover grayscale rounded-sm'
							/>
						</div>
					</motion.div>

					{/* TEXT CONTENT */}
					<div className='space-y-10 text-lg leading-relaxed text-gray-700'>
						<motion.p
							initial='initial'
							whileInView='animate'
							viewport={{ once: true }}
							variants={fadeUp}
							transition={{ duration: 0.7 }}>
							Born to Ghanaian parents and raised in South London, UK, Channelle
							Chayil is deeply shaped by both her cultural heritage and her
							upbringing in a diverse and creative environment. She continues to
							live in South London with her husband and son, where family life
							remains central to everything she does.
						</motion.p>

						<motion.p
							initial='initial'
							whileInView='animate'
							viewport={{ once: true }}
							variants={fadeUp}
							transition={{ duration: 0.7, delay: 0.1 }}>
							She studied Performing Arts at the prestigious BRIT School for
							Performing Arts and Technology, before going on to further studies
							in Music and Media. This creative foundation continues to shape
							her communication style, confidence, and ability to connect
							meaningfully with diverse audiences.
						</motion.p>

						<motion.p
							initial='initial'
							whileInView='animate'
							viewport={{ once: true }}
							variants={fadeUp}
							transition={{ duration: 0.7, delay: 0.2 }}>
							In 2013, Channelle participated in the Miss Ghana UK pageant,
							where she was honoured with the Miss Eloquence award and achieved
							Second Place (1st Runner-Up). This season refined her public
							presence, articulation, and leadership capacity.
						</motion.p>
					</div>
				</div>
			</section>

			{/* PROFESSIONAL SECTION */}
			<section className='py-24 px-6 bg-gray-50'>
				<div className='max-w-4xl mx-auto text-center'>
					<motion.h2
						initial='initial'
						whileInView='animate'
						viewport={{ once: true }}
						variants={fadeUp}
						transition={{ duration: 0.7 }}
						className='text-3xl md:text-4xl font-serif mb-8'>
						Professional Life
					</motion.h2>

					<motion.p
						initial='initial'
						whileInView='animate'
						viewport={{ once: true }}
						variants={fadeUp}
						transition={{ duration: 0.7, delay: 0.1 }}
						className='text-lg text-gray-700 leading-relaxed'>
						Professionally, Channelle works as an Executive Assistant and Brand
						Strategist, supporting leaders, businesses, and ministries to grow
						with clarity, structure, and excellence.
					</motion.p>
				</div>
			</section>

			{/* CLOSING */}
			<section className='py-32 px-6'>
				<motion.div
					initial='initial'
					whileInView='animate'
					viewport={{ once: true }}
					variants={fadeUp}
					transition={{ duration: 0.8 }}
					className='max-w-4xl mx-auto text-center'>
					<p className='text-2xl md:text-3xl font-serif leading-snug'>
						Outside of her professional work, Channelle values a slower pace of
						life — enjoying meaningful conversations, family time, and shared
						moments at home.
					</p>
				</motion.div>
			</section>
		</main>
	);
};

export default About;
