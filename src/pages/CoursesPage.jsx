import { motion } from "framer-motion";
import { useState } from "react";

import profile from "../images/WhatsApp Image 2026-03-10 at 11.52.35 AM.jpeg";
import CoursesFAQ from "../components/Courses/CoursesFaq";
import mothers from "../videos/mothers.mp4";
import Restoration from "../videos/Restoration.mp4";
import chayilMinistryPresence from "../videos/chayilministrypresence.mp4";
import shepherdcareblueprint from "../videos/shepherdcareblueprint.mp4";
import chayilMentorship from "../videos/Chayil Daughter Mentorship (1).mp4";

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
        video: "/videos/leadership.mp4",
      },

      {
        title: "Shepherd’s Care Systems Blueprint",
        duration: "45 Minute Live Zoom Class",
        format: "Live Session + Shepherd’s Care Systems Manual",
        price: "£175",
        desc: "A practical framework for pastors and ministry leaders who want to establish strong pastoral care systems and leadership structures.",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSeMRBD6BMHSFN1gew10xLrb5ILYZMvW0Cy0RSHLnlqsCPEzWg/viewform",
        cta: "Access the Blueprint",
        video: shepherdcareblueprint,
      },

      {
        title: "Chayil Ministry Presence Course",
        duration: "6 Weeks",
        format: "Weekly One-to-One Zoom Sessions (45 Minutes)",
        price: "£250",
        desc: "Designed for ministry leaders who want to build a clear, authentic and impactful ministry presence.",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfcX2FZ1nV7Cpwkpl_O6SC8Sz56MqEgwYxDZBGD1RrbrskW-g/viewform",
        cta: "Start the Course",
        video: chayilMinistryPresence,
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
        video: chayilMentorship,
      },

      {
        title: "Strong Mothers Mentorship",
        duration: "8 Weeks",
        format: "Weekly One-to-One Zoom Sessions (45 Minutes)",
        price: "£150",
        desc: "A mentorship programme for single mothers seeking healing, spiritual guidance and strength.",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSduvpX9s_iXRKBxndjsQOdbs20ByhFTmUd0cRFWaU1jZJ_1gg/viewform",
        cta: "Begin Your Journey",
        video: mothers,
      },

      {
        title: "Restoration & Purpose Coaching",
        duration: "8 Weeks",
        format: "Weekly One-to-One Zoom Sessions (45 Minutes)",
        price: "£150",
        desc: "Supportive coaching for women navigating separation or divorce while rediscovering identity and purpose.",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfAboUlDHsMp33zKIDcHsBHUzJLIpwARF-RTVh6Xpwj-r9J9A/viewform",
        cta: "Book a Session",
        video: Restoration,
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
        video: "/videos/glowup.mp4",
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
        video: "/videos/consulting.mp4",
      },

      {
        title: "Brand & Create – Beginner MasterClass",
        duration: "2 Hour Live Zoom Session",
        format: "Live Masterclass",
        price: "£75",
        desc: "A beginner masterclass teaching branding and content creation.",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSci0LZ4u1JXtkW6rPn7PzBg9YqSxgQzxrKHv1QeTglEfXH-BQ/viewform",
        cta: "Enrol in the MasterClass",
        video: "/videos/branding.mp4",
      },
    ],
  },
];

const CoursesPage = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <main className='bg-white'>
      {/* HERO */}
      <section className='pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white px-6 lg:px-20'>
        <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-6'>
            <h1 className='text-5xl md:text-6xl font-serif font-semibold text-gray-900'>
              Work With Channelle
            </h1>

            <p className='text-lg md:text-xl text-gray-700'>
              Mentorship, leadership development, and strategic guidance
              designed to equip women.
            </p>

            <p className='italic text-gray-600'>
              “As iron sharpens iron…” — Proverbs 27:17
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}>
            <img
              src={profile}
              alt='Chayil Courses'
              className='rounded-2xl shadow-2xl w-full h-[500px] object-cover'
            />
          </motion.div>
        </div>
      </section>

      {/* COURSES */}
      <section className='py-28 px-6'>
        <div className='max-w-7xl mx-auto'>
          {courses.map((section, index) => (
            <div key={index} className='mb-28'>
              <h2 className='text-3xl font-serif text-center mb-16'>
                {section.category}
              </h2>

              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {section.items.map((course, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -6 }}
                    className='border rounded-2xl p-8 bg-white shadow-sm hover:shadow-xl transition'>
                    <h3 className='text-xl font-semibold mb-3'>
                      {course.title}
                    </h3>

                    <p className='text-gray-700 mb-3'>{course.desc}</p>

                    <p className='text-sm text-gray-600'>
                      <strong>Duration:</strong> {course.duration}
                    </p>

                    <p className='text-sm text-gray-600'>
                      <strong>Format:</strong> {course.format}
                    </p>

                    <p className='text-sm mb-4'>
                      <strong>Investment:</strong> {course.price}
                    </p>

                    {/* WATCH VIDEO */}
                    {course.video && (
                      <button
                        onClick={() => setActiveVideo(course.video)}
                        className='w-full mb-3 px-6 py-3 bg-gray-100 rounded-full hover:bg-gray-200'>
                        ▶ Watch Preview
                      </button>
                    )}

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

      <CoursesFAQ />

      {/* VIDEO MODAL */}
      {activeVideo && (
        <div className='fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-4'>
          <div className='relative flex items-center justify-center w-full'>
            {/* Close Button */}
            <button
              onClick={() => setActiveVideo(null)}
              className='absolute top-4 right-4 text-white text-3xl z-10'>
              ✕
            </button>

            {/* Video Wrapper */}
            <div className='w-full max-w-sm md:max-w-md lg:max-w-lg'>
              <video
                src={activeVideo}
                controls
                autoPlay
                className='w-full h-auto max-h-[80vh] rounded-2xl shadow-2xl object-contain'
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default CoursesPage;
