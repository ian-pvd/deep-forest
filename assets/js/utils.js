/**
 * JS Utilities
 */

/* Media queries */
export const media = {
	small: { width: "max", px: 320 },
	mobile: { width: "min", px: 320 },
	tablet: { width: "min", px: 540 },
	desktop: { width: "min", px: 768 },
	large: { width: "min", px: 1280 },
	x_large: { width: "min", px: 1440 },
};

/* Check media query */
export const checkMediaQuery = (key) => {
	// Get viewport width.
	const viewportWidth = Math.max(
		document.documentElement.clientWidth || 0,
		window.innerWidth || 0
	);

	// Get media query.
	const { width, px } = media[key];

	// Check media query.
	if (width === "max") {
		return px <= viewportWidth;
	} else {
		return px >= viewportWidth;
	}
};

export const debounce = (func, wait) => {
	let timerId;

	return () => {
		clearTimeout(timerId);
		timerId = setTimeout(func, wait);
	};
};

export const isMobile = () => {
	if (checkMediaQuery("desktop")) {
		return true;
	} else {
		// Check user agent.
		const userAgent = navigator.userAgent.toLowerCase();
		return /android|blackberry|iemobile|ipad|iphone|ipod|opera mini|webos/i.test(
			userAgent
		);
	}
};
