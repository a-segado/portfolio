"use client";

import { Doto } from "next/font/google";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

const doto = Doto({
	subsets: ["latin"],
	weight: ["400"],
});

export default function ScrapbookName() {
	const sparklePositions = [
		{ top: '10%', left: '15%', delay: 0 },
		{ top: '20%', right: '18%', delay: 0.3 },
		{ bottom: '25%', left: '12%', delay: 0.6 },
		{ bottom: '15%', right: '20%', delay: 0.9 },
		{ top: '45%', left: '8%', delay: 1.2 },
		{ top: '50%', right: '10%', delay: 1.5 },
	];

	return (
		<div className="relative">
			{sparklePositions.map((pos, index) => (
				<motion.div
					key={index}
					className="absolute"
					style={pos}
					initial={{ opacity: 0, scale: 0 }}
					animate={{
						opacity: [0, 1, 0],
						scale: [0, 1, 0],
						rotate: [0, 180, 360],
					}}
					transition={{
						duration: 2,
						repeat: Infinity,
						delay: pos.delay,
						ease: 'easeInOut',
					}}
				>
					<Sparkles className="text-[#9d4edd]" size={24} fill="#c77dff" />
				</motion.div>
			))}

			<motion.div
				className="relative bg-white/90 backdrop-blur-sm px-13 py-8 rounded-lg shadow-2xl"
				style={{
					transform: 'rotate(-2deg)',
					border: '3px solid #7b2cbf',
				}}
				initial={{ scale: 0, rotate: -180 }}
				animate={{ scale: 1, rotate: -2 }}
				transition={{
					type: 'spring',
					stiffness: 260,
					damping: 20,
				}}
			>
				<div className="absolute -top-4 -left-4 w-16 h-8 bg-[#c77dff] opacity-60 rotate-45 shadow-md"></div>
				<div className="absolute -top-4 -right-4 w-16 h-8 bg-[#9d4edd] opacity-60 -rotate-45 shadow-md"></div>
				<div className="absolute -bottom-4 -left-4 w-16 h-8 bg-[#9d4edd] opacity-60 -rotate-45 shadow-md"></div>
				<div className="absolute -bottom-4 -right-4 w-16 h-8 bg-[#c77dff] opacity-60 rotate-45 shadow-md"></div>

				<motion.div
					className="text-center"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5 }}
				>
						<div className={`${doto.className} text-4xl md:text-5xl lg:text-6xl flex justify-center whitespace-nowrap`}>
						{'Angeline Segado'.split('').map((char, index) => (
							<motion.span
								key={index}
								style={{
									fontWeight: 676,
									color: index < 8 ? '#4a1a6b' : '#7b2cbf',
									textShadow: '3px 3px 6px rgba(123, 44, 191, 0.3)',
									display: 'inline-block',
								}}
								animate={{ y: [0, -20, 0] }}
								transition={{
									duration: 2,
									repeat: Infinity,
									ease: 'easeInOut',
									delay: index * 0.1,
								}}
							>
								{char === ' ' ? ' ' : char}
							</motion.span>
						))}
					</div>
				</motion.div>

				<motion.div
					className="absolute -right-12 top-1/4"
					animate={{ rotate: [0, 15, 0] }}
					transition={{ duration: 2, repeat: Infinity }}
				>
					<svg width="80" height="80" viewBox="0 0 80 80">
						<motion.path
							d="M40 10 L50 30 L70 30 L55 45 L60 65 L40 50 L20 65 L25 45 L10 30 L30 30 Z"
							fill="#ffd700"
							stroke="#9d4edd"
							strokeWidth="2"
							initial={{ scale: 0 }}
							animate={{ scale: [1, 1.2, 1] }}
							transition={{ duration: 2, repeat: Infinity }}
						/>
					</svg>
				</motion.div>

				<motion.div
					className="absolute -left-12 bottom-1/4"
					animate={{ rotate: [0, -15, 0] }}
					transition={{ duration: 2.5, repeat: Infinity }}
				>
					<svg width="60" height="60" viewBox="0 0 60 60">
						<motion.circle
							cx="30"
							cy="30"
							r="25"
							fill="#ffb3ff"
							stroke="#7b2cbf"
							strokeWidth="2"
							initial={{ scale: 0 }}
							animate={{ scale: [1, 1.15, 1] }}
							transition={{ duration: 2.5, repeat: Infinity }}
						/>
						<text
							x="30"
							y="38"
							textAnchor="middle"
							fill="#4a1a6b"
							fontSize="24"
							fontFamily="'Permanent Marker', cursive"
						>
							★
						</text>
					</svg>
				</motion.div>

				<motion.div
					className="absolute top-2 right-20 text-3xl"
					animate={{ rotate: 360 }}
					transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
				>
					✨
				</motion.div>
				<motion.div
					className="absolute bottom-4 left-24 text-2xl"
					animate={{ rotate: -360 }}
					transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
				>
					⭐
				</motion.div>
			</motion.div>

			<motion.div
				className="absolute -top-8 left-1/2 transform -translate-x-1/2"
				animate={{ rotate: [0, 5, -5, 0] }}
				transition={{ duration: 3, repeat: Infinity }}
			>
				<div className="w-12 h-16 border-4 border-[#9d4edd] rounded-full opacity-70"></div>
			</motion.div>
		</div>
	);
}