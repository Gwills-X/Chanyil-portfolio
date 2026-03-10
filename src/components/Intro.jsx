import { motion } from "framer-motion";

const Intro = () => {
  return (
    <section className='py-20 px-6 bg-white'>
      <motion.div
        className='max-w-4xl mx-auto text-center md:text-left space-y-6'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}>
        {/* Headline */}
        <motion.h2
          className='text-3xl md:text-4xl font-serif font-semibold'
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}>
          Meet Channelle Chayil
        </motion.h2>

        {/* Paragraph 1 */}
        <motion.p
          className='text-lg md:text-xl text-gray-700 leading-relaxed'
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}>
          Channelle Chayil is a prophetic worshipper, mentor, and founder of the
          global community God’s Chayil Daughters — a movement of women
          committed to prayer, spiritual growth, leadership, and impact.
        </motion.p>

        {/* Paragraph 2 */}
        <motion.p
          className='text-lg md:text-xl text-gray-700 leading-relaxed'
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}>
          Through worship, mentorship, teachings, and resources, she equips
          women to grow in faith, discover their purpose, and walk boldly in the
          calling God has placed on their lives.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Intro;
