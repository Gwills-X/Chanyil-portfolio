import { motion } from "framer-motion";

// Assuming you'll assign the correct image to the correct book
import book1 from "../images/WhatsApp Image 2026-03-10 at 8.26.02 AM (1).jpeg";
import book2 from "../images/prayerWatches.png";
import book3 from "../images/hebrewCalendar.jpeg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const resources = [
  {
    title: "Grace for the Journey",
    subtitle: "A Prayer Guide for Mothers Raising SEN Children",
    description: (
      <div className='space-y-4'>
        <p>
          Raising a child with autism or special educational needs can feel
          overwhelming. As a mother of an autistic child myself, prayer has been
          my greatest source of strength.
        </p>
        <p className='font-medium text-gray-900 italic'>This guide contains:</p>
        <ul className='list-disc pl-5 space-y-2'>
          <li>Heartfelt prayers for peace and wisdom</li>
          <li>Strength for the weary moments</li>
          <li>Faith-based encouragement for your unique journey</li>
        </ul>
        <p>You are not alone — God is with you every step of the way.</p>
      </div>
    ),
    link: "https://payhip.com/b/72H06",
    image: book1,
  },
  {
    title: "Understanding the Eight Prayer Watches",
    subtitle: "Strategic Spiritual Alignment",
    description: (
      <div className='space-y-4'>
        <p>
          This free guide introduces the <strong>Eight Prayer Watches</strong>
          —key times throughout the day and night where prayer becomes
          especially powerful and intentional.
        </p>
        <div className='bg-gray-50 p-4 border-l-4 border-black italic'>
          ✨ Simple. Insightful. Transformational.
        </div>
        <p>
          Learn how to align your prayer life with God’s timing, pray with
          greater clarity, and grow in spiritual awareness. Perfect for anyone
          looking to deepen their prayer life and consistency.
        </p>
      </div>
    ),
    link: "https://payhip.com/b/ykmEh",
    image: book2,
  },
  {
    title: "The Hebrew Calendar",
    subtitle: "A Prophetic Resource for Alignment",
    description: (
      <div className='space-y-4'>
        <p>
          This is more than a calendar; this is a{" "}
          <strong>spiritual roadmap</strong>. Understand the Hebrew Calendar
          through a Kingdom lens—learning the seasons, patterns, and prophetic
          movements of God.
        </p>
        <p className='font-semibold text-black uppercase text-sm tracking-widest'>
          Each month reveals:
        </p>
        <ul className='grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm'>
          <li>✨ Spiritual themes & assignments</li>
          <li>✨ Biblical tribes of the season</li>
          <li>✨ Scriptures for meditation</li>
          <li>✨ Prophetic insights</li>
        </ul>
        <p className='text-gray-900 font-serif italic'>
          "You are not called to live randomly. You are called to move in rhythm
          with Heaven."
        </p>
      </div>
    ),
    link: "https://payhip.com/b/AKujq",
    image: book3,
  },
];

const Shop = () => {
  return (
    <main className='bg-white text-black overflow-hidden'>
      {/* HERO SECTION */}
      <section className='py-28 px-6 bg-gray-50'>
        <motion.div
          initial='initial'
          animate='animate'
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className='max-w-4xl mx-auto text-center'>
          <h1 className='text-4xl md:text-5xl font-serif mb-6'>
            Resources for Faith & Growth
          </h1>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Tools for spiritual encouragement, practical guidance, and deeper
            intimacy with God.
          </p>
        </motion.div>
      </section>

      {/* RESOURCES SECTION */}
      <section className='py-20 px-6'>
        <div className='max-w-6xl mx-auto space-y-32'>
          {resources.map((resource, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-center`}>
              {/* SINGLE BOOK IMAGE */}
              <motion.div
                initial='initial'
                whileInView='animate'
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className='w-full md:w-1/2 flex justify-center'>
                <img
                  src={resource.image}
                  alt={resource.title}
                  className='w-full max-w-sm rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500'
                />
              </motion.div>

              {/* BOOK DETAILS */}
              <motion.div
                initial='initial'
                whileInView='animate'
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className='w-full md:w-1/2 space-y-6'>
                <div>
                  <h2 className='text-3xl font-serif font-bold text-gray-900'>
                    {resource.title}
                  </h2>
                  <p className='text-gray-500 font-medium mt-1'>
                    {resource.subtitle}
                  </p>
                </div>

                <div className='text-gray-700 text-lg leading-relaxed'>
                  {resource.description}
                </div>

                <a
                  href={resource.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-block mt-4 px-10 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition shadow-lg hover:shadow-xl'>
                  Get the Resource
                </a>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* PERSONAL NOTE */}
      <section className='py-24 px-6 bg-gray-50'>
        <motion.div
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className='max-w-3xl mx-auto text-center space-y-8'>
          <h2 className='text-3xl font-serif text-gray-900'>
            A Personal Note from Channelle
          </h2>
          <div className='space-y-6 text-lg text-gray-700 leading-relaxed italic'>
            <p>
              "Many of these resources were first written in private moments
              with God — through prayer, surrender, and obedience."
            </p>
            <p>
              "They are not simply teachings, but tools that have helped shape
              my own journey of healing, leadership, motherhood, and faith."
            </p>
          </div>
        </motion.div>
      </section>

      {/* COMMUNITY CTA */}
      <section className='py-32 px-6'>
        <motion.div
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className='max-w-4xl mx-auto text-center bg-black text-white p-12 rounded-3xl space-y-8'>
          <h2 className='text-3xl font-serif'>Join the Community</h2>
          <p className='text-lg text-gray-300 max-w-2xl mx-auto'>
            A global community of women committed to walking in faith, purpose,
            and obedience to God.
          </p>
          <a
            href='https://chat.whatsapp.com/EOnBG5GXi7tIIIASheh5rd?mode=hq2tcli'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block px-12 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition'>
            Join the Daughters
          </a>
        </motion.div>
      </section>
    </main>
  );
};

export default Shop;
