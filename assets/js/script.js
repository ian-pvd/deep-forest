/**
 * Theme Scripts
 */

/* Import Utils */
import { debounce, isMobile } from "./utils.js";

/**
 * Toggle Navigation Menu
 * Show & hide the mobile menu on desktop, or when clicked.
 *
 * @return {void}
 */
const toggleNavMenu = () => {
	// Get menu elements.
	const menuToggle = document.getElementById("site-header-menu-toggle");
	const navbar = document.getElementById("site-header-nav");

	// Show & hide the menu aria values based on viewport width.
	const toggleViewportAria = () => {
		if (!isMobile()) {
			menuToggle.setAttribute("aria-expanded", "true");
			navbar.setAttribute("aria-hidden", "false");
		} else {
			menuToggle.setAttribute("aria-expanded", "false");
			navbar.setAttribute("aria-hidden", "true");
		}
	};
	// Set initial states for desktop.
	toggleViewportAria();
	// Toggle menu display on viewport resize.
	window.addEventListener("resize", debounce(toggleViewportAria, 150));

	// Show & hide the mobile menu on click.
	menuToggle.addEventListener("click", function () {
		const expanded =
			menuToggle.getAttribute("aria-expanded") === "true" || false;
		menuToggle.setAttribute("aria-expanded", !expanded);
		navbar.setAttribute("aria-hidden", String(expanded));
	});
};

/* Initialize Scripts */
document.addEventListener("DOMContentLoaded", function () {
	toggleNavMenu();
});
