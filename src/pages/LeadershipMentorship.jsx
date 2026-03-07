import { motion } from "framer-motion";

/*
COURSES DATA
All programmes are stored here.
This makes the page easy to update without editing the layout.
*/

const courses = [
  {
    category: "Leadership & Ministry Development",
    items: [
      {
        title: "School of Leadership",
        duration: "12 Weeks",
        format:
          "Bi-Weekly Classes + Weekly One-to-One Zoom Sessions (30 Minutes)",
        price: "£200",
        desc: "A transformational programme for women called to lead from intimacy with Christ, rooted in love and established in wisdom, faith and obedience.",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfGWWbHqYWpoHRIHUhJkUIkbR2e98UY59LOwDmSD5m2E_Prag/viewform",
        cta: "Join the School of Leadership",
      },

      {
        title: "Shepherd’s Care Systems Blueprint",
        duration: "45 Minute Live Zoom Class",
        format: "Live Session + Shepherd’s Care Systems Manual",
        price: "£175",
        desc: "A practical framework for pastors and ministry leaders who want to establish strong pastoral care systems and leadership structures.",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSeMRBD6BMHSFN1gew10xLrb5ILYZMvW0Cy0RSHLnlqsCPEzWg/viewform",
        cta: "Access the Blueprint",
      },

      {
        title: "Chayil Ministry Presence Course",
        duration: "6 Weeks",
        format: "Weekly One-to-One Zoom Sessions (45 Minutes)",
        price: "£250",
        desc: "Designed for ministry leaders who want to build a clear, authentic and impactful ministry presence.",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfcX2FZ1nV7Cpwkpl_O6SC8Sz56MqEgwYxDZBGD1RrbrskW-g/viewform",
        cta: "Start the Course",
      },
    ],
  },

  {
    category: "Mentorship & Personal Growth",
    items: [
      {
        title: "Chayil Daughter Discipleship & Mentorship",
        duration: "12 Weeks",
        format: "Weekly One-to-One Zoom Sessions (30 Minutes)",
        price: "£200",
        desc: "A discipleship and mentorship journey for women seeking deeper spiritual growth, identity and purpose.",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSdVxqX55SC_TWPEXducfwA2BHWfHyTV3YFPRUawaHjRw6Ao1g/viewform",
        cta: "Apply for Mentorship",
      },

      {
        title: "Strong Mothers Mentorship",
        duration: "8 Weeks",
        format: "Weekly One-to-One Zoom Sessions (45 Minutes)",
        price: "£150",
        desc: "A mentorship programme for single mothers seeking healing, spiritual guidance and strength.",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSduvpX9s_iXRKBxndjsQOdbs20ByhFTmUd0cRFWaU1jZJ_1gg/viewform",
        cta: "Begin Your Journey",
      },

      {
        title: "Restoration & Purpose Coaching",
        duration: "8 Weeks",
        format: "Weekly One-to-One Zoom Sessions (45 Minutes)",
        price: "£150",
        desc: "Supportive coaching for women navigating separation or divorce while rediscovering identity and purpose.",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfAboUlDHsMp33zKIDcHsBHUzJLIpwARF-RTVh6Xpwj-r9J9A/viewform",
        cta: "Book a Session",
      },
    ],
  },

  {
    category: "Personal Development",
    items: [
      {
        title: "Chayil Glow Up Bootcamp",
        duration: "5-Day Intensive Bootcamp",
        format:
          "Daily One-to-One Sessions + Teaching Videos + Workbook Exercises",
        price: "Summer Programme",
        desc: "A powerful transformation programme helping women rebuild confidence, identity and life direction.",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSc5cmhknE50wNWxQVW_76Bz95zE32UxgtpT-DzCC_kH2ZFvDw/viewform",
        cta: "Register For The Bootcamp",
      },
    ],
  },

  {
    category: "Brand & Business Development",
    items: [
      {
        title: "Strategic Consulting",
        duration: "4 Weeks",
        format: "Weekly One-to-One Zoom Sessions (45 Minutes)",
        price: "£250",
        desc: "Strategic sessions for individuals building businesses, ministries or personal brands.",
        link: "https://calendly.com/channellechayil/free-consultation-call",
        cta: "Book a Consulting Session",
      },

      {
        title: "Brand & Create – Beginner MasterClass",
        duration: "2 Hour Live Zoom Session",
        format: "Live Masterclass",
        price: "£75",
        desc: "A beginner masterclass teaching branding and content creation so you can start building your brand online.",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSci0LZ4u1JXtkW6rPn7PzBg9YqSxgQzxrKHv1QeTglEfXH-BQ/viewform",
        cta: "Enrol in the MasterClass",
      },
    ],
  },
];

const CoursesPage = () => {
  return (
    <main className='bg-white'>
      {/* ================= HERO ================= */}
      <section className='py-32 bg-gradient-to-b from-gray-50 to-white text-center px-6'>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className='max-w-4xl mx-auto'>
          <h1 className='text-5xl font-serif mb-6'>Work With Channelle</h1>

          <p className='text-lg text-gray-700 leading-relaxed'>
            Mentorship, leadership development and strategic guidance designed
            to equip women and leaders to grow in faith, purpose and impact.
          </p>

          <p className='italic mt-6 text-gray-600'>
            “As iron sharpens iron, so one person sharpens another.” — Proverbs
            27:17
          </p>
        </motion.div>
      </section>

      {/* ================= COURSES ================= */}
      <section className='py-28 px-6'>
        <div className='max-w-7xl mx-auto'>
          {courses.map((section, index) => (
            <div key={index} className='mb-28'>
              {/* CATEGORY TITLE */}
              <h2 className='text-3xl font-serif text-center mb-16'>
                {section.category}
              </h2>

              {/* COURSES GRID */}
              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {section.items.map((course, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -6 }}
                    className='border rounded-2xl p-8 bg-white shadow-sm hover:shadow-xl transition'>
                    {/* COURSE TITLE */}
                    <h3 className='text-xl font-semibold mb-3'>
                      {course.title}
                    </h3>

                    {/* COURSE INFO */}
                    <p className='text-sm text-gray-600 mb-1'>
                      <strong>Duration:</strong> {course.duration}
                    </p>

                    <p className='text-sm text-gray-600 mb-4'>
                      <strong>Format:</strong> {course.format}
                    </p>

                    <p className='text-gray-700 mb-6'>{course.desc}</p>

                    {/* PRICE BADGE */}
                    <div className='mb-6'>
                      <span className='bg-black text-white px-4 py-1 rounded-full text-sm'>
                        {course.price}
                      </span>
                    </div>

                    {/* CTA BUTTON */}
                    <a
                      href={course.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-block w-full text-center px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition'>
                      {course.cta}
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CONSULTATION CTA ================= */}
      <section className='py-24 bg-gray-100 text-center px-6'>
        <div className='max-w-3xl mx-auto'>
          <h2 className='text-3xl font-serif mb-6'>
            Not Sure Which Programme Is Right For You?
          </h2>

          <p className='text-gray-700 mb-8'>
            If you're unsure which programme best suits your current season, you
            can book a consultation session where we will discuss your goals and
            identify the best next steps.
          </p>

          <a
            href='https://calendly.com/channellechayil/free-consultation-call'
            target='_blank'
            rel='noopener noreferrer'
            className='px-10 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition'>
            Book a Consultation
          </a>
        </div>
      </section>
    </main>
  );
};

export default CoursesPage;
