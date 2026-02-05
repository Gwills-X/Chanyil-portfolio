import { motion } from "framer-motion";

import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../data/testimonials";
import profilePic from "../images/IMG-20260204-WA0025.jpg";

const Testimonials = () => {
  return (
    <section className="relative py-15 px-6 overflow-hidden">
      

      <div
        className="absolute inset-0 bg-gradient-to-br 
        from-indigo-600/10 via-purple-600/10 to-pink-600/10"
      />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-1 items-center my-20"
        >
          <div className="flex w-full items-center justify-center md:justify-center">
            <div className="w-1/2 flex justify-center items-center rounded-3xl overflow-hidden shadow-xl">
              <img
                src={profilePic}
                alt="Channelle Chayil"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-black">Lives Transformed</h2>
            <p className="mt-6 text-gray-800 max-w-xl">
              Stories of what God has done through obedience, community, and faith.
              Through mentorship, leadership, and devotion, lives have been transformed
              for God’s glory.
            </p>
          </div>
        </motion.div>

        {/* MOBILE: Carousel */}
        <div className="md:hidden flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
          {testimonials.map((t, i) => (
            <div key={i} className="min-w-[85%] snap-center">
              <TestimonialCard t={t} />
            </div>
          ))}
        </div>

        {/* DESKTOP: Grid */}
        <div className="hidden md:grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
