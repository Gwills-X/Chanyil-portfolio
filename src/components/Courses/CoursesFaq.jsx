import { useState } from "react";
import { motion } from "framer-motion";

const faqData = [
  {
    question: "Why do some of Channelle’s programmes have a fee?",
    answer: `The scripture “Freely you have received; freely give” (Matthew 10:8) is something I take seriously.

For that reason, prayer, worship, and the teaching of God’s Word are never behind a paywall. These are gifts from God and they are shared freely.

Courses and programmes however involve structured mentorship, teaching preparation, resources, and significant time investment. In those cases, a fee is applied to support the practical work required to run these programmes well.

I have also seen that when people invest in something, they tend to engage with greater commitment and discipline.

At the same time, there are always free opportunities for prayer, teaching, and discipleship within the community, and community members receive discounted access to programmes.

The heart behind everything is simple: to freely give what God has given, while stewarding the time and resources required to serve people well.`,
  },
];

const CoursesFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='py-28 px-6 bg-gray-50'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-3xl md:text-4xl font-serif text-center mb-12'>
          Frequently Asked Questions
        </h2>

        {faqData.map((faq, index) => (
          <div key={index} className='border-b border-gray-200 py-6'>
            <button
              onClick={() => toggleFAQ(index)}
              className='w-full text-left flex justify-between items-center text-xl font-serif'>
              {faq.question}
              <span className='text-2xl'>
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className='mt-6 text-gray-700 space-y-4 leading-relaxed'>
                {faq.answer.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </motion.div>
            )}
          </div>
        ))}

        {/* CONTACT NOTE */}
        <div className='mt-12 text-center text-gray-700 leading-relaxed'>
          <p>
            If finances are a genuine barrier, please feel free to reach out. We
            never want cost to prevent someone from growing spiritually.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoursesFAQ;
