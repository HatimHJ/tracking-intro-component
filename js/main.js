const toggler = document.querySelector("#toggler");
const nav = document.querySelector(".nav");

// burger menu
toggler.onclick = () => {
	nav.classList.toggle("show");
	toggler.classList.toggle("close-icon");
};

// stop links from refresh the page
document.querySelectorAll("a").forEach((link) => {
	link.onclick = () => {
		return false;
	};
});
