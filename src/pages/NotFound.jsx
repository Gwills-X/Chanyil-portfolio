import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
	return (
		<main className='min-h-screen flex items-center justify-center bg-white px-6'>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className='text-center max-w-md'>
				<h1 className='text-6xl font-serif mb-6'>404</h1>
				<p className='text-lg text-gray-600 mb-8'>
					The page you are looking for doesn’t exist or has been moved.
				</p>

				<Link
					to='/'
					className='inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition'>
					Go back home
				</Link>
			</motion.div>
		</main>
	);
};

export default NotFound;
