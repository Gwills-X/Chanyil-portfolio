import { motion } from "framer-motion";
import heroBg from "../images/kindomVentures.jpeg"; // second green image
import logo from "../images/kindomVentures 2.jpeg"; // first logo image
import downloadPDF from "../assets/INVESTOR BROCHURE_032407.pdf";

const KingdomVentures = () => {
  return (
    <main className='bg-white overflow-x-hidden'>
      {/* ================= HERO SECTION ================= */}
      <section className='relative  h-[100vh] flex items-center justify-center text-white'>
        {/* Background Image */}
        <img
          src={heroBg}
          alt='Chayil Lands Farms and Properties'
          className='absolute inset-0 w-full h-full object-cover object-center'
        />

        {/* Dark Overlay for readability */}
        <div className='absolute inset-0 bg-black/60'></div>

        {/* Content */}
        <motion.div
          className='relative z-10 max-w-4xl mx-auto text-center px-6 pt-20'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          <h1 className='text-4xl md:text-6xl font-serif font-bold mb-6'>
            Kingdom Ventures
          </h1>

          <p className='text-xl md:text-2xl mb-6'>
            Faith-Driven Stewardship • Sustainable Wealth • Generational Impact
          </p>

          {/* Logo under heading */}
          <img
            src={logo}
            alt='Chayil Lands Logo'
            className='mx-auto mt-6 w-40 md:w-56 bg-white p-3 rounded'
          />
        </motion.div>
      </section>

      {/* ================= CHAYIL LANDS ================= */}
      <section className='py-24 px-6 bg-white'>
        <div className='max-w-5xl mx-auto space-y-8'>
          <h2 className='text-3xl md:text-4xl font-serif font-semibold'>
            Chayil Lands, Farms & Properties
          </h2>

          <p className='text-lg text-gray-700 leading-relaxed'>
            Chayil Lands, Farms & Properties exists as a kingdom stewardship
            initiative, rooted in the belief that land is not merely an
            asset—but an inheritance entrusted by God for legacy, provision, and
            impact.
          </p>

          <p className='text-lg text-gray-700 leading-relaxed'>
            We are a faith-led agribusiness and property venture focused on
            strategic land acquisition, sustainable farming, and long-term
            property development across Nigeria.
          </p>

          <ul className='list-disc pl-6 text-lg text-gray-700 space-y-2'>
            <li>Strategic acquisition and stewardship of fertile land</li>
            <li>Sustainable agricultural systems and farm estates</li>
            <li>Ethical, impact-driven investment opportunities</li>
            <li>Support for local economies and future generations</li>
            <li>Transparent governance and integrity</li>
          </ul>

          <div className='flex flex-col sm:flex-row gap-6 mt-10'>
            <a
              href={downloadPDF}
              download
              className='px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition'>
              Download Investors’ Brochure
            </a>

            <a
              href='/investor-interest'
              className='px-8 py-4 border border-black rounded-full hover:bg-black hover:text-white transition'>
              Investor Interest Form
            </a>
          </div>
        </div>
      </section>

      {/* ================= CHAYIL DIGITAL ================= */}
      <section className='py-24 px-6 bg-gray-50'>
        <div className='max-w-5xl mx-auto space-y-8'>
          <h2 className='text-3xl md:text-4xl font-serif font-semibold'>
            Chayil Digital
          </h2>

          <p className='text-lg text-gray-700 leading-relaxed'>
            A faith-centred creative and digital branding agency helping
            ministries and purpose-driven brands build visibility without
            compromising values.
          </p>

          <ul className='list-disc pl-6 text-lg text-gray-700 space-y-2'>
            <li>Brand identity and storytelling</li>
            <li>Ministry & business positioning</li>
            <li>Social media strategy</li>
            <li>Website audits</li>
            <li>Creative consultation</li>
          </ul>

          <a
            href='https://calendly.com/channellechayil/free-consultation-call'
            target='__blank'
            className='inline-block mt-6 px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition'>
            Book a Free Consultation
          </a>
        </div>
      </section>
    </main>
  );
};

export default KingdomVentures;
