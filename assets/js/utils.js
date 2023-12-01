/**
 * JS Utilities
 */

/* Media queries */
export const media = {
	small: { width: "max", px: 319 },
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
		return viewportWidth <= px;
	} else {
		return viewportWidth >= px;
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

	// If this is a mobile device, return true.
	// DEV NOTE: Viewports larger than 768px will always get desktop styles.
	// const userAgent = navigator.userAgent.toLowerCase();
	// if (/android|blackberry|iemobile|ipad|iphone|ipod|opera mini|webos/i.test(userAgent)) {
	// 	return true;
	// }

	// If the viewport is 768px or larger, return false.
	if (checkMediaQuery("desktop")) {
		return false;
	}

	// If neither condition is met, assume it's a mobile device.
	return true;
};
