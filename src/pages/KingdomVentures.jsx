import { motion } from "framer-motion";
import heroBg from "../images/kindomVentures.jpeg";

const Proverbs31Land = () => {
  return (
    <main className='bg-white overflow-x-hidden'>
      {/* ================= KINGDOM IMPACT HERO ================= */}
      <section className='relative h-[90vh] flex items-center justify-center text-white'>
        <img
          src={heroBg}
          alt='Chayil Kingdom Impact'
          className='absolute inset-0 w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black/60'></div>

        <motion.div
          className='relative z-10 max-w-4xl mx-auto text-center px-6'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}>
          <h1 className='text-4xl md:text-6xl font-serif font-bold mb-6'>
            Chayil Kingdom Impact
          </h1>

          <p className='text-xl md:text-2xl mb-6'>
            Empowering communities, advancing missions, and creating
            kingdom-centred opportunities across Africa.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='#'
              className='px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition'>
              Download Brief
            </a>

            <a
              href='#'
              className='px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition'>
              Register Interest
            </a>

            <a
              href='https://docs.google.com/forms/d/e/1FAIpQLSeNDsJf3dgVUf2p1ewvJwBqlJ9jTiE7eH4MU6LV9r7nHAyK8w/viewform'
              target='__blank'
              className='px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition'>
              Partner With Us
            </a>
          </div>
        </motion.div>
      </section>

      {/* ================= KINGDOM IMPACT DETAILS ================= */}
      <section className='py-20 px-6 bg-gray-50'>
        <div className='max-w-5xl mx-auto text-center space-y-6'>
          <h2 className='text-3xl font-serif font-semibold'>
            A Vision for Lasting Impact
          </h2>

          <p className='text-lg text-gray-700'>
            Chayil Kingdom Impact is a faith-driven initiative bringing together
            missions, empowerment, partnerships, and purpose-driven investment
            to create lasting transformation.
          </p>

          <p className='text-lg text-gray-700'>
            Through strategic collaboration, we are building systems that create
            spiritual, social, and economic impact across communities in Africa.
          </p>
        </div>
      </section>

      {/* ================= PROVERBS 31 INTRO ================= */}
      <section className='py-20 px-6'>
        <div className='max-w-5xl mx-auto text-center space-y-6'>
          <h2 className='text-3xl font-serif font-semibold'>
            The Proverbs 31 Land Initiative
          </h2>

          <p className='text-lg text-gray-700'>
            Helping women in the diaspora safely own land in Nigeria and build
            generational wealth through wise stewardship.
          </p>

          <p className='italic'>
            "She considers a field and buys it." — Proverbs 31:16
          </p>
        </div>
      </section>

      {/* ================= VISION + OFFER ================= */}
      <section className='py-20 px-6 bg-gray-50'>
        <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-12'>
          <div className='space-y-4'>
            <h3 className='text-2xl font-semibold'>Our Vision</h3>
            <p className='text-gray-700'>
              Inspired by Proverbs 31:16, this initiative empowers women to
              build legacy through land ownership and strategic investment.
            </p>

            <ul className='list-disc pl-6 text-gray-700'>
              <li>Land ownership</li>
              <li>Farmland investment</li>
              <li>Generational wealth building</li>
            </ul>
          </div>

          <div className='space-y-4'>
            <h3 className='text-2xl font-semibold'>What We Offer</h3>
            <ul className='space-y-3 text-gray-700'>
              <li>
                <strong>Land Acquisition:</strong> Verified opportunities
              </li>
              <li>
                <strong>Title Processing:</strong> Secure documentation
              </li>
              <li>
                <strong>Land Management:</strong> Clearing & monitoring
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= PROCESS + LOCATION ================= */}
      <section className='py-20 px-6'>
        <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-12'>
          <div className='space-y-4'>
            <h3 className='text-2xl font-semibold'>How It Works</h3>
            <ol className='list-decimal pl-6 text-gray-700 space-y-2'>
              <li>Attend the Free Masterclass</li>
              <li>Submit Interest Form</li>
              <li>Review Opportunities</li>
              <li>Secure Land & Documentation</li>
            </ol>
          </div>

          <div className='space-y-4'>
            <h3 className='text-2xl font-semibold'>Investment Areas</h3>
            <p className='text-gray-700'>Oyo • Ogun • Osun • Ondo • Ekiti</p>

            <h3 className='text-2xl font-semibold mt-6'>Powered By</h3>
            <p className='text-gray-700'>
              Chayil Lands, Farms & Properties — connecting diaspora buyers to
              trusted land opportunities across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className='py-20 px-6 text-center'>
        <div className='space-y-6'>
          <h2 className='text-3xl font-serif font-semibold'>
            Take the Next Step
          </h2>

          <div className='flex flex-col sm:flex-row justify-center gap-6'>
            <a
              href='https://docs.google.com/forms/d/e/1FAIpQLSfney6AGMAjNux0LGlGfv0TOzsLBatxNbuNZKWEC-WcSiMIOQ/viewform'
              target='__blank'
              className='px-8 py-4 bg-black text-white rounded-full'>
              Register for Masterclass
            </a>

            <a
              href='https://docs.google.com/forms/d/e/1FAIpQLSf2Ftc18AQmyk8Sm5ygRlG_5Z6uRC3nFY1D-GWF5bU1qG7y-Q/viewform'
              target='__blank'
              className='px-8 py-4 border border-black rounded-full hover:bg-black hover:text-white transition'>
              Investor Interest
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Proverbs31Land;
