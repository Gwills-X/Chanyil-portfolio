import { motion } from "framer-motion";
import profilePic from "../images/WhatsApp Image 2026-03-01 at 8.34.09 AM.jpeg";

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
          <h1 className='text-5xl md:text-5xl font-serif font-bold mb-6'>
            Channelle Chayil Aderinto
          </h1>

          <p className='text-xl md:text-2xl mb-4'>
            Worshipping Evangelist | Apostolic Kingdom Builder | Award Winning
            Leader
          </p>

          <p className='text-lg md:text-xl mb-6'>
            Channelle Chayil Aderinto is a worshipping evangelist, an apostolic
            kingdom builder, and an award-winning leader, passionately guiding
            people into deeper intimacy with God. She empowers others to walk in
            faith, obedience, and purpose, offering prophetic insight and
            practical wisdom to transform lives, build legacy, and advance
            kingdom impact globally.
          </p>

          {/* Buttons */}
          <div className='flex flex-col sm:flex-row gap-4'>
            <a
              href='https://docs.google.com/forms/d/e/1FAIpQLSfkJPwKHWD8LKWUi46auwcdL-3c5_3CLrHcvxiKdRDkxw2AZw/viewform'
              target='_blank'
              rel='noopener noreferrer'
              className='px-8 py-4 bg-black text-white rounded-full hover:bg-transparent hover:text-black hover:border hover:border-black transition hover:-translate-y-2 duration-500 text-center'>
              Submit Your Prayer Request
            </a>

            <a
              href='/courses'
              className='px-8 py-4 border border-black rounded-full hover:bg-black hover:text-white transition hover:-translate-y-2 duration-500 text-center'>
              View Courses
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
