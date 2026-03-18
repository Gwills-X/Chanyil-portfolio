import { motion } from "framer-motion";
import heroBg from "../images/kindomVentures.jpeg";

const Proverbs31Land = () => {
  return (
    <main className='bg-white overflow-x-hidden'>
      {/* ================= HERO SECTION ================= */}
      <section className='relative h-[100vh] flex items-center justify-center text-white'>
        <img
          src={heroBg}
          alt='Proverbs 31 Land Initiative'
          className='absolute inset-0 w-full h-full object-cover'
        />

        <div className='absolute inset-0 bg-black/60'></div>

        <motion.div
          className='relative z-10 max-w-4xl mx-auto text-center px-6 pt-20'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          <h1 className='text-4xl md:text-6xl font-serif font-bold mb-6'>
            The Proverbs 31 Land Initiative
          </h1>

          <p className='text-xl md:text-2xl mb-4'>
            Helping women in the diaspora safely own land in Nigeria.
          </p>

          <p className='italic mb-8'>
            "She considers a field and buys it." — Proverbs 31:16
          </p>

          <a
            href='/masterclass'
            className='px-8 py-4 bg-white text-black rounded-full hover:bg-gray-200 transition'>
            Join the Free Masterclass
          </a>
        </motion.div>
      </section>

      {/* ================= VISION ================= */}
      <section className='py-20 px-6'>
        <div className='max-w-5xl mx-auto space-y-6'>
          <h2 className='text-3xl font-serif font-semibold'>Our Vision</h2>

          <p className='text-lg text-gray-700'>
            Inspired by Proverbs 31:16, this initiative empowers women to build
            legacy through wise land ownership and stewardship.
          </p>

          <p className='text-lg text-gray-700'>
            The Proverbs 31 Land Initiative exists to help women in the diaspora
            access trusted land opportunities in Nigeria for:
          </p>

          <ul className='list-disc pl-6 text-gray-700'>
            <li>Land ownership</li>
            <li>Farmland investment</li>
            <li>Generational wealth building</li>
          </ul>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className='py-20 px-6 bg-gray-50'>
        <div className='max-w-5xl mx-auto space-y-6'>
          <h2 className='text-3xl font-serif font-semibold'>
            Chayil Lands, Farms & Properties
          </h2>

          <p className='text-lg text-gray-700'>
            This initiative is powered by Chayil Lands, Farms & Properties — a
            family-led venture connecting diaspora buyers to trusted land
            opportunities across Southwestern Nigeria.
          </p>

          <p className='text-lg text-gray-700'>
            We work closely with verified landowners and realtors to ensure
            transparency, trust, and proper documentation.
          </p>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className='py-20 px-6'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-3xl font-serif font-semibold text-center mb-12'>
            What We Offer
          </h2>

          <div className='grid md:grid-cols-3 gap-8'>
            <div>
              <h3 className='font-semibold text-xl mb-3'>Land Acquisition</h3>
              <p className='text-gray-600'>
                Connecting clients to verified land opportunities.
              </p>
            </div>

            <div>
              <h3 className='font-semibold text-xl mb-3'>Title Processing</h3>
              <p className='text-gray-600'>
                Assistance with survey plans, deeds, and documentation.
              </p>
            </div>

            <div>
              <h3 className='font-semibold text-xl mb-3'>
                Security & Management
              </h3>
              <p className='text-gray-600'>
                Optional services like clearing, fencing, and monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INVESTMENT AREAS ================= */}
      <section className='py-20 px-6 bg-gray-50'>
        <div className='max-w-5xl mx-auto text-center'>
          <h2 className='text-3xl font-serif font-semibold mb-6'>
            Investment Areas
          </h2>

          <p className='text-gray-700 text-lg'>
            Oyo • Ogun • Osun • Ondo • Ekiti
          </p>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className='py-20 px-6'>
        <div className='max-w-5xl mx-auto space-y-6'>
          <h2 className='text-3xl font-serif font-semibold'>How It Works</h2>

          <ol className='list-decimal pl-6 text-gray-700 space-y-2'>
            <li>Attend the Free Masterclass</li>
            <li>Submit Investor Interest Form</li>
            <li>Review Available Opportunities</li>
            <li>Secure Land & Documentation</li>
          </ol>
        </div>
      </section>

      {/* ================= MASTERCLASS ================= */}
      <section className='py-20 px-6 bg-gray-50'>
        <div className='max-w-5xl mx-auto space-y-6'>
          <h2 className='text-3xl font-serif font-semibold'>
            Free Masterclass
          </h2>

          <p className='text-gray-700'>
            Learn how land investment works in Nigeria, avoid costly mistakes,
            and understand how the Proverbs 31 Land Initiative supports your
            journey.
          </p>
        </div>
      </section>

      {/* ================= ABOUT CHANNELL ================= */}
      <section className='py-20 px-6'>
        <div className='max-w-5xl mx-auto space-y-6'>
          <h2 className='text-3xl font-serif font-semibold'>
            About Channelle Chayil
          </h2>

          <p className='text-gray-700'>
            Channelle Chayil is the visionary behind God's Chayil Daughters,
            passionate about equipping women to build legacy, walk in purpose,
            and steward wealth with wisdom.
          </p>
        </div>
      </section>

      {/* ================= DISCLAIMER ================= */}
      <section className='py-16 px-6 bg-gray-100'>
        <div className='max-w-5xl mx-auto text-sm text-gray-600'>
          <p>
            Chayil Lands & Farms acts as a facilitator connecting buyers to land
            sellers. Buyers are encouraged to conduct independent due diligence
            before completing purchases.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className='py-20 px-6 text-center'>
        <div className='space-y-6'>
          <h2 className='text-3xl font-serif font-semibold'>
            Take the Next Step
          </h2>

          <div className='flex flex-col sm:flex-row justify-center gap-6'>
            <a
              href='/masterclass'
              className='px-8 py-4 bg-black text-white rounded-full'>
              Register for Masterclass
            </a>

            <a
              href='/investor-interest'
              className='px-8 py-4 border border-black rounded-full hover:bg-black hover:text-white transition'>
              Investor Interest Form
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Proverbs31Land;
