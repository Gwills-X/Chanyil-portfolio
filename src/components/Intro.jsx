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
          Channelle Chayil Aderinto is a worshipping evangelist, apostolic
          kingdom builder, prophet, and award-winning leader, and the visionary
          behind God’s Chayil Daughters — a global movement of women devoted to
          prayer, spiritual growth, leadership, and kingdom impact
        </motion.p>

        {/* Paragraph 2 */}
        <motion.p
          className='text-lg md:text-xl text-gray-700 leading-relaxed'
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}>
          Through prophetic ministry, worship, mentorship, and teaching, she
          equips and raises women to walk in faith, alignment, and purpose. With
          a heart for transformation, she is also committed to reaching and
          restoring the overlooked and vulnerable —bringing hope, healing, and
          the light of Christ to those in need.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Intro;
