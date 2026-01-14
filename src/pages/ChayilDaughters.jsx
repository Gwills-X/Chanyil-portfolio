import { motion } from "framer-motion";
import {
	FaPrayingHands,
	FaBook,
	FaUserFriends,
	FaHandsHelping,
	FaChalkboardTeacher,
} from "react-icons/fa";
import { FaPeopleGroup, FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";

import backgroundPic from "../images/IMG-20260106-WA0081.jpg";

// Charity images
import charity1 from "../images/47b226c1-abcb-450d-983b-f1bfa8d36526.jpg";
import charity2 from "../images/IMG-20260114-WA0038.jpg";
import charity3 from "../images/IMG-20260114-WA0029.jpg";
import charity4 from "../images/IMG-20260114-WA0033.jpg";
import charity5 from "../images/IMG-20260114-WA0034.jpg";
import charity6 from "../images/IMG-20260114-WA0035.jpg";

// ================= ACTIVITIES =================
const activities = [
	{
		title: "Prayer & Intercession",
		icon: <FaPrayingHands />,
		description:
			"Engaging in consistent prayer and intercession to support our community spiritually.",
	},
	{
		title: "Bible Studies & Teaching",
		icon: <FaBook />,
		description:
			"Hosting structured Bible studies and teaching sessions to deepen knowledge and faith.",
	},
	{
		title: "Mentorship & Check-Ins",
		icon: <FaUserFriends />,
		description:
			"Providing mentorship and regular check-ins to guide personal and spiritual growth.",
	},
	{
		title: "Charitable & Mission Outreach",
		icon: <FaHandsHelping />,
		description:
			"Organizing charitable initiatives and mission outreach to serve those in need.",
	},
	{
		title: "Leadership & Spiritual Formation",
		icon: <FaChalkboardTeacher />,
		description:
			"Equipping women with leadership skills and spiritual formation to impact communities.",
	},
	{
		title: "Events & Programmes",
		icon: <FaPeopleGroup />,
		description:
			"Faith-led gatherings that empower, build community, and strengthen women.",
	},
];

// ================= TESTIMONIALS =================
const testimonials = [
	{
		name: "Apostle Joseph Seidu",
		text: "Since coming to Ghana, Channelle Chayil has tirelessly poured herself into the lives of widows, orphans, and single mothers. Through her vision and commitment, sustainable systems were established—empowering many widows through farming initiatives, while others were supported to start small businesses. Her impact has gone far beyond relief; she has restored dignity, purpose, and hope.",
	},
	{
		name: "Nanlop",
		text: "Sis Channelle is a devoted minister whose life truly reflects the heart of God. Through God’s Chayil Daughters, many women and young people have been empowered to grow in faith, prayer, leadership, and purpose. Her life of service continues to inspire all who encounter her ministry.",
	},
];

const ChayilDaughters = () => {
	const whatsappGroupLink = "https://chat.whatsapp.com/YourGroupInviteLink";

	const charityImages = [charity1,charity2,  charity3, charity4, charity5, charity6];

	return (
		<main className="bg-white">
			{/* ================= HEADER ================= */}
			<section className="py-24 px-6 h-dvh relative flex items-center justify-center bg-gray-700">
				<img
					src={backgroundPic}
					alt="God’s Chayil Daughters"
					className="absolute inset-0 w-full h-full object-cover opacity-50"
				/>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="relative z-10 max-w-4xl text-center text-white"
				>
					<h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4">
						God’s Chayil Daughters
					</h1>
					<div className="w-24 h-1 bg-white mx-auto mb-6 rounded-full"></div>
					<p className="text-lg">
						A global sisterhood rooted in faith, unity, and purpose.
					</p>

					<div className="mt-8">
						<a
							href="https://linktr.ee/godschayildaughters"
							target="_blank"
							rel="noopener noreferrer"
							className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-black hover:text-white transition"
						>
							Explore God’s Chayil Daughters
						</a>
					</div>
				</motion.div>
			</section>

			{/* ================= INTRO ================= */}
			<section className="py-20 px-6">
				<div className="max-w-4xl mx-auto text-gray-700 text-lg space-y-6">
					<p>
						God’s Chayil Daughters is a global community of women from different
						nations who gather for prayer, Bible study, mentorship, and
						charitable outreach.
					</p>
					<p>
						The community exists to strengthen women spiritually, emotionally,
						and practically—while fostering unity, accountability, and service.
					</p>
				</div>
			</section>

			{/* ================= ACTIVITIES ================= */}
			<section className="py-24 px-6 bg-gray-50">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-3xl font-serif text-center mb-12">What We Do</h2>

					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{activities.map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="border rounded-xl p-6 text-center hover:shadow-lg transition"
							>
								<div className="text-4xl mb-4 flex justify-center">
									{item.icon}
								</div>
								<h4 className="font-semibold text-lg mb-2">{item.title}</h4>
								<p>{item.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* ================= TESTIMONIALS ================= */}
			<section className="py-20 px-6">
				<div className="max-w-4xl mx-auto">
					<h3 className="text-3xl font-serif text-center mb-12">Testimonials</h3>

					<div className="grid md:grid-cols-2 gap-8">
						{testimonials.map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="border rounded-xl p-6 shadow-sm hover:shadow-lg transition"
							>
								<p className="italic mb-4">"{item.text}"</p>
								<p className="font-semibold text-right">— {item.name}</p>
							</motion.div>
						))}
					</div>

					<div className="mt-10 text-center">
						<Link
							to="/testimonials"
							className="px-8 py-3 bg-black text-white rounded-full hover:bg-white hover:text-black border transition"
						>
							View More Testimonies
						</Link>
					</div>
				</div>
			</section>

			{/* ================= CHAYIL MINISTRIES ================= */}
			<section className="py-24 px-6 bg-white">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-serif text-center mb-10">
						About CHAYIL Ministries
					</h2>

					<div className="max-w-4xl mx-auto text-gray-700 text-lg space-y-6 mb-16">
						<p>
							CHAYIL Ministries is a faith-led charitable initiative committed
							to restoring dignity, hope, and practical support to women and
							children in vulnerable communities, particularly across Africa.
						</p>

						<ul className="list-disc pl-6 space-y-3">
							<li>
								Supporting widows and single mothers through seed funding and
								small business empowerment.
							</li>
							<li>
								Partnering with children’s homes to provide food, education,
								clothing, and care.
							</li>
							<li>
								Mission and outreach initiatives bringing aid and spiritual
								encouragement.
							</li>
						</ul>

						<blockquote className="border-l-4 pl-4 italic">
							“For I was hungry and you gave Me food…”
							<br />— Matthew 25:35–36
						</blockquote>

						<blockquote className="border-l-4 pl-4 italic">
							“God gave us the ministry of reconciliation.”
							<br />— 2 Corinthians 5:18–19
						</blockquote>
					</div>

					
{/* ================= IMAGES GRID (no Swiper) ================= */}
<section className="py-24 px-6 bg-white">
	<div className="max-w-6xl mx-auto">
		<h3 className="text-3xl font-serif text-center mb-4">
			Our Outreach in Action
		</h3>
		<p className="text-center text-gray-700 mb-12">
			Snapshots from our missions, charity work, and community outreach.
		</p>

		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
			{charityImages.map((img, i) => (
				<img
					key={i}
					src={img}
					alt={`CHAYIL Ministries outreach ${i + 1}`}
					className="w-full max-w-[400px] h-64 sm:h-72 md:h-80 object-cover rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
				/>
			))}
		</div>
	</div>
</section>



					<div className="text-center">
						<a
							href="https://tr.ee/8pZILy41ri"
							target="_blank"
							rel="noopener noreferrer"
							className="px-10 py-4 bg-black text-white rounded-full hover:bg-white hover:text-black border transition"
						>
							Support CHAYIL Ministries
						</a>
					</div>
				</div>
			</section>

			{/* ================= WHATSAPP ================= */}
			<section className="py-24 px-6 bg-purple-50 text-center">
				<h2 className="text-3xl font-serif mb-4">
					Join God’s Chayil Daughters on WhatsApp
				</h2>
				<p className="text-lg text-gray-700 mb-8">
					Connect with sisters globally for prayer, growth, and fellowship.
				</p>

				<a
					href={whatsappGroupLink}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
				>
					<FaWhatsapp className="text-2xl" />
					Join Our WhatsApp Group
				</a>
			</section>
		</main>
	);
};

export default ChayilDaughters;
