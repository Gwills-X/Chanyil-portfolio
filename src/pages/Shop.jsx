import { motion } from "framer-motion";

import book1 from "../images/WhatsApp Image 2026-03-10 at 8.26.02 AM (1).jpeg";
import book2 from "../images/WhatsApp Image 2026-03-10 at 8.26.02 AM.jpeg";
import book3 from "../images/WhatsApp Image 2026-03-10 at 8.26.01 AM.jpeg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const resources = [
  {
    title:
      "Grace for the Journey: A Prayer Guide for Mothers Raising SEN Children",
    description:
      "Raising a child with autism or special educational needs can feel overwhelming at times. As a mother of an autistic child myself, prayer has been my greatest source of strength. This guide contains heartfelt prayers to bring you peace, wisdom, and grace as you cover your child in faith and walk this journey with God. You are not alone — God is with you every step of the way.",
    link: "https://payhip.com/b/72H06",
    images: [book1, book2, book3],
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

          <p className='text-lg text-gray-700 leading-relaxed mt-6'>
            Whether you are seeking spiritual encouragement, practical guidance,
            or deeper intimacy with God, these resources are here to support
            you.
          </p>

          <p className='text-lg text-gray-700 leading-relaxed mt-6'>
            My prayer is that every resource you receive here becomes a tool for
            transformation in your life.
          </p>
        </motion.div>
      </section>

      {/* RESOURCES SECTION */}

      <section className='py-10 px-6'>
        <div className='max-w-6xl mx-auto space-y-24'>
          {resources.map((resource, index) => (
            <div
              key={index}
              className='grid md:grid-cols-2 gap-16 items-center'>
              {/* BOOK IMAGES */}

              <motion.div
                initial='initial'
                whileInView='animate'
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className='grid grid-cols-2 gap-6'>
                {resource.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={resource.title}
                    className={`w-full  rounded-md shadow-sm ${
                      i === 0 ? "col-span-1 row-span-2" : ""
                    }`}
                  />
                ))}
              </motion.div>

              {/* BOOK DETAILS */}

              <motion.div
                initial='initial'
                whileInView='animate'
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className='space-y-6'>
                <h2 className='text-3xl font-serif'>{resource.title}</h2>

                <p className='text-gray-700 text-lg leading-relaxed'>
                  {resource.description}
                </p>

                <a
                  href={resource.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-block mt-4 px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition'>
                  Get the Resource
                </a>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* PERSONAL NOTE */}

      <section className='py-28 px-6 bg-gray-50'>
        <motion.div
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className='max-w-4xl mx-auto text-center space-y-8'>
          <h2 className='text-3xl font-serif'>
            A Personal Note from Channelle
          </h2>

          <p className='text-lg text-gray-700 leading-relaxed'>
            Many of these resources were first written in private moments with
            God — through prayer, surrender, and obedience.
          </p>

          <p className='text-lg text-gray-700 leading-relaxed'>
            They are not simply teachings, but tools that have helped shape my
            own journey of healing, leadership, motherhood, and faith.
          </p>

          <p className='text-lg text-gray-700 leading-relaxed'>
            It is my prayer that as you read, pray, and apply these resources,
            you will experience the grace, wisdom, and strength that only God
            can give.
          </p>
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
          className='max-w-4xl mx-auto text-center space-y-8'>
          <h2 className='text-3xl font-serif'>Join the Community</h2>

          <p className='text-lg text-gray-700 leading-relaxed'>
            If you desire deeper spiritual growth, prayer, and fellowship with
            women of faith from around the world, you are warmly invited to join
            God’s Chayil Daughters.
          </p>

          <p className='text-lg text-gray-700 leading-relaxed'>
            A global community of women committed to walking in faith, purpose,
            and obedience to God.
          </p>

          <a
            href='https://chat.whatsapp.com/EOnBG5GXi7tIIIASheh5rd?mode=hq2tcli'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block mt-4 px-10 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition'>
            Join Here
          </a>
        </motion.div>
      </section>
    </main>
  );
};

export default Shop;
