import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
};

const services = [
  {
    title: "Prayer",
    description:
      "Short prayer sessions for encouragement, support, and spiritual strengthening during important moments or challenging seasons.",
    button: "Book a Prayer Call",
    link: "https://calendly.com/channellechayil/prayer-call",
  },
  {
    title: "Mentorship Programme",
    description:
      "A deeper journey of mentorship and leadership development for women ready to grow spiritually and step into their calling.",
    button: "Learn More",
    link: "/courses",
  },
  {
    title: "Resources",
    description:
      "Faith-based teachings, prayer guides, and resources designed to support your spiritual journey and personal growth.",
    button: "Visit the Shop",
    link: "/shop",
  },
];

const WaysToWork = () => {
  return (
    <section className='py-24 px-6 bg-gray-50'>
      <div className='max-w-6xl mx-auto'>
        {/* SECTION TITLE */}
        <h2 className='text-3xl md:text-4xl font-serif text-center mb-16'>
          Work With Me
        </h2>

        {/* SERVICES GRID */}
        <div className='grid md:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial='initial'
              whileInView='whileInView'
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className='bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition'>
              <h3 className='text-2xl font-serif mb-4'>{service.title}</h3>

              <p className='text-gray-700 mb-6 leading-relaxed'>
                {service.description}
              </p>

              <a
                href={service.link}
                target={service.link.startsWith("http") ? "_blank" : "_self"}
                rel='noopener noreferrer'
                className='inline-block px-6 py-3 bg-black text-white rounded-full hover:bg-transparent hover:text-black hover:border hover:border-black transition'>
                {service.button}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WaysToWork;
