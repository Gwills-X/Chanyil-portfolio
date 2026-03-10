import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const ministryAreas = [
  {
    title: "Prophetic Worship",
    text: "Leading people into deep intimacy with God where healing, freedom, and prophetic direction are released.",
  },
  {
    title: "Mentorship & Leadership",
    text: "Equipping women with the wisdom, character, and spiritual depth needed to walk confidently in their calling.",
  },
  {
    title: "Prayer & Community",
    text: "Building a global community of women committed to prayer, spiritual growth, and kingdom impact.",
  },
];

const MinistryFocus = () => {
  return (
    <section className='py-28 px-6 bg-white'>
      <div className='max-w-6xl mx-auto text-center mb-16'>
        <motion.h2
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className='text-3xl md:text-4xl font-serif'>
          Ministry Focus
        </motion.h2>

        <motion.p
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.1 }}
          className='text-lg text-gray-600 mt-6 max-w-3xl mx-auto'>
          Through worship, mentorship, and prayer, Channelle is committed to
          helping women grow in faith, deepen their relationship with God, and
          walk boldly in their calling.
        </motion.p>
      </div>

      <div className='max-w-6xl mx-auto grid md:grid-cols-3 gap-12'>
        {ministryAreas.map((area, index) => (
          <motion.div
            key={index}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className='p-8 border border-gray-200 rounded-lg hover:shadow-md transition'>
            <h3 className='text-2xl font-serif mb-4'>{area.title}</h3>

            <p className='text-gray-700 leading-relaxed'>{area.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MinistryFocus;
