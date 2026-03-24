import { motion } from "framer-motion";
import missionsVideo from "../videos/WhatsApp Video 2026-03-24 at 4.35.16 PM.mp4";
import missionsPdf from "../assets/CHAYIL Ministries Mission Kit.pdf";
import bgImage from "../images/WhatsApp Image 2026-03-24 at 10.14.59 AM.jpeg";
export default function MissionTrip() {
  return (
    <div className='w-full min-h-screen bg-gray-50 text-gray-900 max-lg:pt-25'>
      {/* Hero / Flyer Section */}
      <section className='w-full h-170 max-lg:h-150 flex flex-col md:flex-row items-center bg-gray-100'>
        {/* Text on the left */}
        <motion.div
          className='md:w-1/2 px-6 md:px-16 text-center md:text-left w-full '
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}>
          <h1 className='text-4xl md:text-5xl font-bold mb-4 text-gray-900'>
            Chayil Ministries Nigeria Mission 2026
          </h1>
          <p className='text-xl md:text-2xl text-yellow-600 font-semibold mb-6'>
            “Arise, shine; for your light has come.” – Isaiah 60:1
          </p>
          {/* PDF Download */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <h2 className='text-2xl font-bold mb-4'>Mission Guide</h2>
            <p className='mb-4'>
              Download the PDF guide for schedules, preparation tips, and
              essential information for the mission trip.
            </p>
          </motion.div>
          <div className='flex justify-left gap-5'>
            <motion.a
              href={missionsPdf}
              download={true}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition'>
              Download PDF
            </motion.a>
            <a
              href='https://docs.google.com/forms/d/e/1FAIpQLSdJpfYuO_por-xtmrxvnwJWQIIuajySDn9T7HrIU738RfLsFQ/viewform'
              target='__blank'
              className='bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition'>
              Join the Mission
            </a>
          </div>
        </motion.div>

        {/* Video */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className=' w-1/2 max-lg:w-full px-5 mt-5 pt-2'>
          <h2 className='text-2xl font-bold mb-4'>Mission Video</h2>
          <div className='aspect-video w-full rounded-lg overflow-hidden shadow-lg border'>
            <iframe
              src={missionsVideo}
              title='Chayil Mission 2026'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              className='w-full h-full'></iframe>
          </div>
        </motion.div>
      </section>

      {/* PDF Guide & Video Section */}
      <section className='max-w-6xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-10 items-center'></section>

      {/* Mission Overview */}
      <section className='max-w-6xl mx-auto py-16 px-4 space-y-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          <h2 className='text-3xl font-bold text-center mb-6'>
            Our Mission Focus
          </h2>
          <p className='text-lg text-center md:text-left'>
            In August 2026, Chayil Ministries will be travelling to Jos, Plateau
            State, Nigeria for a powerful time of mission, outreach, and
            ministry. Through practical outreach and spiritual ministry, we aim
            to impact lives and strengthen communities.
          </p>
        </motion.div>

        {/* Activities Grid */}
        <motion.div
          className='grid md:grid-cols-3 gap-6 mt-10'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}>
          {[
            {
              title: "Widows Outreach",
              desc: "Support, encouragement, and prayer for widows and vulnerable families.",
            },
            {
              title: "Orphanage & Children",
              desc: "Visit children’s homes to bless kids with prayer, activities, and support.",
            },
            {
              title: "School Visits",
              desc: "Motivate young people with talks, prayer, and messages of faith.",
            },
            {
              title: "Hospital Outreach",
              desc: "Encourage patients, families, and healthcare workers.",
            },
            {
              title: "Evangelism",
              desc: "Share the gospel and pray with community members.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className='bg-white p-6 rounded-xl shadow hover:shadow-lg transition'>
              <h3 className='text-xl font-bold mb-2'>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Conference Section */}
      <section className='bg-yellow-50 py-16 px-4'>
        <div className='max-w-5xl mx-auto space-y-6 text-center'>
          <h2 className='text-3xl font-bold'>The Chayil Conference</h2>
          <p>
            A highlight of the mission will be an empowerment and worship
            gathering designed to strengthen believers. Activities include
            teaching, worship, testimonies, and community empowerment.
          </p>
          <ul className='list-disc list-inside space-y-2 text-left md:text-center md:flex md:flex-wrap md:justify-center md:gap-6'>
            <li>Teaching and Preaching</li>
            <li>Worship and Prayer</li>
            <li>Testimonies and Ministry</li>
            <li>Community Empowerment</li>
          </ul>
        </div>
      </section>

      {/* Join / Support Section */}
      <section
        id='join'
        className='bg-gray-100 py-16 px-4 text-center space-y-6'>
        <h2 className='text-3xl font-bold'>Join or Support the Mission</h2>
        <p>
          Whether you want to serve, pray, or provide practical support, every
          role is valuable.
        </p>
        <div className='flex flex-col md:flex-row justify-center gap-6 mt-6'>
          <a
            href='https://docs.google.com/forms/d/e/1FAIpQLSdJpfYuO_por-xtmrxvnwJWQIIuajySDn9T7HrIU738RfLsFQ/viewform'
            target='__blank'
            className='bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition'>
            Join the Mission
          </a>
          <a
            href='https://www.gofundme.com/f/gods-chayil-daughters-nigeria-mission-outreach-trip?attribution_id=6ed3cb46-18db-48df-9c83-d2f81dfcb94f'
            target='__blank'
            className='bg-green-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-600 transition'>
            Support the Mission
          </a>
          <a
            href='https://chat.whatsapp.com/FoGIS6uPbK04ypYuD2irOb?mode=gi_t'
            target='__blank'
            className='bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 transition'>
            Prayer Team Sign-up
          </a>
        </div>
      </section>
    </div>
  );
}
