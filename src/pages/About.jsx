import { motion } from "framer-motion";
import profilePic3 from "../images/WhatsApp Image 2026-03-01 at 8.34.09 AM (1).jpeg";
import familyPic from "../images/familyPic.png";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <main className='bg-white text-black overflow-hidden'>
      {/* ================= HERO HEADER ================= */}

      <section className='py-24 px-6 bg-gradient-to-r from-gray-500 via-gray-600 to-gray-500 relative h-dvh flex flex-col justify-center items-center bg-top'>
        {/* Background Image */}
        <img
          src={familyPic}
          alt='family header'
          className='absolute inset-0 w-full h-full object-cover object-top opacity-70'
        />

        <motion.div
          initial='initial'
          animate='animate'
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className='max-w-5xl mx-auto text-center'>
          <h1 className='text-4xl md:text-6xl font-serif font-semibold mb-8 relative z-10 text-white'>
            About Channelle Chayil
          </h1>

          <p className='text-lg md:text-xl text-white leading-relaxed max-w-3xl mx-auto relative z-10'>
            Prophetic worshipper, mentor, and ministry leader devoted to helping
            people encounter God, grow in faith, and walk boldly in their
            God-given purpose.
          </p>

          <a
            href='https://linktr.ee/channellechayil?utm_source=linktree_profile_share&ltsid=ac7aa049-1a4f-42ab-9886-6840bfff87d3'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block mt-6 relative z-10 px-8 py-3 bg-black text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300'>
            Follow / Connect with Channelle
          </a>
        </motion.div>
      </section>

      {/* ================= MAIN BIO SECTION ================= */}

      <section className='py-20 px-6'>
        <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center'>
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='w-full'>
            <div className='relative'>
              {/* Decorative Frame */}
              <div className='absolute -top-4 -left-4 w-full h-full border border-black/20' />

              <img
                src={profilePic3}
                alt='Channelle Chayil'
                className='relative z-10 w-full h-150  rounded-sm'
              />
            </div>
          </motion.div>

          {/* TEXT CONTENT */}
          <div className='space-y-8 text-lg leading-relaxed text-gray-700'>
            <motion.p
              initial='initial'
              whileInView='animate'
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.7, delay: 0.1 }}>
              Born to Ghanaian parents and raised in South London, Channelle’s
              journey has been shaped by both her cultural heritage and a deep
              personal walk with God. Over the years, her life has been marked
              by seasons of surrender, healing, and obedience that ultimately
              led her into ministry and leadership.
            </motion.p>

            <motion.p
              initial='initial'
              whileInView='animate'
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.7, delay: 0.2 }}>
              Through her own testimony of restoration and transformation,
              Channelle has become passionate about helping others discover that
              true freedom, clarity, and purpose are found through intimacy with
              God.
            </motion.p>

            <motion.p
              initial='initial'
              whileInView='animate'
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.7, delay: 0.3 }}>
              Her heart is to see women healed, strengthened, and raised as
              women of faith who lead their lives with wisdom, courage, and
              obedience to God’s voice.
            </motion.p>
          </div>
        </div>
      </section>
      {/* ================= FAMILY SECTION ================= */}

      <section className='py-32 px-6 bg-gray-50'>
        <motion.div
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className='max-w-4xl mx-auto text-center'>
          <h3 className='text-3xl font-serif mb-6'>Family & Life</h3>

          <p className='text-xl text-gray-700 leading-relaxed'>
            Channelle lives in London with her husband and son. Family remains
            central to her life and ministry, and she believes that faith, love,
            and strong values begin in the home.
          </p>
        </motion.div>
      </section>

      {/* ================= MINISTRY SECTION ================= */}

      <section className='py-24 px-6 bg-gray-50'>
        <div className='max-w-4xl mx-auto text-center space-y-8'>
          <motion.h2
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className='text-3xl md:text-4xl font-serif'>
            The Ministry
          </motion.h2>

          <motion.p
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className='text-lg text-gray-700 leading-relaxed'>
            Channelle is the founder and visionary of God’s Chayil Daughters, a
            global community of prayer-filled, purpose-driven women who gather
            for prayer, discipleship, and charitable impact.
          </motion.p>

          <motion.p
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className='text-lg text-gray-700 leading-relaxed'>
            The community exists to nurture spiritual growth, sisterhood, and
            leadership among women who desire to walk closely with God and
            fulfil their calling.
          </motion.p>

          <motion.p
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className='text-lg text-gray-700 leading-relaxed'>
            Through prayer gatherings, teaching, mentorship, and outreach
            initiatives supporting widows, single mothers, and vulnerable
            communities in Africa, God’s Chayil Daughters continues to grow as a
            global sisterhood committed to faith and service.
          </motion.p>
        </div>
      </section>

      {/* ================= WORSHIP + MENTORSHIP ================= */}

      <section className='py-28 px-6'>
        <div className='max-w-5xl mx-auto grid md:grid-cols-2 gap-16'>
          {/* Prophetic Worship */}
          <motion.div
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className='space-y-6'>
            <h3 className='text-2xl font-serif'>Prophetic Worship</h3>

            <p className='text-gray-700 leading-relaxed'>
              As a worshipping evangelist, Channelle carries a ministry that
              draws people into deeper intimacy with God through worship.
            </p>

            <p className='text-gray-700 leading-relaxed'>
              Her worship is centred on surrender, repentance, and encounter —
              creating space for prophetic encouragement, breakthrough, and
              spiritual direction.
            </p>

            <p className='text-gray-700 leading-relaxed'>
              Through worship, prayer, and teaching, she seeks to lead people
              into moments where hearts are softened, faith is strengthened, and
              God’s voice can be heard clearly.
            </p>
          </motion.div>

          {/* Mentorship */}
          <motion.div
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className='space-y-6'>
            <h3 className='text-2xl font-serif'>Mentorship & Leadership</h3>

            <p className='text-gray-700 leading-relaxed'>
              Alongside ministry, Channelle mentors women who desire spiritual
              growth, healing, clarity of purpose, and leadership development.
            </p>

            <p className='text-gray-700 leading-relaxed'>
              Through discipleship, prayer, and practical guidance, she equips
              women to build strong foundations in faith, develop confidence in
              their calling, and lead their lives and communities with wisdom
              and integrity.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;
