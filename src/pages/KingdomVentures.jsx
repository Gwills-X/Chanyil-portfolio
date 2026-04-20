import { motion } from "framer-motion";
import chayilLogo from "../images/chayil_logo.png"; // Use your transparent version

const ChayilKingdomGlobal = () => {
  // Brand Colors based on the logo
  const goldText = "text-[#B8860B]"; // A slightly deeper gold for better readability on white
  const goldBorder = "border-[#B8860B]";
  const goldBg = "bg-[#B8860B]";
  const deepText = "text-gray-900";

  return (
    <main className='bg-white overflow-x-hidden selection:bg-[#B8860B] selection:text-white'>
      {/* ================= SECTION 1: CHAYIL KINGDOM ================= */}
      <section className='relative min-h-screen flex flex-col items-center justify-center px-6 py-10'>
        {/* Logo Placement */}
        <div className='mb-2'>
          <img
            src={chayilLogo}
            alt='Chayil Global Logo'
            className='w-100 md:w-100 mx-auto'
          />
        </div>

        <motion.div
          className='relative z-10 max-w-4xl mx-auto text-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}>
          {/* Section Header */}
          <div className='mb-12'>
            <h1
              className={`text-4xl md:text-6xl font-serif font-bold ${deepText} uppercase tracking-tight leading-tight mb-4`}>
              Chayil Kingdom
            </h1>
            <h2
              className={`text-lg md:text-xl ${goldText} font-medium tracking-[0.15em] uppercase mb-6`}>
              Advancing the Gospel Through Strategic Partnership
            </h2>
            <div className={`border-t-2 ${goldBorder} w-20 mx-auto mb-8`}></div>
          </div>

          {/* Body Content */}
          <div
            className={`space-y-8 text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto`}>
            <p>
              Chayil Kingdom Impact is a faith-led initiative committed to
              advancing the Gospel through intentional, high-impact missions and
              Kingdom projects across nations.
            </p>
            <p>
              Through strategic partnerships, we support transformative
              work—reaching underserved communities, empowering lives, and
              establishing lasting spiritual and economic impact.
            </p>
            <p
              className={`font-serif italic ${deepText} text-2xl border-l-4 ${goldBorder} pl-6 py-2 text-left md:text-center inline-block`}>
              "This is more than giving. This is Kingdom stewardship in action."
            </p>
          </div>

          {/* CTA Button */}
          <motion.div
            className='mt-12'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            <a
              href='https://docs.google.com/forms/d/e/1FAIpQLSeNDsJf3dgVUf2p1ewvJwBqlJ9jTiE7eH4MU6LV9r7nHAyK8w/viewform'
              target='__blank'
              className={`px-12 py-4 ${goldBg} text-white rounded-full text-lg font-bold hover:bg-black transition-all shadow-lg inline-block`}>
              Become a Kingdom Partner →
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Subtle Pattern/Divider */}
      <div className='flex items-center justify-center gap-4 opacity-30'>
        <div className={`h-px w-20 ${goldBg}`}></div>
        <span className='text-gold'>✦</span>
        <div className={`h-px w-20 ${goldBg}`}></div>
      </div>

      {/* ================= SECTION 2: CHAYIL GLOBAL ================= */}
      <section className='relative min-h-screen flex flex-col items-center justify-center px-6 py-20'>
        <motion.div
          className='relative z-10 max-w-4xl mx-auto text-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}>
          {/* Section Header */}
          <div className='mb-12'>
            <span className='text-3xl mb-4 block'>🌍</span>
            <h1
              className={`text-4xl md:text-6xl font-serif font-bold ${deepText} uppercase tracking-tight leading-tight mb-4`}>
              Chayil Global
            </h1>
            <h2
              className={`text-lg md:text-xl ${goldText} font-medium tracking-[0.15em] uppercase mb-6`}>
              Building Kingdom Ventures. Establishing Global Impact.
            </h2>
            <div className={`border-t-2 ${goldBorder} w-20 mx-auto mb-8`}></div>
          </div>

          {/* Body Content */}
          <div className='space-y-8 text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto'>
            <p>
              Chayil Global is a Kingdom-focused enterprise group committed to
              building and scaling high-impact ventures across leadership,
              enterprise, and global development.
            </p>
            <p>
              Through strategic investments and innovative ventures—including
              land development, media, education, and infrastructure—Chayil
              Global exists to create sustainable wealth, influence, and
              long-term impact across nations.
            </p>

            <div
              className={`p-8 border-2 ${goldBorder} rounded-2xl bg-gray-50 shadow-sm`}>
              <p
                className={`${goldText} font-serif text-xl mb-2 uppercase tracking-widest font-bold`}>
                Our Model
              </p>
              <p className={`${deepText} font-medium text-lg`}>
                Build with Excellence • Multiply with Purpose • Advance the
                Kingdom
              </p>
            </div>

            <p className='text-sm text-gray-400 italic'>
              A portion of all ventures directly supports Chayil Kingdom Impact
              initiatives—ensuring that enterprise and mission move together.
            </p>
          </div>

          {/* Coming Soon Text */}
          <div className='mt-16'>
            <p
              className={`text-4xl md:text-5xl font-black text-gray-200 tracking-[0.3em] uppercase`}>
              Coming Soon
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default ChayilKingdomGlobal;
