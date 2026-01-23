// ================= IMPORTS =================
import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import mentorship3 from "../images/a5edebd0-6cd5-40c0-a285-c4e8effa862d.jpg";
import {
  FaPrayingHands,
  FaBullseye,
  FaHeart,
  FaUsers,
  FaGlobeAmericas,
} from "react-icons/fa";

const coreValues = [
  { title: "Faith & Obedience", icon: <FaPrayingHands /> },
  { title: "Identity & Purpose", icon: <FaBullseye /> },
  { title: "Integrity & Stewardship", icon: <FaHeart /> },
  { title: "Leadership with Compassion", icon: <FaUsers /> },
  { title: "Generational Impact", icon: <FaGlobeAmericas /> },
];

const Missions = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));
    data.append("_subject", "New Partnership Request");
    data.append("_template", "table");
    data.append("_captcha", "false");
    data.append("_replyto", formData.email);
    data.append(
      "_autoresponse",
      `Hello ${formData.name},

Thank you for partnering with Channelle Chayil Ministry.

Bank: XYZ Bank
Account Name: Channelle Chayil
Account Number: 1234567890

Blessings,
Channelle Chayil Ministry`
    );

    try {
      const response = await fetch("https://formsubmit.co/partner@channellechayil.com", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", amount: "", message: "" });

        // Redirect to WhatsApp after submission
        setTimeout(() => {
          const whatsappNumber = "447380923100";
          const whatsappMessage = encodeURIComponent(
            "Hello! I just submitted the partnership form and would like to connect."
          );
          window.location.href = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
        }, 3000);
      } else alert("Submission failed. Please try again.");
    } catch (error) {
      console.error(error);
      alert("Network error. Please try again later.");
    }
  };

  return (
    <main className="bg-white">
      <Helmet>
        <title>Missions & Values | Channelle Chayil Ministry</title>
        <meta
          name="description"
          content="Learn about Channelle Chayil Ministry's mission, vision, and core values. Partner with us to make an impact."
        />
        <link rel="canonical" href="https://channellechayil.com/missions" />
      </Helmet>

      {/* ================= HEADER ================= */}
      <section className="py-24 px-6 bg-gradient-to-r from-gray-500 via-gray-600 to-gray-500 relative h-dvh flex items-center justify-center">
        <img
          src={mentorship3}
          alt="Mission header"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl text-center relative z-10"
        >
          <h1 className="text-4xl md:text-5xl text-white font-serif font-semibold mb-4">
            Mission, Vision & Values
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-white">
            The foundation guiding the work, leadership, and movement.
          </p>
        </motion.div>
      </section>

      {/* ================= MISSION ================= */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-serif">Mission</h2>
          <p className="text-xl text-gray-700">
            To raise faith-filled, purpose-driven women grounded in identity,
            obedience, and spiritual maturity — equipped to serve with love and impact.
          </p>
        </div>
      </section>

      {/* ================= VISION ================= */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-serif">Vision</h2>
          <p className="text-xl text-gray-700">
            A global movement of women walking confidently in their God-given
            calling, influencing families, communities, and nations.
          </p>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif mb-12 text-center">Core Values</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="border rounded-xl p-6 text-center hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4 flex justify-center">{value.icon}</div>
                <h4 className="font-semibold">{value.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PARTNER FORM ================= */}
      <section id="partner" className="py-24 px-6 bg-purple-50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-serif">Partner With Us</h2>
          <p className="text-gray-700">Fill the form below. Account details will be sent to your email.</p>

          {submitted && (
            <p className="text-green-600 font-semibold">
              Thank you! Check your email for partnership details. Redirecting to WhatsApp…
            </p>
          )}

          <form onSubmit={handleSubmit} className="grid gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 border rounded-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 border rounded-lg"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="p-3 border rounded-lg"
            />
            <input
              type="number"
              name="amount"
              placeholder="Amount (Optional)"
              value={formData.amount}
              onChange={handleChange}
              className="p-3 border rounded-lg"
            />
            <textarea
              name="message"
              placeholder="How Would You Like To Partner?"
              value={formData.message}
              onChange={handleChange}
              className="p-3 border rounded-lg"
            />
            <button className="py-3 bg-black text-white rounded-full">
              Submit Partnership Request
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Missions;
