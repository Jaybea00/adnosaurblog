"use client";

import { useEffect, useState, type CSSProperties } from "react";

const notifications = [
	{
		id: 1,
		logo: "/shopifyicon.png",
		title: "Shopify",
		message:
			"You have a new order for 2 items totaling 75,90 € from online store",
		time: "10min",
	},
	{
		id: 2,
		logo: "/shopifyicon.png",
		title: "Shopify",
		message:
			"You have a new order for 1 item totaling 39,90 € from online store",
		time: "15min",
	},
	{
		id: 3,
		logo: "/shopifyicon.png",
		title: "Shopify",
		message:
			"You have a new order for 3 items totaling 120,50 € from online store",
		time: "22min",
	},
	{
		id: 4,
		logo: "/shopifyicon.png",
		title: "Shopify",
		message:
			"You have a new order for 5 items totaling 199,99 € from online store",
		time: "30min",
	},
];

type AnimatedNotificationsProps = {
	side?: "left" | "right";
	className?: string;
};

export default function AnimatedNotifications({
	side = "right",
	className = "",
}: AnimatedNotificationsProps) {
	const SLIDE_IN_DURATION = 400;
	const HOLD_DURATION = 1500;
	const FADE_OUT_DURATION = 300;
	const RESTART_DELAY = 600;
	const GROUP_SIZE = 4;
	const totalGroups = Math.max(1, Math.ceil(notifications.length / GROUP_SIZE));

	type Phase = "off" | "first" | "second" | "third" | "fourth" | "fade";

	const [phase, setPhase] = useState<Phase>("off");
	const [groupIndex, setGroupIndex] = useState(0);

	useEffect(() => {
		const timeouts: ReturnType<typeof setTimeout>[] = [];
		const stageDuration = SLIDE_IN_DURATION + HOLD_DURATION;

		const startSequence = () => {
			setPhase("first");

			timeouts.push(setTimeout(() => setPhase("second"), stageDuration));
			timeouts.push(setTimeout(() => setPhase("third"), stageDuration * 2));
			timeouts.push(setTimeout(() => setPhase("fourth"), stageDuration * 3));
			timeouts.push(setTimeout(() => setPhase("fade"), stageDuration * 4));
			timeouts.push(
				setTimeout(() => {
					setPhase("off");
					setGroupIndex((prev) => (prev + 1) % totalGroups);
				}, stageDuration * 4 + FADE_OUT_DURATION)
			);
			timeouts.push(
				setTimeout(
					() => startSequence(),
					stageDuration * 4 + FADE_OUT_DURATION + RESTART_DELAY
				)
			);
		};

		startSequence();

		return () => {
			timeouts.forEach(clearTimeout);
		};
	}, [FADE_OUT_DURATION, HOLD_DURATION, RESTART_DELAY, SLIDE_IN_DURATION, totalGroups]);

	const isLeft = side === "left";
const positionClasses = isLeft
		? "[right:-4.5rem] left-auto sm:left-4 sm:right-auto"
		: "[right:-4.5rem] left-auto sm:right-4 lg:-right-20";

	const phaseVisibility: Record<Phase, number> = {
		off: 0,
		first: 1,
		second: 2,
		third: 3,
		fourth: 4,
		fade: 4,
	};

	const getVisibilityState = (index: number) => {
		const visibleCount = phaseVisibility[phase];
		const isActive = index < visibleCount;
		const isFading = phase === "fade";

		return { isActive, isFading };
	};

		const buildAnimationStyle = (
			index: number,
			isVisible: boolean,
			isFading: boolean
		) => {
			const verticalOffset = -28 - index * 4; // stagger deeper cards slightly higher

			return {
				transitionProperty: "transform, opacity",
				transitionDuration: `${isFading ? FADE_OUT_DURATION : SLIDE_IN_DURATION}ms`,
				transitionTimingFunction: isFading
					? "cubic-bezier(0.4, 0, 0.2, 1)"
					: "cubic-bezier(0.18, 0.89, 0.32, 1.28)",
				transform: isVisible
					? "translate3d(0, 0, 0)"
					: `translate3d(0, ${verticalOffset}px, 0)`,
				opacity: isVisible ? (isFading ? 0 : 1) : 0,
				zIndex: 10 - index,
			} satisfies CSSProperties;
		};

	const start = groupIndex * GROUP_SIZE;
	let currentNotifications = notifications.slice(start, start + GROUP_SIZE);
	if (currentNotifications.length < GROUP_SIZE) {
		currentNotifications = currentNotifications.concat(
			notifications.slice(0, GROUP_SIZE - currentNotifications.length)
		);
	}

	return (
		<div
			className={`absolute top-4 ${positionClasses} max-sm:-top-1 space-y-2 z-10 ${className}`}
		>
			{currentNotifications.map((notification, index) => {
				const { isActive, isFading } = getVisibilityState(index);
				const isVisible = isActive || isFading;

				return (
								<div
									key={`${groupIndex}-${index}-${notification.id}`}
									className={`
										bg-[#cccaca] rounded-xl shadow-lg p-1.5 max-w-xs max-sm:max-w-[250px] font-inter
										will-change-transform will-change-opacity
									`}
									style={buildAnimationStyle(index, isVisible, isFading)}
								>
						<div className="flex items-center gap-3 max-w-[250px] ">
							<div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-white shadow-sm">
								<img
									src={notification.logo}
									alt="Shopify logo"
									className="w-6 h-6 object-contain"
								/>
							</div>
							<div className="flex-1 min-w-0">
								<div className="flex items-center justify-between mb-1">
									<span className="font-semibold text-gray-900 text-[12px]">
										{notification.title}
									</span>
									<span className="text-[10px] text-black">
										{notification.time}
									</span>
								</div>
								<p className="text-[9px] text-black leading-[0.8rem] text-left">
									{notification.message}
								</p>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

